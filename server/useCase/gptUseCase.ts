import type { NewsModel } from '$/commonTypesWithClient/models';
import { getNewsFromGoogleSearch } from '$/repository/playwrightRepository';
import { OPENAIAPI } from '$/service/envValues';
import { prismaClient } from '$/service/prismaClient';
import { type News } from '@prisma/client';
import { OpenAI } from 'langchain/llms';
import { StructuredOutputParser } from 'langchain/output_parsers';
import { PromptTemplate } from 'langchain/prompts';
import { z } from 'zod';

export const toNewsModel = (prismaNews: News): NewsModel => ({
  title: prismaNews.title,
  content: prismaNews.content,
});

export const makeNews = async (name: string) => {
  const parser = StructuredOutputParser.fromZodSchema(
    z.object({
      title: z.string().describe('ニュース記事のタイトル'),
      subtitle: z.string().describe('記事のサブタイトルまたは追加情報'),
      body: z.string().describe('ニュース記事の主要な内容を2000文字程度で出力する'),
    })
  );

  // const parser = new CustomListOutputParser({ length: 5, separator: "\n" });

  const formatInstructions = parser.getFormatInstructions();

  const prompt = new PromptTemplate({
    template: 'ユーザーの質問に答えてください。\n{format_instructions}\n{question}',
    inputVariables: ['question'],
    partialVariables: { format_instructions: formatInstructions },
  });

  // const news = await fetchNews(name);
  const news = await getNewsFromGoogleSearch(name);

  const input = await prompt.format({
    question: `${news}の内容をmまとめた${name}の新たな新聞記事の内容を2000文字程度でを作成してください`,
  });

  // const chat = new ChatOpenAI();
  // const token_size = chat.getNumTokens(input);
  // console.log('token_size', token_size);
  const llm = new OpenAI({
    openAIApiKey: OPENAIAPI,
    temperature: 0.9,
    modelName: 'gpt-4',
    maxTokens: 5000,
  });
  const res = await llm.call(input);
  console.log('aaa');
  creatNews(name, res);

  // const textSplitter = new RecursiveCharacterTextSplitter({
  //   chunkSize: 800,
  //   chunkOverlap: 200,
  // });

  // const document = textSplitter.splitDocuments(res);
  // console.log(document);
  // return document;
  return await parser.parse(res);
};

export const creatNews = async (title: NewsModel['title'], content: NewsModel['content']) => {
  const prismaNews = await prismaClient.news.create({
    data: { title, content, createdAt: new Date() },
  });
  return toNewsModel(prismaNews);
};
