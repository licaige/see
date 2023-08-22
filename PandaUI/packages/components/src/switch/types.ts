import { ExtractDefaultPropTypes } from "vue";

export const switchProps = {
  modelValue: {
    // 开关状态绑定值
    type: [Number, String, Boolean],
  },
  trueValue: {
    // 开关打开的值(可自定义)
    type: [Number, String, Boolean],
    default: true,
  },
  falseValue: {
    // 开关关闭的值(可自定义)
    type: [Number, String, Boolean],
    default: false,
  },
  activeColor: {
    // 开关打开时的背景颜色
    type: String,
    default: "#409EFF",
  },
  inactiveColor: {
    // 开关关闭时的背景颜色
    type: String,
    default: "#69696b",
  },
  disabled: {
    // 是否禁用开关
    type: Boolean,
    default: false,
  },
  width: {
    // 开关宽度
    type: Number,
    default: 35,
  },
  inactiveText: {
    // 关闭状态文字描述
    type: String,
  },
  activeText: {
    // 开启状态文字描述
    type: String,
  },
  textColor: {
    // 激活时文字描述颜色
    type: String,
    default: "#409eff",
  },
};

export type SwitchProps = ExtractDefaultPropTypes<typeof switchProps>;
