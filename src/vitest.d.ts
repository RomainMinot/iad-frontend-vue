import vitest from 'vitest'
import type { Router } from "vue-router"

declare module 'vitest' {
  export interface TestContext {
    router: Router
  }
}
