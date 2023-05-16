export const usePokemonDetailStore = defineStore('pokemonDetail', {
  state: () => {
    return {
      currentData: null,
      dataCached: {},
      loading: true,
    };
  },
  actions: {
    async initData(id) {
      const newData = await fetchPokemonById(id);
      this.currentData = newData;
      this.dataCached[id] = newData;
      this.loading = false;
    },
    getCachedData(id) {
      const newData = this.dataCached[id];
      this.currentData = newData;
    },
    checkIsCached(id) {
      this.currentData = null;
      if (this.dataCached[id]) return this.getCachedData(id);
      if (!this.dataCached[id]) return this.initData(id);
    },
  },
  getters: {
    types() {
      return this.currentData.types;
    },
  },
  persist: {
    storage: persistedState.localStorage
  }
});
