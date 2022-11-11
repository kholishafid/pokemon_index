import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useItemStore = defineStore("item", () => {
  const itemCategory = ref(null);
  const attributeDetail = ref(null);

  (async function () {
    await axios
      .get("https://pokeapi.co/api/v2/item-category?limit=50")
      .then((res) => {
        itemCategory.value = res.data.results;
      });
  })();

  async function getAttributeDetail(url) {
    await axios.get(url).then((res) => {
      attributeDetail.value = res.data.descriptions[0].description;
    });
  }

  return {
    itemCategory,
    getAttributeDetail,
    attributeDetail,
  };
});
