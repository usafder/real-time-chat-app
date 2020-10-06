<template>
  <form @submit.prevent="onSubmit">
    <input
      v-model="username"
      name="username"
      placeholder="Username"
      type="text"
    />
    <p v-if="feedback" class="red-text">{{ feedback }}</p>
    <button class="btn">Proceed</button>
  </form>
</template>

<script>
export default {
  name: "Home",
  data() {
    return { username: "", feedback: "" };
  },
  methods: {
    onSubmit() {
      if (this.username) {
        this.$router.push({
          name: "Chat",
          params: { username: this.username },
        });
      } else {
        this.feedback = "Username name cannot be empty.";
      }
    },
  },
};
</script>
