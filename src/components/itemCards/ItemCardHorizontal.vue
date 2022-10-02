<template>
  <div class="itemCardContainer" tabindex="0">
    <div class="itemCard">
      <div class="imageContainer">
        <img
          v-if="item.imageId === -1 || item.imageId === null"
          :src="require('../../assets/6efa4b_motorsag-stihl-ms181c.jpg')"
          alt="motorsag"
        />
        <img
          v-else
          :src="'http://localhost:8085/api/image/' + item.imageId"
          id="adImage"
          alt="Gjenstand til leie"
        />
      </div>
      <div class="itemMeta">
        <div class="itemInfo">
          <div class="dateInfo" v-if="!dateIsEmpty">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25.026"
              viewBox="0 0 25 25.026"
              aria-label="kalender ikon"
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
            <label>
              {{ startDate.slice(0, 10) }} - {{ endDate.slice(0, 10) }}</label
            >
          </div>
          <div class="itemInfoSections">
            <div>
              <div class="info" v-if="dateIsEmpty" id="positionInfo">
                <svg
                  class="icons"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 96 96"
                  enable-background="new 0 0 96 96"
                  xml:space="preserve"
                  aria-label="Posisjons ikon"
                >
                  <path
                    d="M48,9C31.86,9,18.73,22.131,18.73,38.271c0,14.13,23.756,41.948,28.518,47.381L48,86.512l0.752-0.857  c4.762-5.432,28.518-33.24,28.518-47.383C77.27,22.131,64.14,9,48,9z M48,48c-5.374,0-9.73-4.356-9.73-9.73s4.356-9.73,9.73-9.73  s9.73,4.356,9.73,9.73S53.374,48,48,48z"
                  ></path>
                </svg>
                <p>{{ item.postOffice }}</p>
              </div>
              <h2>{{ item.title }}</h2>
            </div>
            <div class="statusContainer" aria-label="status ikon">
              <svg
                v-if="statusWrapper === 'Aktiv'"
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
                v-if="statusWrapper === 'Avventer'"
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
                v-if="statusWrapper === 'Akseptert'"
                class="statusIcon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20.004"
                viewBox="0 0 20 20.004"
              >
                <g
                  id="noun-checkmark-2573373"
                  transform="translate(-1.002 -0.999)"
                >
                  <path
                    id="Path_42"
                    data-name="Path 42"
                    d="M18.072,18.076a10,10,0,1,0-14.14,0A10,10,0,0,0,18.072,18.076ZM6.183,11.212a.63.63,0,0,1,.888,0l2.038,2.032L14.934,7.43a.636.636,0,0,1,.888.006.623.623,0,0,1,0,.881L9.546,14.569a.6.6,0,0,1-.438.181.614.614,0,0,1-.444-.181L6.183,12.1A.63.63,0,0,1,6.183,11.212Z"
                    fill="#37b43f"
                  />
                </g>
              </svg>
              <svg
                v-if="statusWrapper === 'Kansellert'"
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
                v-if="statusWrapper === 'Avvist'"
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
                v-if="statusWrapper === 'Avsluttet'"
                class="statusIcon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20.004"
                viewBox="0 0 20 20.004"
              >
                <g
                  id="noun-checkmark-2573373"
                  transform="translate(-1.002 -0.999)"
                >
                  <path
                    id="Path_42"
                    data-name="Path 42"
                    d="M18.072,18.076a10,10,0,1,0-14.14,0A10,10,0,0,0,18.072,18.076ZM6.183,11.212a.63.63,0,0,1,.888,0l2.038,2.032L14.934,7.43a.636.636,0,0,1,.888.006.623.623,0,0,1,0,.881L9.546,14.569a.6.6,0,0,1-.438.181.614.614,0,0,1-.444-.181L6.183,12.1A.63.63,0,0,1,6.183,11.212Z"
                    fill="#034363"
                  />
                </g>
              </svg>
              <div class="status">{{ statusWrapper }}</div>
            </div>
          </div>

          <div id="priceAndDeliveryContainer">
            <div id="priceRatingContainer">
              <div class="info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 14 14"
                  id="priceicon"
                  aria-label="pris ikon"
                >
                  <g
                    id="noun-coin-3324289"
                    transform="translate(-230.91 -122.91)"
                  >
                    <path
                      id="Path_9"
                      data-name="Path 9"
                      d="M13.91,6.91a7,7,0,1,0,7,7A7,7,0,0,0,13.91,6.91ZM14.4,16.957h-.067v.784a.418.418,0,0,1-.837,0v-.784h-.915a.418.418,0,1,1,0-.837H14.4a.9.9,0,0,0,0-1.791h-.971a1.733,1.733,0,0,1,0-3.465h.067v-.784a.418.418,0,0,1,.837,0v.784h.915a.418.418,0,1,1,0,.837H13.425a.9.9,0,1,0,0,1.791H14.4a1.733,1.733,0,1,1,0,3.465Z"
                      transform="translate(224 116)"
                      fill="#fb8500"
                    />
                  </g>
                </svg>
                <label v-if="!isFree">{{ item.price }} kr/dag</label>
                <label v-else>GRATIS</label>
              </div>
            </div>

            <div class="deliveryInfo" v-if="!deliveryInfoIsEmpty">
              <div class="info">
                <svg
                  class="icons"
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

                <label> Levering:{{ deliveryInfoName }}</label>
              </div>
            </div>
          </div>
          <div
              @click.stop="goToEdit(item)"
              v-if="this.$route.name === 'MyAds'"
              id="editContainer"
              tabindex="0"
              aria-label="rediger gjenstand"
          >
            <svg
              class="statusIcon"
              xmlns="http://www.w3.org/2000/svg"
              width="20.065"
              height="19.599"
              viewBox="0 0 20.065 19.599"
            >
              <path
                id="np_edit_4779758_000000"
                d="M3.727,5.776H14.9L13.158,7.514H3.727a.009.009,0,0,0-.009.009V20.951a.009.009,0,0,0,.009.009H17.155a.009.009,0,0,0,.009-.009v-8.5L18.9,10.718V20.951A1.752,1.752,0,0,1,17.155,22.7H3.727A1.752,1.752,0,0,1,1.98,20.951V7.523A1.752,1.752,0,0,1,3.727,5.776Zm7.11,8.531A4,4,0,0,0,8.892,13.2l-.067.067-.631,3.685,3.685-.631.067-.067a4,4,0,0,0-1.109-1.945Zm8.579-11.1a.38.38,0,0,0-.536,0L17.628,4.462l3.054,3.054,1.253-1.253a.38.38,0,0,0,0-.536Zm.557,5.017L16.919,5.173,9.7,12.392a5.376,5.376,0,0,1,3.055,3.055Z"
                transform="translate(-1.98 -3.099)"
                fill="#034363"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCardHorizontal",
  props: {
    item: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      default: "",
    },
    startDate: {
      type: String,
      default: "",
    },
    endDate: {
      type: String,
      default: "",
    },
    deliveryInfo: {
      type: String,
      default: "",
    },
  },
  methods: {
    goToEdit(item) {
      this.$store.dispatch("setItem", item);
      this.$router.push({ name: "AddItemComponent" });
    },
  },
  computed: {
    statusWrapper() {
      switch (this.status) {
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
    isFree() {
      return this.item.price === 0;
    },

    deliveryInfoIsEmpty() {
      if (this.deliveryInfo === "") {
        return true;
      } else {
        return false;
      }
    },
    dateIsEmpty() {
      if (this.startDate === "" && this.endDate === "") {
        return true;
      } else {
        return false;
      }
    },
    deliveryInfoName() {
      if (this.deliveryInfo === "DELIVERED") {
        return "Leveres";
      } else {
        return "Hentes";
      }
    },
  },
};
</script>

<style scoped>
p {
  margin: 2px 0 2px 0;
  font-size: 11px;
}
h4 {
  margin: 5px 0 0 0;
  font-size: 16px;
  font-weight: 400;
}
h2 {
  font-size: 17px;
  font-weight: 400;
  margin-top: 2px;
}

.itemCardContainer {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
}
.itemCard {
  position: relative;
  display: grid;
  grid-template-columns: 39.5% 60.5%;
  height: 108px;
  width: 100%;
  border: none;
  border-radius: 15px;
  box-shadow: 0 3px 10px #00000029;
  padding-bottom: 4px;
}
.itemMeta {
  text-align: left;
}
.itemInfo {
  padding-left: 1rem;
  margin-top: 10px;
}
.imageContainer {
  border-radius: 15px 0 0 15px;
  height: 112px;
}
img {
  max-width: 150px;
  width: 100%;
  border-radius: 15px 0 0 15px;
  height: 100%;
}
.icons {
  fill: var(--orange);
  height: 15px;
  padding-right: 3px;
}
.info {
  display: flex;
  flex-direction: row;
}
.itemInfoSections {
  display: flex;
  justify-content: space-between;
}
.statusContainer {
  display: flex;
  margin: 1rem 0 0.7rem 0;
}
.statusIcon {
  width: 1rem;
  height: 1rem;
}
.status {
  font-size: 11px;
  margin: 0 1rem 0 0.4rem;
  padding-top: 0.1rem;
}
#positionInfo {
  padding-top: 15px;
}
#priceRatingContainer {
  display: inline-block;
  margin-top: 10px;
  padding-right: 1rem;
  font-size: 12px;
}
#adImage {
  object-fit: cover;
}
#priceicon {
  margin-right: 5px;
  margin-top: 2px;
}
.deliveryInfo {
  display: inline-block;
  font-size: 12px;
}
.dateInfo {
  font-size: 12px;
}
.dateInfo svg {
  width: 17px;
  margin-bottom: -5px;
}
.dateInfo label {
  margin-left: 5px;
}
#editContainer {
  position: absolute;
  top: 15px;
  right: 25px;
}
</style>
