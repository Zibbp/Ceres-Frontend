<template>
  <div class="min-h-screen dark:bg-dark-black-600">
    <navbar></navbar>
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/Layout/Navbar.vue'
export default {
  components: { Navbar },
}
</script>

<style>
:root {
  --plyr-color-main: #6f2dbd;
}
</style>
