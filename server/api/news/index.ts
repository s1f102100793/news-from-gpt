import type { DefineMethods } from 'aspida';
import type { NewsModel } from '../../commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    resBody: NewsModel[];
  };
  post: {
    reqBody: {
      id: string;
      name: string;
      title: string;
      subtitle: string;
      body: string;
      video: string;
      clickCount: number;
    };
  };
}>;
