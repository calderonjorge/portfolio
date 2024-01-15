import { Globe, ChevronDown } from '@/icons'
import styles from './LanguagePicker.module.scss'

export const LanguagePicker = () => {
  return (
    <div className={styles.language}>
      <select className={styles.languageSelect} onChange={() => { console.error('changed') }}>
        <option value="en" selected>English</option>
        <option value="es">Spanish</option>
      </select>
      <div className={styles.languageIcon}>
        <Globe className={styles.globe} />
        <ChevronDown className={styles.chevron}/>
      </div>
    </div>
  )
}
