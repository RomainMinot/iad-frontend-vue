<script setup lang="ts">
import { type Review, useAverageRating } from '~/composables/restaurants';

const props = defineProps<{
  reviews?: Review[]
}>();

const averageRating = computed(() => useAverageRating(props.reviews));
</script>

<template>
  <VRating
    :length="5"
    :size="32"
    :model-value="averageRating"
    readonly
    half-increments
    color="warning"
    active-color="warning"
    class="mx-4"
  />
</template>
