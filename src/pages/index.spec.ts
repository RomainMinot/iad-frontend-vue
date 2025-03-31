import { flushPromises, mount } from '@vue/test-utils';

import PageHome from './index.vue';
import { useAverageRating } from '~/composables/restaurants';
import restaurantsResponse from '@/mock/restaurants.json';
import * as apiService from '~/services/api';
import LoadingError from '~/components/loading-error.vue';
import RestaurantCard from '~/components/restaurant/card.vue';

vi.spyOn(apiService, `api`)
  .mockImplementationOnce(() => ({ json: vi.fn().mockResolvedValue(restaurantsResponse) } as any))
  .mockImplementationOnce(() => ({ json: vi.fn().mockRejectedValueOnce(new Error(`something went wrong`)) } as any))
  .mockImplementationOnce(() => ({ json: vi.fn().mockResolvedValue([]) } as any))
  .mockImplementation(() => ({ json: vi.fn().mockResolvedValue(restaurantsResponse) } as any));

describe(`page-home`, () => {
  beforeEach(async (context) => {
    context.router.push(`/`);
    await context.router.isReady();
  });

  it(`displays the list of restaurants`, async (context) => {
    const wrapper = mount(PageHome, {
      global: { plugins: [context.router] },
    });
    await flushPromises();
    expect(apiService.api).toHaveBeenCalled();
    expect(apiService.api).toHaveBeenCalledWith(`restaurants`);
    expect(wrapper.findComponent(LoadingError).exists()).toBe(false);
    expect(wrapper.findAllComponents(RestaurantCard).length).toBe(restaurantsResponse.length);
  });

  it(`handles fetch error`, async (context) => {
    const wrapper = mount(PageHome, {
      global: { plugins: [context.router] },
    });
    await flushPromises();
    expect(wrapper.findComponent(LoadingError).exists()).toBe(true);
  });

  it(`handles empty restaurants array correctly`, async (context) => {
    const wrapper = mount(PageHome, {
      global: { plugins: [context.router] },
    });
    await flushPromises();
    expect(wrapper.findComponent(LoadingError).exists()).toBe(false);
    expect(wrapper.findAllComponents(RestaurantCard).length).toBe(0);
  });

  it(`filter restaurants by notes`, async (context) => {
    const wrapper = mount(PageHome, {
      global: { plugins: [context.router] },
    });
    await flushPromises();
    const vm = wrapper.vm as any;
    vm.updateRatingFilter(4);
    const nbFilteredRestaurants = restaurantsResponse.filter(restaurant => useAverageRating(restaurant.reviews) >= 4).length;
    await vm.$nextTick();
    expect(wrapper.findAllComponents(RestaurantCard).length).toBe(nbFilteredRestaurants);
  });

  it(`shows all restaurants when the rating filter is set to 0`, async (context) => {
    const wrapper = mount(PageHome, {
      global: { plugins: [context.router] },
    });
    await flushPromises();
    expect(wrapper.findComponent(LoadingError).exists()).toBe(false);
    const vm = wrapper.vm as any;
    vm.updateRatingFilter(4);
    vm.updateRatingFilter(0);
    expect(wrapper.findAllComponents(RestaurantCard).length).toBe(restaurantsResponse.length);
  });

  it(`filters restaurants by various ratings`, async (context) => {
    const wrapper = mount(PageHome, {
      global: { plugins: [context.router] },
    });
    await flushPromises();
    const vm = wrapper.vm as any;
    vm.updateRatingFilter(4);
    const filteredCount = wrapper.findAllComponents(RestaurantCard).length;
    expect(filteredCount).toBeLessThanOrEqual(restaurantsResponse.length);
    vm.updateRatingFilter(2);
    const filteredCount2 = wrapper.findAllComponents(RestaurantCard).length;
    expect(filteredCount2).toBeGreaterThanOrEqual(filteredCount);
    vm.updateRatingFilter(5);
    expect(wrapper.findAllComponents(RestaurantCard).length).toBeLessThanOrEqual(filteredCount2);
  });

  it(`check if updateRatingFilter updates the ratingFilter value`, async (context) => {
    const wrapper = mount(PageHome, {
      global: { plugins: [context.router] },
    });
    await flushPromises();
    const vm = wrapper.vm as any;
    expect(vm.ratingFilter).toBe(0);
    vm.updateRatingFilter(5);
    expect(vm.ratingFilter).toBe(5);
    vm.updateRatingFilter(3);
    expect(vm.ratingFilter).toBe(3);
  });
});
