<template>
  <div class="container">
    <div class="itemContainer">
      <ItemCardHorizontal
        @click="goToItem"
        :item="currentRental.item"
        :startDate="currentRental.startDate"
        :endDate="currentRental.endDate"
        :deliveryInfo="currentRental.deliveryInfo"
      ></ItemCardHorizontal>
    </div>
    <div class="headerContainer">
      <div class="headerInnerContainer">
        <div class="imageContainer">
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
        <div id="nameAndStatusContainer">
          <h2>{{ name }}</h2>
          <StatusSystemMessage :rental="this.currentRental">
          </StatusSystemMessage>
        </div>
      </div>
    </div>
    <div class="chatContainer" id="chat">
      <RequestSystemMessage
        @requestAction="updateRequestMessage"
        v-if="showRequestMessage"
        :rental="currentRental"
      >
      </RequestSystemMessage>
      <MessageBox
        v-for="(message, index) in messages"
        :key="index"
        :userId="message.userId"
        :imageId="imageId"
        :message="message.text"
      ></MessageBox>

      <div class="ratingContainer">
        <RatingSystemMessage :name="name" v-if="giveRating && isFinished">
        </RatingSystemMessage>
      </div>
    </div>
    <div class="sendMessageContainer">
      <form class="sendMessageForm" @submit.prevent="submit">
        <textarea
          v-model="currentMessage"
          placeholder="Send en melding..."
          class="sendMessage"
        />
        <div class="buttonContainer">
          <button class="button" @click.prevent="submit()" aria-label="meldingsknapp">
            <svg
              class="submitImage"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="26.414"
              viewBox="0 0 30 26.414"
              aria-label="send melding ikon"
            >
              <g
                id="noun-paper-airplane-1328715"
                transform="translate(-29.292 -34.882)"
              >
                <g
                  id="Group_88"
                  data-name="Group 88"
                  transform="translate(29.292 34.882)"
                >
                  <path
                    id="Path_66"
                    data-name="Path 66"
                    d="M29.3,36.716c-.128-1.439.71-2.187,1.869-1.672L58.422,47.156c1.16.516,1.159,1.352,0,1.867L31.173,61.133c-1.16.515-2-.234-1.869-1.672l.66-7.436a3.176,3.176,0,0,1,2.468-2.884l6.2-.773c1.235-.154,1.233-.4,0-.558l-6.2-.773a3.174,3.174,0,0,1-2.468-2.884Z"
                    transform="translate(-29.292 -34.882)"
                    fill="#034363"
                    fill-rule="evenodd"
                  />
                </g>
              </g>
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ItemCardHorizontal from "@/components/itemCards/ItemCardHorizontal";
import MessageBox from "@/components/MessageBox";
import { connect, getChat, getSent, send } from "@/service/apiService";
import RatingSystemMessage from "@/components/systemMessages/RatingSystemMessage";
import RequestSystemMessage from "@/components/systemMessages/RequestSystemMessage";
import StatusSystemMessage from "@/components/systemMessages/StatusSystemMessage";

export default {
  name: "MessageView",
  data() {
    return {
      connection: null,
      currentMessage: "",
      messages: [],
      requestMessage: true,
      giveRating: false,
    };
  },
  components: {
    StatusSystemMessage,
    RequestSystemMessage,
    RatingSystemMessage,
    MessageBox,
    ItemCardHorizontal,
  },
  methods: {
    scrollToEnd() {
      const container = this.$el.querySelector("#chat");
      container.scrollTop = container.scrollHeight;
    },
    updateRequestMessage(response) {
      this.requestMessage = !this.requestMessage;
      this.$store.dispatch("setRental", response);
    },
    goToItem() {
      if (this.isMyItem) {
        this.$router.push({ name: "ProductDetails" });
      } else {
        this.$router.push({ name: "RentalDetails" });
      }
    },
    async submit() {
      const messageRequest = {
        text: this.currentMessage,
        userId: this.$store.state.userInfo.userId,
        rentalId: this.currentRentalId,
      };
      await send(messageRequest);
      this.currentMessage = "";
      setTimeout(() => {
        this.scrollToEnd();
      }, 100);
    },
    async connectChat() {
      await connect(this.currentRentalId, (message) => {
        this.messages.push(JSON.parse(message.body));
        setTimeout(() => {
          this.scrollToEnd();
        }, 100);
      });
      let chat = await getChat(this.currentRentalId, this.$store.state.token);
      for (let i = 0; i < chat.messages.length; i++) {
        this.messages.push(chat.messages[i]);
      }
    },
    async ratingSent() {
      let response = await getSent(
        this.$store.state.currentRental.rentalId,
        this.$store.state.userInfo.userId,
        this.$store.state.token
      );
      this.giveRating = response.status === 204;
    },
  },
  computed: {
    isMyItem() {
      return (
        this.currentRental.item.user.userId ===
        this.$store.state.userInfo.userId
      );
    },
    imageId() {
      if (this.isMyItem) {
        return this.currentRental.user.imageId;
      }
      return this.currentRental.item.user.imageId;
    },
    name() {
      if (this.isMyItem) {
        return this.currentRental.user.name;
      }
      return this.currentRental.item.user.name;
    },
    currentRental() {
      return this.$store.state.currentRental;
    },
    currentRentalId() {
      return this.currentRental.rentalId;
    },
    isPending() {
      return this.$store.state.currentRental.status === "PENDING";
    },
    showRequestMessage() {
      return this.isPending && this.isMyItem && this.requestMessage;
    },
    isFinished() {
      return this.$store.state.currentRental.status === "FINISHED";
    },
  },
  async mounted() {
    await this.connectChat();
    this.$store.dispatch("setItem", this.currentRental.item);
    await this.ratingSent();
    this.scrollToEnd();
  },
};
</script>

<style scoped>
h2 {
  font-size: 24px;
  text-align: left;
}
button {
  border: none;
  background: none;
}

.sendMessage {
  background: white;
  border: none;
  border-radius: 20px;
  max-width: 19rem;
  height: 1.2rem;
  padding: 0.7rem 1rem;
  margin-right: 1rem;
  font-size: 16px;
  overflow-scrolling: auto;
}
.container {
  margin-bottom: 2rem;
}
.headerContainer {
  display: flex;
  background: #e5ecf1;
}
.headerInnerContainer {
  display: flex;
  padding: 0.5rem 2rem;
}
.chatContainer {
  padding: 1rem 1rem;
  background: #e5ecf1;
  overflow: auto;
  height: 18rem;
}
.sendMessageContainer {
  padding: 1rem 1rem;
  background: #e5ecf1;
}
.sendMessageForm {
  display: flex;
  justify-content: space-between;
}
.imageContainer {
  height: 45px;
  width: 45px;
}
.profileImage {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.buttonContainer {
  padding: 0.5rem;
}
#nameAndStatusContainer {
  margin-left: 10px;
}
</style>
