import { fetchNews } from '$/repository/newsRepository';
import { getNewsFromGoogleSearch } from '$/repository/playwrightRepository';
import { OPENAIAPI } from '$/service/envValues';
import { OpenAI } from 'langchain/llms';

export const makeNews = async (name: string) => {
  // const news = await fetchNews(name);
  const news = await getNewsFromGoogleSearch(name);
  console.log(news);
  const llm = new OpenAI({ openAIApiKey: OPENAIAPI, temperature: 0.9, modelName: 'gpt-4' });
  const res = await llm.call(`${news}の内容をまとめ${name}新たな新聞記事の内容を作成してください`);
  return res;
};
