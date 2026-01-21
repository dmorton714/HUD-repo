
function createMapLink(address) {
    if (!address) return null;
    const encodedAddress = encodeURIComponent(address);
    return `<a href="https://www.google.com/maps/search/?api=1&query=${encodedAddress}" target="_blank">${address}</a>`;
}

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
        categoryIcon: "house",
        description: 'Emergency shelter, bed reservations, and referrals to other social services',
        generalDetails: null
    },
    {
        subcategory: "Common Assessment for housing and services",
        note: `Common Assessment (run by Family Health Centers Phoenix) identifies the needs of people experiencing homelessness through a short survey, and then connects you to the best resources to serve you, including housing or case management.`,
        resourceList: [
        {
            name: "Common Assessment",
            address: [createMapLink("1300 S. 4th Street #200")],
            contact: ["<a href='tel:(502) 637-2080'>(502) 637-2080</a>"],
            email: null,
            details: `Calls: Mon-Fri, 10am-3pm <br>
                        Walk-ins accepted: Tuesday-Friday, 10am-3pm`
        }
        ],
    },
    {
        subcategory: "Shelter Referral and Resources",
        note: `Coordinated Shelter Access (run by the Coalition for the Homeless) provides emergency shelter bed reservations and referrals to other social services.`,
        resourceList: [
        {
            name: "Coordinated Shelter Access",
            address: [createMapLink("1300 S. 4th Street #250")],
            contact: ["<a href='tel:(502) 637-2337'>(502) 637-2337</a>"],
            email: "csa@louhomeless.org",
            details: `CSA is closed on these holidays, so go directly to single emergency shelters. No walk-ins accepted in family shelters) <br> New Year's Day, MLK Day, Memorial Day, Juneteenth, Fourth of July, Labor Day, Thanksgiving, day after Thanksgiving, Christmas Eve, Christmas Day
                        <br> Open: Mon-Fri, 10am-1pm`
        }
        ],
    },
    {
        subcategory: "Single Overnight Emergency Shelters",
        note: "Call (502) 637-2337 for a bed unless otherwise noted",
        resourceList: [
        {
            name: "Center Ministries (men)",
            address: [createMapLink("757 S. Brook St")],
            contact: null,
            email: null,
            details: "Open 7pm-6:30am <br> Men only <br> Meals not provided."
        },
        {
            name: "Salvation Army Center of Hope",
            address: [createMapLink("911 S. Brook St")],
            contact: null,
            email: null,
            details: "Check in: 5:30p women / 6p men <br> Adults Meals <br> Check in at 9p for 18-24 yos"
        },
        {
            name: "St. Vincent de Paul Ozanam Inn (men)",
            address: [createMapLink("1034 S. Jackson St.")],
            contact: ["<a href='tel:(502) 301-8678'>(502) 301-8678</a>"],
            email: null,
            details: "Men only <br> Meals <br> Check-in times vary, call ahead"
        },
        {
            name: "Wayside Christian Mission (singles & low barrier)",
            address: [createMapLink("432 E Jefferson St")],
            contact: null,
            email: null,
            details: "Check-in 4p (s), 3:30p (LB) <br> Men & women <br> Meals provided"
        },
        {
            name: "The Healing Place (addiction recovery)",
            address: [createMapLink("Men: 1020 W Market St."), createMapLink("Women: 1503 15th St.")],
            contact: ["<a href='tel:(502) 585-4848'>(502) 585-4848</a>"],
            email: null,
            details: "No reservations <br> First come, first served <br> Check in 3:30pm"
        },
        ]
    },
    {
        subcategory: "Safe Outdoor Space",
        resourceList: [
        {
            name: "The Hope Village (run by The Hope Buss)",
            address: [createMapLink("212 E College St")],
            contact: ["<a href='tel:(502) 882-3900'>(502) 882-3900</a>"],
            email: null,
            details: "New residents need referral from approved agency"
        }
        ]
    },
    {
        subcategory: "Family Overnight Emergency Shelters",
        note: "Call (502) 637-2337 for family shelter information",
        resourceList: [
        {
            name: "Salvation Army Center of Hope",
            address: [createMapLink("911 S. Brook St.")],
            contact: null,
            email: null,
            details: "Families <br> Meals served"
        },
        {
            name: "Volunteers of America",
            address: [createMapLink("1321 S. Preston St.")],
            contact: null,
            email: null,
            details: "Families"
        },
        {
            name: "Wayside Christian Mission (family & low-barrier)",
            address: [createMapLink("432 E. Jefferson St.")],
            contact: null,
            email: null,
            details: "Families <br> Meals served"
        },
        ]
    },
    {
        subcategory: "Young Adult Shelters / Centers",
        resourceList: [
        {
            name: "YMCA Shelter / Youth Development Center",
            address: [createMapLink("2400 Crittenden Dr")],
            contact: ["<a href='tel:(502) 635-5233'>(502) 635-5233</a>"],
            email: null,
            details: "24/7 shelter for youth 12-17 <br> Drop-in center for 18-24 yos <br> M-F 8:30a-2p"
        },
        {
            name: "TAYLRD (Youth Drop-In Center)",
            address: [createMapLink("1020 East Broadway")],
            contact: ["<a href='tel:(502) 287-0602'>(502) 287-0602</a>"],
            email: null,
            details: "Drop-in for 16-25 yos <br> M-F 2-5pm"
        },
        ]
    },
    {
        subcategory: "Resource Centers",
        resourceList: [
        {
            name: "VOCAL-KY",
            address: [createMapLink("723 S. Brook St")],
            contact: ["<a href='tel:(502) 676-0039'>(502) 676-0039</a>"],
            email: null,
            details: "Drop-in center: MWTh 10am-2pm <br> Snacks, hygiene, harm reduction supplies, respite, leadership development, organizing, more"
        },
        ]
    },
    {
        subcategory: "Emergency Day Shelters",
        resourceList: [
        {
            name: "Exodus Family Ministries",
            address: [createMapLink("4205 Cane Run Rd")],
            contact: ["<a href='tel:(502) 614-8544,,x105'>(502) 614-8544 x105</a>"],
            email: null,
            details: "Adults 18 <br> MWF 11a-3p (women only Wed; men only Fri)"
        },
        {
            name: "Center Ministries",
            address: [createMapLink("757 S. Brook St")],
            contact: ["<a href='tel: (502) 584-6543,,x105'>(502) 584-6543 x105</a>"],
            email: null,
            details: "Women & children only <br> Mon-Fri, 8am-2pm <br> Offers storage"
        },
        {
            name: "Salvation Army Day Center",
            address: [createMapLink("911 S. Brook St")],
            contact: ["<a href='tel:(502) 671-4900'>(502) 671-4900</a>"],
            email: null,
            details: "Enter from Breckinridge <br> Open M-F 9-3:30p <br> Adults only (18+) <br> Offers storage, clothing, closet, toiletries, lunch"
        },
        {
            name: "St. John Center (men only)",
            address: [createMapLink("700 E. Muhammad Ali")],
            contact: ["<a href='tel:(502) 568-6758'>(502) 568-6758</a>"],
            email: null,
            details: "Daily 8a-4p, but W 8a-2p <br> Trans and gender diverse folx welcome"
        },
        {
            name: "UP for Women & Children",
            address: [createMapLink("425 S 2nd St")],
            contact: ["<a href='tel:(502) 384-0001'>(502) 384-0001</a>"],
            email: null,
            details: "Women/children <br> Open MW 9a-3pm; F 9a-1pm <br> Trans and gender diverse people welcome"
        }

        ]
    },
];

