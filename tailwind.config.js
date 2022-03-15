module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-black': {
          900: '#ffffff',
          800: '#040303',
          700: '#222222',
          600: '#171717',
          500: '#222831',
          400: '#222831',
        },
        'dark-purple': {
          900: '#160040',
          800: '#2A0944',
          700: '#3E065F',
          600: '#700B97',
          500: '#8E05C2',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
