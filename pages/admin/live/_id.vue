<template>
  <div class="container mx-auto mt-4">
    <section
      class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-neutral-800"
    >
      <h2
        class="text-lg font-semibold text-gray-700 capitalize dark:text-white"
      >
        Edit Live Channel Settings
      </h2>

      <form @submit.prevent="updateLiveChannel">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="username"
              >ID</label
            >
            <input
              v-model="liveChannel.id"
              disabled
              id="id"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="username"
              >Is Live</label
            >
            <input
              v-model="liveChannel.live"
              id="live"
              type="checkbox"
              class="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="username"
              >Last Live</label
            >
            <input
              v-model="liveChannel.lastLive"
              disabled
              id="lastLive"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="username"
              >Channel</label
            >
            <input
              v-model="liveChannel.channel.displayName"
              disabled
              id="channel"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="username"
              >Channel Id</label
            >
            <input
              v-model="liveChannel.channel.id"
              disabled
              id="channelId"
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
    let liveChannel
    try {
      liveChannel = await $axios.$get(`${$config.apiURL}/v1/live/${params.id}`)
    } catch (err) {
      if (err.response.status === 404) {
        error({ statusCode: 404, message: 'Live channel not found' })
      } else {
        error({ statusCode: 500, message: 'Internal server error' })
      }
    }
    return { liveChannel }
  },
  data() {
    return {}
  },
  methods: {
    async updateLiveChannel() {
      console.log(this.liveChannel)
      try {
        await this.$axios.patch(
          `${this.$config.apiURL}/v1/live/${this.liveChannel.id}`,
          {
            live: this.liveChannel.live,
          }
        )
        this.$toast.success('Live chanel updated')
        this.$router.back()
      } catch (error) {
        console.log(error)
        this.$toast.error(
          'Error updating live channel, check browser console for more info'
        )
      }
    },
  },
}
</script>

<style></style>
