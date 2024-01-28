import { FC, PropsWithChildren, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Container } from '@/components'
import styles from './AnimatedText.module.scss'

interface Props {
  id?: string;
  className?: string;
}

export const AnimatedText: FC<PropsWithChildren<Props>> = ({ children }) => {
  useEffect(() => {
    if (
      !CSS.supports('animation-timeline: scroll()') &&
      matchMedia('(prefers-reduced-motion: no-preference)')
    ) {
    }
  }, [])
  return (
    <Container className={styles.section}>
      <div className={styles.container}>
        <p>
          <span>{children}</span>
        </p>
      </div>
    </Container>
  )
}
