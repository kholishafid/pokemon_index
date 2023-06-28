<script setup>
import { completion } from '@/store/searchCompletion'

const { metaSymbol } = useShortcuts()
const isOpen = ref(false)

const router = useRouter()

function onSelect(option) {
  router.push(`/detail/${option.id.split('/')[6]}`)
  isOpen.value = false
}

defineShortcuts({
  meta_k: {
    handler: () => isOpen.value = true
  },
  escape: {
    usingInput: true,
    whenever: [isOpen],
    handler: () => isOpen.value = false
  }
})
</script>
<template>
  <UModal
    v-model="isOpen"
    :ui="{
      container: 'flex min-h-full items-start md:items-center justify-center text-center',
    }"
  >
    <UCommandPalette
      :groups="[{ key: 'name', commands: completion }]"
      @update:model-value="onSelect"
    />
  </UModal>
  <header
    class="sticky top-0 z-50 w-full backdrop-blur flex-none border-b border-gray-200 dark:border-gray-800 bg-white/75 dark:bg-gray-900/75 py-4 mb-4"
  >
    <UContainer class="flex justify-between items-center">
      <NuxtLink to="/">
        <strong>Pokemon Index</strong>
      </NuxtLink>
      <div class="flex gap-3">
        <UTooltip text="Pokemon box">
          <NuxtLink to="/pokebox">
            <UButton
              icon="i-heroicons-computer-desktop"
              color="gray"
            >
            </UButton>
          </NuxtLink>
        </UTooltip>
        <UButton
          @click="isOpen = true"
          color="gray"
        >
          <div class="text-gray-400 flex max-w-full">
            <span class="truncate max-sm:text-xs">Search Pokemon</span>
            <div class="hidden sm:ml-6 sm:block">
              <UKbd>{{ metaSymbol }}</UKbd>
              <UKbd>K</UKbd>
            </div>
          </div>
        </UButton>
      </div>
    </UContainer>
  </header>
</template>