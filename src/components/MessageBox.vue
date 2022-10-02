<template>
  <div class="messageContainer" :class="{ myMessageContainer: isMe }">
    <div v-if="!isMe" class="imageContainer">
      <img
        v-if="imageId"
        class="profileImage"
        :src="'http://localhost:8085/api/image/' + imageId"
        alt="profilbilde"
      />
      <svg
        v-else
        class="profileImage"
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
        viewBox="0 0 45 45"
      >
        <path
          id="noun-profile-1995071"
          d="M25,2.5A22.5,22.5,0,1,0,47.5,25,22.52,22.52,0,0,0,25,2.5Zm0,12.884a7.058,7.058,0,1,1-7.058,7.058A7.076,7.076,0,0,1,25,15.384ZM12.684,38.642V37.6a5.448,5.448,0,0,1,5.447-5.447H31.868A5.448,5.448,0,0,1,37.316,37.6v1.042a18.379,18.379,0,0,1-24.632,0Z"
          transform="translate(-2.5 -2.5)"
          fill="#126782"
        />
      </svg>
    </div>
    <div class="messageDefault" :class="{ myMessage: isMe, message: !isMe }">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageBox",
  props: {
    message: {
      type: String,
      default: "",
    },
    imageId: {
      type: [Number, String],
      default: null,
    },
    userId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isMe() {
      return this.userId === this.$store.state.userInfo.userId;
    },
  },
};
</script>

<style scoped>
.messageContainer {
  display: flex;
  margin-bottom: 1rem;
}
.myMessageContainer {
  justify-content: right;
}
.myMessage {
  background: #8ecae6;
}
.imageContainer {
  width: 15px;
  margin-right: 1.5rem;
  position: relative;
}
.profileImage {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  bottom: 0;
  left: 0;
}
.message {
  background: white;
}
.messageDefault {
  display: inline-block;
  border-radius: 20px;
  max-width: 15rem;
  padding: 0.7rem 1rem;
  text-align: left;
  font-size: 14px;
  word-wrap: break-word;
}
</style>
