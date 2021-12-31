<template>
  <div class="bg-gradient-to-r from-purple-300 to-blue-200">
    <div class="w-9/12 m-auto py-16 fill-page flex items-center justify-center">
      <div class="bg-white shadow overflow-hidden sm:rounded-lg pb-8 w-6/12">
        <div class="border-t border-gray-200 text-center pt-8">
          <h1 class="text-9xl font-bold text-purple-400">404</h1>
          <h1 class="text-6xl font-medium py-8">{{ error.message }}</h1>
          <nuxt-link to="/">
            <button
              class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6"
            >
              Home
            </button></nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'error-404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style>
.fill-page {
  min-height: calc(100vh - 4rem);
}
</style>
