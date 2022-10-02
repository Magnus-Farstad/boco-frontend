<template>
  <div class="container">
    <div class="headerContainer">
      <div class="myImageContainer">
        <svg
          v-if="user.imageId === -1 || user.imageId === null"
          class="myProfileImage"
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
          v-else
          id="profileImage"
          class="myProfileImage"
          :src="'http://localhost:8085/api/image/' + user.imageId"
          alt=""
        />
      </div>
      <div class="headerName">
        <h2>{{ user.name }}</h2>
        <div class="rating">
          <StarRating
            star-size="20"
            :read-only="true"
            :rating="$store.state.meanRating"
            :show-rating="false"
            active-color="#FB8500"
          ></StarRating>
        </div>
      </div>
    </div>
    <div class="allRatingsContainer">
      <div class="ratingsHeader">
        <span id="name">{{ user.name }}</span>
        <span>har {{ countRatings }} vurderinger</span>
      </div>
      <div class="ratings">
        <ProfileRatingCard
          v-for="rating in ratingsOwner"
          :key="rating.ratingId"
          :ratingOwner="rating"
        ></ProfileRatingCard>
        <ProfileRatingCard
          v-for="rating in ratingsUser"
          :key="rating.ratingId"
          :ratingUser="rating"
        ></ProfileRatingCard>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import ProfileRatingCard from "@/components/ProfileRatingCard";
export default {
  name: "RatingsView",
  components: {
    ProfileRatingCard,
    StarRating,
  },
  computed: {
    ratingsOwner() {
      return this.$store.state.currentRatingsOwner;
    },
    ratingsUser() {
      return this.$store.state.currentRatingsUser;
    },
    user() {
      return this.$store.state.userInfo;
    },
    countRatings() {
      if (!this.ratingsUser && !this.ratingsOwner) {
        return 0;
      } else {
        return this.ratingsUser.length + this.ratingsOwner.length;
      }
    },
  },
  mounted() {
    this.$store.dispatch("getAllRatings");
  },
};
</script>

<style scoped>
span {
  font-size: 22px;
}

.allRatingsContainer {
  background: #e5ecf1;
  padding: 1rem;
}
.headerContainer {
  display: flex;
  padding: 1rem 2rem;
}
.headerName {
  padding: 1rem;
  text-align: left;
}
.ratingsHeader {
  text-align: left;
}
.myImageContainer {
  height: 70px;
  width: 70px;
}
.myProfileImage {
  border-radius: 50%;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

#name {
  font-weight: bold;
  margin-right: 0.5rem;
}
</style>
