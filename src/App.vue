<script setup lang="ts">

</script>

<template>
  <router-link to="/cash_drawer">Cash Drawer</router-link> |
  <router-link to="/fruit">Fruit</router-link>

  <br/>
  <br/>
  <br/>

  <RouterView />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
