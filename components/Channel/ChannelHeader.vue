<template>
  <div class="w-full bg-center bg-cover h-32 channel-header">
    <div
      class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50"
    >
      <div class="text-center">
        <h1 class="text-2xl font-semibold text-white lg:text-3xl">
          {{ channel.displayName }}
        </h1>
      </div>
    </div>
  </div>
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
