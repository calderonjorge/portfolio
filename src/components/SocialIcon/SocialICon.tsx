import { FC, PropsWithChildren } from 'react'
import NextLink from 'next/link'
import styles from './SocialIcon.module.scss'

interface Props {
  hoverColor?: string;
  title?: string;
  href: string;
}

export const SocialIcon: FC<PropsWithChildren<Props>> = ({ children, hoverColor, title, href }) => {
  return (
    <NextLink
      href={href}
      title={title}
      className={styles.socialIcon}
      // @ts-ignore
      style={{ '--hover-color-is': hoverColor }}
    >
      {children}
    </NextLink>
  )
}
