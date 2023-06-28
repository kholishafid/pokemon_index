<script setup>
const props = defineProps({
  label: String,
});
</script>

<template>
  <span
    class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 capitalize"
    :class="label === 'dark' ? 'dark-l' : label"
  >{{ label }}</span>
</template>
