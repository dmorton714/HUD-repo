


// Street tips separated by Categories (Shelters, White Flag, etc). 
// Each category is an array of objects. 
// First object contains the category name (Shelters, White Flag, etc), and general details concerning the category.
// Next, each subcategory is an object with the subcategory name, a note (if applicable), and a list of resources.
// Each resource is an object with the resource name, address, contact, email, and details.
// Structure:
// Category: {
//     categoryName: string,
//     generalDetails: string,
//     subcategoryList: [
//         {
//             subcategoryName: string,
//             note: string,
//             resourceList: [
//                 {
//                     name: string,
//                     address: string,
//                     contact: string,
//                     email: string,
//                     details: string,
//                 }
//             ]
//         }


// Shelters
const shelters = [
    {
        categoryName: "Shelters",
        description: 'Emergency shelter, bed reservations, and referrals to other social services',
        generalDetails: null
    },
    {
        subcategory: "Common Assessment for housing and services",
        note: `Common Assessment (run by Family Health Centers Phoenix) identifies the needs of people experiencing homelessness through a short survey, and then connects you to the best resources to serve you, including housing or case management.`,
        resourceList: [
        {
            name: "Common Assessment",
            address: "1300 S. 4th Street #200 -- Walk-ins accepted: Tuesday-Friday, 10am-3pm",
            contact: "tel:(502) 637-2080",
            email: null,
            details: `Calls: Mon-Fri, 10am-3pm`
        }
        ],
    },
    {
        subcategory: "Shelter Referral and Resources",
        note: `Coordinated Shelter Access (run by the Coalition for the Homeless) provides emergency shelter bed reservations and referrals to other social services.`,
        resourceList: [
        {
            name: "Coordinated Shelter Access",
            address: "1300 S. 4th Street #250 -- Open: Mon-Fri, 10am-1pm",
            contact: "tel:(502) 637-2337",
            email: "csa@louhomeless.org",
            details: `Daily, 10am-1pm (CSA is closed on these holidays, so go directly to single emergency shelters (no walk-ins accepted in family shelters): New Year's Day, MLK Day, Memorial Day, Juneteenth, Fourth of July, Labor Day, Thanksgiving, day after Thanksgiving, Christmas Eve, Christmas Day)`
        }
        ],
    },
    {
        subcategory: "Single Overnight Emergency Shelters",
        note: "Call (502) 637-2337 for a bed unless otherwise noted",
        resourceList: [
        {
            name: "Center Ministries (men)",
            address: "757 S. Brook St",
            contact: null,
            email: null,
            details: "Open 7pm-6:30am. Men only; meals not provided."
        },
        {
            name: "Salvation Army Center of Hope",
            address: "911 S. Brook St",
            contact: null,
            email: null,
            details: "Check in: 5:30p women / 6p men. Adults; meals; check in at 9p for 18-24yos."
        },
        {
            name: "St. Vincent de Paul Ozanam Inn (men)",
            address: "1034 S. Jackson St.",
            contact: "tel:(502) 301-8678",
            email: null,
            details: "Men only; meals; check-in times vary, call ahead."
        },
        {
            name: "Wayside Christian Mission (singles & low barrier)",
            address: "432 E Jefferson St",
            contact: null,
            email: null,
            details: "Check-in 4p (s), 3:30p (LB). Men & women; meals provided."
        },
        {
            name: "The Healing Place (addiction recovery)",
            address: "Men: 1020 W Market St. <br> Women: 1503 15th St.",
            contact: "tel:(502) 585-4848",
            email: null,
            details: "No reservations. First come, first served; check in 3:30pm."
        },
        ]
    },
    {
        subcategory: "Safe Outdoor Space",
        resourceList: [
        {
            name: "The Hope Village (run by The Hope Buss)",
            address: "212 E College St",
            contact: "tel:(502) 882-3900",
            email: null,
            details: "New residents need referral from approved agency."
        }
        ]
    },
    {
        subcategory: "Family Overnight Emergency Shelters",
        note: "Call (502) 637-2337 for family shelter information",
        resourceList: [
        {
            name: "Salvation Army Center of Hope",
            address: "911 S. Brook St.",
            contact: null,
            email: null,
            details: "Families; meals served."
        },
        {
            name: "Volunteers of America",
            address: "1321 S. Preston St.",
            contact: null,
            email: null,
            details: "Families."
        },
        {
            name: "Wayside Christian Mission (family & low-barrier)",
            address: "432 E. Jefferson St.",
            contact: null,
            email: null,
            details: "Families; meals served."
        },
        ]
    },
    {
        subcategory: "Young Adult Shelters / Centers",
        resourceList: [
        {
            name: "YMCA Shelter / Youth Development Center",
            address: "2400 Crittenden Dr",
            contact: "tel:(502) 635-5233",
            email: null,
            details: "24/7 shelter for youth 12-17.<br> Drop-in center for 18-24yos.<br> M-F 8:30a-2p."
        },
        {
            name: "TAYLRD (Youth Drop-In Center)",
            address: "1020 East Broadway",
            contact: "tel:(502) 287-0602",
            email: null,
            details: "Drop-in for 16-25yos.<br> M-F 2-5pm"
        },
        ]
    },
    {
        subcategory: "Resource Centers",
        resourceList: [
        {
            name: "VOCAL-KY",
            address: "723 S. Brook St",
            contact: "tel:(502) 676-0039",
            email: null,
            details: "Drop-in center: MWTh 10am-2pm.<br> Snacks, hygiene, harm reduction supplies, respite, leadership development, organizing, more"
        },
        ]
    },
    {
        subcategory: "Emergency Day Shelters",
        resourceList: [
        {
            name: "Exodus Family Ministries",
            address: "4205 Cane Run Rd",
            contact: "tel:(502) 614-8544 x105",
            email: null,
            details: "(adults 18) <br> MWF 11a-3p (women only Wed; men only Fri)"
        },
        {
            name: "Center Ministries",
            address: "757 S. Brook St",
            contact: "tel: (502) 584-6543 x105",
            email: null,
            details: "(women & children only) <br> Mon-Fri, 8am-2pm.<br> Offers storage"
        },
        {
            name: "Salvation Army Day Center",
            address: "911 S. Brook St",
            contact: "tel:(502) 671-4900",
            email: null,
            details: "(enter from Breckinridge) <br> Open M-F 9-3:30p <br> Adults only (18+). <br> Offers storage, clothing, closet, toiletries, lunch"
        },
        {
            name: "St. John Center (men only)",
            address: "700 E. Muhammad Ali",
            contact: "tel:(502) 568-6758",
            email: null,
            details: "Daily 8a-4p, but W 8a-2p <br> Trans and gender diverse folx welcome"
        },
        {
            name: "UP for Women & Children",
            address: "425 S 2nd St",
            contact: "tel:(502) 384-0001",
            email: null,
            details: "(women/children) <br> Open MW 9a-3pm; F 9a-1pm <br> Trans and gender diverse people welcome"
        }

        ]
    },
];

