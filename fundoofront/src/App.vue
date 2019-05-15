<template>
  <div id="app">
    <Login />
    <Sample />
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Sample from './components/Sample.vue'

export default {
  name: 'app',
  components: {
    Login,
    Sample
  }
}
</script>

<style>
</style>
