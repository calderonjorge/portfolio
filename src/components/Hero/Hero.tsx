import Link from 'next/link'
import styles from './Hero.module.scss'
import { useTranslate } from '@/hooks'

export const Hero = () => {
  const { t } = useTranslate()
  return (
    <section className={styles.hero} id={t('hero.id')}>
      <h1>
        Senior <br />
        web developer
      </h1>
      <div className={styles.currentJob}>
        <p>
          Creating amazing user interfaces at{' '}
          <Link href="https://www.globant.com/" target="_blank" rel="noreferrer">
            @Globant
          </Link>
        </p>
        <p>Oct 2021 - Present</p>
      </div>
    </section>
  )
}