// White Flag
const whiteFlag = [
    {
        categoryName: "White Flag",
        description: 'Indoor shelter during extreme weather events',
        generalDetails: `The Coalition coordinates Operation: White Flag 
                        so you can go indoors during extreme weather: 
                        when the temperature is 35° or lower (including 
                        windchill) or 95° or higher (including heat index), or 
                        if an ozone alert has been called. 
                        On a White Flag day, call tel:(502) 637-2337 or go 
                        straight to one of the below shelters. You may 
                        remain indoors until the extreme weather passes
                        RAVE ALERT SYSTEM sends texts about shelter hours, White Flag, & 
                        other critical info. Sign up at https://louhomeless.org/rave. `
    },
    {
        subcategory: "White Flag",
        note: null,
        resourceList: [
        {
            name: "Salvation Army Center of Hope",
            address: "911 South Brook St.",
            contact: "tel:(502) 671-4900",
            email: null,
            details: null,
        },
        {
            name: "Wayside Christian Mission",
            address: "432 East Jefferson St.",
            contact: "tel:(502) 742-7019",
            email: null,
            details: "Call CSA at (502) 637-2337 for info & notifications",
        }
        ],
    },
]

// Family & Children
const familyAndChildren = [
    {
        categoryName: "Family and Children",
        description: 'Services for families and children in need of housing, shelter, and educational assistance',
        generalDetails: null
    },
    {
        subcategory: "Pet Needs",
        note: null,
        resourceList: [
        {
            name: "My Dog Eats First",
            address: "2640 Gleeson Lane Ste 2D",
            contact: "tel:(502) 694-2746",
            email: null,
            details: "Contact for vet care, other help for houseless pets"
        }
        ]
    },
    {
        subcategory: "JCPS Students",
        note: "Family Resource & Youth Service Centers help JCPS families overcome barriers to learning. Find your FRYSC at school",
        resourceList: [
        {
            name: "McKinney-Vento federal law",
            address: null,
            contact: "tel:(502) 485-3650",
            email: null,
            details: `Students experiencing homelessness are protected under McKinney-Vento federal law and have a right to remain in the same school if they move; enroll in a new school; get transportation/services; and challenge decisions`
        }
        ]
    },
    {
        subcategory: "Shelter and Housing",
        note: null,
        resourceList: [
        {
            name: "Overnight Shelter",
            address: null,
            contact: "tel:(502) 637-2337",
            email: null,
            details: null,
        },
        {
            name: "Housing",
            address: null,
            contact: "tel:(502) 637-2080",
            email: null,
            details: null,
        },
        {
            name: "Public housing or Section 8 (Housing Choice Voucher)",
            address: null,
            contact: "tel:(502) 569-6076",
            email: null,
            details: "Website: https://lmha1.org",
        },
        {
            name: "Black lives matter",
            address: null,
            contact: "tel:(502) 509-2357",
            email: null,
            details: "BLM provides accompaniment and resources for Black femmes and families",
        },
        ]
    }
]

