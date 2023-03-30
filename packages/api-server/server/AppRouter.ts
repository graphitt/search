import { initTRPC } from '@trpc/server';
import { inferAsyncReturnType } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { z } from 'zod';
import { transformData, TransformedData } from './utils/transformData';

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = inferAsyncReturnType<typeof createContext>;

const validKeys = [
  'GXvPAor1ifNfpF0U5PTG0w',
  'ohGSnJtMIC5nPfYRi_HTAg'
]

const fetchSingle = async (key:string): Promise<TransformedData> => {
  const item = await (await fetch(`${process.env.SERVICE_PATH}/${key}`)).json();
  const transformed = transformData(item);
  return transformed;
} 

const fetchAll = async () => {
  const response = await Promise.all(
    validKeys.map(async (key) => fetchSingle(key))
  );
  return response;
}

const t = initTRPC.create<Context>();
const appRouter = t.router({
    businessList: t.procedure
    .query(async () => {
      const list = await fetchAll();
      return list
    }),
    business: t.procedure
    .input(z.object({ id: z.string()}))
    .query(async ({ input }) => {
      const item = await fetchSingle(input.id);
      return item
    }),
});

export {
  appRouter,
  createContext
}