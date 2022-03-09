<template>
  <div class="container mx-auto">
    <!-- Start Pagination -->
    <div class="mt-4 justify-center flex items-center space-x-1">
      <button
        @click="prevPage()"
        :disabled="pagination.currentPage == 1"
        class="disabled:opacity-50 hover:bg-dark-purple-700 disabled:hover:bg-gray-300 disabled:hover:text-gray-500 px-4 py-2 text-gray-500 bg-gray-300 dark:bg-neutral-700 dark:text-white dark:hover:bg-dark-purple-700 rounded-md hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
          />
        </svg>
      </button>

      <button
        @click="firstPage()"
        v-if="pagination.currentPage > 2"
        class="px-4 py-2 text-gray-700 bg-gray-300 rounded-md hover:bg-dark-purple-700 dark:bg-neutral-700 dark:text-white dark:hover:bg-dark-purple-700 hover:text-white"
      >
        1
      </button>

      <button
        @click="prevPage()"
        v-if="pagination.currentPage > 1"
        class="px-4 py-2 text-gray-700 bg-gray-300 rounded-md hover:bg-dark-purple-700 dark:bg-neutral-700 dark:text-white dark:hover:bg-dark-purple-700 hover:text-white"
      >
        {{ pagination.currentPage - 1 }}
      </button>

      <button
        class="px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-dark-purple-700 dark:bg-dark-purple-800 hover:text-white"
      >
        {{ pagination.currentPage }}
      </button>

      <button
        v-if="pagination.currentPage < pagination.totalPages"
        @click="nextPage()"
        class="px-4 py-2 text-gray-700 bg-gray-300 rounded-md hover:bg-dark-purple-700 dark:bg-neutral-700 dark:text-white dark:hover:bg-dark-purple-700 hover:text-white"
      >
        {{ pagination.currentPage + 1 }}
      </button>

      <!-- <button
        @click="lastPage()"
        class="px-4 py-2 text-gray-700 bg-gray-300 rounded-md hover:bg-dark-purple-700 dark:bg-neutral-700 dark:text-white dark:hover:bg-dark-purple-700 hover:text-white"
      >
        {{ pagination.totalPages }}
      </button> -->

      <button
        @click="nextPage()"
        :disabled="pagination.currentPage == pagination.totalPages"
        class="disabled:opacity-50 disabled:hover:bg-gray-300 disabled:hover:text-gray-500 px-4 py-2 text-gray-500 bg-gray-300 rounded-md dark:text-white dark:hover:bg-dark-purple-700 dark:bg-neutral-700 hover:bg-dark-purple-700 hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </button>
    </div>
    <div class="justify-end flex items-end">
      <span class="mb-3 pr-2 text-xs dark:text-neutral-400"
        >Displaying {{ pagination.itemsPerPage }} of
        {{ pagination.totalItems }}</span
      >
      <select
        v-model="pagination.itemsPerPage"
        @change="changeLimit()"
        class="block w-auto px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
        aria-label="downloading"
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
    <!-- End Pagination -->
    <div
      class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1"
    >
      <div
        v-for="vod in vods"
        :key="vod.id"
        class="flex justify-center rounded-xl p-1"
      >
        <vod-card v-if="!vod.downloading" :vod="vod"></vod-card>
        <processing-vod-card v-else :vod="vod"></processing-vod-card>
      </div>
    </div>
  </div>
</template>

<script>
import VodCard from '~/components/Vod/VodCard.vue'
import ProcessingVodCard from '~/components/Vod/ProcessingVodCard.vue'
import Loading from '~/components/Loading.vue'
export default {
  loading: false,
  props: {
    channel: {
      type: Object,
      default: () => {},
    },
    apiURL: {
      type: String,
    },
  },
  components: {
    VodCard,
    Loading,
    ProcessingVodCard,
  },
  data() {
    return {
      vods: [],
      pagination: {
        totalItems: 1,
        itemsPerPage: 20,
        totalPages: 1,
        currentPage: 1,
      },
      options: [
        {
          text: '20',
          value: 20,
        },
        {
          text: '50',
          value: 50,
        },
        {
          text: '100',
          value: 100,
        },
      ],
    }
  },
  async mounted() {
    await this.getVods()
  },
  methods: {
    async getVods() {
      try {
        const vodsResponse = await this.$axios.get(
          `${this.$config.apiURL}/v1/vods?channel=${this.channel.id}&page=${this.pagination.currentPage}&limit=${this.pagination.itemsPerPage}`
        )
        this.vods = vodsResponse.data.items
        this.pagination = vodsResponse.data.meta
      } catch (error) {
        this.$toast.error('Error fetching VODs')
        console.log('Error fetching VODs', error)
      }
    },
    nextPage() {
      this.pagination.currentPage += 1
      this.getVods()
    },
    prevPage() {
      this.pagination.currentPage -= 1
      this.getVods()
    },
    firstPage() {
      this.pagination.currentPage = 1
      this.getVods()
    },
    lastPage() {
      this.pagination.currentPage = this.pagination.totalPages
      this.getVods()
    },
    changeLimit() {
      this.getVods()
    },
  },
}
</script>

<style></style>