// Outreach
const outreach = [
    {
        categoryName: "Outreach",
        description: 'Volunteer groups working with unhoused people in the community',
        generalDetails: null
    },
    {
        subcategory: "Grassroots Street Outreach Groups",
        note: "Volunteer groups working with unhoused people",
        resourceList: [
        {
            name: "BLM Lou",
            address: null,
            contact: "tel:(502) 509-2357",
            email: null,
            details: "@blacklivesmatterlouisville",
        },
        {
            name: "ChangeU",
            address: null,
            contact: "tel:(502) 546-4502",
            email: null,
            details: "@changeufoundation",
        },
        {
            name: "Emmaus Ministries",
            address: null,
            contact: null,
            email: null,
            details: "@emmausministriesinc",
        },
        {
            name: "Exit 0",
            address: null,
            contact: "tel:(502) 541-2353",
            email: null,
            details: "@jesuscaresatexit0",
        },
        {
            name: "Fern Creek UMC Street Reach",
            address: null,
            contact: "tel:(502) 931-8529",
            email: null,
            details: "@metrostreetreach",
        },
        {
            name: "First Unitarian",
            address: null,
            contact: "tel:(502) 585-5110",
            email: null,
            details: "@FirstUnitarianLouisville",
        },
        {
            name: "The Forgotten Louisville",
            address: null,
            contact: "tel:(502) 345-9308",
            email: null,
            details: "@TFLoutreach",
        },
        {
            name: "Grace Crossings Church",
            address: null,
            contact: "tel:(502) 882-2467",
            email: null,
            details: "@gracechurchlou",
        },
        {
            name: "Hip Hop Cares",
            address: null,
            contact: "tel:(502) 457-5317",
            email: null,
            details: "@HipHopCares502",
        },
        {
            name: "Hope Buss",
            address: null,
            contact: null,
            email: null,
            details: "@thehopebuss",
        },
        {
            name: "Jacob's Ladder Outreach",
            address: null,
            contact: null,
            email: null,
            details: "@jacobsladderoutreach",
        },
        {
            name: "Lost Sheep",
            address: null,
            contact: "tel:(502) 539-1378",
            email: null,
            details: "lostsheepoflouisville.org",
        },
        
        {
            name: "Louisville Outreach for the Unsheltered (L.O.U.)",
            address: null,
            contact: "tel:(502) 754-3464 ext. 3",
            email: null,
            details: "@LouOutreach",
        },
        
        {
            name: "LRCC",
            address: null,
            contact: "tel:(502) 398-5258",
            email: null,
            details: "@LouisvilleRecoveryConnection",
        },
        {
            name: "RC Love Squad",
            address: null,
            contact: "tel:(502) 805-7747",
            email: null,
            details: "@RiverCityLoveSquad",
        },
        {
            name: "Share the Love Outreach",
            address: null,
            contact: "tel:(502) 649-3998",
            email: null,
            details: "@stloutreach",
        },
        {
            name: "South End Street Angels",
            address: null,
            contact: "tel:(502) 422-1923",
            email: null,
            details: "@southendstreetangels",
        },
        {
            name: "VOCAL-KY",
            address: null,
            contact: "tel:(502) 676-0039",
            email: null,
            details: "@vocalky",
        },
        {
            name: "Women of the Well",
            address: null,
            contact: "tel:(502) 498-6018",
            email: null,
            details: "@WoWMinstry",
        },
        ],
    },
    {
        subcategory: "Street Outreach Organizations ",
        note: "Outreach organizations who assist unhoused people with mental health, addiction, and stabilization",
        resourceList: [
        {
            name: "C.A.R.E",
            address: null,
            contact: "tel:(502) 636-3781",
            email: null,
            details: null,
        },
        {
            name: "Kentucky Harm Reduction Coalition",
            address: null,
            contact: "tel:(502) 537-6061",
            email: null,
            details: "Access to naloxone, supplies, and medication for opioid use disorder",
        },
        {
            name: "Metro Homeless Engagement and Assessment Response Team (HEART)",
            address: null,
            contact: "tel:(502) 574-5771",
            email: null,
            details: null,
        },
        {
            name: "NuLease",
            address: null,
            contact: "tel:(502) 492-7455",
            email: null,
            details: "Call for recovery, mobile medical unit, and primary care services",
        },
        {
            name: "Seven Counties Services",
            address: null,
            contact: `Homeless Outreach Team: tel:(502) 589-8926
                        24/7 Adult Crisis Line: 988 or tel:(502) 589-4313 
                        Schedule first appointment: tel:(502) 589-1100`,
            email: null,
            details: null,
        },
        {
            name: "St. John Center",
            address: null,
            contact: "tel:(502) 936-0173",
            email: null,
            details: "Contact the Outreach Manager for help at your location",
        },
        {
            name: "Wellspring",
            address: null,
            contact: `24/7 crisis stabilization unit: tel:(502) 561-1072
                        Services: tel:(502) 637-4361 `,
            email: null,
            details: null,
        },
        ]
    },
    {
        subcategory: "Other Resources",
        note: null,
        resourceList: [
        {
            name: "Catholic Charities",
            address: null,
            contact: "tel:(502) 637-9786",
            email: null,
            details: null,
        },
        {
            name: "Community Ministries",
            address: null,
            contact: null,
            email: null,
            details: "louisvilleministries.org",
        },
        {
            name: "Center for Accessible Living",
            address: null,
            contact: "tel:(502) 589-6620",
            email: null,
            details: null,
        },
        {
            name: "Eviction Help",
            address: null,
            contact: null,
            email: null,
            details: "https://stopmyeviction.org",
        },
        {
            name: "KEPT Inc",
            address: null,
            contact: "tel:(502) 465-5378",
            email: null,
            details: "payee services by appt",
        },
        {
            name: "Legal Aid Society",
            address: null,
            contact: "tel:(502) 584-1254",
            email: null,
            details: "M-F 9a-5p",
        },
        {
            name: "Legal Aid Society",
            address: null,
            contact: "tel:(502) 584-1254",
            email: null,
            details: "M-F 9a-5p. 416 W. Muhammad Ali Blvd #300; yourlegalaid.org",
        },
        {
            name: "Louisville Free Public Library",
            address: "Main Library: 301 York St.Main Library: 301 York St.",
            contact: "tel:(502) 574-1781",
            email: null,
            details: "www.lfpl.org. Open Mon-Thu 9a-9p, Fri-Sat, 9a-5p, Sun 1-5p",
        },
        {
            name: "Useful Contacts",
            address: null,
            contact: null,
            email: null,
            details: "Dial 2-1-1 for local referrals. Dial 9-8-8 for National Suicide & Crisis Lifeline",
        },
        ],
    }
]

