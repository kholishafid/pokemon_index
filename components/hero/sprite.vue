<script setup>

const props = defineProps({
  id: Number,
  name: Number,
})

const spriteLoaded = ref(false)
const spriteNotFound = ref(false);
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/'

const spriteIsLoaded = () => {
  spriteLoaded.value = true;
}
const spriteIsError = () => {
  spriteNotFound.value = true;
}
</script>

<template>
  <div class="select-none">
    <img :src="`${baseUrl}${id}.gif`" :alt="name" :class="{ 'hidden': !spriteLoaded || spriteNotFound }"
      @load="spriteIsLoaded" @error="spriteIsError" class="pointer-events-none p-2" draggable="false" v-if="id">
    <SkeletonSprite v-if="!spriteLoaded && !spriteNotFound" />
    <div v-if="spriteNotFound">
      <div class="w-20 h-20 bg-white/25 rounded-full grid place-items-center text-xl font-bold sm:bottom-1/2">
        <div class="text-center">
          <p>?</p>
          <p class="text-xs font-normal">Not Found</p>
        </div>
      </div>
    </div>
  </div>
</template>