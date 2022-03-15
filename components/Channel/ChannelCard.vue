<template>
  <nuxt-link :to="'/channels/' + channel.login">
    <article
      class="mx-auto group w-full shadow-lg max-w-md pb-2 rounded-b-2xl transform duration-500 hover:-translate-y-2 cursor-pointer"
    >
      <img
        v-show="imageLoaded"
        class="content bg-cover bg-center h-52 rounded-2xl"
        :src="$config.cdnURL + channel.profileImagePath"
        @load="imageLoadedMethod"
      />
      <div
        v-show="!imageLoaded"
        data-placeholder
        class="content bg-cover bg-center h-52 rounded-2xl w-52 overflow-hidden relative bg-gray-200"
      ></div>
      <div class="">
        <p
          class="mt-1 text-2xl text-gray-700 text-center dark:text-neutral-200"
        >
          {{ channel.displayName }}
        </p>
      </div>
    </article>
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