// Food
const food = [
    {
        categoryName: "Food",
        description: 'Meals and food assistance contacts',
        generalDetails: null
    },
    {
        subcategory: "Meals",
        note: null,
        resourceList: [
        {
            name: "Beulah Presbyterian Church (Ramsey Building)",
            address: "6704 Bardstown",
            contact: "tel:(502) 435-4313",
            email: null,
            details: "Tu 5:30-6:15pm"
        },
        {
            name: "Cathedral of the Assumption",
            address: "404 Cathedral Way (alley)",
            contact: null,
            email: null,
            details: "Lunch daily 12:15-1pm"
        },
        {
            name: "Feed the City",
            address: "1100 S. 26th St",
            contact: "tel:(502) 772-5384",
            email: null,
            details: "Mo-Sat 1:30-4pm"
        },
        {
            name: "Fourth Ave United Methodist Church",
            address: "318 W St Catherine",
            contact: "tel:(502) 585-2176",
            email: null,
            details: "MTThFS 12p"
        },
        {
            name: "Franciscan Kitchen",
            address: "748 South Preston St.",
            contact: "tel:(502) 589-0140",
            email: null,
            details: "Mon-Sat 10:30am-12:30pm (closed 1st Sat of mo)"
        },
        {
            name: "Hip Hop Cares Outreach",
            address: "First & Broadway",
            contact: "tel:(502) 457-5317",
            email: null,
            details: "Su 11:00am"
        },
        {
            name: "Loaves & Fishes Inc",
            address: "500 E. Caldwell St.",
            contact: "tel:(502) 718-5264",
            email: null,
            details: "Sat 3-4pm"
        },
        {
            name: "Lord's Kitchen",
            address: "1811 Standard Ave",
            contact: "tel:(502) 413-0198",
            email: null,
            details: "MTThF 12:15p"
        },
        {
            name: "Lost Sheep (serving at Green St. Baptist Church)",
            address: "519 E. Gray Street",
            contact: "tel:(502) 539-1378",
            email: null,
            details: "Thurs 6pm"
        },
        {
            name: "Salvation Army Red Kettle Cafe",
            address: "911 S Brook St",
            contact: "tel:(502) 671-4900",
            email: null,
            details: "Daily, 11:30a, 5pm"
        },
        {
            name: "St. Augustine Catholic Church",
            address: "1310 W. Broadway",
            contact: "tel:(502) 584-4602",
            email: null,
            details: "Sack lunches: Mon-Thurs 10am-12pm"
        },
        {
            name: "St. Vincent de Paul Open Hand Kitchen",
            address: "1026 S Jackson St.",
            contact: "tel:(502) 584-2480",
            email: null,
            details: "Daily, 5pm"
        }
        ],
    },
    {
        subcategory: "Food Resources",
        note: null,
        resourceList: [
        {
            name: "Calvary Episcopal Church",
            address: "821 S. 4th St",
            contact: "tel:(502) 587-6011",
            email: null,
            details: "Food Pantry MTTh 9:30-11:30a"
        },
        {
            name: "Change Today, Change Tomorrow",
            address: null,
            contact: "tel:(502) 512-2160",
            email: null,
            details: "@ChangeTodayChangeTomorrow. Feed the West provides pop-up grocery pick-ups "
        },
        {
            name: "Dare to Care Food Bank",
            address: null,
            contact: "tel:(502) 966-3821",
            email: null,
            details: "https://daretocare.org/need-food/ "
        },
        {
            name: "Salvation Army Food Pantry",
            address: "911 South Brook St.",
            contact: "tel:(502) 671-4900",
            email: null,
            details: "Food box pick-ups on Tuesdays, 1-2pm"
        },
        {
            name: "SNAP (food stamps) ",
            address: "908 W Broadway",
            contact: "tel:(855) 306-8959",
            email: null,
            details: "M-F 8a-4:30pm. Get more info or enroll: kynect.ky.gov/benefits "
        }
        ],
    }
]

