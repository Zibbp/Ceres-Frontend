<template>
  <div class="w-full">
    <div
      class="w-auto bg-dark-purple-600 relative group brightness-75 pointer-events-none"
    >
      <span
        class="absolute -top-2 left-0 border-0.25 border-dark-purple-600 transition-transform transform translate-y-2 ease duration-100"
      ></span>
      <div
        class="px-1 py-1 left-14 z-20 top-12 -ml-5 text-2xl flex items-center absolute text-white bg-vod-downloading"
      >
        <svg
          class="animate-spin h-5 w-5 text-white mr-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        PROCESSING
      </div>
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

      <span
        class="absolute bottom-0 -right-2 border-0.25 border-dark-purple-600 transition-transform transform -translate-x-2 rotate-180 ease duration-100"
      ></span>
    </div>
    <div class="pt-2 pb-2 w-auto rounded-b-lg">
      <a>
        <h5
          class="text-gray-900 text-md font-medium tracking-tight dark:text-white truncate"
          :title="vod.title"
        >
          {{ vod.title }}
        </h5>
      </a>
      <!-- <p class="font-normal text-gray-700">
          {{ formattedCreatedAt }}
        </p> -->
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
.bg-vod-downloading {
  background-color: rgba(255, 0, 0, 0.6);
}
</style>
