'use client'

import { motion } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
    {
      text: '非常好，尤其各种软性细节极其到位贴心，负责人应该是位女性，各种女孩子过夜需要用到的都事先设想到了。酒店设计美感不用说，非常高级，前台员工的服务也恰到好处。',
      author: 'M33203***',
      rating: 5,
    },
    {
      text: '种草好久了，终于入住，非常有氛围感的民国风，总体框架是曲径通幽，所有的细节也都非常用心，朦胧的江南气息，连音乐也选的恰到好处。',
      author: '匿名用户',
      rating: 5,
    },
    {
      text: '环境优雅，早餐很棒，有设计感，餐厅很棒，景观很棒，适合情侣。酒店离西湖不远，是一次非常满意的住宿体验。',
      author: '住客点评',
      rating: 5,
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
            住客评价
          </h2>
          {/* <p className="text-lg text-gray-600">
            4.8 分 · 超棒 · 1,090 条真实住客点评
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-sm shadow-sm"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              <p className="text-sm text-gray-500 font-medium">
                — {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

