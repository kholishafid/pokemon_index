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
  return Math.ceil(currentPage.value.count / 20);
});
</script>

<template>
  <div
    class="flex justify-between gap-3 flex-col-reverse md:flex-row items-center w-full"
  >
    <div
      class="px-6 py-2 bg-slate-50/5 rounded-xl md:rounded-full text-slate-50"
    >
      Page {{ currentPageIndex }} of {{ pageTotal }}
    </div>
    <div class="flex w-full md:w-fit gap-3">
      <button
        @click="prev"
        class="px-6 py-2 disabled:bg-slate-50/50 disabled:text-slate-700 text-slate-800 rounded-xl md:rounded-full bg-slate-50/80 w-full md:w-32"
        :disabled="disabledPrev"
      >
        Previous
      </button>
      <button
        @click="next"
        class="px-6 py-2 disabled:bg-slate-50/50 disabled:text-slate-700 text-slate-800 rounded-xl md:rounded-full bg-slate-50/80 w-full md:w-32"
        :disabled="disabledNext"
      >
        Next
      </button>
    </div>
  </div>
</template>
