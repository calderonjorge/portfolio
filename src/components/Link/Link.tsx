import NextLink from 'next/link'
import { FC, PropsWithChildren, CSSProperties } from 'react'
import styles from './Link.module.scss'

interface Props {
  href: string;
  style?: CSSProperties | undefined;
}

export const Link: FC<PropsWithChildren<Props>> = ({ href, children, style }) => {
  return (
    <NextLink className={styles.link} href={href} style={style}>
      {children}
    </NextLink>
  )
}
