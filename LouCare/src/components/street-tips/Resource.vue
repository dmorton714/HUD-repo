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
    <div class="flex flex-col justify-center items-center p-2">
        <h4>{{ name }}</h4>
        <div class="flex justify-center items-center w-full gap-4">
            <span>?</span>
            <p>{{ address }}</p>
        </div>
        <div class="flex justify-center items-center w-full gap-4">
            <span>?</span>
            <p>{{ contact }}</p>
        </div>
        <div v-if="details" class="flex items-center justify-center hover:cursor-pointer relative" @click="showDetails = true" @mouseleave="showDetails = false">
            <p>Details</p>
            <div v-if="showDetails" class="bg-[var(--light-gray)] shadow-lg absolute left-14 -top-10 z-10 w-64 p-4 rounded-4xl animate-expand-vertically animate-duration-300 animate-delay-100">
                <p class="text-start text-description">{{ details }}</p>
            </div>
        </div>
    </div>
</template>