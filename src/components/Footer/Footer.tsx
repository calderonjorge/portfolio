import { Link } from '@/components'
import { Container, SocialIcon, LanguagePicker } from '@/components'
import { useTranslate } from '@/hooks'
import { LinkedIn, Instagram, Github } from '@/icons'
import styles from './Footer.module.scss'

export const Footer = () => {
  const { t } = useTranslate()

  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <p className={styles.followMe}>{t('footer.follow_me')}</p>
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
          <li>
            <Link href={t('header.links.home.href')}>{t('header.links.home.value')}</Link>
          </li>
          <li>
            <Link href={t('header.links.about.href')}>{t('header.links.about.value')}</Link>
          </li>
          <li>
            <Link href={t('header.links.experience.href')}>{t('header.links.experience.value')}</Link>
          </li>
        </ul>
        <p>Copyright © {new Date().getFullYear()} All Rights Reserved by jorgecalderon.dev</p>
        <LanguagePicker />
      </Container>
    </footer>
  )
}
