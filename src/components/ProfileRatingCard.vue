<template>
  <div class="profileRatingContainer">
    <div class="profileMetaContainer">
      <div class="ratingProfileImageContainer">
        <svg
          v-if="
            rating.rental.user.imageId === -1 ||
            rating.rental.user.imageId === null
          "
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
        <img
          v-else
          id="profileImage"
          class="profileImage"
          :src="'http://localhost:8085/api/image/' + user.imageId"
          alt=""
        />
      </div>
      <div class="profileInfo">
        <p id="profileName">{{ user.name }}</p>
        <p>{{ rented }} {{ rating.rental.item.title }}</p>
        <div class="rating">
          <StarRating
            star-size="20"
            :read-only="true"
            :rating="rating.rate"
            :show-rating="false"
            active-color="#FB8500"
          ></StarRating>
        </div>
        <div class="description">{{ rating.feedback }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  name: "ProfileRatingCard",
  components: {
    StarRating,
  },
  props: {
    ratingUser: {
      type: Object,
      default: null,
    },
    ratingOwner: {
      type: Object,
      default: null,
    },
  },
  computed: {
    user() {
      if (this.ratingUser) {
        return this.ratingUser.rental.item.user;
      } else {
        return this.ratingOwner.rental.user;
      }
    },
    rating() {
      if (this.ratingUser) {
        return this.ratingUser;
      } else {
        return this.ratingOwner;
      }
    },
    rented() {
      if (this.ratingUser) {
        return "Har utleid";
      } else {
        return "Har leid";
      }
    },
  },
};
</script>

<style scoped>
.profileRatingContainer {
  border-radius: 20px;
  box-shadow: 0 3px 6px #00000029;
  background: white;
  margin: 1rem 0;
}
.profileMetaContainer {
  display: flex;
}
.ratingProfileImageContainer {
  height: 40px;
  width: 40px;
  padding: 1rem;
}
.profileInfo {
  text-align: left;
  padding: 1rem 0;
}
.profileImage {
  border-radius: 50%;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.description {
  margin-top: 1rem;
}

#profileName {
  font-weight: bold;
  margin-bottom: 0.3rem;
}
</style>
