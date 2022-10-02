<template>
  <div class="feedbacks">
    <FeedbackCard
      v-for="feedback in feedbacks"
      :key="feedback.feedbackId"
      :feedback="feedback"
    ></FeedbackCard>
  </div>
</template>

<script>
import FeedbackCard from "@/components/FeedbackCard";

export default {
  name: "FeedbackView",
  components: {
    FeedbackCard,
  },
  computed: {
    feedbacks() {
      return this.$store.state.feedbacks;
    },
  },
  created() {
    this.$store.dispatch("getFeedbacks");
  },
};
</script>

<style scoped></style>
