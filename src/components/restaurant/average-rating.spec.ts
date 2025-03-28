import { mount } from '@vue/test-utils';

import RestaurantAverageRating from './average-rating.vue';
import restaurantsResponse from '@/mock/restaurants.json';

const { reviews } = restaurantsResponse[0];

describe(`restaurant-average-rating`, () => {
  test(`no props`, (context) => {
    const wrapper = mount(RestaurantAverageRating, {
      global: { plugins: [context.router] },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it(`renders correctly an average rating`, (context) => {
    const wrapper = mount(RestaurantAverageRating, {
      global: { plugins: [context.router] },
      props: { reviews },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it(`hide average rating when no reviews`, (context) => {
    const wrapper = mount(RestaurantAverageRating, {
      global: { plugins: [context.router] },
      props: { reviews: [] },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
    