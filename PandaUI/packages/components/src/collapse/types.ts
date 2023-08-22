import { ExtractDefaultPropTypes } from "vue";
export const collapseProps = {
  width: {
    type: String,
    default: "100%",
  },
  // 是否使用手风琴效果
  accordion: {
    type: Boolean,
    default: false,
  },
  // 折叠面板标题
  title: {
    type: String,
    default: "This is a title",
  },
  // 标题背景颜色
  headerBgColor: {
    type: String,
    default: "#f7f7f5",
  },
  // 标记当前子项的索引
  name: String,
};

export type CollapseProps = ExtractDefaultPropTypes<typeof collapseProps>;
