<script setup>
import { usePokemonPageStore } from '~/store/pokemonPageStore';

const pageStore = usePokemonPageStore();
const { reload } = storeToRefs(pageStore);

const loading = ref(true)
const props = defineProps({
  id: Number,
  name: String,
  variant: {
    type: String,
    validator(value) {
      return ['front', 'back', 'shiny', 'back-shiny'].includes(value)
    },
    default: 'front'
  },
})

const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/';

const sVariants = computed(() => {
  if (props.variant === 'front') {
    return ''
  }
  if (props.variant === 'back') {
    return 'back/'
  }
  if (props.variant === 'shiny') {
    return 'shiny/'
  }
  if (props.variant === 'back-shiny') {
    return 'back/shiny/'
  }
})
</script>

<template>
  <div class="select-none">
    <img :src="`${baseUrl}${sVariants}${id}.gif`" :alt="name" :class="{ 'hidden': loading }" @load="loading = false"
      class="pointer-events-none" draggable="false">
    <SkeletonSprite v-if="loading" />
  </div>
</template>