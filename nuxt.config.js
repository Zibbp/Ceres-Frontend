export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  ssr: true,

  publicRuntimeConfig: {
    apiURL: process.env.API_URL,
    cdnURL: process.env.CDN_URL,
    envMode: process.env.NODE_ENV || 'development',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ceres',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vue-composition-api.js',
    { src: '~/plugins/vue-plyr', mode: 'client' },
    { src: '~/plugins/vue-good-table', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: '',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    '@nuxtjs/dayjs',
    'vue-toastification/nuxt',
  ],
  toast: {
    position: 'top-center',
    timeout: 5000,
    closeOnClick: true,
  },
  // Auth
  auth: {
    plugins: ['~/plugins/auth.js'],
    strategies: {
      local: {
        token: {
          property: 'accessToken',
          global: true,
          required: true,
          type: 'Bearer',
        },
        endpoints: {
          login: {
            url: `${process.env.API_URL}/v1/auth/login`,
            method: 'post',
          },
          user: {
            url: `${process.env.API_URL}/v1/auth/me`,
            method: 'get',
          },
          logout: {
            url: `${process.env.API_URL}/v1/auth/logout`,
            method: 'post',
          },
        },
      },
    },
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/',
        expires: 14,
        secure: false,
      },
    },
  },
  dayjs: {
    plugins: ['duration'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: { plugins: { tailwindcss: {}, autoprefixer: {} } },
  },
}
