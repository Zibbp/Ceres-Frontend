<template>
  <div class="container mx-auto">
    <div class="flow-root mt-2">
      <h1 class="text-3xl font-bold float-left dark:text-gray-200">
        Channel Management
      </h1>

      <p class="float-right">
        <nuxt-link to="/admin/channels/create">
          <button
            title="Manually add a new channel"
            type="button"
            class="py-2 px-2 flex justify-center items-center bg-dark-purple-600 hover:bg-dark-purple-700 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md w-10 h-10 rounded-lg"
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
                d="M12 4v16m8-8H4"
              />
            </svg></button
        ></nuxt-link>
      </p>
    </div>
    <channels-table />
  </div>
</template>

<script>
import ChannelsTable from '~/components/Admin/ChannelsTable.vue'
export default {
  middleware: ['auth', 'isadmin'],
  components: {
    ChannelsTable,
  },
}
</script>

<style></style>
