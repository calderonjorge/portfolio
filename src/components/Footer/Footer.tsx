import { Container } from '@/components'
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <p>Copyright ©</p>
        <div className="">
          <span>FB</span>
          <span>TW</span>
          <span>IG</span>
        </div>
      </Container>
    </footer>
  );
};
