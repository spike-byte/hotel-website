'use client'

import { useLanguage } from '@/contexts/LanguageContext'

interface LanguageSwitcherProps {
  isScrolled?: boolean
}

const LanguageSwitcher = ({ isScrolled = false }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage()

  // 根据导航栏状态调整文字颜色
  const textColor = isScrolled ? 'text-gray-700' : 'text-white'

  return (
    <div className={`flex items-center space-x-2 ${textColor}`}>
      <button
        onClick={() => setLanguage('zh')}
        className={`transition-all duration-200 ${language === 'zh' ? 'font-bold' : 'font-normal opacity-80 hover:opacity-100'
          }`}
      >
        CN
      </button>
      <span className={isScrolled ? 'text-gray-400' : 'text-white/50'}>|</span>
      <button
        onClick={() => setLanguage('en')}
        className={`transition-all duration-200 ${language === 'en' ? 'font-bold' : 'font-normal opacity-80 hover:opacity-100'
          }`}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageSwitcher

