import { getNews } from '$/repository/newsRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => ({ status: 200, body: await getNews() }),
}));
