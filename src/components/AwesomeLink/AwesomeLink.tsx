import { FC, PropsWithChildren } from 'react'
import styles from './AwesomeLink.module.scss'

interface Props {
  href?: string;
}

export const AwesomeLink: FC<PropsWithChildren<Props>> = ({ children, href }) => {
  return (
    <div className={styles.container}>
      <a className={styles.link}>{children}</a>
    </div>
  )
}
