'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from '@/hooks/useTranslation'

const Footer = () => {
  const [email, setEmail] = useState('')
  const t = useTranslation()

  // Bing 地图搜索链接 - 使用酒店名称和地址组合搜索
  const hotelName = '杭州夕上·虎跑1934酒店'
  const fullAddress = '浙江省杭州市上城区西湖区虎玉路6-1号'
  const bingMapUrl = `https://cn.bing.com/maps?q=${encodeURIComponent(`${hotelName} ${fullAddress}`)}`

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Section */}
          <div>
            <h3 className="text-black text-lg font-bold mb-6">{t.footer.contact}</h3>
            <div className="space-y-4 text-gray-600 text-sm">
              <div className="flex items-start">
                <span className="mr-2">📍</span>
                <a
                  href={bingMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-700 transition-colors flex items-center"
                >
                  浙江省杭州市上城区西湖区虎玉路6-1号, 310000
                </a>
              </div>
              <div>
                <span className="text-gray-600">{t.footer.tel}: </span>
                <a href="tel:0571-8888-8888" className="hover:text-primary-700 transition-colors">
                  +86 571 8888 8888
                </a>
              </div>
              <div>
                <span className="text-gray-600">{t.footer.email}: </span>
                <a
                  href="mailto:info@xishanghotel.com"
                  className="hover:text-primary-700 transition-colors"
                >
                  info@xishanghotel.com
                </a>
              </div>
            </div>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-black text-lg font-bold mb-6">{t.footer.connect}</h3>
            <div>
              <p className="text-gray-600 text-sm mb-4">
                {t.footer.subscribeText}
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.footer.subscribePlaceholder}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <Link
                  href={`/newsletter${email ? `?email=${encodeURIComponent(email)}` : ''}`}
                  className="px-4 py-2 bg-gray-700 text-white rounded-sm hover:bg-gray-800 transition-colors flex items-center justify-center"
                  aria-label={t.footer.subscribePlaceholder}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-black text-lg font-bold mb-6">{t.footer.followSocial}</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors overflow-hidden"
                aria-label="WeChat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://png.pngtree.com/element_our/20200702/ourmid/pngtree-wechat-logo-image_2289767.jpg"
                  alt="微信"
                  width={20}
                  height={20}
                  className="object-cover"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors overflow-hidden"
                aria-label="Xiaohongshu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://img.ixintu.com/download/jpg/20201103/467f7b3badfafc6d542899febd597f2a_512_512.jpg!ys"
                  alt="小红书"
                  width={20}
                  height={20}
                  className="object-cover"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors overflow-hidden"
                aria-label="Weibo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/25/25438.png"
                  alt="微博"
                  width={20}
                  height={20}
                  className="object-cover"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-center text-gray-600">
          <p>网站备案/许可证编号：浙ICP备18019号-2 L-ZJ-C0004 ｜ 酒店经营许可证</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

