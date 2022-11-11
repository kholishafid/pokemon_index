<template>
    <div class="header-wrapper m-5 flex flex-wrap">
        <div class="p-2 w-1/2 md:w-1/4 lg:w-1/5">
            <router-link to="/berry/allberries"
                class="px-10 py-5 w-full text-lg  bg-glass   rounded-full inline-block text-center ">
                Berries
            </router-link>
        </div>
        <div class="p-2 w-1/2 md:w-1/4 lg:w-1/5">
            <router-link to="/game/"
                class="px-10 py-5 w-full text-lg  bg-glass  rounded-full inline-block text-center ">
                Game</router-link>
        </div>
        <div class="p-2 w-1/2 md:w-1/4 lg:w-1/5">
            <router-link to="/item" class="px-10 py-5 w-full text-lg  bg-glass  rounded-full inline-block text-center ">
                Item</router-link>
        </div>
        <div class="p-2 w-1/2 md:w-1/4 lg:w-1/5">
            <router-link to="/move" class="px-10 py-5 w-full text-lg  bg-glass  rounded-full inline-block text-center ">
                Moves
            </router-link>
        </div>
        <div class="p-2 w-1/2 md:w-1/4 lg:w-1/5">
            <button class="px-10 py-5 w-full text-lg  bg-glass  rounded-full inline-block text-center ">Pokémon</button>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useGenerationStore } from '../stores/generation'

const generationStrore = useGenerationStore()
const { genList } = storeToRefs(generationStrore)
</script>

<style scoped>
.bg-glass:hover {
    background-color: #fff;
}
</style>