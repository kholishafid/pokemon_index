<template>
    <div class="w-full h-28 bg-slate-300 flex justify-center items-center relative rounded-t-md">
        <img :src="pokemonData.sprites.front_default" alt="">
        <div class="absolute top-0 right-1.5 text-slate-500 text-sm">{{ pokemonData.order }}</div>
    </div>
    <div class=" bg-white rounded-b-md p-2">
        <div class="px-2 pt-2">
            <h3 class="mb-3 first-letter:uppercase">{{ pokemonData.name }}</h3>
        </div>
        <div class="flex text-sm relative px-2 pb-2">
            <div v-for="ptype in pokemonData.types" :key="ptype">
                <p class="mr-1 first-letter:uppercase px-1.5 py-0.5 rounded text-white" :class="'bg-' + ptype.type.name"
                    @mouseover="showTypeDetails(ptype.type.name)" @mouseleave="hideTypeDetails">
                    {{ ptype.type.name }}
                </p>
            </div>
            <div v-if="typeDetailVisibility"
                class="absolute bottom-10 left-0 z-20 rounded flex p-2 w-full text-white text-sm type-detail-modal"
                :class="typeDetailModalColor">
                <div class="flex-1">
                    <h6 class="font-semibold mb-1">Weak to</h6>
                    <div v-if="typeRelation" class="flex flex-wrap">
                        <div v-for="weakto in typeRelation.weak" :key="weakto" class="mr-1">
                            <p class="text-white rounded p-0.5 px-1.5 mb-1 w-fit flex flex-wrap"
                                :class="'bg-' + weakto.name">
                                {{ capitalize(weakto.name) }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex-1">
                    <h6 class="font-semibold mb-1">Strong to</h6>
                    <div v-if="typeRelation" class="flex flex-wrap">
                        <div v-for="strongto in typeRelation.strong" :key="strongto" class="mr-1">
                            <span class="text-white rounded p-0.5 px-1.5 mb-1 w-fit flex flex-wrap"
                                :class="'bg-' + strongto.name">
                                {{ capitalize(strongto.name) }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity"
import axios from "axios"
import { storeToRefs } from "pinia"
import { capitalize } from "vue";
import { useTypesStore } from '../stores/types'

const typesStore = useTypesStore()
const { typeRelation, results } = storeToRefs(typesStore)
const { getTypeRealtion } = typesStore

const props = defineProps(['pokeurl'])
const pokemonData = await axios.get(props.pokeurl).then((res) => { return res.data })

const typeDetailVisibility = ref(false)
const typeDetailModalColor = ref("bg-slate-100")

const showTypeDetails = (type) => {
    getTypeRealtion(type)
    typeDetailVisibility.value = true
    typeDetailModalColor.value = 'bg-' + type

}

const hideTypeDetails = (type) => {
    typesStore.$reset
    typeDetailVisibility.value = false
}

</script>

<style scoped>

</style>