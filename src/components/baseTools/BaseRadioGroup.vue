<template>
  <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
    :class="{
      horizontal: !vertical,
    }"
  >
    <BaseRadio
      :label="option.label"
      :value="option.value"
      :modelValue="modelValue"
      :status="option.status"
      :name="name"
      @update:modelValue="$emit('update:modelValue', $event)"
      @update:status="$emit('update:status', $event)"
    />
  </component>
</template>

<script>
import BaseRadio from "@/components/baseTools/BaseRadio";

export default {
  components: { BaseRadio },
  props: {
    options: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    vertical: {
      type: Boolean,
      default: false,
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
.horizontal {
  margin-right: 20px;
}
label {
  font-size: 16px;
}
</style>
