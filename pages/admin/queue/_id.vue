<template>
  <div class="container mx-auto mt-4">
    <section
      class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-neutral-800"
    >
      <h2
        class="text-lg font-semibold text-gray-700 capitalize dark:text-white"
      >
        Edit Queue Item
      </h2>

      <form @submit.prevent="updateQueue">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="username"
              >ID</label
            >
            <input
              v-model="queue.id"
              disabled
              id="vodId"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >VOD ID</label
            >
            <input
              v-model="queue.vodId"
              disabled
              id="id"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Live Archive</label
            >
            <select
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
              aria-label="liveArchive"
              v-model="queue.liveArchive"
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
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Video Complete</label
            >
            <select
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
              aria-label="videoDone"
              v-model="queue.videoDone"
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
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Chat Download Complete</label
            >
            <select
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
              aria-label="chatDownloadDone"
              v-model="queue.chatDownloadDone"
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
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Chat Render Complete</label
            >
            <select
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
              aria-label="chatRenderDone"
              v-model="queue.chatRenderDone"
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
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Completed</label
            >
            <select
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
              aria-label="completed"
              v-model="queue.completed"
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
    let queue
    try {
      queue = await $axios.$get(`${$config.apiURL}/v1/queues/${params.id}`)
    } catch (err) {
      if (err.response.status === 404) {
        error({ statusCode: 404, message: 'Queue not found' })
      } else {
        error({ statusCode: 500, message: 'Internal server error' })
      }
    }
    return { queue }
  },
  data() {
    return {
      options: [
        { text: 'True', value: true },
        { text: 'False', value: false },
      ],
    }
  },
  methods: {
    async updateQueue() {
      console.log(this.queue)
      try {
        await this.$axios.patch(
          `${this.$config.apiURL}/v1/queues/${this.queue.id}`,
          {
            ...this.queue,
          }
        )
        this.$toast.success('Queue updated')
        this.$router.back()
      } catch (error) {
        console.log(error)
        this.$toast.error(
          'Error updating queue, check browser console for more info'
        )
      }
    },
  },
}
</script>

<style></style>
