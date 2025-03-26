<script setup lang="ts">
import { type Location, useFormattedAddress } from '~/composables/restaurants';

const props = defineProps<{
  location?: Location
}>();

const formattedAddress = computed(() => useFormattedAddress(props.location));
</script>

<template>
  <KeyValue icon="mdi-map-marker">
    <pre class="my-0" v-text="formattedAddress" />
  </KeyValue>
</template>
