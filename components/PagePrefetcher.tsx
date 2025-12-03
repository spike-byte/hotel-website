'use client'

import { useEffect } from 'react'

const PagePrefetcher = () => {
  useEffect(() => {
    // 延迟预加载，避免影响首屏加载性能
    const timer = setTimeout(() => {
      const pagesToPrefetch = ['/rooms', '/dining', '/services', '/about']

      pagesToPrefetch.forEach((page) => {
        // 使用 fetch 预加载页面，Next.js 会缓存结果
        fetch(page, {
          method: 'GET',
          headers: {
            'X-Prefetch': 'true',
          },
        }).catch(() => {
          // 忽略预加载错误，不影响用户体验
        })
      })
    }, 2000) // 页面加载2秒后开始预加载，确保首屏内容已加载完成

    return () => clearTimeout(timer)
  }, [])

  return null
}

export default PagePrefetcher

