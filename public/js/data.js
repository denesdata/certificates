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
            ro: 'Gyöngyvér Mara'
        },
        course: {
            hu: 'Bevezetés az adatvizualizációba',
            en: 'Introduction to Data Visualization',
            ro: 'Introducere în vizualizarea datelor'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-18',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0002': {
        id: 'SD-2026-0002',
        participant: {
            hu: 'Balázs Tamás',
            en: 'Tamás Balázs',
            ro: 'Tamás Balázs'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0003': {
        id: 'SD-2026-0003',
        participant: {
            hu: 'Bencze Mihály',
            en: 'Mihály Bencze',
            ro: 'Mihály Bencze'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0004': {
        id: 'SD-2026-0004',
        participant: {
            hu: 'Demeter Tihamér',
            en: 'Tihamér Demeter',
            ro: 'Tihamér Demeter'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0005': {
        id: 'SD-2026-0005',
        participant: {
            hu: 'Domokos Balázs',
            en: 'Balázs Domokos',
            ro: 'Balázs Domokos'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0006': {
        id: 'SD-2026-0006',
        participant: {
            hu: 'Feketics Henrietta',
            en: 'Henrietta Feketics',
            ro: 'Henrietta Feketics'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0007': {
        id: 'SD-2026-0007',
        participant: {
            hu: 'Gligor Magdolna-Orsolya',
            en: 'Magdolna-Orsolya Gligor',
            ro: 'Magdolna-Orsolya Gligor'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0008': {
        id: 'SD-2026-0008',
        participant: {
            hu: 'György Szabolcs',
            en: 'Szabolcs György',
            ro: 'Szabolcs György'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0009': {
        id: 'SD-2026-0009',
        participant: {
            hu: 'Hegyeli Attila',
            en: 'Attila Hegyeli',
            ro: 'Attila Hegyeli'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0010': {
        id: 'SD-2026-0010',
        participant: {
            hu: 'Józsa-Buzogány Anna',
            en: 'Anna Józsa-Buzogány',
            ro: 'Anna Józsa-Buzogány'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0011': {
        id: 'SD-2026-0011',
        participant: {
            hu: 'Józsa Koppány Tibor',
            en: 'Koppány Tibor Józsa',
            ro: 'Koppány Tibor Józsa'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0012': {
        id: 'SD-2026-0012',
        participant: {
            hu: 'Kiss Béla',
            en: 'Béla Kiss',
            ro: 'Béla Kiss'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0013': {
        id: 'SD-2026-0013',
        participant: {
            hu: 'Köllő Koppány',
            en: 'Koppány Köllő',
            ro: 'Koppány Köllő'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0014': {
        id: 'SD-2026-0014',
        participant: {
            hu: 'Kovács Dániel',
            en: 'Dániel Kovács',
            ro: 'Dániel Kovács'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0015': {
        id: 'SD-2026-0015',
        participant: {
            hu: 'Kovács Nóra',
            en: 'Nóra Kovács',
            ro: 'Nóra Kovács'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0016': {
        id: 'SD-2026-0016',
        participant: {
            hu: 'Lokodi Attila',
            en: 'Attila Lokodi',
            ro: 'Attila Lokodi'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0017': {
        id: 'SD-2026-0017',
        participant: {
            hu: 'Major Tamás-Levente',
            en: 'Tamás-Levente Major',
            ro: 'Tamás-Levente Major'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0018': {
        id: 'SD-2026-0018',
        participant: {
            hu: 'Makkai Csongor',
            en: 'Csongor Makkai',
            ro: 'Csongor Makkai'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0019': {
        id: 'SD-2026-0019',
        participant: {
            hu: 'Máthé Mátyás',
            en: 'Mátyás Máthé',
            ro: 'Mátyás Máthé'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0020': {
        id: 'SD-2026-0020',
        participant: {
            hu: 'Mátyus Mátyás',
            en: 'Mátyás Mátyus',
            ro: 'Mátyás Mátyus'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0021': {
        id: 'SD-2026-0021',
        participant: {
            hu: 'Mezöfi Tihamér',
            en: 'Tihamér Mezöfi',
            ro: 'Tihamér Mezöfi'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0022': {
        id: 'SD-2026-0022',
        participant: {
            hu: 'Mihály András-Ferenc',
            en: 'András-Ferenc Mihály',
            ro: 'András-Ferenc Mihály'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0023': {
        id: 'SD-2026-0023',
        participant: {
            hu: 'Nágó Dániel',
            en: 'Dániel Nágó',
            ro: 'Dániel Nágó'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0024': {
        id: 'SD-2026-0024',
        participant: {
            hu: 'Nagy Richárd-Sándor',
            en: 'Richárd-Sándor Nagy',
            ro: 'Richárd-Sándor Nagy'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0025': {
        id: 'SD-2026-0025',
        participant: {
            hu: 'Pap András',
            en: 'András Pap',
            ro: 'András Pap'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0026': {
        id: 'SD-2026-0026',
        participant: {
            hu: 'Péter Róbert',
            en: 'Róbert Péter',
            ro: 'Róbert Péter'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0027': {
        id: 'SD-2026-0027',
        participant: {
            hu: 'Székely Blanka Nikolett',
            en: 'Blanka Nikolett Székely',
            ro: 'Blanka Nikolett Székely'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0028': {
        id: 'SD-2026-0028',
        participant: {
            hu: 'Szenner Emőke',
            en: 'Emőke Szenner',
            ro: 'Emőke Szenner'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0029': {
        id: 'SD-2026-0029',
        participant: {
            hu: 'Tököli Bálint',
            en: 'Bálint Tököli',
            ro: 'Bálint Tököli'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0030': {
        id: 'SD-2026-0030',
        participant: {
            hu: 'Voloncs Botond',
            en: 'Botond Voloncs',
            ro: 'Botond Voloncs'
        },
        course: {
            hu: 'NVivo kvalitatív adatelemző szoftverhasználat tréning',
            en: 'NVivo qualitative data analysis software training',
            ro: 'Program de formare de competențe digitale în analiza calitativă a datelor'
        },
        date: '2026-03-27',
        issuedDate: '2026-03-27',
        location: {
            hu: 'Csíkszereda, Románia',
            en: 'Miercurea Ciuc, Romania',
            ro: 'Miercurea Ciuc, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0031': {
        id: 'SD-2026-0031',
        participant: {
            hu: 'Balázs Kriszta',
            en: 'Kriszta Balázs',
            ro: 'Kriszta Balázs'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0032': {
        id: 'SD-2026-0032',
        participant: {
            hu: 'Bálint Edina',
            en: 'Edina Bálint',
            ro: 'Edina Bálint'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0033': {
        id: 'SD-2026-0033',
        participant: {
            hu: 'Barabás Szidónia',
            en: 'Szidónia Barabás',
            ro: 'Szidónia Barabás'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0034': {
        id: 'SD-2026-0034',
        participant: {
            hu: 'Baricz Dorottya',
            en: 'Dorottya Baricz',
            ro: 'Dorottya Baricz'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0035': {
        id: 'SD-2026-0035',
        participant: {
            hu: 'Bocskor Boglárka',
            en: 'Boglárka Bocskor',
            ro: 'Boglárka Bocskor'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0036': {
        id: 'SD-2026-0036',
        participant: {
            hu: 'Bogye Dalma-Regina',
            en: 'Dalma-Regina Bogye',
            ro: 'Dalma-Regina Bogye'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0037': {
        id: 'SD-2026-0037',
        participant: {
            hu: 'Both-Fodor Tímea',
            en: 'Tímea Both-Fodor',
            ro: 'Tímea Both-Fodor'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0038': {
        id: 'SD-2026-0038',
        participant: {
            hu: 'Csukas Anikó',
            en: 'Anikó Csukas',
            ro: 'Anikó Csukas'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0039': {
        id: 'SD-2026-0039',
        participant: {
            hu: 'Dénes Orsolya',
            en: 'Orsolya Dénes',
            ro: 'Orsolya Dénes'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0040': {
        id: 'SD-2026-0040',
        participant: {
            hu: 'Domokos Emese',
            en: 'Emese Domokos',
            ro: 'Emese Domokos'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0041': {
        id: 'SD-2026-0041',
        participant: {
            hu: 'Ferencz Pál-Zalán',
            en: 'Pál-Zalán Ferencz',
            ro: 'Pál-Zalán Ferencz'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0042': {
        id: 'SD-2026-0042',
        participant: {
            hu: 'Geréd Boglárka',
            en: 'Boglárka Geréd',
            ro: 'Boglárka Geréd'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0043': {
        id: 'SD-2026-0043',
        participant: {
            hu: 'György Kriszta',
            en: 'Kriszta György',
            ro: 'Kriszta György'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0044': {
        id: 'SD-2026-0044',
        participant: {
            hu: 'György Vivien',
            en: 'Vivien György',
            ro: 'Vivien György'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0045': {
        id: 'SD-2026-0045',
        participant: {
            hu: 'Handra Noémi',
            en: 'Noémi Handra',
            ro: 'Noémi Handra'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0046': {
        id: 'SD-2026-0046',
        participant: {
            hu: 'Joós Erika-Enikő',
            en: 'Erika-Enikő Joós',
            ro: 'Erika-Enikő Joós'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0047': {
        id: 'SD-2026-0047',
        participant: {
            hu: 'Kaján Rebeka-Erzsébet',
            en: 'Rebeka-Erzsébet Kaján',
            ro: 'Rebeka-Erzsébet Kaján'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0048': {
        id: 'SD-2026-0048',
        participant: {
            hu: 'Kánya Szende',
            en: 'Szende Kánya',
            ro: 'Szende Kánya'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0049': {
        id: 'SD-2026-0049',
        participant: {
            hu: 'Kelemen Andrea',
            en: 'Andrea Kelemen',
            ro: 'Andrea Kelemen'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0050': {
        id: 'SD-2026-0050',
        participant: {
            hu: 'Kerekes Ervin',
            en: 'Ervin Kerekes',
            ro: 'Ervin Kerekes'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0051': {
        id: 'SD-2026-0051',
        participant: {
            hu: 'Kótai Nóra',
            en: 'Nóra Kótai',
            ro: 'Nóra Kótai'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0052': {
        id: 'SD-2026-0052',
        participant: {
            hu: 'Kristály Noémi',
            en: 'Noémi Kristály',
            ro: 'Noémi Kristály'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0053': {
        id: 'SD-2026-0053',
        participant: {
            hu: 'Lakatos Ágnes',
            en: 'Ágnes Lakatos',
            ro: 'Ágnes Lakatos'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0054': {
        id: 'SD-2026-0054',
        participant: {
            hu: 'Laszlo Barna Domokos',
            en: 'Barna Domokos Laszlo',
            ro: 'Barna Domokos Laszlo'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0055': {
        id: 'SD-2026-0055',
        participant: {
            hu: 'Luka Borbála',
            en: 'Borbála Luka',
            ro: 'Borbála Luka'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0056': {
        id: 'SD-2026-0056',
        participant: {
            hu: 'Magyarosi Ernő',
            en: 'Ernő Magyarosi',
            ro: 'Ernő Magyarosi'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0057': {
        id: 'SD-2026-0057',
        participant: {
            hu: 'Márk Botond',
            en: 'Botond Márk',
            ro: 'Botond Márk'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0058': {
        id: 'SD-2026-0058',
        participant: {
            hu: 'Márton Boróka',
            en: 'Boróka Márton',
            ro: 'Boróka Márton'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0059': {
        id: 'SD-2026-0059',
        participant: {
            hu: 'Máté Csilla-Rozália',
            en: 'Csilla-Rozália Máté',
            ro: 'Csilla-Rozália Máté'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0060': {
        id: 'SD-2026-0060',
        participant: {
            hu: 'Mihály Eszter',
            en: 'Eszter Mihály',
            ro: 'Eszter Mihály'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0061': {
        id: 'SD-2026-0061',
        participant: {
            hu: 'Mihály Renáta',
            en: 'Renáta Mihály',
            ro: 'Renáta Mihály'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0062': {
        id: 'SD-2026-0062',
        participant: {
            hu: 'Mihály Tamara',
            en: 'Tamara Mihály',
            ro: 'Tamara Mihály'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0063': {
        id: 'SD-2026-0063',
        participant: {
            hu: 'Miklos Eniko',
            en: 'Eniko Miklos',
            ro: 'Eniko Miklos'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0064': {
        id: 'SD-2026-0064',
        participant: {
            hu: 'Nistor Orsolya',
            en: 'Orsolya Nistor',
            ro: 'Orsolya Nistor'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0065': {
        id: 'SD-2026-0065',
        participant: {
            hu: 'Nuszbaum Jessica',
            en: 'Jessica Nuszbaum',
            ro: 'Jessica Nuszbaum'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0066': {
        id: 'SD-2026-0066',
        participant: {
            hu: 'Opra-Lőrincz Szilvia',
            en: 'Szilvia Opra-Lőrincz',
            ro: 'Szilvia Opra-Lőrincz'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0067': {
        id: 'SD-2026-0067',
        participant: {
            hu: 'Orbán Anita',
            en: 'Anita Orbán',
            ro: 'Anita Orbán'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0068': {
        id: 'SD-2026-0068',
        participant: {
            hu: 'Orbán Ildikó-Karola',
            en: 'Ildikó-Karola Orbán',
            ro: 'Ildikó-Karola Orbán'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0069': {
        id: 'SD-2026-0069',
        participant: {
            hu: 'Para Anna',
            en: 'Anna Para',
            ro: 'Anna Para'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0070': {
        id: 'SD-2026-0070',
        participant: {
            hu: 'Potyó Edina',
            en: 'Edina Potyó',
            ro: 'Edina Potyó'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0071': {
        id: 'SD-2026-0071',
        participant: {
            hu: 'Ráduly Richárd Tamás',
            en: 'Richárd Tamás Ráduly',
            ro: 'Richárd Tamás Ráduly'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0072': {
        id: 'SD-2026-0072',
        participant: {
            hu: 'Sibianu János-Márk',
            en: 'János-Márk Sibianu',
            ro: 'János-Márk Sibianu'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0073': {
        id: 'SD-2026-0073',
        participant: {
            hu: 'Szabó Chyntia',
            en: 'Chyntia Szabó',
            ro: 'Chyntia Szabó'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0074': {
        id: 'SD-2026-0074',
        participant: {
            hu: 'Szabó Dávid',
            en: 'Dávid Szabó',
            ro: 'Dávid Szabó'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0075': {
        id: 'SD-2026-0075',
        participant: {
            hu: 'Szabó Zoltán Lajos',
            en: 'Zoltán Lajos Szabó',
            ro: 'Zoltán Lajos Szabó'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0076': {
        id: 'SD-2026-0076',
        participant: {
            hu: 'Szakács Hanna-Ingrid',
            en: 'Hanna-Ingrid Szakács',
            ro: 'Hanna-Ingrid Szakács'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0077': {
        id: 'SD-2026-0077',
        participant: {
            hu: 'Szász Bence',
            en: 'Bence Szász',
            ro: 'Bence Szász'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0078': {
        id: 'SD-2026-0078',
        participant: {
            hu: 'Szász Dávid',
            en: 'Dávid Szász',
            ro: 'Dávid Szász'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0079': {
        id: 'SD-2026-0079',
        participant: {
            hu: 'Szász Róbert',
            en: 'Róbert Szász',
            ro: 'Róbert Szász'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0080': {
        id: 'SD-2026-0080',
        participant: {
            hu: 'Szekeres Orsolya',
            en: 'Orsolya Szekeres',
            ro: 'Orsolya Szekeres'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0081': {
        id: 'SD-2026-0081',
        participant: {
            hu: 'Szigyártó Emőke',
            en: 'Emőke Szigyártó',
            ro: 'Emőke Szigyártó'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0082': {
        id: 'SD-2026-0082',
        participant: {
            hu: 'Szilágyi Örs',
            en: 'Örs Szilágyi',
            ro: 'Örs Szilágyi'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0083': {
        id: 'SD-2026-0083',
        participant: {
            hu: 'Tamás Norbert-Levente',
            en: 'Norbert-Levente Tamás',
            ro: 'Norbert-Levente Tamás'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0084': {
        id: 'SD-2026-0084',
        participant: {
            hu: 'Tóth Kincső-Dorottya',
            en: 'Kincső-Dorottya Tóth',
            ro: 'Kincső-Dorottya Tóth'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0085': {
        id: 'SD-2026-0085',
        participant: {
            hu: 'Trinfa Sándor',
            en: 'Sándor Trinfa',
            ro: 'Sándor Trinfa'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0086': {
        id: 'SD-2026-0086',
        participant: {
            hu: 'Vitos Zalán',
            en: 'Zalán Vitos',
            ro: 'Zalán Vitos'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0087': {
        id: 'SD-2026-0087',
        participant: {
            hu: 'Csog Szilárd',
            en: 'Szilárd Csog',
            ro: 'Szilárd Csog'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0088': {
        id: 'SD-2026-0088',
        participant: {
            hu: 'Gyerő Adorján',
            en: 'Adorján Gyerő',
            ro: 'Adorján Gyerő'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0089': {
        id: 'SD-2026-0089',
        participant: {
            hu: 'Maier Aliz',
            en: 'Aliz Maier',
            ro: 'Aliz Maier'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0090': {
        id: 'SD-2026-0090',
        participant: {
            hu: 'Makó Tamás',
            en: 'Tamás Makó',
            ro: 'Tamás Makó'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0091': {
        id: 'SD-2026-0091',
        participant: {
            hu: 'Sipos Nikoletta',
            en: 'Nikoletta Sipos',
            ro: 'Nikoletta Sipos'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0092': {
        id: 'SD-2026-0092',
        participant: {
            hu: 'Szász Emil-Arnold',
            en: 'Emil-Arnold Szász',
            ro: 'Emil-Arnold Szász'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0093': {
        id: 'SD-2026-0093',
        participant: {
            hu: 'Szopos Magor',
            en: 'Magor Szopos',
            ro: 'Magor Szopos'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    },
    'SD-2026-0094': {
        id: 'SD-2026-0094',
        participant: {
            hu: 'Teleki Hunor-Attila',
            en: 'Hunor-Attila Teleki',
            ro: 'Hunor-Attila Teleki'
        },
        course: {
            hu: 'Adatvizualizáció és gépi tanulás a biotech szektorban',
            en: 'Data visualization and machine learning in the biotech sector',
            ro: 'Program de formare de competențe digitale în analiză de date, vizualizare și machine learning pentru sectorul biotehnologic'
        },
        date: '2026-02-16',
        issuedDate: '2026-02-16',
        location: {
            hu: 'Marosvásárhely, Románia',
            en: 'Targu Mures, Romania',
            ro: 'Târgu Mureș, România'
        },
        instructor: {
            hu: 'Dr. Csala Dénes',
            en: 'Dr. Dénes Csala',
            ro: 'Dr. Dénes Csala'
        },
        issuer: {
            brand: 'székelydata',
            company: 'Csala Dénes PFA',
            cui: '38022430'
        }
    }
};

function lookupCertificate(id) {
    if (!id) return null;
    const normalized = id.trim().toUpperCase();
    return CERTIFICATES[normalized] || null;
}
