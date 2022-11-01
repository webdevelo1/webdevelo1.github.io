import{a,c as g,h as k,b as I,u as R,m as $,r as x,f as K,s as Q,D as j,k as A,K as O,J as P,M as T,N as M,O as v,P as b,V as _,T as h,U as q,W as C,w as U,ac as W,ad as F,ae as z,af as J,ag as G}from"./index.a25b1997.js";import{_ as H}from"./plugin-vue_export-helper.21dcd24c.js";const X={dark:{type:Boolean,default:null}};function Y(e,l){return a(()=>e.dark===null?l.dark.isActive:e.dark)}var S=g({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const n=a(()=>parseInt(e.lines,10)),u=a(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),r=a(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>k("div",{style:r.value,class:u.value},I(l.default))}}),w=g({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const n=a(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>k("div",{class:n.value},I(l.default))}}),Z=g({name:"QItem",props:{...X,...R,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:n}){const{proxy:{$q:u}}=A(),r=Y(e,u),{hasLink:i,linkAttrs:y,linkClass:s,linkTag:o,navigateOnClick:c}=$(),m=x(null),f=x(null),p=a(()=>e.clickable===!0||i.value===!0||e.tag==="label"),d=a(()=>e.disable!==!0&&p.value===!0),L=a(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(r.value===!0?" q-item--dark":"")+(i.value===!0&&e.active===null?s.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(d.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),V=a(()=>{if(e.insetLevel===void 0)return null;const t=u.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function N(t){d.value===!0&&(f.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===m.value?f.value.focus():document.activeElement===f.value&&m.value.focus()),c(t))}function D(t){if(d.value===!0&&K(t,13)===!0){Q(t),t.qKeyEvent=!0;const B=new MouseEvent("click",t);B.qKeyEvent=!0,m.value.dispatchEvent(B)}n("keyup",t)}function E(){const t=j(l.default,[]);return d.value===!0&&t.unshift(k("div",{class:"q-focus-helper",tabindex:-1,ref:f})),t}return()=>{const t={ref:m,class:L.value,style:V.value,role:"listitem",onClick:N,onKeyup:D};return d.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,y.value)):p.value===!0&&(t["aria-disabled"]="true"),k(o.value,t,E())}}});const ee=e=>(J("data-v-b5e76be8"),e=e(),G(),e),te={class:"container"},ae=["value"],le=ee(()=>C("span",{class:"checkmark"},null,-1)),ne={__name:"CountryCard",props:{modelValue:{type:[Array,Boolean]},value:{type:[Boolean,Object]},country:{type:Object},prompt:{type:String}},emits:["update:modelValue"],setup(e,{emit:l}){const n=e,u=O(),r=P(),i=a({get(){return n.modelValue},set(s){l("update:modelValue",s)}});function y(s){u.countryDetails=s,r.push("/details")}return(s,o)=>(T(),M(Z,{clickable:"",tag:"a",target:"_blank",href:s.link,class:z([_(u).routePath=="/mylist"?"trashClass":"checkboxClass"])},{default:v(()=>[b(w,{onClick:o[0]||(o[0]=c=>(y(e.country),_(u).searchTerm=""))},{default:v(()=>[b(S,null,{default:v(()=>[h(q(e.country.countryName),1)]),_:1}),b(S,{caption:""},{default:v(()=>[h(q(e.country.region),1)]),_:1})]),_:1}),b(w,null,{default:v(()=>[C("label",te,[h(q(e.prompt)+" ",1),U(C("input",{type:"checkbox","onUpdate:modelValue":o[1]||(o[1]=c=>W(i)?i.value=c:null),value:e.value,onChange:o[2]||(o[2]=c=>s.$emit("tickboxChanged"))},null,40,ae),[[F,_(i)]]),le])]),_:1})]),_:1},8,["href","class"]))}};var oe=H(ne,[["__scopeId","data-v-b5e76be8"]]);export{oe as C,Y as a,X as u};
