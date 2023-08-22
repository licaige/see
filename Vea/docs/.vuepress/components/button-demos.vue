<template>
  <div>
    <!-- 按钮组件 -->
    <e-button>按钮1</e-button>

    <e-button icon-type="settings">按钮2</e-button>

    <e-button icon-type="settings" icon-position="right">按钮3</e-button>

    <e-button icon-type="settings" :has-loading="false">按钮4</e-button>

    <!-- 按钮组   -->
    <e-button-group>
      <e-button icon-type="left">上一页</e-button>

      <e-button>更多</e-button>

      <e-button icon-type="right" icon-position="right">下一页</e-button>
    </e-button-group>

    <pre><code>{{content}}</code></pre>
  </div>
</template>


<script>
import Button from "../../../src/button";
import ButtonGroup from "../../../src/button-group";
import Icon from "../../../src/icon.vue";

export default {
  components: {
    "e-button": Button,
    "e-button-group": ButtonGroup,
    "e-icon": Icon
  },

  data() {
    return {
      content: `
        <e-button>按钮1</e-button>
        <e-button icon-type="settings">按钮2</e-button>
        <e-button icon-type="settings" icon-position="right">按钮3</e-button>
        <e-button icon-type="settings" :has-loading="false">按钮4</e-button>
      `
        .replace(/\t+| +/g, "")
        .trim()
    };
  }
};
</script> 