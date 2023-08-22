const e = ["default", "primary", "success", "warning", "danger"], t = {
  type: {
    type: String,
    values: e,
    default: "default"
  },
  disabled: {
    type: Boolean,
    default: () => !1
  },
  icon: {
    type: String
  },
  loading: {
    type: Boolean,
    default: () => !1
  },
  round: {
    type: Boolean,
    default: !1
  },
  size: {
    type: String,
    default: "default"
  },
  plain: {
    type: Boolean,
    default: !1
  }
};
export {
  t as buttonProps,
  e as buttonTypes
};
