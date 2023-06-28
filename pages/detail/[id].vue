<script setup>
import { usePokemonDetailStore } from "~/store/pokemonDetailStore";
import { usePokemonBoxStore } from "~/store/pokemonBoxStore";

const detailStore = usePokemonDetailStore();
const { currentData } = storeToRefs(detailStore);
const { checkIsCached } = detailStore;
const boxStore = usePokemonBoxStore();
const { checkIsSaved } = storeToRefs(boxStore)
const { addToBox } = boxStore;
const toast = useToast()

const { params } = useRoute();

const handleSave = () => {
  if (checkIsSaved.value(params.id)) {
    toast.add({ title: `${currentData.value.name} is already in pokebox!` })
  } else {
    addToBox(params.id);
    toast.add({ title: `Added ${currentData.value.name} to pokemon box` })
  }
};

checkIsCached(params.id);

const columns = [
  {
    key: 'type',
    label: 'Type',
  }, {
    key: 'strong',
    label: 'Effectiveness',
  }, {
    key: 'weak',
    label: 'Weakness',
  }]

const statColumns = [
  {
    key: 'stat',
    label: 'Name'
  },
  {
    key: 'base_stat',
    label: 'Base Stat'
  }
]

const anotColums = [
  {
    key: 'ability',
    label: 'Ability'
  },
  {
    key: 'height',
    label: 'Height'
  },
  {
    key: 'weight',
    label: 'Weight'
  },
]

const anotData = computed(() => [
  {
    ability: currentData.value.abilities,
    height: currentData.value.height,
    weight: currentData.value.weight
  }
])
</script>

