import { flushPromises, mount } from '@vue/test-utils';

import PageHome from './index.vue';
import restaurantsResponse from '@/mock/restaurants.json';
import * as apiService from '~/services/api';
import LoadingError from '~/components/loading-error.vue';
import RestaurantCard from '~/components/restaurant/card.vue';

vi.spyOn(apiService, `api`)
  .mockImplementationOnce(() => ({ json: vi.fn().mockResolvedValue(restaurantsResponse) } as any))
  .mockImplementationOnce(() => ({ json: vi.fn().mockRejectedValueOnce(new Error(`something went wrong`)) } as any));

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
});