// White Flag
const whiteFlag = [
    {
        categoryName: "White Flag",
        categoryIcon: "whiteflag",
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
            address: [createMapLink("911 South Brook St.")],
            contact: ["<a href='tel:(502) 671-4900'>(502) 671-4900</a>"],
            email: null,
            details: null,
        },
        {
            name: "Wayside Christian Mission",
            address: [createMapLink("432 East Jefferson St.")],
            contact: ["<a href='tel:(502) 742-7019'>(502) 742-7019</a>"],
            email: null,
            details: "Call CSA at <a href='tel:(502) 637-2337'>(502) 637-2337</a> for info & notifications",
        }
        ],
    },
]

// Family & Children
const familyAndChildren = [
    {
        categoryName: "Family and Children",
        categoryIcon: "family",
        description: 'Services for families and children in need of housing, shelter, and educational assistance',
        generalDetails: null
    },
    {
        subcategory: "Pet Needs",
        note: null,
        resourceList: [
        {
            name: "My Dog Eats First",
            address: [createMapLink("2640 Gleeson Lane Ste 2D")],
            contact: ["<a href='tel:(502) 694-2746'>(502) 694-2746</a>"],
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
            contact: ["<a href='tel:(502) 485-3650'>(502) 485-3650</a>"],
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
            contact: ["<a href='tel:(502) 637-2337'>(502) 637-2337</a>"],
            email: null,
            details: null,
        },
        {
            name: "Housing",
            address: null,
            contact: ["<a href='tel:(502) 637-2080'>(502) 637-2080</a>"],
            email: null,
            details: null,
        },
        {
            name: "Public housing or Section 8 (Housing Choice Voucher)",
            address: null,
            contact: ["<a href='tel:(502) 569-6076'>(502) 569-6076</a>"],
            email: null,
            details: "Website: <a href='https://lmha1.org' target='_blank'>lmha1.org</a>",
        },
        {
            name: "Black lives matter",
            address: null,
            contact: ["<a href='tel:(502) 509-2357'>(502) 509-2357</a>"],
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
        categoryIcon: "outreach",
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
            contact: ["<a href='tel:(502) 509-2357'>(502) 509-2357</a>"],
            email: null,
            details: "@blacklivesmatterlouisville",
        },
        {
            name: "ChangeU",
            address: null,
            contact: ["<a href='tel:(502) 546-4502'>(502) 546-4502</a>"],
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
            contact: ["<a href='tel:(502) 541-2353'>(502) 541-2353</a>"],
            email: null,
            details: "@jesuscaresatexit0",
        },
        {
            name: "Fern Creek UMC Street Reach",
            address: null,
            contact: ["<a href='tel:(502) 931-8529'>(502) 931-8529</a>"],
            email: null,
            details: "@metrostreetreach",
        },
        {
            name: "First Unitarian",
            address: null,
            contact: ["<a href='tel:(502) 585-5110'>(502) 585-5110</a>"],
            email: null,
            details: "@FirstUnitarianLouisville",
        },
        {
            name: "The Forgotten Louisville",
            address: null,
            contact: ["<a href='tel:(502) 345-9308'>(502) 345-9308</a>"],
            email: null,
            details: "@TFLoutreach",
        },
        {
            name: "Grace Crossings Church",
            address: null,
            contact: ["<a href='tel:(502) 882-2467'>(502) 882-2467</a>"],
            email: null,
            details: "@gracechurchlou",
        },
        {
            name: "Hip Hop Cares",
            address: null,
            contact: ["<a href='tel:(502) 457-5317'>(502) 457-5317</a>"],
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
            contact: ["<a href='tel:(502) 539-1378'>(502) 539-1378</a>"],
            email: null,
            details: "lostsheepoflouisville.org",
        },
        
        {
            name: "Louisville Outreach for the Unsheltered (L.O.U.)",
            address: null,
            contact: ["<a href='tel:(502) 754-3464,,x3'>(502) 754-3464 x3</a>"],
            email: null,
            details: "@LouOutreach",
        },
        
        {
            name: "LRCC",
            address: null,
            contact: ["<a href='tel:(502) 398-5258'>(502) 398-5258</a>"],
            email: null,
            details: "@LouisvilleRecoveryConnection",
        },
        {
            name: "RC Love Squad",
            address: null,
            contact: ["<a href='tel:(502) 805-7747'>(502) 805-7747</a>"],
            email: null,
            details: "@RiverCityLoveSquad",
        },
        {
            name: "Share the Love Outreach",
            address: null,
            contact: ["<a href='tel:(502) 649-3998'>(502) 649-3998</a>"],
            email: null,
            details: "@stloutreach",
        },
        {
            name: "South End Street Angels",
            address: null,
            contact: ["<a href='tel:(502) 422-1923'>(502) 422-1923</a>"],
            email: null,
            details: "@southendstreetangels",
        },
        {
            name: "VOCAL-KY",
            address: null,
            contact: ["<a href='tel:(502) 676-0039'>(502) 676-0039</a>"],
            email: null,
            details: "@vocalky",
        },
        {
            name: "Women of the Well",
            address: null,
            contact: ["<a href='tel:(502) 498-6018'>(502) 498-6018</a>"],
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
            contact: ["<a href='tel:(502) 636-3781'>(502) 636-3781</a>"],
            email: null,
            details: null,
        },
        {
            name: "Kentucky Harm Reduction Coalition",
            address: null,
            contact: ["<a href='tel:(502) 537-6061'>(502) 537-6061</a>"],
            email: null,
            details: "Access to naloxone, supplies, and medication for opioid use disorder",
        },
        {
            name: "Metro Homeless Engagement and Assessment Response Team (HEART)",
            address: null,
            contact: ["<a href='tel:(502) 574-5771'>(502) 574-5771</a>"],
            email: null,
            details: null,
        },
        {
            name: "NuLease",
            address: null,
            contact: ["<a href='tel:(502) 492-7455'>(502) 492-7455</a>"],
            email: null,
            details: "Call for recovery, mobile medical unit, and primary care services",
        },
        {
            name: "Seven Counties Services",
            address: null,
            contact: [
                        "Homeless Outreach Team: <a href='tel:(502) 589-8926'>(502) 589-8926</a>",
                        "24/7 Adult Crisis Line: <a href='tel:(502) 589-4313'>(502) 589-4313</a>",
                        "Schedule first appointment: <a href='tel:(502) 589-1100'>(502) 589-1100</a>"
                    ],
            email: null,
            details: null,
        },
        {
            name: "St. John Center",
            address: null,
            contact: ["<a href='tel:(502) 936-0173'>(502) 936-0173</a>"],
            email: null,
            details: "Contact the Outreach Manager for help at your location",
        },
        {
            name: "Wellspring",
            address: null,
            contact: ["24/7 crisis stabilization unit: <a href='tel:(502) 561-1072'>(502) 561-1072</a>",
                        "Services: <a href='tel:(502) 637-4361'>(502) 637-4361</a>"],
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
            contact: ["<a href='tel:(502) 637-9786'>(502) 637-9786</a>"],
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
            contact: ["<a href='tel:(502) 589-6620'>(502) 589-6620</a>"],
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
            contact: ["<a href='tel:(502) 465-5378'>(502) 465-5378</a>"],
            email: null,
            details: "payee services by appt",
        },
        {
            name: "Legal Aid Society",
            address: [createMapLink("416 W. Muhammad Ali Blvd #300")],
            contact: ["<a href='tel:(502) 584-1254'>(502) 584-1254</a>"],
            email: null,
            details: "M-F 9a-5p <br> <a href='https://yourlegalaid.org' target='_blank'>yourlegalaid.org</a>",
        },
        {
            name: "Louisville Free Public Library",
            address: [createMapLink("301 York St.")],
            contact: ["<a href='tel:(502) 574-1781'>(502) 574-1781</a>"],
            email: null,
            details: "<a href='https://www.lfpl.org' target='_blank'>www.lfpl.org</a> <br> Open Mon-Thu 9a-9p <br> Fri-Sat 9a-5p <br> Sun 1-5p",
        },
        {
            name: "Useful Contacts",
            address: null,
            contact: null,
            email: null,
            details: "Dial: <a href='tel:211'>211</a> for local referrals <br> Dial: <a href='tel:988'>988</a> for National Suicide & Crisis Lifeline",
        },
        ],
    }
]

