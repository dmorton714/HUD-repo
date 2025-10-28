<script setup>
import '@/assets/main.css'

defineProps({
    resources: {
        type: Array,
        required: true
    }
})
</script>
<template>
    <ul>
        <button v-for="(resource, index) in resources" :key="index" 
        class="bg-[var(--blue)] flex items-center justify-center w-32 h-32 rounded-md hover:bg-[var(--gold)] hover:scale-105 transition-all duration-200 cursor-pointer"
        @click="navigateTo(`/street-tips/${resource}`)">
            <p class="text-center text-white px-2">{{ resource }}</p>
        </button>
    </ul>
</template>