import styles from './TopBar.module.css';

export default function TopBar() {
  return (
    <header className={styles.topBar}>
      <div className={styles.logoContainer}>
        <img src="/assets/newicon.png" alt="Chemicat Logo" className={styles.logo} />
        <h1 className={styles.brandName}>Chemicat</h1>
      </div>
    </header>
  );
}
