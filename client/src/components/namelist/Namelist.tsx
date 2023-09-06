import type { NewsModel } from 'commonTypesWithClient/models';
import React, { useCallback, useEffect, useState } from 'react';
import { useNamelist } from 'src/hooks/useNamelist';
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
  const {
    newsData,
    setNewsData,
    fetchNews,
    nameCounts,
    toggleSort,
    sortedNames,
    searchTerm,
    handleSearchChange,
  } = useNamelist();

  const handleNameClick = (name: string) => {
    setSelectedName(name);
  };

  const handleArticleClick = (article: NewsModel) => {
    onArticleClick(article);
  };

  const [sortOrder, setSortOrder] = useState<'oldest' | 'newest'>('oldest');

  const sortByDate = useCallback(
    (data: NewsModel[]) => {
      if (sortOrder === 'newest') {
        return [...data].sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      } else {
        return [...data].sort(
          (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      }
    },
    [sortOrder]
  );

  const toggleSortByDate = () => {
    setSortOrder((prevOrder) => (prevOrder === 'newest' ? 'oldest' : 'newest'));
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNews();
      const sortedData = sortByDate(data);
      setNewsData(sortedData);
    };

    const interval = setInterval(fetchData, 100);
    return () => clearInterval(interval);
  }, [fetchNews, setNewsData, sortOrder, sortByDate]);

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
          {selectedName === null ? (
            <>
              <button className={styles.button} onClick={() => toggleSort('alphabetical')}>
                あいうえお順
              </button>
              <button className={styles.button} onClick={() => toggleSort('count')}>
                記事数順
              </button>
            </>
          ) : (
            <button className={styles.button} onClick={toggleSortByDate}>
              {sortOrder === 'newest' ? '古い順' : '最新順'}
            </button>
          )}
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
