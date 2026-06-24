<script setup>
defineProps({
  msg: String,
})
</script>

<template>
  <div class="greetings">
    <h1>{{ msg }}</h1>
  </div>
</template>

<style scoped>
h1 {
  color: #42b983;
}
</style>
