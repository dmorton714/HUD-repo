<script setup>
import '@/assets/main.css'
import { useStreetTips } from '@/composables/useStreetTips';
import Hero from '@/components/common/Hero.vue'
import CardsSidebar from '@/components/street-tips/CardsSidebar.vue'
import Category from '@/components/street-tips/Category.vue';
import { ref } from 'vue';


const streetTips = useStreetTips();

// category is the reference used to display either the Hero component or the selected Category component
// categoryName is the name of the category selected by the user, it is emitted from the CategoryCard component
// to the CardsSidebar component, then is emitted from the CardsSidebar component to the StreetTipsView component.
// Here we use the categoryName get the props for the Category component, and display the category selected.
const category = ref(null);
const subcategories = ref([]);
const showCategory = (categoryName) => {
    for (const [key, object] of Object.entries(streetTips)) {
        if (categoryName === object[0].categoryName) {
          category.value = key;
          subcategories.value = []; // clear the subcategories array before adding new subcategories for the selected category
          for (let i = 1; i < object.length; i++) {
            subcategories.value.push(object[i]);
          }
        }
    }
};



</script>

<template>
  <div class="content-container">
    <aside class="sidebar">
      <CardsSidebar 
      @category-selected="showCategory"
      />
    </aside>

    <main class="main-content">
        <Hero v-if="!category"
        title="Street Tips"
        description="A quick reference guide for people in need of shelter, outreach services, food, healthcare, and other help in Louisville, KY" 
        />
        <Category v-else 
        :category-name="streetTips[category][0].categoryName"
        :category-general-details="streetTips[category][0].generalDetails"
        :subcategories="subcategories"
        />
    </main>
  </div>
</template>

<style scoped>
.content-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  max-width: 100%;
  margin-top: 110px;
  padding: 10px;
}

/* Sidebar on the left */
.sidebar {
  flex: 1;
  min-width: 20%;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 10px;
}

/* Main hero content */
.main-content {
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* Responsive stacking on small screens */
@media (max-width: 900px) {
  .content-container {
    flex-direction: column;
    align-items: center;
  }

  .sidebar {
    max-width: 100%;
    order: 2;
  }

  .main-content {
    order: 1;
  }
}
</style>
