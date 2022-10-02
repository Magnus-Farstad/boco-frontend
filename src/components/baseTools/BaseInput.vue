<template>
  <div>
    <label v-if="label" :for="id" class="font-bold block">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="updateInput"
      class="border w-full p-1"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
input {
  border: none;
  background-color: #f4f4f4;
  max-width: 363px;
  font-size: medium;
  height: 45px;
  border-radius: 15px;
  padding-left: 15px;
}
</style>
