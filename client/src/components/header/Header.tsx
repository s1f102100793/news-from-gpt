// Header.tsx
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLine} />
      <h1 className={styles.headerTitle}>
        GPT<span className={styles.yellowText}>N</span>EWS
      </h1>
      <div className={styles.headerLine} />
    </div>
  );
};

export default Header;
