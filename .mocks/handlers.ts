import { rest } from 'msw';

export const handlers = [
  rest.get('https://myapi.dev/ssr', (_, res, ctx) => {
    return res(
      ctx.json({
        title: 'SSR Source',
        text: 'text text text',
      }),
    );
  }),
  rest.get('https://myapi.dev/csr', (_, res, ctx) => {
    return res(
      ctx.json({
        title: 'CSR Source',
        text: 'text text text',
      }),
    );
  }),
];
