export const usePokemonHeroStore = defineStore('pokemonHero', {
  state: () => {
    return {
      data: null,
      idHero: null,
      backgroundMesh: '',
    };
  },
  actions: {
    generateId() {
      this.idHero = Math.floor(Math.random() * 1000 + 1);
    },
    setBackgroundMesh() {
      if (!this.backgroundMesh) {
        this.backgroundMesh = useBackgroundMesh();
      }
    },
    async setHero(id) {
      this.data = null;
      this.data = await fetchPokemonById(id);
    },
    async generateHero() {
      this.backgroundMesh = null;
      this.data = null;
      this.idHero = null;
      this.generateId();
      await this.setHero(this.idHero);
      this.setBackgroundMesh();
    },
  },
});
