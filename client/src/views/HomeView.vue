<script>
import NavBar from "../components/NavBar.vue";
import Cards from "../components/Cards.vue";
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";
export default {
  name: "HomeView",
  components: { NavBar, Cards },
  computed: {
    ...mapState(useIndexStore, ["newReleases"]),
  },
  methods: {
    ...mapActions(useIndexStore, ["getNewReleases"]),
  },
  created() {
    this.getNewReleases();
  },
};
</script>

<template>
  <div
    class="container-fluid"
    style="background-color: #b2dfdb; min-height: 100vh"
  >
    <NavBar />

    <!-- HEADER -->
    <div class="container-sm text-center mt-5 mb-10" data-aos="zoom-in">
      <h1 class="display-4 justify-content-center">
        Welcome to Mixtape App ✨
      </h1>
      <p class="h4 text-muted justify-content-center">
        Create your seamless playlists with us!
      </p>
    </div>
    <!-- HEADER -->

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
