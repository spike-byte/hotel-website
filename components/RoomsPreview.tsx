'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const RoomsPreview = () => {
  const rooms = [
    {
      name: '松霞紫苏园景大床房',
      description: '舒适优雅的客房，配备现代化设施，尽享山林美景',
      image: 'https://dimg04.c-ctrip.com/images/0205n12000875dj7e34D3_R_600_400_R5.webp',
    },
    {
      name: '青黛菘蓝阁楼房',
      description: '宽敞的套房空间，独立起居区，私享宁静时光',
      image: 'https://dimg04.c-ctrip.com/images/0200v12000875e3cdC058_R_600_400_R5.webp',
    },
    {
      name: '枫墅景观别墅房',
      description: '坐拥绝佳视野，远眺钱塘江，感受自然与历史的交融',
      image: 'https://dimg04.c-ctrip.com/images/0202b12000875e2yf2A8C_R_600_400_R5.webp',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            精选客房
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            每一间客房都经过精心设计，为您提供舒适优雅的住宿体验
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-3">
                  {room.name}
                </h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <Link
                  href="/rooms"
                  className="text-primary-700 hover:text-primary-800 font-medium inline-flex items-center"
                >
                  查看详情
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/rooms"
            className="inline-block px-8 py-4 bg-primary-700 text-white rounded-sm hover:bg-primary-800 transition-colors duration-200 text-lg font-medium"
          >
            查看所有房型
          </Link>
        </div>
      </div>
    </section>
  )
}

export default RoomsPreview

