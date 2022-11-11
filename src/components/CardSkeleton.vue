<template>


    <div class="rounded overflow-hidden border drop-shadow-sm cursor-pointer animate-pulse">
        <div class="w-full h-28 bg-slate-300 flex justify-center items-center relative">
            <div class="animate-bounce h-5 w-5 ">....</div>
            <div class="absolute top-0 right-1.5 text-slate-500 text-sm">#</div>
        </div>
        <div class="p-2 bg-white">
            <div>
                <h3 class="mb-2 first-letter:uppercase bg-gray-300 text-gray-300 inline-block rounded w-2/3 p-0">
                    Loading..
                </h3>
            </div>
            <div class="flex text-xs">
                <div v-for="n in 2" :key="n">
                    <div class="mr-1 px-1.5 py-0.5 rounded text-white bg-gray-300 w-10">...</div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>