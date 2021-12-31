<template>
  <div>
    <div class="grid grid-cols-12">
      <div
        class="col-span-10 bg-slate-500"
        :class="[
          [vod.chatVideoPath ? 'col-span-10' : 'col-span-12'],
          $store.state.expand == false
            ? 'player-height'
            : 'player-height-expand',
          [$store.state.showChat == true ? 'col-span-10' : 'col-span-12'],
        ]"
      >
        <video-player :videoUrl="$config.cdnURL + vod.videoPath"></video-player>
      </div>
      <div
        v-show="$store.state.showChat"
        v-if="vod.chatVideoPath"
        class="col-span-2 w-full"
      >
        <chat-player
          :chatUrl="$config.cdnURL + vod.chatVideoPath"
        ></chat-player>
      </div>
    </div>
    <div class="h-20">
      <vod-title :vod="vod"></vod-title>
    </div>
  </div>
</template>

<script>
import VodTitle from '~/components/Vod/VodTitle.vue'
import VideoPlayer from '~/components/Vod/Players/VideoPlayer.vue'
import ChatPlayer from '~/components/Vod/Players/ChatPlayer.vue'
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
  components: {
    VodTitle,
    VideoPlayer,
    ChatPlayer,
  },
}
</script>

<style>
body::-webkit-scrollbar {
  width: 10px;
  background-color: #555555;
}
body::-webkit-scrollbar-track {
  background-color: #555555;
}
body::-webkit-scrollbar-thumb {
  background-color: #000000;
  border: 0px solid #555555;
}
* {
  scrollbar-color: #000000 #1f1f1f;
  scrollbar-width: thin;
}
.player-height {
  min-height: calc(100vh - 9rem);
  max-height: calc(100vh - 9rem);
}
.player-height-expand {
  min-height: 100vh;
  max-height: 100vh;
}
</style>
