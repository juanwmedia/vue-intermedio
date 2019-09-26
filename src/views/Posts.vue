<template>
  <div class="about">
    <h1>Posts publicados</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import postService from '../services/postService.js';
export default {
    name: 'Posts',
    created() {
      postService.get()
        .then(posts => this.posts = posts.data);
    },
    data() {
      return {
        posts: []
      }
    }
}
</script>
