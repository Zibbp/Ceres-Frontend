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
  head() {
    return {
      title: `Ceres - Queue`,
      meta: [
        {
          hid: `ceres-queue`,
          name: `ceres-queue`,
          content: `Ceres Queue`,
        },
      ],
    }
  },
}
</script>

<style></style>
