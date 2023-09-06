import { getNews } from '$/repository/newsRepository';
import { upsertNews } from '$/useCase/gptUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => ({ status: 200, body: await getNews() }),
  post: async ({ body }) => ({
    status: 201,
    body: await upsertNews(
      body.id,
      body.name,
      body.title,
      body.subtitle,
      body.body,
      body.video,
      body.clickCount
    ),
  }),
}));
