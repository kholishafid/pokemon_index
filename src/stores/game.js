import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameStore = defineStore("game", () => {
  const gameList = ref(null);

  (async function () {
    await axios.get("https://pokeapi.co/api/v2/generation").then((res) => {
      gameList.value = res.data.results;
    });
  })();
});
