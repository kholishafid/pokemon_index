<template>
    <div class="bg-slate-200 rounded-md">
        <h3 class="rounded-full text-lg px-4 font-semibold">{{ capitalized(flavor.name) }}</h3>
        <div v-if="berryFlavorDetail" class="flex z-10 flex-wrap rounded-md">
            <div v-for="berry in berryFlavorDetail.berries" :key="berry" class="p-2 w-1/2 md:w-1/4 lg:w-1/5">
                <Suspense>
                    <template #default>
                        <BerryCard :berryUrl="berry.berry.url" />
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
import { capitalize } from 'vue';
import BerryCard from '../BerriesComponent/BerryCard.vue'
import letterCapitalize from '../../helper/letterCapitalize'

const { capitalized } = letterCapitalize();

const props = defineProps(['flavor', 'id']);

const berryFlavorDetail = ref(null)

const getBerryFlavorDetail = async (firmnessUrl) => {
    await axios.get(firmnessUrl).then((res) => {
        berryFlavorDetail.value = res.data
    })
}

getBerryFlavorDetail(props.flavor.url)


</script>

<style>

</style>