
import Link from 'next/link'
import styles from './Hero.module.scss'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Senior <br />web developer</h1>
      <div className={styles.currentJob}>
        <p>Creating amazing user interfaces at <Link href="https://www.globant.com/" target='_blank' rel='no-referer'>@Globant</Link></p>
        <p>Oct 2021 - Present</p>
      </div>
    </section>
  )
}
