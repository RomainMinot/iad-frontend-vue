<script setup lang="ts">
import { useFetchRestaurant } from '~/composables/restaurants';

const { params } = useRoute();
const { data: restaurant, isError } = useFetchRestaurant({ restaurantId: params.restaurantId });
</script>

<template>
  <VAlert v-if="isError" type="warning" class="mt-4">
    TODO: It might be an Fetch error
    <br>
    You should fix that
  </VAlert>
  <div v-else class="grid grid-cols-[minmax(0,_1fr)_16rem] gap-6">
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
        <VAlert variant="flat" type="warning" class="mx-4 inline-block">
          TODO: display the mean rating
          <br>
          Vuetify has a component for this. Use this one
        </VAlert>
      </VImg>
      <VCardText>
        <div class="grid grid-cols-2 gap-4">
          <RestaurantLocation :location="restaurant.location" />
          <KeyValue icon="mdi-phone">
            <p class="text-body-1">
              {{ restaurant.phone }}
              <VAlert type="warning">
                ↑ TODO: we would like to display the formatted phone
              </VAlert>
            </p>
          </KeyValue>
        </div>
      </VCardText>
    </VCard>
    <aside>
      <VAlert type="warning">
        TODO: this should go under the company card on small device
      </VAlert>
      <ul class="pa-0">
        <RestaurantReview />
      </ul>
    </aside>
  </div>
</template>
