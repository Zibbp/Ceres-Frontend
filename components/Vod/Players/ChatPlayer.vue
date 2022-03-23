<template>
  <div class="player flex items-center justify-center">
    <video class="player" ref="chatPlayer" id="chatPlayer">
      <source :src="chatUrl" type="video/mp4" />
    </video>
  </div>
</template>

<script>
import Plyr from 'plyr'
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
        controls: ['play-large', 'play', 'progress', 'current-time'],
        settings: [],
      },
    }
  },
  mounted() {
    this.player = new Plyr(this.$refs.chatPlayer, this.playerOptions)

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

<style>
.plyr {
  width: 100%;
  height: calc(100vh - 9rem) !important;
}
</style>

<style scoped>
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
