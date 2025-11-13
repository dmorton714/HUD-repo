<script setup>
import '@/assets/main.css'
import Hero from '@/components/common/Hero.vue'
import CardsSidebar from './CardsSidebar.vue'


// Shelters
const shelters = [
    {
        category: "Single Overnight Emergency Shelters",
        note: "Call (502) 637-2337 for a bed unless otherwise noted",
        list: [
        {
            name: "Center Ministries (men)",
            address: "757 S. Brook St",
            contact: null,
            details: "Open 7pm-6:30am. Men only; meals not provided."
        },
        {
            name: "Salvation Army Center of Hope",
            address: "911 S. Brook St",
            contact: null,
            details: "Check in: 5:30p women / 6p men. Adults; meals; check in at 9p for 18-24yos."
        },
        {
            name: "St. Vincent de Paul Ozanam Inn (men)",
            address: "1034 S. Jackson St.",
            contact: "tel:(502) 301-8678",
            details: "Men only; meals; check-in times vary, call ahead."
        },
        {
            name: "Wayside Christian Mission (singles & low barrier)",
            address: "432 E Jefferson St",
            contact: null,
            details: "Check-in 4p (s), 3:30p (LB). Men & women; meals provided."
        },
        {
            name: "The Healing Place (addiction recovery)",
            address: "Men: 1020 W Market St. <br> Women: 1503 15th St.",
            contact: "tel:(502) 585-4848",
            details: "No reservations. First come, first served; check in 3:30pm."
        },
        ]
    },
    {
        category: "Safe Outdoor Space",
        list: [
        {
            name: "The Hope Village (run by The Hope Buss)",
            address: "212 E College St",
            contact: "tel:(502) 882-3900",
            details: "New residents need referral from approved agency."
        }
        ]
    },
    {
        category: "Family Overnight Emergency Shelters",
        note: "Call (502) 637-2337 for family shelter information",
        list: [
        {
            name: "Salvation Army Center of Hope",
            address: "911 S. Brook St.",
            details: "Families; meals served."
        },
        {
            name: "Volunteers of America",
            address: "1321 S. Preston St.",
            details: "Families."
        },
        {
            name: "Wayside Christian Mission (family & low-barrier)",
            address: "432 E. Jefferson St.",
            details: "Families; meals served."
        },
        ]
    },
    {
        category: "Young Adult Shelters / Centers",
        list: [
        {
            name: "YMCA Shelter / Youth Development Center",
            address: "2400 Crittenden Dr",
            contact: "tel:(502) 635-5233",
            details: "24/7 shelter for youth 12-17.<br> Drop-in center for 18-24yos.<br> M-F 8:30a-2p."
        },
        {
            name: "TAYLRD (Youth Drop-In Center)",
            address: "1020 East Broadway",
            contact: "tel:(502) 287-0602",
            details: "Drop-in for 16-25yos.<br> M-F 2-5pm"
        },
        ]
    },
    {
        category: "Resource Centers",
        list: [
        {
            name: "VOCAL-KY",
            address: "723 S. Brook St",
            contact: "tel:(502) 676-0039",
            details: "Drop-in center: MWTh 10am-2pm.<br> Snacks, hygiene, harm reduction supplies, respite, leadership development, organizing, more"
        },
        ]
    },
    {
        category: "Emergency Day Shelters",
        list: [
        {
            name: "Exodus Family Ministries",
            address: "4205 Cane Run Rd",
            contact: "tel:(502) 614-8544 x105",
            details: "(adults 18) <br> MWF 11a-3p (women only Wed; men only Fri)"
        },
        {
            name: "Center Ministries",
            address: "757 S. Brook St",
            contact: "tel: (502) 584-6543 x105",
            details: "(women & children only) <br> Mon-Fri, 8am-2pm.<br> Offers storage"
        },
        {
            name: "Salvation Army Day Center",
            address: "911 S. Brook St",
            contact: "tel:(502) 671-4900",
            details: "(enter from Breckinridge) <br> Open M-F 9-3:30p <br> Adults only (18+). <br> Offers storage, clothing, closet, toiletries, lunch"
        },
        {
            name: "St. John Center (men only)",
            address: "700 E. Muhammad Ali",
            contact: "tel:(502) 568-6758",
            details: "Daily 8a-4p, but W 8a-2p <br> Trans and gender diverse folx welcome"
        },
        {
            name: "UP for Women & Children",
            address: "425 S 2nd St",
            contact: "tel:(502) 384-0001",
            details: "(women/children) <br> Open MW 9a-3pm; F 9a-1pm <br> Trans and gender diverse people welcome"
        }

        ]
    },
];

const generalInfo = [

    {
        category: "Common Assessment for housing/services",
        description: `Common Assessment (run by Family Health
                        Centers Phoenix) identifies the needs of people
                        experiencing homelessness through a short survey,
                        and then connects you to the best resources to
                        serve you, including housing or case management.`,
        contact: {
            phone: "tel:(502) 637-2080",
            note: "Mon-Fri, 10am-3pm"
        },
        location: {
            address: "1300 S. 4th Street #200",
            note: "Walk-ins accepted: Tuesday-Friday, 10am-3pm"
        }
    },
    {
        category: "Shelter Referral and Resources",
        description: `Coordinated Shelter Access (run by the Coalition
                        for the Homeless) provides emergency shelter bed
                        reservations and referrals to other social services.`,
        contact: {
            email: "csa@louhomeless.org",
            phone: "tel:(502) 637-2337",
            note: `Daily, 10am-1pm
                    (CSA is closed on these holidays, so go directly to single
                    emergency shelters (no walk-ins accepted in family
                    shelters): New Year's Day, MLK Day, Memorial Day,
                    Juneteenth, Fourth of July, Labor Day, Thanksgiving, day
                    after Thanksgiving, Christmas Eve, Christmas Day)`
        },
        location: {
            address: "1300 S. 4th Street #250",
            note: `Open: Mon-Fri, 10am-1pm
                    (CSA is closed on these holidays, so go directly to single
                    emergency shelters (no walk-ins accepted in family
                    shelters): New Year's Day, MLK Day, Memorial Day,
                    Juneteenth, Fourth of July, Labor Day, Thanksgiving, day
                    after Thanksgiving, Christmas Eve, Christmas Day)`
        }

    }
]



</script>

<template>
    <div class="w-full p-10 overflow-hidden">
        <Hero 
        title="Street Tips"
        description="A quick reference guide for people in need of shelter, outreach services, food, healthcare, and other help in Louisville, KY" 
        />
        <CardsSidebar />

        

    </div>
</template>

<style scoped></style>