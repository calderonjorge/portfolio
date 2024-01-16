import Link from 'next/link'
import { useTranslate } from '@/hooks'
import styles from './Hero.module.scss'

export const Hero = () => {
  const { t } = useTranslate()
  return (
    <section className={styles.hero} id={t('hero.id')}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <img src="/profile.png" alt="my profile" title="my profile" />
        <img src="/profile-2.png" alt="my profile" title="my profile" />
      </div>
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