// Food
const food = [
    {
        categoryName: "Food",
        categoryIcon: "food",
        description: 'Meals and food assistance contacts',
        generalDetails: null
    },
    {
        subcategory: "Meals",
        note: null,
        resourceList: [
        {
            name: "Beulah Presbyterian Church (Ramsey Building)",
            address: [createMapLink("6704 Bardstown")],
            contact: ["<a href='tel:(502) 435-4313'>(502) 435-4313</a>"],
            email: null,
            details: "Tu 5:30-6:15pm"
        },
        {
            name: "Cathedral of the Assumption",
            address: [createMapLink("404 Cathedral Way")],
            contact: null,
            email: null,
            details: "Lunch daily 12:15-1pm"
        },
        {
            name: "Feed the City",
            address: [createMapLink("1100 S. 26th St")],
            contact: ["<a href='tel:(502) 772-5384'>(502) 772-5384</a>"],
            email: null,
            details: "Mo-Sat 1:30-4pm"
        },
        {
            name: "Fourth Ave United Methodist Church",
            address: [createMapLink("318 W St Catherine")],
            contact: ["<a href='tel:(502) 585-2176'>(502) 585-2176</a>"],
            email: null,
            details: "MTThFS 12p"
        },
        {
            name: "Franciscan Kitchen",
            address: [createMapLink("748 South Preston St.")],
            contact: ["<a href='tel:(502) 589-0140'>(502) 589-0140</a>"],
            email: null,
            details: "Mon-Sat 10:30am-12:30pm <br> Closed 1st Sat of month"
        },
        {
            name: "Hip Hop Cares Outreach",
            address: [createMapLink("First & Broadway")],
            contact: ["<a href='tel:(502) 457-5317'>(502) 457-5317</a>"],
            email: null,
            details: "Su 11:00am"
        },
        {
            name: "Loaves & Fishes Inc",
            address: [createMapLink("500 E. Caldwell St.")],
            contact: ["<a href='tel:(502) 718-5264'>(502) 718-5264</a>"],
            email: null,
            details: "Sat 3-4pm"
        },
        {
            name: "Lord's Kitchen",
            address: [createMapLink("1811 Standard Ave")],
            contact: ["<a href='tel:(502) 413-0198'>(502) 413-0198</a>"],
            email: null,
            details: "MTThF 12:15p"
        },
        {
            name: "Lost Sheep (serving at Green St. Baptist Church)",
            address: [createMapLink("519 E. Gray Street")],
            contact: ["<a href='tel:(502) 539-1378'>(502) 539-1378</a>"],
            email: null,
            details: "Thurs 6pm"
        },
        {
            name: "Salvation Army Red Kettle Cafe",
            address: [createMapLink("911 S Brook St")],
            contact: ["<a href='tel:(502) 671-4900'>(502) 671-4900</a>"],
            email: null,
            details: "Daily, 11:30a, 5pm"
        },
        {
            name: "St. Augustine Catholic Church",
            address: [createMapLink("1310 W. Broadway")],
            contact: ["<a href='tel:(502) 584-4602'>(502) 584-4602</a>"],
            email: null,
            details: "Sack lunches: Mon-Thurs 10am-12pm"
        },
        {
            name: "St. Vincent de Paul Open Hand Kitchen",
            address: [createMapLink("1026 S Jackson St.")],
            contact: ["<a href='tel:(502) 584-2480'>(502) 584-2480</a>"],
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
            address: [createMapLink("821 S. 4th St")],
            contact: ["<a href='tel:(502) 587-6011'>(502) 587-6011</a>"],
            email: null,
            details: "Food Pantry MTTh 9:30-11:30a"
        },
        {
            name: "Change Today, Change Tomorrow",
            address: null,
            contact: ["<a href='tel:(502) 512-2160'>(502) 512-2160</a>"],
            email: null,
            details: "@ChangeTodayChangeTomorrow <br> Feed the West provides pop-up grocery pick-ups"
        },
        {
            name: "Dare to Care Food Bank",
            address: null,
            contact: ["<a href='tel:(502) 966-3821'>(502) 966-3821</a>"],
            email: null,
            details: "<a href='https://daretocare.org/need-food/' target='_blank'>daretocare.org/need-food/</a>"
        },
        {
            name: "Salvation Army Food Pantry",
            address: [createMapLink("911 South Brook St.")],
            contact: ["<a href='tel:(502) 671-4900'>(502) 671-4900</a>"],
            email: null,
            details: "Food box pick-ups on Tuesdays, 1-2pm"
        },
        {
            name: "SNAP (food stamps) ",
            address: [createMapLink("908 W Broadway")],
            contact: ["<a href='tel:(855) 306-8959'>(855) 306-8959</a>"],
            email: null,
            details: "M-F 8a-4:30pm <br> Get more info or enroll: <a href='https://kynect.ky.gov/benefits' target='_blank'>kynect.ky.gov/benefits</a>"
        }
        ],
    }
]

