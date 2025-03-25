import { mount } from '@vue/test-utils';

import RestaurantLocation from './location.vue';
import { type Location } from '~/composables/restaurants';
import restaurantsResponse from '@/mock/restaurants.json';

const location = restaurantsResponse[0].location as Location;

describe(`restaurant-card`, () => {
  test(`no props`, (context) => {
    const wrapper = mount(RestaurantLocation, {
      global: { plugins: [context.router] },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it(`renders correctly a location`, (context) => {
    const wrapper = mount(RestaurantLocation, {
      global: { plugins: [context.router] },
      props: { location },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
