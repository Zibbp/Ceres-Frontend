<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold mt-2 dark:text-gray-200">Queue Management</h1>
    <queue-table />
  </div>
</template>

<script>
import QueueTable from '~/components/Admin/QueueTable.vue'
export default {
  middleware: ['auth', 'isadmin'],
  components: {
    QueueTable,
  },
}
</script>

<style></style>
