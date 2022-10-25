<template>
  <div class="container">
    <div class="login__wrapper">
      <div class="login__hero">
        <div class="login__intro">
          <h3>Register in February 21</h3>
        </div>
        <div class="login__form">
          <form>
            <Input title="Username" type="email" v-model="username" />
            <Input title="Password" type="password" v-model="password" />
            <Input title="First Name" type="text" v-model="firstName" />
            <Input title="Last Name" type="text" v-model="lastName" />
            <Input title="Email" type="Email" v-model="email" />

            <div class="login__cta">
              <button class="button" @click="handleSubmit">Register</button>
              <span>or</span>
              <router-link :to="{ name: 'Login' }">
                <h3>Sign In</h3></router-link
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
      firstName: "",
      lastName: "",
      email: "",
      wrongUsernameOrPassword: false,
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

    async handleSubmit(e) {
      e.preventDefault();

      const data = {
        username: this.username,
        password: this.password,
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
      };

      let response = await axios.post("users/", data);
      console.log("response", response);
    },
  },
  mounted() {
    this.getUser();
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
  .login__cta {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      margin: 0 8px;
    }
  }
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
}
</style>
