<template>
  <div class="fx-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FxCheckboxGroup',
  props: {
    value: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>

</style>
