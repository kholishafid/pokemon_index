<template>
  <VitePwaManifest />


  <UNotifications />
  <div class="min-h-screen flex flex-col">
    <MainNavbar />
    <UContainer class="w-full mx-auto max-w-7xl flex-1 flex flex-col px-2 sm:px-8">
      <slot />
    </UContainer>
    <Footer />
  </div>
</template>
