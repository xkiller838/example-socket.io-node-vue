<template>
  <div>
    <button @click="sendMessage()">Sen Mensaje</button>
  </div>
</template>

<script>
export default {
  methods: {
    //enviamos un mensaje al servidor
    sendMessage() {
      this.socket.emit("message", "Hola servidor");
    },
  },
};
</script>

<style lang="scss" scoped></style>
