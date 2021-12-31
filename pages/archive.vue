<template>
  <div
    class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md mt-20 dark:bg-neutral-800"
  >
    <div class="px-6 py-4">
      <h2 class="text-3xl font-bold text-center text-gray-700 dark:text-white">
        Archive VOD
      </h2>

      <p class="mt-1 text-center text-gray-500 dark:text-gray-400">
        Enter VOD Id
      </p>

      <div class="mt-2" v-if="vod">
        <preview-vod-card :vod="vod"></preview-vod-card>
      </div>

      <form @submit.prevent="archiveVod">
        <div class="w-full mt-4">
          <input
            @change="fetchVodInfo"
            v-model="id"
            class="block w-full px-4 py-2 mt-2 text-gray-700 dark:text-gray-300 placeholder-gray-500 bg-white border rounded-md dark:bg-neutral-700 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            type="text"
            placeholder="123456789"
            aria-label="VOD Id"
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
            Archive
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
  </div>
</template>

<script>
import PreviewVodCard from '~/components/Vod/PreviewVodCard.vue'
export default {
  middleware: 'auth',
  components: {
    PreviewVodCard,
  },
  data() {
    return {
      loading: false,
      id: '',
      vod: null,
    }
  },
  methods: {
    async archiveVod() {
      try {
        this.loading = true
        const archiveReq = await this.$axios.post(
          `${this.$config.apiURL}/v1/vods`,
          {
            id: this.id,
          }
        )
        this.$toast.success('Archiving VOD')
        this.$router.push('/queue')
        this.loading = false
      } catch (error) {
        this.loading = false
        if (error.response.status == 409) {
          this.$toast.error('VOD already archived.')
        } else {
          console.log(error)
          this.$toast.error('Something went wrong.')
        }
      }
    },
    async fetchVodInfo() {
      try {
        this.vod = null
        const vodInfo = await this.$axios.get(
          `${this.$config.apiURL}/v1/twitch/vods?id=${this.id}`
        )
        if (!vodInfo.data.thumbnail_url) {
          this.$toast.warning(
            'Thumbnail not found on VOD. This often happens when the VOD is still processing. Wait until the VOD is processed and try again.',
            { timeout: 10000 }
          )
        } else {
          this.vod = vodInfo.data
        }
      } catch (error) {
        if (error.response.status == 404) {
          this.$toast.error('VOD not found.')
        } else {
          console.log(error)
          this.$toast.error('Something went wrong.')
        }
      }
    },
  },
}
</script>

<style></style>
