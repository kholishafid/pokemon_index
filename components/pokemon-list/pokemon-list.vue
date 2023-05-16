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
  <template v-if="currentPage">
    <PokemonListWrapper>
      <div
        v-for="item in currentPage.results"
        class="w-full aspect-square relative"
      >
        <PokemonListCard :item="item" />
      </div>
    </PokemonListWrapper>
  </template>
  <template v-else>
    <PokemonListWrapper>
      <div v-for="i in 5" :key="i" class="w-full aspect-square relative">
        <SkeletonCard />
      </div>
    </PokemonListWrapper>
  </template>
  <PokemonListPagination />
</template>
