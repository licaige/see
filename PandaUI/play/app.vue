<template>
  <!-- Button -->
  <div class="button-container">
    <h4>基本按钮</h4>
    <div class="button-type">
      <pd-button type="default">default</pd-button>
      <pd-button type="primary">primary</pd-button>
      <pd-button type="success">success</pd-button>
      <pd-button type="info">info</pd-button>
      <pd-button type="warning">warning</pd-button>
      <pd-button type="danger">danger</pd-button>
      <pd-button type="text">text</pd-button>
    </div>
    <h4>朴素</h4>
    <div class="button-type">
      <pd-button type="default" plain>default</pd-button>
      <pd-button type="primary" plain>primary</pd-button>
      <pd-button type="success" plain>success</pd-button>
      <pd-button type="info" plain>info</pd-button>
      <pd-button type="warning" plain>warning</pd-button>
      <pd-button type="danger" plain>danger</pd-button>
    </div>
    <h4>圆角按钮</h4>
    <div class="button-round">
      <pd-button type="default" round>default</pd-button>
      <pd-button type="primary" round>primary</pd-button>
      <pd-button type="success" round>success</pd-button>
      <pd-button type="info" round>info</pd-button>
      <pd-button type="warning" round>warning</pd-button>
      <pd-button type="danger" round>danger</pd-button>
    </div>
    <h4>按钮禁用</h4>
    <div class="button-disabled">
      <pd-button type="primary" @click="test">primary</pd-button>
      <pd-button type="primary" disabled @click="test">disabled</pd-button>
    </div>
    <h4>按钮尺寸</h4>
    <div class="button-size">
      <pd-button size="midium">midium</pd-button>
      <pd-button size="small">small</pd-button>
      <pd-button size="mini">mini</pd-button>
    </div>
    <h4>图标按钮</h4>
    <div class="button-icon">
      <pd-button type="primary" icon="sousuo"></pd-button>
      <pd-button type="primary" icon="shanchu"></pd-button>
      <pd-button type="primary" icon="shezhi"></pd-button>
      <pd-button type="primary" icon="denglu">Login</pd-button>
    </div>
    <h4>按钮加载</h4>
    <div class="button-loading">
      <pd-button type="primary" loading @click="test">Loading</pd-button>
    </div>
  </div>
  <!-- Icon -->
  <div class="icon-container">
    <div class="icon-show">
      <h4>图标展示</h4>
      <pd-icon name="diannao"></pd-icon>
      <pd-icon name="cunchu"></pd-icon>
      <pd-icon name="fasong"></pd-icon>
      <pd-icon name="bianji"></pd-icon>
      <pd-icon name="fujian"></pd-icon>
      <pd-icon name="gaojing"></pd-icon>
      <pd-icon name="luxian"></pd-icon>
      <pd-icon name="jisuan"></pd-icon>
      <pd-icon name="gouwu"></pd-icon>
      <pd-icon name="kejian"></pd-icon>
      <pd-icon name="bukejian"></pd-icon>
      <pd-icon name="mima"></pd-icon>
      <pd-icon name="dingwei"></pd-icon>
      <pd-icon name="suyuan"></pd-icon>
      <pd-icon name="shijian"></pd-icon>
      <pd-icon name="shanchu"></pd-icon>
      <pd-icon name="shipin"></pd-icon>
      <pd-icon name="tupian"></pd-icon>
      <pd-icon name="shousuo"></pd-icon>
      <pd-icon name="sousuo"></pd-icon>
      <pd-icon name="shouji"></pd-icon>
      <pd-icon name="denglu"></pd-icon>
      <pd-icon name="neirong"></pd-icon>
      <pd-icon name="shuaxin"></pd-icon>
      <pd-icon name="yingyong"></pd-icon>
      <pd-icon name="zhanghao"></pd-icon>
      <pd-icon name="yemian"></pd-icon>
      <pd-icon name="shaixuan"></pd-icon>
      <pd-icon name="wendang"></pd-icon>
      <pd-icon name="zhankai"></pd-icon>
      <pd-icon name="qingchu"></pd-icon>
      <pd-icon name="peizhi"></pd-icon>
      <pd-icon name="shezhi"></pd-icon>
      <pd-icon name="xiaoxi"></pd-icon>
      <pd-icon name="wancheng"></pd-icon>
      <pd-icon name="zhifu"></pd-icon>
    </div>
    <div class="icon-dot">
      <h4>图标徽章提示</h4>
      <pd-icon name="gouwu" dot></pd-icon>
      <pd-icon name="gouwu" dot badge="1"></pd-icon>
      <pd-icon name="gouwu" dot badge="1000"></pd-icon>
    </div>
    <div class="icon-color">
      <h4>图标颜色改变</h4>
      <pd-icon name="fasong" color="red"></pd-icon>
      <pd-icon name="fasong" color="yellow"></pd-icon>
      <pd-icon name="fasong" color="green"></pd-icon>
    </div>
  </div>
  <!-- Input -->
  <div class="input-container">
    <h4>基础文本框</h4>
    <pd-input placeholder="请输入内容"></pd-input>
    <h4>禁用状态</h4>
    <pd-input disabled placeholder="禁止输入内容"></pd-input>
    <h4>数据双向绑定</h4>
    <pd-input v-model="testData"></pd-input>
    <span class="testData">{{ testData }}</span>
    <h4>输入框尺寸</h4>
    <pd-input placeholder="默认尺寸"></pd-input>
    <pd-input size="small" placeholder="小型尺寸"></pd-input>
    <pd-input size="mini" placeholder="微型尺寸"></pd-input>
    <h4>清除文本框内容</h4>
    <pd-input v-model="testData" clearable></pd-input>
    <h4>密码框密码显示切换</h4>
    <pd-input v-model="testData" showPassword></pd-input>
    <h4>带Icon图标的输入框</h4>
    <pd-input prefixIcon="zhanghao" v-model="testData"></pd-input>
    <pd-input suffixIcon="mima"></pd-input>
    <h4>文本域输入框</h4>
    <pd-input textarea v-model="testData"></pd-input>
    <pd-input textarea v-model="testData" resize></pd-input>
  </div>
  <!-- WaterMark -->
  <h4>水印背景</h4>
  <div class="watermark-container">
    <div style="width: 400px; height: 400px; background: black">
      <pd-watermark isShowTime markName="测试水印"></pd-watermark>
    </div>
  </div>
  <!-- Switch -->
  <div class="switch-container">
    <div class="basic-switch">
      <h4>Switch基本开关</h4>
      <pd-switch v-model="status"></pd-switch>
    </div>
    <div class="text-desc">
      <h4>文字描述</h4>
      <pd-switch
        v-model="status"
        @change="test"
        active-text="今天周五"
        inactive-text="快乐上班"
      ></pd-switch>
    </div>
    <div class="switch-disabled">
      <h4>禁用状态</h4>
      <pd-switch v-model="status" disabled></pd-switch>
    </div>
  </div>
  <!-- Collapse -->
  <div class="collapse-container">
    <h4>Collapse折叠面板</h4>
    <pd-collapse width="400px" @change="curPanel"> 
      <pd-collapse-item
        title="这是标题"
        headColor="orange"
        :isCollapse="true"
        name="1"
      >
        这是内容...
      </pd-collapse-item>
      <pd-collapse-item name="2">
        你说得对，但是这就是奎桑提，HP 4700，护甲 329，魔抗
        201的英雄。有不可阻挡，有护盾，还能过墙。有控制，甚至冷却时间只有1秒，只要15点蓝。转换姿态时甚至可以刷新W的cd，还有真实伤害。然后，护甲和魔抗提升后还能获得技能加速，缩短Q的cd，还缩短释放时间，然后还有攻击力。W就啊啊啊啊啊啊......
      </pd-collapse-item>
      <pd-collapse-item name="3">
        你说得对，但是这就是奎桑提，HP 4700，护甲 329，魔抗
        201的英雄。有不可阻挡，有护盾，还能过墙。有控制，甚至冷却时间只有1秒，只要15点蓝。转换姿态时甚至可以刷新W的cd，还有真实伤害。然后，护甲和魔抗提升后还能获得技能加速，缩短Q的cd，还缩短释放时间，然后还有攻击力。W就啊啊啊啊啊啊......
      </pd-collapse-item>
    </pd-collapse>
  </div>
  <!-- Select -->
  <div class="select-container">
    <h4>Select基本下拉框</h4>
    <pd-select :options="options" placeholder="请选择"></pd-select>
    <h4>下拉框禁用</h4>
    <pd-select :options="options" disabled></pd-select>
    <h4>选项禁用</h4>
    <pd-select :options="options2"></pd-select>
    <h4>数据字段自定义</h4>
    <pd-select :options="options3" fileLabel="name" fileValue="id"></pd-select>
    <h4>选择具体选项抛出选项数据</h4>
    <pd-select :options="options2" @change="curOption"></pd-select>
  </div>
