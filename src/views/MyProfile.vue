<template>
  <div class="container">
    <div class="profileContainer">
      <svg
        v-if="!hasProfileImage"
        class="image"
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
      <img
        v-if="hasProfileImage"
        class="actualProfileImage"
        :src="
          'http://localhost:8085/api/image/' + $store.state.userInfo.imageId
        "
        alt=""
      />

      <h2 class="name">{{ user.name }}</h2>
      <div class="rating">
        <StarRating
          star-size="20"
          :read-only="true"
          :rating="meanRating"
          :show-rating="false"
          active-color="#FB8500"
        ></StarRating>
      </div>
    </div>
    <div class="actions">
      <BaseCardHorizontal>
        <svg
          v-if="!hasProfileImage"
          class="sideIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          viewBox="0 0 45 45"
          @click="goToPage('EditUserData')"
        >
          <path
            id="noun-profile-1995071"
            d="M25,2.5A22.5,22.5,0,1,0,47.5,25,22.52,22.52,0,0,0,25,2.5Zm0,12.884a7.058,7.058,0,1,1-7.058,7.058A7.076,7.076,0,0,1,25,15.384ZM12.684,38.642V37.6a5.448,5.448,0,0,1,5.447-5.447H31.868A5.448,5.448,0,0,1,37.316,37.6v1.042a18.379,18.379,0,0,1-24.632,0Z"
            transform="translate(-2.5 -2.5)"
            fill="#126782"
            @click="goToPage('EditUserData')"
          />
        </svg>
        <img
          v-if="hasProfileImage"
          class="actualProfileImage small"
          :src="
            'http://localhost:8085/api/image/' +
            this.$store.state.userInfo.imageId
          "
          alt=""
          @click="goToPage('EditUserData')"
        />

        <div class="personalInfoContainer" @click="goToPage('EditUserData')">
          <div class="emailContainer">
            <svg
              class="icons"
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16.995"
              viewBox="0 0 17 16.995"
            >
              <path
                id="noun-email-2770972"
                d="M43.479,34.478a8.576,8.576,0,0,0-7.627-7.952,8.5,8.5,0,1,0-1.7,16.917,6.965,6.965,0,0,0,.868.036,8.107,8.107,0,0,0,4.7-1.446.807.807,0,0,0-.9-1.337A6.867,6.867,0,0,1,30.177,30.1a6.858,6.858,0,0,1,11.711,4.446,7.181,7.181,0,0,1-.361,2.639,1.566,1.566,0,0,1-1.482,1.048,1.543,1.543,0,0,1-1.554-1.554v-5.1a.841.841,0,0,0-.831-.831.818.818,0,0,0-.831.831v.253a3.8,3.8,0,0,0-2.277-.723,3.886,3.886,0,1,0,2.53,6.832,3.2,3.2,0,0,0,5.964-.181A10.174,10.174,0,0,0,43.479,34.478Zm-8.928,2.783a2.277,2.277,0,1,1,2.277-2.277A2.291,2.291,0,0,1,34.551,37.262Z"
                transform="translate(-26.484 -26.484)"
                fill="#fb8500"
              />
            </svg>
            <div class="personalInfoText">{{ user.email }}</div>
          </div>
          <div class="addressContainer">
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
            <div class="personalInfoTextAddress">
              {{ user.streetAddress }} {{ user.postalCode }}
              {{ user.postOffice }}
            </div>
          </div>
        </div>
        <svg
          class="sideIconRight"
          xmlns="http://www.w3.org/2000/svg"
          width="20.065"
          height="19.599"
          viewBox="0 0 20.065 19.599"
          @click="goToPage('EditUserData')"
        >
          <path
            id="np_edit_4779758_000000"
            d="M3.727,5.776H14.9L13.158,7.514H3.727a.009.009,0,0,0-.009.009V20.951a.009.009,0,0,0,.009.009H17.155a.009.009,0,0,0,.009-.009v-8.5L18.9,10.718V20.951A1.752,1.752,0,0,1,17.155,22.7H3.727A1.752,1.752,0,0,1,1.98,20.951V7.523A1.752,1.752,0,0,1,3.727,5.776Zm7.11,8.531A4,4,0,0,0,8.892,13.2l-.067.067-.631,3.685,3.685-.631.067-.067a4,4,0,0,0-1.109-1.945Zm8.579-11.1a.38.38,0,0,0-.536,0L17.628,4.462l3.054,3.054,1.253-1.253a.38.38,0,0,0,0-.536Zm.557,5.017L16.919,5.173,9.7,12.392a5.376,5.376,0,0,1,3.055,3.055Z"
            transform="translate(-1.98 -3.099)"
            fill="#034363"
            fill-rule="evenodd"
          />
        </svg>
      </BaseCardHorizontal>
      <BaseCardHorizontal>
        <svg
          class="sideIcon extraPadding"
          xmlns="http://www.w3.org/2000/svg"
          width="40.577"
          height="40.577"
          viewBox="0 0 40.577 40.577"
        >
          <g id="noun-news-1366052" transform="translate(-8.07 -8.07)">
            <path
              id="Path_18"
              data-name="Path 18"
              d="M48.647,13.876A5.806,5.806,0,0,0,42.84,8.07H13.876A5.806,5.806,0,0,0,8.07,13.876V42.84a5.806,5.806,0,0,0,5.806,5.806H42.84a5.806,5.806,0,0,0,5.806-5.806Zm-2.9,28.964a2.9,2.9,0,0,1-2.9,2.9H13.876a2.9,2.9,0,0,1-2.9-2.9V13.876a2.9,2.9,0,0,1,2.9-2.9H42.84a2.9,2.9,0,0,1,2.9,2.9Z"
            />
            <path
              id="Path_19"
              data-name="Path 19"
              d="M20.922,36.79H34.242a1.452,1.452,0,0,0,1.452-1.452V24.452A1.452,1.452,0,0,0,34.242,23H20.922a1.452,1.452,0,0,0-1.452,1.452V35.339A1.452,1.452,0,0,0,20.922,36.79ZM22.373,25.9H32.791v7.984H22.373Z"
              transform="translate(-5.884 -7.706)"
            />
            <path
              id="Path_20"
              data-name="Path 20"
              d="M67.723,23H59.982a1.452,1.452,0,0,0,0,2.9h7.742a1.452,1.452,0,0,0,0-2.9Z"
              transform="translate(-26.044 -7.706)"
            />
            <path
              id="Path_21"
              data-name="Path 21"
              d="M67.723,35H59.982a1.452,1.452,0,0,0,0,2.9h7.742a1.452,1.452,0,0,0,0-2.9Z"
              transform="translate(-26.044 -13.9)"
            />
            <path
              id="Path_22"
              data-name="Path 22"
              d="M67.723,47H59.982a1.452,1.452,0,0,0,0,2.9h7.742a1.452,1.452,0,0,0,0-2.9Z"
              transform="translate(-26.044 -20.093)"
            />
            <path
              id="Path_23"
              data-name="Path 23"
              d="M47.594,59H20.982a1.452,1.452,0,0,0,0,2.9H47.594a1.452,1.452,0,1,0,0-2.9Z"
              transform="translate(-5.915 -26.287)"
            />
            <path
              id="Path_24"
              data-name="Path 24"
              d="M47.594,71H20.982a1.452,1.452,0,1,0,0,2.9H47.594a1.452,1.452,0,1,0,0-2.9Z"
              transform="translate(-5.915 -32.481)"
            />
          </g>
        </svg>
        <div
          @click="goToPage('MyAds')"
          class="actionInfoText"
          id="extraPadding"
        >
          Mine annonser
        </div>
        <svg
          class="sideIconRight"
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
      </BaseCardHorizontal>
      <BaseCardHorizontal>
        <svg
          class="sideIcon"
          id="Group_64"
          data-name="Group 64"
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="33.385"
          viewBox="0 0 35 33.385"
        >
          <g
            id="filled_star"
            data-name="filled star"
            transform="translate(0 0)"
          >
            <path
              id="Path_1"
              data-name="Path 1"
              d="M29.54,966.153l3.963,11.89a.922.922,0,0,0,.877.635H47.04l-10.3,7.533a.922.922,0,0,0-.333,1.029l3.963,12.3L30.084,992.02a.922.922,0,0,0-1.089,0L18.71,999.538l3.963-12.3a.922.922,0,0,0-.333-1.028l-10.3-7.533H24.7a.922.922,0,0,0,.877-.635l3.963-11.89Z"
              transform="translate(-12.04 -966.153)"
              fill="#fb8500"
              fill-rule="evenodd"
            />
          </g>
        </svg>
        <div @click="goToRatings" class="actionInfoText">Mine anmeldelser</div>
        <svg
          class="sideIconRight"
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
      </BaseCardHorizontal>
    </div>
  </div>
