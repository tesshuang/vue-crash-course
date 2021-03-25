<template>
  <div :class="[task.reminder && 'reminder']" @dblclick="$emit('toggle-reminder', task.id)" >
    <h2 >{{ task.text }}
      <i class="fas fa-times" @click="onDelete(task.id)"></i>
    </h2>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object
  },
  methods: {
    onDelete(id) {
      this.$emit("delete-task", id);
      // console.log(id);
    },
  }
}
</script>

<style scoped>
div {
  background: #e4e4e4;
  padding: 12px 16px;
  margin: 4px;
  cursor: pointer;
  text-align: left;
}

div h2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div.reminder {
  border-left: 5px solid green;
}

.fas {
  color: red;
}
</style>