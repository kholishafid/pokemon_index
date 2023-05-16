<template>
  <VitePwaManifest />
  <div class="container-base h-screen flex flex-col">
    <MainNavbar />
    <div class="flex-1">
      <slot />
    </div>
    <Footer />
  </div>
</template>