</template>

<script>
import BaseCardHorizontal from "@/components/baseTools/BaseCardHorizontal";
import StarRating from "vue-star-rating";
export default {
  name: "MyProfile",
  components: {
    BaseCardHorizontal,
    StarRating,
  },
  computed: {
    user() {
      return this.$store.state.userInfo;
    },
    hasProfileImage() {
      return this.$store.state.userInfo.imageId !== null;
    },
    meanRating() {
      return this.$store.state.meanRating;
    },
  },
  methods: {
    goToPage(to) {
      this.$router.push({ name: to });
    },
    goToRatings() {
      this.$router.push({
        name: "RatingsView",
        params: { userId: this.$store.state.userInfo.userId },
      });
    },
  },
  mounted() {
    this.$store.dispatch("storeMeanRating");
  },
};
</script>

<style scoped>
.container {
  margin: 2rem 0;
}
.profileContainer {
  margin-bottom: 3rem;
}
.image {
  width: 130px;
  height: 130px;
  margin-bottom: 2rem;
}
.name {
  font-size: 28px;
  font-weight: 500;
  color: black;
  margin-bottom: 0.5rem;
}
.verified {
  display: flex;
  align-items: center;
  justify-content: center;
}
.verifiedIcon {
  width: 1.5rem;
  fill: #8ecae6;
  margin-right: 0.5rem;
}
.verifiedText {
  font-size: 22px;
}
.actions {
  background: #e5ecf1;
  padding: 1rem;
}