// HealthCare 
const healthCare = [
    {
        categoryName: "Health Care",
        categoryIcon: "healthcare",
        description: 'Medical care and treatment contacts',
        generalDetails: null
    },
    {
        subcategory: "Health Care",
        note: null,
        resourceList: [
        {
            name: "Brightview Recovery Services",
            address: [createMapLink("9702 Stonestreet Rd, Ste 120")],
            contact: ["<a href='tel:(866) 934-7450'>(866) 934-7450</a>"],
            email: null,
            details: "M-F 8a-5p <br> Sat by appt only",
        },
        {
            name: "DDM Behavioral Health Services",
            address: [createMapLink("2210 Meadow Drive")],
            contact: ["<a href='tel:(502) 384-6009'>(502) 384-6009</a>"],
            email: null,
            details: "M-F 9a-5p <br> Sat by appt only",
        },
        {
            name: "FHC Phoenix Health Care for the Homeless",
            address: [createMapLink("712 East Muhammad Ali")],
            contact: ["<a href='tel:(502) 568-6972'>(502) 568-6972</a>"],
            email: null,
            details: "Mon-Fri 7:30am - 4pm",
        },
        {
            name: "Family Community Clinic",
            address: [createMapLink("1406 E Washington St.")],
            contact: ["<a href='tel:(502) 384-8444'>(502) 384-8444</a>"],
            email: null,
            details: "M 1-6pm <br> T 1-5pm <br> W/Th 9a-5pm <br> Fri 9a-12:30pm",
        },
        {
            name: "Kentucky Health Justice Network",
            address: null,
            contact: ["<a href='tel:(502) 576-4576'>(502) 576-4576</a>"],
            email: null,
            details: "Free inclusive help with reproductive health",
        },
        {
            name: "Norton Children's Medical Group - Novak Center",
            address: [createMapLink("411 E Chestnut St, Level 1")],
            contact: ["<a href='tel:(502) 588-3440'>(502) 588-3440</a>"],
            email: null,
            details: "Pediatric primary care <br> M-F 8am-5pm",
        },
        {
            name: "Norton Children's Hospital Emergency Dept",
            address: [createMapLink("231 East Chestnut St")],
            contact: ["<a href='tel:(502) 629-6000'>(502) 629-6000</a>"],
            email: null,
            details: null,
        },
        {
            name: "Shawnee Christian Health Center",
            address: [createMapLink("234 Amy Ave")],
            contact: ["<a href='tel:(502) 778-0001'>(502) 778-0001</a>"],
            email: null,
            details: "MTWF 8:30am-5pm <br> Th 8:30am-7pm",
        },
        {
            name: "Louisville Metro Health Department TB Clinic",
            address: [createMapLink("400 East Gray St.")],
            contact: ["<a href='tel:(502) 574-6617'>(502) 574-6617</a> to make appt"],
            email: null,
            details: null,
        },
        {
            name: "Planned Parenthood",
            address: [createMapLink("842 S 7th St")],
            contact: ["<a href='tel:(800) 769-0045'>(800) 769-0045</a>"],
            email: null,
            details: "MWThF 8am-4pm <br> Tues 10am-6pm",
        },
        {
            name: "SAMHSA's National Helpline",
            address: null,
            contact: ["<a href='tel:(800) 662-4357'>(800) 662-4357</a>"],
            email: null,
            details: "For people facing mental or substance abuse crises",
        },
        {
            name: "Seven Counties Services Crisis Line",
            address: null,
            contact: ["<a href='tel:(502) 589-4313'>(502) 589-4313</a>"],
            email: null,
            details: null,
        },
        {
            name: "UofL Hospital Emergency Room",
            address: [createMapLink("530 S Jackson St")],
            contact: ["<a href='tel:(502) 562-3015'>(502) 562-3015</a>"],
            email: null,
            details: null,
        },
        {
            name: "UofL 550 Clinic (HIV clinic)",
            address: [createMapLink("550 S Jackson St")],
            contact: ["<a href='tel:(502) 561-8844'>(502) 561-8844</a>"],
            email: null,
            details: "Mon - Fri, 8:30am - 4:30pm",
        },
        {
            name: "Wellspring (mental health/addiction)",
            address: null,
            contact: ["<a href='tel:(502) 561-1072'>(502) 561-1072</a>"],
            email: null,
            details: "Services: <a href='tel:(502) 637-4361'>(502) 637-4361</a>",
        },
        ],
    },
    
]

