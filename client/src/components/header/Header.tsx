// Header.tsx
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
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
    </div>
  );
};

export default Header;
