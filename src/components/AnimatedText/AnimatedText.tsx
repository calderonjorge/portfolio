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
      gsap.registerPlugin(ScrollTrigger)

      const scrub = 0.5
      const trigger = '#animation'

      gsap.set('p > span', {
        '--progress': 0,
        'backgroundPositionX':
          'calc(-200vmax + (var(--progress) * 200vmax)), calc(-200vmax + (var(--progress) * 200vmax)), 0',
        'color': 'transparent',
      })
      gsap.to('p > span', {
        '--progress': 1,
        'scrollTrigger': {
          trigger,
          scrub,
          start: 'top top',
          end: 'top top-=75%',
        },
      })
      gsap.to('p > span', {
        color: '#cacaca',
        scrollTrigger: {
          trigger,
          scrub,
          start: 'top top-=75%',
          end: 'bottom bottom',
        },
      })
    }
  }, [])
  return (
    <Container className={styles.section} id="animation">
      <div className={styles.container}>
        <p>
          <span>{children}</span>
        </p>
      </div>
    </Container>
  )
}
