'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useTranslation } from '@/hooks/useTranslation'

const NewsletterPage = () => {
  const t = useTranslation()
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    address: '',
    city: '',
    zipCode: '',
    countryCode: '+86',
    phone: '',
  })

  useEffect(() => {
    // 从 URL 参数中获取邮箱
    const emailParam = searchParams.get('email')
    if (emailParam) {
      setFormData((prev) => ({ ...prev, email: emailParam }))
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里可以添加表单提交逻辑
    alert(t.language === 'zh' ? '感谢您的订阅！我们会尽快与您联系。' : 'Thank you for subscribing! We will contact you soon.')
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-sm shadow-sm p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 text-center">
            {t.newsletter.title}
          </h1>
          <p className="text-gray-600 text-center mb-2">
            {t.newsletter.description}
          </p>
          <p className="text-sm text-gray-500 text-center mb-8">{t.newsletter.requiredFields}</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.newsletter.titleLabel} <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-4">
                {(t.language === 'zh'
                  ? ['先生', '女士', '夫人', '小姐', '博士', '教授']
                  : ['Mr', 'Ms', 'Mrs', 'Miss', 'Dr', 'Prof']
                ).map((title) => (
                  <label key={title} className="flex items-center">
                    <input
                      type="radio"
                      name="title"
                      value={title}
                      checked={formData.title === title}
                      onChange={handleChange}
                      className="mr-2"
                      required
                    />
                    <span className="text-sm text-gray-700">{title}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.newsletter.nameLabel} <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder={t.newsletter.firstName}
                  className="px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder={t.newsletter.lastName}
                  className="px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.newsletter.emailLabel} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            {/* Country / Region */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.newsletter.countryLabel} <span className="text-red-500">*</span>
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="">{t.language === 'zh' ? '请选择' : 'Please select'}</option>
                <option value="CN">{t.language === 'zh' ? '中国' : 'China'}</option>
                <option value="US">{t.language === 'zh' ? '美国' : 'United States'}</option>
                <option value="UK">{t.language === 'zh' ? '英国' : 'United Kingdom'}</option>
                <option value="JP">{t.language === 'zh' ? '日本' : 'Japan'}</option>
                <option value="KR">{t.language === 'zh' ? '韩国' : 'South Korea'}</option>
                <option value="SG">{t.language === 'zh' ? '新加坡' : 'Singapore'}</option>
                <option value="AU">{t.language === 'zh' ? '澳大利亚' : 'Australia'}</option>
                <option value="CA">{t.language === 'zh' ? '加拿大' : 'Canada'}</option>
                <option value="FR">{t.language === 'zh' ? '法国' : 'France'}</option>
                <option value="DE">{t.language === 'zh' ? '德国' : 'Germany'}</option>
              </select>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.newsletter.addressLabel}
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.newsletter.cityLabel}
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* ZIP Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.newsletter.zipCodeLabel}
              </label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.newsletter.phoneLabel}
              </label>
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="+86">+86</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+81">+81</option>
                  <option value="+82">+82</option>
                  <option value="+65">+65</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="131 2345 6789"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Privacy Statement */}
            <div className="pt-4">
              <p className="text-sm text-gray-600">
                {t.newsletter.privacyText}{' '}
                <a href="#" className="text-primary-700 hover:underline">
                  {t.newsletter.privacyLink}
                </a>
                .
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="px-8 py-3 bg-primary-700 text-white rounded-sm hover:bg-primary-800 transition-colors duration-200 text-sm font-medium uppercase"
              >
                {t.newsletter.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewsletterPage

