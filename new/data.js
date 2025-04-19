
// Define key timeline markers
const timelineKeyYears = [
    { year: 1258, label: "Mongol Sack of Baghdad" },
    { year: 1299, label: "Ottoman Empire Founded" },
    { year: 1453, label: "Fall of Constantinople" },
    { year: 1517, label: "Ottoman Conquest of Egypt" },
    { year: 1798, label: "Napoleon in Egypt" },
    { year: 1918, label: "Ottoman Empire Ends" },
    { year: 1948, label: "Israel Founded" },
    { year: 1979, label: "Iranian Revolution" },
    { year: 2011, label: "Arab Spring" }
];



// Historical data with expanded information
const historicalData = {
    1200: {
        middleEast: {
            rulers: "Ayyubid Dynasty rules Egypt and parts of the Levant",
            events: "Conflicts between Crusader states and Muslim powers continue",
            economy: "Key center of trade between East and West",
            description: "The Ayyubid Dynasty under Al-Adil I (brother of Saladin) controls Egypt and much of the Levant. The region is recovering from the Third Crusade and experiencing relative stability under Muslim rule.",
            cultural: {
                arts: "Islamic architectural styles flourishing with distinctive regional variations",
                science: "Ongoing translations and commentaries on Greek philosophical and scientific works",
                religion: "Islamic theological debates between different schools of thought continue",
                literature: "Sufi poetry and philosophical works gaining prominence"
            },
            economic: {
                trade: "Major trade networks connecting Europe, Africa, and Asia pass through Middle Eastern cities",
                resources: "Textiles, spices, precious metals, and agricultural products",
                centers: "Cairo, Damascus, Jerusalem, and Baghdad serve as major commercial hubs",
                currency: "Various regional coins used, including gold dinars and silver dirhams"
            },
            keyFigures: [
                {
                    name: "Al-Adil I",
                    title: "Sultan of Egypt and Syria",
                    significance: "Brother of Saladin who consolidated Ayyubid power after Saladin's death"
                },
                {
                    name: "Maimonides",
                    title: "Jewish philosopher and physician",
                    significance: "Serves as a court physician to the Ayyubid rulers while producing major philosophical works"
                }
            ]
        },
        europe: {
            rulers: "Papal States influential; Holy Roman Empire fragmented",
            events: "Preparations for the Fourth Crusade; Feudal system dominates",
            economy: "Agricultural economy with growing urban centers and trade guilds",
            description: "Europe is dominated by feudal kingdoms with the Catholic Church exerting significant influence. The Fourth Crusade is being prepared, which will ultimately sack Constantinople rather than reach the Holy Land.",
            cultural: {
                arts: "Gothic architecture developing across Europe, particularly in France",
                science: "Universities beginning to form in Paris, Oxford, and Bologna",
                religion: "Roman Catholic Church at the height of power under Pope Innocent III",
                literature: "Early vernacular literature emerges alongside Latin texts"
            }
        },
        asia: {
            rulers: "Song Dynasty in China; Genghis Khan rising in Central Asia",
            events: "Mongol tribes being unified; Trade along Silk Road active",
            economy: "China leads world in technological innovation and market economy",
            description: "The Song Dynasty continues to rule China with significant technological advancement. Genghis Khan is beginning to unify the Mongol tribes, setting the stage for the creation of the largest contiguous land empire in history.",
            cultural: {
                arts: "Chinese landscape painting and ceramics highly developed",
                science: "Chinese innovations include gunpowder, compass, and printing",
                religion: "Buddhism, Confucianism, and Taoism coexist in East Asia",
                literature: "Poetry and philosophical works flourish in Song China"
            }
        },
        africa: {
            rulers: "Ghana Empire declining; Mali Empire beginning to form",
            events: "Trans-Saharan trade networks flourishing",
            economy: "Trade in gold, salt, and slaves across Saharan routes",
            description: "In West Africa, the Ghana Empire is in decline while the Mali Empire is beginning to form. Trade networks across the Sahara connect North Africa with sub-Saharan regions, exchanging gold, salt, and other commodities.",
            cultural: {
                arts: "Regional artistic traditions in metalwork, textiles, and sculpture",
                science: "Traditional knowledge systems focused on agriculture and medicine",
                religion: "Islam spreading in North Africa; indigenous religious practices in sub-Saharan regions",
                literature: "Oral traditions predominate across much of Africa"
            }
        },
        americas: {
            rulers: "Maya civilization in decline; regional cultures throughout continents",
            events: "Mississippian culture flourishing in North America",
            economy: "Agricultural societies with regional trade networks",
            description: "The Maya civilization is in decline in Central America. The Inca and Aztec empires have not yet risen to prominence. In North America, the Mississippian culture builds large earthwork mounds and establishes complex societies.",
            cultural: {
                arts: "Sophisticated pottery, textiles, and architectural traditions",
                science: "Astronomical knowledge and agricultural innovations",
                religion: "Various indigenous spiritual traditions across the continents",
                literature: "Oral traditions and pictographic writing systems"
            }
        },
        events: [
            {
                title: "Ayyubid Rule",
                year: 1200,
                description: "The Ayyubid Dynasty controls Egypt and much of Syria, founded by Saladin.",
                location: [30.0444, 31.2357], // Cairo
                importance: "major",
                region: "middle-east"
            },
            {
                title: "Kingdom of Jerusalem",
                year: 1200,
                description: "Crusader state continues to hold coastal territories following the Third Crusade.",
                location: [31.7683, 35.2137], // Jerusalem
                importance: "major",
                region: "middle-east"
            },
            {
                title: "Byzantine Empire",
                year: 1200,
                description: "The Byzantine Empire controls parts of Anatolia and the Balkans under Alexios III Angelos.",
                location: [41.0082, 28.9784], // Constantinople/Istanbul
                importance: "medium",
                region: "middle-east"
            },
            {
                title: "Fourth Crusade Preparations",
                year: 1200,
                description: "Pope Innocent III calls for a new crusade that will ultimately divert to Constantinople.",
                location: [41.9028, 12.4964], // Rome
                importance: "medium",
                region: "europe"
            },
            {
                title: "Genghis Khan's Rise",
                year: 1200,
                description: "Temüjin (later Genghis Khan) is unifying Mongol tribes in Central Asia.",
                location: [47.8864, 106.9057], // Mongolia
                importance: "major",
                region: "asia"
            }
        ],
        quiz: {
            question: "Which dynasty ruled Egypt and parts of the Levant in 1200 CE?",
            options: [
                { text: "Ayyubid Dynasty", correct: true },
                { text: "Mamluk Sultanate", correct: false },
                { text: "Fatimid Caliphate", correct: false },
                { text: "Ottoman Empire", correct: false }
            ],
            explanation: "The Ayyubid Dynasty was founded by Saladin and ruled Egypt and parts of the Levant in 1200 CE. The Mamluks would later overthrow them in 1250."
        }
    },
    1250: {
        middleEast: {
            rulers: "Mamluk Sultanate takes control in Egypt and Syria",
            events: "Mongol invasions threaten the eastern Islamic world",
            economy: "Trade networks disrupted by Mongol conquests",
            description: "The Mamluk Sultanate overthrows the Ayyubids in Egypt. Meanwhile, the Mongol Empire under Hulagu Khan threatens Baghdad and the eastern Islamic world.",
            cultural: {
                arts: "Islamic architectural traditions continue with increased Mamluk influence",
                science: "Scholarly works preserved despite political turmoil",
                religion: "Islam remains dominant with theological debates between schools",
                literature: "Historical chronicles become increasingly important"
            },
            economic: {
                trade: "Trade disrupted in eastern regions due to Mongol invasions",
                resources: "Textiles, metalwork, and agricultural products remain key exports",
                centers: "Cairo rises in importance as Baghdad faces Mongol threat",
                currency: "Regional monetary systems with gold and silver coinage"
            },
            keyFigures: [
                {
                    name: "Baibars",
                    title: "Mamluk Sultan",
                    significance: "Military leader who helped establish Mamluk power and later defeated Mongol advances"
                },
                {
                    name: "Hulagu Khan",
                    title: "Mongol leader",
                    significance: "Grandson of Genghis Khan who led Mongol invasions in the Middle East"
                }
            ]
        },
        europe: {
            rulers: "Holy Roman Empire under Frederick II; Louis IX rules France",
            events: "Seventh Crusade; Gothic architecture flourishing",
            economy: "Growing trade and commerce in Italian city-states",
            description: "Europe sees the continuation of the Crusades with the Seventh Crusade led by Louis IX of France. Universities expand across Europe, and Gothic architecture reaches its height in places like France with the construction of great cathedrals.",
            cultural: {
                arts: "High Gothic architecture flourishes with magnificent cathedrals",
                science: "Universities expand with scholastic method dominant",
                religion: "Catholic Church conducts inquisitions against heretical movements",
                literature: "Scholastic philosophical works and vernacular literature grow"
            }
        },
        asia: {
            rulers: "Mongol Empire controls much of Asia; Southern Song Dynasty in China",
            events: "Mongol expansion continues; Korean Goryeo Dynasty becomes Mongol vassal",
            economy: "Disruption and then integration of trade under Mongol rule",
            description: "The Mongol Empire has conquered much of Asia, creating the largest contiguous land empire in history. The Southern Song Dynasty continues to rule southern China but faces Mongol pressure from the north.",
            cultural: {
                arts: "Cultural mixing begins as Mongols adopt elements of conquered civilizations",
                science: "Knowledge exchange facilitated across Mongol territories",
                religion: "Religious tolerance practiced within Mongol domains",
                literature: "Historical chronicles document Mongol conquests"
            }
        },
        africa: {
            rulers: "Mali Empire expanding in West Africa under Sundiata Keita",
            events: "Trans-Saharan trade continues to flourish",
            economy: "Gold trade significant for Mali's growth and power",
            description: "The Mali Empire is expanding under Sundiata Keita, establishing control over important trade routes across West Africa. The wealth from gold trade contributes significantly to Mali's rising power.",
            cultural: {
                arts: "Regional artistic traditions continue with Islamic influences in north",
                science: "African knowledge systems continue to develop",
                religion: "Islam spreading further into West Africa through trade",
                literature: "Oral traditions remain strong with emerging written traditions in Islamic areas"
            }
        },
        americas: {
            rulers: "Various regional cultures; early Inca civilization developing",
            events: "Cahokia (Mississippian culture) at its peak in North America",
            economy: "Agricultural societies with regional specialization",
            description: "Cahokia, the largest pre-Columbian settlement north of Mexico, is at its peak. In South America, predecessors to the Inca civilization are developing in the Andean region. The Aztec culture is beginning to emerge in central Mexico.",
            cultural: {
                arts: "Regional artistic traditions continue to develop",
                science: "Agricultural and astronomical knowledge continues to advance",
                religion: "Various indigenous spiritual practices across regions",
                literature: "Oral traditions and pictographic systems continue"
            }
        },
        events: [
            {
                title: "Mamluk Takeover",
                year: 1250,
                description: "Mamluks overthrow the Ayyubid Dynasty in Egypt, establishing the Mamluk Sultanate.",
                location: [30.0444, 31.2357], // Cairo
                importance: "major",
                region: "middle-east"
            },
            {
                title: "Mongol Advance",
                year: 1250,
                description: "Mongol forces under the command of Hulagu Khan begin advancing toward the Middle East.",
                location: [33.3152, 44.3661], // Baghdad (soon to be conquered)
                importance: "major",
                region: "middle-east"
            },
            {
                title: "Seventh Crusade",
                year: 1250,
                description: "Louis IX of France leads the Seventh Crusade, but is defeated and captured in Egypt.",
                location: [31.2001, 29.9187], // Near Mansoura, Egypt
                importance: "major",
                region: "middle-east"
            },
            {
                title: "Mali Empire Founded",
                year: 1250,
                description: "Sundiata Keita establishes the Mali Empire in West Africa.",
                location: [13.3889, -6.2718], // Ancient Mali
                importance: "major",
                region: "africa"
            },
            {
                title: "Notre-Dame Construction",
                year: 1250,
                description: "Notre-Dame Cathedral in Paris nearing completion, representing the height of Gothic architecture.",
                location: [48.8530, 2.3499], // Paris
                importance: "medium",
                region: "europe"
            }
        ],
        quiz: {
            question: "What group overthrew the Ayyubid Dynasty in Egypt around 1250 CE?",
            options: [
                { text: "Mamluks", correct: true },
                { text: "Mongols", correct: false },
                { text: "Ottomans", correct: false },
                { text: "Crusaders", correct: false }
            ],
            explanation: "The Mamluks, who were originally slave soldiers of Turkic origin, overthrew the Ayyubid Dynasty in Egypt around 1250 CE and established the Mamluk Sultanate that would rule until the Ottoman conquest in 1517."
        }
    },
    // Add more years of data here...
    1300: {
        middleEast: {
            rulers: "Mamluk Sultanate in Egypt and Syria; Ottoman Empire forming",
            events: "Crusader states eliminated from the Levant; Mongol Ilkhanate controls Persia",
            economy: "Recovery of trade routes after Mongol disruptions",
            description: "The Mamluks have successfully driven out the Crusaders from the Levant. The Ottoman Empire is beginning to form in Anatolia under Osman I, while the Mongol Ilkhanate rules Persia.",
            cultural: {
                arts: "Mamluk architectural style flourishes; early Ottoman artistic forms developing",
                science: "Scientific works preserved and expanded upon in major centers of learning",
                religion: "Sufism increasingly influential across Islamic world",
                literature: "Historical chronicles and religious commentaries prominent"
            },
            economic: {
                trade: "Revival of East-West trade routes with Pax Mongolica establishing relative stability",
                resources: "Textiles, spices, and luxury goods flow through revived trade networks",
                centers: "Cairo, Damascus, and emerging Ottoman centers gaining importance",
                currency: "Regional currencies with growing trade connections"
            },
            keyFigures: [
                {
                    name: "Osman I",
                    title: "Founder of Ottoman Dynasty",
                    significance: "Established the Ottoman state that would eventually become a major empire"
                },
                {
                    name: "Ghazan Khan",
                    title: "Ilkhanate Ruler",
                    significance: "Mongol ruler of Persia who converted to Islam and implemented administrative reforms"
                }
            ]
        },
        events: [
            {
                title: "Mamluk Dominance",
                year: 1300,
                description: "Mamluks have expelled Crusaders from the Levant and defeated Mongol advances.",
                location: [30.0444, 31.2357], // Cairo
                importance: "major",
                region: "middle-east"
            },
            {
                title: "Ottoman Beginnings",
                year: 1300,
                description: "Osman I establishes the Ottoman state in northwestern Anatolia.",
                location: [40.1885, 29.0610], // Söğüt (early Ottoman capital)
                importance: "major",
                region: "middle-east"
            },
            {
                title: "Ilkhanate Rule",
                year: 1300,
                description: "The Mongol Ilkhanate rules Persia and parts of Mesopotamia.",
                location: [35.6892, 51.3890], // Tehran region
                importance: "medium",
                region: "middle-east"
            }
        ],
        quiz: {
            question: "Who established the Ottoman state around 1300 CE?",
            options: [
                { text: "Osman I", correct: true },
                { text: "Mehmed II", correct: false },
                { text: "Suleiman I", correct: false },
                { text: "Bayezid I", correct: false }
            ],
            explanation: "Osman I (from whom the name 'Ottoman' derives) established the Ottoman state around 1300 CE in northwestern Anatolia. From these humble beginnings, it would eventually grow into one of the world's most powerful empires."
        }
    },
    1400: {
        middleEast: {
            rulers: "Ottoman Empire expanding; Timurid Empire in Persia",
            events: "Timur's conquests devastate the region; Ottoman interregnum",
            economy: "Reconstruction following Timurid invasions",
            description: "The Ottoman Empire is recovering from Timur's devastating invasions, which temporarily halted Ottoman expansion. The Timurid Empire controls Persia, while the Mamluks maintain control of Egypt and Syria.",
            cultural: {
                arts: "Timurid architecture and miniature painting flourish in Persia",
                science: "Scientific works continue despite political upheaval",
                religion: "Mystical Sufi orders gain wider influence",
                literature: "Persian literature flourishes under Timurid patronage"
            },
            economic: {
                trade: "Trade routes recovering after Timurid conquests",
                resources: "Textiles, ceramics, and luxury goods remain important",
                centers: "Samarkand emerges as major center under Timurid rule",
                currency: "Various regional currencies with some disruption from conquests"
            },
            keyFigures: [
                {
                    name: "Timur (Tamerlane)",
                    title: "Founder of Timurid Empire",
                    significance: "Conquered vast territories and temporarily halted Ottoman expansion"
                },
                {
                    name: "Mehmed I",
                    title: "Ottoman Sultan",
                    significance: "Ended the Ottoman interregnum and restored unity to the empire"
                }
            ]
        },
        events: [
            {
                title: "Ottoman Recovery",
                year: 1400,
                description: "The Ottoman Empire recovers from defeat by Timur at the Battle of Ankara (1402).",
                location: [41.0082, 28.9784], // Constantinople/Istanbul
                importance: "major",
                region: "middle-east"
            },
            {
                title: "Timurid Empire",
                year: 1400,
                description: "Timur (Tamerlane) has established a vast empire across Central Asia, Persia, and parts of the Middle East.",
                location: [39.6478, 66.9568], // Samarkand
                importance: "major",
                region: "middle-east"
            },
            {
                title: "Mamluk Sultanate",
                year: 1400,
                description: "Mamluks continue to rule Egypt and Syria, facing economic challenges.",
                location: [30.0444, 31.2357], // Cairo
                importance: "medium",
                region: "middle-east"
            }
        ],
        quiz: {
            question: "Which conqueror temporarily halted Ottoman expansion around 1400 CE?",
            options: [
                { text: "Timur (Tamerlane)", correct: true },
                { text: "Genghis Khan", correct: false },
                { text: "Hulagu Khan", correct: false },
                { text: "Babur", correct: false }
            ],
            explanation: "Timur (also known as Tamerlane) defeated the Ottoman forces at the Battle of Ankara in 1402, which temporarily halted Ottoman expansion and led to a period of civil war known as the Ottoman Interregnum."
        }
    },
    1500: {
        middleEast: {
            rulers: "Ottoman Empire expands under Selim I and Suleiman; Safavid Persia emerges",
            events: "Ottoman conquest of Mamluk Egypt and Syria; Sunni-Shia imperial rivalry",
            economy: "Control of major trade routes between East and West",
            description: "The Ottoman Empire under Selim I conquers Mamluk territories, dramatically expanding Ottoman control. The Safavid Empire establishes control in Persia, creating a powerful Shia state and setting up centuries of Ottoman-Safavid rivalry.",
            cultural: {
                arts: "Ottoman architectural golden age begins; Safavid artistic traditions develop",
                science: "Scientific and astronomical works continue in major centers",
                religion: "Sunni-Shia divide intensifies with Ottoman-Safavid rivalry",
                literature: "Ottoman and Safavid court literature and poetry flourish"
            },
            economic: {
                trade: "Control of traditional trade routes, though facing growing European maritime competition",
                resources: "Textiles, carpets, ceramics, and agricultural products",
                centers: "Istanbul, Isfahan, and Cairo as major regional centers",
                currency: "Ottoman akçe and other regional currencies in use"
            },
            keyFigures: [
                {
                    name: "Selim I",
                    title: "Ottoman Sultan",
                    significance: "Expanded the Ottoman Empire by conquering Mamluk territories"
                },
                {
                    name: "Shah Ismail I",
                    title: "Founder of Safavid Empire",
                    significance: "Established Safavid rule in Persia and made Twelver Shiism the official religion"
                }
            ]
        },
        events: [
            {
                title: "Ottoman Conquest of Egypt",
                year: 1517,
                description: "Ottoman Sultan Selim I defeats the Mamluks and conquers Egypt, ending the Mamluk Sultanate.",
                location: [30.0444, 31.2357], // Cairo
                importance: "major",
                region: "middle-east"
            },
            {
                title: "Safavid Empire",
                year: 1501,
                description: "Shah Ismail I establishes the Safavid Empire in Persia, making Shiism the official religion.",
                location: [35.6892, 51.3890], // Tehran region
                importance: "major",
                region: "middle-east"
            },
            {
                title: "Battle of Chaldiran",
                year: 1514,
                description: "Ottomans defeat the Safavids, establishing the eastern limits of Ottoman expansion.",
                location: [39.0646, 44.3861], // Chaldiran
                importance: "medium",
                region: "middle-east"
            }
        ],
        quiz: {
            question: "Which empire conquered the Mamluk Sultanate in 1517?",
            options: [
                { text: "Ottoman Empire", correct: true },
                { text: "Safavid Empire", correct: false },
                { text: "Timurid Empire", correct: false },
                { text: "Mughal Empire", correct: false }
            ],
            explanation: "The Ottoman Empire under Sultan Selim I conquered the Mamluk Sultanate in 1517, significantly expanding Ottoman territory to include Egypt, the Hejaz (including Mecca and Medina), and the Levant."
        }
    },
    // Add more years here...
    1600: {
        middleEast: {
            rulers: "Ottoman Empire at its height; Safavid Persia under Abbas I",
            events: "Ottoman-Safavid wars continue; European powers beginning to establish trade presence",
            economy: "Traditional trade routes facing competition from European maritime routes",
            description: "The Ottoman Empire reaches its zenith of power and cultural influence. The Safavid Empire under Shah Abbas I experiences a golden age. European powers begin establishing trading posts in the region.",
            cultural: {
                arts: "Ottoman and Safavid artistic and architectural golden ages",
                science: "Traditional sciences continue with less innovation",
                religion: "Established religious hierarchies with mystical orders flourishing",
                literature: "Rich tradition of poetry, history, and religious commentary"
            },
            economic: {
                trade: "Traditional trade routes challenged by European maritime expansion",
                resources: "Textiles, carpets, ceramics, and agricultural products",
                centers: "Istanbul, Isfahan, and Cairo as major centers",
                currency: "Ottoman and Safavid currency systems established"
            },
            keyFigures: [
                {
                    name: "Suleiman the Magnificent",
                    title: "Ottoman Sultan",
                    significance: "Presided over Ottoman golden age with military successes and cultural achievements"
                },
                {
                    name: "Shah Abbas I",
                    title: "Safavid Emperor",
                    significance: "Led Safavid Persia to its cultural and political peak"
                }
            ]
        },
        events: [
            {
                title: "Ottoman Golden Age",
                year: 1600,
                description: "The Ottoman Empire at its height of power under the reign of Ahmed I.",
                location: [41.0082, 28.9784], // Istanbul
                importance: "major",
                region: "middle-east"
            },
            {
                title: "Safavid Renaissance",
                year: 1600,
                description: "Shah Abbas I's reign brings a cultural and political renaissance to the Safavid Empire.",
                location: [32.6546, 51.6680], // Isfahan (Safavid capital)
                importance: "major",
                region: "middle-east"
            },
            {
                title: "European Trade Posts",
                year: 1600,
                description: "European powers establish trading posts throughout the Middle East.",
                location: [25.2854, 51.5310], // Persian Gulf
                importance: "medium",
                region: "middle-east"
            }
        ],
        quiz: {
            question: "Which Safavid ruler led Persia to its cultural and political height in the early 17th century?",
            options: [
                { text: "Shah Abbas I", correct: true },
                { text: "Shah Ismail I", correct: false },
                { text: "Nader Shah", correct: false },
                { text: "Shah Tahmasp", correct: false }
            ],
            explanation: "Shah Abbas I (reigned 1588-1629) led Safavid Persia to its political and cultural height. He reformed the military, moved the capital to Isfahan, and presided over a flourishing of Persian arts and architecture."
        }
    },
    1700: {
        middleEast: {
            rulers: "Ottoman Empire beginning to decline; Safavid Persia collapsing",
            events: "Ottoman-Russian wars; Afsharid dynasty replaces Safavids in Persia",
            economy: "Traditional trade routes declining in importance",
            description: "The Ottoman Empire begins to experience military setbacks against European powers. The Safavid Empire collapses and is replaced by the Afsharid dynasty under Nader Shah. European economic influence increases in the region.",
            cultural: {
                arts: "Traditional artistic forms continue with some European influences",
                science: "Growing awareness of European scientific advances",
                religion: "Traditional religious structures continue",
                literature: "Continuation of established literary traditions"
            },
            economic: {
                trade: "Declining control of trade routes as European maritime trade dominates",
                resources: "Traditional handicrafts and agricultural products remain important",
                centers: "Ottoman and Persian cities losing economic prominence to European trading powers",
                currency: "Economic challenges lead to currency debasement in some regions"
            },
            keyFigures: [
                {
                    name: "Ahmed III",
                    title: "Ottoman Sultan",
                    significance: "Presided over the 'Tulip Period' of Ottoman history with cultural flourishing"
                },
                {
                    name: "Nader Shah",
                    title: "Founder of Afsharid Dynasty",
                    significance: "Rose to power after Safavid collapse and created a new Persian empire"
                }
            ]
        },
        events: [
            {
                title: "Treaty of Karlowitz",
                year: 1699,
                description: "Ottoman Empire cedes significant territories to European powers, marking the beginning of Ottoman decline.",
                location: [41.0082, 28.9784], // Istanbul
                importance: "major",
                region: "middle-east"
            },
            {
                title: "Fall of Safavids",
                year: 1722,
                description: "Afghan invasion leads to the collapse of the Safavid Empire.",
                location: [32.6546, 51.6680], // Isfahan
                importance: "major",
                region: "middle-east"
            },
            {
                title: "Nader Shah's Empire",
                year: 1736,
                description: "Nader Shah establishes the Afsharid dynasty and rebuilds Persian power.",
                location: [35.6892, 51.3890], // Tehran region
                importance: "medium",
                region: "middle-east"
            }
        ],
        quiz: {
            question: "What event in 1699 marked a turning point in Ottoman power?",
            options: [
                { text: "Treaty of Karlowitz", correct: true },
                { text: "Battle of Vienna", correct: false },
                { text: "Treaty of Küçük Kaynarca", correct: false },
                { text: "Battle of Lepanto", correct: false }
            ],
            explanation: "The Treaty of Karlowitz (1699) marked the first major territorial losses for the Ottoman Empire, as it was forced to cede significant territories to European powers following defeat in the Great Turkish War. This is widely considered a turning point marking the beginning of Ottoman decline."
        }
    },
    1800: {
        middleEast: {
            rulers: "Ottoman Empire implementing reforms; Qajar Persia; Muhammad Ali in Egypt",
            events: "Napoleon's invasion of Egypt; Wahhabi movement in Arabia",
            economy: "Beginning of economic modernization and European economic penetration",
            description: "The Ottoman Empire implements the Tanzimat reforms to modernize. Muhammad Ali establishes a semi-independent Egypt and modernizes its military and economy. The Wahhabi movement gains influence in Arabia.",
            cultural: {
                arts: "Traditional arts continue with increasing European influence",
                science: "Efforts to adopt European scientific and technical knowledge",
                religion: "Reform movements emerge in response to European encroachment",
                literature: "Beginnings of modern literary forms influenced by European models"
            },
            economic: {
                trade: "Growing European economic dominance and unequal trade relations",
                resources: "Early industrialization attempts in some regions",
                centers: "Traditional centers continue with growing European commercial presence",
                currency: "Financial reforms and European banking influence grows"
            },
            keyFigures: [
                {
                    name: "Muhammad Ali Pasha",
                    title: "Governor of Egypt",
                    significance: "Modernized Egypt and established a dynasty that would rule until 1952"
                },
                {
                    name: "Sultan Mahmud II",
                    title: "Ottoman Sultan",
                    significance: "Implemented significant reforms including abolishing the Janissary corps"
                }
            ]
        },
        events: [
            {
                title: "Muhammad Ali's Egypt",
                year: 1805,
                description: "Muhammad Ali Pasha establishes a de facto independent Egypt and begins modernization efforts.",
                location: [30.0444, 31.2357], // Cairo
                importance: "major",
                region: "middle-east"
            },
            {
                title: "Ottoman Tanzimat",
                year: 1839,
                description: "Ottoman Empire begins the Tanzimat reform period to modernize administration and military.",
                location: [41.0082, 28.9784], // Istanbul
                importance: "major",
                region: "middle-east"
            },
            {
                title: "First Saudi State",
                year: 1818,
                description: "Ottoman forces destroy the First Saudi State, temporarily halting Wahhabi expansion.",
                location: [24.7136, 46.6753], // Riyadh
                importance: "medium",
                region: "middle-east"
            }
        ],
        quiz: {
            question: "Who established a semi-independent Egypt in the early 19th century and began modernization efforts?",
            options: [
                { text: "Muhammad Ali Pasha", correct: true },
                { text: "Gamal Abdel Nasser", correct: false },
                { text: "Khedive Ismail", correct: false },
                { text: "King Farouk", correct: false }
            ],
            explanation: "Muhammad Ali Pasha, an Ottoman Albanian commander, seized power in Egypt in 1805. He established a de facto independent state and implemented ambitious modernization programs, creating the foundations of modern Egypt and establishing a dynasty that would rule until 1952."
        }
    },
    1900: {
        middleEast: {
            rulers: "Late Ottoman Empire; British and French influence growing",
            events: "Young Turk Revolution; Arab Revolt; World War I partitions the Ottoman Empire",
            economy: "Oil discoveries beginning to transform regional economics",
            description: "The Ottoman Empire collapses following World War I. The British and French establish mandates across the region. Arab nationalism grows in response to European colonialism. Oil is discovered in several countries, beginning a transformation of the regional economy.",
            cultural: {
                arts: "Traditional arts with strong European influences",
                science: "Educational reforms introducing modern scientific education",
                religion: "Religious reform movements respond to modernity",
                literature: "Rise of modern Arabic, Turkish, and Persian literature"
            },
            economic: {
                trade: "European economic domination through colonial structures",
                resources: "Oil discoveries begin to transform economies",
                centers: "Traditional centers continue under European control",
                currency: "Various currency systems, often tied to European currencies"
            },
            keyFigures: [
                {
                    name: "Mustafa Kemal Atatürk",
                    title: "Founder of modern Turkey",
                    significance: "Led Turkish independence movement and implemented sweeping modernization"
                },
                {
                    name: "Faisal bin Hussein",
                    title: "King of Syria and later Iraq",
                    significance: "Leader in the Arab Revolt and subsequent nation-building"
                }
            ]
        },
        events: [
            {
                title: "Ottoman Collapse",
                year: 1918,
                description: "End of World War I leads to the collapse of the Ottoman Empire and occupation of its territories.",
                location: [41.0082, 28.9784], // Istanbul
                importance: "major",
                region: "middle-east"
            },
            {
                title: "Sykes-Picot Agreement",
                year: 1916,
                description: "Secret agreement between Britain and France to divide Ottoman territories.",
                location: [33.8869, 35.5131], // Beirut
                importance: "major",
                region: "middle-east"
            },
            {
                title: "Oil Discovery in Iran",
                year: 1908,
                description: "Discovery of oil in Persia (Iran) begins the Middle Eastern oil era.",
                location: [31.3183, 48.6706], // Masjed Soleyman (first oil well)
                importance: "major",
                region: "middle-east"
            }
        ],
        quiz: {
            question: "Which agreement between European powers secretly divided Ottoman territories in the Middle East during World War I?",
            options: [
                { text: "Sykes-Picot Agreement", correct: true },
                { text: "Treaty of Sèvres", correct: false },
                { text: "Balfour Declaration", correct: false },
                { text: "San Remo Conference", correct: false }
            ],
            explanation: "The Sykes-Picot Agreement was a secret 1916 agreement between Britain and France, with assent from Russia, that defined their spheres of influence in the Middle East following the expected defeat of the Ottoman Empire. The agreement drew artificial boundaries that largely ignored local ethnic and religious divisions."
        }
    },
    1950: {
        middleEast: {
            rulers: "Independent Arab states; State of Israel established",
            events: "Arab-Israeli conflict begins; Iranian coup; Egyptian Revolution",
            economy: "Oil wealth growing in importance; beginnings of economic modernization",
            description: "The region is defined by the creation of Israel and subsequent Arab-Israeli conflicts. Arab nationalism peaks under Egypt's Gamal Abdel Nasser. Oil wealth begins transforming Gulf states. The Cold War influences regional politics and alliances.",
            cultural: {
                arts: "Modern artistic movements emerge influenced by nationalism and traditions",
                science: "Expansion of modern educational systems",
                religion: "Rise of political Islam alongside secular nationalism",
                literature: "Flourishing of modern Arabic literature addressing colonialism and independence"
            },
            economic: {
                trade: "Growing importance of oil exports",
                resources: "Oil becomes central to many economies",
                centers: "Traditional centers modernize with oil revenues",
                currency: "Establishment of national currencies in newly independent states"
            },
            keyFigures: [
                {
                    name: "Gamal Abdel Nasser",
                    title: "President of Egypt",
                    significance: "Led Arab nationalist movement and nationalized the Suez Canal"
                },
                {
                    name: "David Ben-Gurion",
                    title: "First Prime Minister of Israel",
                    significance: "Proclaimed Israel's independence and led the new state through its formative years"
                }
            ]
        },
        events: [
            {
                title: "Arab-Israeli Conflict",
                year: 1948,
                description: "Establishment of Israel and the first Arab-Israeli War.",
                location: [31.7683, 35.2137], // Jerusalem
                importance: "major",
                region: "middle-east"
            },
            {
                title: "Egyptian Revolution",
                year: 1952,
                description: "Free Officers Movement led by Nasser overthrows the monarchy and establishes a republic.",
                location: [30.0444, 31.2357], // Cairo
                importance: "major",
                region: "middle-east"
            },
            {
                title: "Iranian Coup",
                year: 1953,
                description: "CIA-backed coup overthrows Prime Minister Mossadegh after oil nationalization.",
                location: [35.6892, 51.3890], // Tehran
                importance: "major",
                region: "middle-east"
            }
        ],
        quiz: {
            question: "Which Middle Eastern leader nationalized the Suez Canal in 1956, prompting an international crisis?",
            options: [
                { text: "Gamal Abdel Nasser", correct: true },
                { text: "King Farouk", correct: false },
                { text: "Mohammad Reza Pahlavi", correct: false },
                { text: "King Hussein", correct: false }
            ],
            explanation: "Egyptian President Gamal Abdel Nasser nationalized the Suez Canal in 1956, leading to the Suez Crisis when Britain, France, and Israel invaded Egypt. U.S. and Soviet pressure ultimately forced the invaders to withdraw, boosting Nasser's prestige as a leader of Arab nationalism."
        }
    },
    2000: {
        middleEast: {
            rulers: "Mix of monarchies, republics, and authoritarian states",
            events: "Iraq War; Arab Spring revolutions; Syrian Civil War; Rise and fall of ISIS",
            economy: "Oil-dominant economies seeking diversification; economic reforms and challenges",
            description: "The region experiences significant upheaval with the Iraq War, Arab Spring revolutions, and rise and fall of ISIS. Saudi Arabia and Iran compete for regional influence. Economic diversification efforts accelerate in Gulf states.",
            cultural: {
                arts: "Contemporary arts scene engaged with global trends and local traditions",
                science: "Growing investment in education and technology",
                religion: "Religious tensions between moderate and extremist interpretations",
                literature: "Digital media transforms publishing and distribution of cultural works"
            },
            economic: {
                trade: "Oil remains dominant but diversification efforts increase",
                resources: "Gulf states invest oil wealth in economic diversification",
                centers: "Dubai, Doha, and other Gulf cities emerge as global commercial centers",
                currency: "Oil price fluctuations impact regional economies significantly"
            },
            keyFigures: [
                {
                    name: "Mohammed bin Salman",
                    title: "Crown Prince of Saudi Arabia",
                    significance: "Implemented Vision 2030 economic reforms and social liberalization"
                },
                {
                    name: "Recep Tayyip Erdoğan",
                    title: "President of Turkey",
                    significance: "Transformed Turkey's political landscape and pursued neo-Ottoman foreign policy"
                }
            ]
        },
        events: [
            {
                title: "Iraq War",
                year: 2003,
                description: "US-led invasion topples Saddam Hussein, leading to prolonged conflict.",
                location: [33.3152, 44.3661], // Baghdad
                importance: "major",
                region: "middle-east"
            },
            {
                title: "Arab Spring",
                year: 2011,
                description: "Wave of protests and revolutions across Arab countries leads to regime changes and civil wars.",
                location: [36.8065, 10.1815], // Tunis (where it began)
                importance: "major",
                region: "middle-east"
            },
            {
                title: "Syrian Civil War",
                year: 2011,
                description: "Uprising against Assad regime develops into a complex multi-sided civil war.",
                location: [33.5138, 36.2765], // Damascus
                importance: "major",
                region: "middle-east"
            },
            {
                title: "Iran Nuclear Deal",
                year: 2015,
                description: "Agreement reached between Iran and world powers over Iran's nuclear program.",
                location: [35.6892, 51.3890], // Tehran
                importance: "major",
                region: "middle-east"
            }
        ],
        quiz: {
            question: "What event beginning in Tunisia in late 2010 sparked a wave of protests and revolutions across the Arab world?",
            options: [
                { text: "Arab Spring", correct: true },
                { text: "Islamic Revolution", correct: false },
                { text: "Gulf War", correct: false },
                { text: "Oslo Accords", correct: false }
            ],
            explanation: "The Arab Spring began in Tunisia in December 2010 when Mohamed Bouazizi set himself on fire in protest against government corruption and repression. This sparked a wave of protests that spread across the Arab world, leading to the overthrow of several long-standing regimes and continuing to reshape the region today."
        }
    }
};




        // Trade routes data
        const tradeRoutesData = {
            silk_road: [
                [41.0082, 28.9784], // Constantinople/Istanbul
                [39.9334, 32.8597], // Ankara
                [37.8800, 41.1300], // Diyarbakır
                [36.3159, 43.1186], // Mosul
                [33.3152, 44.3661], // Baghdad
                [35.6892, 51.3890], // Tehran
                [39.6478, 66.9568], // Samarkand
                [43.2220, 76.8512]  // Almaty
            ],
            spice_route: [
                [31.7683, 35.2137], // Jerusalem
                [31.9454, 35.9284], // Amman
                [24.4539, 39.6142], // Medina
                [21.3891, 39.8579], // Mecca
                [15.3694, 44.1910], // Sana'a
                [12.7855, 45.0186], // Aden
                [23.6100, 58.5900], // Muscat
                [25.2854, 51.5310], // Doha
            ],
            mediterranean_route: [
                [41.0082, 28.9784], // Constantinople/Istanbul
                [37.9838, 23.7275], // Athens
                [35.1856, 33.3823], // Cyprus
                [33.8938, 35.5018], // Beirut
                [31.7683, 35.2137], // Jerusalem
                [30.0444, 31.2357], // Cairo
                [32.8872, 13.1913], // Tripoli
                [36.8065, 10.1815], // Tunis
            ]
        };
        // Define historical boundaries by region and period
        const historicalBoundaries = {
            // Very simplified boundary data - in a real application, you would use proper GeoJSON data
            "ottoman-1500": [
                [41.0082, 28.9784], // Istanbul
                [36.2048, 37.1360], // Aleppo
                [33.3128, 44.3615], // Baghdad
                [33.8938, 35.5018], // Beirut
                [31.7683, 35.2137], // Jerusalem
                [30.0444, 31.2357], // Cairo
                [36.8065, 10.1815], // Tunis
                [41.3275, 19.8187], // Tirana
                [42.6977, 23.3219], // Sofia
                [41.0082, 28.9784]  // Close the polygon
            ],
            "ottoman-1683": [
                [41.0082, 28.9784], // Istanbul
                [48.2082, 16.3738], // Vienna
                [44.8125, 20.4612], // Belgrade
                [37.9838, 23.7275], // Athens
                [36.2048, 37.1360], // Aleppo
                [33.3128, 44.3615], // Baghdad
                [29.9769, 31.1313], // Giza/Cairo
                [36.8065, 10.1815], // Tunis
                [36.7372, 3.0868],  // Algiers
                [41.0082, 28.9784]  // Close the polygon
            ],
            "ottoman-1900": [
                [41.0082, 28.9784], // Istanbul
                [42.6977, 23.3219], // Sofia
                [35.1856, 33.3823], // Cyprus
                [36.2048, 37.1360], // Aleppo
                [33.3128, 44.3615], // Baghdad
                [29.9769, 31.1313], // Giza/Cairo
                [21.3891, 39.8579], // Mecca
                [41.0082, 28.9784]  // Close the polygon
            ],
            "safavid-1600": [
                [33.3128, 44.3615], // Baghdad
                [35.6892, 51.3890], // Tehran
                [36.3, 59.6], // Mashhad
                [33.0, 69.0], // Eastern border
                [25.0, 55.0], // UAE area
                [33.3128, 44.3615]  // Close the polygon
            ]
        };
        

        // Define empire colors
        const empireColors = {
            "Ottoman Empire": "rgba(142, 68, 173, 0.5)",
            "Mamluk Sultanate": "rgba(41, 128, 185, 0.5)",
            "Safavid Empire": "rgba(39, 174, 96, 0.5)",
            "Ayyubid Dynasty": "rgba(231, 76, 60, 0.5)",
            "Mongol/Ilkhanate": "rgba(243, 156, 18, 0.5)",
            "Byzantine Empire": "rgba(52, 152, 219, 0.5)",
            "British/French Mandate": "rgba(22, 160, 133, 0.5)",
            "Modern States": "rgba(192, 57, 43, 0.5)"
        };