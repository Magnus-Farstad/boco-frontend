<template>
  <div @click="goToChat" class="customerContainer">
    <div class="profileContainer">
      <svg
        v-if="rental.user.imageId === -1 || rental.user.imageId === null"
        class="profileImage"
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
        viewBox="0 0 45 45"
      >
        <path
          id="noun-profile-1995071"
          d="M25,2.5A22.5,22.5,0,1,0,47.5,25,22.52,22.52,0,0,0,25,2.5Zm0,12.884a7.058,7.058,0,1,1-7.058,7.058A7.076,7.076,0,0,1,25,15.384ZM12.684,38.642V37.6a5.448,5.448,0,0,1,5.447-5.447H31.868A5.448,5.448,0,0,1,37.316,37.6v1.042a18.379,18.379,0,0,1-24.632,0Z"
          transform="translate(-2.5 -2.5)"
          fill="#126782"
        />
      </svg>
      <div v-else id="profileImageContainer">
        <img
          id="profileImage"
          class="productImage"
          :src="'http://localhost:8085/api/image/' + rental.user.imageId"
          alt="profilbilde"
        />
      </div>
      <div class="profileInfo">
        <h3 class="name">{{ rental.user.name }}</h3>
        <div class="verifiedContainer">
          <div class="rating">
            <StarRating
              star-size="20"
              :read-only="true"
              :rating="meanRating"
              :show-rating="false"
            ></StarRating>
          </div>
        </div>
      </div>
    </div>
    <div class="metaContainer">
      <div class="left">
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
            class="statusIcon"
            v-if="status === 'Avsluttet'"
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
                fill="#034363"
              />
            </g>
          </svg>
          <div class="status">{{ status }}</div>
        </div>
        <div class="pickupContainer">
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
          <div class="pickupOption" v-if="rental.deliveryInfo === 'DELIVERED'">
            Leveres til meg
          </div>
          <div class="pickupOption" v-else>Hentes hos deg</div>
        </div>
      </div>
      <div class="right">
        <div class="dateContainer" id="fromDate">
          <div class="dateText">Fra dato:</div>
          <div class="date">{{ rental.startDate.slice(0, 10) }}</div>
        </div>
        <div class="dateContainer">
          <div class="dateText">Til dato:</div>
          <div class="date">{{ rental.endDate.slice(0, 10) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMeanRating } from "@/service/apiService";
import StarRating from "vue-star-rating";

export default {
  name: "CustomerCard",
  components: {
    StarRating,
  },
  data() {
    return {
      dropDownClicked: false,
      meanRating: 0.0,
    };
  },
  props: {
    rental: {
      type: Object,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async goToChat() {
      this.$store.dispatch("setRental", this.rental);
      await this.$router.push({ name: "MessageView" });
    },
  },
  computed: {
    isAccepted() {
      return (
        this.rental.status === "ACTIVE" || this.rental.status === "ACCEPTED"
      );
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
  async mounted() {
    this.meanRating = await getMeanRating(this.user.userId);
    console.log("MeanRating til bruker er: " + this.meanRating);
  },
};
</script>

<style scoped>
.customerContainer {
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 3px 6px #00000029;
  padding: 1rem;
  margin-bottom: 2rem;
}
.profileContainer {
  display: flex;
  margin-bottom: 1.5rem;
}
.profileInfo {
  margin-left: 1rem;
  padding-top: 0.2rem;
}

.metaContainer {
  display: flex;
  justify-content: space-between;
}
.verifiedContainer {
  display: flex;
}
.verifiedIcon {
  width: 1.1rem;
  height: 1.1rem;
  fill: #8ecae6;
  margin-right: 0.5rem;
}
.pickupContainer {
  display: flex;
}
.statusContainer {
  display: flex;
  margin-bottom: 0.5rem;
}
.statusIcon {
  margin-right: 0.625rem;
}
.positionMarker {
  height: 1.3rem;
  width: 1.3rem;
  fill: #fb8500;
  margin-right: 0.5rem;
}

.dateContainer {
  display: flex;
  justify-content: space-between;
}
.date {
  margin-left: 1rem;
}

.dropDown {
  margin: 1.5rem 0 1rem 0;
}
.dropDownText {
  margin-bottom: 2rem;
}
.buttons {
  display: flex;
  justify-content: space-evenly;
  padding: 0 0.5rem;
}
.button {
  border-radius: 10px;
  background: #e21313;
  width: 7.5rem;
  text-align: center;
  color: white;
  padding: 0.7rem 1rem;
}

.alternateDropDown {
  margin: 2rem 0 1rem 0;
}
.name {
  font-weight: 500;
}
#acceptButton {
  background: #37b43f;
}
#fromDate {
  margin-bottom: 0.5rem;
}
#cancelButton {
  margin: 0 auto;
}
#profileImageContainer {
  height: 45px;
  width: 45px;
}
#profileImage {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
}
</style>
