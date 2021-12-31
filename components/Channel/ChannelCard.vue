<template>
  <nuxt-link :to="'/channels/' + channel.login">
    <div
      class="bg-white dark:bg-dark-black-700 shadow-md border border-gray-200 dark:border-dark-black-600 rounded-lg max-w-sm mb-5"
    >
      <a href="#">
        <img
          class="rounded-t-lg w-52"
          :src="$config.cdnURL + channel.profileImagePath"
          alt=""
        />
      </a>
      <div class="pr-5 pl-5 pt-2 pb-2">
        <a href="#">
          <h5
            class="text-gray-900 dark:text-gray-300 font-bold text-center text-2xl tracking-tight"
          >
            {{ channel.displayName }}
          </h5>
        </a>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    channel: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
