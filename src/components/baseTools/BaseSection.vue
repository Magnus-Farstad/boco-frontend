<template>
  <div @click="toggleItems" class="sectionContainer">
    <div class="meta">
      <div class="title">{{ title }}</div>
      <svg
        class="dropdownIcon"
        :class="{ dropDown: isDropped }"
        xmlns="http://www.w3.org/2000/svg"
        width="11.676"
        height="20"
        viewBox="0 0 11.676 20"
      >
        <path
          id="Path_8"
          data-name="Path 8"
          d="M32.219,986.143l-1,.956-9,8.639,2,2.081,8-7.683,8,7.683,2-2.081-9-8.639Z"
          transform="translate(997.819 -22.219) rotate(90)"
        />
      </svg>
    </div>
    <div v-if="items">
      <ItemCardHorizontal
        v-for="item in dataItems"
        :key="item.itemId"
        class="items"
        :item="item"
        @click.stop="goToRentals(item)"
      ></ItemCardHorizontal>
    </div>
    <div v-else>
      <ItemCardHorizontal
        v-for="rental in dataItems"
        :key="rental.item.itemId"
        class="items"
        :item="rental.item"
        :status="rental.status"
        @click.stop="goToRental(rental)"
      ></ItemCardHorizontal>
    </div>
  </div>
</template>

<script>
import ItemCardHorizontal from "@/components/itemCards/ItemCardHorizontal";
export default {
  name: "BaseSection",
  data() {
    return {
      dataItems: null,
      isDropped: false,
    };
  },
  components: {
    ItemCardHorizontal,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      default: null,
    },
    rentals: {
      type: Array,
      default: null,
    },
  },
  methods: {
    toggleItems() {
      this.isDropped = !this.isDropped;

      if (this.isDropped) {
        if (this.items) {
          console.log("Current dataItems are items");
          this.dataItems = this.items;
        } else {
          console.log(
            "Current dataItems are rentals " + this.rentals[0].status
          );
          this.dataItems = this.rentals;
        }
      } else {
        this.dataItems = null;
      }
    },
    goToRental(rental) {
      this.$store.dispatch("setRental", rental);
      this.$router.push({ name: "RentalDetails" });
    },
    goToRentals(item) {
      this.$store.dispatch("setItem", item);
      this.$router.push({ name: "RentalsReceived" });
    },
  },
};
</script>

<style scoped>
.sectionContainer {
  border-bottom: solid black 1px;
  margin: 0 1rem;
}
.meta {
  display: flex;
  height: 3.8rem;
  justify-content: space-between;
}
.title {
  padding: 1.1rem;
  font-size: 20px;
}
.dropdownIcon {
  height: 1.5rem;
  width: 1rem;
  padding: 1rem;
  transition: 0.1s ease-out;
}
.dropDown {
  transform: rotate(90deg);
}
</style>
