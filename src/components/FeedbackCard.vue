<template>
  <div class="feedbackCardContainer">
    <div class="feedbackCard">
      <h3>{{ feedback.user.name }}</h3>
      <h4>Tilbakemelding: {{ feedback.message }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCardSquare",
  props: {
    feedback: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
p {
  margin: 5px 0 2px 0;
  font-size: 11px;
  color: #707070;
}
h4 {
  margin: 5px 0 0 0;
  font-size: 16px;
  font-weight: 400;
}

.feedbackCardContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
}
.feedbackCard {
  position: relative;
  display: grid;
  grid-template-rows: 50px 50px;
  width: 100%;
  height: 100px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 3px 6px #00000029;
  margin: 0 auto;
  padding-top: 2rem;
}
</style>
