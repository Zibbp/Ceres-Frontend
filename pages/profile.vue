<template>
  <div class="container mx-auto">
    <div class="mt-4 flex flex-wrap items-center justify-center">
      <div
        class="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 bg-white dark:bg-neutral-800 shadow-lg transform duration-200 easy-in-out"
      >
        <div class="h-32 overflow-hidden">
          <img class="w-full" src="/images/profile-header.jpg" alt="" />
        </div>
        <div class="flex justify-center px-5 -mt-12">
          <div class="h-32 w-32 bg-white p-2 rounded-full">
            <avatar
              :size="112"
              :rounded="true"
              :username="$auth.user.username"
            ></avatar>
          </div>
        </div>
        <div class="pb-6">
          <div class="px-14">
            <h2
              class="text-gray-800 text-3xl text-center font-bold dark:text-gray-100"
            >
              {{ $auth.user.username }}
            </h2>
            <p class="text-gray-400 dark:text-gray-200 text-center mt-2">
              {{ $auth.user.roles }}
            </p>
            <h3 class="text-xl mt-1 text-gray-700 dark:text-gray-100 font-bold">
              Webhook
            </h3>
            <p class="text-sm dark:text-gray-200">
              Enter a Discord webhook url to receive a notification when a VOD
              you submitted is archived.
            </p>
            <form @submit.prevent="updateUser()">
              <div class="w-full mt-4">
                <input
                  v-model="user.webhook"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-300 placeholder-gray-500 bg-white border rounded-md dark:bg-neutral-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
                  type="text"
                  aria-label="Webhook"
                  required
                />
              </div>

              <div class="flex items-center justify-between mt-4">
                <a
                  href="#"
                  class="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
                ></a>

                <button
                  class="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from 'vue-avatar'

export default {
  middleware: 'auth',
  components: {
    avatar: Avatar,
  },
  data() {
    return {
      user: {},
    }
  },
  async mounted() {
    const fetchUser = await this.$axios.get(`${this.$config.apiURL}/v1/auth/me`)
    this.user = fetchUser.data.user
  },
  methods: {
    async updateUser() {
      try {
        const updateUser = await this.$axios.patch(
          `${this.$config.apiURL}/v1/users/${this.user.id}`,
          {
            webhook: this.user.webhook,
          }
        )
        this.$toast.success('User updated')
      } catch (error) {
        this.$toast.error('Error updating user')
      }
    },
  },
}
</script>

<style></style>
