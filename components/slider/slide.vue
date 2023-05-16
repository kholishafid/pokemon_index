<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Lemon ha-ha'
  }
})
</script>

<template>
  <div class="h-52 w-52 grid place-items-center relative">
    <slot />
    <p class="absolute bottom-4 w-full text-center text-slate-700">{{ label }}</p>
  </div>
</template>