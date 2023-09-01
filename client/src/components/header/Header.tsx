// Header.tsx

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>
        GPT<span className={styles.yellowText}>N</span>EWS
      </h1>
    </div>
  );
};

export default Header;
