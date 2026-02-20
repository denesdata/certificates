const TRANSLATIONS = {
    hu: {
        siteSubtitle: 'Tanúsítvány ellenőrzés',
        heroTitle: 'Tanúsítvány ellenőrzés',
        heroSubtitle: 'Ellenőrizze a székelydata által kiállított tanúsítványok hitelességét',
        inputPlaceholder: 'Adja meg a tanúsítvány azonosítóját (pl. SD-2026-0001)',
        verifyButton: 'Ellenőrzés',
        validTitle: 'Érvényes tanúsítvány',
        invalidTitle: 'Tanúsítvány nem található',
        invalidMessage: 'Nem található tanúsítvány ezzel az azonosítóval. Kérjük, ellenőrizze az azonosítót.',
        labelParticipant: 'Résztvevő',
        labelCourse: 'Kurzus',
        labelDate: 'Dátum',
        labelLocation: 'Helyszín',
        labelInstructor: 'Vezető adattudós',
        labelIssuedDate: 'Kiállítás dátuma',
        labelCertificateId: 'Tanúsítvány azonosító',
        labelIssuedBy: 'Kiállította',
        viewCertificate: 'Tanúsítvány megtekintése',
        footerCompany: 'Csala Dénes PFA',
        footerRights: 'Minden jog fenntartva.',

        certTitle: 'Teljesítési oklevél',
        certBody: 'Igazoljuk, hogy',
        certCourseIntro: 'sikeresen elvégezte a következő kurzust:',
        certDateLabel: 'Dátum',
        certLocationLabel: 'Helyszín',
        certInstructorRole: 'Vezető adattudós',
        certIssuedDateLabel: 'Kiállítás dátuma',
        certIssuedBy: 'Kiállította:',
        backToVerify: 'Vissza',
        saveBtn: 'Mentés PDF-be',
        printBtn: 'Nyomtatás',
    },
    en: {
        siteSubtitle: 'Certificate Verification',
        heroTitle: 'Certificate Verification',
        heroSubtitle: 'Verify the authenticity of certificates issued by székelydata',
        inputPlaceholder: 'Enter certificate ID (e.g. SD-2026-0001)',
        verifyButton: 'Verify',
        validTitle: 'Valid Certificate',
        invalidTitle: 'Certificate Not Found',
        invalidMessage: 'No certificate was found with this ID. Please check the ID and try again.',
        labelParticipant: 'Participant',
        labelCourse: 'Course',
        labelDate: 'Date',
        labelLocation: 'Location',
        labelInstructor: 'Lead Data Scientist',
        labelIssuedDate: 'Issued on',
        labelCertificateId: 'Certificate ID',
        labelIssuedBy: 'Issued by',
        viewCertificate: 'View Certificate',
        footerCompany: 'Csala Dénes PFA',
        footerRights: 'All rights reserved.',

        certTitle: 'Certificate of Completion',
        certBody: 'This certifies that',
        certCourseIntro: 'has successfully completed the course:',
        certDateLabel: 'Date',
        certLocationLabel: 'Location',
        certInstructorRole: 'Lead Data Scientist',
        certIssuedDateLabel: 'Issued on',
        certIssuedBy: 'Issued by:',
        backToVerify: 'Back',
        saveBtn: 'Save as PDF',
        printBtn: 'Print',
    },
    ro: {
        siteSubtitle: 'Verificare certificat',
        heroTitle: 'Verificare certificat',
        heroSubtitle: 'Verificați autenticitatea certificatelor emise de székelydata',
        inputPlaceholder: 'Introduceți ID-ul certificatului (ex. SD-2026-0001)',
        verifyButton: 'Verificare',
        validTitle: 'Certificat valid',
        invalidTitle: 'Certificat negăsit',
        invalidMessage: 'Nu a fost găsit niciun certificat cu acest ID. Vă rugăm verificați ID-ul și încercați din nou.',
        labelParticipant: 'Participant',
        labelCourse: 'Curs',
        labelDate: 'Data',
        labelLocation: 'Locație',
        labelInstructor: 'Specialist principal în știința datelor',
        labelIssuedDate: 'Data emiterii',
        labelCertificateId: 'ID certificat',
        labelIssuedBy: 'Emis de',
        viewCertificate: 'Vizualizare certificat',
        footerCompany: 'Csala Dénes PFA',
        footerRights: 'Toate drepturile rezervate.',

        certTitle: 'Certificat de completare',
        certBody: 'Se certifică faptul că',
        certCourseIntro: 'a absolvit cu succes cursul:',
        certDateLabel: 'Data',
        certLocationLabel: 'Locație',
        certInstructorRole: 'Specialist principal în știința datelor',
        certIssuedDateLabel: 'Data emiterii',
        certIssuedBy: 'Emis de:',
        backToVerify: 'Înapoi',
        saveBtn: 'Salvare PDF',
        printBtn: 'Tipărire',
    }
};

const LANG_HTML_MAP = { hu: 'hu', en: 'en', ro: 'ro' };

const DATE_FORMATTERS = {
    hu(dateStr) {
        const d = new Date(dateStr + 'T00:00:00');
        const months = ['január','február','március','április','május','június',
                        'július','augusztus','szeptember','október','november','december'];
        return `${d.getFullYear()}. ${months[d.getMonth()]} ${d.getDate()}.`;
    },
    en(dateStr) {
        const d = new Date(dateStr + 'T00:00:00');
        return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    },
    ro(dateStr) {
        const d = new Date(dateStr + 'T00:00:00');
        const months = ['ianuarie','februarie','martie','aprilie','mai','iunie',
                        'iulie','august','septembrie','octombrie','noiembrie','decembrie'];
        return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    }
};

function getSavedLang() {
    try { return localStorage.getItem('sz-lang') || 'hu'; }
    catch { return 'hu'; }
}

function saveLang(lang) {
    try { localStorage.setItem('sz-lang', lang); } catch {}
}

function t(key, lang) {
    lang = lang || getSavedLang();
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS.hu[key] || key;
}

function formatDate(dateStr, lang) {
    lang = lang || getSavedLang();
    return DATE_FORMATTERS[lang] ? DATE_FORMATTERS[lang](dateStr) : dateStr;
}

function applyTranslations(lang) {
    lang = lang || getSavedLang();
    document.documentElement.lang = LANG_HTML_MAP[lang] || 'hu';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key, lang);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key, lang);
    });
}

function initLangSwitcher(onChange) {
    const lang = getSavedLang();
    const buttons = document.querySelectorAll('.lang-btn');

    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
        btn.addEventListener('click', () => {
            const newLang = btn.dataset.lang;
            saveLang(newLang);
            buttons.forEach(b => b.classList.toggle('active', b.dataset.lang === newLang));
            applyTranslations(newLang);
            if (onChange) onChange(newLang);
        });
    });

    applyTranslations(lang);
    return lang;
}