// Jobs & Education
const jobsAndEducation = [
    {
        categoryName: "Jobs & Education",
        categoryIcon: "suitcase",
        description: 'Job training and education contacts',
        generalDetails: null
    },
    {
        subcategory: "Jobs & Education",
        note: null,
        resourceList: [
        {
            name: "Blueprint 502",
            address: [createMapLink("800 S Preston St")],
            contact: ["<a href='tel:(502) 290-6121'>(502) 290-6121</a>"],
            email: null,
            details: "<a href='https://blueprint502.org/' target='_blank'>blueprint502.org</a> <br> Full-time education/training for young adults 18-24",
        },
        {
            name: "Family Scholar House",
            address: [createMapLink("403 Reg Smith")],
            contact: ["<a href='tel:(502) 584-8090'>(502) 584-8090</a>"],
            email: null,
            details: "Single parent academic support",
        },
        {
            name: "Goodwill Opportunity Centers",
            address: [createMapLink("909 E Broadway"), createMapLink("2820 W. Broadway")],
            contact: ["<a href='tel:(844) 495-9675,,0'>(844) 495-9675 x0</a>"],
            email: null,
            details: `${createMapLink('216 W. Chestnut')} <br> (The Spot, young adults 16-24) <br><br> ${createMapLink('6201 Preston Hwy, Suite A')} <br> (bilingual center)`,
        },
        {
            name: "Goodwill Industries of KY Excel Center",
            address: [createMapLink("6203 Preston Hwy")],
            contact: ["<a href='tel:(502) 337-3322'>(502) 337-3322</a>"],
            email: null,
            details: "Free adult HS",
        },
        {
            name: "Louisville Urban League Workforce Development",
            address: [createMapLink("1535 West Broadway")],
            contact: ["<a href='tel:(502) 566-3371'>(502) 566-3371</a>"],
            email: null,
            details: null,
        },
        {
            name: "Salvation Army Chefs for Success Program",
            address: null,
            contact: ["<a href='tel:(502) 671-4900'>(502) 671-4900</a>"],
            email: null,
            details: "Six week culinary training",
        },
        {
            name: "YMCA Safe Place & Youth Development Center",
            address: [createMapLink("2400 Crittenden Dr")],
            contact: ["<a href='tel:(502) 635-5233'>(502) 635-5233</a>"],
            email: null,
            details: "M-F 9a-2pm <br> Serving young adults ages 16-22",
        },
        ],
    },
]

