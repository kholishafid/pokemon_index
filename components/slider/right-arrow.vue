<script setup>
const emit = defineEmits(["action"]);
</script>

<template>
  <button
    class="absolute top-1/2 -translate-y-1/2 -right-4 bg-[#2A2A2A] border border-transparent hover:border-slate-50 z-10 p-1 rounded-full"
    @click="emit('action')"
  >
    <img src="~~/assets/icon/chevron-right.svg" alt="right-arrow" />
  </button>
</template>
