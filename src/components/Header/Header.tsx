
import { useState } from 'react';
import { Copy, CopyCheck } from '@/Icons'
import styles from "./Header.module.scss";

export const Header = () => {
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopyText = () => {
    const button = document.querySelector('button'); // Selecciona tu botón específico aquí

    if (button) {
      const buttonText = button.innerText;

      // Crea un elemento de texto temporal
      const tempElement = document.createElement('textarea');
      tempElement.value = buttonText;

      // Añade el elemento al DOM
      document.body.appendChild(tempElement);

      // Selecciona y copia el texto
      tempElement.select();
      document.execCommand('copy');

      // Elimina el elemento temporal
      document.body.removeChild(tempElement);
      setHasCopied(true)
    }
  };
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div>
          <p>Jorge Calderon</p>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <p>Let&apos;s Connect</p>
          <button onClick={handleCopyText}>
            jorgecalderon@gmail.com
            {
              hasCopied ?<CopyCheck className={styles.copyCheck}/> : <Copy/>
            }
          </button>
        </div>
      </nav>
    </header>
  );
};
