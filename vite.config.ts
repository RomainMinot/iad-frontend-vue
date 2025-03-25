import path from 'node:path';
import { defineConfig } from 'vite';
import jsonServer from 'vite-plugin-simple-json-server';
import Vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import Pages from 'vite-plugin-pages';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Unocss from 'unocss/vite';

export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, ``)}/`,
      '~/': `${path.resolve(__dirname, `src`)}/`,
    },
  },

  plugins: [
    // https://github.com/alextim/vite-plugin-simple-json-server
    // https://github.com/alextim/vite-plugin-simple-json-server/tree/main/packages/vite-plugin-simple-json-server
    jsonServer({
      disable: mode === `test`,
    }),

    Vue({
      include: [/\.vue$/],
      reactivityTransform: false,
    }),

    vuetify(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: [`vue`],
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        `vue`,
        `vue-router`,
        `vitest`,
        {
          '@tanstack/vue-query': [`useQuery`, `useMutation`, `useQueryClient`],
        },
      ],
      dts: `src/auto-imports.d.ts`,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: `src/components.d.ts`,
      // Allow subdirectories as namespace prefix for components.
      directoryAsNamespace: true,
      types: [{
        from: `vue-router`,
        names: [`RouterLink`, `RouterView`],
      }],
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    include: [`**\/*.spec.ts`],
    environment: `happy-dom`,
    deps: {
      inline: [`@vue`, `@vueuse`, `vuetify`, `loglevel`],
    },
    globals: true,
    setupFiles: [
      `./test-setup/global.js`,
      `./test-setup/vue-plugins.ts`,
      `./test-setup/mock-router.ts`,
      `./test-setup/auto-unmount.ts`,
    ],
  },
}));
