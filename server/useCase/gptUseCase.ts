import type { NewsModel } from '$/commonTypesWithClient/models';
import { getNewsFromGoogleSearch } from '$/repository/playwrightRepository';
import { OPENAIAPI } from '$/service/envValues';
import { prismaClient } from '$/service/prismaClient';
import { type News } from '@prisma/client';
import { OpenAI } from 'langchain/llms';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

export const toNewsModel = (prismaNews: News): NewsModel => ({
  title: prismaNews.title,
  content: prismaNews.content,
});

export const makeNews = async (name: string) => {
  // const news = await fetchNews(name);
  const news = await getNewsFromGoogleSearch(name);
  console.log(news);
  const llm = new OpenAI({ openAIApiKey: OPENAIAPI, temperature: 0.9, modelName: 'gpt-4' });
  const res = await llm.call(
    `${news}の内容をmまとめた${name}の新たな新聞記事の内容を作成してください`
  );

  creatNews(name, res);

  // const textSplitter = new RecursiveCharacterTextSplitter({
  //   chunkSize: 800,
  //   chunkOverlap: 200,
  // });

  // const document = textSplitter.splitDocuments(res);
  // console.log(document);
  // return document;
  return res;
};

export const creatNews = async (title: NewsModel['title'], content: NewsModel['content']) => {
  const prismaNews = await prismaClient.news.create({
    data: { title, content, createdAt: new Date() },
  });
  return toNewsModel(prismaNews);
};
