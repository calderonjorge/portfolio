
import Link from 'next/link';
import { useState } from 'react';
import { Container } from '@/components'
import { Copy, CopyCheck } from '@/icons'
import styles from "./Header.module.scss";

export const Header = () => {
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopyText = () => {
    const button = document.querySelector('button#lets-connect') as HTMLButtonElement

    if (button) {
      const buttonText = button.innerText;
      const tempElement = document.createElement('textarea');
      tempElement.value = buttonText;
      document.body.appendChild(tempElement);
      tempElement.select();
      document.execCommand('copy');
      document.body.removeChild(tempElement);
      setHasCopied(true)
    }
  }

  return (
    <header className={styles.header}>
      <Container component='nav' className={styles.navbar}>
        <div>
          <p>Jorge Calderon</p>
          <ul>
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <p>Let&apos;s Connect</p>
          <button onClick={handleCopyText} id='lets-connect'>
            hi@jorgecalderon.dev
            {
              hasCopied ? <CopyCheck className={styles.copyCheck}/> : <Copy/>
            }
          </button>
        </div>
      </Container>
    </header>
  );
};
