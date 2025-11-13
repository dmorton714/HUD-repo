<script setup>
import '@/assets/main.css'
import { ref } from 'vue'

defineProps({
    resource: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    }
});

const showDescription = ref(false);

</script>
<template>
    <button class="bg-[var(--blue)] flex w-full h-full gap-4 p-4 items-center justify-between rounded-md hover:bg-[var(--gold)] hover:scale-105 transition-all duration-200 cursor-pointer"
    @click="navigateTo(`/street-tips/${resource}`)">
        <p class="text-center text-white w-full">{{ resource }}</p>
        <div class="flex items-center justify-center hover:cursor-pointer relative" @click="showDescription = true" @mouseleave="showDescription = false">
            <img src="/question.svg" alt="Question mark" class="w-8 h-8">
            <div v-if="showDescription" class="bg-[var(--light-gray)] shadow-lg absolute left-14 -top-10 z-10 w-64 p-4 rounded-4xl animate-expand-vertically animate-duration-300 animate-delay-100">
                <p class="text-start text-description">{{ description }}</p>

            </div>
        </div>
    </button>
</template>