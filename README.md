# 杭州夕上·虎跑1934酒店官网

一个现代化、响应式的酒店官网，采用 Next.js、TypeScript 和 Tailwind CSS 构建。

## 特性

- 🎨 简约优雅的设计风格
- 📱 完全响应式设计，支持移动端、平板和桌面端
- ⚡ 优化的性能和快速加载
- 🔍 SEO 优化
- 🌐 多语言支持（预留）
- ♿ 无障碍访问支持

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion

## 开始使用

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
├── app/              # Next.js App Router 页面
├── components/       # React 组件
├── public/          # 静态资源
└── styles/          # 全局样式
```

## 页面

- **首页**: 酒店概览、特色介绍
- **客房**: 房型展示和详情
- **餐饮**: 餐厅和菜单信息
- **关于我们**: 酒店历史和故事
- **联系**: 联系方式和地图

## 配置

### 百度地图 API Key

如需在联系页面显示百度地图，需要配置 API Key：

1. 访问 [百度地图开放平台](https://lbsyun.baidu.com/apiconsole/key) 申请 API Key
2. 在项目根目录创建 `.env.local` 文件
3. 添加以下配置：

```env
NEXT_PUBLIC_BAIDU_MAP_API_KEY=your_baidu_map_api_key_here
```

4. 重启开发服务器

**注意**: 如果没有配置 API Key，地图会显示默认的占位符。

