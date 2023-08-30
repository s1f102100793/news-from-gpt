import { fetchNews } from '$/repository/newsRepository';

export const makeNews = (name: string) => {
  return fetchNews(name);
};
