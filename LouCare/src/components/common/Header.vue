<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="bg-black text-white fixed top-0 left-0 z-10 flex justify-around items-center w-full p-4">
    <img src="/logo.png" alt="Lou Cares" class="w-30 h-30" />
    <nav class="flex justify-center items-center">
      <ul class="flex justify-around items-center gap-10">
        <li class="hover:text-yellow-400 cursor-pointer transition-all duration-200"><RouterLink to="/">Home</RouterLink></li>
        <li class="hover:text-yellow-400 cursor-pointer transition-all duration-200"><RouterLink to="/street-tips">Street Tips</RouterLink></li>
        <li class="hover:text-yellow-400 cursor-pointer transition-all duration-200"><a href="#">Page2</a></li>
        <li class="hover:text-yellow-400 cursor-pointer transition-all duration-200"><a href="#">Page3</a></li>
      </ul>
    </nav>
  </header>
</template>
