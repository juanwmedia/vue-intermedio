<template>
  <div id="app">
    <Navegacion/>
    <RouterView/>
  </div>
</template>

<script>
  import Navegacion from '@/components/Navegacion'
  // import BaseForm from '@/components/BaseForm'
  export default {
    components: {
      Navegacion,
      // BaseForm
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
