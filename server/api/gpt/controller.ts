import { makeNews } from '$/useCase/gptUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: 'Hello' }),
  post: async ({ body }) => ({ status: 200, body: await makeNews(body.name) }),
}));
