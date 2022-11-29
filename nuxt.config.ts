// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // CSS配置文件
  css:[
    '@/assets/global.css',
  ],
  //  windiCSS 配置文件 start
  buildModules: [
    'nuxt-windicss',
  ],
  // end 
  // navie UI 配置文件 start
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
          'naive-ui',
          'vueuc',
          '@css-render/vue3-ssr',
          '@juggle/resize-observer'
        ]
        : ['@juggle/resize-observer']
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : []
    }
  }
  // end 
})
