import { FC, PropsWithChildren } from 'react'
import styles from './AwesomeLink.module.scss'

interface Props {
  href?: string;
}

export const AwesomeLink: FC<PropsWithChildren<Props>> = ({
  children,
  href,
}) => {
  return (
    <a className={styles.link} href={href}>
      {children}
      <div className={styles.hoverEffect}>
        <div></div>
      </div>
    </a>
  )
}