// HealthCare 
const healthCare = [
    {
        categoryName: "Health Care",
        description: 'Medical care and treatment contacts',
        generalDetails: null
    },
    {
        subcategory: null,
        note: null,
        resourceList: [
        {
            name: "Brightview Recovery Services",
            address: "9702 Stonestreet Rd, Ste 120",
            contact: "tel:(866) 934-7450",
            email: null,
            details: "M-F 8a-5p; Sat by appt only ",
        },
        {
            name: "DDM Behavioral Health Services",
            address: "2210 Meadow Drive",
            contact: "tel:(502) 384-6009",
            email: null,
            details: "M-F 9a-5p; Sat by appt only",
        },
        {
            name: "FHC Phoenix Health Care for the Homeless",
            address: "712 East Muhammad Ali",
            contact: "tel:(502) 568-6972",
            email: null,
            details: "Mon-Fri, 7:30am - 4pm",
        },
        {
            name: "Family Community Clinic",
            address: "1406 E Washington St.",
            contact: "tel:(502) 384-8444",
            email: null,
            details: "M 1-6pm; T 1-5pm; W/Th 9a-5pm; Fri 9a-12:30pm",
        },
        {
            name: "Kentucky Health Justice Network",
            address: null,
            contact: "tel:(502) 576-4576",
            email: null,
            details: "Free inclusive help with reproductive health",
        },
        {
            name: "Norton Children’s Medical Group - Novak Center",
            address: "411 E Chestnut St, Level 1",
            contact: "tel:(502) 588-3440",
            email: null,
            details: "Pediatric primary care, M-F 8am-5pm",
        },
        {
            name: "Norton Children’s Hospital Emergency Dept",
            address: "231 East Chestnut St",
            contact: "tel:(502) 629-6000",
            email: null,
            details: null,
        },
        {
            name: "Shawnee Christian Health Center",
            address: "234 Amy Ave",
            contact: "tel:(502) 778-0001",
            email: null,
            details: "MTWF 8:30am-5pm; Th 8:30am-7pm",
        },
        {
            name: "Louisville Metro Health Department TB Clinic",
            address: "400 East Gray St.",
            contact: "tel:(502) 574-6617 to make appt",
            email: null,
            details: null,
        },
        {
            name: "Planned Parenthood",
            address: "842 S 7th St",
            contact: "tel:(800) 769-0045",
            email: null,
            details: "MWThF 8am-4pm; Tues 10am-6pm",
        },
        {
            name: "SAMHSA’s National Helpline",
            address: null,
            contact: "tel:(800) 662-4357",
            email: null,
            details: "For people facing mental or substance abuse crises",
        },
        {
            name: "Seven Counties Services Crisis Line",
            address: null,
            contact: "tel:(502) 589-4313",
            email: null,
            details: null,
        },
        {
            name: "UofL Hospital Emergency Room",
            address: "530 S Jackson St",
            contact: "tel:(502) 562-3015",
            email: null,
            details: null,
        },
        {
            name: "UofL 550 Clinic (HIV clinic)",
            address: "550 S Jackson St",
            contact: "tel:(502) 561-8844",
            email: null,
            details: "Mon - Fri, 8:30am - 4:30pm",
        },
        {
            name: "Wellspring (mental health/addiction)",
            address: null,
            contact: "tel:(502) 561-1072",
            email: null,
            details: "Services: (502) 637-4361",
        },
        ],
    },
    
]

