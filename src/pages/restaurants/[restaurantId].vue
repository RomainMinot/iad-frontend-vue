<script setup lang="ts">
import { useFetchRestaurant } from '~/composables/restaurants';

const { params } = useRoute();
const { data: restaurant, isError } = useFetchRestaurant({ restaurantId: params.restaurantId });
const hasReviews = computed(() => restaurant.value && restaurant.value?.reviews.length > 0);
</script>

<template>
  <LoadingError v-if="isError" />
  <div v-else class="grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_16rem] gap-6 items-start">
    <VCard v-if="restaurant">
      <VImg
        v-for="photo in restaurant.photos"
        :key="photo"
        :src="restaurant.photos[0]"
        height="250"
        cover
        gradient="to top, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      >
        <VCardTitle class="!text-4xl text-white">
          {{ restaurant.name }}
        </VCardTitle>
        <RestaurantAverageRating :reviews="restaurant.reviews" />
      </VImg>
      <VCardText>
        <div class="grid grid-cols-2 gap-4">
          <RestaurantLocation :location="restaurant.location" />
          <RestaurantPhone :display-phone="restaurant.display_phone" />
        </div>
      </VCardText>
    </VCard>
    <aside>
      <ul v-if="hasReviews" class="pa-0 grid grid-cols-1 gap-3">
        <RestaurantReview v-for="review in restaurant?.reviews" :key="review.id" :review="review" />
      </ul>
      <RestaurantReview v-else />
    </aside>
  </div>
</template>
