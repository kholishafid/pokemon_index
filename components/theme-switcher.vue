<script setup>
const colorMode = useColorMode()

const iconTheme = computed(() => {
  if (colorMode.preference === 'system') {
    return 'i-heroicons-computer-desktop'
  }
  if (colorMode.preference === 'light') {
    return 'i-heroicons-sun'
  }
  if (colorMode.preference === 'dark') {
    return 'i-heroicons-moon'
  }
})
</script>
<template>
  <UPopover>
    <UButton
      color="gray"
      :icon="iconTheme"
    />
    <template #panel>
      <div class="flex flex-col divide-y divide-gray-200 dark:divide-gray-700 min-w-[140px]">
        <div
          class="flex items-center px-4 py-2 gap-3 text-xs font-medium hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          @click="colorMode.preference = 'light'"
        >
          <UIcon
            class="w-4 h-4"
            :name="'i-heroicons-sun'"
          /> Light
          <UButton
            size="2xs"
            class="ml-auto"
            v-if="colorMode.preference === 'light'"
          />
        </div>
        <div
          class="flex items-center px-4 py-2 gap-3 text-xs font-medium hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          @click="colorMode.preference = 'dark'"
        >
          <UIcon
            class="w-4 h-4"
            :name="'i-heroicons-moon'"
          /> Dark
          <UButton
            size="2xs"
            class="ml-auto"
            v-if="colorMode.preference === 'dark'"
          />
        </div>
        <div
          class="flex items-center px-4 py-2 gap-3 text-xs font-medium hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          @click="colorMode.preference = 'system'"
        >
          <UIcon
            class="w-4 h-4"
            :name="'i-heroicons-computer-desktop'"
          />System
          <UButton
            size="2xs"
            class="ml-auto"
            v-if="colorMode.preference === 'system'"
          />
        </div>
      </div>
    </template>
  </UPopover>
</template>