'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'

interface Room {
  id: string
  name: string
  bed: string
  images: string[]
  roomCount?: string
  backgroundImage?: string
}

export default function RoomsPage() {
  const t = useTranslation()
  const [activeRoom, setActiveRoom] = useState<string>('room1')
  const [navItemsVisible, setNavItemsVisible] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const [selectedImage, setSelectedImage] = useState<{ roomId: string; imageIndex: number; imageUrl: string } | null>(null)
  const roomRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const navRef = useRef<HTMLElement | null>(null)
  const navButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

  const rooms: Room[] = [
    {
      id: 'room1',
      name: '松霞紫苏园景大床房',
      bed: '1张2米特大床',
      images: [
        'https://dimg04.c-ctrip.com/images/0205n12000875dj7e34D3_R_600_400_R5.webp',
        'https://dimg04.c-ctrip.com/images/0206y1200086yuol9C480_R_600_400_R5.webp',
        'https://dimg04.c-ctrip.com/images/0205n12000875dj7e34D3_R_600_400_R5.webp',
        'https://dimg04.c-ctrip.com/images/0206y1200086yuol9C480_R_600_400_R5.webp',
      ],
    },
    {
      id: 'room2',
      name: '青黛菘蓝阁楼房',
      bed: '1张2米特大床',
      images: [
        'https://dimg04.c-ctrip.com/images/0200v12000875e3cdC058_R_600_400_R5.webp',
        'https://dimg04.c-ctrip.com/images/0206012000875dquv795E_R_600_400_R5.webp',
        'https://dimg04.c-ctrip.com/images/0200v12000875e3cdC058_R_600_400_R5.webp',
        'https://dimg04.c-ctrip.com/images/0206012000875dquv795E_R_600_400_R5.webp',
      ],
    },
    {
      id: 'room3',
      name: '枫墅景观别墅房',
      bed: '1张2.2米特大床',
      images: [
        'https://dimg04.c-ctrip.com/images/0202b12000875e2yf2A8C_R_600_400_R5.webp',
        'https://dimg04.c-ctrip.com/images/0203f12000875dyrl9EF4_R_600_400_R5.webp',
        'https://dimg04.c-ctrip.com/images/0202b12000875e2yf2A8C_R_600_400_R5.webp',
        'https://dimg04.c-ctrip.com/images/0203f12000875dyrl9EF4_R_600_400_R5.webp',
      ],
    },
    {
      id: 'room4',
      name: '菊墅庭院景观别墅房',
      bed: '1张2.2米特大床',
      images: [
        'https://dimg04.c-ctrip.com/images/1mc6f12000etherkvAB64_R_600_400_R5.webp',
        'https://dimg04.c-ctrip.com/images/0205o12000875eoifC8FF_R_600_400_R5.webp',
        'https://dimg04.c-ctrip.com/images/0201t12000875eow64781_R_600_400_R5.webp',
        'https://dimg04.c-ctrip.com/images/1mc2i12000gdjjuj2915A_R_600_400_R5.webp',
      ],
    },
  ]

  const scrollToRoom = (roomId: string) => {
    const element = roomRefs.current[roomId]
    if (element) {
      // 暂时禁用滚动监听，避免冲突
      setIsScrolling(true)
      setActiveRoom(roomId)

      // 等待元素完全渲染后再滚动
      const scrollToElement = () => {
        // 使用 requestAnimationFrame 确保DOM已更新
        requestAnimationFrame(() => {
          const navHeight = 80 // 主导航栏高度 (top-20 = 80px)
          const stickyNavHeight = 60 // sticky导航栏高度
          const isMobile = window.innerWidth < 1024

          // 重新获取元素位置，确保是渲染后的准确位置
          const rect = element.getBoundingClientRect()
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop
          const elementTop = rect.top + scrollTop

          // 计算正确的offset：主导航 + sticky导航（如果存在）
          const offset = navHeight + (isMobile ? stickyNavHeight : 0)
          const targetPosition = elementTop - offset

          window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: 'smooth',
          })

          // 移动端：滚动nav容器使激活项可见
          const navButton = navButtonRefs.current[roomId]
          const navContainer = navRef.current
          if (navButton && navContainer) {
            const buttonRect = navButton.getBoundingClientRect()
            const containerRect = navContainer.getBoundingClientRect()
            const scrollLeft = navContainer.scrollLeft
            const buttonLeft = buttonRect.left - containerRect.left + scrollLeft
            const buttonWidth = buttonRect.width
            const containerWidth = containerRect.width

            // 如果按钮在容器左侧外部，滚动到按钮左侧
            if (buttonLeft < scrollLeft) {
              navContainer.scrollTo({
                left: buttonLeft - 16, // 留一点边距
                behavior: 'smooth',
              })
            }
            // 如果按钮在容器右侧外部，滚动到按钮右侧
            else if (buttonLeft + buttonWidth > scrollLeft + containerWidth) {
              navContainer.scrollTo({
                left: buttonLeft + buttonWidth - containerWidth + 16, // 留一点边距
                behavior: 'smooth',
              })
            }
          }

          // 滚动完成后重新启用监听
          setTimeout(() => {
            setIsScrolling(false)
          }, 1000)
        })
      }

      // 如果元素已经在DOM中，直接滚动；否则等待渲染
      if (element.offsetHeight > 0) {
        scrollToElement()
      } else {
        // 等待元素渲染完成
        setTimeout(scrollToElement, 150)
      }
    }
  }

  // Animate nav items on mount
  useEffect(() => {
    setNavItemsVisible(true)
  }, [])

  // Update active room based on scroll position with throttling
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      // 如果正在程序化滚动，不更新 activeRoom
      if (isScrolling) return

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 200

          for (const room of rooms) {
            const element = roomRefs.current[room.id]
            if (element) {
              const { offsetTop, offsetHeight } = element
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveRoom(room.id)
                break
              }
            }
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isScrolling])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://dimg04.c-ctrip.com/images/0205n12000875dj7e34D3_R_600_400_R5.webp)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            客房
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            沿着竹径抵达三栋青砖黛瓦的多层建筑，共有二十三间客房。每间房都以花植命名，鸢尾、凌霄、紫荆、松霞、紫苏......每一个房间都有其独特性。透过窗户把自然光影、鸟叫虫鸣引入客房。
          </p>
        </div>
      </section>

      {/* Fixed Top Navigation Bar */}
      <div className="sticky top-20 z-40 bg-white border-b border-gray-200">
        <div className="flex">
          {/* Left spacer to match left info panel */}
          <div className="w-full lg:w-1/3 hidden lg:block" />
          {/* Navigation aligned with image area */}
          <div className="w-full lg:flex-1 lg:w-2/3">
            <nav
              ref={(el) => {
                navRef.current = el
              }}
              className="flex items-center justify-start space-x-4 lg:space-x-8 overflow-x-auto pl-4 pr-4 sm:pl-8 lg:pl-16 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {rooms.map((room, index) => (
                <motion.button
                  key={room.id}
                  ref={(el) => {
                    navButtonRefs.current[room.id] = el
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={navItemsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => scrollToRoom(room.id)}
                  className={`py-4 px-2 whitespace-nowrap text-xs sm:text-sm font-medium transition-colors flex-shrink-0 ${activeRoom === room.id
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  {room.name}
                </motion.button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Rooms List with Snap Scroll */}
      <div className="bg-white">
        {rooms.map((room, index) => (
          <motion.div
            key={room.id}
            ref={(el) => {
              roomRefs.current[room.id] = el
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="min-h-[80vh] lg:min-h-screen flex flex-col"
          >
            {/* Room Content */}
            <div className="flex flex-col lg:flex-row flex-1">
              {/* Left Info Panel */}
              <div className="w-full lg:w-1/3 bg-gray-50 flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-24">
                <div className="max-w-sm">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4 sm:mb-6 break-words">
                    {room.name}
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <span className="font-medium">{t.rooms.bedType}</span>
                      <span className="mx-2">|</span>
                      <span>{room.bed}</span>
                    </div>
                    {room.roomCount && (
                      <div>
                        <span className="font-medium">{t.rooms.roomCount}</span>
                        <span className="mx-2">|</span>
                        <span>{room.roomCount}</span>
                      </div>
                    )}
                  </div>
                  <p className="mt-8 text-sm text-gray-500">{t.rooms.referenceNote}</p>
                </div>
              </div>

              {/* Right Image Grid */}
              <div className="w-full lg:w-2/3 relative bg-gray-100 p-4 sm:p-8 lg:p-16 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full" style={{ maxHeight: 'calc(100vh - 8rem)' }}>
                  {room.images.slice(0, 4).map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="relative w-full aspect-[3/4] lg:aspect-video cursor-pointer"
                      onClick={() => setSelectedImage({ roomId: room.id, imageIndex: imgIndex, imageUrl: image })}
                    >
                      <Image
                        src={image}
                        alt={`${room.name} - Image ${imgIndex + 1}`}
                        fill
                        className="object-cover rounded-sm hover:opacity-90 transition-opacity"
                        priority={index === 0 && imgIndex < 2}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Information Section */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left - Information Title */}
            <div className="lg:w-1/4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900">
                {t.rooms.information}
              </h2>
            </div>

            {/* Right - Content */}
            <div className="lg:w-3/4 flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left Column - Standard Amenities */}
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {t.rooms.standardAmenities}|
                </h3>
                <div className="text-sm sm:text-base text-gray-700 space-y-2">
                  <p className="break-words">
                    牙刷 / 牙膏 / 沐浴露 / 洗发水 / 护发素 / 香皂 / 浴帽 / 梳子 / 剃须刀 /
                  </p>
                  <p className="break-words">
                    每日打扫 / 小食 / 水果 / 咖啡机 / 咖啡壶/茶壶 / 茶包 / 软饮 / 酒精饮料 / 瓶装水(免费) / 电热水壶 / 迷你吧 /
                  </p>
                  <p className="break-words">
                    衣柜/衣橱 / 餐桌 / 用餐区 / 客房WIFI(免费) / 电话 / 浴缸 / 私人浴室 / 私人卫生间 / 智能马桶 / 吹风机 / 浴衣 / 毛巾 / 浴巾 / 24小时热水 / 拖鞋 /
                  </p>
                  <p className="break-words">
                    空调(免费) / 暖气 / 手动窗帘 / 遮光窗帘 / 备用床具 / 电视机 / 音响 / 智能门锁 / 冰箱 /
                  </p>
                  <p className="break-words">
                    管家服务 / 电子秤 / 房内保险箱 / 衣架 / 多种规格电源插座 / 雨伞 / 欢迎礼品
                  </p>
                </div>
              </div>

              {/* Right Column - Check-in/Check-out */}
              <div className="flex-1">
                <div className="space-y-4 text-gray-700">
                  <div>
                    <span className="font-medium">{t.rooms.checkIn}</span>
                    <span className="mx-2">|</span>
                    <span>15:00后</span>
                  </div>
                  <div>
                    <span className="font-medium">{t.rooms.checkOut}</span>
                    <span className="mx-2">|</span>
                    <span>12:00前</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
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
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage.imageUrl}
                alt={`Room image ${selectedImage.imageIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Navigation arrows */}
            {(() => {
              const currentRoom = rooms.find((r) => r.id === selectedImage.roomId)
              if (!currentRoom || currentRoom.images.length <= 1) return null

              const currentIndex = selectedImage.imageIndex
              const prevIndex = currentIndex > 0 ? currentIndex - 1 : currentRoom.images.length - 1
              const nextIndex = currentIndex < currentRoom.images.length - 1 ? currentIndex + 1 : 0

              return (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-3"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedImage({
                        roomId: selectedImage.roomId,
                        imageIndex: prevIndex,
                        imageUrl: currentRoom.images[prevIndex],
                      })
                    }}
                    aria-label="Previous image"
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
                      <path d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-3"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedImage({
                        roomId: selectedImage.roomId,
                        imageIndex: nextIndex,
                        imageUrl: currentRoom.images[nextIndex],
                      })
                    }}
                    aria-label="Next image"
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
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )
            })()}
          </div>
        </div>
      )}
    </div>
  )
}
