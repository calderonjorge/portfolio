import NextLink from 'next/link'
import { FC, PropsWithChildren } from 'react'
import styles from './Link.module.scss'

interface Props {
  href: string;
}

export const Link: FC<PropsWithChildren<Props>> = ({ href, children }) => {
  return (
    <NextLink className={styles.link} href={href}>
      {children}
    </NextLink>
  )
}
