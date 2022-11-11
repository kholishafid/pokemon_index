<template>
    <div class="bg-white p-3 rounded-md relative h-20" @click="isVisible = true">
        <span class="absolute top-0 right-1 text-sm text-slate-500">{{ moveDetail.id }}</span>
        <div class="mb-2">{{ capitalized(move.name) }}</div>
        <div class="text-sm">
            <span class="mr-2 text-white rounded p-0.5 px-2 w-fit text-xs" :class="'bg-' + moveDetail.type.name">{{
                    capitalized(moveDetail.type.name)
            }}</span>
            <span class="mr-2 text-white rounded p-0.5 px-2 w-fit text-xs"
                :class="'bg-' + moveDetail.damage_class.name">{{
                        capitalized(moveDetail.damage_class.name)
                }}</span>
        </div>
    </div>
    <div v-if="isVisible"
        class="min-w-[24rem] max-w-[100%]  min-h-[24rem] fixed bg-glass right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2 bg-glass rounded-md border border-slate-300 p-5 z-20"
        ref="card">
        <div>
            <span class="font-semibold mb-2 block">{{ capitalized(moveDetail.name) }}</span>
        </div>
        <div class="flex flex-wrap mb-2">
            <span class="w-1/2 bg-white p-1 px-2 border border-slate-300">Power : {{ moveDetail.power }}</span>
            <span class="w-1/2 bg-white p-1 px-2 border border-slate-300">PP : {{ moveDetail.pp }}</span>
            <span class="w-1/2 bg-white p-1 px-2 border border-slate-300">Priority : {{ moveDetail.priority }}</span>
            <span class="w-1/2 bg-white p-1 px-2 border border-slate-300">Accuracy : {{ moveDetail.accuracy }}</span>
        </div>
        <div>
            <span v-for="effect in  moveDetail.effect_entries" :key="effect">
                <p>
                    {{ effect.effect }}
                </p>
            </span>
        </div>

    </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core';
import axios from 'axios';
import { ref } from 'vue';
import letterCapitalize from '../../helper/letterCapitalize';

const { capitalized } = letterCapitalize()
const props = defineProps(['move'])
const card = ref(null)

onClickOutside(card, () => {
    isVisible.value = false
})
const isVisible = ref(false)
const moveDetail = await axios.get(props.move.url).then((res) => {
    return res.data
})
</script>

<style scoped>

</style>