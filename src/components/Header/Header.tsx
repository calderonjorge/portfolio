import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>About</li>
          <li className={styles.navItem}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
