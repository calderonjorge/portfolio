import { useState, useRef } from 'react'
import Image from 'next/image'
import { Container, Link, AwesomeLink } from '@/components'
import { Menu } from '@/icons'
import { useTranslate, useClickOutside } from '@/hooks'
import styles from './Header.module.scss'

export const Header = () => {
  const { t } = useTranslate()
  const [menuOpen, setMenuOpen] = useState(false)

  const clickRef = useRef(null) as any
  useClickOutside(clickRef, () => {
    setMenuOpen(false)
  })

  return (
    <header className={styles.header} ref={clickRef}>
      <Container component="nav" className={styles.navbar}>
        <div className={styles.logo}>
          <a href={`mailto:${t('header.mail')}`}>{t('header.mail')}</a>
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
          <button
            onClick={() => {
              setMenuOpen(!menuOpen)
            }}
          >
            <Menu />
          </button>
        </div>
      </Container>

      {menuOpen && (
        <ul className={styles.mobileLinks}>
          <li
            onClick={() => {
              setMenuOpen(false)
            }}
          >
            <Link href={t('header.links.home.href')}>{t('header.links.home.value')}</Link>
          </li>
          <li
            onClick={() => {
              setMenuOpen(false)
            }}
          >
            <Link href={t('header.links.about.href')}>{t('header.links.about.value')}</Link>
          </li>
          <li
            onClick={() => {
              setMenuOpen(false)
            }}
          >
            <Link href={t('header.links.experience.href')}>{t('header.links.experience.value')}</Link>
          </li>
        </ul>
      )}
    </header>
  )
}
