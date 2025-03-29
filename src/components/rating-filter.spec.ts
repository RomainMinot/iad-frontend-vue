import { mount } from '@vue/test-utils';

import RatingFilter from './rating-filter.vue';

describe(`rating-filter`, () => {
  it(`renders correctly rating filter`, (context) => {
    const wrapper = mount(RatingFilter, {
      global: { plugins: [context.router] },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it(`emits update:model-value event when rating filter is updated`, (context) => {
    const wrapper = mount(RatingFilter, {
      global: { plugins: [context.router] },
    });
    const filterValue = 3;
    const select = wrapper.findComponent({ name: `VSelect` });
    select.vm.$emit(`update:model-value`, filterValue);
    expect(select.emitted(`update:model-value`)).toBeTruthy();
    expect(select.emitted(`update:model-value`)?.[0]).toEqual([filterValue]);
  });

  it(`emits update event when rating filter value is changed`, (context) => {
    const wrapper = mount(RatingFilter, {
      global: { plugins: [context.router] },
    });
    const filterValue = 4;
    wrapper.vm.$emit(`update`, filterValue);
    expect(wrapper.emitted().update).toBeTruthy();
    expect(wrapper.emitted().update[0]).toEqual([filterValue]);
  });

  it(`updateRating function emits a value`, async (context) => {
    const wrapper = mount(RatingFilter, {
      global: { plugins: [context.router] },
    });
    const vm = wrapper.vm as any;
    vm.updateRating(4);
    expect(wrapper.emitted(`update`)).toBeTruthy();
    expect(wrapper.emitted(`update`)?.[0]).toEqual([4]);
    vm.updateRating(2);
    expect(wrapper.emitted(`update`)?.[1]).toEqual([2]);
    vm.updateRating(0);
    expect(wrapper.emitted(`update`)?.[2]).toEqual([0]);
  });
});
