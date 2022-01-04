<template>
  <div
    class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md mt-20 dark:bg-neutral-800"
  >
    <div class="px-6 py-4">
      <h2 class="text-3xl font-bold text-center text-gray-700 dark:text-white">
        Ceres
      </h2>

      <p class="mt-1 text-center text-gray-500 dark:text-gray-400">Login</p>

      <form @submit.prevent="userLogin">
        <div class="w-full mt-4">
          <input
            v-model="login.username"
            class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            type="text"
            placeholder="Username"
            aria-label="Username"
            required
          />
        </div>

        <div class="w-full mt-4">
          <input
            v-model="login.password"
            class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            type="password"
            placeholder="Password"
            aria-label="Password"
            required
          />
        </div>

        <div class="flex items-center justify-between mt-4">
          <a
            href="#"
            class="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
          ></a>

          <button
            v-if="!loading"
            class="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
            type="submit"
          >
            Login
          </button>
          <button
            v-else
            class="px-7 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
            type="submit"
          >
            <svg
              class="animate-spin -ml-1 -mr-1 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </button>
        </div>
      </form>
    </div>

    <div
      class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-neutral-700"
    >
      <span class="text-sm text-gray-600 dark:text-gray-200"
        >Don't have an account?
      </span>

      <nuxt-link to="/register">
        <a
          class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >Register</a
        ></nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      login: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    async userLogin() {
      try {
        this.loading = true
        await this.$auth.loginWith('local', {
          data: this.login,
        })
        this.loading = false
        this.$router.push('/')
      } catch (error) {
        this.loading = false
        if (error.response.status === 401 || error.response.status === 400) {
          this.$toast.error('Invalid credentials')
        } else {
          console.log(error)
          this.$toast.error('Something went wrong')
        }
      }
    },
  },
}
</script>

<style></style>
