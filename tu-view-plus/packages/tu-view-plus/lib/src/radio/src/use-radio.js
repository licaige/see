"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("vue"),f=require("./constants.js"),g=require("@tu-view-plus/constants");require("../../form/index.js");const d=require("../../form/src/hooks/use-form-props.js"),y=(c,n)=>{const u=t.ref(),e=t.inject(f.radioGroupKey,void 0),o=t.computed(()=>!!e),s=t.computed({get(){return o.value?e.modelValue:c.modelValue},set(a){o.value?e.changeEvent(a):n&&n(g.UPDATE_MODEL_EVENT,a),u.value.checked=c.modelValue===c.label}}),i=d.useFormSize(t.computed(()=>e==null?void 0:e.size)),r=t.computed(()=>(e==null?void 0:e.type)||c.type),l=d.useFormDisabled(t.computed(()=>e==null?void 0:e.disabled)),m=t.ref(!1),v=t.computed(()=>l||o.value&&s.value!==c.label?-1:0);function b(){t.nextTick(()=>n&&n("change",s.value))}return{radioRef:u,radioGroup:e,isGroup:o,modelValue:s,radioSize:i,radioType:r,disabled:l,focus:m,tabIndex:v,handleChange:b}};exports.useRadio=y;