// Jobs & Education
const jobsAndEducation = [
    {
        categoryName: "Jobs & Education",
        description: 'Job training and education contacts',
        generalDetails: null
    },
    {
        subcategory: null,
        note: null,
        resourceList: [
        {
            name: "Blueprint 502",
            address: "800 S Preston St",
            contact: "tel:(502) 290-6121",
            email: null,
            details: "blueprint502.org. Full-time education/training for young adults 18-24",
        },
        {
            name: "Family Scholar House",
            address: "403 Reg Smith",
            contact: "tel:(502) 584-8090",
            email: null,
            details: "Single parent academic support",
        },
        {
            name: "Goodwill Opportunity Centers",
            address: `909 E Broadway, 
                      2820 W. Broadway, 
                      `,
            contact: "tel:(844) 495-9675 x0",
            email: null,
            details: "216 W. Chestnut (The Spot, young adults 16-24), 6201 Preston Hwy, Suite A (bilingual center)",
        },
        {
            name: "Goodwill Industries of KY Excel Center",
            address: "6203 Preston Hwy",
            contact: "tel:(502) 337-3322",
            email: null,
            details: "Free adult HS",
        },
        {
            name: "Louisville Urban League Workforce Development",
            address: "1535 West Broadway",
            contact: "tel:(502) 566-3371",
            email: null,
            details: null,
        },
        {
            name: "Salvation Army Chefs for Success Program",
            address: null,
            contact: "tel:(502) 671-4900",
            email: null,
            details: "Six week culinary training",
        },
        {
            name: "YMCA Safe Place & Youth Development Center",
            address: "2400 Crittenden Dr",
            contact: "tel:(502) 635-5233",
            email: null,
            details: "M-F 9a-2pm. Serving young adults ages 16-22",
        },
        ],
    },
]

