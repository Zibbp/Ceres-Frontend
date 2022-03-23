<template>
  <div class="player">
    <video class="player" ref="videoPlayer" id="videoPlayer">
      <source :src="videoUrl" :type="type" />
    </video>
  </div>
</template>

<script>
import Plyr from 'plyr'
export default {
  props: {
    videoUrl: {
      type: String,
    },
  },
  data() {
    return {
      type: 'video/mp4',
      player: null,
      playerOptions: {
        clickToPlay: true,
        autoplay: false,
        controls: [
          'play-large',
          'play',
          'progress',
          'current-time',
          'mute',
          'volume',
          'captions',
          'settings',
          'pip',
          'airplay',
          'download',
          'fullscreen',
        ],
        settings: ['captions', 'quality', 'speed', 'loop'],
      },
    }
  },
  mounted() {
    if (this.videoUrl) {
      const videoExt = this.videoUrl.substr(-4)
      if (videoExt == '.mp4') {
        this.type = 'video/mp4'
      }
      if (videoExt == '.mkv') {
        this.type = 'video/webm'
      }
    }

    this.player = new Plyr(this.$refs.videoPlayer, this.playerOptions)

    this.player.on('playing', (event) => {
      this.$nuxt.$emit('play')
    })
    this.player.on('pause', (event) => {
      this.$nuxt.$emit('pause')
    })
    // Send seek time to chat player
    this.player.on('seeking', (event) => {
      this.$nuxt.$emit('seek', this.player.currentTime, this.player.duration)
    })
  },
}
</script>

<style scoped>
.plyr__poster {
  background-repeat: repeat;
}
.player {
  width: 100% !important;
  height: calc(100vh - 9rem) !important;
}
.plyr video {
  height: calc(100vh - 9rem) !important;
  width: 100% !important;
}
.plyr .video {
  height: calc(100vh - 9rem) !important;
  width: 100% !important;
}
</style>
