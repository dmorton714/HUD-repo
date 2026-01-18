<script setup>
import { ref } from 'vue';

defineProps({
    name: {
        type: String,
        required: true  
    },
    address: {
        type: Array,
    },
    contact: {
        type: Array,
    },
    details: {
        type: String,
    }
})

const showDetails = ref(false);
</script>

<template>
    <div class="bg-[var(--dark-gray)] flex flex-col justify-around items-center w-full max-w-80 h-auto min-h-64 p-4 gap-4 rounded-xl">
        <h3 class="self-center" v-html="name"></h3>
        <div v-if="address" v-for="(addr, index) in address" :key="index" class="flex items-center w-full gap-4">
            <img src="/location-icon.svg" alt="Location Icon" class="w-6 h-6"></img>
            <p v-html="addr" class="hover-scale-105 transition-all duration-200 cursor-pointer"></p>
        </div>
        <div v-if="contact" v-for="(cont, index) in contact" :key="index" class="flex items-center w-full gap-4">
            <img src="/phone-icon.svg" alt="Phone Icon" class="w-6 h-6"></img>
            <p v-html="cont" class="hover-scale-105 transition-all duration-200 cursor-pointer"></p>
        </div>
        <div v-if="details" class="flex items-center cursor-pointer hover-scale-105 transition-all duration-200 relative" @click="showDetails = !showDetails" @mouseover="showDetails = true" @mouseleave="showDetails = false">
            <p class="cursor-pointer">Details</p>
            <div v-if="showDetails" class="bg-[var(--light-gray)] shadow-lg absolute w-64 -left-25 top-8 z-10 p-4 rounded-4xl animate-expand-vertically animate-duration-300 animate-delay-100">
                <p class="text-start text-description" v-html="details"></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .hover-scale-105:hover {
        transform: scale(1.05);
    }
</style>