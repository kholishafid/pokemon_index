<template>
    <div class="flex mx-6 my-5 bg-glass w-fit px-5 rounded-full py-2">
        <div>
            <router-link to="/" class="router">Home</router-link>
            <span class="mx-2">/</span>
        </div>
        <div v-for="(value, index) in breadcumbs" :key="index">
            <router-link :to="actualLink[index]" class="router">{{ capitalized(value) }}</router-link>
            <span v-if="index + 1 < breadcumbs.length" class="mx-2">/</span>
        </div>
    </div>

</template>

<script setup>
import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import letterCapitalize from '../helper/letterCapitalize'

const { capitalized } = letterCapitalize()


const route = useRoute()
const actualLink = ref(null)

const breadcumbs = ref(null);
watchEffect(() => {
    const routePath = route.path.split('/');

    breadcumbs.value = routePath.filter((e) => {
        if (e.length > 1) {
            return e
        }
    });

    let dummarr = []

    dummarr[0] = '/' + breadcumbs.value[0]

    function push(x, y) {
        dummarr[x] = '/' + breadcumbs.value[x - 1] + '/' + breadcumbs.value[x]
    }

    for (let i = 1; i < breadcumbs.value.length; i++) {
        push(i)
    }

    actualLink.value = dummarr
})


</script>

<style scoped>
.router-link-exact-active {
    font-weight: 600;
}

.router {
    position: relative;
    width: fit-content;
}

.router::before {
    content: "";
    width: 0%;
    height: 1px;
    background-color: black;
    position: absolute;
    bottom: -1px;
    transition: all 300ms;
}

.router:hover::before {
    width: 100%;
}
</style>