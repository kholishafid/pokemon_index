<script setup>
import { usePokemonDetailStore } from "~/store/pokemonDetailStore";

const detailStore = usePokemonDetailStore();
const { currentData } = storeToRefs(detailStore);
</script>

<template>
  <section class="bg-white/5 rounded p-5 sm:p-8 text-slate-50">
    <h1 class="text-xl font-semibold mb-4">Base Stats</h1>
    <template v-for="(item, index) in currentData.stats" :key="index">
      <div class="flex justify-between">
        <span>{{ useCapitalize(item.stat.name) }}</span>
        <span>{{ item.base_stat }}</span>
      </div>
      <input
        type="range"
        class="w-full"
        :value="item.base_stat"
        maxlength="100"
        disabled="true"
      />
    </template>
  </section>
</template>
