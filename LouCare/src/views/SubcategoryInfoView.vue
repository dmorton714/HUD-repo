<script setup>
import '@/assets/main.css'
import { useRoute, useRouter } from 'vue-router';
import { useStreetTips } from '@/composables/useStreetTips';
import Resource from '@/components/street-tips/Resource.vue';
import { ref, onMounted, onUnmounted, watch } from 'vue';

const route = useRoute();
const router = useRouter();
const streetTips = useStreetTips();

const {category, subName} = route.params;

const categoryData = streetTips[category] || [];
const subcategoryData = categoryData.find(item => item.subcategory === subName);

// Redirect to street-tips page so desktop layout takes over
const handleResize = () => {
    if (window.innerWidth >= 900 && route.name === 'SubcategoryInfoView') {
        router.push('/street-tips');
    }
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
    if (window.innerWidth >= 900) {
        router.push('/street-tips');
    }
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<template>
    <div class="min-h-screen bg-[var(--light-gray)] p-4">
        <button @click="router.back()" class=" pt-30 mb-4 flex items-center text-[var(--blue)] font-bold hover:text-[var(--gold)] transition-colors duration-200">
            <img src="/down-arrow.svg" class="w-4 h-4 rotate-90 mr-2" alt="Back arrow" /> Back to Categories
        </button>

        <div v-if="subcategoryData">
            <h1 class="py-20 text-center text-2xl font-bold text-[var(--blue)] mb-2" v-html="subcategoryData.subcategory"></h1>

            <p v-if="subcategoryData.note" class="mb-8 text-gray-700 leading-relaxed" v-html="subcategoryData.note"></p>
            <div class="flex flex-wrap justify-center gap-6">
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
        <div v-else class="text-center p-8">
            <p class="text-gray-600">Subcategory not found.</p>
        </div>
    </div>
</template>

<style scoped></style>