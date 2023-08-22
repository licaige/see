<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>

        <div v-else v-html="$slots.default[0]"></div>
      </div>

      <div class="line" ref="line"></div>

      <div @click="onClickClose" class="close">
        <span v-if="closeButton">{{closeButton.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "eToast",

  props: {
    // S1 + S2 是否自动关闭toast + 自动关闭toast的延时时间
    autoClose: {
      type: [Boolean, Number],
      default: 5,
      validator(value) {
        return value === false || typeof value === "number";
      }
    },


    //S3 关闭按钮 文本内容 + 回调函数
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined
        };
      }
    },

    //S4 传入文本内容是否是 富文本
    enableHtml: {
      type: Boolean,
      default: false
    },

    //S5 toast在页面的显示位置
    position: {
      type: String,
      validator(value) {
        return ["top", "middle", "bottom"].indexOf(value) >= 0;
      }
    }
  },

  computed: {
    toastClasses() {
      return [`position-${this.position}`];
    }
  },

  mounted() {
    this.updateStyles();
    this.execAutoClose();
  },

  methods: {
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`;
      });
    },

    execAutoClose() {
      // 自动关闭toast
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoClose * 1000);
      }
    },

    close() {
      this.$el.remove();
      this.$destroy();
    },

    onClickClose() {
      this.close();

      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);

$animation-duration: 600ms;

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 5%;
    & .toast {
      animation: slide-down $animation-duration;
    }
  }

  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);

    & .toast {
      animation: fade-in $animation-duration;
    }
  }

  &.position-bottom {
    bottom: 5%;

    & .toast {
      animation: slide-up $animation-duration;
    }
  }
}

.toast {
  font-size: $font-size;
  min-height: $toast-min-height;
  line-height: 1.8;

  display: flex;
  align-items: center;

  color: white;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
}

.message {
  padding: 6px 0;
}

.line {
  height: 100%;
  border-left: 1px solid #999;
  margin: 0 8px;
}

.close {
  flex-shrink: 0;
  cursor: pointer;
}
</style>
