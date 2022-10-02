<template>
  <Datepicker
    id="datepicker"
    class="dp"
    v-model="date"
    range
    locale="no"
    :enableTimePicker="false"
    selectText="Velg"
    cancelText="Lukk"
    style="
      --dp-primary-color: var(--indigo) !important;
      --dp-success-color-color: var(--indigo) !important;
    "
  >
  </Datepicker>
</template>

<script>
import Datepicker from "@vuepic/vue-datepicker";
import { ref, onMounted } from "vue";
import "@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss";

export default {
  components: { Datepicker },
  setup() {
    const date = ref();

    // For demo purposes assign range from the current date
    onMounted(() => {
      const startDate = new Date();
      const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
      date.value = [startDate, endDate];
    });

    return {
      date,
    };
  },
};
</script>
<style scoped></style>
