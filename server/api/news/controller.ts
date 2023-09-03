import { getNews } from '$/repository/newsRepository';
import { getYoutube } from '$/repository/youtuberepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => ({ status: 200, body: await getNews() }),
  post: async ({ body }) => ({ status: 201, body: await getYoutube(body.name) }),
}));
