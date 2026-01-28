<script setup>
import '@/assets/main.css'
import { ref } from 'vue'
import MobileDropdown from '@/components/street-tips/MobileDropdown.vue';
import Resource from '@/components/street-tips/Resource.vue';


const props = defineProps({
    categoryKey: {
        type: String,
        required: true
    },
    categoryName: {
        required: true
    },
    description: {
        required: true,
    },
    isActive: {
        default: false
    },
    subcategory:{
        type: Array,
        required: true
    },
    subcategoryData: {
        type: Array,
        required: true
    },
    categoryIcon: {
        type: String,
        required: false
    }
});

const emit = defineEmits(['categorySelected']);
const showDescription = ref(false);

const selectedSubcategory = ref(null);

const selectSubcategory = (subcategoryName) => {
    selectedSubcategory.value = props.subcategoryData.find(
        item => item.subcategory === subcategoryName
    );
};

const goBackToSubcategories = () => {
    selectedSubcategory.value = null;
};



</script>
<template>
    <div :class="[
        {active:isActive}, 
        'hidden min-[900px]:flex bg-[var(--blue)] flex w-full h-full gap-4 p-4 items-center justify-between rounded-md transition-all duration-200 cursor-pointer',
        'min-[900px]:hover:bg-[var(--gold)] min-[900px]:hover:scale-105'
    ]"
    @click="$emit('categorySelected', categoryName)">
        <div class="flex w-full h-full items-center justify-center">
            <h3 class="text-center text-white w-full">{{ categoryName }}</h3>
        </div>
        <div class="flex items-center justify-center hover:cursor-pointer relative" @click="showDescription = true" @mouseleave="showDescription = false">
            <img src="/question.svg" alt="Question mark" class="w-8 h-8">
            <div v-if="showDescription" class="bg-[var(--light-gray)] shadow-lg absolute left-14 -top-10 z-10 w-64 p-4 rounded-4xl animate-expand-vertically animate-duration-300 animate-delay-100">
                <p class="text-start text-description">{{ description }}</p>
            </div>
        </div>
    </div>

    <!-- Mobile Dropdown -->
    <div class="min-[900px]:hidden w-full">
    <MobileDropdown
      :categoryName="categoryName"
      :categoryIcon="categoryIcon" @select="$emit('categorySelected', categoryName)"
      :isActive="isActive"
      
     >
     <p class="text-[var(--black)] pl-4 pb-5 mb-2 break-words max-w-[350px] ">{{ description }}</p>

     <!-- Subcategory List View -->
     <div v-if="!selectedSubcategory">
         <ul class="flex flex-col gap-2">
             <li v-for="sub in subcategory" :key="sub">
                 <button 
                     @click="selectSubcategory(sub)"
                     class="block w-full p-4 bg-white rounded-lg text-[var(--blue)] active:bg-[var(--gold)] hover:bg-[var(--light-blue)] transition-all duration-200 text-left"
                 >
                     <span v-html="sub" class="font-bold"></span>
                 </button>
             </li>
         </ul>
     </div>

     <!-- Subcategory Details View -->
     <div v-else class="flex flex-col gap-4 max-h-[70vh] overflow-x-hidden">
         <button 
             @click="goBackToSubcategories"
             class="w-100 flex items-center text-[var(--blue)] font-bold mb-2 transition-colors duration-200 sticky top-0 bg-[var(--light-gray)] pb-2 gap-2 z-10"
         >
             <img src="/down-arrow.svg" class="rotate-90 w-7 h-7 bg-[var(--medium-blue)] p-2 rounded-full cursor-pointer hover:bg-[var(--light-blue)] hover:scale-105 transition-all duration-200" alt="Back arrow" /> Back to Subcategories
         </button>
         
         <h2 class="text-xl font-bold text-[var(--blue)] mb-2 pt-3" v-html="selectedSubcategory.subcategory"></h2>
         
         <p v-if="selectedSubcategory.note" class="mb-4 text-gray-700 leading-relaxed" v-html="selectedSubcategory.note"></p>
         
         <div class="flex flex-col gap-4">
             <Resource 
                 v-for="resource in selectedSubcategory.resourceList"
                 :key="resource.name"
                 :name="resource.name"
                 :address="resource.address"
                 :contact="resource.contact"
                 :details="resource.details" 
             />
         </div>
     </div>

</MobileDropdown>  
</div>
</template>