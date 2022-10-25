<template>
  <article class="card">
    <router-link :to="{ name: 'Supplier', params: { id: item.id } }">
      <p>ID: #{{ item.supplier_id }}</p>
      <h1>Amount: {{ item.amount }}</h1>
      <h4>Title: {{ item.title }}</h4>
      <h5>Created: {{ formatDate }}</h5>
    </router-link>
  </article>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    formatDate() {
      const date = new Date(this.item.created);
      const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      };
      return date.toLocaleDateString("en-GB", options);
    },
  },
  components: {},
  props: {
    item: {
      required: true,
    },
  },
  methods: {
    closed({ showModal }) {
      this.showModal = showModal;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  position: relative;
  border: 1px solid var(--gray);
  padding: 10px;
  border-radius: 10px;
}
</style>
