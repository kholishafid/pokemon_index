<script setup>
import { usePokemonDetailStore } from "~/store/pokemonDetailStore";
import { usePokemonBoxStore } from "~/store/pokemonBoxStore";

const detailStore = usePokemonDetailStore();
const { currentData } = storeToRefs(detailStore);
const { checkIsCached } = detailStore;
const boxStore = usePokemonBoxStore();
const { addToBox } = boxStore;

const { params } = useRoute();

const handleSave = () => {
  addToBox(params.id);
};

checkIsCached(params.id);
</script>

<template>
  <section class="flex items-center md:mb-12 relative">
    <NuxtLink to="/" class="absolute left-0">
      <ButtonIcon>
        <img
          src="~~/assets/icon/arrow-left.svg"
          alt="back"
          class="w-4 md:w-6"
        />
      </ButtonIcon>
    </NuxtLink>

    <div class="text-center flex-1" v-if="currentData">
      <span class="text-slate-50 text-xl font-bold md:text-3xl">
        {{ useCapitalize(currentData.name) }}
      </span>
      <span class="text-slate-200 text-xl md:text-3xl">
        #{{ currentData.id }}
      </span>
    </div>

    <div v-if="currentData" class="flex sm:gap-1 lg:gap-4 absolute right-0">
      <NuxtLink :to="`/preview/${params.id}`">
        <ButtonIcon>
          <img
            src="~~/assets/icon/play-circle.svg"
            alt="preview-icon"
            class="w-4 md:w-6"
          />
        </ButtonIcon>
      </NuxtLink>
      <ButtonIcon @click="handleSave">
        <img src="~~/assets/icon/save.svg" alt="save-icon" class="w-4 md:w-6" />
      </ButtonIcon>
    </div>
  </section>

  <section class="max-w-4xl mx-auto" v-if="currentData">
    <div class="grid-layout gap-3 items-start">
      <div class="grid-item grid__item-type">
        <TypeCard />
      </div>

      <div class="grid-item grid__item-sprite">
        <Slider />
      </div>

      <div class="grid-item grid__item-stats">
        <PokemonStats />
      </div>
    </div>
  </section>

  <SkeletonDetail v-else />
</template>

<style scoped>
.grid-layout {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: fit-content fit-content fit-content;
  grid-template-areas:
    "sprite"
    "type"
    "stats";
}

.grid__item-sprite {
  grid-area: sprite;
  padding: 4rem 0 2rem 0;
}

.grid__item-type {
  grid-area: type;
}

.grid__item-stats {
  grid-area: stats;
}

@media screen and (min-width: 800px) {
  .grid-layout {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: fit-content 1fr;
    grid-template-areas:
      "sprite type"
      "stats stats";
    gap: 2rem;
  }
  .grid__item-sprite {
    margin: auto 0;
    padding: 0;
  }
  .grid__item-type {
    margin: auto 0;
  }
}
</style>
