function E(){}function Q(t,n){for(const e in n)t[e]=n[e];return t}function D(t){return t()}function L(){return Object.create(null)}function g(t){t.forEach(D)}function O(t){return typeof t=="function"}function ht(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function mt(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function R(t){return Object.keys(t).length===0}function W(t,...n){if(t==null)return E;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function pt(t,n,e){t.$$.on_destroy.push(W(n,e))}function yt(t,n,e,i){if(t){const r=q(t,n,e,i);return t[0](r)}}function q(t,n,e,i){return t[1]&&i?Q(e.ctx.slice(),t[1](i(n))):e.ctx}function gt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(n.dirty.length,r.length);for(let u=0;u<s;u+=1)o[u]=n.dirty[u]|r[u];return o}return n.dirty|r}return n.dirty}function xt(t,n,e,i,r,o){if(r){const s=q(n,e,i,o);t.p(s,r)}}function bt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let w=!1;function U(){w=!0}function V(){w=!1}function X(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<n.length;l++){const f=n[l];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const l=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=l?r+1:X(1,r,x=>n[e[x]].claim_order,l))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,r=Math.max(a,r)}const o=[],s=[];let u=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(o.push(n[c-1]);u>=c;u--)s.push(n[u]);u--}for(;u>=0;u--)s.push(n[u]);o.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<o.length&&s[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(s[c],f)}}function Z(t,n){if(w){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function tt(t,n,e){t.insertBefore(n,e||null)}function nt(t,n,e){w&&!e?Z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function $t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function G(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function C(t){return document.createTextNode(t)}function Et(){return C(" ")}function vt(){return C("")}function wt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function it(t){return Array.from(t.childNodes)}function z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,n,e,i,r=!1){z(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(n(u)){const c=e(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(n(u)){const c=e(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function rt(t,n,e,i){return F(t,r=>r.nodeName===n,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];e[u.name]||o.push(u.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(n))}function Tt(t,n,e){return rt(t,n,e,G)}function st(t,n){return F(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>C(n),!0)}function Nt(t){return st(t," ")}function P(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function At(t,n){const e=P(t,"HTML_TAG_START",0),i=P(t,"HTML_TAG_END",e);if(e===i)return new k(void 0,n);z(t);const r=t.splice(e,i-e+1);v(r[0]),v(r[r.length-1]);const o=r.slice(1,r.length-1);for(const s of o)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new k(o,n)}function Mt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function St(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function ct(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}class lt{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=et(e.nodeName):this.e=G(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)tt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(v)}}class k extends lt{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}}function Ct(t,n){return new t(n)}let y;function p(t){y=t}function T(){if(!y)throw new Error("Function called outside component initialization");return y}function jt(t){T().$$.on_mount.push(t)}function Ht(t){T().$$.after_update.push(t)}function Lt(t){T().$$.on_destroy.push(t)}function Pt(){const t=T();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const o=ct(n,e,{cancelable:i});return r.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}const h=[],B=[];let m=[];const A=[],I=Promise.resolve();let M=!1;function J(){M||(M=!0,I.then(K))}function kt(){return J(),I}function S(t){m.push(t)}function Bt(t){A.push(t)}const N=new Set;let _=0;function K(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const n=h[_];_++,p(n),ot(n.$$)}}catch(n){throw h.length=0,_=0,n}for(p(null),h.length=0,_=0;B.length;)B.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];N.has(e)||(N.add(e),e())}m.length=0}while(h.length);for(;A.length;)A.pop()();M=!1,N.clear(),p(t)}function ot(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}function ut(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const $=new Set;let d;function Dt(){d={r:0,c:[],p:d}}function Ot(){d.r||g(d.c),d=d.p}function at(t,n){t&&t.i&&($.delete(t),t.i(n))}function qt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Gt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function zt(t){t&&t.c()}function Ft(t,n){t&&t.l(n)}function ft(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||S(()=>{const s=t.$$.on_mount.map(D).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...s):g(s),t.$$.on_mount=[]}),o.forEach(S)}function dt(t,n){const e=t.$$;e.fragment!==null&&(ut(e.after_update),g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function _t(t,n){t.$$.dirty[0]===-1&&(h.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function It(t,n,e,i,r,o,s,u=[-1]){const c=y;p(t);const l=t.$$={fragment:null,ctx:[],props:o,update:E,not_equal:r,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:L(),dirty:u,skip_bound:!1,root:n.target||c.$$.root};s&&s(l.root);let f=!1;if(l.ctx=e?e(t,n.props||{},(a,x,...j)=>{const H=j.length?j[0]:x;return l.ctx&&r(l.ctx[a],l.ctx[a]=H)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](H),f&&_t(t,a)),x}):[],l.update(),f=!0,g(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){U();const a=it(n.target);l.fragment&&l.fragment.l(a),a.forEach(v)}else l.fragment&&l.fragment.c();n.intro&&at(t.$$.fragment),ft(t,n.target,n.anchor,n.customElement),V(),K()}p(c)}class Jt{$destroy(){dt(this,1),this.$destroy=E}$on(n,e){if(!O(e))return E;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!R(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{ft as A,dt as B,yt as C,xt as D,bt as E,gt as F,Z as G,E as H,pt as I,mt as J,k as K,At as L,$t as M,Pt as N,Lt as O,Gt as P,Bt as Q,Jt as S,Et as a,nt as b,Nt as c,qt as d,vt as e,Ot as f,at as g,v as h,It as i,Ht as j,G as k,Tt as l,it as m,wt as n,jt as o,St as p,C as q,st as r,ht as s,kt as t,Mt as u,Dt as v,B as w,Ct as x,zt as y,Ft as z};
