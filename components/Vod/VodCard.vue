<template>
  <div class="w-full">
    <div class="w-auto bg-dark-purple-600 relative group">
      <span
        class="absolute -top-2 left-0 border-0.25 border-dark-purple-600 transition-transform transform translate-y-2 ease duration-100"
      ></span>
      <nuxt-link :to="'/vods/' + vod.id">
        <div
          class="z-50 px-1 py-1 ml-1 mt-1 text-xs absolute text-white bg-vod-badge transition-transform transform ease duration-100"
        >
          {{ $dayjs.duration(vod.duration, 'seconds').format('HH:mm:ss') }}
        </div>
        <div
          :title="'Streamed on ' + vod.createdAt"
          class="z-50 px-1 py-1 ml-1 mt-1 right-1 bottom-1 text-xs absolute text-white bg-vod-badge transition-transform transform ease duration-100"
        >
          {{ $dayjs(vod.createdAt).format('MM/DD/YYYY') }}
        </div>
        <img
          :src="$config.cdnURL + vod.webThumbnailPath"
          alt=""
          class="relative z-10 w-auto h-full transition-transform transform ease duration-100"
        />
      </nuxt-link>

      <span
        class="absolute bottom-0 -right-2 border-0.25 border-dark-purple-600 transition-transform transform -translate-x-2 rotate-180 ease duration-100"
      ></span>
    </div>
    <div class="pt-2 pb-2 w-auto rounded-b-lg">
      <nuxt-link :to="'/vods/' + vod.id">
        <a>
          <h5
            class="text-gray-900 text-md font-bold tracking-tight dark:text-white truncate"
            :title="vod.title"
          >
            {{ vod.title }}
          </h5>
        </a>
        <!-- <p class="font-normal text-gray-700">
          {{ formattedCreatedAt }}
        </p> -->
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vod: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      duration: '',
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style>
.group span {
  border-top-color: transparent;
  border-left-color: transparent;
  border-width: 0.25rem;
}

.group:hover span:first-child {
  --tw-translate-y: 0px;
}

.group:hover img {
  --tw-translate-x: 0.5rem;
  --tw-translate-y: -0.5rem;
}

.group:hover div {
  --tw-translate-x: 0.5rem;
  --tw-translate-y: -0.5rem;
}

.group:hover span:last-child {
  --tw-translate-x: 0px;
}
.bg-vod-badge {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
