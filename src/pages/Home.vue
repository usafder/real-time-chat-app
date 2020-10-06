<template>
  <div class="container mt-100" style="max-width: 400px">
    <div class="card">
      <div class="card-content center-align">
        <img src="../assets/logo.png" width="100" height="100" />
        <h4>Welcome to Chat App!</h4>
        <Form />
      </div>
    </div>
  </div>
</template>

<script>
import Form from "../components/Form";

export default {
  name: "Home",
  components: { Form },
};
</script>

<style scoped>
.mt-100 {
  margin-top: 100px;
}
</style>
