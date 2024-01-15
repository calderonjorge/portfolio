import { Globe, ChevronDown } from '@/icons'
import { Locale, useLocale, useTranslate } from '@/hooks'
import styles from './LanguagePicker.module.scss'

export const LanguagePicker = () => {
  const { switchLocale, locale } = useLocale()
  const { t } = useTranslate()

  return (
    <div className={styles.language}>
      <select
        className={styles.languageSelect}
        onChange={e => {
          switchLocale(e.target.value as Locale)
        }}
        defaultValue={locale}
      >
        <option value="en">{t('app.locale_switcher.en')}</option>
        <option value="es">{t('app.locale_switcher.es')}</option>
      </select>
      <div className={styles.languageIcon}>
        <Globe className={styles.globe} />
        <ChevronDown className={styles.chevron} />
      </div>
    </div>
  )
}
