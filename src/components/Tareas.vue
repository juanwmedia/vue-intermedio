<template>
  <div>
    <h1>Tareas</h1>
    <input type="text" placeholder="Añadir item" v-model="nuevoItem" />
    <input type="button" value="Agregar item" @click="agregarItem" />
    <br />
    <input type="search" placeholder="Filtrar por título de items" v-model="filtroItems" />
    <Tarea
      v-for="(item, $index) in itemsFiltrados"
      :key="item.id"
      :titulo="item.title"
      @eliminarItem="eliminarItem($index)"
    ></Tarea>
    <TareaDetalles/>
  </div>
</template>

<script>
import todoService from "../services/todoService.js";
import Tarea from "@/components/Tarea";
import TareaDetalles from './TareaDetalles.vue';
import {crudItemsMixin} from "../mixins/crudItems.js";
export default {
  name: "Tareas",
  mixins: [crudItemsMixin],
  created() {
    todoService.get().then(items => (this.items = items.data));
  },
  components: {
    Tarea,
    TareaDetalles,
  }
};
</script>