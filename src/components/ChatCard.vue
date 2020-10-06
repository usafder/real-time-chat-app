<template>
  <div class="card">
    <div :class="['card-content', isSameUsername ? 'teal' : 'grey lighten-5']">
      <p :class="[alignment, 'grey-text text-lighten-1']">
        {{ isSameUsername ? "You" : username }}
      </p>
      <p :class="alignment">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatCard",
  props: {
    message: { type: String },
    username: { type: String },
    signedInUsername: { type: String },
  },
  computed: {
    alignment() {
      return this.isSameUsername ? "right-align" : "left-align";
    },
    isSameUsername() {
      return this.username === this.signedInUsername;
    },
  },
};
</script>
