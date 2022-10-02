<template>
  <div class="checkboxContainer">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      class="field"
    />
    <label v-if="label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
input {
  appearance: none;
  height: 25px;
  width: 25px;
  border-radius: 5px;
  border: 2px solid #034363;
}
input :checked:after {
  background-color: red;
}
input:checked {
  content: url("../../assets/Group 87.svg");
  border: none;
}
.checkboxContainer {
  display: flex;
}
label {
  margin-left: 10px;
  margin-top: 5px;
}
</style>
