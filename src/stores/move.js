import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMoveStore = defineStore("move", () => {
  const moveList = ref(null);
  const moveData = ref(null);

  const getMoveList = async (
    url = "https://pokeapi.co/api/v2/move?limit=40"
  ) => {
    await axios.get(url).then((res) => {
      moveData.value = res.data;
      moveList.value = res.data.results;
    });
  };

  return {
    moveList,
    getMoveList,
    moveData,
  };
});
