import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div>
          <p>Jorge Calderon</p>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <p>Lets Connect</p>
          <button>jorgecalderon@gmail.com</button>
        </div>
      </nav>
    </header>
  );
};
