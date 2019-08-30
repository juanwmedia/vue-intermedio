<template>
  <div class="home">
    <BaseForm/>
    <Tareas></Tareas>
  </div>
</template>

<script>
// @ is an alias to /src
import Tareas from '@/components/Tareas'

export default {
  name: 'home',
  components: {
    Tareas
  }
}
</script>
