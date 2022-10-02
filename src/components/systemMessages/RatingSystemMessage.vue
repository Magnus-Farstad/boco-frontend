<template>
  <div class="systemMessageContainer">
    <div id="rateMessage" @click="goToRating">
      <label> Hva synes du om leieforholdet?</label>
      <div id="ratingLink">
        Gi <strong>{{ name }}</strong> en vurdering
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="16.473"
          viewBox="0 0 20 16.473"
        >
          <path
            id="noun-arrow-2094742"
            d="M19.527,15.758,12.943,9.174a1.612,1.612,0,1,0-2.28,2.278l3.892,3.886H1.612a1.612,1.612,0,0,0,0,3.224H14.519l-3.856,3.862a1.612,1.612,0,0,0,2.28,2.278l6.584-6.584A1.6,1.6,0,0,0,20,16.977a.254.254,0,0,0,0-.04.282.282,0,0,0,0-.04A1.614,1.614,0,0,0,19.527,15.758Z"
            transform="translate(0 -8.672)"
            fill="#fb8500"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RatingSystemMessage",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToRating() {
      this.$router.push({ name: "GiveRating" });
    },
  },
};
</script>

<style scoped>
.systemMessageContainer {
  background-color: rgba(142, 202, 230, 0.5);
  max-width: 280px;
  width: 100%;
  border-radius: 0 20px 20px 0;
  padding: 15px 20px;
  border-left: 3px solid #fb8500;
  margin-bottom: 1rem;
}
#rateMessage {
  font-size: 15px;
  text-align: left;
}
#rateMessage label {
  font-size: 14px;
}
#rateMessage svg {
  margin-bottom: -5px;
}
</style>
