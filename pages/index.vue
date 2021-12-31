<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello World :)</h1>
    <div v-if="!$auth.loggedIn">Please log in :)</div>
    <div v-else>{{ $auth.user.username }}</div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
