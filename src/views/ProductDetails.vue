<template>
  <div class="container">
    <div class="imageCarousel">
      <img
        v-if="item.imageId === -1 || item.imageId === null"
        id="productImage"
        :src="require('../assets/Motorsag.png')"
        alt=""
      />
      <img
        v-else
        :src="'http://localhost:8085/api/image/' + item.imageId"
        id="product"
      />
    </div>
    <div class="info">
      <div class="productMeta">
        <div id="ratingLocationContainer">
          <div class="location">
            <svg
              class="positionMarker"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 96 96"
              enable-background="new 0 0 96 96"
              xml:space="preserve"
            >
              <path
                d="M48,9C31.86,9,18.73,22.131,18.73,38.271c0,14.13,23.756,41.948,28.518,47.381L48,86.512l0.752-0.857  c4.762-5.432,28.518-33.24,28.518-47.383C77.27,22.131,64.14,9,48,9z M48,48c-5.374,0-9.73-4.356-9.73-9.73s4.356-9.73,9.73-9.73  s9.73,4.356,9.73,9.73S53.374,48,48,48z"
              ></path>
            </svg>
            <div class="locationText">
              <span>{{ item.streetAddress }},</span>
              <div class="locationCity">
                <p>{{ item.postalCode }} {{ item.postOffice }}</p>
              </div>
            </div>
          </div>
        </div>
        <h1>{{ item.title }}</h1>
        <div class="price">
          <p id="priceTitle">Dagsleie</p>
          <p v-if="!isFree" class="pricetag">{{ item.price }} kr</p>
          <p v-else class="pricetag">GRATIS</p>
        </div>
      </div>
    </div>
    <div class="requestContainer">
      <BaseButton
        v-if="!isMyAd"
        class="baseButton"
        :id="'requestButton'"
        :text="text"
        :status="isRequested"
        @click="goToRequest(item)"
      ></BaseButton>
      <BaseButton
        v-else
        class="baseButton"
        :id="'editButton'"
        :text="'Endre annonse'"
        @click="goToEditAd(item)"
      ></BaseButton>
    </div>
    <div class="profileContainer">
      <BaseProfile :user="item.user"></BaseProfile>
    </div>
    <div class="description">
      <h3 class="descriptionTitle">Beskrivelse</h3>
      <p id="descriptionText">{{ item.description }}</p>
    </div>
    <div id="mapContainer">
      <h3 class="mapTitle">Kart</h3>
    </div>
    <GMapMap
      :center="position"
      :zoom="13"
      ref="myMapRef"
      :disableDefaultUI="true"
      style="height: 20rem; width: 100vw"
      :gestureHandling="cooperative"
      :clickable="true"
    >
      <GMapMarker :position="position" />
    </GMapMap>
  </div>
</template>

<script>
import BaseProfile from "@/components/baseTools/BaseProfile";
import BaseButton from "@/components/baseTools/BaseButton";
export default {
  name: "ProductDetails",
  components: {
    BaseProfile,
    BaseButton,
  },
  data() {
    return {
      position: {
        lat: this.$store.getters.GET_LAT,
        lng: this.$store.getters.GET_LONG,
      },
    };
  },
  computed: {
    item() {
      return this.$store.state.currentItem;
    },
    isMyAd() {
      console.log(
        this.item.user.userId + " " + this.$store.state.userInfo.userId
      );
      return this.item.user.userId === this.$store.state.userInfo.userId;
    },
    isFree() {
      return this.item.price === 0;
    },
    isRequested() {
      for (let i = 0; i < this.$store.state.myRentalsActive.length; i++) {
        if (
          this.$store.state.currentItem.itemId ===
          this.$store.state.myRentalsActive[i].item.itemId
        ) {
          return true;
        }
      }
      for (let i = 0; i < this.$store.state.myRentalsActive.length; i++) {
        if (
          this.$store.state.currentItem.itemId ===
          this.$store.state.myRentalsActive[i].item.itemId
        ) {
          return true;
        }
      }
      return false;
    },
    text() {
      if (this.isRequested === false) {
        return "Forespør leie";
      } else {
        return "Forespørsel sendt";
      }
    },
  },
  methods: {
    async goToRequest() {
      if (this.$store.state.userInfo.userId) {
        console.log(this.$store.state.userInfo);
        await this.$router.push({ name: "RequestComponent" });
      } else {
        await this.$router.push({ name: "LoginComponent" });
      }
    },
    async goToEditAd() {
      await this.$router.push({ name: "AddItemComponent" });
    },
  },
  async mounted() {
    await this.$store.dispatch("fetchMyRentals", "ACCEPTED");
    await this.$store.dispatch("fetchMyRentals", "PENDING");
    console.log(BaseButton.props.status);
  },
};
</script>

<style scoped>

p {
  margin: 5px 0;
}

.container {
  margin: 1rem 0;
}
.imageCarousel {
  height: 20rem;
  width: 100%;
  margin: 1rem 0;
}
.info {
  margin: 0 1rem 0 1rem;
}
.productMeta {
  text-align: left;
}
.location {
  display: flex;
  height: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 14px;
}
.positionMarker {
  fill: #fb8500;
  height: 100%;
  margin: 3px 5px 0 -1px;
}
.price {
  margin-bottom: 0.5rem;
}
.price p {
  font-size: 24px;
  font-weight: bold;
}
.requestContainer {
  height: 2.5rem;
  margin: 1rem 1rem 2.5rem 1rem;
}
.baseButton {
  height: 100%;
}
.profileContainer {
  margin: 0 1rem 0 1rem;
}
.description {
  text-align: left;
  margin: 0 1rem 0 1rem;
}
.descriptionTitle {
  font-size: 24px;
  margin: 24px 0 10px 0;
}
.locationText {
  margin-bottom: 1rem;
}

#productImage {
  width: 100%;
  height: 100%;
}
.pricetag {
  font-size: 26px;
  font-weight: 500;
}
#descriptionText {
  color: #333333;
}

#priceTitle {
  font-size: 16px;
  font-weight: 400;
}
#product {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.mapTitle {
  font-size: 24px;
  text-align: left;
}
#mapContainer {
  margin: 15px 0 10px 15px;
}
.locationCity{
  display:inline-block;
}
.locationText{
  margin-bottom: 0;
  margin-top: 5px;
}
.productMeta h1{
  text-align: left;
  font-weight: 500;
}
</style>
