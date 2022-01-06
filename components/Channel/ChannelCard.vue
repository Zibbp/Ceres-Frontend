<template>
  <nuxt-link :to="'/channels/' + channel.login">
    <div
      class="dark:bg-dark-black-700 rounded-lg max-w-sm mb-5 hover:outline hover:outline-3 hover:outline-dark-purple-600"
    >
      <a href="#">
        <img
          v-show="imageLoaded"
          class="rounded-t-lg w-auto h-52"
          :src="$config.cdnURL + channel.profileImagePath"
          alt=""
          @load="imageLoadedMethod"
        />
        <div
          v-show="!imageLoaded"
          data-placeholder
          class="rounded-t-lg w-52 h-52 overflow-hidden relative bg-gray-200"
        ></div>
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
  data() {
    return {
      imageLoaded: false,
    }
  },
  methods: {
    imageLoadedMethod() {
      this.imageLoaded = true
    },
  },
}
</script>

<style>
[data-placeholder]::after {
  content: ' ';
  box-shadow: 0 0 50px 9px rgba(254, 254, 254);
  position: absolute;
  top: 0;
  left: -100%;
  height: 100%;
  animation: load 1s infinite;
}
@keyframes load {
  0% {
    left: -100%;
  }
  100% {
    left: 150%;
  }
}
</style>
