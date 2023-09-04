import type { AxiosError } from 'axios';
import type { ChangeEvent } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import Header from 'src/components/header/Header';
import NameListComponent from 'src/components/namelist/Namelist';
import NewsComponent from 'src/components/news/Newscomponet';
import { useNews } from 'src/hooks/useNews';
import { apiClient } from 'src/utils/apiClient';
import './index.module.css';
import styles from './index.module.css';

const Home = () => {
  const {
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
  } = useNews();
  if (!user) return <Loading visible />;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const Reset = async () => {
    // const res = await apiClient.news.$post({ body: { name: inputValue } });
    // console.log(res);
    setResponsetitle(null);
    setResponsesubtitle(null);
    setResponsebody(null);
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
        <Header
          value={inputValue}
          onChange={handleInputChange}
          onSubmit={postBackend}
          onReset={Reset}
        />
        {shouldRenderNewsComponent(responsetitle, responsesubtitle, responsebody, responsevideo) ? (
          <NewsComponent
            title={responsetitle as string}
            subtitle={responsesubtitle as string}
            body={responsebody as string}
            video={responsevideo as string}
          />
        ) : (
          <NameListComponent />
        )}
      </div>
    </>
  );
};

export default Home;
