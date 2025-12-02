<script setup>
import { ref } from 'vue';

defineProps({
    name: {
        type: String,
        required: true  
    },
    address: {
        type: String,
    },
    contact: {
        type: String,
    },
    details: {
        type: String,
    }
})

const showDetails = ref(false);
</script>

<template>
    <div class="bg-[var(--dark-gray)] flex flex-col justify-around items-center w-80 h-64 p-4 gap-4 rounded-xl">
        <h3 class="self-center">{{ name }}</h3>
        <div v-if="address" class="flex items-center w-full gap-4">
            <img src="/location-icon.svg" alt="Location Icon" class="w-6 h-6"></img>
            <p>{{ address }}</p>
        </div>
        <div v-if="contact" class="flex items-center w-full gap-4">
            <img src="/phone-icon.svg" alt="Phone Icon" class="w-6 h-6"></img>
            <p>{{ contact }}</p>
        </div>
        <div v-if="details" class="flex items-center hover:cursor-pointer hover:scale-105 hover:underline transition-all duration-200 relative" @mouseover="showDetails = true" @mouseleave="showDetails = false">
            <p>Details</p>
            <div v-if="showDetails" class="bg-[var(--light-gray)] shadow-lg absolute w-64 -left-25 top-8 z-10 p-4 rounded-4xl animate-expand-vertically animate-duration-300 animate-delay-100">
                <p class="text-start text-description">{{ details }}</p>
            </div>
        </div>
    </div>
</template>