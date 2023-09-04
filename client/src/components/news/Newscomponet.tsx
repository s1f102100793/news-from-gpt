import React, { useEffect, useRef, useState } from 'react';
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

  const [currentText, setCurrentText] = useState('');
  const [displayProgress, setDisplayProgress] = useState('title');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getTextToDisplay = () => {
      switch (displayProgress) {
        case 'title':
          return title;
        case 'subtitle':
          return subtitle;
        case 'body':
          return body;
        case 'video':
          setDisplayProgress('complete');
          return '';
        default:
          return '';
      }
    };

    const interval = setInterval(() => {
      const text = getTextToDisplay();

      if (displayProgress === 'video') {
        clearInterval(interval);
        return;
      }

      if (currentIndex < text.length) {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);

        // 次のテキストへ移行
        switch (displayProgress) {
          case 'title':
            setDisplayProgress('subtitle');
            break;
          case 'subtitle':
            setDisplayProgress('body');
            break;
          case 'body':
            setDisplayProgress('video');
            break;
          case 'video':
          default:
            // すべてのテキストが表示された
            break;
        }
        setCurrentText('');
        setCurrentIndex(0);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [title, subtitle, body, displayProgress, currentIndex]);

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
      const maxFontSize = 36;

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

    // displayProgressが'title'のときのみ、フォントサイズの調整を行う
    if (displayProgress === 'title') {
      adjustFontSize();
    }

    window.addEventListener('resize', adjustFontSize);

    return () => {
      window.removeEventListener('resize', adjustFontSize);
    };
  }, [title, currentText, displayProgress]);

  return (
    <div className={styles.newsContainer} ref={containerRef}>
      <h1 className={styles.newsTitle} ref={titleRef}>
        {displayProgress === 'title' ? currentText : title}
      </h1>
      <h2 className={styles.newsSubtitle}>
        {displayProgress === 'subtitle' ? currentText : displayProgress !== 'title' ? subtitle : ''}
      </h2>
      <p className={styles.newsBody}>
        {displayProgress === 'body'
          ? currentText
          : displayProgress === 'video' || displayProgress === 'complete'
          ? body
          : ''}
      </p>
      <div className={styles.videoContainer}>
        {displayProgress === 'complete' && <div dangerouslySetInnerHTML={{ __html: video }} />}
      </div>
    </div>
  );
};

export default NewsComponent;
