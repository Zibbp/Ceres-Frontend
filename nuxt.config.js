export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  ssr: true,

  publicRuntimeConfig: {
    apiURL: process.env.API_URL,
    cdnURL: process.env.CDN_URL,
    envMode: process.env.NODE_ENV || 'development',
    axios: {
      baseURL: process.env.API_URL,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.API_URL,
    },
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
  css: ['@/assets/css/main.css', 'plyr/dist/plyr.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vue-composition-api.js',
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
    '@nuxtjs/pwa',
  ],
  colorMode: {
    classSuffix: '',
  },
  loading: {
    color: '#700B97',
    height: '3px',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/auth-next',
    '@nuxtjs/dayjs',
    'vue-toastification/nuxt',
  ],
  toast: {
    position: 'bottom-right',
    timeout: 4000,
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
          maxAge: '2592000',
        },
        endpoints: {
          login: {
            url: `/v1/auth/login`,
            method: 'post',
          },
          user: {
            url: `/v1/auth/me`,
            method: 'get',
          },
          logout: {
            url: `/v1/auth/logout`,
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
    icon: false,
    meta: {
      appleStatusBarStyle: 'black',
      name: 'Ceres',
      theme_color: '#373838',
      mobileAppIOS: true,
      nativeUI: true,
    },
    manifest: {
      name: 'Ceres',
      short_name: 'Ceres',
      display: 'standalone',
      background_color: '#373838',
      icons: [
        {
          src: '/icon-64.png',
          sizes: '64x64',
        },
        {
          src: '/icon-192.png',
          sizes: '192x192',
        },
        {
          src: '/icon-512.png',
          sizes: '512x512',
        },
      ],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: { plugins: { tailwindcss: {}, autoprefixer: {} } },
  },
}
