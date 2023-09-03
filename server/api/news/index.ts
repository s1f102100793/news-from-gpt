import type { DefineMethods } from 'aspida';
import type { NewsModel } from '../../commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    resBody: NewsModel[];
  };
}>;
