<script setup>
import '@/assets/main.css'
const shelters = [
  {
    category: "Single Overnight Emergency Shelters",
    note: "Call (502) 637-2337 for a bed unless otherwise noted",
    list: [
      {
        name: "Center Ministries (men)",
        address: "757 S. Brook St",
        details: "Open 7pm–6:30am. Men only; meals not provided."
      },
      {
        name: "Salvation Army Center of Hope",
        address: "911 S. Brook St",
        details: "Check in: 5:30p women / 6p men. Adults; meals; check in at 9p for 18–24yos."
      },
      {
        name: "St. Vincent de Paul Ozanam Inn (men)",
        address: "1034 S. Jackson St. | (502) 301-8678",
        details: "Men only; meals; check-in times vary, call ahead."
      },
      {
        name: "Wayside Christian Mission (singles & low barrier)",
        address: "432 E Jefferson St",
        details: "Check-in 4p (s), 3:30p (LB). Men & women; meals provided."
      },
      {
        name: "The Healing Place (addiction recovery)",
        address: "Men: 1020 W Market St. | Women: 1503 15th St.",
        details: "(502) 585-4848; no reservations. First come, first served; check in 3:30pm."
      },
    ]
  },
  {
    category: "Safe Outdoor Space",
    list: [
      {
        name: "The Hope Village (run by The Hope Buss)",
        address: "212 E College St | (502) 882-3900",
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
        address: "2400 Crittenden Dr | (502) 635-5233",
        details: "24/7 shelter for youth 12–17. Drop-in center for 18–24yos; M–F 8:30a–2p."
      },
      {
        name: "TAYLRD (Youth Drop-In Center)",
        address: "1020 East Broadway | (502) 287-0602",
        details: "Drop-in support for young adults."
      },
    ]
  }
];
</script>

<template>
  <section class="street-tips">
    <div v-for="(section, i) in shelters" :key="i" class="shelter-section">
      <h2>{{ section.category }}</h2>
      <p v-if="section.note" class="call">{{ section.note }}</p>

      <ul>
        <li v-for="(item, j) in section.list" :key="j">
          <strong>{{ item.name }}</strong><br />
          {{ item.address }}<br />
          {{ item.details }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>

.street-tips {
  padding: 2rem;
  background-color: var(--light-gray);
  color: var(--black);
  line-height: 1.6;
  font-family: system-ui, sans-serif;
  max-width: 70%;
  align-self: center;
}

h2 {
  color: var(--blue);
  border-bottom: 2px solid var(--gold);
  padding-bottom: 0.25rem;
  margin-top: 2rem;
}

.call {
  color: var(--gold);
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 1rem;
  background: var(--blue);
  color: var(--white);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

li strong {
  color: var(--yellow);
}
</style>
