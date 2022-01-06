<template>
  <nuxt-link :to="'/channels/' + channel.login">
    <div
      class="dark:bg-dark-black-700 rounded-lg max-w-sm mb-5 hover:outline hover:outline-3 hover:outline-dark-purple-600"
    >
      <a href="#">
        <img
          class="rounded-t-lg w-52 channel-card-height"
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

<style>
.channel-card-height {
  min-height: 12.6rem;
  height: 12.6rem;
}
</style>
