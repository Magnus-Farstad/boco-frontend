<template>
  <div class="mainContent">
    <div class="welcomeMessage">Leie i stedet for å eie!</div>
    <form class="form" @submit.prevent="submit">
      <BaseSearchBar
          data-search
          id="searchSentence"
          :label="'Søk...'"
          v-model="searchSentence"
          type="searchSentence"
      />
      <button class="searchButton" :disabled="isError">
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
    </form>
    <BaseErrorMessage v-if="v$.searchSentence.$error"
    >{{ v$.$errors[0].$message }}
    </BaseErrorMessage>
  </div>
  <div class="itemsContainer">
    <div id="infoText">
      <div class="itemsHeader">
        <h3>Nyeste annonser</h3>
        <p>Se de nyeste annonsene på boco</p>
      </div>
        <p @click.stop="routeToSearch" id="link">Se alle gjenstander</p>
    </div>
    <div class="items">
      <ItemCardSquare
        v-for="item in items.slice(0, 4)"
        :key="item.itemId"
        :item="item"
        @click="seeItem(item)"
        role="button"
      ></ItemCardSquare>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ItemCardSquare from "@/components/itemCards/ItemCardSquare";
import BaseErrorMessage from "@/components/baseTools/BaseErrorMessage";
import BaseSearchBar from "@/components/baseTools/BaseSearchBar";
import useVuelidate from "@vuelidate/core";
import {helpers, required} from "@vuelidate/validators";

export default {
  name: "HomeView",
  components: {
    ItemCardSquare,
    BaseErrorMessage,
    BaseSearchBar,
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      searchSentence: null,
      page: 0,
      pageSize: 30,
    };
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
    isError() {
      if (this.v$.$error) {
        return true;
      } else {
        return false;
      }
    },
    showNotification() {
      let notifications = this.$store.state.myNotifications;
      for (let i = 0; i < notifications.length; i++) {
        console.log("LESER");
        console.log(i.pressed);
        if (notifications[i].pressed === false) {
          console.log("ULEST");
          return true;
        }
      }
      console.log("LEST");
      return false;
    },
  },
  validations() {
    return {
      searchSentence: {
        required: helpers.withMessage("", required),
      },
    };
  },
  methods: {
    submit() {
      this.v$.$validate();
      console.log(this.v$);
      if (!this.v$.$error) {
        this.routeToSearch();
      } else {
      }
    },
    emitToggleHamburgerMenu() {
      this.$emit("toggleHamburgerMenu");
    },
    emitToggleNotifications() {
      this.$emit("toggleNotifications");
    },
    async seeItem(item) {
      await this.$store.dispatch("setItem", item);
      await this.$router.push({ name: "ProductDetails" });
    },
    async routeToAllItems() {
      const searchRequest = {
        text: this.searchSentence,
        page: this.page,
        pageSize: this.pageSize,
      };

      console.log(searchRequest);
      this.$store.dispatch("getCurrentSearchSentence", this.searchSentence);
      this.$store.dispatch("getSearchedItems", searchRequest);
      await this.$router.push({name: "SearchedItems"});
    },
    routeToSearch() {
      const searchRequest = {
        text: this.searchSentence,
        page: this.page,
        pageSize: this.pageSize,
      };

      console.log(searchRequest);
      this.$store.dispatch("getCurrentSearchSentence", this.searchSentence);
      this.$store.dispatch("getSearchedItems", searchRequest);
      this.$router.push({ name: "SearchedItems" });
    }
  },
  async created() {
    this.$store.dispatch("getItems", {
      page: 0,
      pageSize: 4,
    });
  },
  mounted() {
    if (this.$store.state.userInfo !== "") {
      this.$store.dispatch("fetchMyNotifications");
    }
  },
};
</script>
<style scoped>
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
#infoText {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#link {
  color: var(--blue);
}
.itemsHeader {
  text-align: left;
}
.itemsContainer {
  margin: 10px;
}
.items {
  display: flex;
  flex-wrap: wrap;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: var(--blue);
}

.mainContent {
  background-image: url("../assets/Woman-hiker-relaxing-at-the-top-of-the-mountain-and-looking-up-at-a-Norwegian-fjord.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 750px;
  overflow: hidden;
  width: 100%;
  margin-bottom: 30px;
  height: 500px;
}
.welcomeMessage {
  font-size: 40px;
  font-weight: 500;
  padding: 40px 70px;
  margin: 5rem 0 2rem 0;
}

.form {
  display: grid;
  border-radius: 7px;
  box-shadow: 0 0 3px;
  background: white;
  grid-template-columns: 85% 15%;
  height: 40px;
  max-width: 388px;
  width: 100%;
  margin: 70px auto 0;
}
.searchButton {
  border: none;
  background: transparent;
}
.searchButton svg {
  height: 35px;
}
form {
  padding: 0;
}
</style>
