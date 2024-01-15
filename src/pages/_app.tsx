import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { IntlProvider } from 'react-intl'
import { useLocale } from '@/hooks/useLocale'

function App({ Component, pageProps }: AppProps) {
  const { locale, messages } = useLocale()

  return (
    <IntlProvider locale={locale as string} messages={messages}>
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default App
