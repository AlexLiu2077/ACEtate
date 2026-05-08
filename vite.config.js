import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // 仅在非 Vercel 的生产环境构建中使用 '/Chemicat/'，本地开发和 Vercel 保持使用根目录 '/'
  base: (process.env.NODE_ENV === 'production' && !process.env.VERCEL) ? '/Chemicat/' : '/',
  plugins: [react()],
})
