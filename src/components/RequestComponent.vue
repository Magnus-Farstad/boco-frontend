<template>
  <div id="RequestContainer">
    <h1>Forespør leie:</h1>
    <ItemCardHorizontal :item="item" />
    <form @submit.prevent="submit">
      <h2>Tidsperiode</h2>
      <Datepicker
        v-model="state.dates"
        range
        locale="no"
        :enableTimePicker="false"
        selectText="Velg"
        cancelText="Lukk"
        :disabledDates="disabledDates"
        :minDate="getToday"
      ></Datepicker>
      <span v-if="v$.dates.$error" class="errorMessage">
        {{ v$.dates.$errors[0].$message }}
      </span>
      <h2 id="deliverTitle">Leveringsalternativer</h2>
      <div id="radioContainer">
        <BaseRadioGroup
          v-model="state.deliveryOption"
          name="deliveryOption"
          :options="state.deliveryOptions"
        />
      </div>
      <span v-if="v$.deliveryOption.$error" class="errorMessage">
        {{ v$.deliveryOption.$errors[0].$message }}
      </span>
      <h2>Melding til utleier</h2>
      <textarea
        id="message"
        class="mb-4"
        type="message"
        v-model="state.message"
        placeholder="Melding til utleier..."
      ></textarea>
      <span v-if="v$.message.$error" class="errorMessage">
        {{ v$.message.$errors[0].$message }}
      </span>
      <div id="descriptionInfo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
        >
          <path
            id="noun-info-3126147"
            d="M17.5,5A12.5,12.5,0,1,0,30,17.5,12.5,12.5,0,0,0,17.5,5Zm2.094,18.354a6.263,6.263,0,0,1-2.185,2.072,3.774,3.774,0,0,1-1.781.381c-1.615-.134-2.365-1.351-1.66-3.287l2.123-5.833c.458-1.259.014-1.642-.349-1.651q-.649-.012-1.551,1.216a.32.32,0,1,1-.522-.37,6.263,6.263,0,0,1,2.185-2.072,3.775,3.775,0,0,1,1.781-.381c1.615.134,2.365,1.351,1.66,3.287l-2.123,5.833c-.458,1.259-.014,1.642.349,1.651q.649.012,1.551-1.216a.32.32,0,1,1,.522.37Zm1.7-12.142a1.51,1.51,0,1,1-.9-1.935,1.51,1.51,0,0,1,.9,1.935Z"
            transform="translate(-5 -5)"
            fill="#126782"
          />
        </svg>
        <p>
          Lurt å inkludere ønsket hente/leverings tidspunkt, eller andre
          detaljer
        </p>
      </div>
      <BaseButton
        id="request"
        text="Forespør leie"
        @click.prevent="submit"
        :disabled="isError"
      />
    </form>
  </div>
</template>

<script>
import ItemCardHorizontal from "@/components/itemCards/ItemCardHorizontal";
import Datepicker from "@/components/baseTools/DatepickerComponent";
import BaseButton from "@/components/baseTools/BaseButton";
import BaseRadioGroup from "@/components/baseTools/BaseRadioGroup";
import { required } from "@vuelidate/validators";
import { ref, onMounted, reactive, computed } from "vue";
import useValidate from "@vuelidate/core";
import { useStore } from "vuex";

export default {
  name: "RequestComponent",
  components: {
    BaseButton,
    BaseRadioGroup,
    Datepicker,
    ItemCardHorizontal,
  },
  setup() {
    const date = ref();
    const store = useStore();

    //const disabledDates = this.$store.getters.GET_OCCUPIED_DATES;
    const disabledDates = computed(() => {
      console.log(store.state.occupiedDates);
      const disabledDatesArray = store.state.occupiedDates;
      /*for (let i = 0; i < disabledDates; i++) {
        let disabledDate = Date.from(i.atStartOfDay(defaultZoneId).toInstant());
      }*/

      return disabledDatesArray;
    });

    // For demo purposes assign range from the current date
    onMounted(() => {
      const startDate = new Date();
      const endDate = new Date(new Date().setDate(startDate.getDate() + 2));
      date.value = [startDate, endDate];
    });
    const state = reactive({
      message: "",
      dates: "",
      deliveryOption: undefined,
      deliveryOptions: [
        {
          label: "Hjemmelevering",
          value: "DELIVERED",
          status: !store.state.currentItem.isDeliverable,
        },
        {
          label: "Hente",
          value: "PICKUP",
          status: !store.state.currentItem.isPickupable,
        },
      ],
    });
    const rules = computed(() => {
      return {
        message: {
          required,
        },
        dates: {
          required,
        },
        deliveryOption: {
          required,
        },
      };
    });
    const v$ = useValidate(rules, state);
    return { date, state, v$, disabledDates };
  },
  computed: {
    item() {
      return this.$store.state.currentItem;
    },
    isError() {
      if (this.v$.$error) {
        return true;
      } else {
        return false;
      }
    },
    getToday() {
      let today = new Date();
      return today;
    },
  },
  methods: {
    async submit() {
      this.v$.$validate();
      console.log(this.v$);
      if (!this.v$.$error) {
        const reqisterRentalRequest = {
          deliveryInfo: this.state.deliveryOption,
          endDate: this.state.dates[1],
          itemId: this.$store.state.currentItem.itemId,
          message: this.state.message,
          startDate: this.state.dates[0],
          userId: this.$store.state.userInfo.userId,
        };

        await this.$store.dispatch("registerRental", reqisterRentalRequest);

        //push to rental
        await this.$router.push({ name: "MyRentals" });
      } else {
        alert("Alle felter må være fylt inn");
      }
    },
  },
  mounted() {
    this.$store.dispatch("fetchOccupied");
  },
};
</script>

<style scoped>
.radio:checked ~ .checkmark {
  background-color: var(--blue);
}
#RequestContainer {
  padding: 0 15px;
}
#radioContainer {
  margin-top: 10px;
  margin-bottom: 15px;
}
#message {
  font-size: medium;
  border-radius: 15px;
  width: 100%;
  height: 150px;
}
form {
  text-align: left;
}
#deliverTitle {
  margin-top: 20px;
}
textarea {
  margin-bottom: 20px;
}
#descriptionInfo {
  display: flex;
  font-size: 14px;
  color: #707070;
  margin-bottom: 30px;
}
#descriptionInfo svg {
  margin-right: 10px;
}
.errorMessage {
  color: tomato;
  margin-top: 5px;
  text-align: center;
}
</style>
