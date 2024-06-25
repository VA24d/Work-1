<script setup>
import vue_header from './components/header.vue'
import vue_form from './components/form.vue'
import vue_table from './components/table.vue'
import { ref } from 'vue'
const users= ref([])


const handleFormSubmission = (data) => {
  users.value.push(data);
};

</script>

<template>
  <vue_header msg="Welcome to Your Vue.js App" />
  <!-- <p>Hello</p> -->
  <div class="container">
    <vue_form @formSubmitted="handleFormSubmission" />
    <vue_table :users="users"/>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
}
vue_header {
  background-color: #f1f1f1;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  position: sticky;
  
}
</style>