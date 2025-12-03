'use client'

import { useEffect, useRef, useState } from 'react'

interface BaiduMapProps {
  address?: string
  lat?: number
  lng?: number
  apiKey?: string
}

const BaiduMap = ({
  address = '浙江省杭州市上城区西湖区虎玉路6-1号, 310000',
  lat = 30.2084,
  lng = 120.1344,
  apiKey
}: BaiduMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // 获取 API Key（优先使用传入的，其次使用环境变量）
    // Next.js 会在构建时将 NEXT_PUBLIC_ 前缀的环境变量注入到客户端
    const mapApiKey = apiKey ||
      (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_BAIDU_MAP_API_KEY) ||
      'YOUR_BAIDU_MAP_API_KEY'

    // 检查百度地图 API 是否已加载
    if (typeof window !== 'undefined' && (window as any).BMap) {
      initMap()
      return
    }

    // 动态加载百度地图 API
    const script = document.createElement('script')
    script.src = `https://api.map.baidu.com/api?v=3.0&ak=${mapApiKey}&callback=initBaiduMap`
    script.async = true
    script.defer = true

      // 定义全局回调函数
      ; (window as any).initBaiduMap = () => {
        initMap()
      }

    script.onerror = () => {
      setError('地图加载失败，请检查网络连接或 API Key 配置')
    }

    document.head.appendChild(script)

    return () => {
      // 清理
      if ((window as any).initBaiduMap) {
        delete (window as any).initBaiduMap
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [apiKey, lat, lng, address])

  const initMap = () => {
    if (!mapRef.current || !(window as any).BMap) {
      return
    }

    try {
      const BMap = (window as any).BMap

      // 创建地图实例
      const map = new BMap.Map(mapRef.current)

      // 创建坐标点（浙江省杭州市上城区西湖区虎玉路6-1号的大概位置）
      const point = new BMap.Point(lng, lat)

      // 初始化地图，设置中心点坐标和地图级别
      map.centerAndZoom(point, 16)

      // 启用滚轮缩放
      map.enableScrollWheelZoom(true)

      // 添加地图类型控件（如果可用）
      try {
        const mapTypeControl = new BMap.MapTypeControl()
        map.addControl(mapTypeControl)
      } catch (e) {
        // 如果地图类型控件不可用，忽略错误
      }

      // 添加缩放控件
      map.addControl(new BMap.NavigationControl())

      // 添加比例尺控件
      map.addControl(new BMap.ScaleControl())

      // 创建标记
      const marker = new BMap.Marker(point)
      map.addOverlay(marker)

      // 创建信息窗口
      const infoWindow = new BMap.InfoWindow(
        `<div style="padding: 10px;">
          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">杭州夕上·虎跑1934酒店</h3>
          <p style="margin: 0; color: #666; font-size: 14px;">${address}</p>
        </div>`,
        {
          width: 250,
          height: 80,
          title: '酒店位置'
        }
      )

      // 点击标记显示信息窗口
      marker.addEventListener('click', () => {
        map.openInfoWindow(infoWindow, point)
      })

      // 如果提供了地址，使用地址搜索来精确定位
      if (address && address !== '浙江省杭州市上城区西湖区虎玉路6-1号, 310000') {
        const geocoder = new BMap.Geocoder()
        geocoder.getPoint(address, (point: any) => {
          if (point) {
            map.centerAndZoom(point, 16)
            marker.setPosition(point)
          }
        })
      }

      setIsLoaded(true)
    } catch (err) {
      console.error('地图初始化失败:', err)
      setError('地图初始化失败')
    }
  }

  if (error) {
    return (
      <div className="bg-gray-200 rounded-sm h-96 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <p className="text-red-500 mb-2">{error}</p>
          <p className="text-sm">请检查百度地图 API Key 配置</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-96 rounded-sm overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10">
          <div className="text-center text-gray-500">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-700 mx-auto mb-4"></div>
            <p>地图加载中...</p>
          </div>
        </div>
      )}
      <div
        ref={mapRef}
        className="w-full h-full"
        style={{ minHeight: '384px' }}
      />
    </div>
  )
}

// 定义全局类型（用于百度地图 API）
declare global {
  interface Window {
    BMap: any
    initBaiduMap: () => void
    BMAP_NORMAL_MAP?: any
    BMAP_HYBRID_MAP?: any
  }
}

export default BaiduMap

