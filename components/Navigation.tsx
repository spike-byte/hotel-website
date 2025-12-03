'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from '@/hooks/useTranslation'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const rafId = useRef<number | null>(null)
  const lastScrollY = useRef(0)
  const t = useTranslation()

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        // 使用 requestAnimationFrame 优化性能
        rafId.current = requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          const newIsScrolled = currentScrollY > 20

          // 只在状态需要改变时更新，避免不必要的重新渲染
          setIsScrolled((prev) => {
            if (prev !== newIsScrolled) {
              return newIsScrolled
            }
            return prev
          })

          lastScrollY.current = currentScrollY
          ticking = false
        })
        ticking = true
      }
    }

    // 使用 passive listener 提升滚动性能
    window.addEventListener('scroll', handleScroll, { passive: true })

    // 初始化状态
    setIsScrolled(window.scrollY > 20)

    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/rooms', label: t.nav.rooms },
    { href: '/dining', label: t.nav.dining },
    { href: '/services', label: t.nav.services },
    { href: '/about', label: t.nav.about },
  ]

  // 使用 useMemo 缓存计算结果，避免不必要的重新计算
  const shouldShowWhiteBg = useMemo(() => !isHomePage || isScrolled, [isHomePage, isScrolled])
  const shouldUseWhiteText = useMemo(() => isHomePage && !isScrolled, [isHomePage, isScrolled])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out will-change-[background-color,box-shadow] ${shouldShowWhiteBg
        ? 'bg-white/95 backdrop-blur-md shadow-sm'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className={`text-2xl font-serif font-bold transition-colors duration-200 ease-out will-change-[color] ${shouldUseWhiteText ? 'text-white' : 'text-primary-700'
              }`}>
              夕上·虎跑1934
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={`text-sm font-medium transition-colors duration-200 ease-out will-change-[color] ${pathname === link.href
                  ? 'text-primary-700 border-b-2 border-primary-700'
                  : shouldUseWhiteText ? 'text-white hover:text-primary-200' : 'text-gray-700 hover:text-primary-600'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher isScrolled={shouldShowWhiteBg} />
          </div>

          {/* Mobile Menu Button and Language Switcher */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher isScrolled={shouldShowWhiteBg} />
            <button
              className={`p-2 ${shouldUseWhiteText ? 'text-white' : 'text-gray-700'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden py-4 border-t ${shouldShowWhiteBg ? 'border-gray-200 bg-white' : 'border-white/20 bg-gray-900/80 backdrop-blur-md'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={`block py-3 px-4 text-base font-medium ${pathname === link.href
                  ? 'text-primary-700'
                  : shouldUseWhiteText ? 'text-white' : 'text-gray-700'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

