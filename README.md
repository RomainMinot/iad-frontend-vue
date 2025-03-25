# Iad coding Challenge

## Summary

A developer has just made a POC for our new restaurant application.  
Alas, he's called on a new mission!

You're the one to finish the job.  
It was almost done, but there is some `TODO` in the code that need do be fixed.  
Don't neglect to fix any `typescript`/`test` you encounter. 

Keep in mind that we style with [Tailwind](https://tailwindcss.com/)

## Process

1. Make a new repo and push your code in it.
2. Make the commit as much atomic as possible.
3. When done, share your updated repository with us!

## Run the application

```bash
# install the dependencies
$ pnpm

# serve with hot reload at http://localhost:5173 (may change the port if already in use)
$ pnpm start

# run all checks (linter/typescript/test)
$ pnpm test:all

# test with live reload
$ pnpm test

# test unit (no watch/live release)
$ pnpm test:unit

# test coverage
$ pnpm test:coverage
```

## If you don't know VueJS

VueJS comes with a [solid documentation](https://vuejs.org/)  
You might be very interested in [computed properties](https://vuejs.org/guide/essentials/computed.html): it's a way to have derived that from your original one

## Other documentation

### Used libraries

| name               | description          | doc                               |
| ------------------ | -------------------- | --------------------------------- |
| Typescript         | typings in JS        | https://www.typescriptlang.org/   |
| Vue                | web framework        | https://vuejs.org/                |
| Vuetify            | material components  | https://vuetifyjs.com/en/         |
| Vue-Query          | query composables    | https://vue-query.vercel.app/     |
| Ky                 | fetch wrapper        | https://www.npmjs.com/package/ky  |
| Tailwind           | utility classes      | https://tailwindcss.com/          |

### API Endpoints

[API Swagger](http://localhost:5173/api/v3/openapi)
