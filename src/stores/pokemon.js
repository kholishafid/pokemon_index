import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const usePokemonStore = defineStore("pokemon", () => {
  const fetchResult = ref(null);
  const pokemonList = ref(null);

  async function fetchPokemon(
    url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
  ) {
    await axios.get(url).then((res) => {
      fetchResult.value = res.data;
      pokemonList.value = res.data.results;
    });
  }

  return {
    pokemonList,
    fetchResult,
    fetchPokemon,
  };
});
