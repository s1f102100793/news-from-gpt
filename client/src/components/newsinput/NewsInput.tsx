// NewsInput.tsx

import React from 'react';
import styles from './NewsInput.module.css';

interface NewsInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onReset: () => void;
  isLoading: boolean;
}

const NewsInput: React.FC<NewsInputProps> = ({ value, onChange, onSubmit, onReset, isLoading }) => {
  return (
    <div className={styles.newsInputContainer}>
      <button className={styles.buttonStyle} onClick={onReset}>
        TOPへ
      </button>
      <div className={styles.rightContainer}>
        {isLoading && <div className={styles.spinner} />}
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="正確なニュースの話題名を入力"
          className={styles.inputStyle}
        />
        <button onClick={onSubmit} className={styles.buttonStyle}>
          作成
        </button>
      </div>
    </div>
  );
};

export default NewsInput;
