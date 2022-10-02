<template>
  <div class="container">
    <div class="imageContainer">
      <img
        v-if="true"
        :src="
          'http://localhost:8085/api/image/' +
          this.notification.rental.item.imageId
        "
      />
      <img
        v-else
        :src="require('../../assets/6efa4b_motorsag-stihl-ms181c.jpg')"
      />
    </div>
    <div v-if="true" class="text">{{ notificationText }}</div>
    <div class="dotContainer">
      <div class="dot" v-if="notificationStatus === false"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseNotification",
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  computed: {
    notificationText() {
      let itemTitle = this.notification.rental.item.title;
      switch (this.notification.notificationStatus) {
        case "ACCEPTED":
          return 'Din forespørsel på "' + itemTitle + '" har blitt akseptert';
        case "REJECTED":
          return 'Din forespørsel på "' + itemTitle + '" har blitt avvist';
        case "CANCELED":
          return 'Din forespørsel på "' + itemTitle + '" har blitt kansellert';
        case "REQUEST":
          return 'Du har mottatt en forespørsel på "' + itemTitle + '"';
        case "SEND_RATING_OWNER":
          return (
            'Leieforholdet på "' +
            itemTitle +
            '" er avsluttet. Gi en anmeldelse'
          );
        case "RECEIVED_RATING_OWNER":
          return 'Du har mottatt en anmeldelse på "' + itemTitle + '"';
        case "RECEIVED_RATING_USER":
          return 'Du har mottatt en anmeldelse på "' + itemTitle + '"';
        case "SEND_RATING_USER":
          return (
            'Leieforholdet på "' +
            itemTitle +
            '" er avsluttet. Gi en anmeldelse'
          );
        default:
          return "";
      }
    },
    notificationStatus() {
      return this.notification.pressed;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0 3px 6px #00000029;
  background: #ffffff;
  align-items: center;
  /*border-radius: 15px;*/
  max-height: 5rem;
}
.imageContainer {
  margin: 10px;
}
.text {
  padding: 10px;
  text-align: left;
  width: 100%;
}
img {
  object-fit: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.dotContainer {
  height: 100%;
  /*width: 100%;*/
  display: flex;
  align-items: center;
  padding: 10px;
  margin-right: 10px;
}
.dot {
  height: 10px;
  width: 10px;
  background-color: var(--indigo);
  border-radius: 50%;
  display: inline-block;
}
</style>
