<script setup lang="ts">
const router = useRouter();
const goToDetail = (e: Event) => {
  const key: string = (<HTMLFormElement>e.target)["key"].value;
  router.push(`/detail/${key}`);
};
</script>

<template>
  <PokemonList />
</template>
