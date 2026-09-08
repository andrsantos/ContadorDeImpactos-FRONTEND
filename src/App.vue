<script setup>
import Navbar from './components/navbar/Navbar.vue'
import Footer from './components/footer/Footer.vue'
</script>

<template>

  <div id="app">

    <Navbar />

    <router-view />

    <Footer />

  </div>

</template>

<style>
body {
  margin: 0;
  font-family: sans-serif;
  background-color: #f9fafb;
}
</style>