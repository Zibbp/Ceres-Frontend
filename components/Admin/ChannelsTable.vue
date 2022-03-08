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
      <span v-else>
        {{ props.formattedRow[props.column.field] }}
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
          label: 'Login',
          field: 'login',
        },
        {
          label: 'Display Name',
          field: 'displayName',
        },
        {
          label: '',
          field: 'delete',
        },
      ],
      rows: [
        {
          id: '123',
          login: 'ceres',
          displayName: 'Ceres',
        },
      ],
    }
  },
  async mounted() {
    await this.fetchChannels()
  },
  methods: {
    async fetchChannels() {
      try {
        const channels = await this.$axios.get(
          `${this.$config.apiURL}/v1/channels`
        )
        this.rows = channels.data
      } catch (error) {
        this.$toast.error('Error fetching channels')
      }
    },
    async onCellClick(params) {
      if (params.column.field === 'delete') {
        if (
          confirm(
            `Deleting a channel will delete the Ceres database rows for ${params.row.username} along with their vods. It ! WILL NOT ! delete the vod files saved locally. Are you sure you want to delete this channel's rows?`
          )
        ) {
          try {
            await this.$axios.delete(
              `${this.$config.apiURL}/v1/channels/${params.row.id}`
            )
            this.$toast.success('Channel and channel vods deleted')
            this.fetchChannels()
          } catch (error) {
            console.log(error)
            this.$toast.error('Error deleting channel')
          }
        }
      }
    },
  },
}
</script>

<style></style>
