<script setup>
const props = defineProps({
  item: Object,
});
</script>

<template>
  <div
    class="h-full rounded p-1 bg-slate-50/5 hover:shadow-md hover:bg-white/10 transition-all text-white card-gradient cursor-pointer"
    @click="$router.push(`/detail/${item.id}`)"
  >
    <div class="absolute bottom-1/3 left-1/2 -translate-x-1/2 sm:bottom-1/2">
      <Sprite :id="item.id" :name="item.name" />
    </div>
    <div
      class="text-xs sm:text-base md:text-md absolute top-2/3 sm:top-2/4 pt-1 sm:py-8 md:py-10 text-center left-1/2 -translate-x-1/2"
    >
      <div>{{ useCapitalize(item.name) }}</div>
      <div class="flex gap-2 sm:gap-2 justify-center mt-1">
        <span v-for="item in item.types" :key="item">
          <Type :label="item.type.name" />
        </span>
      </div>
    </div>
    <span>{{ item.id }}</span>
  </div>
</template>

<style scoped>
.card-gradient {
  background-image: radial-gradient(
    at 80% 90%,
    hsla(95, 98%, 77%, 0.15) 0px,
    transparent 80%
  );
}
</style>
