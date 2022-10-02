<template>
  <input
    type="radio"
    :checked="modelValue === value"
    :value="value"
    v-bind="$attrs"
    @change="$emit('update:modelValue', value)"
    :id="uuid"
    :disabled="status"
  />
  <label class="radio" :for="uuid" v-if="label">{{ label }}</label>
</template>

<script>
import UniqueID from "@/features/UniqueID";

export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    value: {
      type: [String, Number],
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
      default: false,
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
  display: inline-block;
  max-width: 25px;
  border: 0;
  height: 20px;
  margin-left: 5px;
}
</style>
