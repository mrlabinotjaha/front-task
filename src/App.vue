<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "@/components/Header.vue"; // @ is an alias to /src
import { mapActions } from "vuex";

export default {
  components: {
    Header,
  },
  methods: {
    ...mapActions(["triggerInitCheck"]),
  },
  created() {
    this.triggerInitCheck();
  },
};
</script>

<style lang="scss"></style>
