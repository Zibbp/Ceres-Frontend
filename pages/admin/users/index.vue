<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold mt-2 dark:text-gray-200">User Management</h1>
    <users-table />
  </div>
</template>

<script>
import UsersTable from '~/components/Admin/UsersTable.vue'
export default {
  middleware: ['auth', 'isadmin'],
  components: {
    UsersTable,
  },
}
</script>

<style></style>
