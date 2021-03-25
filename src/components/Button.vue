<template>
  <button class="btn" :style="{ backgroundColor: color }" @click="onClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      this.$emit('btn-click');
      // console.log('click');
    },
  },
};
</script>

<style scoped>
.btn {
  padding: 8px 12px;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 16px;
}
</style>
