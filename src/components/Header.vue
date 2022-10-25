<template>
  <nav class="nav">
    <div class="container">
      <header class="header">
        <h1><router-link to="/">February 21</router-link></h1>
        <div class="nav__links">
          <router-link to="/">Suppliers</router-link>
          <router-link to="/quotes">Quotes</router-link>
        </div>

        <!-- <button v-show="isLogged()" class="button outline" @click="logout">Sign out</button> -->
        <button class="button outline" :class="{ hide: false }">Logout</button>
      </header>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    ...mapState({
      checkoutStatus: (state) => state.login.isLogged,
    }),
    ...mapGetters("albums", ["getAlbums"]),
  },
  methods: {
    ...mapActions(["logOut"]),

    logout() {
      this.logOut();
      this.$router.push("/login");
      localStorage.clear();
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  height: 60px;
  position: relative;
  button {
    position: absolute;
    right: 0;
    cursor: pointer;
  }
}
.nav {
  background-color: var(--red);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  h1 {
    margin: 0;
  }
}
.nav__links {
  display: flex;
  width: 100%;
  justify-content: center;
  a {
    color: var(--white);
    text-decoration: none;
    margin: 0 10px;
  }
}
</style>
