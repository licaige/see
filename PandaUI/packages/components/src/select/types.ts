import { ExtractDefaultPropTypes } from "vue";
export interface Option {
  fileLabel: string;
  fileValue: any;
  disabled?: boolean;
}
export const selectProps = {
  options: {
    type: Array as () => Option[],
    default: () => [],
  },
  disabled: Boolean,
  fileLabel: {
    // 自定义 label 字段
    type: String,
    default: "label",
  },
  fileValue: {
    // 自定义 value 字段
    type: String,
    default: "value",
  },
  placeholder: String,
};

export type SelectProps = ExtractDefaultPropTypes<typeof selectProps>;
