<template>
  <div class="container">
    <h1>Vanlige spørsmål</h1>

    <div class="actions">
      <div
        class="questionContainer"
        v-for="questionlist in questions"
        v-bind:key="questionlist"
      >
        <BaseQuestion
          :title="questionlist.title"
          :description="questionlist.description"
        >
        </BaseQuestion>
      </div>
    </div>
  </div>
</template>

<script>
import BaseQuestion from "@/components/baseTools/baseQuestion";
export default {
  name: "FAQView",
  components: { BaseQuestion },
  data() {
    return {
      questions: [
        {
          title: "Hvordan oppretter man en annonse?",
          description:
            "Trykk på hamburger menyen, (logg inn dersom du ikke har gjort det). " +
            "Deretter trykk på lei ut knappen som tar deg til et skjema for å opprette en annonse.",
        },
        {
          title: "Hvordan leier man en gjenstand?",
          description:
            "Man finner en gjenstand man ønsker å leie, enten ved å søke eller trykke på en av annonsene på hjemmesiden. Trykk så på send forespørsel knappen, " +
            "dette tar deg til et skjema for å sende en forsespørsel. Her blir du bedt om å velge ønsket leieperiode, hvilken type levering du ønsker og en melding til utleier. " +
            "Denne meldingen bør inneholde noe om når på dagen du ønsker å hente en gjenstand eller annen informasjon som kan være nyttig for utleier",
        },
        {
          title: "Hvordan sletter jeg brukeren min?",
          description:
            "Trykk på hamburger menyen, naviger så til min profil deretter trykk på rediger knappen." +
            "Scroll til bunnen av siden her vil du finne slett bruker knappen",
        },
        {
          title: "Hvordan endrer jeg profilbilde?",
          description:
            'Trykk på hamburger menyen, naviger så til "min profil" deretter trykk på rediger knappen. \n' +
            'Trykk deretter på "legg til bilde" knappen under profilbilde/ikonet',
        },
        {
          title: "Hvordan godttar jeg en forespørsel?",
          description:
            "Du skal ha fått en notifikasjon som en kan se hvis du trykker å bjelle ikonet." +
            "Her får du en oversikt over alle nylige notifikasjoner, hvis du ikke finner den der kan du trykke på hamburger menyen." +
            "Derfra trykker du på mine annonser, her vil du få opp alle annonser du har lagt ut. Trykk så på en annonse for å se alle forespørsler." +
            "Her vil du kunne trykke på en enkelt forespørsel for å se beskjeden de har sendt og knappene for å bekrefte eller avvise",
        },
        {
          title: "Hvordan gir du en tilbakemelding?",
          description:
            'Trykk på hamburger menyen, deretter på "send tilbakemelding" knappen, \n' +
            "dette vil ta deg til en side hvor du kan gi en tilbakemelding\n",
        },
      ],
    };
  },
  methods: {
    toggleAnswer() {
      this.disabled = !this.disabled;
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
.container {
  padding: 0 15px;
  text-align: left;
}
h1 {
  border-bottom: 1px solid #707070;
  padding-bottom: 10px;
}
.questionContainer {
  background-color: white;
}
</style>
