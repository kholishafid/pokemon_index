<script setup>
const props = defineProps({
  item: Object,
});
</script>

<template>
  <UCard
    @click="$router.push(`/detail/${item.id}`)"
    as="div"
    class="h-full w-full cursor-pointer card-gradient divide-y-0"
  >
    <div class="w-full aspect-[4/3] grid place-items-center">
      <Sprite
        :id="item.id"
        :name="item.name"
      />
    </div>
    <div class="flex-1">
      <div class="capitalize max-sm:text-center text-sm mt-2">{{ item.name }}</div>
      <div class="gap-2 sm:gap-2 mt-1 hidden sm:flex">
        <span
          v-for="item in item.types"
          :key="item"
        >
          <Type :label="item.type.name" />
        </span>
      </div>
    </div>

  </UCard>
</template>

<style scoped>
.card-gradient {
  background-image: radial-gradient(at 80% 90%,
      hsla(95, 98%, 77%, 0.15) 0px,
      transparent 80%);
}
</style>
