<template lang='pug'>
  #app
    TodoForm(:url="'https://jsonplaceholder.typicode.com/todos/1'")
</template>

<script>
import Navigation from './components/Navigation.vue'
import TodoForm from './components/TodoForm.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    TodoForm
  }
}
</script>

<style>
body {
  margin: 0
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
