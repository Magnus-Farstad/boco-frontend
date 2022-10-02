<template>
  <div class="userCardContainer">
    <div class="userCard">
      <h4>{{ user.name }}</h4>
      <h4>{{ user.email }}</h4>
      <h4>{{ user.role }}</h4>
      <div
        v-if="this.$store.state.userInfo.role === 'ADMIN'"
        class="queue-button"
      >
        <BaseButton
          @click.stop="updateRoleUser"
          id="updateRoleUser"
          text="Endre brukerdata"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/baseTools/BaseButton";

export default {
  name: "UserCard",
  components: { BaseButton },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    updateRoleUser() {
      this.$emit("updateRoleUser", this.user.userId);
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
  margin: 3px 0 0 0;
  font-size: 16px;
  font-weight: 400;
}

.userCardContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
}
.userCard {
  position: relative;
  display: grid;
  grid-template-rows: 90px 23px 50px;
  width: 250px;
  height: 200px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 3px 6px #00000029;
  margin: 0 auto;
}
</style>