// Transitional Housing
const transitionalHousing = [
    {
        categoryName: "Transitional Housing",
        categoryIcon: "househeart",
        description: 'Temporary housing contacts',
        generalDetails: null
    },
    {
        subcategory: "Transitional Housing",
        note: null,
        resourceList: [
        {
            name: "House of Ruth",
            address: null,
            contact: ["<a href='tel:(502) 589-6605'>(502) 589-6605</a>"],
            email: null,
            details: "Housing & support <br> <a href='tel:(502) 587-5080'>(502) 587-5080</a> for people with HIV",
        },
        {
            name: "Kristy Love Foundation",
            address: null,
            contact: ["<a href='tel:(502) 408-3129'>(502) 408-3129</a>"],
            email: null,
            details: "Recovery/housing for addiction/trafficking survivors",
        },
        {
            name: "Mission Sisters",
            address: null,
            contact: ["<a href='tel:(502) 396-5094'>(502) 396-5094</a>"],
            email: null,
            details: "<a href='https://missionsisters.org/' target='_blank'>missionsisters.org</a>",
        },
        {
            name: "Rhonda's Another Chance",
            address: null,
            contact: ["<a href='tel:(502) 776-8830'>(502) 776-8830</a>"],
            email: null,
            details: "Short-term housing for women <br> <a href='https://rhondashouse.org/' target='_blank'>rhondashouse.org</a>",
        },
        ],
    },
]

