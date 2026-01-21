<script setup>
    import '@/assets/main.css'
    import { ref } from "vue";
    
    const props = defineProps({
        categoryName: {
                type: String,
                required: true
        },
        isActive: {
                type: Boolean,
                default: false 
        },
        categoryIcon: {
            type: String,
            required: true
        }
    });
    
    const dropdownOpen = ref(false);
    const toggle = () => {
        dropdownOpen.value = !dropdownOpen.value;
    }
    </script>
    
    <template>
    <!-- Hide on desktop/tablets -->
     <div class="md:hidden w-full max-w-full">
    
    <!-- Toggle Button -->
    <button
                @click="toggle"
                :class="[
                    'w-full flex items-center p-4 rounded-md transition-all duration-200 text-white',
                    (props.isActive || dropdownOpen) ? 'bg-[var(--gold)]' : 'bg-[var(--blue)]'
                ]"
            >
            <div class="px-3">
                <img 
                    v-if="props.categoryIcon" 
                    :src="`/${props.categoryIcon}-icon.svg`" 
                    :alt="`${props.categoryName} Icon`" 
                    class="w-6 h-6"
                >
            </div>
                <span class="pl-2 pr-4 truncate font-sans text-lg text-left">{{ props.categoryName }}</span>
    
                <img src="/down-arrow.svg" alt="Down Arrow" class="w-4 h-4 transition-transform duration-300 ml-auto" :class="{ 'rotate-180': dropdownOpen  }">
            </button>
    
            <transition name="slide">
                <div
                    v-show="dropdownOpen"
                    class="overflow-y-auto bg-[var(--light-gray)] rounded-md mt-2 p-4 w-full max-h-[80vh]"
                >

          
                    <slot>

                    </slot>
                </div>
            </transition>
    
        </div>
    </template>
    
    
    <style scoped>
    /* slide transition */
    .slide-enter-from,
    .slide-leave-to {
      max-height: 0;
      opacity: 0;
      transform: translateY(-5px);
    }
    
    .slide-enter-to,
    .slide-leave-from {
      max-height: 2000px;
      opacity: 1;
      transform: translateY(0);
    }
    
    .slide-enter-active,
    .slide-leave-active {
      transition: all 0.25s ease;
    }
    </style>