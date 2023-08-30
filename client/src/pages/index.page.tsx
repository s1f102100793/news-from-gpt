import { useAtom } from 'jotai';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { Loading } from 'src/components/Loading/Loading';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { userAtom } from '../atoms/user';
import './index.module.css';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [inputValue, setInputValue] = useState('');

  if (!user) return <Loading visible />;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const postBackend = () => {
    console.log(inputValue);
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
      </div>
    </>
  );
};

export default Home;
