import { defineComponent } from 'vue';
import { RouterLinkStub, config } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { VueQueryPlugin, type VueQueryPluginOptions } from '@tanstack/vue-query';

// Auto import vuetify everywhere
// ⇒ this fix `[Vuetify] Could not find defaults instance``
// ⇒ remove necessity to have in every test file:
//   mount(TestPage, { global: { plugins: [vuetify] }, });
// NOTE: might be better if written as a Vue test utils plugin
// https://test-utils.vuejs.org/guide/extending-vtu/plugins.html#writing-a-plugin
const vuetify = createVuetify({
  defaults: {
    VAlert: { variant: `tonal` },
    VCard: {
      VBtn: { variant: `outlined` },
    },
  },
  components,
  directives,
});
config.global.plugins.push(vuetify);

// Fake RouterLink & RouterView
const RouterView = defineComponent({
  name: `RouterView`,
  template: `<template><div class="router-view-placeholder"><slot /></div></template>`,
});

config.global.stubs = {
  RouterLink: RouterLinkStub,
  RouterView,
  VImg: true,
};

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        staleTime: 0,
        retry: false,
        refetchInterval: 0,
        cacheTime: 0,
        retryOnMount: false,
        onError: () => {},
        onSettled: () => {},
      },
    },
    logger: {
      log: () => {},
      warn: () => {},
      error: () => {},
    },
  },
};

config.global.plugins.push([VueQueryPlugin, vueQueryPluginOptions]);
