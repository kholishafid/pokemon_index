<script setup>
import { usePokemonPageStore } from "~/store/pokemonPageStore";

const pageStore = usePokemonPageStore();
const { currentPage } = storeToRefs(pageStore);
const { initPage } = pageStore;

onMounted(() => {
  if (!currentPage.value) {
    initPage();
  }
});
</script>

<template>
  <PokemonListWrapper>
    <Hero />
    <template v-if="currentPage">
      <div
        v-for="item in currentPage.results"
        class="w-full aspect-[1/1] relative"
      >
        <PokemonListCard :item="item" />
      </div>
    </template>
    <template v-else>
      <div
        v-for="i in 6"
        :key="i"
        class="w-full aspect-square relative"
      >
        <SkeletonCard />
      </div>
    </template>
  </PokemonListWrapper>
  <PokemonListPagination />
</template>
