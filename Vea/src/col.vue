<template>
  <div class="col" :class="colClasses" :style="colStyle">
    <div class="col-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>

let validator = value => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};

export default {
  name: "eCol",
  props: {
    span: {
      type: [String, Number]
    },

    offset: [String, Number],


    ipad: { type: Object, validator },
    narrowPc: { type: Object, validator },
    pc: { type: Object, validator },
    widePc: { type: Object, validator }
  },

  computed: {
    colClasses() {
      let { span, offset } = this;
      let { ipad, narrowPc, pc, widePc } = this;
      let createClasses = this.createClasses

      return [
        ...createClasses({span, offset}),
        ...createClasses(ipad, 'ipad-'),
        ...createClasses(narrowPc, 'narrow-pc-'),
        ...createClasses(pc, 'pc-'),
        ...createClasses(widePc, 'wide-pc-'),
      ]
    },

    colStyle() {
      let { gutter } = this;
      return {
        paddingLeft: `${gutter / 2}px`,
        paddingRight: `${gutter / 2}px`
      };
    }
  },

  data() {
    return {
      gutter: 0
    };
  },

  methods: {
    createClasses (obj, str = '') {
      if (!obj) {return []}
      let array = []
      if (obj.span) { array.push(`col-${str}${obj.span}`) }
      if (obj.offset) { array.push(`offset-${str}${obj.offset}`) }
      return array
    }
  },




};

</script>

<style lang="scss" scoped>
.col {
  width: 100%;
  padding: 0 10px;

  @for $i from 1 through 24 {   // 默认phone样式
    &.col-#{$i} {
      width: ($i / 24) * 100%;
    }
  }

  @for $i from 1 through 24 {
    &.offset-#{$i} {
      margin-left: ($i / 24) * 100%;
    }
  }

  .col-inner {
    outline: 1px solid red;
    background: yellow;
    height: 50px;
  }

 
  @media (min-width: 577px) {     //ipad,就近兼容原则,当没有传时默认显示 phone样式
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  @media (min-width: 769px) {
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  @media (min-width: 993px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }


}
</style>
