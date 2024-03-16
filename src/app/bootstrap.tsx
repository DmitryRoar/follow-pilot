'use client'

import { PropsWithChildren, useEffect } from 'react'

export const Bootstrap = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    localStorage.setItem('white-bg', JSON.stringify(['/faq', '/support']))
  }, [])

  return children
}
