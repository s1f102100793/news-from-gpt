import type { NewsModel } from 'commonTypesWithClient/models';
import { useEffect, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';
import styles from './namelist.module.css';

type NameListComponentProps = {
  onArticleClick: (article: NewsModel) => void;
  selectedName: string | null;
  setSelectedName: (name: string | null) => void;
};

const NameListComponent: React.FC<NameListComponentProps> = ({
  onArticleClick,
  selectedName,
  setSelectedName,
}) => {
  // コンポーネントの中身...
  const [newsData, setNewsData] = useState<NewsModel[]>([]);
  const fetchNews = async () => {
    const fethedAllnews = await apiClient.news.$get();
    return fethedAllnews;
  };

  const handleNameClick = (name: string) => {
    setSelectedName(name);
  };

  const handleArticleClick = (article: NewsModel) => {
    onArticleClick(article);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNews();
      setNewsData(data);
    };

    const interval = setInterval(fetchData, 100);
    return () => clearInterval(interval);
  }, []);

  const countNames = (data: NewsModel[]): Map<string, number> => {
    const counts = new Map<string, number>();
    data.forEach((item) => {
      const currentCount = counts.get(item.name);
      if (typeof currentCount === 'number') {
        counts.set(item.name, currentCount + 1);
      } else {
        counts.set(item.name, 1);
      }
    });
    return counts;
  };

  const nameCounts = countNames(newsData);

  return (
    <div className={styles.container}>
      {selectedName === null &&
        Array.from(nameCounts.entries()).map(([name, count]) => (
          <div key={name} onClick={() => handleNameClick(name)} className={styles.nameItem}>
            {name} ({count})
          </div>
        ))}

      {selectedName !== null && (
        <>
          <div onClick={() => handleNameClick(selectedName)} className={styles.nameItem}>
            {selectedName} ({nameCounts.get(selectedName)})
          </div>
          <ul className={styles.nameList}>
            {newsData
              .filter((item) => item.name === selectedName)
              .map((item, index) => (
                <li key={index}>
                  <div className={styles.title} onClick={() => handleArticleClick(item)}>
                    {item.title}
                  </div>
                  <div className={styles.subtitle}>{item.subtitle}</div>
                </li>
              ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default NameListComponent;
