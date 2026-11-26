(function () {
    'use strict';

    const params = new URLSearchParams(window.location.search);
    const certId = params.get('id');
    const cert = certId ? lookupCertificate(certId) : null;

    const wrapper = document.getElementById('certificate-wrapper');
    const notFound = document.getElementById('cert-not-found');

    if (!cert) {
        wrapper.classList.add('hidden');
        notFound.classList.remove('hidden');
        initLangSwitcher();
        return;
    }

    wrapper.classList.remove('hidden');
    notFound.classList.add('hidden');

    let currentLang = initLangSwitcher(onLangChange);
    fillCertificate(currentLang);

    function onLangChange(lang) {
        currentLang = lang;
        fillCertificate(lang);
    }

    function fillCertificate(lang) {
        var participant = typeof cert.participant === 'object'
            ? (cert.participant[lang] || cert.participant.hu) : cert.participant;
        document.getElementById('cert-name').textContent = participant;
        document.getElementById('cert-course').textContent = cert.course[lang] || cert.course.hu;
        document.getElementById('cert-location').textContent = cert.location[lang] || cert.location.hu;
        document.getElementById('cert-date').textContent = formatDate(cert.date, lang);
        document.getElementById('cert-issued-date').textContent =
            cert.issuedDate ? formatDate(cert.issuedDate, lang) : '';
        var instructor = typeof cert.instructor === 'object'
            ? (cert.instructor[lang] || cert.instructor.hu) : cert.instructor;
        document.getElementById('cert-instructor').textContent = instructor;
        document.getElementById('cert-id-display').textContent = cert.id;
        var companyText = cert.issuer.brand + ' — ' + cert.issuer.company;
        if (cert.issuer.cui) companyText += ' (CUI: ' + cert.issuer.cui + ')';
        document.getElementById('cert-company-name').textContent = companyText;

        document.title = 'székelydata — ' + t('certTitle', lang) + ' — ' + participant;

        generateQR();
    }

    function generateQR() {
        const container = document.getElementById('cert-qrcode');
        container.innerHTML = '';

        const baseUrl = 'https://cert.csaladen.es';
        const verifyUrl = baseUrl + '/?id=' + encodeURIComponent(cert.id);

        if (typeof qrcode === 'undefined') return;

        var qr = qrcode(0, 'M');
        qr.addData(verifyUrl);
        qr.make();

        container.innerHTML = qr.createSvgTag(3, 0);
    }

    function pdfFilename() {
        var participant = typeof cert.participant === 'object'
            ? (cert.participant[currentLang] || cert.participant.hu) : cert.participant;
        return cert.id + ' — ' + participant + '.pdf';
    }

    function nextFrame() {
        return new Promise(function (resolve) {
            requestAnimationFrame(function () {
                requestAnimationFrame(resolve);
            });
        });
    }

    /**
     * Capture the on-page certificate at a fixed A4 landscape CSS size.
     * Do NOT pass html2canvas windowWidth/windowHeight (= known left-crop bug).
     * Paint the canvas into a 297×210mm jsPDF page at (0,0).
     */
    function buildPdf() {
        var el = document.getElementById('certificate');
        var wrap = document.getElementById('certificate-wrapper');
        var toolbar = document.querySelector('.toolbar');
        var JsPDF = window.jspdf && window.jspdf.jsPDF;

        if (typeof html2canvas !== 'function' || !JsPDF) {
            return Promise.reject(new Error('PDF libraries not loaded'));
        }

        var saved = {
            el: el.style.cssText,
            wrap: wrap.style.cssText,
            toolbar: toolbar ? toolbar.style.cssText : '',
            x: window.scrollX,
            y: window.scrollY
        };

        if (toolbar) toolbar.style.display = 'none';
        wrap.style.cssText = 'padding:0;margin:0;min-height:0;display:flex;justify-content:center;';
        el.style.cssText = [
            'width:297mm',
            'height:210mm',
            'max-width:none',
            'max-height:none',
            'margin:0',
            'box-shadow:none',
            'aspect-ratio:auto',
            'position:relative',
            'overflow:hidden',
            'background:#fefcf3'
        ].join(';');

        window.scrollTo(0, 0);

        return nextFrame()
            .then(function () {
                return html2canvas(el, {
                    scale: 2,
                    useCORS: true,
                    allowTaint: true,
                    backgroundColor: '#fefcf3',
                    scrollX: 0,
                    scrollY: 0,
                    logging: false
                });
            })
            .then(function (canvas) {
                var pdf = new JsPDF({
                    orientation: 'landscape',
                    unit: 'mm',
                    format: 'a4',
                    compress: true
                });
                var img = canvas.toDataURL('image/jpeg', 0.98);
                pdf.addImage(img, 'JPEG', 0, 0, 297, 210);
                return pdf;
            })
            .finally(function () {
                el.style.cssText = saved.el;
                wrap.style.cssText = saved.wrap;
                if (toolbar) toolbar.style.cssText = saved.toolbar;
                window.scrollTo(saved.x, saved.y);
            });
    }

    var saveBtn = document.getElementById('save-pdf-btn');
    if (saveBtn) {
        saveBtn.addEventListener('click', function () {
            saveBtn.disabled = true;
            buildPdf()
                .then(function (pdf) {
                    pdf.save(pdfFilename());
                })
                .catch(function (err) {
                    console.error(err);
                    alert('PDF export failed. Please try again.');
                })
                .finally(function () {
                    saveBtn.disabled = false;
                });
        });
    }

    var printBtn = document.getElementById('print-btn');
    if (printBtn) {
        printBtn.addEventListener('click', function () {
            printBtn.disabled = true;
            buildPdf()
                .then(function (pdf) {
                    var url = pdf.output('bloburl');
                    var frame = document.createElement('iframe');
                    frame.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0;';
                    frame.src = url;
                    document.body.appendChild(frame);
                    frame.onload = function () {
                        try {
                            frame.contentWindow.focus();
                            frame.contentWindow.print();
                        } finally {
                            setTimeout(function () {
                                if (frame.parentNode) frame.parentNode.removeChild(frame);
                                URL.revokeObjectURL(url);
                            }, 1500);
                        }
                    };
                })
                .catch(function (err) {
                    console.error(err);
                    window.print();
                })
                .finally(function () {
                    printBtn.disabled = false;
                });
        });
    }
})();
