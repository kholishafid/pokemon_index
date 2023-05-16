<script setup>
import { usePokemonDetailStore } from "~/store/pokemonDetailStore";

const slider = ref();
const state = ref(0);
const detailStore = usePokemonDetailStore();
const { currentData, dataCached, loading } = storeToRefs(detailStore);
const { checkIsCached } = detailStore;

const moveSlide = () => {
  slider.value.style.transform = `translateX(-${state.value * 13}rem)`;
};

const next = () => {
  if (state.value === 3) {
    state.value = 0;
    return moveSlide();
  }
  state.value += 1;
  return moveSlide();
};
const prev = () => {
  if (state.value === 0) {
    state.value = 3;
    return moveSlide();
  }
  state.value -= 1;
  return moveSlide();
};
</script>

<template>
  <div class="relative w-52 mx-auto">
    <SliderLeftArrow @action="prev" />
    <div class="overflow-hidden bg-slate-50/80 rounded-md">
      <div class="w-[52rem] overflow-hidden flex relative transition-all duration-500" ref="slider">
        <SliderSlide label="Front">
          <Sprite :id="currentData.id" />
        </SliderSlide>
        <SliderSlide label="Back">
          <Sprite :id="currentData.id" variant="back" />
        </SliderSlide>
        <SliderSlide label="Shiny">
          <Sprite :id="currentData.id" variant="shiny" />
        </SliderSlide>
        <SliderSlide label="Back Shiny">
          <Sprite :id="currentData.id" variant="back-shiny" />
        </SliderSlide>
      </div>
    </div>
    <SliderRightArrow @action="next" />
  </div>
</template>
