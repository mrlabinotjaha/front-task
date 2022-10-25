<template>
  <div class="container">
    <div class="login__wrapper">
      <div class="login__hero">
        <div class="login__intro">
          <h3>Login in February 21</h3>
        </div>
        <div class="login__form">
          <form>
            <Input title="Username" type="email" v-model="username" />
            <Input title="Password" type="password" v-model="password" />
            <p v-show="true" class="error">
              {{ errorMsg }}
            </p>
            
            <div class="login__cta"> 
              <button class="button" @click="login">Log in</button>
              <span>or</span>
              <router-link :to="{ name: 'Register' }">
                <h3>Register</h3></router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import { mapActions, mapState } from "vuex";
import axios from "axios";

export default {
  components: {
    Input,
  },
  data() {
    return {
      username: "",
      password: "",
      errorMsg: "",
    };
  },
  computed: {
    ...mapState({
      checkoutStatus: (state) => state.login.isLogged,
      auth: (state) => state.login.auth,
    }),
  },
  methods: {
    ...mapActions(["getUser", "logIn"]),
    async login(e) {
      e.preventDefault();

      let data = {
        username: this.username,
        password: this.password,
      };

      try {
        let response = await axios.post("https://february-21.herokuapp.com/api-token-auth/", data);
        console.log(response)
        localStorage.setItem("token", response.data.token);
        this.logIn();
        axios.defaults.headers.common["Authorization"] = `Token ${localStorage.getItem(
          "token"
        )}`;
        this.$router.push({ name: "Home" });
      } catch ( err ) {
        console.log(err)
        console.log(err.response.data);
        this.errorMsg = Object.keys(err.response.data)[0] + ', ' + Object.values(err.response.data)[0]
      }
    },
  },
  mounted() {
    // this.getUser();
  },
};
</script>

<style lang="scss" scoped>
.login__wrapper {
  padding: 0 15px;
  height: 100%;
  padding-top: 6.25rem;
  position: relative;
}
.login__form {
  margin-top: 40px;
  text-align: center;
}
.login__intro {
  text-align: center;
  h3 {
    font-size: 44px;
    letter-spacing: -2.2px;
    color: var(--black);
    font-weight: 800;
    margin: 0;
  }
  p {
    margin: 0;
    letter-spacing: 0.44px;
    color: var(--black);
    font-size: 22px;
    font-weight: normal;
  }
}
.login__cover-image {
  margin-top: 100px;
  text-align: center;
  position: relative;
  z-index: 1;
  img {
    margin-bottom: 13px;
  }
}
</style>
