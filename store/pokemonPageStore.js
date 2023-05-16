export const usePokemonPageStore = defineStore('pokemonPage', {
  state: () => {
    return {
      currentPage: null,
      visitedPage: {},
      currentPageIndex: 1,
    };
  },
  actions: {
    async initPage() {
      const newPageData = await fetchPage();
      this.currentPage = newPageData;
      this.visitedPage[1] = newPageData;
    },
    async getNewPageData(url, index) {
      const newPageData = await fetchPage(url);
      this.currentPage = newPageData;
      this.visitedPage[index] = newPageData;
    },
    async setPage(url) {
      const isAvaible = this.visitedPage[this.currentPageIndex];
      if (isAvaible) {
        setTimeout(() => {
          this.currentPage = isAvaible;
        }, 100);
      }
      if (!isAvaible) {
        await this.getNewPageData(url, this.currentPageIndex);
      }
    },
    setNextPage(url) {
      this.currentPage = null;
      this.currentPageIndex += 1;
      this.reload = true;
      this.setPage(url);
    },
    setPrevPage(url) {
      this.currentPage = null;
      this.currentPageIndex -= 1;
      this.reload = true;
      this.setPage(url);
    },
  },
  persist: {
    storage: persistedState.localStorage
  }
});
