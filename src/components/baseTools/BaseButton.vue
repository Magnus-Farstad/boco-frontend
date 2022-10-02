<template>
  <button type="button" :for="id" :disabled="status">
    <img v-if="img" src="img" />{{ text }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    id: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "",
    },
    status: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<style scoped>
button {
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  border-radius: 15px;
  margin-top: 10px;
  background-color: var(--blue);
  color: white;
}
button:disabled {
  background-color: grey;
}
</style>
