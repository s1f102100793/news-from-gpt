import type { NewsModel } from 'commonTypesWithClient/models';
import React, { useEffect } from 'react';
import { useNamelist } from 'src/hooks/useNamelist';
import { useNews } from 'src/hooks/useNews';
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
    sortOrder,
    sortByDate,
    toggleSortByDate,
    setButtonMain,
    buttomMain,
  } = useNamelist();

  const { handleOnSubmit2, setInputValue, isLoading2 } = useNews();

  const handleNameClick = async (name: string) => {
    setSelectedName(name);
    setInputValue(name);
  };

  const handleArticleClick = async (article: NewsModel) => {
    onArticleClick(article);
  };

  const sortByClickCount = (data: NewsModel[]) => {
    return [...data].sort((a, b) => b.clickCount - a.clickCount);
  };

  const toggleSortByClickCount = () => {
    const sorted = sortByClickCount(newsData);
    setNewsData(sorted);
    setButtonMain(0);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNews();
      let sortedData;
      if (buttomMain === 1) {
        sortedData = sortByDate(data);
      } else {
        sortedData = sortByClickCount(data);
      }
      setNewsData(sortedData);
    };

    const interval = setInterval(fetchData, 100);
    return () => clearInterval(interval);
  }, [fetchNews, setNewsData, sortByDate, buttomMain]);

  const handleSearch = () => {
    const foundName = sortedNames.find(([name]) => name.includes(searchTerm));
    if (foundName) {
      handleNameClick(foundName[0]);
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
            <>
              <button className={styles.button} onClick={toggleSortByDate}>
                {sortOrder === 'newest' ? '古い順' : '最新順'}
              </button>
              <button className={styles.button} onClick={toggleSortByClickCount}>
                クリック数順
              </button>
            </>
          )}
        </div>
        <div className={styles.searchContainer}>
          {selectedName === null ? (
            <>
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
            </>
          ) : (
            <>
              {isLoading2 && <div className={styles.spinner} />}
              <button onClick={() => handleOnSubmit2()} className={styles.buttonWithSelectedName}>
                この話題の新しいの記事を生成
              </button>
            </>
          )}
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
