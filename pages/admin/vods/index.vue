<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold mt-2 dark:text-gray-200">Vod Management</h1>
    <vods-table />
  </div>
</template>

<script>
import VodsTable from '~/components/Admin/VodsTable.vue'
export default {
  middleware: ['auth', 'isadmin'],
  components: {
    VodsTable,
  },
}
</script>

<style></style>
