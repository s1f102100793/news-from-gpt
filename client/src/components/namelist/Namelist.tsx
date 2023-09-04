import { useEffect, useState } from 'react';
import { useNews } from 'src/hooks/useNews';
import { apiClient } from 'src/utils/apiClient';
import styles from './namelist.module.css';

const NameListComponent = () => {
  type NewsData = {
    name: string;
    title: string;
    subtitle: string;
    body: string; // body情報を追加
    video: string; // video情報を追加
  };

  const [newsData, setNewsData] = useState<NewsData[]>([]);
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const { setResponsebody, setResponsetitle, setResponsesubtitle, setResponsevideo } = useNews();
  const fetchNews = async () => {
    const fethedAllnews = await apiClient.news.$get();
    return ;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNews();
      setNewsData(data);
    };

    const interval = setInterval(fetchData, 100);
    return () => clearInterval(interval);
  }, []);

  const handleNameClick = (name: string) => {
    setSelectedName(name);

    // 選択された名前に一致する最初のデータ項目を検索します。
    const matchedData = newsData.find((item) => item.name === name);
    if (matchedData) {
      setResponsetitle(matchedData.title);
      setResponsesubtitle(matchedData.subtitle);
      setResponsebody(matchedData.body);
      setResponsevideo(matchedData.video);
    }
  };

  const countNames = (data: NewsData[]): Map<string, number> => {
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
      {Array.from(nameCounts.entries()).map(([name, count]) => (
        <div key={name} onClick={() => handleNameClick(name)} className={styles.nameItem}>
          {name} ({count})
        </div>
      ))}

      {selectedName !== null && (
        <ul className={styles.nameList}>
          {newsData
            .filter((item) => item.name === selectedName)
            .map((item, index) => (
              <li key={index}>
                {item.title} - {item.subtitle}
                {/* 必要に応じてbodyやvideoも表示することができます。 */}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default NameListComponent;