// LGBTQ+
const lgbtqPlus = [
    {
        categoryName: "LGBTQ+",
        categoryIcon: "lgbtq",
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
        subcategory: "LGBTQ+",
        note: null,
        resourceList: [
        {
            name: "LTMA",
            address: null,
            contact: null,
            email: null,
            details: "Monthly group on 4th Monday, 6-8pm <br> 18+ only <br> <a href='https://loutransmascalliance.com/' target='_blank'>loutransmascalliance.com</a>",
        },
        {
            name: "Louisville Youth Group",
            address: [createMapLink("417 E Broadway")],
            contact: ["<a href='tel:(502) 430-2016'>(502) 430-2016</a>"],
            email: null,
            details: "Group meetings, support, clothing, more",
        },
        {
            name: "Kentucky Health Justice Network",
            address: null,
            contact: null,
            email: null,
            details: "<a href='https://khjn.org/' target='_blank'>khjn.org</a> <br> Assistance accessing affirming care",
        },
        {
            name: "Sweet Evening Breeze",
            address: [createMapLink("801 Barrett Avenue #211")],
            contact: ["<a href='tel:(502) 690-4003'>(502) 690-4003</a>"],
            email: null,
            details: `<a href='https://sweeteveningbreeze.org/' target='_blank'>sweeteveningbreeze.org</a> <br>    
                        Drop-in services for youth: MTThF 10a-4p <br>
                        Services include consultations, housing assistance,  
                        affirming care, snacks, rest area, mental health,  
                        hygiene, HIV testing, and more`,
        },
        ]
    },
]

