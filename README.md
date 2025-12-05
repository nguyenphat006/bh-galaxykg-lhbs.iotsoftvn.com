# Chào mừng đến với React Router! / Welcome to React Router! / Domain: school.iotsoftvn.com

Một template hiện đại, sẵn sàng cho production để xây dựng ứng dụng React fullstack sử dụng React Router v7.

A modern, production-ready template for building full-stack React applications using React Router v7.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Tính năng / Features

- 🚀 **Server-side rendering (SSR)** - Render phía server cho SEO tốt hơn
- ⚡️ **Hot Module Replacement (HMR)** - Cập nhật nhanh khi development  
- 📦 **Asset bundling** - Tối ưu hóa và đóng gói tài nguyên
- 🔄 **Data loading & mutations** - Quản lý dữ liệu hiện đại
- 🔒 **TypeScript** - Type safety mặc định với auto-generation
- 🎉 **TailwindCSS v4** - Styling utility-first hiện đại
- 🏗️ **React v19** - Phiên bản React mới nhất
- 🛣️ **React Router v7** - Framework fullstack mới nhất
- ⚡ **Vite v7** - Build tool siêu nhanh
- 📖 [React Router docs](https://reactrouter.com/)

## Bắt đầu / Getting Started

### Cài đặt / Installation

Cài đặt các dependencies:

```bash
npm install
```

### Development

Khởi chạy development server với HMR:

```bash
npm run dev
```

Ứng dụng sẽ có sẵn tại `http://localhost:9000`.

### Type Checking

Kiểm tra TypeScript và tạo types tự động:

```bash
npm run typecheck
```

## Xây dựng cho Production / Building for Production

Tạo production build:

```bash
npm run build
```

Khởi chạy production server:

```bash
npm start
```

## Triển khai / Deployment

### Docker Deployment

Để build và chạy bằng Docker:

```bash
docker build -t lhbs-demo .

# Chạy container
docker run -p 3000:3000 lhbs-demo
```

Ứng dụng được container hóa có thể triển khai trên bất kỳ platform nào hỗ trợ Docker:

- AWS ECS
- Google Cloud Run  
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway
- Vercel
- Netlify

### DIY Deployment

Nếu bạn quen với việc triển khai ứng dụng Node.js, built-in app server đã sẵn sàng cho production.

Đảm bảo triển khai output của `npm run build`:

```
├── package.json
├── package-lock.json (hoặc pnpm-lock.yaml, bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Cấu trúc dự án / Project Structure

```
app/
├── root.tsx              # Root layout với SSR
├── routes.ts             # Cấu hình routing
├── app.css              # Global styles
├── routes/              # Route components  
│   └── home.tsx         # Home page với type safety
├── components/          # Shared components
└── welcome/             # Feature components
    └── welcome.tsx
```

## Styling

Template này đi kèm với [Tailwind CSS v4](https://tailwindcss.com/) đã được cấu hình sẵn với Vite plugin. Bạn có thể sử dụng bất kỳ CSS framework nào bạn thích.

## Công nghệ sử dụng / Tech Stack

- **React v19.1.1** - UI Library mới nhất
- **React Router v7.9.2** - Fullstack React framework  
- **TypeScript v5.9.2** - Type-safe development
- **Vite v7.1.7** - Build tool & dev server
- **TailwindCSS v4.1.13** - Utility-first CSS
- **Node.js** - Runtime environment

---

Được xây dựng với ❤️ bằng React Router v7 | Built with ❤️ using React Router v7
