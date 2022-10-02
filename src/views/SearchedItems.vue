<template>
  <div class="mainContent">
    <form class="form" @submit.prevent="submit" id="form">
      <div id="searchbarContainer">
        <BaseSearchBar
            :label="'Søk...'"
            v-model="searchSentence"
        ></BaseSearchBar>
        <button class="searchButton">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 100 100"
              x="0px"
              y="0px"
          >
            <title>Artboard 19</title>
            <path
                d="M45.5,20a25.5,25.5,0,1,0,15,46.13l12.7,12.7a4,4,0,0,0,5.66-5.66l-12.7-12.7A25.48,25.48,0,0,0,45.5,20Zm0,43A17.5,17.5,0,1,1,63,45.5,17.52,17.52,0,0,1,45.5,63Z"
            ></path>
          </svg>
        </button>
      </div>
      <div class="optionsContainer">
        <div class="itemsHeader">
          <div>
            <h3>Søkeresultater</h3>
            <p>Viser {{ itemSize }} resultater for {{ searchSentence }}</p>
          </div>
          <div id="iconContainer">
            <svg
                v-if="gridView"
                xmlns="http://www.w3.org/2000/svg"
                width="39.2"
                height="28"
                viewBox="0 0 39.2 28"
                @click="changeView"
            >
              <g id="noun-list-4781885" transform="translate(-147 -153)">
                <g
                    id="Group_78"
                    data-name="Group 78"
                    transform="translate(147 153)"
                >
                  <g id="Group_76" data-name="Group 76">
                    <path
                        id="Path_40"
                        data-name="Path 40"
                        d="M147.8,175.4a2.8,2.8,0,1,0,2.8,2.8A2.8,2.8,0,0,0,147.8,175.4Zm0-11.2a2.8,2.8,0,1,0,2.8,2.8A2.8,2.8,0,0,0,147.8,164.2Zm0-11.2a2.8,2.8,0,1,0,2.8,2.8A2.8,2.8,0,0,0,147.8,153Z"
                        transform="translate(-145 -153)"
                        fill="#034363"
                        fill-rule="evenodd"
                    />
                  </g>
                  <g
                      id="Group_77"
                      data-name="Group 77"
                      transform="translate(7.467)"
                  >
                    <path
                        id="Path_41"
                        data-name="Path 41"
                        d="M153,178.2a2.8,2.8,0,0,0,2.8,2.8h26.133a2.8,2.8,0,0,0,2.8-2.8h0a2.8,2.8,0,0,0-2.8-2.8H155.8A2.8,2.8,0,0,0,153,178.2Zm0-11.2a2.8,2.8,0,0,0,2.8,2.8h26.133a2.8,2.8,0,0,0,2.8-2.8h0a2.8,2.8,0,0,0-2.8-2.8H155.8A2.8,2.8,0,0,0,153,167Zm0-11.2a2.8,2.8,0,0,0,2.8,2.8h26.133a2.8,2.8,0,0,0,2.8-2.8h0a2.8,2.8,0,0,0-2.8-2.8H155.8A2.8,2.8,0,0,0,153,155.8Z"
                        transform="translate(-153 -153)"
                        fill="#034363"
                        fill-rule="evenodd"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <svg
                v-if="!gridView"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28.008"
                viewBox="0 0 28 28.008"
                @click="changeView"
            >
              <g id="noun-grid-2442978" transform="translate(0.01)">
                <path
                    id="Path_31"
                    data-name="Path 31"
                    d="M73.174,79.429a2.4,2.4,0,0,1-1.212-.661,2.075,2.075,0,0,1-.521-1.431q0-1.909,0-3.822a1.923,1.923,0,0,1,1.12-1.862,2.54,2.54,0,0,1,.994-.213c1.235-.025,2.472,0,3.71,0a2.032,2.032,0,0,1,2.131,1.68.252.252,0,0,0,.031.059v4.5c-.014.05-.031.1-.045.148a1.845,1.845,0,0,1-.773,1.184,7.461,7.461,0,0,1-.918.412Z"
                    transform="translate(-51.445 -51.432)"
                    fill="#034363"
                />
                <path
                    id="Path_32"
                    data-name="Path 32"
                    d="M6.26,0a5.779,5.779,0,0,1,.888.389,1.893,1.893,0,0,1,.84,1.68Q8,4,7.988,5.935A1.935,1.935,0,0,1,6.834,7.8a2.332,2.332,0,0,1-.93.193c-1.274.02-2.548.014-3.822,0A2,2,0,0,1,.039,6.367,1,1,0,0,0,0,6.26Q0,4,0,1.744a.555.555,0,0,1,.042-.126A1.842,1.842,0,0,1,.818.412,7.279,7.279,0,0,1,1.744,0Z"
                    transform="translate(-0.007 0)"
                    fill="#034363"
                />
                <path
                    id="Path_33"
                    data-name="Path 33"
                    d="M79.41,6.26a5.892,5.892,0,0,1-.392.89,1.89,1.89,0,0,1-1.68.84q-1.932.017-3.866,0a1.9,1.9,0,0,1-1.825-1.1,2.45,2.45,0,0,1-.227-.985c-.025-1.274-.017-2.548,0-3.822A2,2,0,0,1,73.068.034.521.521,0,0,0,73.149,0h4.516a.869.869,0,0,0,.1.036A1.82,1.82,0,0,1,78.984.8a7.438,7.438,0,0,1,.426.946Z"
                    transform="translate(-51.42)"
                    fill="#034363"
                />
                <path
                    id="Path_34"
                    data-name="Path 34"
                    d="M0,73.176A5.434,5.434,0,0,1,.375,72.3a1.912,1.912,0,0,1,1.7-.86H5.938a1.9,1.9,0,0,1,1.825,1.1,2.45,2.45,0,0,1,.227.986c.025,1.274.017,2.548,0,3.822a2,2,0,0,1-1.655,2.058.481.481,0,0,0-.081.034H1.744a.859.859,0,0,0-.1-.036,1.839,1.839,0,0,1-1.229-.781A6.926,6.926,0,0,1,0,77.692Z"
                    transform="translate(-0.007 -51.439)"
                    fill="#034363"
                />
                <path
                    id="Path_35"
                    data-name="Path 35"
                    d="M-.007,37.479a6.078,6.078,0,0,1,.428-.918A1.739,1.739,0,0,1,1.9,35.779H6.015a1.982,1.982,0,0,1,1.96,2.03c0,1.3.017,2.609,0,3.92a1.96,1.96,0,0,1-1.96,2.024c-1.349.031-2.7.028-4.046,0A1.946,1.946,0,0,1,.035,42.174a.365.365,0,0,0-.045-.123Q-.007,39.761-.007,37.479Z"
                    transform="translate(0 -25.762)"
                    fill="#034363"
                />
                <path
                    id="Path_36"
                    data-name="Path 36"
                    d="M79.4,41.989a5.743,5.743,0,0,1-.414.9,1.758,1.758,0,0,1-1.5.8c-1.377,0-2.758.034-4.135,0a1.943,1.943,0,0,1-1.96-2.021c-.017-1.3,0-2.609,0-3.92a1.982,1.982,0,0,1,1.96-2.03c1.349,0,2.7-.022,4.046,0a1.96,1.96,0,0,1,1.937,1.6.742.742,0,0,0,.039.1v4.572Z"
                    transform="translate(-51.405 -25.708)"
                    fill="#034363"
                />
                <path
                    id="Path_37"
                    data-name="Path 37"
                    d="M37.451,79.442a6.366,6.366,0,0,1-.952-.456,1.68,1.68,0,0,1-.739-1.4c-.025-.944-.017-1.923-.02-2.9V73.408a1.985,1.985,0,0,1,2.03-1.96h3.92a1.979,1.979,0,0,1,2.027,1.96c0,1.363.025,2.727,0,4.09a1.935,1.935,0,0,1-1.6,1.915.749.749,0,0,0-.1.039H37.451Z"
                    transform="translate(-25.741 -51.445)"
                    fill="#034363"
                />
                <path
                    id="Path_38"
                    data-name="Path 38"
                    d="M41.965,0a2.579,2.579,0,0,1,1.011.448A1.817,1.817,0,0,1,43.7,1.825c.025,1.12.017,2.22.02,3.329v.84a1.993,1.993,0,0,1-2.058,1.993H37.8a1.94,1.94,0,0,1-2.041-1.96c-.036-1.363-.031-2.727,0-4.09a1.912,1.912,0,0,1,1.59-1.9.756.756,0,0,0,.1-.039Z"
                    transform="translate(-25.734 0)"
                    fill="#034363"
                />
                <path
                    id="Path_39"
                    data-name="Path 39"
                    d="M43.714,39.732c0,.714.025,1.431,0,2.145a1.89,1.89,0,0,1-1.823,1.828q-2.156.05-4.312,0a1.876,1.876,0,0,1-1.811-1.814q-.048-2.156,0-4.312a1.873,1.873,0,0,1,1.809-1.814q2.167-.05,4.334,0a1.89,1.89,0,0,1,1.8,1.8c.031.722,0,1.445,0,2.167h0Z"
                    transform="translate(-25.745 -25.734)"
                    fill="#034363"
                />
              </g>
            </svg>
            <svg
                @click="changeFilterView"
                xmlns="http://www.w3.org/2000/svg"
                width="31.886"
                height="28"
                viewBox="0 0 31.886 28"
            >
              <g id="noun-filter-2034641" transform="translate(-1 -4.9)">
                <g
                    id="Group_84"
                    data-name="Group 84"
                    transform="translate(1 4.9)"
                >
                  <g
                      id="Group_83"
                      data-name="Group 83"
                      transform="translate(0)"
                  >
                    <path
                        id="Path_63"
                        data-name="Path 63"
                        d="M32.886,6.594a1.712,1.712,0,0,1-1.694,1.694H2.694A1.65,1.65,0,0,1,1,6.594,1.68,1.68,0,0,1,2.694,4.9H31.142A1.723,1.723,0,0,1,32.886,6.594Z"
                        transform="translate(-1 -4.9)"
                        fill="#034363"
                    />
                  </g>
                </g>
                <g
                    id="Group_86"
                    data-name="Group 86"
                    transform="translate(3.142 9.334)"
                >
                  <g
                      id="Group_85"
                      data-name="Group 85"
                      transform="translate(0 0)"
                  >
                    <path
                        id="Path_64"
                        data-name="Path 64"
                        d="M32.9,13.8,22.24,28.946v5.58a.436.436,0,0,1-.3.448l-5.281,2.342a.3.3,0,0,1-.2.05c-.1,0-.2,0-.249-.1a.508.508,0,0,1-.249-.4V28.946L5.3,13.8Z"
                        transform="translate(-5.3 -13.8)"
                        fill="#034363"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div id="filterContainter" v-if="viewFilter">
          <div id="sortAndFilterContainer">
            <div id="sortAlternativesContainer">
              <h4 id="sortTitle">Sorter etter:</h4>
              <div id="inputSortContainer">
                <Multiselect
                    class="multiSelect"
                    v-model="sortField"
                    :options="sortOptions"
                    label="name"
                    id="sort"
                ></Multiselect>
              </div>
            </div>
            <div id="categoryAlternativesContainer">
              <h4 id="categoryTitle">Kategorier:</h4>
              <div id="inputCategoryContainer">
                <Multiselect
                    class="multiSelect"
                    v-model="category"
                    :options="categoryOptions"
                ></Multiselect>
              </div>
            </div>
          </div>
          <div id="deliverContainer">
            <h4 id="deliverTitle">Leveringsalternativer</h4>
            <div id="checkboxContainer">
              <BaseCheckbox
                  v-model="mustBePickable"
                  label="Kan hentes"
                  class="checkbox"
              />
              <BaseCheckbox
                  v-model="mustBeDeliverable"
                  label="Kan leveres"
                  class="checkbox"
              />
            </div>
          </div>
          <div id="PriceContainer">
            <div>
              <h4 class="priceTitle">Minpris</h4>
              <input type="number" id="minPrice" placeholder="kr" v-model="minPrice">
            </div>
            <div>
              <h4 class="priceTitle">Maxpris</h4>
              <input type="number" id="maxPrice" placeholder="kr" v-model="maxPrice">
            </div>
          </div>
        </div>
      </div>
    </form>

    <div class="itemsContainer">
      <div class="items" v-if="gridView">
        <ItemCardSquare
            v-for="item in items"
            :key="item.itemId"
            :item="item"
            @click="seeItem(item)"
        ></ItemCardSquare>
      </div>
      <div id="horizontalItems" v-if="!gridView">
        <item-card-horizontal
            v-for="item in items"
            :key="item.itemId"
            :item="item"
            @click="seeItem(item)"
        >
        </item-card-horizontal>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect";
