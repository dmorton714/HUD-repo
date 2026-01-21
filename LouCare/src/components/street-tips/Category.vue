<script setup>
import Subcategory from './Subcategory.vue';
import Map from './Map.vue';

defineProps({
    categoryName: {
        type: String,
        required: true
    },
    categoryGeneralDetails: {
        type: String
    },
    subcategories: {
        type: Array,
    }
});


</script>

<template>
    <div class="hidden min-[900px]:flex bg-[var(--light-gray)] flex flex-col w-full h-full justify-center items-center p-4 gap-10 rounded-md">
        <h2 v-html="categoryName"></h2>
        <Map :subcategories="subcategories"/>
        <p v-if="categoryGeneralDetails" v-html="categoryGeneralDetails"></p>
        <div class="flex flex-col w-full h-full justify-center items-center p-4 gap-6 rounded-md">
            <Subcategory v-for="subcategory in subcategories" 
            :key="subcategory.subcategory" 
            :subcategoryName="subcategory.subcategory"
            :subcategoryGeneralDetails="subcategory.note"
            :resources="subcategory.resourceList" />
        </div>
    </div>
</template>