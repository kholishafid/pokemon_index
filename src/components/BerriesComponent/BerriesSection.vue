<template>
    <div class="mx-5">
        <div class="flex flex-wrap bg-slate-200">
            <div class="mx-2 mb-2 mt-4 bg-slate-300 p-4 rounded-md">
                <h2 class="font-semibold mb-3 text-lg">Berry</h2>
                <p>Berries (Japanese: きのみ Tree Fruit) are small, juicy, fleshy fruit. As in the real world, a large
                    variety exists in the
                    Pokémon world, with a large range of flavors and effects. First found in the Generation II games,
                    many Berries have
                    since become critical held items in battle, where their various effects include HP and status
                    condition restoration,
                    stat enhancement, and even damage negation.
                </p>
            </div>
            <div v-for="berry in berriesList" :key="berry" class=" p-2 w-1/2 md:w-1/4 lg:w-1/5">
                <Suspense>
                    <template #default>
                        <BerryCard :berryUrl="berry.url" />
                    </template>
                    <template #fallback>
                        <div class="rounded-md bg-white relative p-2 px-4 animate-pulse h-36 flex items-center">
                            <div>
                                <p class="absolute top-0 right-1 text-sm text-slate-500 font-semibold">#</p>
                                <p class="animate-bounce text-lg">...</p>
                                <p class="mb-2">Loading...</p>
                                <p class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
                                </p>
                            </div>
                        </div>
                    </template>
                </Suspense>
            </div>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useBerriesStore } from '../../stores/berries';
import BerryCard from './BerryCard.vue';
import { onMounted } from '@vue/runtime-core';

const berriesStore = useBerriesStore()
const { berriesList, berryListSprites } = storeToRefs(berriesStore)

</script>

<style scoped>

</style>