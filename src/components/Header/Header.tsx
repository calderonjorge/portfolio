import { Container, Link, AwesomeLink } from '@/components'
import { useTranslate } from '@/hooks'
import styles from './Header.module.scss'

export const Header = () => {
  const { t } = useTranslate()

  return (
    <header className={styles.header}>
      <Container component="nav" className={styles.navbar}>
        <div>
          <p>Jorge Calderon</p>
        </div>
        <div>
          <ul>
            <li>
              <Link href="#">{t('header.links.home')}</Link>
            </li>
            <li>
              <Link href="#">{t('header.links.about')}</Link>
            </li>
            <li>
              <Link href="#">{t('header.links.experience')}</Link>
            </li>
          </ul>

          <AwesomeLink href="#contact">{t('header.links.get_in_touch')}</AwesomeLink>
        </div>
      </Container>
    </header>
  )
}
