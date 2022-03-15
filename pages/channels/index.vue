<template>
  <div>
    <div v-if="err">failed to load</div>
    <div v-if="data === undefined && !err">
      <loading></loading>
    </div>
    <div v-if="data">
      <div class="container mx-auto">
        <div
          class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2"
        >
          <div
            v-for="channel in data"
            :key="channel.id"
            class="flex justify-center rounded-xl px-6 py-4"
          >
            <channel-card :channel="channel"></channel-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useSWRV from 'swrv'
import ChannelCard from '~/components/Channel/ChannelCard.vue'
import Loading from '~/components/Loading.vue'

const fetcher = function (url) {
  return fetch(url).then((r) => r.json())
}

export default {
  setup(props, context) {
    const { data, error: err } = useSWRV(
      `${context.root.$config.apiURL}/v1/channels`,
      fetcher
    )

    return {
      data,
      err,
    }
  },
  head() {
    return {
      title: `Ceres - Channels`,
      meta: [
        {
          hid: `ceres-channels`,
          name: `ceres-channels`,
          content: `Ceres channels`,
        },
      ],
    }
  },
  components: {
    ChannelCard,
    Loading,
  },
  data() {
    return {}
  },
}
</script>
