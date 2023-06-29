<script setup>
import { usePokemonBoxStore } from "~/store/pokemonBoxStore";

const router = useRouter()
const boxStore = usePokemonBoxStore();
const { pokemonList } = storeToRefs(boxStore);
const { removeFromBox } = boxStore;

const handleRemove = (ev, id) => {
  ev.stopPropagation()
  removeFromBox(id)
};
</script>

<template>
  <section class="grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-4">
    <UCard
      v-for="mon in pokemonList"
      key="mon.id"
      class="grid relative group aspect-[1/1] group card-gradient rounded-lg cursor-pointer"
      @click="router.push(`/detail/${mon.id}`)"
    >
      <div class="relative w-full group">
        <div
          class="absolute top-0 right-0 hidden group-hover:block"
          @click="e => handleRemove(e, mon.id)"
        >
          <UTooltip text="Release">
            <UButton
              color="gray"
              icon="i-heroicons-archive-box-x-mark"
            />
          </UTooltip>
        </div>
        <div class="w-full aspect-[4/3] grid place-items-center">
          <Sprite
            :id="mon.id"
            :name="mon.name"
          />
        </div>

        <div class="aspect-[4/1] grid items-center hover:underline cursor-pointer">
          <p class="dark:text-slate-50 text-center capitalize text-gray-800">
            {{ mon.name }}
          </p>
        </div>
      </div>
    </UCard>
  </section>
</template>

<style scoped>
.card-gradient {
  background-image: radial-gradient(at 80% 90%,
      hsla(69, 100%, 70%, 0.15) 0px,
      transparent 80%);
}
</style>
