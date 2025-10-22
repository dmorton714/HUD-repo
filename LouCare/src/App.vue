<script setup>
import { RouterView } from 'vue-router';

import Header from './components/common/Header.vue';


</script>

<template>
  <Header />
  <RouterView />
</template>

<style scoped>
.body {
  padding-top: 11rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>
