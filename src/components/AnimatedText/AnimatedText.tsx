import { FC, PropsWithChildren } from 'react'
import styles from './AnimatedText.module.scss'

interface Props {
  id?: string;
  component?: 'div' | 'section' | 'nav';
  className?: string;
}

export const AnimatedText: FC<PropsWithChildren<Props>> = ({ component = 'div', children, ...props }) => {
  return (
    <div id="main">
      <section id="animated-text">
        <p>
          <span>hola</span>
          <span>Responsive Animated Text Reveals with CSS Scroll-Driven Animations.</span>
        </p>
      </section>
    </div>
  )
}
