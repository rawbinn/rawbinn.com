'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const Logo = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
    <Image src="/static/images/logo-light.png" alt="site logo" width="180" height="44" />
  ) : (
    <Image src="/static/images/logo.png" alt="site logo" width="180" height="44" />
  )
}

export default Logo
