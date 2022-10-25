<template>
  <div class="transition">
    <div class="success__toast" :class="{'hide': !getToastBoolean}">
      <h1>This is a success message!</h1>
    </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {

methods: {
  ...mapActions('albums', ['showToast']),
},
 computed: {
  ...mapGetters('albums', ['getToastBoolean']),
 },
 watch: {
  getToastBoolean() {
    setTimeout(() => {
      this.showToast(false)
    }, 3000)
  }
 }
}
</script>

<style lang="scss" scoped>
  
  .success__toast {
    background-color: var(--black);
    height: 180px;
    position: fixed;
    left: 0;
    transition: all 0.2s ease;
    width: 100%;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    &.hide {
      bottom: -180px;
    }
    h1 {
      color: var(--white);
    }
  }
</style>