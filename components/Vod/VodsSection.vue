<template>
  <div>
    <div v-if="err">failed to load</div>
    <div v-if="items === undefined && !err">
      <loading></loading>
    </div>
    <div v-if="items">
      <div class="container mx-auto">
        <div
          class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1"
        >
          <div
            v-for="vod in items.items"
            :key="vod.id"
            class="flex justify-center rounded-xl p-1"
          >
            <vod-card v-if="!vod.downloading" :vod="vod"></vod-card>
            <processing-vod-card v-else :vod="vod"></processing-vod-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useSWRV from 'swrv'
import VodCard from '~/components/Vod/VodCard.vue'
import ProcessingVodCard from '~/components/Vod/ProcessingVodCard.vue'
import Loading from '~/components/Loading.vue'

const fetcher = function (url) {
  return fetch(url).then((r) => r.json())
}

export default {
  setup(props) {
    const { data: items, error: err } = useSWRV(
      `${props.apiURL}/v1/vods?channel=${props.channel.id}`,
      fetcher
    )
    return {
      items,
      err,
    }
  },
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
}
</script>
