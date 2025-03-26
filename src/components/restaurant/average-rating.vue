<script setup lang="ts">
import { type Review, useAverageRating } from '~/composables/restaurants';

const props = defineProps<{
  reviews?: Review[]
}>();

const hasReviews = computed(() => props.reviews && props.reviews.length > 0);
const averageRating = computed(() => useAverageRating(props.reviews));
</script>

<template>
  <VRating
    v-if="hasReviews"
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
