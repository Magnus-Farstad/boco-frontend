<template>
  <div class="container">
    <div class="infoContainer">
      <h1>Mottatte forespørsler</h1>
      <p>Forespurt gjenstand</p>
      <ItemCardHorizontal
        :item="item"
        @click.stop="goToItem"
      ></ItemCardHorizontal>
    </div>
    <div class="customers">
      <h1 id="customersTitle">Mine kunder</h1>
      <CustomerCard
        :rental="rental"
        v-for="rental in rentals"
        :key="rental.rentalId"
        @rentalAction="updateRental"
        @cardUpdate="updatePage"
        :user="rental.item.user"
      ></CustomerCard>
    </div>
  </div>
</template>

<script>
import CustomerCard from "@/components/CustomerCard";
import ItemCardHorizontal from "@/components/itemCards/ItemCardHorizontal";
import {
  acceptRental,
  cancelRental,
  getRentalsForItem,
  rejectRental,
} from "@/service/apiService";

export default {
  name: "RentalsReceived",
  data() {
    return {
      rentals: null,
    };
  },
  components: {
    ItemCardHorizontal,
    CustomerCard,
  },
  computed: {
    item() {
      return this.$store.state.currentItem;
    },
  },
  methods: {
    goToItem() {
      this.$router.push({ name: "ProductDetails" });
    },
    async updateRental(rental, type) {
      switch (type) {
        case "Accept":
          console.log("Rental accepted");
          // eslint-disable-next-line no-case-declarations
          const rentalResponseAccepted = await acceptRental(
            rental.rentalId,
            this.$store.state.token
          );
          console.log(rentalResponseAccepted.status);
          break;

        case "Reject":
          console.log("Rental rejected");
          // eslint-disable-next-line no-case-declarations
          const rentalResponseRejected = await rejectRental(
            rental.rentalId,
            this.$store.state.token
          );
          console.log(rentalResponseRejected.status);
          break;

        case "Cancel":
          console.log("Rental canceled");
          // eslint-disable-next-line no-case-declarations
          const rentalResponseCanceled = await cancelRental(
            rental.rentalId,
            this.$store.state.token
          );
          console.log(rentalResponseCanceled.status);
          break;

        default:
          return "Default";
      }
      await this.updatePage();
    },
    async updatePage() {
      this.rentals = await getRentalsForItem(
        this.$store.state.currentItem.itemId,
        this.$store.state.token
      );
      console.log("page updated");
    },
  },
  mounted() {
    this.updatePage();
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
p {
  font-size: 20px;
}

.container {
  margin-bottom: 2rem;
  text-align: left;
}
.infoContainer {
  margin: 0 1rem 1rem 1rem;
}
.customers {
  background: #e5ecf1;
  padding: 1rem;
}

#customersTitle {
  font-weight: normal;
}
</style>
