// Timeline data
const timelineData = [
    {
        id: 1,
        year: 637,
        title: "Muslim Conquest of Jerusalem",
        description: "Caliph Umar ibn al-Khattab, the second Rashidun Caliph, conquers Jerusalem. According to historical accounts, Umar was invited by Patriarch Sophronius to pray inside the Church of the Holy Sepulchre but declined to avoid setting a precedent for converting churches to mosques. Instead, he prayed outside where a modest prayer house would later be built, marking the beginning of Muslim presence at the site.",
        images: [
            "https://cdn.britannica.com/34/249434-050-B5256DCA/Al-Aqsa-Mosque-on-the-territory-of-the-interior-of-the-Temple-Mount-in-the-Old-City-in-Jerusalem-Israel.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/f/f8/Entry_of_Caliph_Umar_into_Jerusalem%2C_637.jpg",
            "https://themuslim500.com/wp-content/uploads/2018/08/umar-enters-jerusalem-painting-1050x600.jpg"
        ],
        beforeAfter: {
            before: "https://www.islamiclandmarks.com/wp-content/uploads/2016/01/masjid_umar_jerusalem.jpg",
            after: "https://upload.wikimedia.org/wikipedia/commons/8/87/Jerusalem-2013-Temple_Mount-Al-Aqsa_Mosque_%28NE_exposure%29.jpg"
        },
        ruler: "Rashidun Caliphate",
        eventType: "political",
        significance: "Established Muslim presence in Jerusalem and laid the groundwork for future Islamic constructions on the Temple Mount.",
        location: {
            lat: 31.7781,
            lng: 35.2354,
            area: "Southern Temple Mount"
        }
    },
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
        beforeAfter: {
            before: "https://www.worldhistory.org/img/c/p/1200x627/13277.jpg",
            after: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Jerusalem-2013-Temple_Mount-Dome_of_the_Rock_%28NE_exposure%29.jpg"
        },
        ruler: "Umayyad Caliphate",
        eventType: "construction",
        significance: "Created one of the oldest existing Islamic monuments and established the architectural style that would influence mosque construction for centuries.",
        location: {
            lat: 31.7781,
            lng: 35.2356,
            area: "Center of Temple Mount"
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
        beforeAfter: {
            before: "https://study.com/cimages/multimages/16/jerusalem_al-aqsa_mosque_bw_45124641709987112445.jpg",
            after: "https://upload.wikimedia.org/wikipedia/commons/8/87/Jerusalem-2013-Temple_Mount-Al-Aqsa_Mosque_%28NE_exposure%29.jpg"
        },
        ruler: "Umayyad Caliphate",
        eventType: "construction",
        significance: "Established the main congregational mosque of Jerusalem, completing the Islamic transformation of the Temple Mount.",
        location: {
            lat: 31.7764,
            lng: 35.2354,
            area: "Southern Temple Mount"
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
        beforeAfter: {
            before: "https://upload.wikimedia.org/wikipedia/commons/8/87/Jerusalem-2013-Temple_Mount-Al-Aqsa_Mosque_%28NE_exposure%29.jpg",
            after: "https://c7c8edde.rocketcdn.me/wp-content/uploads/Al_aqsa_moschee_2.jpg"
        },
        ruler: "Umayyad Caliphate",
        eventType: "conflict",
        significance: "First major destruction of the mosque, leading to significant rebuilding by the Abbasids.",
        location: {
            lat: 31.7764,
            lng: 35.2354,
            area: "Southern Temple Mount"
        }
    },
    {
        id: 5,
        year: 758,
        title: "Abbasid Reconstruction",
        description: "The Abbasid Caliph Al-Mansur orders the reconstruction of Al-Aqsa Mosque following the earthquake damage. This marks the transition of the site from Umayyad to Abbasid patronage, with architectural modifications reflecting the newer dynasty's preferences.",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Interior_of_the_Al-Aksa_mosque%2C_Jerusalem._Chromolithograph_Wellcome_V0050126.jpg/220px-Interior_of_the_Al-Aksa_mosque%2C_Jerusalem._Chromolithograph_Wellcome_V0050126.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/c/ce/Al-Aqsa_Mosque_%28Temple_Mount%2C_Jerusalem%2C_2008%29.jpg",
            "https://static.timesofisrael.com/www/uploads/2019/10/F191006YS33-e1570371205727-1024x640.jpg"
        ],
        beforeAfter: {
            before: "https://c7c8edde.rocketcdn.me/wp-content/uploads/Al_aqsa_moschee_2.jpg",
            after: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Interior_of_the_Al-Aksa_mosque%2C_Jerusalem._Chromolithograph_Wellcome_V0050126.jpg/220px-Interior_of_the_Al-Aksa_mosque%2C_Jerusalem._Chromolithograph_Wellcome_V0050126.jpg"
        },
        ruler: "Abbasid Caliphate",
        eventType: "construction",
        significance: "First major reconstruction under the Abbasids, establishing patterns of Islamic patronage for holy sites.",
        location: {
            lat: 31.7764,
            lng: 35.2354,
            area: "Southern Temple Mount"
        }
    },
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
        beforeAfter: {
            before: "",
            after: ""
        },
        ruler: "Abbasid Caliphate",
        eventType: "Expansion",
        significance: "Creation of a larger mosque with fifteen aisles",
        location: {
            lat: 31.7764,
            lng: 35.2346,
            area: ""
        }
    },
    {
        id: 7,
        year: 1035,
        title: "Fatimid Reconstruction",
        description: "Fatimid Caliph al-Zahir orders the reconstruction of Al-Aqsa Mosque. This rebuilding would reduce the mosque from fifteen aisles to seven, likely reflecting the decreased population of Jerusalem at that time. The Fatimid reconstruction featured elaborate mosaics in the central dome and around the mihrab (prayer niche). Many of these decorative elements have survived to the present day, representing some of the oldest intact portions of the mosque.",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Interior_of_the_Al-Aqsa_mosque%2C_Jerusalem._Chromolithograph_Wellcome_V0050126.jpg/1280px-Interior_of_the_Al-Aqsa_mosque%2C_Jerusalem._Chromolithograph_Wellcome_V0050126.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Mesjid_el-Aqsa_and_Jami_el-Aqsa_in_the_1841_Aldrich_and_Symonds_map_of_Jerusalem_%28cropped%29.jpg/800px-Mesjid_el-Aqsa_and_Jami_el-Aqsa_in_the_1841_Aldrich_and_Symonds_map_of_Jerusalem_%28cropped%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Al_Aqsa_Mosque_interior.jpg/1280px-Al_Aqsa_Mosque_interior.jpg"
        ],
        beforeAfter: {
            before: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Al_Aqsa_Mosque_interior.jpg/1280px-Al_Aqsa_Mosque_interior.jpg",
            after: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Interior_of_the_Al-Aqsa_mosque%2C_Jerusalem._Chromolithograph_Wellcome_V0050126.jpg/1280px-Interior_of_the_Al-Aqsa_mosque%2C_Jerusalem._Chromolithograph_Wellcome_V0050126.jpg"
        },
        ruler: "Fatimid Caliphate",
        eventType: "Reconstruction",
        significance: "Established the current layout of seven aisles",
        location: {
            lat: 31.7764,
            lng: 35.2346,
            area: ""
        }
    },
    {
        id: 8,
        year: 1099,
        title: "Crusader Conquest",
        description: "During the First Crusade, Christian forces capture Jerusalem and take control of the Temple Mount. The Crusaders renamed Al-Aqsa Mosque as 'Templum Solomonis' (Solomon's Temple) and converted it into a palace and headquarters for the Knights Templar. The Dome of the Rock was renamed 'Templum Domini' (Temple of the Lord) and converted into a church. During this period, many Islamic features were removed or altered, and Christian decorations and furnishings were added.",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/f/fc/Conquest_of_Jerusalem_by_the_Crusaders.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/a/a5/Baldwin_I_entering_Edessa_in_Feb_1098.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Templars_Acre_1291.jpg/1280px-Templars_Acre_1291.jpg"
        ],
        beforeAfter: {
            before: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Interior_of_the_Al-Aqsa_mosque%2C_Jerusalem._Chromolithograph_Wellcome_V0050126.jpg/1280px-Interior_of_the_Al-Aqsa_mosque%2C_Jerusalem._Chromolithograph_Wellcome_V0050126.jpg",
            after: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Conquest_of_Jerusalem_by_the_Crusaders.jpg"
        },
        ruler: "Crusader Kingdom of Jerusalem",
        eventType: "Conquest",
        significance: "First Christian control of the site since early Islamic period",
        location: {
            lat: 31.7764,
            lng: 35.2346,
            area: ""
        }
    },
    {
        id: 9,
        year: 1187,
        title: "Saladin's Reconquest",
        description: "Saladin (Salah ad-Din) recaptures Jerusalem after the Battle of Hattin, returning Al-Aqsa Mosque to Islamic control. Saladin immediately ordered the removal of Crusader additions and the restoration of the mosque for Muslim worship. He installed a magnificent wooden minbar (pulpit) that had been crafted in Damascus. Within a week of his conquest, the first Friday prayers were held in the restored mosque. Saladin also established schools and charitable foundations around the mosque complex.",
        images: [
            "https://www.worldhistory.org/uploads/images/11632.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/38/El_Aqsa_%28i.e.%2C_al-Aqsa%29_Mosque._Cedar_pulpit_%26_mihrab_LOC_matpc.03246_%28cropped_and_retouched%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Saladin_Minbar-Aqsa.JPG/800px-Saladin_Minbar-Aqsa.JPG"
        ],
        beforeAfter: {
            before: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Conquest_of_Jerusalem_by_the_Crusaders.jpg",
            after: "https://upload.wikimedia.org/wikipedia/commons/3/38/El_Aqsa_%28i.e.%2C_al-Aqsa%29_Mosque._Cedar_pulpit_%26_mihrab_LOC_matpc.03246_%28cropped_and_retouched%29.jpg"
        },
        ruler: "Ayyubid Dynasty",
        eventType: "Reconquest/Restoration",
        significance: "Restoration to Islamic worship and installation of famous minbar",
        location: {
            lat: 31.7764,
            lng: 35.2346,
            area: ""
        }
    },
    {
        id: 10,
        year: 1250,
        title: "Mamluk Control",
        description: "The Mamluk Sultanate takes control of Jerusalem and begins a period of significant architectural enhancement at Al-Aqsa. The Mamluks were former slave-soldiers who established their own dynasty ruling Egypt and Syria. Under Mamluk rule, several additions were made to Al-Aqsa Mosque, including new minarets, arcades, fountains, and madrasas (schools). The northwestern minaret of Al-Aqsa, known as the Fakhreddin Minaret, was built during this period. The Mamluks also established an extensive waqf (religious endowment) system to support the mosque.",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Saladin_Minbar-Aqsa.JPG/800px-Saladin_Minbar-Aqsa.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/c/ce/Al-Aqsa_Mosque_%28Temple_Mount%2C_Jerusalem%2C_2008%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Jerusalem_Al_Aqsa_Moschee_um_1900.jpg/1280px-Jerusalem_Al_Aqsa_Moschee_um_1900.jpg"
        ],
        beforeAfter: {
            before: "https://upload.wikimedia.org/wikipedia/commons/3/38/El_Aqsa_%28i.e.%2C_al-Aqsa%29_Mosque._Cedar_pulpit_%26_mihrab_LOC_matpc.03246_%28cropped_and_retouched%29.jpg",
            after: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Saladin_Minbar-Aqsa.JPG/800px-Saladin_Minbar-Aqsa.JPG"
        },
        ruler: "Mamluk Sultanate",
        eventType: "Architectural Enhancement",
        significance: "Addition of minarets and other architectural elements",
        location: {
            lat: 31.7764,
            lng: 35.2346,
            area: ""
        }
    },
    {
        id: 11,
        year: 1517,
        title: "Ottoman Conquest",
        description: "Ottoman Sultan Selim I conquers Jerusalem, beginning four centuries of Ottoman rule. Under the Ottomans, Al-Aqsa Mosque received extensive renovations and maintenance. Sultan Suleiman the Magnificent undertook significant restoration work on the Dome of the Rock, adding the distinctive blue tiles on its exterior. The Ottomans also rebuilt the city walls of Jerusalem and installed decorative fountains throughout the Temple Mount complex. The famous public sebil (fountain) near the entrance to Al-Aqsa dates from this period.",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Jerusalem_Al_Aqsa_Moschee_um_1900.jpg/1280px-Jerusalem_Al_Aqsa_Moschee_um_1900.jpg",
            "https://farm8.staticflickr.com/7399/10805862123_b72290c261_c.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Dome_of_the_Rock%2C_Temple_Mount%2C_Old_City_of_Jerusalem.jpg/1280px-Dome_of_the_Rock%2C_Temple_Mount%2C_Old_City_of_Jerusalem.jpg"
        ],
        beforeAfter: {
            before: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Saladin_Minbar-Aqsa.JPG/800px-Saladin_Minbar-Aqsa.JPG",
            after: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Jerusalem_Al_Aqsa_Moschee_um_1900.jpg/1280px-Jerusalem_Al_Aqsa_Moschee_um_1900.jpg"
        },
        ruler: "Ottoman Empire",
        eventType: "Conquest/Renovation",
        significance: "Beginning of four centuries of Ottoman maintenance",
        location: {
            lat: 31.7764,
            lng: 35.2346,
            area: ""
        }
    },
    {
        id: 12,
        year: 1917,
        title: "British Capture of Jerusalem",
        description: "British forces under General Allenby capture Jerusalem during World War I, ending Ottoman rule. The British Mandate administration established policies aiming to preserve the status quo at religious sites, including Al-Aqsa. General Allenby entered Jerusalem on foot as a sign of respect, and guards were placed at Muslim holy sites to protect them. The British created the Supreme Muslim Council, which was given authority over Islamic religious affairs and administration of the mosque complex.",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/e/e4/General_Allenby_Entering_Jerusalem_1917.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/5a/Dome_of_the_Al-Aqsa_Mosque_%2820160%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Jerusalem_Al_Aqsa_Moschee_um_1900.jpg/1280px-Jerusalem_Al_Aqsa_Moschee_um_1900.jpg"
        ],
        beforeAfter: {
            before: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Jerusalem_Al_Aqsa_Moschee_um_1900.jpg/1280px-Jerusalem_Al_Aqsa_Moschee_um_1900.jpg",
            after: "https://upload.wikimedia.org/wikipedia/commons/e/e4/General_Allenby_Entering_Jerusalem_1917.jpg"
        },
        ruler: "British Mandate for Palestine",
        eventType: "Conquest/Administrative Change",
        significance: "End of Ottoman rule and establishment of new administration",
        location: {
            lat: 31.7764,
            lng: 35.2346,
            area: ""
        }
    },
    {
        id: 13,
        year: 1948,
        title: "Arab-Israeli War",
        description: "Following the 1948 Arab-Israeli War, Jerusalem is divided. East Jerusalem, including the Old City and Al-Aqsa Mosque, comes under Jordanian control. Under Jordanian rule, various renovation projects were undertaken at Al-Aqsa. The most notable was the replacement of the dome's lead covering with aluminum sheets coated in gold-colored paint, giving it its distinctive appearance. Jordan also established the Jerusalem Waqf, a religious trust responsible for managing the Islamic holy sites in Jerusalem.",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/1948_Arab%E2%80%93Israeli_War_-_Jerusalem.jpg/800px-1948_Arab%E2%80%93Israeli_War_-_Jerusalem.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Al_aqsa_moschee_2.jpg/1280px-Al_aqsa_moschee_2.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Dome_of_the_Al-Aqsa_Mosque_%2820160%29.jpg/800px-Dome_of_the_Al-Aqsa_Mosque_%2820160%29.jpg"
        ],
        beforeAfter: {
            before: "https://upload.wikimedia.org/wikipedia/commons/e/e4/General_Allenby_Entering_Jerusalem_1917.jpg",
            after: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Al_aqsa_moschee_2.jpg/1280px-Al_aqsa_moschee_2.jpg"
        },
        ruler: "Hashemite Kingdom of Jordan",
        eventType: "War/Administrative Change",
        significance: "Beginning of Jordanian control of East Jerusalem",
        location: {
            lat: 31.7764,
            lng: 35.2346,
            area: ""
        }
    },
    {
        id: 14,
        year: 1967,
        title: "Six-Day War",
        description: "During the Six-Day War, Israel captures East Jerusalem, including the Old City and Temple Mount. Israel allows the Islamic Waqf to continue administering the religious sites while maintaining security control. After capturing the area, Israeli Defense Minister Moshe Dayan returned the keys to the Waqf in a gesture intended to maintain Muslim religious authority over the site. This established the status quo that continues to influence administration of the site today, with the mosque remaining under Islamic administration while Israel controls security and access.",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/9/9b/1967-Temple-Mount.jpg",
            "https://static.timesofisrael.com/www/uploads/2017/05/F170524YS01-e1495622421628-1024x640.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Al-Aqsa_Mosque_%28Temple_Mount%2C_Jerusalem%2C_2008%29.jpg/1280px-Al-Aqsa_Mosque_%28Temple_Mount%2C_Jerusalem%2C_2008%29.jpg"
        ],
        beforeAfter: {
            before: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Al_aqsa_moschee_2.jpg/1280px-Al_aqsa_moschee_2.jpg",
            after: "https://upload.wikimedia.org/wikipedia/commons/9/9b/1967-Temple-Mount.jpg"
        },
        ruler: "State of Israel (with Islamic Waqf religious authority)",
        eventType: "War/Administrative Change",
        significance: "Establishment of current administrative arrangement",
        location: {
            lat: 31.7764,
            lng: 35.2346,
            area: ""
        }
    },
    {
        id: 15,
        year: 1969,
        title: "Al-Aqsa Fire",
        description: "An Australian Christian extremist, Denis Michael Rohan, sets fire to Al-Aqsa Mosque, causing significant damage. The fire destroyed the 900-year-old wooden minbar installed by Saladin (Salah ad-Din) and damaged the roof and interior. The arson attack prompted widespread outrage across the Muslim world and led to the formation of the Organization of Islamic Cooperation. The incident increased tensions around the status and security of the mosque and heightened concerns among Muslims about the safety of the site under Israeli control.",
        images: [
            "https://www.middleeastmonitor.com/wp-content/uploads/2017/08/2017_08_16-AlAqsa-burntaqsaburn-.jpg",
            "https://static-cdn.toi-media.com/www/uploads/2016/08/Screen-Shot-2016-08-21-at-4.32.44-PM.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facad_near_central_dome_of_Aqsa_mosque.jpeg/800px-Facad_near_central_dome_of_Aqsa_mosque.jpeg"
        ],
        beforeAfter: {
            before: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Al-Aqsa_Mosque_%28Temple_Mount%2C_Jerusalem%2C_2008%29.jpg/1280px-Al-Aqsa_Mosque_%28Temple_Mount%2C_Jerusalem%2C_2008%29.jpg",
            after: "https://www.middleeastmonitor.com/wp-content/uploads/2017/08/2017_08_16-AlAqsa-burntaqsaburn-.jpg"
        },
        ruler: "State of Israel (with Islamic Waqf religious authority)",
        eventType: "Attack/Destruction",
        significance: "Destruction of historic minbar and increased international tension",
        location: {
            lat: 31.7764,
            lng: 35.2346,
            area: ""
        }
    },
    {
        id: 16,
        year: 1983,
        title: "Dome Restoration",
        description: "The aluminum dome covering installed during Jordanian rule is replaced with the current gold-colored lead covering to better match the original design. This restoration was part of a comprehensive project to repair damage from the 1969 fire and restore the mosque to its historical appearance. Led by a committee of international experts, the restoration also included repairs to the interior decorations damaged by smoke and fire, using traditional techniques. The interior paintings in the dome were meticulously reconstructed based on photographic evidence of the original designs.",
        images: [
            "https://www.arabnews.com/sites/default/files/userimages/1036116/mosquegraphic_online-01.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Dome_of_the_Al-Aqsa_Mosque_%2820160%29.jpg/800px-Dome_of_the_Al-Aqsa_Mosque_%2820160%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/8/87/Jerusalem-2013-Temple-Mount-Al-Aqsa_Mosque_%28NE_exposure%29.jpg"
        ],
        beforeAfter: {
            before: "https://upload.wikimedia.org/wikipedia/commons/9/96/Al_aqsa_moschee_2.jpg",
            after: "https://upload.wikimedia.org/wikipedia/commons/8/87/Jerusalem-2013-Temple-Mount-Al-Aqsa_Mosque_%28NE_exposure%29.jpg"
        },
        ruler: "State of Israel (with Islamic Waqf religious authority)",
        eventType: "Restoration",
        significance: "Return to historical appearance with gold-colored lead dome",
        location: {
            lat: 31.7764,
            lng: 35.2346,
            area: ""
        }
    },
    {
        id: 17,
        year: 2000,
        title: "Second Intifada",
        description: "Israeli opposition leader Ariel Sharon's visit to the Temple Mount/Al-Aqsa compound triggers Palestinian protests that help spark the Second Intifada. Sharon's visit, accompanied by hundreds of Israeli police officers, was perceived by Palestinians as a provocative assertion of Israeli control over the site. The resulting violence led to restricted access to the mosque for Palestinians living in the West Bank and Gaza. This period marked a significant turning point in the administration of Al-Aqsa, with increased security measures and more restricted access policies.",
        images: [
            "https://static01.nyt.com/images/2014/10/30/multimedia/jerusalem-violence-1/jerusalem-violence-1-superJumbo.jpg",
            "https://static.timesofisrael.com/www/uploads/2015/09/sharon.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Al-Aqsa_Mosque_%28Temple-Mount%2C_Jerusalem%2C_2008%29.jpg/1280px-Al-Aqsa_Mosque_%28Temple-Mount%2C_Jerusalem%2C_2008%29.jpg"
        ],
        beforeAfter: {
            before: "https://upload.wikimedia.org/wikipedia/commons/8/87/Jerusalem-2013-Temple-Mount-Al-Aqsa_Mosque_%28NE_exposure%29.jpg",
            after: "https://static01.nyt.com/images/2014/10/30/multimedia/jerusalem-violence-1/jerusalem-violence-1-superJumbo.jpg"
        },
        ruler: "State of Israel (with Islamic Waqf religious authority)",
        eventType: "Political/Conflict",
        significance: "Increased tensions and security restrictions",
        location: {
            lat: 31.7764,
            lng: 35.2346,
            area: ""
        }
    },
    {
        id: 18,
        year: 2007,
        title: "Minbar Reconstruction",
        description: "A replica of the historic Saladin minbar, destroyed in the 1969 fire, is installed in Al-Aqsa Mosque. The reconstruction project took years of painstaking work by craftsmen using traditional techniques and materials. The original minbar had been commissioned by Nur al-Din Zangi in the 12th century and installed by Saladin after his reconquest of Jerusalem. Its reconstruction was seen as an important restoration of cultural heritage. The project involved studying historical photographs and documents to recreate the intricate geometric inlay work and wood carving of the original.",
        images: [
            "https://iiim.files.wordpress.com/2013/01/minbar-reconstructed2.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Saladin_Minbar-Aqsa.JPG/800px-Saladin_Minbar-Aqsa.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Al-Aqsa_Mosque_%28Temple-Mount%2C_Jerusalem%2C_2008%29.jpg/1280px-Al-Aqsa_Mosque_%28Temple-Mount%2C_Jerusalem%2C_2008%29.jpg"
        ],
        beforeAfter: {
            before: "https://www.middleeastmonitor.com/wp-content/uploads/2017/08/2017_08_16-AlAqsa-burntaqsaburn-.jpg",
            after: "https://iiim.files.wordpress.com/2013/01/minbar-reconstructed2.png"
        },
        ruler: "State of Israel (with Islamic Waqf religious authority)",
        eventType: "Restoration/Cultural Heritage",
        significance: "Restoration of an important historical and religious artifact",
        location: {
            lat: 31.7764,
            lng: 35.2346,
            area: ""
        }
    },
    {
        id: 19,
        year: 2017,
        title: "Metal Detector Crisis",
        description: "Following a deadly attack near the Lions' Gate entrance to the Temple Mount, Israel installs metal detectors at the entrances to the compound, sparking widespread protests. Palestinians and Muslims worldwide viewed the security measures as an attempt to change the status quo and increase Israeli control over the site. The crisis led to diplomatic tensions and violent clashes. After nearly two weeks of protests and international pressure, Israel removed the metal detectors and other security installations, returning to the previous security arrangements.",
        images: [
            "https://static.timesofisrael.com/www/uploads/2017/07/000_QR5ZE-e1500828725356.jpg",
            "https://static.timesofisrael.com/www/uploads/2017/07/F170723YS01-e1500823040566.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Al-Aqsa_Mosque_%28Temple-Mount%2C_Jerusalem%2C_2008%29.jpg/1280px-Al-Aqsa_Mosque_%28Temple-Mount%2C_Jerusalem%2C_2008%29.jpg"
        ],
        beforeAfter: {
            before: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Al-Aqsa_Mosque_%28Temple-Mount%2C_Jerusalem%2C_2008%29.jpg/1280px-Al-Aqsa_Mosque_%28Temple-Mount%2C_Jerusalem%2C_2008%29.jpg",
            after: "https://static.timesofisrael.com/www/uploads/2017/07/000_QR5ZE-e1500828725356.jpg"
        },
        ruler: "State of Israel (with Islamic Waqf religious authority)",
        eventType: "Political/Security Crisis",
        significance: "Major dispute over access and control of the site",
        location: {
            lat: 31.7764,
            lng: 35.2346,
            area: ""
        }
    },
    {
        id: 20,
        year: 2023,
        title: "Contemporary Al-Aqsa",
        description: "Al-Aqsa Mosque continues to be a focal point of religious devotion and political tension. The mosque remains under the administration of the Jerusalem Islamic Waqf, with Israel maintaining security control of the compound. Regular maintenance and conservation work is carried out to preserve the historic structures. The site continues to attract millions of Muslim worshippers annually, particularly during Ramadan. The status and administration of Al-Aqsa remain central issues in the Israeli-Palestinian conflict and in broader discussions about Jerusalem's future.",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Al-Aqsa_Mosque_%28Temple-Mount%2C_Jerusalem%2C_2008%29.jpg/1280px-Al-Aqsa_Mosque_%28Temple-Mount%2C_Jerusalem%2C_2008%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/8/87/Jerusalem-2013-Temple-Mount-Al-Aqsa_Mosque_%28NE_exposure%29.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Dome_of_the_Rock%2C_Temple_Mount%2C_Old_City_of_Jerusalem.jpg/1280px-Dome_of_the_Rock%2C_Temple_Mount%2C_Old_City_of_Jerusalem.jpg"
        ],
        beforeAfter: {
            before: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Jerusalem_Al-Aqsa_Moschee_um_1900.jpg/1280px-Jerusalem_Al_Aqsa_Moschee_um_1900.jpg",
            after: "https://upload.wikimedia.org/wikipedia/commons/8/87/Jerusalem-2013-Temple-Mount-Al-Aqsa_Mosque_%28NE_exposure%29.jpg"
        },
        ruler: "State of Israel (with Islamic Waqf religious authority)",
        eventType: "Contemporary Status",
        significance: "Ongoing religious and political importance",
        location: {
            lat: 31.7764,
            lng: 35.2346,
            area: ""
        }
    }
];

