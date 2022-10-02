<template>
  <div id="RegContainer">
    <form @submit.prevent="submit">
      <div class="addImageContainer">
        <img
          v-if="hasProfileImage && !state.previewImage"
          class="actualProfileImage"
          :src="
            'http://localhost:8085/api/image/' +
            this.$store.state.userInfo.imageId
          "
          alt=""
        />
        <img
          v-if="state.previewImage"
          class="preview my-3 actualProfileImage"
          :src="state.previewImage"
          alt=""
        />

        <img
          v-if="!state.previewImage && !hasProfileImage"
          id="nounprofile"
          :src="require('../assets/noun-profile-1995071.svg')"
          alt=""
        />
        <div id="imageButtonContainer">
          <input
            id="addImageButton"
            type="file"
            accept="image/*"
            ref="file"
            @change="selectImage"
            placeholder="Legg til bilde"
          />
        </div>
      </div>

      <div class="editInfoContainer">
        <h2>Personalia</h2>
        <label>Fullt navn</label>
        <BaseInput
          id="name"
          class="mb-4"
          type="firstName"
          v-model="state.name"
          placeholder="Navn"
        />
        <span v-if="v$.name.$error" class="errorMessage">
          {{ v$.name.$errors[0].$message }}
        </span>
        <label>E-post</label>
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
        <div>
          <label>Password</label>
          <div class="passwordContainer">
            <BaseInput
              id="oldPassword"
              class="mb-4"
              type="password"
              v-model="state.oldPassword"
              placeholder="Gammelt passord"
            />
            <button
              @click="editPassword"
              type="button"
              aria-label="Endre passord"
            >
              <svg
                class="sideIconRight"
                xmlns="http://www.w3.org/2000/svg"
                width="20.065"
                height="19.599"
                viewBox="0 0 20.065 19.599"
              >
                <path
                  id="np_edit_4779758_000000"
                  d="M3.727,5.776H14.9L13.158,7.514H3.727a.009.009,0,0,0-.009.009V20.951a.009.009,0,0,0,.009.009H17.155a.009.009,0,0,0,.009-.009v-8.5L18.9,10.718V20.951A1.752,1.752,0,0,1,17.155,22.7H3.727A1.752,1.752,0,0,1,1.98,20.951V7.523A1.752,1.752,0,0,1,3.727,5.776Zm7.11,8.531A4,4,0,0,0,8.892,13.2l-.067.067-.631,3.685,3.685-.631.067-.067a4,4,0,0,0-1.109-1.945Zm8.579-11.1a.38.38,0,0,0-.536,0L17.628,4.462l3.054,3.054,1.253-1.253a.38.38,0,0,0,0-.536Zm.557,5.017L16.919,5.173,9.7,12.392a5.376,5.376,0,0,1,3.055,3.055Z"
                  transform="translate(-1.98 -3.099)"
                  fill="#034363"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <span v-if="v$.oldPassword.$error" class="errorMessage">
            {{ v$.oldPassword.$errors[0].$message }}
          </span>
          <BaseInput
            id="newPassword"
            class="mb-4"
            type="password"
            v-model="state.newPassword"
            placeholder="Nytt passord"
            v-if="state.passwordPressed"
          />
          <span v-if="v$.newPassword.$error" class="errorMessage">
            {{ v$.newPassword.$errors[0].$message }}
          </span>
          <BaseInput
            id="repeatNewPassword"
            class="mb-4"
            type="password"
            v-model="state.repeatNewPassword"
            placeholder="Gjenta nytt passord"
            v-if="state.passwordPressed"
          />
          <span v-if="v$.repeatNewPassword.$error" class="errorMessage">
            {{ v$.repeatNewPassword.$errors[0].$message }}
          </span>
        </div>
        <h2>Adresse</h2>
        <label>Gateadresse</label>
        <BaseInput
          id="address"
          class="mb-4"
          type="address"
          v-model="state.address"
          placeholder="Gateadresse"
        />
        <span v-if="v$.address.$error" class="errorMessage">
          {{ v$.address.$errors[0].$message }}
        </span>
        <label>Postnummer</label>
        <BaseInput
          id="postalcode"
          class="mb-4"
          type="postalcode"
          v-model="state.postalcode"
          placeholder="Postkode"
        />
        <span v-if="v$.postalcode.$error" class="errorMessage">
          {{ v$.postalcode.$errors[0].$message }}
        </span>
        <label>Poststed</label>
        <BaseInput
          id="city"
          class="mb-4"
          type="city"
          v-model="state.city"
          placeholder="Poststed"
        />
        <span v-if="v$.city.$error" class="errorMessage">
          {{ v$.city.$errors[0].$message }}
        </span>
      </div>
      <BaseButton
        @click.prevent="submit"
        text="Lagre endringer"
        id="registerButton"
        :disabled="isError"
      />
      <BaseButton
        @click.prevent="deleteUser"
        text="Slett bruker"
        id="deleteButton"
        :disabled="isError"
      />
    </form>
  </div>
