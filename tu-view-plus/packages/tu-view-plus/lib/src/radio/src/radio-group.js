"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("@tu-view-plus/utils"),t=require("@tu-view-plus/hooks"),o=require("./radio.js"),r=require("./constants.js"),i=e.buildProps({type:{type:String,values:r.radioTypes,default:""},id:{type:String,default:void 0},size:{...t.useSizeProp,default:"medium"},disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),a=o.radioEmits;exports.radioGroupEmits=a;exports.radioGroupProps=i;
