<template>
  <div
    class="overflow-hidden rounded-lg divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 h-full w-full cursor-pointer card-gradient divide-y-0 p-6 flex items-center relative col-span-2 md:col-span-3 lg:col-span-2 xl:col-span-4 max-sm:min-h-[170px] aspect-[2/1] md:aspect-[3/1] lg:aspect-[2/1] xl:aspect-[4/1]"
  >
    <div class="w-[70%] flex flex-col">
      <USkeleton class="w-40 h-8 mb-2" />
      <span class="flex gap-2 mb-2">
        <USkeleton class="w-10 h-5" />
        <USkeleton class="w-10 h-5" />
      </span>
      <USkeleton class="w-full h-20 mb-2 max-sm:hidden" />
    </div>
    <div class="w-[30%] grid items-center justify-center">
      <div class="justify-center">
        <SkeletonSprite />
      </div>
    </div>
  </div>
</template>