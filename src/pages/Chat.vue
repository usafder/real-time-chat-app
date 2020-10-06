<template>
  <div class="container">
    <h4>Chat Room</h4>
    <div class="divider"></div>
    <div v-if="isLoaded" class="chat-item-container">
      <template v-for="item in chatMessages">
        <ChatCard
          :key="item.key"
          :message="item.message"
          :username="item.username"
          :signedInUsername="username"
        />
      </template>
    </div>
    <div v-else>
      <Spinner />
    </div>

    <div class="row valign-wrapper mt-20">
      <input
        v-model="message"
        class="col s10 m11"
        name="message"
        placeholder="Enter Message Here..."
        type="text"
      />
      <div class="col s2 m1">
        <button :disabled="!message" class="btn" @click="addNewMessage">
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ChatCard from "../components/ChatCard";
import Spinner from "../components/Spinner";
import { firebaseDB } from "../firebase/utils";

export default {
  name: "Chat",
  components: { ChatCard, Spinner },
  props: {
    username: { type: String },
  },
  data() {
    return { isLoaded: false, message: "", chatMessages: [] };
  },
  mounted() {
    firebaseDB.ref("messages").on("value", (snapshot) => {
      this.chatMessages = [];
      const data = snapshot.val();
      Object.keys(data).forEach((key) => {
        this.chatMessages.push({
          key,
          username: data[key].username,
          message: data[key].message,
        });
      });
      this.isLoaded = true;
    });
  },
  methods: {
    addNewMessage() {
      firebaseDB
        .ref("messages")
        .push({ message: this.message, username: this.username });
    },
  },
};
</script>

<style>
.chat-item-container {
  overflow-y: auto;
  height: 70vh;
}
.mt-20 {
  margin-top: 20px;
}
</style>
