"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),d=require("./badge.js"),r=require("@tu-view-plus/hooks"),l=require("@tu-view-plus/utils/types");require("../style/badge.css");const p=["textContent"],f=e.defineComponent({name:"TuBadge"}),y=e.defineComponent({...f,props:d.badgeProps,setup(u,{expose:i}){const t=u,o=e.useSlots(),s=r.useNamespace("badge"),c=e.computed(()=>({[s.b()]:!0,[s.is("single")]:!o.default&&!t.text,[s.is("status")]:!o.default&&t.text})),m=e.computed(()=>({[s.e("content")]:!0,[s.em("content",t.type)]:t.type,[s.is("fixed")]:o.default,[s.is("dot")]:t.isDot})),a=e.computed(()=>t.isDot?"":l.isNumber(t.value)&&l.isNumber(t.max)?t.max<t.value?`${t.max}+`:`${t.value}`:`${t.value}`);return i({content:a}),(n,g)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(c))},[e.renderSlot(n.$slots,"default"),n.color&&!n.$slots.default?(e.openBlock(),e.createElementBlock("span",{key:0,class:e.normalizeClass(e.unref(s).em("status","dot")),style:e.normalizeStyle({background:n.color})},null,6)):e.createCommentVNode("",!0),n.text?(e.openBlock(),e.createElementBlock("span",{key:1,class:e.normalizeClass(e.unref(s).em("status","text"))},e.toDisplayString(n.text),3)):e.createCommentVNode("",!0),e.createVNode(e.Transition,{name:`${e.unref(r.defaultNamespace)}-zoom-in-center`},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("sup",{textContent:e.toDisplayString(e.unref(a)),class:e.normalizeClass(e.unref(m)),style:e.normalizeStyle(n.numberStyle)},null,14,p),[[e.vShow,!n.hidden&&(e.unref(a)||n.isDot)]])]),_:1},8,["name"])],2))}});exports.default=y;