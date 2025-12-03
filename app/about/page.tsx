import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于我们 | 杭州夕上·虎跑1934酒店',
  description: '了解夕上虎跑1934度假酒店的历史故事和设计理念',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">关于我们</h1>
          <p className="text-xl">修旧不守旧，历史即当下</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
                酒店故事
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                夕上虎跑1934度假酒店，位于杭州市西湖风景区虎玉路6-1号，地处西湖主景区范围，
                背倚群山，重峦叠嶂，远眺钱塘，波澜壮阔。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                酒店原为民国风格的花园别墅，始建于1934年，最初为天主神父夏天避暑之用。
                2010年被杭州市政府列入第五批历史建筑保护名单。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                酒店由建筑师王驰与谢柯操刀历时四年半改造完成。
                <strong className="text-gray-900">"修旧不守旧、历史即当下"</strong>——
                酒店巧妙地将往昔故事、山光树影嵌在时光里。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                这座隐匿在密林深处的民国宅邸，经历过几十年的风雨，变身为一家新旧交融、
                时尚与历史相映衬、山林景观与舒适度共享、幽丽清雅的人文度假酒店。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                设计理念
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                我们相信，真正的奢华不在于繁复的装饰，而在于对细节的极致追求和对历史的尊重。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                每一处设计都经过精心考量，既保留了原有的建筑风貌，又融入了现代生活的舒适需求。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                在这里，您可以感受到时间的沉淀，体验历史与当下的完美融合。
              </p>
            </div>
            <div className="relative h-96 w-full rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80"
                alt="酒店设计"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              地理位置
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              酒店位于杭州市西湖风景区，距离西湖主景区仅数分钟车程。
              周边交通便利，距离地铁站1.5千米，距离杭州站7.8千米，距离杭州东站15.8千米。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-gray-50 rounded-sm">
                <div className="text-3xl mb-3">🚇</div>
                <h3 className="font-semibold text-gray-900 mb-2">地铁</h3>
                <p className="text-gray-600 text-sm">水澄桥地铁站 1.5km</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-sm">
                <div className="text-3xl mb-3">🚄</div>
                <h3 className="font-semibold text-gray-900 mb-2">火车站</h3>
                <p className="text-gray-600 text-sm">杭州站 7.8km</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-sm">
                <div className="text-3xl mb-3">✈️</div>
                <h3 className="font-semibold text-gray-900 mb-2">机场</h3>
                <p className="text-gray-600 text-sm">萧山国际机场 31.9km</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