import BaseSearchBar from "@/components/baseTools/BaseSearchBar";
import ItemCardSquare from "@/components/itemCards/ItemCardSquare";
import BaseInput from "@/components/baseTools/BaseInput";
import BaseCheckbox from "@/components/baseTools/BaseCheckbox";
import ItemCardHorizontal from "@/components/itemCards/ItemCardHorizontal";

export default {
  name: "SearchedItems",
  components: {
    ItemCardHorizontal,
    BaseInput,
    BaseCheckbox,
    ItemCardSquare,
    BaseSearchBar,
    Multiselect,
  },
  data() {
    return {
      maxPrice: 10000,
      minPrice: 0,
      mustBeDeliverable: false,
      mustBePickable: false,
      page: 0,
      pageSize: 30,
      sortField: "RELEVANCE",
      searchSentence: this.$store.state.currentSearchSentence,
      sortOptions: [{name: "Pris", value: "PRICE"}, {name: "Relevans", value: "RELEVANCE"}, {name: "Dato publisert", value: "PUBLICITY_DATE"}],
      gridView: true,
      viewFilter: false,
      category: null,
      categoryOptions: [
        "Verktøy",
        "Friluftsliv",
        "IT",
        "Sportsutstyr",
        "Husholding",
      ],
    };
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
    itemSize() {
      return this.$store.state.items.length;
    },
    isError() {
      if (this.v$.$error) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    emitToggleHamburgerMenu() {
      this.$emit("toggleHamburgerMenu");
    },
    async seeItem(item) {
      await this.$store.dispatch("setItem", item);
      await this.$router.push({name: "ProductDetails"});
    },
    changeView() {
      this.gridView = !this.gridView;
    },
    changeFilterView() {
      this.viewFilter = !this.viewFilter;
    },
    submit() {
      console.log(this.sortField);
      const searchRequest = {
        maxPrice: this.maxPrice,
        minPrice: this.minPrice,
        mustBeDeliverable: this.mustBeDeliverable,
        mustBePickable: this.mustBePickable,
        page: this.page,
        pageSize: this.pageSize,
        sortField: this.sortField,
        text: this.searchSentence,
        category: this.category,
      };

      console.log(searchRequest);
      this.$store.dispatch("getCurrentSearchSentence", this.searchSentence);
      this.$store.dispatch("getSearchedItems", searchRequest);
    },
    getValue(price) {
      return price;
    }
  },
};
</script>

<style scoped>
@import "@vueform/multiselect/themes/default.css";

h3 {
  font-size: 22px;
  margin-bottom: 5px;
  font-weight: 500;
}

p {
  margin-top: 0;
  color: #575757;
  font-size: 14px;
  margin-bottom: 15px;
}

.form {
  border: none;
  border-radius: 7px;

  background: white;

  width: 95%;
  margin: 0 auto;
}

#searchbarContainer {
  display: grid;
  grid-template-columns: 85% 15%;
  height: 40px;
  border: 1px solid #707070;
  box-shadow: 0 0 3px;
  border-radius: 10px;
}

#searchbarContainer svg {
  height: 35px;
}

.searchButton {
  border: none;
  background: transparent;
}

form {
  padding: 0;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.itemsHeader {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.dp__clear_icon {
  display: none;
}


.optionsContainer {
  text-align: left;
}

.mainContent {
  margin: 0 10px;
}


#priceTitle {
  font-weight: 500;
}

#maxPrice, #minPrice {
  border: 1px solid #707070;
  border-radius: 15px;
  background-color: white;
  width: 100%;
  height: 40px;
  font-size: 18px;
}


.multiselect {
  width: 100%;
  margin: 0;
  border-radius: 15px;
  border-color: #707070;
}

#sortAndFilterContainer, #PriceContainer, #checkboxContainer  {
  display: grid;
  grid-template-columns: 45% 45%;
  justify-content: space-between;
  width: 100%;
}

#categoryFilterContainer #iconContainer {
  margin-top: 24px;
  margin-left: 20px;
}

#iconContainer svg {
  margin-left: 10px;
}

#iconContainer {
  display: flex;
  justify-content: flex-end;
}

#filterContainter {
  border-bottom: solid 1px #707070;
  padding-bottom: 15px;
}

#filterContainter > * {
  margin-bottom: 10px;
}
</style>
