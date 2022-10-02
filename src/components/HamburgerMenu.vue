<template>
  <div class="hamburgerContainer">
    <div class="profile">
      <div @click="goMyProfile" class="profileContainer">
        <svg
          class="profileImage"
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          viewBox="0 0 45 45"
          v-if="isLoggedIn && !hasProfileImage"
        >
          <path
            id="noun-profile-1995071"
            d="M25,2.5A22.5,22.5,0,1,0,47.5,25,22.52,22.52,0,0,0,25,2.5Zm0,12.884a7.058,7.058,0,1,1-7.058,7.058A7.076,7.076,0,0,1,25,15.384ZM12.684,38.642V37.6a5.448,5.448,0,0,1,5.447-5.447H31.868A5.448,5.448,0,0,1,37.316,37.6v1.042a18.379,18.379,0,0,1-24.632,0Z"
            transform="translate(-2.5 -2.5)"
            fill="#fff"
          />
        </svg>
        <div id="profileImage">
          <img
            v-if="isLoggedIn && hasProfileImage"
            class="actualProfileImage"
            :src="
              'http://localhost:8085/api/image/' +
              this.$store.state.userInfo.imageId
            "
            alt=""
          />
        </div>
        <p class="name">{{ this.$store.state.userInfo.name }}</p>
      </div>
    </div>
    <div class="hamburgerMeta">
      <div class="hamburgerActions">
        <div @click="emitRouteChange('HomeView')">Hjem</div>
        <div @click="goMyProfile">Min profil</div>
        <div data-tesid="loggedInMenus" v-if="isLoggedIn">
          <div
            @click="emitRouteChange('AddItemComponent')"
            id="routerLink"
            v-if="isLoggedIn"
          >
            Lei ut
          </div>
          <div @click="emitRouteChange('MyRentals')">Chat</div>
        </div>
        <div
          v-if="this.$store.state.userInfo.role === 'ADMIN'"
          @click="emitRouteChange('UserView')"
        >
          Se alle brukere
        </div>
      </div>
      <div class="hamburgerSupport">
        <div @click="emitRouteChange('faq')">FAQ</div>
        <div
          v-if="this.$store.state.userInfo.role === 'USER'"
          @click="goSendFeedback"
        >
          Send tilbakemelding
        </div>
        <div
          v-if="this.$store.state.userInfo.role === 'ADMIN'"
          @click="emitRouteChange('FeedbackView')"
        >
          Se tilbakemeldinger
        </div>
      </div>
      <div class="hamburgerLog">
        <div data-testid="logOut" @click="logout" v-if="isLoggedIn">
          Logg ut
        </div>
        <div v-if="!isLoggedIn">
          <div @click="emitRouteChange('LoginComponent')">Logg inn</div>
          <div @click="emitRouteChange('RegistrationComponent')">
            Registrer bruker
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HamburgerMenu",
  methods: {
    emitRouteChange(to) {
      if (to === "AddItemComponent") {
        console.log("set currentItem to null");
        this.$store.dispatch("setItem", "");
      }
      this.$router.push({ name: to });
      this.$emit("routeChange");
    },
    async logout() {
      await this.$router.push({ name: "HomeView" });
      this.$store.dispatch("resetState");
      this.$store.dispatch("logoutStore");
    },
    goMyProfile() {
      if (this.isLoggedIn) {
        this.$store.dispatch("storeMeanRating");
        this.$router.push({ name: "MyProfile" });
      } else {
        this.$router.push({ name: "LoginComponent" });
      }
      this.$emit("routeChange");
    },
    goSendFeedback() {
      if (this.isLoggedIn) {
        this.$router.push({ name: "AddFeedbackWebPageComponent" });
      } else {
        this.$router.push({ name: "LoginComponent" });
      }
      this.$emit("routeChange");
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.token !== null;
    },
    hasProfileImage() {
      return this.$store.state.userInfo.imageId !== null;
    },
  },
};
</script>

<style scoped>
.hamburgerContainer {
  position: absolute;
  width: 17.5rem;
  height: 100%;
  z-index: 100;
  background: white;
}
.profile {
  background: #126782;
  height: 6rem;
  color: white;
  padding-left: 1.2rem;
}
.profileContainer {
  position: absolute;
  display: flex;
  margin-top: 1.8rem;
}
.profileImage {
  height: 45px;
  width: 45px;
}
.name {
  padding: 0.8rem;
  font-size: 22px;
  font-weight: 500;
  margin-top: -5px;
}

.hamburgerMeta {
  text-align: left;
  margin: 1rem 1.2rem 0 1.2rem;
  font-size: 20px;
}
.hamburgerMeta div {
  margin-bottom: 1rem;
}
.hamburgerActions {
  border-bottom: solid black 1px;
}
.hamburgerSupport {
  border-bottom: solid black 1px;
}
.hamburgerLog {
}
.actualProfileImage {
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  object-fit: cover;
}

#routerLink {
  margin-bottom: 1rem;
}
</style>
