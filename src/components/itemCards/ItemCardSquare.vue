<template>
  <div class="itemCardContainer" tabindex="0" role="button">
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
          id="cardImage"
          alt="Gjenstand til leie"
        />
        <p class="priceTag" v-if="!isFree">{{ item.price }} kr/dag</p>
        <p class="priceTag" v-else>GRATIS</p>
      </div>
      <div class="itemMeta">
        <div class="itemInfo">
          <p>{{ item.postOffice }}</p>
          <h4>{{ item.title }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCardSquare",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isFree() {
      return this.item.price === 0;
    },
  },
};
</script>

<style scoped>
p {
  margin: 5px 0 2px 0;
  font-size: 11px;
  color: #707070;
}

h4 {
  margin: 5px 0 0 0;
  font-size: 16px;
  font-weight: 400;
}

.itemCardContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
}

.itemCard {
  position: relative;
  display: grid;
  grid-template-rows: 128px 23px 50px;
  width: 170px;
  height: 200px;
  border: none;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 3px 6px #00000029;
}

img {
  width: 10.625rem;
  border-radius: 10px 10px 0 0;
}

.itemMeta {
  text-align: left;
}

.itemInfo {
  padding-left: 10px;
  padding-bottom: 5px;
}

.imageContainer {
  height: 8rem;
}

.priceTag {
  position: absolute;
  background: #126782;
  border-radius: 0 10px 0 0;
  color: white;
  text-align: left;
  padding: 3px 10px;
  width: fit-content;
  bottom: 69.5px;
  font-size: 12px;
  font-weight: 500;
}

#cardImage {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
@media (max-width: 427px){
  .itemCardContainer{
    padding:10px
  }
}

@media(max-width: 400px){
  .itemCard{
    height: 190px;
    width: 160px;
  }
  .priceTag{
    bottom:60px;
  }
}
@media(max-width: 380px){
  .itemCard{
    height: 180px;
    width: 150px;
  }
  .imageContainer{
    height: 120px;
  }
  .priceTag{
    bottom: 58px;
  }
  .itemInfo p{
    margin:0 0 2px 0;
  }
  .itemInfo h4{
    margin:0;
    font-size: 14px;
  }
}
</style>
