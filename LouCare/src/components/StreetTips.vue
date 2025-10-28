<script setup>
import '@/assets/main.css'


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
