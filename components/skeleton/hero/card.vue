<template>
  <div class="bg-black/25 p-3 sm:p-5 md:p-6 rounded">
    <div class="flex gap-2">
      <span class="text-[#565656] text-xl font-bold md:text-3xl bg-[#565656] rounded-md animate-pulse">Loading...</span>
      <span class="text-[#565656] text-xl md:text-3xl animate-pulse bg-[#565656] rounded-md">#??</span>
    </div>
    <div class="flex gap-1 md:gap-2 text-sm mt-1 md:mt-2">
      <SkeletonType />
      <SkeletonType />
    </div>
  </div>
</template>