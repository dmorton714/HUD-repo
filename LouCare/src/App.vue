<script setup>
import HeaderNav from './components/HeaderNav.vue';
import StreetTips from './components/StreetTips.vue';
</script>

<template>
  <HeaderNav />

 <div class="body">
  <StreetTips />
 </div> 

</template>

<style scoped>
.body {
  padding-top: 11rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>
