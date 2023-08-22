<template>
  <div class="page-field">
    <h3 class="comp-title">Field 输入框</h3>
    <div class="comp-wrap">
      <so-field
        label="用户名"
        v-model="info.username"
        placeholder="请输入用户名"
      ></so-field>
    </div>

    <h3 class="comp-title">自定义类型</h3>
    <div class="comp-wrap">
      <so-field
        label="文本"
        v-model="info.text"
        placeholder="请输入文本"
      ></so-field>

      <so-field
        label="数字"
        v-model.number="info.num"
        type="number"
        placeholder="请输入数字"
      ></so-field>

      <so-field
        label="密码"
        v-model="info.pwd"
        type="password"
        placeholder="请输入密码"
      ></so-field>
    </div>

    <h3 class="comp-title">禁用输入框</h3>
    <div class="comp-wrap">
      <so-field
        label="文本"
        model-value="输入框只读"
        readonly
        clickable
      ></so-field>
      
      <so-field label="文本" model-value="输入框已禁用" disabled></so-field>
    </div>

    <h3 class="comp-title">显示图标</h3>
    <div class="comp-wrap">
      <so-field
        label="文本"
        v-model="info.icon1"
        left-icon="wap-home"
        right-icon="star"
        placeholder="显示图标"
      ></so-field>

      <so-field
        label="文本"
        v-model="info.icon2"
        left-icon="fire"
        clearable
        placeholder="显示清除图标"
      ></so-field>
    </div>

    <h3 class="comp-title">错误信息</h3>
    <div class="comp-wrap">
      <so-field
        label="文本"
        v-model="info.err1"
        required
        placeholder="请输入文字"
        error-message="直接传入错误信息"
      ></so-field>

      <so-field
        label="手机号"
        required
        v-model="info.err2"
        placeholder="验证手机号"
        :rules="info.rules2"
      ></so-field>

      <so-field
        label="数字"
        required
        v-model="info.err3"
        placeholder="请输入 666"
        :rules="info.rules3"
      ></so-field>
    </div>

    <h3 class="comp-title">格式化输入</h3>
    <div class="comp-wrap">
      <so-field
        label="文本"
        v-model="info.format1"
        :formatter="formatter"
        placeholder="输入时格式化"
      ></so-field>

      <so-field
        label="文本"
        v-model="info.format2"
        :formatter="formatter"
        format-trigger="blur"
        placeholder="失去焦点时格式化"
      ></so-field>
    </div>

    <h3 class="comp-title">高度自适应</h3>
    <div class="comp-wrap">
      <so-field
        type="textarea"
        label="评论"
        v-model="info.textarea1"
        rows="1"
        :autosize="{ maxHeight: 200 }"
        placeholder="输入内容"
      ></so-field>

      <so-field
        type="textarea"
        label="反馈"
        v-model="info.textarea2"
        rows="2"
        maxlength="50"
        show-limit
        placeholder="显示最大限制字数"
      ></so-field>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { SoField } from 'packages/index.js';

const info = reactive({
  username: '',

  text: '',
  num: '',
  pwd: '',

  icon1: '',
  icon2: '',

  err1: '',
  err2: '',
  err3: '',
  rules2: [
    { required: true, message: '手机号不能为空', trigger: 'change' },
    { pattern: /^1[0-9]{10}$/, message: '手机号格式错误', trigger: 'change' }
  ],
  rules3: {
    validator: value => {
      return String(value) === '666';
    },
    message: '请输入 666 字面'
  },

  format1: '',
  format2: '',

  textarea1: '',
  textarea2: ''
});

// 过滤输入的数字
const formatter = value => value.replace(/\d/g, '');
</script>

<style lang="scss" scoped>
.page-field {
  .comp-wrap {
    padding-left: 0;
    padding-right: 0;
    background-color: #fff;
  }
}
</style>
