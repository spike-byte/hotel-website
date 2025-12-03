'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'

interface Facility {
  id: string
  name: string
  description: string
  image: string
}

export default function ServicesPage() {
  const t = useTranslation()

  const facilities: Facility[] = [
    {
      id: 'library',
      name: '无尽藏',
      description: '书房',
      image: 'https://dimg04.c-ctrip.com/images/1mc6612000gdhgmkf264B_R_600_400_R5.webp',
    },
    {
      id: 'tearoom',
      name: '风月闲',
      description: '茶室',
      image: 'https://dimg04.c-ctrip.com/images/1mc6w12000gdhfo4x930A_R_600_400_R5.webp',
    },
    {
      id: 'terrace',
      name: '晚来风',
      description: '露台',
      image: 'https://dimg04.c-ctrip.com/images/1mc5o12000gdhgi2zC1F7_R_600_400_R5.webp',
    },
    {
      id: 'wedding',
      name: '绿野坪',
      description: '婚礼草坪',
      image: 'https://dimg04.c-ctrip.com/images/020511200086p03k99999_R_600_400_R5.webp',
    },
    {
      id: 'banquet',
      name: '相见欢',
      description: '宴会厅',
      image: 'https://dimg04.c-ctrip.com/images/1mc6612000gdhgmkf264B_R_600_400_R5.webp',
    },
    {
      id: 'lawn',
      name: '林野',
      description: '休闲草坪',
      image: 'https://dimg04.c-ctrip.com/images/1mc6w12000gdhfo4x930A_R_600_400_R5.webp',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://dimg04.c-ctrip.com/images/1mc6612000gdhgmkf264B_R_600_400_R5.webp)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">{t.services.title}</h1>
          <p className="text-xl">{t.services.subtitle}</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.services.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                {t.services.featuresTitle}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {t.services.featuresDescription1}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.services.featuresDescription2}
              </p>
            </div>
            <div className="relative h-96 w-full rounded-sm overflow-hidden">
              <Image
                src="https://dimg04.c-ctrip.com/images/020511200086p03k99999_R_600_400_R5.webp"
                alt="酒店公共区域"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

