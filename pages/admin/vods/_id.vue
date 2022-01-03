<template>
  <div class="container mx-auto mt-4">
    <section
      class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
    >
      <h2
        class="text-lg font-semibold text-gray-700 capitalize dark:text-white"
      >
        Edit VOD
      </h2>

      <form @submit.prevent="updateVod">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="username"
              >ID</label
            >
            <input
              v-model="vod.id"
              disabled
              id="id"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Title</label
            >
            <input
              v-model="vod.title"
              id="title"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="password"
              >Broadcast Type</label
            >
            <select
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              aria-label="broadcastType"
              v-model="vod.broadcastType"
            >
              <option value="archive">archive</option>
              <option value="live">live</option>
            </select>
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Duration</label
            >
            <input
              v-model="vod.duration"
              id="duration"
              type="number"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >View Count</label
            >
            <input
              v-model="vod.viewCount"
              id="viewCount"
              type="number"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Resolution</label
            >
            <input
              v-model="vod.resolution"
              id="resolution"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Is Downloading</label
            >
            <select
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              aria-label="downloading"
              v-model="vod.downloading"
            >
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Thumbnail Path</label
            >
            <input
              v-model="vod.thumbnailPath"
              id="thumbnailPath"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Web Thumbnail Path</label
            >
            <input
              v-model="vod.webThumbnailPath"
              id="webThumbnailPath"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Video Path</label
            >
            <input
              v-model="vod.videoPath"
              id="videoPath"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Chat Path</label
            >
            <input
              v-model="vod.chatPath"
              id="chatPath"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Chat Video Path</label
            >
            <input
              v-model="vod.chatVideoPath"
              id="chatVideoPath"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Vod Info Path</label
            >
            <input
              v-model="vod.vodInfoPath"
              id="vodInfoPath"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Streamed At</label
            >
            <input
              v-model="vod.createdAt"
              id="createdAt"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
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
    let vod
    try {
      vod = await $axios.$get(`${$config.apiURL}/v1/vods/${params.id}`)
    } catch (err) {
      if (err.response.status === 404) {
        error({ statusCode: 404, message: 'Vod not found' })
      } else {
        error({ statusCode: 500, message: 'Internal server error' })
      }
    }
    return { vod }
  },
  methods: {
    async updateVod() {
      try {
        await this.$axios.patch(
          `${this.$config.apiURL}/v1/vods/${this.vod.id}`,
          {
            ...this.vod,
          }
        )
        this.$toast.success('Vod updated')
        this.$router.back()
      } catch (error) {
        console.log(error)
        this.$toast.error(
          'Error updating vod, check browser console for more info'
        )
      }
    },
  },
}
</script>

<style></style>
