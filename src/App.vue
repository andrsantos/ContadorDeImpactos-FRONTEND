<script setup>
import Navbar from './components/navbar/Navbar.vue'
</script>

<template>

  <div id="app">

    <Navbar />

    <router-view />

  </div>

</template>

<style>
body {
  margin: 0;
  font-family: sans-serif;
  background-color: #f9fafb;
}
</style>