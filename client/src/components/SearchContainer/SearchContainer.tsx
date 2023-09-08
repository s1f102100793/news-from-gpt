// SearchContainer.tsx
import type { ChangeEventHandler, FC } from 'react';

interface SearchContainerProps {
  selectedName: string | null;
  searchTerm: string;
  handleSearchChange: ChangeEventHandler<HTMLInputElement>;
  handleSearch: () => void;
  onSubmit: () => void;
  styles: any;
}

const SearchContainer: FC<SearchContainerProps> = ({
  selectedName,
  searchTerm,
  handleSearchChange,
  handleSearch,
  onSubmit,
  styles,
}) => {
  if (selectedName === null) {
    return (
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
    );
  }

  return (
    <>
      <button onClick={onSubmit} className={styles.buttonWithSelectedName}>
        この話題の新しいの記事を生成
      </button>
    </>
  );
};

export default SearchContainer;
