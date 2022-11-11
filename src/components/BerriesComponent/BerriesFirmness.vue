<template>
    <div class="mx-5">
        <div class="bg-slate-200 rounded py-2">
            <div v-for="(item, index) in berryFirmness" :key="index" class="rounded cursor-pointer">
                <FirmnessDetail :firmness="item" :id="index" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import axios from 'axios';
import { storeToRefs } from 'pinia';
import { useBerriesStore } from '../../stores/berries';
import FirmnessDetail from './FirmnessDetail.vue'

const berriesStore = useBerriesStore()
const { berryFirmness } = storeToRefs(berriesStore)
const berryFirmnessDetail = ref(null)

const getBerryFirmnessDetail = async (firmnessUrl) => {
    await axios.get(firmnessUrl).then((res) => {
        berryFirmnessDetail.value = res.data
    })
}

const berryDetailVisibility = ref(false)

const firmnessClick = (firmness) => {
    getBerryFirmnessDetail(firmness)
    berryDetailVisibility.value = true;
}

</script>

<style>

</style>