<template>
    <div>
        <div class="mx-5 flex">
            <router-link to="/berry/allberries" class="px-5 rounded py-2 text-base sm:text-lg">All Berries</router-link>
            <router-link to="/berry/berryfirmness" class="px-5 rounded py-2 text-base sm:text-lg">Berries Firmness
            </router-link>
            <router-link to="/berry/berryflavor" class="px-5 rounded py-2 text-base sm:text-lg">Berries Flavor
            </router-link>
        </div>
        <router-view />
    </div>
</template>

<script setup>

</script>

<style scoped>
.router-link-active {
    background-color: rgb(226 232 240);
}
</style>