<script>
import { mapActions, mapWritableState } from "pinia";
import { useIndexStore } from "../stores";

export default {
  name: "LoginView",
  data() {
    return {
      user: {},
    };
  },
  computed: {
    ...mapWritableState(useIndexStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useIndexStore, ["submitLogin"]),
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
                Hello!
              </p>
              <p class="text-center h4 h3 mb-3 fw-normal">Please sign in</p>
              <div class="mt-5 form-signin w-100 m-auto">
                <form
                  id="login-form"
                  @submit.prevent="submitLogin(user)"
                  method="post"
                >
                  <div class="form-floating">
                    <input
                      type="email"
                      class="form-control"
                      id="login-email"
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
                      id="login-password"
                      v-model="user.password"
                      placeholder="Enter your password..."
                      autocomplete="off"
                      required
                    />
                    <label for="floatingPassword">Password</label>
                  </div>

                  <div class="checkbox mb-3">
                    <label>
                      <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                  </div>
                  <button
                    class="w-100 btn btn-lg btn-primary"
                    type="submit"
                    style="background-color: #006064"
                    @click="submitLogin"
                  >
                    Sign in
                  </button>
                </form>
              </div>

              <p class="text-center text-muted mt-5 mb-0">
                Not registered?
                <a
                  @click.prevent="$router.push('/register')"
                  href="#!"
                  class="fw-bold text-body"
                  ><u>Sign Up</u></a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
