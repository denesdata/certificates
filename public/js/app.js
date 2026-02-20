(function () {
    'use strict';

    const form = document.getElementById('verify-form');
    const input = document.getElementById('cert-id');
    const resultEl = document.getElementById('result');

    let currentLang = initLangSwitcher(onLangChange);

    checkUrlForId();

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        verifyCertificate(input.value);
    });

    function onLangChange(lang) {
        currentLang = lang;
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        if (id) verifyCertificate(id);
    }

    function checkUrlForId() {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        if (id) {
            input.value = id;
            verifyCertificate(id);
        }
    }

    function verifyCertificate(rawId) {
        const id = rawId.trim().toUpperCase();
        if (!id) return;

        history.replaceState(null, '', '?id=' + encodeURIComponent(id));

        const cert = lookupCertificate(id);

        if (cert) {
            showValid(cert);
        } else {
            showInvalid();
        }

        resultEl.classList.remove('hidden');
        resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function showValid(cert) {
        const lang = currentLang;
        resultEl.innerHTML = `
            <div class="result-card valid">
                <div class="result-header">
                    <span class="result-icon valid-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                            <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                    </span>
                    <span class="result-title">${t('validTitle', lang)}</span>
                </div>
                <div class="result-details">
                    <div class="result-row">
                        <span class="result-label">${t('labelCertificateId', lang)}</span>
                        <span class="result-value">${esc(cert.id)}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">${t('labelParticipant', lang)}</span>
                        <span class="result-value">${esc(typeof cert.participant === 'object' ? (cert.participant[lang] || cert.participant.hu) : cert.participant)}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">${t('labelCourse', lang)}</span>
                        <span class="result-value">${esc(cert.course[lang] || cert.course.hu)}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">${t('labelDate', lang)}</span>
                        <span class="result-value">${formatDate(cert.date, lang)}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">${t('labelLocation', lang)}</span>
                        <span class="result-value">${esc(cert.location[lang] || cert.location.hu)}</span>
                    </div>
                    <div class="result-row">
                        <span class="result-label">${t('labelInstructor', lang)}</span>
                        <span class="result-value">${esc(typeof cert.instructor === 'object' ? (cert.instructor[lang] || cert.instructor.hu) : cert.instructor)}</span>
                    </div>
                    ${cert.issuedDate ? `<div class="result-row">
                        <span class="result-label">${t('labelIssuedDate', lang)}</span>
                        <span class="result-value">${formatDate(cert.issuedDate, lang)}</span>
                    </div>` : ''}
                    <div class="result-row">
                        <span class="result-label">${t('labelIssuedBy', lang)}</span>
                        <span class="result-value">${esc(cert.issuer.brand)} — ${esc(cert.issuer.company)}${cert.issuer.cui ? ' (CUI: ' + esc(cert.issuer.cui) + ')' : ''}</span>
                    </div>
                </div>
                <div class="result-actions">
                    <a href="certificate.html?id=${encodeURIComponent(cert.id)}" class="view-cert-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/>
                            <line x1="16" y1="17" x2="8" y2="17"/>
                        </svg>
                        ${t('viewCertificate', lang)}
                    </a>
                </div>
            </div>
        `;
    }

    function showInvalid() {
        const lang = currentLang;
        resultEl.innerHTML = `
            <div class="result-card invalid">
                <div class="result-header">
                    <span class="result-icon invalid-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="15" y1="9" x2="9" y2="15"/>
                            <line x1="9" y1="9" x2="15" y2="15"/>
                        </svg>
                    </span>
                    <span class="result-title">${t('invalidTitle', lang)}</span>
                </div>
                <p class="invalid-message">${t('invalidMessage', lang)}</p>
            </div>
        `;
    }

    function esc(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
})();
