// SelectedNameDetails.tsx
import type { FC } from 'react';

interface SelectedNameDetailsProps {
  selectedName: string;
  nameCounts: Map<string, number>;
  newsData: { name: string; title: string; subtitle: string }[];
  handleNameClick: (name: string) => void;
  handleArticleClick: (article: any) => void;
  styles: any;
}

const SelectedNameDetails: FC<SelectedNameDetailsProps> = ({
  selectedName,
  nameCounts,
  newsData,
  handleNameClick,
  handleArticleClick,
  styles,
}) => {
  return (
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
  );
};

export default SelectedNameDetails;
