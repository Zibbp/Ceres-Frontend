<template>
  <div class="container mx-auto mt-4">
    <section
      class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-neutral-800"
    >
      <h2
        class="text-lg font-semibold text-gray-700 capitalize dark:text-white"
      >
        Edit User
      </h2>

      <form @submit.prevent="updateUser">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="username"
              >ID</label
            >
            <input
              v-model="user.id"
              disabled
              id="userId"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="username"
              >Username</label
            >
            <input
              v-model="user.username"
              disabled
              id="username"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="username"
              >Webhook</label
            >
            <input
              v-model="user.webhook"
              disabled
              id="webhook"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Role</label
            >
            <select
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
              aria-label="roles"
              v-model="user.roles"
            >
              <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
              >
                {{ option.text }}
              </option>
            </select>
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="username"
              >Created At</label
            >
            <input
              v-model="user.createdAt"
              disabled
              id="createdAt"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="username"
              >Updated At</label
            >
            <input
              v-model="user.updatedAt"
              disabled
              id="updatedAt"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div class="flex justify-end mt-6">
          <button
            type="submit"
            class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $config, $axios, error }) {
    let user
    try {
      user = await $axios.$get(`${$config.apiURL}/v1/users/${params.id}`)
    } catch (err) {
      if (err.response.status === 404) {
        error({ statusCode: 404, message: 'User not found' })
      } else {
        error({ statusCode: 500, message: 'Internal server error' })
      }
    }
    return { user }
  },
  data() {
    return {
      options: [
        { text: 'User', value: 'user' },
        { text: 'Archiver', value: 'archiver' },
        { text: 'Admin', value: 'admin' },
      ],
    }
  },
  methods: {
    async updateUser() {
      console.log(this.user)
      try {
        await this.$axios.patch(
          `${this.$config.apiURL}/v1/users/admin/${this.user.id}`,
          {
            ...this.user,
          }
        )
        this.$toast.success('User updated')
        this.$router.back()
      } catch (error) {
        console.log(error)
        this.$toast.error(
          'Error updating User, check browser console for more info'
        )
      }
    },
  },
}
</script>

<style></style>
