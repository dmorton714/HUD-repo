<script setup>
import { useStreetTips } from '@/composables/useStreetTips';
import CategoryCard from './CategoryCard.vue'
import { ref } from 'vue';


const streetTips = useStreetTips();

const selectedCategory = ref(null); // Used to define the active category card
const emit = defineEmits(['categorySelected']);
const onCategorySelected = (categoryName) => {
    emit('categorySelected', categoryName);
    selectedCategory.value = categoryName;
};

</script>

<template>
    <div class="bg-[var(--light-gray)] flex flex-col h-full p-1 rounded-md w-full">
        <h2 class="text-center">Resources</h2>
        <hr class="w-full border-gray-600 mt-4 mb-16">
        <div class="flex flex-col items-center justify-center gap-1">
            <CategoryCard v-for="streetTip in Object.keys(streetTips)" 
            :key="streetTip" 
            :category-name="streetTips[streetTip][0].categoryName"
            :description="streetTips[streetTip][0].description"
            :is-active="selectedCategory === streetTips[streetTip][0].categoryName"
            @categorySelected="onCategorySelected"
            />
        </div>
    </div>
</template>