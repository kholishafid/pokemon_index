<template>
    <div class="mx-5">
        <div class="bg-slate-200 rounded py-2">
            <div class="mx-2 mb-2 mt-2 bg-slate-300 p-4 rounded-md">
                <h2 class="font-semibold mb-3 text-lg">Flavor</h2>
                <p class="mb-2">Flavor (Japanese: 味 flavor) is a special set of attributes that certain foods in the
                    Pokémon
                    world have. The affected
                    foods include Berries, Pokéblocks, Poffins, Apricorns, Aprijuice, malasadas, and curry.</p>
                <p class="mb-2">Most of the foods can have more than one flavor attributed to them.</p>
                <p class="mb-2">The primary flavor mechanic is taste preferences: different Pokémon like and dislike
                    different flavors, depending on
                    their Nature. This usually influences the effectiveness of the food. The flavors that a Pokémon
                    likes
                    and dislikes
                    correspond to the stat that its Nature raises or lowers. For example, all Pokémon who like spicy
                    flavors
                    have a Nature
                    that raises their Attack, while those that dislike spicy flavors have a Nature that lowers it.
                    Pokémon
                    who have neutral
                    Natures have no likes or dislikes.</p>
                <p class="mb-2">Different flavors also represent different stats in most foods. For example, a Pokéblock
                    that has a spicy flavor will
                    raise a Pokémon's Cool condition. When this is combined with the taste preference aspect, if a
                    Pokémon
                    dislikes spicy
                    foods and is fed a Pokéblock that is predominantly spicy, its Cool condition will raise less than if
                    a
                    Pokémon that
                    likes spicy foods was fed the same Pokéblock.</p>
            </div>
            <div v-for="(item, index) in berryFlavor" :key="index" class="rounded cursor-pointer">
                <flavor-detail :flavor="item" :id="index" />
            </div>
        </div>
    </div>
</template>

<script setup>
import FlavorDetail from './FlavorDetail.vue'
import { storeToRefs } from 'pinia';
import { useBerriesStore } from '../../stores/berries';

const berriesStore = useBerriesStore()
const { berryFlavor } = storeToRefs(berriesStore)



</script>

<style>

</style>