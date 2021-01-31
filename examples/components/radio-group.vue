<template>
  <div class="fx-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FxRadioGroup',
  // provide 应用于高级组件封装的情况下，可以完成祖先组件以及子孙组件之间的通信
  // 注意：this.$parent也可以拿到父组件上的对象，但是如果子组件和目标祖先组件之间存在多个祖先标签则无法操作
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>

<style>

</style>
