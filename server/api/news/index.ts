import type { NewsModel } from '../../commonTypesWithClient/models';
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    resBody: NewsModel[];
  };
}>;
