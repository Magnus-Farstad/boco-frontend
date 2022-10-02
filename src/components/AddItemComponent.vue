<template>
  <div id="RegContainer">
    <form @submit.prevent="submit">
      <h1 v-if="newAd === true">Opprett annonse:</h1>
      <h1 v-else>Rediger annonse:</h1>
      <BaseInput
        id="title"
        class="mb-4"
        type="title"
        v-model="state.title"
        placeholder="Tittel på annonse"
      />
      <span v-if="v$.title.$error" class="errorMessage">
        {{ v$.title.$errors[0].$message }}
      </span>
      <div id="categoeyAlternativesContainer">
        <h4 id="categoryTitle">Velg kategori:</h4>
        <div id="inputCategoryContainer">
          <Multiselect
            id="multiSelect"
            v-model="state.category"
            :options="state.categoryOptions"
            class="mb-4"
          ></Multiselect>
        </div>
        <span v-if="v$.category.$error" class="errorMessage">
          {{ v$.category.$errors[0].$message }}
        </span>
      </div>
      <textarea
        id="description"
        class="mb-4"
        type="description"
        v-model="state.description"
        placeholder="Beskrivelse av produkt/gjenstand..."
      ></textarea>
      <span v-if="v$.description.$error" class="errorMessage">
        {{ v$.description.$errors[0].$message }}
      </span>
      <div class="images">
        <h4 id="imageTitle">Velg bilde:</h4>
        <input type="file" accept="image/*" ref="file" @change="selectImage" />
        <img
          v-if="state.previewImage"
          class="actualProfileImage"
          :src="state.previewImage"
          alt=""
        />
      </div>
      <div id="info">
        <AddressComponent
          v-model:address="state.address"
          v-model:postalcode="state.postalcode"
          v-model:city="state.city"
        /><span
          v-if="v$.address.$error || v$.postalcode.$error || v$.city.$error"
          class="errorMessage"
        >
          {{ v$.address.$errors[0].$message }}
        </span>
        <div id="deliverContainer">
          <h2 id="deliverTitle">Leveringsalternativer</h2>
          <div class="checkboxContainer">
            <BaseCheckbox
              v-model="state.isPickupable"
              label="Kan hentes"
              @click="updateIsPicked('Pickupable')"
            />
          </div>
          <div>
            <BaseCheckbox
              v-model="state.isDeliverable"
              label="Kan leveres"
              @click="updateIsPicked('Deliverable')"
            />
          </div>
          <span v-if="v$.isPicked.$error" class="errorMessage">
            {{ v$.isPicked.$errors[0].$message }}
          </span>
        </div>

        <h2>Pris</h2>

        <div class="priceContainer" v-if="!state.isFree">
          <label :for="state.price" class="h3">Pris per dag</label>
          <BaseInput
            id="price"
            class="mb-4"
            type="price"
            v-model="state.price"
            placeholder="Pris per dag"
          />
          <span v-if="v$.price.$error" class="errorMessage">
            {{ v$.price.$errors[0].$message }}
          </span>
        </div>
        <BaseCheckbox
          v-model="state.isFree"
          label="Gratis"
          @click="setPriceZero"
        />
      </div>

      <BaseButton
        v-if="newAd === true"
        @click.prevent="submit('Register')"
        id="publish"
        text="Publiser"
        :disabled="isError"
      />
      <div v-else>
        <BaseButton
          @click.prevent="submit('Edit')"
          id="save"
          text="Lagre endringer"
          :disabled="isError"
        />
        <BaseButton
          @click="deleteItem"
          id="delete"
          text="Slett annonse"
          :disabled="isError"
        />
      </div>
    </form>
  </div>
</template>

<script>
import BaseInput from "./baseTools/BaseInput.vue";
import BaseButton from "@/components/baseTools/BaseButton";
import { required } from "@vuelidate/validators";
import BaseCheckbox from "@/components/baseTools/BaseCheckbox";
import UploadService from "@/service/apiService";
import AddressComponent from "@/components/AddressComponent";
import Multiselect from "@vueform/multiselect";
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import useValidate from "@vuelidate/core";

