import { mount } from '@vue/test-utils';

import RestaurantLocation from './location.vue';
import restaurantsResponse from '@/mock/restaurants.json';

const { location } = restaurantsResponse[0];

describe(`restaurant-location`, () => {
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

  it(`renders correctly a location with no address`, (context) => {
    const wrapper = mount(RestaurantLocation, {
      global: { plugins: [context.router] },
      props: { location: undefined },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
