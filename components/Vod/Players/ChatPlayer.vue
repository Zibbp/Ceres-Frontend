<template>
  <div class="player plyr flex items-center justify-center">
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
        controls: [],
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
    this.$nuxt.$on('seek', (time) => {
      this.player.currentTime = time
    })
  },
}
</script>

<style>
.plyr {
  width: 100%;
  height: 100% !important;
}
.plyr-full-height {
  height: 100vh !important;
  width: 100%;
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
