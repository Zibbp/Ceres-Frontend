<template>
  <div
    class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md mt-20 dark:bg-neutral-800"
  >
    <div class="px-6 py-4">
      <h2 class="text-3xl font-bold text-center text-gray-700 dark:text-white">
        Ceres
      </h2>

      <p class="mt-1 text-center text-gray-500 dark:text-gray-400">Register</p>

      <form @submit.prevent="userRegister">
        <div class="w-full mt-4">
          <input
            v-model="register.username"
            class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            type="text"
            placeholder="Username"
            aria-label="Username"
            required
          />
        </div>

        <div class="w-full mt-4">
          <input
            v-model="register.password"
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
            Sign Up
          </button>
          <button
            v-else
            class="px-9 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
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
        >Have an account?
      </span>

      <nuxt-link to="/login">
        <a
          class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >Login</a
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
      register: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    async userRegister() {
      try {
        this.loading = true
        await this.$axios.post(`${this.$config.apiURL}/v1/users`, {
          username: this.register.username,
          password: this.register.password,
        })
        this.loading = false
        this.$toast.success('Successfully registered! You can now login.')
        this.$router.push('/login')
      } catch (error) {
        this.loading = false
        if (error.response.status === 409) {
          this.$toast.error('Username already taken')
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
