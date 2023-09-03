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
      const maxFontSize = 36; // Set your desired maximum font size here

      if (!newsTitle || !newsContainer) return;

      const targetWidth = newsContainer.offsetWidth * 0.8;
      const fontSize = parseFloat(window.getComputedStyle(newsTitle).fontSize);

      let adjustedFontSize = fontSize;

      if (newsTitle.offsetWidth > targetWidth) {
        const scaleFactor = targetWidth / newsTitle.offsetWidth;
        adjustedFontSize = fontSize * scaleFactor;
      } else if (newsTitle.offsetWidth < targetWidth) {
        const scaleFactor = targetWidth / newsTitle.offsetWidth;
        adjustedFontSize = fontSize * scaleFactor;
      }

      // Ensure the font size doesn't exceed the maximum
      if (adjustedFontSize > maxFontSize) {
        adjustedFontSize = maxFontSize;
      }

      newsTitle.style.fontSize = `${adjustedFontSize}px`;

      // Set the adjusted font size to CSS custom property
      if (newsContainer !== null && adjustedFontSize) {
        newsContainer.style.setProperty('--dynamic-title-font-size', `${adjustedFontSize}px`);
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
        <div
          dangerouslySetInnerHTML={{ __html: video }}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default NewsComponent;
