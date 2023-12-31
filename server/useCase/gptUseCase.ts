import type { NewsModel } from '$/commonTypesWithClient/models';
import { getNewsFromGoogleSearch } from '$/repository/playwrightRepository';
import { getYoutube } from '$/repository/youtuberepository';
import { OPENAIAPI } from '$/service/envValues';
import { prismaClient } from '$/service/prismaClient';
import { type News } from '@prisma/client';
import { OpenAI } from 'langchain/llms/openai';
import { StructuredOutputParser } from 'langchain/output_parsers';
import { PromptTemplate } from 'langchain/prompts';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

export const toNewsModel = (prismaNews: News): NewsModel => ({
  id: prismaNews.id,
  createdAt: prismaNews.createdAt,
  name: prismaNews.name,
  title: prismaNews.title,
  subtitle: prismaNews.subtitle,
  body: prismaNews.body,
  video: prismaNews.video,
  clickCount: prismaNews.clickCount,
});

export const makeNews0to25 = async (
  name: string,
  startPercentage: number,
  endPercentage: number
) => {
  const parser = StructuredOutputParser.fromZodSchema(
    z.object({
      title: z.string().describe('ニュース記事のタイトル'),
      subtitle: z.string().describe('記事のサブタイトルまたは追加情報'),
      body: z.string().describe('ニュース記事の主要な内容'),
    })
  );

  const formatInstructions = parser.getFormatInstructions();

  const prompt = new PromptTemplate({
    template: 'ユーザーの質問に答えてください。\n{format_instructions}\n{question}',
    inputVariables: ['question'],
    partialVariables: { format_instructions: formatInstructions },
  });

  const news = await getNewsFromGoogleSearch(name, startPercentage, endPercentage);
  console.log('news', news);

  const input = await prompt.format({
    question: `${news}の内容をmまとめた${name}の新たな新聞記事の内容をを作成してください、あなたには記事の${startPercentage}%から${endPercentage}%の部分しか見てもらっていないので、他の3人が残りの部分を作ります。できるだけ文量を新聞に近づけてください。`,
  });

  const llm = new OpenAI({
    openAIApiKey: OPENAIAPI,
    temperature: 0.9,
    modelName: 'gpt-4-1106-preview',
  });
  const res = await llm.call(input);

  return await parser.parse(res);
};

export const makeNews25to100 = async (
  name: string,
  startPercentage: number,
  endPercentage: number
) => {
  const parser = StructuredOutputParser.fromZodSchema(
    z.object({
      subtitle: z.string().describe('記事のサブタイトルまたは追加情報'),
      body: z.string().describe('ニュース記事の主要な内容'),
    })
  );

  const formatInstructions = parser.getFormatInstructions();

  const prompt = new PromptTemplate({
    template: 'ユーザーの質問に答えてください。\n{format_instructions}\n{question}',
    inputVariables: ['question'],
    partialVariables: { format_instructions: formatInstructions },
  });

  const news = await getNewsFromGoogleSearch(name, startPercentage, endPercentage);
  console.log('news', news);

  const input = await prompt.format({
    question: `${news}の内容をmまとめた${name}の新たな新聞記事の内容をを作成してください、あなたには記事の${startPercentage}から${endPercentage}部分しか見てもらっていないので、他の3人が残り75%を作ります。できるだけ文量を新聞に近づけてください。`,
  });

  const llm = new OpenAI({
    openAIApiKey: OPENAIAPI,
    temperature: 0.9,
    modelName: 'gpt-4-1106-preview',
  });
  const res = await llm.call(input);

  return await parser.parse(res);
};

export const makeNews = async (name: string) => {
  const res0to25 = await makeNews0to25(name, 0, 25);
  const res25to50 = await makeNews25to100(name, 25, 50);
  const res50to75 = await makeNews25to100(name, 50, 75);
  const res75to100 = await makeNews25to100(name, 75, 100);

  const mergedResult = {
    title: res0to25.title,
    subtitle: `${res0to25.subtitle} ${res25to50.subtitle} ${res50to75.subtitle} ${res75to100.subtitle}`,
    body: `${res0to25.body} ${res25to50.body} ${res50to75.body} ${res75to100.body}`,
  };

  const llm = new OpenAI({
    openAIApiKey: OPENAIAPI,
    temperature: 0.9,
    modelName: 'gpt-4-1106-preview',
  });

  const resbody = await llm.call(`${mergedResult.body}の文章を整えてください`);
  const ressubtitle = await llm.call(
    `${mergedResult.subtitle}の文章を1つにまとめて、ニュースのサブタイトルのように人を魅了するようにしてください`
  );

  const video = await getYoutube(name);

  const fixedResult: NewsModel = {
    id: uuidv4(),
    createdAt: new Date(),
    name,
    title: res0to25.title,
    subtitle: `${ressubtitle}`,
    body: `${resbody}`,
    video: `${video}`,
    clickCount: 0,
  };

  upsertNews(
    fixedResult.id,
    name,
    fixedResult.title,
    fixedResult.subtitle,
    fixedResult.body,
    fixedResult.video,
    fixedResult.clickCount
  );

  return fixedResult;
};
export const upsertNews = async (
  id: NewsModel['id'],
  name: string,
  title: NewsModel['title'],
  subtitle: NewsModel['subtitle'],
  body: NewsModel['body'],
  video: NewsModel['video'],
  clickCount: NewsModel['clickCount']
) => {
  const prismaNews = await prismaClient.news.upsert({
    where: { id },
    update: {
      clickCount,
    },
    create: {
      id,
      name,
      title,
      subtitle,
      body,
      video,
      createdAt: new Date(),
      clickCount,
    },
  });
  return toNewsModel(prismaNews);
};
