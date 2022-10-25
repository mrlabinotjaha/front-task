<template>
  <div class="container">
    <section class="cards__wrapper">
      <Card v-for="item in quotesObject" :key="item.id" :item="item" />
    </section>
    <Success />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "@/components/Card.vue";
import Success from "@/components/Success.vue";

export default {
  name: "Home",
  data() {
    return {
      pageNumber: 1,
      pageSize: 30,
      end: false,
    };
  },
  components: {
    Card,
    Success,
  },
  computed: {
    ...mapGetters("images", ["quotesObject"]),
  },
  methods: {
    ...mapActions("images", ["getQuotes"]),

    async handleScroll() {
      // check if we are at the bottom of the page
      if (this.end === true) return;
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        this.pageNumber += 1;
        this.end = true;
        await this.getQuotes({
          pageNumber: this.pageNumber,
          pageSize: this.pageSize,
        });
        this.end = false;
      }
    },
  },
  async mounted() {
    this.getQuotes();
    window.addEventListener("scroll", this.handleScroll);
  },
  onUnmounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.cards__wrapper {
  margin-top: 96px;
  grid-template-columns: repeat(3, 416px);
  display: grid;
  grid-auto-rows: 250px;
  grid-column-gap: 36px;
  grid-row-gap: 36px;
}
</style>
