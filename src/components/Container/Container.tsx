import { FC, PropsWithChildren } from 'react'
import styles from './Container.module.scss'
interface Props {
  id?: string;
  component?: 'div' | 'section' | 'nav';
  className?: string;
}

export const Container: FC<PropsWithChildren<Props>> = ({ component = 'div', children, ...props }) => {
  const className = `${props.className} ${styles.container}`
  if (component === 'div') {
    return (
      <div id={props.id} className={className}>
        {children}
      </div>
    )
  }

  if (component === 'nav') {
    return (
      <nav id={props.id} className={className}>
        {children}
      </nav>
    )
  }

  return (
    <section id={props.id} className={className}>
      {children}
    </section>
  )
}
