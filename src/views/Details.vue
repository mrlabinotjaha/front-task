<template>
  <div class="container">
    <div class="details__wrapper">
        <div class="buttons__cta">
          <button class="button outline--reverse">Add to album +</button>
          <button class="button" @click="downloadImage()">download</button>
        </div>
        <figure class="details__image">
          <img loading="lazy" :src="details.download_url" alt="">
        </figure>
        <div class="details__info">
          <h5>Uploaded by</h5>
          <h1>{{ details.author }}</h1>
          <h5 class="gray">29th November 2021</h5>
          <button class="button outline--reverse" @click="goBack()">Go back</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: {},  
    }
  },
  async mounted() {
      await this.getDetails()
  },
  methods: {    
     async getDetails() {
      const id = this.$route.params.id
      const response = await fetch(`https://picsum.photos/id/${id}/info`)
      const data = await response.json()
      this.details = data
    },
  
    downloadImage() {
      const id = this.$route.params.id
      fetch(`https://picsum.photos/id/${id}/info`)
        .then( res => res.blob() )
        .then( blob => {
          console.log(blob)
            var file = this.details.download_url;
            console.log(file)
            window.location.assign(file);
        });
      },

      goBack() {
        this.$router.go(-1)
      }
    
  }
}
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
    h5, h1 {
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