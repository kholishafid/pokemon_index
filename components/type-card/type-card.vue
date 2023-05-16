<script setup>
import { usePokemonDetailStore } from "~/store/pokemonDetailStore";

const detailStore = usePokemonDetailStore();
const { checkIsCached, types } = detailStore;
</script>

<template>
  <aside class="bg-white/5 rounded p-5 sm:p-8 w-full text-slate-50">
    <h3 class="mb-4 text-lg font-semibold">Type</h3>

    <div v-for="(item, index) in types" :key="index" class="w-full relative">
      <section class="mb-4 w-full">
        <Type :label="item.type.name" class="inline-block" />
      </section>

      <section class="bg-[#2a2a2a] p-4 rounded-md z-30 w-full mb-4">
        <div class="flex gap-2 flex-wrap">
          <p>Weak to</p>
          <Type v-for="(item, index) in item.weak" :key="index" :label="item" />
        </div>
        <div class="mt-2 flex gap-2 flex-wrap">
          <p>Strong to</p>
          <Type
            v-for="(item, index) in item.strong"
            :key="index"
            :label="item"
          />
        </div>
      </section>
    </div>
  </aside>
</template>
