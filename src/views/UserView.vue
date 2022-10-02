<template>
  <div class="feedbacks">
    <UserCard
      v-for="user in users"
      :key="user.userId"
      :user="user"
      @updateRoleUser="updateRoleUser"
    ></UserCard>
  </div>
</template>

<script>
import UserCard from "@/components/UserCard";
import { updateRoleUsers } from "@/service/apiService";

export default {
  name: "UserView",
  components: {
    UserCard,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    async updateRoleUser(userId) {
      await updateRoleUsers(this.$store.state.token, userId);
    },
  },
  created() {
    this.$store.dispatch("getUsers");
  },
};
</script>

<style scoped></style>
