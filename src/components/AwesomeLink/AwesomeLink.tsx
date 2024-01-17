import { FC, PropsWithChildren } from 'react'
import styles from './AwesomeLink.module.scss'

interface Props {
  href?: string;
  className?: string;
}

export const AwesomeLink: FC<PropsWithChildren<Props>> = ({ children, href, className }) => {
  return (
    <div className={styles.container}>
      <a className={`${styles.link} ${className}`} href={href}>
        {children}
      </a>
    </div>
  )
}
