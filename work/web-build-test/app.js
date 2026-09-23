(()=>{var T1=Object.defineProperty;var M1=(t,e)=>{for(var n in e)T1(t,n,{get:e[n],enumerable:!0})};var t0={};M1(t0,{BaseTransition:()=>Cg,BaseTransitionPropsValidators:()=>xd,Comment:()=>Tn,DeprecationTypes:()=>gR,EffectScope:()=>Xo,ErrorCodes:()=>dw,ErrorTypeStrings:()=>cR,Fragment:()=>ei,KeepAlive:()=>jw,ReactiveEffect:()=>Mr,Static:()=>Cr,Suspense:()=>WA,Teleport:()=>Rw,Text:()=>ro,TrackOpTypes:()=>Yv,Transition:()=>ER,TransitionGroup:()=>$R,TriggerOpTypes:()=>Kv,VueElement:()=>Dd,assertNumber:()=>hw,callWithAsyncErrorHandling:()=>Vi,callWithErrorHandling:()=>na,camelize:()=>qt,capitalize:()=>ds,cloneVNode:()=>tr,compatUtils:()=>mR,computed:()=>ra,createApp:()=>qc,createBlock:()=>fd,createCommentVNode:()=>rx,createElementBlock:()=>JA,createElementVNode:()=>Hg,createHydrationRenderer:()=>Bg,createPropsRestProxy:()=>vA,createRenderer:()=>Vg,createSSRApp:()=>rS,createSlots:()=>sA,createStaticVNode:()=>eR,createTextVNode:()=>zg,createVNode:()=>mn,customRef:()=>Jh,defineAsyncComponent:()=>Kw,defineComponent:()=>Sd,defineCustomElement:()=>$x,defineEmits:()=>cA,defineExpose:()=>uA,defineModel:()=>fA,defineOptions:()=>hA,defineProps:()=>lA,defineSSRCustomElement:()=>kR,defineSlots:()=>dA,devtools:()=>uR,effect:()=>Iv,effectScope:()=>Tv,getCurrentInstance:()=>gi,getCurrentScope:()=>ag,getCurrentWatcher:()=>Jv,getTransitionRawChildren:()=>Bc,guardReactiveProps:()=>sx,h:()=>Wg,handleError:()=>ia,hasInjectionContext:()=>xw,hydrate:()=>rC,hydrateOnIdle:()=>Gw,hydrateOnInteraction:()=>qw,hydrateOnMediaQuery:()=>$w,hydrateOnVisible:()=>Xw,initCustomFormatter:()=>px,initDirectivesForSSR:()=>oC,inject:()=>Cc,isMemoSame:()=>mx,isProxy:()=>$o,isReactive:()=>Yi,isReadonly:()=>Ri,isRef:()=>vn,isRuntimeOnly:()=>ux,isShallow:()=>Wn,isVNode:()=>Ir,markRaw:()=>Yh,mergeDefaults:()=>_A,mergeModels:()=>yA,mergeProps:()=>ox,nextTick:()=>sa,nodeOps:()=>Vx,normalizeClass:()=>Go,normalizeProps:()=>gv,normalizeStyle:()=>zo,onActivated:()=>AE,onBeforeMount:()=>NE,onBeforeUnmount:()=>ja,onBeforeUpdate:()=>Td,onDeactivated:()=>RE,onErrorCaptured:()=>DE,onMounted:()=>ao,onRenderTracked:()=>OE,onRenderTriggered:()=>PE,onScopeDispose:()=>Mv,onServerPrefetch:()=>IE,onUnmounted:()=>Za,onUpdated:()=>Hc,onWatcherCleanup:()=>hg,openBlock:()=>Lc,patchProp:()=>Xx,popScopeId:()=>yw,provide:()=>yE,proxyRefs:()=>Tc,pushScopeId:()=>_w,queuePostFlushCb:()=>Ja,reactive:()=>ms,readonly:()=>Sc,ref:()=>on,registerRuntimeCompiler:()=>Gg,render:()=>sS,renderList:()=>iA,renderSlot:()=>rA,resolveComponent:()=>eA,resolveDirective:()=>nA,resolveDynamicComponent:()=>tA,resolveFilter:()=>pR,resolveTransitionHooks:()=>Qo,setBlockTracking:()=>Uc,setDevtoolsHook:()=>hR,setTransitionHooks:()=>er,shallowReactive:()=>$h,shallowReadonly:()=>kv,shallowRef:()=>Kh,ssrContextKey:()=>vE,ssrUtils:()=>fR,stop:()=>Pv,toDisplayString:()=>qm,toHandlerKey:()=>br,toHandlers:()=>oA,toRaw:()=>wt,toRef:()=>Xv,toRefs:()=>Wv,toValue:()=>Gv,transformVNodeArgs:()=>ZA,triggerRef:()=>zv,unref:()=>qo,useAttrs:()=>gA,useCssModule:()=>GR,useCssVars:()=>MR,useHost:()=>qx,useId:()=>Nw,useModel:()=>RA,useSSRContext:()=>EE,useShadowRoot:()=>zR,useSlots:()=>mA,useTemplateRef:()=>Iw,useTransitionState:()=>Ed,vModelCheckbox:()=>Qg,vModelDynamic:()=>Qx,vModelRadio:()=>e0,vModelSelect:()=>jx,vModelText:()=>Ud,vShow:()=>Gx,version:()=>gx,warn:()=>Rd,watch:()=>jo,watchEffect:()=>Sw,watchPostEffect:()=>bw,watchSyncEffect:()=>xE,withAsyncContext:()=>EA,withCtx:()=>Rg,withDefaults:()=>pA,withDirectives:()=>Ew,withKeys:()=>sC,withMemo:()=>lR,withModifiers:()=>nC,withScopeId:()=>vw});function si(t){let e=Object.create(null);for(let n of t.split(","))e[n]=1;return n=>n in e}var bt={},Qr=[],Sn=()=>{},eo=()=>!1,Ys=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ua=t=>t.startsWith("onUpdate:"),yt=Object.assign,fc=(t,e)=>{let n=t.indexOf(e);n>-1&&t.splice(n,1)},w1=Object.prototype.hasOwnProperty,$t=(t,e)=>w1.call(t,e),Ve=Array.isArray,Sr=t=>Fa(t)==="[object Map]",hs=t=>Fa(t)==="[object Set]",ov=t=>Fa(t)==="[object Date]",hv=t=>Fa(t)==="[object RegExp]",ut=t=>typeof t=="function",ft=t=>typeof t=="string",Dn=t=>typeof t=="symbol",Lt=t=>t!==null&&typeof t=="object",Oh=t=>(Lt(t)||ut(t))&&ut(t.then)&&ut(t.catch),dv=Object.prototype.toString,Fa=t=>dv.call(t),Hm=t=>Fa(t).slice(8,-1),Va=t=>Fa(t)==="[object Object]",pc=t=>ft(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Rs=si(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zm=si("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Dh=t=>{let e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},A1=/-\w/g,qt=Dh(t=>t.replace(A1,e=>e.slice(1).toUpperCase())),R1=/\B([A-Z])/g,pi=Dh(t=>t.replace(R1,"-$1").toLowerCase()),ds=Dh(t=>t.charAt(0).toUpperCase()+t.slice(1)),br=Dh(t=>t?`on${ds(t)}`:""),Ln=(t,e)=>!Object.is(t,e),to=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Lh=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Ba=t=>{let e=parseFloat(t);return isNaN(e)?t:e},ka=t=>{let e=ft(t)?Number(t):NaN;return isNaN(e)?t:e},av,mc=()=>av||(av=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fv(t,e){return t+JSON.stringify(e,(n,i)=>typeof i=="function"?i.toString():i)}var C1="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",pv=si(C1);var lv=2;function mv(t,e=0,n=t.length){if(e=Math.max(0,Math.min(e,t.length)),n=Math.max(0,Math.min(n,t.length)),e>n)return"";let i=t.split(/(\r?\n)/),s=i.filter((a,l)=>l%2===1);i=i.filter((a,l)=>l%2===0);let r=0,o=[];for(let a=0;a<i.length;a++)if(r+=i[a].length+(s[a]&&s[a].length||0),r>=e){for(let l=a-lv;l<=a+lv||n>r;l++){if(l<0||l>=i.length)continue;let c=l+1;o.push(`${c}${" ".repeat(Math.max(3-String(c).length,0))}|  ${i[l]}`);let u=i[l].length,h=s[l]&&s[l].length||0;if(l===a){let d=e-(r-(u+h)),f=Math.max(1,n>r?u-d:n-e);o.push("   |  "+" ".repeat(d)+"^".repeat(f))}else if(l>a){if(n>r){let d=Math.max(Math.min(n-r,u),1);o.push("   |  "+"^".repeat(d))}r+=u+h}}break}return o.join(`
`)}function zo(t){if(Ve(t)){let e={};for(let n=0;n<t.length;n++){let i=t[n],s=ft(i)?Gm(i):zo(i);if(s)for(let r in s)e[r]=s[r]}return e}else if(ft(t)||Lt(t))return t}var N1=/;(?![^(]*\))/g,I1=/:([^]+)/,P1=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Gm(t){let e={};return t.replace(P1,n=>n.startsWith("/*")?"":n).split(N1).forEach(n=>{if(n){let i=n.split(I1);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Go(t){let e="";if(ft(t))e=t;else if(Ve(t))for(let n=0;n<t.length;n++){let i=Go(t[n]);i&&(e+=i+" ")}else if(Lt(t))for(let n in t)t[n]&&(e+=n+" ");return e.trim()}function gv(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ft(e)&&(t.class=Go(e)),n&&(t.style=zo(n)),t}var O1="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",D1="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",L1="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",U1="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",Wm=si(O1),Xm=si(D1),$m=si(L1),_v=si(U1),yv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vv=si(yv),F1=si(yv+",async,autofocus,autoplay,controls,default,defer,disabled,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");function Uh(t){return!!t||t===""}function V1(t,e,n){if(t.length!==e.length)return!1;let i=!0;for(let s=0;i&&s<t.length;s++)i=Li(t[s],e[s],n);return i}function cv(t,e,n){if(t.size!==e.size)return!1;let i=Array.from(e),s=new Uint8Array(i.length);for(let r of t){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Li(r,i[a],n)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function B1(t,e,n){let i=Sr(t),s=Sr(e);if(i||s||(i=hs(t),s=hs(e),i||s))return i&&s?cv(t,e,n):!1;let r=Object.keys(t).length,o=Object.keys(e).length;if(r!==o)return!1;for(let a in t){let l=t.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!Li(t[a],e[a],n))return!1}return String(t)===String(e)}function uv(t,e,n,i){n||(n=[new Map,new Map]);let[s,r]=n;if(s.has(t)||r.has(e))return s.get(t)===e&&r.get(e)===t;s.set(t,e),r.set(e,t);let o=i(t,e,n);return s.delete(t),r.delete(e),o}function Li(t,e,n){if(t===e)return!0;let i=ov(t),s=ov(e);return i||s?i&&s?t.getTime()===e.getTime():!1:(i=Dn(t),s=Dn(e),i||s?t===e:(i=Ve(t),s=Ve(e),i||s?i&&s?uv(t,e,n,V1):!1:(i=Lt(t),s=Lt(e),i||s?!i||!s?!1:uv(t,e,n,B1):String(t)===String(e))))}function gc(t,e){return t.findIndex(n=>Li(n,e))}var Ev=t=>!!(t&&t.__v_isRef===!0),qm=t=>ft(t)?t:t==null?"":Ve(t)||Lt(t)&&(t.toString===dv||!ut(t.toString))?Ev(t)?qm(t.value):JSON.stringify(t,xv,2):String(t),xv=(t,e)=>Ev(e)?xv(t,e.value):Sr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[km(i,r)+" =>"]=s,n),{})}:hs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>km(n))}:Dn(e)?km(e):Lt(e)&&!Ve(e)&&!Va(e)?String(e):e,km=(t,e="")=>{var n;return Dn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};function Ym(t){return t==null?"initial":typeof t=="string"?t===""?" ":t:(typeof t!="number"||Number.isFinite(t),String(t))}function k1(t,...e){console.warn(`[Vue warn] ${t}`,...e)}var Gn,Xo=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Gn&&(Gn.active?(this.parent=Gn,this.index=(Gn.scopes||(Gn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){let i=this.scopes.slice();for(e=0,n=i.length;e<n;e++)i[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){let s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}let i=this.effects.slice();for(e=0,n=i.length;e<n;e++)i[e].resume()}}run(e){if(this._active){let n=Gn;try{return Gn=this,e()}finally{Gn=n}}}on(){++this._on===1&&(this.prevScope=Gn,Gn=this)}off(){if(this._on>0&&--this._on===0){if(Gn===this)Gn=this.prevScope;else{let e=Gn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){let s=this.scopes.slice();for(n=0,i=s.length;n<i;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}};function Tv(t){return new Xo(t)}function ag(){return Gn}function Mv(t,e=!1){Gn&&Gn.cleanups.push(t)}var hn;var Km=new WeakSet,Mr=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Gn&&(Gn.active?Gn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Km.has(this)&&(Km.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Av(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sv(this),Rv(this);let e=hn,n=Cs;hn=this,Cs=!0;try{return this.fn()}finally{Cv(this),hn=e,Cs=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ug(e);this.deps=this.depsTail=void 0,Sv(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Km.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Zm(this)&&this.run()}get dirty(){return Zm(this)}},wv=0,yc,vc;function Av(t,e=!1){if(t.flags|=8,e){t.next=vc,vc=t;return}t.next=yc,yc=t}function lg(){wv++}function cg(){if(--wv>0)return;if(vc){let e=vc;for(vc=void 0;e;){let n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;yc;){let e=yc;for(yc=void 0;e;){let n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Rv(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Cv(t){let e,n=t.depsTail,i=n;for(;i;){let s=i.prevDep;i.version===-1?(i===n&&(n=s),ug(i),H1(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Zm(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Nv(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Nv(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ec)||(t.globalVersion=Ec,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Zm(t))))return;t.flags|=2;let e=t.dep,n=hn,i=Cs;hn=t,Cs=!0;try{Rv(t);let s=t.fn(t._value);(e.version===0||Ln(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{hn=n,Cs=i,Cv(t),t.flags&=-3}}function ug(t,e=!1){let{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)ug(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function H1(t){let{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}function Iv(t,e){t.effect instanceof Mr&&(t=t.effect.fn);let n=new Mr(t);e&&yt(n,e);try{n.run()}catch(s){throw n.stop(),s}let i=n.run.bind(n);return i.effect=n,i}function Pv(t){t.effect.stop()}var Cs=!0,Ov=[];function fs(){Ov.push(Cs),Cs=!1}function ps(){let t=Ov.pop();Cs=t===void 0?!0:t}function Sv(t){let{cleanup:e}=t;if(t.cleanup=void 0,e){let n=hn;hn=void 0;try{e()}finally{hn=n}}}var Ec=0,Qm=class{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},za=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!hn||!Cs||hn===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==hn)n=this.activeLink=new Qm(hn,this),hn.deps?(n.prevDep=hn.depsTail,hn.depsTail.nextDep=n,hn.depsTail=n):hn.deps=hn.depsTail=n,Dv(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){let i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=hn.depsTail,n.nextDep=void 0,hn.depsTail.nextDep=n,hn.depsTail=n,hn.deps===n&&(hn.deps=i)}return n}trigger(e){this.version++,Ec++,this.notify(e)}notify(e){lg();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{cg()}}};function Dv(t){if(t.dep.sc++,t.sub.flags&4){let e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Dv(i)}let n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}var kh=new WeakMap,Wo=Symbol(""),eg=Symbol(""),xc=Symbol("");function ri(t,e,n){if(Cs&&hn){let i=kh.get(t);i||kh.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new za),s.map=i,s.key=n),s.track()}}function Js(t,e,n,i,s,r){let o=kh.get(t);if(!o){Ec++;return}let a=l=>{l&&l.trigger()};if(lg(),e==="clear")o.forEach(a);else{let l=Ve(t),c=l&&pc(n);if(l&&n==="length"){let u=Number(i);o.forEach((h,d)=>{(d==="length"||d===xc||!Dn(d)&&d>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(xc)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Wo)),Sr(t)&&a(o.get(eg)));break;case"delete":l||(a(o.get(Wo)),Sr(t)&&a(o.get(eg)));break;case"set":Sr(t)&&a(o.get(Wo));break}}cg()}function z1(t,e){let n=kh.get(t);return n&&n.get(e)}function Ha(t){let e=wt(t);return e===t||(ri(e,"iterate",xc),Wn(t))?e:Ri(t)?Yi(t)?e.map(n=>wr(Ki(n))):e.map(wr):e.map(Ki)}function bc(t){return ri(t=wt(t),"iterate",xc),t}function Ks(t,e){return Ri(t)?wr(Yi(t)?Ki(e):e):Ki(e)}var G1={__proto__:null,[Symbol.iterator](){return Jm(this,Symbol.iterator,t=>Ks(this,t))},concat(...t){return Ha(this).concat(...t.map(e=>Ve(e)?Ha(e):e))},entries(){return Jm(this,"entries",t=>(t[1]=Ks(this,t[1]),t))},every(t,e){return Tr(this,"every",t,e,void 0,arguments)},filter(t,e){return Tr(this,"filter",t,e,n=>n.map(i=>Ks(this,i)),arguments)},find(t,e){return Tr(this,"find",t,e,n=>Ks(this,n),arguments)},findIndex(t,e){return Tr(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Tr(this,"findLast",t,e,n=>Ks(this,n),arguments)},findLastIndex(t,e){return Tr(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Tr(this,"forEach",t,e,void 0,arguments)},includes(...t){return jm(this,"includes",t)},indexOf(...t){return jm(this,"indexOf",t)},join(t){return Ha(this).join(t)},lastIndexOf(...t){return jm(this,"lastIndexOf",t)},map(t,e){return Tr(this,"map",t,e,void 0,arguments)},pop(){return _c(this,"pop")},push(...t){return _c(this,"push",t)},reduce(t,...e){return bv(this,"reduce",t,e)},reduceRight(t,...e){return bv(this,"reduceRight",t,e)},shift(){return _c(this,"shift")},some(t,e){return Tr(this,"some",t,e,void 0,arguments)},splice(...t){return _c(this,"splice",t)},toReversed(){return Ha(this).toReversed()},toSorted(t){return Ha(this).toSorted(t)},toSpliced(...t){return Ha(this).toSpliced(...t)},unshift(...t){return _c(this,"unshift",t)},values(){return Jm(this,"values",t=>Ks(this,t))}};function Jm(t,e,n){let i=bc(t),s=i[e]();return i!==t&&!Wn(t)&&(s._next=s.next,s.next=()=>{let r=s._next();return r.done||(r.value=n(r.value)),r}),s}var W1=Array.prototype;function Tr(t,e,n,i,s,r){let o=bc(t),a=o!==t&&!Wn(t),l=o[e];if(l!==W1[e]){let h=l.apply(t,r);return a?Ki(h):h}let c=n;o!==t&&(a?c=function(h,d){return n.call(this,Ks(t,h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));let u=l.call(o,c,i);return a&&s?s(u):u}function bv(t,e,n,i){let s=bc(t),r=s!==t&&!Wn(t),o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=Ks(t,c)),n.call(this,c,Ks(t,u),h,t)}):n.length>3&&(o=function(c,u,h){return n.call(this,c,u,h,t)}));let l=s[e](o,...i);return a?Ks(t,l):l}function jm(t,e,n){let i=wt(t);ri(i,"iterate",xc);let s=i[e](...n);return(s===-1||s===!1)&&$o(n[0])?(n[0]=wt(n[0]),i[e](...n)):s}function _c(t,e,n=[]){fs(),lg();let i=wt(t)[e].apply(t,n);return cg(),ps(),i}var X1=si("__proto__,__v_isRef,__isVue"),Lv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dn));function $1(t){Dn(t)||(t=String(t));let e=wt(this);return ri(e,"has",t),e.hasOwnProperty(t)}var Hh=class{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;let s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?Bv:Vv:r?Fv:Uv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;let o=Ve(e);if(!s){let l;if(o&&(l=G1[n]))return l;if(n==="hasOwnProperty")return $1}let a=Reflect.get(e,n,vn(e)?e:i);if((Dn(n)?Lv.has(n):X1(n))||(s||ri(e,"get",n),r))return a;if(vn(a)){let l=o&&pc(n)?a:a.value;return s&&Lt(l)?Sc(l):l}return Lt(a)?s?Sc(a):ms(a):a}},zh=class extends Hh{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n],o=Ve(e)&&pc(n);if(!this._isShallow){let c=Ri(r);if(!Wn(i)&&!Ri(i)&&(r=wt(r),i=wt(i)),!o&&vn(r)&&!vn(i))return c||(r.value=i),!0}let a=o?Number(n)<e.length:$t(e,n),l=Reflect.set(e,n,i,vn(e)?e:s);return e===wt(s)&&l&&(a?Ln(i,r)&&Js(e,"set",n,i,r):Js(e,"add",n,i)),l}deleteProperty(e,n){let i=$t(e,n),s=e[n],r=Reflect.deleteProperty(e,n);return r&&i&&Js(e,"delete",n,void 0,s),r}has(e,n){let i=Reflect.has(e,n);return(!Dn(n)||!Lv.has(n))&&ri(e,"has",n),i}ownKeys(e){return ri(e,"iterate",Ve(e)?"length":Wo),Reflect.ownKeys(e)}},Gh=class extends Hh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}},q1=new zh,Y1=new Gh,K1=new zh(!0),J1=new Gh(!0),tg=t=>t,Fh=t=>Reflect.getPrototypeOf(t);function j1(t,e,n){return function(...i){let s=this.__v_raw,r=wt(s),o=Sr(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?tg:e?wr:Ki;return!e&&ri(r,"iterate",l?eg:Wo),yt(Object.create(c),{next(){let{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}}})}}function Vh(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Z1(t,e){let n={get(s){let r=this.__v_raw,o=wt(r),a=wt(s);t||(Ln(s,a)&&ri(o,"get",s),ri(o,"get",a));let{has:l}=Fh(o),c=e?tg:t?wr:Ki;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){let s=this.__v_raw;return!t&&ri(wt(s),"iterate",Wo),s.size},has(s){let r=this.__v_raw,o=wt(r),a=wt(s);return t||(Ln(s,a)&&ri(o,"has",s),ri(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){let o=this,a=o.__v_raw,l=wt(a),c=e?tg:t?wr:Ki;return!t&&ri(l,"iterate",Wo),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return yt(n,t?{add:Vh("add"),set:Vh("set"),delete:Vh("delete"),clear:Vh("clear")}:{add(s){let r=wt(this),o=Fh(r),a=wt(s),l=!e&&!Wn(s)&&!Ri(s)?a:s;return o.has.call(r,l)||Ln(s,l)&&o.has.call(r,s)||Ln(a,l)&&o.has.call(r,a)||(r.add(l),Js(r,"add",l,l)),this},set(s,r){!e&&!Wn(r)&&!Ri(r)&&(r=wt(r));let o=wt(this),{has:a,get:l}=Fh(o),c=a.call(o,s);c||(s=wt(s),c=a.call(o,s));let u=l.call(o,s);return o.set(s,r),c?Ln(r,u)&&Js(o,"set",s,r,u):Js(o,"add",s,r),this},delete(s){let r=wt(this),{has:o,get:a}=Fh(r),l=o.call(r,s);l||(s=wt(s),l=o.call(r,s));let c=a?a.call(r,s):void 0,u=r.delete(s);return l&&Js(r,"delete",s,void 0,c),u},clear(){let s=wt(this),r=s.size!==0,o=void 0,a=s.clear();return r&&Js(s,"clear",void 0,void 0,o),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=j1(s,t,e)}),n}function Xh(t,e){let n=Z1(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get($t(n,s)&&s in i?n:i,s,r)}var Q1={get:Xh(!1,!1)},ew={get:Xh(!1,!0)},tw={get:Xh(!0,!1)},nw={get:Xh(!0,!0)};var Uv=new WeakMap,Fv=new WeakMap,Vv=new WeakMap,Bv=new WeakMap;function iw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ms(t){return Ri(t)?t:qh(t,!1,q1,Q1,Uv)}function $h(t){return qh(t,!1,K1,ew,Fv)}function Sc(t){return qh(t,!0,Y1,tw,Vv)}function kv(t){return qh(t,!0,J1,nw,Bv)}function qh(t,e,n,i,s){if(!Lt(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;let r=s.get(t);if(r)return r;let o=iw(Hm(t));if(o===0)return t;let a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Yi(t){return Ri(t)?Yi(t.__v_raw):!!(t&&t.__v_isReactive)}function Ri(t){return!!(t&&t.__v_isReadonly)}function Wn(t){return!!(t&&t.__v_isShallow)}function $o(t){return t?!!t.__v_raw:!1}function wt(t){let e=t&&t.__v_raw;return e?wt(e):t}function Yh(t){return!$t(t,"__v_skip")&&Object.isExtensible(t)&&Lh(t,"__v_skip",!0),t}var Ki=t=>Lt(t)?ms(t):t,wr=t=>Lt(t)?Sc(t):t;function vn(t){return t?t.__v_isRef===!0:!1}function on(t){return Hv(t,!1)}function Kh(t){return Hv(t,!0)}function Hv(t,e){return vn(t)?t:new ng(t,e)}var ng=class{constructor(e,n){this.dep=new za,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:wt(e),this._value=n?e:Ki(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){let n=this._rawValue,i=this.__v_isShallow||Wn(e)||Ri(e);e=i?e:wt(e),Ln(e,n)&&(this._rawValue=e,this._value=i?e:Ki(e),this.dep.trigger())}};function zv(t){t.dep&&t.dep.trigger()}function qo(t){return vn(t)?t.value:t}function Gv(t){return ut(t)?t():qo(t)}var sw={get:(t,e,n)=>e==="__v_raw"?t:qo(Reflect.get(t,e,n)),set:(t,e,n,i)=>{let s=t[e];return vn(s)&&!vn(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Tc(t){return Yi(t)?t:new Proxy(t,sw)}var ig=class{constructor(e){this.__v_isRef=!0,this._value=void 0;let n=this.dep=new za,{get:i,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}};function Jh(t){return new ig(t)}function Wv(t){let e=Ve(t)?new Array(t.length):{};for(let n in t)e[n]=$v(t,n);return e}var sg=class{constructor(e,n,i){this._object=e,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=Dn(n)?n:String(n),this._raw=wt(e);let s=!0,r=e;if(!Ve(e)||Dn(this._key)||!pc(this._key))do s=!$o(r)||Wn(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=qo(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&vn(this._raw[this._key])){let n=this._object[this._key];if(vn(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return z1(this._raw,this._key)}},rg=class{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}};function Xv(t,e,n){return vn(t)?t:ut(t)?new rg(t):Lt(t)&&arguments.length>1?$v(t,e,n):on(t)}function $v(t,e,n){return new sg(t,e,n)}var og=class{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new za(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ec-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&hn!==this)return Av(this,!0),!0}get value(){let e=this.dep.track();return Nv(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function qv(t,e,n=!1){let i,s;return ut(t)?i=t:(i=t.get,s=t.set),new og(i,s,n)}var Yv={GET:"get",HAS:"has",ITERATE:"iterate"},Kv={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};var Bh={},Wh=new WeakMap,no;function Jv(){return no}function hg(t,e=!1,n=no){if(n){let i=Wh.get(n);i||Wh.set(n,i=[]),i.push(t)}}function jv(t,e,n=bt){let{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=S=>{(n.onWarn||k1)("Invalid watch source: ",S,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=S=>s?S:Wn(S)||s===!1||s===0?js(S,1):js(S),h,d,f,p,_=!1,g=!1;if(vn(t)?(d=()=>t.value,_=Wn(t)):Yi(t)?(d=()=>u(t),_=!0):Ve(t)?(g=!0,_=t.some(S=>Yi(S)||Wn(S)),d=()=>t.map(S=>{if(vn(S))return S.value;if(Yi(S))return u(S);if(ut(S))return l?l(S,2):S()})):ut(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){fs();try{f()}finally{ps()}}let S=no;no=h;try{return l?l(t,3,[p]):t(p)}finally{no=S}}:d=Sn,e&&s){let S=d,T=s===!0?1/0:s;d=()=>js(S(),T)}let m=ag(),x=()=>{h.stop(),m&&m.active&&fc(m.effects,h)};if(r&&e){let S=e;e=(...T)=>{let R=S(...T);return x(),R}}let E=g?new Array(t.length).fill(Bh):Bh,y=S=>{if(!(!(h.flags&1)||!h.dirty&&!S))if(e){let T=h.run();if(S||s||_||(g?T.some((R,v)=>Ln(R,E[v])):Ln(T,E))){f&&f();let R=no;no=h;try{let v=[T,E===Bh?void 0:g&&E[0]===Bh?[]:E,p];E=T,l?l(e,3,v):e(...v)}finally{no=R}}}else h.run()};return a&&a(y),h=new Mr(d),h.scheduler=o?()=>o(y,!1):y,p=S=>hg(S,!1,h),f=h.onStop=()=>{let S=Wh.get(h);if(S){if(l)l(S,4);else for(let T of S)T();Wh.delete(h)}},e?i?y(!0):E=h.run():o?o(y.bind(null,!0),!0):h.run(),x.pause=h.pause.bind(h),x.resume=h.resume.bind(h),x.stop=x,x}function js(t,e=1/0,n){if(e<=0||!Lt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,vn(t))js(t.value,e,n);else if(Ve(t))for(let i=0;i<t.length;i++)js(t[i],e,n);else if(hs(t)||Sr(t))t.forEach(i=>{js(i,e,n)});else if(Va(t)){for(let i in t)js(t[i],e,n);for(let i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&js(t[i],e,n)}return t}var Jo=[];function rw(t){Jo.push(t)}function ow(){Jo.pop()}var dg=!1;function Zv(t,...e){if(dg)return;dg=!0,fs();let n=Jo.length?Jo[Jo.length-1].component:null,i=n&&n.appContext.config.warnHandler,s=aw();if(i)na(i,n,11,[t+e.map(r=>{var o,a;return(a=(o=r.toString)==null?void 0:o.call(r))!=null?a:JSON.stringify(r)}).join(""),n&&n.proxy,s.map(({vnode:r})=>`at <${fx(n,r.type)}>`).join(`
`),s]);else{let r=[`[Vue warn]: ${t}`,...e];s.length&&r.push(`
`,...lw(s)),console.warn(...r)}ps(),dg=!1}function aw(){let t=Jo[Jo.length-1];if(!t)return[];let e=[];for(;t;){let n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});let i=t.component&&t.component.parent;t=i&&i.vnode}return e}function lw(t){let e=[];return t.forEach((n,i)=>{e.push(...i===0?[]:[`
`],...cw(n))}),e}function cw({vnode:t,recurseCount:e}){let n=e>0?`... (${e} recursive calls)`:"",i=t.component?t.component.parent==null:!1,s=` at <${fx(t.component,t.type,i)}`,r=">"+n;return t.props?[s,...uw(t.props),r]:[s+r]}function uw(t){let e=[],n=Object.keys(t);return n.slice(0,3).forEach(i=>{e.push(...fE(i,t[i]))}),n.length>3&&e.push(" ..."),e}function fE(t,e,n){return ft(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:vn(e)?(e=fE(t,wt(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):ut(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=wt(e),n?e:[`${t}=`,e])}function hw(t,e){}var dw={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER",COMPONENT_UPDATE:15,15:"COMPONENT_UPDATE",APP_UNMOUNT_CLEANUP:16,16:"APP_UNMOUNT_CLEANUP"},fw={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush",15:"component update",16:"app unmount cleanup function"};function na(t,e,n,i){try{return i?t(...i):t()}catch(s){ia(s,e,n)}}function Vi(t,e,n,i){if(ut(t)){let s=na(t,e,n,i);return s&&Oh(s)&&s.catch(r=>{ia(r,e,n)}),s}if(Ve(t)){let s=[];for(let r=0;r<t.length;r++)s.push(Vi(t[r],e,n,i));return s}}function ia(t,e,n,i=!0){let s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||bt;if(e){let a=e.parent,l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){let u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(r){fs(),na(r,null,10,[t,l,c]),ps();return}}pw(t,n,s,i,o)}function pw(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}var Ni=[],Zs=-1,qa=[],so=null,Wa=0,pE=Promise.resolve(),rd=null;function sa(t){let e=rd||pE;return t?e.then(this?t.bind(this):t):e}function mw(t){let e=Zs+1,n=Ni.length;for(;e<n;){let i=e+n>>>1,s=Ni[i],r=Ic(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Ag(t){if(!(t.flags&1)){let e=Ic(t),n=Ni[Ni.length-1];!n||!(t.flags&2)&&e>=Ic(n)?Ni.push(t):Ni.splice(mw(e),0,t),t.flags|=1,mE()}}function mE(){rd||(rd=pE.then(gE))}function Ja(t){if(!Ve(t))so&&t.id===-1?so.splice(Wa+1,0,t):t.flags&1||(qa.push(t),t.flags|=1);else for(let e=0;e<t.length;e++)qa.push(t[e]);mE()}function Qv(t,e,n=Zs+1){for(;n<Ni.length;n++){let i=Ni[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Ni.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function od(t){if(qa.length){let e=[...new Set(qa)].sort((n,i)=>Ic(n)-Ic(i));if(qa.length=0,so){for(let n=0;n<e.length;n++)so.push(e[n]);return}for(so=e,Wa=0;Wa<so.length;Wa++){let n=so[Wa];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}so=null,Wa=0}}var Ic=t=>t.id==null?t.flags&2?-1:1/0:t.id;function gE(t){let e=Sn;try{for(Zs=0;Zs<Ni.length;Zs++){let n=Ni[Zs];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),na(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Zs<Ni.length;Zs++){let n=Ni[Zs];n&&(n.flags&=-2)}Zs=-1,Ni.length=0,od(t),rd=null,(Ni.length||qa.length)&&gE(t)}}var gw=!1;var Xa,jh=[],eE=!1;function _E(t,e){var n,i;Xa=t,Xa?(Xa.enabled=!0,jh.forEach(({event:s,args:r})=>Xa.emit(s,...r)),jh=[]):typeof window<"u"&&window.HTMLElement&&!((i=(n=window.navigator)==null?void 0:n.userAgent)!=null&&i.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{_E(r,e)}),setTimeout(()=>{Xa||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,eE=!0,jh=[])},3e3)):(eE=!0,jh=[])}var ai=null,yd=null;function Pc(t){let e=ai;return ai=t,yd=t&&t.type.__scopeId||null,e}function _w(t){yd=t}function yw(){yd=null}var vw=t=>Rg;function Rg(t,e=ai,n){if(!e||t._n)return t;let i=(...s)=>{i._d&&Uc(-1);let r=Pc(e),o=Nr.length,a;try{a=t(...s)}finally{for(let l=Nr.length;l>o;l--)Ad();Pc(r),i._d&&Uc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ew(t,e){if(ai===null)return t;let n=zc(ai),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=bt]=e[s];r&&(ut(r)&&(r={mounted:r,updated:r}),r.deep&&js(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Qs(t,e,n,i){let s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){let a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(fs(),Vi(l,n,8,[t.el,a,t,e]),ps())}}function yE(t,e){if(oi){let n=oi.provides,i=oi.parent&&oi.parent.provides;i===n&&(n=oi.provides=Object.create(i)),n[t]=e}}function Cc(t,e,n=!1){let i=gi();if(i||Zo){let s=Zo?Zo._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ut(e)?e.call(i&&i.proxy):e}}function xw(){return!!(gi()||Zo)}var vE=Symbol.for("v-scx"),EE=()=>{{let t=Cc(vE);return t}};function Sw(t,e){return Vc(t,null,e)}function bw(t,e){return Vc(t,null,{flush:"post"})}function xE(t,e){return Vc(t,null,{flush:"sync"})}function jo(t,e,n){return Vc(t,e,n)}function Vc(t,e,n=bt){let{immediate:i,deep:s,flush:r,once:o}=n,a=yt({},n),l=e&&i||!e&&r!=="post",c;if(ta){if(r==="sync"){let f=EE();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){let f=()=>{};return f.stop=Sn,f.resume=Sn,f.pause=Sn,f}}let u=oi;a.call=(f,p,_)=>Vi(f,u,p,_);let h=!1;r==="post"?a.scheduler=f=>{Un(f,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(f,p)=>{p?f():Ag(f)}),a.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};let d=jv(t,e,a);return ta&&(c?c.push(d):l&&d()),d}function Tw(t,e,n){let i=this.proxy,s=ft(t)?t.includes(".")?SE(i,t):()=>i[t]:t.bind(i,i),r;ut(e)?r=e:(r=e.handler,n=e);let o=Qa(this),a=Vc(s,r.bind(i),n);return o(),a}function SE(t,e){let n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}var io=new WeakMap,bE=Symbol("_vte"),vd=t=>t.__isTeleport,Ko=t=>t&&(t.disabled||t.disabled===""),Mw=t=>t&&(t.defer||t.defer===""),tE=t=>typeof SVGElement<"u"&&t instanceof SVGElement,nE=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,_g=(t,e)=>{let n=t&&t.to;return ft(n)?e?e(n):null:n},ww={name:"Teleport",__isTeleport:!0,process(t,e,n,i,s,r,o,a,l,c){let{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:_,createComment:g,parentNode:m}}=c,x=Ko(e.props),{dynamicChildren:E}=e,y=(R,v,M)=>{R.shapeFlag&16&&u(R.children,v,M,s,r,o,a,l)},S=(R=e)=>{let v=Ko(R.props),M=R.target=_g(R.props,p),w=yg(M,R,_,f);M&&(o!=="svg"&&tE(M)?o="svg":o!=="mathml"&&nE(M)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(M),v||(y(R,M,w),wc(R,!1)))},T=R=>{let v=()=>{if(io.get(R)===v){if(io.delete(R),Ko(R.props)){let M=m(R.el)||n;y(R,M,R.anchor),wc(R,!0)}S(R)}};io.set(R,v),Un(v,r)};if(t==null){let R=e.el=_(""),v=e.anchor=_("");if(f(R,n,i),f(v,n,i),Mw(e.props)||r&&r.pendingBranch){T(e);return}x&&(y(e,n,v),wc(e,!0)),S()}else{e.el=t.el;let R=e.anchor=t.anchor,v=io.get(t);if(v){v.flags|=8,io.delete(t),T(e);return}e.targetStart=t.targetStart;let M=e.target=t.target,w=e.targetAnchor=t.targetAnchor,F=Ko(t.props),U=F?n:M,H=F?R:w;if(o==="svg"||tE(M)?o="svg":(o==="mathml"||nE(M))&&(o="mathml"),E?(d(t.dynamicChildren,E,U,s,r,o,a),kg(t,e,!0)):l||h(t,e,U,H,s,r,o,a,!1),x)F?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Zh(e,n,R,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){let V=_g(e.props,p);V&&(e.target=V,Zh(e,V,null,c,0))}else F&&Zh(e,M,w,c,1);wc(e,x)}},remove(t,e,n,{um:i,o:{remove:s}},r){let{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:h,props:d}=t,f=Ko(d),p=r||!f,_=io.get(t);if(_&&(_.flags|=8,io.delete(t)),h&&(s(c),s(u)),r&&s(l),!_&&(f||h)&&o&16)for(let g=0;g<a.length;g++){let m=a[g];i(m,e,n,p,!!m.dynamicChildren)}},move:Zh,hydrate:Aw};function Zh(t,e,n,{o:{insert:i},m:s},r=2){r===0&&i(t.targetAnchor,e,n);let{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=r===2;if(h&&i(o,e,n),!io.has(t)&&(!h||Ko(u))&&l&16)for(let d=0;d<c.length;d++)s(c[d],e,n,2);h&&i(a,e,n)}function Aw(t,e,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},h){function d(g,m){let x=m;for(;x;){if(x&&x.nodeType===8){if(x.data==="teleport start anchor")e.targetStart=x;else if(x.data==="teleport anchor"){e.targetAnchor=x,g._lpa=e.targetAnchor&&o(e.targetAnchor);break}}x=o(x)}}function f(g,m){m.anchor=h(o(g),m,a(g),n,i,s,r)}let p=e.target=_g(e.props,l),_=Ko(e.props);if(p){let g=p._lpa||p.firstChild;e.shapeFlag&16&&(_?(f(t,e),d(p,g),e.targetAnchor||yg(p,e,u,c,a(t)===p?t:null)):(e.anchor=o(t),d(p,g),e.targetAnchor||yg(p,e,u,c),h(g&&o(g),e,p,n,i,s,r))),wc(e,_)}else _&&e.shapeFlag&16&&(f(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}var Rw=ww;function wc(t,e){let n=t.ctx;if(n&&n.ut){let i,s;for(e?(i=t.el,s=t.anchor):(i=t.targetStart,s=t.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function yg(t,e,n,i,s=null){let r=e.targetStart=n(""),o=e.targetAnchor=n("");return r[bE]=o,t&&(i(r,t,s),i(o,t,s)),o}var _s=Symbol("_leaveCb"),Mc=Symbol("_enterCb");function Ed(){let t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ao(()=>{t.isMounted=!0}),ja(()=>{t.isUnmounting=!0}),t}var gs=[Function,Array],xd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gs,onEnter:gs,onAfterEnter:gs,onEnterCancelled:gs,onBeforeLeave:gs,onLeave:gs,onAfterLeave:gs,onLeaveCancelled:gs,onBeforeAppear:gs,onAppear:gs,onAfterAppear:gs,onAppearCancelled:gs},TE=t=>{let e=t.subTree;return e.component?TE(e.component):e},Cw={name:"BaseTransition",props:xd,setup(t,{slots:e}){let n=gi(),i=Ed();return()=>{let s=e.default&&Bc(e.default(),!0),r=s&&s.length?ME(s):n.subTree?rx():void 0;if(!r)return;let o=wt(t),{mode:a}=o;if(i.isLeaving)return fg(r);let l=ad(r);if(!l)return fg(r);let c=Qo(l,o,i,n,h=>c=h);l.type!==Tn&&er(l,c);let u=n.subTree&&ad(n.subTree);if(u&&u.type!==Tn&&!Ns(u,l)&&TE(n).type!==Tn){let h=Qo(u,o,i,n);if(er(u,h),a==="out-in"&&l.type!==Tn)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave,u=void 0},fg(r);a==="in-out"&&l.type!==Tn?h.delayLeave=(d,f,p)=>{let _=wE(i,u);_[String(u.key)]=u,d[_s]=()=>{f(),d[_s]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{p(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function ME(t){let e=t[0];if(t.length>1){let n=!1;for(let i of t)if(i.type!==Tn){e=i,n=!0;break}}return e}var Cg=Cw;function wE(t,e){let{leavingVNodes:n}=t,i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Qo(t,e,n,i,s){let{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:_,onBeforeAppear:g,onAppear:m,onAfterAppear:x,onAppearCancelled:E}=e,y=String(t.key),S=wE(n,t),T=(M,w)=>{M&&Vi(M,i,9,w)},R=(M,w)=>{let F=w[1];T(M,w),Ve(M)?M.every(U=>U.length<=1)&&F():M.length<=1&&F()},v={mode:o,persisted:a,beforeEnter(M){let w=l;if(!n.isMounted)if(r)w=g||l;else return;M[_s]&&M[_s](!0);let F=S[y];F&&Ns(t,F)&&F.el[_s]&&F.el[_s](),T(w,[M])},enter(M){if(!gw&&S[y]===t)return;let w=c,F=u,U=h;if(!n.isMounted)if(r)w=m||c,F=x||u,U=E||h;else return;let H=!1;M[Mc]=k=>{H||(H=!0,k?T(U,[M]):T(F,[M]),v.delayedLeave&&v.delayedLeave(),M[Mc]=void 0)};let V=M[Mc].bind(null,!1);w?R(w,[M,V]):V()},leave(M,w){let F=String(t.key);if(M[Mc]&&M[Mc](!0),n.isUnmounting)return w();T(d,[M]);let U=!1;M[_s]=V=>{U||(U=!0,w(),V?T(_,[M]):T(p,[M]),M[_s]=void 0,S[F]===t&&delete S[F])};let H=M[_s].bind(null,!1);S[F]=t,f?R(f,[M,H]):H()},clone(M){let w=Qo(M,e,n,i,s);return s&&s(w),w}};return v}function fg(t){if(kc(t))return t=tr(t),t.children=null,t}function ad(t){if(!kc(t))return vd(t.type)&&t.children?ME(t.children):t;if(t.component)return t.component.subTree;let{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ut(n.default))return n.default()}}function er(t,e){if(t.shapeFlag&6&&t.component){t.transition=e;let n=t.component.subTree;er(vd(n.type)&&ad(n)||n,e)}else t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Bc(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r],a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ei?(o.patchFlag&128&&s++,i=i.concat(Bc(o.children,e,a))):(e||o.type!==Tn)&&i.push(a!=null?tr(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Sd(t,e){return ut(t)?yt({name:t.name},e,{setup:t}):t}function Nw(){let t=gi();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function Ng(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Iw(t){let e=gi(),n=Kh(null);if(e){let s=e.refs===bt?e.refs={}:e.refs;Object.defineProperty(s,t,{enumerable:!0,get:()=>n.value,set:r=>n.value=r})}return n}function iE(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}var ld=new WeakMap;function Ya(t,e,n,i,s=!1){if(Ve(t)){t.forEach((_,g)=>Ya(_,e&&(Ve(e)?e[g]:e),n,i,s));return}if(Rr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ya(t,e,n,i.component.subTree);return}let r=i.shapeFlag&4?zc(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===bt?a.refs={}:a.refs,h=a.setupState,d=wt(h),f=h===bt?eo:_=>iE(u,_)?!1:$t(d,_),p=(_,g)=>!(g&&iE(u,g));if(c!=null&&c!==l){if(sE(e),ft(c))u[c]=null,f(c)&&(h[c]=null);else if(vn(c)){let _=e;p(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(ut(l))na(l,a,12,[o,u]);else{let _=ft(l),g=vn(l);if(_||g){let m=()=>{if(t.f){let x=_?f(l)?h[l]:u[l]:p(l)||!t.k?l.value:u[t.k];if(s)Ve(x)&&fc(x,r);else if(Ve(x))x.includes(r)||x.push(r);else if(_)u[l]=[r],f(l)&&(h[l]=u[l]);else{let E=[r];p(l,t.k)&&(l.value=E),t.k&&(u[t.k]=E)}}else _?(u[l]=o,f(l)&&(h[l]=o)):g&&(p(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){let x=()=>{m(),ld.delete(t)};x.id=-1,ld.set(t,x),Un(x,n)}else sE(t),m()}}}function sE(t){let e=ld.get(t);e&&(e.flags|=8,ld.delete(t))}var rE=!1,Ga=()=>{rE||(console.error("Hydration completed but contains mismatches."),rE=!0)},Pw=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",Ow=t=>t.namespaceURI.includes("MathML"),Qh=t=>{if(t.nodeType===1){if(Pw(t))return"svg";if(Ow(t))return"mathml"}},$a=t=>t.nodeType===8;function Dw(t){let{mt:e,p:n,o:{patchProp:i,createText:s,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(E,y)=>{if(!y.hasChildNodes()){n(null,E,y),od(),y._vnode=E;return}h(y.firstChild,E,null,null,null),od(),y._vnode=E},h=(E,y,S,T,R,v=!1)=>{v=v||!!y.dynamicChildren;let M=$a(E)&&E.data==="[",w=()=>_(E,y,S,T,R,M),{type:F,ref:U,shapeFlag:H,patchFlag:V}=y,k=E.nodeType;y.el=E,V===-2&&(v=!1,y.dynamicChildren=null);let G=null;switch(F){case ro:k!==3?y.children===""?(l(y.el=s(""),o(E),E),G=E):G=w():(E.data!==y.children&&(Ga(),E.data=y.children),G=r(E));break;case Tn:x(E)?(G=r(E),m(y.el=E.content.firstChild,E,S)):k!==8||M?G=w():G=r(E);break;case Cr:if(M&&(E=r(E),k=E.nodeType),k===1||k===3){G=E;let K=!y.children.length;for(let te=0;te<y.staticCount;te++)K&&(y.children+=G.nodeType===1?G.outerHTML:G.data),te===y.staticCount-1&&(y.anchor=G),G=r(G);return M?r(G):G}else w();break;case ei:M?G=p(E,y,S,T,R,v):G=w();break;default:if(H&1)(k!==1||y.type.toLowerCase()!==E.tagName.toLowerCase())&&!x(E)?G=w():G=d(E,y,S,T,R,v);else if(H&6){y.slotScopeIds=R;let K=o(E);if(M?G=g(E):$a(E)&&E.data==="teleport start"?G=g(E,E.data,"teleport end"):G=r(E),e(y,K,null,S,T,Qh(K),v),(Rr(y)||y.component.asyncDep)&&!y.component.subTree){let te;M?(te=mn(Cr),te.anchor=G?G.previousSibling:K.lastChild):te=E.nodeType===3?zg(""):mn(E.nodeType===8?Tn:"div"),te.el=E,y.component.subTree=te}}else H&64?k!==8?G=w():G=y.type.hydrate(E,y,S,T,R,v,t,f):H&128&&(G=y.type.hydrate(E,y,S,T,Qh(o(E)),R,v,t,h))}return U!=null&&Ya(U,null,T,y),G},d=(E,y,S,T,R,v)=>{v=v||!!y.dynamicChildren;let{type:M,dynamicProps:w,props:F,patchFlag:U,shapeFlag:H,dirs:V,transition:k}=y,G=M==="input"||M==="option",K=!!w;if(G||K||U!==-1){V&&Qs(y,null,S,"created");let te=!1;if(x(E)){te=jE(null,k)&&S&&S.vnode.props&&S.vnode.props.appear;let Q=E.content.firstChild;if(te){let ae=Q.getAttribute("class");ae&&(Q.$cls=ae),k.beforeEnter(Q)}m(Q,E,S),y.el=E=Q}if(H&16&&!(F&&(F.innerHTML||F.textContent))){let Q=f(E.firstChild,y,E,S,T,R,v);for(Q&&!nd(E,1)&&Ga();Q;){let ae=Q;Q=Q.nextSibling,a(ae)}}else if(H&8){let Q=y.children;Q[0]===`
`&&(E.tagName==="PRE"||E.tagName==="TEXTAREA")&&(Q=Q.slice(1));let{textContent:ae}=E;ae!==Q&&ae!==Q.replace(/\r\n|\r/g,`
`)&&(nd(E,0)||Ga(),E.textContent=y.children)}if(F){if(G||K||!v||U&48){let Q=E.tagName.includes("-"),ae=E.namespaceURI.includes("svg")?"svg":E.namespaceURI.includes("MathML")?"mathml":void 0;for(let we in F)if(G&&(we.endsWith("value")||we==="indeterminate")||Ys(we)&&!Rs(we)||we[0]==="."||Q&&!Rs(we)||w&&w.includes(we)){if(Uw(E,we,F[we]))continue;i(E,we,null,F[we],ae,S)}}else if(F.onClick)i(E,"onClick",null,F.onClick,void 0,S);else if(U&4&&Yi(F.style))for(let Q in F.style)F.style[Q]}let W;(W=F&&F.onVnodeBeforeMount)&&Ui(W,S,y),V&&Qs(y,null,S,"beforeMount"),((W=F&&F.onVnodeMounted)||V||te)&&tx(()=>{W&&Ui(W,S,y),te&&k.enter(E),V&&Qs(y,null,S,"mounted")},T)}return E.nextSibling},f=(E,y,S,T,R,v,M)=>{M=M||!!y.dynamicChildren;let w=y.children,F=w.length,U=!1;for(let H=0;H<F;H++){let V=M?w[H]:w[H]=Fi(w[H]),k=V.type===ro;E?(k&&!M&&H+1<F&&Fi(w[H+1]).type===ro&&(l(s(E.data.slice(V.children.length)),S,r(E)),E.data=V.children),E=h(E,V,T,R,v,M)):k&&!V.children?l(V.el=s(""),S):(U||(U=!0,nd(S,1)||Ga()),n(null,V,S,null,T,R,Qh(S),v))}return E},p=(E,y,S,T,R,v)=>{let{slotScopeIds:M}=y;M&&(R=R?R.concat(M):M);let w=o(E),F=f(r(E),y,w,S,T,R,v);return F&&$a(F)&&F.data==="]"?r(y.anchor=F):(Ga(),l(y.anchor=c("]"),w,F),F)},_=(E,y,S,T,R,v)=>{if(Vw(E,y)||Ga(),y.el=null,v){let F=g(E);for(;;){let U=r(E);if(U&&U!==F)a(U);else break}}let M=r(E),w=o(E);return a(E),n(null,y,w,M,S,T,Qh(w),R),S&&(S.vnode.el=y.el,wd(S,y.el)),M},g=(E,y="[",S="]")=>{let T=0;for(;E;)if(E=r(E),E&&$a(E)&&(E.data===y&&T++,E.data===S)){if(T===0)return r(E);T--}return E},m=(E,y,S)=>{let T=y.parentNode;T&&T.replaceChild(E,y);let R=S;for(;R;)R.vnode.el===y&&(R.vnode.el=R.subTree.el=E),R=R.parent},x=E=>E.nodeType===1&&E.tagName==="TEMPLATE";return[u,h]}var Lw=new Set(["src","srcset","href","poster"]);function Uw(t,e,n){return Lw.has(e)?t.getAttribute(e)===(n==null?null:`${n}`):!1}var cd="data-allow-mismatch",Fw={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function nd(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(cd);)t=t.parentElement;return Ig(t&&t.getAttribute(cd),e)}function Ig(t,e){if(t==null)return!1;if(t==="")return!0;{let n=t.split(",");return e===0&&n.includes("children")?!0:n.includes(Fw[e])}}function Vw(t,e){return nd(t.parentElement,1)||Bw(t)||kw(e)}function Bw(t){return t.nodeType===1&&Ig(t.getAttribute(cd),1)}function kw({props:t}){let e=t&&t[cd];return typeof e=="string"&&Ig(e,1)}var Hw=mc().requestIdleCallback||(t=>setTimeout(t,1)),zw=mc().cancelIdleCallback||(t=>clearTimeout(t)),Gw=(t=1e4)=>e=>{let n=Hw(e,{timeout:t});return()=>zw(n)};function Ww(t){let{top:e,left:n,bottom:i,right:s}=t.getBoundingClientRect(),{innerHeight:r,innerWidth:o}=window;return(e>0&&e<r||i>0&&i<r)&&(n>0&&n<o||s>0&&s<o)}var Xw=t=>(e,n)=>{let i=new IntersectionObserver(s=>{for(let r of s)if(r.isIntersecting){i.disconnect(),e();break}},t);return n(s=>{if(s instanceof Element){if(Ww(s))return e(),i.disconnect(),!1;i.observe(s)}}),()=>i.disconnect()},$w=t=>e=>{if(t){let n=matchMedia(t);if(n.matches)e();else return n.addEventListener("change",e,{once:!0}),()=>n.removeEventListener("change",e)}},qw=(t=[])=>(e,n)=>{ft(t)&&(t=[t]);let i=!1,s=o=>{i||(i=!0,r(),e(),o.target.dispatchEvent(new o.constructor(o.type,o)))},r=()=>{n(o=>{for(let a of t)o.removeEventListener(a,s)})};return n(o=>{for(let a of t)o.addEventListener(a,s,{once:!0})}),r};function Yw(t,e){if($a(t)&&t.data==="["){let n=1,i=t.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if($a(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else e(t)}var Rr=t=>!!t.type.__asyncLoader;function Kw(t){ut(t)&&(t={loader:t});let{loader:e,loadingComponent:n,errorComponent:i,delay:s=200,hydrate:r,timeout:o,suspensible:a=!0,onError:l}=t,c=null,u,h=0,d=()=>(h++,c=null,f()),f=()=>{let p;return c||(p=c=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),l)return new Promise((g,m)=>{l(_,()=>g(d()),()=>m(_),h+1)});throw _}).then(_=>p!==c&&c?c:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),u=_,_)))};return Sd({name:"AsyncComponentWrapper",__asyncLoader:f,__asyncHydrate(p,_,g){let m=p.isConnected,x=!1;(_.bu||(_.bu=[])).push(()=>x=!0);let E=()=>{x||!p.parentNode||m&&!p.isConnected||g()},y=r?()=>{let S=r(E,T=>Yw(p,T));S&&(_.bum||(_.bum=[])).push(S)}:E;u?y():f().then(()=>!_.isUnmounted&&y())},get __asyncResolved(){return u},setup(){let p=oi;if(Ng(p),u)return()=>ed(u,p);let _=S=>{c=null,ia(S,p,13,!i)};if(a&&p.suspense||ta)return f().then(S=>()=>ed(S,p)).catch(S=>(_(S),()=>i?mn(i,{error:S}):null));let g=on(!1),m=on(),x=on(!!s),E,y;return Za(()=>{E!=null&&clearTimeout(E),y!=null&&clearTimeout(y)}),s&&(y=setTimeout(()=>{p.isUnmounted||(x.value=!1)},s)),o!=null&&(E=setTimeout(()=>{if(!p.isUnmounted&&!g.value&&!m.value){let S=new Error(`Async component timed out after ${o}ms.`);_(S),m.value=S}},o)),f().then(()=>{p.isUnmounted||(g.value=!0,p.parent&&kc(p.parent.vnode)&&p.parent.update())}).catch(S=>{if(p.isUnmounted){c=null;return}_(S),m.value=S}),()=>{if(g.value&&u)return ed(u,p);if(m.value&&i)return mn(i,{error:m.value});if(n&&!x.value)return ed(n,p)}}})}function ed(t,e){let{ref:n,props:i,children:s,ce:r}=e.vnode,o=mn(t,i,s);return o.ref=n,o.ce=r,delete e.vnode.ce,o}var kc=t=>t.type.__isKeepAlive,Jw={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){let n=gi(),i=n.ctx;if(!i.renderer)return()=>{let x=e.default&&e.default();return x&&x.length===1?x[0]:x};let s=new Map,r=new Set,o=null,a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:h}}}=i,d=h("div");i.activate=(x,E,y,S,T)=>{let R=x.component;c(x,E,y,0,a),l(R.vnode,x,E,y,R,a,S,x.slotScopeIds,T),Un(()=>{R.isDeactivated=!1,R.a&&to(R.a);let v=x.props&&x.props.onVnodeMounted;v&&Ui(v,R.parent,x)},a)},i.deactivate=x=>{let E=x.component;hd(E.m),hd(E.a),c(x,d,null,1,a),Un(()=>{E.da&&to(E.da);let y=x.props&&x.props.onVnodeUnmounted;y&&Ui(y,E.parent,x),E.isDeactivated=!0},a)};function f(x){pg(x),u(x,n,a,!0)}function p(x){s.forEach((E,y)=>{let S=_d(Rr(E)?E.type.__asyncResolved||{}:E.type);S&&!x(S)&&_(y)})}function _(x){let E=s.get(x);E&&(!o||!Ns(E,o))?f(E):o&&pg(o),s.delete(x),r.delete(x)}jo(()=>[t.include,t.exclude],([x,E])=>{x&&p(y=>Ac(x,y)),E&&p(y=>!Ac(E,y))},{flush:"post",deep:!0});let g=null,m=()=>{g!=null&&(dd(n.subTree.type)?Un(()=>{let x=td(n.subTree);x.component&&s.set(g,x)},n.subTree.suspense):s.set(g,td(n.subTree)))};return ao(m),Hc(m),ja(()=>{s.forEach(x=>{let{subTree:E,suspense:y}=n,S=td(E);if(x.type===S.type&&x.key===S.key){pg(S);let T=S.component.da;T&&Un(T,y);return}f(x)})}),()=>{if(g=null,!e.default)return o=null;let x=e.default(),E=x[0];if(x.length>1)return o=null,x;if(!Ir(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return o=null,E;let y=td(E);if(y.type===Tn)return o=null,y;let S=y.type,T=_d(Rr(y)?y.type.__asyncResolved||{}:S),{include:R,exclude:v,max:M}=t;if(R&&(!T||!Ac(R,T))||v&&T&&Ac(v,T))return y.shapeFlag&=-257,o=y,E;let w=y.key==null?S:y.key,F=s.get(w);return y.el&&(y=tr(y),E.shapeFlag&128&&(E.ssContent=y)),g=w,F?(y.el=F.el,y.component=F.component,y.transition&&er(y,y.transition),y.shapeFlag|=512,r.delete(w),r.add(w)):(r.add(w),M&&r.size>parseInt(M,10)&&_(r.values().next().value)),y.shapeFlag|=256,o=y,dd(E.type)?E:y}}},jw=Jw;function Ac(t,e){return Ve(t)?t.some(n=>Ac(n,e)):ft(t)?t.split(",").includes(e):hv(t)?(t.lastIndex=0,t.test(e)):!1}function AE(t,e){CE(t,"a",e)}function RE(t,e){CE(t,"da",e)}function CE(t,e,n=oi){let i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(bd(e,i,n),n){let s=n.parent;for(;s&&s.parent;)kc(s.parent.vnode)&&Zw(i,e,n,s),s=s.parent}}function Zw(t,e,n,i){let s=bd(e,t,i,!0);Za(()=>{fc(i[e],s)},n)}function pg(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function td(t){return t.shapeFlag&128?t.ssContent:t}function bd(t,e,n=oi,i=!1){if(n){let s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{fs();let a=Qa(n),l=Vi(e,n,t,o);return a(),ps(),l});return i?s.unshift(r):s.push(r),r}}var Pr=t=>(e,n=oi)=>{(!ta||t==="sp")&&bd(t,(...i)=>e(...i),n)},NE=Pr("bm"),ao=Pr("m"),Td=Pr("bu"),Hc=Pr("u"),ja=Pr("bum"),Za=Pr("um"),IE=Pr("sp"),PE=Pr("rtg"),OE=Pr("rtc");function DE(t,e=oi){bd("ec",t,e)}var Pg="components",Qw="directives";function eA(t,e){return Og(Pg,t,!0,e)||t}var LE=Symbol.for("v-ndc");function tA(t){return ft(t)?Og(Pg,t,!1)||t:t||LE}function nA(t){return Og(Qw,t)}function Og(t,e,n=!0,i=!1){let s=ai||oi;if(s){let r=s.type;if(t===Pg){let a=_d(r,!1);if(a&&(a===e||a===qt(e)||a===ds(qt(e))))return r}let o=oE(s[t]||r[t],e)||oE(s.appContext[t],e);return!o&&i?r:o}}function oE(t,e){return t&&(t[e]||t[qt(e)]||t[ds(qt(e))])}function iA(t,e,n,i){let s,r=n&&n[i],o=Ve(t);if(o||ft(t)){let a=o&&Yi(t),l=!1,c=!1;a&&(l=!Wn(t),c=Ri(t),t=bc(t)),s=new Array(t.length);for(let u=0,h=t.length;u<h;u++)s[u]=e(l?c?wr(Ki(t[u])):Ki(t[u]):t[u],u,void 0,r&&r[u])}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r&&r[a])}else if(Lt(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r&&r[l]));else{let a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){let u=a[l];s[l]=e(t[u],u,l,r&&r[l])}}else s=[];return n&&(n[i]=s),s}function sA(t,e){for(let n=0;n<e.length;n++){let i=e[n];if(Ve(i))for(let s=0;s<i.length;s++)t[i[s].name]=i[s].fn;else i&&(t[i.name]=i.key?(...s)=>{let r=i.fn(...s);return r&&(r.key=i.key),r}:i.fn)}return t}function rA(t,e,n,i,s,r){if(n==null&&(n={}),ai.ce||ai.parent&&Rr(ai.parent)&&ai.parent.ce){let c=r!=null&&n.key==null?yt({},n,{key:r}):n,u=Object.keys(c).length>0;return e!=="default"&&(c.name=e),Lc(),fd(ei,null,[mn("slot",c,i&&i())],u?-2:64)}let o=t[e];o&&o._c&&(o._d=!1);let a=Nr.length;Lc();let l;try{let c=o&&Dg(o(n)),u=n.key||r||c&&c.key;l=fd(ei,{key:(u&&!Dn(u)?u:`_${e}`)+(!c&&i?"_fb":"")},c||(i?i():[]),c&&t._===1?64:-2)}catch(c){for(let u=Nr.length;u>a;u--)Ad();throw c}finally{o&&o._c&&(o._d=!0)}return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),l}function Dg(t){return t.some(e=>Ir(e)?!(e.type===Tn||e.type===ei&&!Dg(e.children)):!0)?t:null}function oA(t,e){let n={};for(let i in t)n[e&&/[A-Z]/.test(i)?`on:${i}`:br(i)]=t[i];return n}var vg=t=>t?lx(t)?zc(t):vg(t.parent):null;var Nc=yt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vg(t.parent),$root:t=>vg(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Lg(t),$forceUpdate:t=>t.f||(t.f=()=>{Ag(t.update)}),$nextTick:t=>t.n||(t.n=sa.bind(t.proxy)),$watch:t=>Tw.bind(t)});var mg=(t,e)=>t!==bt&&!t.__isScriptSetup&&$t(t,e),Eg={get({_:t},e){if(e==="__v_skip")return!0;let{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){let d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(mg(i,e))return o[e]=1,i[e];if(s!==bt&&$t(s,e))return o[e]=2,s[e];if($t(r,e))return o[e]=3,r[e];if(n!==bt&&$t(n,e))return o[e]=4,n[e];xg&&(o[e]=0)}}let c=Nc[e],u,h;if(c)return e==="$attrs"&&ri(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==bt&&$t(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,$t(h,e))return h[e]},set({_:t},e,n){let{data:i,setupState:s,ctx:r}=t;return mg(s,e)?(s[e]=n,!0):i!==bt&&$t(i,e)?(i[e]=n,!0):$t(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||t!==bt&&a[0]!=="$"&&$t(t,a)||mg(e,a)||$t(r,a)||$t(i,a)||$t(Nc,a)||$t(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:$t(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},aA=yt({},Eg,{get(t,e){if(e!==Symbol.unscopables)return Eg.get(t,e,t)},has(t,e){return e[0]!=="_"&&!pv(e)}});function lA(){return null}function cA(){return null}function uA(t){}function hA(t){}function dA(){return null}function fA(){}function pA(t,e){return null}function mA(){return UE("useSlots").slots}function gA(){return UE("useAttrs").attrs}function UE(t){let e=gi();return e.setupContext||(e.setupContext=dx(e))}function Oc(t){return Ve(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function _A(t,e){let n=Oc(t);for(let i in e){if(i.startsWith("__skip"))continue;let s=n[i];s?Ve(s)||ut(s)?s=n[i]={type:s,default:e[i]}:s.default=e[i]:s===null&&(s=n[i]={default:e[i]}),s&&e[`__skip_${i}`]&&(s.skipFactory=!0)}return n}function yA(t,e){return!t||!e?t||e:Ve(t)&&Ve(e)?t.concat(e):yt({},Oc(t),Oc(e))}function vA(t,e){let n={};for(let i in t)e.includes(i)||Object.defineProperty(n,i,{enumerable:!0,get:()=>t[i]});return n}function EA(t){let e=gi(),n=ta,i=t();Fc(),n&&oo(!1);let s=()=>{Qa(e),n&&oo(!0)},r=()=>{gi()!==e&&e.scope.off(),Fc(),n&&oo(!1)};return Oh(i)&&(i=i.catch(o=>{throw s(),Promise.resolve().then(()=>Promise.resolve().then(r)),o})),[i,()=>{s(),Promise.resolve().then(r)}]}var xg=!0;function xA(t){let e=Lg(t),n=t.proxy,i=t.ctx;xg=!1,e.beforeCreate&&aE(e.beforeCreate,t,"bc");let{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:_,deactivated:g,beforeDestroy:m,beforeUnmount:x,destroyed:E,unmounted:y,render:S,renderTracked:T,renderTriggered:R,errorCaptured:v,serverPrefetch:M,expose:w,inheritAttrs:F,components:U,directives:H,filters:V}=e;if(c&&SA(c,i,null),o)for(let K in o){let te=o[K];ut(te)&&(i[K]=te.bind(n))}if(s){let K=s.call(n,n);Lt(K)&&(t.data=ms(K))}if(xg=!0,r)for(let K in r){let te=r[K],W=ut(te)?te.bind(n,n):ut(te.get)?te.get.bind(n,n):Sn,Q=!ut(te)&&ut(te.set)?te.set.bind(n):Sn,ae=ra({get:W,set:Q});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>ae.value,set:we=>ae.value=we})}if(a)for(let K in a)FE(a[K],i,n,K);if(l){let K=ut(l)?l.call(n):l;Reflect.ownKeys(K).forEach(te=>{yE(te,K[te])})}u&&aE(u,t,"c");function G(K,te){Ve(te)?te.forEach(W=>K(W.bind(n))):te&&K(te.bind(n))}if(G(NE,h),G(ao,d),G(Td,f),G(Hc,p),G(AE,_),G(RE,g),G(DE,v),G(OE,T),G(PE,R),G(ja,x),G(Za,y),G(IE,M),Ve(w))if(w.length){let K=t.exposed||(t.exposed={});w.forEach(te=>{Object.defineProperty(K,te,{get:()=>n[te],set:W=>n[te]=W,enumerable:!0})})}else t.exposed||(t.exposed={});S&&t.render===Sn&&(t.render=S),F!=null&&(t.inheritAttrs=F),U&&(t.components=U),H&&(t.directives=H),M&&Ng(t)}function SA(t,e,n=Sn){Ve(t)&&(t=Sg(t));for(let i in t){let s=t[i],r;Lt(s)?"default"in s?r=Cc(s.from||i,s.default,!0):r=Cc(s.from||i):r=Cc(s),vn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function aE(t,e,n){Vi(Ve(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function FE(t,e,n,i){let s=i.includes(".")?SE(n,i):()=>n[i];if(ft(t)){let r=e[t];ut(r)&&jo(s,r)}else if(ut(t))jo(s,t.bind(n));else if(Lt(t))if(Ve(t))t.forEach(r=>FE(r,e,n,i));else{let r=ut(t.handler)?t.handler.bind(n):e[t.handler];ut(r)&&jo(s,r,t)}}function Lg(t){let e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e),l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>ud(l,c,o,!0)),ud(l,e,o)),Lt(e)&&r.set(e,l),l}function ud(t,e,n,i=!1){let{mixins:s,extends:r}=e;r&&ud(t,r,n,!0),s&&s.forEach(o=>ud(t,o,n,!0));for(let o in e)if(!(i&&o==="expose")){let a=bA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}var bA={data:lE,props:cE,emits:cE,methods:Rc,computed:Rc,beforeCreate:Ci,created:Ci,beforeMount:Ci,mounted:Ci,beforeUpdate:Ci,updated:Ci,beforeDestroy:Ci,beforeUnmount:Ci,destroyed:Ci,unmounted:Ci,activated:Ci,deactivated:Ci,errorCaptured:Ci,serverPrefetch:Ci,components:Rc,directives:Rc,watch:MA,provide:lE,inject:TA};function lE(t,e){return e?t?function(){return yt(ut(t)?t.call(this,this):t,ut(e)?e.call(this,this):e)}:e:t}function TA(t,e){return Rc(Sg(t),Sg(e))}function Sg(t){if(Ve(t)){let e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ci(t,e){return t?[...new Set([].concat(t,e))]:e}function Rc(t,e){return t?yt(Object.create(null),t,e):e}function cE(t,e){return t?Ve(t)&&Ve(e)?[...new Set([...t,...e])]:yt(Object.create(null),Oc(t),Oc(e??{})):e}function MA(t,e){if(!t)return e;if(!e)return t;let n=yt(Object.create(null),t);for(let i in e)n[i]=Ci(t[i],e[i]);return n}function VE(){return{app:null,config:{isNativeTag:eo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var wA=0;function AA(t,e){return function(i,s=null){ut(i)||(i=yt({},i)),s!=null&&!Lt(s)&&(s=null);let r=VE(),o=new WeakSet,a=[],l=!1,c=r.app={_uid:wA++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:gx,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&ut(u.install)?(o.add(u),u.install(c,...h)):ut(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){let f=c._ceVNode||mn(i,s);return f.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(f,u):t(f,u,d),l=!0,c._container=u,u.__vue_app__=c,zc(f.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Vi(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){let h=Zo;Zo=c;try{return u()}finally{Zo=h}}};return c}}var Zo=null;function RA(t,e,n=bt){let i=gi(),s=qt(e),r=pi(e),o=BE(t,s),a=Jh((l,c)=>{let u,h=bt,d;return xE(()=>{let f=t[s];Ln(u,f)&&(u=f,c())}),{get(){return l(),n.get?n.get(u):u},set(f){let p=n.set?n.set(f):f;if(!Ln(p,u)&&!(h!==bt&&Ln(f,h)))return;let _=i.vnode.props,g=!!(_&&(e in _||s in _||r in _)&&(`onUpdate:${e}`in _||`onUpdate:${s}`in _||`onUpdate:${r}`in _));g||(u=f,c()),i.emit(`update:${e}`,p),Ln(f,h)&&(Ln(f,p)&&!Ln(p,d)||g&&h!==bt&&!Ln(p,u))&&c(),h=f,d=p}}});return a[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?o||bt:a,done:!1}:{done:!0}}}},a}var BE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${qt(e)}Modifiers`]||t[`${pi(e)}Modifiers`];function CA(t,e,...n){if(t.isUnmounted)return;let i=t.vnode.props||bt,s=n,r=e.startsWith("update:"),o=r&&BE(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>ft(u)?u.trim():u)),o.number&&(s=s.map(Ba)));let a,l=i[a=br(e)]||i[a=br(qt(e))];!l&&r&&(l=i[a=br(pi(e))]),l&&Vi(l,t,6,s);let c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Vi(c,t,6,s)}}var NA=new WeakMap;function kE(t,e,n=!1){let i=n?NA:e.emitsCache,s=i.get(t);if(s!==void 0)return s;let r=t.emits,o={},a=!1;if(!ut(t)){let l=c=>{let u=kE(c,e,!0);u&&(a=!0,yt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Lt(t)&&i.set(t,null),null):(Ve(r)?r.forEach(l=>o[l]=null):yt(o,r),Lt(t)&&i.set(t,o),o)}function Md(t,e){return!t||!Ys(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),$t(t,e[0].toLowerCase()+e.slice(1))||$t(t,pi(e))||$t(t,e))}function id(t){let{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:f,ctx:p,inheritAttrs:_}=t,g=Pc(t),m,x;try{if(n.shapeFlag&4){let S=s||i,T=S;m=Fi(c.call(T,S,u,h,f,d,p)),x=a}else{let S=e;m=Fi(S.length>1?S(h,{attrs:a,slots:o,emit:l}):S(h,null)),x=e.props?a:PA(a)}}catch(S){Nr.length=0,ia(S,t,1),m=mn(Tn)}let E=m,y;if(x&&_!==!1){let S=Object.keys(x),{shapeFlag:T}=E;S.length&&T&7&&(r&&S.some(Ua)&&(x=OA(x,r)),E=tr(E,x,!1,!0))}if(n.dirs&&(E=tr(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition){let S=vd(E.type)&&ad(E)||E;er(S,n.transition)}return m=E,Pc(g),m}function IA(t,e=!0){let n;for(let i=0;i<t.length;i++){let s=t[i];if(Ir(s)){if(s.type!==Tn||s.children==="v-if"){if(n)return;n=s}}else return}return n}var PA=t=>{let e;for(let n in t)(n==="class"||n==="style"||Ys(n))&&((e||(e={}))[n]=t[n]);return e},OA=(t,e)=>{let n={};for(let i in t)(!Ua(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function DA(t,e,n){let{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?uE(i,o,c):!!o;if(l&8){let u=e.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(HE(o,i,d)&&!Md(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?uE(i,o,c):!0:!!o;return!1}function uE(t,e,n){let i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){let r=i[s];if(HE(e,t,r)&&!Md(n,r))return!0}return!1}function HE(t,e,n){let i=t[n],s=e[n];return n==="style"&&Lt(i)&&Lt(s)?!Li(i,s):i!==s}function wd({vnode:t,parent:e,suspense:n},i){for(;e;){let s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=i,t=s),s===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}var zE={},GE=()=>Object.create(zE),WE=t=>Object.getPrototypeOf(t)===zE;function LA(t,e,n,i=!1){let s={},r=GE();t.propsDefaults=Object.create(null),XE(t,e,s,r);for(let o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:$h(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function UA(t,e,n,i){let{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=wt(s),[l]=t.propsOptions,c=!1;if((i||o>0)&&!(o&16)){if(o&8){let u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Md(t.emitsOptions,d))continue;let f=e[d];if(l)if($t(r,d))f!==r[d]&&(r[d]=f,c=!0);else{let p=qt(d);s[p]=bg(l,a,p,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{XE(t,e,s,r)&&(c=!0);let u;for(let h in a)(!e||!$t(e,h)&&((u=pi(h))===h||!$t(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=bg(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(let h in r)(!e||!$t(e,h))&&(delete r[h],c=!0)}c&&Js(t.attrs,"set","")}function XE(t,e,n,i){let[s,r]=t.propsOptions,o=!1,a;if(e)for(let l in e){if(Rs(l))continue;let c=e[l],u;s&&$t(s,u=qt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Md(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){let l=wt(n),c=a||bt;for(let u=0;u<r.length;u++){let h=r[u];n[h]=bg(s,l,h,c[h],t,!$t(c,h))}}return o}function bg(t,e,n,i,s,r){let o=t[n];if(o!=null){let a=$t(o,"default");if(a&&i===void 0){let l=o.default;if(o.type!==Function&&!o.skipFactory&&ut(l)){let{propsDefaults:c}=s;if(n in c)i=c[n];else{let u=Qa(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===pi(n))&&(i=!0))}return i}var FA=new WeakMap;function $E(t,e,n=!1){let i=n?FA:e.propsCache,s=i.get(t);if(s)return s;let r=t.props,o={},a=[],l=!1;if(!ut(t)){let u=h=>{l=!0;let[d,f]=$E(h,e,!0);yt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Lt(t)&&i.set(t,Qr),Qr;if(Ve(r))for(let u=0;u<r.length;u++){let h=qt(r[u]);hE(h)&&(o[h]=bt)}else if(r)for(let u in r){let h=qt(u);if(hE(h)){let d=r[u],f=o[h]=Ve(d)||ut(d)?{type:d}:yt({},d),p=f.type,_=!1,g=!0;if(Ve(p))for(let m=0;m<p.length;++m){let x=p[m],E=ut(x)&&x.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(g=!1)}else _=ut(p)&&p.name==="Boolean";f[0]=_,f[1]=g,(_||$t(f,"default"))&&a.push(h)}}let c=[o,a];return Lt(t)&&i.set(t,c),c}function hE(t){return t[0]!=="$"&&!Rs(t)}var Ug=t=>t==="_"||t==="_ctx"||t==="$stable",Fg=t=>Ve(t)?t.map(Fi):[Fi(t)],VA=(t,e,n)=>{if(e._n)return e;let i=Rg((...s)=>Fg(e(...s)),n);return i._c=!1,i},qE=(t,e,n)=>{let i=t._ctx;for(let s in t){if(Ug(s))continue;let r=t[s];if(ut(r))e[s]=VA(s,r,i);else if(r!=null){let o=Fg(r);e[s]=()=>o}}},YE=(t,e)=>{let n=Fg(e);t.slots.default=()=>n},KE=(t,e,n)=>{for(let i in e)(n||!Ug(i))&&(t[i]=e[i])},BA=(t,e,n)=>{let i=t.slots=GE();if(t.vnode.shapeFlag&32){let s=e._;s?(KE(i,e,n),n&&Lh(i,"_",s,!0)):qE(e,i)}else e&&YE(t,e)},kA=(t,e,n)=>{let{vnode:i,slots:s}=t,r=!0,o=bt;if(i.shapeFlag&32){let a=e._;a?n&&a===1?r=!1:KE(s,e,n):(r=!e.$stable,qE(e,s)),o=e}else e&&(YE(t,e),o={default:1});if(r)for(let a in s)!Ug(a)&&o[a]==null&&delete s[a]};function HA(){let t=[]}var Un=tx;function Vg(t){return JE(t)}function Bg(t){return JE(t,Dw)}function JE(t,e){HA();let n=mc();n.__VUE__=!0;let{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Sn,insertStaticContent:p}=t,_=(A,L,z,Y=null,q=null,ne=null,se=void 0,X=null,ce=!!L.dynamicChildren)=>{if(A===L)return;A&&!Ns(A,L)&&(Y=me(A),Ie(A,q,ne,!0),A=null),L.patchFlag===-2&&(ce=!1,L.dynamicChildren=null),L.dynamicChildren&&A&&A.dynamicChildren&&A.dynamicChildren.hasOnce&&(L.dynamicChildren===Qr&&(L.dynamicChildren=[]),L.dynamicChildren.hasOnce=!0);let{type:P,ref:Ae,shapeFlag:pe}=L;switch(P){case ro:g(A,L,z,Y);break;case Tn:m(A,L,z,Y);break;case Cr:A==null&&x(L,z,Y,se);break;case ei:H(A,L,z,Y,q,ne,se,X,ce);break;default:pe&1?T(A,L,z,Y,q,ne,se,X,ce):pe&6?V(A,L,z,Y,q,ne,se,X,ce):(pe&64||pe&128)&&P.process(A,L,z,Y,q,ne,se,X,ce,Oe)}Ae!=null&&q?Ya(Ae,A&&A.ref,ne,L||A,!L):Ae==null&&A&&A.ref!=null&&Ya(A.ref,null,ne,A,!0)},g=(A,L,z,Y)=>{if(A==null)i(L.el=a(L.children),z,Y);else{let q=L.el=A.el;L.children!==A.children&&c(q,L.children)}},m=(A,L,z,Y)=>{A==null?i(L.el=l(L.children||""),z,Y):L.el=A.el},x=(A,L,z,Y)=>{[A.el,A.anchor]=p(A.children,L,z,Y,A.el,A.anchor)},E=(A,L,z,Y)=>{if(L.children!==A.children){let q=d(A.anchor);S(A),[L.el,L.anchor]=p(L.children,z,q,Y)}else L.el=A.el,L.anchor=A.anchor},y=({el:A,anchor:L},z,Y)=>{let q;for(;A&&A!==L;)q=d(A),i(A,z,Y),A=q;i(L,z,Y)},S=({el:A,anchor:L})=>{let z;for(;A&&A!==L;)z=d(A),s(A),A=z;s(L)},T=(A,L,z,Y,q,ne,se,X,ce)=>{if(L.type==="svg"?se="svg":L.type==="math"&&(se="mathml"),A==null)R(L,z,Y,q,ne,se,X,ce);else{let P=A.el&&A.el._isVueCE?A.el:null;try{P&&P._beginPatch(),w(A,L,q,ne,se,X,ce)}finally{P&&P._endPatch()}}},R=(A,L,z,Y,q,ne,se,X)=>{let ce,P,{props:Ae,shapeFlag:pe,transition:I,dirs:b}=A;if(ce=A.el=o(A.type,ne,Ae&&Ae.is,Ae),pe&8?u(ce,A.children):pe&16&&M(A.children,ce,null,Y,q,gg(A,ne),se,X),b&&Qs(A,null,Y,"created"),v(ce,A,A.scopeId,se,Y),Ae){for(let Z in Ae)Z!=="value"&&!Rs(Z)&&r(ce,Z,null,Ae[Z],ne,Y);"value"in Ae&&r(ce,"value",null,Ae.value,ne),(P=Ae.onVnodeBeforeMount)&&Ui(P,Y,A)}b&&Qs(A,null,Y,"beforeMount");let $=jE(q,I);$&&I.beforeEnter(ce),i(ce,L,z),((P=Ae&&Ae.onVnodeMounted)||$||b)&&Un(()=>{let ee;P&&Ui(P,Y,A),$&&I.enter(ce),b&&Qs(A,null,Y,"mounted")},q)},v=(A,L,z,Y,q)=>{if(z&&f(A,z),Y)for(let ne=0;ne<Y.length;ne++)f(A,Y[ne]);if(q){let ne=q.subTree;if(L===ne||dd(ne.type)&&(ne.ssContent===L||ne.ssFallback===L)){let se=q.vnode;v(A,se,se.scopeId,se.slotScopeIds,q.parent)}}},M=(A,L,z,Y,q,ne,se,X,ce=0)=>{for(let P=ce;P<A.length;P++){let Ae=A[P]=X?Ar(A[P]):Fi(A[P]);_(null,Ae,L,z,Y,q,ne,se,X)}},w=(A,L,z,Y,q,ne,se)=>{let X=L.el=A.el,{patchFlag:ce,dynamicChildren:P,dirs:Ae}=L;ce|=A.patchFlag&16;let pe=A.props||bt,I=L.props||bt,b;if(z&&Yo(z,!1),(b=I.onVnodeBeforeUpdate)&&Ui(b,z,L,A),Ae&&Qs(L,A,z,"beforeUpdate"),z&&Yo(z,!0),P&&(!A.dynamicChildren||A.dynamicChildren.length!==P.length)&&(ce=0,se=!1,P=null),(pe.innerHTML&&I.innerHTML==null||pe.textContent&&I.textContent==null)&&u(X,""),P?F(A.dynamicChildren,P,X,z,Y,gg(L,q),ne):se||W(A,L,X,null,z,Y,gg(L,q),ne,!1),ce>0){if(ce&16)U(X,pe,I,z,q);else if(ce&2&&pe.class!==I.class&&r(X,"class",null,I.class,q),ce&4&&r(X,"style",pe.style,I.style,q),ce&8){let $=L.dynamicProps;for(let Z=0;Z<$.length;Z++){let ee=$[Z],Se=pe[ee],xe=I[ee];(xe!==Se||ee==="value")&&r(X,ee,Se,xe,q,z)}}ce&1&&A.children!==L.children&&u(X,L.children)}else!se&&P==null&&U(X,pe,I,z,q);((b=I.onVnodeUpdated)||Ae)&&Un(()=>{b&&Ui(b,z,L,A),Ae&&Qs(L,A,z,"updated")},Y)},F=(A,L,z,Y,q,ne,se)=>{for(let X=0;X<L.length;X++){let ce=A[X],P=L[X],Ae=ce.el&&(ce.type===ei||!Ns(ce,P)||ce.shapeFlag&198)?h(ce.el):z;_(ce,P,Ae,null,Y,q,ne,se,!0)}},U=(A,L,z,Y,q)=>{if(L!==z){if(L!==bt)for(let ne in L)!Rs(ne)&&!(ne in z)&&r(A,ne,L[ne],null,q,Y);for(let ne in z){if(Rs(ne))continue;let se=z[ne],X=L[ne];se!==X&&ne!=="value"&&r(A,ne,X,se,q,Y)}"value"in z&&r(A,"value",L.value,z.value,q)}},H=(A,L,z,Y,q,ne,se,X,ce)=>{let P=L.el=A?A.el:a(""),Ae=L.anchor=A?A.anchor:a(""),{patchFlag:pe,dynamicChildren:I,slotScopeIds:b}=L;b&&(X=X?X.concat(b):b),A==null?(i(P,z,Y),i(Ae,z,Y),M(L.children||[],z,Ae,q,ne,se,X,ce)):pe>0&&pe&64&&I&&A.dynamicChildren&&A.dynamicChildren.length===I.length?(F(A.dynamicChildren,I,z,q,ne,se,X),(L.key!=null||q&&L===q.subTree)&&kg(A,L,!0)):W(A,L,z,Ae,q,ne,se,X,ce)},V=(A,L,z,Y,q,ne,se,X,ce)=>{L.slotScopeIds=X,A==null?L.shapeFlag&512?q.ctx.activate(L,z,Y,se,ce):k(L,z,Y,q,ne,se,ce):G(A,L,ce)},k=(A,L,z,Y,q,ne,se)=>{let X=A.component=ax(A,Y,q);if(kc(A)&&(X.ctx.renderer=Oe),cx(X,!1,se),X.asyncDep){if(q&&q.registerDep(X,K,se),!A.el){let ce=X.subTree=mn(Tn);m(null,ce,L,z),A.placeholder=ce.el}}else K(X,A,L,z,q,ne,se)},G=(A,L,z)=>{let Y=L.component=A.component;if(DA(A,L,z))if(Y.asyncDep&&!Y.asyncResolved){L.el=A.el,te(Y,L,z);return}else Y.next=L,Y.update();else L.el=A.el,Y.vnode=L},K=(A,L,z,Y,q,ne,se)=>{let X=()=>{if(A.isMounted){let{next:pe,bu:I,u:b,parent:$,vnode:Z}=A;{let fe=ZE(A);if(fe){pe&&(pe.el=Z.el,te(A,pe,se)),fe.asyncDep.then(()=>{Un(()=>{A.isUnmounted||P()},q)});return}}let ee=pe,Se;Yo(A,!1),pe?(pe.el=Z.el,te(A,pe,se)):pe=Z,I&&to(I),(Se=pe.props&&pe.props.onVnodeBeforeUpdate)&&Ui(Se,$,pe,Z),Yo(A,!0);let xe=id(A),ue=A.subTree;A.subTree=xe,_(ue,xe,h(ue.el),me(ue),A,q,ne),pe.el=xe.el,ee===null&&wd(A,xe.el),b&&Un(b,q),(Se=pe.props&&pe.props.onVnodeUpdated)&&Un(()=>Ui(Se,$,pe,Z),q)}else{let pe,{el:I,props:b}=L,{bm:$,m:Z,parent:ee,root:Se,type:xe}=A,ue=Rr(L);if(Yo(A,!1),$&&to($),!ue&&(pe=b&&b.onVnodeBeforeMount)&&Ui(pe,ee,L),Yo(A,!0),I&&pt){let fe=()=>{A.subTree=id(A),pt(I,A.subTree,A,q,null)};ue&&xe.__asyncHydrate?xe.__asyncHydrate(I,A,fe):fe()}else{Se.ce&&Se.ce._hasShadowRoot()&&Se.ce._injectChildStyle(xe,A.parent?A.parent.type:void 0);let fe=A.subTree=id(A);_(null,fe,z,Y,A,q,ne),L.el=fe.el}if(Z&&Un(Z,q),!ue&&(pe=b&&b.onVnodeMounted)){let fe=L;Un(()=>Ui(pe,ee,fe),q)}(L.shapeFlag&256||ee&&Rr(ee.vnode)&&ee.vnode.shapeFlag&256)&&A.a&&Un(A.a,q),A.isMounted=!0,L=z=Y=null}};A.scope.on();let ce=A.effect=new Mr(X);A.scope.off();let P=A.update=ce.run.bind(ce),Ae=A.job=ce.runIfDirty.bind(ce);Ae.i=A,Ae.id=A.uid,ce.scheduler=()=>Ag(Ae),Yo(A,!0),P()},te=(A,L,z)=>{L.component=A;let Y=A.vnode.props;A.vnode=L,A.next=null,UA(A,L.props,Y,z),kA(A,L.children,z),fs(),Qv(A),ps()},W=(A,L,z,Y,q,ne,se,X,ce=!1)=>{let P=A&&A.children,Ae=A?A.shapeFlag:0,pe=L.children,{patchFlag:I,shapeFlag:b}=L;if(I>0){if(I&128){ae(P,pe,z,Y,q,ne,se,X,ce);return}else if(I&256){Q(P,pe,z,Y,q,ne,se,X,ce);return}}b&8?(Ae&16&&re(P,q,ne),pe!==P&&u(z,pe)):Ae&16?b&16?ae(P,pe,z,Y,q,ne,se,X,ce):re(P,q,ne,!0):(Ae&8&&u(z,""),b&16&&M(pe,z,Y,q,ne,se,X,ce))},Q=(A,L,z,Y,q,ne,se,X,ce)=>{A=A||Qr,L=L||Qr;let P=A.length,Ae=L.length,pe=Math.min(P,Ae),I;for(I=0;I<pe;I++){let b=L[I]=ce?Ar(L[I]):Fi(L[I]);_(A[I],b,z,null,q,ne,se,X,ce)}P>Ae?re(A,q,ne,!0,!1,pe):M(L,z,Y,q,ne,se,X,ce,pe)},ae=(A,L,z,Y,q,ne,se,X,ce)=>{let P=0,Ae=L.length,pe=A.length-1,I=Ae-1;for(;P<=pe&&P<=I;){let b=A[P],$=L[P]=ce?Ar(L[P]):Fi(L[P]);if(Ns(b,$))_(b,$,z,null,q,ne,se,X,ce);else break;P++}for(;P<=pe&&P<=I;){let b=A[pe],$=L[I]=ce?Ar(L[I]):Fi(L[I]);if(Ns(b,$))_(b,$,z,null,q,ne,se,X,ce);else break;pe--,I--}if(P>pe){if(P<=I){let b=I+1,$=b<Ae?L[b].el:Y;for(;P<=I;)_(null,L[P]=ce?Ar(L[P]):Fi(L[P]),z,$,q,ne,se,X,ce),P++}}else if(P>I)for(;P<=pe;)Ie(A[P],q,ne,!0),P++;else{let b=P,$=P,Z=new Map;for(P=$;P<=I;P++){let Ne=L[P]=ce?Ar(L[P]):Fi(L[P]);Ne.key!=null&&Z.set(Ne.key,P)}let ee,Se=0,xe=I-$+1,ue=!1,fe=0,Pe=new Array(xe);for(P=0;P<xe;P++)Pe[P]=0;for(P=b;P<=pe;P++){let Ne=A[P];if(Se>=xe){Ie(Ne,q,ne,!0);continue}let Ce;if(Ne.key!=null)Ce=Z.get(Ne.key);else for(ee=$;ee<=I;ee++)if(Pe[ee-$]===0&&Ns(Ne,L[ee])){Ce=ee;break}Ce===void 0?Ie(Ne,q,ne,!0):(Pe[Ce-$]=P+1,Ce>=fe?fe=Ce:ue=!0,_(Ne,L[Ce],z,null,q,ne,se,X,ce),Se++)}let et=ue?zA(Pe):Qr;for(ee=et.length-1,P=xe-1;P>=0;P--){let Ne=$+P,Ce=L[Ne],je=L[Ne+1],rt=Ne+1<Ae?je.el||QE(je):Y;Pe[P]===0?_(null,Ce,z,rt,q,ne,se,X,ce):ue&&(ee<0||P!==et[ee]?we(Ce,z,rt,2):ee--)}}},we=(A,L,z,Y,q=null)=>{let{el:ne,type:se,transition:X,children:ce,shapeFlag:P}=A;if(P&6){we(A.component.subTree,L,z,Y);return}if(P&128){A.suspense.move(L,z,Y);return}if(P&64){se.move(A,L,z,Oe);return}if(se===ei){i(ne,L,z);for(let pe=0;pe<ce.length;pe++)we(ce[pe],L,z,Y);i(A.anchor,L,z);return}if(se===Cr){y(A,L,z);return}if(Y!==2&&P&1&&X)if(Y===0)X.persisted&&!ne[_s]?i(ne,L,z):(X.beforeEnter(ne),i(ne,L,z),Un(()=>X.enter(ne),q));else{let{leave:pe,delayLeave:I,afterLeave:b}=X,$=()=>{A.ctx.isUnmounted?s(ne):i(ne,L,z)},Z=()=>{let ee=ne._isLeaving||!!ne[_s];ne._isLeaving&&ne[_s](!0),X.persisted&&!ee?$():pe(ne,()=>{$(),b&&b()})};I?I(ne,$,Z):Z()}else i(ne,L,z)},Ie=(A,L,z,Y=!1,q=!1)=>{let{type:ne,props:se,ref:X,children:ce,dynamicChildren:P,shapeFlag:Ae,patchFlag:pe,dirs:I,cacheIndex:b,memo:$}=A;if((pe===-2||P&&P.hasOnce)&&(q=!1),X!=null&&(fs(),Ya(X,null,z,A,!0),ps()),b!=null&&(!A.ctx||A.ctx===L)&&(L.renderCache[b]=void 0),Ae&256){L.ctx.deactivate(A);return}let Z=Ae&1&&I,ee=!Rr(A),Se;if(ee&&(Se=se&&se.onVnodeBeforeUnmount)&&Ui(Se,L,A),Ae&6)$e(A.component,z,Y);else{if(Ae&128){A.suspense.unmount(z,Y);return}Z&&Qs(A,null,L,"beforeUnmount"),Ae&64?A.type.remove(A,L,z,Oe,Y):P&&!P.hasOnce&&(ne!==ei||pe>0&&pe&64)?re(P,L,z,!1,!0):(ne===ei&&pe&384||!q&&Ae&16)&&re(ce,L,z),Y&&gt(A)}let xe=$!=null&&b==null;(ee&&(Se=se&&se.onVnodeUnmounted)||Z||xe)&&Un(()=>{Se&&Ui(Se,L,A),Z&&Qs(A,null,L,"unmounted"),xe&&(A.el=null)},z)},gt=A=>{let{type:L,el:z,anchor:Y,transition:q}=A;if(L===ei){ot(z,Y);return}if(L===Cr){S(A),q&&!q.persisted&&q.afterLeave&&q.afterLeave();return}let ne=()=>{s(z),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(A.shapeFlag&1&&q&&!q.persisted){let{leave:se,delayLeave:X}=q,ce=()=>se(z,ne);X?X(A.el,ne,ce):ce()}else ne()},ot=(A,L)=>{let z;for(;A!==L;)z=d(A),s(A),A=z;s(L)},$e=(A,L,z)=>{let{bum:Y,scope:q,job:ne,subTree:se,um:X,m:ce,a:P}=A;hd(ce),hd(P),Y&&to(Y),q.stop(),ne?(ne.flags|=8,Ie(se,A,L,z)):A.vnode.el&&se&&(se.transition=A.vnode.transition,Ie(se,A,L,z)),X&&Un(X,L),Un(()=>{A.isUnmounted=!0},L)},re=(A,L,z,Y=!1,q=!1,ne=0)=>{for(let se=ne;se<A.length;se++)Ie(A[se],L,z,Y,q)},me=A=>{if(A.shapeFlag&6)return me(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();let L=d(A.anchor||A.el),z=L&&L[bE];return z?d(z):L},Te=!1,ze=(A,L,z)=>{let Y;A==null?L._vnode&&(Ie(L._vnode,null,null,!0),Y=L._vnode.component):_(L._vnode||null,A,L,null,null,null,z),L._vnode=A,Te||(Te=!0,Qv(Y),od(),Te=!1)},Oe={p:_,um:Ie,m:we,r:gt,mt:k,mc:M,pc:W,pbc:F,n:me,o:t},We,pt;return e&&([We,pt]=e(Oe)),{render:ze,hydrate:We,createApp:AA(ze,We)}}function gg({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Yo({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function jE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function kg(t,e,n=!1){let i=t.children,s=e.children;if(Ve(i)&&Ve(s))for(let r=0;r<i.length;r++){let o=i[r],a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ar(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&kg(o,a)),a.type===ro&&(a.patchFlag===-1&&(a=s[r]=Ar(a)),a.el=o.el),a.type===Tn&&!a.el&&(a.el=o.el)}}function zA(t){let e=t.slice(),n=[0],i,s,r,o,a,l=t.length;for(i=0;i<l;i++){let c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function ZE(t){let e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ZE(e)}function hd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function QE(t){if(t.placeholder)return t.placeholder;let e=t.component;return e?QE(e.subTree):null}var dd=t=>t.__isSuspense,Tg=0,GA={name:"Suspense",__isSuspense:!0,process(t,e,n,i,s,r,o,a,l,c){if(t==null)XA(e,n,i,s,r,o,a,l,c);else{if(r&&r.deps>0&&!t.suspense.isInFallback&&!r.isHydrating){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}$A(t,e,n,i,s,o,a,l,c)}},hydrate:qA,normalize:YA},WA=GA;function Dc(t,e){let n=t.props&&t.props[e];ut(n)&&n()}function XA(t,e,n,i,s,r,o,a,l){let{p:c,o:{createElement:u}}=l,h=u("div"),d=t.suspense=ex(t,s,i,e,h,n,r,o,a,l);c(null,d.pendingBranch=t.ssContent,h,null,i,d,r,o),d.deps>0?(Dc(t,"onPending"),Dc(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,r,o),Ka(d,t.ssFallback)):d.resolve(!1,!0)}function $A(t,e,n,i,s,r,o,a,{p:l,um:c,o:{createElement:u}}){let h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;let d=e.ssContent,f=e.ssFallback,{activeBranch:p,pendingBranch:_,isInFallback:g,isHydrating:m}=h;if(_)h.pendingBranch=d,Ns(_,d)?(h.deps++,l(_,d,m?n:h.hiddenContainer,null,s,h,r,o,a),h.deps--,h.deps<=0?h.resolve():g&&!m&&!h.isFallbackMountPending&&(l(p,f,n,i,s,null,r,o,a),Ka(h,f))):(h.pendingId=Tg++,m?(h.isHydrating=!1,h.activeBranch=_):c(_,s,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),g?(l(null,d,h.hiddenContainer,null,s,h,r,o,a),h.deps<=0?h.resolve():h.isFallbackMountPending||(l(p,f,n,i,s,null,r,o,a),Ka(h,f))):p&&Ns(p,d)?(l(p,d,n,i,s,h,r,o,a),h.resolve(!0)):(l(null,d,h.hiddenContainer,null,s,h,r,o,a),h.deps<=0&&h.resolve()));else if(p&&Ns(p,d))l(p,d,n,i,s,h,r,o,a),Ka(h,d);else if(Dc(e,"onPending"),h.pendingBranch=d,d.shapeFlag&512?h.pendingId=d.component.suspenseId:h.pendingId=Tg++,l(null,d,h.hiddenContainer,null,s,h,r,o,a),h.deps<=0)h.resolve();else{let{timeout:x,pendingId:E}=h;x>0?setTimeout(()=>{h.pendingId===E&&h.fallback(f)},x):x===0&&h.fallback(f)}}function ex(t,e,n,i,s,r,o,a,l,c,u=!1){let{p:h,m:d,um:f,n:p,o:{parentNode:_,remove:g}}=c,m,x=KA(t);x&&e&&e.pendingBranch&&(m=e.pendingId,e.deps++);let E=t.props?ka(t.props.timeout):void 0,y=r,S={vnode:t,parent:e,parentComponent:n,namespace:o,container:i,hiddenContainer:s,deps:0,pendingId:Tg++,timeout:typeof E=="number"?E:-1,activeBranch:null,isFallbackMountPending:!1,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(T=!1,R=!1){let{vnode:v,activeBranch:M,pendingBranch:w,pendingId:F,effects:U,parentComponent:H,container:V,isInFallback:k}=S,G=!1;if(S.isHydrating)S.isHydrating=!1;else if(!T){G=M&&w.transition&&w.transition.mode==="out-in";let W=!1;G&&(M.transition.afterLeave=()=>{F===S.pendingId&&(d(w,V,r===y&&!W?p(M):r,0),Ja(U),k&&v.ssFallback&&(v.ssFallback.el=null))}),M&&!S.isFallbackMountPending&&(_(M.el)===V&&(r=p(M),W=!0),f(M,H,S,!0),!G&&k&&v.ssFallback&&Un(()=>v.ssFallback.el=null,S)),G||d(w,V,r,0)}S.isFallbackMountPending=!1,Ka(S,w),S.pendingBranch=null,S.isInFallback=!1;let K=S.parent,te=!1;for(;K;){if(K.pendingBranch){for(let W=0;W<U.length;W++)K.effects.push(U[W]);te=!0;break}K=K.parent}!te&&!G&&Ja(U),S.effects=[],x&&e&&e.pendingBranch&&m===e.pendingId&&(m=void 0,e.deps--,e.deps===0&&!R&&e.resolve()),Dc(v,"onResolve")},fallback(T){if(!S.pendingBranch)return;let{vnode:R,activeBranch:v,parentComponent:M,container:w,namespace:F}=S;Dc(R,"onFallback");let U=p(v),H=()=>{if(S.isFallbackMountPending=!1,!S.isInFallback)return;let k=S.vnode.ssFallback;h(null,k,w,U,M,null,F,a,l),Ka(S,k)},V=T.transition&&T.transition.mode==="out-in";V&&(S.isFallbackMountPending=!0,v.transition.afterLeave=H),S.isInFallback=!0,f(v,M,null,!0),V||H()},move(T,R,v){S.activeBranch&&d(S.activeBranch,T,R,v),S.container=T},next(){return S.activeBranch&&p(S.activeBranch)},registerDep(T,R,v){let M=!!S.pendingBranch;M&&S.deps++;let w=T.vnode.el;T.asyncDep.catch(F=>{ia(F,T,0)}).then(F=>{if(T.isUnmounted||S.isUnmounted||S.pendingId!==T.suspenseId)return;if(Fc(),w&&!T.scope.active){M&&--S.deps===0&&S.resolve();return}T.asyncResolved=!0;let{vnode:U}=T;Mg(T,F,!1),w&&(U.el=w);let H=!w&&T.subTree.el;R(T,U,_(w||T.subTree.el),w?null:p(T.subTree),S,o,v),H&&(U.placeholder=null,g(H)),wd(T,U.el),M&&--S.deps===0&&S.resolve()})},unmount(T,R){S.isUnmounted=!0,S.activeBranch&&f(S.activeBranch,n,T,R),S.pendingBranch&&f(S.pendingBranch,n,T,R)}};return S}function qA(t,e,n,i,s,r,o,a,l){let c=e.suspense=ex(e,i,n,t.parentNode,document.createElement("div"),null,s,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(!1,!0),u}function YA(t){let{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=dE(i?n.default:n),t.ssFallback=i?dE(n.fallback):mn(Tn)}function dE(t){let e;if(ut(t)){let n=ea&&t._c;n&&(t._d=!1,Lc()),t=t(),n&&(t._d=!0,e=mi,Ad())}return Ve(t)&&(t=IA(t)),t=Fi(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function tx(t,e){e&&e.pendingBranch?Ve(t)?e.effects.push(...t):e.effects.push(t):Ja(t)}function Ka(t,e){t.activeBranch=e;let{vnode:n,parentComponent:i}=t,s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,i&&i.subTree===n&&(i.vnode.el=s,wd(i,s))}function KA(t){let e=t.props&&t.props.suspensible;return e!=null&&e!==!1}var ei=Symbol.for("v-fgt"),ro=Symbol.for("v-txt"),Tn=Symbol.for("v-cmt"),Cr=Symbol.for("v-stc"),Nr=[],mi=null;function Lc(t=!1){Nr.push(mi=t?null:[])}function Ad(){Nr.pop(),mi=Nr[Nr.length-1]||null}var ea=1;function Uc(t,e=!1){ea+=t,t<0&&mi&&e&&(mi.hasOnce=!0)}function nx(t){return t.dynamicChildren=ea>0?mi||Qr:null,Ad(),ea>0&&mi&&mi.push(t),t}function JA(t,e,n,i,s,r){return nx(Hg(t,e,n,i,s,r,!0))}function fd(t,e,n,i,s){return nx(mn(t,e,n,i,s,!0))}function Ir(t){return t?t.__v_isVNode===!0:!1}function Ns(t,e){return t.type===e.type&&t.key===e.key}var jA;function ZA(t){jA=t}var ix=({key:t})=>t??null,sd=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ft(t)||vn(t)||ut(t)?{i:ai,r:t,k:e,f:!!n}:t:null);function Hg(t,e=null,n=null,i=0,s=null,r=t===ei?0:1,o=!1,a=!1){let l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ix(e),ref:e&&sd(e),scopeId:yd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ai};return a?(pd(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ft(n)?8:16),ea>0&&!o&&mi&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&mi.push(l),l}var mn=QA;function QA(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===LE)&&(t=Tn),Ir(t)){let a=tr(t,e,!0);return n&&pd(a,n),ea>0&&!r&&mi&&(a.shapeFlag&6?mi[mi.indexOf(t)]=a:mi.push(a)),a.patchFlag=-2,a}if(aR(t)&&(t=t.__vccOpts),e){e=sx(e);let{class:a,style:l}=e;a&&!ft(a)&&(e.class=Go(a)),Lt(l)&&($o(l)&&!Ve(l)&&(l=yt({},l)),e.style=zo(l))}let o=ft(t)?1:dd(t)?128:vd(t)?64:Lt(t)?4:ut(t)?2:0;return Hg(t,e,n,i,s,o,r,!0)}function sx(t){return t?$o(t)||WE(t)?yt({},t):t:null}function tr(t,e,n=!1,i=!1){let{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?ox(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ix(c),ref:e&&e.ref?n&&r?Ve(r)?r.concat(sd(e)):[r,sd(e)]:sd(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ei?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&tr(t.ssContent),ssFallback:t.ssFallback&&tr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce,cacheIndex:t.cacheIndex};return l&&i&&er(u,l.clone(u)),u}function zg(t=" ",e=0){return mn(ro,null,t,e)}function eR(t,e){let n=mn(Cr,null,t);return n.staticCount=e,n}function rx(t="",e=!1){return e?(Lc(),fd(Tn,null,t)):mn(Tn,null,t)}function Fi(t){return t==null||typeof t=="boolean"?mn(Tn):Ve(t)?mn(ei,null,t.slice()):Ir(t)?Ar(t):mn(ro,null,String(t))}function Ar(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:tr(t)}function pd(t,e){let n=0,{shapeFlag:i}=t;if(e==null)e=null;else if(Ve(e))n=16;else if(typeof e=="object")if(i&65){let s=e.default;s&&(s._c&&(s._d=!1),pd(t,s()),s._c&&(s._d=!0));return}else{n=32;let s=e._;!s&&!WE(e)?e._ctx=ai:s===3&&ai&&(ai.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(ut(e)){if(i&65){pd(t,{default:e});return}e={default:e,_ctx:ai},n=32}else e=String(e),i&64?(n=16,e=[zg(e)]):n=8;t.children=e,t.shapeFlag|=n}function ox(...t){let e={};for(let n=0;n<t.length;n++){let i=t[n];for(let s in i)if(s==="class")e.class!==i.class&&(e.class=Go([e.class,i.class]));else if(s==="style")e.style=zo([e.style,i.style]);else if(Ys(s)){let r=e[s],o=i[s];o&&r!==o&&!(Ve(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Ua(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function Ui(t,e,n,i=null){Vi(t,e,7,[n,i])}var tR=VE(),nR=0;function ax(t,e,n){let i=t.type,s=(e?e.appContext:t.appContext)||tR,r={uid:nR++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Xo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$E(i,s),emitsOptions:kE(i,s),emit:null,emitted:null,propsDefaults:bt,inheritAttrs:i.inheritAttrs,ctx:bt,data:bt,props:bt,attrs:bt,slots:bt,refs:bt,setupState:bt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=CA.bind(null,r),t.ce&&t.ce(r),r}var oi=null,gi=()=>oi||ai,md,oo;{let t=mc(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};md=e("__VUE_INSTANCE_SETTERS__",n=>oi=n),oo=e("__VUE_SSR_SETTERS__",n=>ta=n)}var Qa=t=>{let e=oi;return md(t),t.scope.on(),()=>{t.scope.off(),md(e)}},Fc=()=>{oi&&oi.scope.off(),md(null)};function lx(t){return t.vnode.shapeFlag&4}var ta=!1;function cx(t,e=!1,n=!1){e&&oo(e);let{props:i,children:s}=t.vnode,r=lx(t);LA(t,i,r,e),BA(t,s,n||e);let o=r?iR(t,e):void 0;return e&&oo(!1),o}function iR(t,e){let n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Eg);let{setup:i}=n;if(i){fs();let s=t.setupContext=i.length>1?dx(t):null,r=Qa(t),o=na(i,t,0,[t.props,s]),a=Oh(o);if(ps(),r(),(a||t.sp)&&!Rr(t)&&Ng(t),a){if(o.then(Fc,Fc),e)return o.then(l=>{oo(!0);try{Mg(t,l,e)}finally{oo(!1)}}).catch(l=>{ia(l,t,0)});t.asyncDep=o}else Mg(t,o,e)}else hx(t,e)}function Mg(t,e,n){ut(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Lt(e)&&(t.setupState=Tc(e)),hx(t,n)}var gd,wg;function Gg(t){gd=t,wg=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,aA))}}var ux=()=>!gd;function hx(t,e,n){let i=t.type;if(!t.render){if(!e&&gd&&!i.render){let s=i.template||Lg(t).template;if(s){let{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=yt(yt({isCustomElement:r,delimiters:a},o),l);i.render=gd(s,c)}}t.render=i.render||Sn,wg&&wg(t)}{let s=Qa(t);fs();try{xA(t)}finally{ps(),s()}}}var sR={get(t,e){return ri(t,"get",""),t[e]}};function dx(t){let e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,sR),slots:t.slots,emit:t.emit,expose:e}}function zc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Tc(Yh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Nc)return Nc[n](t)},has(e,n){return n in e||n in Nc}})):t.proxy}var rR=/(?:^|[-_])\w/g,oR=t=>t.replace(rR,e=>e.toUpperCase()).replace(/[-_]/g,"");function _d(t,e=!0){return ut(t)?t.displayName||t.name:t.name||e&&t.__name}function fx(t,e,n=!1){let i=_d(e);if(!i&&e.__file){let s=e.__file.match(/([^/\\]+)\.\w+$/);s&&(i=s[1])}if(!i&&t){let s=r=>{for(let o in r)if(r[o]===e)return o};i=s(t.components)||t.parent&&s(t.parent.type.components)||s(t.appContext.components)}return i?oR(i):n?"App":"Anonymous"}function aR(t){return ut(t)&&"__vccOpts"in t}var ra=(t,e)=>qv(t,e,ta);function Wg(t,e,n){try{Uc(-1);let i=arguments.length;return i===2?Lt(e)&&!Ve(e)?Ir(e)?mn(t,null,[e]):mn(t,e):mn(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ir(n)&&(n=[n]),mn(t,e,n))}finally{Uc(1)}}function px(){return;function r(h){let d=[];h.type.props&&h.props&&d.push(o("props",wt(h.props))),h.setupState!==bt&&d.push(o("setup",h.setupState)),h.data!==bt&&d.push(o("data",wt(h.data)));let f=l(h,"computed");f&&d.push(o("computed",f));let p=l(h,"inject");return p&&d.push(o("injected",p)),d.push(["div",{},["span",{style:i.style+";opacity:0.66"},"$ (internal): "],["object",{object:h}]]),d}function o(h,d){return d=yt({},d),Object.keys(d).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},h],["div",{style:"padding-left:1.25em"},...Object.keys(d).map(f=>["div",{},["span",i,f+": "],a(d[f],!1)])]]:["span",{}]}function a(h,d=!0){return typeof h=="number"?["span",e,h]:typeof h=="string"?["span",n,JSON.stringify(h)]:typeof h=="boolean"?["span",i,h]:Lt(h)?["object",{object:d?wt(h):h}]:["span",n,String(h)]}function l(h,d){let f=h.type;if(ut(f))return;let p={};for(let _ in h.ctx)c(f,_,d)&&(p[_]=h.ctx[_]);return p}function c(h,d,f){let p=h[f];if(Ve(p)&&p.includes(d)||Lt(p)&&d in p||h.extends&&c(h.extends,d,f)||h.mixins&&h.mixins.some(_=>c(_,d,f)))return!0}function u(h){return Wn(h)?"ShallowRef":h.effect?"ComputedRef":"Ref"}}function lR(t,e,n,i){let s=n[i];if(s&&mx(s,t))return s;let r=e();return r.memo=t.slice(),r.cacheIndex=i,n[i]=r}function mx(t,e){let n=t.memo;if(n.length!=e.length)return!1;for(let i=0;i<n.length;i++)if(Ln(n[i],e[i]))return!1;return ea>0&&mi&&mi.push(t),!0}var gx="3.5.43",Rd=Sn,cR=fw,uR=Xa,hR=_E,dR={createComponentInstance:ax,setupComponent:cx,renderComponentRoot:id,setCurrentRenderingInstance:Pc,isVNode:Ir,normalizeVNode:Fi,getComponentPublicInstance:zc,ensureValidVNode:Dg,pushWarningContext:rw,popWarningContext:ow},fR=dR,pR=null,mR=null,gR=null;var Kg,_x=typeof window<"u"&&window.trustedTypes;if(_x)try{Kg=_x.createPolicy("vue",{createHTML:t=>t})}catch{}var Fx=Kg?t=>Kg.createHTML(t):t=>t,_R="http://www.w3.org/2000/svg",yR="http://www.w3.org/1998/Math/MathML",Or=typeof document<"u"?document:null,yx=Or&&Or.createElement("template"),Vx={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{let e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{let s=e==="svg"?Or.createElementNS(_R,t):e==="mathml"?Or.createElementNS(yR,t):n?Or.createElement(t,{is:n}):Or.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Or.createTextNode(t),createComment:t=>Or.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Or.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){let o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{yx.innerHTML=Fx(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);let a=yx.content;if(i==="svg"||i==="mathml"){let l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},lo="transition",Gc="animation",el=Symbol("_vtc"),Bx={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},kx=yt({},xd,Bx),vR=t=>(t.displayName="Transition",t.props=kx,t),ER=vR((t,{slots:e})=>Wg(Cg,Hx(t),e)),oa=(t,e=[])=>{Ve(t)?t.forEach(n=>n(...e)):t&&t(...e)},vx=t=>t?Ve(t)?t.some(e=>e.length>1):t.length>1:!1;function Hx(t){let e={};for(let U in t)U in Bx||(e[U]=t[U]);if(t.css===!1)return e;let{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,p=xR(s),_=p&&p[0],g=p&&p[1],{onBeforeEnter:m,onEnter:x,onEnterCancelled:E,onLeave:y,onLeaveCancelled:S,onBeforeAppear:T=m,onAppear:R=x,onAppearCancelled:v=E}=e,M=(U,H,V,k)=>{U._enterCancelled=k,co(U,H?u:a),co(U,H?c:o),V&&V()},w=(U,H)=>{U._isLeaving=!1,co(U,h),co(U,f),co(U,d),H&&H()},F=U=>(H,V)=>{let k=U?R:x,G=()=>M(H,U,V);oa(k,[H,G]),Ex(()=>{co(H,U?l:r),nr(H,U?u:a),vx(k)||xx(H,i,_,G)})};return yt(e,{onBeforeEnter(U){oa(m,[U]),nr(U,r),nr(U,o)},onBeforeAppear(U){oa(T,[U]),nr(U,l),nr(U,c)},onEnter:F(!1),onAppear:F(!0),onLeave(U,H){U._isLeaving=!0;let V=()=>w(U,H);nr(U,h),U._enterCancelled?(nr(U,d),Jg(U)):(Jg(U),nr(U,d)),Ex(()=>{U._isLeaving&&(co(U,h),nr(U,f),vx(y)||xx(U,i,g,V))}),oa(y,[U,V])},onEnterCancelled(U){M(U,!1,void 0,!0),oa(E,[U])},onAppearCancelled(U){M(U,!0,void 0,!0),oa(v,[U])},onLeaveCancelled(U){w(U),oa(S,[U])}})}function xR(t){if(t==null)return null;if(Lt(t))return[Xg(t.enter),Xg(t.leave)];{let e=Xg(t);return[e,e]}}function Xg(t){return ka(t)}function nr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[el]||(t[el]=new Set)).add(e)}function co(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));let n=t[el];n&&(n.delete(e),n.size||(t[el]=void 0))}function Ex(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}var SR=0;function xx(t,e,n,i){let s=t._endId=++SR,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);let{type:o,timeout:a,propCount:l}=zx(t,e);if(!o)return i();let c=o+"end",u=0,h=()=>{t.removeEventListener(c,d),r()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function zx(t,e){let n=window.getComputedStyle(t),i=p=>(n[p]||"").split(", "),s=i(`${lo}Delay`),r=i(`${lo}Duration`),o=Sx(s,r),a=i(`${Gc}Delay`),l=i(`${Gc}Duration`),c=Sx(a,l),u=null,h=0,d=0;e===lo?o>0&&(u=lo,h=o,d=r.length):e===Gc?c>0&&(u=Gc,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?lo:Gc:null,d=u?u===lo?r.length:l.length:0);let f=u===lo&&/\b(?:transform|all)(?:,|$)/.test(i(`${lo}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Sx(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>bx(n)+bx(t[i])))}function bx(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Jg(t){return(t?t.ownerDocument:document).body.offsetHeight}function bR(t,e,n){let i=t[el];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}var Pd=Symbol("_vod"),Zg=Symbol("_vsh"),Gx={name:"show",beforeMount(t,{value:e},{transition:n}){t[Pd]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Wc(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Wc(t,!0),i.enter(t)):i.leave(t,()=>{Wc(t,!1)}):Wc(t,e))},beforeUnmount(t,{value:e}){Wc(t,e)}};function Wc(t,e){t.style.display=e?t[Pd]:"none",t[Zg]=!e}function TR(){Gx.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}var Wx=Symbol("");function MR(t){let e=gi();if(!e)return;let n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>Od(r,s))},i=()=>{let s=t(e.proxy);e.ce?Od(e.ce,s):jg(e.subTree,s),n(s)};Td(()=>{Ja(i)}),ao(()=>{jo(i,Sn,{flush:"post"});let s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),Za(()=>s.disconnect())})}function jg(t,e){if(t.shapeFlag&128){let n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{jg(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Od(t.el,e);else if(t.type===ei)t.children.forEach(n=>jg(n,e));else if(t.type===Cr){let{el:n,anchor:i}=t;for(;n&&(Od(n,e),n!==i);)n=n.nextSibling}}function Od(t,e){if(t.nodeType===1){let n=t.style,i="";for(let s in e){let r=Ym(e[s]);n.setProperty(`--${s}`,r),i+=`--${s}: ${r};`}n[Wx]=i}}var wR=/(?:^|;)\s*display\s*:/;function AR(t,e,n){let i=t.style,s=ft(n),r=!1;if(n&&!s){if(e)if(ft(e))for(let o of e.split(";")){let a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Xc(i,a,"")}else for(let o in e)n[o]==null&&Xc(i,o,"");for(let o in n){o==="display"&&(r=!0);let a=n[o];a!=null?CR(t,o,!ft(e)&&e?e[o]:void 0,a)||Xc(i,o,a):Xc(i,o,"")}}else if(s){if(e!==n){let o=i[Wx];o&&(n+=";"+o),i.cssText=n,r=wR.test(n)}}else e&&t.removeAttribute("style");Pd in t&&(t[Pd]=r?i.display:"",t[Zg]&&(i.display="none"))}var Cd=/\s*!important$/;function Xc(t,e,n){if(Ve(n))n.forEach(i=>Xc(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))Cd.test(n)?t.setProperty(e,n.replace(Cd,""),"important"):t.setProperty(e,n);else{let i=RR(t,e);Cd.test(n)?t.setProperty(pi(i),n.replace(Cd,""),"important"):t[i]=n}}var Tx=["Webkit","Moz","ms"],$g={};function RR(t,e){let n=$g[e];if(n)return n;let i=qt(e);if(i!=="filter"&&i in t)return $g[e]=i;i=ds(i);for(let s=0;s<Tx.length;s++){let r=Tx[s]+i;if(r in t)return $g[e]=r}return e}function CR(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&ft(i)&&n===i}var Mx="http://www.w3.org/1999/xlink";function wx(t,e,n,i,s,r=vv(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Mx,e.slice(6,e.length)):t.setAttributeNS(Mx,e,n):n==null||r&&!Uh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Dn(n)?String(n):n)}function Ax(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Fx(n):n);return}let r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){let a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){let a=typeof t[e];a==="boolean"?n=Uh(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Dr(t,e,n,i){t.addEventListener(e,n,i)}function NR(t,e,n,i){t.removeEventListener(e,n,i)}var Rx=Symbol("_vei");function IR(t,e,n,i,s=null){let r=t[Rx]||(t[Rx]={}),o=r[e];if(i&&o)o.value=i;else{let[a,l]=DR(e);if(i){let c=r[e]=FR(i,s);Dr(t,a,c,l)}else o&&(NR(t,a,o,l),r[e]=void 0)}}var PR=/(Once|Passive|Capture)$/,OR=/^on:?(?:Once|Passive|Capture)$/;function DR(t){let e,n;for(;(n=t.match(PR))&&!OR.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):pi(t.slice(2)),e]}var qg=0,LR=Promise.resolve(),UR=()=>qg||(LR.then(()=>qg=0),qg=Date.now());function FR(t,e){let n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;let s=n.value;if(Ve(s)){let r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};let o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){let c=o[l];c&&Vi(c,e,5,a)}}else Vi(s,e,5,[i])};return n.value=t,n.attached=UR(),n}var Cx=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Xx=(t,e,n,i,s,r)=>{let o=s==="svg";e==="class"?bR(t,i,o):e==="style"?AR(t,n,i):Ys(e)?Ua(e)||IR(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):VR(t,e,i,o))?(Ax(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&wx(t,e,i,o,r,e!=="value")):t._isVueCE&&(BR(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!ft(i)))?Ax(t,qt(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),wx(t,e,i,o))};function VR(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Cx(e)&&ut(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){let s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Cx(e)&&ft(n)?!1:e in t}function BR(t,e){let n=t._def.props;if(!n)return!1;let i=qt(e);return Array.isArray(n)?n.some(s=>qt(s)===i):Object.keys(n).some(s=>qt(s)===i)}var Nx={};function $x(t,e,n){let i=Sd(t,e);Va(i)&&(i=yt({},i,e));class s extends Dd{constructor(o){super(i,o,n)}}return s.def=i,s}var kR=((t,e)=>$x(t,e,rS)),HR=typeof HTMLElement<"u"?HTMLElement:class{},Dd=class t extends HR{constructor(e,n={},i=qc){super(),this._def=e,this._props=n,this._createApp=i,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._patching=!1,this._dirty=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._styleAnchors=new WeakMap,this._ob=null,this.shadowRoot&&i!==qc?this._root=this.shadowRoot:e.shadowRoot!==!1?(this.attachShadow(yt({},e.shadowRootOptions,{mode:"open"})),this._root=this.shadowRoot):this._root=this}connectedCallback(){if(!this.isConnected)return;!this.shadowRoot&&!this._resolved&&this._parseSlots(),this._connected=!0;let e=this;for(;e=e&&(e.assignedSlot||e.parentNode||e.host);)if(e instanceof t){this._parent=e;break}this._instance||(this._resolved?this._mount(this._def):e&&e._pendingResolve?this._pendingResolve=e._pendingResolve.then(()=>{if(this._pendingResolve=void 0,this.isConnected)return this._resolveDef()}):this._resolveDef())}_setParent(e=this._parent){e&&(this._instance.parent=e._instance,this._inheritParentContext(e))}_inheritParentContext(e=this._parent){e&&this._app&&Object.setPrototypeOf(this._app._context.provides,e._instance.provides)}disconnectedCallback(){this._connected=!1,sa(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null,this._teleportTargets&&(this._teleportTargets.clear(),this._teleportTargets=void 0))})}_processMutations(e){for(let n of e)this._setAttr(n.attributeName)}_resolveDef(){if(this._pendingResolve)return this._pendingResolve;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);this._ob=new MutationObserver(this._processMutations.bind(this)),this._ob.observe(this,{attributes:!0});let e=(i,s=!1)=>{this._resolved=!0,this._pendingResolve=void 0;let{props:r,styles:o}=i,a;if(r&&!Ve(r))for(let l in r){let c=r[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=ka(this._props[l])),(a||(a=Object.create(null)))[qt(l)]=!0)}this._numberProps=a,this._resolveProps(i),this.shadowRoot&&this._applyStyles(o),this._mount(i)},n=this._def.__asyncLoader;if(n)return this._pendingResolve=n().then(i=>{i.configureApp=this._def.configureApp,e(this._def=i,!0)}),this._pendingResolve;e(this._def)}_mount(e){this._app=this._createApp(e),this._inheritParentContext(),e.configureApp&&e.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);let n=this._instance&&this._instance.exposed;if(n)for(let i in n)$t(this,i)||Object.defineProperty(this,i,{get:()=>qo(n[i])})}_resolveProps(e){let{props:n}=e,i=Ve(n)?n:Object.keys(n||{});for(let s of Object.keys(this))s[0]!=="_"&&i.includes(s)&&this._setProp(s,this[s]);for(let s of i.map(qt))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(r){this._setProp(s,r,!0,!this._patching)}})}_setAttr(e){if(e.startsWith("data-v-"))return;let n=this.hasAttribute(e),i=n?this.getAttribute(e):Nx,s=qt(e);n&&this._numberProps&&this._numberProps[s]&&(i=ka(i)),this._setProp(s,i,!1,!0)}_getProp(e){return this._props[e]}_setProp(e,n,i=!0,s=!1){if(n!==this._props[e]&&(this._dirty=!0,n===Nx?delete this._props[e]:(this._props[e]=n,e==="key"&&this._app&&(this._app._ceVNode.key=n)),s&&this._instance&&this._update(),i)){let r=this._ob;r&&(this._processMutations(r.takeRecords()),r.disconnect()),n===!0?this.setAttribute(pi(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(pi(e),n+""):n||this.removeAttribute(pi(e)),r&&r.observe(this,{attributes:!0})}}_update(){let e=this._createVNode();this._app&&(e.appContext=this._app._context),sS(e,this._root)}_createVNode(){let e={};this.shadowRoot||(e.onVnodeMounted=e.onVnodeUpdated=this._renderSlots.bind(this));let n=mn(this._def,yt(e,this._props));return this._instance||(n.ce=i=>{this._instance=i,i.ce=this,i.isCE=!0;let s=(r,o)=>{this.dispatchEvent(new CustomEvent(r,Va(o[0])?yt({detail:o},o[0]):{detail:o}))};i.emit=(r,...o)=>{s(r,o),pi(r)!==r&&s(pi(r),o)},this._setParent()}),n}_applyStyles(e,n,i){if(!e)return;if(n){if(n===this._def||this._styleChildren.has(n))return;this._styleChildren.add(n)}let s=this._nonce,r=this.shadowRoot,o=i?this._getStyleAnchor(i)||this._getStyleAnchor(this._def):this._getRootStyleInsertionAnchor(r),a=null;for(let l=e.length-1;l>=0;l--){let c=document.createElement("style");s&&c.setAttribute("nonce",s),c.textContent=e[l],r.insertBefore(c,a||o),a=c,l===0&&(i||this._styleAnchors.set(this._def,c),n&&this._styleAnchors.set(n,c))}}_getStyleAnchor(e){if(!e)return null;let n=this._styleAnchors.get(e);return n&&n.parentNode===this.shadowRoot?n:(n&&this._styleAnchors.delete(e),null)}_getRootStyleInsertionAnchor(e){for(let n=0;n<e.childNodes.length;n++){let i=e.childNodes[n];if(!(i instanceof HTMLStyleElement))return i}return null}_parseSlots(){let e=this._slots={},n;for(;n=this.firstChild;){let i=n.nodeType===1&&n.getAttribute("slot")||"default";(e[i]||(e[i]=[])).push(n),this.removeChild(n)}}_renderSlots(){let e=this._getSlots(),n=this._instance.type.__scopeId;for(let i=0;i<e.length;i++){let s=e[i],r=s.getAttribute("name")||"default",o=this._slots[r],a=s.parentNode;if(o)for(let l of o){if(n&&l.nodeType===1){let c=n+"-s",u=document.createTreeWalker(l,1);l.setAttribute(c,"");let h;for(;h=u.nextNode();)h.setAttribute(c,"")}a.insertBefore(l,s)}else for(;s.firstChild;)a.insertBefore(s.firstChild,s);a.removeChild(s)}}_getSlots(){let e=[this];this._teleportTargets&&e.push(...this._teleportTargets);let n=new Set;for(let i of e){let s=i.querySelectorAll("slot");for(let r=0;r<s.length;r++)n.add(s[r])}return Array.from(n)}_injectChildStyle(e,n){this._applyStyles(e.styles,e,n)}_beginPatch(){this._patching=!0,this._dirty=!1}_endPatch(){this._patching=!1,this._dirty&&this._instance&&this._update()}_hasShadowRoot(){return this._def.shadowRoot!==!1}_removeChildStyle(e){}};function qx(t){let e=gi(),n=e&&e.ce;return n||null}function zR(){let t=qx();return t&&t.shadowRoot}function GR(t="$style"){{let e=gi();if(!e)return bt;let n=e.type.__cssModules;if(!n)return bt;let i=n[t];return i||bt}}var Yx=new WeakMap,Kx=new WeakMap,Ld=Symbol("_moveCb"),Ix=Symbol("_enterCb"),WR=t=>(delete t.props.mode,t),XR=WR({name:"TransitionGroup",props:yt({},kx,{tag:String,moveClass:String}),setup(t,{slots:e}){let n=gi(),i=Ed(),s,r;return Hc(()=>{if(!s.length)return;let o=t.moveClass||`${t.name||"v"}-move`;if(!JR(s[0].el,n.vnode.el,o)){s=[];return}s.forEach(qR),s.forEach(YR);let a=s.filter(KR);Jg(n.vnode.el),a.forEach(l=>{let c=l.el,u=c.style;nr(c,o),u.transform=u.webkitTransform=u.transitionDuration="";let h=c[Ld]=d=>{d&&d.target!==c||(!d||d.propertyName.endsWith("transform"))&&(c.removeEventListener("transitionend",h),c[Ld]=null,co(c,o))};c.addEventListener("transitionend",h)}),s=[]}),()=>{let o=wt(t),a=Hx(o),l=o.tag||ei;if(s=[],r)for(let c=0;c<r.length;c++){let u=r[c];u.el&&u.el instanceof Element&&!u.el[Zg]&&(s.push(u),er(u,Qo(u,a,i,n)),Yx.set(u,Jx(u.el)))}r=e.default?Bc(e.default()):[];for(let c=0;c<r.length;c++){let u=r[c];u.key!=null&&er(u,Qo(u,a,i,n))}return mn(l,null,r)}}}),$R=XR;function qR(t){let e=t.el;e[Ld]&&e[Ld](),e[Ix]&&e[Ix]()}function YR(t){Kx.set(t,Jx(t.el))}function KR(t){let e=Yx.get(t),n=Kx.get(t),i=e.left-n.left,s=e.top-n.top;if(i||s){let r=t.el,o=r.style,a=r.getBoundingClientRect(),l=1,c=1;return r.offsetWidth&&(l=a.width/r.offsetWidth),r.offsetHeight&&(c=a.height/r.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(c)||c===0)&&(c=1),Math.abs(l-1)<.01&&(l=1),Math.abs(c-1)<.01&&(c=1),o.transform=o.webkitTransform=`translate(${i/l}px,${s/c}px)`,o.transitionDuration="0s",t}}function Jx(t){let e=t.getBoundingClientRect();return{left:e.left,top:e.top}}function JR(t,e,n){let i=t.cloneNode(),s=t[el];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";let r=e.nodeType===1?e:e.parentNode;r.appendChild(i);let{hasTransform:o}=zx(i);return r.removeChild(i),o}var uo=t=>{let e=t.props["onUpdate:modelValue"]||!1;return Ve(e)?n=>to(e,n):e};function jR(t){t.target.composing=!0}function Px(t){let e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}var Ji=Symbol("_assign"),Nd=Symbol("_initialValue");function Yg(t,e,n){return e&&(t=t.trim()),n&&(t=Ba(t)),t}var Ud={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t.parentNode&&(t.type==="text"?t[Nd]=t.defaultValue.replace(/[\r\n]/g,""):t.type==="textarea"&&(t[Nd]=t.defaultValue.replace(/\r\n?/g,`
`))),t[Ji]=uo(s);let r=i||s.props&&s.props.type==="number";Dr(t,e?"change":"input",o=>{o.target.composing||t[Ji](Yg(t.value,n,r))}),(n||r)&&Dr(t,"change",()=>{t.value=Yg(t.value,n,r)}),e||(Dr(t,"compositionstart",jR),Dr(t,"compositionend",Px),Dr(t,"change",Px))},mounted(t,{value:e,modifiers:{trim:n,number:i}}){let s=e??"",r=t[Nd];delete t[Nd],r!==void 0&&(t.type==="text"||t.type==="textarea")&&t.value!==r?t[Ji](Yg(t.value,n,i)):t.value=s},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Ji]=uo(o),t.composing)return;let a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Ba(t.value):t.value,l=e??"";if(a===l)return;let c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l)}},Qg={deep:!0,created(t,e,n){t[Ji]=uo(n),Dr(t,"change",()=>{let i=t._modelValue,s=tl(t),r=t.checked,o=t[Ji];if(Ve(i)){let a=gc(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){let c=[...i];c.splice(a,1),o(c)}}else if(hs(i)){let a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Zx(t,r))})},mounted:Ox,beforeUpdate(t,e,n){t[Ji]=uo(n),Ox(t,e,n)}};function Ox(t,{value:e,oldValue:n},i){t._modelValue=e;let s;if(Ve(e))s=gc(e,i.props.value)>-1;else if(hs(e))s=e.has(i.props.value);else{if(e===n)return;s=Li(e,Zx(t,!0))}t.checked!==s&&(t.checked=s)}var e0={created(t,{value:e},n){t.checked=Li(e,n.props.value),t[Ji]=uo(n),Dr(t,"change",()=>{t[Ji](tl(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t[Ji]=uo(i),e!==n&&(t.checked=Li(e,i.props.value))}},jx={deep:!0,created(t,{value:e,modifiers:{number:n}},i){t._modelValue=e,Dr(t,"change",()=>{let s=Array.prototype.filter.call(t.options,l=>l.selected).map(l=>n?Ba(tl(l)):tl(l)),r=t.multiple,o=r?hs(t._modelValue)?new Set(s):s:s[0],a=t._pendingValue=[r,r?Ve(o)?s.slice():s:o];try{t[Ji](o)}finally{sa(()=>{t._pendingValue===a&&(t._pendingValue=void 0)})}}),t[Ji]=uo(i)},mounted(t,{value:e}){Dx(t,e)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[Ji]=uo(n)},updated(t,{value:e}){let n=t._pendingValue;t._pendingValue=void 0,(!n||n[0]!==t.multiple||!ZR(e,n[1],n[0]))&&Dx(t,e)}};function ZR(t,e,n){if(!n)return Li(t,e);if(Ve(t))return Li(t,e);if(hs(t)){if(t.size!==e.length)return!1;for(let i of e)if(!t.has(i))return!1;return!0}return!1}function Dx(t,e){let n=t.multiple,i=Ve(e);if(!(n&&!i&&!hs(e))){for(let s=0,r=t.options.length;s<r;s++){let o=t.options[s],a=tl(o);if(n)if(i){let l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=gc(e,a)>-1}else o.selected=e.has(a);else if(Li(tl(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function tl(t){return"_value"in t?t._value:t.value}function Zx(t,e){let n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}var Qx={created(t,e,n){Id(t,e,n,null,"created")},mounted(t,e,n){Id(t,e,n,null,"mounted")},beforeUpdate(t,e,n,i){Id(t,e,n,i,"beforeUpdate")},updated(t,e,n,i){Id(t,e,n,i,"updated")}};function eS(t,e){switch(t){case"SELECT":return jx;case"TEXTAREA":return Ud;default:switch(e){case"checkbox":return Qg;case"radio":return e0;default:return Ud}}}function Id(t,e,n,i,s){let o=eS(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,i)}function QR(){Ud.getSSRProps=({value:t})=>({value:t}),e0.getSSRProps=({value:t},e)=>{if(e.props&&Li(e.props.value,t))return{checked:!0}},Qg.getSSRProps=({value:t},e)=>{if(Ve(t)){if(e.props&&gc(t,e.props.value)>-1)return{checked:!0}}else if(hs(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},Qx.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;let n=eS(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}var eC=["ctrl","shift","alt","meta"],tC={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>eC.some(n=>t[`${n}Key`]&&!e.includes(n))},nC=(t,e)=>{if(!t)return t;let n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((s,...r)=>{for(let o=0;o<e.length;o++){let a=tC[e[o]];if(a&&a(s,e))return}return t(s,...r)}))},iC={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},sC=(t,e)=>{let n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=(s=>{if(!("key"in s))return;let r=pi(s.key);if(e.some(o=>o===r||iC[o]===r))return t(s)}))},tS=yt({patchProp:Xx},Vx),$c,Lx=!1;function nS(){return $c||($c=Vg(tS))}function iS(){return $c=Lx?$c:Bg(tS),Lx=!0,$c}var sS=((...t)=>{nS().render(...t)}),rC=((...t)=>{iS().hydrate(...t)}),qc=((...t)=>{let e=nS().createApp(...t),{mount:n}=e;return e.mount=i=>{let s=aS(i);if(!s)return;let r=e._component;!ut(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");let o=n(s,!1,oS(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e}),rS=((...t)=>{let e=iS().createApp(...t),{mount:n}=e;return e.mount=i=>{let s=aS(i);if(s)return n(s,!0,oS(s))},e});function oS(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function aS(t){return ft(t)?document.querySelector(t):t}var Ux=!1,oC=()=>{Ux||(Ux=!0,QR(),TR())};var Jc=Symbol(""),Kc=Symbol(""),f0=Symbol(""),Gd=Symbol(""),MS=Symbol(""),ha=Symbol(""),wS=Symbol(""),AS=Symbol(""),p0=Symbol(""),m0=Symbol(""),tu=Symbol(""),g0=Symbol(""),RS=Symbol(""),_0=Symbol(""),y0=Symbol(""),v0=Symbol(""),E0=Symbol(""),x0=Symbol(""),S0=Symbol(""),CS=Symbol(""),NS=Symbol(""),nu=Symbol(""),Wd=Symbol(""),b0=Symbol(""),T0=Symbol(""),jc=Symbol(""),iu=Symbol(""),M0=Symbol(""),s0=Symbol(""),aC=Symbol(""),r0=Symbol(""),Xd=Symbol(""),lC=Symbol(""),cC=Symbol(""),w0=Symbol(""),uC=Symbol(""),hC=Symbol(""),A0=Symbol(""),IS=Symbol(""),nl={[Jc]:"Fragment",[Kc]:"Teleport",[f0]:"Suspense",[Gd]:"KeepAlive",[MS]:"BaseTransition",[ha]:"openBlock",[wS]:"createBlock",[AS]:"createElementBlock",[p0]:"createVNode",[m0]:"createElementVNode",[tu]:"createCommentVNode",[g0]:"createTextVNode",[RS]:"createStaticVNode",[_0]:"resolveComponent",[y0]:"resolveDynamicComponent",[v0]:"resolveDirective",[E0]:"resolveFilter",[x0]:"withDirectives",[S0]:"renderList",[CS]:"renderSlot",[NS]:"createSlots",[nu]:"toDisplayString",[Wd]:"mergeProps",[b0]:"normalizeClass",[T0]:"normalizeStyle",[jc]:"normalizeProps",[iu]:"guardReactiveProps",[M0]:"toHandlers",[s0]:"camelize",[aC]:"capitalize",[r0]:"toHandlerKey",[Xd]:"setBlockTracking",[lC]:"pushScopeId",[cC]:"popScopeId",[w0]:"withCtx",[uC]:"unref",[hC]:"isRef",[A0]:"withMemo",[IS]:"isMemoSame"};function PS(t){Object.getOwnPropertySymbols(t).forEach(e=>{nl[e]=t[e]})}var Zi={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0},source:""};function dC(t,e=""){return{type:0,source:e,children:t,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:[],temps:0,codegenNode:void 0,loc:Zi}}function Zc(t,e,n,i,s,r,o,a=!1,l=!1,c=!1,u=Zi){return t&&(a?(t.helper(ha),t.helper(rl(t.inSSR,c))):t.helper(sl(t.inSSR,c)),o&&t.helper(x0)),{type:13,tag:e,props:n,children:i,patchFlag:s,dynamicProps:r,directives:o,isBlock:a,disableTracking:l,isComponent:c,loc:u}}function ca(t,e=Zi){return{type:17,loc:e,elements:t}}function ys(t,e=Zi){return{type:15,loc:e,properties:t}}function Nn(t,e){return{type:16,loc:Zi,key:ft(t)?Tt(t,!0):t,value:e}}function Tt(t,e=!1,n=Zi,i=0){return{type:4,loc:n,content:t,isStatic:e,constType:e?3:i}}function vs(t,e=Zi){return{type:8,loc:e,children:t}}function Fn(t,e=[],n=Zi){return{type:14,loc:n,callee:t,arguments:e}}function il(t,e=void 0,n=!1,i=!1,s=Zi){return{type:18,params:t,returns:e,newline:n,isSlot:i,loc:s}}function o0(t,e,n,i=!0){return{type:19,test:t,consequent:e,alternate:n,newline:i,loc:Zi}}function fC(t,e,n=!1,i=!1){return{type:20,index:t,value:e,needPauseTracking:n,inVOnce:i,needArraySpread:!1,loc:Zi}}function pC(t){return{type:21,body:t,loc:Zi}}function sl(t,e){return t||e?p0:m0}function rl(t,e){return t||e?wS:AS}function R0(t,{helper:e,removeHelper:n,inSSR:i}){t.isBlock||(t.isBlock=!0,n(sl(i,t.isComponent)),e(ha),e(rl(i,t.isComponent)))}var lS=new Uint8Array([123,123]),cS=new Uint8Array([125,125]);function uS(t){return t>=97&&t<=122||t>=65&&t<=90}function ji(t){return t===32||t===10||t===9||t===12||t===13}function ho(t){return t===47||t===62||ji(t)}function $d(t){let e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}var _i={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])},a0=class{constructor(e,n){this.stack=e,this.cbs=n,this.state=1,this.buffer="",this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=1,this.inRCDATA=!1,this.inXML=!1,this.inVPre=!1,this.newlines=[],this.mode=0,this.delimiterOpen=lS,this.delimiterClose=cS,this.delimiterIndex=-1,this.currentSequence=void 0,this.sequenceIndex=0}get inSFCRoot(){return this.mode===2&&this.stack.length===0}reset(){this.state=1,this.mode=0,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=1,this.inRCDATA=!1,this.currentSequence=void 0,this.newlines.length=0,this.delimiterOpen=lS,this.delimiterClose=cS}getPos(e){let n=1,i=e+1,s=this.newlines.length,r=-1;if(s>100){let o=-1,a=s;for(;o+1<a;){let l=o+a>>>1;this.newlines[l]<e?o=l:a=l}r=o}else for(let o=s-1;o>=0;o--)if(e>this.newlines[o]){r=o;break}return r>=0&&(n=r+2,i=e-this.newlines[r]),{column:i,line:n,offset:e}}peek(){return this.buffer.charCodeAt(this.index+1)}stateText(e){e===60?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=5,this.sectionStart=this.index):!this.inVPre&&e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e))}stateInterpolationOpen(e){if(e===this.delimiterOpen[this.delimiterIndex])if(this.delimiterIndex===this.delimiterOpen.length-1){let n=this.index+1-this.delimiterOpen.length;n>this.sectionStart&&this.cbs.ontext(this.sectionStart,n),this.state=3,this.sectionStart=n}else this.delimiterIndex++;else this.inRCDATA?(this.state=32,this.stateInRCDATA(e)):(this.state=1,this.stateText(e))}stateInterpolation(e){e===this.delimiterClose[0]&&(this.state=4,this.delimiterIndex=0,this.stateInterpolationClose(e))}stateInterpolationClose(e){e===this.delimiterClose[this.delimiterIndex]?this.delimiterIndex===this.delimiterClose.length-1?(this.cbs.oninterpolation(this.sectionStart,this.index+1),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):this.delimiterIndex++:(this.state=3,this.stateInterpolation(e))}stateSpecialStartSequence(e){let n=this.sequenceIndex===this.currentSequence.length;if(!(n?ho(e):(e|32)===this.currentSequence[this.sequenceIndex]))this.inRCDATA=!1;else if(!n){this.sequenceIndex++;return}this.sequenceIndex=0,this.state=6,this.stateInTagName(e)}stateInRCDATA(e){if(this.sequenceIndex===this.currentSequence.length){if(e===62||ji(e)){let n=this.index-this.currentSequence.length;if(this.sectionStart<n){let i=this.index;this.index=n,this.cbs.ontext(this.sectionStart,n),this.index=i}this.sectionStart=n+2,this.stateInClosingTagName(e),this.inRCDATA=!1;return}this.sequenceIndex=0}(e|32)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:this.sequenceIndex===0?this.currentSequence===_i.TitleEnd||this.currentSequence===_i.TextareaEnd&&!this.inSFCRoot?!this.inVPre&&e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e)):this.fastForwardTo(60)&&(this.sequenceIndex=1):this.sequenceIndex=+(e===60)}stateCDATASequence(e){e===_i.Cdata[this.sequenceIndex]?++this.sequenceIndex===_i.Cdata.length&&(this.state=28,this.currentSequence=_i.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=23,this.stateInDeclaration(e))}fastForwardTo(e){for(;++this.index<this.buffer.length;){let n=this.buffer.charCodeAt(this.index);if(n===10&&this.newlines.push(this.index),n===e)return!0}return this.index=this.buffer.length-1,!1}stateInCommentLike(e){e===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===_i.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index-2):this.cbs.oncomment(this.sectionStart,this.index-2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=1):this.sequenceIndex===0?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):e!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}startSpecial(e,n){this.enterRCDATA(e,n),this.state=31}enterRCDATA(e,n){this.inRCDATA=!0,this.currentSequence=e,this.sequenceIndex=n}stateBeforeTagName(e){e===33?(this.state=22,this.sectionStart=this.index+1):e===63?(this.state=24,this.sectionStart=this.index+1):uS(e)?(this.sectionStart=this.index,this.mode===0?this.state=6:this.inSFCRoot?this.state=34:this.inXML?this.state=6:e===116?this.state=30:this.state=e===115?29:6):e===47?this.state=8:(this.state=1,this.stateText(e))}stateInTagName(e){ho(e)&&this.handleTagName(e)}stateInSFCRootTagName(e){if(ho(e)){let n=this.buffer.slice(this.sectionStart,this.index);n!=="template"&&this.enterRCDATA($d("</"+n),0),this.handleTagName(e)}}handleTagName(e){this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)}stateBeforeClosingTagName(e){ji(e)||(e===62?(this.state=1,this.sectionStart=this.index+1):(this.state=uS(e)?9:27,this.sectionStart=this.index))}stateInClosingTagName(e){(e===62||ji(e))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=10,this.stateAfterClosingTagName(e))}stateAfterClosingTagName(e){e===62&&(this.state=1,this.sectionStart=this.index+1)}stateBeforeAttrName(e){e===62?(this.cbs.onopentagend(this.index),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):e===47?this.state=7:e===60&&this.peek()===47?(this.cbs.onopentagend(this.index),this.state=5,this.sectionStart=this.index):ji(e)||this.handleAttrStart(e)}handleAttrStart(e){e===118&&this.peek()===45?(this.state=13,this.sectionStart=this.index):e===46||e===58||e===64||e===35?(this.cbs.ondirname(this.index,this.index+1),this.state=14,this.sectionStart=this.index+1):(this.state=12,this.sectionStart=this.index)}stateInSelfClosingTag(e){e===62?(this.cbs.onselfclosingtag(this.index),this.state=1,this.sectionStart=this.index+1,this.inRCDATA=!1):ji(e)||(this.state=11,this.stateBeforeAttrName(e))}stateInAttrName(e){(e===61||ho(e))&&(this.cbs.onattribname(this.sectionStart,this.index),this.handleAttrNameEnd(e))}stateInDirName(e){e===61||ho(e)?(this.cbs.ondirname(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===58?(this.cbs.ondirname(this.sectionStart,this.index),this.state=14,this.sectionStart=this.index+1):e===46&&(this.cbs.ondirname(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDirArg(e){e===61||ho(e)?(this.cbs.ondirarg(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===91?this.state=15:e===46&&(this.cbs.ondirarg(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDynamicDirArg(e){e===93?this.state=14:(e===61||ho(e))&&(this.cbs.ondirarg(this.sectionStart,this.index+1),this.handleAttrNameEnd(e))}stateInDirModifier(e){e===61||ho(e)?(this.cbs.ondirmodifier(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===46&&(this.cbs.ondirmodifier(this.sectionStart,this.index),this.sectionStart=this.index+1)}handleAttrNameEnd(e){this.sectionStart=this.index,this.state=17,this.cbs.onattribnameend(this.index),this.stateAfterAttrName(e)}stateAfterAttrName(e){e===61?this.state=18:e===47||e===62?(this.cbs.onattribend(0,this.sectionStart),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)):ji(e)||(this.cbs.onattribend(0,this.sectionStart),this.handleAttrStart(e))}stateBeforeAttrValue(e){e===34?(this.state=19,this.sectionStart=this.index+1):e===39?(this.state=20,this.sectionStart=this.index+1):ji(e)||(this.sectionStart=this.index,this.state=21,this.stateInAttrValueNoQuotes(e))}handleInAttrValue(e,n){(e===n||this.fastForwardTo(n))&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(n===34?3:2,this.index+1),this.state=11)}stateInAttrValueDoubleQuotes(e){this.handleInAttrValue(e,34)}stateInAttrValueSingleQuotes(e){this.handleInAttrValue(e,39)}stateInAttrValueNoQuotes(e){ji(e)||e===62?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(1,this.index),this.state=11,this.stateBeforeAttrName(e)):(e===39||e===60||e===61||e===96)&&this.cbs.onerr(18,this.index)}stateBeforeDeclaration(e){e===91?(this.state=26,this.sequenceIndex=0):this.state=e===45?25:23}stateInDeclaration(e){(e===62||this.fastForwardTo(62))&&(this.state=1,this.sectionStart=this.index+1)}stateInProcessingInstruction(e){(e===62||this.fastForwardTo(62))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeComment(e){e===45?(this.state=28,this.currentSequence=_i.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=23}stateInSpecialComment(e){(e===62||this.fastForwardTo(62))&&(this.cbs.oncomment(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeSpecialS(e){e===_i.ScriptEnd[3]?this.startSpecial(_i.ScriptEnd,4):e===_i.StyleEnd[3]?this.startSpecial(_i.StyleEnd,4):(this.state=6,this.stateInTagName(e))}stateBeforeSpecialT(e){e===_i.TitleEnd[3]?this.startSpecial(_i.TitleEnd,4):e===_i.TextareaEnd[3]?this.startSpecial(_i.TextareaEnd,4):(this.state=6,this.stateInTagName(e))}startEntity(){}stateInEntity(){}parse(e){for(this.buffer=e;this.index<this.buffer.length;){let n=this.buffer.charCodeAt(this.index);switch(n===10&&this.state!==33&&this.newlines.push(this.index),this.state){case 1:{this.stateText(n);break}case 2:{this.stateInterpolationOpen(n);break}case 3:{this.stateInterpolation(n);break}case 4:{this.stateInterpolationClose(n);break}case 31:{this.stateSpecialStartSequence(n);break}case 32:{this.stateInRCDATA(n);break}case 26:{this.stateCDATASequence(n);break}case 19:{this.stateInAttrValueDoubleQuotes(n);break}case 12:{this.stateInAttrName(n);break}case 13:{this.stateInDirName(n);break}case 14:{this.stateInDirArg(n);break}case 15:{this.stateInDynamicDirArg(n);break}case 16:{this.stateInDirModifier(n);break}case 28:{this.stateInCommentLike(n);break}case 27:{this.stateInSpecialComment(n);break}case 11:{this.stateBeforeAttrName(n);break}case 6:{this.stateInTagName(n);break}case 34:{this.stateInSFCRootTagName(n);break}case 9:{this.stateInClosingTagName(n);break}case 5:{this.stateBeforeTagName(n);break}case 17:{this.stateAfterAttrName(n);break}case 20:{this.stateInAttrValueSingleQuotes(n);break}case 18:{this.stateBeforeAttrValue(n);break}case 8:{this.stateBeforeClosingTagName(n);break}case 10:{this.stateAfterClosingTagName(n);break}case 29:{this.stateBeforeSpecialS(n);break}case 30:{this.stateBeforeSpecialT(n);break}case 21:{this.stateInAttrValueNoQuotes(n);break}case 7:{this.stateInSelfClosingTag(n);break}case 23:{this.stateInDeclaration(n);break}case 22:{this.stateBeforeDeclaration(n);break}case 25:{this.stateBeforeComment(n);break}case 24:{this.stateInProcessingInstruction(n);break}case 33:{this.stateInEntity();break}}this.index++}this.cleanup(),this.finish()}cleanup(){this.sectionStart!==this.index&&(this.state===1||this.state===32&&this.sequenceIndex===0?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):(this.state===19||this.state===20||this.state===21)&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}finish(){this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){let e=this.buffer.length;this.sectionStart>=e||(this.state===28?this.currentSequence===_i.CdataEnd?this.cbs.oncdata(this.sectionStart,e):this.cbs.oncomment(this.sectionStart,e):this.state===6||this.state===11||this.state===18||this.state===17||this.state===12||this.state===13||this.state===14||this.state===15||this.state===16||this.state===20||this.state===19||this.state===21||this.state===9||this.cbs.ontext(this.sectionStart,e))}emitCodePoint(e,n){}};function hS(t,{compatConfig:e}){let n=e&&e[t];return t==="MODE"?n||3:n}function ua(t,e){let n=hS("MODE",e),i=hS(t,e);return n===3?i===!0:i!==!1}function ol(t,e,n,...i){return ua(t,e)}function C0(t){throw t}function OS(t){}function dn(t,e,n,i){let s=`https://vuejs.org/error-reference/#compiler-${t}`,r=new SyntaxError(String(s));return r.code=t,r.loc=e,r}var vi=t=>t.type===4&&t.isStatic;function DS(t){switch(t){case"Teleport":case"teleport":return Kc;case"Suspense":case"suspense":return f0;case"KeepAlive":case"keep-alive":return Gd;case"BaseTransition":case"base-transition":return MS}}var mC=/^$|^\d|[^\$\w\xA0-\uFFFF]/,N0=t=>!mC.test(t),LS=/[A-Za-z_$\xA0-\uFFFF]/,gC=/[\.\?\w$\xA0-\uFFFF]/,_C=/\s+[.[]\s*|\s*[.[]\s+/g,US=t=>t.type===4?t.content:t.loc.source,yC=t=>{let e=US(t).trim().replace(_C,a=>a.trim()),n=0,i=[],s=0,r=0,o=null;for(let a=0;a<e.length;a++){let l=e.charAt(a);switch(n){case 0:if(l==="[")i.push(n),n=1,s++;else if(l==="(")i.push(n),n=2,r++;else if(!(a===0?LS:gC).test(l))return!1;break;case 1:l==="'"||l==='"'||l==="`"?(i.push(n),n=3,o=l):l==="["?s++:l==="]"&&(--s||(n=i.pop()));break;case 2:if(l==="'"||l==='"'||l==="`")i.push(n),n=3,o=l;else if(l==="(")r++;else if(l===")"){if(a===e.length-1)return!1;--r||(n=i.pop())}break;case 3:l===o&&(n=i.pop(),o=null);break}}return!s&&!r};var FS=yC,vC=/^\s*(?:async\s*)?(?:\([^)]*?\)|[\w$_]+)\s*(?::[^=]+)?=>|^\s*(?:async\s+)?function(?:\s+[\w$]+)?\s*\(/,EC=t=>vC.test(US(t));var xC=EC;function ki(t,e,n=!1){for(let i=0;i<t.props.length;i++){let s=t.props[i];if(s.type===7&&(n||s.exp)&&(ft(e)?s.name===e:e.test(s.name)))return s}}function su(t,e,n=!1,i=!1){for(let s=0;s<t.props.length;s++){let r=t.props[s];if(r.type===6){if(n)continue;if(r.name===e&&(r.value||i))return r}else if(r.name==="bind"&&(r.exp||i)&&po(r.arg,e))return r}}function po(t,e){return!!(t&&vi(t)&&t.content===e)}function VS(t){return t.props.some(e=>e.type===7&&e.name==="bind"&&(!e.arg||e.arg.type!==4||!e.arg.isStatic))}function n0(t){return t.type===5||t.type===2}function dS(t){return t.type===7&&t.name==="pre"}function SC(t){return t.type===7&&t.name==="slot"}function qd(t){return t.type===1&&t.tagType===3}function Yd(t){return t.type===1&&t.tagType===2}var bC=new Set([jc,iu]);function I0(t,e=[]){if(t&&!ft(t)&&t.type===14){let n=t.callee;if(!ft(n)&&bC.has(n))return I0(t.arguments[0],e.concat(t))}return[t,e]}function Kd(t,e,n){if(t.type!==13&&TC(t,e))return;let i,s=t.type===13?t.props:t.arguments[2],r=[],o;if(s&&!ft(s)&&s.type===14){let a=I0(s);s=a[0],r=a[1],o=r[r.length-1]}if(s==null||ft(s))i=ys([e]);else if(s.type===14){let a=s.arguments[0];!ft(a)&&a.type===15?l0(e,a)||a.properties.unshift(e):s.callee===M0?i=Fn(n.helper(Wd),[ys([e]),s]):s.arguments.unshift(ys([e])),!i&&(i=s)}else s.type===15?(l0(e,s)||s.properties.unshift(e),i=s):(i=Fn(n.helper(Wd),[ys([e]),s]),o&&o.callee===iu&&(o=r[r.length-2]));t.type===13?o?o.arguments[0]=i:t.props=i:o?o.arguments[0]=i:t.arguments[2]=i}function TC(t,e){var n,i,s;if(e.key.type!==4||e.key.content!=="key")return!1;let r=t.arguments[2];if(r&&!ft(r)){let[o]=I0(r);if(o&&!ft(o)&&o.type===15&&l0(e,o))return!0}return(n=t.arguments)[2]||(n[2]="{}"),(i=t.arguments)[3]||(i[3]="undefined"),(s=t.arguments)[4]||(s[4]="undefined"),t.arguments[5]=e.value,!0}function l0(t,e){let n=!1;if(t.key.type===4){let i=t.key.content;n=e.properties.some(s=>s.key.type===4&&s.key.content===i)}return n}function Qc(t,e){return`_${e}_${t.replace(/[^\w]/g,(n,i)=>n==="-"?"_":t.charCodeAt(i).toString())}`}function MC(t){return t.type===14&&t.callee===A0?t.arguments[1].returns:t}var wC=/([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;function BS(t){for(let e=0;e<t.length;e++)if(!ji(t.charCodeAt(e)))return!1;return!0}function P0(t){return t.type===2&&BS(t.content)||t.type===12&&P0(t.content)}function O0(t){return t.type===3||P0(t)}var kS={parseMode:"base",ns:0,delimiters:["{{","}}"],getNamespace:()=>0,isVoidTag:eo,isPreTag:eo,isIgnoreNewlineTag:eo,isCustomElement:eo,onError:C0,onWarn:OS,comments:!1,prefixIdentifiers:!1},Kt=kS,eu=null,Fr="",yi=null,Ht=null,Bi="",Ur=-1,aa=-1,D0=0,fo=!1,c0=null,gn=[],Mn=new a0(gn,{onerr:Lr,ontext(t,e){Fd(li(t,e),t,e)},ontextentity(t,e,n){Fd(t,e,n)},oninterpolation(t,e){if(fo)return Fd(li(t,e),t,e);let n=t+Mn.delimiterOpen.length,i=e-Mn.delimiterClose.length;for(;ji(Fr.charCodeAt(n));)n++;for(;ji(Fr.charCodeAt(i-1));)i--;let s=li(n,i);s.includes("&")&&(s=Kt.decodeEntities(s,!1)),u0({type:5,content:kd(s,!1,Cn(n,i)),loc:Cn(t,e)})},onopentagname(t,e){let n=li(t,e);yi={type:1,tag:n,ns:Kt.getNamespace(n,gn[0],Kt.ns),tagType:0,props:[],children:[],loc:Cn(t-1,e),codegenNode:void 0}},onopentagend(t){pS(t)},onclosetag(t,e){let n=li(t,e);if(!Kt.isVoidTag(n)){let i=!1;for(let s=0;s<gn.length;s++)if(gn[s].tag.toLowerCase()===n.toLowerCase()){i=!0,s>0&&Lr(24,gn[0].loc.start.offset);for(let o=0;o<=s;o++){let a=gn.shift();Bd(a,e,o<s)}break}i||Lr(23,HS(t,60))}},onselfclosingtag(t){let e=yi.tag;yi.isSelfClosing=!0,pS(t),gn[0]&&gn[0].tag===e&&Bd(gn.shift(),t)},onattribname(t,e){Ht={type:6,name:li(t,e),nameLoc:Cn(t,e),value:void 0,loc:Cn(t)}},ondirname(t,e){let n=li(t,e),i=n==="."||n===":"?"bind":n==="@"?"on":n==="#"?"slot":n.slice(2);if(!fo&&i===""&&Lr(26,t),fo||i==="")Ht={type:6,name:n,nameLoc:Cn(t,e),value:void 0,loc:Cn(t)};else if(Ht={type:7,name:i,rawName:n,exp:void 0,arg:void 0,modifiers:n==="."?[Tt("prop")]:[],loc:Cn(t)},i==="pre"){fo=Mn.inVPre=!0,c0=yi;let s=yi.props;for(let r=0;r<s.length;r++)s[r].type===7&&(s[r]=UC(s[r]))}},ondirarg(t,e){if(t===e)return;let n=li(t,e);if(fo&&!dS(Ht))Ht.name+=n,la(Ht.nameLoc,e);else{let i=n[0]!=="[";Ht.arg=kd(i?n:n.slice(1,-1),i,Cn(t,e),i?3:0)}},ondirmodifier(t,e){let n=li(t,e);if(fo&&!dS(Ht))Ht.name+="."+n,la(Ht.nameLoc,e);else if(Ht.name==="slot"){let i=Ht.arg;i&&(i.content+="."+n,la(i.loc,e))}else{let i=Tt(n,!0,Cn(t,e));Ht.modifiers.push(i)}},onattribdata(t,e){Bi+=li(t,e),Ur<0&&(Ur=t),aa=e},onattribentity(t,e,n){Bi+=t,Ur<0&&(Ur=e),aa=n},onattribnameend(t){let e=Ht.loc.start.offset,n=li(e,t);Ht.type===7&&(Ht.rawName=n),yi.props.some(i=>(i.type===7?i.rawName:i.name)===n)&&Lr(2,e)},onattribend(t,e){if(yi&&Ht){if(la(Ht.loc,e),t!==0)if(Bi.includes("&")&&(Bi=Kt.decodeEntities(Bi,!0)),Ht.type===6)Ht.name==="class"&&(Bi=GS(Bi).trim()),t===1&&!Bi&&Lr(13,e),Ht.value={type:2,content:Bi,loc:t===1?Cn(Ur,aa):Cn(Ur-1,aa+1)},Mn.inSFCRoot&&yi.tag==="template"&&Ht.name==="lang"&&Bi&&Bi!=="html"&&Mn.enterRCDATA($d("</template"),0);else{let n=0;Ht.exp=kd(Bi,!1,Cn(Ur,aa),0,n),Ht.name==="for"&&(Ht.forParseResult=RC(Ht.exp));let i=-1;Ht.name==="bind"&&(i=Ht.modifiers.findIndex(s=>s.content==="sync"))>-1&&ol("COMPILER_V_BIND_SYNC",Kt,Ht.loc,Ht.arg.loc.source)&&(Ht.name="model",Ht.modifiers.splice(i,1))}(Ht.type!==7||Ht.name!=="pre")&&yi.props.push(Ht)}Bi="",Ur=aa=-1},oncomment(t,e){Kt.comments&&u0({type:3,content:li(t,e),loc:Cn(t-4,e+3)})},onend(){let t=Fr.length;for(let e=0;e<gn.length;e++)Bd(gn[e],t-1),Lr(24,gn[e].loc.start.offset)},oncdata(t,e){(gn[0]?gn[0].ns:Kt.ns)!==0?Fd(li(t,e),t,e):Lr(1,t-9)},onprocessinginstruction(t){(gn[0]?gn[0].ns:Kt.ns)===0&&Lr(21,t-1)}}),fS=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,AC=/^\(|\)$/g;function RC(t){let e=t.loc,n=t.content,i=n.match(wC);if(!i)return;let[,s,r]=i,o=(h,d,f=!1)=>{let p=e.start.offset+d,_=p+h.length;return kd(h,!1,Cn(p,_),0,f?1:0)},a={source:o(r.trim(),n.indexOf(r,s.length)),value:void 0,key:void 0,index:void 0,finalized:!1},l=s.trim().replace(AC,"").trim(),c=s.indexOf(l),u=l.match(fS);if(u){l=l.replace(fS,"").trim();let h=u[1].trim(),d;if(h&&(d=n.indexOf(h,c+l.length),a.key=o(h,d,!0)),u[2]){let f=u[2].trim();f&&(a.index=o(f,n.indexOf(f,a.key?d+h.length:c+l.length),!0))}}return l&&(a.value=o(l,c,!0)),a}function li(t,e){return Fr.slice(t,e)}function pS(t){Mn.inSFCRoot&&(yi.innerLoc=Cn(t+1,t+1)),u0(yi);let{tag:e,ns:n}=yi;n===0&&Kt.isPreTag(e)&&D0++,Kt.isVoidTag(e)?Bd(yi,t):(gn.unshift(yi),(n===1||n===2)&&(Mn.inXML=!0)),yi=null}function Fd(t,e,n){{let r=gn[0]&&gn[0].tag;r!=="script"&&r!=="style"&&t.includes("&")&&(t=Kt.decodeEntities(t,!1))}let i=gn[0]||eu,s=i.children[i.children.length-1];s&&s.type===2?(s.content+=t,la(s.loc,n)):i.children.push({type:2,content:t,loc:Cn(e,n)})}function Bd(t,e,n=!1){n?la(t.loc,HS(e,60)):la(t.loc,CC(e,62)+1),Mn.inSFCRoot&&(t.children.length?t.innerLoc.end=yt({},t.children[t.children.length-1].loc.end):t.innerLoc.end=yt({},t.innerLoc.start),t.innerLoc.source=li(t.innerLoc.start.offset,t.innerLoc.end.offset));let{tag:i,ns:s,children:r}=t;if(fo||(i==="slot"?t.tagType=2:mS(t)?t.tagType=3:IC(t)&&(t.tagType=1)),Mn.inRCDATA||(t.children=zS(r)),s===0&&Kt.isIgnoreNewlineTag(i)){let o=r[0];o&&o.type===2&&(o.content=o.content.replace(/^\r?\n/,""))}s===0&&Kt.isPreTag(i)&&D0--,c0===t&&(fo=Mn.inVPre=!1,c0=null),Mn.inXML&&(gn[0]?gn[0].ns:Kt.ns)===0&&(Mn.inXML=!1);{let o=t.props;if(!Mn.inSFCRoot&&ua("COMPILER_NATIVE_TEMPLATE",Kt)&&t.tag==="template"&&!mS(t)){let l=gn[0]||eu,c=l.children.indexOf(t);l.children.splice(c,1,...t.children)}let a=o.find(l=>l.type===6&&l.name==="inline-template");a&&ol("COMPILER_INLINE_TEMPLATE",Kt,a.loc)&&t.children.length&&(a.value={type:2,content:li(t.children[0].loc.start.offset,t.children[t.children.length-1].loc.end.offset),loc:a.loc})}}function CC(t,e){let n=t;for(;Fr.charCodeAt(n)!==e&&n<Fr.length-1;)n++;return n}function HS(t,e){let n=t;for(;Fr.charCodeAt(n)!==e&&n>=0;)n--;return n}var NC=new Set(["if","else","else-if","for","slot"]);function mS({tag:t,props:e}){if(t==="template"){for(let n=0;n<e.length;n++)if(e[n].type===7&&NC.has(e[n].name))return!0}return!1}function IC({tag:t,props:e}){if(Kt.isCustomElement(t))return!1;if(t==="component"||PC(t.charCodeAt(0))||DS(t)||Kt.isBuiltInComponent&&Kt.isBuiltInComponent(t)||Kt.isNativeTag&&!Kt.isNativeTag(t))return!0;for(let n=0;n<e.length;n++){let i=e[n];if(i.type===6){if(i.name==="is"&&i.value){if(i.value.content.startsWith("vue:"))return!0;if(ol("COMPILER_IS_ON_ELEMENT",Kt,i.loc))return!0}}else if(i.name==="bind"&&po(i.arg,"is")&&ol("COMPILER_IS_ON_ELEMENT",Kt,i.loc))return!0}return!1}function PC(t){return t>64&&t<91}var OC=/\r\n/g;function zS(t){let e=Kt.whitespace!=="preserve",n=!1;for(let i=0;i<t.length;i++){let s=t[i];if(s.type===2)if(D0)s.content=s.content.replace(OC,`
`);else if(BS(s.content)){let r=t[i-1]&&t[i-1].type,o=t[i+1]&&t[i+1].type;!r||!o||e&&(r===3&&(o===3||o===1)||r===1&&(o===3||o===1&&DC(s.content)))?(n=!0,t[i]=null):s.content=" "}else e&&(s.content=GS(s.content))}return n?t.filter(Boolean):t}function DC(t){for(let e=0;e<t.length;e++){let n=t.charCodeAt(e);if(n===10||n===13)return!0}return!1}function GS(t){let e="",n=!1;for(let i=0;i<t.length;i++)ji(t.charCodeAt(i))?n||(e+=" ",n=!0):(e+=t[i],n=!1);return e}function u0(t){(gn[0]||eu).children.push(t)}function Cn(t,e){return{start:Mn.getPos(t),end:e==null?e:Mn.getPos(e),source:e==null?e:li(t,e)}}function LC(t){return Cn(t.start.offset,t.end.offset)}function la(t,e){t.end=Mn.getPos(e),t.source=li(t.start.offset,e)}function UC(t){let e={type:6,name:t.rawName,nameLoc:Cn(t.loc.start.offset,t.loc.start.offset+t.rawName.length),value:void 0,loc:t.loc};if(t.exp){let n=t.exp.loc;n.end.offset<t.loc.end.offset&&(n.start.offset--,n.start.column--,n.end.offset++,n.end.column++),e.value={type:2,content:t.exp.content,loc:n}}return e}function kd(t,e=!1,n,i=0,s=0){return Tt(t,e,n,i)}function Lr(t,e,n){Kt.onError(dn(t,Cn(e,e),void 0,n))}function FC(){Mn.reset(),yi=null,Ht=null,Bi="",Ur=-1,aa=-1,gn.length=0}function WS(t,e){if(FC(),Fr=t,Kt=yt({},kS),e){let s;for(s in e)e[s]!=null&&(Kt[s]=e[s])}Mn.mode=Kt.parseMode==="html"?1:Kt.parseMode==="sfc"?2:0,Mn.inXML=Kt.ns===1||Kt.ns===2;let n=e&&e.delimiters;n&&(Mn.delimiterOpen=$d(n[0]),Mn.delimiterClose=$d(n[1]));let i=eu=dC([],t);return Mn.parse(Fr),i.loc=Cn(0,t.length),i.children=zS(i.children),eu=null,i}function VC(t,e){Hd(t,void 0,e,!!XS(t))}function XS(t){let e=t.children.filter(n=>n.type!==3);return e.length===1&&e[0].type===1&&!Yd(e[0])?e[0]:null}function Hd(t,e,n,i=!1,s=!1){let{children:r}=t,o=[];for(let u=0;u<r.length;u++){let h=r[u];if(h.type===1&&h.tagType===0){let d=i?0:Hi(h,n);if(d>0){if(d>=2){h.codegenNode.patchFlag=-1,o.push(h);continue}}else{let f=h.codegenNode;if(f.type===13){let p=f.patchFlag;if((p===void 0||p===512||p===1)&&qS(h,n)>=2){let _=YS(h);_&&(f.props=n.hoist(_))}f.dynamicProps&&(f.dynamicProps=n.hoist(f.dynamicProps))}}}else if(h.type===12&&(i?0:Hi(h,n))>=2){h.codegenNode.type===14&&h.codegenNode.arguments.length>0&&h.codegenNode.arguments.push("-1"),o.push(h);continue}if(h.type===1){let d=h.tagType===1;d&&n.scopes.vSlot++,Hd(h,t,n,!1,s),d&&n.scopes.vSlot--}else if(h.type===11)Hd(h,t,n,h.children.length===1,!0);else if(h.type===9)for(let d=0;d<h.branches.length;d++)Hd(h.branches[d],t,n,h.branches[d].children.length===1,s)}let a=!1;if(o.length===r.length&&t.type===1){if(t.tagType===0&&t.codegenNode&&t.codegenNode.type===13&&Ve(t.codegenNode.children))t.codegenNode.children=l(ca(t.codegenNode.children)),a=!0;else if(t.tagType===1&&t.codegenNode&&t.codegenNode.type===13&&t.codegenNode.children&&!Ve(t.codegenNode.children)&&t.codegenNode.children.type===15){let u=c(t.codegenNode,"default");u&&(u.returns=l(ca(u.returns)),a=!0)}else if(t.tagType===3&&e&&e.type===1&&e.tagType===1&&e.codegenNode&&e.codegenNode.type===13&&e.codegenNode.children&&!Ve(e.codegenNode.children)&&e.codegenNode.children.type===15){let u=ki(t,"slot",!0),h=u&&u.arg&&c(e.codegenNode,u.arg);h&&(h.returns=l(ca(h.returns)),a=!0)}}if(!a)for(let u of o)u.codegenNode=n.cache(u.codegenNode);function l(u){let h=n.cache(u);return h.needArraySpread=!0,h}function c(u,h){if(u.children&&!Ve(u.children)&&u.children.type===15){let d=u.children.properties.find(f=>f.key===h||f.key.content===h);return d&&d.value}}o.length&&n.transformHoist&&n.transformHoist(r,n,t)}function Hi(t,e){let{constantCache:n}=e;switch(t.type){case 1:if(t.tagType!==0)return 0;let i=n.get(t);if(i!==void 0)return i;let s=t.codegenNode;if(s.type!==13||s.isBlock&&t.tag!=="svg"&&t.tag!=="foreignObject"&&t.tag!=="math")return 0;if(s.patchFlag===void 0){let o=3,a=qS(t,e);if(a===0)return n.set(t,0),0;a<o&&(o=a);for(let l=0;l<t.children.length;l++){let c=Hi(t.children[l],e);if(c===0)return n.set(t,0),0;c<o&&(o=c)}if(o>1)for(let l=0;l<t.props.length;l++){let c=t.props[l];if(c.type===7&&c.name==="bind"&&c.exp){let u=Hi(c.exp,e);if(u===0)return n.set(t,0),0;u<o&&(o=u)}}if(s.isBlock){for(let l=0;l<t.props.length;l++)if(t.props[l].type===7)return n.set(t,0),0;e.removeHelper(ha),e.removeHelper(rl(e.inSSR,s.isComponent)),s.isBlock=!1,e.helper(sl(e.inSSR,s.isComponent))}return n.set(t,o),o}else return n.set(t,0),0;case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return Hi(t.content,e);case 4:return t.constType;case 8:let r=3;for(let o=0;o<t.children.length;o++){let a=t.children[o];if(ft(a)||Dn(a))continue;let l=Hi(a,e);if(l===0)return 0;l<r&&(r=l)}return r;case 20:return 2;default:return 0}}var BC=new Set([b0,T0,jc,iu]);function $S(t,e){if(t.type===14&&!ft(t.callee)&&BC.has(t.callee)){let n=t.arguments[0];if(n.type===4)return Hi(n,e);if(n.type===14)return $S(n,e)}return 0}function qS(t,e){let n=3,i=YS(t);if(i&&i.type===15){let{properties:s}=i;for(let r=0;r<s.length;r++){let{key:o,value:a}=s[r],l=Hi(o,e);if(l===0)return l;l<n&&(n=l);let c;if(a.type===4?c=Hi(a,e):a.type===14?c=$S(a,e):c=0,c===0)return c;c<n&&(n=c)}}return n}function YS(t){let e=t.codegenNode;if(e.type===13)return e.props}function kC(t,{filename:e="",prefixIdentifiers:n=!1,hoistStatic:i=!1,hmr:s=!1,cacheHandlers:r=!1,nodeTransforms:o=[],directiveTransforms:a={},transformHoist:l=null,isBuiltInComponent:c=Sn,isCustomElement:u=Sn,expressionPlugins:h=[],scopeId:d=null,slotted:f=!0,ssr:p=!1,inSSR:_=!1,ssrCssVars:g="",bindingMetadata:m=bt,inline:x=!1,isTS:E=!1,onError:y=C0,onWarn:S=OS,compatConfig:T}){let R=e.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),v={filename:e,selfName:R&&ds(qt(R[1])),prefixIdentifiers:n,hoistStatic:i,hmr:s,cacheHandlers:r,nodeTransforms:o,directiveTransforms:a,transformHoist:l,isBuiltInComponent:c,isCustomElement:u,expressionPlugins:h,scopeId:d,slotted:f,ssr:p,inSSR:_,ssrCssVars:g,bindingMetadata:m,inline:x,isTS:E,onError:y,onWarn:S,compatConfig:T,root:t,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],cached:[],constantCache:new WeakMap,vForMemoKeyedNodes:new WeakSet,temps:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,grandParent:null,currentNode:t,childIndex:0,inVOnce:!1,helper(M){let w=v.helpers.get(M)||0;return v.helpers.set(M,w+1),M},removeHelper(M){let w=v.helpers.get(M);if(w){let F=w-1;F?v.helpers.set(M,F):v.helpers.delete(M)}},helperString(M){return`_${nl[v.helper(M)]}`},replaceNode(M){v.parent.children[v.childIndex]=v.currentNode=M},removeNode(M){let w=v.parent.children,F=M?w.indexOf(M):v.currentNode?v.childIndex:-1;!M||M===v.currentNode?(v.currentNode=null,v.onNodeRemoved()):v.childIndex>F&&(v.childIndex--,v.onNodeRemoved()),v.parent.children.splice(F,1)},onNodeRemoved:Sn,addIdentifiers(M){},removeIdentifiers(M){},hoist(M){ft(M)&&(M=Tt(M)),v.hoists.push(M);let w=Tt(`_hoisted_${v.hoists.length}`,!1,M.loc,2);return w.hoisted=M,w},cache(M,w=!1,F=!1){let U=fC(v.cached.length,M,w,F);return v.cached.push(U),U}};return v.filters=new Set,v}function HC(t,e){let n=kC(t,e);jd(t,n),e.hoistStatic&&VC(t,n),e.ssr||zC(t,n),t.helpers=new Set([...n.helpers.keys()]),t.components=[...n.components],t.directives=[...n.directives],t.imports=n.imports,t.hoists=n.hoists,t.temps=n.temps,t.cached=n.cached,t.transformed=!0,t.filters=[...n.filters]}function zC(t,e){let{helper:n}=e,{children:i}=t;if(i.length===1){let s=XS(t);if(s&&s.codegenNode){let r=s.codegenNode;r.type===13&&R0(r,e),t.codegenNode=r}else t.codegenNode=i[0]}else if(i.length>1){let s=64;t.codegenNode=Zc(e,n(Jc),void 0,t.children,s,void 0,void 0,!0,void 0,!1)}}function GC(t,e){let n=0,i=()=>{n--};for(;n<t.children.length;n++){let s=t.children[n];ft(s)||(e.grandParent=e.parent,e.parent=t,e.childIndex=n,e.onNodeRemoved=i,jd(s,e))}}function jd(t,e){e.currentNode=t;let{nodeTransforms:n}=e,i=[];for(let r=0;r<n.length;r++){let o=n[r](t,e);if(o&&(Ve(o)?i.push(...o):i.push(o)),e.currentNode)t=e.currentNode;else return}switch(t.type){case 3:e.ssr||e.helper(tu);break;case 5:e.ssr||e.helper(nu);break;case 9:for(let r=0;r<t.branches.length;r++)jd(t.branches[r],e);break;case 10:case 11:case 1:case 0:GC(t,e);break}e.currentNode=t;let s=i.length;for(;s--;)i[s]()}function KS(t,e){let n=ft(t)?i=>i===t:i=>t.test(i);return(i,s)=>{if(i.type===1){let{props:r}=i;if(i.tagType===3&&r.some(SC))return;let o=[];for(let a=0;a<r.length;a++){let l=r[a];if(l.type===7&&n(l.name)){r.splice(a,1),a--;let c=e(i,l,s);c&&o.push(c)}}return o}}}var Zd="/*@__PURE__*/",JS=t=>`${nl[t]}: _${nl[t]}`;function WC(t,{mode:e="function",prefixIdentifiers:n=e==="module",sourceMap:i=!1,filename:s="template.vue.html",scopeId:r=null,optimizeImports:o=!1,runtimeGlobalName:a="Vue",runtimeModuleName:l="vue",ssrRuntimeModuleName:c="vue/server-renderer",ssr:u=!1,isTS:h=!1,inSSR:d=!1}){let f={mode:e,prefixIdentifiers:n,sourceMap:i,filename:s,scopeId:r,optimizeImports:o,runtimeGlobalName:a,runtimeModuleName:l,ssrRuntimeModuleName:c,ssr:u,isTS:h,inSSR:d,source:t.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(_){return`_${nl[_]}`},push(_,g=-2,m){f.code+=_},indent(){p(++f.indentLevel)},deindent(_=!1){_?--f.indentLevel:p(--f.indentLevel)},newline(){p(f.indentLevel)}};function p(_){f.push(`
`+"  ".repeat(_),0)}return f}function XC(t,e={}){let n=WC(t,e);e.onContextCreated&&e.onContextCreated(n);let{mode:i,push:s,prefixIdentifiers:r,indent:o,deindent:a,newline:l,scopeId:c,ssr:u}=n,h=Array.from(t.helpers),d=h.length>0,f=!r&&i!=="module";$C(t,n);let _=u?"ssrRender":"render",m=(u?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(s(`function ${_}(${m}) {`),o(),f&&(s("with (_ctx) {"),o(),d&&(s(`const { ${h.map(JS).join(", ")} } = _Vue
`,-1),l())),t.components.length&&(i0(t.components,"component",n),(t.directives.length||t.temps>0)&&l()),t.directives.length&&(i0(t.directives,"directive",n),t.temps>0&&l()),t.filters&&t.filters.length&&(l(),i0(t.filters,"filter",n),l()),t.temps>0){s("let ");for(let x=0;x<t.temps;x++)s(`${x>0?", ":""}_temp${x}`)}return(t.components.length||t.directives.length||t.temps)&&(s(`
`,0),l()),u||s("return "),t.codegenNode?Ei(t.codegenNode,n):s("null"),f&&(a(),s("}")),a(),s("}"),{ast:t,code:n.code,preamble:"",map:n.map?n.map.toJSON():void 0}}function $C(t,e){let{ssr:n,prefixIdentifiers:i,push:s,newline:r,runtimeModuleName:o,runtimeGlobalName:a,ssrRuntimeModuleName:l}=e,c=a,u=Array.from(t.helpers);if(u.length>0&&(s(`const _Vue = ${c}
`,-1),t.hoists.length)){let h=[p0,m0,tu,g0,RS].filter(d=>u.includes(d)).map(JS).join(", ");s(`const { ${h} } = _Vue
`,-1)}qC(t.hoists,e),r(),s("return ")}function i0(t,e,{helper:n,push:i,newline:s,isTS:r}){let o=n(e==="filter"?E0:e==="component"?_0:v0);for(let a=0;a<t.length;a++){let l=t[a],c=l.endsWith("__self");c&&(l=l.slice(0,-6)),i(`const ${Qc(l,e)} = ${o}(${JSON.stringify(l)}${c?", true":""})${r?"!":""}`),a<t.length-1&&s()}}function qC(t,e){if(!t.length)return;e.pure=!0;let{push:n,newline:i}=e;i();for(let s=0;s<t.length;s++){let r=t[s];r&&(n(`const _hoisted_${s+1} = `),Ei(r,e),i())}e.pure=!1}function L0(t,e){let n=t.length>3||!1;e.push("["),n&&e.indent(),ru(t,e,n),n&&e.deindent(),e.push("]")}function ru(t,e,n=!1,i=!0){let{push:s,newline:r}=e;for(let o=0;o<t.length;o++){let a=t[o];ft(a)?s(a,-3):Ve(a)?L0(a,e):Ei(a,e),o<t.length-1&&(n?(i&&s(","),r()):i&&s(", "))}}function Ei(t,e){if(ft(t)){e.push(t,-3);return}if(Dn(t)){e.push(e.helper(t));return}switch(t.type){case 1:case 9:case 11:Ei(t.codegenNode,e);break;case 2:YC(t,e);break;case 4:jS(t,e);break;case 5:KC(t,e);break;case 12:Ei(t.codegenNode,e);break;case 8:ZS(t,e);break;case 3:jC(t,e);break;case 13:ZC(t,e);break;case 14:eN(t,e);break;case 15:tN(t,e);break;case 17:nN(t,e);break;case 18:iN(t,e);break;case 19:sN(t,e);break;case 20:rN(t,e);break;case 21:ru(t.body,e,!0,!1);break;case 22:break;case 23:break;case 24:break;case 25:break;case 26:break;case 10:break;default:}}function YC(t,e){e.push(JSON.stringify(t.content),-3,t)}function jS(t,e){let{content:n,isStatic:i}=t;e.push(i?JSON.stringify(n):n,-3,t)}function KC(t,e){let{push:n,helper:i,pure:s}=e;s&&n(Zd),n(`${i(nu)}(`),Ei(t.content,e),n(")")}function ZS(t,e){for(let n=0;n<t.children.length;n++){let i=t.children[n];ft(i)?e.push(i,-3):Ei(i,e)}}function JC(t,e){let{push:n}=e;if(t.type===8)n("["),ZS(t,e),n("]");else if(t.isStatic){let i=N0(t.content)?t.content:JSON.stringify(t.content);n(i,-2,t)}else n(`[${t.content}]`,-3,t)}function jC(t,e){let{push:n,helper:i,pure:s}=e;s&&n(Zd),n(`${i(tu)}(${JSON.stringify(t.content)})`,-3,t)}function ZC(t,e){let{push:n,helper:i,pure:s}=e,{tag:r,props:o,children:a,patchFlag:l,dynamicProps:c,directives:u,isBlock:h,disableTracking:d,isComponent:f}=t,p;l&&(p=String(l)),u&&n(i(x0)+"("),h&&n(`(${i(ha)}(${d?"true":""}), `),s&&n(Zd);let _=h?rl(e.inSSR,f):sl(e.inSSR,f);n(i(_)+"(",-2,t),ru(QC([r,o,a,p,c]),e),n(")"),h&&n(")"),u&&(n(", "),Ei(u,e),n(")"))}function QC(t){let e=t.length;for(;e--&&t[e]==null;);return t.slice(0,e+1).map(n=>n||"null")}function eN(t,e){let{push:n,helper:i,pure:s}=e,r=ft(t.callee)?t.callee:i(t.callee);s&&n(Zd),n(r+"(",-2,t),ru(t.arguments,e),n(")")}function tN(t,e){let{push:n,indent:i,deindent:s,newline:r}=e,{properties:o}=t;if(!o.length){n("{}",-2,t);return}let a=o.length>1||!1;n(a?"{":"{ "),a&&i();for(let l=0;l<o.length;l++){let{key:c,value:u}=o[l];JC(c,e),n(": "),Ei(u,e),l<o.length-1&&(n(","),r())}a&&s(),n(a?"}":" }")}function nN(t,e){L0(t.elements,e)}function iN(t,e){let{push:n,indent:i,deindent:s}=e,{params:r,returns:o,body:a,newline:l,isSlot:c}=t;c&&n(`_${nl[w0]}(`),n("(",-2,t),Ve(r)?ru(r,e):r&&Ei(r,e),n(") => "),(l||a)&&(n("{"),i()),o?(l&&n("return "),Ve(o)?L0(o,e):Ei(o,e)):a&&Ei(a,e),(l||a)&&(s(),n("}")),c&&(t.isNonScopedSlot&&n(", undefined, true"),n(")"))}function sN(t,e){let{test:n,consequent:i,alternate:s,newline:r}=t,{push:o,indent:a,deindent:l,newline:c}=e;if(n.type===4){let h=!N0(n.content);h&&o("("),jS(n,e),h&&o(")")}else o("("),Ei(n,e),o(")");r&&a(),e.indentLevel++,r||o(" "),o("? "),Ei(i,e),e.indentLevel--,r&&c(),r||o(" "),o(": ");let u=s.type===19;u||e.indentLevel++,Ei(s,e),u||e.indentLevel--,r&&l(!0)}function rN(t,e){let{push:n,helper:i,indent:s,deindent:r,newline:o}=e,{needPauseTracking:a,needArraySpread:l}=t;l&&n("[...("),n(`_cache[${t.index}] || (`),a&&(s(),n(`${i(Xd)}(-1`),t.inVOnce&&n(", true"),n("),"),o(),n("(")),n(`_cache[${t.index}] = `),Ei(t.value,e),a&&(n(`).cacheIndex = ${t.index},`),o(),n(`${i(Xd)}(1),`),o(),n(`_cache[${t.index}]`),r()),n(")"),l&&n(")]")}var uU=new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");var oN=KS(/^(?:if|else|else-if)$/,(t,e,n)=>aN(t,e,n,(i,s,r)=>{let o=n.parent.children,a=o.indexOf(i),l=0;for(;a-->=0;){let c=o[a];c&&c.type===9&&(l+=c.branches.length)}return()=>{if(r)i.codegenNode=_S(s,l,n);else{let c=lN(i.codegenNode);c.alternate=_S(s,l+i.branches.length-1,n)}}}));function aN(t,e,n,i){if(e.name!=="else"&&(!e.exp||!e.exp.content.trim())){let s=e.exp?e.exp.loc:t.loc;n.onError(dn(28,e.loc)),e.exp=Tt("true",!1,s)}if(e.name==="if"){let s=gS(t,e),r={type:9,loc:LC(t.loc),branches:[s]};if(n.replaceNode(r),i)return i(r,s,!0)}else{let s=n.parent.children,r=[],o=s.indexOf(t);for(;o-->=-1;){let a=s[o];if(a&&O0(a)){n.removeNode(a);continue}if(a&&a.type===9){(e.name==="else-if"||e.name==="else")&&a.branches[a.branches.length-1].condition===void 0&&n.onError(dn(30,t.loc)),n.removeNode();let l=gS(t,e);a.branches.push(l);let c=i&&i(a,l,!1);jd(l,n),c&&c(),n.currentNode=null}else n.onError(dn(30,t.loc));break}}}function gS(t,e){let n=t.tagType===3;return{type:10,loc:t.loc,condition:e.name==="else"?void 0:e.exp,children:n&&!ki(t,"for")?t.children:[t],userKey:su(t,"key"),isTemplateIf:n}}function _S(t,e,n){return t.condition?o0(t.condition,yS(t,e,n),Fn(n.helper(tu),['""',"true"])):yS(t,e,n)}function yS(t,e,n){let{helper:i}=n,s=Nn("key",Tt(`${e}`,!1,Zi,2)),{children:r}=t,o=r[0];if(r.length!==1||o.type!==1)if(r.length===1&&o.type===11){let l=o.codegenNode;return Kd(l,s,n),l}else return Zc(n,i(Jc),ys([s]),r,64,void 0,void 0,!0,!1,!1,t.loc);else{let l=o.codegenNode,c=MC(l);return c.type===13&&R0(c,n),Kd(c,s,n),l}}function lN(t){for(;;)if(t.type===19)if(t.alternate.type===19)t=t.alternate;else return t;else t.type===20&&(t=t.value)}var cN=KS("for",(t,e,n)=>{let{helper:i,removeHelper:s}=n;return uN(t,e,n,r=>{let o=Fn(i(S0),[r.source]),a=qd(t),l=ki(t,"memo"),c=su(t,"key",!1,!0);c&&c.type;let u=c&&(c.type===6?c.value?Tt(c.value.content,!0):void 0:c.exp),h=u?Nn("key",u):null,d=r.source.type===4&&r.source.constType>0,f=d?64:c?128:256;return r.codegenNode=Zc(n,i(Jc),void 0,o,f,void 0,void 0,!0,!d,!1,t.loc),()=>{var p;let _,{children:g}=r,m=g.length!==1||g[0].type!==1,x=Yd(t)?t:a&&t.children.length===1&&Yd(t.children[0])?t.children[0]:null;if(x)_=x.codegenNode,a&&h&&Kd(_,h,n);else if(m)_=Zc(n,i(Jc),h?ys([h]):void 0,t.children,64,void 0,void 0,!0,void 0,!1);else{_=g[0].codegenNode,a&&h&&Kd(_,h,n);let E=!d||_.isBlockRequired===!0;_.isBlock!==E&&(_.isBlock?(s(ha),s(rl(n.inSSR,_.isComponent))):s(sl(n.inSSR,_.isComponent))),_.isBlock=E,_.isBlock?(i(ha),i(rl(n.inSSR,_.isComponent))):(i(sl(n.inSSR,_.isComponent)),_.needsPatch&&(_.patchFlag=((p=_.patchFlag)!=null?p:0)|512))}if(l){let E=il(h0(r.parseResult,[Tt("_cached")]));E.body=pC([vs(["const _memo = (",l.exp,")"]),vs(["if (_cached && _cached.el",...u?[" && _cached.key === ",u]:[],` && ${n.helperString(IS)}(_cached, _memo)) return _cached`]),vs(["const _item = ",_]),Tt("_item.memo = _memo"),Tt("return _item")]),o.arguments.push(E,Tt("_cache"),Tt(String(n.cached.length))),n.cached.push(null)}else o.arguments.push(il(h0(r.parseResult),_,!0))}})});function uN(t,e,n,i){if(!e.exp){n.onError(dn(31,e.loc));return}let s=e.forParseResult;if(!s){n.onError(dn(32,e.loc));return}QS(s,n);let{addIdentifiers:r,removeIdentifiers:o,scopes:a}=n,{source:l,value:c,key:u,index:h}=s,d={type:11,loc:e.loc,source:l,valueAlias:c,keyAlias:u,objectIndexAlias:h,parseResult:s,children:qd(t)?t.children:[t]};n.replaceNode(d),a.vFor++;let f=i&&i(d);return()=>{a.vFor--,f&&f()}}function QS(t,e){t.finalized||(t.finalized=!0)}function h0({value:t,key:e,index:n},i=[]){return hN([t,e,n,...i])}function hN(t){let e=t.length;for(;e--&&!t[e];);return t.slice(0,e+1).map((n,i)=>n||Tt("_".repeat(i+1),!1))}var vS=Tt("undefined",!1),dN=(t,e)=>{if(t.type===1&&(t.tagType===1||t.tagType===3)){let n=ki(t,"slot");if(n)return n.exp,e.scopes.vSlot++,()=>{e.scopes.vSlot--}}};var fN=(t,e,n,i)=>il(t,n,!1,!0,n.length?n[0].loc:i);function pN(t,e,n=fN){e.helper(w0);let{children:i,loc:s}=t,r=[],o=[],a=e.scopes.vSlot>0||e.scopes.vFor>0,l=ki(t,"slot",!0);if(l){let{arg:g,exp:m}=l;g&&!vi(g)&&(a=!0),r.push(Nn(g||Tt("default",!0),n(m,void 0,i,s)))}let c=!1,u=!1,h=[],d=new Set,f=0;for(let g=0;g<i.length;g++){let m=i[g],x;if(!qd(m)||!(x=ki(m,"slot",!0))){m.type!==3&&h.push(m);continue}if(l){e.onError(dn(37,x.loc));break}c=!0;let{children:E,loc:y}=m,{arg:S=Tt("default",!0),exp:T,loc:R}=x,v;vi(S)?v=S?S.content:"default":a=!0;let M=ki(m,"for"),w=n(T,M,E,y),F,U;if(F=ki(m,"if"))a=!0,o.push(o0(F.exp,Vd(S,w,f++),vS));else if(U=ki(m,/^else(?:-if)?$/,!0)){let H=g,V;for(;H--&&(V=i[H],!!O0(V)););if(V&&qd(V)&&ki(V,/^(?:else-)?if$/)){let k=o[o.length-1];for(;k.alternate.type===19;)k=k.alternate;k.alternate=U.exp?o0(U.exp,Vd(S,w,f++),vS):Vd(S,w,f++)}else e.onError(dn(30,U.loc))}else if(M){a=!0;let H=M.forParseResult;H?(QS(H,e),o.push(Fn(e.helper(S0),[H.source,il(h0(H),Vd(S,w),!0)]))):e.onError(dn(32,M.loc))}else{if(v){if(d.has(v)){e.onError(dn(38,R));continue}d.add(v),v==="default"&&(u=!0)}r.push(Nn(S,w))}}if(!l){let g=(m,x)=>{let E=n(m,void 0,x,s);return e.compatConfig&&(E.isNonScopedSlot=!0),Nn("default",E)};c?h.length&&!h.every(P0)&&(u?e.onError(dn(39,h[0].loc)):r.push(g(void 0,h))):r.push(g(void 0,i))}let p=a?2:zd(t.children)?3:1,_=ys(r.concat(Nn("_",Tt(p+"",!1))),s);return o.length&&(_=Fn(e.helper(NS),[_,ca(o)])),{slots:_,hasDynamicSlots:a}}function Vd(t,e,n){let i=[Nn("name",t),Nn("fn",e)];return n!=null&&i.push(Nn("key",Tt(String(n),!0))),ys(i)}function zd(t){for(let e=0;e<t.length;e++){let n=t[e];switch(n.type){case 1:if(n.tagType===2||zd(n.children))return!0;break;case 9:if(zd(n.branches))return!0;break;case 10:case 11:if(zd(n.children))return!0;break}}return!1}var eb=new WeakMap,mN=(t,e)=>function(){if(t=e.currentNode,!(t.type===1&&(t.tagType===0||t.tagType===1)))return;let{tag:i,props:s}=t,r=t.tagType===1,o=r?gN(t,e):`"${i}"`,a=Lt(o)&&o.callee===y0,l,c,u=0,h,d,f,p=!1,_=!1,g=a||o===Kc||o===f0||!r&&(i==="svg"||i==="foreignObject"||i==="math");if(s.length>0){let x=tb(t,e,void 0,r,a);l=x.props,u=x.patchFlag,d=x.dynamicPropNames,p=x.needsPatch,_=x.isBlockRequired;let E=x.directives;f=E&&E.length?ca(E.map(y=>yN(y,e))):void 0,x.shouldUseBlock&&(g=!0)}if(t.children.length>0)if(o===Gd&&(g=!0,u|=1024),r&&o!==Kc&&o!==Gd){let{slots:E,hasDynamicSlots:y}=pN(t,e);c=E,y&&(u|=1024)}else if(t.children.length===1&&o!==Kc){let E=t.children[0],y=E.type,S=y===5||y===8;S&&Hi(E,e)===0&&(u|=1),S||y===2?c=E:c=t.children}else c=t.children;d&&d.length&&(h=vN(d));let m=t.codegenNode=Zc(e,o,l,c,u===0?void 0:u,h,f,!!g,!1,r,t.loc);p=p&&(u===0||u===32),p&&(m.needsPatch=!0),_&&(m.isBlockRequired=!0)};function gN(t,e,n=!1){let{tag:i}=t,s=d0(i),r=su(t,"is",!1,!0);if(r)if(s||ua("COMPILER_IS_ON_ELEMENT",e)){let a;if(r.type===6?a=r.value&&Tt(r.value.content,!0):(a=r.exp,a||(a=Tt("is",!1,r.arg.loc))),a)return Fn(e.helper(y0),[a])}else r.type===6&&r.value.content.startsWith("vue:")&&(i=r.value.content.slice(4));let o=DS(i)||e.isBuiltInComponent(i);return o?(n||e.helper(o),o):(e.helper(_0),e.components.add(i),Qc(i,"component"))}function tb(t,e,n=t.props,i,s,r=!1){let{tag:o,loc:a,children:l}=t,c=[],u=[],h=[],d=l.length>0,f=!1,p=!1,_=0,g=!1,m=!1,x=!1,E=!1,y=!1,S=!1,T=[],R=U=>{c.length&&(u.push(ys(ES(c),a)),c=[]),U&&u.push(U)},v=()=>{e.scopes.vFor>0&&c.push(Nn(Tt("ref_for",!0),Tt("true")))},M=({key:U,value:H})=>{if(vi(U)){let V=U.content,k=Ys(V);if(k&&(!i||s)&&V.toLowerCase()!=="onclick"&&V!=="onUpdate:modelValue"&&!Rs(V)&&(E=!0),k&&Rs(V)&&(S=!0),V==="ref"&&(g=!0),k&&H.type===14&&(H=H.arguments[0]),H.type===20||(H.type===4||H.type===8)&&Hi(H,e)>0)return;V==="class"?m=!0:V==="style"?x=!0:V!=="ref"&&V!=="key"&&!T.includes(V)&&T.push(V),i&&(V==="class"||V==="style")&&!T.includes(V)&&T.push(V)}else y=!0};for(let U=0;U<n.length;U++){let H=n[U];if(H.type===6){let{loc:V,name:k,nameLoc:G,value:K}=H,te=!0;if(k==="ref"&&(g=!0,v()),k==="is"&&(d0(o)||K&&K.content.startsWith("vue:")||ua("COMPILER_IS_ON_ELEMENT",e)))continue;c.push(Nn(Tt(k,!0,G),Tt(K?K.content:"",te,K?K.loc:V)))}else{let{name:V,arg:k,exp:G,loc:K,modifiers:te}=H,W=V==="bind",Q=V==="on";if(V==="slot"){i||e.onError(dn(40,K));continue}if(V==="once"||V==="memo"||V==="is"||W&&po(k,"is")&&(d0(o)||ua("COMPILER_IS_ON_ELEMENT",e))||Q&&r)continue;if(W&&po(k,"key")&&(f=!0),Q&&d&&k&&vi(k)&&qt(k.content)==="vue:beforeUpdate"&&(f=!0,p=!0),W&&po(k,"ref")&&v(),!k&&(W||Q)){if(y=!0,G)if(W){if(R(),ua("COMPILER_V_BIND_OBJECT_ORDER",e)){u.unshift(G);continue}v(),R(),u.push(G)}else R({type:14,loc:K,callee:e.helper(M0),arguments:i?[G]:[G,"true"]});else e.onError(dn(W?34:35,K));continue}W&&te.some(we=>we.content==="prop")&&(_|=32);let ae=e.directiveTransforms[V];if(ae){let{props:we,needRuntime:Ie}=ae(H,t,e);!r&&we.forEach(M),Q&&k&&!vi(k)?R(ys(we,a)):c.push(...we),Ie&&(h.push(H),Dn(Ie)&&eb.set(H,Ie))}else zm(V)||(h.push(H),d&&(f=!0,p=!0))}}let w;u.length?(R(),u.length>1?w=Fn(e.helper(Wd),u,a):w=u[0]):c.length&&(w=ys(ES(c),a)),y?_|=16:(m&&!i&&(_|=2),x&&!i&&(_|=4),T.length&&(_|=8),E&&(_|=32));let F=(_===0||_===32)&&(g||S||h.length>0);if(!f&&F&&(_|=512),!e.inSSR&&w)switch(w.type){case 15:let U=-1,H=-1,V=!1;for(let K=0;K<w.properties.length;K++){let te=w.properties[K].key;vi(te)?te.content==="class"?U=K:te.content==="style"&&(H=K):te.isHandlerKey||(V=!0)}let k=w.properties[U],G=w.properties[H];V?w=Fn(e.helper(jc),[w]):(k&&!vi(k.value)&&(k.value=Fn(e.helper(b0),[k.value])),G&&(x||G.value.type===4&&G.value.content.trim()[0]==="["||G.value.type===17)&&(G.value=Fn(e.helper(T0),[G.value])));break;case 14:break;default:w=Fn(e.helper(jc),[Fn(e.helper(iu),[w])]);break}return{props:w,directives:h,patchFlag:_,dynamicPropNames:T,shouldUseBlock:f,needsPatch:F,isBlockRequired:p}}function ES(t){let e=new Map,n=[];for(let i=0;i<t.length;i++){let s=t[i];if(s.key.type===8||!s.key.isStatic){n.push(s);continue}let r=s.key.content,o=e.get(r);o?(r==="style"||r==="class"||Ys(r))&&_N(o,s):(e.set(r,s),n.push(s))}return n}function _N(t,e){t.value.type===17?t.value.elements.push(e.value):t.value=ca([t.value,e.value],t.loc)}function yN(t,e){let n=[],i=eb.get(t);i?n.push(e.helperString(i)):(e.helper(v0),e.directives.add(t.name),n.push(Qc(t.name,"directive")));let{loc:s}=t;if(t.exp&&n.push(t.exp),t.arg&&(t.exp||n.push("void 0"),n.push(t.arg)),Object.keys(t.modifiers).length){t.arg||(t.exp||n.push("void 0"),n.push("void 0"));let r=Tt("true",!1,s);n.push(ys(t.modifiers.map(o=>Nn(o,r)),s))}return ca(n,t.loc)}function vN(t){let e="[";for(let n=0,i=t.length;n<i;n++)e+=JSON.stringify(t[n]),n<i-1&&(e+=", ");return e+"]"}function d0(t){return t==="component"||t==="Component"}var EN=(t,e)=>{if(Yd(t)){let{children:n,loc:i}=t,{slotName:s,slotProps:r}=xN(t,e),o=[e.prefixIdentifiers?"_ctx.$slots":"$slots",s,"{}","undefined","true"],a=2;r&&(o[2]=r,a=3),n.length&&(o[3]=il([],n,!1,!1,i),a=4),e.scopeId&&!e.slotted&&(a=5),o.splice(a),t.codegenNode=Fn(e.helper(CS),o,i)}};function xN(t,e){let n='"default"',i,s=[];for(let r=0;r<t.props.length;r++){let o=t.props[r];if(o.type===6)o.value&&(o.name==="name"?n=JSON.stringify(o.value.content):(o.name=qt(o.name),s.push(o)));else if(o.name==="bind"&&po(o.arg,"name")){if(o.exp)n=o.exp;else if(o.arg&&o.arg.type===4){let a=qt(o.arg.content);n=o.exp=Tt(a,!1,o.arg.loc)}}else o.name==="bind"&&o.arg&&vi(o.arg)&&(o.arg.content=qt(o.arg.content)),s.push(o)}if(s.length>0){let{props:r,directives:o}=tb(t,e,s,!1,!1);i=r,o.length&&e.onError(dn(36,o[0].loc))}return{slotName:n,slotProps:i}}var U0=(t,e,n,i)=>{let{loc:s,modifiers:r,arg:o}=t;!t.exp&&!r.length&&n.onError(dn(35,s));let a;if(o.type===4)if(o.isStatic){let h=o.content;h.startsWith("vue:")&&(h=`vnode-${h.slice(4)}`);let d=e.tagType!==0||h.startsWith("vnode")||!/[A-Z]/.test(h)?br(qt(h)):`on:${h}`;a=Tt(d,!0,o.loc)}else a=vs([`${n.helperString(r0)}(`,o,")"]);else a=o,a.children.unshift(`${n.helperString(r0)}(`),a.children.push(")");let l=t.exp;l&&!l.content.trim()&&(l=void 0);let c=n.cacheHandlers&&!l&&!n.inVOnce;if(l){let h=FS(l),d=!(h||xC(l)),f=l.content.includes(";");(d||c&&h)&&(l=vs([`${d?"$event":"(...args)"} => ${f?"{":"("}`,l,f?"}":")"]))}let u={props:[Nn(a,l||Tt("() => {}",!1,s))]};return i&&(u=i(u)),c&&(u.props[0].value=n.cache(u.props[0].value)),u.props.forEach(h=>h.key.isHandlerKey=!0),u},SN=(t,e,n)=>{let{modifiers:i,loc:s}=t,r=t.arg,{exp:o}=t;return o&&o.type===4&&!o.content.trim()&&(o=void 0),r.type!==4?(r.children.unshift("("),r.children.push(') || ""')):r.isStatic||(r.content=r.content?`${r.content} || ""`:'""'),i.some(a=>a.content==="camel")&&(r.type===4?r.isStatic?r.content=qt(r.content):r.content=`${n.helperString(s0)}(${r.content})`:(r.children.unshift(`${n.helperString(s0)}(`),r.children.push(")"))),n.inSSR||(i.some(a=>a.content==="prop")&&xS(r,"."),i.some(a=>a.content==="attr")&&xS(r,"^")),{props:[Nn(r,o)]}},xS=(t,e)=>{t.type===4?t.isStatic?t.content=e+t.content:t.content=`\`${e}\${${t.content}}\``:(t.children.unshift(`'${e}' + (`),t.children.push(")"))},bN=(t,e)=>{if(t.type===0||t.type===1||t.type===11||t.type===10)return()=>{let n=t.children,i,s=!1;for(let r=0;r<n.length;r++){let o=n[r];if(n0(o)){s=!0;for(let a=r+1;a<n.length;a++){let l=n[a];if(n0(l))i||(i=n[r]=vs([o],o.loc)),i.children.push(" + ",l),n.splice(a,1),a--;else{i=void 0;break}}}}if(!(!s||n.length===1&&(t.type===0||t.type===1&&t.tagType===0&&!t.props.find(r=>r.type===7&&!e.directiveTransforms[r.name])&&t.tag!=="template")))for(let r=0;r<n.length;r++){let o=n[r];if(n0(o)||o.type===8){let a=[];(o.type!==2||o.content!==" ")&&a.push(o),!e.ssr&&Hi(o,e)===0&&a.push("1"),n[r]={type:12,content:o,loc:o.loc,codegenNode:Fn(e.helper(g0),a)}}}}},SS=new WeakSet,TN=(t,e)=>{if(t.type===1&&ki(t,"once",!0))return SS.has(t)||e.inVOnce||e.inSSR?void 0:(SS.add(t),e.inVOnce=!0,e.helper(Xd),()=>{e.inVOnce=!1;let n=e.currentNode;n.codegenNode&&(n.codegenNode=e.cache(n.codegenNode,!0,!0))})},F0=(t,e,n)=>{let{exp:i,arg:s}=t;if(!i)return n.onError(dn(41,t.loc)),Yc();let r=i.loc.source.trim(),o=i.type===4?i.content:r,a=n.bindingMetadata[r];if(a==="props"||a==="props-aliased")return n.onError(dn(44,i.loc)),Yc();if(a==="literal-const"||a==="setup-const")return n.onError(dn(45,i.loc)),Yc();if(!o.trim()||!FS(i))return n.onError(dn(42,i.loc)),Yc();let l=s||Tt("modelValue",!0),c=s?vi(s)?`onUpdate:${qt(s.content)}`:vs(['"onUpdate:" + ',s]):"onUpdate:modelValue",u,h=n.isTS?"($event: any)":"$event";u=vs([`${h} => ((`,i,") = $event)"]);let d=[Nn(l,t.exp),Nn(c,u)];if(t.modifiers.length&&e.tagType===1){let f=t.modifiers.map(_=>_.content).map(_=>(N0(_)?_:JSON.stringify(_))+": true").join(", "),p=s?vi(s)?`${s.content}Modifiers`:vs([s,' + "Modifiers"']):"modelModifiers";d.push(Nn(p,Tt(`{ ${f} }`,!1,t.loc,2)))}return Yc(d)};function Yc(t=[]){return{props:t}}var MN=/[\w).+\-_$\]]/,wN=(t,e)=>{ua("COMPILER_FILTERS",e)&&(t.type===5?Jd(t.content,e):t.type===1&&t.props.forEach(n=>{n.type===7&&n.name!=="for"&&n.exp&&Jd(n.exp,e)}))};function Jd(t,e){if(t.type===4)bS(t,e);else for(let n=0;n<t.children.length;n++){let i=t.children[n];typeof i=="object"&&(i.type===4?bS(i,e):i.type===8?Jd(i,e):i.type===5&&Jd(i.content,e))}}function bS(t,e){let n=t.content,i=!1,s=!1,r=!1,o=!1,a=0,l=0,c=0,u=0,h,d,f,p,_=[];for(f=0;f<n.length;f++)if(d=h,h=n.charCodeAt(f),i)h===39&&d!==92&&(i=!1);else if(s)h===34&&d!==92&&(s=!1);else if(r)h===96&&d!==92&&(r=!1);else if(o)h===47&&d!==92&&(o=!1);else if(h===124&&n.charCodeAt(f+1)!==124&&n.charCodeAt(f-1)!==124&&!a&&!l&&!c)p===void 0?(u=f+1,p=n.slice(0,f).trim()):g();else{switch(h){case 34:s=!0;break;case 39:i=!0;break;case 96:r=!0;break;case 40:c++;break;case 41:c--;break;case 91:l++;break;case 93:l--;break;case 123:a++;break;case 125:a--;break}if(h===47){let m=f-1,x;for(;m>=0&&(x=n.charAt(m),x===" ");m--);(!x||!MN.test(x))&&(o=!0)}}p===void 0?p=n.slice(0,f).trim():u!==0&&g();function g(){_.push(n.slice(u,f).trim()),u=f+1}if(_.length){for(f=0;f<_.length;f++)p=AN(p,_[f],e);t.content=p,t.ast=void 0}}function AN(t,e,n){n.helper(E0);let i=e.indexOf("(");if(i<0)return n.filters.add(e),`${Qc(e,"filter")}(${t})`;{let s=e.slice(0,i),r=e.slice(i+1);return n.filters.add(s),`${Qc(s,"filter")}(${t}${r!==")"?","+r:r}`}}var TS=new WeakSet,RN=(t,e)=>{if(t.type===1){let n=ki(t,"memo");return!n||TS.has(t)||e.inSSR?void 0:(TS.add(t),()=>{let i=t.codegenNode||e.currentNode.codegenNode;i&&i.type===13&&(t.tagType!==1&&R0(i,e),t.codegenNode=Fn(e.helper(A0),[n.exp,il(void 0,i),"_cache",String(e.cached.length)]),e.cached.push(null))})}},CN=(t,e)=>{if(t.type===1){for(let n of t.props)if(n.type===7&&n.name==="bind"&&(!n.exp||n.exp.type===4&&!n.exp.content.trim())&&n.arg){let i=n.arg;if(i.type!==4||!i.isStatic)e.onError(dn(53,i.loc)),n.exp=Tt("",!0,i.loc);else{let s=qt(i.content);(LS.test(s[0])||s[0]==="-")&&(n.exp=Tt(s,!1,i.loc))}}}};function NN(t){return[[CN,TN,oN,RN,cN,wN,EN,mN,dN,bN],{on:U0,bind:SN,model:F0}]}function nb(t,e={}){let n=e.onError||C0,i=e.mode==="module";e.prefixIdentifiers===!0?n(dn(48)):i&&n(dn(49));let s=!1;e.cacheHandlers&&n(dn(50)),e.scopeId&&!i&&n(dn(51));let r=yt({},e,{prefixIdentifiers:s}),o=ft(t)?WS(t,r):t,[a,l]=NN();return HC(o,yt({},r,{nodeTransforms:[...a,...e.nodeTransforms||[]],directiveTransforms:yt({},l,e.directiveTransforms||{})})),XC(o,r)}var ib=()=>({props:[]});var rb=Symbol(""),ob=Symbol(""),ab=Symbol(""),lb=Symbol(""),V0=Symbol(""),cb=Symbol(""),ub=Symbol(""),hb=Symbol(""),db=Symbol(""),fb=Symbol("");PS({[rb]:"vModelRadio",[ob]:"vModelCheckbox",[ab]:"vModelText",[lb]:"vModelSelect",[V0]:"vModelDynamic",[cb]:"withModifiers",[ub]:"withKeys",[hb]:"vShow",[db]:"Transition",[fb]:"TransitionGroup"});var al;function IN(t,e=!1){return al||(al=document.createElement("div")),e?(al.innerHTML=`<div foo="${t.replace(/"/g,"&quot;")}">`,al.children[0].getAttribute("foo")):(al.innerHTML=t,al.textContent)}var PN={parseMode:"html",isVoidTag:_v,isNativeTag:t=>Wm(t)||Xm(t)||$m(t),isPreTag:t=>t==="pre",isIgnoreNewlineTag:t=>t==="pre"||t==="textarea",decodeEntities:IN,isBuiltInComponent:t=>{if(t==="Transition"||t==="transition")return db;if(t==="TransitionGroup"||t==="transition-group")return fb},getNamespace(t,e,n){let i=e?e.ns:n;if(e&&i===2)if(e.tag==="annotation-xml"){if(t==="svg")return 1;e.props.some(s=>s.type===6&&s.name==="encoding"&&s.value!=null&&(s.value.content==="text/html"||s.value.content==="application/xhtml+xml"))&&(i=0)}else/^m(?:[ions]|text)$/.test(e.tag)&&t!=="mglyph"&&t!=="malignmark"&&(i=0);else e&&i===1&&(e.tag==="foreignObject"||e.tag==="desc"||e.tag==="title")&&(i=0);if(i===0){if(t==="svg")return 1;if(t==="math")return 2}return i}},ON=t=>{t.type===1&&t.props.forEach((e,n)=>{e.type===6&&e.name==="style"&&e.value&&(t.props[n]={type:7,name:"bind",arg:Tt("style",!0,e.loc),exp:DN(e.value.content,e.loc),modifiers:[],loc:e.loc})})},DN=(t,e)=>{let n=Gm(t);return Tt(JSON.stringify(n),!1,e,3)};function Vr(t,e){return dn(t,e,void 0)}var LN=(t,e,n)=>{let{exp:i,loc:s}=t;return i||n.onError(Vr(54,s)),e.children.length&&(n.onError(Vr(55,s)),e.children.length=0),{props:[Nn(Tt("innerHTML",!0,s),i||Tt("",!0))]}},UN=(t,e,n)=>{let{exp:i,loc:s}=t;return i||n.onError(Vr(56,s)),e.children.length&&(n.onError(Vr(57,s)),e.children.length=0),{props:[Nn(Tt("textContent",!0),i?Hi(i,n)>0?i:Fn(n.helperString(nu),[i],s):Tt("",!0))]}},FN=(t,e,n)=>{let i=F0(t,e,n);if(!i.props.length||e.tagType===1)return i;t.arg&&n.onError(Vr(59,t.arg.loc));function s(){let a=ki(e,"bind");a&&po(a.arg,"value")&&n.onError(Vr(61,a.loc))}let{tag:r}=e,o=n.isCustomElement(r);if(r==="input"||r==="textarea"||r==="select"||o){let a=ab,l=!1;if(r==="input"||o){let c=su(e,"type");if(c){if(c.type===7)a=V0;else if(c.value)switch(c.value.content){case"radio":a=rb;break;case"checkbox":a=ob;break;case"file":l=!0,n.onError(Vr(60,t.loc));break;default:break}}else VS(e)&&(a=V0)}else r==="select"&&(a=lb);l||(i.needRuntime=n.helper(a))}else n.onError(Vr(58,t.loc));return i.props=i.props.filter(a=>!(a.key.type===4&&a.key.content==="modelValue")),i},VN=si("passive,once,capture"),BN=si("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),kN=si("left,right"),pb=si("onkeyup,onkeydown,onkeypress"),HN=(t,e,n,i)=>{let s=[],r=[],o=[];for(let a=0;a<e.length;a++){let l=e[a].content;l==="native"&&ol("COMPILER_V_ON_NATIVE",n,i)||VN(l)?o.push(l):kN(l)?vi(t)?pb(t.content.toLowerCase())?s.push(l):r.push(l):(s.push(l),r.push(l)):BN(l)?r.push(l):s.push(l)}return{keyModifiers:s,nonKeyModifiers:r,eventOptionModifiers:o}},sb=(t,e)=>vi(t)&&t.content.toLowerCase()==="onclick"?Tt(e,!0):t.type!==4?vs(["(",t,`) === "onClick" ? "${e}" : (`,t,")"]):t,zN=(t,e,n)=>U0(t,e,n,i=>{let{modifiers:s}=t;if(!s.length)return i;let{key:r,value:o}=i.props[0],{keyModifiers:a,nonKeyModifiers:l,eventOptionModifiers:c}=HN(r,s,n,t.loc);if(l.includes("right")&&(r=sb(r,"onContextmenu")),l.includes("middle")&&(r=sb(r,"onMouseup")),l.length&&(o=Fn(n.helper(cb),[o,JSON.stringify(l)])),a.length&&(!vi(r)||pb(r.content.toLowerCase()))&&(o=Fn(n.helper(ub),[o,JSON.stringify(a)])),c.length){let u=c.map(ds).join("");r=vi(r)?Tt(`${r.content}${u}`,!0):vs(["(",r,`) + "${u}"`])}return{props:[Nn(r,o)]}}),GN=(t,e,n)=>{let{exp:i,loc:s}=t;return i||n.onError(Vr(62,s)),{props:[],needRuntime:n.helper(hb)}};var WN=(t,e)=>{t.type===1&&t.tagType===0&&(t.tag==="script"||t.tag==="style")&&e.removeNode()};var XN=[ON],$N={cloak:ib,html:LN,text:UN,model:FN,on:zN,show:GN};function mb(t,e={}){return nb(t,yt({},PN,e,{nodeTransforms:[WN,...XN,...e.nodeTransforms||[]],directiveTransforms:yt({},$N,e.directiveTransforms||{}),transformHoist:null}))}var gb=Object.create(null);function qN(t,e){if(!ft(t))if(t.nodeType)t=t.innerHTML;else return Sn;let n=fv(t,e),i=gb[n];if(i)return i;if(t[0]==="#"){let l=document.querySelector(t);t=l?l.innerHTML:""}let s=yt({hoistStatic:!0,onError:void 0,onWarn:Sn},e);!s.isCustomElement&&typeof customElements<"u"&&(s.isCustomElement=l=>!!customElements.get(l));let{code:r}=mb(t,s);function o(l,c=!1){let u=c?l.message:`Template compilation error: ${l.message}`,h=l.loc&&mv(t,l.loc.start.offset,l.loc.end.offset);Rd(h?`${u}
${h}`:u)}let a=new Function("Vue",r)(t0);return a._rc=!0,gb[n]=a}Gg(qN);var Es=typeof window<"u",Qd=Es?window:null,mo=Es?document:null,Qt={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4},Rt={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3},Xn={NONE:0,AUTO:1,FORCE:2},wn={replace:0,none:1,blend:2},B0=Symbol(),ir=Symbol(),ef=Symbol(),go=Symbol(),_b=Symbol(),At=1e-11,ou=1e12,sr=1e3,au=240,rr="",yb="var(",lu=[],tf=(()=>{let t=new Map;return t.set("x","translateX"),t.set("y","translateY"),t.set("z","translateZ"),t})(),ll=["perspective","translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY"],vb=ll.reduce((t,e)=>({...t,[e]:e+"("}),{}),Ii=()=>{},Eb=t=>t,xb=/\)\s*[-.\d]/,Sb=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,bb=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,Tb=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,Mb=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,wb=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,k0=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,Ab=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,Rb=/([a-z])([A-Z])/g,Cb=/(\*=|\+=|-=)/,Nb=/var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/;var cl={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:au,loop:0,reversed:!1,alternate:!1,autoplay:!0,persist:!1,duration:sr,delay:0,loopDelay:0,ease:"out(2)",composition:wn.replace,modifier:Eb,onBegin:Ii,onBeforeUpdate:Ii,onUpdate:Ii,onLoop:Ii,onPause:Ii,onComplete:Ii,onRender:Ii},cu={current:null,root:mo},Ut={defaults:cl,precision:4,timeScale:1,tickThreshold:200,editor:null},H0={version:"4.5.0",engine:null};Es&&(Qd.AnimeJS||(Qd.AnimeJS=[]),Qd.AnimeJS.push(H0));var z0=t=>t.replace(Rb,"$1-$2").toLowerCase(),Qi=(t,e)=>t.indexOf(e)===0,Br=Date.now,_o=Array.isArray,da=t=>t&&t.constructor===Object,ul=t=>typeof t=="number"&&!isNaN(t),Is=t=>typeof t=="string",xs=t=>typeof t=="function",xt=t=>typeof t>"u",or=t=>xt(t)||t===null,nf=t=>Es&&t instanceof SVGElement,G0=t=>Sb.test(t),W0=t=>Qi(t,"rgb"),X0=t=>Qi(t,"hsl"),Pb=t=>G0(t)||(W0(t)||X0(t))&&(t[t.length-1]===")"||!xb.test(t)),uu=t=>!Ut.defaults.hasOwnProperty(t),YN=["opacity","rotate","overflow","color"],Ob=(t,e)=>{if(YN.includes(e))return!1;if(t.getAttribute(e)||e in t){if(e==="scale"){let n=t.parentNode;return n&&n.tagName==="filter"}return!0}};var fa=Math.pow,Db=Math.sqrt,Lb=Math.sin,Ub=Math.cos;var Fb=Math.floor,Vb=Math.asin;var hu=Math.PI,Ib=Math.round,zi=(t,e,n)=>t<e?e:t>n?n:t,Zt=(t,e)=>{if(e<0)return t;if(!e)return Ib(t);let n=10**e;return Ib(t*n)/n};var hl=(t,e,n)=>n===1?e:n===0?t:t+(e-t)*n,pa=t=>t===1/0?ou:t===-1/0?-ou:t,kr=t=>t<=At?At:pa(Zt(t,11)),Vn=t=>_o(t)?[...t]:t,sf=(t,e)=>{let n={...t};for(let i in e){let s=t[i];n[i]=xt(s)?e[i]:s}return n},Jt=(t,e,n,i="_prev",s="_next")=>{let r=t._head,o=s;for(n&&(r=t._tail,o=i);r;){let a=r[o];e(r),r=a}},Hr=(t,e,n="_prev",i="_next")=>{let s=e[n],r=e[i];s?s[i]=r:t._head=r,r?r[n]=s:t._tail=s,e[n]=null,e[i]=null},Ps=(t,e,n,i="_prev",s="_next")=>{let r=t._tail;for(;r&&n&&n(r,e);)r=r[i];let o=r?r[s]:t._head;r?r[s]=e:t._head=e,o?o[i]=e:t._tail=e,e[i]=r,e[s]=o};var Bb=(t,e,n)=>{let i=t.style.transform;if(i){let s=t[go],r=0,o=i.length,a;for(;r<o;){for(;r<o&&i.charCodeAt(r)===32;)r++;if(r>=o)break;let c=r;for(;r<o&&i.charCodeAt(r)!==40;)r++;if(r>=o)break;let u=i.substring(c,r),h=1,d=r+1,f=-1,p=-1;for(r++;r<o&&h>0;){let g=i.charCodeAt(r);g===40?h++:g===41?h--:g===44&&h===1&&(f===-1?f=r:p===-1&&(p=r)),r++}let _=r-1;u==="translate"||u==="translate3d"?(f===-1?s.translateX=i.substring(d,_).trim():(s.translateX=i.substring(d,f).trim(),p===-1?s.translateY=i.substring(f+1,_).trim():(s.translateY=i.substring(f+1,p).trim(),s.translateZ=i.substring(p+1,_).trim())),a=i.substring(d,_)):u==="scale"||u==="scale3d"?f===-1?s.scale=i.substring(d,_).trim():(s.scaleX=i.substring(d,f).trim(),p===-1?s.scaleY=i.substring(f+1,_).trim():(s.scaleY=i.substring(f+1,p).trim(),s.scaleZ=i.substring(p+1,_).trim())):s[u]=i.substring(d,_)}if(e==="translate3d"&&a)return n&&(n[e]=a),a;let l=s[e];if(!xt(l))return n&&(n[e]=l),l}return e==="translate3d"?"0px, 0px, 0px":e==="rotate3d"?"0, 0, 0, 0deg":Qi(e,"scale")?"1":Qi(e,"rotate")||Qi(e,"skew")?"0deg":"0px"},rf=t=>{let e=rr;for(let n=0,i=ll.length;n<i;n++){let s=ll[n],r=t[s];if(r!==void 0){if(s==="translateX"){let o=t.translateY;if(o!==void 0){let a=t.translateZ;a!==void 0?(e+=`translate3d(${r},${o},${a}) `,n+=2):(e+=`translate(${r},${o}) `,n+=1);continue}}if(s==="scaleX"&&t.scale===void 0){let o=t.scaleY;if(o!==void 0){let a=t.scaleZ;a!==void 0?(e+=`scale3d(${r},${o},${a}) `,n+=2):(e+=`scale(${r},${o}) `,n+=1);continue}}e+=`${vb[s]}${r}) `}s==="rotateZ"&&t.rotate3d!==void 0&&(e+=`rotate3d(${t.rotate3d}) `)}return t.matrix!==void 0&&(e+=`matrix(${t.matrix}) `),t.matrix3d!==void 0&&(e+=`matrix3d(${t.matrix3d}) `),e};var $0=[];function of(t,e){if(!t)return null;let n=$0.length;e:for(let i=0;i<n;i++){let s=$0[i];if(s.detect&&!s.detect(t))continue;let r=s.targetAdapters;for(let o=0,a=r.length;o<a;o++){let l=r[o];if(l.detect(t)){let c=l.props[e];if(c&&(!c.gate||c.gate(t)))return c;break e}}}for(let i=0;i<n;i++){let s=$0[i];if(s.detect&&!s.detect(t))continue;let r=s.propertyResolvers;for(let o=0,a=r.length;o<a;o++){let l=r[o](t,e);if(l)return l}}return null}var KN=t=>{let e=bb.exec(t)||Tb.exec(t),n=xt(e[4])?1:+e[4];return[+e[1],+e[2],+e[3],n]},JN=t=>{let e=t.length,n=e===4||e===5;return[+("0x"+t[1]+t[n?1:2]),+("0x"+t[n?2:3]+t[n?2:4]),+("0x"+t[n?3:5]+t[n?3:6]),e===5||e===9?+(+("0x"+t[n?4:7]+t[n?4:8])/255).toFixed(3):1]},q0=(t,e,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t),jN=t=>{let e=Mb.exec(t)||wb.exec(t),n=+e[1]/360,i=+e[2]/100,s=+e[3]/100,r=xt(e[4])?1:+e[4],o,a,l;if(i===0)o=a=l=s;else{let c=s<.5?s*(1+i):s+i-s*i,u=2*s-c;o=Zt(q0(u,c,n+1/3)*255,0),a=Zt(q0(u,c,n)*255,0),l=Zt(q0(u,c,n-1/3)*255,0)}return[o,a,l,r]},kb=t=>W0(t)?KN(t):G0(t)?JN(t):X0(t)?jN(t):[0,0,0,1];var An=(t,e)=>xt(t)?e:t,Hb=(t,e)=>{let n=t.match(Nb),i=e[ir]?e:document.documentElement,s=getComputedStyle(i)?.getPropertyValue(n[1]);return(!s||s.trim()===rr)&&n[2]&&(s=n[2].trim()),s||0},ar=(t,e,n,i,s,r)=>{if(xs(t)){if(!s){let a=t(e,n,i,r);return isNaN(+a)?a||0:+a}let o=()=>{let a=t(e,n,i,r);return isNaN(+a)?a||0:+a};return s.func=o,o()}if(Is(t)&&Qi(t,yb)){if(!s)return Hb(t,e);let o=()=>Hb(t,e);return s.func=o,o()}return t},Y0=(t,e)=>t[ir]?t[ef]&&Ob(t,e)?Qt.ATTRIBUTE:ll.includes(e)||tf.get(e)?Qt.TRANSFORM:Qi(e,"--")?Qt.CSS_VAR:e in t.style?Qt.CSS:e in t?Qt.OBJECT:Qt.ATTRIBUTE:Qt.OBJECT,zb=(t,e,n)=>{let i=t.style[e];i&&n&&(n[e]=i);let s=i||getComputedStyle(t[_b]||t).getPropertyValue(e);return s==="auto"?"0":s},dl=(t,e,n,i)=>{let s=xt(n)?Y0(t,e):n,r=of(t,e);if(r){let o=r.get(t);return o&&i&&(i[e]=o),o??0}if(s===Qt.OBJECT){let o=t[e];return o&&i&&(i[e]=o),o||0}if(s===Qt.ATTRIBUTE){let o=t.getAttribute(e);return o&&i&&(i[e]=o),o}return s===Qt.TRANSFORM?Bb(t,e,i):s===Qt.CSS_VAR?zb(t,e,i).trimStart():zb(t,e,i)},fl=(t,e,n)=>n==="-"?t-e:n==="+"?t+e:t*e,af=()=>({t:Rt.NUMBER,n:0,u:null,o:null,d:null,s:null}),Gi=(t,e)=>{if(e.t=Rt.NUMBER,e.n=0,e.u=null,e.o=null,e.d=null,e.s=null,!t)return e;let n=+t;if(!isNaN(n))return e.n=n,e;let i=t;i[1]==="="&&(e.o=i[0],i=i.slice(2));let s=i.includes(" ")?!1:Ab.exec(i);if(s)return e.t=Rt.UNIT,e.n=+s[1],e.u=s[2],e;if(e.o)return e.n=+i,e;if(Pb(i))return e.t=Rt.COLOR,e.d=kb(i),e;{let r=i.match(k0);return e.t=Rt.COMPLEX,e.d=r?r.map(Number):[],e.s=i.split(k0)||[],e}},K0=(t,e)=>(e.t=t._valueType,e.n=t._toNumber,e.u=t._unit,e.o=null,e.d=Vn(t._toNumbers),e.s=Vn(t._strings),e),es=af(),lf=(t,e,n)=>{let i=t._modifier,s=t._fromNumbers,r=t._toNumbers,o=t._strings,a=o[0];for(let l=0,c=r.length;l<c;l++){let u=i(Zt(hl(s[l],r[l],e),n)),h=o[l+1];a+=`${h?u+h:u}`,t._numbers[l]=u}return a};var du=(t,e,n,i,s)=>{let r=t.parent,o=t.duration,a=t.completed,l=t.iterationDuration,c=t.iterationCount,u=t._currentIteration,h=t._loopDelay,d=t._reversed,f=t._alternate,p=t._hasChildren,_=t._delay,g=t._currentTime,m=_+l,x=e-_,E=zi(g,-_,o),y=zi(x,-_,o),S=x-g,T=y>0,R=y>=o,v=o<=At,M=s===Xn.FORCE,w=0,F=x,U=0;if(c>1){let K=l+(R?0:h),te=~~(y/K);t._currentIteration=zi(te,0,c),R&&t._currentIteration--,w=t._currentIteration%2,F=y-te*K||0}let H=d^(f&&w),V=t._ease,k=R?H?0:o:H?l-F:F;V&&(k=l*V(k/l)||0);let G=(r?r.backwards:x<g)?!H:!!H;if(t._currentTime=x,t._iterationTime=k,t.backwards=G,T&&!t.began?(t.began=!0,!n&&!(r&&(G||!r.began))&&t.onBegin(t)):x<=0&&(t.began=!1),!n&&!p&&T&&t._currentIteration!==u&&t.onLoop(t),M||s===Xn.AUTO&&(e>=(r&&_>0?0:_)&&e<=m||e<=_&&E>_||e>=m&&E!==o)||k>=m&&E!==o||k<=_&&E>0&&!R||e<=E&&E===o&&a||R&&!a&&v){if(T&&(t.computeDeltaTime(E),n||t.onBeforeUpdate(t)),!p){let K=M||(G?S*-1:S)>=Ut.tickThreshold,te=Zt(t._offset+(r?r._offset:0)+_+k,12),W=t._head,Q,ae,we,Ie,gt=0;for(;W;){let ot=W._composition,$e=W._currentTime,re=W._changeDuration,me=W._absoluteStartTime+W._changeDuration,Te=W._nextRep,ze=W._prevRep,Oe=ot!==wn.none,We=ze?ze._absoluteStartTime+ze._changeDuration:0,pt=ze&&ze.parent!==W.parent,A=!Te||Te._isOverridden?me:Te.parent===W.parent?me+Te._delay:Te._absoluteStartTime<Te._absoluteUpdateStartTime?Te._absoluteStartTime:Te._absoluteUpdateStartTime;if((K||($e!==re||te<=A||ze&&!pt&&(!Te||Te.parent!==W.parent))&&($e!==0||te>=W._absoluteStartTime||pt&&!W._hasFromValue&&!ze._isOverridden&&te>=We||Te&&!Te._isOverridden&&Te.parent===W.parent&&Te._currentTime!==0&&k<Te._startTime))&&(!ze||pt||k>=W._startTime)&&(!Oe||!W._isOverridden&&(!W._isOverlapped||te<=me)&&(!Te||Te._isOverridden||te<=A)&&(!ze||ze._isOverridden||(pt?te>=W._absoluteStartTime||!W._hasFromValue&&te>=We:te>=We+W._delay)))){let L=W._currentTime=zi(k-W._startTime,0,re),z=W._ease(L/W._updateDuration),Y=W._modifier,q=W._valueType,ne=W._tweenType,se=ne===Qt.OBJECT,X=q===Rt.NUMBER,ce=X&&se||z===0||z===1?-1:Ut.precision,P,Ae;if(X)P=Ae=Y(Zt(hl(W._fromNumber,W._toNumber,z),ce));else if(q===Rt.UNIT)Ae=Y(Zt(hl(W._fromNumber,W._toNumber,z),ce)),P=`${Ae}${W._unit}`;else if(q===Rt.COLOR){let pe=W._numbers,I=W._fromNumbers,b=W._toNumbers,$=1-z,Z=I[0],ee=I[1],Se=I[2],xe=b[0],ue=b[1],fe=b[2];pe[0]=Y(Math.sqrt(Z*Z*$+xe*xe*z)),pe[1]=Y(Math.sqrt(ee*ee*$+ue*ue*z)),pe[2]=Y(Math.sqrt(Se*Se*$+fe*fe*z)),pe[3]=Y(hl(I[3],b[3],z)),(!W._setter||i)&&(P=`rgba(${Zt(pe[0],0)},${Zt(pe[1],0)},${Zt(pe[2],0)},${pe[3]})`)}else q===Rt.COMPLEX&&(P=lf(W,z,ce));if(Oe&&(W._number=Ae),!i&&ot!==wn.blend){let pe=W.property;Q=W.target,W._setter?W._setter(Q,Ae,W):se?Q[pe]=P:ne===Qt.ATTRIBUTE?Q.setAttribute(pe,P):(ae=Q.style,ne===Qt.TRANSFORM?(Q!==we&&(we=Q,Ie=Q[go]),Ie[pe]=P,gt=1):ne===Qt.CSS?ae[pe]=P:ne===Qt.CSS_VAR&&ae.setProperty(pe,P)),T&&(U=1)}else W._value=P}else $e&&ze&&!pt&&k<W._startTime&&(W._currentTime=0);gt&&W._renderTransforms&&(ae.transform=rf(Ie),gt=0),W=W._next}!n&&U&&t.onRender(t)}!n&&T&&t.onUpdate(t)}return r&&v?!n&&(r.began&&!G&&x>0&&!a||G&&x<=At&&a)&&(t.onComplete(t),t.completed=!G):T&&R?c===1/0?t._startTime+=t.duration:t._currentIteration>=c-1&&(t.paused=!0,!a&&!p&&(t.completed=!0,!n&&!(r&&(G||!r.began))&&(t.onComplete(t),t._resolve(t)))):t.completed=!1,U},lr=(t,e,n,i,s)=>{let r=t._currentIteration;if(du(t,e,n,i,s),t._hasChildren){let o=t,a=o.backwards,l=i?e:o._iterationTime,c=Br(),u=0,h=!0;if(!i&&o._currentIteration!==r){let d=o.iterationDuration;Jt(o,f=>{if(!a)!f.completed&&!f.backwards&&f._currentTime<f.iterationDuration&&du(f,d,n,1,Xn.FORCE),f.began=!1,f.completed=!1;else{let p=f.duration,_=f._offset+f._delay,g=_+p;!n&&p<=At&&(!_||g===d)&&f.onComplete(f)}}),n||o.onLoop(o)}Jt(o,d=>{let f=Zt((l-d._offset)*d._speed,12);if(a&&f>d._delay+d.duration)return;let p=d._fps<o._fps?d.requestTick(c):s;u+=du(d,f,n,i,p),!d.completed&&h&&(h=!1)},a),!n&&u&&o.onRender(o),(h||a)&&o._currentTime>=o.duration&&(o.paused=!0,o.completed||(o.completed=!0,n||(o.onComplete(o),o._resolve(o))))}};var Gb={},cf=(t,e,n)=>{if(n===Qt.TRANSFORM){let i=tf.get(t);return i||t}else if(n===Qt.CSS||n===Qt.ATTRIBUTE&&nf(e)&&t in e.style){let i=Gb[t];if(i)return i;{let s=t&&z0(t);return Gb[t]=s,s}}else return t},fu=(t,e=!1)=>{if(t._hasChildren)Jt(t,n=>fu(n,e),!0);else{let n=t;n.pause(),Jt(n,i=>{let s=i.property,r=i.target,o=i._tweenType,a=i._inlineValue,l=or(a)||a===rr;if(i._setter){if(!e&&!l){if(Gi(a,es),es.d){let c=es.d,u=i._numbers;for(let h=0,d=c.length;h<d;h++)u[h]=c[h]}else i._number=es.n;i._setter(i.target,i._number,i)}}else if(o===Qt.OBJECT)!e&&!l&&(r[s]=a);else if(r[ir])if(o===Qt.ATTRIBUTE)e||(l?r.removeAttribute(s):r.setAttribute(s,a));else{let c=r.style;if(o===Qt.TRANSFORM){let u=r[go];l?delete u[s]:u[s]=a,i._renderTransforms&&(Object.keys(u).length?c.transform=rf(u):c.removeProperty("transform"))}else l?c.removeProperty(z0(s)):c[s]=a}r[ir]&&n._tail===i&&n.targets.forEach(c=>{c.getAttribute&&c.getAttribute("style")===rr&&c.removeAttribute("style")})})}return t};var pl=class{constructor(e=0){this.deltaTime=0,this._currentTime=e,this._lastTickTime=e,this._startTime=e,this._lastTime=e,this._frameDuration=sr/au,this._fps=au,this._speed=1,this._hasChildren=!1,this._head=null,this._tail=null}get fps(){return this._fps}set fps(e){let n=+e,i=n<At?At:n,s=sr/i;i>cl.frameRate&&(cl.frameRate=i),this._fps=i,this._frameDuration=s}get speed(){return this._speed}set speed(e){let n=+e;this._speed=n<At?At:n}requestTick(e){let n=this._frameDuration,i=e-this._lastTickTime,s=n*.25,r=s<4?s:4;return i+r<n?Xn.NONE:(this._lastTickTime=i>=n?e-i%n:e,Xn.AUTO)}computeDeltaTime(e){let n=e-this._lastTime;return this.deltaTime=n,this._lastTime=e,n}};var zr={animation:null,update:Ii},Wb=t=>{let e=zr.animation;return e||(e={duration:At,computeDeltaTime:Ii,_offset:0,_delay:0,_head:null,_tail:null},zr.animation=e,zr.update=()=>{t.forEach(n=>{for(let i in n){let s=n[i],r=s._head;if(r){let o=r._valueType,a=o===Rt.COMPLEX||o===Rt.COLOR?Vn(r._fromNumbers):null,l=r._fromNumber,c=s._tail;for(;c&&c!==r;){if(a)for(let u=0,h=c._numbers.length;u<h;u++)a[u]+=c._numbers[u];else l+=c._number;c=c._prevAdd}r._toNumber=l,r._toNumbers=a}}}),du(e,1,1,0,Xn.FORCE)}),e};var Xb=Es?requestAnimationFrame:setImmediate,ZN=Es?cancelAnimationFrame:clearImmediate,J0=class extends pl{constructor(e){super(e),this.useDefaultMainLoop=!0,this.pauseOnDocumentHidden=!0,this.defaults=cl,this.paused=!0,this.reqId=0}update(){let e=this._currentTime=Br();if(this.requestTick(e)){this.computeDeltaTime(e);let n=this._speed,i=this._fps,s=this._head;for(;s;){let r=s._next;s.paused?(Hr(this,s),this._hasChildren=!!this._tail,s._running=!1,s.completed&&!s._cancelled&&s.cancel()):lr(s,(e-s._startTime)*s._speed*n,0,0,s._fps<i?s.requestTick(e):Xn.AUTO),s=r}zr.update()}}wake(){return this.useDefaultMainLoop&&!this.reqId&&(this.requestTick(Br()),this.reqId=Xb($b)),this}pause(){if(this.reqId)return this.paused=!0,QN()}resume(){if(this.paused)return this.paused=!1,Jt(this,e=>e.resetTime()),this.wake()}get speed(){return this._speed*(Ut.timeScale===1?1:sr)}set speed(e){let n=e*Ut.timeScale;this._speed!==n&&(this._speed=n,Jt(this,i=>i.speed=i._speed))}get timeUnit(){return Ut.timeScale===1?"ms":"s"}set timeUnit(e){let i=e==="s",s=i?.001:1;if(Ut.timeScale!==s){Ut.timeScale=s,Ut.tickThreshold=200*s;let r=i?.001:sr;this.defaults.duration*=r,this._speed*=r}}get precision(){return Ut.precision}set precision(e){Ut.precision=e}},$n=(()=>{let t=new J0(Br());return Es&&(H0.engine=t,mo.addEventListener("visibilitychange",()=>{t.pauseOnDocumentHidden&&(mo.hidden?t.pause():t.resume())})),t})(),$b=()=>{$n._head?($n.reqId=Xb($b),$n.update()):$n.reqId=0},QN=()=>(ZN($n.reqId),$n.reqId=0,$n);var uf={_rep:new WeakMap,_add:new Map},mu=(t,e,n="_rep")=>{let i=uf[n],s=i.get(t);return s||(s={},i.set(t,s)),s[e]?s[e]:s[e]={_head:null,_tail:null}},eI=(t,e)=>t._isOverridden||t._absoluteStartTime>e._absoluteStartTime,pu=t=>{t._isOverlapped=1,t._isOverridden=1,t._changeDuration=At,t._currentTime=At},hf=(t,e)=>{let n=t._composition;if(n===wn.replace){let i=t._absoluteStartTime;Ps(e,t,eI,"_prevRep","_nextRep");let s=t._prevRep;if(s){let r=s.parent,o=s._absoluteEndTime;if(t.parent.id!==r.id&&r.iterationCount>1&&o+(r.duration-r.iterationDuration)>i){pu(s);let c=s._prevRep;for(;c&&c.parent.id===r.id;)pu(c),c=c._prevRep}let a=t._absoluteUpdateStartTime;if(o>a){let c=s._startTime,u=o-(c+s._updateDuration),h=Zt(a-u-c,12);s._changeDuration=h,s._currentTime=h,s._isOverlapped=1,h<At&&pu(s)}let l=t.parent.parent;if(!l||l!==r.parent){let c=!0;if(Jt(r,u=>{u._isOverlapped||(c=!1)}),c){let u=r.parent;if(u){let h=!0;Jt(u,d=>{d!==r&&Jt(d,f=>{f._isOverlapped||(h=!1)})}),h&&u.cancel()}else r.cancel()}}}}else if(n===wn.blend){let i=mu(t.target,t.property,"_add"),s=Wb(uf._add),r=i._head;r||(r={...t},r._composition=wn.replace,r._updateDuration=At,r._startTime=0,r._numbers=Vn(t._fromNumbers),r._number=0,r._next=null,r._prev=null,Ps(i,r),Ps(s,r));let o=t._toNumber;if(t._fromNumber=r._fromNumber-o,t._toNumber=0,t._numbers=Vn(t._fromNumbers),t._number=0,r._fromNumber=o,t._toNumbers.length){let a=Vn(t._toNumbers);a.forEach((l,c)=>{t._fromNumbers[c]=r._fromNumbers[c]-l,t._toNumbers[c]=0}),r._fromNumbers=a}Ps(i,t,null,"_prevAdd","_nextAdd")}return t},j0=t=>{let e=t._composition;if(e!==wn.none){let n=t.target,i=t.property,o=uf._rep.get(n)[i];if(Hr(o,t,"_prevRep","_nextRep"),e===wn.blend){let a=uf._add,l=a.get(n);if(!l)return;let c=l[i],u=zr.animation;Hr(c,t,"_prevAdd","_nextAdd");let h=c._head;if(h&&h===c._tail){Hr(c,h,"_prevAdd","_nextAdd"),Hr(u,h);let d=!0;for(let f in l)if(l[f]._head){d=!1;break}d&&a.delete(n)}}}return t},qb=(t,e,n)=>{let i=!1;return Jt(e,s=>{let r=s.target;if(t.includes(r)){let o=s.property,a=s._tweenType,l=cf(n,r,a);(!l||l&&l===o)&&(s.parent._tail===s&&s._tweenType===Qt.TRANSFORM&&s._prev&&s._prev._tweenType===Qt.TRANSFORM&&(s._prev._renderTransforms=1),Hr(e,s),j0(s),i=!0)}},!0),i},Z0=(t,e,n)=>{let i=e||$n,s;if(i._hasChildren){let r=0;Jt(i,o=>{if(!o._hasChildren)if(s=qb(t,o,n),s&&!o._head)o.cancel(),Hr(i,o);else{let l=o._offset+o._delay+o.duration;l>r&&(r=l)}o._head?Z0(t,o,n):o._hasChildren=!1},!0),xt(i.iterationDuration)||(i.iterationDuration=r)}else s=qb(t,i,n);s&&!i._head&&(i._hasChildren=!1,i.cancel&&i.cancel())};var Yb=t=>(t.paused=!0,t.began=!1,t.completed=!1,t),Q0=t=>(t._cancelled&&(t._hasChildren?Jt(t,Q0):Jt(t,e=>{e._composition!==wn.none&&hf(e,mu(e.target,e.property))}),t._cancelled=0),t),Kb=0,tI=(t,e)=>t._priority>e._priority,ma=class extends pl{constructor(e={},n=null,i=0){super(0),++Kb;let{id:s,delay:r,duration:o,reversed:a,alternate:l,loop:c,loopDelay:u,autoplay:h,frameRate:d,playbackRate:f,priority:p,onComplete:_,onLoop:g,onPause:m,onBegin:x,onBeforeUpdate:E,onUpdate:y}=e;cu.current&&cu.current.register(this);let S=n?0:$n._lastTickTime,T=n?n.defaults:Ut.defaults,R=xs(r)||xt(r)?T.delay:+r,v=xs(o)||xt(o)?1/0:+o,M=An(c,T.loop),w=An(u,T.loopDelay),F=M===!0||M===1/0||M<0?1/0:M+1,U=0;n?U=i:($n.reqId||$n.requestTick(Br()),U=($n._lastTickTime-$n._startTime)*Ut.timeScale),this.id=xt(s)?Kb:s,this.parent=n,this.duration=pa((v+w)*F-w)||At,this.backwards=!1,this.paused=!0,this.began=!1,this.completed=!1,this.onBegin=x||T.onBegin,this.onBeforeUpdate=E||T.onBeforeUpdate,this.onUpdate=y||T.onUpdate,this.onLoop=g||T.onLoop,this.onPause=m||T.onPause,this.onComplete=_||T.onComplete,this.iterationDuration=v,this.iterationCount=F,this._autoplay=n?!1:An(h,T.autoplay),this._offset=U,this._delay=R,this._loopDelay=w,this._iterationTime=0,this._currentIteration=0,this._resolve=Ii,this._running=!1,this._reversed=+An(a,T.reversed),this._reverse=this._reversed,this._cancelled=0,this._alternate=An(l,T.alternate),this._prev=null,this._next=null,this._lastTickTime=S,this._startTime=S,this._lastTime=S,this._fps=An(d,T.frameRate),this._speed=An(f,T.playbackRate),this._priority=+An(p,1)}get cancelled(){return!!this._cancelled}set cancelled(e){e?this.cancel():this.reset(!0).play()}get currentTime(){return zi(Zt(this._currentTime,Ut.precision),-this._delay,this.duration)}set currentTime(e){let n=this.paused;this.pause().seek(+e),n||this.resume()}get iterationCurrentTime(){return zi(Zt(this._iterationTime,Ut.precision),0,this.iterationDuration)}set iterationCurrentTime(e){this.currentTime=this.iterationDuration*this._currentIteration+e}get progress(){return zi(Zt(this._currentTime/this.duration,10),0,1)}set progress(e){this.currentTime=this.duration*e}get iterationProgress(){return zi(Zt(this._iterationTime/this.iterationDuration,10),0,1)}set iterationProgress(e){let n=this.iterationDuration;this.currentTime=n*this._currentIteration+n*e}get currentIteration(){return this._currentIteration}set currentIteration(e){this.currentTime=this.iterationDuration*zi(+e,0,this.iterationCount-1)}get reversed(){return!!this._reversed}set reversed(e){e?this.reverse():this.play()}get speed(){return super.speed}set speed(e){super.speed=e,this.resetTime()}reset(e=!1){return Q0(this),this._reversed&&!this._reverse&&(this.reversed=!1),this._iterationTime=this.iterationDuration,lr(this,0,1,~~e,Xn.FORCE),Yb(this),this._hasChildren&&Jt(this,Yb),this}init(e=!1){this.fps=this._fps,this.speed=this._speed,!e&&this._hasChildren&&lr(this,this.duration,1,~~e,Xn.FORCE),this.reset(e);let n=this._autoplay;return n===!0?this.resume():n&&!xt(n.linked)&&n.link(this),this}resetTime(){let e=1/(this._speed*$n._speed);return this._startTime=Br()-(this._currentTime+this._delay)*e,this}pause(){return this.paused?this:(this.paused=!0,this.onPause(this),this)}resume(){return this.paused?(this.paused=!1,this.duration<=At&&!this._hasChildren?lr(this,At,0,0,Xn.FORCE):(this._running||(Ps($n,this,tI),$n._hasChildren=!0,this._running=!0),this.resetTime(),this._startTime-=12,$n.wake()),this):this}restart(){return this.reset().resume()}seek(e,n=0,i=0){Q0(this),this.completed=!1;let s=this.paused;return this.paused=!0,lr(this,e+this._delay,~~n,~~i,Xn.AUTO),s?this:this.resume()}alternate(){let e=this._reversed,n=this.iterationCount,i=this.iterationDuration,s=n===1/0?Fb(ou/i):n;return this._reversed=+(this._alternate&&!(s%2)?e:!e),n===1/0?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(i*s-this._currentTime),this.resetTime(),this}play(){return this._reversed&&this.alternate(),this.resume()}reverse(){return this._reversed||this.alternate(),this.resume()}cancel(){return this._hasChildren?Jt(this,e=>e.cancel(),!0):Jt(this,j0),this._cancelled=1,this.pause()}stretch(e){let n=this.duration,i=kr(e);if(n===i)return this;let s=e/n,r=e<=At;return this.duration=r?At:i,this.iterationDuration=r?At:kr(this.iterationDuration*s),this._offset*=s,this._delay*=s,this._loopDelay*=s,this}revert(){lr(this,0,1,0,Xn.AUTO);let e=this._autoplay;return e&&e.linked&&e.linked===this&&e.revert(),this.cancel()}complete(e=0){return this.seek(this.duration,e).cancel()}then(e=Ii){let n=this.then,i=()=>{this.then=null,e(this),this.then=n,this._resolve=Ii};return new Promise(s=>(this._resolve=()=>s(i()),this.completed&&this._resolve(),this))}};function Jb(t){let e=Is(t)?cu.root.querySelectorAll(t):t;if(e instanceof NodeList||e instanceof HTMLCollection)return e}function df(t){if(or(t))return[];if(!Es)return _o(t)&&t.flat(1/0)||[t];if(_o(t)){let n=t.flat(1/0),i=[];for(let s=0,r=n.length;s<r;s++){let o=n[s];if(!or(o)){let a=Jb(o);if(a)for(let l=0,c=a.length;l<c;l++){let u=a[l];if(!or(u)){let h=!1;for(let d=0,f=i.length;d<f;d++)if(i[d]===u){h=!0;break}h||i.push(u)}}else{let l=!1;for(let c=0,u=i.length;c<u;c++)if(i[c]===o){l=!0;break}l||i.push(o)}}}return i}let e=Jb(t);return e?Array.from(e):[t]}function jb(t){let e=df(t),n=e.length;for(let i=0;i<n;i++){let s=e[i];if(!s[B0]){s[B0]=!0;let r=nf(s);(s.nodeType||r)&&(s[ir]=!0,s[ef]=r,s[go]={})}}return e}var e_={deg:1,rad:180/hu,turn:360},Zb={},t_=(t,e,n,i=!1)=>{let s=e.u,r=e.n;if(e.t===Rt.UNIT&&s===n)return e;let o=r+s+n,a=Zb[o];if(!xt(a)&&!i)e.n=a;else{let l;if(s in e_)l=r*e_[s]/e_[n];else{let u=t.cloneNode(),h=t.parentNode,d=h&&h!==mo?h:mo.body;d.appendChild(u);let f=u.style;f.width=100+s;let p=u.offsetWidth||100;f.width=100+n;let _=u.offsetWidth||100,g=p/_;d.removeChild(u),l=g*r}e.n=l,Zb[o]=l}return e.t,Rt.UNIT,e.u=n,e};var Gr=t=>t;var gu=(t=1.68)=>e=>fa(e,+t),i_={in:t=>e=>t(e),out:t=>e=>1-t(1-e),inOut:t=>e=>e<.5?t(e*2)/2:1-t(e*-2+2)/2,outIn:t=>e=>e<.5?(1-t(1-e*2))/2:(t(e*2-1)+1)/2},nI=hu/2,Qb=hu*2,eT={[rr]:gu,Quad:gu(2),Cubic:gu(3),Quart:gu(4),Quint:gu(5),Sine:t=>1-Ub(t*nI),Circ:t=>1-Db(1-t*t),Expo:t=>t?fa(2,10*t-10):0,Bounce:t=>{let e,n=4;for(;t<((e=fa(2,--n))-1)/11;);return 1/fa(4,3-n)-7.5625*fa((e*3-2)/22-t,2)},Back:(t=1.7)=>e=>(+t+1)*e*e*e-+t*e*e,Elastic:(t=1,e=.3)=>{let n=zi(+t,1,10),i=zi(+e,At,2),s=i/Qb*Vb(1/n),r=Qb/i;return o=>o===0||o===1?o:-n*fa(2,-10*(1-o))*Lb((1-o-s)*r)}},n_=(()=>{let t={linear:Gr,none:Gr};for(let e in i_)for(let n in eT){let i=eT[n],s=i_[e];t[e+n]=n===rr||n==="Back"||n==="Elastic"?(r,o)=>s(i(r,o)):s(i)}return t})(),ff={linear:Gr,none:Gr},iI=t=>{if(ff[t])return ff[t];if(t.indexOf("(")<=-1){let n=i_[t]||t.includes("Back")||t.includes("Elastic")?n_[t]():n_[t];return n?ff[t]=n:Gr}else{let e=t.slice(0,-1).split("("),n=n_[e[0]];return n?ff[t]=n(...e[1].split(",")):Gr}},tT=["steps(","irregular(","linear(","cubicBezier("],_u=t=>{if(Is(t)){for(let n=0,i=tT.length;n<i;n++)if(Qi(t,tT[n]))return console.warn(`String syntax for \`ease: "${t}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${t}\``),Gr}return xs(t)?t:Is(t)?iI(t):Gr};var _t=af(),Ct=af(),ml={},pf={func:null},mf={func:null},gf=[null],gl=[null,null],_f={to:null},sI=0,nT=0,yo,cr,rI=(t,e)=>{let n={};if(_o(t)){let i=[].concat(...t.map(s=>Object.keys(s))).filter(uu);for(let s=0,r=i.length;s<r;s++){let o=i[s],a=t.map(l=>{let c={};for(let u in l){let h=l[u];uu(u)?u===o&&(c.to=h):c[u]=h}return c});n[o]=a}}else{let i=An(e.duration,Ut.defaults.duration);Object.keys(t).map(r=>({o:parseFloat(r)/100,p:t[r]})).sort((r,o)=>r.o-o.o).forEach(r=>{let o=r.o,a=r.p;for(let l in a)if(uu(l)){let c=n[l];c||(c=n[l]=[]);let u=o*i,h=c.length,d=c[h-1],f={to:a[l]},p=0;for(let _=0;_<h;_++)p+=c[_].duration;h===1&&(f.from=d.to),a.ease&&(f.ease=a.ease),f.duration=u-(h?p:0),c.push(f)}return r});for(let r in n){let o=n[r],a;for(let l=0,c=o.length;l<c;l++){let u=o[l],h=u.ease;u.ease=a||void 0,a=h}o[0].duration||o.shift()}}return n},_l=class extends ma{constructor(e,n,i,s,r=!1,o=0,a){super(n,i,s),this._head,this._tail,++nT;let l=jb(e),c=l.length,u=n.keyframes,h=u?sf(rI(u,n),n):n,{id:d,delay:f,duration:p,ease:_,playbackEase:g,modifier:m,composition:x,onRender:E}=h,y=i?i.defaults:Ut.defaults,S=An(_,y.ease),T=An(g,y.playbackEase),R=T?_u(T):null,v=!xt(S.ease),M=v?S.ease:An(_,R?"linear":y.ease),w=v?S.settlingDuration:An(p,y.duration),F=An(f,y.delay),U=m||y.modifier,H=xt(x)&&c>=sr?wn.none:xt(x)?y.composition:x,V=this._offset+(i?i._offset:0);v&&(S.parent=this);let k=NaN,G=NaN,K=0,te=0;for(let W=0;W<c;W++){let Q=l[W],ae=o||W,we=a||l,Ie=NaN,gt=NaN;for(let ot in h)if(uu(ot)){let $e=Y0(Q,ot),re=of(Q,ot),me=cf(ot,Q,$e),Te=h[ot],ze=_o(Te);if(r&&!ze&&(gl[0]=Te,gl[1]=Te,Te=gl),ze){let z=Te.length,Y=!da(Te[0]);z===2&&Y?(_f.to=Te,gf[0]=_f,yo=gf):z>2&&Y?(yo=[],Te.forEach((q,ne)=>{ne?ne===1?(gl[1]=q,yo.push(gl)):yo.push(q):gl[0]=q})):yo=Te}else gf[0]=Te,yo=gf;let Oe=null,We=null,pt=NaN,A=0,L=0;for(let z=yo.length;L<z;L++){let Y=yo[L];da(Y)?cr=Y:(_f.to=Y,cr=_f),pf.func=null,mf.func=null;let q=ar(An(cr.composition,H),Q,ae,we,null,null),ne=ul(q)?q:wn[q];!Oe&&ne!==wn.none&&(Oe=mu(Q,me));let se=Oe?Oe._tail:null,X=i&&se&&se.parent.parent===i?se:We,ce=ar(cr.to,Q,ae,we,pf,X),P;da(ce)&&!xt(ce.to)?(cr=ce,P=ce.to):P=ce;let Ae=ar(cr.from,Q,ae,we,mf,X),pe=cr.ease||M,I=ar(pe,Q,ae,we,null,X),b=xs(I)||Is(I)?I:pe,$=!xt(b)&&!xt(b.ease),Z=$?b.ease:b,ee=$?b.settlingDuration:ar(An(cr.duration,z>1?ar(w,Q,ae,we,null,X)/z:w),Q,ae,we,null,X),Se=ar(An(cr.delay,L?0:F),Q,ae,we,null,X),xe=cr.modifier||U,ue=!xt(Ae),fe=!xt(P),Pe=_o(P),et=Pe||ue&&fe,Ne=We?A:0,Ce=We?A+Se:Se,je=Zt(V+Ce,12),rt=Zt(V+Ne,12);!te&&(ue||Pe)&&(te=1);let at=We;if(ne!==wn.none){let Qe=Oe._head;for(;Qe&&Qe._absoluteStartTime<=je;)if(Qe._isOverridden||(at=Qe),Qe=Qe._nextRep,Qe&&Qe._absoluteStartTime>=je)for(;Qe;)pu(Qe),Qe=Qe._nextRep}if(et){Gi(Pe?ar(P[0],Q,ae,we,mf,X):Ae,_t),Gi(Pe?ar(P[1],Q,ae,we,pf,X):P,Ct);let Qe=dl(Q,me,$e,ml);_t.t===Rt.NUMBER&&(at?at._valueType===Rt.UNIT&&(_t.t=Rt.UNIT,_t.u=at._unit):(Gi(Qe,es),es.t===Rt.UNIT&&(_t.t=Rt.UNIT,_t.u=es.u)))}else fe?Gi(P,Ct):We?K0(We,Ct):Gi(i&&at&&at.parent.parent===i?at._value:dl(Q,me,$e,ml),Ct),ue?Gi(Ae,_t):We?K0(We,_t):Gi(i&&at&&at.parent.parent===i?at._value:dl(Q,me,$e,ml),_t);if(_t.o&&(_t.n=fl(at?at._toNumber:Gi(dl(Q,me,$e,ml),es).n,_t.n,_t.o)),Ct.o&&(Ct.n=fl(_t.n,Ct.n,Ct.o)),_t.t!==Ct.t){if(_t.t===Rt.COMPLEX||Ct.t===Rt.COMPLEX){let Qe=_t.t===Rt.COMPLEX?_t:Ct,ct=_t.t===Rt.COMPLEX?Ct:_t;ct.t=Rt.COMPLEX,ct.s=Vn(Qe.s),ct.d=Qe.d.map(()=>ct.n)}else if(_t.t===Rt.UNIT||Ct.t===Rt.UNIT){let Qe=_t.t===Rt.UNIT?_t:Ct,ct=_t.t===Rt.UNIT?Ct:_t;ct.t=Rt.UNIT,ct.u=Qe.u}else if(_t.t===Rt.COLOR||Ct.t===Rt.COLOR){let Qe=_t.t===Rt.COLOR?_t:Ct,ct=_t.t===Rt.COLOR?Ct:_t;ct.t=Rt.COLOR,ct.d=Qe.d.map(()=>0)}}if(_t.u!==Ct.u){let Qe=Ct.u?_t:Ct;Qe=t_(Q,Qe,Ct.u?Ct.u:_t.u,!1)}if(Ct.d&&_t.d&&Ct.d.length!==_t.d.length){let Qe=_t.d.length>Ct.d.length?_t:Ct,ct=Qe===_t?Ct:_t;ct.d=Qe.d.map((hi,Ai)=>xt(ct.d[Ai])?0:ct.d[Ai]),ct.s=Vn(Qe.s)}let j=Zt(+ee||At,12),De=ml[me];or(De)||(ml[me]=null);let ve=re?re.set:null;A=Zt(Ce+j,12);let Le=_t.d,Fe=Ct.d,be=Ct.s,Xe={parent:this,id:sI++,property:me,target:Q,_value:null,_toFunc:pf.func,_fromFunc:mf.func,_ease:_u(Z),_fromNumbers:Le?Vn(Le):lu,_toNumbers:Fe?Vn(Fe):lu,_strings:be?Vn(be):lu,_fromNumber:_t.n,_toNumber:Ct.n,_numbers:Le?Vn(Le):lu,_number:_t.n,_unit:Ct.u,_modifier:xe,_currentTime:0,_startTime:Ce,_delay:+Se,_updateDuration:j,_changeDuration:j,_absoluteStartTime:je,_absoluteUpdateStartTime:rt,_absoluteEndTime:Zt(V+A,12),_hasFromValue:ue||Pe?1:0,_tweenType:$e,_setter:ve,_valueType:Ct.t,_composition:ne,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_inlineValue:De,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};ne!==wn.none&&hf(Xe,Oe);let Ze=Xe._valueType;if(Ze===Rt.COMPLEX)Xe._value=lf(Xe,1,-1);else if(Ze===Rt.UNIT)Xe._value=`${xe(Xe._toNumber)}${Xe._unit}`;else if(Ze===Rt.COLOR){let Qe=Ct.d;Xe._value=`rgba(${Zt(Qe[0],0)},${Zt(Qe[1],0)},${Zt(Qe[2],0)},${Qe[3]})`}else Xe._value=xe(Xe._toNumber);isNaN(pt)&&(pt=Xe._startTime),We=Xe,K++,Ps(this,Xe)}(isNaN(G)||pt<G)&&(G=pt),(isNaN(k)||A>k)&&(k=A),$e===Qt.TRANSFORM&&(Ie=K-L,gt=K)}if(!isNaN(Ie)){let ot=0;Jt(this,$e=>{ot>=Ie&&ot<gt&&($e._renderTransforms=1,$e._composition===wn.blend&&Jt(zr.animation,re=>{re.id===$e.id&&(re._renderTransforms=1)})),ot++})}}c||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation."),G?(Jt(this,W=>{W._startTime-W._delay||(W._delay-=G),W._startTime-=G}),k-=G):G=0,k||(k=At,this.iterationCount=0),this.targets=l,this.id=xt(d)?nT:d,this.duration=k===At?At:pa((k+this._loopDelay)*this.iterationCount-this._loopDelay)||At,this.onRender=E||y.onRender,this._ease=R,this._delay=G,this.iterationDuration=k,!this._autoplay&&te&&this.onRender(this)}stretch(e){let n=this.duration;if(n===kr(e))return this;let i=e/n;return Jt(this,s=>{s._updateDuration=kr(s._updateDuration*i),s._changeDuration=kr(s._changeDuration*i),s._currentTime*=i,s._delay*=i,s._startTime*=i,s._absoluteStartTime*=i,s._absoluteUpdateStartTime*=i,s._absoluteEndTime*=i}),super.stretch(e)}refresh(){return Jt(this,e=>{let n=e._toFunc,i=e._fromFunc;(n||i)&&(i?(Gi(i(),_t),_t.u!==e._unit&&e.target[ir]&&t_(e.target,_t,e._unit,!0),e._fromNumbers=Vn(_t.d),e._fromNumber=_t.n):n&&(Gi(dl(e.target,e.property,e._tweenType),es),e._fromNumbers=Vn(es.d),e._fromNumber=es.n),n&&(Gi(n(),Ct),e._toNumbers=Vn(Ct.d),e._strings=Vn(Ct.s),e._toNumber=Ct.o?fl(e._fromNumber,Ct.n,Ct.o):Ct.n))}),this.duration===At&&this.restart(),this}revert(){return super.revert(),fu(this)}then(e){return super.then(e)}},vo=(t,e)=>Ut.editor?Ut.editor.addAnimation(t,e):new _l(t,e,null,0,!1).init();var oI=(t,e)=>{if(Qi(e,"<")){let n=e[1]==="<",i=t._tail,s=i?i._offset+i._delay:0;return n?s:s+i.duration}},yu=(t,e)=>{let n=t.iterationDuration;if(n===At&&(n=0),xt(e))return n;if(ul(+e))return+e;let i=e,s=t?t.labels:null,r=!or(s),o=oI(t,i),a=!xt(o),l=Cb.exec(i);if(l){let c=l[0],u=i.split(c),h=r&&u[0]?s[u[0]]:n,d=a?o:r?h:n,f=+u[1];return fl(d,f,c[0])}else return a?o:r?xt(s[i])?n:s[i]:n};function aI(t){return pa((t.iterationDuration+t._loopDelay)*t.iterationCount-t._loopDelay)||At}function s_(t,e,n,i,s,r){let a=ul(t.duration)&&t.duration<=At?n-At:n;e.composition&&lr(e,a,1,1,Xn.AUTO);let l=i?new _l(i,t,e,a,!1,s,r):new ma(t,e,a);return e.composition&&l.init(!0),Ps(e,l),Jt(e,c=>{let h=c._offset+c._delay+c.duration;h>e.iterationDuration&&(e.iterationDuration=h)}),e.duration=aI(e),e}var iT=0,yf=class extends ma{constructor(e={}){super(e,null,0),++iT,this.id=xt(e.id)?iT:e.id,this.duration=0,this.labels={};let n=e.defaults,i=Ut.defaults;this.defaults=n?sf(n,i):i,this.composition=An(e.composition,!0),this.onRender=e.onRender||i.onRender;let s=An(e.playbackEase,i.playbackEase);this._ease=s?_u(s):null,this.iterationDuration=0}add(e,n,i){let s=da(n),r=da(e);if(s||r){if(this._hasChildren=!0,s){let o=n,a=Ut.editor&&Ut.editor.addTimelineChild,l=i&&i.type==="Stagger"&&Ut.editor,c=xs(i)?i:null;if(c||l){let u=df(e),h=this.duration,d=this.iterationDuration,f=o.id,p=0,_=u.length,g=a?a(e,o,this.id,i,_):null,m=c||Ut.editor.resolveStagger(i.defaultValue);u.forEach(x=>{let E={...g||o};this.duration=h,this.iterationDuration=d,xt(f)||(E.id=f+"-"+p);let y=yu(this,m(x,p,u,null,this));s_(E,this,y,x,p,u),p++})}else{let u=a?a(e,o,this.id,i):o,h=i&&i.type?i.defaultValue:i;s_(u,this,yu(this,h),e)}}else s_(e,this,yu(this,n));return this.composition&&this.init(!0),this}}sync(e,n){if(xt(e)||e&&xt(e.pause))return this;e.pause();let i=+(e.effect?e.effect.getTiming().duration:e.duration);!xt(e)&&!xt(e.persist)&&(e.persist=!0);let s=Ut.editor,r=s&&s.addTimelineChild;s&&s.addTimelineSync&&(n=s.addTimelineSync(e,n,this.id),s.addTimelineChild=null);let o=this.add(e,{currentTime:[0,i],duration:i,delay:0,ease:"linear",playbackEase:"linear"},n);return s&&(s.addTimelineChild=r),o}set(e,n,i){return xt(n)?this:(n.duration=At,n.composition=wn.replace,this.add(e,n,i))}call(e,n){return xt(e)||e&&!xs(e)?this:(Ut.editor&&Ut.editor.addTimelineCall&&(n=Ut.editor.addTimelineCall(e,n,this.id)),this.add({duration:0,delay:0,onComplete:()=>e(this)},n))}label(e,n){return xt(e)||e&&!Is(e)?this:(Ut.editor&&Ut.editor.addTimelineLabel&&(n=Ut.editor.addTimelineLabel(e,n,this.id)),this.labels[e]=yu(this,n),this)}remove(e,n){return Z0(df(e),this,n),this}stretch(e){let n=this.duration;if(n===kr(e))return this;let i=e/n,s=this.labels;Jt(this,r=>r.stretch(r.duration*i));for(let r in s)s[r]*=i;return super.stretch(e)}refresh(){return Jt(this,e=>{e.refresh&&e.refresh()}),this}revert(){return super.revert(),Jt(this,e=>e.revert,!0),fu(this)}then(e){return super.then(e)}},vu=t=>Ut.editor?Ut.editor.addTimeline(t):new yf(t).init();var zT=0,X_=1,GT=2;var hh=1,WT=2,Ql=3,Do=0,ui=1,ii=2,_r=0,ec=1,Pn=2,$_=3,q_=4,XT=5;var Ca=100,$T=101,qT=102,YT=103,KT=104,JT=200,jT=201,ZT=202,QT=203,Y_=204,K_=205,eM=206,tM=207,nM=208,iM=209,sM=210,rM=211,oM=212,aM=213,lM=214,Zf=0,Qf=1,ep=2,Fl=3,tp=4,np=5,ip=6,sp=7,J_=0,cM=1,uM=2,ks=0,j_=1,Z_=2,Q_=3,dh=4,ey=5,ty=6,ny=7;var iy=300,Lo=301,Na=302,Vp=303,Bp=304,fh=306,Vl=1e3,bs=1001,rp=1002,ni=1003,hM=1004;var ph=1005;var qn=1006,kp=1007;var yr=1008;var $i=1009,sy=1010,ry=1011,tc=1012,Hp=1013,Hs=1014,zs=1015,Gs=1016,zp=1017,Gp=1018,nc=1020,oy=35902,ay=35899,ly=1021,cy=1022,Ms=1023,fr=1026,Uo=1027,uy=1028,Wp=1029,Fo=1030,Xp=1031;var $p=1033,mh=33776,gh=33777,_h=33778,yh=33779,qp=35840,Yp=35841,Kp=35842,Jp=35843,jp=36196,Zp=37492,Qp=37496,em=37488,tm=37489,vh=37490,nm=37491,im=37808,sm=37809,rm=37810,om=37811,am=37812,lm=37813,cm=37814,um=37815,hm=37816,dm=37817,fm=37818,pm=37819,mm=37820,gm=37821,_m=36492,ym=36494,vm=36495,Em=36283,xm=36284,Eh=36285,Sm=36286;var Pu=2300,op=2301,Jf=2302,P_=2303,O_=2400,D_=2401,L_=2402;var dM=3200;var bm=0,fM=1,Ws="",kn="srgb",Ou="srgb-linear",Du="linear",en="srgb";var jf=7680;var pM=519,mM=512,gM=513,_M=514,Tm=515,yM=516,vM=517,Mm=518,EM=519,hy=35044;var dy="300 es",Vs=2e3,Bl=2001;function lI(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function cI(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Lu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function xM(){let t=Lu("canvas");return t.style.display="block",t}var sT={},kl=null;function Uu(...t){let e="THREE."+t.shift();kl?kl("log",e,...t):console.log(e,...t)}function SM(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ht(...t){t=SM(t);let e="THREE."+t.shift();if(kl)kl("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function mt(...t){t=SM(t);let e="THREE."+t.shift();if(kl)kl("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function xa(...t){let e=t.join(" ");e in sT||(sT[e]=!0,ht(...t))}function bM(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var TM={[Zf]:Qf,[ep]:ip,[tp]:sp,[Fl]:np,[Qf]:Zf,[ip]:ep,[sp]:tp,[np]:Fl},pr=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},xi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rT=1234567,Ll=Math.PI/180,Hl=180/Math.PI;function dr(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xi[t&255]+xi[t>>8&255]+xi[t>>16&255]+xi[t>>24&255]+"-"+xi[e&255]+xi[e>>8&255]+"-"+xi[e>>16&15|64]+xi[e>>24&255]+"-"+xi[n&63|128]+xi[n>>8&255]+"-"+xi[n>>16&255]+xi[n>>24&255]+xi[i&255]+xi[i>>8&255]+xi[i>>16&255]+xi[i>>24&255]).toLowerCase()}function Pt(t,e,n){return Math.max(e,Math.min(n,t))}function fy(t,e){return(t%e+e)%e}function uI(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function hI(t,e,n){return t!==e?(n-t)/(e-t):0}function Cu(t,e,n){return(1-n)*t+n*e}function dI(t,e,n,i){return Cu(t,e,1-Math.exp(-n*i))}function fI(t,e=1){return e-Math.abs(fy(t,e*2)-e)}function pI(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function mI(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function gI(t,e){return t+Math.floor(Math.random()*(e-t+1))}function _I(t,e){return t+Math.random()*(e-t)}function yI(t){return t*(.5-Math.random())}function vI(t){t!==void 0&&(rT=t);let e=rT+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function EI(t){return t*Ll}function xI(t){return t*Hl}function SI(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function bI(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function TI(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function MI(t,e,n,i,s){let r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":t.set(a*u,l*h,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*p,l*f,a*c);break;case"YXY":t.set(l*f,a*u,l*p,a*c);break;case"ZYZ":t.set(l*p,l*f,a*u,a*c);break;default:ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function an(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ln={DEG2RAD:Ll,RAD2DEG:Hl,generateUUID:dr,clamp:Pt,euclideanModulo:fy,mapLinear:uI,inverseLerp:hI,lerp:Cu,damp:dI,pingpong:fI,smoothstep:pI,smootherstep:mI,randInt:gI,randFloat:_I,randFloatSpread:yI,seededRandom:vI,degToRad:EI,radToDeg:xI,isPowerOfTwo:SI,ceilPowerOfTwo:bI,floorPowerOfTwo:TI,setQuaternionFromProperEuler:MI,normalize:an,denormalize:Fs},vy=class vy{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Pt(this.x,e.x,n.x),this.y=Pt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Pt(this.x,e,n),this.y=Pt(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vy.prototype.isVector2=!0;var Me=vy,Wi=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(h!==_||l!==d||c!==f||u!==p){let g=l*d+c*f+u*p+h*_;g<0&&(d=-d,f=-f,p=-p,_=-_,g=-g);let m=1-a;if(g<.9995){let x=Math.acos(g),E=Math.sin(x);m=Math.sin(m*x)/E,a=Math.sin(a*x)/E,l=l*m+d*a,c=c*m+f*a,u=u*m+p*a,h=h*m+_*a}else{l=l*m+d*a,c=c*m+f*a,u=u*m+p*a,h=h*m+_*a;let x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[n]=a*p+u*h+l*f-c*d,e[n+1]=l*p+u*d+c*h-a*f,e[n+2]=c*p+u*f+a*d-l*h,e[n+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>h){let f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-i-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ey=class Ey{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(oT.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(oT.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),h=2*(r*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Pt(this.x,e.x,n.x),this.y=Pt(this.y,e.y,n.y),this.z=Pt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Pt(this.x,e,n),this.y=Pt(this.y,e,n),this.z=Pt(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return r_.copy(this).projectOnVector(e),this.sub(r_)}reflect(e){return this.sub(r_.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ey.prototype.isVector3=!0;var D=Ey,r_=new D,oT=new Wi,xy=class xy{constructor(e,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],_=s[0],g=s[3],m=s[6],x=s[1],E=s[4],y=s[7],S=s[2],T=s[5],R=s[8];return r[0]=o*_+a*x+l*S,r[3]=o*g+a*E+l*T,r[6]=o*m+a*y+l*R,r[1]=c*_+u*x+h*S,r[4]=c*g+u*E+h*T,r[7]=c*m+u*y+h*R,r[2]=d*_+f*x+p*S,r[5]=d*g+f*E+p*T,r[8]=d*m+f*y+p*R,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,p=n*h+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=h*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(u*n-s*l)*_,e[5]=(s*r-a*n)*_,e[6]=f*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*r)*_,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return xa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(o_.makeScale(e,n)),this}rotate(e){return xa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(o_.makeRotation(-e)),this}translate(e,n){return xa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(o_.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xy.prototype.isMatrix3=!0;var Et=xy,o_=new Et,aT=new Et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lT=new Et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wI(){let t={enabled:!0,workingColorSpace:Ou,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===en&&(s.r=Kr(s.r),s.g=Kr(s.g),s.b=Kr(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===en&&(s.r=Ul(s.r),s.g=Ul(s.g),s.b=Ul(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ws?Du:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return xa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return xa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ou]:{primaries:e,whitePoint:i,transfer:Du,toXYZ:aT,fromXYZ:lT,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:i,transfer:en,toXYZ:aT,fromXYZ:lT,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),t}var zt=wI();function Kr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ul(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var yl,ap=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{yl===void 0&&(yl=Lu("canvas")),yl.width=e.width,yl.height=e.height;let s=yl.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=yl}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=Lu("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Kr(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Kr(n[i]/255)*255):n[i]=Kr(n[i]);return{data:n,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},AI=0,zl=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:AI++}),this.uuid=dr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(a_(s[o].image)):r.push(a_(s[o]))}else r=a_(s);i.url=r}return n||(e.images[this.uuid]=i),i}};function a_(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ap.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}var RI=0,l_=new D,ci=class t extends pr{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=bs,s=bs,r=qn,o=yr,a=Ms,l=$i,c=t.DEFAULT_ANISOTROPY,u=Ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RI++}),this.uuid=dr(),this.name="",this.source=new zl(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(l_).x}get height(){return this.source.getSize(l_).y}get depth(){return this.source.getSize(l_).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){ht(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){ht(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vl:e.x=e.x-Math.floor(e.x);break;case bs:e.x=e.x<0?0:1;break;case rp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vl:e.y=e.y-Math.floor(e.y);break;case bs:e.y=e.y<0?0:1;break;case rp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ci.DEFAULT_IMAGE=null;ci.DEFAULT_MAPPING=iy;ci.DEFAULT_ANISOTROPY=1;var Sy=class Sy{constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let E=(c+1)/2,y=(f+1)/2,S=(m+1)/2,T=(u+d)/4,R=(h+_)/4,v=(p+g)/4;return E>y&&E>S?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=R/i):y>S?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=T/s,r=v/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=R/r,s=v/r),this.set(i,s,r,n),this}let x=Math.sqrt((g-p)*(g-p)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Pt(this.x,e.x,n.x),this.y=Pt(this.y,e.y,n.y),this.z=Pt(this.z,e.z,n.z),this.w=Pt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Pt(this.x,e,n),this.y=Pt(this.y,e,n),this.z=Pt(this.z,e,n),this.w=Pt(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sy.prototype.isVector4=!0;var En=Sy,lp=class extends pr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new En(0,0,e,n),this.scissorTest=!1,this.viewport=new En(0,0,e,n),this.textures=[];let s={width:e,height:n,depth:i.depth},r=new ci(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let n={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},e.textures[n].image);this.textures[n].source=new zl(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xi=class extends lp{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},Fu=class extends ci{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=ni,this.minFilter=ni,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var cp=class extends ci{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=ni,this.minFilter=ni,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Fp=class Fp{constructor(e,n,i,s,r,o,a,l,c,u,h,d,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,h,d,f,p,_,g)}set(e,n,i,s,r,o,a,l,c,u,h,d,f,p,_,g){let m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fp().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let n=this.elements,i=e.elements,s=1/vl.setFromMatrixColumn(e,0).length(),r=1/vl.setFromMatrixColumn(e,1).length(),o=1/vl.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,p=a*u,_=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=f+p*c,n[5]=d-_*c,n[9]=-a*l,n[2]=_-d*c,n[6]=p+f*c,n[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,_=c*h;n[0]=d+_*a,n[4]=p*a-f,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=f*a-p,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,_=c*h;n[0]=d-_*a,n[4]=-o*h,n[8]=p+f*a,n[1]=f+p*a,n[5]=o*u,n[9]=_-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=a*u,_=a*h;n[0]=l*u,n[4]=p*c-f,n[8]=d*c+_,n[1]=l*h,n[5]=_*c+d,n[9]=f*c-p,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,_=a*c;n[0]=l*u,n[4]=_-d*h,n[8]=p*h+f,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=f*h+p,n[10]=d-_*h}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,_=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+_,n[5]=o*u,n[9]=f*h-p,n[2]=p*h-f,n[6]=a*u,n[10]=_*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(CI,e,NI)}lookAt(e,n,i){let s=this.elements;return ts.subVectors(e,n),ts.lengthSq()===0&&(ts.z=1),ts.normalize(),Eo.crossVectors(i,ts),Eo.lengthSq()===0&&(Math.abs(i.z)===1?ts.x+=1e-4:ts.z+=1e-4,ts.normalize(),Eo.crossVectors(i,ts)),Eo.normalize(),vf.crossVectors(ts,Eo),s[0]=Eo.x,s[4]=vf.x,s[8]=ts.x,s[1]=Eo.y,s[5]=vf.y,s[9]=ts.y,s[2]=Eo.z,s[6]=vf.z,s[10]=ts.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],_=i[6],g=i[10],m=i[14],x=i[3],E=i[7],y=i[11],S=i[15],T=s[0],R=s[4],v=s[8],M=s[12],w=s[1],F=s[5],U=s[9],H=s[13],V=s[2],k=s[6],G=s[10],K=s[14],te=s[3],W=s[7],Q=s[11],ae=s[15];return r[0]=o*T+a*w+l*V+c*te,r[4]=o*R+a*F+l*k+c*W,r[8]=o*v+a*U+l*G+c*Q,r[12]=o*M+a*H+l*K+c*ae,r[1]=u*T+h*w+d*V+f*te,r[5]=u*R+h*F+d*k+f*W,r[9]=u*v+h*U+d*G+f*Q,r[13]=u*M+h*H+d*K+f*ae,r[2]=p*T+_*w+g*V+m*te,r[6]=p*R+_*F+g*k+m*W,r[10]=p*v+_*U+g*G+m*Q,r[14]=p*M+_*H+g*K+m*ae,r[3]=x*T+E*w+y*V+S*te,r[7]=x*R+E*F+y*k+S*W,r[11]=x*v+E*U+y*G+S*Q,r[15]=x*M+E*H+y*K+S*ae,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],_=e[7],g=e[11],m=e[15],x=l*f-c*d,E=a*f-c*h,y=a*d-l*h,S=o*f-c*u,T=o*d-l*u,R=o*h-a*u;return n*(_*x-g*E+m*y)-i*(p*x-g*S+m*T)+s*(p*E-_*S+m*R)-r*(p*y-_*T+g*R)}determinantAffine(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return n*(o*u-a*c)-i*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],_=e[13],g=e[14],m=e[15],x=n*a-i*o,E=n*l-s*o,y=n*c-r*o,S=i*l-s*a,T=i*c-r*a,R=s*c-r*l,v=u*_-h*p,M=u*g-d*p,w=u*m-f*p,F=h*g-d*_,U=h*m-f*_,H=d*m-f*g,V=x*H-E*U+y*F+S*w-T*M+R*v;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/V;return e[0]=(a*H-l*U+c*F)*k,e[1]=(s*U-i*H-r*F)*k,e[2]=(_*R-g*T+m*S)*k,e[3]=(d*T-h*R-f*S)*k,e[4]=(l*w-o*H-c*M)*k,e[5]=(n*H-s*w+r*M)*k,e[6]=(g*y-p*R-m*E)*k,e[7]=(u*R-d*y+f*E)*k,e[8]=(o*U-a*w+c*v)*k,e[9]=(i*w-n*U-r*v)*k,e[10]=(p*T-_*y+m*x)*k,e[11]=(h*y-u*T-f*x)*k,e[12]=(a*M-o*F-l*v)*k,e[13]=(n*F-i*M+s*v)*k,e[14]=(_*E-p*S-g*x)*k,e[15]=(u*S-h*E+d*x)*k,this}scale(e){let n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,p=r*h,_=o*u,g=o*h,m=a*h,x=l*c,E=l*u,y=l*h,S=i.x,T=i.y,R=i.z;return s[0]=(1-(_+m))*S,s[1]=(f+y)*S,s[2]=(p-E)*S,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(d+m))*T,s[6]=(g+x)*T,s[7]=0,s[8]=(p+E)*R,s[9]=(g-x)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let o=vl.set(s[0],s[1],s[2]).length(),a=vl.set(s[4],s[5],s[6]).length(),l=vl.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Os.copy(this);let c=1/o,u=1/a,h=1/l;return Os.elements[0]*=c,Os.elements[1]*=c,Os.elements[2]*=c,Os.elements[4]*=u,Os.elements[5]*=u,Os.elements[6]*=u,Os.elements[8]*=h,Os.elements[9]*=h,Os.elements[10]*=h,n.setFromRotationMatrix(Os),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=Vs,l=!1){let c=this.elements,u=2*r/(n-e),h=2*r/(i-s),d=(n+e)/(n-e),f=(i+s)/(i-s),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===Vs)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Bl)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Vs,l=!1){let c=this.elements,u=2/(n-e),h=2/(i-s),d=-(n+e)/(n-e),f=-(i+s)/(i-s),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===Vs)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===Bl)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Fp.prototype.isMatrix4=!0;var tn=Fp,vl=new D,Os=new tn,CI=new D(0,0,0),NI=new D(1,1,1),Eo=new D,vf=new D,ts=new D,cT=new tn,uT=new Wi,Jr=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return cT.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cT,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return uT.setFromEuler(this),this.setFromQuaternion(uT,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jr.DEFAULT_ORDER="XYZ";var Gl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},II=0,hT=new D,El=new Wi,Wr=new tn,Ef=new D,Eu=new D,PI=new D,OI=new Wi,dT=new D(1,0,0),fT=new D(0,1,0),pT=new D(0,0,1),mT={type:"added"},DI={type:"removed"},xl={type:"childadded",child:null},c_={type:"childremoved",child:null},Yn=class t extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:II++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new D,n=new Jr,i=new Wi,s=new D(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tn},normalMatrix:{value:new Et}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return El.setFromAxisAngle(e,n),this.quaternion.multiply(El),this}rotateOnWorldAxis(e,n){return El.setFromAxisAngle(e,n),this.quaternion.premultiply(El),this}rotateX(e){return this.rotateOnAxis(dT,e)}rotateY(e){return this.rotateOnAxis(fT,e)}rotateZ(e){return this.rotateOnAxis(pT,e)}translateOnAxis(e,n){return hT.copy(e).applyQuaternion(this.quaternion),this.position.add(hT.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(dT,e)}translateY(e){return this.translateOnAxis(fT,e)}translateZ(e){return this.translateOnAxis(pT,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ef.copy(e):Ef.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Eu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wr.lookAt(Eu,Ef,this.up):Wr.lookAt(Ef,Eu,this.up),this.quaternion.setFromRotationMatrix(Wr),s&&(Wr.extractRotation(s.matrixWorld),El.setFromRotationMatrix(Wr),this.quaternion.premultiply(El.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mT),xl.child=e,this.dispatchEvent(xl),xl.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(DI),c_.child=e,this.dispatchEvent(c_),c_.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mT),xl.child=e,this.dispatchEvent(xl),xl.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eu,e,PI),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eu,OI,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Yn.DEFAULT_UP=new D(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wt=class extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},LI={type:"move"},Wl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let g=n.getJointPose(_,i),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(LI)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Wt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},MM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xo={h:0,s:0,l:0},xf={h:0,s:0,l:0};function u_(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Ye=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=zt.workingColorSpace){return this.r=e,this.g=n,this.b=i,zt.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=zt.workingColorSpace){if(e=fy(e,1),n=Pt(n,0,1),i=Pt(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=u_(o,r,e+1/3),this.g=u_(o,r,e),this.b=u_(o,r,e-1/3)}return zt.colorSpaceToWorking(this,s),this}setStyle(e,n=kn){function i(r){r!==void 0&&parseFloat(r)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:ht("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kn){let i=MM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}copyLinearToSRGB(e){return this.r=Ul(e.r),this.g=Ul(e.g),this.b=Ul(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return zt.workingToColorSpace(Si.copy(this),e),Math.round(Pt(Si.r*255,0,255))*65536+Math.round(Pt(Si.g*255,0,255))*256+Math.round(Pt(Si.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=zt.workingColorSpace){zt.workingToColorSpace(Si.copy(this),n);let i=Si.r,s=Si.g,r=Si.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=zt.workingColorSpace){return zt.workingToColorSpace(Si.copy(this),n),e.r=Si.r,e.g=Si.g,e.b=Si.b,e}getStyle(e=kn){zt.workingToColorSpace(Si.copy(this),e);let n=Si.r,i=Si.g,s=Si.b;return e!==kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(xo),this.setHSL(xo.h+e,xo.s+n,xo.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(xo),e.getHSL(xf);let i=Cu(xo.h,xf.h,n),s=Cu(xo.s,xf.s,n),r=Cu(xo.l,xf.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Si=new Ye;Ye.NAMES=MM;var Vu=class t{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=n}clone(){return new t(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Bu=class extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jr,this.environmentIntensity=1,this.environmentRotation=new Jr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Ds=new D,Xr=new D,h_=new D,$r=new D,Sl=new D,bl=new D,gT=new D,d_=new D,f_=new D,p_=new D,m_=new En,g_=new En,__=new En,hr=class t{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Ds.subVectors(e,n),s.cross(Ds);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Ds.subVectors(s,n),Xr.subVectors(i,n),h_.subVectors(e,n);let o=Ds.dot(Ds),a=Ds.dot(Xr),l=Ds.dot(h_),c=Xr.dot(Xr),u=Xr.dot(h_),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,$r)===null?!1:$r.x>=0&&$r.y>=0&&$r.x+$r.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,$r)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$r.x),l.addScaledVector(o,$r.y),l.addScaledVector(a,$r.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return m_.setScalar(0),g_.setScalar(0),__.setScalar(0),m_.fromBufferAttribute(e,n),g_.fromBufferAttribute(e,i),__.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(m_,r.x),o.addScaledVector(g_,r.y),o.addScaledVector(__,r.z),o}static isFrontFacing(e,n,i,s){return Ds.subVectors(i,n),Xr.subVectors(e,n),Ds.cross(Xr).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ds.subVectors(this.c,this.b),Xr.subVectors(this.a,this.b),Ds.cross(Xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,r=this.c,o,a;Sl.subVectors(s,i),bl.subVectors(r,i),d_.subVectors(e,i);let l=Sl.dot(d_),c=bl.dot(d_);if(l<=0&&c<=0)return n.copy(i);f_.subVectors(e,s);let u=Sl.dot(f_),h=bl.dot(f_);if(u>=0&&h<=u)return n.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Sl,o);p_.subVectors(e,r);let f=Sl.dot(p_),p=bl.dot(p_);if(p>=0&&f<=p)return n.copy(r);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),n.copy(i).addScaledVector(bl,a);let g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return gT.subVectors(r,s),a=(h-u)/(h-u+(f-p)),n.copy(s).addScaledVector(gT,a);let m=1/(g+_+d);return o=_*m,a=d*m,n.copy(i).addScaledVector(Sl,o).addScaledVector(bl,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mo=class{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ls.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ls.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Ls.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ls):Ls.fromBufferAttribute(r,o),Ls.applyMatrix4(e.matrixWorld),this.expandByPoint(Ls);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sf.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sf.copy(i.boundingBox)),Sf.applyMatrix4(e.matrixWorld),this.union(Sf)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ls),Ls.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xu),bf.subVectors(this.max,xu),Tl.subVectors(e.a,xu),Ml.subVectors(e.b,xu),wl.subVectors(e.c,xu),So.subVectors(Ml,Tl),bo.subVectors(wl,Ml),ga.subVectors(Tl,wl);let n=[0,-So.z,So.y,0,-bo.z,bo.y,0,-ga.z,ga.y,So.z,0,-So.x,bo.z,0,-bo.x,ga.z,0,-ga.x,-So.y,So.x,0,-bo.y,bo.x,0,-ga.y,ga.x,0];return!y_(n,Tl,Ml,wl,bf)||(n=[1,0,0,0,1,0,0,0,1],!y_(n,Tl,Ml,wl,bf))?!1:(Tf.crossVectors(So,bo),n=[Tf.x,Tf.y,Tf.z],y_(n,Tl,Ml,wl,bf))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ls).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ls).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},qr=[new D,new D,new D,new D,new D,new D,new D,new D],Ls=new D,Sf=new Mo,Tl=new D,Ml=new D,wl=new D,So=new D,bo=new D,ga=new D,xu=new D,bf=new D,Tf=new D,_a=new D;function y_(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){_a.fromArray(t,r);let a=s.x*Math.abs(_a.x)+s.y*Math.abs(_a.y)+s.z*Math.abs(_a.z),l=e.dot(_a),c=n.dot(_a),u=i.dot(_a);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Bn=new D,Mf=new Me,UI=0,Ti=class extends pr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:UI++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=hy,this.updateRanges=[],this.gpuType=zs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Mf.fromBufferAttribute(this,n),Mf.applyMatrix3(e),this.setXY(n,Mf.x,Mf.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Bn.fromBufferAttribute(this,n),Bn.applyMatrix3(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Bn.fromBufferAttribute(this,n),Bn.applyMatrix4(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bn.fromBufferAttribute(this,n),Bn.applyNormalMatrix(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bn.fromBufferAttribute(this,n),Bn.transformDirection(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Fs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fs(n,this.array)),n}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fs(n,this.array)),n}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fs(n,this.array)),n}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ku=class extends Ti{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var Hu=class extends Ti{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var Bt=class extends Ti{constructor(e,n,i){super(new Float32Array(e),n,i)}},FI=new Mo,Su=new D,v_=new D,wo=class{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):FI.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Su.subVectors(e,this.center);let n=Su.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Su,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(v_.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Su.copy(e.center).add(v_)),this.expandByPoint(Su.copy(e.center).sub(v_))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},VI=0,Ss=new tn,E_=new Yn,Al=new D,ns=new Mo,bu=new Mo,ti=new D,kt=class t extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VI++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lI(e)?Hu:ku)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ss.makeRotationFromQuaternion(e),this.applyMatrix4(Ss),this}rotateX(e){return Ss.makeRotationX(e),this.applyMatrix4(Ss),this}rotateY(e){return Ss.makeRotationY(e),this.applyMatrix4(Ss),this}rotateZ(e){return Ss.makeRotationZ(e),this.applyMatrix4(Ss),this}translate(e,n,i){return Ss.makeTranslation(e,n,i),this.applyMatrix4(Ss),this}scale(e,n,i){return Ss.makeScale(e,n,i),this.applyMatrix4(Ss),this}lookAt(e){return E_.lookAt(e),E_.updateMatrix(),this.applyMatrix4(E_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Al).negate(),this.translate(Al.x,Al.y,Al.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Bt(i,3))}else{let i=Math.min(e.length,n.count);for(let s=0;s<i;s++){let r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mo);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];ns.setFromBufferAttribute(r),this.morphTargetsRelative?(ti.addVectors(this.boundingBox.min,ns.min),this.boundingBox.expandByPoint(ti),ti.addVectors(this.boundingBox.max,ns.max),this.boundingBox.expandByPoint(ti)):(this.boundingBox.expandByPoint(ns.min),this.boundingBox.expandByPoint(ns.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wo);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(ns.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){let a=n[r];bu.setFromBufferAttribute(a),this.morphTargetsRelative?(ti.addVectors(ns.min,bu.min),ns.expandByPoint(ti),ti.addVectors(ns.max,bu.max),ns.expandByPoint(ti)):(ns.expandByPoint(bu.min),ns.expandByPoint(bu.max))}ns.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)ti.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ti));if(n)for(let r=0,o=n.length;r<o;r++){let a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ti.fromBufferAttribute(a,c),l&&(Al.fromBufferAttribute(e,c),ti.add(Al)),s=Math.max(s,i.distanceToSquared(ti))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ti(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new D,l[v]=new D;let c=new D,u=new D,h=new D,d=new Me,f=new Me,p=new Me,_=new D,g=new D;function m(v,M,w){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,w),d.fromBufferAttribute(r,v),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,w),u.sub(c),h.sub(c),f.sub(d),p.sub(d);let F=1/(f.x*p.y-p.x*f.y);isFinite(F)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(F),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(F),a[v].add(_),a[M].add(_),a[w].add(_),l[v].add(g),l[M].add(g),l[w].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,M=x.length;v<M;++v){let w=x[v],F=w.start,U=w.count;for(let H=F,V=F+U;H<V;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let E=new D,y=new D,S=new D,T=new D;function R(v){S.fromBufferAttribute(s,v),T.copy(S);let M=a[v];E.copy(M),E.sub(S.multiplyScalar(S.dot(M))).normalize(),y.crossVectors(T,M);let F=y.dot(l[v])<0?-1:1;o.setXYZW(v,E.x,E.y,E.z,F)}for(let v=0,M=x.length;v<M;++v){let w=x[v],F=w.start,U=w.count;for(let H=F,V=F+U;H<V;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(n,p),r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=n.count;d<f;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)ti.fromBufferAttribute(e,n),ti.normalize(),e.setXYZ(n,ti.x,ti.y,ti.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new Ti(d,u,h)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);n.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,i);l.push(f)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(n))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},up=class{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=hy,this.updateRanges=[],this.version=0,this.uuid=dr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=n.array[i+s];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let n={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}},Pi=new D,zu=class t{constructor(e,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Pi.fromBufferAttribute(this,n),Pi.applyMatrix4(e),this.setXYZ(n,Pi.x,Pi.y,Pi.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pi.fromBufferAttribute(this,n),Pi.applyNormalMatrix(e),this.setXYZ(n,Pi.x,Pi.y,Pi.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pi.fromBufferAttribute(this,n),Pi.transformDirection(e),this.setXYZ(n,Pi.x,Pi.y,Pi.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Fs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=an(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Fs(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Fs(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Fs(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Fs(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=an(n,this.array),i=an(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=an(n,this.array),i=an(i,this.array),s=an(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=an(n,this.array),i=an(i,this.array),s=an(s,this.array),r=an(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Uu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new Ti(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new t(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Uu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},x_=new D,BI=new D,kI=new Et,Us=class{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=x_.subVectors(i,n).cross(BI.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let s=e.delta(x_),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||kI.getNormalMatrix(e),s=this.coplanarPoint(x_).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},HI=0,Bs=class extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HI++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=ec,this.side=Do,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Y_,this.blendDst=K_,this.blendEquation=Ca,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jf,this.stencilZFail=jf,this.stencilZPass=jf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){ht(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){ht(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(n){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Us().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Me().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Me().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},mr=class extends Bs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Rl,Tu=new D,Cl=new D,Nl=new D,Il=new Me,Mu=new Me,wM=new tn,wf=new D,wu=new D,Af=new D,_T=new Me,S_=new Me,yT=new Me,jr=class extends Yn{constructor(e=new mr){if(super(),this.isSprite=!0,this.type="Sprite",Rl===void 0){Rl=new kt;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new up(n,5);Rl.setIndex([0,1,2,0,2,3]),Rl.setAttribute("position",new zu(i,3,0,!1)),Rl.setAttribute("uv",new zu(i,2,3,!1))}this.geometry=Rl,this.material=e,this.center=new Me(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&mt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cl.setFromMatrixScale(this.matrixWorld),wM.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Nl.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cl.multiplyScalar(-Nl.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Rf(wf.set(-.5,-.5,0),Nl,o,Cl,s,r),Rf(wu.set(.5,-.5,0),Nl,o,Cl,s,r),Rf(Af.set(.5,.5,0),Nl,o,Cl,s,r),_T.set(0,0),S_.set(1,0),yT.set(1,1);let a=e.ray.intersectTriangle(wf,wu,Af,!1,Tu);if(a===null&&(Rf(wu.set(-.5,.5,0),Nl,o,Cl,s,r),S_.set(0,1),a=e.ray.intersectTriangle(wf,Af,wu,!1,Tu),a===null))return;let l=e.ray.origin.distanceTo(Tu);l<e.near||l>e.far||n.push({distance:l,point:Tu.clone(),uv:hr.getInterpolation(Tu,wf,wu,Af,_T,S_,yT,new Me),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Rf(t,e,n,i,s,r){Il.subVectors(t,n).addScalar(.5).multiply(i),s!==void 0?(Mu.x=r*Il.x-s*Il.y,Mu.y=s*Il.x+r*Il.y):Mu.copy(Il),t.copy(e),t.x+=Mu.x,t.y+=Mu.y,t.applyMatrix4(wM)}var Yr=new D,b_=new D,Cf=new D,Nf=new D,Sa=class{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=Yr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Yr.copy(this.origin).addScaledVector(this.direction,n),Yr.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){b_.copy(e).add(n).multiplyScalar(.5),Cf.copy(n).sub(e).normalize(),Nf.copy(this.origin).sub(b_);let r=e.distanceTo(n)*.5,o=-this.direction.dot(Cf),a=Nf.dot(this.direction),l=-Nf.dot(Cf),c=Nf.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=r*u,h>=0)if(d>=-p)if(d<=p){let _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(b_).addScaledVector(Cf,d),f}intersectSphere(e,n){if(e.radius<0)return null;Yr.subVectors(e.center,this.origin);let i=Yr.dot(this.direction),s=Yr.dot(Yr)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Yr)!==null}intersectTriangle(e,n,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=n.x-o.x,_=n.y-o.y,g=n.z-o.z,m=i.x-o.x,x=i.y-o.y,E=i.z-o.z,y=Math.abs(l),S=Math.abs(c),T=Math.abs(u),R,v,M,w,F,U,H,V,k,G,K,te;if(y>=S&&y>=T?(M=l,U=h,k=p,te=m,l>=0?(R=c,v=u,w=d,F=f,H=_,V=g,G=x,K=E):(R=u,v=c,w=f,F=d,H=g,V=_,G=E,K=x)):S>=T?(M=c,U=d,k=_,te=x,c>=0?(R=u,v=l,w=f,F=h,H=g,V=p,G=E,K=m):(R=l,v=u,w=h,F=f,H=p,V=g,G=m,K=E)):(M=u,U=f,k=g,te=E,u>=0?(R=l,v=c,w=h,F=d,H=p,V=_,G=m,K=x):(R=c,v=l,w=d,F=h,H=_,V=p,G=x,K=m)),M===0)return null;let W=R/M,Q=v/M,ae=1/M,we=w-W*U,Ie=F-Q*U,gt=H-W*k,ot=V-Q*k,$e=G-W*te,re=K-Q*te,me=$e*ot-re*gt,Te=we*re-Ie*$e,ze=gt*Ie-ot*we;if(s){if(me<0||Te<0||ze<0)return null}else if((me<0||Te<0||ze<0)&&(me>0||Te>0||ze>0))return null;let Oe=me+Te+ze;if(Oe===0)return null;let We=ae*(me*U+Te*k+ze*te);return(Oe>0?We<0:We>0)?null:this.at(We/Oe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},In=class extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jr,this.combine=J_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vT=new tn,ya=new Sa,If=new wo,ET=new D,Pf=new D,Of=new D,Df=new D,T_=new D,Lf=new D,xT=new D,Uf=new D,Re=class extends Yn{constructor(e=new kt,n=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Lf.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(T_.fromBufferAttribute(h,e),o?Lf.addScaledVector(T_,u):Lf.addScaledVector(T_.sub(n),u))}n.add(Lf)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),If.copy(i.boundingSphere),If.applyMatrix4(r),ya.copy(e.ray).recast(e.near),!(If.containsPoint(ya.origin)===!1&&(ya.intersectSphere(If,ET)===null||ya.origin.distanceToSquared(ET)>(e.far-e.near)**2))&&(vT.copy(r).invert(),ya.copy(e.ray).applyMatrix4(vT),!(i.boundingBox!==null&&ya.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ya)))}_computeIntersections(e,n,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let g=d[p],m=o[g.materialIndex],x=Math.max(g.start,f.start),E=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,S=E;y<S;y+=3){let T=a.getX(y),R=a.getX(y+1),v=a.getX(y+2);s=Ff(this,m,e,i,c,u,h,T,R,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let x=a.getX(g),E=a.getX(g+1),y=a.getX(g+2);s=Ff(this,o,e,i,c,u,h,x,E,y),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let g=d[p],m=o[g.materialIndex],x=Math.max(g.start,f.start),E=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=x,S=E;y<S;y+=3){let T=y,R=y+1,v=y+2;s=Ff(this,m,e,i,c,u,h,T,R,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let x=g,E=g+1,y=g+2;s=Ff(this,o,e,i,c,u,h,x,E,y),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};function zI(t,e,n,i,s,r,o,a){let l;if(e.side===ui?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Do,a),l===null)return null;Uf.copy(a),Uf.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Uf);return c<n.near||c>n.far?null:{distance:c,point:Uf.clone(),object:t}}function Ff(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Pf),t.getVertexPosition(l,Of),t.getVertexPosition(c,Df);let u=zI(t,e,n,i,Pf,Of,Df,xT);if(u){let h=new D;hr.getBarycoord(xT,Pf,Of,Df,h),s&&(u.uv=hr.getInterpolatedAttribute(s,a,l,c,h,new Me)),r&&(u.uv1=hr.getInterpolatedAttribute(r,a,l,c,h,new Me)),o&&(u.normal=hr.getInterpolatedAttribute(o,a,l,c,h,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new D,materialIndex:0};hr.getNormal(Pf,Of,Df,d.normal),u.face=d,u.barycoord=h}return u}var hp=class extends ci{constructor(e=null,n=1,i=1,s,r,o,a,l,c=ni,u=ni,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var va=new wo,GI=new Me(.5,.5),Vf=new D,Xl=class{constructor(e=new Us,n=new Us,i=new Us,s=new Us,r=new Us,o=new Us){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Vs,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],x=r[12],E=r[13],y=r[14],S=r[15];if(s[0].setComponents(c-o,f-u,m-p,S-x).normalize(),s[1].setComponents(c+o,f+u,m+p,S+x).normalize(),s[2].setComponents(c+a,f+h,m+_,S+E).normalize(),s[3].setComponents(c-a,f-h,m-_,S-E).normalize(),i)s[4].setComponents(l,d,g,y).normalize(),s[5].setComponents(c-l,f-d,m-g,S-y).normalize();else if(s[4].setComponents(c-l,f-d,m-g,S-y).normalize(),n===Vs)s[5].setComponents(c+l,f+d,m+g,S+y).normalize();else if(n===Bl)s[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),va.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(va)}intersectsSprite(e){va.center.set(0,0,0);let n=GI.distanceTo(e.center);return va.radius=.7071067811865476+n,va.applyMatrix4(e.matrixWorld),this.intersectsSphere(va)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Vf.x=s.normal.x>0?e.max.x:e.min.x,Vf.y=s.normal.y>0?e.max.y:e.min.y,Vf.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vf)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var is=class extends Bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},dp=new D,fp=new D,ST=new tn,Au=new Sa,Bf=new wo,M_=new D,bT=new D,Ts=class extends Yn{constructor(e=new kt,n=new is){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)dp.fromBufferAttribute(n,s-1),fp.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=dp.distanceTo(fp);e.setAttribute("lineDistance",new Bt(i,1))}else ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bf.copy(i.boundingSphere),Bf.applyMatrix4(s),Bf.radius+=r,e.ray.intersectsSphere(Bf)===!1)return;ST.copy(s).invert(),Au.copy(e.ray).applyMatrix4(ST);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){let m=u.getX(_),x=u.getX(_+1),E=kf(this,e,Au,l,m,x,_);E&&n.push(E)}if(this.isLineLoop){let _=u.getX(p-1),g=u.getX(f),m=kf(this,e,Au,l,_,g,p-1);m&&n.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){let m=kf(this,e,Au,l,_,_+1,_);m&&n.push(m)}if(this.isLineLoop){let _=kf(this,e,Au,l,p-1,f,p-1);_&&n.push(_)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function kf(t,e,n,i,s,r,o){let a=t.geometry.attributes.position;if(dp.fromBufferAttribute(a,s),fp.fromBufferAttribute(a,r),n.distanceSqToSegment(dp,fp,M_,bT)>i)return;M_.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(M_);if(!(c<e.near||c>e.far))return{distance:c,point:bT.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}var TT=new D,MT=new D,ba=class extends Ts{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)TT.fromBufferAttribute(n,s),MT.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+TT.distanceTo(MT);e.setAttribute("lineDistance",new Bt(i,1))}else ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var $l=class extends Bs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wT=new tn,U_=new Sa,Hf=new wo,zf=new D,Gu=class extends Yn{constructor(e=new kt,n=new $l){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hf.copy(i.boundingSphere),Hf.applyMatrix4(s),Hf.radius+=r,e.ray.intersectsSphere(Hf)===!1)return;wT.copy(s).invert(),U_.copy(e.ray).applyMatrix4(wT);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,_=f;p<_;p++){let g=c.getX(p);zf.fromBufferAttribute(h,g),AT(zf,g,l,s,e,n,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,_=f;p<_;p++)zf.fromBufferAttribute(h,p),AT(zf,p,l,s,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function AT(t,e,n,i,s,r,o){let a=U_.distanceSqToPoint(t);if(a<n){let l=new D;U_.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Wu=class extends ci{constructor(e=[],n=Lo,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ao=class extends ci{constructor(e,n,i,s,r,o,a,l,c){super(e,n,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ro=class extends ci{constructor(e,n,i=Hs,s,r,o,a=ni,l=ni,c,u=fr,h=1){if(u!==fr&&u!==Uo)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:n,depth:h};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}},pp=class extends Ro{constructor(e,n=Hs,i=Lo,s,r,o=ni,a=ni,l,c=fr){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Xu=class extends ci{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ft=class t extends kt{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,i,n,e,o,r,0),p("z","y","x",1,-1,i,n,-e,o,r,1),p("x","z","y",1,1,e,i,n,s,o,2),p("x","z","y",1,-1,e,i,-n,s,o,3),p("x","y","z",1,-1,e,n,i,s,r,4),p("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(h,2));function p(_,g,m,x,E,y,S,T,R,v,M){let w=y/R,F=S/v,U=y/2,H=S/2,V=T/2,k=R+1,G=v+1,K=0,te=0,W=new D;for(let Q=0;Q<G;Q++){let ae=Q*F-H;for(let we=0;we<k;we++){let Ie=we*w-U;W[_]=Ie*x,W[g]=ae*E,W[m]=V,c.push(W.x,W.y,W.z),W[_]=0,W[g]=0,W[m]=T>0?1:-1,u.push(W.x,W.y,W.z),h.push(we/R),h.push(1-Q/v),K+=1}}for(let Q=0;Q<v;Q++)for(let ae=0;ae<R;ae++){let we=d+ae+k*Q,Ie=d+ae+k*(Q+1),gt=d+(ae+1)+k*(Q+1),ot=d+(ae+1)+k*Q;l.push(we,Ie,ot),l.push(Ie,gt,ot),te+=6}a.addGroup(f,te,M),f+=te,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ta=class t extends kt{constructor(e=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);let r=[],o=[],a=[],l=[],c=new D,u=new Me;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=n;h++,d+=3){let f=i+h/n*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=n;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(a,3)),this.setAttribute("uv",new Bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.segments,e.thetaStart,e.thetaLength)}},xn=class t extends kt{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],p=0,_=[],g=i/2,m=0;x(),o===!1&&(e>0&&E(!0),n>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Bt(h,3)),this.setAttribute("normal",new Bt(d,3)),this.setAttribute("uv",new Bt(f,2));function x(){let y=new D,S=new D,T=0,R=(n-e)/i;for(let v=0;v<=r;v++){let M=[],w=v/r,F=w*(n-e)+e;for(let U=0;U<=s;U++){let H=U/s,V=H*l+a,k=Math.sin(V),G=Math.cos(V);S.x=F*k,S.y=-w*i+g,S.z=F*G,h.push(S.x,S.y,S.z),y.set(k,R,G).normalize(),d.push(y.x,y.y,y.z),f.push(H,1-w),M.push(p++)}_.push(M)}for(let v=0;v<s;v++)for(let M=0;M<r;M++){let w=_[M][v],F=_[M+1][v],U=_[M+1][v+1],H=_[M][v+1];(e>0||M!==0)&&(u.push(w,F,H),T+=3),(n>0||M!==r-1)&&(u.push(F,U,H),T+=3)}c.addGroup(m,T,0),m+=T}function E(y){let S=p,T=new Me,R=new D,v=0,M=y===!0?e:n,w=y===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),p++;let F=p;for(let U=0;U<=s;U++){let V=U/s*l+a,k=Math.cos(V),G=Math.sin(V);R.x=M*G,R.y=g*w,R.z=M*k,h.push(R.x,R.y,R.z),d.push(0,w,0),T.x=k*.5+.5,T.y=G*.5*w+.5,f.push(T.x,T.y),p++}for(let U=0;U<s;U++){let H=S+U,V=F+U;y===!0?u.push(V,V+1,H):u.push(V+1,V,H),v+=3}c.addGroup(m,v,y===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ma=class t extends xn{constructor(e=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,n,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new t(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mp=class t extends kt{constructor(e=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:s};let r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Bt(r,3)),this.setAttribute("normal",new Bt(r.slice(),3)),this.setAttribute("uv",new Bt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let E=new D,y=new D,S=new D;for(let T=0;T<n.length;T+=3)f(n[T+0],E),f(n[T+1],y),f(n[T+2],S),l(E,y,S,x)}function l(x,E,y,S){let T=S+1,R=[];for(let v=0;v<=T;v++){R[v]=[];let M=x.clone().lerp(y,v/T),w=E.clone().lerp(y,v/T),F=T-v;for(let U=0;U<=F;U++)U===0&&v===T?R[v][U]=M:R[v][U]=M.clone().lerp(w,U/F)}for(let v=0;v<T;v++)for(let M=0;M<2*(T-v)-1;M++){let w=Math.floor(M/2);M%2===0?(d(R[v][w+1]),d(R[v+1][w]),d(R[v][w])):(d(R[v][w+1]),d(R[v+1][w+1]),d(R[v+1][w]))}}function c(x){let E=new D;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(x),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function u(){let x=new D;for(let E=0;E<r.length;E+=3){x.x=r[E+0],x.y=r[E+1],x.z=r[E+2];let y=g(x)/2/Math.PI+.5,S=m(x)/Math.PI+.5;o.push(y,1-S)}p(),h()}function h(){for(let x=0;x<o.length;x+=6){let E=o[x+0],y=o[x+2],S=o[x+4],T=Math.max(E,y,S),R=Math.min(E,y,S);T>.9&&R<.1&&(E<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),S<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,E){let y=x*3;E.x=e[y+0],E.y=e[y+1],E.z=e[y+2]}function p(){let x=new D,E=new D,y=new D,S=new D,T=new Me,R=new Me,v=new Me;for(let M=0,w=0;M<r.length;M+=9,w+=6){x.set(r[M+0],r[M+1],r[M+2]),E.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),T.set(o[w+0],o[w+1]),R.set(o[w+2],o[w+3]),v.set(o[w+4],o[w+5]),S.copy(x).add(E).add(y).divideScalar(3);let F=g(S);_(T,w+0,x,F),_(R,w+2,E,F),_(v,w+4,y,F)}}function _(x,E,y,S){S<0&&x.x===1&&(o[E]=x.x-1),y.x===0&&y.z===0&&(o[E]=S/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.vertices,e.indices,e.radius,e.detail)}};var Gf=new D,Wf=new D,w_=new D,Xf=new hr,$u=class extends kt{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){let s=Math.pow(10,4),r=Math.cos(Ll*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:_,b:g,c:m}=Xf;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Xf.getNormal(w_),h[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,h[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let x=0;x<3;x++){let E=(x+1)%3,y=h[x],S=h[E],T=Xf[u[x]],R=Xf[u[E]],v=`${y}_${S}`,M=`${S}_${y}`;M in d&&d[M]?(w_.dot(d[M].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(R.x,R.y,R.z)),d[M]=null):v in d||(d[v]={index0:c[x],index1:c[E],normal:w_.clone()})}}for(let p in d)if(d[p]){let{index0:_,index1:g}=d[p];Gf.fromBufferAttribute(a,_),Wf.fromBufferAttribute(a,g),f.push(Gf.x,Gf.y,Gf.z),f.push(Wf.x,Wf.y,Wf.z)}this.setAttribute("position",new Bt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ss=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ht("Curve: .getPoint() not implemented.")}getPointAt(e,n){let i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),r=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){let i=this.getLengths(),s=0,r=i.length,o;n?o=n:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let u=i[s],d=i[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,n){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=n||(o.isVector2?new Me:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){let i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){let i=new D,s=[],r=[],o=[],a=new D,l=new tn;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Pt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(n===!0){let f=Math.acos(Pt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ql=class extends ss{constructor(e=0,n=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Me){let i=n,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},gp=class extends ql{constructor(e,n,i,s,r,o){super(e,n,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function py(){let t=0,e=0,n=0,i=0;function s(r,o,a,l){t=r,e=a,n=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return t+e*r+n*o+i*a}}}var RT=new D,CT=new D,A_=new py,R_=new py,C_=new py,wa=class extends ss{constructor(e=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=s}getPoint(e,n=new D){let i=n,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(CT.subVectors(s[0],s[1]).add(s[0]),c=CT);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(RT.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=RT),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),A_.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,_,g),R_.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,_,g),C_.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,_,g)}else this.curveType==="catmullrom"&&(A_.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),R_.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),C_.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(A_.calc(l),R_.calc(l),C_.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function NT(t,e,n,i,s){let r=(i-e)*.5,o=(s-n)*.5,a=t*t,l=t*a;return(2*n-2*i+r+o)*l+(-3*n+3*i-2*r-o)*a+r*t+n}function WI(t,e){let n=1-t;return n*n*e}function XI(t,e){return 2*(1-t)*t*e}function $I(t,e){return t*t*e}function Nu(t,e,n,i){return WI(t,e)+XI(t,n)+$I(t,i)}function qI(t,e){let n=1-t;return n*n*n*e}function YI(t,e){let n=1-t;return 3*n*n*t*e}function KI(t,e){return 3*(1-t)*t*t*e}function JI(t,e){return t*t*t*e}function Iu(t,e,n,i,s){return qI(t,e)+YI(t,n)+KI(t,i)+JI(t,s)}var qu=class extends ss{constructor(e=new Me,n=new Me,i=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new Me){let i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Iu(e,s.x,r.x,o.x,a.x),Iu(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_p=class extends ss{constructor(e=new D,n=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new D){let i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Iu(e,s.x,r.x,o.x,a.x),Iu(e,s.y,r.y,o.y,a.y),Iu(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yu=class extends ss{constructor(e=new Me,n=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Me){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Me){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yp=class extends ss{constructor(e=new D,n=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new D){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new D){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ku=class extends ss{constructor(e=new Me,n=new Me,i=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Me){let i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(Nu(e,s.x,r.x,o.x),Nu(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vp=class extends ss{constructor(e=new D,n=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new D){let i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(Nu(e,s.x,r.x,o.x),Nu(e,s.y,r.y,o.y),Nu(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ju=class extends ss{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Me){let i=n,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(NT(a,l.x,c.x,u.x,h.x),NT(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(new Me().fromArray(s))}return this}},F_=Object.freeze({__proto__:null,ArcCurve:gp,CatmullRomCurve3:wa,CubicBezierCurve:qu,CubicBezierCurve3:_p,EllipseCurve:ql,LineCurve:Yu,LineCurve3:yp,QuadraticBezierCurve:Ku,QuadraticBezierCurve3:vp,SplineCurve:Ju}),Ep=class extends ss{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new F_[i](n,e))}return this}getPoint(e,n){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){let n=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let s=e.curves[n];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let s=this.curves[n];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let s=e.curves[n];this.curves.push(new F_[s.type]().fromJSON(s))}return this}},ju=class extends Ep{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){let i=new Yu(this.currentPoint.clone(),new Me(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,s){let r=new Ku(this.currentPoint.clone(),new Me(e,n),new Me(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,n,i,s,r,o){let a=new qu(this.currentPoint.clone(),new Me(e,n),new Me(i,s),new Me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let n=[this.currentPoint.clone()].concat(e),i=new Ju(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,s,r,o),this}absarc(e,n,i,s,r,o){return this.absellipse(e,n,i,i,s,r,o),this}ellipse(e,n,i,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,s,r,o,a,l),this}absellipse(e,n,i,s,r,o,a,l){let c=new ql(e,n,i,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Yl=class extends ju{constructor(e){super(e),this.uuid=dr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let s=e.holes[n];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let s=this.holes[n];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let s=e.holes[n];this.holes.push(new ju().fromJSON(s))}return this}};function jI(t,e,n=2){let i=e&&e.length,s=i?e[0]*n:t.length,r=AM(t,0,s,n,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=nP(t,e,r,n)),t.length>80*n){a=t[0],l=t[1];let u=a,h=l;for(let d=n;d<s;d+=n){let f=t[d],p=t[d+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Zu(r,o,n,a,l,c,0),o}function AM(t,e,n,i,s){let r;if(s===fP(t,e,n,i)>0)for(let o=e;o<n;o+=i)r=IT(o/i|0,t[o],t[o+1],r);else for(let o=n-i;o>=e;o-=i)r=IT(o/i|0,t[o],t[o+1],r);return r&&Kl(r,r.next)&&(eh(r),r=r.next),r}function Aa(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Kl(n,n.next)||bn(n.prev,n,n.next)===0)){if(eh(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Zu(t,e,n,i,s,r,o){if(!t)return;!o&&r&&aP(t,i,s,r);let a=t;for(;t.prev!==t.next;){let l=t.prev,c=t.next;if(r?QI(t,i,s,r):ZI(t)){e.push(l.i,t.i,c.i),eh(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=eP(Aa(t),e),Zu(t,e,n,i,s,r,2)):o===2&&tP(t,e,n,i,s,r):Zu(Aa(t),e,n,i,s,r,1);break}}}function ZI(t){let e=t.prev,n=t,i=t.next;if(bn(e,n,i)>=0)return!1;let s=e.x,r=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=Math.min(s,r,o),h=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Ru(s,a,r,l,o,c,p.x,p.y)&&bn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function QI(t,e,n,i){let s=t.prev,r=t,o=t.next;if(bn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(u,h,d),_=Math.max(a,l,c),g=Math.max(u,h,d),m=V_(f,p,e,n,i),x=V_(_,g,e,n,i),E=t.prevZ,y=t.nextZ;for(;E&&E.z>=m&&y&&y.z<=x;){if(E.x>=f&&E.x<=_&&E.y>=p&&E.y<=g&&E!==s&&E!==o&&Ru(a,u,l,h,c,d,E.x,E.y)&&bn(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&Ru(a,u,l,h,c,d,y.x,y.y)&&bn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=m;){if(E.x>=f&&E.x<=_&&E.y>=p&&E.y<=g&&E!==s&&E!==o&&Ru(a,u,l,h,c,d,E.x,E.y)&&bn(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&Ru(a,u,l,h,c,d,y.x,y.y)&&bn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function eP(t,e){let n=t;do{let i=n.prev,s=n.next.next;!Kl(i,s)&&CM(i,n,n.next,s)&&Qu(i,s)&&Qu(s,i)&&(e.push(i.i,n.i,s.i),eh(n),eh(n.next),n=t=s),n=n.next}while(n!==t);return Aa(n)}function tP(t,e,n,i,s,r){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&uP(o,a)){let l=NM(o,a);o=Aa(o,o.next),l=Aa(l,l.next),Zu(o,e,n,i,s,r,0),Zu(l,e,n,i,s,r,0);return}a=a.next}o=o.next}while(o!==t)}function nP(t,e,n,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:t.length,c=AM(t,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(cP(c))}s.sort(iP);for(let r=0;r<s.length;r++)n=sP(s[r],n);return n}function iP(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){let i=(t.next.y-t.y)/(t.next.x-t.x),s=(e.next.y-e.y)/(e.next.x-e.x);n=i-s}return n}function sP(t,e){let n=rP(t,e);if(!n)return e;let i=NM(n,t);return Aa(i,i.next),Aa(n,n.next)}function rP(t,e){let n=e,i=t.x,s=t.y,r=-1/0,o;if(Kl(t,n))return n;do{if(Kl(t,n.next))return n.next;if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let h=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=i&&h>r&&(r=h,o=n.x<n.next.x?n:n.next,h===i))return o}n=n.next}while(n!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&RM(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){let h=Math.abs(s-n.y)/(i-n.x);Qu(n,t)&&(h<u||h===u&&(n.x>o.x||n.x===o.x&&oP(o,n)))&&(o=n,u=h)}n=n.next}while(n!==a);return o}function oP(t,e){return bn(t.prev,t,e.prev)<0&&bn(e.next,t,t.next)<0}function aP(t,e,n,i){let s=t;do s.z===0&&(s.z=V_(s.x,s.y,e,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,lP(s)}function lP(t){let e,n=1;do{let i=t,s;t=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<n&&(a++,o=o.nextZ,!!o);c++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:t=s,s.prevZ=r,r=s;i=o}r.nextZ=null,n*=2}while(e>1);return t}function V_(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function cP(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function RM(t,e,n,i,s,r,o,a){return(s-o)*(e-a)>=(t-o)*(r-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(r-a)>=(s-o)*(i-a)}function Ru(t,e,n,i,s,r,o,a){return!(t===o&&e===a)&&RM(t,e,n,i,s,r,o,a)}function uP(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!hP(t,e)&&(Qu(t,e)&&Qu(e,t)&&dP(t,e)&&(bn(t.prev,t,e.prev)||bn(t,e.prev,e))||Kl(t,e)&&bn(t.prev,t,t.next)>0&&bn(e.prev,e,e.next)>0)}function bn(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Kl(t,e){return t.x===e.x&&t.y===e.y}function CM(t,e,n,i){let s=qf(bn(t,e,n)),r=qf(bn(t,e,i)),o=qf(bn(n,i,t)),a=qf(bn(n,i,e));return!!(s!==r&&o!==a||s===0&&$f(t,n,e)||r===0&&$f(t,i,e)||o===0&&$f(n,t,i)||a===0&&$f(n,e,i))}function $f(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function qf(t){return t>0?1:t<0?-1:0}function hP(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&CM(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Qu(t,e){return bn(t.prev,t,t.next)<0?bn(t,e,t.next)>=0&&bn(t,t.prev,e)>=0:bn(t,e,t.prev)<0||bn(t,t.next,e)<0}function dP(t,e){let n=t,i=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function NM(t,e){let n=B_(t.i,t.x,t.y),i=B_(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function IT(t,e,n,i){let s=B_(t,e,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function eh(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function B_(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fP(t,e,n,i){let s=0;for(let r=e,o=n-i;r<n;r+=i)s+=(t[o]-t[r])*(t[r+1]+t[o+1]),o=r;return s}var k_=class{static triangulate(e,n,i=2){return jI(e,n,i)}},Ea=class t{static area(e){let n=e.length,i=0;for(let s=n-1,r=0;r<n;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return t.area(e)<0}static triangulateShape(e,n){let i=[],s=[],r=[];PT(e),OT(i,e);let o=e.length;n.forEach(PT);for(let l=0;l<n.length;l++)s.push(o),o+=n[l].length,OT(i,n[l]);let a=k_.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function PT(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function OT(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}var th=class t extends kt{constructor(e=new Yl([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Bt(s,3)),this.setAttribute("uv",new Bt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1,d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,f=n.bevelThickness!==void 0?n.bevelThickness:.2,p=n.bevelSize!==void 0?n.bevelSize:f-.1,_=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3,m=n.extrudePath,x=n.UVGenerator!==void 0?n.UVGenerator:pP,E,y=!1,S,T,R,v;if(m){E=m.getSpacedPoints(u),y=!0,d=!1;let A=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(u,A),T=new D,R=new D,v=new D}d||(g=0,f=0,p=0,_=0);let M=a.extractPoints(c),w=M.shape,F=M.holes;if(!Ea.isClockWise(w)){w=w.reverse();for(let A=0,L=F.length;A<L;A++){let z=F[A];Ea.isClockWise(z)&&(F[A]=z.reverse())}}function H(A){let z=10000000000000001e-36,Y=A[0];for(let q=1;q<=A.length;q++){let ne=q%A.length,se=A[ne],X=se.x-Y.x,ce=se.y-Y.y,P=X*X+ce*ce,Ae=Math.max(Math.abs(se.x),Math.abs(se.y),Math.abs(Y.x),Math.abs(Y.y)),pe=z*Ae*Ae;if(P<=pe){A.splice(ne,1),q--;continue}Y=se}}H(w),F.forEach(H);let V=F.length,k=w;for(let A=0;A<V;A++){let L=F[A];w=w.concat(L)}function G(A,L,z){return L||mt("ExtrudeGeometry: vec does not exist"),A.clone().addScaledVector(L,z)}let K=w.length;function te(A,L,z){let Y,q,ne,se=A.x-L.x,X=A.y-L.y,ce=z.x-A.x,P=z.y-A.y,Ae=se*se+X*X,pe=se*P-X*ce;if(Math.abs(pe)>Number.EPSILON){let I=Math.sqrt(Ae),b=Math.sqrt(ce*ce+P*P),$=L.x-X/I,Z=L.y+se/I,ee=z.x-P/b,Se=z.y+ce/b,xe=((ee-$)*P-(Se-Z)*ce)/(se*P-X*ce);Y=$+se*xe-A.x,q=Z+X*xe-A.y;let ue=Y*Y+q*q;if(ue<=2)return new Me(Y,q);ne=Math.sqrt(ue/2)}else{let I=!1;se>Number.EPSILON?ce>Number.EPSILON&&(I=!0):se<-Number.EPSILON?ce<-Number.EPSILON&&(I=!0):Math.sign(X)===Math.sign(P)&&(I=!0),I?(Y=-X,q=se,ne=Math.sqrt(Ae)):(Y=se,q=X,ne=Math.sqrt(Ae/2))}return new Me(Y/ne,q/ne)}let W=[];for(let A=0,L=k.length,z=L-1,Y=A+1;A<L;A++,z++,Y++)z===L&&(z=0),Y===L&&(Y=0),W[A]=te(k[A],k[z],k[Y]);let Q=[],ae,we=W.concat();for(let A=0,L=V;A<L;A++){let z=F[A];ae=[];for(let Y=0,q=z.length,ne=q-1,se=Y+1;Y<q;Y++,ne++,se++)ne===q&&(ne=0),se===q&&(se=0),ae[Y]=te(z[Y],z[ne],z[se]);Q.push(ae),we=we.concat(ae)}let Ie;if(g===0)Ie=Ea.triangulateShape(k,F);else{let A=[],L=[];for(let z=0;z<g;z++){let Y=z/g,q=f*Math.cos(Y*Math.PI/2),ne=p*Math.sin(Y*Math.PI/2)+_;for(let se=0,X=k.length;se<X;se++){let ce=G(k[se],W[se],ne);Te(ce.x,ce.y,-q),Y===0&&A.push(ce)}for(let se=0,X=V;se<X;se++){let ce=F[se];ae=Q[se];let P=[];for(let Ae=0,pe=ce.length;Ae<pe;Ae++){let I=G(ce[Ae],ae[Ae],ne);Te(I.x,I.y,-q),Y===0&&P.push(I)}Y===0&&L.push(P)}}Ie=Ea.triangulateShape(A,L)}let gt=Ie.length,ot=p+_;for(let A=0;A<K;A++){let L=d?G(w[A],we[A],ot):w[A];y?(R.copy(S.normals[0]).multiplyScalar(L.x),T.copy(S.binormals[0]).multiplyScalar(L.y),v.copy(E[0]).add(R).add(T),Te(v.x,v.y,v.z)):Te(L.x,L.y,0)}for(let A=1;A<=u;A++)for(let L=0;L<K;L++){let z=d?G(w[L],we[L],ot):w[L];y?(R.copy(S.normals[A]).multiplyScalar(z.x),T.copy(S.binormals[A]).multiplyScalar(z.y),v.copy(E[A]).add(R).add(T),Te(v.x,v.y,v.z)):Te(z.x,z.y,h/u*A)}for(let A=g-1;A>=0;A--){let L=A/g,z=f*Math.cos(L*Math.PI/2),Y=p*Math.sin(L*Math.PI/2)+_;for(let q=0,ne=k.length;q<ne;q++){let se=G(k[q],W[q],Y);Te(se.x,se.y,h+z)}for(let q=0,ne=F.length;q<ne;q++){let se=F[q];ae=Q[q];for(let X=0,ce=se.length;X<ce;X++){let P=G(se[X],ae[X],Y);y?Te(P.x,P.y+E[u-1].y,E[u-1].x+z):Te(P.x,P.y,h+z)}}}$e(),re();function $e(){let A=s.length/3;if(d){let L=0,z=K*L;for(let Y=0;Y<gt;Y++){let q=Ie[Y];ze(q[2]+z,q[1]+z,q[0]+z)}L=u+g*2,z=K*L;for(let Y=0;Y<gt;Y++){let q=Ie[Y];ze(q[0]+z,q[1]+z,q[2]+z)}}else{for(let L=0;L<gt;L++){let z=Ie[L];ze(z[2],z[1],z[0])}for(let L=0;L<gt;L++){let z=Ie[L];ze(z[0]+K*u,z[1]+K*u,z[2]+K*u)}}i.addGroup(A,s.length/3-A,0)}function re(){let A=s.length/3,L=0;me(k,L),L+=k.length;for(let z=0,Y=F.length;z<Y;z++){let q=F[z];me(q,L),L+=q.length}i.addGroup(A,s.length/3-A,1)}function me(A,L){let z=A.length;for(;--z>=0;){let Y=z,q=z-1;q<0&&(q=A.length-1);for(let ne=0,se=u+g*2;ne<se;ne++){let X=K*ne,ce=K*(ne+1),P=L+Y+X,Ae=L+q+X,pe=L+q+ce,I=L+Y+ce;Oe(P,Ae,pe,I)}}}function Te(A,L,z){l.push(A),l.push(L),l.push(z)}function ze(A,L,z){We(A),We(L),We(z);let Y=s.length/3,q=x.generateTopUV(i,s,Y-3,Y-2,Y-1);pt(q[0]),pt(q[1]),pt(q[2])}function Oe(A,L,z,Y){We(A),We(L),We(Y),We(L),We(z),We(Y);let q=s.length/3,ne=x.generateSideWallUV(i,s,q-6,q-3,q-2,q-1);pt(ne[0]),pt(ne[1]),pt(ne[3]),pt(ne[1]),pt(ne[2]),pt(ne[3])}function We(A){s.push(l[A*3+0]),s.push(l[A*3+1]),s.push(l[A*3+2])}function pt(A){r.push(A.x),r.push(A.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return mP(n,i,e)}static fromJSON(e,n){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=n[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new F_[s.type]().fromJSON(s)),new t(i,e.options)}},pP={generateTopUV:function(t,e,n,i,s){let r=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new Me(r,o),new Me(a,l),new Me(c,u)]},generateSideWallUV:function(t,e,n,i,s,r){let o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Me(o,1-l),new Me(c,1-h),new Me(d,1-p),new Me(_,1-m)]:[new Me(a,1-l),new Me(u,1-h),new Me(f,1-p),new Me(g,1-m)]}};function mP(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let r=t[i];n.shapes.push(r.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}var nh=class t extends kt{constructor(e=[new Me(0,-.5),new Me(.5,0),new Me(0,.5)],n=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:s},n=Math.floor(n),s=Pt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/n,h=new D,d=new Me,f=new D,p=new D,_=new D,g=0,m=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let x=0;x<=n;x++){let E=i+x*u*s,y=Math.sin(E),S=Math.cos(E);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*y,h.y=e[T].y,h.z=e[T].x*S,o.push(h.x,h.y,h.z),d.x=x/n,d.y=T/(e.length-1),a.push(d.x,d.y);let R=l[3*T+0]*y,v=l[3*T+1],M=l[3*T+0]*S;c.push(R,v,M)}}for(let x=0;x<n;x++)for(let E=0;E<e.length-1;E++){let y=E+x*e.length,S=y,T=y+e.length,R=y+e.length+1,v=y+1;r.push(S,T,v),r.push(R,v,T)}this.setIndex(r),this.setAttribute("position",new Bt(o,3)),this.setAttribute("uv",new Bt(a,2)),this.setAttribute("normal",new Bt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.points,e.segments,e.phiStart,e.phiLength)}};var ih=class t extends kt{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=n/l,f=[],p=[],_=[],g=[];for(let m=0;m<u;m++){let x=m*d-o;for(let E=0;E<c;E++){let y=E*h-r;p.push(y,-x,0),_.push(0,0,1),g.push(E/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let E=x+c*m,y=x+c*(m+1),S=x+1+c*(m+1),T=x+1+c*m;f.push(E,y,T),f.push(y,S,T)}this.setIndex(f),this.setAttribute("position",new Bt(p,3)),this.setAttribute("normal",new Bt(_,3)),this.setAttribute("uv",new Bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},Ra=class t extends kt{constructor(e=.5,n=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,d=(n-e)/s,f=new D,p=new Me;for(let _=0;_<=s;_++){for(let g=0;g<=i;g++){let m=r+g/i*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/n+1)/2,p.y=(f.y/n+1)/2,u.push(p.x,p.y)}h+=d}for(let _=0;_<s;_++){let g=_*(i+1);for(let m=0;m<i;m++){let x=m+g,E=x,y=x+i+1,S=x+i+2,T=x+1;a.push(E,y,T),a.push(y,S,T)}}this.setIndex(a),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Hn=class t extends kt{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new D,d=new D,f=[],p=[],_=[],g=[];for(let m=0;m<=i;m++){let x=[],E=m/i,y=o+E*a,S=e*Math.cos(y),T=Math.sqrt(e*e-S*S),R=0;m===0&&o===0?R=.5/n:m===i&&l===Math.PI&&(R=-.5/n);for(let v=0;v<=n;v++){let M=v/n,w=s+M*r;h.x=-T*Math.cos(w),h.y=S,h.z=T*Math.sin(w),p.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(M+R,1-E),x.push(c++)}u.push(x)}for(let m=0;m<i;m++)for(let x=0;x<n;x++){let E=u[m][x+1],y=u[m][x],S=u[m+1][x],T=u[m+1][x+1];(m!==0||o>0)&&f.push(E,y,T),(m!==i-1||l<Math.PI)&&f.push(y,S,T)}this.setIndex(f),this.setAttribute("position",new Bt(p,3)),this.setAttribute("normal",new Bt(_,3)),this.setAttribute("uv",new Bt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},sh=class t extends mp{constructor(e=1,n=0){let i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,n),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new t(e.radius,e.detail)}},gr=class t extends kt{constructor(e=1,n=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],h=[],d=new D,f=new D,p=new D;for(let _=0;_<=i;_++){let g=o+_/i*a;for(let m=0;m<=s;m++){let x=m/s*r;f.x=(e+n*Math.cos(g))*Math.cos(x),f.y=(e+n*Math.cos(g))*Math.sin(x),f.z=n*Math.sin(g),c.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),p.subVectors(f,d).normalize(),u.push(p.x,p.y,p.z),h.push(m/s),h.push(_/i)}}for(let _=1;_<=i;_++)for(let g=1;g<=s;g++){let m=(s+1)*_+g-1,x=(s+1)*(_-1)+g-1,E=(s+1)*(_-1)+g,y=(s+1)*_+g;l.push(m,x,y),l.push(x,E,y)}this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Ia(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(DT(s))s.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(DT(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function wi(t){let e={};for(let n=0;n<t.length;n++){let i=Ia(t[n]);for(let s in i)e[s]=i[s]}return e}function DT(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function gP(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function my(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:zt.workingColorSpace}var IM={clone:Ia,merge:wi},_P=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rs=class extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_P,this.fragmentShader=yP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ia(e.uniforms),this.uniformsGroups=gP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Ye().setHex(s.value);break;case"v2":this.uniforms[i].value=new Me().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new En().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Et().fromArray(s.value);break;case"m4":this.uniforms[i].value=new tn().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},xp=class extends rs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Mi=class extends Bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bm,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Co=class extends Mi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Sp=class extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bp=class extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var No=class extends is{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Pl(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function N_(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var Io=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=n[++i],e<s)break t}o=n.length;break n}if(!(e>=r)){let a=n[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)n[o]=i[r+o];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Tp=class extends Io{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:O_,endingEnd:O_}}intervalChanged_(e,n,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case D_:r=e,a=2*n-i;break;case L_:r=s.length-2,a=n+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case D_:o=e,l=2*i-n;break;case L_:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-n)/(s-n),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,x=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,E=(-1-f)*g+(1.5+f)*_+.5*p,y=f*g-f*_;for(let S=0;S!==a;++S)r[S]=m*o[u+S]+x*o[c+S]+E*o[l+S]+y*o[h+S];return r}},Mp=class extends Io{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-n)/(s-n),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},wp=class extends Io{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ap=class extends Io{interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(i-n)/(s-n),_=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*_+o[l+g]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let _=o[c+p],g=o[l+p],m=f*d+p*2,x=h[m],E=h[m+1],y=e*d+p*2,S=u[y],T=u[y+1],R=EP(i,n,x,S,s);r[p]=PM(R,_,E,T,g)}return r}};function PM(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function vP(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function EP(t,e,n,i,s){let r=(t-e)/(s-e);for(let o=0;o<8;o++){let a=PM(r,e,n,i,s)-t;if(Math.abs(a)<1e-10)break;let l=vP(r,e,n,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var os=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pl(n,this.TimeBufferType),this.values=Pl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Pl(e.times,Array),values:Pl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),N_(e.settings)&&(i.settings={inTangents:Pl(e.settings.inTangents,Array),outTangents:Pl(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new wp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new Ap(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case Pu:n=this.InterpolantFactoryMethodDiscrete;break;case op:n=this.InterpolantFactoryMethodLinear;break;case Jf:n=this.InterpolantFactoryMethodSmooth;break;case P_:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ht("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pu;case this.InterpolantFactoryMethodLinear:return op;case this.InterpolantFactoryMethodSmooth:return Jf;case this.InterpolantFactoryMethodBezier:return P_}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e;N_(this.settings)&&(LT(this.settings.inTangents,e),LT(this.settings.outTangents,e))}return this}trim(e,n){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>n;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(mt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(mt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){mt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){mt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&cI(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){mt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Jf,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*i,d=h-i,f=h+i;for(let p=0;p!==i;++p){let _=n[h+p];if(_!==n[d+p]||_!==n[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,d=o*i;for(let f=0;f!==i;++f)n[d+f]=n[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,N_(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function LT(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}os.prototype.ValueTypeName="";os.prototype.TimeBufferType=Float32Array;os.prototype.ValueBufferType=Float32Array;os.prototype.DefaultInterpolation=op;var Po=class extends os{constructor(e,n,i){super(e,n,i)}};Po.prototype.ValueTypeName="bool";Po.prototype.ValueBufferType=Array;Po.prototype.DefaultInterpolation=Pu;Po.prototype.InterpolantFactoryMethodLinear=void 0;Po.prototype.InterpolantFactoryMethodSmooth=void 0;var Rp=class extends os{constructor(e,n,i,s){super(e,n,i,s)}};Rp.prototype.ValueTypeName="color";var Cp=class extends os{constructor(e,n,i,s){super(e,n,i,s)}};Cp.prototype.ValueTypeName="number";var Np=class extends Io{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(s-n),c=e*a;for(let u=c+a;c!==u;c+=4)Wi.slerpFlat(r,0,o,c-a,o,c,l);return r}},rh=class extends os{constructor(e,n,i,s){super(e,n,i,s)}InterpolantFactoryMethodLinear(e){return new Np(this.times,this.values,this.getValueSize(),e)}};rh.prototype.ValueTypeName="quaternion";rh.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends os{constructor(e,n,i){super(e,n,i)}};Oo.prototype.ValueTypeName="string";Oo.prototype.ValueBufferType=Array;Oo.prototype.DefaultInterpolation=Pu;Oo.prototype.InterpolantFactoryMethodLinear=void 0;Oo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ip=class extends os{constructor(e,n,i,s){super(e,n,i,s)}};Ip.prototype.ValueTypeName="vector";var Pp=class{constructor(e,n,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},OM=new Pp,Op=class{constructor(e){this.manager=e!==void 0?e:OM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Op.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jl=class extends Yn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},oh=class extends Jl{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){let n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}},I_=new tn,UT=new D,FT=new D,Dp=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=$i,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xl,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new En(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera;UT.setFromMatrixPosition(e.matrixWorld),n.position.copy(UT),FT.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(FT),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,s){I_.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(I_,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Bl||e.reversedDepth?n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),n.multiply(I_)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Yf=new D,Kf=new Wi,ur=new D,ah=class extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Vs,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yf,Kf,ur),ur.x===1&&ur.y===1&&ur.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yf,Kf,ur.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Yf,Kf,ur),ur.x===1&&ur.y===1&&ur.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yf,Kf,ur.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},To=new D,VT=new Me,BT=new Me,bi=class extends ah{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Hl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ll*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hl*2*Math.atan(Math.tan(Ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){To.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(To.x,To.y).multiplyScalar(-e/To.z),To.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(To.x,To.y).multiplyScalar(-e/To.z)}getViewSize(e,n){return this.getViewBounds(e,VT,BT),n.subVectors(BT,VT)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Ll*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var jl=class extends ah{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},H_=class extends Dp{constructor(){super(new jl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zl=class extends Jl{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yn.DEFAULT_UP),this.updateMatrix(),this.target=new Yn,this.shadow=new H_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}},lh=class extends Jl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ol=-90,Dl=1,Lp=class extends Yn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new bi(Ol,Dl,e,n);s.layers=this.layers,this.add(s);let r=new bi(Ol,Dl,e,n);r.layers=this.layers,this.add(r);let o=new bi(Ol,Dl,e,n);o.layers=this.layers,this.add(o);let a=new bi(Ol,Dl,e,n);a.layers=this.layers,this.add(a);let l=new bi(Ol,Dl,e,n);l.layers=this.layers,this.add(l);let c=new bi(Ol,Dl,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(let c of n)this.remove(c);if(e===Vs)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Up=class extends bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var gy="\\[\\]\\.:\\/",xP=new RegExp("["+gy+"]","g"),_y="[^"+gy+"]",SP="[^"+gy.replace("\\.","")+"]",bP=/((?:WC+[\/:])*)/.source.replace("WC",_y),TP=/(WCOD+)?/.source.replace("WCOD",SP),MP=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_y),wP=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_y),AP=new RegExp("^"+bP+TP+MP+wP+"$"),RP=["material","materials","bones","map"],z_=class{constructor(e,n,i){let s=i||_n.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},_n=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xP,"")}static parseTrackName(e){let n=AP.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);RP.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){mt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){mt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){mt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){mt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){mt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=n.nodeName;mt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_n.Composite=z_;_n.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_n.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_n.prototype.GetterByBindingType=[_n.prototype._getValue_direct,_n.prototype._getValue_array,_n.prototype._getValue_arrayElement,_n.prototype._getValue_toArray];_n.prototype.SetterByBindingTypeAndVersioning=[[_n.prototype._setValue_direct,_n.prototype._setValue_direct_setNeedsUpdate,_n.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_array,_n.prototype._setValue_array_setNeedsUpdate,_n.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_arrayElement,_n.prototype._setValue_arrayElement_setNeedsUpdate,_n.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_fromArray,_n.prototype._setValue_fromArray_setNeedsUpdate,_n.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _V=new Float32Array(1);var kT=new tn,ch=class{constructor(e,n,i=0,s=1/0){this.ray=new Sa(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new Gl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):mt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return kT.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kT),this}intersectObject(e,n=!0,i=[]){return G_(e,this,i,n),i.sort(HT),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)G_(e[s],this,i,n);return i.sort(HT),i}};function HT(t,e){return t.distance-e.distance}function G_(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){let r=t.children;for(let o=0,a=r.length;o<a;o++)G_(r[o],e,n,!0)}}var uh=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ht("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}};var by=class by{constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){let r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};by.prototype.isMatrix2=!0;var W_=by;function yy(t,e,n,i){let s=CP(i);switch(n){case ly:return t*e;case uy:return t*e/s.components*s.byteLength;case Wp:return t*e/s.components*s.byteLength;case Fo:return t*e*2/s.components*s.byteLength;case Xp:return t*e*2/s.components*s.byteLength;case cy:return t*e*3/s.components*s.byteLength;case Ms:return t*e*4/s.components*s.byteLength;case $p:return t*e*4/s.components*s.byteLength;case mh:case gh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case _h:case yh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yp:case Jp:return Math.max(t,16)*Math.max(e,8)/4;case qp:case Kp:return Math.max(t,8)*Math.max(e,8)/2;case jp:case Zp:case em:case tm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Qp:case vh:case nm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case im:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sm:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case rm:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case om:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case am:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case lm:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case cm:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case um:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case hm:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case dm:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case fm:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case pm:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case mm:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case gm:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case _m:case ym:case vm:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Em:case xm:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Eh:case Sm:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function CP(t){switch(t){case $i:case sy:return{byteLength:1,components:1};case tc:case ry:case Gs:return{byteLength:2,components:1};case zp:case Gp:return{byteLength:2,components:4};case Hs:case Hp:case zs:return{byteLength:4,components:1};case oy:case ay:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function t1(){let t=null,e=!1,n=null,i=null;function s(r,o){i=t.requestAnimationFrame(s),n(r,o)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function IP(t){let e=new WeakMap;function n(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],_=h[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let _=h[f];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var PP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OP=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,DP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,BP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,HP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,XP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$P=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,YP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ZP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,QP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,e2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,t2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,n2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,i2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,s2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l2="gl_FragColor = linearToOutputTexel( gl_FragColor );",c2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,h2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,d2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,f2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,m2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,E2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,T2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,M2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,N2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,I2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,P2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,O2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,L2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,z2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,W2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,X2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,K2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,j2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Z2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eO=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tO=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nO=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iO=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sO=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rO=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oO=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aO=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,lO=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cO=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uO=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hO=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dO=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fO=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pO=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mO=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gO=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_O=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yO=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vO=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,EO=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xO=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,SO=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bO=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TO=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MO=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wO=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,AO=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RO=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CO=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NO=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IO=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,PO=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OO=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DO=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LO=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UO=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FO=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VO=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,BO=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kO=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HO=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zO=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GO=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WO=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XO=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$O=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qO=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YO=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KO=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JO=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jO=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZO=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,QO=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:PP,alphahash_pars_fragment:OP,alphamap_fragment:DP,alphamap_pars_fragment:LP,alphatest_fragment:UP,alphatest_pars_fragment:FP,aomap_fragment:VP,aomap_pars_fragment:BP,batching_pars_vertex:kP,batching_vertex:HP,begin_vertex:zP,beginnormal_vertex:GP,bsdfs:WP,iridescence_fragment:XP,bumpmap_pars_fragment:$P,clipping_planes_fragment:qP,clipping_planes_pars_fragment:YP,clipping_planes_pars_vertex:KP,clipping_planes_vertex:JP,color_fragment:jP,color_pars_fragment:ZP,color_pars_vertex:QP,color_vertex:e2,common:t2,cube_uv_reflection_fragment:n2,defaultnormal_vertex:i2,displacementmap_pars_vertex:s2,displacementmap_vertex:r2,emissivemap_fragment:o2,emissivemap_pars_fragment:a2,colorspace_fragment:l2,colorspace_pars_fragment:c2,envmap_fragment:u2,envmap_common_pars_fragment:h2,envmap_pars_fragment:d2,envmap_pars_vertex:f2,envmap_physical_pars_fragment:T2,envmap_vertex:p2,fog_vertex:m2,fog_pars_vertex:g2,fog_fragment:_2,fog_pars_fragment:y2,gradientmap_pars_fragment:v2,lightmap_pars_fragment:E2,lights_lambert_fragment:x2,lights_lambert_pars_fragment:S2,lights_pars_begin:b2,lights_toon_fragment:M2,lights_toon_pars_fragment:w2,lights_phong_fragment:A2,lights_phong_pars_fragment:R2,lights_physical_fragment:C2,lights_physical_pars_fragment:N2,lights_fragment_begin:I2,lights_fragment_maps:P2,lights_fragment_end:O2,lightprobes_pars_fragment:D2,logdepthbuf_fragment:L2,logdepthbuf_pars_fragment:U2,logdepthbuf_pars_vertex:F2,logdepthbuf_vertex:V2,map_fragment:B2,map_pars_fragment:k2,map_particle_fragment:H2,map_particle_pars_fragment:z2,metalnessmap_fragment:G2,metalnessmap_pars_fragment:W2,morphinstance_vertex:X2,morphcolor_vertex:$2,morphnormal_vertex:q2,morphtarget_pars_vertex:Y2,morphtarget_vertex:K2,normal_fragment_begin:J2,normal_fragment_maps:j2,normal_pars_fragment:Z2,normal_pars_vertex:Q2,normal_vertex:eO,normalmap_pars_fragment:tO,clearcoat_normal_fragment_begin:nO,clearcoat_normal_fragment_maps:iO,clearcoat_pars_fragment:sO,iridescence_pars_fragment:rO,opaque_fragment:oO,packing:aO,premultiplied_alpha_fragment:lO,project_vertex:cO,dithering_fragment:uO,dithering_pars_fragment:hO,roughnessmap_fragment:dO,roughnessmap_pars_fragment:fO,shadowmap_pars_fragment:pO,shadowmap_pars_vertex:mO,shadowmap_vertex:gO,shadowmask_pars_fragment:_O,skinbase_vertex:yO,skinning_pars_vertex:vO,skinning_vertex:EO,skinnormal_vertex:xO,specularmap_fragment:SO,specularmap_pars_fragment:bO,tonemapping_fragment:TO,tonemapping_pars_fragment:MO,transmission_fragment:wO,transmission_pars_fragment:AO,uv_pars_fragment:RO,uv_pars_vertex:CO,uv_vertex:NO,worldpos_vertex:IO,background_vert:PO,background_frag:OO,backgroundCube_vert:DO,backgroundCube_frag:LO,cube_vert:UO,cube_frag:FO,depth_vert:VO,depth_frag:BO,distance_vert:kO,distance_frag:HO,equirect_vert:zO,equirect_frag:GO,linedashed_vert:WO,linedashed_frag:XO,meshbasic_vert:$O,meshbasic_frag:qO,meshlambert_vert:YO,meshlambert_frag:KO,meshmatcap_vert:JO,meshmatcap_frag:jO,meshnormal_vert:ZO,meshnormal_frag:QO,meshphong_vert:eD,meshphong_frag:tD,meshphysical_vert:nD,meshphysical_frag:iD,meshtoon_vert:sD,meshtoon_frag:rD,points_vert:oD,points_frag:aD,shadow_vert:lD,shadow_frag:cD,sprite_vert:uD,sprite_frag:hD},Ge={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},Er={basic:{uniforms:wi([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:wi([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:wi([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:wi([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:wi([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:wi([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:wi([Ge.points,Ge.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:wi([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:wi([Ge.common,Ge.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:wi([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:wi([Ge.sprite,Ge.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distance:{uniforms:wi([Ge.common,Ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distance_vert,fragmentShader:Ot.distance_frag},shadow:{uniforms:wi([Ge.lights,Ge.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Er.physical={uniforms:wi([Er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};var wm={r:0,b:0,g:0},dD=new tn,n1=new Et;n1.set(-1,0,0,0,1,0,0,0,1);function fD(t,e,n,i,s,r){let o=new Ye(0),a=s===!0?0:1,l,c,u=null,h=0,d=null;function f(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){let y=x.backgroundBlurriness>0;E=e.get(E,y)}return E}function p(x){let E=!1,y=f(x);y===null?g(o,a):y&&y.isColor&&(g(y,1),E=!0);let S=t.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(x,E){let y=f(E);y&&(y.isCubeTexture||y.mapping===fh)?(c===void 0&&(c=new Re(new Ft(1,1,1),new rs({name:"BackgroundCubeMaterial",uniforms:Ia(Er.backgroundCube.uniforms),vertexShader:Er.backgroundCube.vertexShader,fragmentShader:Er.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(dD.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(n1),c.material.toneMapped=zt.getTransfer(y.colorSpace)!==en,(u!==y||h!==y.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Re(new ih(2,2),new rs({name:"BackgroundMaterial",uniforms:Ia(Er.background.uniforms),vertexShader:Er.background.vertexShader,fragmentShader:Er.background.fragmentShader,side:Do,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=zt.getTransfer(y.colorSpace)!==en,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,E){x.getRGB(wm,my(t)),n.buffers.color.setClear(wm.r,wm.g,wm.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,E=1){o.set(x),a=E,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(o,a)},render:p,addToRenderList:_,dispose:m}}function pD(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(F,U,H,V,k){let G=!1,K=h(F,V,H,U);r!==K&&(r=K,c(r.object)),G=f(F,V,H,k),G&&p(F,V,H,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(F,U,H,V),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(F){return t.bindVertexArray(F)}function u(F){return t.deleteVertexArray(F)}function h(F,U,H,V){let k=V.wireframe===!0,G=i[U.id];G===void 0&&(G={},i[U.id]=G);let K=F.isInstancedMesh===!0?F.id:0,te=G[K];te===void 0&&(te={},G[K]=te);let W=te[H.id];W===void 0&&(W={},te[H.id]=W);let Q=W[k];return Q===void 0&&(Q=d(l()),W[k]=Q),Q}function d(F){let U=[],H=[],V=[];for(let k=0;k<n;k++)U[k]=0,H[k]=0,V[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:V,object:F,attributes:{},index:null}}function f(F,U,H,V){let k=r.attributes,G=U.attributes,K=0,te=H.getAttributes();for(let W in te)if(te[W].location>=0){let ae=k[W],we=G[W];if(we===void 0&&(W==="instanceMatrix"&&F.instanceMatrix&&(we=F.instanceMatrix),W==="instanceColor"&&F.instanceColor&&(we=F.instanceColor)),ae===void 0||ae.attribute!==we||we&&ae.data!==we.data)return!0;K++}return r.attributesNum!==K||r.index!==V}function p(F,U,H,V){let k={},G=U.attributes,K=0,te=H.getAttributes();for(let W in te)if(te[W].location>=0){let ae=G[W];ae===void 0&&(W==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),W==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor));let we={};we.attribute=ae,ae&&ae.data&&(we.data=ae.data),k[W]=we,K++}r.attributes=k,r.attributesNum=K,r.index=V}function _(){let F=r.newAttributes;for(let U=0,H=F.length;U<H;U++)F[U]=0}function g(F){m(F,0)}function m(F,U){let H=r.newAttributes,V=r.enabledAttributes,k=r.attributeDivisors;H[F]=1,V[F]===0&&(t.enableVertexAttribArray(F),V[F]=1),k[F]!==U&&(t.vertexAttribDivisor(F,U),k[F]=U)}function x(){let F=r.newAttributes,U=r.enabledAttributes;for(let H=0,V=U.length;H<V;H++)U[H]!==F[H]&&(t.disableVertexAttribArray(H),U[H]=0)}function E(F,U,H,V,k,G,K){K===!0?t.vertexAttribIPointer(F,U,H,k,G):t.vertexAttribPointer(F,U,H,V,k,G)}function y(F,U,H,V){_();let k=V.attributes,G=H.getAttributes(),K=U.defaultAttributeValues;for(let te in G){let W=G[te];if(W.location>=0){let Q=k[te];if(Q===void 0&&(te==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),te==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor)),Q!==void 0){let ae=Q.normalized,we=Q.itemSize,Ie=e.get(Q);if(Ie===void 0)continue;let gt=Ie.buffer,ot=Ie.type,$e=Ie.bytesPerElement,re=ot===t.INT||ot===t.UNSIGNED_INT||Q.gpuType===Hp;if(Q.isInterleavedBufferAttribute){let me=Q.data,Te=me.stride,ze=Q.offset;if(me.isInstancedInterleavedBuffer){for(let Oe=0;Oe<W.locationSize;Oe++)m(W.location+Oe,me.meshPerAttribute);F.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Oe=0;Oe<W.locationSize;Oe++)g(W.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,gt);for(let Oe=0;Oe<W.locationSize;Oe++)E(W.location+Oe,we/W.locationSize,ot,ae,Te*$e,(ze+we/W.locationSize*Oe)*$e,re)}else{if(Q.isInstancedBufferAttribute){for(let me=0;me<W.locationSize;me++)m(W.location+me,Q.meshPerAttribute);F.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let me=0;me<W.locationSize;me++)g(W.location+me);t.bindBuffer(t.ARRAY_BUFFER,gt);for(let me=0;me<W.locationSize;me++)E(W.location+me,we/W.locationSize,ot,ae,we*$e,we/W.locationSize*me*$e,re)}}else if(K!==void 0){let ae=K[te];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv(W.location,ae);break;case 3:t.vertexAttrib3fv(W.location,ae);break;case 4:t.vertexAttrib4fv(W.location,ae);break;default:t.vertexAttrib1fv(W.location,ae)}}}}x()}function S(){M();for(let F in i){let U=i[F];for(let H in U){let V=U[H];for(let k in V){let G=V[k];for(let K in G)u(G[K].object),delete G[K];delete V[k]}}delete i[F]}}function T(F){if(i[F.id]===void 0)return;let U=i[F.id];for(let H in U){let V=U[H];for(let k in V){let G=V[k];for(let K in G)u(G[K].object),delete G[K];delete V[k]}}delete i[F.id]}function R(F){for(let U in i){let H=i[U];for(let V in H){let k=H[V];if(k[F.id]===void 0)continue;let G=k[F.id];for(let K in G)u(G[K].object),delete G[K];delete k[F.id]}}}function v(F){for(let U in i){let H=i[U],V=F.isInstancedMesh===!0?F.id:0,k=H[V];if(k!==void 0){for(let G in k){let K=k[G];for(let te in K)u(K[te].object),delete K[te];delete k[G]}delete H[V],Object.keys(H).length===0&&delete i[U]}}}function M(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:w,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function mD(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];n.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function gD(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Ms&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let v=R===Gs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==$i&&R!==zs&&!v&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(ht("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:y,maxSamples:S,samples:T}}function _D(t){let e=this,n=null,i=0,s=!1,r=!1,o=new Us,a=new Et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,m=t.get(h);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let x=r?0:i,E=x*4,y=m.clippingState||null;l.value=y,y=u(p,d,E,f);for(let S=0;S!==E;++S)y[S]=n[S];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,p){let _=h!==null?h.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,y=f;E!==_;++E,y+=4)o.copy(h[E]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var sc=4,yD=6,vD=20,ED=256,xh=new jl,DM=new Ye,Ty=null,My=0,wy=0,Ay=!1,xD=new D,Pa=new D,Rm=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){let{size:o=256,position:a=xD}=r;Ty=this._renderer.getRenderTarget(),My=this._renderer.getActiveCubeFace(),wy=this._renderer.getActiveMipmapLevel(),Ay=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=FM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=UM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ty,My,wy),this._renderer.xr.enabled=Ay,e.scissorTest=!1,ic(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Lo||e.mapping===Na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ty=this._renderer.getRenderTarget(),My=this._renderer.getActiveCubeFace(),wy=this._renderer.getActiveMipmapLevel(),Ay=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Gs,format:Ms,colorSpace:Ou,depthBuffer:!1},s=LM(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=LM(e,n,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=SD(r)),this._blurMaterial=TD(r,e,n),this._ggxMaterial=bD(r,e,n)}return s}_compileMaterial(e){let n=new Re(new kt,e);this._renderer.compile(n,xh)}_sceneToCubeUV(e,n,i,s,r){let l=new bi(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(DM),h.toneMapping=ks,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Re(new Ft,new In({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,m=!0):(g.color.copy(DM),m=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));let S=this._cubeSize;ic(s,y*S,E>2?S:0,S,S),h.setRenderTarget(s),m&&h.render(_,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=x}_textureToCubeUV(e,n){let i=this._renderer,s=e.mapping===Lo||e.mapping===Na;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=FM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=UM());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ic(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,xh)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,f=h*d,{_lodMax:p}=this,_=this._sizeLods[i],g=3*_*(i>p-sc?i-p+sc:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-n,ic(r,g,m,3*_,2*_),s.setRenderTarget(r),s.render(a,xh),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,ic(e,g,m,3*_,2*_),s.setRenderTarget(e),s.render(a,xh)}_blur(e,n,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,n,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,n,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-sc?s-this._lodMax+sc:0),d=4*(this._cubeSize-u);ic(n,h,d,3*u,2*u),o.setRenderTarget(n),o.render(l,xh)}};function SD(t){let e=[],n=[],i=t,s=t-sc+1+yD;for(let r=0;r<s;r++){let o=Math.pow(2,i);e.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,p=new Float32Array(f*d*h),_=new Float32Array(f*d*h);for(let m=0;m<h;m++){let x=m%3*2/3-1,E=m>2?0:-1,y=[x,E,0,x+2/3,E,0,x+2/3,E+1,0,x,E,0,x+2/3,E+1,0,x,E+1,0];p.set(y,f*d*m);for(let S=0;S<d;S++){let T=u[S*2]*2-1,R=u[S*2+1]*2-1;m===0?Pa.set(1,R,T):m===1?Pa.set(-T,1,-R):m===2?Pa.set(-T,R,1):m===3?Pa.set(-1,R,-T):m===4?Pa.set(-T,-1,R):Pa.set(T,R,-1),Pa.toArray(_,(m*d+S)*f)}}let g=new kt;g.setAttribute("position",new Ti(p,f)),g.setAttribute("outputDirection",new Ti(_,f)),n.push(new Re(g,null)),i>sc&&i--}return{lodMeshes:n,sizeLods:e}}function LM(t,e,n){let i=new Xi(t,e,n);return i.texture.mapping=fh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ic(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function bD(t,e,n){return new rs({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ED,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Im(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function TD(t,e,n){return new rs({name:"SphericalGaussianBlur",defines:{SAMPLES:vD,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Im(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function UM(){return new rs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Im(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function FM(){return new rs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Im(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Im(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Cm=class extends Xi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Wu(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ft(5,5,5),r=new rs({name:"CubemapFromEquirect",uniforms:Ia(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ui,blending:_r});r.uniforms.tEquirect.value=n;let o=new Re(s,r),a=n.minFilter;return n.minFilter===yr&&(n.minFilter=qn),new Lp(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}};function MD(t){let e=new WeakMap,n=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Vp||f===Bp)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let _=new Cm(p.height);return _.fromEquirectangularTexture(t,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,p=f===Vp||f===Bp,_=f===Lo||f===Na;if(p||_){let g=n.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new Rm(t)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture;if(g!==void 0)return g.texture;{let x=d.image;return p&&x&&x.height>0||_&&x&&l(x)?(i===null&&(i=new Rm(t)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function a(d,f){return f===Vp?d.mapping=Lo:f===Bp&&(d.mapping=Na),d}function l(d){let f=0,p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let p=n.get(f);p!==void 0&&(n.delete(f),p.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function wD(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&xa("WebGLRenderer: "+i+" extension not supported."),s}}}function AD(t,e,n,i){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],t.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,p=h.attributes.position,_=0;if(p===void 0)return;if(f!==null){let x=f.array;_=f.version;for(let E=0,y=x.length;E<y;E+=3){let S=x[E+0],T=x[E+1],R=x[E+2];d.push(S,T,T,R,R,S)}}else{let x=p.array;_=p.version;for(let E=0,y=x.length/3-1;E<y;E+=3){let S=E+0,T=E+1,R=E+2;d.push(S,T,T,R,R,S)}}let g=new(p.count>=65535?Hu:ku)(d,1);g.version=_;let m=r.get(h);m&&e.remove(m),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function RD(t,e,n){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){t.drawElements(i,d,r,h*o),n.update(d,i,1)}function c(h,d,f){f!==0&&(t.drawElementsInstanced(i,d,r,h*o,f),n.update(d,i,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,f);let _=0;for(let g=0;g<f;g++)_+=d[g];n.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function CD(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:mt("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function ND(t,e,n){let i=new WeakMap,s=new En;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==h){let M=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],E=0;f===!0&&(E=1),p===!0&&(E=2),_===!0&&(E=3);let y=a.attributes.position.count*E,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*S*4*h),R=new Fu(T,y,S,h);R.type=zs,R.needsUpdate=!0;let v=E*4;for(let w=0;w<h;w++){let F=g[w],U=m[w],H=x[w],V=y*S*4*w;for(let k=0;k<F.count;k++){let G=k*v;f===!0&&(s.fromBufferAttribute(F,k),T[V+G+0]=s.x,T[V+G+1]=s.y,T[V+G+2]=s.z,T[V+G+3]=0),p===!0&&(s.fromBufferAttribute(U,k),T[V+G+4]=s.x,T[V+G+5]=s.y,T[V+G+6]=s.z,T[V+G+7]=0),_===!0&&(s.fromBufferAttribute(H,k),T[V+G+8]=s.x,T[V+G+9]=s.y,T[V+G+10]=s.z,T[V+G+11]=H.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new Me(y,S)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",p),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function ID(t,e,n,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}var PD={[j_]:"LINEAR_TONE_MAPPING",[Z_]:"REINHARD_TONE_MAPPING",[Q_]:"CINEON_TONE_MAPPING",[dh]:"ACES_FILMIC_TONE_MAPPING",[ty]:"AGX_TONE_MAPPING",[ny]:"NEUTRAL_TONE_MAPPING",[ey]:"CUSTOM_TONE_MAPPING"};function OD(t,e,n,i,s,r){let o=new Xi(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new kt;c.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Bt([0,2,0,0,2,0],2));let u=new xp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Re(c,u),d=new jl(-1,1,1,-1,0,1),f=null,p=null,_=!1,g,m=null,x=[],E=!1;this.setSize=function(y,S){o.setSize(y,S),a!==null&&a.setSize(y,S),l!==null&&l.setSize(y,S);for(let T=0;T<x.length;T++){let R=x[T];R.setSize&&R.setSize(y,S)}},this.setEffects=function(y){x=y,E=x.length>0&&x[0].isRenderPass===!0;let S=o.width,T=o.height;x.length>0&&a===null&&(a=new Xi(S,T,{type:Gs,depthBuffer:!1,stencilBuffer:!1}),l=new Xi(S,T,{type:Gs,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<x.length;R++){let v=x[R];v.setSize&&v.setSize(S,T)}},this.begin=function(y,S){if(_||y.toneMapping===ks&&x.length===0)return!1;if(m=S,S!==null){let T=S.width,R=S.height;(o.width!==T||o.height!==R)&&this.setSize(T,R)}return E===!1&&y.setRenderTarget(o),g=y.toneMapping,y.toneMapping=ks,!0},this.hasRenderPass=function(){return E},this.end=function(y,S){y.toneMapping=g,_=!0;let T=o,R=a;for(let v=0;v<x.length;v++){let M=x[v];M.enabled!==!1&&(M.render(y,R,T,S),M.needsSwap!==!1&&(T=R,R=R===a?l:a))}if(f!==y.outputColorSpace||p!==y.toneMapping){f=y.outputColorSpace,p=y.toneMapping,u.defines={},zt.getTransfer(f)===en&&(u.defines.SRGB_TRANSFER="");let v=PD[p];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(m),y.render(h,d),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var i1=new ci,Ny=new Ro(1,1),s1=new Fu,r1=new cp,o1=new Wu,VM=[],BM=[],kM=new Float32Array(16),HM=new Float32Array(9),zM=new Float32Array(4);function oc(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=VM[s];if(r===void 0&&(r=new Float32Array(s),VM[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Kn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Jn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Pm(t,e){let n=BM[e];n===void 0&&(n=new Int32Array(e),BM[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function DD(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function LD(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kn(n,e))return;t.uniform2fv(this.addr,e),Jn(n,e)}}function UD(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kn(n,e))return;t.uniform3fv(this.addr,e),Jn(n,e)}}function FD(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kn(n,e))return;t.uniform4fv(this.addr,e),Jn(n,e)}}function VD(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Kn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Jn(n,e)}else{if(Kn(n,i))return;zM.set(i),t.uniformMatrix2fv(this.addr,!1,zM),Jn(n,i)}}function BD(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Kn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Jn(n,e)}else{if(Kn(n,i))return;HM.set(i),t.uniformMatrix3fv(this.addr,!1,HM),Jn(n,i)}}function kD(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Kn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Jn(n,e)}else{if(Kn(n,i))return;kM.set(i),t.uniformMatrix4fv(this.addr,!1,kM),Jn(n,i)}}function HD(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function zD(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kn(n,e))return;t.uniform2iv(this.addr,e),Jn(n,e)}}function GD(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kn(n,e))return;t.uniform3iv(this.addr,e),Jn(n,e)}}function WD(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kn(n,e))return;t.uniform4iv(this.addr,e),Jn(n,e)}}function XD(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function $D(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kn(n,e))return;t.uniform2uiv(this.addr,e),Jn(n,e)}}function qD(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kn(n,e))return;t.uniform3uiv(this.addr,e),Jn(n,e)}}function YD(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kn(n,e))return;t.uniform4uiv(this.addr,e),Jn(n,e)}}function KD(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Ny.compareFunction=n.isReversedDepthBuffer()?Mm:Tm,r=Ny):r=i1,n.setTexture2D(e||r,s)}function JD(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||r1,s)}function jD(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||o1,s)}function ZD(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||s1,s)}function QD(t){switch(t){case 5126:return DD;case 35664:return LD;case 35665:return UD;case 35666:return FD;case 35674:return VD;case 35675:return BD;case 35676:return kD;case 5124:case 35670:return HD;case 35667:case 35671:return zD;case 35668:case 35672:return GD;case 35669:case 35673:return WD;case 5125:return XD;case 36294:return $D;case 36295:return qD;case 36296:return YD;case 35678:case 36198:case 36298:case 36306:case 35682:return KD;case 35679:case 36299:case 36307:return JD;case 35680:case 36300:case 36308:case 36293:return jD;case 36289:case 36303:case 36311:case 36292:return ZD}}function e3(t,e){t.uniform1fv(this.addr,e)}function t3(t,e){let n=oc(e,this.size,2);t.uniform2fv(this.addr,n)}function n3(t,e){let n=oc(e,this.size,3);t.uniform3fv(this.addr,n)}function i3(t,e){let n=oc(e,this.size,4);t.uniform4fv(this.addr,n)}function s3(t,e){let n=oc(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function r3(t,e){let n=oc(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function o3(t,e){let n=oc(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function a3(t,e){t.uniform1iv(this.addr,e)}function l3(t,e){t.uniform2iv(this.addr,e)}function c3(t,e){t.uniform3iv(this.addr,e)}function u3(t,e){t.uniform4iv(this.addr,e)}function h3(t,e){t.uniform1uiv(this.addr,e)}function d3(t,e){t.uniform2uiv(this.addr,e)}function f3(t,e){t.uniform3uiv(this.addr,e)}function p3(t,e){t.uniform4uiv(this.addr,e)}function m3(t,e,n){let i=this.cache,s=e.length,r=Pm(n,s);Kn(i,r)||(t.uniform1iv(this.addr,r),Jn(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=Ny:o=i1;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function g3(t,e,n){let i=this.cache,s=e.length,r=Pm(n,s);Kn(i,r)||(t.uniform1iv(this.addr,r),Jn(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||r1,r[o])}function _3(t,e,n){let i=this.cache,s=e.length,r=Pm(n,s);Kn(i,r)||(t.uniform1iv(this.addr,r),Jn(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||o1,r[o])}function y3(t,e,n){let i=this.cache,s=e.length,r=Pm(n,s);Kn(i,r)||(t.uniform1iv(this.addr,r),Jn(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||s1,r[o])}function v3(t){switch(t){case 5126:return e3;case 35664:return t3;case 35665:return n3;case 35666:return i3;case 35674:return s3;case 35675:return r3;case 35676:return o3;case 5124:case 35670:return a3;case 35667:case 35671:return l3;case 35668:case 35672:return c3;case 35669:case 35673:return u3;case 5125:return h3;case 36294:return d3;case 36295:return f3;case 36296:return p3;case 35678:case 36198:case 36298:case 36306:case 35682:return m3;case 35679:case 36299:case 36307:return g3;case 35680:case 36300:case 36308:case 36293:return _3;case 36289:case 36303:case 36311:case 36292:return y3}}var Iy=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=QD(n.type)}},Py=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=v3(n.type)}},Oy=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,n[a.id],i)}}},Ry=/(\w+)(\])?(\[|\.)?/g;function GM(t,e){t.seq.push(e),t.map[e.id]=e}function E3(t,e,n){let i=t.name,s=i.length;for(Ry.lastIndex=0;;){let r=Ry.exec(i),o=Ry.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){GM(n,c===void 0?new Iy(a,t,e):new Py(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Oy(a),GM(n,h)),n=h}}}var rc=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);E3(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){let a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in n&&i.push(o)}return i}};function WM(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var x3=37297,S3=0;function b3(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var XM=new Et;function T3(t){zt._getMatrix(XM,zt.workingColorSpace,t);let e=`mat3( ${XM.elements.map(n=>n.toFixed(4))} )`;switch(zt.getTransfer(t)){case Du:return[e,"LinearTransferOETF"];case en:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function $M(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+b3(t.getShaderSource(e),a)}else return r}function M3(t,e){let n=T3(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var w3={[j_]:"Linear",[Z_]:"Reinhard",[Q_]:"Cineon",[dh]:"ACESFilmic",[ty]:"AgX",[ny]:"Neutral",[ey]:"Custom"};function A3(t,e){let n=w3[e];return n===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Am=new D;function R3(){zt.getLuminanceCoefficients(Am);let t=Am.x.toFixed(4),e=Am.y.toFixed(4),n=Am.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bh).join(`
`)}function N3(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function I3(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),o=r.name,a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function bh(t){return t!==""}function qM(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function YM(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var P3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dy(t){return t.replace(P3,D3)}var O3=new Map;function D3(t,e){let n=Ot[e];if(n===void 0){let i=O3.get(e);if(i!==void 0)n=Ot[i],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Dy(n)}var L3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function KM(t){return t.replace(L3,U3)}function U3(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function JM(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var F3={[hh]:"SHADOWMAP_TYPE_PCF",[Ql]:"SHADOWMAP_TYPE_VSM"};function V3(t){return F3[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var B3={[Lo]:"ENVMAP_TYPE_CUBE",[Na]:"ENVMAP_TYPE_CUBE",[fh]:"ENVMAP_TYPE_CUBE_UV"};function k3(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":B3[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var H3={[Na]:"ENVMAP_MODE_REFRACTION"};function z3(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":H3[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var G3={[J_]:"ENVMAP_BLENDING_MULTIPLY",[cM]:"ENVMAP_BLENDING_MIX",[uM]:"ENVMAP_BLENDING_ADD"};function W3(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":G3[t.combine]||"ENVMAP_BLENDING_NONE"}function X3(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function $3(t,e,n,i){let s=t.getContext(),r=n.defines,o=n.vertexShader,a=n.fragmentShader,l=V3(n),c=k3(n),u=z3(n),h=W3(n),d=X3(n),f=C3(n),p=N3(r),_=s.createProgram(),g,m,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(bh).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(bh).join(`
`),m.length>0&&(m+=`
`)):(g=[JM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bh).join(`
`),m=[JM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ks?"#define TONE_MAPPING":"",n.toneMapping!==ks?Ot.tonemapping_pars_fragment:"",n.toneMapping!==ks?A3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,M3("linearToOutputTexel",n.outputColorSpace),R3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(bh).join(`
`)),o=Dy(o),o=qM(o,n),o=YM(o,n),a=Dy(a),a=qM(a,n),a=YM(a,n),o=KM(o),a=KM(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",n.glslVersion===dy?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=x+g+o,y=x+m+a,S=WM(s,s.VERTEX_SHADER,E),T=WM(s,s.FRAGMENT_SHADER,y);s.attachShader(_,S),s.attachShader(_,T),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(F){if(t.debug.checkShaderErrors){let U=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(S)||"",V=s.getShaderInfoLog(T)||"",k=U.trim(),G=H.trim(),K=V.trim(),te=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(te=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,_,S,T);else{let Q=$M(s,S,"vertex"),ae=$M(s,T,"fragment");mt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+k+`
`+Q+`
`+ae)}else k!==""?ht("WebGLProgram: Program Info Log:",k):(G===""||K==="")&&(W=!1);W&&(F.diagnostics={runnable:te,programLog:k,vertexShader:{log:G,prefix:g},fragmentShader:{log:K,prefix:m}})}s.deleteShader(S),s.deleteShader(T),v=new rc(s,_),M=I3(s,_)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(_,x3)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=S3++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=T,this}var q3=0,Ly=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){let s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new Uy(e),n.set(e,i)),i}},Uy=class{constructor(e){this.id=q3++,this.code=e,this.usedTimes=0}};function Y3(t){return t===Fo||t===vh||t===Eh}function K3(t,e,n,i,s,r){let o=new Gl,a=new Ly,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,M,w,F,U,H){let V=F.fog,k=U.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,te=e.get(v.envMap||G,K),W=te&&te.mapping===fh?te.image.height:null,Q=f[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&ht("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let ae=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,we=ae!==void 0?ae.length:0,Ie=0;k.morphAttributes.position!==void 0&&(Ie=1),k.morphAttributes.normal!==void 0&&(Ie=2),k.morphAttributes.color!==void 0&&(Ie=3);let gt,ot,$e,re;if(Q){let Qe=Er[Q];gt=Qe.vertexShader,ot=Qe.fragmentShader}else{gt=v.vertexShader,ot=v.fragmentShader;let Qe=a.getVertexShaderStage(v),ct=a.getFragmentShaderStage(v);a.update(v,Qe,ct),$e=Qe.id,re=ct.id}let me=t.getRenderTarget(),Te=t.state.buffers.depth.getReversed(),ze=U.isInstancedMesh===!0,Oe=U.isBatchedMesh===!0,We=!!v.map,pt=!!v.matcap,A=!!te,L=!!v.aoMap,z=!!v.lightMap,Y=!!v.bumpMap&&v.wireframe===!1,q=!!v.normalMap,ne=!!v.displacementMap,se=!!v.emissiveMap,X=!!v.metalnessMap,ce=!!v.roughnessMap,P=v.anisotropy>0,Ae=v.clearcoat>0,pe=v.dispersion>0,I=v.retroreflectivity>0,b=v.iridescence>0,$=v.sheen>0,Z=v.transmission>0,ee=P&&!!v.anisotropyMap,Se=Ae&&!!v.clearcoatMap,xe=Ae&&!!v.clearcoatNormalMap,ue=Ae&&!!v.clearcoatRoughnessMap,fe=b&&!!v.iridescenceMap,Pe=b&&!!v.iridescenceThicknessMap,et=$&&!!v.sheenColorMap,Ne=$&&!!v.sheenRoughnessMap,Ce=!!v.specularMap,je=!!v.specularColorMap,rt=!!v.specularIntensityMap,at=Z&&!!v.transmissionMap,j=Z&&!!v.thicknessMap,De=!!v.gradientMap,ve=!!v.alphaMap,Le=v.alphaTest>0,Fe=!!v.alphaHash,be=!!v.extensions,Xe=ks;v.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Xe=t.toneMapping);let Ze={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:gt,fragmentShader:ot,defines:v.defines,customVertexShaderID:$e,customFragmentShaderID:re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Oe,batchingColor:Oe&&U._colorsTexture!==null,instancing:ze,instancingColor:ze&&U.instanceColor!==null,instancingMorph:ze&&U.morphTexture!==null,outputColorSpace:me===null?t.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:zt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:We,matcap:pt,envMap:A,envMapMode:A&&te.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:z,bumpMap:Y,normalMap:q,displacementMap:ne,emissiveMap:se,normalMapObjectSpace:q&&v.normalMapType===fM,normalMapTangentSpace:q&&v.normalMapType===bm,packedNormalMap:q&&v.normalMapType===bm&&Y3(v.normalMap.format),metalnessMap:X,roughnessMap:ce,anisotropy:P,anisotropyMap:ee,clearcoat:Ae,clearcoatMap:Se,clearcoatNormalMap:xe,clearcoatRoughnessMap:ue,dispersion:pe,retroreflection:I,iridescence:b,iridescenceMap:fe,iridescenceThicknessMap:Pe,sheen:$,sheenColorMap:et,sheenRoughnessMap:Ne,specularMap:Ce,specularColorMap:je,specularIntensityMap:rt,transmission:Z,transmissionMap:at,thicknessMap:j,gradientMap:De,opaque:v.transparent===!1&&v.blending===ec&&v.alphaToCoverage===!1,alphaMap:ve,alphaTest:Le,alphaHash:Fe,combine:v.combine,mapUv:We&&p(v.map.channel),aoMapUv:L&&p(v.aoMap.channel),lightMapUv:z&&p(v.lightMap.channel),bumpMapUv:Y&&p(v.bumpMap.channel),normalMapUv:q&&p(v.normalMap.channel),displacementMapUv:ne&&p(v.displacementMap.channel),emissiveMapUv:se&&p(v.emissiveMap.channel),metalnessMapUv:X&&p(v.metalnessMap.channel),roughnessMapUv:ce&&p(v.roughnessMap.channel),anisotropyMapUv:ee&&p(v.anisotropyMap.channel),clearcoatMapUv:Se&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:xe&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:et&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&p(v.sheenRoughnessMap.channel),specularMapUv:Ce&&p(v.specularMap.channel),specularColorMapUv:je&&p(v.specularColorMap.channel),specularIntensityMapUv:rt&&p(v.specularIntensityMap.channel),transmissionMapUv:at&&p(v.transmissionMap.channel),thicknessMapUv:j&&p(v.thicknessMap.channel),alphaMapUv:ve&&p(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(q||P),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(We||ve),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&q===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Te,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ie,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&w.length>0,shadowMapType:t.shadowMap.type,toneMapping:Xe,decodeVideoTexture:We&&v.map.isVideoTexture===!0&&zt.getTransfer(v.map.colorSpace)===en,decodeVideoTextureEmissive:se&&v.emissiveMap.isVideoTexture===!0&&zt.getTransfer(v.emissiveMap.colorSpace)===en,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ii,flipSided:v.side===ui,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:be&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&v.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ze.vertexUv1s=l.has(1),Ze.vertexUv2s=l.has(2),Ze.vertexUv3s=l.has(3),l.clear(),Ze}function g(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let w in v.defines)M.push(w),M.push(v.defines[w]);return v.isRawShaderMaterial===!1&&(m(M,v),x(M,v),M.push(t.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function m(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numSunLights),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numSunLightShadows),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function x(v,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function E(v){let M=f[v.type],w;if(M){let F=Er[M];w=IM.clone(F.uniforms)}else w=v.uniforms;return w}function y(v,M){let w=u.get(M);return w!==void 0?++w.usedTimes:(w=new $3(t,M,v,s),c.push(w),u.set(M,w)),w}function S(v){if(--v.usedTimes===0){let M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function R(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:E,acquireProgram:y,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:R}}function J3(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function j3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function jM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ZM(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,_,g,m){let x=t[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},t[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=p,x.materialVariant=o(d),x.groupOrder=_,x.renderOrder=d.renderOrder,x.z=g,x.group=m),e++,x}function l(d,f,p,_,g,m,x){x.reversedDepth===!0&&(g=-g);let E=a(d,f,p,_,g,m);p.transmission>0?i.push(E):p.transparent===!0?s.push(E):n.push(E)}function c(d,f,p,_,g,m){let x=a(d,f,p,_,g,m);p.transmission>0?i.unshift(x):p.transparent===!0?s.unshift(x):n.unshift(x)}function u(d,f){n.length>1&&n.sort(d||j3),i.length>1&&i.sort(f||jM),s.length>1&&s.sort(f||jM)}function h(){for(let d=e,f=t.length;d<f;d++){let p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function Z3(){let t=new WeakMap;function e(i,s){let r=t.get(i),o;return r===void 0?(o=new ZM,t.set(i,[o])):s>=r.length?(o=new ZM,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Q3(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new D,color:new Ye};break;case"SpotLight":n={position:new D,direction:new D,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function eL(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var tL=0;function nL(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function iL(t){let e=new Q3,n=eL(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new tn,o=new tn;function a(c){let u=0,h=0,d=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,x=0,E=0,y=0,S=0,T=0,R=0,v=0,M=0,w=0;c.sort(nL);for(let U=0,H=c.length;U<H;U++){let V=c[U],k=V.color,G=V.intensity,K=V.distance,te=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Fo?te=V.shadow.map.texture:te=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)u+=k.r*G,h+=k.g*G,d+=k.b*G;else if(V.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(V.sh.coefficients[W],G);w++}else if(V.isSunLight){let W=e.get(V);if(W.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let Q=V.shadow,ae=n.get(V);ae.shadowIntensity=Q.intensity,ae.shadowBias=Q.bias,ae.shadowNormalBias=Q.normalBias,ae.shadowRadius=Q.radius,ae.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[p]=ae,i.sunShadowMap[p]=te;let we=Q.getViewportCount();for(let Ie=0;Ie<we;Ie++)i.sunShadowMatrix[_+Ie]=Q.getMatrix(Ie),i.sunShadowCascade[_+Ie]=Q._cascadeData[Ie];_+=we,p++}i.sun[f]=W,f++}else if(V.isDirectionalLight){let W=e.get(V);if(W.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){let Q=V.shadow,ae=n.get(V);ae.shadowIntensity=Q.intensity,ae.shadowBias=Q.bias,ae.shadowNormalBias=Q.normalBias,ae.shadowRadius=Q.radius,ae.shadowMapSize=Q.mapSize,i.directionalShadow[g]=ae,i.directionalShadowMap[g]=te,i.directionalShadowMatrix[g]=V.shadow.matrix,S++}i.directional[g]=W,g++}else if(V.isSpotLight){let W=e.get(V);W.position.setFromMatrixPosition(V.matrixWorld),W.color.copy(k).multiplyScalar(G),W.distance=K,W.coneCos=Math.cos(V.angle),W.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),W.decay=V.decay,i.spot[x]=W;let Q=V.shadow;if(V.map&&(i.spotLightMap[v]=V.map,v++,Q.updateMatrices(V),V.castShadow&&M++),i.spotLightMatrix[x]=Q.matrix,V.castShadow){let ae=n.get(V);ae.shadowIntensity=Q.intensity,ae.shadowBias=Q.bias,ae.shadowNormalBias=Q.normalBias,ae.shadowRadius=Q.radius,ae.shadowMapSize=Q.mapSize,i.spotShadow[x]=ae,i.spotShadowMap[x]=te,R++}x++}else if(V.isRectAreaLight){let W=e.get(V);W.color.copy(k).multiplyScalar(G),W.halfWidth.set(V.width*.5,0,0),W.halfHeight.set(0,V.height*.5,0),i.rectArea[E]=W,E++}else if(V.isPointLight){let W=e.get(V);if(W.color.copy(V.color).multiplyScalar(V.intensity),W.distance=V.distance,W.decay=V.decay,V.castShadow){let Q=V.shadow,ae=n.get(V);ae.shadowIntensity=Q.intensity,ae.shadowBias=Q.bias,ae.shadowNormalBias=Q.normalBias,ae.shadowRadius=Q.radius,ae.shadowMapSize=Q.mapSize,ae.shadowCameraNear=Q.camera.near,ae.shadowCameraFar=Q.camera.far,i.pointShadow[m]=ae,i.pointShadowMap[m]=te,i.pointShadowMatrix[m]=V.shadow.matrix,T++}i.point[m]=W,m++}else if(V.isHemisphereLight){let W=e.get(V);W.skyColor.copy(V.color).multiplyScalar(G),W.groundColor.copy(V.groundColor).multiplyScalar(G),i.hemi[y]=W,y++}}E>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ge.LTC_FLOAT_1,i.rectAreaLTC2=Ge.LTC_FLOAT_2):(i.rectAreaLTC1=Ge.LTC_HALF_1,i.rectAreaLTC2=Ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let F=i.hash;(F.sunLength!==f||F.directionalLength!==g||F.pointLength!==m||F.spotLength!==x||F.rectAreaLength!==E||F.hemiLength!==y||F.numSunShadows!==p||F.numDirectionalShadows!==S||F.numPointShadows!==T||F.numSpotShadows!==R||F.numSpotMaps!==v||F.numLightProbes!==w)&&(i.sun.length=f,i.directional.length=g,i.spot.length=x,i.rectArea.length=E,i.point.length=m,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+v-M,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=w,F.sunLength=f,F.directionalLength=g,F.pointLength=m,F.spotLength=x,F.rectAreaLength=E,F.hemiLength=y,F.numSunShadows=p,F.numDirectionalShadows=S,F.numPointShadows=T,F.numSpotShadows=R,F.numSpotMaps=v,F.numLightProbes=w,i.version=tL++)}function l(c,u){let h=0,d=0,f=0,p=0,_=0,g=0,m=u.matrixWorldInverse;for(let x=0,E=c.length;x<E;x++){let y=c[x];if(y.isSunLight){let S=i.sun[h];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),h++}else if(y.isDirectionalLight){let S=i.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(y.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let S=i.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function QM(t){let e=new iL(t),n=[],i=[],s=[];function r(d){h.camera=d,n.length=0,i.length=0,s.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(n)}function u(d){e.setupView(n,d)}let h={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function sL(t){let e=new WeakMap;function n(s,r=0){let o=e.get(s),a;return o===void 0?(a=new QM(t),e.set(s,[a])):r>=o.length?(a=new QM(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}var rL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,aL=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],lL=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],e1=new tn,Sh=new D,Cy=new D;function cL(t,e,n){let i=new Xl,s=new Me,r=new Me,o=new En,a=new Sp,l=new bp,c={},u=n.maxTextureSize,h={[Do]:ui,[ui]:Do,[ii]:ii},d=new rs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:rL,fragmentShader:oL}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new kt;p.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Re(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hh;let m=this.type;this.render=function(T,R,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===WT&&(ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hh);let M=t.getRenderTarget(),w=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),U=t.state;U.setBlending(_r),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let H=m!==this.type;H&&R.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(k=>k.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,k=T.length;V<k;V++){let G=T[V],K=G.shadow;if(K===void 0){ht("WebGLShadowMap:",G,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let te=K.getFrameExtents();s.multiply(te),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/te.x),s.x=r.x*te.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/te.y),s.y=r.y*te.y,K.mapSize.y=r.y));let W=t.state.buffers.depth.getReversed();if(K.camera._reversedDepth=W,K.map===null||H===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Ql){if(G.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Xi(s.x,s.y,{format:Fo,type:Gs,minFilter:qn,magFilter:qn,generateMipmaps:!1}),K.map.texture.name=G.name+".shadowMap",K.map.depthTexture=new Ro(s.x,s.y,zs),K.map.depthTexture.name=G.name+".shadowMapDepth",K.map.depthTexture.format=fr,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=ni,K.map.depthTexture.magFilter=ni}else G.isPointLight?(K.map=new Cm(s.x),K.map.depthTexture=new pp(s.x,Hs)):(K.map=new Xi(s.x,s.y),K.map.depthTexture=new Ro(s.x,s.y,Hs)),K.map.depthTexture.name=G.name+".shadowMap",K.map.depthTexture.format=fr,this.type===hh?(K.map.depthTexture.compareFunction=W?Mm:Tm,K.map.depthTexture.minFilter=qn,K.map.depthTexture.magFilter=qn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=ni,K.map.depthTexture.magFilter=ni);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let Q=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();G.isPointLight!==!0&&K.updateMatrices(G,v);for(let ae=0;ae<Q;ae++){let we=K.getCamera(ae);if(G.isPointLight){let Ie=K.camera,gt=K.matrix,ot=G.distance||Ie.far;ot!==Ie.far&&(Ie.far=ot,Ie.updateProjectionMatrix()),Sh.setFromMatrixPosition(G.matrixWorld),Ie.position.copy(Sh),Cy.copy(Ie.position),Cy.add(aL[ae]),Ie.up.copy(lL[ae]),Ie.lookAt(Cy),Ie.updateMatrixWorld(),gt.makeTranslation(-Sh.x,-Sh.y,-Sh.z),e1.multiplyMatrices(Ie.projectionMatrix,Ie.matrixWorldInverse),K._frustum.setFromProjectionMatrix(e1,Ie.coordinateSystem,Ie.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)t.setRenderTarget(K.map,ae),t.clear();else{ae===0&&(t.setRenderTarget(K.map),t.clear());let Ie=K.getViewport(ae);o.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),U.viewport(o)}i=K.getFrustum(ae),y(R,v,we,G,this.type)}K.isPointLightShadow!==!0&&this.type===Ql&&x(K,v),K.needsUpdate=!1}m=this.type,g.needsUpdate=!1,t.setRenderTarget(M,w,F)};function x(T,R){let v=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Xi(s.x,s.y,{format:Fo,type:Gs}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(R,null,v,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(R,null,v,f,_,null)}function E(T,R,v,M){let w=null,F=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)w=F;else if(w=v.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let U=w.uuid,H=R.uuid,V=c[U];V===void 0&&(V={},c[U]=V);let k=V[H];k===void 0&&(k=w.clone(),V[H]=k,R.addEventListener("dispose",S)),w=k}if(w.visible=R.visible,w.wireframe=R.wireframe,M===Ql?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:h[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,v.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let U=t.properties.get(w);U.light=v}return w}function y(T,R,v,M,w){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Ql)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let H=e.update(T),V=T.material;if(Array.isArray(V)){let k=H.groups;for(let G=0,K=k.length;G<K;G++){let te=k[G],W=V[te.materialIndex];if(W&&W.visible){let Q=E(T,W,M,w);T.onBeforeShadow(t,T,R,v,H,Q,te),t.renderBufferDirect(v,null,H,Q,T,te),T.onAfterShadow(t,T,R,v,H,Q,te)}}}else if(V.visible){let k=E(T,V,M,w);T.onBeforeShadow(t,T,R,v,H,k,null),t.renderBufferDirect(v,null,H,k,T,null),T.onAfterShadow(t,T,R,v,H,k,null)}}let U=T.children;for(let H=0,V=U.length;H<V;H++)y(U[H],R,v,M,w)}function S(T){T.target.removeEventListener("dispose",S);for(let v in c){let M=c[v],w=T.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function uL(t,e){function n(){let j=!1,De=new En,ve=null,Le=new En(0,0,0,0);return{setMask:function(Fe){ve!==Fe&&!j&&(t.colorMask(Fe,Fe,Fe,Fe),ve=Fe)},setLocked:function(Fe){j=Fe},setClear:function(Fe,be,Xe,Ze,Qe){Qe===!0&&(Fe*=Ze,be*=Ze,Xe*=Ze),De.set(Fe,be,Xe,Ze),Le.equals(De)===!1&&(t.clearColor(Fe,be,Xe,Ze),Le.copy(De))},reset:function(){j=!1,ve=null,Le.set(-1,0,0,0)}}}function i(){let j=!1,De=!1,ve=null,Le=null,Fe=null;return{setReversed:function(be){if(De!==be){let Xe=e.get("EXT_clip_control");be?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),De=be;let Ze=Fe;Fe=null,this.setClear(Ze)}},getReversed:function(){return De},setTest:function(be){be?me(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(be){ve!==be&&!j&&(t.depthMask(be),ve=be)},setFunc:function(be){if(De&&(be=TM[be]),Le!==be){switch(be){case Zf:t.depthFunc(t.NEVER);break;case Qf:t.depthFunc(t.ALWAYS);break;case ep:t.depthFunc(t.LESS);break;case Fl:t.depthFunc(t.LEQUAL);break;case tp:t.depthFunc(t.EQUAL);break;case np:t.depthFunc(t.GEQUAL);break;case ip:t.depthFunc(t.GREATER);break;case sp:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Le=be}},setLocked:function(be){j=be},setClear:function(be){Fe!==be&&(Fe=be,De&&(be=1-be),t.clearDepth(be))},reset:function(){j=!1,ve=null,Le=null,Fe=null,De=!1}}}function s(){let j=!1,De=null,ve=null,Le=null,Fe=null,be=null,Xe=null,Ze=null,Qe=null;return{setTest:function(ct){j||(ct?me(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(ct){De!==ct&&!j&&(t.stencilMask(ct),De=ct)},setFunc:function(ct,hi,Ai){(ve!==ct||Le!==hi||Fe!==Ai)&&(t.stencilFunc(ct,hi,Ai),ve=ct,Le=hi,Fe=Ai)},setOp:function(ct,hi,Ai){(be!==ct||Xe!==hi||Ze!==Ai)&&(t.stencilOp(ct,hi,Ai),be=ct,Xe=hi,Ze=Ai)},setLocked:function(ct){j=ct},setClear:function(ct){Qe!==ct&&(t.clearStencil(ct),Qe=ct)},reset:function(){j=!1,De=null,ve=null,Le=null,Fe=null,be=null,Xe=null,Ze=null,Qe=null}}}let r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d={},f=new WeakMap,p=[],_=null,g=!1,m=null,x=null,E=null,y=null,S=null,T=null,R=null,v=new Ye(0,0,0),M=0,w=!1,F=null,U=null,H=null,V=null,k=null,G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,te=0,W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(W)[1]),K=te>=1):W.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),K=te>=2);let Q=null,ae={},we=t.getParameter(t.SCISSOR_BOX),Ie=t.getParameter(t.VIEWPORT),gt=new En().fromArray(we),ot=new En().fromArray(Ie);function $e(j,De,ve,Le){let Fe=new Uint8Array(4),be=t.createTexture();t.bindTexture(j,be),t.texParameteri(j,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(j,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xe=0;Xe<ve;Xe++)j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?t.texImage3D(De,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,Fe):t.texImage2D(De+Xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Fe);return be}let re={};re[t.TEXTURE_2D]=$e(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=$e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=$e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=$e(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(t.DEPTH_TEST),o.setFunc(Fl),Y(!1),q(X_),me(t.CULL_FACE),L(_r);function me(j){u[j]!==!0&&(t.enable(j),u[j]=!0)}function Te(j){u[j]!==!1&&(t.disable(j),u[j]=!1)}function ze(j,De){return d[j]!==De?(t.bindFramebuffer(j,De),d[j]=De,j===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=De),j===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=De),!0):!1}function Oe(j,De){let ve=p,Le=!1;if(j){ve=f.get(De),ve===void 0&&(ve=[],f.set(De,ve));let Fe=j.textures;if(ve.length!==Fe.length||ve[0]!==t.COLOR_ATTACHMENT0){for(let be=0,Xe=Fe.length;be<Xe;be++)ve[be]=t.COLOR_ATTACHMENT0+be;ve.length=Fe.length,Le=!0}}else ve[0]!==t.BACK&&(ve[0]=t.BACK,Le=!0);Le&&t.drawBuffers(ve)}function We(j){return _!==j?(t.useProgram(j),_=j,!0):!1}let pt={[Ca]:t.FUNC_ADD,[$T]:t.FUNC_SUBTRACT,[qT]:t.FUNC_REVERSE_SUBTRACT};pt[YT]=t.MIN,pt[KT]=t.MAX;let A={[JT]:t.ZERO,[jT]:t.ONE,[ZT]:t.SRC_COLOR,[Y_]:t.SRC_ALPHA,[sM]:t.SRC_ALPHA_SATURATE,[nM]:t.DST_COLOR,[eM]:t.DST_ALPHA,[QT]:t.ONE_MINUS_SRC_COLOR,[K_]:t.ONE_MINUS_SRC_ALPHA,[iM]:t.ONE_MINUS_DST_COLOR,[tM]:t.ONE_MINUS_DST_ALPHA,[rM]:t.CONSTANT_COLOR,[oM]:t.ONE_MINUS_CONSTANT_COLOR,[aM]:t.CONSTANT_ALPHA,[lM]:t.ONE_MINUS_CONSTANT_ALPHA};function L(j,De,ve,Le,Fe,be,Xe,Ze,Qe,ct){if(j===_r){g===!0&&(Te(t.BLEND),g=!1);return}if(g===!1&&(me(t.BLEND),g=!0),j!==XT){if(j!==m||ct!==w){if((x!==Ca||S!==Ca)&&(t.blendEquation(t.FUNC_ADD),x=Ca,S=Ca),ct)switch(j){case ec:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pn:t.blendFunc(t.ONE,t.ONE);break;case $_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case q_:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:mt("WebGLState: Invalid blending: ",j);break}else switch(j){case ec:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pn:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case $_:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case q_:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",j);break}E=null,y=null,T=null,R=null,v.set(0,0,0),M=0,m=j,w=ct}return}Fe=Fe||De,be=be||ve,Xe=Xe||Le,(De!==x||Fe!==S)&&(t.blendEquationSeparate(pt[De],pt[Fe]),x=De,S=Fe),(ve!==E||Le!==y||be!==T||Xe!==R)&&(t.blendFuncSeparate(A[ve],A[Le],A[be],A[Xe]),E=ve,y=Le,T=be,R=Xe),(Ze.equals(v)===!1||Qe!==M)&&(t.blendColor(Ze.r,Ze.g,Ze.b,Qe),v.copy(Ze),M=Qe),m=j,w=!1}function z(j,De){j.side===ii?Te(t.CULL_FACE):me(t.CULL_FACE);let ve=j.side===ui;De&&(ve=!ve),Y(ve),j.blending===ec&&j.transparent===!1?L(_r):L(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),r.setMask(j.colorWrite);let Le=j.stencilWrite;a.setTest(Le),Le&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),se(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?me(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Y(j){F!==j&&(j?t.frontFace(t.CW):t.frontFace(t.CCW),F=j)}function q(j){j!==zT?(me(t.CULL_FACE),j!==U&&(j===X_?t.cullFace(t.BACK):j===GT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),U=j}function ne(j){j!==H&&(K&&t.lineWidth(j),H=j)}function se(j,De,ve){j?(me(t.POLYGON_OFFSET_FILL),(V!==De||k!==ve)&&(V=De,k=ve,o.getReversed()&&(De=-De),t.polygonOffset(De,ve))):Te(t.POLYGON_OFFSET_FILL)}function X(j){j?me(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function ce(j){j===void 0&&(j=t.TEXTURE0+G-1),Q!==j&&(t.activeTexture(j),Q=j)}function P(j,De,ve){ve===void 0&&(Q===null?ve=t.TEXTURE0+G-1:ve=Q);let Le=ae[ve];Le===void 0&&(Le={type:void 0,texture:void 0},ae[ve]=Le),(Le.type!==j||Le.texture!==De)&&(Q!==ve&&(t.activeTexture(ve),Q=ve),t.bindTexture(j,De||re[j]),Le.type=j,Le.texture=De)}function Ae(){let j=ae[Q];j!==void 0&&j.type!==void 0&&(t.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function pe(){try{t.compressedTexImage2D(...arguments)}catch(j){mt("WebGLState:",j)}}function I(){try{t.compressedTexImage3D(...arguments)}catch(j){mt("WebGLState:",j)}}function b(){try{t.texSubImage2D(...arguments)}catch(j){mt("WebGLState:",j)}}function $(){try{t.texSubImage3D(...arguments)}catch(j){mt("WebGLState:",j)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(j){mt("WebGLState:",j)}}function ee(){try{t.compressedTexSubImage3D(...arguments)}catch(j){mt("WebGLState:",j)}}function Se(){try{t.texStorage2D(...arguments)}catch(j){mt("WebGLState:",j)}}function xe(){try{t.texStorage3D(...arguments)}catch(j){mt("WebGLState:",j)}}function ue(){try{t.texImage2D(...arguments)}catch(j){mt("WebGLState:",j)}}function fe(){try{t.texImage3D(...arguments)}catch(j){mt("WebGLState:",j)}}function Pe(j){return h[j]!==void 0?h[j]:t.getParameter(j)}function et(j,De){h[j]!==De&&(t.pixelStorei(j,De),h[j]=De)}function Ne(j){gt.equals(j)===!1&&(t.scissor(j.x,j.y,j.z,j.w),gt.copy(j))}function Ce(j){ot.equals(j)===!1&&(t.viewport(j.x,j.y,j.z,j.w),ot.copy(j))}function je(j,De){let ve=c.get(De);ve===void 0&&(ve=new WeakMap,c.set(De,ve));let Le=ve.get(j);Le===void 0&&(Le=t.getUniformBlockIndex(De,j.name),ve.set(j,Le))}function rt(j,De){let Le=c.get(De).get(j);l.get(De)!==Le&&(t.uniformBlockBinding(De,Le,j.__bindingPointIndex),l.set(De,Le))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},h={},Q=null,ae={},d={},f=new WeakMap,p=[],_=null,g=!1,m=null,x=null,E=null,y=null,S=null,T=null,R=null,v=new Ye(0,0,0),M=0,w=!1,F=null,U=null,H=null,V=null,k=null,gt.set(0,0,t.canvas.width,t.canvas.height),ot.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:me,disable:Te,bindFramebuffer:ze,drawBuffers:Oe,useProgram:We,setBlending:L,setMaterial:z,setFlipSided:Y,setCullFace:q,setLineWidth:ne,setPolygonOffset:se,setScissorTest:X,activeTexture:ce,bindTexture:P,unbindTexture:Ae,compressedTexImage2D:pe,compressedTexImage3D:I,texImage2D:ue,texImage3D:fe,pixelStorei:et,getParameter:Pe,updateUBOMapping:je,uniformBlockBinding:rt,texStorage2D:Se,texStorage3D:xe,texSubImage2D:b,texSubImage3D:$,compressedTexSubImage2D:Z,compressedTexSubImage3D:ee,scissor:Ne,viewport:Ce,reset:at}}function hL(t,e,n,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,u=new WeakMap,h=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,b){return p?new OffscreenCanvas(I,b):Lu("canvas")}function g(I,b,$){let Z=1,ee=pe(I);if((ee.width>$||ee.height>$)&&(Z=$/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Se=Math.floor(Z*ee.width),xe=Math.floor(Z*ee.height);d===void 0&&(d=_(Se,xe));let ue=b?_(Se,xe):d;return ue.width=Se,ue.height=xe,ue.getContext("2d").drawImage(I,0,0,Se,xe),ht("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Se+"x"+xe+")."),ue}else return"data"in I&&ht("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),I;return I}function m(I){return I.generateMipmaps}function x(I){t.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?t.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(I,b,$,Z,ee,Se=!1){if(I!==null){if(t[I]!==void 0)return t[I];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let xe;Z&&(xe=e.get("EXT_texture_norm16"),xe||ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=b;if(b===t.RED&&($===t.FLOAT&&(ue=t.R32F),$===t.HALF_FLOAT&&(ue=t.R16F),$===t.UNSIGNED_BYTE&&(ue=t.R8),$===t.UNSIGNED_SHORT&&xe&&(ue=xe.R16_EXT),$===t.SHORT&&xe&&(ue=xe.R16_SNORM_EXT)),b===t.RED_INTEGER&&($===t.UNSIGNED_BYTE&&(ue=t.R8UI),$===t.UNSIGNED_SHORT&&(ue=t.R16UI),$===t.UNSIGNED_INT&&(ue=t.R32UI),$===t.BYTE&&(ue=t.R8I),$===t.SHORT&&(ue=t.R16I),$===t.INT&&(ue=t.R32I)),b===t.RG&&($===t.FLOAT&&(ue=t.RG32F),$===t.HALF_FLOAT&&(ue=t.RG16F),$===t.UNSIGNED_BYTE&&(ue=t.RG8),$===t.UNSIGNED_SHORT&&xe&&(ue=xe.RG16_EXT),$===t.SHORT&&xe&&(ue=xe.RG16_SNORM_EXT)),b===t.RG_INTEGER&&($===t.UNSIGNED_BYTE&&(ue=t.RG8UI),$===t.UNSIGNED_SHORT&&(ue=t.RG16UI),$===t.UNSIGNED_INT&&(ue=t.RG32UI),$===t.BYTE&&(ue=t.RG8I),$===t.SHORT&&(ue=t.RG16I),$===t.INT&&(ue=t.RG32I)),b===t.RGB_INTEGER&&($===t.UNSIGNED_BYTE&&(ue=t.RGB8UI),$===t.UNSIGNED_SHORT&&(ue=t.RGB16UI),$===t.UNSIGNED_INT&&(ue=t.RGB32UI),$===t.BYTE&&(ue=t.RGB8I),$===t.SHORT&&(ue=t.RGB16I),$===t.INT&&(ue=t.RGB32I)),b===t.RGBA_INTEGER&&($===t.UNSIGNED_BYTE&&(ue=t.RGBA8UI),$===t.UNSIGNED_SHORT&&(ue=t.RGBA16UI),$===t.UNSIGNED_INT&&(ue=t.RGBA32UI),$===t.BYTE&&(ue=t.RGBA8I),$===t.SHORT&&(ue=t.RGBA16I),$===t.INT&&(ue=t.RGBA32I)),b===t.RGB&&($===t.UNSIGNED_SHORT&&xe&&(ue=xe.RGB16_EXT),$===t.SHORT&&xe&&(ue=xe.RGB16_SNORM_EXT),$===t.UNSIGNED_INT_5_9_9_9_REV&&(ue=t.RGB9_E5),$===t.UNSIGNED_INT_10F_11F_11F_REV&&(ue=t.R11F_G11F_B10F)),b===t.RGBA){let fe=Se?Du:zt.getTransfer(ee);$===t.FLOAT&&(ue=t.RGBA32F),$===t.HALF_FLOAT&&(ue=t.RGBA16F),$===t.UNSIGNED_BYTE&&(ue=fe===en?t.SRGB8_ALPHA8:t.RGBA8),$===t.UNSIGNED_SHORT&&xe&&(ue=xe.RGBA16_EXT),$===t.SHORT&&xe&&(ue=xe.RGBA16_SNORM_EXT),$===t.UNSIGNED_SHORT_4_4_4_4&&(ue=t.RGBA4),$===t.UNSIGNED_SHORT_5_5_5_1&&(ue=t.RGB5_A1)}return(ue===t.R16F||ue===t.R32F||ue===t.RG16F||ue===t.RG32F||ue===t.RGBA16F||ue===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function S(I,b){let $;return I?b===null||b===Hs||b===nc?$=t.DEPTH24_STENCIL8:b===zs?$=t.DEPTH32F_STENCIL8:b===tc&&($=t.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Hs||b===nc?$=t.DEPTH_COMPONENT24:b===zs?$=t.DEPTH_COMPONENT32F:b===tc&&($=t.DEPTH_COMPONENT16),$}function T(I,b){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==ni&&I.minFilter!==qn?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function R(I){let b=I.target;b.removeEventListener("dispose",R),M(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&h.delete(b)}function v(I){let b=I.target;b.removeEventListener("dispose",v),F(b)}function M(I){let b=i.get(I);if(b.__webglInit===void 0)return;let $=I.source,Z=f.get($);if(Z){let ee=Z[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(I),Object.keys(Z).length===0&&f.delete($)}i.remove(I)}function w(I){let b=i.get(I);t.deleteTexture(b.__webglTexture);let $=I.source,Z=f.get($);delete Z[b.__cacheKey],o.memory.textures--}function F(I){let b=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let ee=0;ee<b.__webglFramebuffer[Z].length;ee++)t.deleteFramebuffer(b.__webglFramebuffer[Z][ee]);else t.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)t.deleteFramebuffer(b.__webglFramebuffer[Z]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let $=I.textures;for(let Z=0,ee=$.length;Z<ee;Z++){let Se=i.get($[Z]);Se.__webglTexture&&(t.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove($[Z])}i.remove(I)}let U=0;function H(){U=0}function V(){return U}function k(I){U=I}function G(){let I=U;return I>=s.maxTextures&&ht("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,I}function K(I){let b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function te(I,b){let $=i.get(I);if(I.isVideoTexture&&P(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&$.__version!==I.version){let Z=I.image;if(Z===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{Te($,I,b);return}}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,$.__webglTexture,t.TEXTURE0+b)}function W(I,b){let $=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){Te($,I,b);return}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,$.__webglTexture,t.TEXTURE0+b)}function Q(I,b){let $=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){Te($,I,b);return}n.bindTexture(t.TEXTURE_3D,$.__webglTexture,t.TEXTURE0+b)}function ae(I,b){let $=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&$.__version!==I.version){ze($,I,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture,t.TEXTURE0+b)}let we={[Vl]:t.REPEAT,[bs]:t.CLAMP_TO_EDGE,[rp]:t.MIRRORED_REPEAT},Ie={[ni]:t.NEAREST,[hM]:t.NEAREST_MIPMAP_NEAREST,[ph]:t.NEAREST_MIPMAP_LINEAR,[qn]:t.LINEAR,[kp]:t.LINEAR_MIPMAP_NEAREST,[yr]:t.LINEAR_MIPMAP_LINEAR},gt={[mM]:t.NEVER,[EM]:t.ALWAYS,[gM]:t.LESS,[Tm]:t.LEQUAL,[_M]:t.EQUAL,[Mm]:t.GEQUAL,[yM]:t.GREATER,[vM]:t.NOTEQUAL};function ot(I,b){if(b.type===zs&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===qn||b.magFilter===kp||b.magFilter===ph||b.magFilter===yr||b.minFilter===qn||b.minFilter===kp||b.minFilter===ph||b.minFilter===yr)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(I,t.TEXTURE_WRAP_S,we[b.wrapS]),t.texParameteri(I,t.TEXTURE_WRAP_T,we[b.wrapT]),(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)&&t.texParameteri(I,t.TEXTURE_WRAP_R,we[b.wrapR]),t.texParameteri(I,t.TEXTURE_MAG_FILTER,Ie[b.magFilter]),t.texParameteri(I,t.TEXTURE_MIN_FILTER,Ie[b.minFilter]),b.compareFunction&&(t.texParameteri(I,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(I,t.TEXTURE_COMPARE_FUNC,gt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ni||b.minFilter!==ph&&b.minFilter!==yr||b.type===zs&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");t.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function $e(I,b){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",R));let Z=b.source,ee=f.get(Z);ee===void 0&&(ee={},f.set(Z,ee));let Se=K(b);if(Se!==I.__cacheKey){ee[Se]===void 0&&(ee[Se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ee[Se].usedTimes++;let xe=ee[I.__cacheKey];xe!==void 0&&(ee[I.__cacheKey].usedTimes--,xe.usedTimes===0&&w(b)),I.__cacheKey=Se,I.__webglTexture=ee[Se].texture}return $}function re(I,b,$){return Math.floor(Math.floor(I/$)/b)}function me(I,b,$,Z){let Se=I.updateRanges;if(Se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,$,Z,b.data);else{Se.sort((et,Ne)=>et.start-Ne.start);let xe=0;for(let et=1;et<Se.length;et++){let Ne=Se[xe],Ce=Se[et],je=Ne.start+Ne.count,rt=re(Ce.start,b.width,4),at=re(Ne.start,b.width,4);Ce.start<=je+1&&rt===at&&re(Ce.start+Ce.count-1,b.width,4)===rt?Ne.count=Math.max(Ne.count,Ce.start+Ce.count-Ne.start):(++xe,Se[xe]=Ce)}Se.length=xe+1;let ue=n.getParameter(t.UNPACK_ROW_LENGTH),fe=n.getParameter(t.UNPACK_SKIP_PIXELS),Pe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let et=0,Ne=Se.length;et<Ne;et++){let Ce=Se[et],je=Math.floor(Ce.start/4),rt=Math.ceil(Ce.count/4),at=je%b.width,j=Math.floor(je/b.width),De=rt,ve=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,at),n.pixelStorei(t.UNPACK_SKIP_ROWS,j),n.texSubImage2D(t.TEXTURE_2D,0,at,j,De,ve,$,Z,b.data)}I.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ue),n.pixelStorei(t.UNPACK_SKIP_PIXELS,fe),n.pixelStorei(t.UNPACK_SKIP_ROWS,Pe)}}function Te(I,b,$){let Z=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=t.TEXTURE_3D);let ee=$e(I,b),Se=b.source;n.bindTexture(Z,I.__webglTexture,t.TEXTURE0+$);let xe=i.get(Se);if(Se.version!==xe.__version||ee===!0){if(n.activeTexture(t.TEXTURE0+$),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ve=zt.getPrimaries(zt.workingColorSpace),Le=b.colorSpace===Ws?null:zt.getPrimaries(b.colorSpace),Fe=b.colorSpace===Ws||ve===Le?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}n.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment);let fe=g(b.image,!1,s.maxTextureSize);fe=Ae(b,fe);let Pe=r.convert(b.format,b.colorSpace),et=r.convert(b.type),Ne=y(b.internalFormat,Pe,et,b.normalized,b.colorSpace,b.isVideoTexture);ot(Z,b);let Ce,je=b.mipmaps,rt=b.isVideoTexture!==!0,at=xe.__version===void 0||ee===!0,j=Se.dataReady,De=T(b,fe);if(b.isDepthTexture)Ne=S(b.format===Uo,b.type),at&&(rt?n.texStorage2D(t.TEXTURE_2D,1,Ne,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Pe,et,null));else if(b.isDataTexture)if(je.length>0){rt&&at&&n.texStorage2D(t.TEXTURE_2D,De,Ne,je[0].width,je[0].height);for(let ve=0,Le=je.length;ve<Le;ve++)Ce=je[ve],rt?j&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,Pe,et,Ce.data):n.texImage2D(t.TEXTURE_2D,ve,Ne,Ce.width,Ce.height,0,Pe,et,Ce.data);b.generateMipmaps=!1}else rt?(at&&n.texStorage2D(t.TEXTURE_2D,De,Ne,fe.width,fe.height),j&&me(b,fe,Pe,et)):n.texImage2D(t.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Pe,et,fe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){rt&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Ne,je[0].width,je[0].height,fe.depth);for(let ve=0,Le=je.length;ve<Le;ve++)if(Ce=je[ve],b.format!==Ms)if(Pe!==null)if(rt){if(j)if(b.layerUpdates.size>0){let Fe=yy(Ce.width,Ce.height,b.format,b.type);for(let be of b.layerUpdates){let Xe=Ce.data.subarray(be*Fe/Ce.data.BYTES_PER_ELEMENT,(be+1)*Fe/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,be,Ce.width,Ce.height,1,Pe,Xe)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,Ce.width,Ce.height,fe.depth,Pe,Ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ve,Ne,Ce.width,Ce.height,fe.depth,0,Ce.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?j&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,Ce.width,Ce.height,fe.depth,Pe,et,Ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ve,Ne,Ce.width,Ce.height,fe.depth,0,Pe,et,Ce.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{rt&&at&&n.texStorage2D(t.TEXTURE_2D,De,Ne,je[0].width,je[0].height);for(let ve=0,Le=je.length;ve<Le;ve++)Ce=je[ve],b.format!==Ms?Pe!==null?rt?j&&n.compressedTexSubImage2D(t.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,Pe,Ce.data):n.compressedTexImage2D(t.TEXTURE_2D,ve,Ne,Ce.width,Ce.height,0,Ce.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?j&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,Pe,et,Ce.data):n.texImage2D(t.TEXTURE_2D,ve,Ne,Ce.width,Ce.height,0,Pe,et,Ce.data)}else if(b.isDataArrayTexture)if(rt){if(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Ne,fe.width,fe.height,fe.depth),j)if(b.layerUpdates.size>0){let ve=yy(fe.width,fe.height,b.format,b.type);for(let Le of b.layerUpdates){let Fe=fe.data.subarray(Le*ve/fe.data.BYTES_PER_ELEMENT,(Le+1)*ve/fe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Le,fe.width,fe.height,1,Pe,et,Fe)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Pe,et,fe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,fe.width,fe.height,fe.depth,0,Pe,et,fe.data);else if(b.isData3DTexture)rt?(at&&n.texStorage3D(t.TEXTURE_3D,De,Ne,fe.width,fe.height,fe.depth),j&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Pe,et,fe.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,fe.width,fe.height,fe.depth,0,Pe,et,fe.data);else if(b.isFramebufferTexture){if(at)if(rt)n.texStorage2D(t.TEXTURE_2D,De,Ne,fe.width,fe.height);else{let ve=fe.width,Le=fe.height;for(let Fe=0;Fe<De;Fe++)n.texImage2D(t.TEXTURE_2D,Fe,Ne,ve,Le,0,Pe,et,null),ve>>=1,Le>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in t){let ve=t.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),fe.parentNode!==ve){ve.appendChild(fe),h.add(b),ve.onpaint=Le=>{let Fe=Le.changedElements;for(let be of h)Fe.includes(be.image)&&(be.needsUpdate=!0)},ve.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,fe);else{let Fe=t.RGBA,be=t.RGBA,Xe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Fe,be,Xe,fe)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(je.length>0){if(rt&&at){let ve=pe(je[0]);n.texStorage2D(t.TEXTURE_2D,De,Ne,ve.width,ve.height)}for(let ve=0,Le=je.length;ve<Le;ve++)Ce=je[ve],rt?j&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,Pe,et,Ce):n.texImage2D(t.TEXTURE_2D,ve,Ne,Pe,et,Ce);b.generateMipmaps=!1}else if(rt){if(at){let ve=pe(fe);n.texStorage2D(t.TEXTURE_2D,De,Ne,ve.width,ve.height)}j&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Pe,et,fe)}else n.texImage2D(t.TEXTURE_2D,0,Ne,Pe,et,fe);m(b)&&x(Z),xe.__version=Se.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function ze(I,b,$){if(b.image.length!==6)return;let Z=$e(I,b),ee=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+$);let Se=i.get(ee);if(ee.version!==Se.__version||Z===!0){n.activeTexture(t.TEXTURE0+$);let xe=zt.getPrimaries(zt.workingColorSpace),ue=b.colorSpace===Ws?null:zt.getPrimaries(b.colorSpace),fe=b.colorSpace===Ws||xe===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Pe=b.isCompressedTexture||b.image[0].isCompressedTexture,et=b.image[0]&&b.image[0].isDataTexture,Ne=[];for(let be=0;be<6;be++)!Pe&&!et?Ne[be]=g(b.image[be],!0,s.maxCubemapSize):Ne[be]=et?b.image[be].image:b.image[be],Ne[be]=Ae(b,Ne[be]);let Ce=Ne[0],je=r.convert(b.format,b.colorSpace),rt=r.convert(b.type),at=y(b.internalFormat,je,rt,b.normalized,b.colorSpace),j=b.isVideoTexture!==!0,De=Se.__version===void 0||Z===!0,ve=ee.dataReady,Le=T(b,Ce);ot(t.TEXTURE_CUBE_MAP,b);let Fe;if(Pe){j&&De&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,at,Ce.width,Ce.height);for(let be=0;be<6;be++){Fe=Ne[be].mipmaps;for(let Xe=0;Xe<Fe.length;Xe++){let Ze=Fe[Xe];b.format!==Ms?je!==null?j?ve&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe,0,0,Ze.width,Ze.height,je,Ze.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe,at,Ze.width,Ze.height,0,Ze.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?ve&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe,0,0,Ze.width,Ze.height,je,rt,Ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe,at,Ze.width,Ze.height,0,je,rt,Ze.data)}}}else{if(Fe=b.mipmaps,j&&De){Fe.length>0&&Le++;let be=pe(Ne[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,at,be.width,be.height)}for(let be=0;be<6;be++)if(et){j?ve&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ne[be].width,Ne[be].height,je,rt,Ne[be].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,at,Ne[be].width,Ne[be].height,0,je,rt,Ne[be].data);for(let Xe=0;Xe<Fe.length;Xe++){let Qe=Fe[Xe].image[be].image;j?ve&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe+1,0,0,Qe.width,Qe.height,je,rt,Qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe+1,at,Qe.width,Qe.height,0,je,rt,Qe.data)}}else{j?ve&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,je,rt,Ne[be]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,at,je,rt,Ne[be]);for(let Xe=0;Xe<Fe.length;Xe++){let Ze=Fe[Xe];j?ve&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe+1,0,0,je,rt,Ze.image[be]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe+1,at,je,rt,Ze.image[be])}}}m(b)&&x(t.TEXTURE_CUBE_MAP),Se.__version=ee.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Oe(I,b,$,Z,ee,Se){let xe=r.convert($.format,$.colorSpace),ue=r.convert($.type),fe=y($.internalFormat,xe,ue,$.normalized,$.colorSpace),Pe=i.get(b),et=i.get($);if(et.__renderTarget=b,!Pe.__hasExternalTextures){let Ne=Math.max(1,b.width>>Se),Ce=Math.max(1,b.height>>Se);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,Se,fe,Ne,Ce,b.depth,0,xe,ue,null):n.texImage2D(ee,Se,fe,Ne,Ce,0,xe,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,I),ce(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ee,et.__webglTexture,0,X(b)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ee,et.__webglTexture,Se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(I,b,$){if(t.bindRenderbuffer(t.RENDERBUFFER,I),b.depthBuffer){let Z=b.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,Se=S(b.stencilBuffer,ee),xe=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ce(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,X(b),Se,b.width,b.height):$?t.renderbufferStorageMultisample(t.RENDERBUFFER,X(b),Se,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Se,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,I)}else{let Z=b.textures;for(let ee=0;ee<Z.length;ee++){let Se=Z[ee],xe=r.convert(Se.format,Se.colorSpace),ue=r.convert(Se.type),fe=y(Se.internalFormat,xe,ue,Se.normalized,Se.colorSpace);ce(b)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,X(b),fe,b.width,b.height):$?t.renderbufferStorageMultisample(t.RENDERBUFFER,X(b),fe,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,fe,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pt(I,b,$){let Z=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=i.get(b.depthTexture);if(ee.__renderTarget=b,(!ee.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Z){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,b.depthTexture.addEventListener("dispose",R)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),ot(t.TEXTURE_CUBE_MAP,b.depthTexture);let Pe=r.convert(b.depthTexture.format),et=r.convert(b.depthTexture.type),Ne;b.depthTexture.format===fr?Ne=t.DEPTH_COMPONENT24:b.depthTexture.format===Uo&&(Ne=t.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Ne,b.width,b.height,0,Pe,et,null)}}else te(b.depthTexture,0);let Se=ee.__webglTexture,xe=X(b),ue=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+$:t.TEXTURE_2D,fe=b.depthTexture.format===Uo?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(b.depthTexture.format===fr)ce(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,ue,Se,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,fe,ue,Se,0);else if(b.depthTexture.format===Uo)ce(b)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,ue,Se,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,fe,ue,Se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function A(I){let b=i.get(I),$=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){let Z=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){let ee=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),b.__depthDisposeCallback=ee}b.__boundDepthTexture=Z}if(I.depthTexture&&!b.__autoAllocateDepthBuffer)if($)for(let Z=0;Z<6;Z++)pt(b.__webglFramebuffer[Z],I,Z);else{let Z=I.texture.mipmaps;Z&&Z.length>0?pt(b.__webglFramebuffer[0],I,0):pt(b.__webglFramebuffer,I,0)}else if($){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=t.createRenderbuffer(),We(b.__webglDepthbuffer[Z],I,!1);else{let ee=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=b.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,Se),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,Se)}}else{let Z=I.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),We(b.__webglDepthbuffer,I,!1);else{let ee=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Se),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,Se)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function L(I,b,$){let Z=i.get(I);b!==void 0&&Oe(Z.__webglFramebuffer,I,I.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),$!==void 0&&A(I)}function z(I){let b=I.texture,$=i.get(I),Z=i.get(b);I.addEventListener("dispose",v);let ee=I.textures,Se=I.isWebGLCubeRenderTarget===!0,xe=ee.length>1;if(xe||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=b.version,o.memory.textures++),Se){$.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[ue]=[];for(let fe=0;fe<b.mipmaps.length;fe++)$.__webglFramebuffer[ue][fe]=t.createFramebuffer()}else $.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let ue=0;ue<b.mipmaps.length;ue++)$.__webglFramebuffer[ue]=t.createFramebuffer()}else $.__webglFramebuffer=t.createFramebuffer();if(xe)for(let ue=0,fe=ee.length;ue<fe;ue++){let Pe=i.get(ee[ue]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=t.createTexture(),o.memory.textures++)}if(I.samples>0&&ce(I)===!1){$.__webglMultisampledFramebuffer=t.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){let fe=ee[ue];$.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,$.__webglColorRenderbuffer[ue]);let Pe=r.convert(fe.format,fe.colorSpace),et=r.convert(fe.type),Ne=y(fe.internalFormat,Pe,et,fe.normalized,fe.colorSpace,I.isXRRenderTarget===!0),Ce=X(I);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Ne,I.width,I.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,$.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=t.createRenderbuffer(),We($.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Se){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),ot(t.TEXTURE_CUBE_MAP,b);for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)Oe($.__webglFramebuffer[ue][fe],I,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,fe);else Oe($.__webglFramebuffer[ue],I,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(b)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){for(let ue=0,fe=ee.length;ue<fe;ue++){let Pe=ee[ue],et=i.get(Pe),Ne=t.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ne=I.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ne,et.__webglTexture),ot(Ne,Pe),Oe($.__webglFramebuffer,I,Pe,t.COLOR_ATTACHMENT0+ue,Ne,0),m(Pe)&&x(Ne)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ue=I.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Z.__webglTexture),ot(ue,b),b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)Oe($.__webglFramebuffer[fe],I,b,t.COLOR_ATTACHMENT0,ue,fe);else Oe($.__webglFramebuffer,I,b,t.COLOR_ATTACHMENT0,ue,0);m(b)&&x(ue),n.unbindTexture()}I.depthBuffer&&A(I)}function Y(I){let b=I.textures;for(let $=0,Z=b.length;$<Z;$++){let ee=b[$];if(m(ee)){let Se=E(I),xe=i.get(ee).__webglTexture;n.bindTexture(Se,xe),x(Se),n.unbindTexture()}}}let q=[],ne=[];function se(I){if(I.samples>0){if(ce(I)===!1){let b=I.textures,$=I.width,Z=I.height,ee=t.COLOR_BUFFER_BIT,Se=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(I),ue=b.length>1;if(ue)for(let Pe=0;Pe<b.length;Pe++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let fe=I.texture.mipmaps;fe&&fe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Pe=0;Pe<b.length;Pe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[Pe]);let et=i.get(b[Pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,et,0)}t.blitFramebuffer(0,0,$,Z,0,0,$,Z,ee,t.NEAREST),l===!0&&(q.length=0,ne.length=0,q.push(t.COLOR_ATTACHMENT0+Pe),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(q.push(Se),ne.push(Se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ne)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,q))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let Pe=0;Pe<b.length;Pe++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,xe.__webglColorRenderbuffer[Pe]);let et=i.get(b[Pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,et,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let b=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function X(I){return Math.min(s.maxSamples,I.samples)}function ce(I){let b=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function P(I){let b=o.render.frame;u.get(I)!==b&&(u.set(I,b),I.update())}function Ae(I,b){let $=I.colorSpace,Z=I.format,ee=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==Ou&&$!==Ws&&(zt.getTransfer($)===en?(Z!==Ms||ee!==$i)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",$)),b}function pe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.getTextureUnits=V,this.setTextureUnits=k,this.setTexture2D=te,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=ae,this.rebindTextures=L,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=A,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=ce,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function dL(t,e){function n(i,s=Ws){let r,o=zt.getTransfer(s);if(i===$i)return t.UNSIGNED_BYTE;if(i===zp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Gp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===oy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ay)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===sy)return t.BYTE;if(i===ry)return t.SHORT;if(i===tc)return t.UNSIGNED_SHORT;if(i===Hp)return t.INT;if(i===Hs)return t.UNSIGNED_INT;if(i===zs)return t.FLOAT;if(i===Gs)return t.HALF_FLOAT;if(i===ly)return t.ALPHA;if(i===cy)return t.RGB;if(i===Ms)return t.RGBA;if(i===fr)return t.DEPTH_COMPONENT;if(i===Uo)return t.DEPTH_STENCIL;if(i===uy)return t.RED;if(i===Wp)return t.RED_INTEGER;if(i===Fo)return t.RG;if(i===Xp)return t.RG_INTEGER;if(i===$p)return t.RGBA_INTEGER;if(i===mh||i===gh||i===_h||i===yh)if(o===en)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===mh)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gh)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_h)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yh)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===mh)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gh)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_h)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yh)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qp||i===Yp||i===Kp||i===Jp)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===qp)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yp)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kp)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jp)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jp||i===Zp||i===Qp||i===em||i===tm||i===vh||i===nm)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===jp||i===Zp)return o===en?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Qp)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===em)return r.COMPRESSED_R11_EAC;if(i===tm)return r.COMPRESSED_SIGNED_R11_EAC;if(i===vh)return r.COMPRESSED_RG11_EAC;if(i===nm)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===im||i===sm||i===rm||i===om||i===am||i===lm||i===cm||i===um||i===hm||i===dm||i===fm||i===pm||i===mm||i===gm)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===im)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sm)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rm)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===om)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===am)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lm)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cm)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===um)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hm)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dm)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fm)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pm)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mm)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gm)return o===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_m||i===ym||i===vm)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===_m)return o===en?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ym)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vm)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Em||i===xm||i===Eh||i===Sm)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Em)return r.COMPRESSED_RED_RGTC1_EXT;if(i===xm)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Eh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sm)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nc?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var fL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Fy=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new Xu(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new rs({vertexShader:fL,fragmentShader:pL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Re(new ih(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vy=class extends pr{constructor(e,n){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,_=typeof XRWebGLBinding<"u",g=new Fy,m={},x=n.getContextAttributes(),E=null,y=null,S=[],T=[],R=new Me,v=null,M=null,w=new bi;w.viewport=new En;let F=new bi;F.viewport=new En;let U=[w,F],H=new Up,V=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let me=S[re];return me===void 0&&(me=new Wl,S[re]=me),me.getTargetRaySpace()},this.getControllerGrip=function(re){let me=S[re];return me===void 0&&(me=new Wl,S[re]=me),me.getGripSpace()},this.getHand=function(re){let me=S[re];return me===void 0&&(me=new Wl,S[re]=me),me.getHandSpace()};function G(re){let me=T.indexOf(re.inputSource);if(me===-1)return;let Te=S[me];Te!==void 0&&(Te.update(re.inputSource,re.frame,c||o),Te.dispatchEvent({type:re.type,data:re.inputSource}))}function K(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",te);for(let re=0;re<S.length;re++){let me=T[re];me!==null&&(T[re]=null,S[re].disconnect(me))}V=null,k=null,g.reset();for(let re in m)delete m[re];if(e.setRenderTarget(E),f=null,d=null,h=null,s=null,y=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),M!==null){let re=M.camera;re.fov=M.fov,re.zoom=M.zoom,re.updateProjectionMatrix(),M=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,i.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,n)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",K),s.addEventListener("inputsourceschange",te),x.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,ze=null,Oe=null;x.depth&&(Oe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Te=x.stencil?Uo:fr,ze=x.stencil?nc:Hs);let We={colorFormat:n.RGBA8,depthFormat:Oe,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(We),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Xi(d.textureWidth,d.textureHeight,{format:Ms,type:$i,depthTexture:new Ro(d.textureWidth,d.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Te={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,Te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Xi(f.framebufferWidth,f.framebufferHeight,{format:Ms,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$e.setContext(s),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(re){for(let me=0;me<re.removed.length;me++){let Te=re.removed[me],ze=T.indexOf(Te);ze>=0&&(T[ze]=null,S[ze].disconnect(Te))}for(let me=0;me<re.added.length;me++){let Te=re.added[me],ze=T.indexOf(Te);if(ze===-1){for(let We=0;We<S.length;We++)if(We>=T.length){T.push(Te),ze=We;break}else if(T[We]===null){T[We]=Te,ze=We;break}if(ze===-1)break}let Oe=S[ze];Oe&&Oe.connect(Te)}}let W=new D,Q=new D;function ae(re,me,Te){W.setFromMatrixPosition(me.matrixWorld),Q.setFromMatrixPosition(Te.matrixWorld);let ze=W.distanceTo(Q),Oe=me.projectionMatrix.elements,We=Te.projectionMatrix.elements,pt=Oe[14]/(Oe[10]-1),A=Oe[14]/(Oe[10]+1),L=(Oe[9]+1)/Oe[5],z=(Oe[9]-1)/Oe[5],Y=(Oe[8]-1)/Oe[0],q=(We[8]+1)/We[0],ne=pt*Y,se=pt*q,X=ze/(-Y+q),ce=X*-Y;if(me.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ce),re.translateZ(X),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Oe[10]===-1)re.projectionMatrix.copy(me.projectionMatrix),re.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{let P=pt+X,Ae=A+X,pe=ne-ce,I=se+(ze-ce),b=L*A/Ae*P,$=z*A/Ae*P;re.projectionMatrix.makePerspective(pe,I,b,$,P,Ae),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function we(re,me){me===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(me.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let me=re.near,Te=re.far;g.texture!==null&&(g.depthNear>0&&(me=g.depthNear),g.depthFar>0&&(Te=g.depthFar)),H.near=F.near=w.near=me,H.far=F.far=w.far=Te,(V!==H.near||k!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),V=H.near,k=H.far),H.layers.mask=re.layers.mask|6,w.layers.mask=H.layers.mask&-5,F.layers.mask=H.layers.mask&-3;let ze=re.parent,Oe=H.cameras;we(H,ze);for(let We=0;We<Oe.length;We++)we(Oe[We],ze);Oe.length===2?ae(H,w,F):H.projectionMatrix.copy(w.projectionMatrix),M===null&&re.isPerspectiveCamera&&(M={camera:re,fov:re.fov,zoom:re.zoom}),Ie(re,H,ze)};function Ie(re,me,Te){Te===null?re.matrix.copy(me.matrixWorld):(re.matrix.copy(Te.matrixWorld),re.matrix.invert(),re.matrix.multiply(me.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(me.projectionMatrix),re.projectionMatrixInverse.copy(me.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Hl*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(re){l=re,d!==null&&(d.fixedFoveation=re),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=re)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(re){return m[re]};let gt=null;function ot(re,me){if(u=me.getViewerPose(c||o),p=me,u!==null){let Te=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ze=!1;Te.length!==H.cameras.length&&(H.cameras.length=0,ze=!0);for(let A=0;A<Te.length;A++){let L=Te[A],z=null;if(f!==null)z=f.getViewport(L);else{let q=h.getViewSubImage(d,L);z=q.viewport,A===0&&(e.setRenderTargetTextures(y,q.colorTexture,q.depthStencilTexture),e.setRenderTarget(y))}let Y=U[A];Y===void 0&&(Y=new bi,Y.layers.enable(A),Y.viewport=new En,U[A]=Y),Y.matrix.fromArray(L.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(L.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(z.x,z.y,z.width,z.height),A===0&&(H.matrix.copy(Y.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ze===!0&&H.cameras.push(Y)}let Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();let A=h.getDepthInformation(Te[0]);A&&A.isValid&&A.texture&&g.init(A,s.renderState)}if(Oe&&Oe.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let A=0;A<Te.length;A++){let L=Te[A].camera;if(L){let z=m[L];z||(z=new Xu,m[L]=z);let Y=h.getCameraImage(L);z.sourceTexture=Y}}}}for(let Te=0;Te<S.length;Te++){let ze=T[Te],Oe=S[Te];ze!==null&&Oe!==void 0&&Oe.update(ze,me,c||o)}gt&&gt(re,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),p=null}let $e=new t1;$e.setAnimationLoop(ot),this.setAnimationLoop=function(re){gt=re},this.dispose=function(){}}},mL=new tn,a1=new Et;a1.set(-1,0,0,0,1,0,0,0,1);function gL(t,e){function n(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,my(t)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,x,E,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,E):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,n(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ui&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,n(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ui&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,n(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,n(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=e.get(m),E=x.envMap,y=x.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(mL.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(a1),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=E*.5,m.map&&(g.map.value=m.map,n(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ui&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let x=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function _L(t,e,n,i){let s={},r={},o=[],a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let T=S.program;i.uniformBlockBinding(y,T)}function c(y,S){let T=s[y.id];T===void 0&&(g(y),T=u(y),s[y.id]=T,y.addEventListener("dispose",x));let R=S.program;i.updateUBOMapping(y,R);let v=e.render.frame;r[y.id]!==v&&(d(y),r[y.id]=v)}function u(y){let S=h();y.__bindingPointIndex=S;let T=t.createBuffer(),R=y.__size,v=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,R,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,T),T}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let S=s[y.id],T=y.uniforms,R=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let v=0,M=T.length;v<M;v++){let w=T[v];if(Array.isArray(w))for(let F=0,U=w.length;F<U;F++)f(w[F],v,F,R);else f(w,v,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(y,S,T,R){if(_(y,S,T,R)===!0){let v=y.__offset,M=y.value;if(Array.isArray(M)){let w=0;for(let F=0;F<M.length;F++){let U=M[F],H=m(U);p(U,y.__data,w),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(w+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(M,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,y.__data)}}function p(y,S,T){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,T)}function _(y,S,T,R){let v=y.value,M=S+"_"+T;if(R[M]===void 0)return typeof v=="number"||typeof v=="boolean"?R[M]=v:ArrayBuffer.isView(v)?R[M]=v.slice():R[M]=v.clone(),!0;{let w=R[M];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return R[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function g(y){let S=y.uniforms,T=0,R=16;for(let M=0,w=S.length;M<w;M++){let F=Array.isArray(S[M])?S[M]:[S[M]];for(let U=0,H=F.length;U<H;U++){let V=F[U],k=Array.isArray(V.value)?V.value:[V.value];for(let G=0,K=k.length;G<K;G++){let te=k[G],W=m(te),Q=T%R,ae=Q%W.boundary,we=Q+ae;T+=ae,we!==0&&R-we<W.storage&&(T+=R-we),V.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=W.storage}}}let v=T%R;return v>0&&(T+=R-v),y.__size=T,y.__cache={},this}function m(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):ht("WebGLRenderer: Unsupported uniform value type.",y),S}function x(y){let S=y.target;S.removeEventListener("dispose",x);let T=o.indexOf(S.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function E(){for(let y in s)t.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}var yL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vr=null;function vL(){return vr===null&&(vr=new hp(yL,16,16,Fo,Gs),vr.name="DFG_LUT",vr.minFilter=qn,vr.magFilter=qn,vr.wrapS=bs,vr.wrapT=bs,vr.generateMipmaps=!1,vr.needsUpdate=!0),vr}var Nm=class{constructor(e={}){let{canvas:n=xM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=$i}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let _=f,g=new Set([$p,Xp,Wp]),m=new Set([$i,Hs,tc,nc,zp,Gp]),x=new Uint32Array(4),E=new Int32Array(4),y=new D,S=null,T=null,R=[],v=[],M=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ks,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,F=!1,U=null,H=null,V=null,k=null;this._outputColorSpace=kn;let G=0,K=0,te=null,W=-1,Q=null,ae=new En,we=new En,Ie=null,gt=new Ye(0),ot=0,$e=n.width,re=n.height,me=1,Te=null,ze=null,Oe=new En(0,0,$e,re),We=new En(0,0,$e,re),pt=!1,A=new Xl,L=!1,z=!1,Y=new tn,q=new D,ne=new En,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},X=!1;function ce(){return te===null?me:1}let P=i;function Ae(N,J){return n.getContext(N,J)}let pe,I,b,$,Z,ee,Se,xe,ue,fe,Pe,et,Ne,Ce,je,rt,at,j,De,ve,Le,Fe,be;try{let N={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"186"}`),n.addEventListener("webglcontextlost",Qe,!1),n.addEventListener("webglcontextrestored",ct,!1),n.addEventListener("webglcontextcreationerror",hi,!1),P===null){let J="webgl2";if(P=Ae(J,N),P===null)throw Ae(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(N){throw n.removeEventListener("webglcontextlost",Qe,!1),n.removeEventListener("webglcontextrestored",ct,!1),n.removeEventListener("webglcontextcreationerror",hi,!1),mt("WebGLRenderer: "+N.message),N}function Xe(){pe=new wD(P),pe.init(),Le=new dL(P,pe),I=new gD(P,pe,e,Le),b=new uL(P,pe),I.reversedDepthBuffer&&d&&b.buffers.depth.setReversed(!0),H=P.createFramebuffer(),V=P.createFramebuffer(),k=P.createFramebuffer(),$=new CD(P),Z=new J3,ee=new hL(P,pe,b,Z,I,Le,$),Se=new MD(w),xe=new IP(P),Fe=new pD(P,xe),ue=new AD(P,xe,$,Fe),fe=new ID(P,ue,xe,Fe,$),j=new ND(P,I,ee),je=new _D(Z),Pe=new K3(w,Se,pe,I,Fe,je),et=new gL(w,Z),Ne=new Z3,Ce=new sL(pe),at=new fD(w,Se,b,fe,p,l),rt=new cL(w,fe,I),be=new _L(P,$,I,b),De=new mD(P,pe,$),ve=new RD(P,pe,$),$.programs=Pe.programs,w.capabilities=I,w.extensions=pe,w.properties=Z,w.renderLists=Ne,w.shadowMap=rt,w.state=b,w.info=$}_!==$i&&(M=new OD(_,n.width,n.height,a,s,r));let Ze=new Vy(w,P);this.xr=Ze,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let N=pe.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=pe.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(N){N!==void 0&&(me=N,this.setSize($e,re,!1))},this.getSize=function(N){return N.set($e,re)},this.setSize=function(N,J,de=!0){if(Ze.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=N,re=J,n.width=Math.floor(N*me),n.height=Math.floor(J*me),de===!0&&(n.style.width=N+"px",n.style.height=J+"px"),M!==null&&M.setSize(n.width,n.height),this.setViewport(0,0,N,J)},this.getDrawingBufferSize=function(N){return N.set($e*me,re*me).floor()},this.setDrawingBufferSize=function(N,J,de){$e=N,re=J,me=de,n.width=Math.floor(N*de),n.height=Math.floor(J*de),this.setViewport(0,0,N,J)},this.setEffects=function(N){if(_===$i){mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let J=0;J<N.length;J++)if(N[J].isOutputPass===!0){ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(ae)},this.getViewport=function(N){return N.copy(Oe)},this.setViewport=function(N,J,de,oe){N.isVector4?Oe.set(N.x,N.y,N.z,N.w):Oe.set(N,J,de,oe),b.viewport(ae.copy(Oe).multiplyScalar(me).round())},this.getScissor=function(N){return N.copy(We)},this.setScissor=function(N,J,de,oe){N.isVector4?We.set(N.x,N.y,N.z,N.w):We.set(N,J,de,oe),b.scissor(we.copy(We).multiplyScalar(me).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(N){b.setScissorTest(pt=N)},this.setOpaqueSort=function(N){Te=N},this.setTransparentSort=function(N){ze=N},this.getClearColor=function(N){return N.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(N=!0,J=!0,de=!0){let oe=0;if(N){let le=!1;if(te!==null){let He=te.texture.format;le=g.has(He)}if(le){let He=te.texture.type,Ke=m.has(He),Be=at.getClearColor(),tt=at.getClearAlpha(),st=Be.r,Mt=Be.g,Dt=Be.b;Ke?(x[0]=st,x[1]=Mt,x[2]=Dt,x[3]=tt,P.clearBufferuiv(P.COLOR,0,x)):(E[0]=st,E[1]=Mt,E[2]=Dt,E[3]=tt,P.clearBufferiv(P.COLOR,0,E))}else oe|=P.COLOR_BUFFER_BIT}J&&(oe|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(oe|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&P.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),U=N},this.dispose=function(){n.removeEventListener("webglcontextlost",Qe,!1),n.removeEventListener("webglcontextrestored",ct,!1),n.removeEventListener("webglcontextcreationerror",hi,!1),at.dispose(),Ne.dispose(),Ce.dispose(),Z.dispose(),Se.dispose(),fe.dispose(),Fe.dispose(),be.dispose(),Pe.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",jn),Ze.removeEventListener("sessionend",Vo),qi.stop()};function Qe(N){N.preventDefault(),Uu("WebGLRenderer: Context Lost."),F=!0}function ct(){Uu("WebGLRenderer: Context Restored."),F=!1;let N=$.autoReset,J=rt.enabled,de=rt.autoUpdate,oe=rt.needsUpdate,le=rt.type;Xe(),$.autoReset=N,rt.enabled=J,rt.autoUpdate=de,rt.needsUpdate=oe,rt.type=le}function hi(N){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Ai(N){let J=N.target;J.removeEventListener("dispose",Ai),qe(J)}function qe(N){he(N),Z.remove(N)}function he(N){let J=Z.get(N).programs;J!==void 0&&(J.forEach(function(de){Pe.releaseProgram(de)}),N.isShaderMaterial&&Pe.releaseShaderCache(N))}this.renderBufferDirect=function(N,J,de,oe,le,He){J===null&&(J=se);let Ke=le.isMesh&&le.matrixWorld.determinantAffine()<0,Be=xr(N,J,de,oe,le);b.setMaterial(oe,Ke);let tt=de.index,st=1;if(oe.wireframe===!0){if(tt=ue.getWireframeAttribute(de),tt===void 0)return;st=2}let Mt=de.drawRange,Dt=de.attributes.position,nt=Mt.start*st,Gt=(Mt.start+Mt.count)*st;He!==null&&(nt=Math.max(nt,He.start*st),Gt=Math.min(Gt,(He.start+He.count)*st)),tt!==null?(nt=Math.max(nt,0),Gt=Math.min(Gt,tt.count)):Dt!=null&&(nt=Math.max(nt,0),Gt=Math.min(Gt,Dt.count));let cn=Gt-nt;if(cn<0||cn===1/0)return;Fe.setup(le,oe,Be,de,tt);let nn,jt=De;if(tt!==null&&(nn=xe.get(tt),jt=ve,jt.setIndex(nn)),le.isMesh)oe.wireframe===!0?(b.setLineWidth(oe.wireframeLinewidth*ce()),jt.setMode(P.LINES)):jt.setMode(P.TRIANGLES);else if(le.isLine){let Zn=oe.linewidth;Zn===void 0&&(Zn=1),b.setLineWidth(Zn*ce()),le.isLineSegments?jt.setMode(P.LINES):le.isLineLoop?jt.setMode(P.LINE_LOOP):jt.setMode(P.LINE_STRIP)}else le.isPoints?jt.setMode(P.POINTS):le.isSprite&&jt.setMode(P.TRIANGLES);if(le.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))jt.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{let Zn=le._multiDrawStarts,Je=le._multiDrawCounts,Qn=le._multiDrawCount,Ue=tt?xe.get(tt).bytesPerElement:1,fi=Z.get(oe).currentProgram.getUniforms();for(let Oi=0;Oi<Qn;Oi++)fi.setValue(P,"_gl_DrawID",Oi),jt.render(Zn[Oi]/Ue,Je[Oi])}else if(le.isInstancedMesh)jt.renderInstances(nt,cn,le.count);else if(de.isInstancedBufferGeometry){let Zn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Je=Math.min(de.instanceCount,Zn);jt.renderInstances(nt,cn,Je)}else jt.render(nt,cn)};function Th(N,J,de,oe){U!==null&&N.isNodeMaterial&&U.setObject(oe,N),L===!0&&je.setState(N,de,!1),N.transparent===!0&&N.side===ii&&N.forceSinglePass===!1?(N.side=ui,N.needsUpdate=!0,di(N,J,oe),N.side=Do,N.needsUpdate=!0,di(N,J,oe),N.side=ii):di(N,J,oe)}this.compile=function(N,J,de=null){de===null&&(de=N),U!==null&&U.renderStart(N,J,de),T=Ce.get(de),T.init(J),v.push(T),de.traverseVisible(function(le){le.isLight&&le.layers.test(J.layers)&&(T.pushLight(le),le.castShadow&&T.pushShadow(le))}),N!==de&&N.traverseVisible(function(le){le.isLight&&le.layers.test(J.layers)&&(T.pushLight(le),le.castShadow&&T.pushShadow(le))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),z=this.localClippingEnabled,L=je.init(this.clippingPlanes,z),L===!0&&je.setGlobalState(this.clippingPlanes,J),U!==null&&rt.render(T.state.shadowsArray,de,J);let oe=new Set;return N.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;let He=le.material;if(He)if(Array.isArray(He))for(let Ke=0;Ke<He.length;Ke++){let Be=He[Ke];Th(Be,de,J,le),oe.add(Be)}else Th(He,de,J,le),oe.add(He)}),T=v.pop(),U!==null&&U.renderEnd(),oe},this.compileAsync=function(N,J,de=null){let oe=this.compile(N,J,de);return new Promise(le=>{function He(){if(oe.forEach(function(Ke){let tt=Z.get(Ke).currentProgram;(tt===void 0||tt.isReady())&&oe.delete(Ke)}),oe.size===0){le(N);return}setTimeout(He,10)}pe.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let lc=null;function Dm(N){lc&&lc(N)}function jn(){qi.stop()}function Vo(){qi.start()}let qi=new t1;qi.setAnimationLoop(Dm),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(N){lc=N,Ze.setAnimationLoop(N),N===null?qi.stop():qi.start()},Ze.addEventListener("sessionstart",jn),Ze.addEventListener("sessionend",Vo),this.render=function(N,J){if(J!==void 0&&J.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;U!==null&&U.renderStart(N,J);let de=Ze.enabled===!0&&Ze.isPresenting===!0,oe=M!==null&&(te===null||de)&&M.begin(w,te);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(J),J=Ze.getCamera()),N.isScene===!0&&N.onBeforeRender(w,N,J,te),T=Ce.get(N,v.length),T.init(J),T.state.textureUnits=ee.getTextureUnits(),v.push(T),Y.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),A.setFromProjectionMatrix(Y,Vs,J.reversedDepth),z=this.localClippingEnabled,L=je.init(this.clippingPlanes,z),S=Ne.get(N,R.length),S.init(),R.push(S),Ze.enabled===!0&&Ze.isPresenting===!0){let Ke=w.xr.getDepthSensingMesh();Ke!==null&&as(Ke,J,-1/0,w.sortObjects)}as(N,J,0,w.sortObjects),S.finish(),U!==null&&U.updateLights(T.state.lightsArray),w.sortObjects===!0&&S.sort(Te,ze),X=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,X&&at.addToRenderList(S,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),L===!0&&je.beginShadows();let le=T.state.shadowsArray;if(rt.render(le,N,J),L===!0&&je.endShadows(),(oe&&M.hasRenderPass())===!1){let Ke=S.opaque,Be=S.transmissive;if(T.setupLights(),J.isArrayCamera){let tt=J.cameras;if(Be.length>0)for(let st=0,Mt=tt.length;st<Mt;st++){let Dt=tt[st];Mh(Ke,Be,N,Dt)}X&&at.render(N);for(let st=0,Mt=tt.length;st<Mt;st++){let Dt=tt[st];ye(S,N,Dt,Dt.viewport)}}else Be.length>0&&Mh(Ke,Be,N,J),X&&at.render(N),ye(S,N,J)}te!==null&&K===0&&(ee.updateMultisampleRenderTarget(te),ee.updateRenderTargetMipmap(te)),oe&&M.end(w),N.isScene===!0&&N.onAfterRender(w,N,J),Fe.resetDefaultState(),W=-1,Q=null,v.pop(),v.length>0?(T=v[v.length-1],ee.setTextureUnits(T.state.textureUnits),L===!0&&je.setGlobalState(w.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,U!==null&&U.renderEnd()};function as(N,J,de,oe){if(N.visible===!1)return;if(N.layers.test(J.layers)){if(N.isGroup)de=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(J);else if(N.isLightProbeGrid)T.pushLightProbeGrid(N);else if(N.isLight)T.pushLight(N),N.castShadow&&T.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||N.intersectsFrustum(A)){oe&&ne.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Y);let Ke=fe.update(N),Be=N.material;Be.visible&&S.push(N,Ke,Be,de,ne.z,null,J)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||N.intersectsFrustum(A))){let Ke=fe.update(N),Be=N.material;if(oe&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),ne.copy(N.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),ne.copy(Ke.boundingSphere.center)),ne.applyMatrix4(N.matrixWorld).applyMatrix4(Y)),Array.isArray(Be)){let tt=Ke.groups;for(let st=0,Mt=tt.length;st<Mt;st++){let Dt=tt[st],nt=Be[Dt.materialIndex];nt&&nt.visible&&S.push(N,Ke,nt,de,ne.z,Dt,J)}}else Be.visible&&S.push(N,Ke,Be,de,ne.z,null,J)}}let He=N.children;for(let Ke=0,Be=He.length;Ke<Be;Ke++)as(He[Ke],J,de,oe)}function ye(N,J,de,oe){let{opaque:le,transmissive:He,transparent:Ke}=N;T.setupLightsView(de),L===!0&&je.setGlobalState(w.clippingPlanes,de),oe&&b.viewport(ae.copy(oe)),le.length>0&&zn(le,J,de),He.length>0&&zn(He,J,de),Ke.length>0&&zn(Ke,J,de),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Mh(N,J,de,oe){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[oe.id]===void 0){let nt=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[oe.id]=new Xi(1,1,{generateMipmaps:!0,type:nt?Gs:$i,minFilter:yr,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:zt.workingColorSpace})}let He=T.state.transmissionRenderTarget[oe.id],Ke=oe.viewport||ae;He.setSize(Ke.z*w.transmissionResolutionScale,Ke.w*w.transmissionResolutionScale);let Be=w.getRenderTarget(),tt=w.getActiveCubeFace(),st=w.getActiveMipmapLevel();w.setRenderTarget(He),w.getClearColor(gt),ot=w.getClearAlpha(),ot<1&&w.setClearColor(16777215,.5),w.clear(),X&&at.render(de);let Mt=w.toneMapping;w.toneMapping=ks;let Dt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),T.setupLightsView(oe),L===!0&&je.setGlobalState(w.clippingPlanes,oe),zn(N,de,oe),ee.updateMultisampleRenderTarget(He),ee.updateRenderTargetMipmap(He),pe.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Gt=0,cn=J.length;Gt<cn;Gt++){let nn=J[Gt],{object:jt,geometry:Zn,material:Je,group:Qn}=nn;if(Je.side===ii&&jt.layers.test(oe.layers)){let Ue=Je.side;Je.side=ui,Je.needsUpdate=!0,Xs(jt,de,oe,Zn,Je,Qn),Je.side=Ue,Je.needsUpdate=!0,nt=!0}}nt===!0&&(ee.updateMultisampleRenderTarget(He),ee.updateRenderTargetMipmap(He))}w.setRenderTarget(Be,tt,st),w.setClearColor(gt,ot),Dt!==void 0&&(oe.viewport=Dt),w.toneMapping=Mt}function zn(N,J,de){let oe=J.isScene===!0?J.overrideMaterial:null;for(let le=0,He=N.length;le<He;le++){let Ke=N[le],{object:Be,geometry:tt,group:st}=Ke,Mt=Ke.material;Mt.allowOverride===!0&&oe!==null&&(Mt=oe),Be.layers.test(de.layers)&&Xs(Be,J,de,tt,Mt,st)}}function Xs(N,J,de,oe,le,He){U!==null&&le.isNodeMaterial&&U.setObject(N,le),N.onBeforeRender(w,J,de,oe,le,He),N.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),le.onBeforeRender(w,J,de,oe,N,He),le.transparent===!0&&le.side===ii&&le.forceSinglePass===!1?(le.side=ui,le.needsUpdate=!0,w.renderBufferDirect(de,J,oe,le,N,He),le.side=Do,le.needsUpdate=!0,w.renderBufferDirect(de,J,oe,le,N,He),le.side=ii):w.renderBufferDirect(de,J,oe,le,N,He),N.onAfterRender(w,J,de,oe,le,He)}function di(N,J,de){J.isScene!==!0&&(J=se);let oe=Z.get(N),le=T.state.lights,He=T.state.shadowsArray,Ke=le.state.version,Be=Pe.getParameters(N,le.state,He,J,de,T.state.lightProbeGridArray),tt=Pe.getProgramCacheKey(Be),st=oe.programs;oe.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?J.environment:null,oe.fog=J.fog;let Mt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;oe.envMap=Se.get(N.envMap||oe.environment,Mt),oe.envMapRotation=oe.environment!==null&&N.envMap===null?J.environmentRotation:N.envMapRotation,st===void 0&&(N.addEventListener("dispose",Ai),st=new Map,oe.programs=st);let Dt=st.get(tt);if(Dt!==void 0){if(oe.currentProgram===Dt&&oe.lightsStateVersion===Ke)return Bo(N,Be),Dt}else Be.uniforms=Pe.getUniforms(N),U!==null&&N.isNodeMaterial&&U.build(N,de,Be),N.onBeforeCompile(Be,w),Dt=Pe.acquireProgram(Be,tt),st.set(tt,Dt),oe.uniforms=Be.uniforms;let nt=oe.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(nt.clippingPlanes=je.uniform),Bo(N,Be),oe.needsLights=Um(N),oe.lightsStateVersion=Ke,oe.needsLights&&(nt.ambientLightColor.value=le.state.ambient,nt.lightProbe.value=le.state.probe,nt.sunLights.value=le.state.sun,nt.sunLightShadows.value=le.state.sunShadow,nt.directionalLights.value=le.state.directional,nt.directionalLightShadows.value=le.state.directionalShadow,nt.spotLights.value=le.state.spot,nt.spotLightShadows.value=le.state.spotShadow,nt.rectAreaLights.value=le.state.rectArea,nt.ltc_1.value=le.state.rectAreaLTC1,nt.ltc_2.value=le.state.rectAreaLTC2,nt.pointLights.value=le.state.point,nt.pointLightShadows.value=le.state.pointShadow,nt.hemisphereLights.value=le.state.hemi,nt.sunShadowMatrix.value=le.state.sunShadowMatrix,nt.sunShadowCascade.value=le.state.sunShadowCascade,nt.directionalShadowMatrix.value=le.state.directionalShadowMatrix,nt.spotLightMatrix.value=le.state.spotLightMatrix,nt.spotLightMap.value=le.state.spotLightMap,nt.pointShadowMatrix.value=le.state.pointShadowMatrix),oe.lightProbeGrid=T.state.lightProbeGridArray.length>0,oe.currentProgram=Dt,oe.uniformsList=null,Dt}function pn(N){if(N.uniformsList===null){let J=N.currentProgram.getUniforms();N.uniformsList=rc.seqWithValue(J.seq,N.uniforms)}return N.uniformsList}function Bo(N,J){let de=Z.get(N);de.outputColorSpace=J.outputColorSpace,de.batching=J.batching,de.batchingColor=J.batchingColor,de.instancing=J.instancing,de.instancingColor=J.instancingColor,de.instancingMorph=J.instancingMorph,de.skinning=J.skinning,de.morphTargets=J.morphTargets,de.morphNormals=J.morphNormals,de.morphColors=J.morphColors,de.morphTargetsCount=J.morphTargetsCount,de.numClippingPlanes=J.numClippingPlanes,de.numIntersection=J.numClipIntersection,de.vertexAlphas=J.vertexAlphas,de.vertexTangents=J.vertexTangents,de.toneMapping=J.toneMapping}function ko(N,J){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;y.setFromMatrixPosition(J.matrixWorld);for(let de=0,oe=N.length;de<oe;de++){let le=N[de];if(le.texture!==null&&le.boundingBox.containsPoint(y))return le}return null}function xr(N,J,de,oe,le){J.isScene!==!0&&(J=se),ee.resetTextureUnits();let He=J.fog,Ke=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?J.environment:null,Be=te===null?w.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:zt.workingColorSpace,tt=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,st=Se.get(oe.envMap||Ke,tt),Mt=oe.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,Dt=!!de.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),nt=!!de.morphAttributes.position,Gt=!!de.morphAttributes.normal,cn=!!de.morphAttributes.color,nn=ks;oe.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(nn=w.toneMapping);let jt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Zn=jt!==void 0?jt.length:0,Je=Z.get(oe),Qn=T.state.lights;if(L===!0&&(z===!0||N!==Q)){let Vt=N===Q&&oe.id===W;je.setState(oe,N,Vt)}let Ue=!1;oe.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Qn.state.version||Je.outputColorSpace!==Be||le.isBatchedMesh&&Je.batching===!1||!le.isBatchedMesh&&Je.batching===!0||le.isBatchedMesh&&Je.batchingColor===!0&&le._colorsTexture===null||le.isBatchedMesh&&Je.batchingColor===!1&&le._colorsTexture!==null||le.isInstancedMesh&&Je.instancing===!1||!le.isInstancedMesh&&Je.instancing===!0||le.isSkinnedMesh&&Je.skinning===!1||!le.isSkinnedMesh&&Je.skinning===!0||le.isInstancedMesh&&Je.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&Je.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&Je.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&Je.instancingMorph===!1&&le.morphTexture!==null||Je.envMap!==st||oe.fog===!0&&Je.fog!==He||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==je.numPlanes||Je.numIntersection!==je.numIntersection)||Je.vertexAlphas!==Mt||Je.vertexTangents!==Dt||Je.morphTargets!==nt||Je.morphNormals!==Gt||Je.morphColors!==cn||Je.toneMapping!==nn||Je.morphTargetsCount!==Zn||!!Je.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Ue=!0):(Ue=!0,Je.__version=oe.version);let fi=Je.currentProgram;Ue===!0&&(fi=di(oe,J,le),U&&oe.isNodeMaterial&&U.onUpdateProgram(oe,fi,Je));let Oi=!1,ls=!1,cs=!1,Xt=fi.getUniforms(),un=Je.uniforms;if(b.useProgram(fi.program)&&(Oi=!0,ls=!0,cs=!0),oe.id!==W&&(W=oe.id,ls=!0),Je.needsLights){let Vt=ko(T.state.lightProbeGridArray,le);Je.lightProbeGrid!==Vt&&(Je.lightProbeGrid=Vt,ls=!0)}if(Oi||Q!==N){b.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Xt.setValue(P,"projectionMatrix",N.projectionMatrix),Xt.setValue(P,"viewMatrix",N.matrixWorldInverse);let ws=Xt.map.cameraPosition;ws!==void 0&&ws.setValue(P,q.setFromMatrixPosition(N.matrixWorld)),I.logarithmicDepthBuffer&&Xt.setValue(P,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Xt.setValue(P,"isOrthographic",N.isOrthographicCamera===!0),Q!==N&&(Q=N,ls=!0,cs=!0)}if(Je.needsLights&&(Qn.state.sunShadowMap.length>0&&Xt.setValue(P,"sunShadowMap",Qn.state.sunShadowMap,ee),Qn.state.directionalShadowMap.length>0&&Xt.setValue(P,"directionalShadowMap",Qn.state.directionalShadowMap,ee),Qn.state.spotShadowMap.length>0&&Xt.setValue(P,"spotShadowMap",Qn.state.spotShadowMap,ee),Qn.state.pointShadowMap.length>0&&Xt.setValue(P,"pointShadowMap",Qn.state.pointShadowMap,ee)),le.isSkinnedMesh){Xt.setOptional(P,le,"bindMatrix"),Xt.setOptional(P,le,"bindMatrixInverse");let Vt=le.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Xt.setValue(P,"boneTexture",Vt.boneTexture,ee))}le.isBatchedMesh&&(Xt.setOptional(P,le,"batchingTexture"),Xt.setValue(P,"batchingTexture",le._matricesTexture,ee),Xt.setOptional(P,le,"batchingIdTexture"),Xt.setValue(P,"batchingIdTexture",le._indirectTexture,ee),Xt.setOptional(P,le,"batchingColorTexture"),le._colorsTexture!==null&&Xt.setValue(P,"batchingColorTexture",le._colorsTexture,ee));let us=de.morphAttributes;if((us.position!==void 0||us.normal!==void 0||us.color!==void 0)&&j.update(le,de,fi),(ls||Je.receiveShadow!==le.receiveShadow)&&(Je.receiveShadow=le.receiveShadow,Xt.setValue(P,"receiveShadow",le.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&J.environment!==null&&(un.envMapIntensity.value=J.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=vL()),ls){if(Xt.setValue(P,"toneMappingExposure",w.toneMappingExposure),Je.needsLights&&Lm(un,cs),He&&oe.fog===!0&&et.refreshFogUniforms(un,He),et.refreshMaterialUniforms(un,oe,me,re,T.state.transmissionRenderTarget[N.id]),Je.needsLights&&Je.lightProbeGrid){let Vt=Je.lightProbeGrid;un.probesSH.value=Vt.texture,un.probesMin.value.copy(Vt.boundingBox.min),un.probesMax.value.copy(Vt.boundingBox.max),un.probesResolution.value.copy(Vt.resolution)}rc.upload(P,pn(Je),un,ee)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(rc.upload(P,pn(Je),un,ee),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Xt.setValue(P,"center",le.center),Xt.setValue(P,"modelViewMatrix",le.modelViewMatrix),Xt.setValue(P,"normalMatrix",le.normalMatrix),Xt.setValue(P,"modelMatrix",le.matrixWorld),oe.uniformsGroups!==void 0){let Vt=oe.uniformsGroups;for(let ws=0,$s=Vt.length;ws<$s;ws++){let cc=Vt[ws];be.update(cc,fi),be.bind(cc,fi)}}return fi}function Lm(N,J){N.ambientLightColor.needsUpdate=J,N.lightProbe.needsUpdate=J,N.sunLights.needsUpdate=J,N.sunLightShadows.needsUpdate=J,N.directionalLights.needsUpdate=J,N.directionalLightShadows.needsUpdate=J,N.pointLights.needsUpdate=J,N.pointLightShadows.needsUpdate=J,N.spotLights.needsUpdate=J,N.spotLightShadows.needsUpdate=J,N.rectAreaLights.needsUpdate=J,N.hemisphereLights.needsUpdate=J}function Um(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(N,J,de){let oe=Z.get(N);oe.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),Z.get(N.texture).__webglTexture=J,Z.get(N.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:de,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,J){let de=Z.get(N);de.__webglFramebuffer=J,de.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(N,J=0,de=0){te=N,G=J,K=de;let oe=null,le=!1,He=!1;if(N){let Be=Z.get(N);if(Be.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(P.FRAMEBUFFER,Be.__webglFramebuffer),ae.copy(N.viewport),we.copy(N.scissor),Ie=N.scissorTest,b.viewport(ae),b.scissor(we),b.setScissorTest(Ie),W=-1;return}else if(Be.__webglFramebuffer===void 0)ee.setupRenderTarget(N);else if(Be.__hasExternalTextures)ee.rebindTextures(N,Z.get(N.texture).__webglTexture,Z.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let Mt=N.depthTexture;if(Be.__boundDepthTexture!==Mt){if(Mt!==null&&Z.has(Mt)&&(N.width!==Mt.image.width||N.height!==Mt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(N)}}let tt=N.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(He=!0);let st=Z.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(st[J])?oe=st[J][de]:oe=st[J],le=!0):N.samples>0&&ee.useMultisampledRTT(N)===!1?oe=Z.get(N).__webglMultisampledFramebuffer:Array.isArray(st)?oe=st[de]:oe=st,ae.copy(N.viewport),we.copy(N.scissor),Ie=N.scissorTest}else ae.copy(Oe).multiplyScalar(me).floor(),we.copy(We).multiplyScalar(me).floor(),Ie=pt;if(de!==0&&(oe=H),b.bindFramebuffer(P.FRAMEBUFFER,oe)&&b.drawBuffers(N,oe),b.viewport(ae),b.scissor(we),b.setScissorTest(Ie),le){let Be=Z.get(N.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+J,Be.__webglTexture,de)}else if(He){let Be=J;for(let tt=0;tt<N.textures.length;tt++){let st=Z.get(N.textures[tt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+tt,st.__webglTexture,de,Be)}}else if(N!==null&&de!==0){let Be=Z.get(N.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Be.__webglTexture,de)}W=-1};function wh(N){let J=Z.get(N);return(J.__readFormat!==N.format||J.__readType!==N.type)&&(J.__readFormat=N.format,J.__readType=N.type,J.__formatReadable=I.textureFormatReadable(N.format),J.__typeReadable=I.textureTypeReadable(N.type)),J}this.readRenderTargetPixels=function(N,J,de,oe,le,He,Ke,Be=0){if(!(N&&N.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=Z.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ke!==void 0&&(tt=tt[Ke]),tt){b.bindFramebuffer(P.FRAMEBUFFER,tt);try{let st=N.textures[Be],Mt=st.format,Dt=st.type;N.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Be);let nt=wh(st);if(nt.__formatReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(nt.__typeReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=N.width-oe&&de>=0&&de<=N.height-le&&P.readPixels(J,de,oe,le,Le.convert(Mt),Le.convert(Dt),He)}finally{let st=te!==null?Z.get(te).__webglFramebuffer:null;b.bindFramebuffer(P.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(N,J,de,oe,le,He,Ke,Be=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=Z.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ke!==void 0&&(tt=tt[Ke]),tt)if(J>=0&&J<=N.width-oe&&de>=0&&de<=N.height-le){b.bindFramebuffer(P.FRAMEBUFFER,tt);let st=N.textures[Be],Mt=st.format,Dt=st.type;N.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Be);let nt=wh(st);if(nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Gt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Gt),P.bufferData(P.PIXEL_PACK_BUFFER,He.byteLength,P.STREAM_READ),P.readPixels(J,de,oe,le,Le.convert(Mt),Le.convert(Dt),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let cn=te!==null?Z.get(te).__webglFramebuffer:null;b.bindFramebuffer(P.FRAMEBUFFER,cn);let nn=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await bM(P,nn,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Gt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,He),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(Gt),P.deleteSync(nn),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,J=null,de=0){let oe=Math.pow(2,-de),le=Math.floor(N.image.width*oe),He=Math.floor(N.image.height*oe),Ke=J!==null?J.x:0,Be=J!==null?J.y:0;ee.setTexture2D(N,0),P.copyTexSubImage2D(P.TEXTURE_2D,de,0,0,Ke,Be,le,He),b.unbindTexture()},this.copyTextureToTexture=function(N,J,de=null,oe=null,le=0,He=0){let Ke,Be,tt,st,Mt,Dt,nt,Gt,cn,nn=N.isCompressedTexture?N.mipmaps[He]:N.image;if(de!==null)Ke=de.max.x-de.min.x,Be=de.max.y-de.min.y,tt=de.isBox3?de.max.z-de.min.z:1,st=de.min.x,Mt=de.min.y,Dt=de.isBox3?de.min.z:0;else{let un=Math.pow(2,-le);Ke=Math.floor(nn.width*un),Be=Math.floor(nn.height*un),N.isDataArrayTexture?tt=nn.depth:N.isData3DTexture?tt=Math.floor(nn.depth*un):tt=1,st=0,Mt=0,Dt=0}oe!==null?(nt=oe.x,Gt=oe.y,cn=oe.z):(nt=0,Gt=0,cn=0);let jt=Le.convert(J.format),Zn=Le.convert(J.type),Je;J.isData3DTexture?(ee.setTexture3D(J,0),Je=P.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(ee.setTexture2DArray(J,0),Je=P.TEXTURE_2D_ARRAY):(ee.setTexture2D(J,0),Je=P.TEXTURE_2D),b.activeTexture(P.TEXTURE0),b.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,J.flipY),b.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),b.pixelStorei(P.UNPACK_ALIGNMENT,J.unpackAlignment);let Qn=b.getParameter(P.UNPACK_ROW_LENGTH),Ue=b.getParameter(P.UNPACK_IMAGE_HEIGHT),fi=b.getParameter(P.UNPACK_SKIP_PIXELS),Oi=b.getParameter(P.UNPACK_SKIP_ROWS),ls=b.getParameter(P.UNPACK_SKIP_IMAGES);b.pixelStorei(P.UNPACK_ROW_LENGTH,nn.width),b.pixelStorei(P.UNPACK_IMAGE_HEIGHT,nn.height),b.pixelStorei(P.UNPACK_SKIP_PIXELS,st),b.pixelStorei(P.UNPACK_SKIP_ROWS,Mt),b.pixelStorei(P.UNPACK_SKIP_IMAGES,Dt);let cs=N.isDataArrayTexture||N.isData3DTexture,Xt=J.isDataArrayTexture||J.isData3DTexture;if(N.isDepthTexture){let un=Z.get(N),us=Z.get(J),Vt=Z.get(un.__renderTarget),ws=Z.get(us.__renderTarget);b.bindFramebuffer(P.READ_FRAMEBUFFER,Vt.__webglFramebuffer),b.bindFramebuffer(P.DRAW_FRAMEBUFFER,ws.__webglFramebuffer);for(let $s=0;$s<tt;$s++)cs&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Z.get(N).__webglTexture,le,Dt+$s),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Z.get(J).__webglTexture,He,cn+$s)),P.blitFramebuffer(st,Mt,Ke,Be,nt,Gt,Ke,Be,P.DEPTH_BUFFER_BIT,P.NEAREST);b.bindFramebuffer(P.READ_FRAMEBUFFER,null),b.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(le!==0||N.isRenderTargetTexture||Z.has(N)){let un=Z.get(N),us=Z.get(J);b.bindFramebuffer(P.READ_FRAMEBUFFER,V),b.bindFramebuffer(P.DRAW_FRAMEBUFFER,k);for(let Vt=0;Vt<tt;Vt++)cs?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,un.__webglTexture,le,Dt+Vt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,un.__webglTexture,le),Xt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,us.__webglTexture,He,cn+Vt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,us.__webglTexture,He),le!==0?P.blitFramebuffer(st,Mt,Ke,Be,nt,Gt,Ke,Be,P.COLOR_BUFFER_BIT,P.NEAREST):Xt?P.copyTexSubImage3D(Je,He,nt,Gt,cn+Vt,st,Mt,Ke,Be):P.copyTexSubImage2D(Je,He,nt,Gt,st,Mt,Ke,Be);b.bindFramebuffer(P.READ_FRAMEBUFFER,null),b.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Xt?N.isDataTexture||N.isData3DTexture?P.texSubImage3D(Je,He,nt,Gt,cn,Ke,Be,tt,jt,Zn,nn.data):J.isCompressedArrayTexture?P.compressedTexSubImage3D(Je,He,nt,Gt,cn,Ke,Be,tt,jt,nn.data):P.texSubImage3D(Je,He,nt,Gt,cn,Ke,Be,tt,jt,Zn,nn):N.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,He,nt,Gt,Ke,Be,jt,Zn,nn.data):N.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,He,nt,Gt,nn.width,nn.height,jt,nn.data):P.texSubImage2D(P.TEXTURE_2D,He,nt,Gt,Ke,Be,jt,Zn,nn);b.pixelStorei(P.UNPACK_ROW_LENGTH,Qn),b.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ue),b.pixelStorei(P.UNPACK_SKIP_PIXELS,fi),b.pixelStorei(P.UNPACK_SKIP_ROWS,Oi),b.pixelStorei(P.UNPACK_SKIP_IMAGES,ls),He===0&&J.generateMipmaps&&P.generateMipmap(Je),b.unbindTexture()},this.initRenderTarget=function(N){Z.get(N).__webglFramebuffer===void 0&&ee.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?ee.setTextureCube(N,0):N.isData3DTexture?ee.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ee.setTexture2DArray(N,0):ee.setTexture2D(N,0),b.unbindTexture()},this.resetState=function(){G=0,K=0,te=null,b.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=zt._getDrawingBufferColorSpace(e),n.unpackColorSpace=zt._getUnpackColorSpace()}};var l1="./assets/moon-lroc-color-1536.webp";var c1="./assets/moon-lola-elevation-1k.webp";var Oa=3.28,u1=6,bL=new D(0,-1.8,-18),ac={spa:{focusLat:-53,focusLon:-169,status:"South Pole\u2013Aitken basin stable",instrumentHint:"basin-scale impact structure",earthVisibility:.08},"von-karman":{focusLat:-44.8,focusLon:175.9,status:"Chang'e-4 landing region catalog",instrumentHint:"regolith and rover traverse",earthVisibility:.02},apollo:{focusLat:-35.7,focusLon:-151.3,status:"Apollo basin sample-return window",instrumentHint:"basin fill and return window",earthVisibility:.03},moscoviense:{focusLat:27.3,focusLon:147.9,status:"Mare Moscoviense boundary",instrumentHint:"mare basalt and highland boundary",earthVisibility:.12}},By={spa:[{id:0,name:"South Pole\u2013Aitken",lat:-53,lon:-169,color:14209989},{id:1,name:"Apollo",lat:-35.7,lon:-151.3,color:12960183},{id:2,name:"Von K\xE1rm\xE1n",lat:-44.8,lon:175.9,color:15783840},{id:3,name:"Finsen",lat:-42,lon:-177.7,color:12044759},{id:4,name:"Alder",lat:-48.6,lon:-177.4,color:12171184},{id:5,name:"Bose",lat:-53.5,lon:-169.8,color:10406864},{id:6,name:"Bhabha",lat:-55.5,lon:-165.5,color:13743818},{id:7,name:"Stoney",lat:-55.6,lon:-156.4,color:14208940},{id:8,name:"Leibnitz",lat:-38.3,lon:179.2,color:12043217},{id:9,name:"Ingenii",lat:-33.7,lon:163.5,color:10204612}],"von-karman":[{id:0,name:"Chang'e-4",lat:-45.5,lon:177.6,color:15255672},{id:1,name:"Yutu-2",lat:-45.44,lon:177.56,color:16742981},{id:2,name:"Von K\xE1rm\xE1n",lat:-44.8,lon:175.9,color:14209989},{id:3,name:"Finsen",lat:-42,lon:-177.7,color:12044759},{id:4,name:"Alder",lat:-48.6,lon:-177.4,color:12171184},{id:5,name:"Bose",lat:-53.5,lon:-169.8,color:10406864},{id:6,name:"Bhabha",lat:-55.5,lon:-165.5,color:13743818},{id:7,name:"Stoney",lat:-55.6,lon:-156.4,color:14208940},{id:8,name:"Leibnitz",lat:-38.3,lon:179.2,color:12043217},{id:9,name:"Apollo",lat:-35.7,lon:-151.3,color:12960183}],apollo:[{id:0,name:"Chang'e-6",lat:-41.64,lon:-153.99,color:16742981},{id:1,name:"Apollo",lat:-35.7,lon:-151.3,color:14209989},{id:2,name:"Von K\xE1rm\xE1n",lat:-44.8,lon:175.9,color:13223097},{id:3,name:"Finsen",lat:-42,lon:-177.7,color:12044759},{id:4,name:"Alder",lat:-48.6,lon:-177.4,color:12171184},{id:5,name:"Bose",lat:-53.5,lon:-169.8,color:10406864},{id:6,name:"Bhabha",lat:-55.5,lon:-165.5,color:13743818},{id:7,name:"Stoney",lat:-55.6,lon:-156.4,color:14208940},{id:8,name:"Leibnitz",lat:-38.3,lon:179.2,color:12043217},{id:9,name:"South Pole\u2013Aitken",lat:-53,lon:-169,color:12044740}],moscoviense:[{id:0,name:"Mare Moscoviense",lat:27.3,lon:147.9,color:7903653},{id:1,name:"Komarov",lat:24.7,lon:152.5,color:13157819},{id:2,name:"Bolyai",lat:33.6,lon:126.1,color:12174544},{id:3,name:"Krasnov",lat:29.7,lon:156.1,color:13944488},{id:4,name:"Tsiolkovskiy",lat:-20.4,lon:129.1,color:9874098},{id:5,name:"Hertzsprung",lat:1.4,lon:-128.9,color:11712175},{id:6,name:"Korolev",lat:-4.9,lon:-157.4,color:10860485},{id:7,name:"Freundlich\u2013Sharonov",lat:18.7,lon:175.4,color:12370103},{id:8,name:"Mendeleev",lat:5.7,lon:140.9,color:12894129},{id:9,name:"Gagarin",lat:-19.7,lon:149.2,color:12108488}]},fn={lroc:{short:"LROC",distanceScale:1,fov:37,exposure:.98,color:new Ye(16777215),emissive:new Ye(1512978),emissiveIntensity:.2,fill:new Ye(2964290),rim:new Ye(8181969),accent:new Ye(14209989)},diviner:{short:"DIVINER",distanceScale:.98,fov:39,exposure:1.08,color:new Ye(16762011),emissive:new Ye(2492418),emissiveIntensity:.26,fill:new Ye(5975844),rim:new Ye(16751186),accent:new Ye(16751186)},minirf:{short:"MINI-RF",distanceScale:.9,fov:35,exposure:1.12,color:new Ye(12120561),emissive:new Ye(6948),emissiveIntensity:.3,fill:new Ye(1522758),rim:new Ye(6479846),accent:new Ye(8181969)},lfs:{short:"LFS",distanceScale:1.04,fov:41,exposure:1.05,color:new Ye(14218674),emissive:new Ye(727043),emissiveIntensity:.34,fill:new Ye(2702623),rim:new Ye(13232260),accent:new Ye(13232260)}};function vt(t,e,n){return Math.min(n,Math.max(e,t))}function TL(t){return t-Math.floor(t)}function h1(t,e){return TL(Math.sin(t*127.1+e*311.7)*43758.5453123)}function ML(t){let e=t>>>0;return function(){e+=1831565813;let i=e;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function Da(t,e,n=1){let i=ln.degToRad(t),s=ln.degToRad(e-180),r=Math.cos(i);return new D(n*r*Math.sin(s),n*Math.sin(i),n*r*Math.cos(s))}function wL(){let t=document.createElement("canvas");t.width=128,t.height=128;let e=t.getContext("2d"),n=e.createRadialGradient(64,64,0,64,64,62);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.2,"rgba(255,255,255,0.9)"),n.addColorStop(.52,"rgba(255,255,255,0.3)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,128,128);let i=new Ao(t);return i.colorSpace=kn,i}function Om(t,e="#f3f0e8",n=1){let i=document.createElement("canvas");i.width=512,i.height=128;let s=i.getContext("2d");s.clearRect(0,0,512,128),s.font="700 30px 'Aptos', 'Segoe UI', sans-serif",s.textAlign="center",s.textBaseline="middle";let r=new Ye(e),o=r.r+r.g+r.b<.42;s.lineWidth=6,s.strokeStyle=o?"rgba(236,248,255,0.9)":"rgba(0,0,0,0.86)",s.shadowColor=o?"rgba(150,220,255,0.65)":"rgba(0,0,0,0.9)",s.shadowBlur=10,s.strokeText(t,256,65),s.fillStyle=e,s.shadowBlur=3,s.fillText(t,256,65);let a=new Ao(i);a.colorSpace=kn;let l=new mr({map:a,transparent:!0,depthTest:!0,depthWrite:!1,opacity:.92}),c=new jr(l);return c.scale.set(.78*n,.195*n,1),c.renderOrder=30,c}function AL(){let t=document.createElement("canvas");t.width=64,t.height=32;let e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,32);n.addColorStop(0,"#4b4a46"),n.addColorStop(.5,"#77736b"),n.addColorStop(1,"#343431"),e.fillStyle=n,e.fillRect(0,0,64,32);let i=new Ao(t);return i.colorSpace=kn,i}function RL(){let t=AL();return{color:t,bump:t,colorLoaded:!1,bumpLoaded:!1}}function CL(t,e,n=()=>{}){let i=Math.min(8,e.capabilities.getMaxAnisotropy()),s=0;n({type:"started",texture:null,loaded:0,total:2,progress:0});function r(l,c=!1){l.wrapS=Vl,l.wrapT=bs,l.anisotropy=i,l.minFilter=yr,l.magFilter=qn,l.generateMipmaps=!0,l.colorSpace=c?kn:Ws}function o(l,c){s+=1,n({type:l,texture:c,loaded:s,total:2,progress:s/2})}function a(l,c,u){let h=new Image,d=new ci;h.decoding="async",h.onload=()=>{d.image=h,r(d,c),d.needsUpdate=!0,c?(t.color=d,t.colorLoaded=!0):(t.bump=d,t.bumpLoaded=!0),o(u,d)},h.onerror=()=>o(`${u}-error`,null),h.src=new URL(l,document.baseURI).href}a(l1,!0,"color"),a(c1,!1,"bump")}function d1(t,e={}){let n=performance.now(),{onTelemetry:i=()=>{},onState:s=()=>{},onCritical:r=()=>{},onPulse:o=()=>{},onMission:a=()=>{},onSurvey:l=()=>{},onPointer:c=()=>{},onLanding:u=()=>{},onRover:h=()=>{},onLoading:d=()=>{}}=e,p=!new URLSearchParams(window.location.search).has("full-motion")&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,_=new Me,g=new ch,m=new uh,x=new D,E=new D,y=new D(0,0,1),S=new D(0,0,0),T;try{T=new Nm({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{throw document.body.classList.add("no-webgl"),new Error("WebGL renderer could not be created.")}let R=()=>window.innerWidth,v=()=>window.innerHeight;T.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),T.setSize(R(),v()),T.outputColorSpace=kn,T.toneMapping=dh,T.toneMappingExposure=fn.lroc.exposure,T.setClearColor(329222,1);let M=new Bu;M.background=new Ye(329222),M.fog=new Vu(329222,.012);let w=new bi(38,R()/v(),.1,100);w.position.set(0,.8,10.6);let F=R()<760?700:1300,U=new Float32Array(F*3),H=new Float32Array(F*3),V=ML(904),k=new Ye;for(let C=0;C<F;C+=1){let O=18+Math.pow(V(),.68)*44,B=V()*Math.PI*2,ie=Math.acos(2*V()-1),ge=C*3;U[ge]=O*Math.sin(ie)*Math.cos(B),U[ge+1]=O*Math.cos(ie),U[ge+2]=O*Math.sin(ie)*Math.sin(B);let _e=V();k.setHSL(_e>.82?.095:_e<.24?.56:.11,_e>.82?.28:_e<.24?.4:.05,.58+V()*.33),H[ge]=k.r,H[ge+1]=k.g,H[ge+2]=k.b}let G=new kt;G.setAttribute("position",new Ti(U,3)),G.setAttribute("color",new Ti(H,3));let K=new $l({size:R()<760?.055:.07,vertexColors:!0,transparent:!0,opacity:.76,depthWrite:!1,blending:Pn}),te=new Gu(G,K);M.add(te);let W=new Wt,Q=new Wt,ae=new Wt;W.add(Q),Q.add(ae),M.add(W);let we=new Zl(16773849,3.2);we.position.set(9,7,14),M.add(we);let Ie=new lh(16775920,.42);M.add(Ie);let gt=new Zl(8181969,1.4);gt.position.set(-8,-2,-5),M.add(gt);let ot=new oh(2964290,1118221,.85);M.add(ot);let $e=RL(),re=new Mi({map:$e.color,bumpMap:$e.bump,bumpScale:.055,color:16777215,emissive:fn.lroc.emissive,emissiveIntensity:fn.lroc.emissiveIntensity,emissiveMap:$e.color,roughness:.98,metalness:.01,envMapIntensity:.18}),me=R()<760?96:128,Te=R()<760?64:80,ze=new Re(new Hn(Oa,me,Te),re);ze.rotation.y=-Math.PI/2,ae.add(ze),CL($e,T,C=>{C.type==="color"?(re.map=$e.color,re.emissiveMap=$e.color):C.type==="bump"&&(re.bumpMap=$e.bump,re.bumpScale=.055),re.needsUpdate=!0,C.progress>=1&&(ky=Math.round(performance.now()-n)),d(C)});let Oe=new Re(new Hn(Oa*1.006,96,64),new In({color:9217698,transparent:!0,opacity:.035,side:ui,blending:Pn,depthWrite:!1}));ae.add(Oe);let We=new Re(new Hn(Oa*1.009,48,32),new In({color:13232260,wireframe:!0,transparent:!0,opacity:.025,depthWrite:!1}));ae.add(We);let pt=wL(),A=new Wt;A.position.copy(bL);let L=new Re(new Hn(.44,36,24),new In({color:8300239}));A.add(L);let z=new Re(new Hn(.56,36,24),new In({color:8181969,transparent:!0,opacity:.16,blending:Pn,depthWrite:!1}));A.add(z);let Y=new jr(new mr({map:pt,color:9619685,transparent:!0,opacity:.62,depthWrite:!1,blending:Pn}));Y.scale.set(3,3,1),A.add(Y),M.add(A);let q=new Wt;ae.add(q);let ne=new Wt;q.add(ne);let se=[],X=[],ce=[],P=new Map,Ae=0,pe="spa";function I(C=pe){return P.has(C)||P.set(C,new Set),P.get(C)}function b(){se.splice(0).forEach(C=>{q.remove(C.root),C.root.traverse(O=>{O.geometry&&O.geometry.dispose(),O.material&&(O.material.map&&O.material.map.dispose(),O.material.dispose())})}),X.splice(0)}function $(C){b();let O=By[C]||By.spa,B=new D(0,0,1);O.forEach((ie,ge)=>{let _e=new Wt,Ee=I(C).has(ie.id),ke=328965,it=Da(ie.lat,ie.lon,Oa*1.025);_e.position.copy(it),_e.quaternion.setFromUnitVectors(B,it.clone().normalize());let lt=new In({color:ke,transparent:!0,opacity:.42,side:ii,depthWrite:!1}),dt=new Re(new Ra(.042,.052,48),lt);_e.add(dt);let Nt=new Re(new Hn(.021,16,10),new In({color:ke,transparent:!0,opacity:.72,depthWrite:!1}));_e.add(Nt);let It=new jr(new mr({map:pt,color:13627391,transparent:!0,opacity:.42,depthWrite:!1,blending:Pn}));It.scale.set(.16,.16,1),_e.add(It);let On=new Ts(new kt().setFromPoints([new D(0,0,.06),new D(0,0,.28)]),new is({color:ke,transparent:!0,opacity:.42}));_e.add(On);let sn=new ba(new kt().setFromPoints([new D(-.035,0,.28),new D(0,0,.28),new D(0,0,.28),new D(.035,0,.28),new D(0,-.03,.28),new D(0,.03,.28)]),new is({color:ke,transparent:!0,opacity:.42}));_e.add(sn);let Di=.105,qs=.03,Zr=new ba(new kt().setFromPoints([new D(-Di,0,0),new D(-qs,0,0),new D(qs,0,0),new D(Di,0,0),new D(0,-Di,0),new D(0,-qs,0),new D(0,qs,0),new D(0,Di,0)]),new is({color:ke,transparent:!0,opacity:0}));_e.add(Zr);let Nh=`#${new Ye(ke).getHexString()}`,Ho=Om(ie.name,Nh,.68);Ho.position.set(0,0,.4),Ho.material.opacity=ge===0?.9:.46,_e.add(Ho);let As=new Re(new Hn(.17,12,10),new In({transparent:!0,opacity:0,depthWrite:!1}));As.userData.featureIndex=ge,As.userData.feature=ie,_e.add(As),X.push(As);let Ih={root:_e,ring:dt,dot:Nt,glow:It,line:On,tick:sn,reticle:Zr,label:Ho,hitProxy:As,feature:ie,index:ge,pulse:0,surveyed:Ee};se.push(Ih),q.add(_e)})}let Z=new Wt;W.add(Z);let ee=[],Se=[];function xe(C,O,B,ie){let ge=O.clone().sub(C),_e=ge.length(),Ee=new Re(new xn(B,B,_e,10),ie);return Ee.position.copy(C).add(O).multiplyScalar(.5),Ee.quaternion.setFromUnitVectors(new D(0,1,0),ge.normalize()),Ee}function ue(C,O=.34,B=.18){let ie=new Wt,ge=new Re(new Ft(O,.016,B),C.solar);ie.add(ge);let _e=new ba(new $u(ge.geometry),new is({color:C.solar.color,transparent:!0,opacity:.72}));ie.add(_e);for(let Ee=-2;Ee<=2;Ee+=1){let ke=new Re(new Ft(.008,.02,B*.94),C.dark);ke.position.x=Ee/2.5*O,ie.add(ke)}return ie}function fe(C,O,B){let ie=new Wt,ge=new Re(new Ma(C,O,32,1,!0),B.dish);ge.rotation.x=Math.PI/2,ie.add(ge);let _e=new Re(new Hn(C*.09,12,8),B.gold);_e.position.z=O*.48,ie.add(_e);let Ee=new Re(new gr(C,Math.max(.004,C*.04),8,40),B.dish);Ee.position.z=O*.5,ie.add(Ee);for(let ke=0;ke<3;ke+=1){let it=ke/3*Math.PI*2,lt=new D(Math.cos(it)*C*.82,Math.sin(it)*C*.82,O*.36),dt=new D(0,0,O*.48);ie.add(xe(lt,dt,C*.018,B.metal))}return ie}function Pe(C){let O=document.createElement("canvas");O.width=256,O.height=128;let B=O.getContext("2d"),ie=new Ye(C),ge=B.createLinearGradient(0,0,0,128);ge.addColorStop(0,`#${ie.clone().offsetHSL(0,.08,.14).getHexString()}`),ge.addColorStop(.5,`#${ie.getHexString()}`),ge.addColorStop(1,`#${ie.clone().offsetHSL(0,.05,-.12).getHexString()}`),B.fillStyle=ge,B.fillRect(0,0,256,128),B.strokeStyle="rgba(3,10,18,0.82)",B.lineWidth=2;for(let Ee=0;Ee<=256;Ee+=16)B.beginPath(),B.moveTo(Ee,0),B.lineTo(Ee,128),B.stroke();for(let Ee=0;Ee<=128;Ee+=16)B.beginPath(),B.moveTo(0,Ee),B.lineTo(256,Ee),B.stroke();B.strokeStyle="rgba(220,235,244,0.34)",B.strokeRect(1,1,254,126);let _e=new Ao(O);return _e.colorSpace=kn,_e.anisotropy=4,_e}function et(C){let O=Pe(C.solarColor);return{metal:new Co({color:14211282,roughness:.34,metalness:.84,clearcoat:.18,clearcoatRoughness:.3,envMapIntensity:.9}),dark:new Mi({color:2106406,roughness:.52,metalness:.58}),gold:new Co({color:12884549,emissive:2364416,emissiveIntensity:.18,roughness:.34,metalness:.72,clearcoat:.1,envMapIntensity:.7}),solar:new Co({map:O,emissive:C.color,emissiveIntensity:.08,roughness:.34,metalness:.48,clearcoat:.28,clearcoatRoughness:.18,envMapIntensity:.85}),dish:new Mi({color:C.dishColor,side:ii,roughness:.28,metalness:.7,envMapIntensity:.8}),steel:new Co({color:13160146,roughness:.22,metalness:.92,clearcoat:.18,clearcoatRoughness:.22,envMapIntensity:1}),heat:new Mi({color:1316376,side:ii,roughness:.7,metalness:.12})}}function Ne(C){let O=new Wt,B=new Re(new Ft(.2,.12,.24),C.gold);O.add(B);let ie=new Re(new Ft(.18,.025,.22),C.metal);ie.position.y=.072,O.add(ie);for(let ke of[-.42,.42]){let it=ue(C,.42,.22);it.position.x=ke,O.add(it),O.add(xe(new D(Math.sign(ke)*.1,0,0),new D(ke-Math.sign(ke)*.2,0,0),.011,C.metal))}let ge=fe(.125,.075,C);ge.position.set(0,-.05,.18),O.add(ge);let _e=new Re(new xn(.012,.012,.3,10),C.metal);_e.position.set(.13,-.09,-.1),_e.rotation.z=.7,O.add(_e);let Ee=new Re(new Ft(.08,.05,.08),C.metal);return Ee.position.set(-.14,0,-.1),O.add(Ee),O}function Ce(C){let O=new Wt,B=new Re(new Ft(.26,.18,.22),C.gold);O.add(B);let ie=new Re(new Ft(.21,.03,.18),C.metal);ie.position.y=.105,O.add(ie);for(let ke of[-.46,.46]){let it=ue(C,.5,.25);it.position.x=ke,O.add(it),O.add(xe(new D(Math.sign(ke)*.13,0,0),new D(ke-Math.sign(ke)*.24,0,0),.012,C.metal))}let ge=fe(.29,.13,C);ge.position.set(0,0,.24),O.add(ge);let _e=fe(.12,.06,C);_e.position.set(.16,-.13,-.14),_e.rotation.x=-.55,O.add(_e);let Ee=new Re(new xn(.012,.012,.28,10),C.metal);return Ee.position.set(-.15,.13,0),Ee.rotation.z=.72,O.add(Ee),O}function je(C){let O=new Wt,B=new Re(new Ft(.16,.11,.19),C.metal);O.add(B);let ie=new Re(new Ft(.12,.014,.16),C.gold);ie.position.y=.065,O.add(ie);for(let Ee of[-.31,.31]){let ke=ue(C,.34,.18);ke.position.x=Ee,O.add(ke),O.add(xe(new D(Math.sign(Ee)*.08,0,0),new D(Ee-Math.sign(Ee)*.16,0,0),.009,C.metal))}let ge=fe(.105,.06,C);ge.position.set(0,0,.15),O.add(ge);let _e=new Re(new xn(.035,.05,.1,16,1,!0),C.dark);return _e.position.z=-.13,_e.rotation.x=Math.PI/2,O.add(_e),O}function rt(C){let O=new Wt,B=new Re(new xn(.075,.075,.46,24),C.gold);B.rotation.x=Math.PI/2,O.add(B);let ie=new Re(new Hn(.1,24,16),C.metal);ie.position.z=.24,O.add(ie);for(let Nt of[-1,1]){let It=new Re(new xn(.065,.065,.34,20),C.metal);It.rotation.z=Math.PI/2,It.position.x=Nt*.23,O.add(It);let On=new Re(new gr(.072,.012,8,28),C.gold);On.rotation.y=Math.PI/2,On.position.x=Nt*.42,O.add(On);for(let sn of[-.12,.12]){let Di=ue(C,.4,.2);Di.position.set(Nt*.43,sn,-.02),Di.rotation.x=sn>0?-.18:.18,O.add(Di)}}let ge=new Re(new gr(.073,.012,8,28),C.gold);ge.position.z=-.24,O.add(ge);let _e=new Re(new Ft(.24,.012,.12),C.dish);_e.position.set(0,-.11,-.03),O.add(_e);let Ee=new D(-.1,.1,.08),ke=new D(-.22,.22,.18),it=new D(-.12,.31,.31);O.add(xe(Ee,ke,.012,C.metal)),O.add(xe(ke,it,.01,C.metal));let lt=new Re(new Hn(.025,12,8),C.gold);lt.position.copy(ke),O.add(lt);let dt=fe(.085,.045,C);return dt.position.set(.1,-.1,.22),dt.rotation.x=-.25,O.add(dt),O}function at(C){let O=new Wt,B=new Re(new xn(.082,.09,.44,28),C.steel);B.rotation.x=Math.PI/2,B.position.z=-.38,O.add(B);let ie=new Re(new xn(.078,.082,.43,28),C.steel);ie.rotation.x=Math.PI/2,ie.position.z=.1,O.add(ie);let ge=new Re(new Ma(.078,.18,28),C.steel);ge.rotation.x=Math.PI/2,ge.position.z=.405,O.add(ge);for(let[dt,Nt]of[[-.17,.43],[.1,.42]]){let It=new Re(new xn(.0805,.0835,Nt,28,1,!0,Math.PI*.52,Math.PI*1.02),C.heat);It.rotation.x=Math.PI/2,It.position.z=dt,O.add(It)}for(let dt=-.56;dt<=-.2;dt+=.12){let Nt=new Re(new gr(.084,.004,6,28),C.dark);Nt.position.z=dt,O.add(Nt)}for(let dt of[-1,1]){let Nt=new Re(new Ft(.085,.016,.07),C.dark);Nt.position.set(dt*.105,0,-.18),Nt.rotation.z=dt*.08,O.add(Nt)}[new D(-.095,0,-.045),new D(.095,0,-.045),new D(0,-.095,.28),new D(0,.095,.28)].forEach((dt,Nt)=>{let It=new Re(new Ft(Nt<2?.03:.095,Nt<2?.095:.03,.07),C.dark);It.position.copy(dt),O.add(It)}),[[-.035,-.035],[0,-.038],[.035,-.035],[-.035,.035],[0,.038],[.035,.035]].forEach(([dt,Nt])=>{let It=new Re(new xn(.018,.026,.085,12,1,!0),C.dark);It.rotation.x=Math.PI/2,It.position.set(dt,Nt,-.63),O.add(It)});let ke=new Re(new xn(.087,.087,.04,28,1,!0),C.gold);ke.rotation.x=Math.PI/2,ke.position.z=-.14,O.add(ke);let it=new Re(new Ft(.055,.022,.05),C.dark);it.position.set(-.105,0,-.48),O.add(it);let lt=it.clone();return lt.position.x=.105,O.add(lt),O}function j(C,O){let B=O;for(let dt=0;dt<6;dt+=1)B-=(B-C.e*Math.sin(B)-O)/(1-C.e*Math.cos(B));let ie=C.a*(1-C.e*Math.cos(B)),_e=2*Math.atan2(Math.sqrt(1+C.e)*Math.sin(B/2),Math.sqrt(1-C.e)*Math.cos(B/2))+C.argument,Ee=Math.cos(C.node),ke=Math.sin(C.node),it=Math.cos(C.inclination),lt=Math.sin(C.inclination);return new D(ie*(Ee*Math.cos(_e)-ke*Math.sin(_e)*it),ie*(lt*Math.sin(_e)),ie*(ke*Math.cos(_e)+Ee*Math.sin(_e)*it))}function De(C){let O=[];for(let It=0;It<220;It+=1){let On=It/220*Math.PI*2;O.push(C.positionAt(On))}let B=new kt().setFromPoints(O),ie=C.dashed?new No({color:C.color,dashSize:C.dashSize||.18,gapSize:C.gapSize||.12,transparent:!0,opacity:C.opacity,blending:Pn,depthWrite:!1}):new is({color:C.color,transparent:!0,opacity:C.opacity,blending:Pn,depthWrite:!1}),ge=new Ts(B,ie);C.dashed&&ge.computeLineDistances(),Z.add(ge);let _e=et(C),Ee=C.createModel(_e),ke=(C.displayScale||1)*.28;Ee.scale.setScalar(ke);let it=Om(C.name,C.labelColor||"#f3f0e8",.52);it.scale.multiplyScalar(1/ke),it.position.set(0,.32,0),it.material.opacity=.34,Ee.add(it);let lt=new jr(new mr({map:pt,color:C.color,transparent:!0,opacity:.42,depthWrite:!1,blending:Pn}));lt.scale.set(.54,.54,1),lt.scale.multiplyScalar(.3),lt.scale.multiplyScalar(1/ke),Ee.add(lt);let dt=new Re(new Hn(.24,12,10),new In({transparent:!0,opacity:0,depthWrite:!1}));dt.userData.probeIndex=ee.length,Ee.add(dt),Se.push(dt),Z.add(Ee);let Nt={...C,line:ge,satellite:Ee,label:it,glow:lt,phase:C.phase||0,active:ee.length===0,status:C.status};return ee.push(Nt),Nt}function ve(){let C=new Wt;C.position.set(0,0,5.25);let O=new Re(new Hn(.045,16,10),new In({color:15255672,transparent:!0,opacity:.92}));C.add(O);let B=new Re(new gr(.11,.009,8,40),new In({color:15255672,transparent:!0,opacity:.58,blending:Pn,depthWrite:!1}));C.add(B);let ie=Om("EARTH\u2013MOON L2","#e8c878",.42);ie.position.set(0,.2,0),C.add(ie),Z.add(C);let ge=De({id:"lro",name:"LRO",status:"LRO \xB7 50 km polar orbit \xB7 T 113 min \xB7 i 90\xB0",color:8181969,solarColor:2182246,dishColor:13223352,opacity:.3,displayScale:1.4,angularSpeed:Math.PI*2/12,phase:.75,positionAt:sn=>j({a:Oa+.1,e:.002,inclination:ln.degToRad(90),node:.34,argument:-Math.PI/2},sn),createModel:Ne}),_e=De({id:"queqiao",name:"QUEQIAO",status:"QUEQIAO \xB7 Earth\u2013Moon L2 halo \xB7 T ~14 d \xB7 far-side relay",color:15255672,solarColor:4932193,dishColor:14867920,opacity:.38,displayScale:1.55,angularSpeed:Math.PI*2/42,phase:1.2,positionAt:sn=>{let qs=Math.cos(sn)*3.15,Zr=Math.sin(sn)*1.5-.2;return new D(qs*Math.cos(.28)-Zr*Math.sin(.28),qs*Math.sin(.28)+Zr*Math.cos(.28),5.25+Math.sin(sn*2)*.72)},dashed:!0,dashSize:.22,gapSize:.14,createModel:Ce}),Ee=De({id:"capstone",name:"CAPSTONE",status:"CAPSTONE \xB7 9:2 NRHO \xB7 T ~6.5 d \xB7 perilune ~3,000 km",color:16742981,solarColor:4536646,dishColor:13881544,opacity:.33,displayScale:1.25,angularSpeed:Math.PI*2/18,phase:3.8,positionAt:sn=>j({a:5.2,e:.32,inclination:ln.degToRad(72),node:1.02,argument:.65},sn),createModel:je}),ke=new wa([new D(-7.2,2.1,-9.4),new D(-4.6,1.3,-6.7),new D(-2.1,.65,-4.6),new D(1.15,.18,-3.75),new D(3.85,.05,-.7),new D(4.22,-.15,3.5)],!1,"catmullrom",.24),it=De({id:"tiangong",name:"TIANGONG",status:"TIANGONG \xB7 visual translunar transfer \u2192 180 km lunar orbit",color:16738885,solarColor:2183026,dishColor:13157564,opacity:.36,displayScale:1.35,angularSpeed:Math.PI*2/15,phase:2.25,positionAt:sn=>j({a:4.05,e:.1,inclination:ln.degToRad(48),node:-.45,argument:1},sn),createModel:rt,transferCurve:ke,transferProgress:.08,transferDuration:16}),lt=new kt().setFromPoints(ke.getPoints(180)),dt=new Ts(lt,new No({color:16747362,dashSize:.18,gapSize:.13,transparent:!0,opacity:.52,depthWrite:!1,blending:Pn}));dt.computeLineDistances(),Z.add(dt),it.transferLine=dt;let Nt=new wa([new D(-8.6,-2.2,-10.8),new D(-5.5,-1.35,-7.6),new D(-2.8,-.72,-5.2),new D(.85,-.2,-4.05),new D(4.1,.1,-1.2),new D(4.6,.35,3.85)],!1,"catmullrom",.24),It=De({id:"starship",name:"STARSHIP",status:"STARSHIP \xB7 visual translunar transfer \u2192 lunar orbit",color:13227228,solarColor:2502970,dishColor:13160146,opacity:.4,displayScale:1.55,angularSpeed:Math.PI*2/17,phase:4.35,positionAt:sn=>j({a:4.45,e:.12,inclination:ln.degToRad(57),node:.7,argument:1.35},sn),createModel:at,transferCurve:Nt,transferProgress:.02,transferDuration:19}),On=new Ts(new kt().setFromPoints(Nt.getPoints(200)),new No({color:14279914,dashSize:.2,gapSize:.14,transparent:!0,opacity:.48,depthWrite:!1,blending:Pn}));return On.computeLineDistances(),Z.add(On),It.transferLine=On,{lro:ge,queqiao:_e,capstone:Ee,tiangong:it,starship:It}}let Le=ve(),Fe=0,be=[];function Xe(C,O="MAPPED",B=null){let ie=se[C];if(!ie)return;let ge=new In({color:fn[Ue.id]?.accent||15255672,transparent:!0,opacity:.72,side:ii,depthWrite:!1}),_e=new Re(new Ra(.052,.063,72),ge);_e.position.copy(ie.root.position),_e.quaternion.copy(ie.root.quaternion),q.add(_e),be.push({mesh:_e,life:0,maxLife:p?.3:.95}),ie.pulse=1;let Ee=`${Math.round(64+Math.random()*32)}%`,ke=B??Ee;ie.root.getWorldPosition(x),E.copy(x).project(w);let it=(E.x*.5+.5)*R(),lt=(-E.y*.5+.5)*v();r({x:it,y:lt,label:O,value:ke.endsWith("%")?`SIGNAL ${ke}`:ke,range:ke}),o()}function Ze(C){if(!C)return;let O=new In({color:8181969,transparent:!0,opacity:.88,side:ii,depthWrite:!1,blending:Pn}),B=new Wt,ie=new Re(new Ra(.055,.09,48),O),ge=new Re(new Ft(.012,.012,.24),O.clone()),_e=new Re(new Ft(.24,.012,.012),O.clone());B.add(ie,ge,_e),B.position.copy(C.vector),B.quaternion.setFromUnitVectors(new D(0,0,1),C.vector.clone().normalize()),ne.add(B),ce.push({root:B,life:0,maxLife:p?1.2:8});let Ee=se[Ae]||se[0],ke="LOCAL WAYPOINT";if(Ee){let it=Da(Ee.feature.lat,Ee.feature.lon,1),lt=C.vector.clone().normalize(),dt=Math.acos(vt(lt.dot(it),-1,1));ke=`${Math.round(dt*1737.4)} km to ${Ee.feature.name}`}r({x:C.x,y:C.y,label:`${C.latitude} ${C.longitude}`,value:ke,range:"waypoint"}),yn("waypoint",`${C.latitude} ${C.longitude} tagged`),o()}let Qe=[],ct={active:!1,progress:0,featureIndex:0,emitted:!1},hi=new Wt;ae.add(hi);function Ai(){if(ct.active)return;let C=se[Ae]||se[0];if(!C)return;ct.active=!0,ct.progress=0,ct.featureIndex=C.index,ct.emitted=!1,Qe.splice(0).forEach(Ee=>hi.remove(Ee.mesh));let O=C.root.position.clone(),B=O.clone().normalize(),ie=new D(-B.z,0,B.x).normalize(),ge=new D().crossVectors(B,ie).normalize(),_e=R()<760?30:52;for(let Ee=0;Ee<_e;Ee+=1){let ke=new Re(new sh(.018+Math.random()*.014),new In({color:Ee%4===0?16742981:15255672,transparent:!0,opacity:.9,blending:Pn,depthWrite:!1}));ke.position.copy(O),hi.add(ke),Qe.push({mesh:ke,origin:O.clone(),tangent:ie.clone(),bitangent:ge.clone(),normal:B.clone(),phase:Math.random()*Math.PI*2,radius:.06+Math.random()*.18})}yn("sampling",`${C.feature.name} surface sampling`),vo(ct,{progress:1,duration:p?240:2500,ease:"inOutCubic",onComplete:()=>{ct.active=!1,Xt+=1,yn("observing",`Sample ${String(Xt).padStart(3,"0")} archived`)}})}let qe={mode:"relay",running:!1,success:!1,progress:0,params:{haloAmplitude:91,haloPhase:180,descentAngle:56,surfaceHours:24},metrics:{},pathPoints:[],landingPosition:new D,landingNormal:new D(0,1,0)},he={active:!1,complete:!1,success:!1,altitude:620,verticalSpeed:-38,horizontalSpeed:7,offset:-34,fuel:100,throttle:52,lateral:0,tilt:0,elapsed:0,score:0,status:"ready",lastEmit:0};function Th(){return{hull:new Mi({color:14276815,roughness:.34,metalness:.78}),gold:new Mi({color:13080898,emissive:2430211,emissiveIntensity:.22,roughness:.42,metalness:.7}),dark:new Mi({color:1382169,roughness:.52,metalness:.72}),solar:new Mi({color:6474450,emissive:801088,emissiveIntensity:.52,roughness:.3,metalness:.46}),accent:new Mi({color:15030844,emissive:5049348,emissiveIntensity:.35,roughness:.48,metalness:.32})}}function lc(C){let O=new Wt,B=new Re(new Ft(.2,.16,.3),C.hull);O.add(B);let ie=new Re(new Ft(.3,.035,.22),C.gold);ie.position.y=-.1,O.add(ie);let ge=new Re(new Hn(.13,20,10,0,Math.PI*2,0,Math.PI/2),C.hull);ge.position.y=.13,ge.rotation.x=Math.PI,O.add(ge);let _e=new Re(new xn(.012,.018,.17,10),C.dark);_e.position.set(0,.23,.03),_e.rotation.x=Math.PI/2,O.add(_e),[-1,1].forEach(ke=>{let it=new Re(new Ft(.44,.015,.2),C.solar);it.position.set(ke*.34,-.015,0),O.add(it),O.add(xe(new D(ke*.11,-.015,0),new D(ke*.13,-.015,0),.014,C.dark))});let Ee=new Re(new Hn(.028,10,8),C.accent);return Ee.position.set(0,-.13,.17),O.add(Ee),O}function Dm(C){let O=new Wt,B=C.hull.clone();B.color.setHex(15263971),B.roughness=.3,B.metalness=.74,B.envMapIntensity=.38;let ie=new Mi({color:9605515,roughness:.4,metalness:.72}),ge=new Mi({color:463641,emissive:666421,emissiveIntensity:.34,roughness:.18,metalness:.54}),_e=C.dark.clone();_e.color.setHex(1119254),_e.roughness=.62,_e.metalness=.42;let Ee=[new Me(0,-.9),new Me(.158,-.9),new Me(.158,.28),new Me(.16,.36),new Me(.156,.44),new Me(.149,.51),new Me(.135,.58),new Me(.112,.65),new Me(.082,.72),new Me(.05,.78),new Me(.022,.82),new Me(0,.84)],ke=new Re(new nh(Ee,72),B);O.add(ke),[0,Math.PI/2,Math.PI,Math.PI*1.5].forEach(rn=>{let Yt=Ee.map(Rn=>new D(Math.sin(rn)*(Rn.x+.0015),Rn.y,Math.cos(rn)*(Rn.x+.0015))),St=new Ts(new kt().setFromPoints(Yt),new is({color:7829103,transparent:!0,opacity:.24}));O.add(St)}),[[-.68,.157],[-.38,.157],[-.08,.157],[.22,.157],[.42,.148]].forEach(([rn,Yt])=>{let St=new Re(new gr(Yt,.0022,6,72),ie);St.position.y=rn,St.rotation.x=Math.PI/2,O.add(St)});let it=new Wt;[-.25,-.15,-.05,.05,.15,.25].forEach(rn=>{let Yt=new D(Math.sin(rn),0,Math.cos(rn)).normalize(),St=new Re(new Ft(.052,.028,.008),ge);St.position.copy(Yt).multiplyScalar(.163),St.position.y=.18,St.quaternion.setFromUnitVectors(new D(0,0,1),Yt),it.add(St)}),O.add(it);let lt=new Re(new Ft(.09,.13,.01),C.gold);lt.position.set(0,.37,.164),O.add(lt);let dt=new Re(new Ft(.052,.082,.006),_e);dt.position.set(0,.37,.171),O.add(dt);let Nt=new Re(new xn(.046,.058,.065,24),B);Nt.position.set(0,.48,.19),Nt.rotation.x=Math.PI/2,O.add(Nt);let It=new Re(new Ta(.042,24),_e);It.position.set(0,.48,.224),O.add(It);let On=new Wt;[-.018,.018].forEach(rn=>{let Yt=new Re(new Ft(.006,.88,.006),ie);Yt.position.set(rn,-.18,.164),On.add(Yt)});let sn=new Re(new Ft(.062,.05,.028),B);sn.position.set(0,-.07,.179),On.add(sn),O.add(On);let Di=[];[Math.PI/4,Math.PI*.75,Math.PI*1.25,Math.PI*1.75].forEach(rn=>{let Yt=new D(Math.sin(rn),0,Math.cos(rn)).normalize(),St=new Re(new xn(.026,.042,.062,16),B);St.position.copy(Yt).multiplyScalar(.184),St.position.y=.43,St.quaternion.setFromUnitVectors(new D(0,1,0),Yt),O.add(St);let Rn=new Re(new xn(.015,.032,.042,16,1,!0),_e);Rn.position.copy(Yt).multiplyScalar(.224),Rn.position.y=.43,Rn.quaternion.copy(St.quaternion),O.add(Rn),Di.push(St)});let qs=[];[Math.PI/6,Math.PI*5/6,Math.PI*3/2].forEach(rn=>{let Yt=new Yl;Yt.moveTo(-.062,-.095),Yt.lineTo(-.062,0),Yt.absarc(0,0,.062,Math.PI,0,!0),Yt.lineTo(.062,-.095),Yt.lineTo(-.062,-.095);let St=new Re(new th(Yt,{depth:.008,bevelEnabled:!1}),_e),Rn=new D(Math.sin(rn),0,Math.cos(rn)).normalize();St.position.copy(Rn).multiplyScalar(.16),St.position.y=-.77,St.quaternion.setFromUnitVectors(new D(0,0,1),Rn),O.add(St),qs.push(St)});let Zr=[];for(let rn=0;rn<3;rn+=1){let Yt=rn*Math.PI*2/3,St=new Re(new xn(.035,.066,.105,18,1,!0),_e);St.position.set(Math.cos(Yt)*.072,-.96,Math.sin(Yt)*.072),O.add(St);let Rn=new Re(new Ta(.03,20),new In({color:16742958,transparent:!0,opacity:0,side:ii,blending:Pn,depthWrite:!1}));Rn.position.copy(St.position),Rn.position.y-=.055,Rn.rotation.x=Math.PI/2,O.add(Rn),Zr.push(Rn)}let Nh=[];[Math.PI/4,Math.PI*.75,Math.PI*1.25,Math.PI*1.75].forEach(rn=>{let Yt=new D(Math.sin(rn),0,Math.cos(rn)).normalize(),St=new Re(new Ta(.022,18),new In({color:10217471,transparent:!0,opacity:0,side:ii,blending:Pn,depthWrite:!1}));St.position.copy(Yt).multiplyScalar(.244),St.position.y=.43,St.quaternion.setFromUnitVectors(new D(0,0,1),Yt),O.add(St),Nh.push(St)});for(let rn=0;rn<4;rn+=1){let Yt=rn*Math.PI/2+Math.PI/4,St=new D(Math.sin(Yt),0,Math.cos(Yt)).normalize(),Rn=St.clone().multiplyScalar(.155);Rn.y=-.28;let Ph=St.clone().multiplyScalar(.43);Ph.y=-1,O.add(xe(Rn,Ph,.014,B));let nv=St.clone().multiplyScalar(.153);nv.y=-.64;let iv=Ph.clone().multiplyScalar(.68);iv.y=-.72,O.add(xe(nv,iv,.01,B));let sv=new Re(new Hn(.024,12,8),_e);sv.position.copy(Rn),O.add(sv);let rv=new Re(new xn(.068,.078,.022,18),_e);rv.position.copy(Ph),O.add(rv)}let Ho=[];[0,Math.PI/2,Math.PI,Math.PI*1.5].forEach(rn=>{let Yt=new D(Math.sin(rn),0,Math.cos(rn)).normalize(),St=new Re(new Ft(.085,.62,.006),C.solar);St.position.copy(Yt).multiplyScalar(.162),St.position.y=-.34,St.quaternion.setFromUnitVectors(new D(0,0,1),Yt),O.add(St),Ho.push(St)});let As=new Wt;As.position.set(0,-.42,.17);let Ih=new Re(new Ft(.016,.016,.26),ie);Ih.position.z=.13,As.add(Ih);let ev=new Re(new Ft(.095,.024,.065),C.gold);ev.position.z=.28,As.add(ev),O.add(As);let tv=Om("NASA","#d53a32",.24);return tv.position.set(0,.36,.179),O.add(tv),O.userData.sampleBoom=As,O.userData.engineGlows=Zr,O.userData.landingEngineGlows=Nh,O.userData.elevatorCar=sn,O.userData.solarPanels=Ho,O.userData.thrusterHousings=Di,O.userData.baseCuts=qs,O}let jn=Th(),Vo=lc(jn),qi=new Wt,as=Dm(jn);qi.add(as);let ye={active:!1,lat:-45.5,lon:177.6,heading:0,speed:0,targetSpeed:0,steering:0,distance:0,battery:100,thermal:28,comm:94,slope:3.2,samples:0,elapsed:0,wheelSpin:0,trailAccumulator:0,lastEmit:0};function Mh(){let C=new Wt,O=new Re(new Ft(.18,.065,.25),jn.gold);O.position.y=.015,C.add(O);let B=new Re(new Ft(.27,.009,.19),jn.solar);B.position.y=.066,C.add(B);let ie=new Re(new Ft(.12,.045,.13),jn.hull);ie.position.set(0,.09,-.015),C.add(ie);let ge=new Re(new xn(.007,.009,.11,8),jn.dark);ge.position.set(0,.16,.055),C.add(ge);let _e=new Re(new Ft(.05,.035,.045),jn.hull);_e.position.set(0,.22,.055),C.add(_e);let Ee=new Re(new Hn(.045,14,8,0,Math.PI*2,0,Math.PI/2),jn.hull);Ee.position.set(-.08,.12,-.04),Ee.rotation.x=Math.PI,C.add(Ee);let ke=[];[-1,1].forEach(It=>{[-.085,0,.085].forEach(On=>{let sn=new Re(new xn(.037,.037,.028,14),jn.dark);sn.position.set(It*.105,-.02,On),sn.rotation.z=Math.PI/2,C.add(sn),ke.push(sn)}),C.add(xe(new D(It*.08,.035,-.09),new D(It*.105,-.005,0),.007,jn.hull)),C.add(xe(new D(It*.105,-.005,0),new D(It*.105,-.005,.09),.007,jn.hull)),C.add(xe(new D(It*.09,.045,.04),new D(It*.105,-.005,.09),.006,jn.dark))});let it=new Re(new Ft(.002,.035,.05),jn.accent);it.position.set(.061,.085,-.06),C.add(it);let lt=new Wt;lt.position.set(0,-.01,.135);let dt=new Re(new Ft(.014,.014,.11),jn.dark);dt.position.z=.055,lt.add(dt);let Nt=new Re(new Ma(.018,.075,10),jn.hull);return Nt.position.z=.13,Nt.rotation.x=Math.PI/2,lt.add(Nt),C.add(lt),C.userData.drill=lt,C.userData.wheels=ke,C}let zn=Mh();zn.visible=!1,q.add(zn);let Xs=[],di=new Ts(new kt,new is({color:5629951,transparent:!0,opacity:.72}));di.visible=!1,q.add(di);let pn=new Wt;pn.add(Vo,qi);let Bo=new jr(new mr({map:pt,color:13232260,transparent:!0,opacity:.78,depthWrite:!1,blending:Pn}));Bo.scale.set(.72,.72,1),pn.add(Bo),Q.add(pn);let ko=new Ts(new kt,new No({color:13232260,dashSize:.12,gapSize:.09,transparent:!0,opacity:.62,depthWrite:!1,blending:Pn}));Q.add(ko);function xr(C=!1){let O=performance.now();!C&&O-he.lastEmit<50||(he.lastEmit=O,u({active:he.active,complete:he.complete,success:he.success,altitude:he.altitude,verticalSpeed:he.verticalSpeed,horizontalSpeed:he.horizontalSpeed,offset:he.offset,fuel:he.fuel,throttle:he.throttle,lateral:he.lateral,tilt:he.tilt,elapsed:he.elapsed,score:he.score,status:he.status}))}function Lm({key:C,value:O}){C==="throttle"?he.throttle=vt(Number(O),0,100):C==="lateral"&&(he.lateral=vt(Number(O),-1,1))}function Um(){qe.mode!=="sample"&&jt("sample"),Gt();let C=(Math.random()*2-1)*58;he.active=!0,he.complete=!1,he.success=!1,he.altitude=620,he.verticalSpeed=-38,he.horizontalSpeed=(Math.random()*2-1)*7,he.offset=C,he.fuel=100,he.throttle=52,he.lateral=0,he.tilt=0,he.elapsed=0,he.score=0,he.status="descending",qe.running=!1,qe.progress=0,pn.visible=!0,yn("manual landing","Pilot control active; target the illuminated site"),xr(!0),r({x:R()*.5,y:v()*.3,label:"MANUAL DESCENT",value:"CONTROL AUTHORITY",range:"active"})}function wh(){he.active=!1,he.complete=!1,he.success=!1,he.status="ready",pn.visible=!1,xr(!0),yn("mission planning","Manual landing reset; adjust parameters and retry")}function N(C){if(!he.active)return;let O=Math.min(C,.05);he.elapsed+=O,he.throttle=vt(he.throttle,0,100),he.lateral=vt(he.lateral,-1,1),he.fuel<=0&&(he.throttle=0,he.fuel=0);let B=he.throttle/100*6.15;he.verticalSpeed+=(B-1.62)*O,he.altitude+=he.verticalSpeed*O,he.horizontalSpeed+=he.lateral*1.48*O,he.offset+=he.horizontalSpeed*O,he.fuel=vt(he.fuel-he.throttle*O*.032,0,100),he.tilt=vt(Math.abs(he.lateral)*7+Math.abs(he.horizontalSpeed)*.42+Math.abs(he.verticalSpeed)*.035,0,28);let ie=qe.landingPosition,ge=qe.landingNormal.clone().normalize(),_e=new D(-ge.z,0,ge.x).normalize(),Ee=ie.clone().addScaledVector(ge,.76+Math.max(0,he.altitude)/120).addScaledVector(_e,he.offset/90);pn.position.copy(Ee),pn.scale.setScalar(.75),pn.quaternion.setFromUnitVectors(new D(0,1,0),ge),Math.abs(he.tilt)>.01&&pn.quaternion.multiply(new Wi().setFromAxisAngle(_e,ln.degToRad(he.tilt*Math.sign(he.lateral||1)))),Vo.visible=!1,qi.visible=!0;let ke=he.fuel>0?.3+he.throttle/100*.68:0;as.userData.engineGlows.forEach((lt,dt)=>{lt.material.opacity=Math.max(0,ke-dt*.08)});let it=he.altitude<180?vt((he.throttle-22)/70,0,1):0;if(as.userData.landingEngineGlows.forEach(lt=>{lt.material.opacity=it*.78}),as.userData.sampleBoom.rotation.y=0,he.altitude<=0){he.altitude=0,he.active=!1,he.complete=!0;let lt=Math.max(0,Math.abs(he.verticalSpeed)-4),dt=Math.max(0,Math.abs(he.horizontalSpeed)-3),Nt=Math.max(0,Math.abs(he.offset)-35),It=he.fuel*.18;he.score=Math.round(vt(100-lt*4.4-dt*5.2-Nt*.42-Math.max(0,he.tilt-6)*2.2+It,0,100)),he.success=he.verticalSpeed>=-8&&he.verticalSpeed<=2&&Math.abs(he.horizontalSpeed)<=5&&Math.abs(he.offset)<=60&&he.tilt<=11&&he.fuel>0,he.status=he.success?"landed":"hard landing",yn(he.success?"landing complete":"landing failed",he.success?`Touchdown score ${he.score}`:`Landing limits exceeded \xB7 score ${he.score}`),xr(!0),r({x:R()*.5,y:v()*.38,label:he.success?"TOUCHDOWN":"LANDING FAILED",value:`SCORE ${he.score}`,range:he.success?"soft landing":"limits exceeded"}),o();return}xr()}function J(C=!1){let O=performance.now();!C&&O-ye.lastEmit<50||(ye.lastEmit=O,h({active:ye.active,lat:ye.lat,lon:ye.lon,heading:ye.heading,speed:ye.speed,commandSpeed:ye.targetSpeed,steering:ye.steering,distance:ye.distance,battery:ye.battery,thermal:ye.thermal,comm:ye.comm,slope:ye.slope,samples:ye.samples,elapsed:ye.elapsed}))}function de({key:C,value:O}){C==="speed"?ye.targetSpeed=vt(Number(O),-1,1):C==="steering"&&(ye.steering=vt(Number(O),-1,1))}function oe(){let C=Da(ye.lat,ye.lon,1).normalize(),O=new D(0,1,0).addScaledVector(C,-C.y).normalize(),B=new D().crossVectors(O,C).normalize(),ie=O.clone().multiplyScalar(Math.cos(ye.heading)).addScaledVector(B,Math.sin(ye.heading)).normalize(),ge=new D().crossVectors(C,ie).normalize(),_e=new tn().makeBasis(ge,C,ie);zn.position.copy(Da(ye.lat,ye.lon,Oa+.057)),zn.quaternion.setFromRotationMatrix(_e),zn.rotateX(ln.degToRad(ye.slope*.22)),zn.userData.drill.rotation.y=Math.sin(ye.elapsed*1.8)*.18}function le(){let C=By[pe]?.[0];ye.active=!0,ye.lat=C?.lat??-45.5,ye.lon=C?.lon??177.6,ye.heading=0,ye.speed=0,ye.targetSpeed=0,ye.steering=0,ye.distance=0,ye.battery=100,ye.thermal=28,ye.comm=94,ye.slope=3.2,ye.samples=0,ye.elapsed=0,ye.wheelSpin=0,ye.trailAccumulator=0,Xs.splice(0),di.geometry.dispose(),di.geometry=new kt,di.visible=!1,zn.visible=!0,pn.visible=!1,he.active=!1,he.complete=!1,oe(),yn("rover traverse","Yutu-2 surface traverse ready"),J(!0),r({x:R()*.5,y:v()*.34,label:"YUTU-2 ONLINE",value:"TRAVERSE CONTROL",range:"active"})}function He(C=!0){ye.active=!1,ye.speed=0,ye.targetSpeed=0,ye.steering=0,zn.visible=!1,J(!0),C&&yn("mission planning","Yutu-2 traverse paused")}function Ke(){!ye.active||ye.battery<=4||(ye.samples+=1,ye.battery=vt(ye.battery-3.5,0,100),ye.thermal=vt(ye.thermal+2.4,0,100),ye.distance+=.35,J(!0),zn.getWorldPosition(x),E.copy(x).project(w),r({x:(E.x*.5+.5)*R(),y:(-E.y*.5+.5)*v(),label:"YUTU-2 SAMPLE",value:`${String(ye.samples).padStart(2,"0")} ARCHIVED`,range:"sample stored"}),o())}function Be(){let C=se[0]?.index??0,O=1/0;return se.forEach(B=>{let ie=B.root.position.distanceTo(zn.position);ie<O&&(O=ie,C=B.index)}),C}function tt(C){if(!ye.active)return;let O=Math.min(C,.05);ye.elapsed+=O,ye.targetSpeed=vt(ye.targetSpeed,-1,1),ye.steering=vt(ye.steering,-1,1),(ye.battery<=0||ye.thermal>=98)&&(ye.targetSpeed=0,ye.speed=0,ye.steering=0,yn("rover warning",ye.battery<=0?"Yutu-2 battery depleted":"Yutu-2 thermal limit reached"));let B=Math.abs(ye.targetSpeed)>Math.abs(ye.speed)?.42:.72,ie=vt(ye.targetSpeed-ye.speed,-B*O,B*O);ye.speed+=ie,Math.abs(ye.speed)<.004&&(ye.speed=0);let ge=.42+Math.abs(ye.speed)*.48;ye.heading+=ye.steering*ge*O,ye.heading=((ye.heading+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;let _e=Da(ye.lat,ye.lon,1).normalize(),Ee=new D(0,1,0);Ee.addScaledVector(_e,-Ee.dot(_e)).normalize();let ke=new D().crossVectors(Ee,_e).normalize(),it=Ee.clone().multiplyScalar(Math.cos(ye.heading)).addScaledVector(ke,Math.sin(ye.heading)).normalize(),lt=1-vt((ye.slope-7)/24,0,.38),dt=ye.speed*lt*O*.0032,Nt=_e.clone().addScaledVector(it,dt).normalize();ye.lat=ln.radToDeg(Math.asin(vt(Nt.y,-1,1)));let It=ln.radToDeg(Math.atan2(Nt.x,Nt.z))+180;ye.lon=((It+180)%360+360)%360-180;let On=Math.abs(dt)*1737.4/260;ye.distance+=On,ye.battery=vt(ye.battery-Math.abs(ye.speed)*O*.032-Math.abs(ye.steering)*O*.008+(Math.abs(ye.speed)<.02?O*.012:0),0,100),ye.thermal=vt(ye.thermal+Math.abs(ye.speed)*O*.018-(Math.abs(ye.speed)<.02?O*.016:0),0,100),ye.slope=2.2+h1(ye.lat*.075,ye.lon*.075)*6.2,ye.comm=vt(97-ye.slope*2.4-Math.abs(Math.sin(ln.degToRad(ye.lon+ye.lat)))*8,45,99),oe();let sn=ye.speed*O*13;ye.wheelSpin+=sn,zn.userData.wheels.forEach(Di=>{Di.rotateX(sn)}),ye.trailAccumulator+=Math.abs(ye.speed)*O,ye.trailAccumulator>=.025&&(ye.trailAccumulator=0,Xs.push(zn.position.clone()),Xs.length>360&&Xs.shift(),di.geometry.dispose(),di.geometry=new kt().setFromPoints(Xs),di.visible=Xs.length>1),J()}function st(C){zn.getWorldPosition(x);let O=x.clone().normalize(),B=new D(0,0,1).applyQuaternion(zn.getWorldQuaternion(new Wi)).normalize(),ie=new D().crossVectors(O,B).normalize(),ge=x.clone().addScaledVector(O,.055).addScaledVector(B,.14),_e=x.clone().addScaledVector(O,.36).addScaledVector(B,-.64).addScaledVector(ie,.1),Ee=1-Math.exp(-C*4.2);w.position.lerp(_e,Ee),w.fov=ln.lerp(w.fov,44,Ee),w.updateProjectionMatrix(),w.lookAt(ge)}function Mt(C){pn.getWorldPosition(x);let O=x.clone().normalize(),B=new D(-O.z,0,O.x).normalize(),ie=new D().crossVectors(O,B).normalize(),ge=x.clone().addScaledVector(O,.08),_e=x.clone().addScaledVector(O,.46).addScaledVector(B,.9).addScaledVector(ie,.28),Ee=1-Math.exp(-C*4.4);w.position.lerp(_e,Ee),w.fov=ln.lerp(w.fov,42,Ee),w.updateProjectionMatrix(),w.lookAt(ge)}function Dt(){let C=qe.params.haloAmplitude,O=qe.params.haloPhase,B=Math.abs(O-180),ie=vt(84+(C-55)*.18+(1-B/180)*11,62,99.8),ge=ie>=96&&B<=62?"LOCKED":"INTERMITTENT",_e=13.4+(C-55)*.028,Ee=Math.abs(C-91)*.52+B*.14;return{coverage:ie,earthLink:ge,period:_e,stationKeeping:Ee,goal:ie>=96&&ge==="LOCKED"&&Ee<=18}}function nt(){let C=qe.params.descentAngle,O=qe.params.surfaceHours,B=Math.abs(C-56)*.38,ie=43+Math.max(0,O-10)*1.42+Math.abs(C-56)*.16,ge=146+(O-16)*1.18-Math.abs(C-56)*.35,_e=29-Math.abs(O-22)*.72-Math.abs(C-56)*.19;return{slope:B,thermal:ie,sampleMass:Math.max(0,ge),commWindow:Math.max(0,_e),goal:B<=7&&ie<=82&&ge>=120&&_e>=5}}function Gt(){let C=[];if(qe.mode==="relay"){let O=qe.params.haloAmplitude/36,B=ln.degToRad(qe.params.haloPhase);for(let ie=0;ie<180;ie+=1){let ge=ie/180*Math.PI*2;C.push(new D(Math.cos(ge)*O,Math.sin(ge)*O*.42-.8,-7.4+Math.sin(ge*2+B)*.85))}}else{let B=(se[0]||{root:{position:Da(-35.7,-151.3,Oa)}}).root.position.clone(),ie=B.clone().normalize();qe.landingPosition.copy(B),qe.landingNormal.copy(ie);let ge=new D(-ie.z,0,ie.x).normalize(),_e=ln.degToRad(qe.params.descentAngle),Ee=B.clone().addScaledVector(ie,7.2).addScaledVector(ge,Math.cos(_e)*2.1);C.push(Ee);for(let it=1;it<=55;it+=1){let lt=it/55,dt=lt*lt*(3-2*lt);C.push(Ee.clone().lerp(B,dt))}for(let it=0;it<10;it+=1)C.push(B.clone());let ke=B.clone().addScaledVector(ie,5.4).addScaledVector(ge,-1.8);for(let it=1;it<=45;it+=1){let lt=it/45,dt=lt*lt*(3-2*lt);C.push(B.clone().lerp(ke.clone().addScaledVector(ie,3),dt))}}qe.pathPoints=C,ko.geometry.dispose(),ko.geometry=new kt().setFromPoints(C),ko.computeLineDistances(),ko.visible=C.length>1}function cn(C={}){qe.metrics=qe.mode==="relay"?Dt():qe.mode==="sample"?nt():{goal:!1},a({mode:qe.mode,metrics:qe.metrics,running:qe.running,success:qe.success,...qe.params,...C})}function nn(){if(!qe.pathPoints.length)return;let C=vt(qe.progress,0,1),O=C*(qe.pathPoints.length-1),B=Math.floor(O),ie=Math.min(qe.pathPoints.length-1,B+1),ge=O-B,_e=qe.pathPoints[B].clone().lerp(qe.pathPoints[ie],ge),Ee=qe.mode==="sample";if(Ee&&_e.addScaledVector(_e.clone().normalize(),.76),pn.position.copy(_e),pn.visible=Ee||qe.running||C>0,Ee){let lt=_e.clone().normalize();pn.quaternion.setFromUnitVectors(new D(0,1,0),lt)}else if(ie>B){let lt=qe.pathPoints[ie].clone().sub(qe.pathPoints[B]).normalize();pn.quaternion.setFromUnitVectors(new D(0,0,1),lt)}Vo.visible=!Ee,qi.visible=Ee,pn.scale.setScalar(Ee?.75:1),Bo.material.color.setHex(Ee?16747069:13232260),Bo.material.opacity=Ee?qe.running?.16+Math.sin(C*Math.PI*18)*.05:.1:qe.running?.42+Math.sin(C*Math.PI*18)*.12:.3;let ke=Ee?C<.52?vt((C-.02)/.08,0,1)*vt((.52-C)/.12,0,1)*.62:vt((C-.64)/.08,0,1)*vt((1-C)/.1,0,1)*.92:0;as.userData.engineGlows.forEach((lt,dt)=>{lt.material.opacity=Math.max(0,ke-dt*.08)});let it=Ee?vt((C-.18)/.22,0,1)*vt((.58-C)/.08,0,1):0;as.userData.landingEngineGlows.forEach(lt=>{lt.material.opacity=it*.88}),as.userData.sampleBoom.rotation.y=Ee?Math.sin(C*Math.PI*4)*.45:0}function jt(C){let O=["relay","sample"].includes(C)?C:"relay";qe.mode=O,qe.running=!1,qe.success=!1,qe.progress=0,he.active=!1,he.complete=!1,he.success=!1,he.status="ready",xr(!0),Vt=performance.now(),He(!1),Gt(),pn.visible=!1,nn(),cn(),yn("mission planning",O==="relay"?"Queqiao relay geometry planning":"Far-side sample-return planning")}function Zn(C={}){Object.assign(qe.params,C),qe.running=!1,qe.success=!1,qe.progress=0,he.active=!1,he.complete=!1,he.success=!1,Vt=performance.now(),Gt(),pn.visible=!1,nn(),cn()}function Je(){qe.running||qe.mode!=="rover"&&(he.active=!1,he.complete=!1,he.success=!1,qe.running=!0,qe.success=!1,qe.progress=0,Vt=performance.now(),pn.visible=!0,cn(),qe.mode==="relay"?yn("relay transfer","Relay satellite transferring through the L2 halo"):yn("sample return","Descent, sampling, and ascent sequence running"),vo(qe,{progress:1,duration:p?420:6200,ease:"inOutCubic",onUpdate:()=>{cn()},onComplete:()=>{qe.running=!1,qe.success=!!qe.metrics.goal,Vt=performance.now(),cn(),qe.success?(yn("mission complete",qe.mode==="relay"?"Relay link closed; far-side coverage valid":"Sample-return window closed"),r({x:R()*.5,y:v()*.42,label:"MISSION COMPLETE",value:qe.mode==="relay"?"RELAY LOCK":"RETURN WINDOW",range:"100%"})):yn("mission warning",qe.mode==="relay"?"Coverage insufficient; adjust the halo orbit":"Sample window exceeded; adjust descent parameters")}}))}function Qn(){let C=ye.active;C&&He(!1),qe.running=!1,qe.success=!1,qe.progress=0,he.active=!1,he.complete=!1,he.success=!1,he.altitude=620,he.verticalSpeed=-38,he.horizontalSpeed=0,he.offset=0,he.fuel=100,he.throttle=52,he.lateral=0,he.tilt=0,he.elapsed=0,he.score=0,he.status="ready",pn.visible=!1,xr(!0),cn(),yn(C?"mission planning":"observing",C?"Yutu-2 traverse paused":ac[pe]?.status||"Lunar far-side region stable")}let Ue={id:"lroc",distanceScale:fn.lroc.distanceScale,targetDistanceScale:fn.lroc.distanceScale,fov:fn.lroc.fov,targetFov:fn.lroc.fov,exposure:fn.lroc.exposure,targetExposure:fn.lroc.exposure,color:fn.lroc.color.clone(),targetColor:fn.lroc.color.clone(),emissive:fn.lroc.emissive.clone(),targetEmissive:fn.lroc.emissive.clone(),emissiveIntensity:fn.lroc.emissiveIntensity,targetEmissiveIntensity:fn.lroc.emissiveIntensity,fill:fn.lroc.fill.clone(),targetFill:fn.lroc.fill.clone(),rim:fn.lroc.rim.clone(),targetRim:fn.lroc.rim.clone(),zoom:1,zoomTarget:1},fi=new Wi,Oi="observing",ls="Initializing lunar far-side observation",cs=37,Xt=0,un=1,us=0,Vt=performance.now(),ws=!1,$s=0,cc=0,Fm=0,ky=0,Hy,zy,uc=!1,Ah=!1,Rh={x:0,y:0},hc=null,Ch=null;function yn(C,O=ls){Oi=C,ls=O,s({state:Oi,status:ls})}function La(C=!1){if(!C&&performance.now()-Vt<120)return;let O=ee.filter(ge=>ge.active).length,B=I().size,ie=se.length||10;i({features:B,featuresTotal:ie,mapped:vt(cs,0,100),probes:O,probesTotal:ee.length,samples:Xt,gravity:"0.166g",state:Oi})}function Gy(C){let O=t.getBoundingClientRect();_.x=(C.clientX-O.left)/O.width*2-1,_.y=-((C.clientY-O.top)/O.height)*2+1}function Wy(){if(!X.length)return null;g.setFromCamera(_,w);let C=g.intersectObjects(X,!1);for(let O of C){O.object.getWorldPosition(x);let B=x.clone().sub(ze.getWorldPosition(new D)).normalize(),ie=w.position.clone().sub(x).normalize();if(B.dot(ie)>.03)return O.object.userData.featureIndex}return null}function Xy(){if(!Se.length)return null;g.setFromCamera(_,w);let C=g.intersectObjects(Se,!1);return C.length?C[0].object.userData.probeIndex:null}function $y(){g.setFromCamera(_,w);let C=g.intersectObject(ze,!1);if(!C.length)return null;let O=ae.worldToLocal(C[0].point.clone()),B=Math.max(O.length(),1e-4),ie=ln.radToDeg(Math.asin(vt(O.y/B,-1,1))),ge=ln.radToDeg(Math.atan2(O.x,O.z))+180;ge=((ge+180)%360+360)%360-180;let _e=`${Math.abs(ie).toFixed(1)}${ie<0?"S":"N"}`,Ee=`${Math.abs(ge).toFixed(1)}${ge<0?"W":"E"}`,ke=Math.round(62+h1(ie*.17,ge*.17)*35);return{vector:O,latitude:_e,longitude:Ee,signal:ke}}function qy(){let C=se[0]?.index??0,O=1/0;return se.forEach(B=>{B.getWorldPosition?.(x),B.root.getWorldPosition(x);let ie=x.distanceTo(w.position);ie<O&&(O=ie,C=B.index)}),C}function dc(C=null){let O=C??hc??(ye.active?Be():Ae>=0?Ae:qy()),B=se[O]||se[0];if(!B)return;let ie=I(),ge=!ie.has(B.feature.id);ge&&(ie.add(B.feature.id),B.surveyed=!0,cs=vt(cs+2.2,0,100)),un=performance.now()-Vt<1800?Math.min(8,un+1):2,Vt=performance.now(),Xe(O,B.feature.name.toUpperCase(),ge?null:"ALREADY MAPPED"),r({type:"combo",value:un}),window.clearTimeout(us),us=window.setTimeout(()=>{un=1,r({type:"combo-end"})},1200);let _e=ie.size,Ee=_e===se.length;l({regionId:pe,featureId:B.feature.id,featureName:B.feature.name,surveyedCount:_e,total:se.length,isNew:ge,complete:Ee}),yn(Ee?"survey complete":"scanning",Ee?`${ac[pe]?.short||"REGION"} survey complete`:`${B.feature.name} signal locked`),Ee&&ge&&window.setTimeout(()=>{r({x:R()*.5,y:v()*.34,label:"SURVEY COMPLETE",value:`${_e} / ${se.length} MAPPED`,range:"100%"})},260),La(!0)}function Yy(C){let O=typeof C=="number"?se.findIndex(ie=>ie.index===C):se.findIndex(ie=>ie.feature.name===C);if(O<0)return!1;Ae=O,se.forEach((ie,ge)=>{ie.label.material.opacity=ge===O?.92:.34,ie.pulse=ge===O?1:0});let B=se[O].feature;return yn("feature focus",`${B.name} feature locked`),!0}function Vm(C,O=!0){pe=ac[C]?C:"spa";let B=ac[pe],ie=Da(B.focusLat,B.focusLon,1);fi.setFromUnitVectors(ie,y),Ae=0,$(pe),Gt(),A.visible=B.earthVisibility>.02,Y.material.opacity=.28+B.earthVisibility,O?(vo(ae.rotation,{x:0,y:0,z:0,duration:p?1:820,ease:"outExpo"}),re.bumpScale=.055,vo(re,{bumpScale:[.025,.055],duration:p?1:900,ease:"outExpo"})):(Q.quaternion.copy(fi),ae.rotation.set(0,0,0)),ye.active?le():yn("observing",B.status),La(!0)}function Bm(C,O=!0){let B=fn[C]||fn.lroc;Ue.id=C in fn?C:"lroc",Ue.targetDistanceScale=B.distanceScale,Ue.targetFov=B.fov,Ue.targetExposure=B.exposure,Ue.targetColor.copy(B.color),Ue.targetEmissive.copy(B.emissive),Ue.targetEmissiveIntensity=B.emissiveIntensity,Ue.targetFill.copy(B.fill),Ue.targetRim.copy(B.rim),O&&yn("instrument switch",`${B.short} \xB7 ${ac[pe]?.instrumentHint||"lunar far-side data view"}`)}function f1(){w.aspect=R()/v(),w.updateProjectionMatrix()}function p1(C,O){ee.forEach(B=>{let ie,ge=!1;if(B.transferCurve&&(B.transferProgress=vt(B.transferProgress+C/B.transferDuration,0,1),ge=B.transferProgress<1,ge)){let _e=B.transferProgress,Ee=_e*_e*(3-2*_e);ie=B.transferCurve.getPointAt(Ee)}if(!ie){let _e=B.phase+O*B.angularSpeed;ie=B.positionAt(_e)}B.satellite.position.copy(ie),B.satellite.lookAt(0,0,0),B.satellite.rotateZ(Math.sin(O*.12+B.phase)*.035),B.line.material.opacity=B.active?B.opacity*1.75:B.opacity*.55,B.transferLine&&(B.transferLine.material.opacity=ge?B.active?.72:.42:.08),B.label.material.opacity=B.active?.92:.3+Math.max(0,Math.sin(O*.5+B.phase))*.08,B.glow.material.opacity=B.active?.62:.34})}function m1(C){for(let O=be.length-1;O>=0;O-=1){let B=be[O];B.life+=C;let ie=vt(B.life/B.maxLife,0,1),ge=1+ie*2.1;B.mesh.scale.setScalar(ge),B.mesh.material.opacity=(1-ie)*.62,B.mesh.rotation.z+=C*.42,ie>=1&&(q.remove(B.mesh),B.mesh.geometry.dispose(),B.mesh.material.dispose(),be.splice(O,1))}}function g1(C){se.forEach((O,B)=>{O.pulse=Math.max(0,O.pulse-C*.75);let ie=B===Ae,ge=B===hc,_e=ie||ge,Ee=ie?1:.86,ke=1+O.pulse*.16;O.ring.scale.setScalar(Ee*ke),O.ring.material.opacity=ie?.78+O.pulse*.14:(O.surveyed?.5:.38)+O.pulse*.12,O.dot.scale.setScalar(ie?1.24:O.surveyed?1.05:.92),O.glow.material.opacity=ie?.76+O.pulse*.18:ge?.62:O.surveyed?.42:.3,O.glow.scale.setScalar(ie?.2:.16),O.reticle.material.opacity=ie?.92:ge?.72:0,O.line.material.opacity=ie?.88:ge?.72:O.surveyed?.4:.3,O.tick.material.opacity=O.line.material.opacity;let it=_e?.72:.52;O.label.scale.set(it,it*.25,1),O.label.material.opacity=ie?.96:ge?.9:O.surveyed?.56:.46})}function _1(C){if(!Qe.length)return;let O=ct.progress;Qe.forEach((B,ie)=>{let ge=.05+O*(.8+B.radius*3),_e=B.phase+O*(4+ie%5);B.mesh.position.copy(B.origin).addScaledVector(B.normal,ge).addScaledVector(B.tangent,Math.cos(_e)*B.radius*O).addScaledVector(B.bitangent,Math.sin(_e)*B.radius*O),B.mesh.rotation.x+=C*(1.2+ie*.02),B.mesh.rotation.y+=C*1.7,B.mesh.material.opacity=vt(1-Math.max(0,O-.72)/.28,0,.92)})}function y1(C){for(let O=ce.length-1;O>=0;O-=1){let B=ce[O];B.life+=C;let ie=vt(B.life/B.maxLife,0,1),ge=1-Math.max(0,ie-.72)/.28,_e=1+Math.sin(B.life*5.5)*.12;B.root.scale.setScalar(_e),B.root.traverse(Ee=>{Ee.material&&(Ee.material.opacity=ge*.88)}),ie>=1&&(ne.remove(B.root),B.root.traverse(Ee=>{Ee.geometry&&Ee.geometry.dispose(),Ee.material&&Ee.material.dispose()}),ce.splice(O,1))}}function v1(C){let O=1-Math.exp(-C*5);Ue.distanceScale=ln.lerp(Ue.distanceScale,Ue.targetDistanceScale,O),Ue.fov=ln.lerp(Ue.fov,Ue.targetFov,O),Ue.exposure=ln.lerp(Ue.exposure,Ue.targetExposure,O),Ue.color.lerp(Ue.targetColor,O),Ue.emissive.lerp(Ue.targetEmissive,O),Ue.emissiveIntensity=ln.lerp(Ue.emissiveIntensity,Ue.targetEmissiveIntensity,O),Ue.fill.lerp(Ue.targetFill,O),Ue.rim.lerp(Ue.targetRim,O),re.color.copy(Ue.color),re.emissive.copy(Ue.emissive),re.emissiveIntensity=Ue.emissiveIntensity,ot.color.copy(Ue.fill),gt.color.copy(Ue.rim),T.toneMappingExposure=Ue.exposure}function E1(C,O){cc+=1,Q.quaternion.slerp(fi,1-Math.exp(-C*2.8)),We.rotation.y+=C*.002,We.material.opacity=.018+Math.sin(O*.7)*.004+(Ue.id==="minirf"?.025:0),v1(C),p1(C,O),g1(C),m1(C),_1(C),y1(C),tt(C),ye.active||(he.active?N(C):he.complete||nn());let B=(Ue.zoom-1)/(u1-1),ge=ln.lerp(10.6,5.05,B)*Ue.distanceScale,_e=1-Math.exp(-C*3.5);ye.active?st(C):he.active||he.complete||qe.mode==="sample"&&qe.running?Mt(C):(w.position.x=ln.lerp(w.position.x,_.x*.42,_e),w.position.y=ln.lerp(w.position.y,.72+_.y*.28,_e),w.position.z=ln.lerp(w.position.z,ge,_e),w.fov=ln.lerp(w.fov,Ue.fov,_e),w.updateProjectionMatrix(),w.lookAt(S)),A.rotation.y+=C*.06,L.material.color.setHSL(.56,.32+Math.sin(O*.12)*.02,.56),te.rotation.y+=C*.002}t.addEventListener("pointerdown",C=>{C.button===0&&(Gy(C),uc=!0,Ah=!1,Rh={x:C.clientX,y:C.clientY},t.setPointerCapture(C.pointerId),c({visible:!1}),t.style.cursor="grabbing")}),t.addEventListener("pointermove",C=>{if(Gy(C),uc){let B=C.clientX-Rh.x,ie=C.clientY-Rh.y;Math.hypot(B,ie)>1&&(Ah=Ah||Math.hypot(B,ie)>4,ae.rotation.y+=B*.005,ae.rotation.x=vt(ae.rotation.x+ie*.0036,-.56,.56)),Rh={x:C.clientX,y:C.clientY},Vt=performance.now();return}Ch=Xy(),hc=Ch===null?Wy():null;let O=$y();c({visible:!!O,x:C.clientX,y:C.clientY,latitude:O?.latitude||"",longitude:O?.longitude||"",signal:O?.signal||0}),t.style.cursor=Ch!==null||hc!==null?"pointer":"grab"}),t.addEventListener("pointerup",C=>{if(!uc)return;let O=Xy(),B=O===null?Wy():null;if(uc=!1,t.releasePointerCapture(C.pointerId),t.style.cursor=O!==null||B!==null?"pointer":"grab",!Ah)if(O!==null)jy(O);else if(B!==null)Yy(B),dc(B);else{let ie=$y();ie&&(ie.x=C.clientX,ie.y=C.clientY,Ze(ie))}}),t.addEventListener("pointerleave",()=>{uc||(hc=null,Ch=null,c({visible:!1}),t.style.cursor="grab")}),t.addEventListener("wheel",C=>{C.preventDefault();let O=Math.exp(-C.deltaY*.00125);Ue.zoomTarget=vt(Ue.zoomTarget*O,1,u1),Ue.zoom=Ue.zoomTarget,Vt=performance.now();let B=fn[Ue.id]||fn.lroc;yn("zoom",`${B.short} ${Ue.zoom.toFixed(1)}x lunar surface observation`)},{passive:!1});function Ky(C){let O=C.target;if(O instanceof HTMLInputElement||O instanceof HTMLTextAreaElement)return;let B=C.key.toLowerCase();if(he.active){if(B==="w"||B==="arrowup")he.throttle=vt(he.throttle+4,0,100);else if(B==="s"||B==="arrowdown")he.throttle=vt(he.throttle-4,0,100);else if(B==="a"||B==="arrowleft")he.lateral=vt(he.lateral-.12,-1,1);else if(B==="d"||B==="arrowright")he.lateral=vt(he.lateral+.12,-1,1);else return;C.preventDefault(),xr(!0);return}if(ye.active){if(B==="w"||B==="arrowup")ye.targetSpeed=vt(ye.targetSpeed+.1,-1,1);else if(B==="s"||B==="arrowdown")ye.targetSpeed=vt(ye.targetSpeed-.1,-1,1);else if(B==="a"||B==="arrowleft")ye.steering=vt(ye.steering-.12,-1,1);else if(B==="d"||B==="arrowright")ye.steering=vt(ye.steering+.12,-1,1);else if(C.code==="Space")Ke();else if(B==="f")dc(Be());else return;C.preventDefault(),J(!0)}}window.addEventListener("keydown",Ky);function Jy(){f1(),T.setPixelRatio(Math.min(window.devicePixelRatio||1,1.35)),T.setSize(R(),v())}window.addEventListener("resize",Jy);function jy(C,O=!0){if(C<0||C>=ee.length)return;ee.forEach(ie=>{ie.active=!1}),Fe=C;let B=ee[Fe];B.active=!0,B.transferCurve&&(B.transferProgress=.08),Vt=performance.now(),B.satellite.getWorldPosition(x),E.copy(x).project(w),r({x:(E.x*.5+.5)*R(),y:(-E.y*.5+.5)*v(),label:B.name,value:B.id==="queqiao"?"L2 HALO":B.id==="capstone"?"9:2 NRHO":B.id==="tiangong"?"TRANSLUNAR TRANSFER":B.id==="starship"?"LUNAR TRANSFER":"POLAR ORBIT",range:"locked"}),O&&yn("probe select",B.status),La(!0)}function Zy(){jy((Fe+1)%ee.length)}function x1(){ye.active?Ke():Ai()}function S1(){cs=37,Xt=0,un=1,Ae=0,Fe=0,P.clear(),ce.splice(0).forEach(C=>{ne.remove(C.root),C.root.traverse(O=>{O.geometry&&O.geometry.dispose(),O.material&&O.material.dispose()})}),ee.forEach((C,O)=>{C.active=O===0}),Qn(),Xs.splice(0),di.geometry.dispose(),di.geometry=new kt,di.visible=!1,Bm("lroc",!1),Vm("spa",!0),l({type:"reset"}),yn("observing","Lunar observatory reset"),La(!0)}Bm("lroc",!1),Vm("spa",!1),jt("relay"),yn("observing","Lunar observatory ready"),La(!0);function Qy(){let C=Math.min(m.getDelta(),.1);Fm||(Fm=Math.round(performance.now()-n)),E1(C,m.elapsedTime),T.render(M,w),$s=window.requestAnimationFrame(Qy)}$s=window.requestAnimationFrame(Qy),zy=window.setInterval(()=>{document.hidden||La(!0)},700),Hy=window.setInterval(()=>{ws&&!document.hidden&&!qe.running&&performance.now()-Vt>15e3&&dc(qy())},4e3),vu({onComplete:()=>{ws=!0,yn("observing",ac[pe]?.status||"Lunar far-side region stable")}}).add(w.position,{z:[14.5,10.6],y:[1.6,.72],duration:p?1:2200,ease:"outExpo"},0).add(w,{fov:[30,fn.lroc.fov],duration:p?1:1900,ease:"outExpo",onUpdate:()=>w.updateProjectionMatrix()},0).add(re,{bumpScale:[.018,.055],duration:p?1:1700,ease:"outExpo"},120);function b1(){window.clearInterval(Hy),window.clearInterval(zy),window.clearTimeout(us),window.removeEventListener("resize",Jy),window.removeEventListener("keydown",Ky),window.cancelAnimationFrame($s),q.traverse(C=>{C.geometry&&C.geometry.dispose(),C.material&&(C.material.map&&C.material.map.dispose(),C.material.dispose())}),T.dispose(),delete window.__LUNAR_FARSIDE_DEBUG__}return window.__LUNAR_FARSIDE_DEBUG__={sampleColor:()=>{if(!$e.color.image)return null;let C=document.createElement("canvas");C.width=8,C.height=4;let O=C.getContext("2d");O.drawImage($e.color.image,0,0,8,4);let B=O.getImageData(0,0,8,4).data,ie=[0,0,0];for(let ge=0;ge<B.length;ge+=4)ie[0]+=B[ge],ie[1]+=B[ge+1],ie[2]+=B[ge+2];return ie.map(ge=>Math.round(ge/(B.length/4)))},read:()=>({frameCount:cc,firstFrameMs:Fm,surfaceReadyMs:ky,textures:{colorLoaded:$e.colorLoaded,bumpLoaded:$e.bumpLoaded,colorSize:$e.color.image?[$e.color.image.width,$e.color.image.height]:null,bumpSize:$e.bump.image?[$e.bump.image.width,$e.bump.image.height]:null},probes:ee.map(C=>({id:C.id,active:C.active,position:C.satellite.position.toArray(),pathPoints:C.line.geometry.attributes.position.count,status:C.status,modelChildren:C.satellite.children.length,transferProgress:C.transferProgress??null})),material:{color:re.color.getHexString(),emissive:re.emissive.getHexString(),emissiveIntensity:re.emissiveIntensity,hasMap:!!re.map,hasEmissiveMap:!!re.emissiveMap},camera:w.position.toArray(),moonVisible:ze.visible,moonMaterial:re.type,markerCount:se.length,survey:{region:pe,count:I().size,total:se.length,byRegion:Object.fromEntries(Array.from(P,([C,O])=>[C,Array.from(O)]))},surfaceTagCount:ce.length,mapped:cs,sampleCount:Xt,manualLanding:{active:he.active,complete:he.complete,success:he.success,altitude:he.altitude,verticalSpeed:he.verticalSpeed,horizontalSpeed:he.horizontalSpeed,offset:he.offset,fuel:he.fuel,score:he.score,status:he.status},mission:{mode:qe.mode,running:qe.running,success:qe.success,pathPoints:qe.pathPoints.length,craftVisible:pn.visible,craftPosition:pn.position.toArray(),model:{relayChildren:Vo.children.length,sampleChildren:as.children.length,sampleVisible:qi.visible},metrics:qe.metrics}})},{replay:S1,scan:(C=null)=>dc(C),sample:x1,deployProbe:Zy,shipStrike:Zy,strike:()=>dc(),observeStar:Yy,setObject:Vm,setTelescope:Bm,setMissionMode:jt,setMissionParams:Zn,setManualLandingControl:Lm,startManualLanding:Um,stopManualLanding:wh,runMission:Je,stopMission:Qn,dispose:b1}}var NL={template:`
    <div class="brand">
      <div class="brand-title">
        <div class="brand-name">aiANTlab</div>
        <span class="brand-star" aria-hidden="true">\u25D0</span>
      </div>
    </div>
  `},IL={props:{telemetry:{type:Object,required:!0}},template:`
    <div class="telemetry">
      <div class="telemetry-row">
        <span class="telemetry-label">features</span>
        <span class="telemetry-value cyan">{{ telemetry.features }}</span>
      </div>
      <div class="telemetry-row">
        <span class="telemetry-label">mapped</span>
        <span class="telemetry-value">{{ telemetry.mapped }}</span>
      </div>
      <div class="telemetry-row">
        <span class="telemetry-label">probes</span>
        <span class="telemetry-value cyan">{{ telemetry.probes }}</span>
      </div>
      <div class="telemetry-row">
        <span class="telemetry-label">samples</span>
        <span
          :key="telemetry.samples"
          class="telemetry-value ember consumed-counter"
        >{{ telemetry.samples }}</span>
      </div>
      <div class="telemetry-row">
        <span class="telemetry-label">gravity</span>
        <span class="telemetry-value cyan">{{ telemetry.gravity }}</span>
      </div>
      <div class="telemetry-row">
        <span class="telemetry-label">state</span>
        <span class="telemetry-value">{{ telemetry.state }}</span>
      </div>
    </div>
  `},PL={props:{objects:{type:Array,required:!0},selected:{type:String,required:!0}},emits:["select"],template:`
    <nav class="object-switcher" aria-label="Lunar far-side region selector">
      <button
        v-for="object in objects"
        :key="object.id"
        class="object-tab"
        :class="{ active: selected === object.id }"
        :data-object="object.id"
        type="button"
        @click="$emit('select', object)"
      >
        <span>{{ object.short }}</span>
        <small>{{ object.size }}</small>
      </button>
    </nav>
  `},OL={props:{instruments:{type:Array,required:!0},selected:{type:String,required:!0}},emits:["select"],template:`
    <nav class="telescope-switcher" aria-label="Lunar surface data view selector">
      <button
        v-for="instrument in instruments"
        :key="instrument.id"
        type="button"
        class="telescope-tab"
        :class="{ active: selected === instrument.id }"
        :data-telescope="instrument.id"
        :aria-pressed="selected === instrument.id"
        @click="$emit('select', instrument)"
      >
        <span>{{ instrument.short }}</span>
        <small>{{ instrument.band }}</small>
      </button>
    </nav>
  `},DL={props:{features:{type:Array,required:!0},activeFeature:{type:Number,default:-1},object:{type:Object,required:!0},surveyed:{type:Array,default:()=>[]}},computed:{surveyedCount(){return this.features.filter(t=>this.surveyed.includes(t.id)).length},surveyProgress(){return this.features.length?this.surveyedCount/this.features.length*100:0}},emits:["select"],template:`
    <aside class="star-panel">
      <div class="panel-heading">
        <span>{{ object.panelTitle }}</span>
        <small>NASA / CNSA</small>
      </div>
      <div class="object-brief">
        <strong>{{ object.label }}</strong>
        <span>{{ object.size }} \xB7 {{ object.coordinates }}</span>
        <span>{{ object.age }}</span>
        <em>{{ object.kind }}</em>
      </div>
      <div class="survey-progress">
        <div class="survey-progress-head">
          <span>survey grid</span>
          <strong>{{ surveyedCount }} / {{ features.length }}</strong>
        </div>
        <div class="survey-track" aria-hidden="true">
          <span :style="{ width: surveyProgress + '%' }"></span>
        </div>
      </div>
      <button
        v-for="feature in features"
        :key="feature.id"
        class="star-row"
        :class="{
          active: activeFeature === feature.id,
          surveyed: surveyed.includes(feature.id)
        }"
        :data-star="feature.name"
        :data-surveyed="surveyed.includes(feature.id)"
        type="button"
        @click="$emit('select', feature)"
      >
        <span class="star-swatch" :style="{ backgroundColor: feature.color }"></span>
        <span class="star-name">{{ feature.name }}</span>
        <span class="star-meta">{{ feature.type }} \xB7 {{ feature.diameter }}</span>
        <span class="star-period">{{ feature.coordinates }}</span>
        <span class="star-state">
          {{ surveyed.includes(feature.id) ? "MAPPED" : "OPEN" }}
        </span>
      </button>
    </aside>
  `},LL={props:{open:{type:Boolean,required:!0},mode:{type:String,required:!0},metrics:{type:Object,required:!0},running:{type:Boolean,required:!0},success:{type:Boolean,required:!0},haloAmplitude:{type:Number,required:!0},haloPhase:{type:Number,required:!0},descentAngle:{type:Number,required:!0},surfaceHours:{type:Number,required:!0},landingMode:{type:String,required:!0},landing:{type:Object,required:!0}},emits:["close","set-mode","update-param","update-landing","run"],methods:{number(t,e=2){return Number.isFinite(t)?t.toFixed(e):"\u2014"},update(t,e){this.$emit("update-param",{key:t,value:Number(e.target.value)})},updateLanding(t,e){this.$emit("update-landing",{key:t,value:Number(e.target.value)})},runLabel(){return this.mode!=="sample"||this.landingMode!=="manual"?this.mode==="sample"?"RUN SAMPLE RETURN":"RUN RELAY MISSION":this.landing.active?"ABORT MANUAL DESCENT":this.landing.complete?"RETRY MANUAL LANDING":"START MANUAL LANDING"},landingStatus(){return this.landing.complete?this.landing.success?`TOUCHDOWN SCORE ${this.landing.score}`:`LANDING FAILED \xB7 SCORE ${this.landing.score}`:this.landing.active?"PILOT CONTROL ACTIVE":"TARGET: SOFT TOUCHDOWN / LOW LATERAL DRIFT"}},template:`
    <aside v-if="open" class="mission-panel">
      <div class="mission-header">
        <div>
          <strong>MISSION LAB</strong>
          <small>far-side communication / sampling</small>
        </div>
        <button type="button" class="mission-close" @click="$emit('close')">\xD7</button>
      </div>

      <div class="mission-tabs">
        <button
          type="button"
          :class="{ active: mode === 'relay' }"
          @click="$emit('set-mode', 'relay')"
        >
          RELAY ORBIT
        </button>
        <button
          type="button"
          :class="{ active: mode === 'sample' }"
          @click="$emit('set-mode', 'sample')"
        >
          SAMPLE RETURN
        </button>
      </div>

      <template v-if="mode === 'relay'">
        <label class="mission-control">
          <span>halo amplitude</span>
          <strong>{{ number(haloAmplitude, 0) }} Mm</strong>
          <input
            type="range"
            min="55"
            max="145"
            step="1"
            :value="haloAmplitude"
            @input="update('haloAmplitude', $event)"
          >
        </label>

        <label class="mission-control">
          <span>halo phase</span>
          <strong>{{ number(haloPhase, 0) }}\xB0</strong>
          <input
            type="range"
            min="0"
            max="360"
            step="1"
            :value="haloPhase"
            @input="update('haloPhase', $event)"
          >
        </label>

        <div class="mission-metrics">
          <div><span>far-side coverage</span><strong>{{ number(metrics.coverage, 1) }}%</strong></div>
          <div><span>earth line of sight</span><strong>{{ metrics.earthLink || "\u2014" }}</strong></div>
          <div><span>halo period</span><strong>{{ number(metrics.period, 1) }} d</strong></div>
          <div><span>station keeping</span><strong>{{ number(metrics.stationKeeping, 1) }} m/s yr</strong></div>
        </div>

        <div class="mission-target" :class="{ safe: metrics.goal }">
          {{ metrics.goal ? "RELAY GEOMETRY LOCKED" : "TARGET: COVERAGE \u2265 96% / EARTH LOS" }}
        </div>
      </template>

      <template v-else-if="mode === 'sample'">
        <div class="mission-mode-toggle">
          <button
            type="button"
            :class="{ active: landingMode === 'auto' }"
            @click="$emit('update-landing', { key: 'mode', value: 'auto' })"
          >
            AUTO
          </button>
          <button
            type="button"
            :class="{ active: landingMode === 'manual' }"
            @click="$emit('update-landing', { key: 'mode', value: 'manual' })"
          >
            MANUAL
          </button>
        </div>

        <template v-if="landingMode === 'auto'">
          <label class="mission-control">
            <span>descent angle</span>
            <strong>{{ number(descentAngle, 0) }}\xB0</strong>
            <input
              type="range"
              min="36"
              max="72"
              step="1"
              :value="descentAngle"
              @input="update('descentAngle', $event)"
            >
          </label>

          <label class="mission-control">
            <span>surface hours</span>
            <strong>{{ number(surfaceHours, 0) }} h</strong>
            <input
              type="range"
              min="8"
              max="48"
              step="1"
              :value="surfaceHours"
              @input="update('surfaceHours', $event)"
            >
          </label>

          <div class="mission-metrics">
            <div><span>landing slope</span><strong>{{ number(metrics.slope, 1) }}\xB0</strong></div>
            <div><span>thermal load</span><strong>{{ number(metrics.thermal, 0) }}%</strong></div>
            <div><span>sample mass</span><strong>{{ number(metrics.sampleMass, 0) }} g</strong></div>
            <div><span>comm window</span><strong>{{ number(metrics.commWindow, 1) }} h</strong></div>
          </div>

          <div class="mission-target" :class="{ safe: metrics.goal }">
            {{ metrics.goal ? "SAMPLE RETURN WINDOW VALID" : "TARGET: SLOPE \u2264 7\xB0 / THERMAL \u2264 82% / MASS \u2265 120 g" }}
          </div>
        </template>

        <template v-else>
          <label class="mission-control manual-control">
            <span>main engine</span>
            <strong>{{ number(landing.throttle, 0) }}%</strong>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              :value="landing.throttle"
              @input="updateLanding('throttle', $event)"
            >
          </label>

          <label class="mission-control manual-control">
            <span>lateral trim</span>
            <strong>{{ number(landing.lateral, 2) }}</strong>
            <input
              type="range"
              min="-1"
              max="1"
              step="0.01"
              :value="landing.lateral"
              @input="updateLanding('lateral', $event)"
            >
          </label>

          <div class="mission-metrics landing-metrics">
            <div><span>altitude</span><strong>{{ number(landing.altitude, 0) }} m</strong></div>
            <div><span>vertical speed</span><strong>{{ number(landing.verticalSpeed, 1) }} m/s</strong></div>
            <div><span>horizontal speed</span><strong>{{ number(landing.horizontalSpeed, 1) }} m/s</strong></div>
            <div><span>site offset</span><strong>{{ number(landing.offset, 0) }} m</strong></div>
            <div><span>fuel</span><strong>{{ number(landing.fuel, 0) }}%</strong></div>
            <div><span>vehicle tilt</span><strong>{{ number(landing.tilt, 1) }}\xB0</strong></div>
          </div>

          <div class="mission-target" :class="{ safe: landing.success }">
            {{ landingStatus() }}
          </div>
        </template>
      </template>

      <button
        class="mission-run"
        type="button"
        :disabled="running"
        @click="$emit('run')"
      >
        {{ running ? "SIMULATION RUNNING" : runLabel() }}
      </button>
    </aside>
  `},UL={components:{BrandMark:NL,TelemetryPanel:IL,RegionSelector:PL,InstrumentSelector:OL,FeatureCatalog:DL,MissionPanel:LL},setup(){let t=on(null),e=on(null),n=on(null),i=on(!1),s=on(!0),r=on(0),o=on("Loading NASA lunar surface data"),a=on(0),l=on(0),c=on(!1),u=on(1),h=on("Initializing lunar far-side observation"),d=on([]),f=ms({}),p=ms({visible:!1,x:0,y:0,latitude:"",longitude:"",signal:0}),_=ms({features:10,mapped:"037%",probes:"1 / 5",samples:"000",gravity:"0.166g",state:"initializing"}),g=[{id:"spa",short:"SPA",label:"SOUTH POLE\u2013AITKEN BASIN",size:"2,500 km",coordinates:"53\xB0S 169\xB0W",age:"Pre-Nectarian",kind:"Largest confirmed lunar impact basin",panelTitle:"Basin feature catalog"},{id:"von-karman",short:"VON K\xC1RM\xC1N",label:"VON K\xC1RM\xC1N CRATER",size:"186 km",coordinates:"44.8\xB0S 175.9\xB0E",age:"~3.6\u20134.0 Ga",kind:"Chang'e-4 landing region",panelTitle:"Chang'e-4 landing region"},{id:"apollo",short:"APOLLO",label:"APOLLO BASIN",size:"524 km",coordinates:"35.7\xB0S 151.3\xB0W",age:"~4.0 Ga",kind:"Chang'e-6 sample-return region",panelTitle:"Chang'e-6 sampling region"},{id:"moscoviense",short:"MOSCOVIENSE",label:"MARE MOSCOVIENSE",size:"~276 km",coordinates:"27.3\xB0N 147.9\xB0E",age:"Imbrian",kind:"Rare far-side mare",panelTitle:"Far-side mare boundary"}],m=[{id:"lroc",short:"LROC",label:"Lunar Reconnaissance Orbiter Camera",band:"visible / relief"},{id:"diviner",short:"DIVINER",label:"LRO Diviner thermal mapper",band:"thermal"},{id:"minirf",short:"MINI-RF",label:"LRO Mini-RF radar",band:"radar"},{id:"lfs",short:"LFS",label:"Chang'e-4 Low Frequency Spectrometer",band:"radio"}],x={spa:[{id:0,name:"South Pole\u2013Aitken",type:"Impact basin",diameter:"2,500 km",coordinates:"53\xB0S 169\xB0W",lat:-53,lon:-169,color:"#d8d3c5"},{id:1,name:"Apollo",type:"Impact basin",diameter:"524 km",coordinates:"35.7\xB0S 151.3\xB0W",lat:-35.7,lon:-151.3,color:"#c5c1b7"},{id:2,name:"Von K\xE1rm\xE1n",type:"Crater",diameter:"186 km",coordinates:"44.8\xB0S 175.9\xB0E",lat:-44.8,lon:175.9,color:"#f0d7a0"},{id:3,name:"Finsen",type:"Crater",diameter:"72 km",coordinates:"42.0\xB0S 177.7\xB0W",lat:-42,lon:-177.7,color:"#b7c9d7"},{id:4,name:"Alder",type:"Crater",diameter:"82 km",coordinates:"48.6\xB0S 177.4\xB0W",lat:-48.6,lon:-177.4,color:"#b9b7b0"},{id:5,name:"Bose",type:"Crater",diameter:"91 km",coordinates:"53.5\xB0S 169.8\xB0W",lat:-53.5,lon:-169.8,color:"#9ecbd0"},{id:6,name:"Bhabha",type:"Crater",diameter:"64 km",coordinates:"55.5\xB0S 165.5\xB0W",lat:-55.5,lon:-165.5,color:"#d1b6ca"},{id:7,name:"Stoney",type:"Crater",diameter:"45 km",coordinates:"55.6\xB0S 156.4\xB0W",lat:-55.6,lon:-156.4,color:"#d8cfac"},{id:8,name:"Leibnitz",type:"Crater",diameter:"236 km",coordinates:"38.3\xB0S 179.2\xB0E",lat:-38.3,lon:179.2,color:"#b7c3d1"},{id:9,name:"Ingenii",type:"Impact basin",diameter:"282 km",coordinates:"33.7\xB0S 163.5\xB0E",lat:-33.7,lon:163.5,color:"#9bb5c4"}],"von-karman":[{id:0,name:"Chang'e-4",type:"Landing site",diameter:"1.0 km site",coordinates:"45.5\xB0S 177.6\xB0E",lat:-45.5,lon:177.6,color:"#e8c878"},{id:1,name:"Yutu-2",type:"Rover route",diameter:"1st far-side rover",coordinates:"Von K\xE1rm\xE1n floor",lat:-45.44,lon:177.56,color:"#ff7a45"},{id:2,name:"Von K\xE1rm\xE1n",type:"Crater",diameter:"186 km",coordinates:"44.8\xB0S 175.9\xB0E",lat:-44.8,lon:175.9,color:"#d8d3c5"},{id:3,name:"Finsen",type:"Crater",diameter:"72 km",coordinates:"42.0\xB0S 177.7\xB0W",lat:-42,lon:-177.7,color:"#b7c9d7"},{id:4,name:"Alder",type:"Crater",diameter:"82 km",coordinates:"48.6\xB0S 177.4\xB0W",lat:-48.6,lon:-177.4,color:"#b9b7b0"},{id:5,name:"Bose",type:"Crater",diameter:"91 km",coordinates:"53.5\xB0S 169.8\xB0W",lat:-53.5,lon:-169.8,color:"#9ecbd0"},{id:6,name:"Bhabha",type:"Crater",diameter:"64 km",coordinates:"55.5\xB0S 165.5\xB0W",lat:-55.5,lon:-165.5,color:"#d1b6ca"},{id:7,name:"Stoney",type:"Crater",diameter:"45 km",coordinates:"55.6\xB0S 156.4\xB0W",lat:-55.6,lon:-156.4,color:"#d8cfac"},{id:8,name:"Leibnitz",type:"Crater",diameter:"236 km",coordinates:"38.3\xB0S 179.2\xB0E",lat:-38.3,lon:179.2,color:"#b7c3d1"},{id:9,name:"Apollo",type:"Impact basin",diameter:"524 km",coordinates:"35.7\xB0S 151.3\xB0W",lat:-35.7,lon:-151.3,color:"#c5c1b7"}],apollo:[{id:0,name:"Chang'e-6",type:"Landing site",diameter:"Sample return",coordinates:"Apollo basin floor",lat:-41.64,lon:-153.99,color:"#ff7a45"},{id:1,name:"Apollo",type:"Impact basin",diameter:"524 km",coordinates:"35.7\xB0S 151.3\xB0W",lat:-35.7,lon:-151.3,color:"#d8d3c5"},{id:2,name:"Von K\xE1rm\xE1n",type:"Crater",diameter:"186 km",coordinates:"44.8\xB0S 175.9\xB0E",lat:-44.8,lon:175.9,color:"#c9c4b9"},{id:3,name:"Finsen",type:"Crater",diameter:"72 km",coordinates:"42.0\xB0S 177.7\xB0W",lat:-42,lon:-177.7,color:"#b7c9d7"},{id:4,name:"Alder",type:"Crater",diameter:"82 km",coordinates:"48.6\xB0S 177.4\xB0W",lat:-48.6,lon:-177.4,color:"#b9b7b0"},{id:5,name:"Bose",type:"Crater",diameter:"91 km",coordinates:"53.5\xB0S 169.8\xB0W",lat:-53.5,lon:-169.8,color:"#9ecbd0"},{id:6,name:"Bhabha",type:"Crater",diameter:"64 km",coordinates:"55.5\xB0S 165.5\xB0W",lat:-55.5,lon:-165.5,color:"#d1b6ca"},{id:7,name:"Stoney",type:"Crater",diameter:"45 km",coordinates:"55.6\xB0S 156.4\xB0W",lat:-55.6,lon:-156.4,color:"#d8cfac"},{id:8,name:"Leibnitz",type:"Crater",diameter:"236 km",coordinates:"38.3\xB0S 179.2\xB0E",lat:-38.3,lon:179.2,color:"#b7c3d1"},{id:9,name:"South Pole\u2013Aitken",type:"Impact basin",diameter:"2,500 km",coordinates:"53\xB0S 169\xB0W",lat:-53,lon:-169,color:"#b7c9c4"}],moscoviense:[{id:0,name:"Mare Moscoviense",type:"Lunar mare",diameter:"~276 km",coordinates:"27.3\xB0N 147.9\xB0E",lat:27.3,lon:147.9,color:"#7899a5"},{id:1,name:"Komarov",type:"Crater",diameter:"78 km",coordinates:"24.7\xB0N 152.5\xB0E",lat:24.7,lon:152.5,color:"#c8c5bb"},{id:2,name:"Bolyai",type:"Crater",diameter:"102 km",coordinates:"33.6\xB0N 126.1\xB0E",lat:33.6,lon:126.1,color:"#b9c4d0"},{id:3,name:"Krasnov",type:"Crater",diameter:"60 km",coordinates:"29.7\xB0N 156.1\xB0E",lat:29.7,lon:156.1,color:"#d4c6a8"},{id:4,name:"Tsiolkovskiy",type:"Crater",diameter:"185 km",coordinates:"20.4\xB0S 129.1\xB0E",lat:-20.4,lon:129.1,color:"#96aab2"},{id:5,name:"Hertzsprung",type:"Impact basin",diameter:"570 km",coordinates:"1.4\xB0N 128.9\xB0W",lat:1.4,lon:-128.9,color:"#b2b6af"},{id:6,name:"Korolev",type:"Crater",diameter:"437 km",coordinates:"4.9\xB0S 157.4\xB0W",lat:-4.9,lon:-157.4,color:"#a5b7c5"},{id:7,name:"Freundlich\u2013Sharonov",type:"Impact basin",diameter:"600 km",coordinates:"18.7\xB0N 175.4\xB0E",lat:18.7,lon:175.4,color:"#bcc0b7"},{id:8,name:"Mendeleev",type:"Crater",diameter:"313 km",coordinates:"5.7\xB0N 140.9\xB0E",lat:5.7,lon:140.9,color:"#c4bfb1"},{id:9,name:"Gagarin",type:"Crater",diameter:"265 km",coordinates:"19.7\xB0S 149.2\xB0E",lat:-19.7,lon:149.2,color:"#b8c2c8"}]},E=on("spa"),y=on("lroc"),S=ra(()=>g.find(X=>X.id===E.value)||g[0]),T=ra(()=>x[E.value]||x.spa),R=ra(()=>f[E.value]||[]),v=ra(()=>m.find(X=>X.id===y.value)||m[0]),M=on(!1),w=on("relay"),F=on({}),U=on(!1),H=on(!1),V=on("auto"),k=ms({active:!1,complete:!1,success:!1,altitude:620,verticalSpeed:-38,horizontalSpeed:0,offset:0,fuel:100,throttle:52,lateral:0,tilt:0,elapsed:0,score:0,status:"ready"}),G=ms({haloAmplitude:91,haloPhase:180,descentAngle:56,surfaceHours:24}),K=0;function te(X){let{featuresTotal:ce,...P}=X;Object.assign(_,{...P,features:ce?`${X.features} / ${ce}`:X.features,mapped:`${String(Math.round(X.mapped)).padStart(3,"0")}%`,probes:`${X.probes} / ${X.probesTotal}`,samples:String(X.samples).padStart(3,"0")})}function W(X){if(X.type==="reset"){Object.keys(f).forEach(P=>{delete f[P]});return}if(!X.regionId||!Number.isFinite(X.featureId))return;let ce=f[X.regionId]||(f[X.regionId]=[]);ce.includes(X.featureId)||ce.push(X.featureId)}function Q(X){Object.assign(p,X)}function ae(X){_.state=X.state,h.value=X.status}function we(){e.value&&vo(e.value,{opacity:[.44,0],duration:520,ease:"outExpo"})}function Ie(X){if(r.value=Math.round((X.progress||0)*100),X.type==="started"){o.value="Loading NASA LROC and LOLA data";return}if(X.type.endsWith("error")){o.value="Surface load failed; using lightweight fallback",window.setTimeout(()=>{s.value=!1},900);return}o.value=X.progress>=1?"Real lunar surface ready":"Decoding real lunar surface",X.progress>=1&&(a.value=Math.round(performance.now()-se),performance.mark("lunar-surface-ready"),window.setTimeout(()=>{s.value=!1},520))}function gt(X){w.value=X.mode,F.value=X.metrics||{},U.value=X.running,H.value=X.success,G.haloAmplitude=X.haloAmplitude,G.haloPhase=X.haloPhase,G.descentAngle=X.descentAngle,G.surfaceHours=X.surfaceHours}function ot(X){Object.assign(k,X)}function $e(X){if(X.type==="combo"){u.value=X.value,c.value=!0;return}if(X.type==="combo-end"){c.value=!1;return}let ce={id:++K,x:X.x,y:X.y,label:X.label||"MAPPED",value:X.value||"signal locked"};d.value.push(ce),sa(()=>{let P=document.querySelector(`[data-critical-id="${ce.id}"]`);if(!P)return;vu({onComplete:()=>{d.value=d.value.filter(pe=>pe.id!==ce.id)}}).add(P,{opacity:[0,1],scale:[.45,1.12],y:[0,-28],duration:240,ease:"out(4)"}).add(P,{opacity:0,scale:.9,y:-112,duration:760,ease:"outExpo"},510)})}function re(X){l.value=X.id,n.value?.observeStar(X.id),n.value?.scan(X.id)}function me(X){E.value=X.id,l.value=T.value[0]?.id??-1,n.value?.setObject(X.id)}function Te(X){y.value=X.id,n.value?.setTelescope(X.id)}function ze(){n.value?.scan()}function Oe(){n.value?.deployProbe()}function We(){n.value?.sample()}function pt(){M.value=!0,n.value?.setMissionMode(w.value)}function A(){M.value=!1,n.value?.stopMission()}function L(X){w.value=X,X!=="sample"&&(V.value="auto"),n.value?.setMissionMode(X)}function z({key:X,value:ce}){if(X==="mode"){V.value=ce==="manual"?"manual":"auto",V.value==="auto"&&k.active&&n.value?.stopManualLanding();return}n.value?.setManualLandingControl({key:X,value:ce})}function Y({key:X,value:ce}){G[X]=ce,n.value?.setMissionParams({[X]:ce})}function q(){if(w.value==="sample"&&V.value==="manual"){k.active?n.value?.stopManualLanding():n.value?.startManualLanding();return}U.value=!0,n.value?.runMission()}function ne(){c.value=!1,d.value=[],n.value?.replay()}let se=performance.now();return ao(()=>{try{n.value=d1(t.value,{onTelemetry:te,onState:ae,onCritical:$e,onPulse:we,onMission:gt,onSurvey:W,onPointer:Q,onLanding:ot,onLoading:Ie})}catch(X){console.error(X),i.value=!0}}),ja(()=>{n.value?.dispose()}),{canvasRef:t,flashRef:e,webglError:i,loadingVisible:s,loadingProgress:r,loadingText:o,loadingReadyMs:a,activeFeature:l,comboVisible:c,combo:u,statusText:h,criticalMarkers:d,surfaceProbe:p,telemetry:_,regions:g,instruments:m,currentObject:S,currentFeatures:T,currentSurveyed:R,selectedObject:E,selectedInstrument:y,currentInstrument:v,focusFeature:re,selectObject:me,selectInstrument:Te,scan:ze,deployProbe:Oe,sample:We,missionOpen:M,missionMode:w,missionMetrics:F,missionRunning:U,missionSuccess:H,landingMode:V,landingState:k,missionParams:G,openMission:pt,closeMission:A,setMissionMode:L,updateLandingControl:z,updateMissionParam:Y,runMission:q,replay:ne}},template:`
    <main class="app">
      <canvas
        ref="canvasRef"
        class="scene-canvas"
        aria-label="Far Side of the Moon realtime 3D lunar observatory"
      ></canvas>

      <div v-if="loadingVisible" class="loading-screen">
        <div class="loading-mark">aiANTlab</div>
        <div class="loading-copy">{{ loadingText }}</div>
        <div class="loading-track">
          <span :style="{ width: loadingProgress + '%' }"></span>
        </div>
        <div class="loading-value">{{ loadingProgress }}%</div>
      </div>

      <div class="hud">
        <header class="topbar">
          <BrandMark />
          <TelemetryPanel :telemetry="telemetry" />
        </header>

        <RegionSelector
          :objects="regions"
          :selected="selectedObject"
          @select="selectObject"
        />

        <InstrumentSelector
          :instruments="instruments"
          :selected="selectedInstrument"
          @select="selectInstrument"
        />

        <div class="status-pill">
          <span class="status-dot"></span>
          <span>{{ statusText }}</span>
        </div>

        <div v-if="comboVisible" :key="combo" class="combo">
          SIGNAL x{{ combo }}
        </div>

        <FeatureCatalog
          :features="currentFeatures"
          :active-feature="activeFeature"
          :object="currentObject"
          :surveyed="currentSurveyed"
          @select="focusFeature"
        />

        <MissionPanel
          :open="missionOpen"
          :mode="missionMode"
          :metrics="missionMetrics"
          :running="missionRunning"
          :success="missionSuccess"
          :halo-amplitude="missionParams.haloAmplitude"
          :halo-phase="missionParams.haloPhase"
          :descent-angle="missionParams.descentAngle"
          :surface-hours="missionParams.surfaceHours"
          :landing-mode="landingMode"
          :landing="landingState"
          @close="closeMission"
          @set-mode="setMissionMode"
          @update-param="updateMissionParam"
          @update-landing="updateLandingControl"
          @run="runMission"
        />

        <section class="headline">
          <div class="headline-kicker">
            <span>NASA \xD7 CNSA</span>
            <span class="kicker-accent">FAR SIDE</span>
          </div>
          <h1 class="hero-title">
            <span class="title-column">
              <span class="title-letter">T</span>
              <span class="title-letter">H</span>
              <span class="title-letter">E</span>
            </span>
            <span class="title-column accent">
              <span class="title-letter">M</span>
              <span class="title-letter">O</span>
              <span class="title-letter">O</span>
              <span class="title-letter">N</span>
            </span>
          </h1>
          <p class="headline-note">
            {{ currentObject.coordinates }} \xB7 {{ currentObject.age }}
          </p>
        </section>

        <footer class="footer">
          <span class="status">{{ statusText }}</span>
          <button class="action mission-action" type="button" @click="openMission">MISSION</button>
          <button class="action ship-action" type="button" @click="deployProbe">PROBE</button>
          <button class="action" type="button" @click="sample">SAMPLE</button>
          <button class="action scan-action" type="button" @click="scan">SCAN</button>
          <button class="replay" type="button" @click="replay">REPLAY</button>
        </footer>
      </div>

      <div class="flash" ref="flashRef"></div>
      <div
        v-if="surfaceProbe.visible"
        class="surface-probe"
        :style="{ left: surfaceProbe.x + 'px', top: surfaceProbe.y + 'px' }"
      >
        <span class="surface-probe-ring"></span>
        <strong>{{ surfaceProbe.latitude }} \xB7 {{ surfaceProbe.longitude }}</strong>
        <small>terrain signal {{ surfaceProbe.signal }}%</small>
      </div>
      <div class="crit-layer">
        <div
          v-for="marker in criticalMarkers"
          :key="marker.id"
          class="crit-number"
          :data-critical-id="marker.id"
          :style="{ left: marker.x + 'px', top: marker.y + 'px' }"
        >
          <strong>{{ marker.label }}</strong>
          <span>{{ marker.value }}</span>
        </div>
      </div>

      <div v-if="webglError" class="webgl-fallback">
        WebGL is unavailable in this browser.
      </div>
    </main>
  `};qc(UL).mount("#app");})();
/*! Bundled license information:

@vue/shared/dist/shared.esm-bundler.js:
  (**
  * @vue/shared v3.5.43
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/reactivity/dist/reactivity.esm-bundler.js:
  (**
  * @vue/reactivity v3.5.43
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/runtime-core/dist/runtime-core.esm-bundler.js:
  (**
  * @vue/runtime-core v3.5.43
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/runtime-dom/dist/runtime-dom.esm-bundler.js:
  (**
  * @vue/runtime-dom v3.5.43
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/compiler-core/dist/compiler-core.esm-bundler.js:
  (**
  * @vue/compiler-core v3.5.43
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/compiler-dom/dist/compiler-dom.esm-bundler.js:
  (**
  * @vue/compiler-dom v3.5.43
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

vue/dist/vue.esm-bundler.js:
  (**
  * vue v3.5.43
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

animejs/dist/modules/core/consts.js:
animejs/dist/modules/core/globals.js:
animejs/dist/modules/core/helpers.js:
animejs/dist/modules/core/transforms.js:
animejs/dist/modules/core/colors.js:
animejs/dist/modules/core/values.js:
animejs/dist/modules/core/render.js:
animejs/dist/modules/core/styles.js:
animejs/dist/modules/core/clock.js:
animejs/dist/modules/core/targets.js:
animejs/dist/modules/core/units.js:
  (**
   * Anime.js - core - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/adapters/registry.js:
  (**
   * Anime.js - adapters - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/animation/additive.js:
animejs/dist/modules/animation/composition.js:
animejs/dist/modules/animation/animation.js:
  (**
   * Anime.js - animation - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/engine/engine.js:
  (**
   * Anime.js - engine - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/timer/timer.js:
  (**
   * Anime.js - timer - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/easings/none.js:
animejs/dist/modules/easings/eases/parser.js:
  (**
   * Anime.js - easings - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/timeline/position.js:
animejs/dist/modules/timeline/timeline.js:
  (**
   * Anime.js - timeline - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/index.js:
  (**
   * Anime.js - ESM
   * @version v4.5.0
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
