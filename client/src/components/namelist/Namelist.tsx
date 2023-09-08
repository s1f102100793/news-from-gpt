import type { NewsModel } from 'commonTypesWithClient/models';
import React, { useEffect } from 'react';
import { useNamelist } from 'src/hooks/useNamelist';
import SearchContainer from '../SearchContainer/SearchContainer';
import SortButtons from '../SortButtons/SortButtons';
import styles from './namelist.module.css';

type NameListComponentProps = {
  onArticleClick: (article: NewsModel) => void;
  selectedName: string | null;
  setSelectedName: (name: string | null) => void;
  setInputValue: (name: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
};

const NameListComponent: React.FC<NameListComponentProps> = ({
  onArticleClick,
  selectedName,
  setSelectedName,
  setInputValue,
  onSubmit,
  isLoading,
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
          <SortButtons
            selectedName={selectedName}
            toggleSort={toggleSort}
            toggleSortByDate={toggleSortByDate}
            toggleSortByClickCount={toggleSortByClickCount}
            sortOrder={sortOrder}
            styles={styles}
          />
        </div>
        <div className={styles.searchContainer}>
          <SearchContainer
            selectedName={selectedName}
            isLoading={isLoading}
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
            handleSearch={handleSearch}
            onSubmit={onSubmit}
            styles={styles}
          />
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
