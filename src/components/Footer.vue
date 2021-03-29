<template>
  <footer>
    <p>Copyright @{{ currentYear }}</p>
    <router-link to="/about">About</router-link>
    <router-link to="/counter">Counter</router-link>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
a {
  color: #333;
  margin: 0 12px;
}
footer {
  margin-top: 30px;
  text-align: center;
}
</style>
