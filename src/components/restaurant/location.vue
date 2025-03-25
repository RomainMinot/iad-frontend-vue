<script setup lang="ts">
import { type Location } from '~/composables/restaurants';

defineProps<{
  location?: Location
}>();
</script>

<template>
  <KeyValue icon="mdi-map-marker">
    <pre class="my-0" v-text="location?.formatted_address" />
  </KeyValue>
</template>
