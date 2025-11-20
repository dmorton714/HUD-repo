<script setup>
import { useStreetTips } from '@/composables/useStreetTips';
import Subcategory from './Subcategory.vue';

defineProps({
    categoryName: {
        type: String,
        required: true
    },
    categoryGeneralDetails: {
        type: String
    }
})


</script>

<template>
    <div class="bg-[var(--light-gray)] flex flex-col w-full h-full justify-center items-center p-4 gap-10 rounded-md">
        <h2>{{ categoryName }}</h2>
        <p v-if="categoryGeneralDetails">{{ categoryGeneralDetails }}</p>
        <div class="bg-blue-500 flex flex-col w-full h-full justify-center items-center p-4 gap-6 rounded-md">
            Subcategories
        </div>
    </div>
</template>