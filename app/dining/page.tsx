import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '餐饮 | 杭州夕上·虎跑1934酒店',
  description: '月芽·自由餐厅，品味精致美食，体验融合传统与现代的创意料理',
}

const diningOptions = [
  {
    name: '早餐',
    time: '07:00 - 10:00',
    description: '丰盛的自助早餐，提供中西式精选菜品，新鲜水果和现磨咖啡，为您开启美好的一天。',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&q=80',
  },
  {
    name: '午餐',
    time: '11:30 - 14:00',
    description: '精致的午餐菜单，融合本地特色与创新料理，选用新鲜优质食材，呈现难忘的味觉体验。',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
  },
  {
    name: '晚餐',
    time: '17:30 - 21:00',
    description: '优雅的晚餐时光，在温馨的氛围中享受精心烹制的美食，搭配精选酒水，度过完美的夜晚。',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
  },
  {
    name: '下午茶',
    time: '14:00 - 17:00',
    description: '在茶室享受悠闲的下午茶时光，品味精致的茶点和香茗，感受江南的雅致生活。',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80',
  },
]

export default function DiningPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">餐饮</h1>
          <p className="text-xl">月芽·自由餐厅</p>
        </div>
      </section>

      {/* Restaurant Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              月芽·自由餐厅
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              在优雅的环境中，品味精致的美食。我们的餐厅提供融合传统与现代的创意料理，
              选用新鲜优质的食材，为您呈现难忘的用餐体验。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              无论是早餐、午餐还是晚餐，我们致力于为您打造每一刻的美好时光。
            </p>
          </div>

          {/* Dining Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diningOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={option.image}
                    alt={option.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-serif font-semibold text-gray-900">
                      {option.name}
                    </h3>
                    <span className="text-gray-500 text-sm">{option.time}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">精致料理</h3>
              <p className="text-gray-600">
                由经验丰富的厨师团队精心烹制，每一道菜品都经过严格把控
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">新鲜食材</h3>
              <p className="text-gray-600">
                选用本地优质食材，确保每一口都是最新鲜、最健康的美味
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🍷</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">精选酒水</h3>
              <p className="text-gray-600">
                搭配精选的葡萄酒和特色饮品，提升您的用餐体验
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

