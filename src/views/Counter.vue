<template>
  <div>
    <h3>Counter</h3>
    <div>{{ count }}</div>
    <div>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>
