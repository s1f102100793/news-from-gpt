import { useEffect, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';

const NameListComponent = () => {
  type NewsData = {
    name: string;
    title: string;
    subtitle: string;
  };

  const [newsData, setNewsData] = useState<NewsData[]>([]);
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const fetchNews = async () => {
    const fethedAllnews = await apiClient.news.$get();
    return fethedAllnews;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNews();
      setNewsData(data);
    };

    const interval = setInterval(fetchData, 100);
    return () => clearInterval(interval);
    fetchData();
  }, []);

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
    <div>
      {Array.from(nameCounts.entries()).map(([name, count]) => (
        <div key={name} onClick={() => setSelectedName(name)}>
          {name} ({count})
        </div>
      ))}

      {selectedName !== null && (
        <ul>
          {newsData
            .filter((item) => item.name === selectedName)
            .map((item, index) => (
              <li key={index}>
                {item.title} - {item.subtitle}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default NameListComponent;
