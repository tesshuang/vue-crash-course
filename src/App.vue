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
    AddTask(task) {
      this.tasks = [...this.tasks, task];
    },
    deleteTask(id) {
      console.log('task', id);
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleReminder(id) {
      console.log('toggle', id);
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task,
      );
    },
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Doctor Appointment',
        day: 'March 1st at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Sec Appointment',
        day: 'April 1st at 2:30pm',
        reminder: false,
      },
      {
        id: 3,
        text: 'Third Appointment',
        day: 'May 1st at 2:30pm',
        reminder: false,
      },
      {
        id: 4,
        text: 'Forth Appointment',
        day: 'February 1st at 2:30pm',
        reminder: true,
      },
    ];
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
