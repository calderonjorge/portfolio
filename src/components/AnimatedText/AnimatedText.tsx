import { FC, PropsWithChildren } from 'react'
import styles from './AnimatedText.module.scss'

interface Props {
  id?: string;
  component?: 'div' | 'section' | 'nav';
  className?: string;
}

export const AnimatedText: FC<PropsWithChildren<Props>> = ({ component = 'div', children, ...props }) => {
  return (
    <div className={styles.body}>
      <main>
        <section>
          <div className="section__content">
            <p data-splitting="">
              <span>I love making cool things</span> <br />
              <span>and solving complex</span>
              <span>&nbsp;problems for people.</span>
              <span>— like you</span>
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
