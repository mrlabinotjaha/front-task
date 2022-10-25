<template>
  <div class="input__wrapper">
    <h5>{{ title }}</h5>
    <input @input="$emit('update:modelValue', $event.target.value)" :value="modelValue" class="input" :type="type" :placeholder="`Enter ${title} here . . .`">
  </div>
</template>

<script>

export default {
  props: {
    modelValue: {
      required: true,
      type: String 
    },
    title: {
      required: true,
      type: String ,
      default: 'Input'
    },
    type: {
      required: true,
      type: String,
      default: 'text'
    },
  },
  emits: ['update:modelValue'],
  computed: {
    validateEmail() {
      if( this.type === 'email' && this.modelValue !== 'test@msn.com') {
        return true
      }
      return false
    }
  }
  }
</script>

<style lang="scss" scoped>
  .input__wrapper {
    margin-bottom: 40px;
  }
  .input {
    border: 2px solid var(--black);
    padding: 14px 16px;
    min-width: 327px;
    &::placeholder {
      font-size: 16px;
      letter-spacing: 0.32px;
      color: var(--gray);
      opacity: 1;
    }
  }
</style>