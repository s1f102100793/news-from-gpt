import { useAtom } from 'jotai';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { apiClient } from 'src/utils/apiClient';
import { userAtom } from '../atoms/user';
import './index.module.css';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState<string | null>(null);

  if (!user) return <Loading visible />;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const postBackend = async () => {
    console.log('押した');
    const res = await apiClient.gpt.$post({ body: { name: inputValue } });
    console.log(res);
    setResponse(res);
  };

  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.centerContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="こちらに入力してください"
          className={styles.inputStyle}
        />
        <button onClick={postBackend} className={styles.buttonStyle}>
          送信
        </button>
        {response !== null && response !== '' && (
          <div className={styles.responseContainer}>{JSON.stringify(response)}</div>
        )}
      </div>
    </>
  );
};

export default Home;
