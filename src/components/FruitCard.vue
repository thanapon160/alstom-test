<script setup lang="ts">
  defineProps({
    name: String,
    description: String,
    url: String
  })
</script>

<template>
  <div class="card">
    <img :src="url" :alt="name" width="100px" height="100px"/>
    <p class="name">{{ name }}</p>
    <p>{{  description }}</p>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    display: flex;
    flex-direction: column;
    padding: 8px;
    border: 1px solid;
    border-radius: 4px;
    align-items: center;

    .name {
      margin-bottom: 4px;
      font-weight: 800;
    }
  }

  p {
    margin: 0;
  }
</style>