// Transitional Housing
const transitionalHousing = [
    {
        categoryName: "Transitional Housing",
        description: 'Temporary housing contacts',
        generalDetails: null
    },
    {
        subcategory: null,
        note: null,
        resourceList: [
        {
            name: "House of Ruth",
            address: null,
            contact: "tel:(502) 589-6605",
            email: null,
            details: "Shelter (502-589-6605), housing, & support (502-587-5080) for people with HIV",
        },
        {
            name: "Kristy Love Foundation",
            address: null,
            contact: "tel:(502) 408-3129",
            email: null,
            details: "Recovery/housing for addiction/trafficking survivors",
        },
        {
            name: "Mission Sisters",
            address: null,
            contact: "tel:(502) 396-5094",
            email: null,
            details: "missionsisters.org ",
        },
        {
            name: "Rhonda's Another Chance",
            address: null,
            contact: "tel:(502) 776-8830",
            email: null,
            details: "Short-term housing for women, rhondashouse.org",
        },
        ],
    },
]

// LGBTQ+
const lgbtqPlus = [
    {
        categoryName: "LGBTQ+",
        description: 'Group meetings, support, clothing, and more resources',
        generalDetails: `If you believe you're experiencing 
                        discrimination, you may file a complaint through 
                        Louisville's Human Relations Commission (745 W. 
                        Main Street) via phone at (502) 574-3631 Mondays 
                        through Fridays from 8am-5pm. Louisville's Fairness 
                        Ordinance protects LGBTQ+ people from 
                        discrimination`
    },
    {
        subcategory: null,
        note: null,
        resourceList: [
        {
            name: "LTMA",
            address: null,
            contact: null,
            email: null,
            details: "Monthly group on 4th Monday, 6-8pm | 18+ only | loutransmascalliance.com",
        },
        {
            name: "Louisville Youth Group",
            address: "417 E Broadway",
            contact: "tel:(502) 430-2016",
            email: null,
            details: "Group meetings, support, clothing, more",
        },
        {
            name: "Kentucky Health Justice Network",
            address: null,
            contact: null,
            email: null,
            details: "khjn.org | Assistance accessing affirming care",
        },
        {
            name: "Sweet Evening Breeze",
            address: "801 Barrett Avenue #211",
            contact: "tel:(502) 690-4003",
            email: null,
            details: `sweeteveningbreeze.org   
                        Drop-in services for youth: MTThF 10a-4p 
                        Services include consultations, housing assistance,  
                        affirming care, snacks, rest area, mental health,  
                        hygiene, HIV testing, more`,
        },
        ]
    },
]

// Veterans
const veterans = [
    {
        categoryName: "Veterans",
        description: 'Housing, benefits, support, and more resources for veterans',
        generalDetails: "VA Homeless Services are open to veterans not eligible for VA healthcare"
    },
    {
        subcategory: null,
        note: null,
        resourceList: [
        {
            name: "KDVA Homeless Veterans",
            address: null,
            contact: "tel:(502) 782-5730",
            email: null,
            details: null,
        },
        {
            name: "Louisville Metro Office for Veterans",
            address: null,
            contact: "tel:(502) 574-5748",
            email: null,
            details: null,
        },
        {
            name: "National Call Center for Homeless Veterans",
            address: null,
            contact: null,
            email: null,
            details: "24/7 Hotline: 1-877-4AID-VET (1-877-424-3838)",
        },
        {
            name: "Robley Rex VA Medical Center",
            address: "800 Zorn Ave",
            contact: null,
            email: null,
            details: `Homeless Program: (502) 287-4178 , (502) 287-4000 | Mental health: (502) 287-6110`,
        },
        {
            name: "St. Vincent de Paul Louisville",
            address: null,
            contact: "tel:(502) 272-2150",
            email: null,
            details: "Permanent housing for veterans Waypoint SRO | svdplou.org/housing-shelter",
        },
        {
            name: "VA Healthcare Hotline",
            address: null,
            contact: "tel:(877) 222-8387",
            email: null,
            details: null,
        },
        {
            name: "VA Regional Office (Veterans Benefits Admin)",
            address: "321 W Main St, #390",
            contact: "tel:(800) 827-1000",
            email: null,
            details: null,
        },
        {
            name: "Veterans Crisis Line",
            address: null,
            contact: null,
            email: null,
            details: "Dial 988 or text 838255",
        },
        {
            name: "Volunteers of America Mid-States",
            address: "2820 W. Broadway, Suite 600",
            contact: "tel:(502) 384-0868",
            email: null,
            details: "Supportive Services for Veteran Families (SSVF)",
        },
        ]
    },
]

