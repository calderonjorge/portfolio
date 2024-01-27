import Head from 'next/head'
import { useTranslate } from '@/hooks'

import { Header, Hero, Footer, Experience, AnimatedText } from '@/components'

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

      <main>
        <Header />
        <Hero />
        <Experience />
        <AnimatedText>Responsive Animated Text Reveals with CSS Scroll-Driven Animations.</AnimatedText>
      </main>
      <Footer />
    </>
  )
}
