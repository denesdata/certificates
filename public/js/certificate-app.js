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

        document.title = 'székelydata — ' + t('certTitle', lang) + ' — ' + cert.participant;

        generateQR();
    }

    function generateQR() {
        const container = document.getElementById('cert-qrcode');
        container.innerHTML = '';

        const verifyUrl = window.location.origin + '/?id=' + encodeURIComponent(cert.id);

        if (typeof qrcode === 'undefined') return;

        var qr = qrcode(0, 'M');
        qr.addData(verifyUrl);
        qr.make();

        container.innerHTML = qr.createSvgTag(3, 0);
    }
})();
