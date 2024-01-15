import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'
import en from '@/lang/en.json'
import es from '@/lang/es.json'
import { flattenMessages, INestedMessages } from '@/lang'

export type Locale = 'en' | 'es';
const messages: Record<Locale, INestedMessages> = {
  en,
  es,
}
export const useLocale = () => {
  const router = useRouter()
  const flattenedMessages = useMemo(
    () => flattenMessages(messages[router.locale as keyof typeof messages]),
    [router],
  )

  const switchLocale = useCallback(
    (locale: Locale) => {
      if (locale === router.locale) {
        return
      }
      const path = router.asPath
      return router.push(path, path, { locale })
    },
    [router],
  )
  return { locale: router.locale, switchLocale, messages: flattenedMessages }
}
