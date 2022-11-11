<template>
    <div>
        <div>
            <Breadcumbs />
        </div>
        <div class="flex flex-wrap mx-5">
            <div v-for="move in moveList" :key="move" class="p-1 w-1/2 md:w-1/4 lg:w-1/5 cursor-pointer">
                <Suspense>
                    <MoveCard :move="move" />
                    <template #fallback>
                        <div class="bg-white p-3 rounded-md relative h-20">

                        </div>
                    </template>
                </Suspense>
            </div>
        </div>
        <div class="m-5 flex justify-center">
            <button class="px-2 py-2 w-28 rounded-l-md bg-white"
                @click="moveData.previous ? getMoveList(moveData.previous) : false" v-if="moveData">Previous</button>
            <button class="px-2 py-2 w-28 rounded-l-md bg-white" @click="getMoveList(moveData.next)">Next</button>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import Breadcumbs from '../components/Breadcumbs.vue';
import MoveCard from '../components/MoveComponents/MoveCard.vue';
import { useMoveStore } from '../stores/move'

const moveStore = useMoveStore()
const { getMoveList } = moveStore
const { moveList, moveData } = storeToRefs(moveStore)


getMoveList()
</script>

<style>

</style>