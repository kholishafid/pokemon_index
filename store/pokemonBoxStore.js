import { usePokemonDetailStore } from '~/store/pokemonDetailStore'
export const usePokemonBoxStore = defineStore('pokemonBox', {
  state: () => {
    return {
      box: []
    }
  },
  actions: {
    addToBox(id) {
      if (this.box.indexOf(id) == -1) this.box.push(id)
    },
    removeFromBox(id) {
      const position = this.box.indexOf(id.toString());
      this.box.splice(position, 1);
    }
  },
  getters: {
    pokemonList() {
      const detailStore = usePokemonDetailStore()
      const list = []
      this.box.forEach((elem) => {
        if (detailStore.dataCached[elem]) list.push(detailStore.dataCached[elem])
      })
      return list
    }
  },
  persist: {
    storage: persistedState.localStorage,
  }
})