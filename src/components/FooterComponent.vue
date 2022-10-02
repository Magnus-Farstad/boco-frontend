<template>
  <div class="container" id="footerContainer">
    <img id="image" :src="require('../assets/bocologo.png')" alt="" />
    <div class="footerMeta">Her er masse info</div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.container {
}
.footerMeta {
  border-top: solid #707070 1px;
}
#footerContainer {
  padding: 0 15px 20px 15px;
}
#image {
  padding: 1rem;
  width: 100px;
}
</style>
