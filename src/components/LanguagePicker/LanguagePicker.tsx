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
          // TODO: implement i18n with hash
          switchLocale(e.target.value as Locale)
        }}
        title="Language selector"
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
