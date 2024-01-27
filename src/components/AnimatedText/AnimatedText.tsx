import { FC, PropsWithChildren } from 'react'
import styles from './AnimatedText.module.scss'

interface Props {
  id?: string;
  className?: string;
}

export const AnimatedText: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div id="main">
      <section id="animated-text">
        <p>
          <span>{children}</span>
        </p>
      </section>
    </div>
  )
}
