<template>
  <div class="container">
    <h1>Alle chatter</h1>
    <div class="sections">
      <router-link :to="{ name: 'RentalsActive' }">Aktive</router-link>
      <router-link :to="{ name: 'RentalsFinished' }">Arkiv</router-link>
    </div>
    <div class="rentalsContainer">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyRentals",
  mounted() {
    this.$store.dispatch("fetchAllRentals");
  },
};
</script>

<style scoped>
h1 {
  color: black;
  margin: 0 1rem;
  padding: 1rem;
  font-weight: 450;
  font-size: 28px;
}
a {
  border-bottom: solid #c2c1c1 1px;
  text-decoration: none;
  padding: 1rem 1rem;
  color: #c2c2c2;
}
a.router-link-exact-active {
  border-bottom: solid black 3px;
  color: black;
}

.sections {
  border-top: solid #c2c1c1 1px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.container {
  margin-bottom: 1rem;
}
.rentalsContainer {
  padding: 2rem 1rem;
}
</style>
