<template>
  <div class="container mx-auto mt-4">
    <section
      class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-neutral-800"
    >
      <h2
        class="text-lg font-semibold text-gray-700 capitalize dark:text-white"
      >
        Manually Create Channel
      </h2>

      <form @submit.prevent="createChannel">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="username"
              >ID</label
            >
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <div
                  @click="randomId()"
                  class="p-1 focus:outline-none focus:shadow-outline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 fill-neutral-900 dark:fill-slate-50"
                    viewBox="0 0 640 512"
                  >
                    <path
                      d="M447.1 224c0-12.56-4.781-25.13-14.35-34.76l-174.9-174.9C249.1 4.786 236.5 0 223.1 0C211.4 0 198.9 4.786 189.2 14.35L14.35 189.2C4.783 198.9-.0011 211.4-.0011 223.1c0 12.56 4.785 25.17 14.35 34.8l174.9 174.9c9.625 9.562 22.19 14.35 34.75 14.35s25.13-4.783 34.75-14.35l174.9-174.9C443.2 249.1 447.1 236.6 447.1 224zM96 248c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1S120 210.8 120 224S109.3 248 96 248zM224 376c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S237.3 376 224 376zM224 248c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1S248 210.8 248 224S237.3 248 224 248zM224 120c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S237.3 120 224 120zM352 248c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S365.3 248 352 248zM591.1 192l-118.7 0c4.418 10.27 6.604 21.25 6.604 32.23c0 20.7-7.865 41.38-23.63 57.14l-136.2 136.2v46.37C320 490.5 341.5 512 368 512h223.1c26.5 0 47.1-21.5 47.1-47.1V240C639.1 213.5 618.5 192 591.1 192zM479.1 376c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S493.2 376 479.1 376z"
                    />
                  </svg>
                </div>
              </span>
              <input
                v-model="channel.id"
                required
                id="id"
                type="number"
                class="block w-full px-4 pl-10 py-2 mt-2 dark:bg-neutral-800 text-gray-700 border border-gray-300 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Login (lowercase channel name)</label
            >
            <input
              v-model="channel.login"
              required
              id="title"
              type="text"
              placeholder="ceres"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Display Name (Uppercase)</label
            >
            <input
              v-model="channel.displayName"
              required
              id="title"
              type="text"
              placeholder="Ceres"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
              >Channel Image Path</label
            >
            <input
              v-model="channel.profileImagePath"
              disabled
              id="title"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-neutral-300 border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-gray-300 dark:border-gray-600 focus:border-dark-purple-500 ring-dark-purple-600 dark:focus:border-dark-purple-600 focus:outline-none focus:ring"
            />
          </div>

          <p>
            Ensure a channel image is located at the "channel image path"
            directory.
          </p>

          <div class="flex justify-end mt-6">
            <button
              type="submit"
              class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      channel: {
        id: '',
        login: '',
        displayName: '',
        profileImagePath: '',
      },
    }
  },
  watch: {
    'channel.login'() {
      this.channel.profileImagePath = `/${this.channel.login}/${this.channel.login}_profile.png`
    },
  },
  async mounted() {},
  methods: {
    randomId() {
      this.channel.id = Math.floor(Math.random() * 1000000000).toString()
    },
    async createChannel() {
      try {
        await this.$axios.post(
          `${this.$config.apiURL}/v1/channels/manual`,
          this.channel
        )
        this.$toast.success('Channel created')
        this.$router.push('/admin/channels')
      } catch (error) {
        console.log('Error creating channel', error)
        this.$toast.error('Error creating channel')
      }
    },
  },
}
</script>

<style></style>
