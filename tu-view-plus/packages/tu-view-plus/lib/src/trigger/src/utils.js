"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const c=require("@vue/shared"),u=()=>{const{body:h}=document,l=document.documentElement;let t;try{t=(window.top||window.self||window).document.body}catch{}return{height:Math.max(h.scrollHeight,h.offsetHeight,l.clientHeight,l.scrollHeight,l.offsetHeight,(t==null?void 0:t.scrollHeight)||0,(t==null?void 0:t.clientHeight)||0),width:Math.max(h.scrollWidth,h.offsetWidth,l.clientWidth,l.scrollWidth,l.offsetWidth,(t==null?void 0:t.scrollWidth)||0,(t==null?void 0:t.clientWidth)||0)}},g=()=>{const{height:h,width:l}=u();return{width:Math.min(l,window.innerWidth),height:Math.min(h,window.innerHeight)}},M=(h,l)=>{const t=h.getBoundingClientRect();return{top:t.top,bottom:t.bottom,left:t.left,right:t.right,scrollTop:t.top-l.top,scrollBottom:t.bottom-l.top,scrollLeft:t.left-l.left,scrollRight:t.right-l.left,width:h.offsetWidth??h.clientWidth,height:h.offsetHeight??h.clientHeight}},T=h=>{switch(h){case"top":case"tl":case"tr":return"top";case"bottom":case"bl":case"br":return"bottom";case"left":case"lt":case"lb":return"left";case"right":case"rt":case"rb":return"right";default:return"top"}},b=(h,l)=>{switch(l){case"top":switch(h){case"bottom":return"top";case"bl":return"tl";case"br":return"tr";default:return h}case"bottom":switch(h){case"top":return"bottom";case"tl":return"bl";case"tr":return"br";default:return h}case"left":switch(h){case"right":return"left";case"rt":return"lt";case"rb":return"lb";default:return h}case"right":switch(h){case"left":return"right";case"lt":return"rt";case"lb":return"rb";default:return h}default:return h}},W=(h,l,{containerRect:t,triggerRect:r,popupRect:s,offset:e,translate:n})=>{const d=T(h),f=g(),i={top:t.top+l.top,bottom:f.height-(t.top+l.top+s.height),left:t.left+l.left,right:f.width-(t.left+l.left+s.width)};let a=h;if(d==="top"&&i.top<0)if(r.top>s.height)l.top=-t.top;else{const o=w("bottom",r,s,{offset:e,translate:n});f.height-(t.top+o.top+s.height)>0&&(a=b(h,"bottom"),l.top=o.top)}if(d==="bottom"&&i.bottom<0)if(f.height-r.bottom>s.height)l.top=-t.top+(f.height-s.height);else{const o=w("top",r,s,{offset:e,translate:n});t.top+o.top>0&&(a=b(h,"top"),l.top=o.top)}if(d==="left"&&i.left<0)if(r.left>s.width)l.left=-t.left;else{const o=w("right",r,s,{offset:e,translate:n});f.width-(t.left+o.left+s.width)>0&&(a=b(h,"right"),l.left=o.left)}if(d==="right"&&i.right<0)if(f.width-r.right>s.width)l.left=-t.left+(f.width-s.width);else{const o=w("left",r,s,{offset:e,translate:n});t.left+o.left>0&&(a=b(h,"left"),l.left=o.left)}return(d==="top"||d==="bottom")&&(i.left<0?l.left=-t.left:i.right<0&&(l.left=-t.left+(f.width-s.width))),(d==="left"||d==="right")&&(i.top<0?l.top=-t.top:i.bottom<0&&(l.top=-t.top+(f.height-s.height))),{popupPosition:l,position:a}},w=(h,l,t,{offset:r=0,translate:s=[0,0]}={})=>{const e=(c.isArray(s)?s:s[h])??[0,0];switch(h){case"top":return{left:l.scrollLeft+Math.round(l.width/2)-Math.round(t.width/2)+e[0],top:l.scrollTop-t.height-r+e[1]};case"tl":return{left:l.scrollLeft+e[0],top:l.scrollTop-t.height-r+e[1]};case"tr":return{left:l.scrollRight-t.width+e[0],top:l.scrollTop-t.height-r+e[1]};case"bottom":return{left:l.scrollLeft+Math.round(l.width/2)-Math.round(t.width/2)+e[0],top:l.scrollBottom+r+e[1]};case"bl":return{left:l.scrollLeft+e[0],top:l.scrollBottom+r+e[1]};case"br":return{left:l.scrollRight-t.width+e[0],top:l.scrollBottom+r+e[1]};case"left":return{left:l.scrollLeft-t.width-r+e[0],top:l.scrollTop+Math.round(l.height/2)-Math.round(t.height/2)+e[1]};case"lt":return{left:l.scrollLeft-t.width-r+e[0],top:l.scrollTop+e[1]};case"lb":return{left:l.scrollLeft-t.width-r+e[0],top:l.scrollBottom-t.height+e[1]};case"right":return{left:l.scrollRight+r+e[0],top:l.scrollTop+Math.round(l.height/2)-Math.round(t.height/2)+e[1]};case"rt":return{left:l.scrollRight+r+e[0],top:l.scrollTop+e[1]};case"rb":return{left:l.scrollRight+r+e[0],top:l.scrollBottom-t.height+e[1]};default:return{left:0,top:0}}},H=h=>{let l="0";["top","bottom"].includes(h)?l="50%":["left","lt","lb","tr","br"].includes(h)&&(l="100%");let t="0";return["left","right"].includes(h)?t="50%":["top","tl","tr","lt","rt"].includes(h)&&(t="100%"),`${l} ${t}`},S=(h,l,t,r,{offset:s=0,translate:e=[0,0],customStyle:n={},autoFitPosition:d=!1}={})=>{let f=h,i=w(h,t,r,{offset:s,translate:e});if(d){const o=W(h,i,{containerRect:l,popupRect:r,triggerRect:t,offset:s,translate:e});i=o.popupPosition,f=o.position}return{style:{left:`${i.left}px`,top:`${i.top}px`,...n},position:f}},L=(h,l,t,{customStyle:r={}})=>{if(["top","tl","tr","bottom","bl","br"].includes(h)){let e=Math.abs(l.scrollLeft+l.width/2-t.scrollLeft);return e>t.width-8&&(l.width>t.width?e=t.width/2:e=t.width-8),["top","tl","tr"].includes(h)?{left:`${e}px`,bottom:"0",transform:"translate(-50%,50%) rotate(45deg)",...r}:{left:`${e}px`,top:"0",transform:"translate(-50%,-50%) rotate(45deg)",...r}}let s=Math.abs(l.scrollTop+l.height/2-t.scrollTop);return s>t.height-8&&(l.height>t.height?s=t.height/2:s=t.height-8),["left","lt","lb"].includes(h)?{top:`${s}px`,right:"0",transform:"translate(50%,-50%) rotate(45deg)",...r}:{top:`${s}px`,left:"0",transform:"translate(-50%,-50%) rotate(45deg)",...r}},m=h=>h.scrollHeight>h.offsetHeight||h.scrollWidth>h.offsetWidth,E=h=>{const l=[];let t=h;for(;t&&t!==document.documentElement;)m(t)&&l.push(t),t=t.parentElement??void 0;return l};exports.getArrowStyle=L;exports.getElementScrollRect=M;exports.getPopupStyle=S;exports.getScrollElements=E;exports.getTransformOrigin=H;exports.isScrollElement=m;
