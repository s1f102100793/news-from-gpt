import { NEWSAPI } from '$/service/envValues';
import axios from 'axios';

const API_KEY = NEWSAPI;
const BASE_URL = 'https://newsapi.org/v2/everything';

export const fetchNews = async (keyword: string): Promise<any> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: keyword,
        apiKey: API_KEY,
      },
    });

    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