// Quiz questions data
const quizQuestions = [
    {
        question: "When did Caliph Umar ibn al-Khattab conquer Jerusalem?",
        options: ["632 CE", "637 CE", "642 CE", "650 CE"],
        correctIndex: 1
    },
    {
        question: "Who built the Dome of the Rock?",
        options: ["Caliph Umar", "Abd al-Malik ibn Marwan", "Al-Walid I", "Saladin"],
        correctIndex: 1
    },
    {
        question: "When was the first version of Al-Aqsa Mosque built?",
        options: ["637 CE", "691 CE", "705 CE", "758 CE"],
        correctIndex: 2
    },
    {
        question: "What natural disaster damaged Al-Aqsa Mosque in 746 CE?",
        options: ["Fire", "Flood", "Earthquake", "Tornado"],
        correctIndex: 2
    },
    {
        question: "Which caliphate ordered the reconstruction of Al-Aqsa Mosque in 758 CE?",
        options: ["Umayyad Caliphate", "Abbasid Caliphate", "Fatimid Caliphate", "Rashidun Caliphate"],
        correctIndex: 1
    }
];

// Get color for event type
function getEventTypeColor(type) {
    const t = type.toLowerCase();
    switch (t) {
        case 'construction':
            return '#3498db';
        case 'conflict':
            return '#e74c3c';
        case 'political':
            return '#f39c12';
        case 'cultural':
            return '#2ecc71';
        case 'expansion':
            return '#9b59b6'; // Purple
        case 'reconstruction':
            return '#e67e22'; // Orange
        case 'conquest':
            return '#1abc9c'; // Turquoise
        case 'war/administrative change':
            return '#d35400'; // Dark Orange
        case 'attack/destruction':
            return '#c0392b'; // Red
        case 'restoration':
            return '#27ae60'; // Green
        case 'reconstruction/cultural heritage':
            return '#8e44ad'; // Deep Purple
        case 'political/conflict':
            return '#f39c12'; // (Same as political)
        case 'political/security crisis':
            return '#16a085'; // Teal
        case 'contemporary status':
            return '#2ecc71'; // Green
        case 'reconquest/restoration':
            return '#2980b9'; // Blue
        default:
            return '#95a5a6'; // Default grey
    }
}