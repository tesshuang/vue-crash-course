<template>
  <main class="container">
    <Header
      title="Welcome to Your Vue.js App"
      @show-add-task="showAddTask"
      :show="show"
    />
    <router-view :show="show"></router-view>
    <Footer />
  </main>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showAddTask() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  border: 2px solid darkblue;
  min-height: 500px;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
