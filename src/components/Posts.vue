<template>
  <div>
    <h1>Posts</h1>
    <input type="text" placeholder="Añadir item" v-model="nuevoItem" />
    <input type="button" value="Agregar item" @click="agregarItem" />
    <br />
    <input type="search" placeholder="Filtrar por título de items" v-model="filtroItems" />
    <ul>
        <li
            v-for="(item, $index) in itemsFiltrados"
            :key="item.id"
            @click="verPost(item.id)"
            @eliminarItem="eliminarItem($index)">
            {{ item.title }}
        </li>
    </ul>

  </div>
</template>

<script>
import postService from "../services/postService.js";
import {crudItemsMixin} from "../mixins/crudItems.js";
export default {
  name: "PostsList",
  mixins: [crudItemsMixin],
  created() {
    postService.get().then(items => (this.items = items.data));
  },
  methods: {
    verPost(postId) {
      this.$router.push({
        name: 'post', params: {id: postId}
      })
    }
  }

};
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>