// Partner Violence & Human Trafficking
const partnerViolenceAndHumanTrafficking = [
    {
        categoryName: "Partner Violence & Human Trafficking",
        description: 'Support services for victims of partner violence and human trafficking',
        generalDetails: null
    },
    {
        subcategory: "Partner Violence",
        note: `If you're facing intimate partner violence and/or 
                sexual violence, call the Center for Women and 
                Families' 24/7 crisis line at tel:(502) 581-7222 to receive 
                supportive services, resources, crisis counseling, and 
                safety planning. In addition to the crisis line, the 
                Center provides community resources for survivors; 
                emergency shelter for survivors of high lethality 
                intimate partner abuse; and guidance on obtaining 
                emergency protective orders and legal advocacy`,
        resourceList: [
        {
            name: "Center for Women and Families",
            address: "927 S 2nd St.",
            contact: "tel:(502) 581-7222",
            email: null,
            details: "(24-hr hotline) | thecenteronline.org",
        },
        ]
    },
    {
        subcategory: "Human Trafficking",
        note: null,
        resourceList: [
        {
            name: "Kristy Love Foundation",
            address: null,
            contact: "tel:(502) 408-3129",
            email: null,
            details: "Women in recovery from trafficking/addiction ",
        },
        {
            name: "Safe Passage",
            address: null,
            contact: "tel:(502) 324-3013",
            email: null,
            details: "safepassageky.org | M-F 9am-5pm | support services for trafficked and exploited youth",
        },
        ]
    },
]

// General Resources
const generalResources = [
    {
        categoryName: "General Resources",
        description: 'Get IDs, birth certificates, Social Security cards, and file shelter complaints',
        generalDetails: `If any person experiencing homelessness has an 
                        issue, complaint, or concern about a Louisville 
                        shelter, agency, or staff member, they should first 
                        follow that agency's individual grievance procedure, 
                        which should be physically posted and/or available 
                        online.  
                        If the agency's response is not satisfactory, the 
                        person may contact Louisville Metro Office of Social 
                        Services (OSS) at (502) 574-5050. You may also 
                        come in to OSS at 701 W Ormsby Avenue, Suite 
                        201, from 8am to 5pm Monday through Friday. 
                        Please describe what happened and provide any 
                        documentation you have. OSS will contact the 
                        agency within five business days. After that, they will 
                        review the case and issue a response to the client 
                        and agency within five business days of receipt of 
                        agency response. If necessary, they may schedule a 
                        meeting or other type of mediation between the 
                        client and agency. In case of a threat to the client's 
                        safety, OSS might follow an alternative procedure to 
                        ensure safety and confidentiality`
    },
    {
        subcategory: "Getting Identifying Documents",
        note: `Visit St. John Center, UP for Women and Children, 
                or VOCAL-KY for help applying for and accessing 
                free birth certificates and ID cards. View the map on 
                the back of this booklet and see page 7 for hours`,
        resourceList: [
        {
            name: "Birth Certificate",
            address: null,
            contact: null,
            email: null,
            details: `If you were born in Kentucky, 
                        go to louhomeless.org/birthcert or call the Office of 
                        Vital Statistics at (502) 564-4212. If you were born 
                        elsewhere, search the internet for “copy of birth 
                        certificate” with your state/country`,
        },
        {
            name: "Social Security Card",
            address: null,
            contact: null,
            email: null,
            details: `See www.ssa.gov/
                        ssnumber, call SSA at 1-800-772-1213, or go to the 
                        Louisville SSA office at 601 W Broadway. Bring a 
                        copy of your birth certificate and a state-issued ID`,
        },
        {
            name: "ID Card",
            address: null,
            contact: null,
            email: null,
            details: `Unhoused Kentuckians are now eligible 
                        for free ID cards. To get a free ID, you must work 
                        with a shelter or other service provider, such as St. 
                        John Center, UP, or VOCAL-KY. They will help you 
                        apply for and access an ID card for free`,
        },
        ]
    },
]

export const streetTips = {
    shelters, 
    whiteFlag, 
    familyAndChildren, 
    outreach,
    food,
    healthCare,
    jobsAndEducation,
    transitionalHousing,
    lgbtqPlus,
    veterans,
    partnerViolenceAndHumanTrafficking,
    generalResources,
};

export function useStreetTips() {
    return streetTips;
}