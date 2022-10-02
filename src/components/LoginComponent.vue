<template>
  <div class="loginContainer">
    <div class="titleInfo">
      <h1 id="loginTitle">Velkommen!</h1>
    </div>
    <div>
      <h5 id="LoginError" v-if="this.$store.state.userInfo.status === 204">
        Feil brukernavn eller passord!
      </h5>
    </div>
    <div id="RegContainer">
      <form @submit.prevent="submit">
        <div id="registerTitle">
          <label>Logg inn:</label>
        </div>

        <BaseInput
          id="email"
          class="mb-4"
          type="email"
          v-model="email"
          placeholder="Epost"
        />
        <BaseInput
          id="password"
          class="mb-4"
          type="password"
          v-model="password"
          placeholder="Passord"
        />

        <BaseButton @click.prevent="submit" text="Logg inn" />

        <div v-if="this.$store.state.userInfo.status === 204">
          <router-link :to="{ name: 'RegistrationComponent' }"
            >Har du ikke en bruker? Opprett her!</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/baseTools/BaseInput";
import BaseButton from "@/components/baseTools/BaseButton";
import { doLogin } from "@/service/apiService";

export default {
  name: "LoginComponent",
  components: {
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async submit() {
      let loginResponse = await doLogin(this.email, this.password);

      if (loginResponse.status === 200) {
        this.$store.dispatch("storeUser", loginResponse.data.userInfo);
        this.$store.dispatch("storeToken", loginResponse.data.token);

        switch (loginResponse.data.userInfo.role) {
          case "USER":
            this.$router.push({ name: "HomeView" });
            break;

          case "ADMIN":
            this.$router.push({ name: "HomeView" });
            break;

          default:
            alert("Something went wrong with the authentication!");
        }
      } else {
        this.$store.dispatch("storeUser", loginResponse);
      }
    },
  },
};
</script>

<style scoped>
.loginContainer {
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  justify-content: center;
  margin: 50px auto;
  margin-top: 15%;
  width: 300px;
}

#registerTitle {
  font-size: x-large;
  font-weight: bold;
}
#loginTitle {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-weight: 100;
  font-size: 28px;
  color: black;
}
#LoginError {
  color: black;
  font-size: 15px;
  font-weight: 300;
  padding: 8px;
  margin: 0 auto;
  margin-bottom: 5px;
  border-radius: 5px;
  border: solid 1px red;
  background-color: rgba(255, 0, 0, 0.27);
}
form {
  padding: 0px 30px 0px 30px;
}
form > * {
  margin-bottom: 10px;
}
</style>
