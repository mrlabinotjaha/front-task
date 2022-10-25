<template>
  <div class="container">
    <div class="login__wrapper">
      <div class="login__hero">
        <div class="login__intro">
          <h3>Register in February 21</h3>
        </div>
        <div class="login__form">
          <form>
            <Input
              title="Username"
              type="email"
              v-model="username"
              :required="true"
            />
            <p class="error">
              {{ valUsername }}
            </p>
            <Input
              title="Password"
              type="password"
              v-model="password"
              :required="true"
            />
            <p class="error">
              {{ valPassword }}
            </p>
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
      valUsername: "",
      valPassword: "",
    };
  },
  watch: {
    username() {
      this.valUsername = "";
    },
    password() {
      this.valPassword = "";
    },
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();

      const data = {
        username: this.username,
        password: this.password,
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
      };

      try {
        await axios.post("users/", data);
      } catch (err) {
        Object.keys(err.response.data).forEach((key) => {
          if (key === "username") {
            this.valUsername = err.response.data[key][0];
          } else if (key === "password") {
            this.valPassword = err.response.data[key][0];
          }
        });
      }

      if (response.status === 201) {
        localStorage.setItem("token", response.data.auth_token);
        this.$router.push({ name: "Home" });
      }

      this.clearInputs();
    },

    clearInputs() {
      this.username = "";
      this.password = "";
      this.firstName = "";
      this.lastName = "";
      this.email = "";
    },
  },
};
</script>

<style lang="scss">
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
}
</style>
