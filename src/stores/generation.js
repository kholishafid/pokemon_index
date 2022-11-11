import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useGenerationStore = defineStore("generation", () => {
  const genList = ref(null);

  (async function () {
    await axios.get("https://pokeapi.co/api/v2/generation/").then((res) => {
      genList.value = res.data.results;
    });
  })();

  return {
    genList,
  };
});
