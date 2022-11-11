<template>
    <div class="mx-5">
        <div v-for="game in genList" :key="game">
            <div class="bg-white rounded-full my-2 h-12 flex items-center px-5 ">
                <router-link :to="'/game/' + game.name">
                    {{ cases(game.name) }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useGenerationStore } from '../../stores/generation'
import capitalizedL from '../../helper/capitalizeV2'



const { cases } = capitalizedL()
const generationStore = useGenerationStore();
const { genList } = storeToRefs(generationStore);

</script>


<style>

</style>