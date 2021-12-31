<template>
  <div class="container mx-auto">
    <queue-table />
  </div>
</template>

<script>
import QueueTable from '~/components/Tables/QueueTable.vue'
export default {
  middleware: 'auth',
  components: {
    QueueTable,
  },
}
</script>

<style></style>
