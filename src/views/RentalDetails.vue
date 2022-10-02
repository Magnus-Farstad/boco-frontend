<template>
  <div class="container">
    <div class="imageCarousel">
      <img
        class="productImage"
        v-if="rental.item.imageId === -1 || rental.item.imageId === null"
        id="productImage"
        :src="require('../assets/Motorsag.png')"
        alt=""
      />
      <img
        class="productImage"
        v-else
        :src="'http://localhost:8085/api/image/' + rental.item.imageId"
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
              <span>{{ rental.item.streetAddress }},</span>
              <div class="locationCity">
                <p>{{ rental.item.postalCode }} {{ rental.item.postOffice }}</p>
              </div>
            </div>
          </div>
        </div>
        <h1>{{ rental.item.title }}</h1>
        <div class="price">
          <p id="priceTitle">Dagsleie</p>
          <p v-if="!isFree" id="pricetag">{{ rental.item.price }} kr</p>
          <p v-else class="pricetag">GRATIS</p>
        </div>
        <div class="statusContainer">
          <svg
            v-if="status === 'Aktiv'"
            class="statusIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <g id="noun-timer-2095142" transform="translate(-12.47 -12.47)">
              <path
                id="Path_45"
                data-name="Path 45"
                d="M23.47,33.47a10,10,0,1,1,10-10,10,10,0,0,1-10,10Zm0-19.855a9.855,9.855,0,1,0,9.855,9.855A9.855,9.855,0,0,0,23.47,13.615Z"
                transform="translate(0)"
                fill="#034363"
                stroke="#034363"
                stroke-width="2"
              />
              <path
                id="Path_46"
                data-name="Path 46"
                d="M27.539,27.537h0V19.07a8.525,8.525,0,0,0-2.19.287,8.492,8.492,0,0,0-5.99,5.99,8.508,8.508,0,0,0,0,4.38,8.492,8.492,0,0,0,5.99,5.99,8.508,8.508,0,0,0,4.38,0,8.511,8.511,0,0,0,5.141-3.947Z"
                transform="translate(-4.069 -4.067)"
                fill="#034363"
              />
            </g>
          </svg>
          <svg
            v-if="status === 'Avventer'"
            class="statusIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <g id="_05" data-name="05" transform="translate(-2 -2)">
              <path
                id="Path_43"
                data-name="Path 43"
                d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                fill="#fd9e02"
              />
              <path
                id="Path_44"
                data-name="Path 44"
                d="M12,6a1,1,0,0,0-1,1v4.59l-2.71,2.7A1,1,0,1,0,9.7,15.7l3-3A1,1,0,0,0,13,12V7A1,1,0,0,0,12,6Z"
                fill="#fd9e02"
              />
            </g>
          </svg>
          <svg
            v-if="status === 'Akseptert'"
            class="statusIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20.004"
            viewBox="0 0 20 20.004"
          >
            <g id="noun-checkmark-2573373" transform="translate(-1.002 -0.999)">
              <path
                id="Path_42"
                data-name="Path 42"
                d="M18.072,18.076a10,10,0,1,0-14.14,0A10,10,0,0,0,18.072,18.076ZM6.183,11.212a.63.63,0,0,1,.888,0l2.038,2.032L14.934,7.43a.636.636,0,0,1,.888.006.623.623,0,0,1,0,.881L9.546,14.569a.6.6,0,0,1-.438.181.614.614,0,0,1-.444-.181L6.183,12.1A.63.63,0,0,1,6.183,11.212Z"
                fill="#37b43f"
              />
            </g>
          </svg>
          <svg
            v-if="status === 'Kansellert'"
            class="statusIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <g id="noun-cancel-2014884" transform="translate(-5 -5)">
              <path
                id="Path_50"
                data-name="Path 50"
                d="M15,5A10,10,0,1,0,25,15,10.015,10.015,0,0,0,15,5Zm0,18.622A8.622,8.622,0,1,1,23.622,15,8.63,8.63,0,0,1,15,23.622Z"
                fill="#d22222"
              />
              <path
                id="Path_51"
                data-name="Path 51"
                d="M40.819,33.242a.738.738,0,0,0-1.044,0l-2.756,2.733-2.733-2.733a.739.739,0,0,0-1.044,1.044l2.733,2.733-2.733,2.756a.738.738,0,0,0,0,1.044.766.766,0,0,0,.511.222.675.675,0,0,0,.511-.222l2.756-2.756L39.753,40.8a.766.766,0,0,0,.511.222.644.644,0,0,0,.511-.222.738.738,0,0,0,0-1.044l-2.711-2.733L40.8,34.286A.719.719,0,0,0,40.819,33.242Z"
                transform="translate(-21.797 -21.797)"
                fill="#d22222"
              />
            </g>
          </svg>
          <svg
            v-if="status === 'Avvist'"
            class="statusIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <g id="noun-denied-1447616" transform="translate(0 0)">
              <path
                id="Path_52"
                data-name="Path 52"
                d="M17.071,2.929a10,10,0,1,0,0,14.142A10,10,0,0,0,17.071,2.929ZM4.957,4.958a7.109,7.109,0,0,1,8.967-.913l-9.88,9.88A7.134,7.134,0,0,1,4.957,4.958ZM15.042,15.043a7.1,7.1,0,0,1-8.968.911l9.893-9.861A7.138,7.138,0,0,1,15.042,15.043Z"
                fill="#d22222"
              />
            </g>
          </svg>
          <svg
            v-if="status === 'Avsluttet'"
            class="statusIcon"
            id="finishedIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20.004"
            viewBox="0 0 20 20.004"
          >
            <g id="noun-checkmark-2573373" transform="translate(-1.002 -0.999)">
              <path
                id="Path_42"
                data-name="Path 42"
                d="M18.072,18.076a10,10,0,1,0-14.14,0A10,10,0,0,0,18.072,18.076ZM6.183,11.212a.63.63,0,0,1,.888,0l2.038,2.032L14.934,7.43a.636.636,0,0,1,.888.006.623.623,0,0,1,0,.881L9.546,14.569a.6.6,0,0,1-.438.181.614.614,0,0,1-.444-.181L6.183,12.1A.63.63,0,0,1,6.183,11.212Z"
                fill="#37b43f"
              />
            </g>
          </svg>
          <div class="status">{{ status }}</div>
        </div>
        <div class="dateContainer">
          <svg
            class="dateIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25.026"
            viewBox="0 0 25 25.026"
          >
            <g id="noun-calendar-2080653" transform="translate(-2.6 -2.5)">
              <path
                id="Path_53"
                data-name="Path 53"
                d="M24.726,4.531H22.194V3.318a.822.822,0,0,0-.818-.818H19.161a.822.822,0,0,0-.818.818V4.531H11.856V3.318a.822.822,0,0,0-.818-.818H8.824a.822.822,0,0,0-.818.818V4.531H5.474A2.881,2.881,0,0,0,2.6,7.405V24.652a2.881,2.881,0,0,0,2.874,2.874H24.726A2.881,2.881,0,0,0,27.6,24.652V7.405A2.881,2.881,0,0,0,24.726,4.531Zm0,21.1H5.474a.945.945,0,0,1-.949-.949V9.831H25.7V24.652A.991.991,0,0,1,24.726,25.628Z"
                fill="#034363"
              />
              <path
                id="Path_54"
                data-name="Path 54"
                d="M21.229,37.9H17.854a.557.557,0,0,0-.554.554v1.582a.557.557,0,0,0,.554.554h3.376a.557.557,0,0,0,.554-.554V38.454A.541.541,0,0,0,21.229,37.9Z"
                transform="translate(-10.823 -26.065)"
                fill="#034363"
              />
              <path
                id="Path_55"
                data-name="Path 55"
                d="M45.529,37.9H42.154a.557.557,0,0,0-.554.554v1.582a.557.557,0,0,0,.554.554h3.376a.557.557,0,0,0,.554-.554V38.454A.541.541,0,0,0,45.529,37.9Z"
                transform="translate(-28.715 -26.065)"
                fill="#034363"
              />
              <path
                id="Path_56"
                data-name="Path 56"
                d="M69.829,37.9H66.454a.557.557,0,0,0-.554.554v1.582a.557.557,0,0,0,.554.554h3.376a.557.557,0,0,0,.554-.554V38.454A.541.541,0,0,0,69.829,37.9Z"
                transform="translate(-46.607 -26.065)"
                fill="#034363"
              />
              <path
                id="Path_57"
                data-name="Path 57"
                d="M21.229,55.3H17.854a.557.557,0,0,0-.554.554v1.582a.557.557,0,0,0,.554.554h3.376a.557.557,0,0,0,.554-.554V55.854A.557.557,0,0,0,21.229,55.3Z"
                transform="translate(-10.823 -38.876)"
                fill="#034363"
              />
              <path
                id="Path_58"
                data-name="Path 58"
                d="M45.529,55.3H42.154a.557.557,0,0,0-.554.554v1.582a.557.557,0,0,0,.554.554h3.376a.557.557,0,0,0,.554-.554V55.854A.557.557,0,0,0,45.529,55.3Z"
                transform="translate(-28.715 -38.876)"
                fill="#034363"
              />
              <path
                id="Path_59"
                data-name="Path 59"
                d="M69.829,55.3H66.454a.557.557,0,0,0-.554.554v1.582a.557.557,0,0,0,.554.554h3.376a.557.557,0,0,0,.554-.554V55.854A.557.557,0,0,0,69.829,55.3Z"
                transform="translate(-46.607 -38.876)"
                fill="#034363"
              />
              <path
                id="Path_60"
                data-name="Path 60"
                d="M21.229,72.8H17.854a.557.557,0,0,0-.554.554v1.582a.557.557,0,0,0,.554.554h3.376a.557.557,0,0,0,.554-.554V73.354A.541.541,0,0,0,21.229,72.8Z"
                transform="translate(-10.823 -51.761)"
                fill="#034363"
              />
              <path
                id="Path_61"
                data-name="Path 61"
                d="M45.529,72.8H42.154a.557.557,0,0,0-.554.554v1.582a.557.557,0,0,0,.554.554h3.376a.557.557,0,0,0,.554-.554V73.354A.541.541,0,0,0,45.529,72.8Z"
                transform="translate(-28.715 -51.761)"
                fill="#034363"
              />
              <path
                id="Path_62"
                data-name="Path 62"
                d="M69.829,72.8H66.454a.557.557,0,0,0-.554.554v1.582a.557.557,0,0,0,.554.554h3.376a.557.557,0,0,0,.554-.554V73.354A.541.541,0,0,0,69.829,72.8Z"
                transform="translate(-46.607 -51.761)"
                fill="#034363"
              />
            </g>
          </svg>
          <div class="dates">
            {{ rental.startDate.slice(0, 10) }} -
            {{ rental.endDate.slice(0, 10) }}
          </div>
        </div>
      </div>
    </div>
    <div class="description">
      <h3 class="descriptionTitle">Beskrivelse</h3>
      <p id="descriptionText">{{ rental.item.description }}</p>
    </div>
    <div class="profileContainer">
      <BaseProfile :user="rental.item.user"></BaseProfile>
    </div>
    <div v-if="isAccepted" class="cancelContainer">
      <div @click="cancelRental(rental.rentalId)" class="baseButton">
        KANSELLER
      </div>
    </div>
    <div v-if="!isAccepted && !isPending" class="cancelContainer">
      <div class="greyButton">Leieforhold avsluttet</div>
    </div>
    <p v-if="isPending" class="buttonText">
      Venter på svar fra utleier. Du kan fortsatt kansellere forespørselen din.
    </p>
    <div v-if="isPending" class="cancelContainer">
      <div @click="cancelRental(rental.rentalId)" class="baseButton">
        KANSELLER
      </div>
    </div>
  </div>
