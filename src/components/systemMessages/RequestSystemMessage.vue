<template>
  <div class="systemMessageContainer">
    <div id="acceptDenyMessage">
      {{ rental.user.name }} ønsker å leie
      <strong> {{ rental.item.title }}</strong> <br />
      fra {{ rental.startDate.slice(0, 10) }} til
      {{ rental.endDate.slice(0, 10) }}
      <div class="buttonContainer">
        <div
          @click.stop="acceptRequest(rental.rentalId)"
          id="acceptButton"
          class="button"
        >
          Godkjenn
        </div>
        <div @click.stop="rejectRequest(rental.rentalId)" class="button">
          Avvis
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { acceptRental, rejectRental } from "@/service/apiService";

export default {
  name: "RequestSystemMessage",
  props: {
    rental: {
      type: Object,
    },
  },
  methods: {
    async acceptRequest(rentalId) {
      let response = await acceptRental(rentalId, this.$store.state.token);
      this.$emit("requestAction", response);
      console.log("TRYKKER");
    },
    async rejectRequest(rentalId) {
      let response = await rejectRental(rentalId, this.$store.state.token);
      this.$emit("requestAction", response);
      console.log("TRYKKER");
    },
  },
};
</script>

<style scoped>
.systemMessageContainer {
  background-color: rgba(142, 202, 230, 0.5);
  max-width: 280px;
  width: 100%;
  border-radius: 0 20px 20px 0;
  padding: 15px 20px;
  border-left: 3px solid #fb8500;
  margin-bottom: 1rem;
}
.button {
  border-radius: 5px;
  background: #d22222;
  width: 90px;
  height: 23px;
  text-align: center;
  color: white;
  font-size: 14px;
  font-weight: 500;
  padding-top: 5px;
}
#acceptButton {
  background: #389b3f;
}
.buttonContainer {
  display: flex;
  justify-content: space-evenly;
  padding: 0 0.5rem;
  margin-top: 10px;
}
</style>