// Veterans
const veterans = [
    {
        categoryName: "Veterans",
        categoryIcon: "medal",
        description: 'Housing, benefits, support, and more resources for veterans',
        generalDetails: "VA Homeless Services are open to veterans not eligible for VA healthcare"
    },
    {
        subcategory: "Veterans",
        note: null,
        resourceList: [
        {
            name: "KDVA Homeless Veterans",
            address: null,
            contact: ["<a href='tel:(502) 782-5730'>(502) 782-5730</a>"],
            email: null,
            details: null,
        },
        {
            name: "Louisville Metro Office for Veterans",
            address: null,
            contact: ["<a href='tel:(502) 574-5748'>(502) 574-5748</a>"],
            email: null,
            details: null,
        },
        {
            name: "National Call Center for Homeless Veterans",
            address: null,
            contact: null,
            email: null,
            details: "24/7 Hotline: 1-877-4AID-VET <br> <a href='tel:(1-877-424-3838)'>(1-877-424-3838</a>",
        },
        {
            name: "Robley Rex VA Medical Center",
            address: [createMapLink("800 Zorn Ave")],
            contact: null,
            email: null,
            details: `Homeless Program: <a href='tel:(502) 287-4178'>(502) 287-4178</a> <br> <a href='tel:(502) 287-4000'>(502) 287-4000</a> <br> Mental health: <a href='tel:(502) 287-6110'>(502) 287-6110</a>`,
        },
        {
            name: "St. Vincent de Paul Louisville",
            address: null,
            contact: ["<a href='tel:(502) 272-2150'>(502) 272-2150</a>"],
            email: null,
            details: "Permanent housing for veterans <br> <a href='https://svdplou.org/housing-shelter' target='_blank'>svdplou.org/housing-shelter</a>",
        },
        {
            name: "VA Healthcare Hotline",
            address: null,
            contact: ["<a href='tel:(877) 222-8387'>(877) 222-8387</a>"],
            email: null,
            details: null,
        },
        {
            name: "VA Regional Office (Veterans Benefits Admin)",
            address: [createMapLink("321 W Main St, #390")],
            contact: ["<a href='tel:(800) 827-1000'>(800) 827-1000</a>"],
            email: null,
            details: null,
        },
        {
            name: "Veterans Crisis Line",
            address: null,
            contact: null,
            email: null,
            details: "Dial: <a href='tel:988'>988</a>  <br> Text: <a href='tel:838255'>838255</a>",
        },
        {
            name: "Volunteers of America Mid-States",
            address: [createMapLink("2820 W. Broadway, Suite 600")],
            contact: ["<a href='tel:(502) 384-0868'>(502) 384-0868</a>"],
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
        categoryIcon: "helpinghands",
        description: 'Support services for victims of partner violence and human trafficking',
        generalDetails: null
    },
    {
        subcategory: "Partner Violence",
        note: null,
        resourceList: [
        {
            name: "Center for Women and Families",
            address: [createMapLink("927 S 2nd St.")],
            contact: ["<a href='tel:(502) 581-7222'>(502) 581-7222</a>"],
            email: null,
            details: `<a href='https://thecenteronline.org/' target='_blank'>thecenteronline.org</a> <br> (24-hr hotline) <br> 
            The Center provides community resources for survivors,
            emergency shelter for survivors of high lethality 
            intimate partner abuse, and guidance on obtaining 
            emergency protective orders and legal advocacy`,
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
            contact: ["<a href='tel:(502) 408-3129'>(502) 408-3129</a>"],
            email: null,
            details: "Women in recovery from trafficking/addiction",
        },
        {
            name: "Safe Passage",
            address: null,
            contact: ["<a href='tel:(502) 324-3013'>(502) 324-3013</a>"],
            email: null,
            details: "<a href='https://safepassageky.org/' target='_blank'>safepassageky.org</a> <br> M-F 9am-5pm <br> Support services for trafficked and exploited youth",
        },
        ]
    },
]

// General Resources
const generalResources = [
    {
        categoryName: "General Resources",
        categoryIcon: "resources",
        description: 'Get IDs, birth certificates, Social Security cards, and file shelter complaints',
        generalDetails: `If any person experiencing homelessness has an 
                        issue, complaint, or concern about a Louisville 
                        shelter, agency, or staff member, they should first 
                        follow that agency's individual grievance procedure, 
                        which should be physically posted and/or available 
                        online.  
                        If the agency's response is not satisfactory, the 
                        person may contact Louisville Metro Office of Social 
                        Services (OSS) at <a href='tel:(502) 574-5050'>(502) 574-5050</a>. You may also 
                        come in to OSS at ${createMapLink('701 W Ormsby Avenue, Suite 201')}, from 8am to 5pm Monday through Friday. 
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
            contact: ["<a href='tel:(502) 564-4212'>Office of Vital Statistics: (502) 564-4212</a>"],
            email: null,
            details: `If you were born in Kentucky, 
                        go to <a href='https://louhomeless.org/birthcert' target='_blank'>louhomeless.org/birthcert</a> or call the Office of 
                        Vital Statistics at <a href='tel:(502) 564-4212'>(502) 564-4212</a>.<br> If you were born 
                        elsewhere, search the internet for “copy of birth 
                        certificate” with your state/country`,
        },
        {
            name: "Social Security Card",
            address: [createMapLink('601 W Broadway')],
            contact: ["<a href='tel:(1-800-772-1213)'>SSNumber: call SSA at (1-800-772-1213)</a>"],
            email: null,
            details: `See <a href='https://www.ssa.gov/' target='_blank'>www.ssa.gov/</a> <br>
                         Bring a copy of your birth certificate and a state-issued ID`,
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