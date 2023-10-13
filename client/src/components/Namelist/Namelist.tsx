import type { NewsModel } from 'commonTypesWithClient/models';
import React, { useEffect } from 'react';
import { useNamelist } from 'src/hooks/useNamelist';
import NameLabel from '../NameLabel/NameLabel';
import SearchContainer from '../SearchContainer/SearchContainer';
import SelectedNameDetails from '../SelectedNameDetails.tsx/SelectedNameDetails';
import SortButtons from '../SortButtons/SortButtons';
import styles from './namelist.module.css';

type NameListComponentProps = {
  onArticleClick: (article: NewsModel) => void;
  selectedName: string | null;
  setSelectedName: (name: string | null) => void;
  onSubmit: () => void;
};

const NameListComponent: React.FC<NameListComponentProps> = ({
  onArticleClick,
  selectedName,
  setSelectedName,
  onSubmit,
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

    fetchData();
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
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
            handleSearch={handleSearch}
            onSubmit={onSubmit}
            styles={styles}
          />
        </div>
      </div>

      {selectedName === null ? (
        <NameLabel sortedNames={sortedNames} handleNameClick={handleNameClick} styles={styles} />
      ) : (
        <SelectedNameDetails
          selectedName={selectedName}
          nameCounts={nameCounts}
          newsData={newsData}
          handleNameClick={handleNameClick}
          handleArticleClick={handleArticleClick}
          styles={styles}
        />
      )}
    </div>
  );
};

export default NameListComponent;
