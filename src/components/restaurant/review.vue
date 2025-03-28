<script setup lang="ts">
import { type Review } from '~/composables/restaurants';

defineProps<{
  review?: Review
}>();
</script>

<template>
  <VCard :class="{ 'va-company-review': review }" tag="li">
    <template v-if="review">
      <RestaurantAverageRating :reviews="[review]" />
      <VCardText tag="p">
        {{ review.text }}
      </VCardText>
    </template>
    <template v-else>
      <VCardText tag="p">
        No reviews yet for this restaurant
      </VCardText>
    </template>
  </VCard>
</template>

<style scoped lang="scss">
.va-company-review {
  padding-top: 1rem;
}
</style>
