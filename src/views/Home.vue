<template>
  <div>
  </div>

</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "app",
  data() {
    return { todo: { checked: false } };
  },
  computed: {
    ...mapState(["todos", "loading"])
  },
  methods: {
    ...mapActions(["addTodo", "toggleTodo", "removeTodo"]),

    async add(todo) {
      await this.addTodo(todo);
      this.todo = { checked: false };
    }
  }
};
</script>

<style >


</style>
