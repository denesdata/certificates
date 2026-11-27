(function () {
    'use strict';

    // Fixed export geometry — independent of device screen
    var EXPORT_W = 1123; // ~297mm at 96dpi
    var EXPORT_H = 794;  // ~210mm at 96dpi

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

    function absolutizeUrl(url) {
        try {
            return new URL(url, window.location.href).href;
        } catch (e) {
            return url;
        }
    }

    function collectStylesHtml() {
        var parts = [];
        document.querySelectorAll('link[rel="stylesheet"]').forEach(function (link) {
            parts.push('<link rel="stylesheet" href="' + absolutizeUrl(link.href) + '">');
        });
        document.querySelectorAll('style').forEach(function (style) {
            parts.push('<style>' + style.textContent + '</style>');
        });
        // Force desktop A4 layout inside the export iframe (ignore phone media queries)
        parts.push(
            '<style>' +
            'html,body{margin:0;padding:0;width:' + EXPORT_W + 'px;height:' + EXPORT_H + 'px;' +
            'overflow:hidden;background:#fefcf3;}' +
            '.certificate{' +
            'width:' + EXPORT_W + 'px!important;height:' + EXPORT_H + 'px!important;' +
            'max-width:none!important;max-height:none!important;min-height:0!important;' +
            'margin:0!important;box-shadow:none!important;aspect-ratio:auto!important;' +
            'position:relative!important;overflow:hidden!important;background:#fefcf3!important;' +
            '}' +
            '.cert-inner{padding:2rem 2.5rem 1.2rem!important;}' +
            '.cert-title{font-size:2.4rem!important;}' +
            '.cert-name{font-size:2rem!important;}' +
            '.cert-course{font-size:1.35rem!important;}' +
            '.cert-footer{flex-direction:row!important;align-items:flex-end!important;gap:0!important;' +
            'justify-content:space-between!important;width:100%!important;max-width:540px!important;}' +
            '.cert-details{flex-direction:row!important;gap:3rem!important;}' +
            '.toolbar,.no-print{display:none!important;}' +
            '</style>'
        );
        return parts.join('');
    }

    function waitForAssets(doc) {
        var images = Array.prototype.slice.call(doc.images || []);
        var imgWait = Promise.all(images.map(function (img) {
            if (img.complete) return Promise.resolve();
            return new Promise(function (resolve) {
                img.onload = img.onerror = resolve;
            });
        }));
        var fontWait = (doc.fonts && doc.fonts.ready) ? doc.fonts.ready : Promise.resolve();
        return Promise.all([imgWait, fontWait]).then(function () {
            return new Promise(function (resolve) {
                requestAnimationFrame(function () {
                    requestAnimationFrame(resolve);
                });
            });
        });
    }

    /**
     * Render PDF from a fixed-size iframe so phone viewport / mobile CSS
     * cannot affect layout. Always A4 landscape desktop certificate.
     */
    function buildPdf() {
        var JsPDF = window.jspdf && window.jspdf.jsPDF;
        if (typeof html2canvas !== 'function' || !JsPDF) {
            return Promise.reject(new Error('PDF libraries not loaded'));
        }

        var source = document.getElementById('certificate');
        var iframe = document.createElement('iframe');
        iframe.setAttribute('aria-hidden', 'true');
        // Off-screen but fully painted (opacity:0 can yield a blank canvas on mobile)
        iframe.style.cssText = [
            'position:fixed',
            'left:-10000px',
            'top:0',
            'width:' + EXPORT_W + 'px',
            'height:' + EXPORT_H + 'px',
            'border:0',
            'pointer-events:none',
            'z-index:-1'
        ].join(';');
        document.body.appendChild(iframe);

        var idoc = iframe.contentDocument;
        var cloneHtml = source.outerHTML;
        // Make image srcs absolute so they resolve inside the iframe
        cloneHtml = cloneHtml.replace(
            /(src=["'])([^"']+)(["'])/gi,
            function (_, a, url, b) {
                return a + absolutizeUrl(url) + b;
            }
        );

        idoc.open();
        idoc.write(
            '<!DOCTYPE html><html><head>' +
            '<meta charset="UTF-8">' +
            '<base href="' + absolutizeUrl('./') + '">' +
            collectStylesHtml() +
            '</head><body>' + cloneHtml + '</body></html>'
        );
        idoc.close();

        return waitForAssets(idoc)
            .then(function () {
                var target = idoc.querySelector('.certificate');
                if (!target) throw new Error('Export certificate not found');
                return html2canvas(target, {
                    scale: 2,
                    useCORS: true,
                    allowTaint: true,
                    backgroundColor: '#fefcf3',
                    scrollX: 0,
                    scrollY: 0,
                    logging: false
                    // Do not set windowWidth/windowHeight — causes left-crop in some builds
                });
            })
            .then(function (canvas) {
                var pdf = new JsPDF({
                    orientation: 'landscape',
                    unit: 'mm',
                    format: 'a4',
                    compress: true
                });
                pdf.addImage(canvas.toDataURL('image/jpeg', 0.98), 'JPEG', 0, 0, 297, 210);
                return pdf;
            })
            .finally(function () {
                if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
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