</template>
<script setup lang="ts">
import {
  pdButton,
  pdIcon,
  pdInput,
  pdWatermark,
  pdSwitch,
  pdCollapse,
  pdCollapseItem,
  pdSelect,
} from "@PandaUI/components";
import { reactive, ref, Ref } from "vue";
// 测试方法
function test(): void {
  console.log("按钮已被触发");
}
const curOption = (e: Object) => {
  console.log(e);
};
const curPanel = (e: any) => {
  console.log(e);
}

// 测试数据
let testData: Ref<any> = ref("测试数据");
let status: Ref<any> = ref(true);
let state = reactive({
  options: [
    {
      label: "可乐",
      value: "cola",
    },
    {
      label: "火锅",
      value: "hotpot",
    },
    {
      label: "烧烤",
      value: "bbq",
    },
    {
      label: "奶茶",
      value: "milktea",
    },
  ],
  options2: [
    {
      label: "Vue",
      value: "vue",
    },
    {
      label: "TypeScript",
      value: "typescript",
    },
    {
      label: "React",
      value: "react",
      disabled: true,
    },
  ],
  options3: [
    {
      name: "PandaGuo",
      id: 1,
    },
    {
      name: "GGBond",
      id: 2,
      disabled: true,
    },
    {
      name: "Ikun",
      id: 3,
    },
  ],
});
const { options, options2, options3 } = state;
</script>

<style lang="less" scoped>
.button-container {
  .button-type,
  .button-disabled,
  .button-round,
  .button-size,
  .button-icon,
  .button-loading {
    display: flex;
    .pd-button {
      margin-left: 20px;
    }
  }
}
.icon-container {
  width: 550px;
  .icon-show {
    :deep(.pd-icon) {
      .icon {
        font-size: 45px;
        padding: 15px;
        margin: 0 1px 1px 0;
        outline: 1px solid #111111;
      }
    }
  }
  .icon-dot {
    :deep(.icon) {
      font-size: 40px;
      margin-left: 20px;
    }
  }
  .icon-color {
    :deep(.icon) {
      font-size: 40px;
      margin-left: 20px;
    }
  }
}
.input-container {
  .testData {
    margin-left: 20px;
  }
  .pd-input {
    margin-left: 20px;
  }
}
.switch-container {
  display: flex;
  flex-direction: column;
}
</style>
