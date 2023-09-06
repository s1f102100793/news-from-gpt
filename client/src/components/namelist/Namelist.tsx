import type { NewsModel } from 'commonTypesWithClient/models';
import React, { useEffect, useState } from 'react';
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
  const [sortType, setSortType] = useState<'alphabetical' | 'count' | null>(null);
  const [isAscending, setIsAscending] = useState(true);

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

  const toggleSort = (type: 'alphabetical' | 'count') => {
    if (sortType === type) {
      setIsAscending(!isAscending);
    } else {
      setSortType(type);
    }
  };

  const toHiragana = (str: string): string => {
    return str.replace(/[\u30a1-\u30f6]/g, (match) => {
      const chr = match.charCodeAt(0) - 0x60;
      return String.fromCharCode(chr);
    });
  };

  const compareNames = (a: string, b: string): number => {
    const hiraganaA = toHiragana(a);
    const hiraganaB = toHiragana(b);
    return hiraganaA.localeCompare(hiraganaB);
  };

  const sortNames = (names: [string, number][]) => {
    if (sortType === 'alphabetical') {
      return names.sort((a, b) =>
        isAscending ? compareNames(a[0], b[0]) : compareNames(b[0], a[0])
      );
    } else if (sortType === 'count') {
      return names.sort((a, b) => (isAscending ? a[1] - b[1] : b[1] - a[1]));
    }
    return names; // no sort
  };

  const sortedNames = sortNames(Array.from(nameCounts.entries()));

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const foundName = sortedNames.find(([name]) => name.includes(searchTerm));
    if (foundName) {
      handleNameClick(foundName[0]); // foundName is an array with [name, count]
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonAndSearchContainer}>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={() => toggleSort('alphabetical')}>
            あいうえお順
          </button>
          <button className={styles.button} onClick={() => toggleSort('count')}>
            記事数順
          </button>
        </div>
        <div className={styles.searchContainer}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="名前を検索"
            className={styles.searchInput}
          />
          <button onClick={handleSearch} className={styles.searchButton}>
            検索
          </button>
        </div>
      </div>

      {selectedName === null &&
        sortedNames.map(([name, count]) => (
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
                <li key={index} onClick={() => handleArticleClick(item)}>
                  <div className={styles.title}>{item.title}</div>
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
