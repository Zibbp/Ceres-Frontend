<template>
  <div>
    <div
      class="flex flex-col items-center justify-center px-4 pt-4 mx-auto sm:max-w-xl md:max-w-full lg:pt-20 md:px-0"
    >
      <div class="flex flex-col items-center max-w-2xl md:px-8">
        <div
          class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
        >
          <h2
            class="max-w-lg mb-6 font-sans text-5xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:mx-auto"
          >
            Easily Archive Twitch VODs
          </h2>
          <p class="text-base text-gray-700 md:text-lg dark:text-gray-200">
            Download your favorite Twitch VODs with a rendered chat in a single
            click.
          </p>
        </div>
      </div>
      <img
        src="/images/landing_demo.jpg"
        class="w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-lg"
        alt=""
      />
    </div>
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-2">
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
            Rendered video of the VOD chat.
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
            All files are downloaded locally.
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
