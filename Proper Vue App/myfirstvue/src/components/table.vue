<script setup>
import vue_table_row from './table_row.vue'

</script>


<template>
    <table class="auto-index">
        <thead>
            <tr>
                <th>ID</th>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Company/Name</th>
                <th>Pin code</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Edit user</th>
                <th>Delete user</th>
            </tr>
        </thead>

        <tbody>
            <vue_table_row v-for="user in users" :key="user.id" :user="user" />
        </tbody>
    </table>
</template>


<style scoped>
:root {
  --background-color: #ffffff;
  --text-color: #000000;
  --border-color: #0018b3;
  --th-background-color: aqua;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #333333;
    --text-color: #ffffff;
    --border-color: #0018b3;
    --th-background-color: #555555;
  }
}

table {
  /* border-collapse: collapse; */
  width: 100%;
  border: 1.5px solid var(--border-color);
  border-radius: 20px;
}

th {
  border: 1.5px solid var(--border-color);
  padding: 5px;
  margin: 5px;
  background-color: var(--th-background-color);
  color: var(--text-color);
}

td {
  border: 1.5px solid var(--border-color);
  padding: 6px;
  margin: 6px;
  color: var(--text-color);
  background-color: var(--background-color);
}

tr:first-child th:first-child {
  border-top-left-radius: 20px;
}

tr:first-child th:last-child {
  border-top-right-radius: 20px;
}

tr:last-child td:first-child {
  border-bottom-left-radius: 20px;
}

tr:last-child td:last-child {
  border-bottom-right-radius: 20px;
}
</style>