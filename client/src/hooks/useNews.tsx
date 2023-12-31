import type { AxiosError } from 'axios';
import type { NewsModel } from 'commonTypesWithClient/models';
import { useAtom } from 'jotai';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from 'src/utils/apiClient';

export const useNews = () => {
  const [user] = useAtom(userAtom);
  const [inputValue, setInputValue] = useState('');
  const [responsebody, setResponsebody] = useState<string | null>(null);
  const [responsetitle, setResponsetitle] = useState<string | null>(null);
  const [responsesubtitle, setResponsesubtitle] = useState<string | null>(null);
  const [responsevideo, setResponsevideo] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleArticleClick = async (article: NewsModel) => {
    setResponsetitle(article.title);
    setResponsesubtitle(article.subtitle);
    setResponsebody(article.body);
    setResponsevideo(article.video);
    const updateCount = article.clickCount + 1;
    await apiClient.news.$post({
      body: {
        id: article.id,
        name: article.name,
        title: article.title,
        subtitle: article.subtitle,
        body: article.body,
        video: article.video,
        clickCount: updateCount,
      },
    });
  };

  const postBackend = async () => {
    console.log('押した');
    try {
      const res = await apiClient.gpt.$post({ body: { name: inputValue } });
      setResponsetitle(null);
      setResponsesubtitle(null);
      setResponsebody(null);
      setResponsevideo(null);
      setResponsetitle(res.title);
      setResponsesubtitle(res.subtitle);
      setResponsebody(res.body);
      setResponsevideo(res.video);
      setInputValue('');
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response) {
        console.error('Error data:', axiosError.response.data);
        console.error('Error status:', axiosError.response.status);
      } else if (axiosError.request !== null && axiosError.request !== undefined) {
        console.error('No response from server:', axiosError.request);
      } else {
        console.error('Error:', axiosError.message);
      }
    }
  };

  const handleOnSubmit = async () => {
    setIsLoading(true);
    await postBackend();
    setIsLoading(false);
  };

  const shouldRenderNewsComponent = (
    title: string | null,
    subtitle: string | null,
    body: string | null,
    video: string | null
  ): boolean => {
    return title !== null && subtitle !== null && body !== null && video !== null;
  };

  return {
    user,
    inputValue,
    setInputValue,
    responsebody,
    setResponsebody,
    responsetitle,
    setResponsetitle,
    responsesubtitle,
    setResponsesubtitle,
    responsevideo,
    setResponsevideo,
    handleInputChange,
    handleArticleClick,
    handleOnSubmit,
    shouldRenderNewsComponent,
    isLoading,
    setIsLoading,
    postBackend,
  };
};
