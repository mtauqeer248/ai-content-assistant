'use client'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean | null>(null)

  useEffect(() => {
    // Check localStorage or system preference
    const storedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const initialDark =
      storedTheme === 'dark' || (!storedTheme && prefersDark)

    setIsDark(initialDark)
    document.documentElement.classList.toggle('dark', initialDark)
  }, [])

  const toggleTheme = () => {
    const newDark = !isDark
    setIsDark(newDark)
    document.documentElement.classList.toggle('dark', newDark)
    localStorage.setItem('theme', newDark ? 'dark' : 'light')
  }

  if (isDark === null) return null // Prevent mismatch on SSR

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 dark:text-white text-gray-900 transition-colors"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}
