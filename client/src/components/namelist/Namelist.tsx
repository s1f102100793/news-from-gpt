import { useEffect, useState } from "react";
import { apiClient } from "src/utils/apiClient";
import { returnNull } from "src/utils/returnNull";

const NameListComponent = () => {
  const [newsData, setNewsData] = useState<NewsData[]>([]);
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const fetchNews = async () => {
    const fethedAllnews = await apiClient.news.$post(returnNull);
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNewsData();
      setNewsData(data);
    };

    fetchData();
  }, []);

  const nameCounts = countNames(newsData);

  return (
    <div>
      {Array.from(nameCounts.entries()).map(([name, count]) => (
        <div key={name} onClick={() => setSelectedName(name)}>
          {name} ({count})
        </div>
      ))}

      {selectedName && (
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