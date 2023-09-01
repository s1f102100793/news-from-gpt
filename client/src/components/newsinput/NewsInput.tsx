// NewsInput.tsx

import React from 'react';
import styles from './NewsInput.module.css';

interface NewsInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const NewsInput: React.FC<NewsInputProps> = ({ value, onChange, onSubmit }) => {
  return (
    <div className={styles.newsInputContainer}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="正確な知りたいニュースの話題名を入れてください"
        className="inputStyle"
      />
      <button onClick={onSubmit} className={styles.buttonStyle}>
        送信
      </button>
    </div>
  );
};

export default NewsInput;
