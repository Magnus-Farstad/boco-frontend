<template>
  <div class="systemMessageContainer" id="statusMessageContainer">
    <div id="statusMessage">
      <div class="statusContainer">
        <div id="statusText">
          Status for leieforhold: <strong class="status">{{ status }}</strong>
        </div>
        <svg
          v-if="status === 'Aktiv'"
          class="statusIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          aria-label="aktiv"
        >
          <g id="noun-timer-2095142" transform="translate(-12.47 -12.47)">
            <path
              id="Path_45"
              data-name="Path 45"
              d="M23.47,33.47a10,10,0,1,1,10-10,10,10,0,0,1-10,10Zm0-19.855a9.855,9.855,0,1,0,9.855,9.855A9.855,9.855,0,0,0,23.47,13.615Z"
              transform="translate(0)"
              fill="#034363"
              stroke="#034363"
              stroke-width="2"
            />
            <path
              id="Path_46"
              data-name="Path 46"
              d="M27.539,27.537h0V19.07a8.525,8.525,0,0,0-2.19.287,8.492,8.492,0,0,0-5.99,5.99,8.508,8.508,0,0,0,0,4.38,8.492,8.492,0,0,0,5.99,5.99,8.508,8.508,0,0,0,4.38,0,8.511,8.511,0,0,0,5.141-3.947Z"
              transform="translate(-4.069 -4.067)"
              fill="#034363"
            />
          </g>
        </svg>
        <svg
          v-if="status === 'Avventer'"
          class="statusIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-label="Avventer"
        >
          <g id="_05" data-name="05" transform="translate(-2 -2)">
            <path
              id="Path_43"
              data-name="Path 43"
              d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
              fill="#fd9e02"
            />
            <path
              id="Path_44"
              data-name="Path 44"
              d="M12,6a1,1,0,0,0-1,1v4.59l-2.71,2.7A1,1,0,1,0,9.7,15.7l3-3A1,1,0,0,0,13,12V7A1,1,0,0,0,12,6Z"
              fill="#fd9e02"
            />
          </g>
        </svg>
        <svg
          v-if="status === 'Akseptert'"
          class="statusIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20.004"
          viewBox="0 0 20 20.004"
          aria-label="Akseptert"
        >
          <g id="noun-checkmark-2573373" transform="translate(-1.002 -0.999)">
            <path
              id="Path_42"
              data-name="Path 42"
              d="M18.072,18.076a10,10,0,1,0-14.14,0A10,10,0,0,0,18.072,18.076ZM6.183,11.212a.63.63,0,0,1,.888,0l2.038,2.032L14.934,7.43a.636.636,0,0,1,.888.006.623.623,0,0,1,0,.881L9.546,14.569a.6.6,0,0,1-.438.181.614.614,0,0,1-.444-.181L6.183,12.1A.63.63,0,0,1,6.183,11.212Z"
              fill="#37b43f"
            />
          </g>
        </svg>
        <svg
          v-if="status === 'Kansellert'"
          class="statusIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-label="Kansellert"
        >
          <g id="noun-cancel-2014884" transform="translate(-5 -5)">
            <path
              id="Path_50"
              data-name="Path 50"
              d="M15,5A10,10,0,1,0,25,15,10.015,10.015,0,0,0,15,5Zm0,18.622A8.622,8.622,0,1,1,23.622,15,8.63,8.63,0,0,1,15,23.622Z"
              fill="#d22222"
            />
            <path
              id="Path_51"
              data-name="Path 51"
              d="M40.819,33.242a.738.738,0,0,0-1.044,0l-2.756,2.733-2.733-2.733a.739.739,0,0,0-1.044,1.044l2.733,2.733-2.733,2.756a.738.738,0,0,0,0,1.044.766.766,0,0,0,.511.222.675.675,0,0,0,.511-.222l2.756-2.756L39.753,40.8a.766.766,0,0,0,.511.222.644.644,0,0,0,.511-.222.738.738,0,0,0,0-1.044l-2.711-2.733L40.8,34.286A.719.719,0,0,0,40.819,33.242Z"
              transform="translate(-21.797 -21.797)"
              fill="#d22222"
            />
          </g>
        </svg>
        <svg
          v-if="status === 'Avvist'"
          class="statusIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-label="Avvist"
        >
          <g id="noun-denied-1447616" transform="translate(0 0)">
            <path
              id="Path_52"
              data-name="Path 52"
              d="M17.071,2.929a10,10,0,1,0,0,14.142A10,10,0,0,0,17.071,2.929ZM4.957,4.958a7.109,7.109,0,0,1,8.967-.913l-9.88,9.88A7.134,7.134,0,0,1,4.957,4.958ZM15.042,15.043a7.1,7.1,0,0,1-8.968.911l9.893-9.861A7.138,7.138,0,0,1,15.042,15.043Z"
              fill="#d22222"
            />
          </g>
        </svg>
        <svg
          v-if="status === 'Avsluttet'"
          class="statusIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20.004"
          viewBox="0 0 20 20.004"
          aria-label="Avsluttet"
        >
          <g id="noun-checkmark-2573373" transform="translate(-1.002 -0.999)">
            <path
              id="Path_42"
              data-name="Path 42"
              d="M18.072,18.076a10,10,0,1,0-14.14,0A10,10,0,0,0,18.072,18.076ZM6.183,11.212a.63.63,0,0,1,.888,0l2.038,2.032L14.934,7.43a.636.636,0,0,1,.888.006.623.623,0,0,1,0,.881L9.546,14.569a.6.6,0,0,1-.438.181.614.614,0,0,1-.444-.181L6.183,12.1A.63.63,0,0,1,6.183,11.212Z"
              fill="#37b43f"
            />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatusSystemMessage",

  props: {
    rental: {
      type: Object,
      required: true,
    },
  },
  computed: {
    status() {
      switch (this.rental.status) {
        case "ACCEPTED":
          return "Akseptert";
        case "ACTIVE":
          return "Aktiv";
        case "PENDING":
          return "Avventer";
        case "REJECTED":
          return "Avvist";
        case "CANCELED":
          return "Kansellert";
        case "FINISHED":
          return "Avsluttet";
        default:
          return "Default";
      }
    },
  },
};
</script>

<style scoped>
.statusContainer {
  font-size: 18px;
  text-align: left;
}
.statusContainer svg {
  margin-bottom: -5px;
  margin-right: 7px;
  margin-left: 5px;
}

strong {
  font-weight: 500;
}
#statusText {
  display: inline-block;
}
@media(max-width: 410px){
  .statusContainer{
    font-size: 16px;
  }
}
@media(max-width: 380px){
  .statusContainer{
    font-size: 15px;
  }
}
</style>
