import { NEWSAPI } from '$/service/envValues';
import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2/everything';

export const fetchNews = async (keyword: string): Promise<any> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: keyword,
        apiKey: NEWSAPI,
        langauge: 'jp',
        sortBy: 'popularity',
      },
    });
    const descriptions = response.data.articles.map((article: any) => article.description);
    return descriptions;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
