<script setup>
import '@/assets/main.css'

defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
    },
})
</script>

<template>
    <div class="flex flex-col items-center justify-center gap-14 w-full h-screen">
        <h1 class="text-center">{{ title }}</h1>
        <p class="w-1/2">{{ description }}</p>
    </div>
</template>