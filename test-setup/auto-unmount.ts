import { enableAutoUnmount, flushPromises } from '@vue/test-utils';

// Be sure that there is no hanging work going on
afterEach(async () => {
  await flushPromises();
});

// https://test-utils.vuejs.org/api/#enableautounmount
enableAutoUnmount(afterEach);
