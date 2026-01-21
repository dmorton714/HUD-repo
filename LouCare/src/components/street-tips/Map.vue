<script setup>
import "@/assets/main.css";
import { ref, computed } from "vue";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import geocodedLocations from "@/data/geocoded-locations.json";
import L from "leaflet";

const props = defineProps({
  subcategories: {
    type: Array,
    required: true,
  },
});

// Compute markers
const markers = computed(() => {
  if (!props.subcategories?.length) return [];

  const resourceNames = new Set();
  props.subcategories.forEach((subcat) => {
    subcat.resourceList?.forEach((resource) => {
      resourceNames.add(resource.name);
    });
  });

  return geocodedLocations
    .filter((location) => resourceNames.has(location.name))
    .map((location) => ({
      name: location.name,
      address: location.address,
      latLng: [location.lat, location.lng],
      contact: location.contact,
      details: location.details,
      subcategory: location.subcategory,
    }));
});

// Compute bounds FROM markers
const bounds = computed(() => {
  if (!markers.value.length) return null;
  return L.latLngBounds(markers.value.map((m) => m.latLng));
});

const fallbackCenter = [38.2527, -85.7585] // Louisville
const fallbackZoom = 11

</script>

<template>
  <div id="map" class="w-3/4 h-96 z-0 relative">
    <!-- Map -->
    <LMap
        v-if="bounds"
        :center="fallbackCenter"
        :zoom="fallbackZoom"
        :bounds="bounds"
        :bounds-padding="[80, 80]"
        class="h-full w-full"
        >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <LMarker
        v-for="(marker, index) in markers"
        :key="index"
        :lat-lng="marker.latLng"
      >
        <LPopup>
          <div class="max-w-xs p-2">
            <strong class="text-base font-semibold block mb-1">
              {{ marker.name }}
            </strong>

            <p class="text-sm text-gray-700 mb-2">📍 {{ marker.address }}</p>

            <p v-if="marker.subcategory" class="text-xs text-gray-500 mb-2">
              {{ marker.subcategory }}
            </p>

            <div
              v-if="marker.contact && marker.contact.length > 0"
              class="text-sm border-t pt-2 mb-2"
              v-html="marker.contact[0]"
            ></div>

            <div
              v-if="marker.details"
              class="text-xs text-gray-600 border-t pt-2"
              v-html="marker.details"
            ></div>
          </div>
        </LPopup>
      </LMarker>
    </LMap>

    <!-- Info badge -->
    <div
      v-if="markers.length > 0"
      class="absolute bottom-4 left-4 bg-white px-3 py-2 rounded shadow-lg z-10 text-sm font-medium"
    >
      📍 {{ markers.length }} locations
    </div>

    <!-- No locations message -->
    <div
      v-if="markers.length === 0"
      class="absolute inset-0 flex items-center justify-center bg-gray-50"
    >
      <p class="text-gray-500">No locations to show in this category</p>
    </div>
  </div>
</template>
