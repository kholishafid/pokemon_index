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
    class="gradient overflow-hidden rounded-lg divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 h-full w-full cursor-pointer card-gradient divide-y-0 p-6 flex items-center relative col-span-2 md:col-span-3 lg:col-span-2 xl:col-span-4 max-sm:min-h-[170px] aspect-[2/1] md:aspect-[3/1] lg:aspect-[2/1] xl:aspect-[4/1]"
    :style="`background-image: ${backgroundMesh}`"
    @click="$router.push(`/detail/${idHero}`)"
    v-if="pokemonHero"
  >
    <div class="w-[70%]">
      <div>
        <h3 class="capitalize text-3xl xl:text-4xl font-bold mb-1">{{ pokemonHero.name }}</h3>
        <div class="flex gap-2 max-md:py-2 mb-2">
          <Type
            v-for="item in pokemonHero.types"
            :key="item.name"
            :label="item.type.name"
          />
        </div>
        <div
          class="hidden sm:grid sm:grid-cols-2 dark:bg-black/20 bg-white/30 backdrop-blur border-gray-200 border dark:border-0 p-2 gap-y-2 rounded-md lg:px-4"
        >
          <div
            v-for="(val, idx) in pokemonHero.stats"
            :key="val"
          >
            <span class="text-xs font-medium xl:text-sm capitalize">{{ val.stat.name }} : {{ val.base_stat }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="w-[30%] grid items-center justify-center">
      <div class="justify-center">
        <Sprite :id="idHero" />
      </div>
      <UButton
        color="gray"
        class="absolute bottom-2 right-2 z-50 pointer-events-auto"
        size="2xs"
        @click="reshuffle"
      >
        Shuffle
      </UButton>
    </div>
  </div>
  <SkeletonHero v-else />
</template>
