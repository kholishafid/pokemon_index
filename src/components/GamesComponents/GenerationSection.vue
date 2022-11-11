<template>
    <div class="mx-5 p-5 bg-slate-200 rounded-md" v-if="result">

        <h1 class="mb-3">{{ cases(route.params.generation) }}</h1>
        <h3 class="mb-3">Main Region : {{ capitalized(result.main_region.name) }}</h3>
        <div class="bg-slate-300 mb-3 p-2 rounded cursor-pointer" @click="showMoves">
            <h3>Introduced Moves : {{ result.moves.length }}
            </h3>
        </div>
        <div class="moveSection flex flex-wrap mb-3 transition-all" ref="moveSection" v-if="movesVisibility">
            <div v-for="move in result.moves" :key="move" class="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
                <div class="p-2 px-4 bg-white rounded-md">
                    <p>{{ capitalized(move.name) }}</p>
                </div>
            </div>
        </div>
        <div class="bg-slate-300 mb-3 p-2 rounded cursor-pointer" @click="showPokem">
            <div>Introduced Pokemon : {{ result.pokemon_species.length }}</div>
        </div>
        <div class="pokemSection flex flex-wrap mb-3" ref="pokemSection" v-if="pokemVisibility">
            <div v-for="poke in result.pokemon_species" :key="poke" class="block p-1 w-1/2 md:w-1/4 lg:w-1/5 xl:1/6">
                <div class="p-2 px-4 bg-white rounded-md">
                    <p>{{ capitalized(poke.name) }}</p>
                </div>
            </div>
        </div>
        <div class="mb-3">
            Introduced Types : {{ result.types.length }}
        </div>
        <div class="flex flex-wrap mb-3 bg-slate-300 rounded-md p-2">
            <div v-for="typ in result.types" :key="typ" class="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
                <p class=" rounded px-2 py-1 text-white" :class="'bg-' + typ.name">{{ capitalized(typ.name) }}</p>
            </div>
        </div>
        <div>
            <span>Games : </span>
            <div class="flex mt-2">
                <div v-for="game in result.version_groups" :key="game" class="mr-2">
                    <span class="bg-white px-2 py-1 rounded inline-block">
                        {{ capitalized(game.name) }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import axios from "axios";
import { useRoute } from "vue-router";
import capitalizedL from "../../helper/capitalizeV2";
import letterCapitalize from "../../helper/letterCapitalize";

const { capitalized } = letterCapitalize()
const { cases } = capitalizedL()

const movesVisibility = ref(false);
const pokemVisibility = ref(false);
const route = useRoute();

const result = ref(null);
const moveSection = ref(null);
const pokemSection = ref(null);

(async function () {
    await axios.get('https://pokeapi.co/api/v2/generation/' + route.params.generation).then((res) => { result.value = res.data })
})();

const showMoves = () => {
    movesVisibility.value = !movesVisibility.value;
    if (movesVisibility.value) {
        setTimeout(() => {
            moveSection.value.style.transform = 'translateX(0px)'
            moveSection.value.style.opacity = '1'
        }, 10);
    }
}

const showPokem = () => {
    pokemVisibility.value = !pokemVisibility.value;
    if (pokemVisibility.value) {
        setTimeout(() => {
            pokemSection.value.style.transform = 'translateX(0px)'
            pokemSection.value.style.opacity = '1'
        }, 10);
    }
}

</script>

<style scoped>
.moveSection {
    transform: translateY(-40px);
    transition: all 200ms;
    opacity: 0;
}

.pokemSection {
    transform: translateY(-40px);
    transition: all 200ms;
    opacity: 0;
}
</style>