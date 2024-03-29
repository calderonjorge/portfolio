import Link from 'next/link'
import { Container } from '@/components'
import { useTranslate } from '@/hooks'
import styles from './Hero.module.scss'

export const Hero = () => {
  const { t } = useTranslate()

  return (
    <Container className={styles.hero} id={t('hero.id')}>
      <img src="/profile.png" alt="my profile" title="mi foto" width={120} height={120} />
      <p className={styles.greeting}>{t('hero.greeting')}</p>
      <h1>
        {t('hero.exclamation')}
        <span>{t('hero.first_part_title')}</span>
        {t('hero.second_part_title')}
        <span>{t('hero.third_part_title')}</span>! 🚀
      </h1>
      <p>
        {t('hero.current_job')}
        {t('hero.current_job_2')}
        <Link href={t('hero.current_company_href')} target="_blank" rel="noreferrer">
          @{t('hero.current_company_name')}
        </Link>
        .
      </p>
      <p>{t('hero.job_description')}</p>
    </Container>
  )
}
