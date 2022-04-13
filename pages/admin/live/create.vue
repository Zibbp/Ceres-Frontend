<template>
  <div class="container mx-auto mt-4">
    <section
      class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-neutral-800"
    >
      <h2
        class="text-lg font-semibold text-gray-700 capitalize dark:text-white"
      >
        Add Channel to Live Watch List
      </h2>

      <form @submit.prevent="addChannelToLive">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="channel"
              >Channel</label
            >
            <select
              ref="channelSelect"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
              aria-label="downloading"
              v-model="addToLive"
              required
            >
              <option
                v-for="channel in channels"
                :key="channel.value"
                :value="channel.value"
              >
                {{ channel.text }}
              </option>
            </select>
          </div>

          <div class="flex justify-end mt-6">
            <button
              type="submit"
              class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      channels: [],
      addToLive: {},
    }
  },

  async mounted() {
    await this.getChannels()
  },
  methods: {
    async getChannels() {
      try {
        const channels = await this.$axios.get(
          `${this.$config.apiURL}/v1/channels`
        )
        this.channels = channels.data.map((channel) => {
          return {
            value: channel.id,
            text: channel.login,
          }
        })
      } catch (error) {
        console.log('Error fetching channels', error)
        this.$toast.error('Error fetching channels')
      }
    },
    async addChannelToLive() {
      try {
        await this.$axios.post(`${this.$config.apiURL}/v1/live`, {
          channel: this.addToLive,
        })
        this.$toast.success('Channel added to live watch list.')
        this.$router.push('/admin/live')
      } catch (error) {
        if (error.response.status == 409) {
          this.$toast.error('Channel is already in the live watch list.')
        } else {
          console.log('Error adding channel to live watch list.', error)
          this.$toast.error('Error adding channel to live watch list.')
        }
      }
    },
  },
}
</script>

<style></style>
