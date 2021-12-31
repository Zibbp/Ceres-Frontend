<template>
  <div>admin apge</div>
</template>

<script>
export default {
  middleware: ['auth', 'isadmin'],
}
</script>

<style></style>
