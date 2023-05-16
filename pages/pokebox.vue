<script setup>
import { usePokemonBoxStore } from "~/store/pokemonBoxStore";

const boxStore = usePokemonBoxStore();
const { pokemonList } = storeToRefs(boxStore);
const { removeFromBox } = boxStore;
const handleRemove = (id) => {
  removeFromBox(id);
};
</script>

<template>
  <section class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
    <div
      v-for="mon in pokemonList"
      key="mon.id"
      class="grid relative group aspect-square group card-gradient rounded-lg"
    >
      <ButtonIcon
        class="w-8 m-1 aspect-square absolute z-10 right-0"
        @click="handleRemove(mon.id)"
      >
        <img src="~~/assets/icon/x.svg" alt="" />
      </ButtonIcon>
      <NuxtLink :to="`/detail/${mon.id}`" class="relative w-full">
        <div class="w-full aspect-[4/3] grid place-items-center">
          <Sprite :id="mon.id" :name="mon.name" />
        </div>

        <p
          class="text-slate-50 text-center group-hover:underline decoration-green-400 underline-offset-8"
        >
          {{ useCapitalize(mon.name) }}
        </p>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.card-gradient {
  background-image: radial-gradient(
    at 80% 90%,
    hsla(172, 33%, 77%, 0.15) 0px,
    transparent 80%
  );
}
</style>
