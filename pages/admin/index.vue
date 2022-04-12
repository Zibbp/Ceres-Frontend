<template>
  <div class="container mx-auto">
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 lg:w-1/3">
            <nuxt-link to="/admin/vods"
              ><div
                class="bg-gray-100 dark:bg-neutral-800 bg-opacity-75 px-8 pt-8 pb-8 rounded-lg overflow-hidden text-center relative"
              >
                <h1
                  class="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-gray-100 mb-3"
                >
                  Manage VODs
                </h1>
                <a class="text-indigo-500 inline-flex items-center"
                  >VODs
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a></div
            ></nuxt-link>
          </div>
          <div class="p-4 lg:w-1/3">
            <nuxt-link to="/admin/channels">
              <div
                class="bg-gray-100 dark:bg-neutral-800 bg-opacity-75 px-8 pt-8 pb-8 rounded-lg overflow-hidden text-center relative"
              >
                <h1
                  class="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-gray-100 mb-3"
                >
                  Manage Channels
                </h1>
                <a class="text-indigo-500 inline-flex items-center"
                  >Channels
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a></div
            ></nuxt-link>
          </div>
          <div class="p-4 lg:w-1/3">
            <nuxt-link to="/admin/queue"
              ><div
                class="bg-gray-100 dark:bg-neutral-800 bg-opacity-75 px-8 pt-8 pb-8 rounded-lg overflow-hidden text-center relative"
              >
                <h1
                  class="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-gray-100 mb-3"
                >
                  Manage Queue Items
                </h1>
                <a class="text-indigo-500 inline-flex items-center"
                  >Queue
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a></div
            ></nuxt-link>
          </div>
          <div class="p-4 lg:w-1/3">
            <nuxt-link to="/admin/users">
              <div
                class="bg-gray-100 dark:bg-neutral-800 bg-opacity-75 px-8 pt-8 pb-8 rounded-lg overflow-hidden text-center relative"
              >
                <h1
                  class="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-gray-100 mb-3"
                >
                  Manage Users
                </h1>
                <a class="text-indigo-500 inline-flex items-center"
                  >Users
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a></div
            ></nuxt-link>
          </div>
          <div class="p-4 lg:w-1/3">
            <nuxt-link to="/admin/live">
              <div
                class="bg-gray-100 dark:bg-neutral-800 bg-opacity-75 px-8 pt-8 pb-8 rounded-lg overflow-hidden text-center relative"
              >
                <h1
                  class="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-gray-100 mb-3"
                >
                  Manage Live Channels
                </h1>
                <a class="text-indigo-500 inline-flex items-center"
                  >Live
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a></div
            ></nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  middleware: ['auth', 'isadmin'],
}
</script>

<style></style>
