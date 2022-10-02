<template>
  <div class="container">
    <div class="profileImage">
      <svg
        v-if="user.imageId === -1 || user.imageId === null"
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
        id="profileImage"
        v-else
        class="productImage"
        :src="'http://localhost:8085/api/image/' + user.imageId"
      />
    </div>
    <div class="profileMeta">
      <p class="name">{{ user.name }}</p>
      <div class="verified">
        <div class="rating">
          <StarRating
            star-size="20"
            :read-only="true"
            :rating="this.meanRating"
            :show-rating="false"
            active-color="#FB8500"
          ></StarRating>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import { getMeanRating } from "@/service/apiService";
export default {
  name: "BaseProfile",
  components: {
    StarRating,
  },
  data() {
    return {
      meanRating: 0.0,
    };
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  async mounted() {
    this.meanRating = await getMeanRating(this.user.userId);

    console.log("MeanRating til bruker er: " + this.meanRating);
  },
};
</script>

<style scoped>
.container {
  border: none;
  background-color: #f4f4f4;
  border-radius: 15px;
  display: flex;
}
.profileImage {
  height: 45px;
  width: 45px;
  border-radius: 50%;
  margin: 1rem;
}
.profileMeta {
  margin: 1rem 1rem 1rem 0;
}
.name {
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  margin-left: 2px;
}
.verified {
  display: flex;
  height: 1.3rem;
  margin-top: 0.3rem;
}
.verifiedIcon {
  height: 100%;
  fill: #8ecae6;
}

#verifiedText {
  margin: 0 0 0 0.5rem;
}
#profileImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
</style>
