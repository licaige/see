"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("vue"),a=require("@tu-view-plus/hooks"),u=require("./slider-input.js"),i=require("../../input-number/index.js"),d=n.defineComponent({name:"TuSliderInput"}),t=n.defineComponent({...d,props:u.sliderInputProps,emits:u.sliderInputEmits,setup(m,{emit:o}){const r=a.useNamespace("slider");return(e,s)=>(n.openBlock(),n.createElementBlock("div",{class:n.normalizeClass(n.unref(r).e("input"))},[e.range?(n.openBlock(),n.createBlock(n.unref(i.TuInputNumber),{key:0,"hide-button":"",size:e.size,min:e.min,max:e.max,step:e.step,disabled:e.disabled,controls:!1,"model-value":e.modelValue[0],onChange:s[0]||(s[0]=l=>o("startChange",l))},null,8,["size","min","max","step","disabled","model-value"])):n.createCommentVNode("",!0),n.createVNode(n.unref(i.TuInputNumber),{"hide-button":"",size:e.size,min:e.min,max:e.max,step:e.step,disabled:e.disabled,controls:!1,"model-value":e.modelValue[1],onChange:s[1]||(s[1]=l=>o("endChange",l))},null,8,["size","min","max","step","disabled","model-value"])],2))}});exports.default=t;
