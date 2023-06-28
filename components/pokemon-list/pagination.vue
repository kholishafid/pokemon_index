<script setup>
import { usePokemonPageStore } from "~/store/pokemonPageStore";

const pageStore = usePokemonPageStore();
const { currentPage, currentPageIndex } = storeToRefs(pageStore);
const { setPage, setNextPage, setPrevPage } = pageStore;

const next = () => {
  setNextPage(currentPage.value.next);
};
const prev = () => {
  setPrevPage(currentPage.value.previous);
};
const disabledPrev = computed(() => {
  if (!currentPage.value) return true;
  if (!currentPage.value.previous) return true;
});
const disabledNext = computed(() => {
  if (!currentPage.value) return true;
  if (!currentPage.value.next) return true;
});
const pageTotal = computed(() => {
  if (!currentPage.value) {
    return "?";
  }
  return Math.ceil(currentPage.value.count / 6);
});
</script>

<template>
  <div class="flex gap-3 justify-between items-center w-full">
    <UBadge
      color="yellow"
      size="md"
    >
      Page {{ currentPageIndex }} of {{ pageTotal }}
    </UBadge>

    <div class="flex w-fit gap-3">
      <UButton
        color="gray"
        @click="prev"
        :disabled="disabledPrev"
      >
        Previous
      </UButton>
      <UButton
        color="gray"
        @click="next"
        :disabled="disabledNext"
      >
        Next
      </UButton>
    </div>

  </div>
</template>
