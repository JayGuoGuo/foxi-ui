<template>
  <transition name="dialog-animate">
  <div class="fx-dialog__wrapper" v-show="visible" @click.self="handleClick">
    <div class="fx-dialog" :style="{marginTop:top,width}" @click="handleClick">
      <div class="fx-dialog__header">
        <slot name="title">
          <span class="fx-dialog__title">{{title}}</span>
        </slot>
        <button class="fx-dialog__headerbtn">
          <i class="fx-icon-close"></i>
        </button>
      </div>
      <div class="fx-dialog__body">
        <slot></slot>
      </div>
      <div class="fx-dialog__footer">
        <slot name="buttonList"></slot>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'FxDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    top: {
      type: String,
      default: '15vh'
    },
    width: {
      type: String,
      default: '30%'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      // update:属性名，与sync语法糖结合使用
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
//******** scoped属性会随机给组件中左右dom标签添加随机的选择器 ********//
// 深度选择器：/deep/在vue 3.0中使用会报错，可以替换使用::v-deep。在css中只能用>>>深度选择器
//------------------------------------分隔线--------------------------------------------
// css过渡写法
// .dialog-animate-enter{
//   opacity: 0;
// }
// .dialog-animate-enter-to{
//   opacity: 1;
// }
// .dialog-animate-enter-active{
//   transition: all .5s;
// }
// .dialog-animate-leave{
//   opacity: 1;
// }
// .dialog-animate-leave-to{
//   opacity: 0;
// }
// .dialog-animate-leave-active{
//   transition: all .5s;
// }

// css动画
.dialog-animate-enter-active{
  animation: dialogRun 0.3s;
}
.dialog-animate-leave-active{
  animation: dialogRun 0.3s reverse;
}
@keyframes dialogRun {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
.fx-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0, .5);

  .fx-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .fx-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .fx-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .fx-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
</style>
