import { mount } from '@vue/test-utils';

import RestaurantCard from './card.vue';
import restaurantsResponse from '@/mock/restaurants.json';

const restaurant = restaurantsResponse[0];

describe(`restaurant-card`, () => {
  test(`no props`, (context) => {
    const wrapper = mount(RestaurantCard, {
      global: { plugins: [context.router] },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it(`renders correctly a restaurant`, (context) => {
    const wrapper = mount(RestaurantCard, {
      global: { plugins: [context.router] },
      props: { restaurant },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
