'use client'

import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

const themes = ['default', 'theme-doenker']

export const ThemeBody: FC<PropsWithChildren> = ({ children }) => {
  const [rememberedTheme, setRememberedTheme] = useLocalStorage('theme', 'default')
  const [theme, setTheme] = useState<string>()

  const switchTheme = () => {
    const newTheme = themes[(themes.indexOf(rememberedTheme) + 1) % themes.length]
    setRememberedTheme(newTheme)
  }

  useEffect(() => {
    setTheme(rememberedTheme)
  }, [rememberedTheme])

  if (!theme) {
    return <body></body>
  }

  return (
    <body className={theme}>
      <button
        onClick={switchTheme}
        type="button"
        className="fixed left-4 top-4 w-6 h-6 rounded-sm bg-primary text-secondary p-1 text-center active:animate-ping"
        title="Change theme"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="hover:animate-spin"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </button>
      {children}
    </body>
  )
}
