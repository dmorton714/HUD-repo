<script setup>
import Resource from './Resource.vue';
import { ref } from 'vue';

defineProps({
    subcategoryName: {
        type: String
    },
    subcategoryGeneralDetails: {
        type: String
    },
    resources: {
        type: Array
    }

})


const expandSubcategory = ref(false);
const toggle = () => {
    expandSubcategory.value = !expandSubcategory.value;
}
</script>

<template>
    <div class="flex flex-col justify-center items-center w-full gap-1.5">
        <div class="bg-[var(--blue)] flex w-full h-full justify-center items-center py-4 px-8 rounded-xl">
            <h3 class="text-center text-white">{{ subcategoryName }}</h3>
            <button class="bg-[var(--medium-blue)] flex ml-auto p-2 rounded-full hover:bg-[var(--light-blue)] hover:scale-125 transition-all duration-200" @click="toggle">
                <img src="/down-arrow.svg" alt="Down Arrow" class="w-4 h-4 z-10">
            </button>
        </div>
        <div v-if="expandSubcategory" class="bg-[var(--medium-gray)] flex flex-col justify-center items-center w-full p-4 gap-6 rounded-xl animate-flip-in-y">
            <p v-if="subcategoryGeneralDetails">{{ subcategoryGeneralDetails }}</p>
            <div class="flex flex-wrap justify-center items-center w-full p-2 gap-6">
                <Resource v-for="resource in resources" 
                :key="resource.name" 
                :name="resource.name" 
                :address="resource.address" 
                :contact="resource.contact" 
                :details="resource.details" />
            </div>
        </div>
    </div>
    
</template>