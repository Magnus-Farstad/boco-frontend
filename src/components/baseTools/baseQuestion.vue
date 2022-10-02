<template>
  <div class="questionContainer" @click="toggleAnswer">
    <div>
      <h3>{{ title }}</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13.056"
        height="22.364"
        viewBox="0 0 13.056 22.364"
        :class="{ svg: disabled }"
        id="svgdiv"
      >
        <g
          id="noun-arrow-2284415"
          transform="translate(999.199 -22.219) rotate(90)"
        >
          <path
            id="Path_8"
            data-name="Path 8"
            d="M33.4,986.143l-1.119,1.069-10.063,9.66,2.239,2.327,8.943-8.591,8.943,8.591,2.239-2.327-10.063-9.66Z"
            transform="translate(0)"
          />
        </g>
      </svg>
    </div>
    <transition>
      <p v-if="show">{{ description }}</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "baseQuestion",
  data() {
    return {
      show: false,
      disabled: false,
    };
  },
  methods: {
    toggleAnswer() {
      this.disabled = !this.disabled;
      this.show = !this.show;
    },
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.questionContainer {
  border-bottom: solid #707070 1px;
  margin-top: 5px;
  padding-bottom: 5px;
  background-color: white;
}
p {
  background-color: white;
  padding-bottom: 20px;
}
h3 {
  background-color: white;
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 18px;
}
transition {
  background-color: white;
  overflow: hidden;
}

.svg {
  transform: rotate(90deg);
}
@keyframes spin {
  100% {
    transform: rotate(90deg);
  }
}

.v-enter-from,
.v-leave-to {
  background-color: white;
  height: 0;
}
#svgdiv {
  width: 15px;
  display: inline-block;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: -5px;
  transition: 0.5s ease-out;
}
</style>
