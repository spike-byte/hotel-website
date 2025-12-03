'use client'

import { motion } from 'framer-motion'

const Features = () => {
  const features = [
    {
      title: '历史建筑',
      description: '始建于1934年的民国风格花园别墅，2010年被列入杭州市历史建筑保护名单',
      icon: '🏛️',
    },
    {
      title: '山林景观',
      description: '背倚群山，重峦叠嶂，远眺钱塘，波澜壮阔，尽享自然之美',
      icon: '⛰️',
    },
    {
      title: '人文设计',
      description: '由知名建筑师操刀，巧妙将往昔故事、山光树影嵌在时光里',
      icon: '🎨',
    },
    {
      title: '贴心服务',
      description: '细节到位，服务恰到好处，为您提供舒适优雅的住宿体验',
      icon: '✨',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            酒店特色
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            体验新旧交融、时尚与历史相映衬的人文度假酒店
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

