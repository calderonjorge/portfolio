import { FC, PropsWithChildren } from 'react'
import styles from './AnimatedText.module.scss'

interface Props {
  id?: string;
  className?: string;
}

export const AnimatedText: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p>
          <span>{children}</span>
        </p>
      </div>
    </section>
  )
}
