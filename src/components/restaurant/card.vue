<script setup lang="ts">
import { type Restaurant, restaurantsApiBasePath } from '~/composables/restaurants';

defineProps<{
  restaurant: Restaurant
}>();
</script>

<template>
  <VCard>
    <VImg
      height="100"
      cover
      :src="restaurant?.photos?.[0]"
    />
    <VCardTitle>
      {{ restaurant?.name }}
    </VCardTitle>
    <RestaurantAverageRating :reviews="restaurant?.reviews" />
    <VCardText>
      <RestaurantLocation :location="restaurant?.location" />
    </VCardText>
    <VCardActions class="mt-auto">
      <VBtn color="primary" variant="tonal" :to="`/${restaurantsApiBasePath}/${restaurant?.id}`">
        see more
      </VBtn>
    </VCardActions>
  </VCard>
</template>
