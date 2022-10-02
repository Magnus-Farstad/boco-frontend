<template>
  <div @click="goToChat" class="chatCardContainer" tabindex="0">
    <div class="itemImageContainer">
      <img
        class="itemImage"
        :src="'http://localhost:8085/api/image/' + rental.item.imageId"
        alt="bilde av gjenstand"
      />
    </div>
    <div class="itemMeta">
      <div class="name">{{ name }}</div>
      <div
        :class="{
          statusMessage: true,
          accepted: statusWrapped === 'Akseptert',
          pending: statusWrapped === 'Avventer',
          canceled: statusWrapped === 'Kansellert',
          active: statusWrapped === 'Aktiv',
        }"
      >
        {{ statusWrapped }}
      </div>
      <div class="message">{{ messageWrapped }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatCard",
  props: {
    rental: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToChat() {
      this.$store.dispatch("setRental", this.rental);
      this.$router.push({ name: "MessageView" });
    },
  },
  computed: {
    isMyItem() {
      return this.rental.item.user.userId === this.$store.state.userInfo.userId;
    },
    name() {
      if (this.isMyItem) {
        return this.rental.user.name;
      }
      return this.rental.item.user.name;
    },
    messageWrapped() {
      if (this.rental.lastMessage) {
        if (this.rental.lastMessage.text.length > 40) {
          return this.rental.lastMessage.text.slice(0, 40) + "...";
        }
        return this.rental.lastMessage.text;
      }
      return "";
    },
    statusWrapped() {
      switch (this.rental.status) {
        case "ACCEPTED":
          return "Akseptert";
        case "ACTIVE":
          return "Aktiv";
        case "PENDING":
          return "Avventer";
        case "REJECTED":
          return "Avvist";
        case "CANCELED":
          return "Kansellert";
        case "FINISHED":
          return "Avsluttet";
        default:
          return "";
      }
    },
  },
};
</script>

<style scoped>
.chatCardContainer {
  display: flex;
  margin-bottom: 2rem;
}
.itemImageContainer {
  width: 4.5rem;
  height: 4rem;
  margin-right: 1.5rem;
}
.itemImage {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.itemMeta {
  display: grid;
  grid-template-rows: 45% 28% 26%;
  text-align: left;
}
.name {
  font-size: 20px;
}
.message {
  color: #707070;
}
.accepted {
  color: #003a00;
}
.pending {
  color: #fb8500;
}
.active {
  color: green;
}
.canceled {
  color: darkred;
}
</style>
