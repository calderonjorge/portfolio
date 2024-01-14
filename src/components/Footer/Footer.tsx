import { Link } from "@/components";
import { Container, SocialIcon, LanguagePicker } from "@/components";
import { LinkedIn, Instagram, Github } from "@/icons";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <p className={styles.followMe}>Follow me</p>
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
        <ul>
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">Experience</Link></li>
          <li><Link href="#">Contact</Link></li>
        </ul>
        <p className={styles.copyright}>Copyright © {new Date().getFullYear()} All Rights Reserved by jorgecalderon.dev</p>
        <LanguagePicker />        
      </Container>
    </footer>
  );
};
