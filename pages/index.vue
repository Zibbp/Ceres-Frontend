<template>
  <div>
    <section class="pt-12">
      <div class="px-12 mx-auto max-w-7xl">
        <div
          class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center"
        >
          <h1
            class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight"
          >
            <span>Archive Twitch</span>
            <span
              class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline"
              >Streams</span
            >
            <span>and</span>
            <span
              class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline"
              >VODs</span
            >
          </h1>
          <p class="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
            Download your favorite Twitch VODs and streams with a rendered chat
            in a single click.
          </p>
          <div class="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <nuxt-link
              to="/archive"
              class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-400 rounded-2xl sm:w-auto sm:mb-0"
            >
              Get Started
              <svg
                class="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </nuxt-link>
            <a
              href="https://github.com/zibbp/Ceres"
              target="_blank"
              class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0"
            >
              Learn More
              <svg
                class="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="w-full mx-auto mt-10 text-center md:w-10/12">
          <div class="relative z-0 w-full mt-8">
            <div class="relative overflow-hidden shadow-2xl">
              <div
                class="flex items-center flex-none px-4 bg-purple-800 rounded-b-none h-11 rounded-xl"
              >
                <div class="flex space-x-1.5">
                  <div class="w-3 h-3 border-2 border-white rounded-full"></div>
                  <div class="w-3 h-3 border-2 border-white rounded-full"></div>
                  <div class="w-3 h-3 border-2 border-white rounded-full"></div>
                </div>
              </div>
              <img src="/images/landing_vod_preview.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="grid gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-3">
        <div class="px-12 text-center sm:px-0">
          <div
            class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12"
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
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
          </div>
          <h6
            class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase dark:text-gray-100"
          >
            Chat
          </h6>
          <div class="mb-2 text-gray-700 dark:text-gray-200">
            Each archive comes with a rendered chat.
          </div>
        </div>
        <div class="px-12 text-center sm:px-0">
          <div
            class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h6
            class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase dark:text-gray-100"
          >
            Live
          </h6>
          <div class="mb-2 text-gray-700 dark:text-gray-200">
            Archive live streams and VODs.
          </div>
        </div>
        <div class="px-12 text-center sm:px-0">
          <div
            class="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12"
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
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
              />
            </svg>
          </div>
          <h6
            class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase dark:text-gray-100"
          >
            Your Data
          </h6>
          <div class="mb-2 text-gray-700 dark:text-gray-200">
            All files are downloaded locally in a way that is accessible without
            Ceres.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
