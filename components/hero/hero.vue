<script setup>
import { usePokemonHeroStore } from "~/store/pokemonHeroStore";

const heroStore = usePokemonHeroStore();
const { data: pokemonHero, idHero, backgroundMesh } = storeToRefs(heroStore);
const { setHero, generateHero, setBackgroundMesh } = heroStore;

const reshuffle = (e) => {
  e.stopPropagation();
  generateHero();
};

onMounted(() => {
  if (!pokemonHero.value) {
    generateHero();
  }
});
</script>

<template>
  <div
    class="w-full min-h-[12rem] sm:min-h-[10rem] rounded-lg p-4 sm:p-6 md:p-8 flex items-center bg-white/5 mb-3 md:mb-6 overflow-hidden relative gradient md:min-h-[14rem] cursor-pointer rela"
    :style="`background-image: ${backgroundMesh}`" @click="$router.push(`/detail/${idHero}`)">
    <ButtonIcon
      class="absolute bottom-2 right-2 rounded-full p-2 bg-[#1e1e1e] hover:bg-[#333333] z-50 pointer-events-auto"
      @click="reshuffle">
      <img src="~~/assets/icon/refresh-cw.svg" class="w-4 h-4" alt="refresh-btn" />
    </ButtonIcon>
    <HeroCard v-if="pokemonHero">
      <span class="text-slate-50 text-xl font-bold md:text-3xl">{{
        useCapitalize(pokemonHero.name)
      }}</span>
      <span class="text-slate-200 text-xl md:text-3xl"> #{{ idHero }}</span>
      <div class="flex gap-2 sm:gap-2 justify-center mt-1">
        <span v-for="item in pokemonHero.types" :key="item">
          <Type :label="item.type.name" />
        </span>
      </div>
    </HeroCard>
    <SkeletonHeroCard v-else />
    <div class="absolute right-5 top-1/2 -translate-y-1/2 md:right-8 px-4 sm:px-6 md:px-8">
      <HeroSprite :id="idHero" :name="idHero" v-if="pokemonHero" />
      <SkeletonSprite v-else />
    </div>
  </div>
</template>