export default {
  name: "AddItemComponent",
  components: {
    AddressComponent,
    BaseCheckbox,
    BaseButton,
    BaseInput,
    Multiselect,
  },
  setup() {
    const store = useStore();
    const state = reactive({
      title: store.state.currentItem.title,
      category: store.state.currentItem.category,
      description: store.state.currentItem.description,
      address: store.getters.GET_ADDRESS,
      postalcode: store.getters.GET_POSTALCODE,
      city: store.getters.GET_CITY,
      price: store.state.currentItem.price,
      message: "",
      dates: null,
      currentImage: undefined,
      previewImage: undefined,
      currentImageId: undefined,
      isPicked: "",
      isDeliverable: store.state.currentItem.isDeliverable,
      isPickupable: store.state.currentItem.isPickupable,
      categoryOptions: [
        "Verktøy",
        "Friluftsliv",
        "IT",
        "Sportsutstyr",
        "Husholding",
      ],
      isFree: store.getters.GET_PRICE,
    });
    const rules = computed(() => {
      return {
        title: {
          required,
        },
        category: {
          required,
        },
        description: {
          required,
        },
        address: {
          required,
        },
        postalcode: {
          required,
        },
        city: {
          required,
        },
        price: {
          required,
        },
        isPicked: {
          required,
        },
      };
    });
    const v$ = useValidate(rules, state);
    return { state, v$ };
  },
  methods: {
    async submit(status) {
      this.v$.$validate();
      console.log(this.v$);
      // eslint-disable-next-line no-empty
      if (!this.v$.$error) {
        if (this.state.currentImage !== undefined) {
          await UploadService.upload(
            this.state.currentImage,
            this.$store.state.token
          )
            .then((response) => {
              this.$store.dispatch("setCurrentImageId", response.data);
            })
            .catch((err) => {
              this.state.progress = 0;
              this.state.message = "Could not upload the image! " + err;
              this.state.currentImage = undefined;
            });
        }
        if (this.state.isFree === true) {
          this.state.price = 0;
        }
        const itemRequest = {
          category: this.state.category,
          description: this.state.description,
          imageId: this.$store.state.currentImageId,
          isDeliverable: this.state.isDeliverable,
          isPickupable: this.state.isPickupable,
          postOffice: this.state.city,
          postalCode: this.state.postalcode,
          price: parseFloat(this.state.price),
          streetAddress: this.state.address,
          title: this.state.title,
          userId: this.$store.state.userInfo.userId,
        };
        if (status === "Register") {
          await this.$store.dispatch("registerItem", itemRequest);
        } else {
          await this.$store.dispatch("updateItem", itemRequest);
        }
        await this.$router.push({ name: "ProductDetails" });
        this.$emit("routeChange");
      } else {
        alert("Alle felter må være fylt ut!");
      }
    },
    async deleteItem() {
      await this.$store.dispatch("deleteItem");
      await this.$router.push({ name: "MyAds" });
    },
    selectImage() {
      this.state.currentImage = this.$refs.file.files.item(0);
      this.state.previewImage = URL.createObjectURL(this.state.currentImage);
    },
    setPriceZero() {
      this.state.price = 0;
    },
    updateIsPicked(status) {
      if (status === "Pickupable") {
        console.log("Trykket pick");
        if (this.state.isPickupable === false) {
          console.log("Setter pick til pressed");
          this.state.isPicked = "Pressed";
        } else if (
          this.state.isPickupable === true &&
          this.state.isDeliverable === false
        ) {
          console.log("Setter pick til tom");
          this.state.isPicked = "";
        }
      } else if (status === "Deliverable") {
        console.log("Trykket del");
        if (this.state.isDeliverable === false) {
          console.log("Setter pick til pressed");
          this.state.isPicked = "Pressed";
        } else if (
          this.state.isDeliverable === true &&
          this.state.isPickupable === false
        ) {
          console.log("Setter pick til tom");
          this.state.isPicked = "";
        }
      }
    },
  },
  computed: {
    newAd() {
      return this.$store.state.currentItem === "";
    },
    isError() {
      if (this.v$.$error) {
        return true;
      } else {
        return false;
      }
    },
  },
  async mounted() {
    if (this.state.isPickupable === true) {
      this.state.isPicked = "Pressed";
    } else if (this.state.isDeliverable === true) {
      this.state.isPicked = "Pressed";
    } else {
      this.state.isDeliverable = false;
      this.state.isPickupable = false;
      this.state.isPicked = "";
    }
  },
};
</script>

<style scoped>
form {
  padding: 0px 40px 0px 30px;
}
#multiSelect {
  margin-bottom: 15px;
}

.actualProfileImage {
  width: 9rem;
  height: 9rem;
}


/deep/ #title {
  font-size: x-large;
}

#description {
  font-size: medium;
  border-radius: 15px;
  width: 100%;
  height: 150px;
}

#info {
  text-align: left;
}


.checkboxContainer {
  margin-bottom: 10px;
  margin-top: 10px;
}
#priceInfo {
  display: flex;
  font-size: 14px;
  color: #707070;
  margin-bottom: 30px;
  width: 100%;
}
#priceInfo svg {
  margin-right: 10px;
}
.priceContainer {
  display: inline;
}
.errorMessage {
  color: tomato;
  margin-top: 5px;
  text-align: center;
}
</style>
