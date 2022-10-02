<template>
  <div class="container">
    <h1>Mine annonser</h1>
    <div class="actions">
      <ItemCardHorizontal
        v-for="item in items"
        :key="item.itemId"
        class="items"
        :item="item"
        @click.stop="goToRentals(item)"
      ></ItemCardHorizontal>
    </div>
  </div>
</template>

<script>
import ItemCardHorizontal from "@/components/itemCards/ItemCardHorizontal";
export default {
  name: "MyAds",
  components: {
    ItemCardHorizontal,
  },
  computed: {
    items() {
      return this.$store.state.myItems;
    },
  },
  methods: {
    goToRentals(item) {
      this.$store.dispatch("setItem", item);
      this.$router.push({ name: "RentalsReceived" });
    },
  },
  mounted() {
    this.$store.dispatch("fetchMyItems");
  },
};
</script>

<style scoped>
h1 {
  border-bottom: solid black 1px;
  color: black;
  margin: 0 1rem;
  padding: 1rem;
  font-weight: 450;
  font-size: 28px;
}

.container {
  margin-bottom: 1rem;
}
</style>
