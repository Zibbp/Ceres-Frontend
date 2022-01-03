<template>
  <div class="bg-white rounded shadow-lg w-10/12 md:w-2/3">
    <!-- modal header -->
    <div class="border-b px-4 py-2 flex justify-between items-center">
      <h3 class="text-lg">
        <span class="font-semibold">Log: </span>{{ log }}.log
      </h3>
      <button @click="closeModal()" class="text-black close-modal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <!-- modal body -->
    <div class="p-3 h-96 log-window bg-black text-gray-200">
      <ul>
        <li v-for="(log, index) in logs" :key="index">
          {{ log }}
        </li>
      </ul>
    </div>
    <div class="flex justify-end items-center w-100 border-t p-3">
      <span class="mr-2">Refreshes every 5 seconds.</span>
      <button
        @click="closeModal()"
        class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    log: String,
  },
  data() {
    return {
      logs: [],
      timer: '',
    }
  },
  async mounted() {
    this.fetchLog()
    this.timer = setInterval(this.fetchLog, 5000)
  },
  methods: {
    async fetchLog() {
      try {
        const logReq = await this.$axios.get(
          `${this.$config.apiURL}/v1/queues/logs/${this.log}`
        )
        this.logs = logReq.data.reverse()
      } catch (error) {
        console.log(error)
        this.$toast.error('Error fetching log')
      }
    },
    closeModal() {
      clearInterval(this.timer)
      this.$nuxt.$emit('closeModal')
    },
    cancelAutoUpdate() {
      clearInterval(this.timer)
    },
    destroyed() {
      clearInterval(this.timer)
    },
    unmounted() {
      clearInterval(this.timer)
    },
  },
}
</script>

<style>
.log-window {
  overflow-y: scroll;
}
</style>
