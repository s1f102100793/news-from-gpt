import React from 'react';
import styles from './news.module.css';

interface NewsProps {
  title: string;
  subtitle: string;
  body: string;
}

const NewsComponent: React.FC<NewsProps> = ({ title, subtitle, body }) => {
  return (
    <div className={styles.newsContainer}>
      <h1 className={styles.newsTitle}>{title}</h1>
      <h2 className={styles.newsSubtitle}>{subtitle}</h2>
      <p className={styles.newsBody}>{body}</p>
    </div>
  );
};

export default NewsComponent;
