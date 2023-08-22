import { defineComponent as s, computed as n, openBlock as m, createElementBlock as _, normalizeClass as b, unref as y, createElementVNode as k, renderSlot as C } from "vue";
import "../../theme/src/button.css";
import { buttonProps as h } from "./button.mjs";
const B = ["disabled"], $ = { class: "y-button__inner" }, z = s({ name: "YButton" }), N = /* @__PURE__ */ s({
  ...z,
  props: h,
  emits: ["click"],
  setup(r, { expose: l, emit: u }) {
    const t = r, c = n(() => {
      const { type: e, disabled: o, loading: i, round: a, size: p, plain: f } = t;
      return [
        "y-button",
        `y-button-${e}`,
        `y-button-${p}`,
        {
          "y-button-disabled": o || i,
          "y-button-plain": f,
          "y-button__round": a
        }
      ];
    });
    n(() => !t.type || t.type === "default" ? "" : "#ffffff");
    const d = () => {
      u("click");
    };
    return l({
      /** @description button type */
      type: t.type
    }), (e, o) => (m(), _("button", {
      class: b(y(c)),
      onClick: d,
      disabled: t.disabled
    }, [
      k("span", $, [
        C(e.$slots, "default")
      ])
    ], 10, B));
  }
});
export {
  N as default
};
