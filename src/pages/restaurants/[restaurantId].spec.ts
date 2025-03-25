import { flushPromises, mount } from '@vue/test-utils';

import PageRestaurant from './[restaurantId].vue';
import restaurantsResponse from '@/mock/restaurants.json';
import * as apiService from '~/services/api';

const restaurant = restaurantsResponse[0];

vi.spyOn(apiService, `api`)
  .mockImplementationOnce(() => ({ json: vi.fn().mockResolvedValue(restaurant) } as any))
  .mockImplementationOnce(() => ({ json: vi.fn().mockRejectedValueOnce(new Error(`something went wrong`)) } as any));

describe(`page-restaurant`, () => {
  beforeEach(async (context) => {
    context.router.push(`/restaurants/${restaurant.id}`);
    await context.router.isReady();
  });

  it(`displays the list of restaurants`, async (context) => {
    const wrapper = mount(PageRestaurant, {
      global: { plugins: [context.router] },
    });
    await flushPromises();
    expect(apiService.api).toHaveBeenCalled();
    expect(apiService.api).toHaveBeenCalledWith(`restaurants/${restaurant.id}`);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it(`handles fetch error`, async (context) => {
    const wrapper = mount(PageRestaurant, {
      global: { plugins: [context.router] },
    });
    await flushPromises();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
