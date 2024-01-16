import { Container, Link, AwesomeLink } from '@/components'
import { useTranslate } from '@/hooks'
import styles from './Header.module.scss'

export const Header = () => {
  const { t } = useTranslate()

  return (
    <header className={styles.header}>
      <Container component="nav" className={styles.navbar}>
        <div className={styles.logo}>
          <p>Jorge Calderon</p>
        </div>
        <ul className={styles.links}>
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
        <div className={styles.cta}>
          <AwesomeLink href={t('header.links.get_in_touch.href')}>
            {t('header.links.get_in_touch.value')}
          </AwesomeLink>
        </div>
      </Container>
    </header>
  )
}
