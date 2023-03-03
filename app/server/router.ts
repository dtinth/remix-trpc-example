import { initTRPC } from '@trpc/server';
import type { Context } from './context';

const t = initTRPC.context<Context>().create();
export const appRouter = t.router({
  greeting: t.procedure.query(() => 'hello tRPC v10!'),
});
export type AppRouter = typeof appRouter;
