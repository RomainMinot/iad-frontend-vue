<script setup lang="ts">
import { type Restaurant } from '~/composables/restaurants';

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
    <VAlert variant="tonal" type="warning" class="mx-4 w-1/2">
      TODO: display the average rating
      <br>
      Vuetify has a component for this. Use this one
    </VAlert>
    <VCardText>
      <RestaurantLocation :location="restaurant?.location" />
    </VCardText>
    <VCardActions class="mt-auto">
      <VBtn color="primary" variant="tonal" :to="`/restaurants/${restaurant?.id}`">
        see more
      </VBtn>
    </VCardActions>
  </VCard>
</template>
