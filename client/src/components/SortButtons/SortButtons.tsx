// SortButtons.tsx
import type { FC } from 'react';

interface SortButtonsProps {
  selectedName: string | null;
  toggleSort: (type: 'alphabetical' | 'count') => void;
  toggleSortByDate: () => void;
  toggleSortByClickCount: () => void;
  sortOrder: 'newest' | 'oldest';
  styles: any;
}

const SortButtons: FC<SortButtonsProps> = ({
  selectedName,
  toggleSort,
  toggleSortByDate,
  toggleSortByClickCount,
  sortOrder,
  styles,
}) => {
  if (selectedName === null) {
    return (
      <>
        <button className={styles.button} onClick={() => toggleSort('alphabetical')}>
          あいうえお順
        </button>
        <button className={styles.button} onClick={() => toggleSort('count')}>
          記事数順
        </button>
      </>
    );
  }

  return (
    <>
      <button className={styles.button} onClick={toggleSortByDate}>
        {sortOrder === 'newest' ? '古い順' : '最新順'}
      </button>
      <button className={styles.button} onClick={toggleSortByClickCount}>
        クリック数順
      </button>
    </>
  );
};

export default SortButtons;
