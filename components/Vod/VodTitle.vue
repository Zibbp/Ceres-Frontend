<template>
  <div class="px-5 flex items-center sm:flex-row flex-col pt-4">
    <a
      class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
    >
      <img
        :src="$config.cdnURL + vod.channel.profileImagePath"
        :alt="vod.channel.displayName"
        class="h-10 w-10 rounded-full"
      />
      <span class="ml-3 text-xl dark:text-gray-300">{{
        vod.channel.displayName
      }}</span>
    </a>
    <p
      class="text-lg title-front font-medium text-gray-900 dark:text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
    >
      {{ vod.title }}
    </p>
    <span
      class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
    >
      <div
        class="flex mr-4 font-bold dark:text-gray-300"
        :title="vod.viewCount + ' views'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        {{ vod.viewCount.toLocaleString() }}
      </div>
      <div
        class="flex font-bold mr-6 dark:text-gray-300"
        :title="'Streamed on ' + vod.createdAt"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        {{ $dayjs(vod.createdAt).format('MM/DD/YYYY') }}
      </div>
      <!-- Player controls -->
      <div class="flex">
        <div class="mr-2">
          <button
            v-if="!$store.state.expand"
            @click="toggleExpand()"
            title="Fullscreen"
            class="hover:bg-gray-400 text-gray-800 dark:text-gray-300 font-bold py-1 px-2 rounded inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="expand-alt"
              class="h-5 w-5"
              stroke="#000000"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M212.686 315.314L120 408l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C10.697 480 0 469.255 0 456V344c0-21.382 25.803-32.09 40.922-16.971L72 360l92.686-92.686c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.249 6.248 6.249 16.378 0 22.627zm22.628-118.628L328 104l-32.922-31.029C279.958 57.851 290.666 32 312.048 32h112C437.303 32 448 42.745 448 56v112c0 21.382-25.803 32.09-40.922 16.971L376 152l-92.686 92.686c-6.248 6.248-16.379 6.248-22.627 0l-25.373-25.373c-6.249-6.248-6.249-16.378 0-22.627z"
              ></path>
            </svg>
          </button>
          <button
            v-else
            @click="toggleExpand()"
            title="Fullscreen"
            class="hover:bg-gray-400 text-gray-800 dark:text-gray-300 font-bold py-1 px-2 rounded inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="compress-alt"
              class="h-5 w-5"
              stroke="#000000"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M4.686 427.314L104 328l-32.922-31.029C55.958 281.851 66.666 256 88.048 256h112C213.303 256 224 266.745 224 280v112c0 21.382-25.803 32.09-40.922 16.971L152 376l-99.314 99.314c-6.248 6.248-16.379 6.248-22.627 0L4.686 449.941c-6.248-6.248-6.248-16.379 0-22.627zM443.314 84.686L344 184l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C234.697 256 224 245.255 224 232V120c0-21.382 25.803-32.09 40.922-16.971L296 136l99.314-99.314c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.248 6.248 6.248 16.379 0 22.627z"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <!-- Hide button -->
          <button
            v-if="$store.state.showChat"
            @click="toggleChat()"
            title="Hide chat"
            class="hover:bg-gray-400 text-gray-800 dark:text-gray-300 py-1 font-bold px-2 rounded inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-circle-right"
              class="h-5 w-6"
              stroke="#000000"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"
              ></path>
            </svg>
          </button>
          <!-- Show button -->
          <button
            v-else
            @click="toggleChat()"
            title="Show chat"
            class="hover:bg-gray-400 text-gray-800 dark:text-gray-300 font-bold py-1 px-2 rounded inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-circle-left"
              class="h-5 w-6"
              stroke="#000000"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </span>
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
  methods: {
    toggleChat() {
      this.$store.commit('toggleChat')
    },
    toggleExpand() {
      this.$store.commit('toggleExpand')
    },
  },
}
</script>

<style></style>
