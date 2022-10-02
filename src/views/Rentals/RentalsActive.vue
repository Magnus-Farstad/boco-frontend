<template>
  <ChatCard
    id="chatCard"
    v-for="rental in allRentals"
    :key="rental.rentalId"
    :rental="rental"
  ></ChatCard>
</template>

<script>
import ChatCard from "@/components/ChatCard";

export default {
  name: "RentalsActive",
  components: {
    ChatCard,
  },
  computed: {
    allRentals() {
      const rentals = this.rentalsUser.concat(this.rentalsOwner);
      rentals.sort((a, b) =>
        a.lastMessage.date < b.lastMessage.date
          ? 1
          : b.lastMessage.date < a.lastMessage.date
          ? -1
          : 0
      );
      return rentals;
    },
    rentalsUser() {
      return this.$store.state.myRentalsActive;
    },
    rentalsOwner() {
      return this.$store.state.currentRentalsOwnerActive;
    },
  },
};
</script>

<style scoped></style>
