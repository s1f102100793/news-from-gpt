import React, { useEffect, useRef } from 'react';
import styles from './news.module.css';

interface NewsProps {
  title: string;
  subtitle: string;
  body: string;
  video: string;
}

const NewsComponent: React.FC<NewsProps> = ({ title, subtitle, body, video }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const adjustFontSize = () => {
      const newsTitle = titleRef.current;
      const newsContainer = containerRef.current;

      if (!newsTitle || !newsContainer) return;

      const targetWidth = newsContainer.offsetWidth * 0.8;
      const fontSize = parseFloat(window.getComputedStyle(newsTitle).fontSize);

      if (newsTitle.offsetWidth > targetWidth) {
        // Reduce font size proportionally
        const scaleFactor = targetWidth / newsTitle.offsetWidth;
        newsTitle.style.fontSize = `${fontSize * scaleFactor}px`;
      } else if (newsTitle.offsetWidth < targetWidth) {
        // Increase font size proportionally
        const scaleFactor = targetWidth / newsTitle.offsetWidth;
        newsTitle.style.fontSize = `${fontSize * scaleFactor}px`;
      }
    };

    adjustFontSize();

    window.addEventListener('resize', adjustFontSize);

    return () => {
      window.removeEventListener('resize', adjustFontSize);
    };
  }, [title]);

  return (
    <div className={styles.centerContainer}>
      <div className={styles.newsContainer} ref={containerRef}>
        <h1 className={styles.newsTitle} ref={titleRef}>
          {title}
        </h1>
        <h2 className={styles.newsSubtitle}>{subtitle}</h2>
        <p className={styles.newsBody}>{body}</p>
        <div dangerouslySetInnerHTML={{ __html: video }} />
      </div>
    </div>
  );
};

export default NewsComponent;
