<script setup lang="ts">
import { type VIcon } from 'vuetify/components';

defineProps<{
  icon: VIcon['icon']
}>();
</script>

<template>
  <div class="flex gap-2">
    <VIcon :icon="icon" class="text-slate-300" />
    <div class="text-slate-600">
      <slot />
    </div>
  </div>
</template>
