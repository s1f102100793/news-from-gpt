import React, { useEffect } from 'react';
import type { DisplayProgress } from 'src/hooks/useContent';
import { useContent } from 'src/hooks/useContent';
import styles from './news.module.css';

interface NewsProps {
  title: string;
  subtitle: string;
  body: string;
  video: string;
}

const NewsComponent: React.FC<NewsProps> = ({ title, subtitle, body, video }) => {
  const {
    titleRef,
    containerRef,
    currentText,
    setCurrentText,
    displayProgress,
    setDisplayProgress,
    currentIndex,
    setCurrentIndex,
    DisplayText,
    VideoContent,
  } = useContent();
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

    const getNextProgress = (currentProgress: DisplayProgress): DisplayProgress => {
      switch (currentProgress) {
        case 'title':
          return 'subtitle';
        case 'subtitle':
          return 'body';
        case 'body':
          return 'video';
        case 'video':
        default:
          return 'complete'; // または 'complete' もしそのステップが存在する場合
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
        setDisplayProgress(getNextProgress(displayProgress));
        setCurrentText('');
        setCurrentIndex(0);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [
    title,
    subtitle,
    body,
    displayProgress,
    currentIndex,
    setCurrentIndex,
    setCurrentText,
    setDisplayProgress,
  ]);

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
  }, [title, currentText, displayProgress, containerRef, titleRef]);

  return (
    <div className={styles.newsContainer} ref={containerRef}>
      <h1 className={styles.newsTitle} ref={titleRef}>
        <DisplayText
          currentProgress={displayProgress}
          targetProgress="title"
          current={currentText}
          defaultText={title}
        />
      </h1>
      <h2 className={styles.newsSubtitle}>
        <DisplayText
          currentProgress={displayProgress}
          targetProgress="subtitle"
          current={currentText}
          defaultText={subtitle}
        />
      </h2>
      <p className={styles.newsBody}>
        <DisplayText
          currentProgress={displayProgress}
          targetProgress="body"
          current={currentText}
          defaultText={body}
        />
      </p>
      <div className={styles.videoContainer}>
        <VideoContent video={video} displayProgress={displayProgress} />
      </div>
    </div>
  );
};

export default NewsComponent;
