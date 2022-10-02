<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseCardHorizontal",
};
</script>

<style scoped>
.container {
  border-radius: 20px;
  display: flex;
  height: 5.25rem;
  justify-content: space-between;
  box-shadow: 0 3px 6px #00000029;
  background: #ffffff;
}
</style>
