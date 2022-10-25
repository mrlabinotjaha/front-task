<template>
  <div class="container">
    <div class="details__wrapper">
      <div class="details__info">
        <h5>Id: {{ details.id }}</h5>
        <h1>Name: {{ details.name }}</h1>
        <h3>Description: {{ details.description }}</h3>
        <button class="button outline--reverse" @click="goBack()">
          Go back
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      details: {},
    };
  },
  async mounted() {
    await this.getDetails();
  },
  methods: {
    async getDetails() {
      const id = this.$route.params.id;
      const response = await axios(`suppliers/${id}/`);
      console.log(response.data);
      const data = await response.data;
      this.details = data;
    },

    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.details__wrapper {
  min-height: 100vh;
  margin-top: 96px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.details__image {
  width: 480px;
  height: 600px;
  margin-bottom: 30px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.details__info {
  h5,
  h1 {
    margin: 0;
  }
  h1 {
    font-weight: normal;
    letter-spacing: 0.64px;
  }
  button {
    margin: 30px 0;
  }
}
</style>
