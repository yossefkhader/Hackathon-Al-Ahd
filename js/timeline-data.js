// Timeline data

const erasData = [
    {
        id: 1,
        title: "قبل الإسلام",
        startYear: 0,
        endYear: 610,
    },
    {
        id: 2,
        title: "الفتوحات الإسلامية",
        startYear: 610,
        endYear: 750,    
    },
    {
        id: 3,
    }
];

const timelineData = {
    1 : [
        {
            id: 1,
            year: 637,
            title: "Muslim Conquest of Jerusalem",
            description: `بعد انتصار المسلمين في معركة اليرموك سنة 15 هـ، انفتح الطريق أمامهم نحو بقية مدن الشام، ومنها القدس. حاصر القائد أبو عبيدة بن الجراح رضي الله عنه المدينة، وكان إلى جانبه القائد خالد بن الوليد، ولم يدخلها المسلمون مباشرة، بل استمر الحصار عدة أشهر.
`,
            images: [
                "https://cdn.britannica.com/34/249434-050-B5256DCA/Al-Aqsa-Mosque-on-the-territory-of-the-interior-of-the-Temple-Mount-in-the-Old-City-in-Jerusalem-Israel.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/f/f8/Entry_of_Caliph_Umar_into_Jerusalem%2C_637.jpg",
                "https://themuslim500.com/wp-content/uploads/2018/08/umar-enters-jerusalem-painting-1050x600.jpg"
            ],

            location: {
                lat: 31.7781,
                lng: 35.2354,
            }
        },
    ],
    2 : [
        {
            id: 2,
            year: 691,
            title: "Construction of the Dome of the Rock",
            description: "The Umayyad Caliph Abd al-Malik ibn Marwan builds the Dome of the Rock on the Temple Mount. The magnificent octagonal structure with its golden dome becomes one of the earliest and most significant examples of Islamic architecture. It was built over the Foundation Stone, which holds importance in Islamic, Jewish, and Christian traditions.",
            images: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Jerusalem-2013-Temple_Mount-Dome_of_the_Rock_%28NE_exposure%29.jpg/1200px-Jerusalem-2013-Temple_Mount-Dome_of_the_Rock_%28NE_exposure%29.jpg",
                "https://www.islamiclandmarks.com/wp-content/uploads/2016/02/masjid_dome_rock.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Jerusalem_Dome_of_the_rock_BW_14.JPG/1200px-Jerusalem_Dome_of_the_rock_BW_14.JPG"
            ],
            location: {
                lat: 31.7781,
                lng: 35.2356,
            }
        },
        {
            id: 3,
            year: 705,
            title: "Construction of Al-Aqsa Mosque",
            description: "The first version of Al-Aqsa Mosque is built by the Umayyad Caliph Al-Walid I, son of Abd al-Malik. This initial construction established a large congregational mosque on the southern end of the Temple Mount, designed to accommodate thousands of worshippers. The original structure had 15 aisles and a wooden dome.",
            images: [
                "https://upload.wikimedia.org/wikipedia/commons/8/87/Jerusalem-2013-Temple_Mount-Al-Aqsa_Mosque_%28NE_exposure%29.jpg",
                "https://cdn.britannica.com/34/249434-050-B5256DCA/Al-Aqsa-Mosque-on-the-territory-of-the-Temple-Mount-in-the-Old-City-in-Jerusalem-Israel.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Dome_of_the_Al-Aqsa_Mosque_%2820160%29.jpg/1200px-Dome_of_the_Al-Aqsa_Mosque_%2820160%29.jpg"
            ],
            location: {
                    lat: 31.7764,
                    lng: 35.2354,
            }
        },
        {
            id: 4,
            year: 746,
            title: "Earthquake Damages Al-Aqsa",
            description: "A major earthquake severely damages the original Al-Aqsa Mosque. This natural disaster necessitated significant reconstruction and marked the first of several rebuildings that would occur throughout the mosque's history due to earthquakes and other calamities.",
            images: [
                "https://upload.wikimedia.org/wikipedia/commons/c/ce/Al-Aqsa_Mosque_%28Temple_Mount%2C_Jerusalem%2C_2008%29.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Mesjid_el-Aksa_and_Jami_el-Aksa_in_the_1841_Aldrich_and_Symonds_map_of_Jerusalem_%28cropped%29.jpg/220px-Mesjid_el-Aksa_and_Jami_el-Aksa_in_the_1841_Aldrich_and_Symonds_map_of_Jerusalem_%28cropped%29.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Dome_of_the_Al-Aqsa_Mosque_%2820160%29.jpg/1200px-Dome_of_the_Al-Aqsa_Mosque_%2820160%29.jpg"
            ],
            location: {
                lat: 31.7764,
                lng: 35.2354,
            }
        },
    ],
    3 : [ {
            id: 5,
            year: 758,
            title: "Abbasid Reconstruction",
            description: "The Abbasid Caliph Al-Mansur orders the reconstruction of Al-Aqsa Mosque following the earthquake damage. This marks the transition of the site from Umayyad to Abbasid patronage, with architectural modifications reflecting the newer dynasty's preferences.",
            images: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Interior_of_the_Al-Aksa_mosque%2C_Jerusalem._Chromolithograph_Wellcome_V0050126.jpg/220px-Interior_of_the_Al-Aksa_mosque%2C_Jerusalem._Chromolithograph_Wellcome_V0050126.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/c/ce/Al-Aqsa_Mosque_%28Temple_Mount%2C_Jerusalem%2C_2008%29.jpg",
                "https://static.timesofisrael.com/www/uploads/2019/10/F191006YS33-e1570371205727-1024x640.jpg"
            ],
            location: {
                lat: 31.7764,
                lng: 35.2354,
            }
        },
    ],
    4 : [
        
        {
            id: 6,
            year: 780,
            title: "Al-Mahdi's Expansion",
            description: "Abbasid Caliph Al-Mahdi expands Al-Aqsa Mosque, significantly enlarging its capacity. This expansion increased the mosque to fifteen aisles with a central dome. Al-Mahdi's work represented the most substantial enlargement of the mosque in its early history, creating a grand structure that reflected the growing importance of Jerusalem in the Islamic world. The expanded mosque could accommodate larger numbers of worshippers, particularly during major religious festivals and Friday prayers.",
            images: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Al_Aqsa_Mosque_interior.jpg/1280px-Al_Aqsa_Mosque_interior.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Interior_of_the_Al-Aksa_mosque%2C_Jerusalem._Chromolithograph_Wellcome_V0050126.jpg/1280px-Interior_of_the_Al-Aksa_mosque%2C_Jerusalem._Chromolithograph_Wellcome_V0050126.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Al_Aqsa_Mosque_-_Temple_Mount_-_Jerusalem_%2812390288275%29.jpg/1280px-Al_Aqsa_Mosque_-_Temple_Mount_-_Jerusalem_%2812390288275%29.jpg"
            ],
            location: {
                lat: 31.7764,
                lng: 35.2346,
            }
        },
    ]
};