</template>

<script>
import BaseInput from "@/components/baseTools/BaseInput";
import BaseButton from "@/components/baseTools/BaseButton";
import { email, minLength, required, sameAs } from "@vuelidate/validators";
import UploadService, { doEditUser, doLogin } from "@/service/apiService";
import { computed, reactive } from "vue";
import useValidate from "@vuelidate/core";
import { useStore } from "vuex";
export default {
  name: "EditUserData",
  components: {
    BaseInput,
    BaseButton,
  },
  setup() {
    const store = useStore();
    const state = reactive({
      name: store.state.userInfo.name,
      email: store.state.userInfo.email,
      password: "",
      oldPassword: "",
      newPassword: "",
      repeatNewPassword: "",
      address: store.state.userInfo.streetAddress,
      postalcode: store.state.userInfo.postalCode,
      city: store.state.userInfo.postOffice,

      passwordPressed: false,

      currentImage: undefined,
      previewImage: undefined,

      progress: 0,
      message: "",
    });
    const rules = computed(() => {
      return {
        name: {
          required,
        },
        email: {
          required,
          email,
        },
        oldPassword: {
          required,
        },
        newPassword: {
          minLength: minLength(6),
        },
        repeatNewPassword: {
          sameAs: sameAs(state.newPassword),
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
    hasProfileImage() {
      return this.$store.state.userInfo.imageId !== null;
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
    async submit() {
      this.v$.$validate();
      console.log(this.v$);
      if (!this.v$.$error) {
        await doLogin(
          this.$store.state.userInfo.email,
          this.state.oldPassword
        ).then(async (loginResponse) => {
          if (loginResponse.status === 200) {
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
            if (this.state.newPassword === "") {
              const editUserRequest = {
                email: this.state.email,
                imageId: this.$store.state.currentImageId,
                isPerson: true,
                name: this.state.name,
                postOffice: this.state.city,
                postalCode: this.state.postalcode,
                streetAddress: this.state.address,
              };

              let response = await doEditUser(
                editUserRequest,
                this.$store.state.userInfo.userId,
                this.$store.state.token
              );

              await this.$store.dispatch("storeUser", response.data);
            } else if (this.state.newPassword !== "") {
              const editUserRequest = {
                email: this.state.email,
                imageId: this.$store.state.currentImageId,
                isPerson: true,
                name: this.state.name,
                password: this.state.newPassword,
                postOffice: this.state.city,
                postalCode: this.state.postalcode,
                streetAddress: this.state.address,
              };

              let response = await doEditUser(
                editUserRequest,
                this.$store.state.userInfo.userId,
                this.$store.state.token
              );

              await this.$store.dispatch("storeUser", response.data);
            }
            await this.$router.push({ name: "MyProfile" });
            this.$emit("routeChange");
          } else {
            alert(
              "Passordet er feil, du må skrive inn passord for å endre brukerdata"
            );
          }
        });
      }
    },
    async deleteUser() {
      if (
        confirm(
          "Er du sikker på at du vil slette brukeren din? Alt som kommer med brukeren din vil bli slettet"
        )
      ) {
        await this.$router.push({ name: "HomeView" });
        this.$store.dispatch("deleteUser");
        this.$store.dispatch("resetState");
      }
    },
    selectImage() {
      this.state.currentImage = this.$refs.file.files.item(0);
      this.state.previewImage = URL.createObjectURL(this.state.currentImage);
    },
    editPassword() {
      if (this.state.passwordPressed === false) {
        this.state.passwordPressed = true;
      } else {
        this.state.passwordPressed = false;
      }
    },
  },
};
</script>

<style scoped>
form {
  padding: 0 20px;
}
form > * {
  margin-bottom: 10px;
}
.editInfoContainer {
  padding: 20px;
}
#nounprofile {
  width: 9rem;
  height: 9rem;
}
#addImageButton {
  -webkit-user-select: none;
  cursor: pointer;
  font-weight: 500;
}
.actualProfileImage {
  border-radius: 50%;
  width: 9rem;
  height: 9rem;
}

h1 {
  color: black;
  font-weight: 500;
  font-size: 28px;
  margin-bottom: 15px;
}
h2 {
  color: black;
  font-weight: 400;
  font-size: 25px;
  text-align: left;
  margin-left: 15px;
  margin-bottom: 20px;
}
.mb-4 {
  margin-bottom: 20px;
}
label {
  float: left;
  margin-left: 15px;
  color: black;
  font-weight: 500;
  margin-bottom: 5px;
}

#imageButtonContainer {
  max-width: 200px;
  width: 100%;
  margin: 0 auto;
}
.passwordContainer {
  padding-top: 20px;
}
.passwordContainer button {
  background: none;
  border: none;
  position: absolute;
  top: 560px;
  right: 45px;
}
.mb-4 {
  position: relative;
}
.errorMessage {
  color: tomato;
  margin-top: 5px;
  text-align: center;
}
</style>
