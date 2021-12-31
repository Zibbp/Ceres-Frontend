<template>
  <vue-plyr
    ref="vodChatPlayer"
    class="player flex items-center justify-center"
    :options="playerOptions"
  >
    <video controls crossorigin playsinline>
      <source :src="chatUrl" type="video/mp4" />
    </video>
  </vue-plyr>
</template>

<script>
export default {
  props: {
    chatUrl: {
      type: String,
    },
  },
  data() {
    return {
      player: null,
      playerOptions: {
        clickToPlay: false,
        autoplay: false,
        controls: [],
        settings: [],
      },
    }
  },
  mounted() {
    this.player = this.$refs.vodChatPlayer.player
    this.$nuxt.$on('play', () => {
      this.player.play()
    })
    this.$nuxt.$on('pause', () => {
      this.player.pause()
    })
    this.$nuxt.$on('seek', (time, videoDuration) => {
      const difference = this.player.duration - videoDuration
      this.player.currentTime = time + difference
    })
  },
}
</script>

<style scoped>
.plyr {
  width: 100%;
  height: calc(100vh - 9rem) !important;
}
.plyr video {
  bottom: 0;
  position: absolute;
  display: block;
  height: auto !important;
  width: 100%;
}
.plyr__video-wrapper {
  align-items: center !important;
  justify-content: center !important;
  display: flex !important;
}
</style>
