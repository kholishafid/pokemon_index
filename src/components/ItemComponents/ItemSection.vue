<template>
    <div class="mx-5">

        <div>
            <h1 class="px-5 py-2 text-lg bg-slate-200 w-fit rounded-t-md">Item by Category</h1>
        </div>
        <div class="flex flex-wrap bg-slate-200 py-2">
            <div v-for="category in itemCategory" :key="category" class="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  px-2 py-1 ">
                <Suspense>
                    <ItemCategory :category="category" />
                    <template #fallback>
                        <div class="bg-white rounded-md px-4 p-2 flex items-center h-12">
                            <div class="w-5 h-5 rounded-full bg-slate-400 animate-bounce mr-2"></div>
                        </div>
                    </template>
                </Suspense>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { storeToRefs } from 'pinia'
import { capitalize } from 'vue';
import { useItemStore } from '../../stores/item'
import ItemCategory from './ItemCategoryList.vue'
import Breadcumbs from '../Breadcumbs.vue'

const itemStore = useItemStore()
const { itemCategory } = storeToRefs(itemStore)

</script>

<style>

</style>