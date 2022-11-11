<template>
    <div class="p-2 px-3 bg-white rounded relative">

        <div class="absolute top-0 right-1 text-sm text-slate-500">
            {{ result.id }}
        </div>

        <img :src="result.sprites.default" alt="">
        <div class="mb-1">
            {{ capitalized(result.name) }}
        </div>
        <div class="text-xs">
            <button class="px-1 py-0.5 bg-illuminating-emerald text-white rounded"
                @click="isHidden = false">Details</button>
        </div>
        <div class="w-96 h-96 fixed bg-glass right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2 bg-glass rounded-md border border-slate-300 p-5 z-20"
            :class="{ hidden: isHidden }" ref="card">
            <div class="w-20 h-20 grid place-items-center bg-slate-100 rounded border shadow float-left mr-5">
                <img :src="result.sprites.default" alt="">
            </div>
            <div>
                <div class="mb-2">
                    <span class="label">Name </span>
                    <span>{{ capitalized(result.name) }}</span>
                </div>
                <div class="mb-2">
                    <span class="label">Cost </span>
                    <span>
                        <img src="https://archives.bulbagarden.net/media/upload/4/42/Pok%C3%A9monDollar_VII.png"
                            alt="monDollar" class="inline mr-1">
                        <span>
                            {{ result.cost }}
                        </span>
                    </span>
                </div>
                <div class="mb-2">
                    <span class="label">Category </span>
                    <span>{{ capitalized(result.category.name) }}</span>
                </div>
                <div class="mb-2 relative">
                    <span class="label">Attribute </span>
                    <span v-for="attr in result.attributes" :key="attr">
                        <span class="bg-slate-300 rounded mr-1 px-1" @mouseover="showAttrDetail(attr.url)"
                            @mouseleave="hideAttrDetail">
                            {{ capitalized(attr.name) }}
                        </span>
                    </span>
                    <span v-if="attributeDetailVisibility"
                        class="absolute top-14 left-1/2 -translate-x-1/2 bg-slate-200 p-1 px-2 rounded-md ">
                        {{ attributeDetail }}
                    </span>
                </div>
                <div class="mb-2">
                    <span class="label">Effect </span>
                    <span v-for="efc in result.effect_entries" :key="efc"> {{ efc.effect }}</span>
                </div>
                <div class="absolute top-0 right-1 text-slate-500">
                    {{ result.id }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import axios from "axios";
import letterCapitalize from '../../helper/letterCapitalize'
import { onClickOutside } from '@vueuse/core';
import { useRoute, useRouter } from "vue-router";
import { useItemStore } from '../../stores/item'
import { storeToRefs } from "pinia";

const itemStore = useItemStore()
const { getAttributeDetail } = itemStore
const { attributeDetail } = storeToRefs(itemStore)

const { capitalized } = letterCapitalize();

const props = defineProps(['name', 'url']);

const route = useRoute()
const router = useRouter()

const card = ref(null);
const isHidden = ref(true);

onClickOutside(card, () => isHidden.value = true)

const result = await axios.get(props.url).then((res => {
    return res.data
}))

const attributeDetailVisibility = ref(false)

const showAttrDetail = (url) => {
    getAttributeDetail(url)
    attributeDetailVisibility.value = true
}

const hideAttrDetail = () => {
    attributeDetailVisibility.value = false
    itemStore.$reset
}
</script>

<style scoped>
.label {
    width: 100px;
    display: inline-block;
    position: relative;
    font-weight: 500;
}

.label::after {
    content: ":";
    position: absolute;
    right: 10px;
}
</style>