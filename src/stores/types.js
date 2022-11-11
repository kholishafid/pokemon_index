import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTypesStore = defineStore("types", () => {
  const typeRelation = ref(null);
  const results = ref(null);

  async function getTypeRealtion(type = "") {
    await axios.get("https://pokeapi.co/api/v2/type/" + type).then((res) => {
      results.value = res.data;
      let dummyObj = {};

      dummyObj["weak"] = res.data.damage_relations.double_damage_from;
      dummyObj["strong"] = res.data.damage_relations.double_damage_to;

      typeRelation.value = dummyObj;
    });
  }
  return { typeRelation, getTypeRealtion, results };
});
