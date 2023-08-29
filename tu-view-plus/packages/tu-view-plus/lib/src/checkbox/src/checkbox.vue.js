"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),f=require("./checkbox.js"),g=require("@tu-view-plus/hooks"),x=require("./use-checkbox.js");require("../style/checkbox.css");const z=["aria-controls"],E=["tabindex","role","aria-checked"],S=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],V=["id","aria-hidden","disabled","value","name","tabindex"],N=e.defineComponent({name:"TuCheckbox"}),$=e.defineComponent({...N,props:f.checkboxProps,emits:f.checkboxEmits,setup(k,{emit:p}){const u=k,{checkboxGroup:d,inputId:m,model:s,checkboxDisabled:i,checkboxSize:c,checkboxType:b,isChecked:v,isFocused:t,handleChange:r,addToStore:C}=x.useCheckbox(u,p),a=g.useNamespace("checkbox"),h=e.computed(()=>({[a.b()]:!0,[a.m(c.value)]:c.value,[a.m(b.value)]:b.value,[a.is("disabled")]:i.value,[a.is("checked")]:v.value})),y=e.computed(()=>({[a.e("input")]:!0,[a.is("disabled")]:i.value,[a.is("checked")]:v.value,[a.is("indeterminate")]:u.indeterminate,[a.is("focus")]:t.value})),B=e.computed(()=>{var n;return{color:((n=d==null?void 0:d.textColor)==null?void 0:n.value)||""}});return u.checked&&C(),(n,l)=>(e.openBlock(),e.createElementBlock("label",{class:e.normalizeClass(e.unref(h)),"aria-controls":n.controls},[e.createElementVNode("span",{class:e.normalizeClass(e.unref(y)),tabindex:n.indeterminate?0:void 0,role:n.indeterminate?"checkbox":void 0,"aria-checked":n.indeterminate?"mixed":void 0},[n.trueLabel||n.falseLabel?e.withDirectives((e.openBlock(),e.createElementBlock("input",{key:0,id:e.unref(m),"onUpdate:modelValue":l[0]||(l[0]=o=>e.isRef(s)?s.value=o:null),class:e.normalizeClass(e.unref(a).e("original")),type:"checkbox","aria-hidden":!!n.indeterminate,name:n.name,tabindex:n.tabindex,disabled:e.unref(i),"true-value":n.trueLabel,"false-value":n.falseLabel,onChange:l[1]||(l[1]=(...o)=>e.unref(r)&&e.unref(r)(...o)),onFocus:l[2]||(l[2]=o=>t.value=!0),onBlur:l[3]||(l[3]=o=>t.value=!1)},null,42,S)),[[e.vModelCheckbox,e.unref(s)]]):e.withDirectives((e.openBlock(),e.createElementBlock("input",{key:1,id:e.unref(m),"onUpdate:modelValue":l[4]||(l[4]=o=>e.isRef(s)?s.value=o:null),class:e.normalizeClass(e.unref(a).e("original")),type:"checkbox","aria-hidden":!!n.indeterminate,disabled:e.unref(i),value:n.label,name:n.name,tabindex:n.tabindex,onChange:l[5]||(l[5]=(...o)=>e.unref(r)&&e.unref(r)(...o)),onFocus:l[6]||(l[6]=o=>t.value=!0),onBlur:l[7]||(l[7]=o=>t.value=!1)},null,42,V)),[[e.vModelCheckbox,e.unref(s)]]),e.createElementVNode("span",{class:e.normalizeClass(e.unref(a).e("inner"))},null,2)],10,E),e.createElementVNode("span",{class:e.normalizeClass(e.unref(a).e("label")),style:e.normalizeStyle(e.unref(B)),onKeydown:l[8]||(l[8]=e.withModifiers(()=>{},["stop"]))},[e.renderSlot(n.$slots,"default"),n.$slots.default?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createTextVNode(e.toDisplayString(n.label),1)],64))],38)],10,z))}});exports.default=$;