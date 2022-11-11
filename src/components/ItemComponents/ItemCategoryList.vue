<template>
    <div class="bg-white rounded-md px-4 h-12 flex items-center cursor-pointer"
        @click="router.push({ path: `/item/${category.name}` })">
        <ItemCategorySpirite :categoryItem="categoryItem" v-if="categoryItem" />
        {{ capitalized(category.name) }}
    </div>
</template>

<script setup>
import axios from 'axios';
import { capitalize, defineAsyncComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import letterCapitalize from '../../helper/letterCapitalize'

const router = useRouter();

const { capitalized } = letterCapitalize();

const ItemCategorySpirite = defineAsyncComponent(() => import('./ItemCategorySpirite.vue'))

const categoryItem = await axios.get(props.category.url).then((res) => {
    return res.data.items[0].url
});

const result = ref(null);
const props = defineProps(['category']);


const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("oke")
    }, 1000);
})

promise.then((res) => { })

</script>

<style>

</style>