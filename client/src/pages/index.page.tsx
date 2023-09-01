import type { AxiosError } from 'axios';
import { useAtom } from 'jotai';
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import Header from 'src/components/header/Header';
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
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (responsebody === null || responsebody === '' || charIndex >= responsebody.length) {
      return;
    }

    const timerId = setTimeout(() => {
      setDisplayedText((prevText) => prevText + responsebody[charIndex]);
      setCharIndex((prevIndex) => prevIndex + 1);
    }, 100);

    return () => clearTimeout(timerId);
  }, [responsebody, charIndex]);

  if (!user) return <Loading visible />;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const postBackend = async () => {
    console.log('押した');
    setDisplayedText('');
    setCharIndex(0);
    try {
      const res = await apiClient.gpt.$post({ body: { name: inputValue } });
      console.log(res.title);
      console.log(res.subtitle);
      console.log(res.body);
      setResponsetitle(res.title);
      setResponsesubtitle(res.subtitle);
      setResponsebody(res.body);
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

  return (
    <>
      <Header />
      <NewsInput value={inputValue} onChange={handleInputChange} onSubmit={postBackend} />
      <div className={styles.centerContainer}>
        {displayedText && (
          <div className={styles.newsContainer}>
            <h1 className={styles.newsTitle}>{responsetitle}</h1>
            <h2 className={styles.newsSubtitle}>{responsesubtitle}</h2>
            <p className={styles.newsBody}>{responsebody}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
