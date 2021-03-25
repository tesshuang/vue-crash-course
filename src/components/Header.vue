<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      :color="show ? 'red' : 'blue'"
      :text="show ? 'Close' : 'Add task'"
      @btn-click="$emit('show-add-task')"
    />
  </header>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Header',
  props: {
    title: String,
    show: Boolean,
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
