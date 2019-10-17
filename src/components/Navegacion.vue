<template>
  <div>
    <Logo />
    <div id="nav">
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink :to="{name: 'posts'}">Posts</RouterLink>
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