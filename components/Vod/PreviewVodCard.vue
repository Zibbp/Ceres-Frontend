<template>
  <div class="relative">
    <span class="px-1 py-1 ml-1 mt-1 text-xs absolute text-white bg-vod-badge">
      {{ $dayjs.duration(duration, 'seconds').format('HH:mm:ss') }}
    </span>
    <span
      class="px-1 py-1 ml-1 mt-1 right-1 bottom-8 text-xs absolute text-white bg-vod-badge"
    >
      {{ $dayjs(vod.created_at).format('MM/DD/YYYY') }}
    </span>
    <img :src="thumbnail" alt="" />
    <h5
      class="mt-1 text-gray-900 text-md font-bold tracking-tight dark:text-white truncate"
      :title="vod.title"
    >
      {{ vod.title }}
    </h5>
  </div>
</template>

<script>
export default {
  props: {
    vod: {
      type: Object,
    },
  },
  data() {
    return {
      thumbnail: '',
      duration: '',
    }
  },
  mounted() {
    //   Set thumbnail resolution
    this.thumbnail = this.vod.thumbnail_url
      .replace('%{width}', '640')
      .replace('%{height}', '360')
    //   Parse duration of vod
    const hms = this.vod.duration
      .split('h')
      .join(':')
      .split('m')
      .join(':')
      .split('s')
    this.duration = this.hmsToSeconds(hms[0])
  },
  methods: {
    hmsToSeconds(str) {
      // eslint-disable-next-line no-var
      var p = str.split(':'),
        s = 0,
        m = 1

      while (p.length > 0) {
        s += m * parseInt(p.pop(), 10)
        m *= 60
      }

      return s
    },
  },
}
</script>

<style>
.bg-vod-badge {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
