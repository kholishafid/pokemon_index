<template>
  <UCard
    as="div"
    class="h-full w-full cursor-pointer aspect-[1/1]"
  >
    <div class="w-full min-h-[140px] aspect-square grid place-items-center">
      <SkeletonSprite />
    </div>

    <div class="space-y-3 w-full">
      <USkeleton class="h-6 w-full" />
      <USkeleton class="h-5 w-1/2" />
    </div>
  </UCard>
</template>