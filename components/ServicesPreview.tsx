'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'

const ServicesPreview = () => {
  const t = useTranslation()

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              {t.services.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t.services.introduction}
            </p>
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-primary-700 text-white rounded-sm hover:bg-primary-800 transition-colors duration-200 text-lg font-medium"
            >
              了解更多
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-96 w-full rounded-sm overflow-hidden">
              <Image
                src="https://dimg04.c-ctrip.com/images/1mc6612000gdhgmkf264B_R_600_400_R5.webp"
                alt="服务设施"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview

