import { FC, PropsWithChildren } from 'react'
import styles from './Container.module.scss'
interface Props {
  component?: 'div' | 'section' | 'nav';
  className?: string
}

export const Container: FC<PropsWithChildren<Props>> = ({ component='div', children,...props }) => {
  const className = `${props.className} ${styles.container}`
  if (component === 'div') {
    return <div className={className}>{ children }</div>
  }

  if (component === 'nav') {
    return <nav className={className}>{ children }</nav>
  }

  return <section className={className} >{ children }</section>
}
