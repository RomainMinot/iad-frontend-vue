import 'uno.css';
import { createRouter, createWebHistory } from 'vue-router';
import generatedRoutes from 'virtual:generated-pages';
import { VueQueryPlugin, type VueQueryPluginOptions } from '@tanstack/vue-query';

// vuetify
import { createVuetify } from 'vuetify';
import './main.scss';

import App from './app.vue';

const app = createApp(App);

// Vue router
const router = createRouter({
  history: createWebHistory(`/`),
  routes: generatedRoutes,
});

app.use(router);

// Vue Query
const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  },
};
app.use(VueQueryPlugin, vueQueryPluginOptions);

// Vuetify
app.use(createVuetify({
  defaults: {
    VAlert: { variant: `tonal` },
    VCard: {
      VBtn: { variant: `outlined` },
    },
  },
}));

// Mount application
app.mount(`#application`);
