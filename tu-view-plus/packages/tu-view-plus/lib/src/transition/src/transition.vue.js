"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),u=require("./transition.js"),a=require("@tu-view-plus/hooks");require("../style/transition.css");const c=e.defineComponent({name:"TuTransition",inheritAttrs:!0}),l=e.defineComponent({...c,props:u.transitionProps,setup(t){const n=t,r=a.useNamespace(""),o=e.useAttrs(),s=e.computed(()=>r.b()+n.name);return(i,p)=>(e.openBlock(),e.createBlock(e.Transition,e.mergeProps({name:e.unref(s)},e.unref(o)),{default:e.withCtx(()=>[e.renderSlot(i.$slots,"default")]),_:3},16,["name"]))}});exports.default=l;