<template>
  <main
    class="pt-8 sm:pt-16"
    v-if="currentData"
  >
    <header class="mb-6 sm:mb-8">
      <h1 class="text-4xl font-bold capitalize">
        {{ currentData.name }}
        <span class="text-gray-400">
          #{{ currentData.id }}
        </span>
      </h1>
    </header>

    <section class="flex gap-3 mb-4 sm:mb-8 relative">
      <UCard class="w-full sm:w-fit">
        <pre class="whitespace-pre-wrap">{{ currentData.flavorText }}</pre>
      </UCard>
      <div class="max-sm:absolute right-4 bottom-4">
        <UTooltip text="Add to pokemon box">
          <UButton
            color="gray"
            icon="i-heroicons-archive-box-arrow-down"
            size="sm"
            square
            variant="solid"
            @click="handleSave"
          ></UButton>
        </UTooltip>
      </div>
    </section>

    <section
      class="grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 h-full w-full mb-4 sm:mb-8"
    >
      <div class="w-full aspect-[1/1] grid place-items-center">
        <Sprite :id="currentData.id" />
        <p>Front</p>
      </div>
      <div class="w-full aspect-[1/1] grid place-items-center">
        <Sprite
          :id="currentData.id"
          variant="back"
        />
        <p>Back</p>
      </div>
      <div class="w-full aspect-[1/1] grid place-items-center">
        <Sprite
          :id="currentData.id"
          variant="shiny"
        />
        <p>Front Shiny</p>
      </div>
      <div class="w-full aspect-[1/1] grid place-items-center">
        <Sprite
          :id="currentData.id"
          variant="back-shiny"
        />
        <p>Back Shiny</p>
      </div>
    </section>


    <section class="flex flex-col-reverse md:flex-row items-start gap-4 mb-8 md:min-w-[70%]">
      <div class="w-[30%] max-md:w-full border border-gray-300 dark:border-gray-700 rounded ">
        <UTable
          :columns="statColumns"
          :rows="currentData.stats"
        >
          <template #stat-data="{ row }">
            <span class="capitalize">{{ row.stat.name }}</span>
          </template>
        </UTable>
      </div>
      <div class="flex-1 overflow-hidden max-md:w-full lg:max-w-xl">
        <div class="border border-gray-300 dark:border-gray-700 rounded w-full mb-4 overflow-x-auto">
          <UTable
            :columns="anotColums"
            :rows="anotData"
          >
            <template #ability-data="{ row }">
              <span
                v-for="(item, index) in row.ability"
                :key="item.ability.name"
                class="capitalize"
              >
                {{ `${item.ability.name}${index !== row.ability.length - 1 ? ', ' : ''}` }}
              </span>
            </template>
          </UTable>
        </div>
        <div class="border border-gray-300 dark:border-gray-700 rounded overflow-x-auto w-full">
          <UTable
            :columns="columns"
            :rows="currentData.types"
          >
            <template #type-data="{ row }">
              <span
                class="text-white"
                v-if="row"
              >
                <Type :label="row.type.name" />
              </span>
            </template>
            <template #strong-data="{ row }">
              <span
                class="text-white flex gap-2"
                v-if="row"
              >
                <Type
                  :label="weak"
                  v-for="weak in row.strong"
                  :key="weak"
                />
              </span>
            </template>
            <template #weak-data="{ row }">
              <span
                class="text-white flex gap-2"
                v-if="row"
              >
                <Type
                  :label="weak"
                  v-for="weak in row.weak"
                  :key="weak"
                />
              </span>
            </template>
          </UTable>
        </div>
      </div>
    </section>


    <section
      v-if="currentData.evo_chain.evolves_to[0]"
      class="mb-6"
    >
      <h2 class="text-xl font-bold mb-8">Evolution : </h2>

      <div
        class="grid gap-3 md:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 h-full sm:w-full w-[50%] mb-4"
      >
        <UCard class="h-fit">
          <template #header>
            <UButton
              class="w-full"
              color="gray"
              size="2xs"
            >
              <span class="text-xs mx-auto">Base</span>
            </UButton>
          </template>
          <NuxtLink
            :to="useUrlID(currentData.evo_chain.species.url)"
            class="w-full aspect-[1/1] grid place-items-center relative group"
          >
            <div class="w-full aspect-[4/3] flex justify-center items-center">
              <Sprite :id="useUrlID(currentData.evo_chain.species.url)" />
            </div>
            <h2 class="whitespace-nowrap capitalize mt-2 text-xs font-medium group-hover:underline">
              {{ currentData.evo_chain.species.name }}
            </h2>
          </NuxtLink>
        </UCard>


        <template v-if="currentData.evo_chain.evolves_to[0]">
          <UCard class="h-fit">
            <template #header>
              <UButton
                class="w-full"
                color="gray"
                size="2xs"
              >
                <span class="text-xs mx-auto">Evolve To</span>
              </UButton>
            </template>

            <div class="flex flex-col gap-4 divide-y divide-gray-800">
              <template
                class="border"
                v-for="evolution in currentData.evo_chain.evolves_to"
              >
                <NuxtLink
                  :to="useUrlID(evolution.species.url)"
                  class="w-full aspect-[1/1] grid place-items-center relative group"
                >
                  <div class="w-full aspect-[4/3] flex justify-center items-center">
                    <Sprite :id="useUrlID(evolution.species.url)" />
                  </div>
                  <h2 class="whitespace-nowrap capitalize text-xs font-medium group-hover:underline">
                    {{ evolution.species.name }}
                  </h2>
                </NuxtLink>
              </template>
            </div>
          </UCard>

          <template v-if="currentData.evo_chain.evolves_to[0].evolves_to[0]">
            <UCard>
              <template #header>
                <UButton
                  class="w-full"
                  color="gray"
                  size="2xs"
                >
                  <span class="text-xs mx-auto">Evolve To</span>
                </UButton>
              </template>

              <div class="flex flex-col divide-y divide-gray-800">
                <template v-for="evolution in currentData.evo_chain.evolves_to[0].evolves_to">
                  <NuxtLink
                    :to="useUrlID(evolution.species.url)"
                    class="w-full aspect-[1/1] grid place-items-center group"
                  >
                    <div class="w-full aspect-[4/3] flex justify-center items-center">
                      <Sprite :id="useUrlID(evolution.species.url)" />
                    </div>
                    <h2 class="whitespace-nowrap capitalize text-xs font-medium group-hover:underline">
                      {{ evolution.species.name }}
                    </h2>
                  </NuxtLink>
                </template>
              </div>
            </UCard>

          </template>
        </template>
      </div>
    </section>

    <section v-if="currentData.varieties.length > 1">
      <h2 class="text-xl font-bold mb-8">Variant : </h2>

      <div
        class="grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 h-full w-full mb-4 sm:mb-8">
        <NuxtLink
          v-for="item in currentData.varieties"
          :key="item.pokemon.name"
          :to="useUrlID(item.pokemon.url)"
        >
          <UCard class="w-full aspect-[1/1] grid relative group">
            <div class="w-full h-full">
              <div class="max-w-full aspect-[4/3] flex items-center justify-center">
                <Sprite :id="useUrlID(item.pokemon.url)" />
              </div>
              <div class="capitalize group-hover:underline aspect-[4/1] grid place-items-center text-sm">
                {{ item.pokemon.name }}
              </div>
            </div>
          </UCard>
        </NuxtLink>
      </div>
    </section>
  </main>
<Loader v-else /></template>