<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="bg-gradient-to-b from-black/90 to-black/20 backdrop-blur-sm text-white fixed top-0 left-0 z-50 flex justify-around items-center w-full p-4">
    <img src="/logo.png" alt="Lou Cares" class="w-20 h-20 animate-fade-in-right animate-delay-100" />
    </router-link>
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
