import Link from 'next/link'
import { useTranslate } from '@/hooks'
import styles from './Hero.module.scss'

export const Hero = () => {
  const { t } = useTranslate()
  return (
    <section className={styles.hero} id={t('hero.id')}>
      <h1>{t('hero.job_title')}</h1>

      <div className={styles.currentJob}>
        <p>
          {t('hero.current_job')}{' '}
          <Link href={t('hero.current_company_href')} target="_blank" rel="noreferrer">
            @{t('hero.current_company_name')}
          </Link>
        </p>
        <p>{t('hero.current_date_job')}</p>
      </div>
    </section>
  )
}
