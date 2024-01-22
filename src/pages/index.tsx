import Head from 'next/head'
import { useTranslate } from '@/hooks'

import { Header, Hero, Footer, Experience, TextAnimation } from '@/components'

export default function Home() {
  const { t } = useTranslate()
  return (
    <>
      <Head>
        <title>{t('app.title')}</title>
        {/* TODO: add SEO */}
        <meta name="description" content={t('app.description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Experience />
        <TextAnimation />
      </main>
      <Footer />
    </>
  )
}
