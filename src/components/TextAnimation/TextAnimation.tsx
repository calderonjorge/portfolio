import { Container } from '../Container/Container'
import styles from './TextAnimation.module.scss'

export const TextAnimation = () => {
  return (
    <Container component="section" className={styles.animation}>
      <h2>Hola mundo espero que estes bien</h2>
    </Container>
  )
}
