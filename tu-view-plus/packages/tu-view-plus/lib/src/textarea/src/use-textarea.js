"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const s=require("vue"),w=require("@tu-view-plus/constants");require("../../form/index.js");const f=require("@tu-view-plus/utils"),b=require("./utils.js"),I=require("lodash-unified"),L=require("../../form/src/hooks/use-form-item.js");function N(n,a,l){const h=s.ref(!1),g=s.ref(!1),r=s.ref(!1),v=s.shallowRef(n.textareaStyle),o=s.computed(()=>l.value),u=s.computed(()=>I.isNil(n.modelValue)?"":String(n.modelValue)),m=s.computed(()=>u.value.length),{formItem:c}=L.useFormItem(),y=async()=>{var e;await s.nextTick(),(e=o.value)==null||e.focus()},H=()=>{var e;return(e=o.value)==null?void 0:e.blur()},R=()=>{var e;return(e=o.value)==null?void 0:e.select()},S=()=>{a(w.UPDATE_MODEL_EVENT,""),a("change",""),a("clear"),a("input","")},q=e=>{h.value=!0,a("mouseenter",e)},C=e=>{h.value=!1,a("mouseleave",e)},O=e=>{a("compositionstart",e),r.value=!0},V=e=>{a("compositionupdate",e)},z=e=>{a("compositionend",e),r.value&&(r.value=!1,x(e))},x=async e=>{let{value:t}=e.target;if(n.formatter&&(t=n.parser?n.parser(t):t),!r.value){if(t===u.value){T();return}a(w.UPDATE_MODEL_EVENT,t),a("input",t),await s.nextTick(),T()}},M=e=>{g.value=!0,a("focus",e)},_=e=>{var t;g.value=!1,a("blur",e),n.validateEvent&&((t=c==null?void 0:c.validate)==null||t.call(c,"blur").catch(d=>f.debugWarn(d)))},k=e=>{a("change",e.target.value)},D=e=>{a("keydown",e)},T=()=>{const e=o.value,t=n.formatter?n.formatter(u.value):u.value;!e||e.value===t||(e.value=t)},E=()=>{const{autosize:e}=n;if(!(!f.isClient||!l.value))if(e){const t=f.isObject(e)?e.minRows:void 0,d=f.isObject(e)?e.maxRows:void 0,i=b.calcTextareaHeight(l.value,t,d);v.value={overflowY:"hidden",...i},s.nextTick(()=>{l.value.offsetHeight,v.value=i})}else v.value={minHeight:b.calcTextareaHeight(l.value).minHeight}},F=(e=>{let t=!1;return()=>{var i;if(t||!n.autosize)return;((i=l.value)==null?void 0:i.offsetParent)===null||(e(),t=!0)}})(E);return{textareaRef:o,isHovering:h,isFocused:g,textareaCalcStyle:v,textLength:m,nativeTextareaValue:u,focus:y,blur:H,select:R,clear:S,handleMouseEnter:q,handleMouseLeave:C,handleCompositionStart:O,handleCompositionUpdate:V,handleCompositionEnd:z,handleInput:x,handleFocus:M,handleBlur:_,handleChange:k,handleKeydown:D,setNativeTextareaValue:T,resizeTextarea:E,onceInitSizeTextarea:F}}exports.default=N;
