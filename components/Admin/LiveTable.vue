<template>
  <vue-good-table
    :theme="$colorMode.preference === 'dark' ? 'nocturnal' : ''"
    :columns="columns"
    :rows="rows"
    :search-options="{
      enabled: true,
      skipDiacritics: true,
    }"
    :sort-options="{
      enabled: true,
    }"
    :pagination-options="{
      enabled: true,
    }"
    @on-cell-click="onCellClick"
    class="mt-4"
  >
    <template slot="table-row" slot-scope="props">
      <span v-if="props.column.field == 'id'">
        {{ props.row.id }}
      </span>
      <span v-if="props.column.field == 'live'">
        {{ props.row.live }}
      </span>
      <span v-if="props.column.field == 'lastLive'">
        {{ $dayjs(props.row.lastLive).format('MM/DD/YYYY HH:mm') }}
      </span>
      <span v-if="props.column.field == 'channel.displayName'">
        {{ props.row.channel.displayName }}
      </span>
      <span v-if="props.column.field == 'channel.id'">
        {{ props.row.channel.id }}
      </span>
      <span v-if="props.column.field == 'edit'">
        <button
          class="px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </button>
      </span>
      <span v-else-if="props.column.field == 'delete'">
        <button
          class="px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </span>
    </template>
  </vue-good-table>
</template>

<script>
export default {
  data() {
    return {
      vods: [],
      columns: [
        {
          label: 'ID',
          field: 'id',
        },
        {
          label: 'Is Live',
          field: 'live',
        },
        {
          label: 'Last Live',
          field: 'lastLive',
          type: 'date',
          dateInputFormat: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
          dateOutputFormat: 'MM/dd/yy',
        },
        {
          label: 'Channel',
          field: 'channel.displayName',
        },
        {
          label: 'Channel ID',
          field: 'channel.id',
        },
        {
          label: '',
          field: 'edit',
        },
        {
          label: '',
          field: 'delete',
        },
      ],
      rows: [],
    }
  },
  async mounted() {
    await this.fetchLiveWatchedChannels()
  },
  methods: {
    async fetchLiveWatchedChannels() {
      try {
        const channels = await this.$axios.get(`${this.$config.apiURL}/v1/live`)
        this.rows = channels.data
      } catch (error) {
        this.$toast.error('Error fetching live channels to watch')
      }
    },
    async onCellClick(params) {
      if (params.column.field === 'edit') {
        this.$router.push({ path: `/admin/live/${params.row.id}` })
      }
      if (params.column.field === 'delete') {
        if (confirm(`Remove channel from live watch list?`)) {
          try {
            await this.$axios.delete(
              `${this.$config.apiURL}/v1/live/${params.row.channel.id}`
            )
            this.$toast.success('Channel removed from live watch list.')
            this.fetchLiveWatchedChannels()
          } catch (error) {
            console.log(error)
            this.$toast.error('Error removing channel from live watch list.')
          }
        }
      }
    },
  },
}
</script>

<style></style>
