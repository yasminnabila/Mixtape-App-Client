<script>
import NavBar from "../components/NavBar.vue";
import Cards from "../components/Cards.vue";
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";
import Headline from "../components/Headline.vue";
export default {
  name: "NewRelease",
  components: { NavBar, Cards, Headline },
  computed: {
    ...mapState(useIndexStore, ["newReleases"]),
  },
  methods: {
    ...mapActions(useIndexStore, [
      "getNewReleases",
      "snapPayment",
      "checkLogin",
    ]),
  },
  created() {
    this.getNewReleases();
    this.checkLogin();
  },
};
</script>

<template>
  <div
    class="container-fluid"
    style="background-color: #b2dfdb; min-height: 100vh"
  >
    <div class="row">
      <NavBar />
    </div>

    <div class="d-flex justify-content-center">
      <button @click="snapPayment" id="pay-button">Pay!</button>
    </div>

    <!-- HEADER -->
    <div class="container-sm text-center mt-5" data-aos="zoom-in">
      <p class="h2 text-muted justify-content-center">
        Browse for today's new release albums!
      </p>
    </div>
    <!-- HEADER -->

    <!-- NEW RELEASES CARD -->
    <div class="row mt-5">
      <div
        class="col-3 mb-3"
        style="display: flex; justify-content: center"
        v-for="playlist in newReleases"
        :key="playlist.id"
      >
        <Cards :data="playlist" typeCard="album" />
      </div>
    </div>
    <!-- NEW RELEASES END -->
  </div>
</template>
