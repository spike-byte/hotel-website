'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const DiningPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-96 w-full rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                alt="餐厅"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              月芽·自由餐厅
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              在优雅的环境中，品味精致的美食。我们的餐厅提供融合传统与现代的创意料理，
              选用新鲜优质的食材，为您呈现难忘的用餐体验。
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              无论是早餐、午餐还是晚餐，我们致力于为您打造每一刻的美好时光。
            </p>
            <Link
              href="/dining"
              className="inline-block px-8 py-4 bg-primary-700 text-white rounded-sm hover:bg-primary-800 transition-colors duration-200 text-lg font-medium"
            >
              了解更多
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DiningPreview

