<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useStreetTips } from '@/composables/useStreetTips';
import Resource from '../street-tips/Resource.vue';

const route = useRoute();
const router = useRouter();
const streetTips = useStreetTips();

const {category, subName} = route.params;

const categoryData = streetTips[category] || [];
const subcategoryData = categoryData.find(item => item.subcategory === subName);
</script>


<template>
    <div class="min-h-screen bg-[var(--light-gray)] p-4">
        <button @click="router.back()" class="mb-4 flex items-center text-[var(--blue)] font-bold">
            <img src="/down-arrow.svg" class="w-4 h-4 rotate-90 mr-2" /> Back
        </button>

        <div v-if="subcategoryData">
            <h1 class="text-2xl font-bold text-[var(--blue)] mb-2" v-html="subcategoryData.subcategory"></h1>

            <p v-if="subcategoryData.note" class="mb-8 text-gray-700 leading-relaxed" v-html="subcategoryData.note"></p>
            <div class="flex flex-wrap justify-center gap-6"></div>

            <Resource 
                v-for="resource in subcategoryData.resourceList"
                :key="resource.name"
                :name="resource.name"
                :address="resource.address"
                :contact="resource.contact"
                :details="resource.details" 
            />
        </div>
    </div>
</template>