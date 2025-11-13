<script setup>
import ResourceCard from '@/components/common/ResourceCard.vue'

const streetTips = [
    {
        resource: 'Shelters',
        description: 'Emergency shelter, bed reservations, and referrals to other social services'
    },
    {
        resource: 'White Flag',
        description: 'Indoor shelter during extreme weather events'
    },
    {
        resource: 'Family & Children',
        description: 'Services for families and children in need of housing, shelter, and educational assistance'
    },
    {
        resource: 'Outreach',
        description: 'Volunteer groups working with unhoused people in the community'
    },
    {
        resource: 'Food',
        description: 'Meals and food assistance contacts'
    },
    {
        resource: 'Healthcare',
        description: 'Medical care and treatment contacts'
    },
    {
        resource: 'Jobs & Education',
        description: 'Job training and education contacts'
    },
    {
        resource: 'Transitional Housing',
        description: 'Temporary housing contacts'
    },
    {
        resource: 'LGBTQ+',
        description: 'Group meetings, support, clothing, and more resources'

    },
    {
        resource: 'Veterans',
        description: 'Housing, benefits, support, and more resources for veterans'
    },
    {
        resource: 'Partner Violence & Human Trafficking',
        description: 'Support services for victims of partner violence and human trafficking'
    },
    {
        resource: 'General Resources',
        description: 'Get IDs, birth certificates, Social Security cards, and file shelter complaints'
    }
]

</script>

<template>
    <div class="bg-[var(--light-gray)] flex flex-col h-full p-1 rounded-md w-full">
        <h2 class="text-center">Resources</h2>
        <hr class="w-full border-gray-600 mt-4 mb-16">
        <div class="flex flex-col items-center justify-center gap-1">
            <ResourceCard v-for="streetTip in streetTips" 
            :key="streetTip.resource" 
            :resource="streetTip.resource"
            :description="streetTip.description"
            />
        </div>
    </div>
</template>