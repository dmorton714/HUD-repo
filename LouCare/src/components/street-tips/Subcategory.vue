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
    <div class="flex justify-center items-center p-2">
        <p>{{ subcategoryName }}</p>
        <button class="flex justify-center items-center self-end" @click="toggle">^?</button>
    </div>
    <div class="flex flex-col justify-center items-center w-full">
        <p>{{ subcategoryGeneralDetails }}</p>
        <div class="flex justify-center items-center p-2 gap-6">
            <div v-for="resource in resources" :key="resource.name">
                <Resource :resource="resource" />
            </div>
        </div>
    </div>
</template>