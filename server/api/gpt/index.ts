import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    resBody: string;
  };
  post: {
    reqBody: { name: string };
    resBody: { body: string; title: string; subtitle: string; video: string };
  };
}>;
