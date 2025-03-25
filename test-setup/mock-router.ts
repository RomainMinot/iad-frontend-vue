import { createMemoryHistory, createRouter } from "vue-router";
import generatedRoutes from 'virtual:generated-pages';

beforeEach((context) => {
  // NOTE: not sure that using layout is useful
  // const routes = setupLayouts(generatedRoutes);
  const routes = generatedRoutes;
  const router = createRouter({
    history: createMemoryHistory(`/`),
    routes,
  });
  context.router = router;
});
