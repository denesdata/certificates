/**
 * Certificate database.
 *
 * To issue new certificates, add entries to CERTIFICATES below.
 * Key = certificate ID (format: SD-YYYY-NNNN).
 *
 * Fields:
 *   participant  – full name of the certificate holder
 *   course       – { hu, en, ro } course name in each language
 *   date         – ISO date string (YYYY-MM-DD) of the course
 *   location     – { hu, en, ro } city + country per language
 *   instructor   – instructor name (with title)
 *   issuer       – { brand, company } organization info
 */

const CERTIFICATES = {
    'SD-2026-0001': {
        id: 'SD-2026-0001',
        participant: 'Minta Miklós',
        course: {
            hu: 'Bevezetés az adatvizualizációba',
            en: 'Introduction to Data Visualization',
            ro: 'Introducere în vizualizarea datelor',
        },
        date: '2026-02-16',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România',
        },
        instructor: 'Dr. Csala Dénes',
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
        },
    },
};

function lookupCertificate(id) {
    if (!id) return null;
    const normalized = id.trim().toUpperCase();
    return CERTIFICATES[normalized] || null;
}
