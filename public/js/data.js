/**
 * Certificate database.
 *
 * To issue new certificates, add entries to CERTIFICATES below.
 * Key = certificate ID (format: SD-YYYY-NNNN).
 *
 * Fields:
 *   participant  – { hu, en, ro } full name per language (or string for all)
 *   course       – { hu, en, ro } course name in each language
 *   date         – ISO date string (YYYY-MM-DD) of the course
 *   issuedDate   – ISO date string (YYYY-MM-DD) when the certificate was issued
 *   location     – { hu, en, ro } city + country per language
 *   instructor   – instructor name (with title)
 *   issuer       – { brand, company, cui } organization info
 */

const CERTIFICATES = {
    'SD-2026-0001': {
        id: 'SD-2026-0001',
        participant: {
            hu: 'Mara Gyöngyvér',
            en: 'Gyöngyvér Mara',
            ro: 'Gyöngyvér Mara',
        },
        course: {
            hu: 'Bevezetés az adatvizualizációba',
            en: 'Introduction to Data Visualization',
            ro: 'Introducere în vizualizarea datelor',
        },
        date: '2026-02-16',
        issuedDate: '2026-02-18',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România',
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala',
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430',
        },
    },
};

function lookupCertificate(id) {
    if (!id) return null;
    const normalized = id.trim().toUpperCase();
    return CERTIFICATES[normalized] || null;
}
