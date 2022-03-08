<template>
  <div class="container mx-auto mt-4">
    <section
      class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-neutral-800"
    >
      <h2
        class="text-lg font-semibold text-gray-700 capitalize dark:text-white"
      >
        Manually Create VOD
      </h2>

      <form @submit.prevent="createVod">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="channel"
              >Channel</label
            >
            <select
              ref="channelSelect"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
              aria-label="downloading"
              v-model="vod.channel"
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
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="username"
              >ID</label
            >
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <div
                  @click="randomId()"
                  class="p-1 focus:outline-none focus:shadow-outline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 fill-neutral-900 dark:fill-slate-50"
                    viewBox="0 0 640 512"
                  >
                    <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path
                      d="M447.1 224c0-12.56-4.781-25.13-14.35-34.76l-174.9-174.9C249.1 4.786 236.5 0 223.1 0C211.4 0 198.9 4.786 189.2 14.35L14.35 189.2C4.783 198.9-.0011 211.4-.0011 223.1c0 12.56 4.785 25.17 14.35 34.8l174.9 174.9c9.625 9.562 22.19 14.35 34.75 14.35s25.13-4.783 34.75-14.35l174.9-174.9C443.2 249.1 447.1 236.6 447.1 224zM96 248c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1S120 210.8 120 224S109.3 248 96 248zM224 376c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S237.3 376 224 376zM224 248c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1S248 210.8 248 224S237.3 248 224 248zM224 120c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S237.3 120 224 120zM352 248c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S365.3 248 352 248zM591.1 192l-118.7 0c4.418 10.27 6.604 21.25 6.604 32.23c0 20.7-7.865 41.38-23.63 57.14l-136.2 136.2v46.37C320 490.5 341.5 512 368 512h223.1c26.5 0 47.1-21.5 47.1-47.1V240C639.1 213.5 618.5 192 591.1 192zM479.1 376c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S493.2 376 479.1 376z"
                    />
                  </svg>
                </div>
              </span>
              <input
                v-model="vod.id"
                required
                id="id"
                type="text"
                class="block w-full px-4 pl-10 py-2 mt-2 dark:bg-neutral-800 text-gray-700 border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Title</label
            >
            <input
              v-model="vod.title"
              required
              id="title"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="password"
              >Broadcast Type</label
            >
            <select
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
              aria-label="broadcastType"
              required
              v-model="vod.broadcastType"
            >
              <option selected value="archive">archive</option>
              <option value="live">live</option>
            </select>
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Duration</label
            >
            <input
              v-model="vod.duration"
              required
              id="duration"
              type="number"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >View Count</label
            >
            <input
              v-model="vod.viewCount"
              required
              id="viewCount"
              type="number"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Resolution</label
            >
            <input
              v-model="vod.resolution"
              required
              id="resolution"
              type="text"
              value="source"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Thumbnail Path</label
            >
            <input
              v-model="vod.thumbnailPath"
              required
              id="thumbnailPath"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Web Thumbnail Path</label
            >
            <input
              v-model="vod.webThumbnailPath"
              required
              id="webThumbnailPath"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Video Path</label
            >
            <input
              v-model="vod.videoPath"
              required
              id="videoPath"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
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
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
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
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
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
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Streamed On (2022-03-08)</label
            >
            <input
              v-model="vod.createdAt"
              required
              id="createdAt"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div class="flex justify-end mt-6">
          <button
            type="submit"
            class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Create
          </button>
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
      vod: {
        channel: '',
        broadcastType: 'archive',
        resolution: 'source',
        id: '',
        thumbnailPath: '',
      },
    }
  },
  watch: {
    'vod.id'() {
      if (this.vod.channel) {
        const selectBox = this.$refs.channelSelect
        const channelLogin = selectBox.options[selectBox.selectedIndex].text

        this.vod.thumbnailPath = `/${channelLogin}/${this.vod.id}/${this.vod.id}_thumbnail.jpg`
        this.vod.webThumbnailPath = `/${channelLogin}/${this.vod.id}/${this.vod.id}_web_thumbnail.jpg`
        this.vod.videoPath = `/${channelLogin}/${this.vod.id}/${this.vod.id}_video.mp4`
      }
    },
    'vod.channel'() {
      const selectBox = this.$refs.channelSelect
      const channelLogin = selectBox.options[selectBox.selectedIndex].text

      this.vod.thumbnailPath = `/${channelLogin}/${this.vod.id}/${this.vod.id}_thumbnail.jpg`
      this.vod.webThumbnailPath = `/${channelLogin}/${this.vod.id}/${this.vod.id}_web_thumbnail.jpg`
      this.vod.videoPath = `/${channelLogin}/${this.vod.id}/${this.vod.id}_video.mp4`
    },
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
    randomId() {
      this.vod.id = Math.floor(Math.random() * 1000000000).toString()
    },
    async createVod() {
      try {
        await this.$axios.post(
          `${this.$config.apiURL}/v1/vods/manual`,
          this.vod
        )
        this.$toast.success('Vod created')
        this.$router.push('/admin/vods')
      } catch (error) {
        console.log('Error creating vod', error)
        this.$toast.error('Error creating vod')
      }
    },
  },
}
</script>

<style></style>
