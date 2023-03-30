# Search assignment

## Running apps
in the main directory run `npm install` and then `npm start`

## Structure
Applications are split into `api-server` and `client` in the `packages` directory. Each one has its own sets of unit tests that can be run with `npm test`.

### API-Client
##### technologies used: Node.js, Express, Typescript, rRCP, zod, jest
tRCP is based on Typescript. That means that any type change in BE will be instantly reflected in FE during development. 

### Client
##### technologies used: React, Tailwind, Typescript, rRCP, jest
Simple React app with tRCP client for communicating with BE. 

Both applications were setup with a simple create-mf-app script and dependencies were added and setup manually, as I try sometimes to refresh my memory when it comes to this.