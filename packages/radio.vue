<template>
  <label class="fx-radio" :class="{'is-checked': label===model}">
    <span class="fx-radio__input">
      <span class="fx-radio__inner"></span>
      <input
        class="fx-radio__original"
        type="radio"
        :value="label"
        :name="name"
        v-model="model"
      >
    </span>
    <span class="fx-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'FxRadio',
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  props: {
    label: [String, Number, Boolean],
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        // 如果为radiogroup按钮组，则获取父组件绑定接收的value值
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        // 触发父组件的input事件，当computed中的对象应用于双向绑定时就应该用get和set
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      return !!this.RadioGroup
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.fx-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .fx-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .fx-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
    .fx-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .fx-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}

.fx-radio.is-checked {
  .fx-radio__input {
    .fx-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  .fx-radio__label {
    color: #409eff;
  }
}
</style>
