<template>
  <div id="FeedbackWebPageContainer">
    <form @submit.prevent="submit">
      <h1 id="descriptionTitle">Lag en tilbakemelding:</h1>
      <textarea
        id="description"
        class="mb-4"
        type="description"
        v-model="state.description"
        placeholder="Beskrivelse av tilbakemelding..."
      ></textarea>
      <span v-if="v$.description.$error" class="errorMessage">
        {{ v$.description.$errors[0].$message }}
      </span>

      <BaseButton v-on:click="submit" id="publish" text="Publiser" />
    </form>
  </div>
</template>

<script>
import BaseButton from "@/components/baseTools/BaseButton";
import { required } from "@vuelidate/validators";
import { doRegisterFeedbackWebPage } from "@/service/apiService";
import { computed, reactive } from "vue";
import useValidate from "@vuelidate/core";

export default {
  name: "AddFeedbackWebPageComponent",
  components: {
    BaseButton,
  },
  setup() {
    const state = reactive({
      description: "",
    });
    const rules = computed(() => {
      return {
        description: {
          required,
        },
      };
    });
    const v$ = useValidate(rules, state);
    return { state, v$ };
  },
  methods: {
    async submit() {

      console.log("Hei nå er jeg over ifen")
      this.v$.$validate();
      // eslint-disable-next-line no-empty
      if (!this.v$.$error) {
        console.log("hei nå er jeg inni ifen");
        const feedbackRequest = {
          message: this.state.description,
          userId: this.$store.state.userInfo.userId,
        };

        await doRegisterFeedbackWebPage(
          feedbackRequest,
          this.$store.state.token
        );
        await this.$router.push({ name: "HomeView" });
      } else {
        alert("Du må skrive en tilbakemelding!");
      }
    },
  },
};
</script>

<style scoped>
form {
  padding: 0px 30px 0px 30px;
}
form > * {
  margin-bottom: 10px;
  display: block;
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
#info > * {
  padding-bottom: 10px;
}
/deep/ #postalcode {
  width: 87px;
}
</style>
