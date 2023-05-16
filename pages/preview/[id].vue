<script setup>
const { params } = useRoute();
const id = computed(() => parseInt(params.id));

const opponentsId = ref(6);

const handleChange = (e) => {
  opponentsId.value = e.target["id"].value;
};
</script>

<template>
  <main class="container grid lg:grid-cols-2 lg:gap-4">
    <div class="text-slate-50 mb-8 lg:order-2">
      <h1 class="text-xl mb-2">Change Opponents</h1>
      <form @submit.prevent="handleChange" class="flex gap-2">
        <input
          type="text"
          class="px-4 py-2 rounded-xl md:rounded-full text-slate-50 w-full border-none outline-none bg-slate-50/5"
          name="id"
        />
        <button
          class="px-6 py-1 rounded-xl md:rounded-full bg-slate-50/80 text-black"
        >
          GO
        </button>
      </form>
    </div>

    <div
      class="w-full relative aspect-[4/3] battle-background rounded-md left-0"
    >
      <div class="absolute aspect-square right-0 grid place-items-center w-1/2">
        <Sprite :id="opponentsId" variant="front" />
      </div>
      <div
        class="absolute aspect-square left-0 bottom-0 grid place-items-center w-1/2"
      >
        <Sprite :id="id" variant="back" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.battle-background {
  background-image: url("~~/assets/image/pokemon_x_and_y_battle_background_5_by_phoenixoflight92_d83pwna.png");
  background-size: cover;
  background-position: center;
}
</style>
