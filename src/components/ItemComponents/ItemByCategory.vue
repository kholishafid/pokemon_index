<template>
    <div class="flex flex-wrap mx-5">
        <div v-for="item in resultItem" :key="item" class="p-2 w-1/2 md:w-1/4 lg:w-1/5">
            <Suspense>
                <ItemCard :name="item.name" :url="item.url" />
                <template #fallback>
                    <div>
                        loading....
                    </div>
                </template>
            </Suspense>
        </div>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import axios from "axios";
import { useRoute } from "vue-router";
import ItemCard from './ItemCard.vue'

const route = useRoute();
const resultItem = ref(null);

(function () {
    axios.get('https://pokeapi.co/api/v2/item-category/' + route.params.category).then((res) => {
        resultItem.value = res.data.items
    })
})();
</script>

<style>

</style>