<template>
    <div class="card bg-white rounded p-2 px-4 relative pointer-events-auto h-36 flex items-center">

        <div>
            <p class="absolute top-0 right-1 text-sm text-slate-500">{{ berry.id }}</p>
            <img :src="berryDetailed.sprites.default" :alt="berry.name" class="mb-1">
            <p class="mb-1">{{ capitalized(berry.item.name) }}</p>
            <p v-for="effect in berryDetailed.effect_entries" :key="effect" class="text-xs font-semibold">
                {{ effect.short_effect }}
            </p>
        </div>

    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import axios from "axios";
import { storeToRefs } from 'pinia';
import { useBerriesStore } from '../../stores/berries';
import letterCapitalize from '../../helper/letterCapitalize'

const { capitalized } = letterCapitalize();

const berriesStore = useBerriesStore()
const { berriesList } = storeToRefs(berriesStore)

const props = defineProps(['berryUrl']);

const berry = await axios.get(props.berryUrl).then((res) => {
    return res.data
});

const berryDetailed = await axios.get(berry.item.url).then((res) => { return res.data })

</script>

<style>

</style>