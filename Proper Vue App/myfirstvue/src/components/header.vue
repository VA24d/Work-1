<script setup>
defineProps({
  msg: String
})
</script>


<template>
  <header>
    <!-- <img src="./icons/logo.svg" alt="Vue logo" /> -->
    <h1>{{ msg }}</h1>
    <button @click="table">Table</button>
    <button @click="form">Form</button>
  </header>
</template>


<style scoped>
header {
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  position: sticky;
  align-self: start;
  width: 100vw;
}
</style>