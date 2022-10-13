<script>
import { mapActions, mapWritableState } from "pinia";
import { useIndexStore } from "../stores";

export default {
  name: "NavBar",
  methods: {
    ...mapActions(useIndexStore, ["handleLogOut", "checkLogin"]),
  },
  computed: {
    ...mapWritableState(useIndexStore, ["isLogin"]),
  },
};
</script>

<template>
  <div class="container-fluid">
    <nav
      class="navbar navbar-expand-lg bg-light rounded"
      aria-label="Eleventh navbar example"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Musicscape</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample09">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                @click.prevent="$router.push('/')"
                class="nav-link active"
                aria-current="page"
                href="#"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a @click="$router.push('/my-playlist')" class="nav-link" href="#"
                >My Mixtape</a
              >
            </li>
          </ul>
          <form role="search">
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div class="navbar-nav mr-auto align-items-sm-center">
            <a
              v-if="isLogin === true"
              @click.prevent="handleLogOut"
              class="nav-link"
              href="#"
              >Log Out</a
            >
            <a
              v-if="isLogin === false"
              @click.prevent="$router.push('/login')"
              class="nav-link"
              href="#"
              >Log In</a
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
