<template>
  <vue-plyr ref="vodVideoPlayer" class="player" :options="playerOptions">
    <video controls crossorigin playsinline>
      <source :src="videoUrl" :type="type" />
    </video>
  </vue-plyr>
</template>

<script>
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

    this.player = this.$refs.vodVideoPlayer.player
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
  width: 100%;
  height: 100% !important;
}
.plyr video {
  height: 100% !important;
  width: 100%;
}
.plyr .video {
  height: 100% !important;
  width: 100%;
}
</style>
