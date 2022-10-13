<script>
import { mapActions, mapWritableState } from "pinia";
import { useIndexStore } from "../stores";

export default {
  name: "RegisterView",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    ...mapActions(useIndexStore, ["submitRegister"]),
  },
};
</script>

<template>
  <section
    class="d-flex justify-content-center align-items-center"
    style="background-color: #b2dfdb; min-height: 100vh"
    id="login-section"
  >
    <div
      class="container h-50 justify-content-center align-items-center"
      style="transform: scale(90%)"
    >
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-sm-8 col-sm-2">
          <div class="row justify-content-center">
            <div class="col-md-5 col-lg-6 col-xl-6">
              <p class="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                We're so excited to have you here!
              </p>
              <p class="text-center h4 h3 mb-3 fw-normal">
                Sign up to discover our website
              </p>
              <div class="mt-5 form-signin w-100 m-auto">
                <form
                  id="register-form"
                  @submit.prevent="submitRegister(user)"
                  method="post"
                >
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="register-username"
                      v-model="user.username"
                      placeholder="name"
                      required
                    />
                    <label for="floatingInput">Username</label>
                  </div>
                  <div class="form-floating">
                    <input
                      type="email"
                      class="form-control"
                      id="register-email"
                      v-model="user.email"
                      placeholder="name@example.com"
                      required
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating">
                    <input
                      type="password"
                      class="form-control"
                      id="register-password"
                      v-model="user.password"
                      placeholder="Enter your password..."
                      autocomplete="off"
                      required
                    />
                    <label for="floatingPassword">Password</label>
                  </div>

                  <button
                    class="w-100 btn btn-lg btn-primary"
                    type="submit"
                    style="background-color: #006064"
                    @click="submitRegister"
                  >
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
