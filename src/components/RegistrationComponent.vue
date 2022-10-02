<template>
  <div id="RegContainer">
    <form @submit.prevent="submit">
      <h1>Registrer deg!</h1>

      <h2>Personalia</h2>
      <label class="h3">Fullt navn</label>
      <BaseInput
        id="name"
        class="mb-4"
        type="name"
        v-model="state.fullname"
        placeholder="Navn"
      />
      <span v-if="v$.fullname.$error" class="errorMessage">
        {{ v$.email.$errors[0].$message }}
      </span>
      <label class="h3">E-post</label>
      <BaseInput
        id="email"
        class="mb-4"
        type="email"
        v-model="state.email"
        placeholder="Epost"
      />
      <span v-if="v$.email.$error" class="errorMessage">
        {{ v$.email.$errors[0].$message }}
      </span>
      <label class="h3">Passord</label>
      <BaseInput
        id="password"
        class="mb-4"
        type="password"
        v-model="state.password.password"
        placeholder="Passord"
      />
      <span v-if="v$.password.password.$error" class="errorMessage">
        {{ v$.password.password.$errors[0].$message }}
      </span>
      <BaseInput
        id="passwordCheck"
        class="mb-4"
        type="password"
        v-model="state.password.confirm"
        placeholder="Skriv inn passord på nytt"
      />
      <span v-if="v$.password.confirm.$error" class="errorMessage">
        {{ v$.password.confirm.$errors[0].$message }}
      </span>
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
      <BaseButton
        @click.prevent="submit"
        text="Registrer deg"
        id="registerButton"
        :disabled="isError"
      />
    </form>
  </div>
</template>

<script>
import BaseInput from "@/components/baseTools/BaseInput";
import BaseButton from "@/components/baseTools/BaseButton";
import useValidate from "@vuelidate/core";
import { email, required, minLength, sameAs } from "@vuelidate/validators";
import { doRegistration } from "@/service/apiService";
import AddressComponent from "@/components/AddressComponent";
import { computed, reactive } from "vue";

export default {
  name: "RegistrationComponent",
  components: {
    AddressComponent,
    BaseInput,
    BaseButton,
  },
  setup() {
    const state = reactive({
      fullname: "",
      email: "",
      password: {
        password: "",
        confirm: "",
      },
      address: "",
      postalcode: "",
      city: "",
    });
    const rules = computed(() => {
      return {
        fullname: {
          required,
        },
        email: {
          required,
          email,
        },
        password: {
          password: { required, minLength: minLength(6) },
          confirm: { required, sameAs: sameAs(state.password.password) },
        },
        address: { required },
        postalcode: { required },
        city: { required },
      };
    });
    const v$ = useValidate(rules, state);
    return { state, v$ };
  },
  computed: {
    isError() {
      if (this.v$.$error) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    async submit() {
      this.v$.$validate();
      console.log(this.v$);
      if (!this.v$.$error) {
        const reqisterUserRequest = {
          email: this.state.email,
          name: this.state.fullname,
          password: this.state.password.password,
          person: true,
          postOffice: this.state.city,
          postalCode: this.state.postalcode,
          streetAddress: this.state.address,
        };
        let loginResponse = await doRegistration(reqisterUserRequest);
        if (loginResponse.status === 200) {
          this.$store.dispatch("storeUser", loginResponse.data.userInfo);
          this.$store.dispatch("storeToken", loginResponse.data.token);

          switch (loginResponse.data.userInfo.role) {
            case "USER":
              this.$router.push({ name: "HomeView" });
              break;

            default:
              alert("Something went wrong with the authentication!");
          }
        }
      }
    },
  },
};
</script>

<style scoped>
form {
  text-align: left;
}
button {
  margin-top: 30px;
}
.errorMessage {
  color: tomato;
  margin-top: 5px;
  text-align: center;
}

</style>
