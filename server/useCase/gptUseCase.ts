import type { NewsModel } from '$/commonTypesWithClient/models';
import { getNewsFromGoogleSearch } from '$/repository/playwrightRepository';
import { OPENAIAPI } from '$/service/envValues';
import { prismaClient } from '$/service/prismaClient';
import { type News } from '@prisma/client';
import { OpenAI } from 'langchain/llms';
import { StructuredOutputParser } from 'langchain/output_parsers';
import { PromptTemplate } from 'langchain/prompts';

export const toNewsModel = (prismaNews: News): NewsModel => ({
  title: prismaNews.title,
  content: prismaNews.content,
});

export const makeNews = async (name: string) => {
  const parser = StructuredOutputParser.fromNamesAndDescriptions({
    title: 'ニュース記事のタイトル',
    subtitle: '記事のサブタイトルまたは追加情報',
    body: 'ニュース記事の主要な内容',
  });

  const formatInstructions = parser.getFormatInstructions();

  const prompt = new PromptTemplate({
    template: 'ユーザーの質問に答えてください。\n{format_instructions}\n{question}',
    inputVariables: ['question'],
    partialVariables: { format_instructions: formatInstructions },
  });

  // const news = await fetchNews(name);
  const news = await getNewsFromGoogleSearch(name);

  const input = await prompt.format({
    question: `${news}の内容をmまとめた${name}の新たな新聞記事の内容を作成してください`,
  });

  console.log(news);
  const llm = new OpenAI({ openAIApiKey: OPENAIAPI, temperature: 0.9, modelName: 'gpt-4' });
  const res = await llm.call(input);

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
