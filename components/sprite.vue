<script setup>
const loading = ref(true)
const isError = ref(false)
const defaultImgLoading = ref(false)
const isDefaultError = ref(false)

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

const showdownSprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/';
const defaultImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

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
  <div class="select-none grid place-items-center">
    <img
      :src="`${showdownSprite}${sVariants}${id}.gif`"
      :alt="name"
      :class="{ 'hidden': loading || error }"
      @load="loading = false"
      class="pointer-events-none max-h-full object-cover"
      draggable="false"
      @error="isError = true"
      v-if="!isError"
    >
    <SkeletonSprite v-if="loading && !isError" />
    <img
      :src="`${defaultImage}${sVariants}${id}.png`"
      :alt="name"
      :class="{ 'hidden': defaultImgLoading }"
      @load="defaultImgLoading = false"
      class="pointer-events-none max-h-full object-cover"
      draggable="false"
      @error="isDefaultError = true"
      v-if="isError && !isDefaultError"
    >
    <SkeletonSprite v-if="defaultImgLoading && !isDefaultError" />
    <div
      class="w-20 h-20 bg-white/5 rounded-full grid items-center justify-center"
      v-if="isDefaultError"
    >
      <UIcon
        name="i-heroicons-eye-slash"
        class="w-5 h-5"
      />
    </div>
  </div>
</template>