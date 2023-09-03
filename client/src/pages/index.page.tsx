import type { AxiosError } from 'axios';
import { useAtom } from 'jotai';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import Header from 'src/components/header/Header';
import NewsComponent from 'src/components/news/Newscomponet';
import NewsInput from 'src/components/newsinput/NewsInput';
import { apiClient } from 'src/utils/apiClient';
import { userAtom } from '../atoms/user';
import './index.module.css';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [inputValue, setInputValue] = useState('');
  const [responsebody, setResponsebody] = useState<string | null>(null);
  const [responsetitle, setResponsetitle] = useState<string | null>(null);
  const [responsesubtitle, setResponsesubtitle] = useState<string | null>(null);
  const [responsevideo, setResponsevideo] = useState<string | null>(null);

  if (!user) return <Loading visible />;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const postBackend = async () => {
    console.log('押した');
    setResponsetitle(null);
    setResponsesubtitle(null);
    setResponsebody(null);
    try {
      const res = await apiClient.gpt.$post({ body: { name: inputValue } });
      setResponsetitle(res.title);
      setResponsesubtitle(res.subtitle);
      setResponsebody(res.body);
      setResponsevideo(res.video);
      console.log(res);
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

  const shouldRenderNewsComponent = (
    title: string | null,
    subtitle: string | null,
    body: string | null,
    video: string | null
  ): boolean => {
    return title !== null && subtitle !== null && body !== null && video !== null;
  };

  return (
    <>
      <div className={styles.container}>
        <Header />
        <NewsInput value={inputValue} onChange={handleInputChange} onSubmit={postBackend} />
        {shouldRenderNewsComponent(
          responsetitle,
          responsesubtitle,
          responsebody,
          responsevideo
        ) && (
          <NewsComponent
            title={responsetitle as string}
            subtitle={responsesubtitle as string}
            body={responsebody as string}
            video={responsevideo as string}
          />
        )}
      </div>
    </>
  );
};

export default Home;
