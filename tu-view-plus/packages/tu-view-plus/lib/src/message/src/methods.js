"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const u=require("vue"),t=require("@tu-view-plus/utils");require("../../config-provider/index.js");const h=require("./message.vue.js"),T=require("./message.js"),_=require("./constants.js"),r=require("./instance.js"),m=require("../../config-provider/src/config-provider.js");let b=1;const f=e=>{const s=!e||t.isString(e)||t.isVNode(e)||t.isFunction(e)?{message:e}:e,n={...T.messageDefaults,...s};if(!n.appendTo)n.appendTo=document.body;else if(t.isString(n.appendTo)){let o=document.querySelector(n.appendTo);t.isHTMLElement(o)||(t.debugWarn("TuMessage","the appendTo option is not an HTMLElement. Falling back to document.body."),o=document.body),n.appendTo=o}return n},q=e=>{const s=r.instances.indexOf(e);if(s===-1)return;r.instances.splice(s,1);const{handler:n}=e;n.close()},y=({appendTo:e,...s},n)=>{const o=`message_${b++}`,c=s.onClose,l=document.createElement("div"),i={...s,id:o,onClose:()=>{c==null||c(),q(g)},onDestroy:()=>{u.render(null,l)}},d=u.createVNode(h.default,i,t.isFunction(i.message)||t.isVNode(i.message)?{default:t.isFunction(i.message)?i.message:()=>i.message}:null);d.appContext=n||a._context,u.render(d,l),e.appendChild(l.firstElementChild);const p=d.component,g={id:o,vnode:d,vm:p,handler:{close:()=>{p.exposed.visible.value=!1}},props:d.component.props};return g},a=(e={},s)=>{if(!t.isClient)return{close:()=>{}};if(t.isNumber(m.messageConfig.max)&&r.instances.length>=m.messageConfig.max)return{close:()=>{}};const n=f(e);if(n.grouping&&r.instances.length){const c=r.instances.find(({vnode:l})=>{var i;return((i=l.props)==null?void 0:i.message)===n.message});if(c)return c.props.repeatNum+=1,c.props.type=n.type,c.handler}const o=y(n,s);return r.instances.push(o),o.handler};_.messageTypes.forEach(e=>{a[e]=(s={},n)=>{const o=f(s);return a({...o,type:e},n)}});function v(e){for(const s of r.instances)(!e||e===s.props.type)&&s.handler.close()}a.closeAll=v;a._context=null;exports.closeAll=v;exports.default=a;