import Link from "next/link";
import { Container, SocialIcon } from "@/components";
import { LinkedIn, Instagram, Github } from "@/icons";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <p>Copyright © {new Date().getFullYear()} All Rights Reserved by Scanfcode.</p>
        <ul>
          <li>
            <SocialIcon href="" title="Take a look to my Github profile" hoverColor="#089AD4">
              <LinkedIn />
            </SocialIcon>
          </li>

          <li>
            <SocialIcon href="" title="Take a look to my Github profile" hoverColor="#F52755">
              <Instagram />
            </SocialIcon>
          </li>

          <li>
            <SocialIcon href="" title="Take a look to my Github profile" hoverColor="#7A6BFA">
              <Github />
            </SocialIcon>
          </li>
        </ul>
      </Container>
    </footer>
  );
};
