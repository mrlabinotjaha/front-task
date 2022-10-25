<template>
  <div class="container">
    <div class="details__wrapper">
      <div class="details__info">
        <h1>My Album One</h1>
        <h5 class="gray">Date created: 29th November 2021</h5>
      </div>
      <section class="album__images">
        <div v-if="!getAlbums()">No images on album yet</div>
        <div v-else v-for="item in getAlbums()" :key="item.id" class="album__image">
          <img loading="lazy" :src="item.download_url" alt="">
          <div class="remove__item">
            <p>Remove</p>
          </div>
        </div>
      </section>
      <div class="buttons__cta">
        <button class="button outline--reverse" @click="goBack()">Go back</button>
        <button class="button">save</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  data() {
    return {
      id: 1,
      imagesObject: [],
    }
  },
  computed: {
    ...mapState({
      images: state => state.albums.albums
    }),
    ...mapGetters('albums', ['getAlbumImages']),
    
  },

  // async mounted() {
  //   await this.getDetails()
  // },
  methods: {    
    async getDetails() {
      
    },
    getAlbums() {
      const id = this.$route.params.id
      return this.getAlbumImages.filter(album => album.id == id)[0].images
    },

    goBack() {
      this.$router.go(-1)
    }
    
  }
}
</script>

<style lang="scss" scoped>
  .album__images {
    margin: 25px 0 70px;
    grid-template-columns: repeat(3, 190px);
    display: grid;
    grid-auto-rows: 190px;
    gap: 36px;
    
  }
  .album__image {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    .remove__item {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 30px;
      background-color: var(--red);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      display: none;
      p {
        margin: 0;
        color: var(--white);
        font-weight: 700;
        text-transform: uppercase;
      }
     
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
     &:hover {
        .remove__item {
          display: flex;
        }
      }
  }
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