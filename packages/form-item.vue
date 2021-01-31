<template>
  <div class="fx-form-item">
    <label class="fx-form-item__label" :style="{width : this.form.labelWidth}">{{label}}</label>
    <div class="fx-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FxFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['form']
}
</script>

<style lang="scss" scoped>
.fx-form-item {
  margin-bottom: 25px;
  .fx-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .fx-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
