<template>
  <div>
    <div v-if="err">failed to load</div>
    <div v-if="data === undefined && !err">
      <loading></loading>
    </div>
    <div v-if="data">
      <div
        v-if="showModal"
        class="modal h-screen w-full fixed z-10 left-0 top-0 flex justify-center items-center bg-black bg-opacity-50"
      >
        <queue-modal v-if="showModal" :log="log" />
      </div>
      <vue-good-table
        :theme="$colorMode.preference === 'dark' ? 'nocturnal' : ''"
        :columns="columns"
        :rows="data"
        class="mt-4"
      >
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'vodId'">
            {{ props.row.vodId }}
          </span>
          <span v-if="props.column.field == 'liveArchive'">
            <span v-if="props.row.liveArchive == false">❌</span>
            <span v-if="props.row.liveArchive == true">✅</span>
          </span>
          <span v-if="props.column.field == 'videoDone'">
            <span class="flex" v-if="props.row.videoDone == false">
              <button
                @click="showLogs(props.row.vodId, 'video_download')"
                class="px-2 py-2 leading-5 flex text-white text-sm transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                type="submit"
              >
                <svg
                  class="animate-spin -ml-1 mr-1 mt-0.5 h-4 w-4 text-white"
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
                Log
              </button></span
            >
            <span v-if="props.row.videoDone == true">✅</span>
          </span>
          <span v-if="props.column.field == 'chatDownloadDone'">
            <span v-if="props.row.chatDownloadDone == false">
              <button
                @click="showLogs(props.row.vodId, 'chat_download')"
                class="px-2 py-2 leading-5 flex text-white text-sm transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                type="submit"
              >
                <svg
                  class="animate-spin -ml-1 mr-1 mt-0.5 h-4 w-4 text-white"
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
                Log
              </button></span
            >
            <span v-if="props.row.chatDownloadDone == true">✅</span>
          </span>
          <span v-if="props.column.field == 'chatRenderDone'">
            <span v-if="props.row.chatRenderDone == false">
              <button
                @click="showLogs(props.row.vodId, 'chat_render')"
                class="px-2 py-2 leading-5 flex text-white text-sm transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                type="submit"
              >
                <svg
                  class="animate-spin -ml-1 mr-1 mt-0.5 h-4 w-4 text-white"
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
                Log
              </button></span
            >
            <span v-if="props.row.chatRenderDone == true">✅</span>
          </span>
          <span v-if="props.column.field == 'createdAt'">
            {{ $dayjs(props.row.createdAt).format('MM/DD/YYYY') }}
          </span>
          <span v-if="props.column.field == 'user.username'">
            {{ props.row.user.username }}
          </span>
          <!-- <span v-else>
            {{ props.formattedRow[props.column.field] }}
          </span> -->
        </template>
      </vue-good-table>
    </div>
  </div>
</template>

<script>
import useSWRV from 'swrv'
import Loading from '~/components/Loading.vue'
import QueueModal from '~/components/Queue/QueueModal.vue'

const fetcher = function (url) {
  return fetch(url).then((r) => r.json())
}

export default {
  setup(props, context) {
    const { data, error: err } = useSWRV(
      `${context.root.$config.apiURL}/v1/queues`,
      fetcher
    )
    return {
      data,
      err,
    }
  },
  components: {
    Loading,
    QueueModal,
  },
  middleware: 'auth',
  data() {
    return {
      showModal: false,
      log: '',
      columns: [
        {
          label: 'VOD Id',
          field: 'vodId',
        },
        {
          label: 'Live Archive',
          field: 'liveArchive',
        },
        {
          label: 'Video Download Complete',
          field: 'videoDone',
        },
        {
          label: 'Chat Download Complete',
          field: 'chatDownloadDone',
        },
        {
          label: 'Chat Render Complete',
          field: 'chatRenderDone',
        },
        {
          label: 'Created At',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
          dateOutputFormat: 'MM/dd/yy',
        },
        {
          label: 'User',
          field: 'user.username',
        },
      ],
      rows: [
        {
          vodId: 1233635780,
          liveArchive: false,
          videoDone: true,
          chatDownloadDone: true,
          chatRenderDone: false,
          createdAt: '2021-12-27T20:24:22.002Z',
          user: { username: 'zibbp' },
        },
      ],
    }
  },
  mounted() {
    this.$nuxt.$on('closeModal', () => {
      this.showModal = false
    })
  },
  methods: {
    showLogs(id, name) {
      this.log = `${id}_${name}`
      this.showModal = true
    },
  },
}
</script>

<style>
.vgt-table.nocturnal {
  background-color: #171717 !important;
  border: 0 !important;
}
</style>
