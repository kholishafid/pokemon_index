<template>
    <div class="bg-slate-200 rounded-md">
        <h3 class="rounded-full text-lg px-4 font-semibold">{{ capitalized(firmness.name) }}</h3>
        <div v-if="berryFirmnessDetail" class="flex z-10 flex-wrap rounded-md ">
            <div v-for="berry in berryFirmnessDetail.berries" :key="berry" class=" p-2 w-1/2 md:w-1/4 lg:w-1/5">
                <Suspense>
                    <template #default>
                        <BerryCard :berryUrl="berry.url" />
                    </template>
                    <template #fallback>
                        <div
                            class="rounded-md bg-white relative p-2 px-4 animate-pulse h-36 flex items-center font-semibold">
                            <div>
                                <p class="absolute top-0 right-1 text-sm text-slate-500">#</p>
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
import { ref } from '@vue/reactivity';
import axios from 'axios';
import { storeToRefs } from 'pinia';
import { capitalize } from 'vue';
import { useBerriesStore } from '../../stores/berries';
import BerryCard from '../BerriesComponent/BerryCard.vue'
import letterCapitalize from '../../helper/letterCapitalize'

const { capitalized } = letterCapitalize();

const berriesStore = useBerriesStore()
const { firmnessDetailActive, firmnessDetailIndex } = storeToRefs(berriesStore);
const { setFirmnessDetailActive } = berriesStore

const props = defineProps(['firmness', 'id']);

const berryFirmnessDetail = ref(null)

const getBerryFirmnessDetail = async (firmnessUrl) => {
    await axios.get(firmnessUrl).then((res) => {
        berryFirmnessDetail.value = res.data
    })
}

getBerryFirmnessDetail(props.firmness.url)

</script>

<style>

</style>