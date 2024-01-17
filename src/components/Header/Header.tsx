import { Container, Link, AwesomeLink } from '@/components'
import { Menu } from '@/icons'
import { useTranslate } from '@/hooks'
import styles from './Header.module.scss'
import Image from 'next/image'

export const Header = () => {
  const { t } = useTranslate()

  return (
    <header className={styles.header}>
      <Container component="nav" className={styles.navbar}>
        <div className={styles.logo}>
          {/* TODO: create a logo */}
          <Image src={'https://flowbite.com/docs/images/logo.svg'} height={32} width={32} alt="" />
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
        <div className={styles.menu}>
          <button>
            <Menu />
          </button>
        </div>
      </Container>
    </header>
  )
}
