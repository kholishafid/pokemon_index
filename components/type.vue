<script setup>
const props = defineProps({
  label: String,
});
</script>

<template>
  <span class="p-1 text-slate-50 px-2 xl:px-3 xl:py-0.5 rounded-lg font-bold text-xs sm:text-base md:text-md"
    :class="label">
    <span>{{ useCapitalize(label) }}</span>
  </span>
</template>
