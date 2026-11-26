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

    /**
     * html2canvas mis-captures the on-page cert (max-width, shadow, scroll).
     * Clone into a fixed A4-landscape host at the origin, then render that.
     */
    function withExportClone(fn) {
        var source = document.getElementById('certificate');
        var host = document.createElement('div');
        host.setAttribute('data-cert-export', '1');
        host.style.cssText = [
            'position:fixed',
            'left:0',
            'top:0',
            'width:297mm',
            'height:210mm',
            'margin:0',
            'padding:0',
            'overflow:hidden',
            'background:#fefcf3',
            'z-index:2147483647',
            'pointer-events:none'
        ].join(';');

        var clone = source.cloneNode(true);
        clone.removeAttribute('id');
        clone.style.cssText = [
            'width:297mm',
            'height:210mm',
            'max-width:none',
            'max-height:none',
            'margin:0',
            'padding:0',
            'box-shadow:none',
            'aspect-ratio:auto',
            'transform:none',
            'position:relative',
            'left:0',
            'top:0',
            'overflow:hidden',
            'background:#fefcf3'
        ].join(';');

        host.appendChild(clone);
        document.body.appendChild(host);

        var prevX = window.scrollX;
        var prevY = window.scrollY;
        window.scrollTo(0, 0);

        return Promise.resolve()
            .then(function () {
                // Let layout/fonts settle one frame
                return new Promise(function (resolve) {
                    requestAnimationFrame(function () {
                        requestAnimationFrame(resolve);
                    });
                });
            })
            .then(function () {
                return fn(clone);
            })
            .finally(function () {
                if (host.parentNode) host.parentNode.removeChild(host);
                window.scrollTo(prevX, prevY);
            });
    }

    function pdfOptions() {
        return {
            margin: 0,
            filename: pdfFilename(),
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                backgroundColor: '#fefcf3',
                scrollX: 0,
                scrollY: 0,
                x: 0,
                y: 0,
                logging: false
            },
            jsPDF: {
                unit: 'mm',
                format: [297, 210],
                orientation: 'landscape'
            },
            pagebreak: { mode: ['avoid-all'] }
        };
    }

    function savePdf() {
        return withExportClone(function (clone) {
            return html2pdf().set(pdfOptions()).from(clone).save();
        });
    }

    function printPdf() {
        return withExportClone(function (clone) {
            return html2pdf()
                .set(pdfOptions())
                .from(clone)
                .outputPdf('bloburl')
                .then(function (url) {
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
                });
        });
    }

    var saveBtn = document.getElementById('save-pdf-btn');
    if (saveBtn) {
        saveBtn.addEventListener('click', function () {
            savePdf().catch(function (err) {
                console.error(err);
            });
        });
    }

    var printBtn = document.getElementById('print-btn');
    if (printBtn) {
        printBtn.addEventListener('click', function () {
            printPdf().catch(function (err) {
                console.error(err);
            });
        });
    }
})();
