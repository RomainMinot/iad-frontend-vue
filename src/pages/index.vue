<script setup lang="ts">
import { useAverageRating, useFetchRestaurants } from '~/composables/restaurants';

const { data: restaurants, isError } = useFetchRestaurants();

const ratingFilter = ref(0);
const filteredRestaurants = computed(() => {
  if (!restaurants.value) return [];
  return restaurants.value.filter(restaurant => ratingFilter.value === 0 || useAverageRating(restaurant.reviews) >= ratingFilter.value);
});

function updateRatingFilter(newFiltervalue: number) {
  ratingFilter.value = newFiltervalue;
}
</script>

<template>
  <div>
    <RatingFilter @update="updateRatingFilter" />
    <LoadingError v-if="isError" />
    <div v-else-if="restaurants" class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <TransitionGroup name="list">
        <RestaurantCard v-for="restaurant of filteredRestaurants" :key="restaurant.id" :restaurant="restaurant" />
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list-move,
.list-enter-active,
.list-leave-active {
  transform: scale(0.75);
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

.list-leave-active {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
