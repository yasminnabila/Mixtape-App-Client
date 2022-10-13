import { defineStore } from "pinia";
import axios from "axios";
// const baseUrl = "https://iproject-mixtape.herokuapp.com";
const baseUrl = "http://localhost:3000";

export const useIndexStore = defineStore("index", {
  state: () => {
    return {
      isLogin: false,
      newReleases: [],
      paymentResponse: [],
    };
  },
  actions: {
    checkLogin() {
      if (localStorage.access_token) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
    async submitLogin(payload) {
      try {
        const dataLogin = await axios({
          method: "POST",
          url: baseUrl + `/login`,
          data: {
            email: payload.email,
            password: payload.password,
          },
        });
        console.log(dataLogin, "INI DATA LOGIN");
        localStorage.setItem("access_token", dataLogin.data.access_token);
        this.$router.push("/");
        this.isLogin = true;
        this.email = "";
        this.password = "";
      } catch (error) {
        console.log(error);
      }
    },
    async submitRegister(user) {
      try {
        await axios({
          method: `POST`,
          url: baseUrl + `/register`,
          data: {
            username: user.username,
            email: user.email,
            password: user.password,
          },
        });

        this.$router.push("/login");
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    async handleLogOut() {
      localStorage.clear();
      this.$router.push(`/`);
    },
    async getNewReleases() {
      try {
        const dataNewReleases = await axios({
          method: "GET",
          url: baseUrl + `/api/get-new-releases`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        this.newReleases = dataNewReleases.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async snapPayment() {
      try {
        let { data } = await axios({
          method: "POST",
          url: baseUrl + `/payments`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(data);

        snap.pay(`${data.transactionToken}`, {
          onSuccess: async (result) => {
            /* You may add your own implementation here */
            // alert("payment success!");
            console.log(result);
            this.paymentResponse = result;
          },
          // onPending: function (result) {
          //   /* You may add your own implementation here */
          //   alert("wating your payment!");
          //   console.log(result);
          // },
          // onError: function (result) {
          //   /* You may add your own implementation here */
          //   alert("payment failed!");
          //   console.log(result);
          // },
          // onClose: function () {
          //   /* You may add your own implementation here */
          //   alert("you closed the popup without finishing the payment");
          // },
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
