<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="toast" >
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <template v-if="!autoClose">
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluToast',
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 3,
      validator(value) {
        return value === false || typeof value === 'number'
      }
    },
    closeButton: {
      type: Object,
      default: () => { // 如果 default 值是一个对象，则需要使用函数形式返回对象，就类似组件的 data 属性
        return {
          text: '关闭',
          callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    toastClasses() {
      return [`position-${this.position}`]
    }
  },
  mounted() {
    this.updateStyles()
    this.execAutoClose()
  },
  methods: {
    updateStyles() {
      if (!this.autoClose) {
        this.$nextTick(() => { // 直接赋值获取不到外层元素的高度
          this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
        })
      }
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoClose * 1000)
      }
    },
    close() {
      this.$el.remove()
      this.$emit('beforeClose')
      this.$destroy()
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this) // 可以在回调里传入toast实例，以达到更多功能
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './var.scss';

@keyframes fade-in {
  0% {opacity: 0; }
  100% {opacity: 1; }
}
@keyframes slide-up {
  0% {opacity: 0; transform: translateY(100%);}
  100% {opacity: 1; transform: translateY(0%);}
}
@keyframes slide-down {
  0% {opacity: 0; transform: translateY(-100%);}
  100% {opacity: 1; transform: translateY(0%);}
}

.wrapper {
  position: fixed; left: 50%; transform: translateX(-50%); z-index:100;
  &.position-top {
    top: 0;
    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down $animation-duration;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up $animation-duration;
    }
  }
  &.position-middle {
    top: 50%; transform: translateX(-50%) translateY(-50%); animation: fade-in $animation-duration;
  }
}

.toast {
  font-size: $font-size; line-height: 1.8; min-height: $toast-min-height; color: #fff; padding: 0 16px;
  display: flex; align-items: center; background: $toast-bg; border-radius: 4px; box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
  .message {
    padding: 8px 0;
  }
  .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
}
</style>
