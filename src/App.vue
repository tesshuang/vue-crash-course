<template>
  <main class="container">
    <Header
      title="Welcome to Your Vue.js App"
      @show-add-task="showAddTask"
      :show="show"
    />
    <div v-if="show">
      <AddTask @add-task="AddTask" />
    </div>
    <Tasks
      :tasks="tasks"
      @delete-task="deleteTask"
      @toggle-reminder="toggleReminder"
    />
  </main>
</template>

<script>
import Header from './components/Header.vue';
import Tasks from './components/Tasks.vue';
import AddTask from './components/AddTask.vue';

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      show: false,
    };
  },
  methods: {
    showAddTask() {
      this.show = !this.show;
    },
    async AddTask(task) {
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();

      this.tasks = [...this.tasks, data];
    },
    async deleteTask(id) {
      const res = await fetch(`api/tasks/${id}`, {
        method: 'DELETE',
      });

      res.status === 200
        ? (this.tasks = this.tasks.filter((task) => task.id !== id))
        : alert('Error deleting');
    },
    async toggleReminder(id) {
      const selectedTask = await this.fetchTask(id);
      const updTask = { ...selectedTask, reminder: !selectedTask.reminder };
      console.log(updTask);
      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updTask),
      });

      const data = await res.json();

      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task,
      );
    },
    async fetchTasks() {
      const res = await fetch('api/tasks');
      const data = await res.json();

      return data;
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();

      return data;
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
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
}
</style>
