import type { AxiosError } from 'axios';
import { useAtom } from 'jotai';
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import Header from 'src/components/header/Header';
import { apiClient } from 'src/utils/apiClient';
import { userAtom } from '../atoms/user';
import './index.module.css';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (response === null || response === '' || charIndex >= response.length) {
      return;
    }

    const timerId = setTimeout(() => {
      setDisplayedText((prevText) => prevText + response[charIndex]);
      setCharIndex((prevIndex) => prevIndex + 1);
    }, 100);

    return () => clearTimeout(timerId);
  }, [response, charIndex]);

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
      const jsonRes = JSON.parse(res);
      console.log(jsonRes.title);
      console.log(jsonRes.subtitle);
      console.log(jsonRes.body);
      setResponse(res);
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
      setResponse('エラーが発生しました。');
    }
  };

  return (
    <>
      <Header />
      <div className={styles.centerContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="正確な知りたいニュースの話題名を入れてください"
          className={styles.inputStyle}
        />
        <button onClick={postBackend} className={styles.buttonStyle}>
          送信
        </button>
        {displayedText && <div className={styles.responseContainer}>{displayedText}</div>}
      </div>
    </>
  );
};

export default Home;
