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
    const calculateAdjustedFontSize = (
      currentFontSize: number,
      targetWidth: number,
      elementWidth: number,
      maxFontSize: number
    ): number => {
      const scaleFactor = targetWidth / elementWidth;
      const adjustedFontSize = currentFontSize * scaleFactor;

      // Ensure the font size doesn't exceed the maximum
      return Math.min(adjustedFontSize, maxFontSize);
    };

    const adjustFontSize = () => {
      const newsTitle = titleRef.current;
      const newsContainer = containerRef.current;
      const maxFontSize = 36; // Set your desired maximum font size here

      if (!newsTitle || !newsContainer) return;

      const targetWidth = newsContainer.offsetWidth * 0.8;
      const currentFontSize = parseFloat(window.getComputedStyle(newsTitle).fontSize);

      if (newsTitle.offsetWidth !== targetWidth) {
        const adjustedFontSize = calculateAdjustedFontSize(
          currentFontSize,
          targetWidth,
          newsTitle.offsetWidth,
          maxFontSize
        );
        newsTitle.style.fontSize = `${adjustedFontSize}px`;
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
    <div className={styles.newsContainer} ref={containerRef}>
      <h1 className={styles.newsTitle} ref={titleRef}>
        {title}
      </h1>
      <h2 className={styles.newsSubtitle}>{subtitle}</h2>
      <p className={styles.newsBody}>{body}</p>
      <div className={styles.videoContainer} dangerouslySetInnerHTML={{ __html: video }} />
    </div>
  );
};

export default NewsComponent;
