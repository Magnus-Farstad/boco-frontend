<template>
  <input
    v-bind="$attrs"
    :placeholder="label"
    class="inputField"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :id="uuid"
    aria-label="søkefelt"
  />
</template>

<script>
import UniqueID from "@/features/UniqueID";
export default {
  name: "BaseSearchBar",
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
  },
  setup() {
    const uuid = UniqueID().getID();

    return {
      uuid,
    };
  },
};
</script>

<style scoped>
input {
  margin-left: 15px;
  border: none;
  font-size: 18px;
  height: 30px;
  padding-top: 5px;
  outline: none;
}
input:active {
  border: none;
  outline: none;
}
.inputField:focus {
  border: none;
}
</style>
