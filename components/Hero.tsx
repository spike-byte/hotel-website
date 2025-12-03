'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://dimg04.c-ctrip.com/images/0205v1200086ozjee506D_W_1280_853_R5.webp?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F)',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            夕上·虎跑1934
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            修旧不守旧，历史即当下
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            隐匿在密林深处的民国宅邸，体验新旧交融、时尚与历史相映衬的人文度假酒店
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-sm hover:bg-white/20 transition-colors duration-200 text-lg font-medium"
            >
              了解更多
            </Link>
            <a
              href="mailto:info@xishanghotel.com"
              className="px-8 py-4 bg-primary-700 text-white rounded-sm hover:bg-primary-800 transition-colors duration-200 text-lg font-medium"
            >
              联系我们
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        {/* Mobile: Arrow Down */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white md:hidden"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
        {/* Desktop: Mouse Scroll */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="hidden md:flex w-6 h-10 border-2 border-white/50 rounded-full items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

