<template>
  <div id="app">
    <hello></hello>
    <project-list></project-list>
  </div>
</template>

<script>
import Hello from './components/Hello'
import ProjectList from './components/ProjectList'

export default {
  name: 'app',
  components: {
    Hello,
    ProjectList
  }
}
</script>

<style>
#app {

}
</style>