.personalInfoContainer {
  padding-top: 1rem;
}
.emailContainer {
  display: flex;
  margin: 0.5rem 0;
}
.icons {
  height: 1rem;
  width: 1rem;
  margin-right: 0.5rem;
  fill: #fb8500;
}
.addressContainer {
  display: flex;
  margin: 0.5rem 0;
}
.personalInfoText {
  margin-top: -0.3rem;
}
.personalInfoTextAddress {
  margin-top: -0.2rem;
  margin-left: 0.2rem;
  text-align: left;
}

.sideIcon {
  width: 50px;
  height: 50px;
  padding: 1rem 1.5rem;
}
.sideIconRight {
  height: 1.5rem;
  width: 1.5rem;
  padding: 32px 20px;
  fill: black;
}
.extraPadding {
  padding: 1.3rem 1.5rem 1rem 1.5rem;
}
.actionInfoText {
  padding: 2rem 6.2rem 2rem 0;
}
.actualProfileImage {
  border-radius: 50%;
  width: 9rem;
  height: 9rem;
}
.small {
  width: 4rem;
  height: 4rem;
  margin: 10px 0 0 1.25rem;
}

#extraPadding {
  padding-right: 6.9rem;
}
.rating {
  display: flex;
  justify-content: center;
}
@media (max-width: 420px) {
  #extraPadding {
    padding-right: 4rem;
  }
  .actionInfoText {
    padding: 2rem 3rem 2rem 0;
  }
}
</style>
