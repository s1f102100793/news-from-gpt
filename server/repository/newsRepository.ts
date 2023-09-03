import { NEWSAPI } from '$/service/envValues';
import { prismaClient } from '$/service/prismaClient';
import { toNewsModel } from '$/useCase/gptUseCase';
import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2/everything';

export const fetchNews = async (keyword: string): Promise<any> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: keyword,
        apiKey: NEWSAPI,
        langauge: 'jp',
        sortBy: 'createdAt',
      },
    });
    const descriptions = response.data.articles.map((article: any) => article.description);
    return descriptions;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const getNews = async () => {
  const prismaNews = await prismaClient.news.findMany({
    select: {
      createdAt: true,
      name: true,
      title: true,
      subtitle: true,
      body: true,
      video: true,
    },
  });
  return prismaNews.map(toNewsModel);
};
