<template>
  <div class="h-full rounded p-1 bg-slate-50/5 cursor-wait">
    <div class="absolute bottom-1/3 left-1/2 -translate-x-1/2 sm:bottom-1/2">
      <SkeletonSprite />
    </div>
    <div
      class="text-xs sm:text-base md:text-md  absolute top-2/3 sm:top-2/4 pt-1 sm:py-8 md:py-10 text-center left-1/2 -translate-x-1/2">
      <div class="w-20 h-4 rounded bg-gray-400/50 animate-pulse"></div>
      <div class="flex gap-2 sm:gap-2 justify-center animate-pulse">
        <span class="w-10 h-4 rounded bg-gray-400/50 mt-2"></span>
      </div>
    </div>
  </div>
</template>