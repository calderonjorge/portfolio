import { useEffect } from 'react'

export const useClickOutside = (ref: any, callback: () => void) => {
  const handleClick = (e: globalThis.MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback()
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}
