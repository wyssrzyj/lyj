import{a as U}from"./data-42f2c9d0.js";import{d as K,r as f,x as X,y as I,a7 as Y,p as Z,q as ee,e as m,f as N,k as b,F as k,l as A,a9 as x,g9 as R,m as z,aa as L,Q as ne,ac as g,i as M,D as T,B,aN as te,a as E,M as ae,gE as ie,G as _e}from"./index-b9c76e4f.js";import{m as oe}from"./message-6a608e22.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function D(e,u,a,_){function o(p){return p instanceof a?p:new a(function(n){n(p)})}return new(a||(a=Promise))(function(p,n){function v(c){try{w(_.next(c))}catch(y){n(y)}}function d(c){try{w(_.throw(c))}catch(y){n(y)}}function w(c){c.done?p(c.value):o(c.value).then(v,d)}w((_=_.apply(e,u||[])).next())})}function ue(e,u,a){let _=document.createElement(e);return _.setAttribute("class",u),a&&(_.innerText=a),_}const j=function(e){let u=Array.isArray(e)?[]:{};if(e&&typeof e=="object")for(let a in e)e.hasOwnProperty(a)&&(e[a]&&typeof e[a]=="object"?u[a]=j(e[a]):u[a]=e[a]);return u};var C=K({name:"MouseMenu",props:{appendToBody:{type:Boolean,default:!0},menuWidth:{type:Number,default:200},menuList:{type:Array,required:!0},menuHiddenFn:{type:Function},hasIcon:{type:Boolean,default:!1},iconType:{type:String,default:"font-icon"},menuWrapperCss:Object,menuItemCss:Object,el:{type:Object,required:!0},params:{type:[String,Number,Array,Object]},useLongPressInMobile:Boolean,longPressDuration:Number,injectCloseListener:{type:Boolean,default:!0},customClass:String,disabled:{type:Function}},setup(e){const u=f(0),a=f(0),_=f(!1),o=f(0),p=f(0),n=f(!1),v=f(null),d=f([]),w=X(()=>e.menuList.some(i=>i.children&&i.children.length>0)),c=f(10),y=f();I(n,i=>D(this,void 0,void 0,function*(){var r,s;if(i){yield E();let l=y.value;e.menuWrapperCss&&Object.keys(e.menuWrapperCss).map(h=>{l.style.setProperty(`--menu-${h}`,e.menuWrapperCss&&e.menuWrapperCss[h])}),e.menuItemCss&&Object.keys(e.menuItemCss).map(h=>{l.style.setProperty(`--menu-item-${h}`,e.menuItemCss&&e.menuItemCss[h])});let t=(s=(r=e.menuItemCss)===null||r===void 0?void 0:r.arrowSize)===null||s===void 0?void 0:s.match(/\d+/);t?c.value=~~t[0]||10:c.value=10,l.style.setProperty("--menu-item-arrowRealSize",c.value/2+"px")}}));const q=(i,r)=>{i.disabled||(i.fn&&typeof i.fn=="function"&&i.fn(e.params,v.value,e.el,r),n.value=!1)},P=(i,r)=>{i.disabled||(i.fn&&typeof i.fn=="function"&&!i.disabled&&(i.fn(e.params,v.value,e.el,r),_.value=!1),n.value=!1)},G=(i,r)=>{if(r.children&&!r.disabled){_.value=!0;const s=i.currentTarget;if(!s)return;const{offsetWidth:l}=s,t=s.querySelector(".__menu__sub__wrapper");if(!t)return;const{offsetWidth:h,offsetHeight:S}=t,{innerWidth:Q,innerHeight:H}=window,{top:O,left:F}=s.getBoundingClientRect();F+l+h>Q-5?u.value=F-h+5:u.value=F+l,O+S>H-5?a.value=H-S:a.value=O+5}},$=(i,r,s,l)=>i.map(t=>(t.children&&(t.children=$(t.children,r,s,l)),t.label&&typeof t.label=="function"&&(t.label=t.label(l,r,s)),t.tips&&typeof t.tips=="function"&&(t.tips=t.tips(l,r,s)),t.icon&&typeof t.icon=="function"&&(t.icon=t.icon(l,r,s)),t.hidden&&typeof t.hidden=="function"&&(t.hidden=t.hidden(l,r,s)),t.disabled&&typeof t.disabled=="function"&&(t.disabled=t.disabled(l,r,s)),t)),V=(i=0,r=0)=>D(this,void 0,void 0,function*(){if(v.value=document.elementFromPoint(i-1,r-1),e.menuHiddenFn?n.value=!e.menuHiddenFn(e.params,v.value,e.el):n.value=!0,!n.value)return;d.value=j(e.menuList),d.value=$(d.value,v.value,e.el,e.params),yield E();const{innerWidth:s,innerHeight:l}=window,h=y.value.offsetHeight,S=e.menuWidth||200;p.value=i+S+1>s?s-S-5:i+1,o.value=r+h+1>l?l-h-5:r+1}),J=()=>{n.value=!1},W=i=>{y.value&&!y.value.contains(i.currentTarget)&&(n.value=!1,document.oncontextmenu=null)};return I(()=>e.injectCloseListener,i=>{i?document.addEventListener("mousedown",W):document.removeEventListener("mousedown",W)},{immediate:!0}),Y(()=>{document.removeEventListener("mousedown",W)}),{subLeft:u,subTop:a,hoverFlag:_,menuTop:o,menuLeft:p,showMenu:n,clickDomEl:v,calcMenuList:d,arrowSize:c,hasSubMenu:w,MenuWrapper:y,handleMenuItemClick:q,handleSubMenuItemClick:P,handleMenuMouseEnter:G,show:V,close:J}}});Z("data-v-3d21bc0a");const de=["onMousedown","onMouseenter"],re={key:0,class:"__menu__item-icon"},se=["innerHTML"],le={class:"__menu__item-label"},me={class:"__menu__item-tips"},ce={class:"__menu__item-arrow-after"},be=["onMousedown"],ve={class:"__menu__sub__item-label"},pe={class:"__menu__sub__item-tips"};ee();function he(e,u,a,_,o,p){return m(),N(te,{to:"body",disabled:!e.appendToBody},[e.showMenu?(m(),b("div",{key:0,ref:"MenuWrapper",class:x(["__menu__wrapper",e.customClass]),style:B({width:`${e.menuWidth}px`,top:`${e.menuTop}px`,left:`${e.menuLeft}px`})},[(m(!0),b(k,null,A(e.calcMenuList,(n,v)=>(m(),b(k,null,[!n.hidden&&!n.line?(m(),b("div",{key:v,class:x(["__menu__item",n.disabled&&"disabled",n.customClass]),onMousedown:R(d=>e.handleMenuItemClick(n,d),["stop"]),onMouseenter:d=>e.handleMenuMouseEnter(d,n)},[e.hasIcon?(m(),b("div",re,[e.iconType==="font-icon"?z((m(),b("i",{key:0,class:x(n.icon)},null,2)),[[L,n.icon]]):e.iconType==="svg-icon"?z((m(),b("div",{key:1,class:"__menu__item-icon-svg",innerHTML:n.icon},null,8,se)),[[L,n.icon]]):e.iconType==="vnode-icon"?(m(),N(ne(n.icon),{key:2})):g("v-if",!0)])):g("v-if",!0),M("span",le,T(n.label),1),M("span",me,T(n.tips||""),1),e.hasSubMenu?(m(),b("span",{key:1,class:x(["__menu__item-arrow",{show:e.hasSubMenu&&n.children}]),style:B({width:e.arrowSize+"px",height:e.arrowSize+"px"})},[z(M("span",ce,null,512),[[L,e.hasSubMenu&&n.children]])],6)):g("v-if",!0),n.children&&n.children.length>0?z((m(),b("div",{key:2,class:"__menu__sub__wrapper",style:B({top:`${e.subTop}px`,left:`${e.subLeft}px`})},[(m(!0),b(k,null,A(n.children,(d,w)=>(m(),b(k,null,[!d.hidden&&!d.line?(m(),b("div",{key:w,class:x(["__menu__sub__item",d.disabled&&"disabled",d.customClass]),onMousedown:R(c=>e.handleSubMenuItemClick(d,c),["stop"])},[M("span",ve,T(d.label),1),M("span",pe,T(d.tips||""),1)],42,be)):g("v-if",!0),d.line?(m(),b("div",{key:w,class:"__menu__line"})):g("v-if",!0)],64))),256))],4)),[[L,e.hoverFlag]]):g("v-if",!0)],42,de)):g("v-if",!0),!n.hidden&&n.line?(m(),b("div",{key:v,class:"__menu__line"})):g("v-if",!0)],64))),256))],6)):g("v-if",!0)],8,["disabled"])}function fe(e,u){u===void 0&&(u={});var a=u.insertAt;if(!(!e||typeof document>"u")){var _=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",a==="top"&&_.firstChild?_.insertBefore(o,_.firstChild):_.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var we=`.__menu__mask[data-v-3d21bc0a] {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
}
.__menu__wrapper[data-v-3d21bc0a] {
  --menu-background: #c8f2f0;
  --menu-boxShadow: 0 1px 5px #888;
  --menu-padding: 5px 0;
  --menu-borderRadius: 0;
  --menu-item-height: 30px;
  --menu-item-padding: 0 10px;
  --menu-item-iconSize: 20px;
  --menu-item-iconFontSize: 14px;
  --menu-item-iconColor: #484852;
  --menu-item-labelColor: #484852;
  --menu-item-labelFontSize: 14px;
  --menu-item-tipsColor: #889;
  --menu-item-tipsFontSize: 12px;
  --menu-item-arrowColor: #484852;
  --menu-item-disabledColor: #bcc;
  --menu-item-hoverBackground: rgba(255, 255, 255, 0.8);
  --menu-item-hoverIconColor: inherit;
  --menu-item-hoverLabelColor: inherit;
  --menu-item-hoverTipsColor: inherit;
  --menu-item-hoverArrowColor: inherit;
  --menu-lineColor: #ccc;
  --menu-lineMargin: 5px 0;
}
.__menu__wrapper[data-v-3d21bc0a] {
  position: fixed;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
  z-index: 99999;
}
.__menu__line[data-v-3d21bc0a],
.__menu__sub__line[data-v-3d21bc0a] {
  border-top: 1px solid var(--menu-lineColor);
  margin: var(--menu-lineMargin);
}
.__menu__item[data-v-3d21bc0a],
.__menu__sub__item[data-v-3d21bc0a] {
  display: flex;
  height: var(--menu-item-height);
  align-items: center;
  cursor: pointer;
  padding: var(--menu-item-padding);
}
.__menu__item .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--menu-item-iconColor);
  width: var(--menu-item-iconSize);
  height: var(--menu-item-iconSize);
}
.__menu__item .__menu__item-icon i[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon i[data-v-3d21bc0a] {
  font-size: var(--menu-item-iconFontSize);
}
.__menu__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.__menu__item .__menu__item-label[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-label[data-v-3d21bc0a] {
  width: 100%;
  max-height: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  font-size: var(--menu-item-labelFontSize);
  color: var(--menu-item-labelColor);
  margin-right: 5px;
  overflow: hidden;
}
.__menu__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-tips[data-v-3d21bc0a] {
  font-size: var(--menu-item-tipsFontSize);
  color: var(--menu-item-tipsColor);
}
.__menu__item .__menu__item-arrow[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-arrow[data-v-3d21bc0a] {
  width: 10px;
  height: 10px;
  margin-left: 5px;
  position: relative;
}
.__menu__item.disabled[data-v-3d21bc0a],
.__menu__sub__item.disabled[data-v-3d21bc0a] {
  cursor: not-allowed;
}
.__menu__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-disabledColor);
}
.__menu__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a] {
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-disabledColor);
}
.__menu__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__item:not(.disabled):hover .__menu__item-icon[data-v-3d21bc0a] {
  color: var(--menu-item-hoverIconColor);
}
.__menu__item:not(.disabled):hover .__menu__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__item:not(.disabled):hover .__menu__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item:not(.disabled):hover .__menu__item-arrow[data-v-3d21bc0a] {
  color: var(--menu-item-hoverArrowColor);
}
.__menu__sub__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item-icon[data-v-3d21bc0a] {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  margin-right: 4px;
}
.__menu__item-arrow.show .__menu__item-arrow-after[data-v-3d21bc0a] {
  position: absolute;
  width: 0;
  height: 0;
  left: 8px;
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-arrowColor);
  border-top: var(--menu-item-arrowRealSize) solid transparent;
  border-bottom: var(--menu-item-arrowRealSize) solid transparent;
}
.__menu__sub__wrapper[data-v-3d21bc0a] {
  position: fixed;
  visibility: hidden;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
}
.__menu__item:hover .__menu__sub__wrapper[data-v-3d21bc0a] {
  visibility: visible;
}`;fe(we);C.render=he;C.__scopeId="data-v-3d21bc0a";C.__file="packages/mouse-menu/mouse-menu.vue";C.install=e=>{e.component(C.name,C)};function ye(e){var u;const a="__mouse__menu__container";let _;document.querySelector(`.${a}`)?_=document.querySelector(`.${a}`):_=ue("div",a);const o=ae(C,e);return ie(o,_),document.body.appendChild(_),(u=o.component)===null||u===void 0?void 0:u.proxy}function xe(){const e=f(_e(U,!0)),u=[{label:"ID",prop:"id"},{label:"日期",prop:"date"},{label:"姓名",prop:"name"}],a={menuList:[{label:({id:o})=>`ID为：${o}`,disabled:!0},{label:"编辑",tips:"Edit",fn:o=>oe(`您编辑了第 ${e.value.findIndex(p=>p.id===o.id)+1} 行，数据为：${JSON.stringify(o)}`,{type:"success"})}]};function _(o,p,n){n.preventDefault();const{x:v,y:d}=n;ye({el:n.currentTarget,params:o,menuWrapperCss:{background:"var(--el-bg-color)"},menuItemCss:{labelColor:"var(--el-text-color)",hoverLabelColor:"var(--el-color-primary)",hoverTipsColor:"var(--el-color-primary)"},...a}).show(v,d)}return{columns:u,dataList:e,showMouseMenu:_}}export{xe as useColumns};
