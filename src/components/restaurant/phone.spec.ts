import { mount } from '@vue/test-utils';

import RestaurantPhone from './phone.vue';
import restaurantsResponse from '@/mock/restaurants.json';

const { display_phone } = restaurantsResponse[0];

describe(`restaurant-phone`, () => {
  test(`no props`, (context) => {
    const wrapper = mount(RestaurantPhone, {
      global: { plugins: [context.router] },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it(`renders correctly a phone number`, (context) => {
    const wrapper = mount(RestaurantPhone, {
      global: { plugins: [context.router] },
      props: { displayPhone: display_phone },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it(`renders correctly an empty phone number`, (context) => {
    const wrapper = mount(RestaurantPhone, {
      global: { plugins: [context.router] },
      props: { displayPhone: undefined },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
