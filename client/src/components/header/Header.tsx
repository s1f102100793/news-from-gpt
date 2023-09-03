// Header.tsx
import { useEffect, useState } from 'react';
import NewsInput from '../newsinput/NewsInput';
import styles from './Header.module.css';

interface NewsInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onReset: () => void;
}

const Header: React.FC<NewsInputProps> = ({ value, onChange, onSubmit, onReset }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const formattedDateTime = `${currentDateTime.toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  })} - ${currentDateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`;

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLine} />
      <h1 className={styles.headerTitle}>
        GPT<span className={styles.yellowText}>N</span>EWS
      </h1>
      <div className={styles.dateTime}>{formattedDateTime}</div>
      <div className={styles.headerLine} />
      <NewsInput value={value} onChange={onChange} onSubmit={onSubmit} onReset={onReset} />
    </div>
  );
};

export default Header;
