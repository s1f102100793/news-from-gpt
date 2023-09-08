// NameList.tsx
import type { FC } from 'react';

interface NameLabelProps {
  sortedNames: [string, number][];
  handleNameClick: (name: string) => void;
  styles: any;
}

const NameLabel: FC<NameLabelProps> = ({ sortedNames, handleNameClick, styles }) => {
  return (
    <>
      {sortedNames.map(([name, count]) => (
        <div key={name} onClick={() => handleNameClick(name)} className={styles.nameItem}>
          {name} ({count})
        </div>
      ))}
    </>
  );
};

export default NameLabel;
