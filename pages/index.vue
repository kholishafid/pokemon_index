<script setup lang="ts">
const router = useRouter();
const goToDetail = (e: Event) => {
  const key: string = (<HTMLFormElement>e.target)["key"].value;
  router.push(`/detail/${key}`);
};
</script>

<template>
  <Hero />
  <form
    @submit.prevent="(event) => goToDetail(event)"
    class="flex gap-3 mb-3 md:mb-6"
  >
    <input
      type="text"
      class="px-4 py-2 rounded-xl md:rounded-full text-slate-50 w-full border-none outline-none bg-slate-50/5"
      placeholder="Show pokemon info by name or id"
      name="key"
    />
    <button class="px-6 py-1 rounded-xl md:rounded-full bg-slate-50/80">
      Go
    </button>
  </form>
  <PokemonList />
</template>
