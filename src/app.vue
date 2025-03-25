<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <VApp>
    <VAppBar fixed app>
      <RouterLink to="/" class="decoration-none px-4">
        <span class="decoration-none font-black text-3xl text-indigo-700">Restaurant finder</span>
      </RouterLink>
      <VSpacer />
    </VAppBar>
    <VMain>
      <VContainer>
        <RouterView />
      </VContainer>
    </VMain>
    <VFooter app>
      <p class="text-center flex-1">
        © {{ currentYear }}
      </p>
    </VFooter>
  </VApp>
</template>
