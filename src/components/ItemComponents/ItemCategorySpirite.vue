<template>
    <div v-if="spirites">
        <img :src="spirites" alt="">
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import axios from "axios";

const props = defineProps(['categoryItem']);
const spirites = ref(null);

const getSpirites = async () => {
    await axios.get(props.categoryItem).then((res) => {
        spirites.value = res.data.sprites.default
    })
}

getSpirites()
</script>

<style>

</style>