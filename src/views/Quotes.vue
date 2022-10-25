<template>
  <div class="container">
    <section class="cards__wrapper">
      <Card
        v-for="item in quotesObject"
        :key="item.id"
        :item="item"
        :endpoint="'quotes'"
      />
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  data() {
    return {
      pageNumber: 1,
      end: false,
    };
  },
  components: {
    Card,
  },
  computed: {
    ...mapState({
      lastRequest: (state) => state.images.lastRequest,
    }),
    ...mapGetters("api", ["quotesObject"]),
  },
  methods: {
    ...mapActions("api", ["getQuotes", "lastRequestReset"]),
    async handleScroll() {
      if (this.end) return;
      if (this.lastRequest === true) return;

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        this.pageNumber += 1;
        this.end = true;
        await this.getQuotes({
          pageNumber: this.pageNumber,
        });
        this.end = false;
      }
    },
  },
  async mounted() {
    await this.getQuotes({ pageNumber: this.pageNumber });
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  beforeRouteLeave() {
    this.lastRequestReset();
  },
};
</script>