</template>

<script>
import BaseProfile from "@/components/baseTools/BaseProfile";
import { cancelRental } from "@/service/apiService";
export default {
  name: "RentalDetails",
  components: {
    BaseProfile,
  },
  methods: {
    async cancelRental(rentalId) {
      let response = await cancelRental(rentalId, this.$store.state.token);
      console.log(response.status);
      await this.$store.dispatch("setRental", response);
      await this.$router.push({ name: "RentalDetails" });
    },
  },
  computed: {
    isAccepted() {
      return (
        this.rental.status === "ACTIVE" || this.rental.status === "ACCEPTED"
      );
    },
    isFree() {
      return this.rental.item.price === 0;
    },
    isPending() {
      return this.rental.status === "PENDING";
    },
    rental() {
      return this.$store.state.currentRental;
    },
    status() {
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
          return "Default";
      }
    },
  },
};
</script>

<style scoped>
h1 {
  color: black;
  margin: 1rem 0;
}
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
  margin-right: 0.2rem;
}
.rating {
  display: flex;
  height: 1.5rem;
  margin-bottom: 1.5rem;
  grid-column: 3;
}
.stars {
  height: 100%;
}
.ratingSummary {
  font-size: 20px;
  margin: 0;
  padding-bottom: 2px;
}
.price {
  margin-bottom: 0.5rem;
}
.price p {
  font-size: 24px;
  font-weight: bold;
}
.statusContainer {
  display: flex;
  margin: 1rem 0 0.7rem 0;
}
.statusIcon {
  margin-right: 0.455rem;
  width: 1.5rem;
  height: 1.5rem;
}
.dateContainer {
  display: flex;
}
.dateIcon {
  margin-right: 0.4rem;
}
.dates {
  padding: 0.3rem 0;
}
.cancelContainer {
  display: flex;
  height: 2.5rem;
  margin: 2rem 1rem 2.5rem 1rem;
  justify-content: center;
}
.buttonText {
  margin-top: 2rem;
}
.baseButton {
  border-radius: 10px;
  background: #e21313;
  width: 95%;
  text-align: center;
  color: white;
  padding: 0.7rem 1rem;
}
.greyButton {
  border-radius: 10px;
  background: gray;
  width: 95%;
  text-align: center;
  color: white;
  padding: 0.7rem 1rem;
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
.productImage {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

#productImage {
  width: 100%;
  height: 100%;
}
#pricetag {
  font-size: 26px;
  font-weight: 500;
}
#descriptionText {
  color: #333333;
}
#ratingLocationContainer {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
#priceTitle {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 0;
}
#finishedIcon {
  fill: black;
}
.locationCity{
  display: inline-block;
}
</style>
