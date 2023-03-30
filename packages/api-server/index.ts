import * as dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter, createContext } from "./server/AppRouter";
import cors from 'cors';

export type AppRouter = typeof appRouter;

const app = express();
app.use(cors());
const port = 8080;

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    createContext,
    router: appRouter,
  }),
);

app.listen(port, () => {
  console.log(`api-server listening at http://localhost:${port}`);
});
