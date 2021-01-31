<template>
  <div class="fx-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FxForm',
  props: {
    model: {
      type: Object,
      require: true
    },
    labelWidth: {
      type: String,
      default: ''
    }
  },
  provide () {
    return {
      form: this
    }
  }
}
</script>

<style>

</style>
