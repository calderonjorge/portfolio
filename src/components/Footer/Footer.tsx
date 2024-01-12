import Link from "next/link";
import { Container } from "@/components";
import { LinkedIn, Instagram, Github } from "@/icons";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <p> © {new Date().getFullYear()}, All rights reserved.</p>
        <ul>
          <li>
            <Link href="" title="Take a look to my LinkedIn profile">
              <LinkedIn />
            </Link>
          </li>
          <li>
            <Link href="" title="Take a look to my Instagram">
              <Instagram />
            </Link>
          </li>
          <li>
            <Link href="" title="Take a look to my Github profile">
              <Github />
            </Link>
          </li>
        </ul>
      </Container>
    </footer>
  );
};
