## Uasge 

```javascript 
<script setup>
import StreetTips from '@/components/StreetTips.vue'
</script>

<template>
  <div class="body">
    <StreetTips />
  </div>
</template>
```

## Features

- Presents a list of street safety tips and emergency shelters.
- Uses CSS custom properties (variables) for consistent color theming based on Louisville city colors.
- Styled for readability and responsiveness.
- Easy to maintain — new sections or resources can be added via structured data.

**Props**

Currently, this component does not take any props.
If needed, it can be extended to accept props such as:

- tips (Array) — for dynamically rendering safety tips.
- resources (Array) — for dynamically rendering shelter and resource listings.