import { useRef, useState } from 'react';

export type DisplayProgress = 'title' | 'subtitle' | 'body' | 'video' | 'complete';
export const useContent = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentText, setCurrentText] = useState('');

  const [displayProgress, setDisplayProgress] = useState<DisplayProgress>('title');

  const [currentIndex, setCurrentIndex] = useState(0);

  // eslint-disable-next-line complexity
  const DisplayText = ({
    currentProgress,
    targetProgress,
    current,
    defaultText,
  }: {
    currentProgress: DisplayProgress;
    targetProgress: DisplayProgress;
    current: string;
    defaultText: string;
  }) => {
    if (currentProgress === targetProgress) return <>{current}</>;

    switch (targetProgress) {
      case 'title':
        return <>{defaultText}</>;
      case 'subtitle':
        return currentProgress !== 'title' ? <>{defaultText}</> : null;
      case 'body':
        return currentProgress !== 'title' && currentProgress !== 'subtitle' ? (
          <>{defaultText}</>
        ) : null;
      default:
        return null;
    }
  };

  const VideoContent = ({
    video,
    displayProgress,
  }: {
    video: string;
    displayProgress: DisplayProgress;
  }) => {
    if (displayProgress === 'complete') {
      return <div dangerouslySetInnerHTML={{ __html: video }} />;
    }
    return null;
  };
  return {
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
  };
};
