<script>
import { mapActions, mapState } from "pinia";
import NavBar from "../components/NavBar.vue";
import TableAlbum from "../components/TableAlbum.vue";
import { useIndexStore } from "../stores";
export default {
  name: "AlbumDetail",
  methods: {
    ...mapActions(useIndexStore, ["getAlbumById"]),
  },
  computed: {
    ...mapState(useIndexStore, ["album"]),
  },
  async created() {
    await this.getAlbumById(this.$route.params.id);
  },
  components: { NavBar, TableAlbum },
};
</script>

<template>
  <div
    class="container-fluid"
    style="background-color: #b2dfdb; min-height: 100vh"
  >
    <!-- NAVBAR -->
    <div class="row">
      <NavBar />
    </div>

    <!-- TITLE -->
    <div class="container align-items-center justify-content-center">
      <br />

      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          transform: scale(85%);
        "
      >
        <div>
          <h3 class="display-3">Album Detail</h3>
        </div>
      </div>
    </div>

    <!-- TABLE -->
    <div class="container my-6" style="transform: scale(85%)">
      <div class="shadow-4 rounded-5 overflow-hidden">
        <TableAlbum :tracks="album?.tracks?.items" />
      </div>
    </div>
  </div>
</template>
