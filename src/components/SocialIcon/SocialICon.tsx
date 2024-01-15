import { FC, PropsWithChildren } from 'react'
import Link from 'next/link'
import styles from './SocialIcon.module.scss'

interface Props {
  hoverColor?: string;
  title?: string;
  href: string
}

export const SocialIcon: FC<PropsWithChildren<Props>> = ({ children, hoverColor, title, href }) => {
  return (
    <Link
      href={href}
      title={title}
      className={styles.socialIcon}
      // @ts-ignore
      style={{ '--hover-color-is': hoverColor }}
    >
      {
        children
      }
    </Link>
  )
}