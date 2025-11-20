<script setup>
import '@/assets/main.css'
import { ref } from 'vue'

defineProps({
    categoryName: {
        required: true
    },
    description: {
        required: true,
    },
    isActive: {
        default: false
    }
});

const showDescription = ref(false);

</script>
<template>
    <div :class="[{active:isActive}, 'bg-[var(--blue)] flex w-full h-full gap-4 p-4 items-center justify-between rounded-md hover:bg-[var(--gold)] hover:scale-105 transition-all duration-200 cursor-pointer']">
        <div class="flex w-full h-full items-center justify-center"
        @click="$emit('categorySelected', categoryName)">
            <p class="text-center text-white w-full">{{ categoryName }}</p>
        </div>
        <div class="flex items-center justify-center hover:cursor-pointer relative" @click="showDescription = true" @mouseleave="showDescription = false">
            <img src="/question.svg" alt="Question mark" class="w-8 h-8">
            <div v-if="showDescription" class="bg-[var(--light-gray)] shadow-lg absolute left-14 -top-10 z-10 w-64 p-4 rounded-4xl animate-expand-vertically animate-duration-300 animate-delay-100">
                <p class="text-start text-description">{{ description }}</p>
            </div>
        </div>
    </div>
    
</template>