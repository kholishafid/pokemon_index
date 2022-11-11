<template>
    <div class="home-wrapper">

        <div class="">

            <div class="mx-10 mb-10">
                <div class="w-1/2 sm:w-1/3 mx-auto mb-10">
                    <img src="https://archives.bulbagarden.net/media/upload/d/d2/Pok%C3%A9mon_logo_English.png"
                        alt="pokemon_logo">
                </div>
                <p class="mb-5">
                    Pokémon (Japanese: ポケットモンスター Pocket Monsters, ポケモン Pokémon for short), sometimes shortened to PKMN,
                    is
                    an overarching
                    media franchise owned by Nintendo, Creatures, Inc., and Game Freak. First appearing in 1996 with the
                    release of its
                    first entries on the Game Boy, the game series has since inspired an array of media, including an
                    anime, a card game,
                    numerous manga, and various spin-off games.
                </p>
                <p>
                    The series focuses on the creatures known as Pokémon, as well as their inhabited world, full of
                    legends,
                    tales, and
                    adventures. Several interpretations of the world explore different themes and elements. Most
                    commonly,
                    Pokémon coexist
                    with humans and can be caught, trained, and used in battles and other activities. Trainers, along
                    with
                    their
                    Pokémon,
                    travel across diverse lands aiming to make their dreams become reality, and the bond — love and
                    trust —
                    between Trainers
                    and their Pokémon is often cited as the key to success.
                </p>
            </div>

            <Header />
        </div>

        <div class="w-full px-5">
            <div class="my-5 mx-2">
                <h1 class="text-lg font-semibold">All Pokemon</h1>
            </div>


            <div>
                <div class="flex flex-wrap">
                    <div v-for="pokemon in pokemonList" :key="pokemon" class="w-1/2 md:w-1/4 lg:w-1/5  p-2 relative">
                        <div class="rounded border drop-shadow-sm cursor-pointer">
                            <Suspense>
                                <Card :pokeurl="pokemon.url" />
                                <template #fallback>
                                    <CardSkeleton />
                                </template>
                            </Suspense>
                        </div>
                    </div>
                </div>
                <div class="m-5 flex justify-center">
                    <button class="border px-2 py-1 shadow w-20 rounded-l-md bg-white"
                        @click="fetchResult.previous ? fetchPokemon(fetchResult.previous) : false"
                        v-if="fetchResult">Previous</button>
                    <button class="border px-2 py-1 shadow w-20 rounded-r-md bg-white"
                        @click="fetchPokemon(fetchResult.next)">Next</button>
                </div>
            </div>


        </div>


    </div>
</template>

<script setup>
import Card from '../components/Card.vue';
import CardSkeleton from '../components/CardSkeleton.vue';
import { storeToRefs } from "pinia"
import { usePokemonStore } from '../stores/pokemon'
import Header from '../components/Header.vue';

const pokemonStore = usePokemonStore()
const { pokemonList, fetchResult } = storeToRefs(pokemonStore)
const { fetchPokemon } = pokemonStore
fetchPokemon()
</script>

<style>

</style>