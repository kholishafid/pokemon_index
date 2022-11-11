import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBerriesStore = defineStore("berries", () => {
  const berriesList = ref(null);
  const berryListSprites = ref(null);
  const berryFirmness = ref(null);
  const berryFlavor = ref(null);
  const firmnessDetailActive = ref(false);
  const firmnessDetailIndex = ref(null);

  (async function () {
    await axios.get("https://pokeapi.co/api/v2/berry?limit=100").then((res) => {
      berriesList.value = res.data.results;
    });
  })();

  async function getBerrySprites(list) {
    let dummyArr = [];
    list.forEach((e) => {
      dummyArr.push(e);
    });

    berryListSprites.value = dummyArr;
  }

  (async function () {
    await axios.get("https://pokeapi.co/api/v2/berry-firmness").then((res) => {
      berryFirmness.value = res.data.results;
    });
  })();

  (async function () {
    await axios.get("https://pokeapi.co/api/v2/berry-flavor").then((res) => {
      berryFlavor.value = res.data.results;
    });
  })();

  function setFirmnessDetailActive(id) {
    if (id == firmnessDetailIndex.value) {
      firmnessDetailActive.value = !firmnessDetailActive.value;
    } else {
      firmnessDetailIndex.value = id;
      firmnessDetailActive.value = true;
    }
  }

  return {
    berriesList,
    berryListSprites,
    getBerrySprites,
    berryFirmness,
    berryFlavor,
    firmnessDetailActive,
    firmnessDetailIndex,
    setFirmnessDetailActive,
  };
});
