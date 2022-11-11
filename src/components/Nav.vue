<template>
    <nav class="px-7 py-4 bg-slate-300 m-5 rounded-full sticky top-5 z-10 flex justify-between">
        <div class="flex">
            <router-link to="/" class="text-lg font-semibold">PokéApp</router-link>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                alt="pokeball">
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
    background: rgba(255, 255, 255, 0.55);
    box-shadow: 0 2px 4px 0 rgba(31, 38, 135, 0.07);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
}
</style>