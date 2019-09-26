<template>
  <div>
    <Logo />
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/posts">Posts</router-link>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
export default {
  components: {
    Logo
  }
};
</script>