var Zd=Object.defineProperty;var Jd=(i,t,e)=>t in i?Zd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var cn=(i,t,e)=>Jd(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const cf=2*24*3600*1e3,hf="quatorze.shop.v1";let Fe={budget:null,bag:[],orders:[],wish:[]};try{const i=localStorage.getItem(hf);i&&(Fe={...Fe,...JSON.parse(i)})}catch{}const uf=[],ff=i=>uf.push(i);function Ji(){try{localStorage.setItem(hf,JSON.stringify(Fe))}catch{}for(const i of uf)i()}const la=i=>Math.round(i*100)/100,pr=()=>Fe.budget,ca=()=>Fe.bag,sr=()=>Fe.orders,Zi=()=>la(Fe.bag.reduce((i,t)=>i+t.price,0)),rr=()=>la(Fe.orders.reduce((i,t)=>i+t.lines.reduce((e,n,s)=>e+(t.returned.includes(s)?0:n.price),0),0)),ai=()=>Math.max(0,la((Fe.budget??0)-rr()-Zi()));function Uc(i){Fe.budget=la(i),Ji()}function df(i,t,e){const n=la(e-ai());return n>0?n:(Fe.bag.push({id:i,size:t,price:e}),Ji(),0)}function pf(i){Fe.bag.splice(i,1),Ji()}function mf(i){var n;if(!Fe.bag.length)return null;const t=Date.now(),e={n:(((n=Fe.orders.at(-1))==null?void 0:n.n)??1400)+1,at:new Date(t).toISOString(),lines:Fe.bag,total:Zi(),returned:[],ship:i,arrives:new Date(t+cf).toISOString()};return Fe.orders.push(e),Fe.bag=[],Fe.ship=i,Ji(),e}const gf=()=>Fe.ship;function xf(i,t){const e=Fe.orders.find(n=>n.n===i);e&&(e.token=t,Ji())}const Nc=i=>!!i.arrives&&Date.now()>=Date.parse(i.arrives);function vf(i,t){const e=Fe.orders.find(n=>n.n===i);!e||e.returned.includes(t)||(e.returned.push(t),Ji())}const ar=i=>Fe.wish.includes(i);function _f(i){Fe.wish=ar(i)?Fe.wish.filter(t=>t!==i):[...Fe.wish,i],Ji()}const Fc=()=>Fe.wish;function Mf(){Fe={budget:null,bag:[],orders:[],wish:[]},Ji()}const Hr=i=>"$"+(Number.isInteger(i)?i.toLocaleString("en-US"):i.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})),Kd=Object.freeze(Object.defineProperty({__proto__:null,DELIVERY_MS:cf,add:df,arrived:Nc,bag:ca,bagTotal:Zi,budget:pr,checkout:mf,giveBack:vf,lastShip:gf,left:ai,money:Hr,onChange:ff,orders:sr,removeAt:pf,setBudget:Uc,setToken:xf,spent:rr,startOver:Mf,toggleWish:_f,wished:ar,wishes:Fc},Symbol.toStringTag,{value:"Module"})),Qd=`
.qbox { --w: 230px; --d: 160px; --h: 136px; --ease: cubic-bezier(.34, 1.45, .55, 1);
  position: relative; width: 360px; max-width: 100%; height: 330px; margin: 0 auto; perspective: 1200px; }
.qbox .qb-shadow { position: absolute; left: 50%; top: 79%; width: 330px; height: 64px; margin-left: -165px; border-radius: 50%;
  background: radial-gradient(closest-side, rgba(40, 20, 25, .32), rgba(40, 20, 25, 0)); transition: transform .5s; }
.qbox .qb-sc { position: absolute; left: 50%; top: 60%; width: 0; height: 0; transform-style: preserve-3d;
  transform: scale(var(--k, 1)) rotateX(-27deg) rotateY(-36deg); }
/* a phone held upright: the open flaps reach further than the box, so it's drawn smaller */
@media (max-width: 440px) { .qbox { --k: .74; height: 270px; } .qbox .qb-shadow { transform: scale(.74); top: 76%; } }
.qbox .qb-sc > * { position: absolute; transform-style: preserve-3d; box-sizing: border-box; }
.qbox .qb-face { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
.qbox .qb-front, .qbox .qb-back, .qbox .qb-inback { width: var(--w); height: var(--h); left: calc(var(--w) / -2); top: calc(var(--h) / -2); }
.qbox .qb-left, .qbox .qb-right, .qbox .qb-inleft, .qbox .qb-inright { width: var(--d); height: var(--h); left: calc(var(--d) / -2); top: calc(var(--h) / -2); }
.qbox .qb-front { transform: translateZ(calc(var(--d) / 2)); background: linear-gradient(#24201c, #15120f);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 7px; }
.qbox .qb-front::before { content: ''; position: absolute; inset: 9px; border: 1px solid rgba(217, 181, 108, .55); }
.qbox .qb-front b { font: 500 21px/1 'Bodoni Moda', Didot, Georgia, serif; letter-spacing: .3em; padding-left: .3em; color: #dcb86e; }
.qbox .qb-front i { font: 500 7.5px/1 'Inter Tight', system-ui, sans-serif; font-style: normal; letter-spacing: .32em; color: rgba(220, 184, 110, .75); }
.qbox .qb-back { transform: rotateY(180deg) translateZ(calc(var(--d) / 2)); background: #110f0d; }
.qbox .qb-left { transform: rotateY(-90deg) translateZ(calc(var(--w) / 2)); background: linear-gradient(#141210, #0b0a09); }
.qbox .qb-right { transform: rotateY(90deg) translateZ(calc(var(--w) / 2)); background: linear-gradient(#1a1714, #0f0d0b);
  display: flex; align-items: center; justify-content: center; }
.qbox .qb-right b { font: 500 26px/1 'Bodoni Moda', Didot, Georgia, serif; color: rgba(220, 184, 110, .8); }
/* pink inside */
.qbox .qb-inback { transform: translateZ(calc(var(--d) / -2 + 1px)); background: linear-gradient(#f6d3da, #e9aebb); }
.qbox .qb-inleft { transform: rotateY(90deg) translateZ(calc(var(--w) / -2 + 1px)); background: linear-gradient(#f2c6cf, #e3a2b0); }
.qbox .qb-inright { transform: rotateY(-90deg) translateZ(calc(var(--w) / -2 + 1px)); background: linear-gradient(#f9dbe1, #ecb5c1); }
.qbox .qb-floor { width: var(--w); height: var(--d); left: calc(var(--w) / -2); top: calc(var(--d) / -2);
  transform: rotateX(90deg) translateZ(calc(var(--h) / -2 + 1px)); background: #e7a9b6; }
/* the flaps turn on their hinges: --a is the angle, open by default */
.qbox .qb-fl { left: 0; top: 0; transform-origin: 50% 0; background: linear-gradient(#2a2622, #1b1815);
  transition: transform .62s var(--ease); outline: 1px solid rgba(0, 0, 0, .25); }
.qbox .qb-ff, .qbox .qb-fb { width: var(--w); height: calc(var(--d) / 2); margin-left: calc(var(--w) / -2); }
.qbox .qb-fl.qb-side { width: var(--d); height: calc(var(--w) / 2 - 6px); margin-left: calc(var(--d) / -2); background: linear-gradient(#211e1a, #171411); }
.qbox .qb-ff { --a: -212deg; transform: translate3d(0, calc(var(--h) / -2 - 1px), calc(var(--d) / 2)) rotateX(var(--a)); }
.qbox .qb-fb { --a: 212deg; transform: translate3d(0, calc(var(--h) / -2 - 1px), calc(var(--d) / -2)) rotateX(var(--a)); }
.qbox .qb-fleft { --a: 208deg; transform: translate3d(calc(var(--w) / -2), calc(var(--h) / -2), 0) rotateY(90deg) rotateX(var(--a)); }
.qbox .qb-fright { --a: -208deg; transform: translate3d(calc(var(--w) / 2), calc(var(--h) / -2), 0) rotateY(90deg) rotateX(var(--a)); }
.qbox.closed .qb-ff { --a: -90deg; } .qbox.closed .qb-fb { --a: 90deg; }
.qbox.closed .qb-fleft { --a: 90deg; } .qbox.closed .qb-fright { --a: -90deg; }
/* shutting: the short sides first, then the long ones over them; opening: the long ones first */
.qbox.closed .qb-side { transition-delay: 0s; } .qbox.closed .qb-ff, .qbox.closed .qb-fb { transition-delay: .3s; }
.qbox:not(.closed) .qb-side { transition-delay: .18s; }
.qbox .qb-ff::after, .qbox .qb-fb::after { content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 1px; background: rgba(220, 184, 110, .35); }
/* tissue paper, puffed up out of the top when it's open */
.qbox .qb-tissue { width: 70px; height: 56px; left: -35px; top: -56px; border-radius: 40% 60% 8px 8px / 70% 70% 8px 8px;
  background: linear-gradient(160deg, rgba(255, 236, 240, .95), rgba(247, 194, 206, .9)); transform-origin: 50% 100%;
  opacity: 0; transition: opacity .3s, transform .5s var(--ease); }
.qbox.puffed .qb-tissue { opacity: 1; }
/* the seal and the label, on the lid */
.qbox .qb-seal { width: 62px; height: 62px; left: -31px; top: -31px; border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #f6dc9c, #c9a052 55%, #9c7731); box-shadow: inset 0 0 0 3px rgba(255, 240, 200, .35);
  display: flex; align-items: center; justify-content: center; font: 500 30px/1 'Bodoni Moda', Didot, Georgia, serif; color: #3a2a10;
  transform: translate3d(28px, calc(var(--h) / -2 - 3px), 26px) rotateX(90deg) rotateZ(14deg) scale(var(--s, 0));
  transition: transform .45s var(--ease) .1s; }
.qbox .qb-label { width: 118px; height: 74px; left: -59px; top: -37px; background: #fdfcf8; border-radius: 3px; padding: 9px 10px;
  font: 400 8.5px/1.35 'Inter Tight', system-ui, sans-serif; color: #222; overflow: hidden;
  transform: translate3d(-50px, calc(var(--h) / -2 - 2px), -18px) rotateX(90deg) rotateZ(-7deg) scale(var(--s, 0));
  transition: transform .4s var(--ease); box-shadow: 0 0 0 1px rgba(0, 0, 0, .06); }
.qbox .qb-label small { display: block; font-size: 6.5px; letter-spacing: .2em; text-transform: uppercase; color: #8a7d70; margin-bottom: 3px; }
.qbox .qb-label b { display: block; font-size: 10px; font-weight: 600; }
.qbox .qb-label::after { content: ''; position: absolute; left: 10px; right: 10px; bottom: 8px; height: 10px;
  background: repeating-linear-gradient(90deg, #222 0 1px, transparent 1px 3px, #222 3px 5px, transparent 5px 6px); }
.qbox.sealed .qb-seal, .qbox.sealed .qb-label { --s: 1; }
/* the things going in */
.qbox .qb-drop { width: 62px; height: 78px; left: -31px; top: -39px; background: #fff center / cover no-repeat; border-radius: 3px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .18); }
.qbox.still, .qbox.still * { transition: none !important; }
@keyframes qb-wobble { 0%, 100% { transform: rotate(0); } 20% { transform: rotate(-2.5deg); } 40% { transform: rotate(2deg); } 60% { transform: rotate(-1deg); } }
.qbox.wobble .qb-sc-wrap { animation: qb-wobble 1.6s ease-in-out infinite; transform-origin: 50% 80%; }
.qbox .qb-sc-wrap { position: absolute; inset: 0; transform-style: preserve-3d; }
`;function jd(i={}){const t=e=>e.replace(/[&<>"]/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[n]);return`<div class="qb-shadow"></div><div class="qb-sc-wrap"><div class="qb-sc">
    <div class="qb-face qb-back"></div><div class="qb-face qb-left"></div>
    <div class="qb-face qb-inback"></div><div class="qb-face qb-inleft"></div><div class="qb-face qb-inright"></div><div class="qb-face qb-floor"></div>
    <div class="qb-tissue" style="transform: translate3d(-40px, calc(var(--h) / -2), -20px) rotateY(20deg) rotateZ(-18deg)"></div>
    <div class="qb-tissue" style="transform: translate3d(30px, calc(var(--h) / -2), -30px) rotateY(-30deg) rotateZ(14deg)"></div>
    <div class="qb-tissue" style="transform: translate3d(0px, calc(var(--h) / -2), 10px) scale(.8)"></div>
    <div class="qb-face qb-right"><b>14</b></div>
    <div class="qb-face qb-front"><b>QUATORZE</b><i>LONDON · PARIS · YOURS</i></div>
    <div class="qb-fl qb-side qb-fleft"></div><div class="qb-fl qb-side qb-fright"></div>
    <div class="qb-fl qb-ff"></div><div class="qb-fl qb-fb"></div>
    <div class="qb-label"><small>Ship to</small><b>${t(i.name??"You")}</b>${t(i.line??"")}</div>
    <div class="qb-seal">Q</div>
  </div></div>`}function Ul(i,t,e){if(!document.getElementById("qbox-css")){const s=document.createElement("style");s.id="qbox-css",s.textContent=Qd,document.head.append(s)}const n=document.createElement("div");return n.className="qbox still"+(e?" closed sealed":""),n.innerHTML=jd(t),i.append(n),requestAnimationFrame(()=>requestAnimationFrame(()=>n.classList.remove("still"))),n}const ps=i=>new Promise(t=>setTimeout(t,i));async function tp(i,t){const e=i.querySelector(".qb-sc");await ps(350);const n=t.slice(0,9),s=n.map((r,a)=>{const o=document.createElement("div");o.className="qb-drop",o.style.backgroundImage=`url("${r}")`;const l=n.length,c=l===1?0:-70+140*a/(l-1),h=(a%2?-26:22)+a%3*6,f=a%2?7:-6,u=d=>`translate3d(${c}px, ${d}px, ${h}px) rotateZ(${f}deg)`;return e.append(o),o.animate([{transform:u(-420),opacity:0},{transform:u(-150),opacity:1,offset:.35},{transform:u(-10)}],{duration:700,delay:a*160,easing:"cubic-bezier(.45, 0, .55, 1.25)",fill:"both"}).finished});await Promise.all(s),await ps(250),i.classList.add("closed"),await ps(1050),i.classList.add("sealed"),await ps(450),await i.querySelector(".qb-sc-wrap").animate([{transform:"none"},{transform:"translateY(-16px)"},{transform:"none"},{transform:"translateY(-5px)"},{transform:"none"}],{duration:650,easing:"ease-out"}).finished;for(const r of e.querySelectorAll(".qb-drop"))r.remove()}async function ep(i,t){i.classList.remove("wobble");for(const r of t)r.style.opacity="0";i.classList.remove("sealed"),await ps(420),i.classList.remove("closed"),await ps(560),i.classList.add("puffed"),await ps(200);const e=i.getBoundingClientRect(),n=e.left+e.width/2,s=e.top+e.height*.5;await Promise.all(t.map((r,a)=>{const o=r.getBoundingClientRect(),l=n-(o.left+o.width/2),c=s-(o.top+o.height/2);return r.style.opacity="",r.animate([{transform:`translate(${l}px, ${c}px) scale(.15) rotate(${a%2?12:-12}deg)`,opacity:0},{transform:`translate(${l*.4}px, ${c*.4-90}px) scale(.6) rotate(${a%2?-4:4}deg)`,opacity:1,offset:.45},{transform:"none",opacity:1}],{duration:950,delay:a*110,easing:"cubic-bezier(.25, .8, .35, 1)",fill:"both"}).finished}))}const np=`
.arr { text-align: center; padding: 34px 16px 60px; font-family: 'Inter Tight', system-ui, sans-serif; color: #141210; }
.arr .arr-kicker { font: 600 11px/1 'Inter Tight', system-ui, sans-serif; letter-spacing: .22em; text-transform: uppercase; color: #b8924a; }
.arr h1 { font: 400 clamp(30px, 6vw, 46px)/1.1 'Bodoni Moda', Didot, Georgia, serif; margin: 12px 0 6px; }
.arr .arr-hint { color: #776f66; font-size: 14px; margin: 0; min-height: 20px; transition: opacity .4s; }
.arr .arr-box { cursor: pointer; margin: 6px auto 0; max-width: 380px; -webkit-tap-highlight-color: transparent; }
.arr .arr-after h2 { font: 400 28px/1.1 'Bodoni Moda', Didot, Georgia, serif; margin: 10px 0 22px; opacity: 0; transition: opacity .6s .3s; }
.arr.opened .arr-after h2 { opacity: 1; }
.arr .arr-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 22px 14px; max-width: 920px; margin: 0 auto; text-align: left; }
.arr .arr-card img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; object-position: 50% 20%; background: #f5f1ec; display: block; border-radius: 2px; }
.arr .arr-card .n { margin-top: 8px; font-size: 13px; line-height: 1.3; }
.arr .arr-card .m { font-size: 12px; color: #776f66; margin-top: 2px; }
.arr .arr-love { margin-top: 40px; font: 400 italic 18px/1.4 'Bodoni Moda', Didot, Georgia, serif; opacity: 0; transition: opacity .8s 1s; }
.arr .arr-love b { font-style: normal; letter-spacing: .26em; font-weight: 500; }
.arr.opened .arr-love { opacity: 1; }
@media (max-width: 520px) { .arr .arr-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
`,zo=i=>i.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),ip=i=>"$"+(Number.isInteger(i)?i.toLocaleString("en-US"):i.toFixed(2));function sp(i,t){if(!document.getElementById("arr-css")){const a=document.createElement("style");a.id="arr-css",a.textContent=np,document.head.append(a)}i.innerHTML=`<div class="arr">
    <div class="arr-kicker">Order Q14-${t.n}</div>
    <h1>Your package has arrived${t.first?`, ${zo(t.first)}`:""}!</h1>
    <p class="arr-hint">Tap the box to open it</p>
    <div class="arr-box"></div>
    <div class="arr-after"><h2>Everything in your box</h2><div class="arr-grid">${t.things.map(a=>`<div class="arr-card" style="opacity:0">
      <img src="${a.img}" alt=""><div class="n">${zo(a.name)}</div>
      <div class="m">${[a.colour,a.size?(a.shoe?"US ":"Size ")+a.size:"One size"].filter(Boolean).map(o=>zo(String(o))).join(" · ")} · ${ip(a.price)}</div></div>`).join("")}</div>
      <p class="arr-love">With love, <b>QUATORZE</b></p></div>
  </div>`;const e=i.querySelector(".arr"),n=Ul(i.querySelector(".arr-box"),{name:t.first||"You",line:`Order Q14-${t.n}`},!0);n.classList.add("wobble");let s=!1;const r=()=>{s||(s=!0,e.querySelector(".arr-hint").style.opacity="0",e.classList.add("opened"),ep(n,[...e.querySelectorAll(".arr-card")]))};n.addEventListener("click",r),setTimeout(r,1600)}const rp="https://quatorze.robynmiller.workers.dev",ap="348e242cf307ae8a7a4ed7d5fb2e3d8f6e4ce79438cebcb6";async function Sf(i){if(!i.ship)return null;const t=i.lines.filter((s,r)=>!i.returned.includes(r)).map(s=>({id:s.id,size:s.size}));if(!t.length)return null;const e=await fetch(`${rp}/order`,{method:"POST",headers:{"content-type":"application/json","x-quatorze-key":ap},body:JSON.stringify({n:i.n,first:i.ship.first,email:i.ship.email,lines:t})});if(!e.ok)throw new Error(`mail server: ${e.status} ${await e.text()}`);const{token:n}=await e.json();return xf(i.n,n),n}const bf="./";let gn={depts:[],items:[]};const Di=new Map,Oc=i=>{var t;return((t=gn.depts.find(e=>e.key===i))==null?void 0:t.name)??i},_i=(i,t=0)=>`${bf}store/p/${i.id}-${t}.jpg`;let Nl=()=>{};const He=document.getElementById("store"),ms=He.querySelector("#page"),rn=i=>i.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Re=Hr,Bc={heart:'<svg viewBox="0 0 24 24"><path d="M12 20s-7.5-4.6-9.2-9.4C1.6 7.2 3.8 4 7.2 4c2 0 3.5 1.1 4.8 2.8C13.3 5.1 14.8 4 16.8 4c3.4 0 5.6 3.2 4.4 6.6C19.5 15.4 12 20 12 20z"/></svg>',close:'<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>'};function fs(i,t){const e=i.slice();let n=t;for(let s=e.length-1;s>0;s--){n=n*1103515245+12345&2147483647;const r=n%(s+1);[e[s],e[r]]=[e[r],e[s]]}return e}function yf(i){return i.was?`<span class="now sale">${Re(i.price)}</span> <s>${Re(i.was)}</s>`:`<span class="now">${Re(i.price)}</span>`}function zc(i){const t=(i.shape??1.3)>=1.12?"fill":"whole";return`<a class="card" href="#/p/${i.id}">
    <div class="ph ${t}"><img class="a" src="${_i(i)}" alt="" loading="lazy" decoding="async">${i.n>1?`<img class="b" src="${_i(i,1)}" alt="" loading="lazy" decoding="async">`:""}
      ${i.was?'<span class="flag">Sale</span>':""}
      <button class="heart${ar(i.id)?" on":""}" data-act="wish" data-id="${i.id}" aria-label="Save">${Bc.heart}</button></div>
    <div class="nm">${rn(i.name)}</div>
    <div class="pr">${yf(i)}</div>
    ${i.colour?`<div class="cl">${rn(i.colour)}</div>`:""}
  </a>`}const op=i=>i.length?`<div class="grid">${i.map(zc).join("")}</div>`:'<p class="empty">Nothing here yet.</p>',pa=(i,t,e)=>`<section class="row"><div class="rowhead"><h2>${i}</h2><a href="${t}">Shop all</a></div><div class="strip">${e.map(zc).join("")}</div></section>`;function Nh(){const i=[...gn.items].sort((a,o)=>o.added.localeCompare(a.added)),t=(a,o,l)=>fs(gn.items.filter(c=>c.dept===a&&(c.shape??1.3)>=1.12),o).slice(0,l),e=[...t("dresses",3,1),...t("tops",5,1),...t("knits",7,1)],n=gn.items.filter(a=>a.was),s=fs(gn.items.filter(a=>["tops","dresses","knits","pants","skirts","jackets"].includes(a.dept)),14).slice(0,12),r=(a,o)=>{const l=t(a.key,40+o,1)[0]??fs(gn.items.filter(c=>c.dept===a.key),o)[0];return l?`<a class="tile" href="#/c/${a.key}"><div class="ph ${(l.shape??1.3)>=1.12?"fill":"whole"}"><img src="${_i(l)}" alt="" loading="lazy"></div><span>${rn(a.name)}</span></a>`:""};return`
  <section class="hero">
    <div class="hero-photos">${e.map(a=>`<a href="#/p/${a.id}"><img src="${_i(a)}" alt=""></a>`).join("")}</div>
    <div class="hero-words">
      <div class="kicker">The new drop</div>
      <h1>Just landed</h1>
      <p>New tops, dresses, denim and knits — every piece in S and M.</p>
      <div class="ctas"><a class="btn dark" href="#/new">Shop new in</a><a class="btn" href="#/c/dresses">Shop dresses</a></div>
    </div>
  </section>
  ${pa("Trending now","#/new",s)}
  <section class="depts-grid"><h2>Shop by category</h2><div class="tiles">${gn.depts.map(r).join("")}</div></section>
  ${n.length?`<a class="band" href="#/sale"><span class="kicker">Sale</span><b>Up to ${Math.round(Math.max(...n.map(a=>100*(1-a.price/a.was)))/5)*5}% off</b><span>${n.length} pieces, while they last →</span></a>`:""}
  ${pa("New in","#/new",i.slice(0,12))}
  ${pa("Shoes","#/c/shoes",fs(gn.items.filter(a=>a.dept==="shoes"),9).slice(0,12))}
  ${pa("Under $40","#/search?q=&max=40",fs(gn.items.filter(a=>a.price<40),21).slice(0,12))}`}const lp=[["","Featured"],["new","Newest"],["low","Price: low to high"],["high","Price: high to low"]];function cp(i,t){return t==="low"?[...i].sort((e,n)=>e.price-n.price):t==="high"?[...i].sort((e,n)=>n.price-e.price):t==="new"?[...i].sort((e,n)=>n.added.localeCompare(e.added)):fs(i,1414)}function zr(i,t,e,n,s=""){const r=new Map;for(const f of t)r.set(f.kind,(r.get(f.kind)??0)+1);const a=e.get("kind")??"",o=e.get("sort")??"",l=cp(a?t.filter(f=>f.kind===a):t,o),c=(f,u)=>{const d=new URLSearchParams(e);f?d.set("kind",f):d.delete("kind"),u?d.set("sort",u):d.delete("sort");const g=d.toString();return`#${n}${g?"?"+g:""}`},h=r.size>1?`<div class="chips"><a class="chip${a?"":" on"}" href="${c("",o)}">All</a>${[...r].filter(([,f])=>f>=2).sort((f,u)=>u[1]-f[1]).map(([f])=>`<a class="chip${f===a?" on":""}" href="${c(f,o)}">${rn(f)}</a>`).join("")}</div>`:"";return`<div class="listing">
    <div class="crumbs"><a href="#/">Home</a> / ${rn(i)}</div>
    <h1>${rn(i)}</h1>${s}
    ${h}
    <div class="bar"><span>${l.length} ${l.length===1?"piece":"pieces"}</span>
      <label>Sort <select data-act="sort">${lp.map(([f,u])=>`<option value="${c(a,f)}"${f===o?" selected":""}>${u}</option>`).join("")}</select></label></div>
    ${op(l)}
  </div>`}let Ks=null;function hp(i){var r;const t=Di.get(i);if(!t)return'<p class="empty">That piece has gone. <a href="#/">Back to the shop</a></p>';Ks=((r=t.sizes)==null?void 0:r.length)===1?String(t.sizes[0]):null;const e=Array.from({length:t.n},(a,o)=>`<img src="${_i(t,o)}" alt="" ${o>1?'loading="lazy"':""}>`).join(""),n=fs(gn.items.filter(a=>a.dept===t.dept&&a.id!==t.id),t.style.charCodeAt(2)+t.n).sort((a,o)=>+(o.kind===t.kind)-+(a.kind===t.kind)).slice(0,8),s=t.dept==="shoes"?"Size (US)":"Size";return`<div class="product">
    <div class="crumbs"><a href="#/">Home</a> / <a href="#/c/${t.dept}">${rn(Oc(t.dept))}</a> / ${rn(t.kind)}</div>
    <div class="pwrap">
      <div class="gallery ${(t.shape??1.3)>=1.12?"fill":"whole"}${t.n===1?" one":""}">${e}</div>
      <div class="pinfo">
        <div class="kicker">Quatorze</div>
        <h1>${rn(t.name)}</h1>
        <div class="pprice">${yf(t)}${t.was?` <span class="off">${Math.round(100*(1-t.price/t.was))}% off</span>`:""}</div>
        ${t.colour?`<div class="pcol">Colour: <b>${rn(t.colour)}</b></div>`:""}
        ${t.sizes?`<div class="sizes"><div class="lab">${s}</div><div class="sz">${t.sizes.map(a=>`<button type="button" data-act="size" data-size="${a}"${t.sizes.length===1?' class="on"':""}>${a}</button>`).join("")}</div></div>`:'<div class="sizes"><div class="lab">One size</div></div>'}
        <button class="btn dark add" data-act="add" data-id="${t.id}">Add to bag — ${Re(t.price)}</button>
        <button class="btn wish${ar(t.id)?" on":""}" data-act="wish" data-id="${t.id}">${Bc.heart}<span>${ar(t.id)?"Saved":"Save for later"}</span></button>
        <div class="msg" aria-live="polite"></div>
        <div class="leftnote">${wf(t.price)}</div>
        ${t.blurb?`<p class="blurb">${rn(t.blurb)}</p>`:""}
        ${t.facts.length?`<ul class="facts">${t.facts.map(a=>`<li>${rn(a)}</li>`).join("")}</ul>`:""}
        <div class="style">Style ${t.style}</div>
        <div class="perks"><span>Free shipping</span><span>Free returns</span><span>Ships in its Quatorze box</span></div>
      </div>
    </div>
    ${n.length?`<section class="row"><div class="rowhead"><h2>You might also like</h2><a href="#/c/${t.dept}">Shop all</a></div><div class="strip">${n.map(zc).join("")}</div></section>`:""}
  </div>`}function wf(i){const t=ai();return i<=t?`You have ${Re(t)} left to spend.`:`You have ${Re(t)} left — ${Re(Math.round((i-t)*100)/100)} short for this one.`}function Ef(i){return ca().map((t,e)=>{const n=Di.get(t.id);return n?`<li><a href="#/p/${n.id}"><img src="${_i(n)}" alt=""></a><div><a class="nm" href="#/p/${n.id}">${rn(n.name)}</a>
      <div class="meta">${[n.colour,t.size?(n.dept==="shoes"?"US ":"Size ")+t.size:"One size"].filter(Boolean).map(s=>rn(String(s))).join(" · ")}</div>
      ${`<button class="link" data-act="remove" data-i="${e}">Remove</button>`}</div><b>${Re(t.price)}</b></li>`:""}).join("")}const Bi=(i,t,e="")=>{var n;return`<label class="fld"><span>${t}</span><input name="${i}" value="${rn(((n=gf())==null?void 0:n[i])??"")}" ${e}></label>`};function Tf(){return ca().length?`<div class="plain checkout">
    <div class="crumbs"><a href="#/">Home</a> / Checkout</div>
    <h1>Checkout</h1>
    <ul class="lines">${Ef()}</ul>
    <div class="sum"><div><span>Subtotal</span><b>${Re(Zi())}</b></div><div><span>Shipping</span><b>Free</b></div><div class="tot"><span>Total</span><b>${Re(Zi())}</b></div></div>
    <form class="ship" data-act="checkout" novalidate autocomplete="on">
      <h2>Where should we send it?</h2>
      <div class="two">${Bi("first","First name",'autocomplete="given-name" required')}${Bi("last","Last name",'autocomplete="family-name" required')}</div>
      ${Bi("email","Email",'type="email" autocomplete="email" inputmode="email" required')}
      ${Bi("line1","Address",'autocomplete="address-line1" required')}
      ${Bi("line2","Apartment, suite (optional)",'autocomplete="address-line2"')}
      <div class="three">${Bi("city","City",'autocomplete="address-level2" required')}${Bi("state","State",'autocomplete="address-level1" required')}${Bi("zip","ZIP",'autocomplete="postal-code" inputmode="numeric" required')}</div>
      <p class="err" aria-live="polite"></p>
      <button class="btn dark big" type="submit">Pay ${Re(Zi())} with my Quatorze money</button>
      <p class="after">After this you'll have <b>${Re(ai())}</b> left to spend. Your box arrives in 2 days — we'll email you when it's at your door.</p>
    </form>
  </div>`:'<div class="plain"><h1>Your bag is empty</h1><p><a class="btn dark" href="#/new">Shop new in</a></p></div>'}function Fh(i){return i.lines.flatMap((t,e)=>{const n=Di.get(t.id);return n&&!i.returned.includes(e)?[{name:n.name,colour:n.colour,size:t.size,shoe:n.dept==="shoes",price:t.price,img:_i(n)}]:[]})}const Fl=i=>new Date(i).toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"});let ro=0;function up(i){const t=sr().find(n=>n.n===i);if(!t)return'<p class="empty"><a href="#/">Back to the shop</a></p>';const e=ro===t.n;return`<div class="plain thanks">
    <div class="kicker">Order Q14-${t.n}</div>
    <h1>${e?"Packing your box…":"Thank you!"}</h1>
    <div class="boxhost" data-n="${t.n}"></div>
    <p class="packed${e?"":" on"}">${t.arrives?`It arrives on <b>${Fl(t.arrives)}</b>.${t.ship?` We'll email <b>${rn(t.ship.email)}</b> when it's at your door.`:""}`:"Wrapped in tissue, in a Quatorze box."}</p>
    <ul class="lines">${t.lines.map(n=>{const s=Di.get(n.id);return s?`<li><img src="${_i(s)}" alt=""><div><span class="nm">${rn(s.name)}</span><div class="meta">${n.size?(s.dept==="shoes"?"US ":"Size ")+n.size:"One size"}</div></div><b>${Re(n.price)}</b></li>`:""}).join("")}</ul>
    <div class="sum"><div class="tot"><span>Paid</span><b>${Re(t.total)}</b></div><div><span>Left to spend</span><b>${Re(ai())}</b></div></div>
    <p class="ctas"><a class="btn dark" href="#/">Keep shopping</a><a class="btn" href="#/closet">My closet</a><button class="btn" data-act="leave">Leave the shop</button></p>
  </div>`}function Af(){const i=sr();if(!i.length)return'<div class="plain"><h1>My closet</h1><p>Everything you buy lives here. Nothing yet!</p><p><a class="btn dark" href="#/new">Shop new in</a></p></div>';const t=i.reduce((e,n)=>e+n.lines.length-n.returned.length,0);return`<div class="plain closet">
    <div class="crumbs"><a href="#/">Home</a> / My closet</div>
    <h1>My closet</h1>
    <p>${t} ${t===1?"piece":"pieces"} · spent ${Re(rr())} of ${Re(pr()??0)}</p>
    ${[...i].reverse().map(e=>`<section class="order"><div class="ohead"><b>Order Q14-${e.n}</b><span>${new Date(e.at).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}</span></div>
      ${e.arrives?`<div class="status">${Nc(e)?`Delivered ${Fl(e.arrives)} · <a href="#/box/${e.n}">Open your box</a>`:`Arriving ${Fl(e.arrives)}`}</div>`:""}
      <ul class="lines">${e.lines.map((n,s)=>{const r=Di.get(n.id);if(!r)return"";const a=e.returned.includes(s);return`<li class="${a?"gone":""}"><a href="#/p/${r.id}"><img src="${_i(r)}" alt=""></a><div><a class="nm" href="#/p/${r.id}">${rn(r.name)}</a><div class="meta">${n.size?(r.dept==="shoes"?"US ":"Size ")+n.size:"One size"}</div>
        ${a?'<span class="meta">Returned — money back</span>':`<button class="link" data-act="return" data-o="${e.n}" data-i="${s}">Return it</button>`}</div><b>${Re(n.price)}</b></li>`}).join("")}</ul></section>`).join("")}
  </div>`}function fp(i){const t=(i.get("q")??"").toLowerCase().split(/\s+/).filter(Boolean),e=Number(i.get("max"))||1/0,n=gn.items.filter(r=>{if(r.price>=e)return!1;const a=`${r.name} ${r.colour??""} ${r.kind} ${Oc(r.dept)}`.toLowerCase();return t.every(o=>a.includes(o)||a.includes(o.replace(/s$/,"")))}),s=t.length?`“${i.get("q")}”`:e<1/0?`Under ${Re(e)}`:"Everything";return zr(s,n,i,"/search")}function dp(i){var t;if(i[0]==="thanks"){const e=ms.querySelector(".boxhost"),n=sr().find(a=>a.n===Number(i[1]));if(!e||!n)return;const s=n.ship?{name:`${n.ship.first} ${n.ship.last}`,line:`${n.ship.city}, ${n.ship.state}`}:{};if(ro!==n.n){Ul(e,s,!0);return}ro=0;const r=Ul(e,s,!1);tp(r,Fh(n).map(a=>a.img)).then(()=>{var a,o;(a=ms.querySelector(".thanks h1"))==null||a.replaceChildren("All packed!"),(o=ms.querySelector(".thanks .packed"))==null||o.classList.add("on")})}else if(i[0]==="box"){const e=sr().find(s=>s.n===Number(i[1])),n=ms.querySelector(".boxpage");if(!e){n.innerHTML='<p class="empty">No such box. <a href="#/closet">My closet</a></p>';return}sp(n,{n:e.n,first:((t=e.ship)==null?void 0:t.first)??"",things:Fh(e)})}}function pp(i){var a;const t=i.querySelector(".err"),e=o=>i.elements.namedItem(o).value.trim(),n={first:e("first"),last:e("last"),email:e("email"),line1:e("line1"),line2:e("line2"),city:e("city"),state:e("state"),zip:e("zip")},s=[];for(const o of["first","last","email","line1","city","state","zip"])n[o]||s.push(o);if(n.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)&&s.push("email"),i.querySelectorAll("input").forEach(o=>o.classList.toggle("bad",s.includes(o.name))),s.length){t.textContent=s.includes("email")&&n.email?"That email doesn't look right.":"Please fill in your name, email and address.",(a=i.querySelector("input.bad"))==null||a.focus();return}const r=mf(n);r&&(ro=r.n,location.hash=`#/thanks/${r.n}`,Sf(r).catch(o=>console.warn("the package email could not be set up:",o)))}function mp(){for(const i of sr())i.ship&&!i.token&&!Nc(i)&&Sf(i).catch(()=>{})}function kc(){var l;const i=location.hash.replace(/^#/,"")||"/",[t,e]=i.split("?"),n=new URLSearchParams(e??""),s=t.split("/").filter(Boolean);let r="";if(!s.length)r=Nh();else if(s[0]==="new")r=zr("New In",[...gn.items].sort((c,h)=>h.added.localeCompare(c.added)).slice(0,60),n,"/new");else if(s[0]==="sale")r=zr("Sale",gn.items.filter(c=>c.was),n,"/sale");else if(s[0]==="c")r=zr(Oc(s[1]),gn.items.filter(c=>c.dept===s[1]),n,`/c/${s[1]}`);else if(s[0]==="p")r=hp(s[1]);else if(s[0]==="search")r=fp(n);else if(s[0]==="wish"){const c=Fc().map(h=>Di.get(h)).filter(h=>!!h);r=zr("Saved for later",c,n,"/wish",c.length?"":'<p class="note">Tap the heart on anything to keep it here.</p>')}else s[0]==="closet"?r=Af():s[0]==="checkout"?r=Tf():s[0]==="thanks"?r=up(Number(s[1])):s[0]==="box"?r='<div class="boxpage"></div>':r=Nh();ms.innerHTML=r,dp(s);const a=s[0]==="c"?s[1]:s[0]==="p"?(l=Di.get(s[1]))==null?void 0:l.dept:s[0];He.querySelectorAll(".depts a").forEach(c=>c.classList.toggle("on",c.getAttribute("data-k")===a));const o=He.querySelector(".search input");s[0]!=="search"&&(o.value=""),Kr(),er(),He.scrollTo(0,0)}function Rf(){He.querySelector(".purse .amt").textContent=Re(ai());const i=Fc().length,t=ca().length;He.querySelector(".wishlink .n").textContent=i?String(i):"",He.querySelector(".baglink .n").textContent=t?String(t):"",To.classList.contains("open")&&Pf(),_s.classList.contains("open")&&Ao()}const To=He.querySelector(".drawer"),Cf=He.querySelector(".shade");function Pf(){const i=ca().length;To.innerHTML=`<div class="dhead"><h2>Your bag ${i?`<small>(${i})</small>`:""}</h2><button class="icon" data-act="closebag" aria-label="Close">${Bc.close}</button></div>
    ${i?`<ul class="lines">${Ef()}</ul>
    <div class="dfoot"><div class="sum"><div class="tot"><span>Total</span><b>${Re(Zi())}</b></div><div><span>Left to spend</span><b>${Re(ai())}</b></div></div>
    <a class="btn dark big" href="#/checkout">Checkout</a><button class="btn" data-act="closebag">Keep shopping</button></div>`:'<div class="dempty"><p>Your bag is empty.</p><a class="btn dark" href="#/new">Shop new in</a></div>'}`}function gp(){er(),Pf(),To.classList.add("open"),Cf.classList.add("on")}function Kr(){To.classList.remove("open"),Cf.classList.remove("on")}const _s=He.querySelector(".moneypop");function Ao(i=!1){const t=pr()??0;_s.innerHTML=`<div class="mrow big"><span>Left to spend</span><b>${Re(ai())}</b></div>
    <div class="mrow"><span>My money</span>${i?`<form class="setm" data-act="setmoney"><span>$</span><input type="number" min="1" step="1" inputmode="numeric" value="${t}" aria-label="How much I have"><button class="btn dark">Save</button></form>`:`<b>${Re(t)} <button class="link" data-act="editmoney">Change</button></b>`}</div>
    <div class="mrow"><span>Spent</span><b>${Re(rr())}</b></div>
    <div class="mrow"><span>In my bag</span><b>${Re(Zi())}</b></div>
    <div class="mlinks"><a href="#/closet">My closet</a><button class="link" data-act="startover">Start over</button></div>`,i&&_s.querySelector("input").select()}function xp(){Kr(),Ao(),_s.classList.add("open")}function er(){_s.classList.remove("open")}let Oh=0;function Bh(i){const t=He.querySelector(".toast");t.innerHTML=i,t.classList.add("on"),clearTimeout(Oh),Oh=window.setTimeout(()=>t.classList.remove("on"),3600)}He.addEventListener("click",i=>{var n;_s.classList.contains("open")&&!i.target.closest('.moneypop, [data-act="money"]')&&er();const t=i.target.closest("[data-act]");if(!t){i.target.classList.contains("shade")&&(Kr(),er());return}const e=t.dataset.act;if(e==="wish"){i.preventDefault(),i.stopPropagation(),_f(t.dataset.id);const s=ar(t.dataset.id);He.querySelectorAll(`[data-act="wish"][data-id="${t.dataset.id}"]`).forEach(r=>{r.classList.toggle("on",s);const a=r.querySelector("span");a&&(a.textContent=s?"Saved":"Save for later")})}else if(e==="size")Ks=t.dataset.size,t.parentElement.querySelectorAll("button").forEach(s=>s.classList.toggle("on",s===t)),He.querySelector(".product .msg").textContent="";else if(e==="add"){const s=Di.get(t.dataset.id),r=He.querySelector(".product .msg");if(s.sizes&&!Ks){r.textContent="Pick a size first.",(n=He.querySelector(".sizes"))==null||n.classList.add("want"),setTimeout(()=>{var o;return(o=He.querySelector(".sizes"))==null?void 0:o.classList.remove("want")},700);return}const a=df(s.id,s.sizes?Ks:null,s.price);if(a>0){r.textContent=`Not enough money left — you're ${Re(a)} short. Take something out of your bag, or change how much you have.`;return}r.textContent="",He.querySelector(".leftnote").innerHTML=wf(s.price),Bh(`<img src="${_i(s)}" alt=""><div><b>Added to your bag</b><span>${rn(s.name)}${Ks&&s.sizes?" · "+Ks:""} · ${Re(s.price)}</span><span>${Re(ai())} left to spend</span></div><button class="btn dark" data-act="bag">View bag</button>`)}else e==="bag"?(gp(),He.querySelector(".toast").classList.remove("on")):e==="closebag"?Kr():e==="remove"?(pf(Number(t.dataset.i)),location.hash.startsWith("#/checkout")&&(ms.innerHTML=Tf())):e==="return"?(vf(Number(t.dataset.o),Number(t.dataset.i)),ms.innerHTML=Af(),Bh(`<div><b>Returned</b><span>Your money's back — ${Re(ai())} left to spend</span></div>`)):e==="money"?_s.classList.contains("open")?er():xp():e==="editmoney"?Ao(!0):e==="startover"?confirm("Start over? This empties your bag and your closet, and you choose your money again.")&&(Mf(),Nl()):e==="leave"&&Nl()});He.addEventListener("submit",i=>{const t=i.target;if(i.preventDefault(),t.dataset.act==="checkout"){pp(t);return}if(t.dataset.act==="setmoney"){const e=Number(t.querySelector("input").value);e>0&&(Uc(e),Ao(),(location.hash.startsWith("#/p/")||location.hash.startsWith("#/checkout"))&&kc())}else if(t.classList.contains("search")){const e=t.querySelector("input").value.trim();location.hash=`#/search?q=${encodeURIComponent(e)}`}});He.addEventListener("change",i=>{const t=i.target;t.dataset.act==="sort"&&(location.hash=t.value)});addEventListener("keydown",i=>{i.key==="Escape"&&(Kr(),er())});let vp=null;function Lf(){return vp??(vp=fetch(`${bf}store/catalog.json`).then(i=>i.json()).then(i=>{gn=i;for(const e of i.items)Di.set(e.id,e);const t=He.querySelector(".depts");t.innerHTML='<a href="#/new" data-k="new">New In</a>'+i.depts.map(e=>`<a href="#/c/${e.key}" data-k="${e.key}">${rn(e.name)}</a>`).join("")+'<a href="#/sale" data-k="sale" class="salelink">Sale</a>'}))}let ao=!1;async function _p(i){Nl=()=>{ao=!1,He.hidden=!0,document.body.classList.remove("in-store"),history.replaceState(null,"",location.pathname+location.search),i()},await Lf(),ao=!0,He.hidden=!1,document.body.classList.add("in-store"),location.hash.startsWith("#/")||history.replaceState(null,"","#/"),Rf(),kc(),mp()}addEventListener("hashchange",()=>{ao&&kc()});ff(()=>{ao&&Rf()});window.__store={cat:()=>gn,W:Kd};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gc="186",Mp=0,zh=1,Sp=2,Ya=1,bp=2,kr=3,Ms=0,_n=1,Ze=2,Li=0,Vr=1,Ol=2,kh=3,Gh=4,yp=5,Qs=100,wp=101,Ep=102,Tp=103,Ap=104,Rp=200,Cp=201,Pp=202,Lp=203,If=204,Df=205,Ip=206,Dp=207,Up=208,Np=209,Fp=210,Op=211,Bp=212,zp=213,kp=214,Bl=0,zl=1,kl=2,Qr=3,Gl=4,Wl=5,Hl=6,Vl=7,Wc=0,Gp=1,Wp=2,xi=0,Uf=1,Nf=2,Ff=3,Hc=4,Of=5,Bf=6,zf=7,kf=300,Ss=301,or=302,ko=303,Go=304,Ro=306,oo=1e3,qn=1001,Xl=1002,fn=1003,Hp=1004,ma=1005,vn=1006,Wo=1007,gs=1008,Fn=1009,Gf=1010,Wf=1011,jr=1012,Vc=1013,Mi=1014,ii=1015,Si=1016,Xc=1017,qc=1018,ta=1020,Hf=35902,Vf=35899,Xf=1021,qf=1022,si=1023,Ui=1026,xs=1027,$c=1028,Yc=1029,bs=1030,Zc=1031,Jc=1033,Za=33776,Ja=33777,Ka=33778,Qa=33779,ql=35840,$l=35841,Yl=35842,Zl=35843,Jl=36196,Kl=37492,Ql=37496,jl=37488,tc=37489,lo=37490,ec=37491,nc=37808,ic=37809,sc=37810,rc=37811,ac=37812,oc=37813,lc=37814,cc=37815,hc=37816,uc=37817,fc=37818,dc=37819,pc=37820,mc=37821,gc=36492,xc=36494,vc=36495,_c=36283,Mc=36284,co=36285,Sc=36286,Vp=3200,ho=0,Xp=1,$i="",Pn="srgb",uo="srgb-linear",fo="linear",Le="srgb",Ho=7680,qp=519,$p=512,Yp=513,Zp=514,Kc=515,Jp=516,Kp=517,Qc=518,Qp=519,$f=35044,Wh="300 es",mi=2e3,ea=2001;function jp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function po(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function t0(){const i=po("canvas");return i.style.display="block",i}const Hh={};function mo(...i){const t="THREE."+i.shift();console.log(t,...i)}function Yf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Zt(...i){i=Yf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ve(...i){i=Yf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function nr(...i){const t=i.join(" ");t in Hh||(Hh[t]=!0,Zt(...i))}function e0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const n0={[Bl]:zl,[kl]:Hl,[Gl]:Vl,[Qr]:Wl,[zl]:Bl,[Hl]:kl,[Vl]:Gl,[Wl]:Qr};class ws{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vh=1234567;const Xr=Math.PI/180,lr=180/Math.PI;function vi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function jc(i,t){return(i%t+t)%t}function i0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function s0(i,t,e){return i!==t?(e-i)/(t-i):0}function qr(i,t,e){return(1-e)*i+e*t}function r0(i,t,e,n){return qr(i,t,1-Math.exp(-e*n))}function a0(i,t=1){return t-Math.abs(jc(i,t*2)-t)}function o0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function l0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function c0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function h0(i,t){return i+Math.random()*(t-i)}function u0(i){return i*(.5-Math.random())}function f0(i){i!==void 0&&(Vh=i);let t=Vh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function d0(i){return i*Xr}function p0(i){return i*lr}function m0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function g0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function x0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function v0(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*f,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*h,o*c);break;default:Zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Vo={DEG2RAD:Xr,RAD2DEG:lr,generateUUID:vi,clamp:ce,euclideanModulo:jc,mapLinear:i0,inverseLerp:s0,lerp:qr,damp:r0,pingpong:a0,smoothstep:o0,smootherstep:l0,randInt:c0,randFloat:h0,randFloatSpread:u0,seededRandom:f0,degToRad:d0,radToDeg:p0,isPowerOfTwo:m0,ceilPowerOfTwo:g0,floorPowerOfTwo:x0,setQuaternionFromProperEuler:v0,normalize:Ie,denormalize:ni},Mh=class Mh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mh.prototype.isVector2=!0;let lt=Mh;class zn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(f!==v||l!==u||c!==d||h!==g){let p=l*u+c*d+h*g+f*v;p<0&&(u=-u,d=-d,g=-g,v=-v,p=-p);let m=1-o;if(p<.9995){const S=Math.acos(p),E=Math.sin(S);m=Math.sin(m*S)/E,o=Math.sin(o*S)/E,l=l*m+u*o,c=c*m+d*o,h=h*m+g*o,f=f*m+v*o}else{l=l*m+u*o,c=c*m+d*o,h=h*m+g*o,f=f*m+v*o;const S=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=S,c*=S,h*=S,f*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-o*d,t[e+2]=c*g+h*d+o*u-l*f,t[e+3]=h*g-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sh=class Sh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xo.copy(this).projectOnVector(t),this.sub(Xo)}reflect(t){return this.sub(Xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sh.prototype.isVector3=!0;let P=Sh;const Xo=new P,Xh=new zn,bh=class bh{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],v=s[0],p=s[3],m=s[6],S=s[1],E=s[4],_=s[7],y=s[2],w=s[5],A=s[8];return r[0]=a*v+o*S+l*y,r[3]=a*p+o*E+l*w,r[6]=a*m+o*_+l*A,r[1]=c*v+h*S+f*y,r[4]=c*p+h*E+f*w,r[7]=c*m+h*_+f*A,r[2]=u*v+d*S+g*y,r[5]=u*p+d*E+g*w,r[8]=u*m+d*_+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=e*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=f*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qo.makeScale(t,e)),this}rotate(t){return nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qo.makeRotation(-t)),this}translate(t,e){return nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};bh.prototype.isMatrix3=!0;let Qt=bh;const qo=new Qt,qh=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$h=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _0(){const i={enabled:!0,workingColorSpace:uo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Le&&(s.r=Ii(s.r),s.g=Ii(s.g),s.b=Ii(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Le&&(s.r=ir(s.r),s.g=ir(s.g),s.b=ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?fo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return nr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return nr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[uo]:{primaries:t,whitePoint:n,transfer:fo,toXYZ:qh,fromXYZ:$h,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:t,whitePoint:n,transfer:Le,toXYZ:qh,fromXYZ:$h,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),i}const ge=_0();function Ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ls;class M0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ls===void 0&&(Ls=po("canvas")),Ls.width=t.width,Ls.height=t.height;const s=Ls.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ls}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=po("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ii(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ii(e[n]/255)*255):e[n]=Ii(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let S0=0;class th{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=vi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($o(s[a].image)):r.push($o(s[a]))}else r=$o(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function $o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?M0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}let b0=0;const Yo=new P;class Mn extends ws{constructor(t=Mn.DEFAULT_IMAGE,e=Mn.DEFAULT_MAPPING,n=qn,s=qn,r=vn,a=gs,o=si,l=Fn,c=Mn.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=vi(),this.name="",this.source=new th(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yo).x}get height(){return this.source.getSize(Yo).y}get depth(){return this.source.getSize(Yo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oo:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case Xl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oo:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case Xl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=kf;Mn.DEFAULT_ANISOTROPY=1;const yh=class yh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,_=(d+1)/2,y=(m+1)/2,w=(h+u)/4,A=(f+v)/4,x=(g+p)/4;return E>_&&E>y?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=A/n):_>y?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=x/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=A/r,s=x/r),this.set(n,s,r,e),this}let S=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-v)/S,this.z=(u-h)/S,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yh.prototype.isVector4=!0;let qe=yh;class y0 extends ws{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new qe(0,0,t,e),this.scissorTest=!1,this.viewport=new qe(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Mn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new th(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends y0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zf extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class w0 extends Mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Eo=class Eo{constructor(t,e,n,s,r,a,o,l,c,h,f,u,d,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,d,g,v,p)}set(t,e,n,s,r,a,o,l,c,h,f,u,d,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Eo().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Is.setFromMatrixColumn(t,0).length(),r=1/Is.setFromMatrixColumn(t,1).length(),a=1/Is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=a*h,d=a*f,g=o*h,v=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,g=c*h,v=c*f;e[0]=u+v*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,g=c*h,v=c*f;e[0]=u-v*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,d=a*f,g=o*h,v=o*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+v,e[1]=l*f,e[5]=v*c+u,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,d=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-v*f}else if(t.order==="XZY"){const u=a*l,d=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+v,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(E0,t,T0)}lookAt(t,e,n){const s=this.elements;return In.subVectors(t,e),In.lengthSq()===0&&(In.z=1),In.normalize(),zi.crossVectors(n,In),zi.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),zi.crossVectors(n,In)),zi.normalize(),ga.crossVectors(In,zi),s[0]=zi.x,s[4]=ga.x,s[8]=In.x,s[1]=zi.y,s[5]=ga.y,s[9]=In.y,s[2]=zi.z,s[6]=ga.z,s[10]=In.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],v=n[6],p=n[10],m=n[14],S=n[3],E=n[7],_=n[11],y=n[15],w=s[0],A=s[4],x=s[8],T=s[12],R=s[1],I=s[5],N=s[9],V=s[13],z=s[2],W=s[6],O=s[10],B=s[14],L=s[3],U=s[7],G=s[11],Y=s[15];return r[0]=a*w+o*R+l*z+c*L,r[4]=a*A+o*I+l*W+c*U,r[8]=a*x+o*N+l*O+c*G,r[12]=a*T+o*V+l*B+c*Y,r[1]=h*w+f*R+u*z+d*L,r[5]=h*A+f*I+u*W+d*U,r[9]=h*x+f*N+u*O+d*G,r[13]=h*T+f*V+u*B+d*Y,r[2]=g*w+v*R+p*z+m*L,r[6]=g*A+v*I+p*W+m*U,r[10]=g*x+v*N+p*O+m*G,r[14]=g*T+v*V+p*B+m*Y,r[3]=S*w+E*R+_*z+y*L,r[7]=S*A+E*I+_*W+y*U,r[11]=S*x+E*N+_*O+y*G,r[15]=S*T+E*V+_*B+y*Y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],v=t[7],p=t[11],m=t[15],S=l*d-c*u,E=o*d-c*f,_=o*u-l*f,y=a*d-c*h,w=a*u-l*h,A=a*f-o*h;return e*(v*S-p*E+m*_)-n*(g*S-p*y+m*w)+s*(g*E-v*y+m*A)-r*(g*_-v*w+p*A)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],v=t[13],p=t[14],m=t[15],S=e*o-n*a,E=e*l-s*a,_=e*c-r*a,y=n*l-s*o,w=n*c-r*o,A=s*c-r*l,x=h*v-f*g,T=h*p-u*g,R=h*m-d*g,I=f*p-u*v,N=f*m-d*v,V=u*m-d*p,z=S*V-E*N+_*I+y*R-w*T+A*x;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/z;return t[0]=(o*V-l*N+c*I)*W,t[1]=(s*N-n*V-r*I)*W,t[2]=(v*A-p*w+m*y)*W,t[3]=(u*w-f*A-d*y)*W,t[4]=(l*R-a*V-c*T)*W,t[5]=(e*V-s*R+r*T)*W,t[6]=(p*_-g*A-m*E)*W,t[7]=(h*A-u*_+d*E)*W,t[8]=(a*N-o*R+c*x)*W,t[9]=(n*R-e*N-r*x)*W,t[10]=(g*w-v*_+m*S)*W,t[11]=(f*_-h*w-d*S)*W,t[12]=(o*T-a*I-l*x)*W,t[13]=(e*I-n*T+s*x)*W,t[14]=(v*E-g*y-p*S)*W,t[15]=(h*y-f*E+u*S)*W,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,g=r*f,v=a*h,p=a*f,m=o*f,S=l*c,E=l*h,_=l*f,y=n.x,w=n.y,A=n.z;return s[0]=(1-(v+m))*y,s[1]=(d+_)*y,s[2]=(g-E)*y,s[3]=0,s[4]=(d-_)*w,s[5]=(1-(u+m))*w,s[6]=(p+S)*w,s[7]=0,s[8]=(g+E)*A,s[9]=(p-S)*A,s[10]=(1-(u+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Is.set(s[0],s[1],s[2]).length();const o=Is.set(s[4],s[5],s[6]).length(),l=Is.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Qn.copy(this);const c=1/a,h=1/o,f=1/l;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=f,Qn.elements[9]*=f,Qn.elements[10]*=f,e.setFromRotationMatrix(Qn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=mi,l=!1){const c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===mi)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ea)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=mi,l=!1){const c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===mi)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===ea)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Eo.prototype.isMatrix4=!0;let le=Eo;const Is=new P,Qn=new le,E0=new P(0,0,0),T0=new P(1,1,1),zi=new P,ga=new P,In=new P,Yh=new le,Zh=new zn;class Zn{constructor(t=0,e=0,n=0,s=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class Jf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let A0=0;const Jh=new P,Ds=new zn,wi=new le,xa=new P,Mr=new P,R0=new P,C0=new zn,Kh=new P(1,0,0),Qh=new P(0,1,0),jh=new P(0,0,1),tu={type:"added"},P0={type:"removed"},Us={type:"childadded",child:null},Zo={type:"childremoved",child:null};class Qe extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DEFAULT_UP.clone();const t=new P,e=new Zn,n=new zn,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Qt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(Kh,t)}rotateY(t){return this.rotateOnAxis(Qh,t)}rotateZ(t){return this.rotateOnAxis(jh,t)}translateOnAxis(t,e){return Jh.copy(t).applyQuaternion(this.quaternion),this.position.add(Jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kh,t)}translateY(t){return this.translateOnAxis(Qh,t)}translateZ(t){return this.translateOnAxis(jh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xa.copy(t):xa.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Mr,xa,this.up):wi.lookAt(xa,Mr,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(wi),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ve("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tu),Us.child=t,this.dispatchEvent(Us),Us.child=null):ve("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(P0),Zo.child=t,this.dispatchEvent(Zo),Zo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tu),Us.child=t,this.dispatchEvent(Us),Us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,R0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,C0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Qe.DEFAULT_UP=new P(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xn extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L0={type:"move"};class Jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(L0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},va={h:0,s:0,l:0};function Ko(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ge.workingColorSpace){if(t=jc(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ko(a,r,t+1/3),this.g=Ko(a,r,t),this.b=Ko(a,r,t-1/3)}return ge.colorSpaceToWorking(this,s),this}setStyle(t,e=Pn){function n(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pn){const n=Kf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}copyLinearToSRGB(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pn){return ge.workingToColorSpace(mn.copy(this),t),Math.round(ce(mn.r*255,0,255))*65536+Math.round(ce(mn.g*255,0,255))*256+Math.round(ce(mn.b*255,0,255))}getHexString(t=Pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(mn.copy(this),e);const n=mn.r,s=mn.g,r=mn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=Pn){ge.workingToColorSpace(mn.copy(this),t);const e=mn.r,n=mn.g,s=mn.b;return t!==Pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ki),this.setHSL(ki.h+t,ki.s+e,ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(va);const n=qr(ki.h,va.h,e),s=qr(ki.s,va.s,e),r=qr(ki.l,va.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new zt;zt.NAMES=Kf;class eh{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new zt(t),this.density=e}clone(){return new eh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qf extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const jn=new P,Ei=new P,Qo=new P,Ti=new P,Ns=new P,Fs=new P,eu=new P,jo=new P,tl=new P,el=new P,nl=new qe,il=new qe,sl=new qe;class Vn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),jn.subVectors(t,e),s.cross(jn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){jn.subVectors(s,e),Ei.subVectors(n,e),Qo.subVectors(t,e);const a=jn.dot(jn),o=jn.dot(Ei),l=jn.dot(Qo),c=Ei.dot(Ei),h=Ei.dot(Qo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(a,Ti.y),l.addScaledVector(o,Ti.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return nl.setScalar(0),il.setScalar(0),sl.setScalar(0),nl.fromBufferAttribute(t,e),il.fromBufferAttribute(t,n),sl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(nl,r.x),a.addScaledVector(il,r.y),a.addScaledVector(sl,r.z),a}static isFrontFacing(t,e,n,s){return jn.subVectors(n,e),Ei.subVectors(t,e),jn.cross(Ei).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),jn.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Vn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ns.subVectors(s,n),Fs.subVectors(r,n),jo.subVectors(t,n);const l=Ns.dot(jo),c=Fs.dot(jo);if(l<=0&&c<=0)return e.copy(n);tl.subVectors(t,s);const h=Ns.dot(tl),f=Fs.dot(tl);if(h>=0&&f<=h)return e.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ns,a);el.subVectors(t,r);const d=Ns.dot(el),g=Fs.dot(el);if(g>=0&&d<=g)return e.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Fs,o);const p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return eu.subVectors(r,s),o=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(eu,o);const m=1/(p+v+u);return a=v*m,o=u*m,e.copy(n).addScaledVector(Ns,a).addScaledVector(Fs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ki{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ti):ti.fromBufferAttribute(r,a),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_a.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_a.copy(n.boundingBox)),_a.applyMatrix4(t.matrixWorld),this.union(_a)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sr),Ma.subVectors(this.max,Sr),Os.subVectors(t.a,Sr),Bs.subVectors(t.b,Sr),zs.subVectors(t.c,Sr),Gi.subVectors(Bs,Os),Wi.subVectors(zs,Bs),es.subVectors(Os,zs);let e=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-es.z,es.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,es.z,0,-es.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-es.y,es.x,0];return!rl(e,Os,Bs,zs,Ma)||(e=[1,0,0,0,1,0,0,0,1],!rl(e,Os,Bs,zs,Ma))?!1:(Sa.crossVectors(Gi,Wi),e=[Sa.x,Sa.y,Sa.z],rl(e,Os,Bs,zs,Ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ai=[new P,new P,new P,new P,new P,new P,new P,new P],ti=new P,_a=new Ki,Os=new P,Bs=new P,zs=new P,Gi=new P,Wi=new P,es=new P,Sr=new P,Ma=new P,Sa=new P,ns=new P;function rl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ns.fromArray(i,r);const o=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),l=t.dot(ns),c=e.dot(ns),h=n.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const en=new P,ba=new lt;let I0=0;class $n extends ws{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:I0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$f,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ba.fromBufferAttribute(this,e),ba.applyMatrix3(t),this.setXY(e,ba.x,ba.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class jf extends $n{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class td extends $n{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends $n{constructor(t,e,n){super(new Float32Array(t),e,n)}}const D0=new Ki,br=new P,al=new P;class ha{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):D0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;br.subVectors(t,this.center);const e=br.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(br,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(al.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(br.copy(t.center).add(al)),this.expandByPoint(br.copy(t.center).sub(al))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let U0=0;const Gn=new le,ol=new Qe,ks=new P,Dn=new Ki,yr=new Ki,hn=new P;class je extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jp(t)?td:jf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,n){return Gn.makeTranslation(t,e,n),this.applyMatrix4(Gn),this}scale(t,e,n){return Gn.makeScale(t,e,n),this.applyMatrix4(Gn),this}lookAt(t){return ol.lookAt(t),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(Dn.min,yr.min),Dn.expandByPoint(hn),hn.addVectors(Dn.max,yr.max),Dn.expandByPoint(hn)):(Dn.expandByPoint(yr.min),Dn.expandByPoint(yr.max))}Dn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)hn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(hn));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)hn.fromBufferAttribute(o,c),l&&(ks.fromBufferAttribute(t,c),hn.add(ks)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new $n(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new P,l[x]=new P;const c=new P,h=new P,f=new P,u=new lt,d=new lt,g=new lt,v=new P,p=new P;function m(x,T,R){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,R),u.fromBufferAttribute(r,x),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,R),h.sub(c),f.sub(c),d.sub(u),g.sub(u);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(I),o[x].add(v),o[T].add(v),o[R].add(v),l[x].add(p),l[T].add(p),l[R].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let x=0,T=S.length;x<T;++x){const R=S[x],I=R.start,N=R.count;for(let V=I,z=I+N;V<z;V+=3)m(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const E=new P,_=new P,y=new P,w=new P;function A(x){y.fromBufferAttribute(s,x),w.copy(y);const T=o[x];E.copy(T),E.sub(y.multiplyScalar(y.dot(T))).normalize(),_.crossVectors(w,T);const I=_.dot(l[x])<0?-1:1;a.setXYZW(x,E.x,E.y,E.z,I)}for(let x=0,T=S.length;x<T;++x){const R=S[x],I=R.start,N=R.count;for(let V=I,z=I+N;V<z;V+=3)A(t.getX(V+0)),A(t.getX(V+1)),A(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new $n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,f=new P;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let m=0;m<h;m++)u[g++]=c[d++]}return new $n(u,h,f)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new je,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class N0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=$f,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const wn=new P;class go{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix4(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyNormalMatrix(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.transformDirection(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ni(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ni(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ni(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ni(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){mo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new $n(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new go(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){mo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ll=new P,F0=new P,O0=new Qt;class qi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ll.subVectors(n,e).cross(F0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(ll),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||O0.getNormalMatrix(t),s=this.coplanarPoint(ll).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let B0=0;class Es extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=Vr,this.side=Ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=If,this.blendDst=Df,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ho,this.stencilZFail=Ho,this.stencilZPass=Ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new qi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ed extends Es{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Gs;const wr=new P,Ws=new P,Hs=new P,Vs=new lt,Er=new lt,nd=new le,ya=new P,Tr=new P,wa=new P,nu=new lt,cl=new lt,iu=new lt;class z0 extends Qe{constructor(t=new ed){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new je;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new N0(e,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new go(n,3,0,!1)),Gs.setAttribute("uv",new go(n,2,3,!1))}this.geometry=Gs,this.material=t,this.center=new lt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),nd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-Hs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Ea(ya.set(-.5,-.5,0),Hs,a,Ws,s,r),Ea(Tr.set(.5,-.5,0),Hs,a,Ws,s,r),Ea(wa.set(.5,.5,0),Hs,a,Ws,s,r),nu.set(0,0),cl.set(1,0),iu.set(1,1);let o=t.ray.intersectTriangle(ya,Tr,wa,!1,wr);if(o===null&&(Ea(Tr.set(-.5,.5,0),Hs,a,Ws,s,r),cl.set(0,1),o=t.ray.intersectTriangle(ya,wa,Tr,!1,wr),o===null))return;const l=t.ray.origin.distanceTo(wr);l<t.near||l>t.far||e.push({distance:l,point:wr.clone(),uv:Vn.getInterpolation(wr,ya,Tr,wa,nu,cl,iu,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ea(i,t,e,n,s,r){Vs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Er.x=r*Vs.x-s*Vs.y,Er.y=s*Vs.x+r*Vs.y):Er.copy(Vs),i.copy(t),i.x+=Er.x,i.y+=Er.y,i.applyMatrix4(nd)}const Ri=new P,hl=new P,Ta=new P,Aa=new P;class k0{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ri.copy(this.origin).addScaledVector(this.direction,e),Ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){hl.copy(t).add(e).multiplyScalar(.5),Ta.copy(e).sub(t).normalize(),Aa.copy(this.origin).sub(hl);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ta),o=Aa.dot(this.direction),l=-Aa.dot(Ta),c=Aa.lengthSq(),h=Math.abs(1-a*a);let f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){const v=1/h;f*=v,u*=v,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(hl).addScaledVector(Ta,u),d}intersectSphere(t,e){if(t.radius<0)return null;Ri.subVectors(t.center,this.origin);const n=Ri.dot(this.direction),s=Ri.dot(Ri)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ri)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,g=e.x-a.x,v=e.y-a.y,p=e.z-a.z,m=n.x-a.x,S=n.y-a.y,E=n.z-a.z,_=Math.abs(l),y=Math.abs(c),w=Math.abs(h);let A,x,T,R,I,N,V,z,W,O,B,L;if(_>=y&&_>=w?(T=l,N=f,W=g,L=m,l>=0?(A=c,x=h,R=u,I=d,V=v,z=p,O=S,B=E):(A=h,x=c,R=d,I=u,V=p,z=v,O=E,B=S)):y>=w?(T=c,N=u,W=v,L=S,c>=0?(A=h,x=l,R=d,I=f,V=p,z=g,O=E,B=m):(A=l,x=h,R=f,I=d,V=g,z=p,O=m,B=E)):(T=h,N=d,W=p,L=E,h>=0?(A=l,x=c,R=f,I=u,V=g,z=v,O=m,B=S):(A=c,x=l,R=u,I=f,V=v,z=g,O=S,B=m)),T===0)return null;const U=A/T,G=x/T,Y=1/T,dt=R-U*N,pt=I-G*N,Xt=V-U*W,Wt=z-G*W,qt=O-U*L,Z=B-G*L,nt=qt*Wt-Z*Xt,gt=dt*Z-pt*qt,kt=Xt*pt-Wt*dt;if(s){if(nt<0||gt<0||kt<0)return null}else if((nt<0||gt<0||kt<0)&&(nt>0||gt>0||kt>0))return null;const At=nt+gt+kt;if(At===0)return null;const $t=Y*(nt*N+gt*W+kt*L);return(At>0?$t<0:$t>0)?null:this.at($t/At,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rn extends Es{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const su=new le,is=new k0,Ra=new ha,ru=new P,Ca=new P,Pa=new P,La=new P,ul=new P,Ia=new P,au=new P,Da=new P;class Q extends Qe{constructor(t=new je,e=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ia.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(ul.fromBufferAttribute(f,t),a?Ia.addScaledVector(ul,h):Ia.addScaledVector(ul.sub(e),h))}e.add(Ia)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(r),is.copy(t.ray).recast(t.near),!(Ra.containsPoint(is.origin)===!1&&(is.intersectSphere(Ra,ru)===null||is.origin.distanceToSquared(ru)>(t.far-t.near)**2))&&(su.copy(r).invert(),is.copy(t.ray).applyMatrix4(su),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,is)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=a[p.materialIndex],S=Math.max(p.start,d.start),E=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let _=S,y=E;_<y;_+=3){const w=o.getX(_),A=o.getX(_+1),x=o.getX(_+2);s=Ua(this,m,t,n,c,h,f,w,A,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const S=o.getX(p),E=o.getX(p+1),_=o.getX(p+2);s=Ua(this,a,t,n,c,h,f,S,E,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=a[p.materialIndex],S=Math.max(p.start,d.start),E=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let _=S,y=E;_<y;_+=3){const w=_,A=_+1,x=_+2;s=Ua(this,m,t,n,c,h,f,w,A,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const S=p,E=p+1,_=p+2;s=Ua(this,a,t,n,c,h,f,S,E,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function G0(i,t,e,n,s,r,a,o){let l;if(t.side===_n?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ms,o),l===null)return null;Da.copy(o),Da.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Da);return c<e.near||c>e.far?null:{distance:c,point:Da.clone(),object:i}}function Ua(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ca),i.getVertexPosition(l,Pa),i.getVertexPosition(c,La);const h=G0(i,t,e,n,Ca,Pa,La,au);if(h){const f=new P;Vn.getBarycoord(au,Ca,Pa,La,f),s&&(h.uv=Vn.getInterpolatedAttribute(s,o,l,c,f,new lt)),r&&(h.uv1=Vn.getInterpolatedAttribute(r,o,l,c,f,new lt)),a&&(h.normal=Vn.getInterpolatedAttribute(a,o,l,c,f,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};Vn.getNormal(Ca,Pa,La,u.normal),h.face=u,h.barycoord=f}return h}class id extends Mn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=fn,h=fn,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ou extends $n{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xs=new le,lu=new le,Na=[],cu=new Ki,W0=new le,Ar=new Q,Rr=new ha;class oi extends Q{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ou(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,W0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xs),cu.copy(t.boundingBox).applyMatrix4(Xs),this.boundingBox.union(cu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ha),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xs),Rr.copy(t.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(n),t.ray.intersectsSphere(Rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xs),lu.multiplyMatrices(n,Xs),Ar.matrixWorld=lu,Ar.raycast(t,Na);for(let a=0,o=Na.length;a<o;a++){const l=Na[a];l.instanceId=r,l.object=this,e.push(l)}Na.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ou(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new id(new Float32Array(s*this.count),s,this.count,$c,ii));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ss=new ha,H0=new lt(.5,.5),Fa=new P;class nh{constructor(t=new qi,e=new qi,n=new qi,s=new qi,r=new qi,a=new qi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mi,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],v=r[9],p=r[10],m=r[11],S=r[12],E=r[13],_=r[14],y=r[15];if(s[0].setComponents(c-a,d-h,m-g,y-S).normalize(),s[1].setComponents(c+a,d+h,m+g,y+S).normalize(),s[2].setComponents(c+o,d+f,m+v,y+E).normalize(),s[3].setComponents(c-o,d-f,m-v,y-E).normalize(),n)s[4].setComponents(l,u,p,_).normalize(),s[5].setComponents(c-l,d-u,m-p,y-_).normalize();else if(s[4].setComponents(c-l,d-u,m-p,y-_).normalize(),e===mi)s[5].setComponents(c+l,d+u,m+p,y+_).normalize();else if(e===ea)s[5].setComponents(l,u,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(t){ss.center.set(0,0,0);const e=H0.distanceTo(t.center);return ss.radius=.7071067811865476+e,ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Fa.x=s.normal.x>0?t.max.x:t.min.x,Fa.y=s.normal.y>0?t.max.y:t.min.y,Fa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sd extends Mn{constructor(t=[],e=Ss,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ih extends Mn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class na extends Mn{constructor(t,e,n=Mi,s,r,a,o=fn,l=fn,c,h=Ui,f=1){if(h!==Ui&&h!==xs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new th(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class V0 extends na{constructor(t,e=Mi,n=Ss,s,r,a=fn,o=fn,l,c=Ui){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class rd extends Mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Se extends je{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(f,2));function g(v,p,m,S,E,_,y,w,A,x,T){const R=_/A,I=y/x,N=_/2,V=y/2,z=w/2,W=A+1,O=x+1;let B=0,L=0;const U=new P;for(let G=0;G<O;G++){const Y=G*I-V;for(let dt=0;dt<W;dt++){const pt=dt*R-N;U[v]=pt*S,U[p]=Y*E,U[m]=z,c.push(U.x,U.y,U.z),U[v]=0,U[p]=0,U[m]=w>0?1:-1,h.push(U.x,U.y,U.z),f.push(dt/A),f.push(1-G/x),B+=1}}for(let G=0;G<x;G++)for(let Y=0;Y<A;Y++){const dt=u+Y+W*G,pt=u+Y+W*(G+1),Xt=u+(Y+1)+W*(G+1),Wt=u+(Y+1)+W*G;l.push(dt,pt,Wt),l.push(pt,Xt,Wt),L+=6}o.addGroup(d,L,T),d+=L,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ts extends je{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new P,h=new lt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(o,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Oe extends je{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let g=0;const v=[],p=n/2;let m=0;S(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new he(f,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(d,2));function S(){const _=new P,y=new P;let w=0;const A=(e-t)/n;for(let x=0;x<=r;x++){const T=[],R=x/r,I=R*(e-t)+t;for(let N=0;N<=s;N++){const V=N/s,z=V*l+o,W=Math.sin(z),O=Math.cos(z);y.x=I*W,y.y=-R*n+p,y.z=I*O,f.push(y.x,y.y,y.z),_.set(W,A,O).normalize(),u.push(_.x,_.y,_.z),d.push(V,1-R),T.push(g++)}v.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){const R=v[T][x],I=v[T+1][x],N=v[T+1][x+1],V=v[T][x+1];(t>0||T!==0)&&(h.push(R,I,V),w+=3),(e>0||T!==r-1)&&(h.push(I,N,V),w+=3)}c.addGroup(m,w,0),m+=w}function E(_){const y=g,w=new lt,A=new P;let x=0;const T=_===!0?t:e,R=_===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,p*R,0),u.push(0,R,0),d.push(.5,.5),g++;const I=g;for(let N=0;N<=s;N++){const z=N/s*l+o,W=Math.cos(z),O=Math.sin(z);A.x=T*O,A.y=p*R,A.z=T*W,f.push(A.x,A.y,A.z),u.push(0,R,0),w.x=W*.5+.5,w.y=O*.5*R+.5,d.push(w.x,w.y),g++}for(let N=0;N<s;N++){const V=y+N,z=I+N;_===!0?h.push(z,z+1,V):h.push(z+1,z,V),x+=3}c.addGroup(m,x,_===!0?1:2),m+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class sh extends Oe{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new sh(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Co extends je{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const E=new P,_=new P,y=new P;for(let w=0;w<e.length;w+=3)d(e[w+0],E),d(e[w+1],_),d(e[w+2],y),l(E,_,y,S)}function l(S,E,_,y){const w=y+1,A=[];for(let x=0;x<=w;x++){A[x]=[];const T=S.clone().lerp(_,x/w),R=E.clone().lerp(_,x/w),I=w-x;for(let N=0;N<=I;N++)N===0&&x===w?A[x][N]=T:A[x][N]=T.clone().lerp(R,N/I)}for(let x=0;x<w;x++)for(let T=0;T<2*(w-x)-1;T++){const R=Math.floor(T/2);T%2===0?(u(A[x][R+1]),u(A[x+1][R]),u(A[x][R])):(u(A[x][R+1]),u(A[x+1][R+1]),u(A[x+1][R]))}}function c(S){const E=new P;for(let _=0;_<r.length;_+=3)E.x=r[_+0],E.y=r[_+1],E.z=r[_+2],E.normalize().multiplyScalar(S),r[_+0]=E.x,r[_+1]=E.y,r[_+2]=E.z}function h(){const S=new P;for(let E=0;E<r.length;E+=3){S.x=r[E+0],S.y=r[E+1],S.z=r[E+2];const _=p(S)/2/Math.PI+.5,y=m(S)/Math.PI+.5;a.push(_,1-y)}g(),f()}function f(){for(let S=0;S<a.length;S+=6){const E=a[S+0],_=a[S+2],y=a[S+4],w=Math.max(E,_,y),A=Math.min(E,_,y);w>.9&&A<.1&&(E<.2&&(a[S+0]+=1),_<.2&&(a[S+2]+=1),y<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function d(S,E){const _=S*3;E.x=t[_+0],E.y=t[_+1],E.z=t[_+2]}function g(){const S=new P,E=new P,_=new P,y=new P,w=new lt,A=new lt,x=new lt;for(let T=0,R=0;T<r.length;T+=9,R+=6){S.set(r[T+0],r[T+1],r[T+2]),E.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),w.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),y.copy(S).add(E).add(_).divideScalar(3);const I=p(y);v(w,R+0,S,I),v(A,R+2,E,I),v(x,R+4,_,I)}}function v(S,E,_,y){y<0&&S.x===1&&(a[E]=S.x-1),_.x===0&&_.z===0&&(a[E]=y/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Co(t.vertices,t.indices,t.radius,t.detail)}}class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new lt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,s=[],r=[],a=[],o=new P,l=new le;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ce(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ce(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class rh extends yi{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new lt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class X0 extends rh{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ah(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const hu=new P,uu=new P,fl=new ah,dl=new ah,pl=new ah;class Po extends yi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(uu.subVectors(s[0],s[1]).add(s[0]),c=uu);const f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(hu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=hu),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),fl.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,v,p),dl.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,v,p),pl.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(fl.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),dl.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),pl.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(fl.calc(l),dl.calc(l),pl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function fu(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function q0(i,t){const e=1-i;return e*e*t}function $0(i,t){return 2*(1-i)*i*t}function Y0(i,t){return i*i*t}function $r(i,t,e,n){return q0(i,t)+$0(i,e)+Y0(i,n)}function Z0(i,t){const e=1-i;return e*e*e*t}function J0(i,t){const e=1-i;return 3*e*e*i*t}function K0(i,t){return 3*(1-i)*i*i*t}function Q0(i,t){return i*i*i*t}function Yr(i,t,e,n,s){return Z0(i,t)+J0(i,e)+K0(i,n)+Q0(i,s)}class ad extends yi{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Yr(t,s.x,r.x,a.x,o.x),Yr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class j0 extends yi{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Yr(t,s.x,r.x,a.x,o.x),Yr(t,s.y,r.y,a.y,o.y),Yr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class od extends yi{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ld extends yi{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cd extends yi{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set($r(t,s.x,r.x,a.x),$r(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hd extends yi{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set($r(t,s.x,r.x,a.x),$r(t,s.y,r.y,a.y),$r(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ud extends yi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(fu(o,l.x,c.x,h.x,f.x),fu(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new lt().fromArray(s))}return this}}var xo=Object.freeze({__proto__:null,ArcCurve:X0,CatmullRomCurve3:Po,CubicBezierCurve:ad,CubicBezierCurve3:j0,EllipseCurve:rh,LineCurve:od,LineCurve3:ld,QuadraticBezierCurve:cd,QuadraticBezierCurve3:hd,SplineCurve:ud});class tm extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new xo[s.type]().fromJSON(s))}return this}}class ia extends tm{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new od(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new cd(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new ad(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ud(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new rh(t,e,n,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class As extends ia{constructor(t){super(t),this.uuid=vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ia().fromJSON(s))}return this}}function em(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=fd(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=am(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,f=l;for(let u=e;u<s;u+=e){const d=i[u],g=i[u+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return sa(r,a,e,o,l,c,0),a}function fd(i,t,e,n,s){let r;if(s===xm(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=du(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=du(a/n|0,i[a],i[a+1],r);return r&&cr(r,r.next)&&(aa(r),r=r.next),r}function ys(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(cr(e,e.next)||$e(e.prev,e,e.next)===0)){if(aa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function sa(i,t,e,n,s,r,a){if(!i)return;!a&&r&&um(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?im(i,n,s,r):nm(i)){t.push(l.i,i.i,c.i),aa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=sm(ys(i),t),sa(i,t,e,n,s,r,2)):a===2&&rm(i,t,e,n,s,r):sa(ys(i),t,e,n,s,r,1);break}}}function nm(i){const t=i.prev,e=i,n=i.next;if($e(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Gr(s,o,r,l,a,c,g.x,g.y)&&$e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function im(i,t,e,n){const s=i.prev,r=i,a=i.next;if($e(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),g=Math.min(h,f,u),v=Math.max(o,l,c),p=Math.max(h,f,u),m=bc(d,g,t,e,n),S=bc(v,p,t,e,n);let E=i.prevZ,_=i.nextZ;for(;E&&E.z>=m&&_&&_.z<=S;){if(E.x>=d&&E.x<=v&&E.y>=g&&E.y<=p&&E!==s&&E!==a&&Gr(o,h,l,f,c,u,E.x,E.y)&&$e(E.prev,E,E.next)>=0||(E=E.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&Gr(o,h,l,f,c,u,_.x,_.y)&&$e(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;E&&E.z>=m;){if(E.x>=d&&E.x<=v&&E.y>=g&&E.y<=p&&E!==s&&E!==a&&Gr(o,h,l,f,c,u,E.x,E.y)&&$e(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;_&&_.z<=S;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&Gr(o,h,l,f,c,u,_.x,_.y)&&$e(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function sm(i,t){let e=i;do{const n=e.prev,s=e.next.next;!cr(n,s)&&pd(n,e,e.next,s)&&ra(n,s)&&ra(s,n)&&(t.push(n.i,e.i,s.i),aa(e),aa(e.next),e=i=s),e=e.next}while(e!==i);return ys(e)}function rm(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&pm(a,o)){let l=md(a,o);a=ys(a,a.next),l=ys(l,l.next),sa(a,t,e,n,s,r,0),sa(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function am(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=fd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(dm(c))}s.sort(om);for(let r=0;r<s.length;r++)e=lm(s[r],e);return e}function om(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function lm(i,t){const e=cm(i,t);if(!e)return t;const n=md(e,i);return ys(n,n.next),ys(e,e.next)}function cm(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(cr(i,e))return e;do{if(cr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&dd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);ra(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&hm(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function hm(i,t){return $e(i.prev,i,t.prev)<0&&$e(t.next,i,i.next)<0}function um(i,t,e,n){let s=i;do s.z===0&&(s.z=bc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fm(s)}function fm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function bc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function dm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function dd(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Gr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&dd(i,t,e,n,s,r,a,o)}function pm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!mm(i,t)&&(ra(i,t)&&ra(t,i)&&gm(i,t)&&($e(i.prev,i,t.prev)||$e(i,t.prev,t))||cr(i,t)&&$e(i.prev,i,i.next)>0&&$e(t.prev,t,t.next)>0)}function $e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function cr(i,t){return i.x===t.x&&i.y===t.y}function pd(i,t,e,n){const s=Ba($e(i,t,e)),r=Ba($e(i,t,n)),a=Ba($e(e,n,i)),o=Ba($e(e,n,t));return!!(s!==r&&a!==o||s===0&&Oa(i,e,t)||r===0&&Oa(i,n,t)||a===0&&Oa(e,i,n)||o===0&&Oa(e,t,n))}function Oa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ba(i){return i>0?1:i<0?-1:0}function mm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&pd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ra(i,t){return $e(i.prev,i,i.next)<0?$e(i,t,i.next)>=0&&$e(i,i.prev,t)>=0:$e(i,t,i.prev)<0||$e(i,i.next,t)<0}function gm(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function md(i,t){const e=yc(i.i,i.x,i.y),n=yc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function du(i,t,e,n){const s=yc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function aa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function yc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xm(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class vm{static triangulate(t,e,n=2){return em(t,e,n)}}class Ci{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ci.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];pu(t),mu(n,t);let a=t.length;e.forEach(pu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,mu(n,e[l]);const o=vm.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function pu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function mu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class oh extends je{constructor(t=new As([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new he(s,3)),this.setAttribute("uv",new he(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:_m;let E,_=!1,y,w,A,x;if(m){E=m.getSpacedPoints(h),_=!0,u=!1;const rt=m.isCatmullRomCurve3?m.closed:!1;y=m.computeFrenetFrames(h,rt),w=new P,A=new P,x=new P}u||(p=0,d=0,g=0,v=0);const T=o.extractPoints(c);let R=T.shape;const I=T.holes;if(!Ci.isClockWise(R)){R=R.reverse();for(let rt=0,ot=I.length;rt<ot;rt++){const ht=I[rt];Ci.isClockWise(ht)&&(I[rt]=ht.reverse())}}function V(rt){const ht=10000000000000001e-36;let ut=rt[0];for(let xt=1;xt<=rt.length;xt++){const Ht=xt%rt.length,Gt=rt[Ht],Yt=Gt.x-ut.x,Kt=Gt.y-ut.y,D=Yt*Yt+Kt*Kt,we=Math.max(Math.abs(Gt.x),Math.abs(Gt.y),Math.abs(ut.x),Math.abs(ut.y)),de=ht*we*we;if(D<=de){rt.splice(Ht,1),xt--;continue}ut=Gt}}V(R),I.forEach(V);const z=I.length,W=R;for(let rt=0;rt<z;rt++){const ot=I[rt];R=R.concat(ot)}function O(rt,ot,ht){return ot||ve("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(ot,ht)}const B=R.length;function L(rt,ot,ht){let ut,xt,Ht;const Gt=rt.x-ot.x,Yt=rt.y-ot.y,Kt=ht.x-rt.x,D=ht.y-rt.y,we=Gt*Gt+Yt*Yt,de=Gt*D-Yt*Kt;if(Math.abs(de)>Number.EPSILON){const C=Math.sqrt(we),M=Math.sqrt(Kt*Kt+D*D),H=ot.x-Yt/C,$=ot.y+Gt/C,j=ht.x-D/M,ft=ht.y+Kt/M,mt=((j-H)*D-(ft-$)*Kt)/(Gt*D-Yt*Kt);ut=H+Gt*mt-rt.x,xt=$+Yt*mt-rt.y;const et=ut*ut+xt*xt;if(et<=2)return new lt(ut,xt);Ht=Math.sqrt(et/2)}else{let C=!1;Gt>Number.EPSILON?Kt>Number.EPSILON&&(C=!0):Gt<-Number.EPSILON?Kt<-Number.EPSILON&&(C=!0):Math.sign(Yt)===Math.sign(D)&&(C=!0),C?(ut=-Yt,xt=Gt,Ht=Math.sqrt(we)):(ut=Gt,xt=Yt,Ht=Math.sqrt(we/2))}return new lt(ut/Ht,xt/Ht)}const U=[];for(let rt=0,ot=W.length,ht=ot-1,ut=rt+1;rt<ot;rt++,ht++,ut++)ht===ot&&(ht=0),ut===ot&&(ut=0),U[rt]=L(W[rt],W[ht],W[ut]);const G=[];let Y,dt=U.concat();for(let rt=0,ot=z;rt<ot;rt++){const ht=I[rt];Y=[];for(let ut=0,xt=ht.length,Ht=xt-1,Gt=ut+1;ut<xt;ut++,Ht++,Gt++)Ht===xt&&(Ht=0),Gt===xt&&(Gt=0),Y[ut]=L(ht[ut],ht[Ht],ht[Gt]);G.push(Y),dt=dt.concat(Y)}let pt;if(p===0)pt=Ci.triangulateShape(W,I);else{const rt=[],ot=[];for(let ht=0;ht<p;ht++){const ut=ht/p,xt=d*Math.cos(ut*Math.PI/2),Ht=g*Math.sin(ut*Math.PI/2)+v;for(let Gt=0,Yt=W.length;Gt<Yt;Gt++){const Kt=O(W[Gt],U[Gt],Ht);gt(Kt.x,Kt.y,-xt),ut===0&&rt.push(Kt)}for(let Gt=0,Yt=z;Gt<Yt;Gt++){const Kt=I[Gt];Y=G[Gt];const D=[];for(let we=0,de=Kt.length;we<de;we++){const C=O(Kt[we],Y[we],Ht);gt(C.x,C.y,-xt),ut===0&&D.push(C)}ut===0&&ot.push(D)}}pt=Ci.triangulateShape(rt,ot)}const Xt=pt.length,Wt=g+v;for(let rt=0;rt<B;rt++){const ot=u?O(R[rt],dt[rt],Wt):R[rt];_?(A.copy(y.normals[0]).multiplyScalar(ot.x),w.copy(y.binormals[0]).multiplyScalar(ot.y),x.copy(E[0]).add(A).add(w),gt(x.x,x.y,x.z)):gt(ot.x,ot.y,0)}for(let rt=1;rt<=h;rt++)for(let ot=0;ot<B;ot++){const ht=u?O(R[ot],dt[ot],Wt):R[ot];_?(A.copy(y.normals[rt]).multiplyScalar(ht.x),w.copy(y.binormals[rt]).multiplyScalar(ht.y),x.copy(E[rt]).add(A).add(w),gt(x.x,x.y,x.z)):gt(ht.x,ht.y,f/h*rt)}for(let rt=p-1;rt>=0;rt--){const ot=rt/p,ht=d*Math.cos(ot*Math.PI/2),ut=g*Math.sin(ot*Math.PI/2)+v;for(let xt=0,Ht=W.length;xt<Ht;xt++){const Gt=O(W[xt],U[xt],ut);gt(Gt.x,Gt.y,f+ht)}for(let xt=0,Ht=I.length;xt<Ht;xt++){const Gt=I[xt];Y=G[xt];for(let Yt=0,Kt=Gt.length;Yt<Kt;Yt++){const D=O(Gt[Yt],Y[Yt],ut);_?gt(D.x,D.y+E[h-1].y,E[h-1].x+ht):gt(D.x,D.y,f+ht)}}}qt(),Z();function qt(){const rt=s.length/3;if(u){let ot=0,ht=B*ot;for(let ut=0;ut<Xt;ut++){const xt=pt[ut];kt(xt[2]+ht,xt[1]+ht,xt[0]+ht)}ot=h+p*2,ht=B*ot;for(let ut=0;ut<Xt;ut++){const xt=pt[ut];kt(xt[0]+ht,xt[1]+ht,xt[2]+ht)}}else{for(let ot=0;ot<Xt;ot++){const ht=pt[ot];kt(ht[2],ht[1],ht[0])}for(let ot=0;ot<Xt;ot++){const ht=pt[ot];kt(ht[0]+B*h,ht[1]+B*h,ht[2]+B*h)}}n.addGroup(rt,s.length/3-rt,0)}function Z(){const rt=s.length/3;let ot=0;nt(W,ot),ot+=W.length;for(let ht=0,ut=I.length;ht<ut;ht++){const xt=I[ht];nt(xt,ot),ot+=xt.length}n.addGroup(rt,s.length/3-rt,1)}function nt(rt,ot){let ht=rt.length;for(;--ht>=0;){const ut=ht;let xt=ht-1;xt<0&&(xt=rt.length-1);for(let Ht=0,Gt=h+p*2;Ht<Gt;Ht++){const Yt=B*Ht,Kt=B*(Ht+1),D=ot+ut+Yt,we=ot+xt+Yt,de=ot+xt+Kt,C=ot+ut+Kt;At(D,we,de,C)}}}function gt(rt,ot,ht){l.push(rt),l.push(ot),l.push(ht)}function kt(rt,ot,ht){$t(rt),$t(ot),$t(ht);const ut=s.length/3,xt=S.generateTopUV(n,s,ut-3,ut-2,ut-1);Pe(xt[0]),Pe(xt[1]),Pe(xt[2])}function At(rt,ot,ht,ut){$t(rt),$t(ot),$t(ut),$t(ot),$t(ht),$t(ut);const xt=s.length/3,Ht=S.generateSideWallUV(n,s,xt-6,xt-3,xt-2,xt-1);Pe(Ht[0]),Pe(Ht[1]),Pe(Ht[3]),Pe(Ht[1]),Pe(Ht[2]),Pe(Ht[3])}function $t(rt){s.push(l[rt*3+0]),s.push(l[rt*3+1]),s.push(l[rt*3+2])}function Pe(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Mm(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new xo[s.type]().fromJSON(s)),new oh(n,t.options)}}const _m={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new lt(r,a),new lt(o,l),new lt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],v=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new lt(a,1-l),new lt(c,1-f),new lt(u,1-g),new lt(v,1-m)]:[new lt(o,1-l),new lt(h,1-f),new lt(d,1-g),new lt(p,1-m)]}};function Mm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class hr extends Co{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hr(t.radius,t.detail)}}class lh extends je{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ce(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,f=new P,u=new lt,d=new P,g=new P,v=new P;let p=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:p=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,d.x=m*1,d.y=-p,d.z=m*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:p=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let S=0;S<=e;S++){const E=n+S*h*s,_=Math.sin(E),y=Math.cos(E);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*_,f.y=t[w].y,f.z=t[w].x*y,a.push(f.x,f.y,f.z),u.x=S/e,u.y=w/(t.length-1),o.push(u.x,u.y);const A=l[3*w+0]*_,x=l[3*w+1],T=l[3*w+0]*y;c.push(A,x,T)}}for(let S=0;S<e;S++)for(let E=0;E<t.length-1;E++){const _=E+S*t.length,y=_,w=_+t.length,A=_+t.length+1,x=_+1;r.push(y,w,x),r.push(A,x,w)}this.setIndex(r),this.setAttribute("position",new he(a,3)),this.setAttribute("uv",new he(o,2)),this.setAttribute("normal",new he(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lh(t.points,t.segments,t.phiStart,t.phiLength)}}class ua extends Co{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ua(t.radius,t.detail)}}class be extends je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const S=m*u-a;for(let E=0;E<c;E++){const _=E*f-r;g.push(_,-S,0),v.push(0,0,1),p.push(E/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const E=S+c*m,_=S+c*(m+1),y=S+1+c*(m+1),w=S+1+c*m;d.push(E,_,w),d.push(_,y,w)}this.setIndex(d),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(v,3)),this.setAttribute("uv",new he(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.width,t.height,t.widthSegments,t.heightSegments)}}class Rs extends je{constructor(t=new As([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new he(s,3)),this.setAttribute("normal",new he(r,3)),this.setAttribute("uv",new he(a,2));function c(h){const f=s.length/3,u=h.extractPoints(e);let d=u.shape;const g=u.holes;Ci.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const S=g[p];Ci.isClockWise(S)===!0&&(g[p]=S.reverse())}const v=Ci.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const S=g[p];d=d.concat(S)}for(let p=0,m=d.length;p<m;p++){const S=d[p];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let p=0,m=v.length;p<m;p++){const S=v[p],E=S[0]+f,_=S[1]+f,y=S[2]+f;n.push(E,_,y),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Sm(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new Rs(n,t.curveSegments)}}function Sm(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class bn extends je{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new P,u=new P,d=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const S=[],E=m/n,_=a+E*o,y=t*Math.cos(_),w=Math.sqrt(t*t-y*y);let A=0;m===0&&a===0?A=.5/e:m===n&&l===Math.PI&&(A=-.5/e);for(let x=0;x<=e;x++){const T=x/e,R=s+T*r;f.x=-w*Math.cos(R),f.y=y,f.z=w*Math.sin(R),g.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),p.push(T+A,1-E),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){const E=h[m][S+1],_=h[m][S],y=h[m+1][S],w=h[m+1][S+1];(m!==0||a>0)&&d.push(E,_,w),(m!==n-1||l<Math.PI)&&d.push(_,y,w)}this.setIndex(d),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(v,3)),this.setAttribute("uv",new he(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Jn extends je{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],f=[],u=new P,d=new P,g=new P;for(let v=0;v<=n;v++){const p=a+v/n*o;for(let m=0;m<=s;m++){const S=m/s*r;d.x=(t+e*Math.cos(p))*Math.cos(S),d.y=(t+e*Math.cos(p))*Math.sin(S),d.z=e*Math.sin(p),c.push(d.x,d.y,d.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(m/s),f.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=s;p++){const m=(s+1)*v+p-1,S=(s+1)*(v-1)+p-1,E=(s+1)*(v-1)+p,_=(s+1)*v+p;l.push(m,S,_),l.push(S,E,_)}this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class mr extends je{constructor(t=new hd(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new lt;let h=new P;const f=[],u=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new he(f,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(d,2));function v(){for(let E=0;E<e;E++)p(E);p(r===!1?e:0),S(),m()}function p(E){h=t.getPointAt(E/e,h);const _=a.normals[E],y=a.binormals[E];for(let w=0;w<=s;w++){const A=w/s*Math.PI*2,x=Math.sin(A),T=-Math.cos(A);l.x=T*_.x+x*y.x,l.y=T*_.y+x*y.y,l.z=T*_.z+x*y.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function m(){for(let E=1;E<=e;E++)for(let _=1;_<=s;_++){const y=(s+1)*(E-1)+(_-1),w=(s+1)*E+(_-1),A=(s+1)*E+_,x=(s+1)*(E-1)+_;g.push(y,w,x),g.push(w,A,x)}}function S(){for(let E=0;E<=e;E++)for(let _=0;_<=s;_++)c.x=E/e,c.y=_/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new mr(new xo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function ur(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(gu(s))s.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(gu(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Tn(i){const t={};for(let e=0;e<i.length;e++){const n=ur(i[e]);for(const s in n)t[s]=n[s]}return t}function gu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function bm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const ym={clone:ur,merge:Tn};var wm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Es{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wm,this.fragmentShader=Em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=bm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new zt().setHex(s.value);break;case"v2":this.uniforms[n].value=new lt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new qe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Tm extends bi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cn extends Es{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ho,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Am extends Es{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ho,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Wc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Rm extends Es{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cm extends Es{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Lo extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Pm extends Lo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ml=new le,xu=new P,vu=new P;class ch{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nh,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;xu.setFromMatrixPosition(t.matrixWorld),e.position.copy(xu),vu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ml.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ml,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ea||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const za=new P,ka=new zn,hi=new P;class xd extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(za,ka,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,ka,hi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(za,ka,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,ka,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new P,_u=new lt,Mu=new lt;class Ln extends xd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,_u,Mu),e.subVectors(Mu,_u)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Lm extends ch{constructor(){super(new Ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=lr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Im extends Lo{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Lm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Dm extends ch{constructor(){super(new Ln(90,1,.5,500)),this.isPointLightShadow=!0}}class Um extends Lo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Dm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class hh extends xd{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Nm extends ch{constructor(){super(new hh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fm extends Lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new Nm}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const qs=-90,$s=1;class Om extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ln(qs,$s,t,e);s.layers=this.layers,this.add(s);const r=new Ln(qs,$s,t,e);r.layers=this.layers,this.add(r);const a=new Ln(qs,$s,t,e);a.layers=this.layers,this.add(a);const o=new Ln(qs,$s,t,e);o.layers=this.layers,this.add(o);const l=new Ln(qs,$s,t,e);l.layers=this.layers,this.add(l);const c=new Ln(qs,$s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bm extends Ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const wh=class wh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};wh.prototype.isMatrix2=!0;let Su=wh;function bu(i,t,e,n){const s=zm(n);switch(e){case Xf:return i*t;case $c:return i*t/s.components*s.byteLength;case Yc:return i*t/s.components*s.byteLength;case bs:return i*t*2/s.components*s.byteLength;case Zc:return i*t*2/s.components*s.byteLength;case qf:return i*t*3/s.components*s.byteLength;case si:return i*t*4/s.components*s.byteLength;case Jc:return i*t*4/s.components*s.byteLength;case Za:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ka:case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $l:case Zl:return Math.max(i,16)*Math.max(t,8)/4;case ql:case Yl:return Math.max(i,8)*Math.max(t,8)/2;case Jl:case Kl:case jl:case tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ql:case lo:case ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case rc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case oc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case hc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case gc:case xc:case vc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _c:case Mc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case co:case Sc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zm(i){switch(i){case Fn:case Gf:return{byteLength:1,components:1};case jr:case Wf:case Si:return{byteLength:2,components:1};case Xc:case qc:return{byteLength:2,components:4};case Mi:case Vc:case ii:return{byteLength:4,components:1};case Hf:case Vf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function km(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const v=f[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Gm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wm=`#ifdef USE_ALPHAHASH
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
#endif`,Hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$m=`#ifdef USE_AOMAP
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
#endif`,Ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zm=`#ifdef USE_BATCHING
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
#endif`,Jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Km=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tg=`#ifdef USE_IRIDESCENCE
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
#endif`,eg=`#ifdef USE_BUMPMAP
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
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hg=`#define PI 3.141592653589793
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
} // validated`,ug=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fg=`vec3 transformedNormal = objectNormal;
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
#endif`,dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xg="gl_FragColor = linearToOutputTexel( gl_FragColor );",vg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_g=`#ifdef USE_ENVMAP
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
#endif`,Mg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
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
#endif`,bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ag=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rg=`#ifdef USE_GRADIENTMAP
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
}`,Cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ig=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ug=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bg=`PhysicalMaterial material;
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
#endif`,zg=`uniform sampler2D dfgLUT;
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
}`,kg=`
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
#endif`,Gg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Vg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kg=`#if defined( USE_POINTS_UV )
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
#endif`,Qg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`#ifdef USE_MORPHTARGETS
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
#endif`,sx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ax=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hx=`#ifdef USE_NORMALMAP
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
#endif`,ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_x=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tx=`float getShadowMask() {
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
}`,Ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rx=`#ifdef USE_SKINNING
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
#endif`,Cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Px=`#ifdef USE_SKINNING
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
#endif`,Lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ux=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nx=`#ifdef USE_TRANSMISSION
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
#endif`,Fx=`#ifdef USE_TRANSMISSION
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wx=`uniform sampler2D t2D;
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
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`#include <common>
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
}`,Yx=`#if DEPTH_PACKING == 3200
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
}`,Zx=`#define DISTANCE
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
}`,Jx=`#define DISTANCE
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
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`uniform float scale;
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
}`,tv=`uniform vec3 diffuse;
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
}`,ev=`#include <common>
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
}`,nv=`uniform vec3 diffuse;
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
}`,iv=`#define LAMBERT
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
}`,sv=`#define LAMBERT
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
}`,rv=`#define MATCAP
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
}`,av=`#define MATCAP
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
}`,ov=`#define NORMAL
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
}`,lv=`#define NORMAL
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
}`,cv=`#define PHONG
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
}`,hv=`#define PHONG
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
}`,uv=`#define STANDARD
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
}`,fv=`#define STANDARD
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
}`,dv=`#define TOON
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
}`,pv=`#define TOON
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
}`,mv=`uniform float size;
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
}`,gv=`uniform vec3 diffuse;
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
}`,xv=`#include <common>
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
}`,vv=`uniform vec3 color;
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
}`,_v=`uniform float rotation;
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
}`,Mv=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:Gm,alphahash_pars_fragment:Wm,alphamap_fragment:Hm,alphamap_pars_fragment:Vm,alphatest_fragment:Xm,alphatest_pars_fragment:qm,aomap_fragment:$m,aomap_pars_fragment:Ym,batching_pars_vertex:Zm,batching_vertex:Jm,begin_vertex:Km,beginnormal_vertex:Qm,bsdfs:jm,iridescence_fragment:tg,bumpmap_pars_fragment:eg,clipping_planes_fragment:ng,clipping_planes_pars_fragment:ig,clipping_planes_pars_vertex:sg,clipping_planes_vertex:rg,color_fragment:ag,color_pars_fragment:og,color_pars_vertex:lg,color_vertex:cg,common:hg,cube_uv_reflection_fragment:ug,defaultnormal_vertex:fg,displacementmap_pars_vertex:dg,displacementmap_vertex:pg,emissivemap_fragment:mg,emissivemap_pars_fragment:gg,colorspace_fragment:xg,colorspace_pars_fragment:vg,envmap_fragment:_g,envmap_common_pars_fragment:Mg,envmap_pars_fragment:Sg,envmap_pars_vertex:bg,envmap_physical_pars_fragment:Dg,envmap_vertex:yg,fog_vertex:wg,fog_pars_vertex:Eg,fog_fragment:Tg,fog_pars_fragment:Ag,gradientmap_pars_fragment:Rg,lightmap_pars_fragment:Cg,lights_lambert_fragment:Pg,lights_lambert_pars_fragment:Lg,lights_pars_begin:Ig,lights_toon_fragment:Ug,lights_toon_pars_fragment:Ng,lights_phong_fragment:Fg,lights_phong_pars_fragment:Og,lights_physical_fragment:Bg,lights_physical_pars_fragment:zg,lights_fragment_begin:kg,lights_fragment_maps:Gg,lights_fragment_end:Wg,lightprobes_pars_fragment:Hg,logdepthbuf_fragment:Vg,logdepthbuf_pars_fragment:Xg,logdepthbuf_pars_vertex:qg,logdepthbuf_vertex:$g,map_fragment:Yg,map_pars_fragment:Zg,map_particle_fragment:Jg,map_particle_pars_fragment:Kg,metalnessmap_fragment:Qg,metalnessmap_pars_fragment:jg,morphinstance_vertex:tx,morphcolor_vertex:ex,morphnormal_vertex:nx,morphtarget_pars_vertex:ix,morphtarget_vertex:sx,normal_fragment_begin:rx,normal_fragment_maps:ax,normal_pars_fragment:ox,normal_pars_vertex:lx,normal_vertex:cx,normalmap_pars_fragment:hx,clearcoat_normal_fragment_begin:ux,clearcoat_normal_fragment_maps:fx,clearcoat_pars_fragment:dx,iridescence_pars_fragment:px,opaque_fragment:mx,packing:gx,premultiplied_alpha_fragment:xx,project_vertex:vx,dithering_fragment:_x,dithering_pars_fragment:Mx,roughnessmap_fragment:Sx,roughnessmap_pars_fragment:bx,shadowmap_pars_fragment:yx,shadowmap_pars_vertex:wx,shadowmap_vertex:Ex,shadowmask_pars_fragment:Tx,skinbase_vertex:Ax,skinning_pars_vertex:Rx,skinning_vertex:Cx,skinnormal_vertex:Px,specularmap_fragment:Lx,specularmap_pars_fragment:Ix,tonemapping_fragment:Dx,tonemapping_pars_fragment:Ux,transmission_fragment:Nx,transmission_pars_fragment:Fx,uv_pars_fragment:Ox,uv_pars_vertex:Bx,uv_vertex:zx,worldpos_vertex:kx,background_vert:Gx,background_frag:Wx,backgroundCube_vert:Hx,backgroundCube_frag:Vx,cube_vert:Xx,cube_frag:qx,depth_vert:$x,depth_frag:Yx,distance_vert:Zx,distance_frag:Jx,equirect_vert:Kx,equirect_frag:Qx,linedashed_vert:jx,linedashed_frag:tv,meshbasic_vert:ev,meshbasic_frag:nv,meshlambert_vert:iv,meshlambert_frag:sv,meshmatcap_vert:rv,meshmatcap_frag:av,meshnormal_vert:ov,meshnormal_frag:lv,meshphong_vert:cv,meshphong_frag:hv,meshphysical_vert:uv,meshphysical_frag:fv,meshtoon_vert:dv,meshtoon_frag:pv,points_vert:mv,points_frag:gv,shadow_vert:xv,shadow_frag:vv,sprite_vert:_v,sprite_frag:Mv},yt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},di={basic:{uniforms:Tn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:Tn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:Tn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:Tn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:Tn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new zt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:Tn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:Tn([yt.points,yt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:Tn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:Tn([yt.common,yt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:Tn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:Tn([yt.sprite,yt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:Tn([yt.common,yt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:Tn([yt.lights,yt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};di.physical={uniforms:Tn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const Ga={r:0,b:0,g:0},Sv=new le,_d=new Qt;_d.set(-1,0,0,0,1,0,0,0,1);function bv(i,t,e,n,s,r){const a=new zt(0);let o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){const _=S.backgroundBlurriness>0;E=t.get(E,_)}return E}function g(S){let E=!1;const _=d(S);_===null?p(a,o):_&&_.isColor&&(p(_,1),E=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(S,E){const _=d(E);_&&(_.isCubeTexture||_.mapping===Ro)?(c===void 0&&(c=new Q(new Se(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:ur(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sv.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_d),c.material.toneMapped=ge.getTransfer(_.colorSpace)!==Le,(h!==_||f!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Q(new be(2,2),new bi({name:"BackgroundMaterial",uniforms:ur(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ge.getTransfer(_.colorSpace)!==Le,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,E){S.getRGB(Ga,gd(i)),e.buffers.color.setClear(Ga.r,Ga.g,Ga.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:g,addToRenderList:v,dispose:m}}function yv(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(I,N,V,z,W){let O=!1;const B=f(I,z,V,N);r!==B&&(r=B,c(r.object)),O=d(I,z,V,W),O&&g(I,z,V,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,_(I,N,V,z),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function f(I,N,V,z){const W=z.wireframe===!0;let O=n[N.id];O===void 0&&(O={},n[N.id]=O);const B=I.isInstancedMesh===!0?I.id:0;let L=O[B];L===void 0&&(L={},O[B]=L);let U=L[V.id];U===void 0&&(U={},L[V.id]=U);let G=U[W];return G===void 0&&(G=u(l()),U[W]=G),G}function u(I){const N=[],V=[],z=[];for(let W=0;W<e;W++)N[W]=0,V[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:z,object:I,attributes:{},index:null}}function d(I,N,V,z){const W=r.attributes,O=N.attributes;let B=0;const L=V.getAttributes();for(const U in L)if(L[U].location>=0){const Y=W[U];let dt=O[U];if(dt===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(dt=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(dt=I.instanceColor)),Y===void 0||Y.attribute!==dt||dt&&Y.data!==dt.data)return!0;B++}return r.attributesNum!==B||r.index!==z}function g(I,N,V,z){const W={},O=N.attributes;let B=0;const L=V.getAttributes();for(const U in L)if(L[U].location>=0){let Y=O[U];Y===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor));const dt={};dt.attribute=Y,Y&&Y.data&&(dt.data=Y.data),W[U]=dt,B++}r.attributes=W,r.attributesNum=B,r.index=z}function v(){const I=r.newAttributes;for(let N=0,V=I.length;N<V;N++)I[N]=0}function p(I){m(I,0)}function m(I,N){const V=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;V[I]=1,z[I]===0&&(i.enableVertexAttribArray(I),z[I]=1),W[I]!==N&&(i.vertexAttribDivisor(I,N),W[I]=N)}function S(){const I=r.newAttributes,N=r.enabledAttributes;for(let V=0,z=N.length;V<z;V++)N[V]!==I[V]&&(i.disableVertexAttribArray(V),N[V]=0)}function E(I,N,V,z,W,O,B){B===!0?i.vertexAttribIPointer(I,N,V,W,O):i.vertexAttribPointer(I,N,V,z,W,O)}function _(I,N,V,z){v();const W=z.attributes,O=V.getAttributes(),B=N.defaultAttributeValues;for(const L in O){const U=O[L];if(U.location>=0){let G=W[L];if(G===void 0&&(L==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),L==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){const Y=G.normalized,dt=G.itemSize,pt=t.get(G);if(pt===void 0)continue;const Xt=pt.buffer,Wt=pt.type,qt=pt.bytesPerElement,Z=Wt===i.INT||Wt===i.UNSIGNED_INT||G.gpuType===Vc;if(G.isInterleavedBufferAttribute){const nt=G.data,gt=nt.stride,kt=G.offset;if(nt.isInstancedInterleavedBuffer){for(let At=0;At<U.locationSize;At++)m(U.location+At,nt.meshPerAttribute);I.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let At=0;At<U.locationSize;At++)p(U.location+At);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let At=0;At<U.locationSize;At++)E(U.location+At,dt/U.locationSize,Wt,Y,gt*qt,(kt+dt/U.locationSize*At)*qt,Z)}else{if(G.isInstancedBufferAttribute){for(let nt=0;nt<U.locationSize;nt++)m(U.location+nt,G.meshPerAttribute);I.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let nt=0;nt<U.locationSize;nt++)p(U.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let nt=0;nt<U.locationSize;nt++)E(U.location+nt,dt/U.locationSize,Wt,Y,dt*qt,dt/U.locationSize*nt*qt,Z)}}else if(B!==void 0){const Y=B[L];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(U.location,Y);break;case 3:i.vertexAttrib3fv(U.location,Y);break;case 4:i.vertexAttrib4fv(U.location,Y);break;default:i.vertexAttrib1fv(U.location,Y)}}}}S()}function y(){T();for(const I in n){const N=n[I];for(const V in N){const z=N[V];for(const W in z){const O=z[W];for(const B in O)h(O[B].object),delete O[B];delete z[W]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;const N=n[I.id];for(const V in N){const z=N[V];for(const W in z){const O=z[W];for(const B in O)h(O[B].object),delete O[B];delete z[W]}}delete n[I.id]}function A(I){for(const N in n){const V=n[N];for(const z in V){const W=V[z];if(W[I.id]===void 0)continue;const O=W[I.id];for(const B in O)h(O[B].object),delete O[B];delete W[I.id]}}}function x(I){for(const N in n){const V=n[N],z=I.isInstancedMesh===!0?I.id:0,W=V[z];if(W!==void 0){for(const O in W){const B=W[O];for(const L in B)h(B[L].object),delete B[L];delete W[O]}delete V[z],Object.keys(V).length===0&&delete n[N]}}}function T(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:p,disableUnusedAttributes:S}}function wv(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ev(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==si&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===Si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Fn&&A!==ii&&!x&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:_,maxSamples:y,samples:w}}function Tv(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new qi,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const S=r?0:n,E=S*4;let _=m.clippingState||null;l.value=_,_=h(g,u,E,d);for(let y=0;y!==E;++y)_[y]=e[y];m.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=d+v*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,_=d;E!==v;++E,_+=4)a.copy(f[E]).applyMatrix4(S,o),a.normal.toArray(p,_),p[_+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}const tr=4,Av=6,Rv=20,Cv=256,Cr=new hh,yu=new zt;let gl=null,xl=0,vl=0,_l=!1;const Pv=new P,rs=new P;class wc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Pv}=r;gl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(gl,xl,vl),this._renderer.xr.enabled=_l,t.scissorTest=!1,Ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Si,format:si,colorSpace:uo,depthBuffer:!1},s=wu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wu(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Lv(r)),this._blurMaterial=Dv(r,t,e),this._ggxMaterial=Iv(r,t,e)}return s}_compileMaterial(t){const e=new Q(new je,t);this._renderer.compile(e,Cr)}_sceneToCubeUV(t,e,n,s,r){const l=new Ln(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(yu),f.toneMapping=xi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Q(new Se,new Rn({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,p=v.material;let m=!1;const S=t.background;S?S.isColor&&(p.color.copy(S),t.background=null,m=!0):(p.color.copy(yu),m=!0);for(let E=0;E<6;E++){const _=E%3;_===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):_===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const y=this._cubeSize;Ys(s,_*y,E>2?y:0,y,y),f.setRenderTarget(s),m&&f.render(v,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ss||t.mapping===or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ys(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Cr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:g}=this,v=this._sizeLods[n],p=3*v*(n>g-tr?n-g+tr:0),m=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Ys(r,p,m,3*v,2*v),s.setRenderTarget(r),s.render(o,Cr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ys(t,p,m,3*v,2*v),s.setRenderTarget(t),s.render(o,Cr)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],f=3*h*(s>this._lodMax-tr?s-this._lodMax+tr:0),u=4*(this._cubeSize-h);Ys(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Cr)}}function Lv(i){const t=[],e=[];let n=i;const s=i-tr+1+Av;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,g=new Float32Array(d*u*f),v=new Float32Array(d*u*f);for(let m=0;m<f;m++){const S=m%3*2/3-1,E=m>2?0:-1,_=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];g.set(_,d*u*m);for(let y=0;y<u;y++){const w=h[y*2]*2-1,A=h[y*2+1]*2-1;m===0?rs.set(1,A,w):m===1?rs.set(-w,1,-A):m===2?rs.set(-w,A,1):m===3?rs.set(-1,A,-w):m===4?rs.set(-w,-1,A):rs.set(w,A,-1),rs.toArray(v,(m*u+y)*d)}}const p=new je;p.setAttribute("position",new $n(g,d)),p.setAttribute("outputDirection",new $n(v,d)),e.push(new Q(p,null)),n>tr&&n--}return{lodMeshes:e,sizeLods:t}}function wu(i,t,e){const n=new ri(i,t,e);return n.texture.mapping=Ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Iv(i,t,e){return new bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Io(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Dv(i,t,e){return new bi({name:"SphericalGaussianBlur",defines:{SAMPLES:Rv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Io(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Eu(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Tu(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Io(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Md extends ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new sd(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Se(5,5,5),r=new bi({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Li});r.uniforms.tEquirect.value=e;const a=new Q(s,r),o=e.minFilter;return e.minFilter===gs&&(e.minFilter=vn),new Om(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function Uv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===ko||d===Go)if(t.has(u)){const g=t.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const v=new Md(g.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const d=u.mapping,g=d===ko||d===Go,v=d===Ss||d===or;if(g||v){let p=e.get(u);const m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new wc(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{const S=u.image;return g&&S&&S.height>0||v&&S&&l(S)?(n===null&&(n=new wc(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===ko?u.mapping=Ss:d===Go&&(u.mapping=or),u}function l(u){let d=0;const g=6;for(let v=0;v<g;v++)u[v]!==void 0&&d++;return d===g}function c(u){const d=u.target;d.removeEventListener("dispose",c);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Nv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&nr("WebGLRenderer: "+n+" extension not supported."),s}}}function Fv(i,t,e,n){const s={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,g=f.attributes.position;let v=0;if(g===void 0)return;if(d!==null){const S=d.array;v=d.version;for(let E=0,_=S.length;E<_;E+=3){const y=S[E+0],w=S[E+1],A=S[E+2];u.push(y,w,w,A,A,y)}}else{const S=g.array;v=g.version;for(let E=0,_=S.length/3-1;E<_;E+=3){const y=E+0,w=E+1,A=E+2;u.push(y,w,w,A,A,y)}}const p=new(g.count>=65535?td:jf)(u,1);p.version=v;const m=r.get(f);m&&t.remove(m),r.set(f,p)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Ov(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let v=0;for(let p=0;p<d;p++)v+=u[p];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Bv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function zv(i,t,e){const n=new WeakMap,s=new qe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let R=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var d=R;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),p===!0&&(_=3);let y=o.attributes.position.count*_,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const A=new Float32Array(y*w*4*f),x=new Zf(A,y,w,f);x.type=ii,x.needsUpdate=!0;const T=_*4;for(let I=0;I<f;I++){const N=m[I],V=S[I],z=E[I],W=y*w*4*I;for(let O=0;O<N.count;O++){const B=O*T;g===!0&&(s.fromBufferAttribute(N,O),A[W+B+0]=s.x,A[W+B+1]=s.y,A[W+B+2]=s.z,A[W+B+3]=0),v===!0&&(s.fromBufferAttribute(V,O),A[W+B+4]=s.x,A[W+B+5]=s.y,A[W+B+6]=s.z,A[W+B+7]=0),p===!0&&(s.fromBufferAttribute(z,O),A[W+B+8]=s.x,A[W+B+9]=s.y,A[W+B+10]=s.z,A[W+B+11]=z.itemSize===4?s.w:1)}}u={count:f,texture:x,size:new lt(y,w)},n.set(o,u),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function kv(i,t,e,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Gv={[Uf]:"LINEAR_TONE_MAPPING",[Nf]:"REINHARD_TONE_MAPPING",[Ff]:"CINEON_TONE_MAPPING",[Hc]:"ACES_FILMIC_TONE_MAPPING",[Bf]:"AGX_TONE_MAPPING",[zf]:"NEUTRAL_TONE_MAPPING",[Of]:"CUSTOM_TONE_MAPPING"};function Wv(i,t,e,n,s,r){const a=new ri(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new je;c.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new he([0,2,0,0,2,0],2));const h=new Tm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Q(c,h),u=new hh(-1,1,1,-1,0,1);let d=null,g=null,v=!1,p,m=null,S=[],E=!1;this.setSize=function(_,y){a.setSize(_,y),o!==null&&o.setSize(_,y),l!==null&&l.setSize(_,y);for(let w=0;w<S.length;w++){const A=S[w];A.setSize&&A.setSize(_,y)}},this.setEffects=function(_){S=_,E=S.length>0&&S[0].isRenderPass===!0;const y=a.width,w=a.height;S.length>0&&o===null&&(o=new ri(y,w,{type:Si,depthBuffer:!1,stencilBuffer:!1}),l=new ri(y,w,{type:Si,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<S.length;A++){const x=S[A];x.setSize&&x.setSize(y,w)}},this.begin=function(_,y){if(v||_.toneMapping===xi&&S.length===0)return!1;if(m=y,y!==null){const w=y.width,A=y.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return E===!1&&_.setRenderTarget(a),p=_.toneMapping,_.toneMapping=xi,!0},this.hasRenderPass=function(){return E},this.end=function(_,y){_.toneMapping=p,v=!0;let w=a,A=o;for(let x=0;x<S.length;x++){const T=S[x];T.enabled!==!1&&(T.render(_,A,w,y),T.needsSwap!==!1&&(w=A,A=A===o?l:o))}if(d!==_.outputColorSpace||g!==_.toneMapping){d=_.outputColorSpace,g=_.toneMapping,h.defines={},ge.getTransfer(d)===Le&&(h.defines.SRGB_TRANSFER="");const x=Gv[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(m),_.render(f,u),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Sd=new Mn,Ec=new na(1,1),bd=new Zf,yd=new w0,wd=new sd,Au=[],Ru=[],Cu=new Float32Array(16),Pu=new Float32Array(9),Lu=new Float32Array(4);function gr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Au[s];if(r===void 0&&(r=new Float32Array(s),Au[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function on(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ln(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Do(i,t){let e=Ru[t];e===void 0&&(e=new Int32Array(t),Ru[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Hv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2fv(this.addr,t),ln(e,t)}}function Xv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;i.uniform3fv(this.addr,t),ln(e,t)}}function qv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4fv(this.addr,t),ln(e,t)}}function $v(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;Lu.set(n),i.uniformMatrix2fv(this.addr,!1,Lu),ln(e,n)}}function Yv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;Pu.set(n),i.uniformMatrix3fv(this.addr,!1,Pu),ln(e,n)}}function Zv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;Cu.set(n),i.uniformMatrix4fv(this.addr,!1,Cu),ln(e,n)}}function Jv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Kv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2iv(this.addr,t),ln(e,t)}}function Qv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3iv(this.addr,t),ln(e,t)}}function jv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4iv(this.addr,t),ln(e,t)}}function t_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function e_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2uiv(this.addr,t),ln(e,t)}}function n_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3uiv(this.addr,t),ln(e,t)}}function i_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4uiv(this.addr,t),ln(e,t)}}function s_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ec.compareFunction=e.isReversedDepthBuffer()?Qc:Kc,r=Ec):r=Sd,e.setTexture2D(t||r,s)}function r_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||yd,s)}function a_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||wd,s)}function o_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bd,s)}function l_(i){switch(i){case 5126:return Hv;case 35664:return Vv;case 35665:return Xv;case 35666:return qv;case 35674:return $v;case 35675:return Yv;case 35676:return Zv;case 5124:case 35670:return Jv;case 35667:case 35671:return Kv;case 35668:case 35672:return Qv;case 35669:case 35673:return jv;case 5125:return t_;case 36294:return e_;case 36295:return n_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return s_;case 35679:case 36299:case 36307:return r_;case 35680:case 36300:case 36308:case 36293:return a_;case 36289:case 36303:case 36311:case 36292:return o_}}function c_(i,t){i.uniform1fv(this.addr,t)}function h_(i,t){const e=gr(t,this.size,2);i.uniform2fv(this.addr,e)}function u_(i,t){const e=gr(t,this.size,3);i.uniform3fv(this.addr,e)}function f_(i,t){const e=gr(t,this.size,4);i.uniform4fv(this.addr,e)}function d_(i,t){const e=gr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function p_(i,t){const e=gr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function m_(i,t){const e=gr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function g_(i,t){i.uniform1iv(this.addr,t)}function x_(i,t){i.uniform2iv(this.addr,t)}function v_(i,t){i.uniform3iv(this.addr,t)}function __(i,t){i.uniform4iv(this.addr,t)}function M_(i,t){i.uniform1uiv(this.addr,t)}function S_(i,t){i.uniform2uiv(this.addr,t)}function b_(i,t){i.uniform3uiv(this.addr,t)}function y_(i,t){i.uniform4uiv(this.addr,t)}function w_(i,t,e){const n=this.cache,s=t.length,r=Do(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ec:a=Sd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function E_(i,t,e){const n=this.cache,s=t.length,r=Do(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||yd,r[a])}function T_(i,t,e){const n=this.cache,s=t.length,r=Do(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||wd,r[a])}function A_(i,t,e){const n=this.cache,s=t.length,r=Do(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||bd,r[a])}function R_(i){switch(i){case 5126:return c_;case 35664:return h_;case 35665:return u_;case 35666:return f_;case 35674:return d_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return x_;case 35668:case 35672:return v_;case 35669:case 35673:return __;case 5125:return M_;case 36294:return S_;case 36295:return b_;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return A_}}class C_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=l_(e.type)}}class P_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=R_(e.type)}}class L_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ml=/(\w+)(\])?(\[|\.)?/g;function Iu(i,t){i.seq.push(t),i.map[t.id]=t}function I_(i,t,e){const n=i.name,s=n.length;for(Ml.lastIndex=0;;){const r=Ml.exec(n),a=Ml.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Iu(e,c===void 0?new C_(o,i,t):new P_(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new L_(o),Iu(e,f)),e=f}}}class ja{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);I_(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Du(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const D_=37297;let U_=0;function N_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Uu=new Qt;function F_(i){ge._getMatrix(Uu,ge.workingColorSpace,i);const t=`mat3( ${Uu.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(i)){case fo:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+N_(i.getShaderSource(t),o)}else return r}function O_(i,t){const e=F_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const B_={[Uf]:"Linear",[Nf]:"Reinhard",[Ff]:"Cineon",[Hc]:"ACESFilmic",[Bf]:"AgX",[zf]:"Neutral",[Of]:"Custom"};function z_(i,t){const e=B_[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Wa=new P;function k_(){ge.getLuminanceCoefficients(Wa);const i=Wa.x.toFixed(4),t=Wa.y.toFixed(4),e=Wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function W_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function H_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Wr(i){return i!==""}function Fu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ou(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const V_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(i){return i.replace(V_,q_)}const X_=new Map;function q_(i,t){let e=ae[t];if(e===void 0){const n=X_.get(t);if(n!==void 0)e=ae[n],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Tc(e)}const $_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(i){return i.replace($_,Y_)}function Y_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Z_={[Ya]:"SHADOWMAP_TYPE_PCF",[kr]:"SHADOWMAP_TYPE_VSM"};function J_(i){return Z_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const K_={[Ss]:"ENVMAP_TYPE_CUBE",[or]:"ENVMAP_TYPE_CUBE",[Ro]:"ENVMAP_TYPE_CUBE_UV"};function Q_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":K_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const j_={[or]:"ENVMAP_MODE_REFRACTION"};function t1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":j_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const e1={[Wc]:"ENVMAP_BLENDING_MULTIPLY",[Gp]:"ENVMAP_BLENDING_MIX",[Wp]:"ENVMAP_BLENDING_ADD"};function n1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":e1[i.combine]||"ENVMAP_BLENDING_NONE"}function i1(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function s1(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=J_(e),c=Q_(e),h=t1(e),f=n1(e),u=i1(e),d=G_(e),g=W_(r),v=s.createProgram();let p,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wr).join(`
`),m.length>0&&(m+=`
`)):(p=[zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),m=[zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xi?"#define TONE_MAPPING":"",e.toneMapping!==xi?ae.tonemapping_pars_fragment:"",e.toneMapping!==xi?z_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,O_("linearToOutputTexel",e.outputColorSpace),k_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wr).join(`
`)),a=Tc(a),a=Fu(a,e),a=Ou(a,e),o=Tc(o),o=Fu(o,e),o=Ou(o,e),a=Bu(a),o=Bu(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=S+p+a,_=S+m+o,y=Du(s,s.VERTEX_SHADER,E),w=Du(s,s.FRAGMENT_SHADER,_);s.attachShader(v,y),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(I){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(v)||"",V=s.getShaderInfoLog(y)||"",z=s.getShaderInfoLog(w)||"",W=N.trim(),O=V.trim(),B=z.trim();let L=!0,U=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(L=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,y,w);else{const G=Nu(s,y,"vertex"),Y=Nu(s,w,"fragment");ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+G+`
`+Y)}else W!==""?Zt("WebGLProgram: Program Info Log:",W):(O===""||B==="")&&(U=!1);U&&(I.diagnostics={runnable:L,programLog:W,vertexShader:{log:O,prefix:p},fragmentShader:{log:B,prefix:m}})}s.deleteShader(y),s.deleteShader(w),x=new ja(s,v),T=H_(s,v)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,D_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=U_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=w,this}let r1=0;class a1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new o1(t),e.set(t,n)),n}}class o1{constructor(t){this.id=r1++,this.code=t,this.usedTimes=0}}function l1(i){return i===bs||i===lo||i===co}function c1(i,t,e,n,s,r){const a=new Jf,o=new a1,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,T,R,I,N,V){const z=I.fog,W=N.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,L=t.get(x.envMap||O,B),U=L&&L.mapping===Ro?L.image.height:null,G=d[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Zt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const Y=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,dt=Y!==void 0?Y.length:0;let pt=0;W.morphAttributes.position!==void 0&&(pt=1),W.morphAttributes.normal!==void 0&&(pt=2),W.morphAttributes.color!==void 0&&(pt=3);let Xt,Wt,qt,Z;if(G){const Be=di[G];Xt=Be.vertexShader,Wt=Be.fragmentShader}else{Xt=x.vertexShader,Wt=x.fragmentShader;const Be=o.getVertexShaderStage(x),Ee=o.getFragmentShaderStage(x);o.update(x,Be,Ee),qt=Be.id,Z=Ee.id}const nt=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),kt=N.isInstancedMesh===!0,At=N.isBatchedMesh===!0,$t=!!x.map,Pe=!!x.matcap,rt=!!L,ot=!!x.aoMap,ht=!!x.lightMap,ut=!!x.bumpMap&&x.wireframe===!1,xt=!!x.normalMap,Ht=!!x.displacementMap,Gt=!!x.emissiveMap,Yt=!!x.metalnessMap,Kt=!!x.roughnessMap,D=x.anisotropy>0,we=x.clearcoat>0,de=x.dispersion>0,C=x.retroreflectivity>0,M=x.iridescence>0,H=x.sheen>0,$=x.transmission>0,j=D&&!!x.anisotropyMap,ft=we&&!!x.clearcoatMap,mt=we&&!!x.clearcoatNormalMap,et=we&&!!x.clearcoatRoughnessMap,st=M&&!!x.iridescenceMap,vt=M&&!!x.iridescenceThicknessMap,Ft=H&&!!x.sheenColorMap,bt=H&&!!x.sheenRoughnessMap,_t=!!x.specularMap,Ot=!!x.specularColorMap,Vt=!!x.specularIntensityMap,ne=$&&!!x.transmissionMap,k=$&&!!x.thicknessMap,Mt=!!x.gradientMap,it=!!x.alphaMap,St=x.alphaTest>0,Tt=!!x.alphaHash,at=!!x.extensions;let Bt=xi;x.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Bt=i.toneMapping);const Ut={shaderID:G,shaderType:x.type,shaderName:x.name,vertexShader:Xt,fragmentShader:Wt,defines:x.defines,customVertexShaderID:qt,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:At,batchingColor:At&&N._colorsTexture!==null,instancing:kt,instancingColor:kt&&N.instanceColor!==null,instancingMorph:kt&&N.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ge.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:$t,matcap:Pe,envMap:rt,envMapMode:rt&&L.mapping,envMapCubeUVHeight:U,aoMap:ot,lightMap:ht,bumpMap:ut,normalMap:xt,displacementMap:Ht,emissiveMap:Gt,normalMapObjectSpace:xt&&x.normalMapType===Xp,normalMapTangentSpace:xt&&x.normalMapType===ho,packedNormalMap:xt&&x.normalMapType===ho&&l1(x.normalMap.format),metalnessMap:Yt,roughnessMap:Kt,anisotropy:D,anisotropyMap:j,clearcoat:we,clearcoatMap:ft,clearcoatNormalMap:mt,clearcoatRoughnessMap:et,dispersion:de,retroreflection:C,iridescence:M,iridescenceMap:st,iridescenceThicknessMap:vt,sheen:H,sheenColorMap:Ft,sheenRoughnessMap:bt,specularMap:_t,specularColorMap:Ot,specularIntensityMap:Vt,transmission:$,transmissionMap:ne,thicknessMap:k,gradientMap:Mt,opaque:x.transparent===!1&&x.blending===Vr&&x.alphaToCoverage===!1,alphaMap:it,alphaTest:St,alphaHash:Tt,combine:x.combine,mapUv:$t&&g(x.map.channel),aoMapUv:ot&&g(x.aoMap.channel),lightMapUv:ht&&g(x.lightMap.channel),bumpMapUv:ut&&g(x.bumpMap.channel),normalMapUv:xt&&g(x.normalMap.channel),displacementMapUv:Ht&&g(x.displacementMap.channel),emissiveMapUv:Gt&&g(x.emissiveMap.channel),metalnessMapUv:Yt&&g(x.metalnessMap.channel),roughnessMapUv:Kt&&g(x.roughnessMap.channel),anisotropyMapUv:j&&g(x.anisotropyMap.channel),clearcoatMapUv:ft&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:mt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(x.sheenRoughnessMap.channel),specularMapUv:_t&&g(x.specularMap.channel),specularColorMapUv:Ot&&g(x.specularColorMap.channel),specularIntensityMapUv:Vt&&g(x.specularIntensityMap.channel),transmissionMapUv:ne&&g(x.transmissionMap.channel),thicknessMapUv:k&&g(x.thicknessMap.channel),alphaMapUv:it&&g(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(xt||D),vertexNormals:!!W.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&($t||it),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&xt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:gt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:pt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:$t&&x.map.isVideoTexture===!0&&ge.getTransfer(x.map.colorSpace)===Le,decodeVideoTextureEmissive:Gt&&x.emissiveMap.isVideoTexture===!0&&ge.getTransfer(x.emissiveMap.colorSpace)===Le,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ze,flipSided:x.side===_n,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:at&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&x.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ut.vertexUv1s=l.has(1),Ut.vertexUv2s=l.has(2),Ut.vertexUv3s=l.has(3),l.clear(),Ut}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(T,x),S(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function m(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function S(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function E(x){const T=d[x.type];let R;if(T){const I=di[T];R=ym.clone(I.uniforms)}else R=x.uniforms;return R}function _(x,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new s1(i,T,x,s),c.push(R),h.set(T,R)),R}function y(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:E,acquireProgram:_,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:A}}function h1(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function u1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ku(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,v,p,m){let S=i[t];return S===void 0?(S={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:m},i[t]=S):(S.id=u.id,S.object=u,S.geometry=d,S.material=g,S.materialVariant=a(u),S.groupOrder=v,S.renderOrder=u.renderOrder,S.z=p,S.group=m),t++,S}function l(u,d,g,v,p,m,S){S.reversedDepth===!0&&(p=-p);const E=o(u,d,g,v,p,m);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(u,d,g,v,p,m){const S=o(u,d,g,v,p,m);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function h(u,d){e.length>1&&e.sort(u||u1),n.length>1&&n.sort(d||ku),s.length>1&&s.sort(d||ku)}function f(){for(let u=t,d=i.length;u<d;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function f1(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Gu,i.set(n,[a])):s>=r.length?(a=new Gu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function d1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new zt};break;case"SpotLight":e={position:new P,direction:new P,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function p1(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let m1=0;function g1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function x1(i){const t=new d1,e=p1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new le,a=new le;function o(c){let h=0,f=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let d=0,g=0,v=0,p=0,m=0,S=0,E=0,_=0,y=0,w=0,A=0,x=0,T=0,R=0;c.sort(g1);for(let N=0,V=c.length;N<V;N++){const z=c[N],W=z.color,O=z.intensity,B=z.distance;let L=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===bs?L=z.shadow.map.texture:L=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)h+=W.r*O,f+=W.g*O,u+=W.b*O;else if(z.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(z.sh.coefficients[U],O);R++}else if(z.isSunLight){const U=t.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const G=z.shadow,Y=e.get(z);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[g]=Y,n.sunShadowMap[g]=L;const dt=G.getViewportCount();for(let pt=0;pt<dt;pt++)n.sunShadowMatrix[v+pt]=G.getMatrix(pt),n.sunShadowCascade[v+pt]=G._cascadeData[pt];v+=dt,g++}n.sun[d]=U,d++}else if(z.isDirectionalLight){const U=t.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const G=z.shadow,Y=e.get(z);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=L,n.directionalShadowMatrix[p]=z.shadow.matrix,y++}n.directional[p]=U,p++}else if(z.isSpotLight){const U=t.get(z);U.position.setFromMatrixPosition(z.matrixWorld),U.color.copy(W).multiplyScalar(O),U.distance=B,U.coneCos=Math.cos(z.angle),U.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),U.decay=z.decay,n.spot[S]=U;const G=z.shadow;if(z.map&&(n.spotLightMap[x]=z.map,x++,G.updateMatrices(z),z.castShadow&&T++),n.spotLightMatrix[S]=G.matrix,z.castShadow){const Y=e.get(z);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,n.spotShadow[S]=Y,n.spotShadowMap[S]=L,A++}S++}else if(z.isRectAreaLight){const U=t.get(z);U.color.copy(W).multiplyScalar(O),U.halfWidth.set(z.width*.5,0,0),U.halfHeight.set(0,z.height*.5,0),n.rectArea[E]=U,E++}else if(z.isPointLight){const U=t.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity),U.distance=z.distance,U.decay=z.decay,z.castShadow){const G=z.shadow,Y=e.get(z);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,Y.shadowCameraNear=G.camera.near,Y.shadowCameraFar=G.camera.far,n.pointShadow[m]=Y,n.pointShadowMap[m]=L,n.pointShadowMatrix[m]=z.shadow.matrix,w++}n.point[m]=U,m++}else if(z.isHemisphereLight){const U=t.get(z);U.skyColor.copy(z.color).multiplyScalar(O),U.groundColor.copy(z.groundColor).multiplyScalar(O),n.hemi[_]=U,_++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const I=n.hash;(I.sunLength!==d||I.directionalLength!==p||I.pointLength!==m||I.spotLength!==S||I.rectAreaLength!==E||I.hemiLength!==_||I.numSunShadows!==g||I.numDirectionalShadows!==y||I.numPointShadows!==w||I.numSpotShadows!==A||I.numSpotMaps!==x||I.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=p,n.spot.length=S,n.rectArea.length=E,n.point.length=m,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,I.sunLength=d,I.directionalLength=p,I.pointLength=m,I.spotLength=S,I.rectAreaLength=E,I.hemiLength=_,I.numSunShadows=g,I.numDirectionalShadows=y,I.numPointShadows=w,I.numSpotShadows=A,I.numSpotMaps=x,I.numLightProbes=R,n.version=m1++)}function l(c,h){let f=0,u=0,d=0,g=0,v=0,p=0;const m=h.matrixWorldInverse;for(let S=0,E=c.length;S<E;S++){const _=c[S];if(_.isSunLight){const y=n.sun[f];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),f++}else if(_.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(_.isSpotLight){const y=n.spot[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),g++}else if(_.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const y=n.hemi[p];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Wu(i){const t=new x1(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function v1(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Wu(i),t.set(s,[o])):r>=a.length?(o=new Wu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const _1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M1=`uniform sampler2D shadow_pass;
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
}`,S1=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],b1=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Hu=new le,Pr=new P,Sl=new P;function y1(i,t,e){let n=new nh;const s=new lt,r=new lt,a=new qe,o=new Rm,l=new Cm,c={},h=e.maxTextureSize,f={[Ms]:_n,[_n]:Ms,[Ze]:Ze},u=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:_1,fragmentShader:M1}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new je;g.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Q(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let m=this.type;this.render=function(w,A,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===bp&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ya);const T=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Li),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const V=m!==this.type;V&&A.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(W=>W.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,W=w.length;z<W;z++){const O=w[z],B=O.shadow;if(B===void 0){Zt("WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const L=B.getFrameExtents();s.multiply(L),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/L.x),s.x=r.x*L.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/L.y),s.y=r.y*L.y,B.mapSize.y=r.y));const U=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=U,B.map===null||V===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===kr){if(O.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ri(s.x,s.y,{format:bs,type:Si,minFilter:vn,magFilter:vn,generateMipmaps:!1}),B.map.texture.name=O.name+".shadowMap",B.map.depthTexture=new na(s.x,s.y,ii),B.map.depthTexture.name=O.name+".shadowMapDepth",B.map.depthTexture.format=Ui,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=fn,B.map.depthTexture.magFilter=fn}else O.isPointLight?(B.map=new Md(s.x),B.map.depthTexture=new V0(s.x,Mi)):(B.map=new ri(s.x,s.y),B.map.depthTexture=new na(s.x,s.y,Mi)),B.map.depthTexture.name=O.name+".shadowMap",B.map.depthTexture.format=Ui,this.type===Ya?(B.map.depthTexture.compareFunction=U?Qc:Kc,B.map.depthTexture.minFilter=vn,B.map.depthTexture.magFilter=vn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=fn,B.map.depthTexture.magFilter=fn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);const G=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();O.isPointLight!==!0&&B.updateMatrices(O,x);for(let Y=0;Y<G;Y++){const dt=B.getCamera(Y);if(O.isPointLight){const pt=B.camera,Xt=B.matrix,Wt=O.distance||pt.far;Wt!==pt.far&&(pt.far=Wt,pt.updateProjectionMatrix()),Pr.setFromMatrixPosition(O.matrixWorld),pt.position.copy(Pr),Sl.copy(pt.position),Sl.add(S1[Y]),pt.up.copy(b1[Y]),pt.lookAt(Sl),pt.updateMatrixWorld(),Xt.makeTranslation(-Pr.x,-Pr.y,-Pr.z),Hu.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Hu,pt.coordinateSystem,pt.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,Y),i.clear();else{Y===0&&(i.setRenderTarget(B.map),i.clear());const pt=B.getViewport(Y);a.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),N.viewport(a)}n=B.getFrustum(Y),_(A,x,dt,O,this.type)}B.isPointLightShadow!==!0&&this.type===kr&&S(B,x),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(T,R,I)};function S(w,A){const x=t.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new ri(s.x,s.y,{format:bs,type:Si}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,x,u,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,x,d,v,null)}function E(w,A,x,T){let R=null;const I=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)R=I;else if(R=x.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=R.uuid,V=A.uuid;let z=c[N];z===void 0&&(z={},c[N]=z);let W=z[V];W===void 0&&(W=R.clone(),z[V]=W,A.addEventListener("dispose",y)),R=W}if(R.visible=A.visible,R.wireframe=A.wireframe,T===kr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const N=i.properties.get(R);N.light=x}return R}function _(w,A,x,T,R){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===kr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const V=t.update(w),z=w.material;if(Array.isArray(z)){const W=V.groups;for(let O=0,B=W.length;O<B;O++){const L=W[O],U=z[L.materialIndex];if(U&&U.visible){const G=E(w,U,T,R);w.onBeforeShadow(i,w,A,x,V,G,L),i.renderBufferDirect(x,null,V,G,w,L),w.onAfterShadow(i,w,A,x,V,G,L)}}}else if(z.visible){const W=E(w,z,T,R);w.onBeforeShadow(i,w,A,x,V,W,null),i.renderBufferDirect(x,null,V,W,w,null),w.onAfterShadow(i,w,A,x,V,W,null)}}const N=w.children;for(let V=0,z=N.length;V<z;V++)_(N[V],A,x,T,R)}function y(w){w.target.removeEventListener("dispose",y);for(const x in c){const T=c[x],R=w.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function w1(i,t){function e(){let k=!1;const Mt=new qe;let it=null;const St=new qe(0,0,0,0);return{setMask:function(Tt){it!==Tt&&!k&&(i.colorMask(Tt,Tt,Tt,Tt),it=Tt)},setLocked:function(Tt){k=Tt},setClear:function(Tt,at,Bt,Ut,Be){Be===!0&&(Tt*=Ut,at*=Ut,Bt*=Ut),Mt.set(Tt,at,Bt,Ut),St.equals(Mt)===!1&&(i.clearColor(Tt,at,Bt,Ut),St.copy(Mt))},reset:function(){k=!1,it=null,St.set(-1,0,0,0)}}}function n(){let k=!1,Mt=!1,it=null,St=null,Tt=null;return{setReversed:function(at){if(Mt!==at){const Bt=t.get("EXT_clip_control");at?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Mt=at;const Ut=Tt;Tt=null,this.setClear(Ut)}},getReversed:function(){return Mt},setTest:function(at){at?nt(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(at){it!==at&&!k&&(i.depthMask(at),it=at)},setFunc:function(at){if(Mt&&(at=n0[at]),St!==at){switch(at){case Bl:i.depthFunc(i.NEVER);break;case zl:i.depthFunc(i.ALWAYS);break;case kl:i.depthFunc(i.LESS);break;case Qr:i.depthFunc(i.LEQUAL);break;case Gl:i.depthFunc(i.EQUAL);break;case Wl:i.depthFunc(i.GEQUAL);break;case Hl:i.depthFunc(i.GREATER);break;case Vl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=at}},setLocked:function(at){k=at},setClear:function(at){Tt!==at&&(Tt=at,Mt&&(at=1-at),i.clearDepth(at))},reset:function(){k=!1,it=null,St=null,Tt=null,Mt=!1}}}function s(){let k=!1,Mt=null,it=null,St=null,Tt=null,at=null,Bt=null,Ut=null,Be=null;return{setTest:function(Ee){k||(Ee?nt(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(Ee){Mt!==Ee&&!k&&(i.stencilMask(Ee),Mt=Ee)},setFunc:function(Ee,Kn,li){(it!==Ee||St!==Kn||Tt!==li)&&(i.stencilFunc(Ee,Kn,li),it=Ee,St=Kn,Tt=li)},setOp:function(Ee,Kn,li){(at!==Ee||Bt!==Kn||Ut!==li)&&(i.stencilOp(Ee,Kn,li),at=Ee,Bt=Kn,Ut=li)},setLocked:function(Ee){k=Ee},setClear:function(Ee){Be!==Ee&&(i.clearStencil(Ee),Be=Ee)},reset:function(){k=!1,Mt=null,it=null,St=null,Tt=null,at=null,Bt=null,Ut=null,Be=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u={},d=new WeakMap,g=[],v=null,p=!1,m=null,S=null,E=null,_=null,y=null,w=null,A=null,x=new zt(0,0,0),T=0,R=!1,I=null,N=null,V=null,z=null,W=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,L=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(U)[1]),B=L>=1):U.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),B=L>=2);let G=null,Y={};const dt=i.getParameter(i.SCISSOR_BOX),pt=i.getParameter(i.VIEWPORT),Xt=new qe().fromArray(dt),Wt=new qe().fromArray(pt);function qt(k,Mt,it,St){const Tt=new Uint8Array(4),at=i.createTexture();i.bindTexture(k,at),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<it;Bt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(Mt+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return at}const Z={};Z[i.TEXTURE_2D]=qt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=qt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=qt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=qt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),a.setFunc(Qr),ut(!1),xt(zh),nt(i.CULL_FACE),ot(Li);function nt(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function gt(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function kt(k,Mt){return u[k]!==Mt?(i.bindFramebuffer(k,Mt),u[k]=Mt,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Mt),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function At(k,Mt){let it=g,St=!1;if(k){it=d.get(Mt),it===void 0&&(it=[],d.set(Mt,it));const Tt=k.textures;if(it.length!==Tt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Bt=Tt.length;at<Bt;at++)it[at]=i.COLOR_ATTACHMENT0+at;it.length=Tt.length,St=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,St=!0);St&&i.drawBuffers(it)}function $t(k){return v!==k?(i.useProgram(k),v=k,!0):!1}const Pe={[Qs]:i.FUNC_ADD,[wp]:i.FUNC_SUBTRACT,[Ep]:i.FUNC_REVERSE_SUBTRACT};Pe[Tp]=i.MIN,Pe[Ap]=i.MAX;const rt={[Rp]:i.ZERO,[Cp]:i.ONE,[Pp]:i.SRC_COLOR,[If]:i.SRC_ALPHA,[Fp]:i.SRC_ALPHA_SATURATE,[Up]:i.DST_COLOR,[Ip]:i.DST_ALPHA,[Lp]:i.ONE_MINUS_SRC_COLOR,[Df]:i.ONE_MINUS_SRC_ALPHA,[Np]:i.ONE_MINUS_DST_COLOR,[Dp]:i.ONE_MINUS_DST_ALPHA,[Op]:i.CONSTANT_COLOR,[Bp]:i.ONE_MINUS_CONSTANT_COLOR,[zp]:i.CONSTANT_ALPHA,[kp]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(k,Mt,it,St,Tt,at,Bt,Ut,Be,Ee){if(k===Li){p===!0&&(gt(i.BLEND),p=!1);return}if(p===!1&&(nt(i.BLEND),p=!0),k!==yp){if(k!==m||Ee!==R){if((S!==Qs||y!==Qs)&&(i.blendEquation(i.FUNC_ADD),S=Qs,y=Qs),Ee)switch(k){case Vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ol:i.blendFunc(i.ONE,i.ONE);break;case kh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ve("WebGLState: Invalid blending: ",k);break}else switch(k){case Vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ol:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case kh:ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gh:ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ve("WebGLState: Invalid blending: ",k);break}E=null,_=null,w=null,A=null,x.set(0,0,0),T=0,m=k,R=Ee}return}Tt=Tt||Mt,at=at||it,Bt=Bt||St,(Mt!==S||Tt!==y)&&(i.blendEquationSeparate(Pe[Mt],Pe[Tt]),S=Mt,y=Tt),(it!==E||St!==_||at!==w||Bt!==A)&&(i.blendFuncSeparate(rt[it],rt[St],rt[at],rt[Bt]),E=it,_=St,w=at,A=Bt),(Ut.equals(x)===!1||Be!==T)&&(i.blendColor(Ut.r,Ut.g,Ut.b,Be),x.copy(Ut),T=Be),m=k,R=!1}function ht(k,Mt){k.side===Ze?gt(i.CULL_FACE):nt(i.CULL_FACE);let it=k.side===_n;Mt&&(it=!it),ut(it),k.blending===Vr&&k.transparent===!1?ot(Li):ot(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const St=k.stencilWrite;o.setTest(St),St&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Gt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(k){I!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),I=k)}function xt(k){k!==Mp?(nt(i.CULL_FACE),k!==N&&(k===zh?i.cullFace(i.BACK):k===Sp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),N=k}function Ht(k){k!==V&&(B&&i.lineWidth(k),V=k)}function Gt(k,Mt,it){k?(nt(i.POLYGON_OFFSET_FILL),(z!==Mt||W!==it)&&(z=Mt,W=it,a.getReversed()&&(Mt=-Mt),i.polygonOffset(Mt,it))):gt(i.POLYGON_OFFSET_FILL)}function Yt(k){k?nt(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function Kt(k){k===void 0&&(k=i.TEXTURE0+O-1),G!==k&&(i.activeTexture(k),G=k)}function D(k,Mt,it){it===void 0&&(G===null?it=i.TEXTURE0+O-1:it=G);let St=Y[it];St===void 0&&(St={type:void 0,texture:void 0},Y[it]=St),(St.type!==k||St.texture!==Mt)&&(G!==it&&(i.activeTexture(it),G=it),i.bindTexture(k,Mt||Z[k]),St.type=k,St.texture=Mt)}function we(){const k=Y[G];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function de(){try{i.compressedTexImage2D(...arguments)}catch(k){ve("WebGLState:",k)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(k){ve("WebGLState:",k)}}function M(){try{i.texSubImage2D(...arguments)}catch(k){ve("WebGLState:",k)}}function H(){try{i.texSubImage3D(...arguments)}catch(k){ve("WebGLState:",k)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(k){ve("WebGLState:",k)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(k){ve("WebGLState:",k)}}function ft(){try{i.texStorage2D(...arguments)}catch(k){ve("WebGLState:",k)}}function mt(){try{i.texStorage3D(...arguments)}catch(k){ve("WebGLState:",k)}}function et(){try{i.texImage2D(...arguments)}catch(k){ve("WebGLState:",k)}}function st(){try{i.texImage3D(...arguments)}catch(k){ve("WebGLState:",k)}}function vt(k){return f[k]!==void 0?f[k]:i.getParameter(k)}function Ft(k,Mt){f[k]!==Mt&&(i.pixelStorei(k,Mt),f[k]=Mt)}function bt(k){Xt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Xt.copy(k))}function _t(k){Wt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Wt.copy(k))}function Ot(k,Mt){let it=c.get(Mt);it===void 0&&(it=new WeakMap,c.set(Mt,it));let St=it.get(k);St===void 0&&(St=i.getUniformBlockIndex(Mt,k.name),it.set(k,St))}function Vt(k,Mt){const St=c.get(Mt).get(k);l.get(Mt)!==St&&(i.uniformBlockBinding(Mt,St,k.__bindingPointIndex),l.set(Mt,St))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},G=null,Y={},u={},d=new WeakMap,g=[],v=null,p=!1,m=null,S=null,E=null,_=null,y=null,w=null,A=null,x=new zt(0,0,0),T=0,R=!1,I=null,N=null,V=null,z=null,W=null,Xt.set(0,0,i.canvas.width,i.canvas.height),Wt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:gt,bindFramebuffer:kt,drawBuffers:At,useProgram:$t,setBlending:ot,setMaterial:ht,setFlipSided:ut,setCullFace:xt,setLineWidth:Ht,setPolygonOffset:Gt,setScissorTest:Yt,activeTexture:Kt,bindTexture:D,unbindTexture:we,compressedTexImage2D:de,compressedTexImage3D:C,texImage2D:et,texImage3D:st,pixelStorei:Ft,getParameter:vt,updateUBOMapping:Ot,uniformBlockBinding:Vt,texStorage2D:ft,texStorage3D:mt,texSubImage2D:M,texSubImage3D:H,compressedTexSubImage2D:$,compressedTexSubImage3D:j,scissor:bt,viewport:_t,reset:ne}}function E1(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,M){return g?new OffscreenCanvas(C,M):po("canvas")}function p(C,M,H){let $=1;const j=de(C);if((j.width>H||j.height>H)&&($=H/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ft=Math.floor($*j.width),mt=Math.floor($*j.height);u===void 0&&(u=v(ft,mt));const et=M?v(ft,mt):u;return et.width=ft,et.height=mt,et.getContext("2d").drawImage(C,0,0,ft,mt),Zt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ft+"x"+mt+")."),et}else return"data"in C&&Zt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function m(C){return C.generateMipmaps}function S(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,M,H,$,j,ft=!1){if(C!==null){if(i[C]!==void 0)return i[C];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let mt;$&&(mt=t.get("EXT_texture_norm16"),mt||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=M;if(M===i.RED&&(H===i.FLOAT&&(et=i.R32F),H===i.HALF_FLOAT&&(et=i.R16F),H===i.UNSIGNED_BYTE&&(et=i.R8),H===i.UNSIGNED_SHORT&&mt&&(et=mt.R16_EXT),H===i.SHORT&&mt&&(et=mt.R16_SNORM_EXT)),M===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.R8UI),H===i.UNSIGNED_SHORT&&(et=i.R16UI),H===i.UNSIGNED_INT&&(et=i.R32UI),H===i.BYTE&&(et=i.R8I),H===i.SHORT&&(et=i.R16I),H===i.INT&&(et=i.R32I)),M===i.RG&&(H===i.FLOAT&&(et=i.RG32F),H===i.HALF_FLOAT&&(et=i.RG16F),H===i.UNSIGNED_BYTE&&(et=i.RG8),H===i.UNSIGNED_SHORT&&mt&&(et=mt.RG16_EXT),H===i.SHORT&&mt&&(et=mt.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RG8UI),H===i.UNSIGNED_SHORT&&(et=i.RG16UI),H===i.UNSIGNED_INT&&(et=i.RG32UI),H===i.BYTE&&(et=i.RG8I),H===i.SHORT&&(et=i.RG16I),H===i.INT&&(et=i.RG32I)),M===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RGB8UI),H===i.UNSIGNED_SHORT&&(et=i.RGB16UI),H===i.UNSIGNED_INT&&(et=i.RGB32UI),H===i.BYTE&&(et=i.RGB8I),H===i.SHORT&&(et=i.RGB16I),H===i.INT&&(et=i.RGB32I)),M===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),H===i.UNSIGNED_INT&&(et=i.RGBA32UI),H===i.BYTE&&(et=i.RGBA8I),H===i.SHORT&&(et=i.RGBA16I),H===i.INT&&(et=i.RGBA32I)),M===i.RGB&&(H===i.UNSIGNED_SHORT&&mt&&(et=mt.RGB16_EXT),H===i.SHORT&&mt&&(et=mt.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),M===i.RGBA){const st=ft?fo:ge.getTransfer(j);H===i.FLOAT&&(et=i.RGBA32F),H===i.HALF_FLOAT&&(et=i.RGBA16F),H===i.UNSIGNED_BYTE&&(et=st===Le?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&mt&&(et=mt.RGBA16_EXT),H===i.SHORT&&mt&&(et=mt.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function y(C,M){let H;return C?M===null||M===Mi||M===ta?H=i.DEPTH24_STENCIL8:M===ii?H=i.DEPTH32F_STENCIL8:M===jr&&(H=i.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Mi||M===ta?H=i.DEPTH_COMPONENT24:M===ii?H=i.DEPTH_COMPONENT32F:M===jr&&(H=i.DEPTH_COMPONENT16),H}function w(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==fn&&C.minFilter!==vn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){const M=C.target;M.removeEventListener("dispose",A),T(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&f.delete(M)}function x(C){const M=C.target;M.removeEventListener("dispose",x),I(M)}function T(C){const M=n.get(C);if(M.__webglInit===void 0)return;const H=C.source,$=d.get(H);if($){const j=$[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(C),Object.keys($).length===0&&d.delete(H)}n.remove(C)}function R(C){const M=n.get(C);i.deleteTexture(M.__webglTexture);const H=C.source,$=d.get(H);delete $[M.__cacheKey],a.memory.textures--}function I(C){const M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let j=0;j<M.__webglFramebuffer[$].length;j++)i.deleteFramebuffer(M.__webglFramebuffer[$][j]);else i.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)i.deleteFramebuffer(M.__webglFramebuffer[$]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=C.textures;for(let $=0,j=H.length;$<j;$++){const ft=n.get(H[$]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),a.memory.textures--),n.remove(H[$])}n.remove(C)}let N=0;function V(){N=0}function z(){return N}function W(C){N=C}function O(){const C=N;return C>=s.maxTextures&&Zt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function B(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function L(C,M){const H=n.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){const $=C.image;if($===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(H,C,M);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function U(C,M){const H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){gt(H,C,M);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function G(C,M){const H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){gt(H,C,M);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function Y(C,M){const H=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){kt(H,C,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}const dt={[oo]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[Xl]:i.MIRRORED_REPEAT},pt={[fn]:i.NEAREST,[Hp]:i.NEAREST_MIPMAP_NEAREST,[ma]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[Wo]:i.LINEAR_MIPMAP_NEAREST,[gs]:i.LINEAR_MIPMAP_LINEAR},Xt={[$p]:i.NEVER,[Qp]:i.ALWAYS,[Yp]:i.LESS,[Kc]:i.LEQUAL,[Zp]:i.EQUAL,[Qc]:i.GEQUAL,[Jp]:i.GREATER,[Kp]:i.NOTEQUAL};function Wt(C,M){if(M.type===ii&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===vn||M.magFilter===Wo||M.magFilter===ma||M.magFilter===gs||M.minFilter===vn||M.minFilter===Wo||M.minFilter===ma||M.minFilter===gs)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,dt[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,dt[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,dt[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,pt[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,pt[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Xt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===fn||M.minFilter!==ma&&M.minFilter!==gs||M.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function qt(C,M){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));const $=M.source;let j=d.get($);j===void 0&&(j={},d.set($,j));const ft=B(M);if(ft!==C.__cacheKey){j[ft]===void 0&&(j[ft]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),j[ft].usedTimes++;const mt=j[C.__cacheKey];mt!==void 0&&(j[C.__cacheKey].usedTimes--,mt.usedTimes===0&&R(M)),C.__cacheKey=ft,C.__webglTexture=j[ft].texture}return H}function Z(C,M,H){return Math.floor(Math.floor(C/H)/M)}function nt(C,M,H,$){const ft=C.updateRanges;if(ft.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,H,$,M.data);else{ft.sort((Ft,bt)=>Ft.start-bt.start);let mt=0;for(let Ft=1;Ft<ft.length;Ft++){const bt=ft[mt],_t=ft[Ft],Ot=bt.start+bt.count,Vt=Z(_t.start,M.width,4),ne=Z(bt.start,M.width,4);_t.start<=Ot+1&&Vt===ne&&Z(_t.start+_t.count-1,M.width,4)===Vt?bt.count=Math.max(bt.count,_t.start+_t.count-bt.start):(++mt,ft[mt]=_t)}ft.length=mt+1;const et=e.getParameter(i.UNPACK_ROW_LENGTH),st=e.getParameter(i.UNPACK_SKIP_PIXELS),vt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Ft=0,bt=ft.length;Ft<bt;Ft++){const _t=ft[Ft],Ot=Math.floor(_t.start/4),Vt=Math.ceil(_t.count/4),ne=Ot%M.width,k=Math.floor(Ot/M.width),Mt=Vt,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),e.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,ne,k,Mt,it,H,$,M.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,et),e.pixelStorei(i.UNPACK_SKIP_PIXELS,st),e.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function gt(C,M,H){let $=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=i.TEXTURE_3D);const j=qt(C,M),ft=M.source;e.bindTexture($,C.__webglTexture,i.TEXTURE0+H);const mt=n.get(ft);if(ft.version!==mt.__version||j===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const it=ge.getPrimaries(ge.workingColorSpace),St=M.colorSpace===$i?null:ge.getPrimaries(M.colorSpace),Tt=M.colorSpace===$i||it===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let st=p(M.image,!1,s.maxTextureSize);st=we(M,st);const vt=r.convert(M.format,M.colorSpace),Ft=r.convert(M.type);let bt=_(M.internalFormat,vt,Ft,M.normalized,M.colorSpace,M.isVideoTexture);Wt($,M);let _t;const Ot=M.mipmaps,Vt=M.isVideoTexture!==!0,ne=mt.__version===void 0||j===!0,k=ft.dataReady,Mt=w(M,st);if(M.isDepthTexture)bt=y(M.format===xs,M.type),ne&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,bt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,bt,st.width,st.height,0,vt,Ft,null));else if(M.isDataTexture)if(Ot.length>0){Vt&&ne&&e.texStorage2D(i.TEXTURE_2D,Mt,bt,Ot[0].width,Ot[0].height);for(let it=0,St=Ot.length;it<St;it++)_t=Ot[it],Vt?k&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,_t.width,_t.height,vt,Ft,_t.data):e.texImage2D(i.TEXTURE_2D,it,bt,_t.width,_t.height,0,vt,Ft,_t.data);M.generateMipmaps=!1}else Vt?(ne&&e.texStorage2D(i.TEXTURE_2D,Mt,bt,st.width,st.height),k&&nt(M,st,vt,Ft)):e.texImage2D(i.TEXTURE_2D,0,bt,st.width,st.height,0,vt,Ft,st.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Vt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,bt,Ot[0].width,Ot[0].height,st.depth);for(let it=0,St=Ot.length;it<St;it++)if(_t=Ot[it],M.format!==si)if(vt!==null)if(Vt){if(k)if(M.layerUpdates.size>0){const Tt=bu(_t.width,_t.height,M.format,M.type);for(const at of M.layerUpdates){const Bt=_t.data.subarray(at*Tt/_t.data.BYTES_PER_ELEMENT,(at+1)*Tt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,at,_t.width,_t.height,1,vt,Bt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,_t.width,_t.height,st.depth,vt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,bt,_t.width,_t.height,st.depth,0,_t.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,_t.width,_t.height,st.depth,vt,Ft,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,bt,_t.width,_t.height,st.depth,0,vt,Ft,_t.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Vt&&ne&&e.texStorage2D(i.TEXTURE_2D,Mt,bt,Ot[0].width,Ot[0].height);for(let it=0,St=Ot.length;it<St;it++)_t=Ot[it],M.format!==si?vt!==null?Vt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,_t.width,_t.height,vt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,it,bt,_t.width,_t.height,0,_t.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?k&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,_t.width,_t.height,vt,Ft,_t.data):e.texImage2D(i.TEXTURE_2D,it,bt,_t.width,_t.height,0,vt,Ft,_t.data)}else if(M.isDataArrayTexture)if(Vt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,bt,st.width,st.height,st.depth),k)if(M.layerUpdates.size>0){const it=bu(st.width,st.height,M.format,M.type);for(const St of M.layerUpdates){const Tt=st.data.subarray(St*it/st.data.BYTES_PER_ELEMENT,(St+1)*it/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,St,st.width,st.height,1,vt,Ft,Tt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,vt,Ft,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,st.width,st.height,st.depth,0,vt,Ft,st.data);else if(M.isData3DTexture)Vt?(ne&&e.texStorage3D(i.TEXTURE_3D,Mt,bt,st.width,st.height,st.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,vt,Ft,st.data)):e.texImage3D(i.TEXTURE_3D,0,bt,st.width,st.height,st.depth,0,vt,Ft,st.data);else if(M.isFramebufferTexture){if(ne)if(Vt)e.texStorage2D(i.TEXTURE_2D,Mt,bt,st.width,st.height);else{let it=st.width,St=st.height;for(let Tt=0;Tt<Mt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,bt,it,St,0,vt,Ft,null),it>>=1,St>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){const it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),st.parentNode!==it){it.appendChild(st),f.add(M),it.onpaint=St=>{const Tt=St.changedElements;for(const at of f)Tt.includes(at.image)&&(at.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,st);else{const Tt=i.RGBA,at=i.RGBA,Bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Tt,at,Bt,st)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Vt&&ne){const it=de(Ot[0]);e.texStorage2D(i.TEXTURE_2D,Mt,bt,it.width,it.height)}for(let it=0,St=Ot.length;it<St;it++)_t=Ot[it],Vt?k&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,vt,Ft,_t):e.texImage2D(i.TEXTURE_2D,it,bt,vt,Ft,_t);M.generateMipmaps=!1}else if(Vt){if(ne){const it=de(st);e.texStorage2D(i.TEXTURE_2D,Mt,bt,it.width,it.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Ft,st)}else e.texImage2D(i.TEXTURE_2D,0,bt,vt,Ft,st);m(M)&&S($),mt.__version=ft.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function kt(C,M,H){if(M.image.length!==6)return;const $=qt(C,M),j=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);const ft=n.get(j);if(j.version!==ft.__version||$===!0){e.activeTexture(i.TEXTURE0+H);const mt=ge.getPrimaries(ge.workingColorSpace),et=M.colorSpace===$i?null:ge.getPrimaries(M.colorSpace),st=M.colorSpace===$i||mt===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);const vt=M.isCompressedTexture||M.image[0].isCompressedTexture,Ft=M.image[0]&&M.image[0].isDataTexture,bt=[];for(let at=0;at<6;at++)!vt&&!Ft?bt[at]=p(M.image[at],!0,s.maxCubemapSize):bt[at]=Ft?M.image[at].image:M.image[at],bt[at]=we(M,bt[at]);const _t=bt[0],Ot=r.convert(M.format,M.colorSpace),Vt=r.convert(M.type),ne=_(M.internalFormat,Ot,Vt,M.normalized,M.colorSpace),k=M.isVideoTexture!==!0,Mt=ft.__version===void 0||$===!0,it=j.dataReady;let St=w(M,_t);Wt(i.TEXTURE_CUBE_MAP,M);let Tt;if(vt){k&&Mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,ne,_t.width,_t.height);for(let at=0;at<6;at++){Tt=bt[at].mipmaps;for(let Bt=0;Bt<Tt.length;Bt++){const Ut=Tt[Bt];M.format!==si?Ot!==null?k?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt,0,0,Ut.width,Ut.height,Ot,Ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt,ne,Ut.width,Ut.height,0,Ut.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt,0,0,Ut.width,Ut.height,Ot,Vt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt,ne,Ut.width,Ut.height,0,Ot,Vt,Ut.data)}}}else{if(Tt=M.mipmaps,k&&Mt){Tt.length>0&&St++;const at=de(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,ne,at.width,at.height)}for(let at=0;at<6;at++)if(Ft){k?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,bt[at].width,bt[at].height,Ot,Vt,bt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ne,bt[at].width,bt[at].height,0,Ot,Vt,bt[at].data);for(let Bt=0;Bt<Tt.length;Bt++){const Be=Tt[Bt].image[at].image;k?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt+1,0,0,Be.width,Be.height,Ot,Vt,Be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt+1,ne,Be.width,Be.height,0,Ot,Vt,Be.data)}}else{k?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ot,Vt,bt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ne,Ot,Vt,bt[at]);for(let Bt=0;Bt<Tt.length;Bt++){const Ut=Tt[Bt];k?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt+1,0,0,Ot,Vt,Ut.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt+1,ne,Ot,Vt,Ut.image[at])}}}m(M)&&S(i.TEXTURE_CUBE_MAP),ft.__version=j.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function At(C,M,H,$,j,ft){const mt=r.convert(H.format,H.colorSpace),et=r.convert(H.type),st=_(H.internalFormat,mt,et,H.normalized,H.colorSpace),vt=n.get(M),Ft=n.get(H);if(Ft.__renderTarget=M,!vt.__hasExternalTextures){const bt=Math.max(1,M.width>>ft),_t=Math.max(1,M.height>>ft);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,ft,st,bt,_t,M.depth,0,mt,et,null):e.texImage2D(j,ft,st,bt,_t,0,mt,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Kt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,j,Ft.__webglTexture,0,Yt(M)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,j,Ft.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(C,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){const $=M.depthTexture,j=$&&$.isDepthTexture?$.type:null,ft=y(M.stencilBuffer,j),mt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Kt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt(M),ft,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt(M),ft,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ft,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,C)}else{const $=M.textures;for(let j=0;j<$.length;j++){const ft=$[j],mt=r.convert(ft.format,ft.colorSpace),et=r.convert(ft.type),st=_(ft.internalFormat,mt,et,ft.normalized,ft.colorSpace);Kt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt(M),st,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt(M),st,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,st,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(C,M,H){const $=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=n.get(M.depthTexture);if(j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$){if(j.__webglInit===void 0&&(j.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,M.depthTexture);const vt=r.convert(M.depthTexture.format),Ft=r.convert(M.depthTexture.type);let bt;M.depthTexture.format===Ui?bt=i.DEPTH_COMPONENT24:M.depthTexture.format===xs&&(bt=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,bt,M.width,M.height,0,vt,Ft,null)}}else L(M.depthTexture,0);const ft=j.__webglTexture,mt=Yt(M),et=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,st=M.depthTexture.format===xs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ui)Kt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,et,ft,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,st,et,ft,0);else if(M.depthTexture.format===xs)Kt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,et,ft,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,st,et,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(C){const M=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=$}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let $=0;$<6;$++)Pe(M.__webglFramebuffer[$],C,$);else{const $=C.texture.mipmaps;$&&$.length>0?Pe(M.__webglFramebuffer[0],C,0):Pe(M.__webglFramebuffer,C,0)}else if(H){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=i.createRenderbuffer(),$t(M.__webglDepthbuffer[$],C,!1);else{const j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ft)}}else{const $=C.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),$t(M.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ft)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(C,M,H){const $=n.get(C);M!==void 0&&At($.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&rt(C)}function ht(C){const M=C.texture,H=n.get(C),$=n.get(M);C.addEventListener("dispose",x);const j=C.textures,ft=C.isWebGLCubeRenderTarget===!0,mt=j.length>1;if(mt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=M.version,a.memory.textures++),ft){H.__webglFramebuffer=[];for(let et=0;et<6;et++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[et]=[];for(let st=0;st<M.mipmaps.length;st++)H.__webglFramebuffer[et][st]=i.createFramebuffer()}else H.__webglFramebuffer[et]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let et=0;et<M.mipmaps.length;et++)H.__webglFramebuffer[et]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(mt)for(let et=0,st=j.length;et<st;et++){const vt=n.get(j[et]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Kt(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let et=0;et<j.length;et++){const st=j[et];H.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[et]);const vt=r.convert(st.format,st.colorSpace),Ft=r.convert(st.type),bt=_(st.internalFormat,vt,Ft,st.normalized,st.colorSpace,C.isXRRenderTarget===!0),_t=Yt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,bt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,H.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),$t(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,M);for(let et=0;et<6;et++)if(M.mipmaps&&M.mipmaps.length>0)for(let st=0;st<M.mipmaps.length;st++)At(H.__webglFramebuffer[et][st],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,st);else At(H.__webglFramebuffer[et],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);m(M)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let et=0,st=j.length;et<st;et++){const vt=j[et],Ft=n.get(vt);let bt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(bt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,Ft.__webglTexture),Wt(bt,vt),At(H.__webglFramebuffer,C,vt,i.COLOR_ATTACHMENT0+et,bt,0),m(vt)&&S(bt)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(et=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,$.__webglTexture),Wt(et,M),M.mipmaps&&M.mipmaps.length>0)for(let st=0;st<M.mipmaps.length;st++)At(H.__webglFramebuffer[st],C,M,i.COLOR_ATTACHMENT0,et,st);else At(H.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,et,0);m(M)&&S(et),e.unbindTexture()}C.depthBuffer&&rt(C)}function ut(C){const M=C.textures;for(let H=0,$=M.length;H<$;H++){const j=M[H];if(m(j)){const ft=E(C),mt=n.get(j).__webglTexture;e.bindTexture(ft,mt),S(ft),e.unbindTexture()}}}const xt=[],Ht=[];function Gt(C){if(C.samples>0){if(Kt(C)===!1){const M=C.textures,H=C.width,$=C.height;let j=i.COLOR_BUFFER_BIT;const ft=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(C),et=M.length>1;if(et)for(let vt=0;vt<M.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);const st=C.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let vt=0;vt<M.length;vt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[vt]);const Ft=n.get(M[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,H,$,0,0,H,$,j,i.NEAREST),l===!0&&(xt.length=0,Ht.length=0,xt.push(i.COLOR_ATTACHMENT0+vt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(xt.push(ft),Ht.push(ft),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ht)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let vt=0;vt<M.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[vt]);const Ft=n.get(M[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Yt(C){return Math.min(s.maxSamples,C.samples)}function Kt(C){const M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function D(C){const M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function we(C,M){const H=C.colorSpace,$=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==uo&&H!==$i&&(ge.getTransfer(H)===Le?($!==si||j!==Fn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ve("WebGLTextures: Unsupported texture color space:",H)),M}function de(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=V,this.getTextureUnits=z,this.setTextureUnits=W,this.setTexture2D=L,this.setTexture2DArray=U,this.setTexture3D=G,this.setTextureCube=Y,this.rebindTextures=ot,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function T1(i,t){function e(n,s=$i){let r;const a=ge.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===Xc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gf)return i.BYTE;if(n===Wf)return i.SHORT;if(n===jr)return i.UNSIGNED_SHORT;if(n===Vc)return i.INT;if(n===Mi)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===Si)return i.HALF_FLOAT;if(n===Xf)return i.ALPHA;if(n===qf)return i.RGB;if(n===si)return i.RGBA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===$c)return i.RED;if(n===Yc)return i.RED_INTEGER;if(n===bs)return i.RG;if(n===Zc)return i.RG_INTEGER;if(n===Jc)return i.RGBA_INTEGER;if(n===Za||n===Ja||n===Ka||n===Qa)if(a===Le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ql||n===$l||n===Yl||n===Zl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jl||n===Kl||n===Ql||n===jl||n===tc||n===lo||n===ec)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jl||n===Kl)return a===Le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ql)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===jl)return r.COMPRESSED_R11_EAC;if(n===tc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===lo)return r.COMPRESSED_RG11_EAC;if(n===ec)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ic)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mc)return a===Le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gc||n===xc||n===vc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===gc)return a===Le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_c||n===Mc||n===co||n===Sc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_c)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===co)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ta?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const A1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R1=`
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

}`;class C1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new rd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new bi({vertexShader:A1,fragmentShader:R1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Q(new be(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class P1 extends ws{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",p=new C1,m={},S=e.getContextAttributes();let E=null,_=null;const y=[],w=[],A=new lt;let x=null,T=null;const R=new Ln;R.viewport=new qe;const I=new Ln;I.viewport=new qe;const N=[R,I],V=new Bm;let z=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let nt=y[Z];return nt===void 0&&(nt=new Jo,y[Z]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Z){let nt=y[Z];return nt===void 0&&(nt=new Jo,y[Z]=nt),nt.getGripSpace()},this.getHand=function(Z){let nt=y[Z];return nt===void 0&&(nt=new Jo,y[Z]=nt),nt.getHandSpace()};function O(Z){const nt=w.indexOf(Z.inputSource);if(nt===-1)return;const gt=y[nt];gt!==void 0&&(gt.update(Z.inputSource,Z.frame,c||a),gt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",L);for(let Z=0;Z<y.length;Z++){const nt=w[Z];nt!==null&&(w[Z]=null,y[Z].disconnect(nt))}z=null,W=null,p.reset();for(const Z in m)delete m[Z];if(t.setRenderTarget(E),d=null,u=null,f=null,s=null,_=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(A.width,A.height,!1),T!==null){const Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",B),s.addEventListener("inputsourceschange",L),S.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,kt=null,At=null;S.depth&&(At=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=S.stencil?xs:Ui,kt=S.stencil?ta:Mi);const $t={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer($t),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new ri(u.textureWidth,u.textureHeight,{format:si,type:Fn,depthTexture:new na(u.textureWidth,u.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const gt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new ri(d.framebufferWidth,d.framebufferHeight,{format:si,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function L(Z){for(let nt=0;nt<Z.removed.length;nt++){const gt=Z.removed[nt],kt=w.indexOf(gt);kt>=0&&(w[kt]=null,y[kt].disconnect(gt))}for(let nt=0;nt<Z.added.length;nt++){const gt=Z.added[nt];let kt=w.indexOf(gt);if(kt===-1){for(let $t=0;$t<y.length;$t++)if($t>=w.length){w.push(gt),kt=$t;break}else if(w[$t]===null){w[$t]=gt,kt=$t;break}if(kt===-1)break}const At=y[kt];At&&At.connect(gt)}}const U=new P,G=new P;function Y(Z,nt,gt){U.setFromMatrixPosition(nt.matrixWorld),G.setFromMatrixPosition(gt.matrixWorld);const kt=U.distanceTo(G),At=nt.projectionMatrix.elements,$t=gt.projectionMatrix.elements,Pe=At[14]/(At[10]-1),rt=At[14]/(At[10]+1),ot=(At[9]+1)/At[5],ht=(At[9]-1)/At[5],ut=(At[8]-1)/At[0],xt=($t[8]+1)/$t[0],Ht=Pe*ut,Gt=Pe*xt,Yt=kt/(-ut+xt),Kt=Yt*-ut;if(nt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Kt),Z.translateZ(Yt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),At[10]===-1)Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const D=Pe+Yt,we=rt+Yt,de=Ht-Kt,C=Gt+(kt-Kt),M=ot*rt/we*D,H=ht*rt/we*D;Z.projectionMatrix.makePerspective(de,C,M,H,D,we),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function dt(Z,nt){nt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(nt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let nt=Z.near,gt=Z.far;p.texture!==null&&(p.depthNear>0&&(nt=p.depthNear),p.depthFar>0&&(gt=p.depthFar)),V.near=I.near=R.near=nt,V.far=I.far=R.far=gt,(z!==V.near||W!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),z=V.near,W=V.far),V.layers.mask=Z.layers.mask|6,R.layers.mask=V.layers.mask&-5,I.layers.mask=V.layers.mask&-3;const kt=Z.parent,At=V.cameras;dt(V,kt);for(let $t=0;$t<At.length;$t++)dt(At[$t],kt);At.length===2?Y(V,R,I):V.projectionMatrix.copy(R.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),pt(Z,V,kt)};function pt(Z,nt,gt){gt===null?Z.matrix.copy(nt.matrixWorld):(Z.matrix.copy(gt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(nt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(nt.projectionMatrix),Z.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=lr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(Z){return m[Z]};let Xt=null;function Wt(Z,nt){if(h=nt.getViewerPose(c||a),g=nt,h!==null){const gt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let kt=!1;gt.length!==V.cameras.length&&(V.cameras.length=0,kt=!0);for(let rt=0;rt<gt.length;rt++){const ot=gt[rt];let ht=null;if(d!==null)ht=d.getViewport(ot);else{const xt=f.getViewSubImage(u,ot);ht=xt.viewport,rt===0&&(t.setRenderTargetTextures(_,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(_))}let ut=N[rt];ut===void 0&&(ut=new Ln,ut.layers.enable(rt),ut.viewport=new qe,N[rt]=ut),ut.matrix.fromArray(ot.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(ot.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(ht.x,ht.y,ht.width,ht.height),rt===0&&(V.matrix.copy(ut.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),kt===!0&&V.cameras.push(ut)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();const rt=f.getDepthInformation(gt[0]);rt&&rt.isValid&&rt.texture&&p.init(rt,s.renderState)}if(At&&At.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let rt=0;rt<gt.length;rt++){const ot=gt[rt].camera;if(ot){let ht=m[ot];ht||(ht=new rd,m[ot]=ht);const ut=f.getCameraImage(ot);ht.sourceTexture=ut}}}}for(let gt=0;gt<y.length;gt++){const kt=w[gt],At=y[gt];kt!==null&&At!==void 0&&At.update(kt,nt,c||a)}Xt&&Xt(Z,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const qt=new vd;qt.setAnimationLoop(Wt),this.setAnimationLoop=function(Z){Xt=Z},this.dispose=function(){}}}const L1=new le,Ed=new Qt;Ed.set(-1,0,0,0,1,0,0,0,1);function I1(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,gd(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,E,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===_n&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===_n&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=t.get(m),E=S.envMap,_=S.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(L1.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Ed),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=E*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_n&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function D1(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const w=y.program;n.uniformBlockBinding(_,w)}function c(_,y){let w=s[_.id];w===void 0&&(p(_),w=h(_),s[_.id]=w,_.addEventListener("dispose",S));const A=y.program;n.updateUBOMapping(_,A);const x=t.render.frame;r[_.id]!==x&&(u(_),r[_.id]=x)}function h(_){const y=f();_.__bindingPointIndex=y;const w=i.createBuffer(),A=_.__size,x=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,w),w}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const y=s[_.id],w=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let x=0,T=w.length;x<T;x++){const R=w[x];if(Array.isArray(R))for(let I=0,N=R.length;I<N;I++)d(R[I],x,I,A);else d(R,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,y,w,A){if(v(_,y,w,A)===!0){const x=_.__offset,T=_.value;if(Array.isArray(T)){let R=0;for(let I=0;I<T.length;I++){const N=T[I],V=m(N);g(N,_.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,_.__data)}}function g(_,y,w){typeof _=="number"||typeof _=="boolean"?y[0]=_:_.isMatrix3?(y[0]=_.elements[0],y[1]=_.elements[1],y[2]=_.elements[2],y[3]=0,y[4]=_.elements[3],y[5]=_.elements[4],y[6]=_.elements[5],y[7]=0,y[8]=_.elements[6],y[9]=_.elements[7],y[10]=_.elements[8],y[11]=0):ArrayBuffer.isView(_)?y.set(new _.constructor(_.buffer,_.byteOffset,y.length)):_.toArray(y,w)}function v(_,y,w,A){const x=_.value,T=y+"_"+w;if(A[T]===void 0)return typeof x=="number"||typeof x=="boolean"?A[T]=x:ArrayBuffer.isView(x)?A[T]=x.slice():A[T]=x.clone(),!0;{const R=A[T];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(_){const y=_.uniforms;let w=0;const A=16;for(let T=0,R=y.length;T<R;T++){const I=Array.isArray(y[T])?y[T]:[y[T]];for(let N=0,V=I.length;N<V;N++){const z=I[N],W=Array.isArray(z.value)?z.value:[z.value];for(let O=0,B=W.length;O<B;O++){const L=W[O],U=m(L),G=w%A,Y=G%U.boundary,dt=G+Y;w+=Y,dt!==0&&A-dt<U.storage&&(w+=A-dt),z.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=w,w+=U.storage}}}const x=w%A;return x>0&&(w+=A-x),_.__size=w,_.__cache={},this}function m(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",_),y}function S(_){const y=_.target;y.removeEventListener("dispose",S);const w=a.indexOf(y.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function E(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}const U1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ui=null;function N1(){return ui===null&&(ui=new id(U1,16,16,bs,Si),ui.name="DFG_LUT",ui.minFilter=vn,ui.magFilter=vn,ui.wrapS=qn,ui.wrapT=qn,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}class F1{constructor(t={}){const{canvas:e=t0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Fn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const v=d,p=new Set([Jc,Zc,Yc]),m=new Set([Fn,Mi,jr,ta,Xc,qc]),S=new Uint32Array(4),E=new Int32Array(4),_=new P;let y=null,w=null;const A=[],x=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1,N=null,V=null,z=null,W=null;this._outputColorSpace=Pn;let O=0,B=0,L=null,U=-1,G=null;const Y=new qe,dt=new qe;let pt=null;const Xt=new zt(0);let Wt=0,qt=e.width,Z=e.height,nt=1,gt=null,kt=null;const At=new qe(0,0,qt,Z),$t=new qe(0,0,qt,Z);let Pe=!1;const rt=new nh;let ot=!1,ht=!1;const ut=new le,xt=new P,Ht=new qe,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function Kt(){return L===null?nt:1}let D=n;function we(b,F){return e.getContext(b,F)}let de,C,M,H,$,j,ft,mt,et,st,vt,Ft,bt,_t,Ot,Vt,ne,k,Mt,it,St,Tt,at;try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gc}`),e.addEventListener("webglcontextlost",Be,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",Kn,!1),D===null){const F="webgl2";if(D=we(F,b),D===null)throw we(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(b){throw e.removeEventListener("webglcontextlost",Be,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",Kn,!1),ve("WebGLRenderer: "+b.message),b}function Bt(){de=new Nv(D),de.init(),St=new T1(D,de),C=new Ev(D,de,t,St),M=new w1(D,de),C.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),V=D.createFramebuffer(),z=D.createFramebuffer(),W=D.createFramebuffer(),H=new Bv(D),$=new h1,j=new E1(D,de,M,$,C,St,H),ft=new Uv(R),mt=new km(D),Tt=new yv(D,mt),et=new Fv(D,mt,H,Tt),st=new kv(D,et,mt,Tt,H),k=new zv(D,C,j),Ot=new Tv($),vt=new c1(R,ft,de,C,Tt,Ot),Ft=new I1(R,$),bt=new f1,_t=new v1(de),ne=new bv(R,ft,M,st,g,l),Vt=new y1(R,st,C),at=new D1(D,H,C,M),Mt=new wv(D,de,H),it=new Ov(D,de,H),H.programs=vt.programs,R.capabilities=C,R.extensions=de,R.properties=$,R.renderLists=bt,R.shadowMap=Vt,R.state=M,R.info=H}v!==Fn&&(T=new Wv(v,e.width,e.height,o,s,r));const Ut=new P1(R,D);this.xr=Ut,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=de.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=de.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(b){b!==void 0&&(nt=b,this.setSize(qt,Z,!1))},this.getSize=function(b){return b.set(qt,Z)},this.setSize=function(b,F,J=!0){if(Ut.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}qt=b,Z=F,e.width=Math.floor(b*nt),e.height=Math.floor(F*nt),J===!0&&(e.style.width=b+"px",e.style.height=F+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(qt*nt,Z*nt).floor()},this.setDrawingBufferSize=function(b,F,J){qt=b,Z=F,nt=J,e.width=Math.floor(b*J),e.height=Math.floor(F*J),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(v===Fn){ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Y)},this.getViewport=function(b){return b.copy(At)},this.setViewport=function(b,F,J,X){b.isVector4?At.set(b.x,b.y,b.z,b.w):At.set(b,F,J,X),M.viewport(Y.copy(At).multiplyScalar(nt).round())},this.getScissor=function(b){return b.copy($t)},this.setScissor=function(b,F,J,X){b.isVector4?$t.set(b.x,b.y,b.z,b.w):$t.set(b,F,J,X),M.scissor(dt.copy($t).multiplyScalar(nt).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(b){M.setScissorTest(Pe=b)},this.setOpaqueSort=function(b){gt=b},this.setTransparentSort=function(b){kt=b},this.getClearColor=function(b){return b.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,J=!0){let X=0;if(b){let q=!1;if(L!==null){const Et=L.texture.format;q=p.has(Et)}if(q){const Et=L.texture.type,Pt=m.has(Et),wt=ne.getClearColor(),It=ne.getClearAlpha(),Nt=wt.r,re=wt.g,pe=wt.b;Pt?(S[0]=Nt,S[1]=re,S[2]=pe,S[3]=It,D.clearBufferuiv(D.COLOR,0,S)):(E[0]=Nt,E[1]=re,E[2]=pe,E[3]=It,D.clearBufferiv(D.COLOR,0,E))}else X|=D.COLOR_BUFFER_BIT}F&&(X|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),N=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Be,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",Kn,!1),ne.dispose(),bt.dispose(),_t.dispose(),$.dispose(),ft.dispose(),st.dispose(),Tt.dispose(),at.dispose(),vt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",Th),Ut.removeEventListener("sessionend",Ah),ts.stop()};function Be(b){b.preventDefault(),mo("WebGLRenderer: Context Lost."),I=!0}function Ee(){mo("WebGLRenderer: Context Restored."),I=!1;const b=H.autoReset,F=Vt.enabled,J=Vt.autoUpdate,X=Vt.needsUpdate,q=Vt.type;Bt(),H.autoReset=b,Vt.enabled=F,Vt.autoUpdate=J,Vt.needsUpdate=X,Vt.type=q}function Kn(b){ve("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function li(b){const F=b.target;F.removeEventListener("dispose",li),Wd(F)}function Wd(b){Hd(b),$.remove(b)}function Hd(b){const F=$.get(b).programs;F!==void 0&&(F.forEach(function(J){vt.releaseProgram(J)}),b.isShaderMaterial&&vt.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,J,X,q,Et){F===null&&(F=Gt);const Pt=q.isMesh&&q.matrixWorld.determinantAffine()<0,wt=qd(b,F,J,X,q);M.setMaterial(X,Pt);let It=J.index,Nt=1;if(X.wireframe===!0){if(It=et.getWireframeAttribute(J),It===void 0)return;Nt=2}const re=J.drawRange,pe=J.attributes.position;let Dt=re.start*Nt,Te=(re.start+re.count)*Nt;Et!==null&&(Dt=Math.max(Dt,Et.start*Nt),Te=Math.min(Te,(Et.start+Et.count)*Nt)),It!==null?(Dt=Math.max(Dt,0),Te=Math.min(Te,It.count)):pe!=null&&(Dt=Math.max(Dt,0),Te=Math.min(Te,pe.count));const tn=Te-Dt;if(tn<0||tn===1/0)return;Tt.setup(q,X,wt,J,It);let Ge,Ne=Mt;if(It!==null&&(Ge=mt.get(It),Ne=it,Ne.setIndex(Ge)),q.isMesh)X.wireframe===!0?(M.setLineWidth(X.wireframeLinewidth*Kt()),Ne.setMode(D.LINES)):Ne.setMode(D.TRIANGLES);else if(q.isLine){let dn=X.linewidth;dn===void 0&&(dn=1),M.setLineWidth(dn*Kt()),q.isLineSegments?Ne.setMode(D.LINES):q.isLineLoop?Ne.setMode(D.LINE_LOOP):Ne.setMode(D.LINE_STRIP)}else q.isPoints?Ne.setMode(D.POINTS):q.isSprite&&Ne.setMode(D.TRIANGLES);if(q.isBatchedMesh)if(de.get("WEBGL_multi_draw"))Ne.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const dn=q._multiDrawStarts,Rt=q._multiDrawCounts,yn=q._multiDrawCount,_e=It?mt.get(It).bytesPerElement:1,kn=$.get(X).currentProgram.getUniforms();for(let ci=0;ci<yn;ci++)kn.setValue(D,"_gl_DrawID",ci),Ne.render(dn[ci]/_e,Rt[ci])}else if(q.isInstancedMesh)Ne.renderInstances(Dt,tn,q.count);else if(J.isInstancedBufferGeometry){const dn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Rt=Math.min(J.instanceCount,dn);Ne.renderInstances(Dt,tn,Rt)}else Ne.render(Dt,tn)};function Eh(b,F,J,X){N!==null&&b.isNodeMaterial&&N.setObject(X,b),ot===!0&&Ot.setState(b,J,!1),b.transparent===!0&&b.side===Ze&&b.forceSinglePass===!1?(b.side=_n,b.needsUpdate=!0,da(b,F,X),b.side=Ms,b.needsUpdate=!0,da(b,F,X),b.side=Ze):da(b,F,X)}this.compile=function(b,F,J=null){J===null&&(J=b),N!==null&&N.renderStart(b,F,J),w=_t.get(J),w.init(F),x.push(w),J.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),b!==J&&b.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),ht=this.localClippingEnabled,ot=Ot.init(this.clippingPlanes,ht),ot===!0&&Ot.setGlobalState(this.clippingPlanes,F),N!==null&&Vt.render(w.state.shadowsArray,J,F);const X=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Et=q.material;if(Et)if(Array.isArray(Et))for(let Pt=0;Pt<Et.length;Pt++){const wt=Et[Pt];Eh(wt,J,F,q),X.add(wt)}else Eh(Et,J,F,q),X.add(Et)}),w=x.pop(),N!==null&&N.renderEnd(),X},this.compileAsync=function(b,F,J=null){const X=this.compile(b,F,J);return new Promise(q=>{function Et(){if(X.forEach(function(Pt){const It=$.get(Pt).currentProgram;(It===void 0||It.isReady())&&X.delete(Pt)}),X.size===0){q(b);return}setTimeout(Et,10)}de.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Oo=null;function Vd(b){Oo&&Oo(b)}function Th(){ts.stop()}function Ah(){ts.start()}const ts=new vd;ts.setAnimationLoop(Vd),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(b){Oo=b,Ut.setAnimationLoop(b),b===null?ts.stop():ts.start()},Ut.addEventListener("sessionstart",Th),Ut.addEventListener("sessionend",Ah),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(b,F);const J=Ut.enabled===!0&&Ut.isPresenting===!0,X=T!==null&&(L===null||J)&&T.begin(R,L);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(F),F=Ut.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,F,L),w=_t.get(b,x.length),w.init(F),w.state.textureUnits=j.getTextureUnits(),x.push(w),ut.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),rt.setFromProjectionMatrix(ut,mi,F.reversedDepth),ht=this.localClippingEnabled,ot=Ot.init(this.clippingPlanes,ht),y=bt.get(b,A.length),y.init(),A.push(y),Ut.enabled===!0&&Ut.isPresenting===!0){const Pt=R.xr.getDepthSensingMesh();Pt!==null&&Bo(Pt,F,-1/0,R.sortObjects)}Bo(b,F,0,R.sortObjects),y.finish(),N!==null&&N.updateLights(w.state.lightsArray),R.sortObjects===!0&&y.sort(gt,kt),Yt=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,Yt&&ne.addToRenderList(y,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&Ot.beginShadows();const q=w.state.shadowsArray;if(Vt.render(q,b,F),ot===!0&&Ot.endShadows(),(X&&T.hasRenderPass())===!1){const Pt=y.opaque,wt=y.transmissive;if(w.setupLights(),F.isArrayCamera){const It=F.cameras;if(wt.length>0)for(let Nt=0,re=It.length;Nt<re;Nt++){const pe=It[Nt];Ch(Pt,wt,b,pe)}Yt&&ne.render(b);for(let Nt=0,re=It.length;Nt<re;Nt++){const pe=It[Nt];Rh(y,b,pe,pe.viewport)}}else wt.length>0&&Ch(Pt,wt,b,F),Yt&&ne.render(b),Rh(y,b,F)}L!==null&&B===0&&(j.updateMultisampleRenderTarget(L),j.updateRenderTargetMipmap(L)),X&&T.end(R),b.isScene===!0&&b.onAfterRender(R,b,F),Tt.resetDefaultState(),U=-1,G=null,x.pop(),x.length>0?(w=x[x.length-1],j.setTextureUnits(w.state.textureUnits),ot===!0&&Ot.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?y=A[A.length-1]:y=null,N!==null&&N.renderEnd()};function Bo(b,F,J,X){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(rt)){X&&Ht.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ut);const Pt=st.update(b),wt=b.material;wt.visible&&y.push(b,Pt,wt,J,Ht.z,null,F)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(rt))){const Pt=st.update(b),wt=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ht.copy(b.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Ht.copy(Pt.boundingSphere.center)),Ht.applyMatrix4(b.matrixWorld).applyMatrix4(ut)),Array.isArray(wt)){const It=Pt.groups;for(let Nt=0,re=It.length;Nt<re;Nt++){const pe=It[Nt],Dt=wt[pe.materialIndex];Dt&&Dt.visible&&y.push(b,Pt,Dt,J,Ht.z,pe,F)}}else wt.visible&&y.push(b,Pt,wt,J,Ht.z,null,F)}}const Et=b.children;for(let Pt=0,wt=Et.length;Pt<wt;Pt++)Bo(Et[Pt],F,J,X)}function Rh(b,F,J,X){const{opaque:q,transmissive:Et,transparent:Pt}=b;w.setupLightsView(J),ot===!0&&Ot.setGlobalState(R.clippingPlanes,J),X&&M.viewport(Y.copy(X)),q.length>0&&fa(q,F,J),Et.length>0&&fa(Et,F,J),Pt.length>0&&fa(Pt,F,J),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Ch(b,F,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[X.id]===void 0){const Dt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[X.id]=new ri(1,1,{generateMipmaps:!0,type:Dt?Si:Fn,minFilter:gs,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ge.workingColorSpace})}const Et=w.state.transmissionRenderTarget[X.id],Pt=X.viewport||Y;Et.setSize(Pt.z*R.transmissionResolutionScale,Pt.w*R.transmissionResolutionScale);const wt=R.getRenderTarget(),It=R.getActiveCubeFace(),Nt=R.getActiveMipmapLevel();R.setRenderTarget(Et),R.getClearColor(Xt),Wt=R.getClearAlpha(),Wt<1&&R.setClearColor(16777215,.5),R.clear(),Yt&&ne.render(J);const re=R.toneMapping;R.toneMapping=xi;const pe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),w.setupLightsView(X),ot===!0&&Ot.setGlobalState(R.clippingPlanes,X),fa(b,J,X),j.updateMultisampleRenderTarget(Et),j.updateRenderTargetMipmap(Et),de.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let Te=0,tn=F.length;Te<tn;Te++){const Ge=F[Te],{object:Ne,geometry:dn,material:Rt,group:yn}=Ge;if(Rt.side===Ze&&Ne.layers.test(X.layers)){const _e=Rt.side;Rt.side=_n,Rt.needsUpdate=!0,Ph(Ne,J,X,dn,Rt,yn),Rt.side=_e,Rt.needsUpdate=!0,Dt=!0}}Dt===!0&&(j.updateMultisampleRenderTarget(Et),j.updateRenderTargetMipmap(Et))}R.setRenderTarget(wt,It,Nt),R.setClearColor(Xt,Wt),pe!==void 0&&(X.viewport=pe),R.toneMapping=re}function fa(b,F,J){const X=F.isScene===!0?F.overrideMaterial:null;for(let q=0,Et=b.length;q<Et;q++){const Pt=b[q],{object:wt,geometry:It,group:Nt}=Pt;let re=Pt.material;re.allowOverride===!0&&X!==null&&(re=X),wt.layers.test(J.layers)&&Ph(wt,F,J,It,re,Nt)}}function Ph(b,F,J,X,q,Et){N!==null&&q.isNodeMaterial&&N.setObject(b,q),b.onBeforeRender(R,F,J,X,q,Et),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(R,F,J,X,b,Et),q.transparent===!0&&q.side===Ze&&q.forceSinglePass===!1?(q.side=_n,q.needsUpdate=!0,R.renderBufferDirect(J,F,X,q,b,Et),q.side=Ms,q.needsUpdate=!0,R.renderBufferDirect(J,F,X,q,b,Et),q.side=Ze):R.renderBufferDirect(J,F,X,q,b,Et),b.onAfterRender(R,F,J,X,q,Et)}function da(b,F,J){F.isScene!==!0&&(F=Gt);const X=$.get(b),q=w.state.lights,Et=w.state.shadowsArray,Pt=q.state.version,wt=vt.getParameters(b,q.state,Et,F,J,w.state.lightProbeGridArray),It=vt.getProgramCacheKey(wt);let Nt=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;const re=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=ft.get(b.envMap||X.environment,re),X.envMapRotation=X.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Nt===void 0&&(b.addEventListener("dispose",li),Nt=new Map,X.programs=Nt);let pe=Nt.get(It);if(pe!==void 0){if(X.currentProgram===pe&&X.lightsStateVersion===Pt)return Ih(b,wt),pe}else wt.uniforms=vt.getUniforms(b),N!==null&&b.isNodeMaterial&&N.build(b,J,wt),b.onBeforeCompile(wt,R),pe=vt.acquireProgram(wt,It),Nt.set(It,pe),X.uniforms=wt.uniforms;const Dt=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Dt.clippingPlanes=Ot.uniform),Ih(b,wt),X.needsLights=Yd(b),X.lightsStateVersion=Pt,X.needsLights&&(Dt.ambientLightColor.value=q.state.ambient,Dt.lightProbe.value=q.state.probe,Dt.sunLights.value=q.state.sun,Dt.sunLightShadows.value=q.state.sunShadow,Dt.directionalLights.value=q.state.directional,Dt.directionalLightShadows.value=q.state.directionalShadow,Dt.spotLights.value=q.state.spot,Dt.spotLightShadows.value=q.state.spotShadow,Dt.rectAreaLights.value=q.state.rectArea,Dt.ltc_1.value=q.state.rectAreaLTC1,Dt.ltc_2.value=q.state.rectAreaLTC2,Dt.pointLights.value=q.state.point,Dt.pointLightShadows.value=q.state.pointShadow,Dt.hemisphereLights.value=q.state.hemi,Dt.sunShadowMatrix.value=q.state.sunShadowMatrix,Dt.sunShadowCascade.value=q.state.sunShadowCascade,Dt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Dt.spotLightMatrix.value=q.state.spotLightMatrix,Dt.spotLightMap.value=q.state.spotLightMap,Dt.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=w.state.lightProbeGridArray.length>0,X.currentProgram=pe,X.uniformsList=null,pe}function Lh(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=ja.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Ih(b,F){const J=$.get(b);J.outputColorSpace=F.outputColorSpace,J.batching=F.batching,J.batchingColor=F.batchingColor,J.instancing=F.instancing,J.instancingColor=F.instancingColor,J.instancingMorph=F.instancingMorph,J.skinning=F.skinning,J.morphTargets=F.morphTargets,J.morphNormals=F.morphNormals,J.morphColors=F.morphColors,J.morphTargetsCount=F.morphTargetsCount,J.numClippingPlanes=F.numClippingPlanes,J.numIntersection=F.numClipIntersection,J.vertexAlphas=F.vertexAlphas,J.vertexTangents=F.vertexTangents,J.toneMapping=F.toneMapping}function Xd(b,F){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;_.setFromMatrixPosition(F.matrixWorld);for(let J=0,X=b.length;J<X;J++){const q=b[J];if(q.texture!==null&&q.boundingBox.containsPoint(_))return q}return null}function qd(b,F,J,X,q){F.isScene!==!0&&(F=Gt),j.resetTextureUnits();const Et=F.fog,Pt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,wt=L===null?R.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ge.workingColorSpace,It=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Nt=ft.get(X.envMap||Pt,It),re=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pe=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Dt=!!J.morphAttributes.position,Te=!!J.morphAttributes.normal,tn=!!J.morphAttributes.color;let Ge=xi;X.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ge=R.toneMapping);const Ne=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,dn=Ne!==void 0?Ne.length:0,Rt=$.get(X),yn=w.state.lights;if(ot===!0&&(ht===!0||b!==G)){const ze=b===G&&X.id===U;Ot.setState(X,b,ze)}let _e=!1;X.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==yn.state.version||Rt.outputColorSpace!==wt||q.isBatchedMesh&&Rt.batching===!1||!q.isBatchedMesh&&Rt.batching===!0||q.isBatchedMesh&&Rt.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Rt.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Rt.instancing===!1||!q.isInstancedMesh&&Rt.instancing===!0||q.isSkinnedMesh&&Rt.skinning===!1||!q.isSkinnedMesh&&Rt.skinning===!0||q.isInstancedMesh&&Rt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Rt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Rt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Rt.instancingMorph===!1&&q.morphTexture!==null||Rt.envMap!==Nt||X.fog===!0&&Rt.fog!==Et||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Ot.numPlanes||Rt.numIntersection!==Ot.numIntersection)||Rt.vertexAlphas!==re||Rt.vertexTangents!==pe||Rt.morphTargets!==Dt||Rt.morphNormals!==Te||Rt.morphColors!==tn||Rt.toneMapping!==Ge||Rt.morphTargetsCount!==dn||!!Rt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(_e=!0):(_e=!0,Rt.__version=X.version);let kn=Rt.currentProgram;_e===!0&&(kn=da(X,F,q),N&&X.isNodeMaterial&&N.onUpdateProgram(X,kn,Rt));let ci=!1,Ni=!1,Cs=!1;const Ue=kn.getUniforms(),Ke=Rt.uniforms;if(M.useProgram(kn.program)&&(ci=!0,Ni=!0,Cs=!0),X.id!==U&&(U=X.id,Ni=!0),Rt.needsLights){const ze=Xd(w.state.lightProbeGridArray,q);Rt.lightProbeGrid!==ze&&(Rt.lightProbeGrid=ze,Ni=!0)}if(ci||G!==b){M.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ue.setValue(D,"projectionMatrix",b.projectionMatrix),Ue.setValue(D,"viewMatrix",b.matrixWorldInverse);const Oi=Ue.map.cameraPosition;Oi!==void 0&&Oi.setValue(D,xt.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&Ue.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ue.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),G!==b&&(G=b,Ni=!0,Cs=!0)}if(Rt.needsLights&&(yn.state.sunShadowMap.length>0&&Ue.setValue(D,"sunShadowMap",yn.state.sunShadowMap,j),yn.state.directionalShadowMap.length>0&&Ue.setValue(D,"directionalShadowMap",yn.state.directionalShadowMap,j),yn.state.spotShadowMap.length>0&&Ue.setValue(D,"spotShadowMap",yn.state.spotShadowMap,j),yn.state.pointShadowMap.length>0&&Ue.setValue(D,"pointShadowMap",yn.state.pointShadowMap,j)),q.isSkinnedMesh){Ue.setOptional(D,q,"bindMatrix"),Ue.setOptional(D,q,"bindMatrixInverse");const ze=q.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),Ue.setValue(D,"boneTexture",ze.boneTexture,j))}q.isBatchedMesh&&(Ue.setOptional(D,q,"batchingTexture"),Ue.setValue(D,"batchingTexture",q._matricesTexture,j),Ue.setOptional(D,q,"batchingIdTexture"),Ue.setValue(D,"batchingIdTexture",q._indirectTexture,j),Ue.setOptional(D,q,"batchingColorTexture"),q._colorsTexture!==null&&Ue.setValue(D,"batchingColorTexture",q._colorsTexture,j));const Fi=J.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&k.update(q,J,kn),(Ni||Rt.receiveShadow!==q.receiveShadow)&&(Rt.receiveShadow=q.receiveShadow,Ue.setValue(D,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(Ke.envMapIntensity.value=F.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=N1()),Ni){if(Ue.setValue(D,"toneMappingExposure",R.toneMappingExposure),Rt.needsLights&&$d(Ke,Cs),Et&&X.fog===!0&&Ft.refreshFogUniforms(Ke,Et),Ft.refreshMaterialUniforms(Ke,X,nt,Z,w.state.transmissionRenderTarget[b.id]),Rt.needsLights&&Rt.lightProbeGrid){const ze=Rt.lightProbeGrid;Ke.probesSH.value=ze.texture,Ke.probesMin.value.copy(ze.boundingBox.min),Ke.probesMax.value.copy(ze.boundingBox.max),Ke.probesResolution.value.copy(ze.resolution)}ja.upload(D,Lh(Rt),Ke,j)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ja.upload(D,Lh(Rt),Ke,j),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ue.setValue(D,"center",q.center),Ue.setValue(D,"modelViewMatrix",q.modelViewMatrix),Ue.setValue(D,"normalMatrix",q.normalMatrix),Ue.setValue(D,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){const ze=X.uniformsGroups;for(let Oi=0,Ps=ze.length;Oi<Ps;Oi++){const Uh=ze[Oi];at.update(Uh,kn),at.bind(Uh,kn)}}return kn}function $d(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.sunLights.needsUpdate=F,b.sunLightShadows.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Yd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,F,J){const X=$.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),$.get(b.texture).__webglTexture=F,$.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){const J=$.get(b);J.__webglFramebuffer=F,J.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,J=0){L=b,O=F,B=J;let X=null,q=!1,Et=!1;if(b){const wt=$.get(b);if(wt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(D.FRAMEBUFFER,wt.__webglFramebuffer),Y.copy(b.viewport),dt.copy(b.scissor),pt=b.scissorTest,M.viewport(Y),M.scissor(dt),M.setScissorTest(pt),U=-1;return}else if(wt.__webglFramebuffer===void 0)j.setupRenderTarget(b);else if(wt.__hasExternalTextures)j.rebindTextures(b,$.get(b.texture).__webglTexture,$.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const re=b.depthTexture;if(wt.__boundDepthTexture!==re){if(re!==null&&$.has(re)&&(b.width!==re.image.width||b.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(b)}}const It=b.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Et=!0);const Nt=$.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Nt[F])?X=Nt[F][J]:X=Nt[F],q=!0):b.samples>0&&j.useMultisampledRTT(b)===!1?X=$.get(b).__webglMultisampledFramebuffer:Array.isArray(Nt)?X=Nt[J]:X=Nt,Y.copy(b.viewport),dt.copy(b.scissor),pt=b.scissorTest}else Y.copy(At).multiplyScalar(nt).floor(),dt.copy($t).multiplyScalar(nt).floor(),pt=Pe;if(J!==0&&(X=V),M.bindFramebuffer(D.FRAMEBUFFER,X)&&M.drawBuffers(b,X),M.viewport(Y),M.scissor(dt),M.setScissorTest(pt),q){const wt=$.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,wt.__webglTexture,J)}else if(Et){const wt=F;for(let It=0;It<b.textures.length;It++){const Nt=$.get(b.textures[It]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+It,Nt.__webglTexture,J,wt)}}else if(b!==null&&J!==0){const wt=$.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,wt.__webglTexture,J)}U=-1};function Dh(b){const F=$.get(b);return(F.__readFormat!==b.format||F.__readType!==b.type)&&(F.__readFormat=b.format,F.__readType=b.type,F.__formatReadable=C.textureFormatReadable(b.format),F.__typeReadable=C.textureTypeReadable(b.type)),F}this.readRenderTargetPixels=function(b,F,J,X,q,Et,Pt,wt=0){if(!(b&&b.isWebGLRenderTarget)){ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=$.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It){M.bindFramebuffer(D.FRAMEBUFFER,It);try{const Nt=b.textures[wt],re=Nt.format,pe=Nt.type;b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+wt);const Dt=Dh(Nt);if(Dt.__formatReadable===!1){ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-X&&J>=0&&J<=b.height-q&&D.readPixels(F,J,X,q,St.convert(re),St.convert(pe),Et)}finally{const Nt=L!==null?$.get(L).__webglFramebuffer:null;M.bindFramebuffer(D.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(b,F,J,X,q,Et,Pt,wt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=$.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It)if(F>=0&&F<=b.width-X&&J>=0&&J<=b.height-q){M.bindFramebuffer(D.FRAMEBUFFER,It);const Nt=b.textures[wt],re=Nt.format,pe=Nt.type;b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+wt);const Dt=Dh(Nt);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.bufferData(D.PIXEL_PACK_BUFFER,Et.byteLength,D.STREAM_READ),D.readPixels(F,J,X,q,St.convert(re),St.convert(pe),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const tn=L!==null?$.get(L).__webglFramebuffer:null;M.bindFramebuffer(D.FRAMEBUFFER,tn);const Ge=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await e0(D,Ge,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Et),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Te),D.deleteSync(Ge),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,J=0){const X=Math.pow(2,-J),q=Math.floor(b.image.width*X),Et=Math.floor(b.image.height*X),Pt=F!==null?F.x:0,wt=F!==null?F.y:0;j.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,J,0,0,Pt,wt,q,Et),M.unbindTexture()},this.copyTextureToTexture=function(b,F,J=null,X=null,q=0,Et=0){let Pt,wt,It,Nt,re,pe,Dt,Te,tn;const Ge=b.isCompressedTexture?b.mipmaps[Et]:b.image;if(J!==null)Pt=J.max.x-J.min.x,wt=J.max.y-J.min.y,It=J.isBox3?J.max.z-J.min.z:1,Nt=J.min.x,re=J.min.y,pe=J.isBox3?J.min.z:0;else{const Ke=Math.pow(2,-q);Pt=Math.floor(Ge.width*Ke),wt=Math.floor(Ge.height*Ke),b.isDataArrayTexture?It=Ge.depth:b.isData3DTexture?It=Math.floor(Ge.depth*Ke):It=1,Nt=0,re=0,pe=0}X!==null?(Dt=X.x,Te=X.y,tn=X.z):(Dt=0,Te=0,tn=0);const Ne=St.convert(F.format),dn=St.convert(F.type);let Rt;F.isData3DTexture?(j.setTexture3D(F,0),Rt=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(j.setTexture2DArray(F,0),Rt=D.TEXTURE_2D_ARRAY):(j.setTexture2D(F,0),Rt=D.TEXTURE_2D),M.activeTexture(D.TEXTURE0),M.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),M.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),M.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const yn=M.getParameter(D.UNPACK_ROW_LENGTH),_e=M.getParameter(D.UNPACK_IMAGE_HEIGHT),kn=M.getParameter(D.UNPACK_SKIP_PIXELS),ci=M.getParameter(D.UNPACK_SKIP_ROWS),Ni=M.getParameter(D.UNPACK_SKIP_IMAGES);M.pixelStorei(D.UNPACK_ROW_LENGTH,Ge.width),M.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ge.height),M.pixelStorei(D.UNPACK_SKIP_PIXELS,Nt),M.pixelStorei(D.UNPACK_SKIP_ROWS,re),M.pixelStorei(D.UNPACK_SKIP_IMAGES,pe);const Cs=b.isDataArrayTexture||b.isData3DTexture,Ue=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){const Ke=$.get(b),Fi=$.get(F),ze=$.get(Ke.__renderTarget),Oi=$.get(Fi.__renderTarget);M.bindFramebuffer(D.READ_FRAMEBUFFER,ze.__webglFramebuffer),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Ps=0;Ps<It;Ps++)Cs&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$.get(b).__webglTexture,q,pe+Ps),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$.get(F).__webglTexture,Et,tn+Ps)),D.blitFramebuffer(Nt,re,Pt,wt,Dt,Te,Pt,wt,D.DEPTH_BUFFER_BIT,D.NEAREST);M.bindFramebuffer(D.READ_FRAMEBUFFER,null),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||$.has(b)){const Ke=$.get(b),Fi=$.get(F);M.bindFramebuffer(D.READ_FRAMEBUFFER,z),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,W);for(let ze=0;ze<It;ze++)Cs?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ke.__webglTexture,q,pe+ze):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ke.__webglTexture,q),Ue?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Fi.__webglTexture,Et,tn+ze):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Fi.__webglTexture,Et),q!==0?D.blitFramebuffer(Nt,re,Pt,wt,Dt,Te,Pt,wt,D.COLOR_BUFFER_BIT,D.NEAREST):Ue?D.copyTexSubImage3D(Rt,Et,Dt,Te,tn+ze,Nt,re,Pt,wt):D.copyTexSubImage2D(Rt,Et,Dt,Te,Nt,re,Pt,wt);M.bindFramebuffer(D.READ_FRAMEBUFFER,null),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ue?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Rt,Et,Dt,Te,tn,Pt,wt,It,Ne,dn,Ge.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Rt,Et,Dt,Te,tn,Pt,wt,It,Ne,Ge.data):D.texSubImage3D(Rt,Et,Dt,Te,tn,Pt,wt,It,Ne,dn,Ge):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Et,Dt,Te,Pt,wt,Ne,dn,Ge.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Et,Dt,Te,Ge.width,Ge.height,Ne,Ge.data):D.texSubImage2D(D.TEXTURE_2D,Et,Dt,Te,Pt,wt,Ne,dn,Ge);M.pixelStorei(D.UNPACK_ROW_LENGTH,yn),M.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_e),M.pixelStorei(D.UNPACK_SKIP_PIXELS,kn),M.pixelStorei(D.UNPACK_SKIP_ROWS,ci),M.pixelStorei(D.UNPACK_SKIP_IMAGES,Ni),Et===0&&F.generateMipmaps&&D.generateMipmap(Rt),M.unbindTexture()},this.initRenderTarget=function(b){$.get(b).__webglFramebuffer===void 0&&j.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?j.setTextureCube(b,0):b.isData3DTexture?j.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?j.setTexture2DArray(b,0):j.setTexture2D(b,0),M.unbindTexture()},this.resetState=function(){O=0,B=0,L=null,M.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}}class O1 extends Qf{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new Se;t.deleteAttribute("uv");const e=new Cn({side:_n}),n=new Cn,s=new Um(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Q(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new oi(t,n,6),o=new Qe;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new Q(t,Zs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Q(t,Zs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new Q(t,Zs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const f=new Q(t,Zs(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const u=new Q(t,Zs(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const d=new Q(t,Zs(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Zs(i){return new Am({color:0,emissive:16777215,emissiveIntensity:i})}const B1=.42,z1=.45,k1=.28,G1=.3,W1=1.75,Zr=Math.PI*2,bl=i=>(i%Zr+Zr)%Zr;class H1{constructor(){cn(this,"walls",[]);cn(this,"surfaces",[]);cn(this,"blocks",[]);cn(this,"grid",new Map);cn(this,"G",2);cn(this,"hs",[])}addWall(t,e,n,s,r,a){if(a<=r||Math.abs(t-n)<1e-6&&Math.abs(e-s)<1e-6)return;const o={ax:t,az:e,bx:n,bz:s,y0:r,y1:a};this.walls.push(o);const l=this.G,c=Math.floor(Math.min(t,n)/l-.5),h=Math.floor(Math.max(t,n)/l+.5),f=Math.floor(Math.min(e,s)/l-.5),u=Math.floor(Math.max(e,s)/l+.5);for(let d=c;d<=h;d++)for(let g=f;g<=u;g++){const v=`${d},${g}`;let p=this.grid.get(v);p||this.grid.set(v,p=[]),p.push(o)}}addBlock(t,e,n,s,r,a,o){this.blocks.push({x:t,z:e,c:Math.cos(r),s:-Math.sin(r),hw:n,hd:s,y0:a,y1:o})}heights(t,e,n){n.length=0;for(const s of this.surfaces)if(s.kind==="rect"){if(t<s.x0||t>s.x1||e<s.z0||e>s.z1||s.holes&&s.holes.some(r=>(t-r.x)**2+(e-r.z)**2<r.r*r.r))continue;if(s.ramp){const r=s.ramp,a=r.along==="x"?t:e,o=Math.max(0,Math.min(1,(a-r.a)/(r.b-r.a)));n.push(r.ya+(r.yb-r.ya)*o)}else n.push(s.y)}else if(s.kind==="sector"){const r=t-s.cx,a=e-s.cz,o=r*r+a*a;if(o<s.r0*s.r0||o>s.r1*s.r1)continue;bl(Math.atan2(a,r)-s.a0)<=bl(s.a1-s.a0)&&n.push(s.y)}else{const r=t-s.cx,a=e-s.cz,o=r*r+a*a;if(o<s.r0*s.r0||o>s.r1*s.r1)continue;const l=bl(Math.atan2(a,r)-s.theta0);if(l<s.landing||l>Zr-s.landing)continue;for(let c=0;c<s.turns;c++)n.push(s.y0+s.rise*(l+Zr*c))}return n}groundAt(t,e,n){let s=-1/0;for(const r of this.heights(t,e,this.hs))r<=n+B1&&r>=n-z1&&r>s&&(s=r);return s===-1/0?null:s}collide(t,e,n=k1){const s=e+G1,r=e+W1;for(let a=0;a<3;a++){const o=this.G,l=Math.floor(t.x/o),c=Math.floor(t.z/o),h=new Set;for(let u=l-1;u<=l+1;u++)for(let d=c-1;d<=c+1;d++){const g=this.grid.get(`${u},${d}`);if(g)for(const v of g){if(h.has(v)||(h.add(v),v.y1<=s||v.y0>=r))continue;const p=v.bx-v.ax,m=v.bz-v.az,S=p*p+m*m,E=Math.max(0,Math.min(1,((t.x-v.ax)*p+(t.z-v.az)*m)/S)),_=v.ax+p*E,y=v.az+m*E,w=t.x-_,A=t.z-y,x=w*w+A*A;if(x>=n*n)continue;const T=Math.sqrt(x);if(T>1e-6)t.x=_+w/T*n,t.z=y+A/T*n;else{const R=Math.sqrt(S);t.x=_-m/R*n,t.z=y+p/R*n}}}const f=n*.85;for(const u of this.blocks){if(u.y1<=s||u.y0>=r)continue;const d=t.x-u.x,g=t.z-u.z;if(Math.abs(d)>u.hw+u.hd+f||Math.abs(g)>u.hw+u.hd+f)continue;const v=d*u.c+g*u.s,p=-d*u.s+g*u.c,m=Math.max(-u.hw,Math.min(u.hw,v)),S=Math.max(-u.hd,Math.min(u.hd,p));let E=v-m,_=p-S;const y=Math.hypot(E,_);if(y>=f)continue;let w,A;if(y>1e-6)E/=y,_/=y,w=m+E*f,A=S+_*f;else{const x=[v+u.hw,u.hw-v,p+u.hd,u.hd-p],T=Math.min(...x);w=T===x[0]?-u.hw-f:T===x[1]?u.hw+f:v,A=T===x[2]?-u.hd-f:T===x[3]?u.hd+f:p}t.x=u.x+w*u.c-A*u.s,t.z=u.z+w*u.s+A*u.c}}}move(t,e,n,s,r){const a=(c,h)=>{const f={x:c,z:h};let u=this.groundAt(f.x,f.z,n);return u===null||(this.collide(f,u),u=this.groundAt(f.x,f.z,n),u===null)?null:{x:f.x,z:f.z,feet:u}},o=Math.max(1,Math.ceil(Math.hypot(s,r)/.12));let l={x:t,z:e,feet:n};for(let c=0;c<o;c++){const h=s/o,f=r/o,u=a(l.x+h,l.z+f)??a(l.x+h,l.z)??a(l.x,l.z+f);if(!u)break;l=u,n=u.feet}return l}}function an(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new je;let c=0;for(let h=0;h<i.length;++h){const f=i[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const f=[];for(let u=0;u<i.length;++u){const d=i[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(const h in r){const f=Vu(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let v=0;v<a[h].length;++v)d.push(a[h][v][u]);const g=Vu(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Vu(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new $n(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<e;g++){const v=h.getComponent(u,g);o.setComponent(u+f,g,v)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}const De=[0,3.9,7.8,11.7],gi=3.6,Ae=.1,xe=i=>({ceil:"plain",ceilColor:"#e9e4da",light:"#ffd9a8",bright:1,cats:[],rail:"brass",trim:"#1a1714",...i}),Td=[xe({id:"gold",name:"The Gold Room",lv:0,x0:-5,x1:5,d0:0,d1:6,wall:"ivoryPanel",floor:"marbleW",ceil:"gold",ceilColor:"#f3ead6",light:"#ffe2b0",bright:.95,cats:["sunglasses","scarf","belt","gloves","hat"],trim:"#e9dfc9"}),xe({id:"atrium",name:"The Atrium",lv:0,x0:-6,x1:6,d0:6,d1:20,h:7.5,wall:"deco",floor:"checker",ceilColor:"#15120f",light:"#ffcf8f",bright:1,cats:["gown","dress"],gender:"women",trim:"#0d0c0b",haze:"#0b0907"}),xe({id:"bags",name:"The Bag Salon",lv:0,x0:-13,x1:-6,d0:6,d1:14,wall:"pinkMono",floor:"triangles",ceil:"pyramids",ceilColor:"#e2457b",light:"#ffd4de",bright:1.15,cats:["bag"],trim:"#c73a6a",rail:"gold",haze:"#2a0a14"}),xe({id:"cabinet",name:"The Cabinet",lv:0,x0:-13,x1:-6,d0:14,d1:22,wall:"chinois",floor:"oakDark",ceilColor:"#163c40",light:"#ffd29a",bright:.9,cats:["hat","scarf","gloves","belt","sunglasses","bag"],trim:"#10292c",haze:"#061314"}),xe({id:"prints",name:"Prints & Flowers",lv:0,x0:6,x1:13,d0:6,d1:16,wall:"mural",floor:"oakLight",ceilColor:"#f1e2db",light:"#ffd9b0",bright:1.2,cats:["dress","skirt","top","shirt"],gender:"women",rail:"rattan",trim:"#e7cfc6",haze:"#2a1a16"}),xe({id:"denim",name:"Denim & Knits",lv:0,x0:6,x1:13,d0:16,d1:26,wall:"pinkPanel",floor:"polished",ceil:"coffer",ceilColor:"#ecc9c4",light:"#ffe0cc",bright:1.15,cats:["jeans","top","shirt","shorts","knit","cardigan"],gender:"women",rail:"black",trim:"#e2c0bb",haze:"#24181a"}),xe({id:"counter",name:"The Counter",lv:0,x0:-6,x1:6,d0:20,d1:26,wall:"navyLattice",floor:"greenMarble",ceilColor:"#101a2c",light:"#ffd49a",bright:1,cats:["blazer","jacket"],gender:"women",trim:"#0d1526",haze:"#070b14"}),xe({id:"knit",name:"The Knit Room",lv:0,x0:-13,x1:-6,d0:22,d1:30,wall:"oatStripe",floor:"wideOak",ceilColor:"#efe7da",light:"#ffdcb4",bright:1,cats:["knit","cardigan"],gender:"women",rail:"brass",trim:"#d9cbb3",haze:"#1e1712"}),xe({id:"evening",name:"Evening",lv:0,x0:-6,x1:6,d0:26,d1:34,wall:"damask",floor:"blackMarble",ceilColor:"#1a0a0e",light:"#ffc98a",bright:.9,cats:["dress","gown"],gender:"women",rail:"gold",trim:"#150608",haze:"#0d0406"}),xe({id:"coats",name:"The Coat Room",lv:0,x0:6,x1:13,d0:26,d1:40,wall:"palm",floor:"oakDark",ceilColor:"#0e2219",light:"#ffd7a0",bright:.95,cats:["coat","trench","jacket","blazer"],gender:"women",rail:"brass",trim:"#0a1a12",haze:"#050e09"}),xe({id:"fitting",name:"Fitting Rooms",lv:0,x0:-6,x1:6,d0:34,d1:40,wall:"redVelvet",floor:"carpetRed",ceilColor:"#2a070c",light:"#ffcf9a",bright:.85,cats:[],trim:"#1a0508",haze:"#0e0305"}),xe({id:"stair0",name:"The Spiral Stair",lv:0,x0:-13,x1:-6,d0:30,d1:40,wall:"greenVelvet",floor:"blackMarble",ceilColor:"#0f241b",light:"#ffd29a",bright:.85,cats:[],trim:"#0a160f",haze:"#050b08"}),xe({id:"bar",name:"The Bar",lv:1,x0:-6,x1:6,d0:20,d1:27,wall:"decoGreen",floor:"checker",ceilColor:"#0f2119",light:"#ffc985",bright:.85,cats:[],trim:"#0b1611",haze:"#050c08"}),xe({id:"archive",name:"The Archive",lv:1,x0:-6,x1:6,d0:27,d1:34,wall:"plum",floor:"oakDark",ceilColor:"#24101f",light:"#ffcf9e",bright:.85,cats:["jacket","skirt","trousers","blazer"],gender:"women",rail:"gold",trim:"#1a0b16",haze:"#0d050b"}),xe({id:"silk",name:"The Silk Room",lv:1,x0:6,x1:13,d0:20,d1:32,wall:"toile",floor:"carpetRose",ceilColor:"#efdcd8",light:"#ffd9c4",bright:1.05,cats:["dress","top","shirt","skirt","trousers","jumpsuit"],gender:"women",rail:"brass",trim:"#e5cbc6",haze:"#22141a"}),xe({id:"stair1",name:"The Spiral Stair",lv:1,x0:-13,x1:-6,d0:30,d1:40,wall:"greenVelvet",floor:"blackMarble",ceilColor:"#0f241b",light:"#ffd29a",bright:.8,cats:[],trim:"#0a160f",haze:"#050b08"}),xe({id:"window",name:"The Window Salon",lv:2,x0:-5,x1:5,d0:0,d1:6,wall:"pinkStripe",floor:"oakLight",ceilColor:"#f4e6e3",light:"#ffe4c8",bright:1.15,cats:["maryjane","slingback","sandal","flats"],gender:"women",trim:"#ead3cf"}),xe({id:"rotunda",name:"The Rotunda",lv:2,x0:-6,x1:6,d0:6,d1:20,wall:"ivoryPanel",floor:"marbleW",ceil:"coffer",ceilColor:"#efe7d8",light:"#ffe0b0",bright:1.2,cats:["flats","loafer","maryjane"],trim:"#e3d7c0"}),xe({id:"mules",name:"Mules & Sandals",lv:2,x0:-13,x1:-6,d0:6,d1:14,wall:"leopard",floor:"terrazzo",ceilColor:"#e8dccb",light:"#ffd8a8",bright:1.1,cats:["mule","sandal","platform"],trim:"#3a2614"}),xe({id:"sneakers",name:"The Sneaker Lab",lv:2,x0:-13,x1:-6,d0:14,d1:30,wall:"concrete",floor:"rubber",ceilColor:"#2a2a2a",light:"#e8f0ff",bright:1,cats:["sneaker"],trim:"#1a1a1a",haze:"#0b0c0e"}),xe({id:"boots",name:"The Boot Library",lv:2,x0:6,x1:13,d0:6,d1:20,wall:"walnut",floor:"oakDark",ceil:"beams",ceilColor:"#2b1a10",light:"#ffcf90",bright:.95,cats:["ankleboot","kneeboot","chelsea","tabi","boot"],trim:"#21140b",haze:"#0c0704"}),xe({id:"tryon",name:"The Try-On Bar",lv:2,x0:-6,x1:6,d0:20,d1:26,wall:"blackStripe",floor:"checker",ceilColor:"#f0ebe1",light:"#ffe2bc",bright:1.1,cats:["loafer","flats"],trim:"#141312"}),xe({id:"tunnel",name:"The Tunnel",lv:2,x0:-2.4,x1:2.4,d0:26,d1:40,wall:"octagon",floor:"carpetCream",ceil:"none",ceilColor:"#efe6d6",light:"#fff0d8",bright:1.35,cats:["heels","slingback","pump","maryjane","flats","mule","sandal","platform","ankleboot"],gender:"women",trim:"#e6dccb"}),xe({id:"boudoir",name:"The Boudoir",lv:2,x0:6,x1:13,d0:20,d1:40,wall:"damaskRed",floor:"carpetRed",ceilColor:"#3a070e",light:"#ffc68c",bright:.9,cats:["heels","platform","slingback","pump","mule"],gender:"women",trim:"#2a050a",haze:"#120305"}),xe({id:"stair2",name:"The Spiral Stair",lv:2,x0:-13,x1:-6,d0:30,d1:40,wall:"greenVelvet",floor:"blackMarble",ceilColor:"#0f241b",light:"#ffd29a",bright:.8,cats:[],trim:"#0a160f",haze:"#050b08"}),xe({id:"atelier",name:"The Atelier",lv:3,x0:-5,x1:5,d0:0,d1:6,wall:"greyPanel",floor:"oakLight",ceilColor:"#e8e5df",light:"#fff0dc",bright:1.15,cats:["gown","dress"],gender:"women",trim:"#9c9891"}),xe({id:"conservatory",name:"The Conservatory",lv:3,x0:-6,x1:6,d0:6,d1:20,h:4.6,wall:"trellis",floor:"terracotta",ceil:"skylight",ceilColor:"#f4f6f2",light:"#fff6e8",bright:1.3,cats:["shirt","shorts","top","trousers","dress"],trim:"#dfe4da"}),xe({id:"study",name:"Vintage — Bags & Silk Scarves",lv:3,x0:-13,x1:-6,d0:6,d1:14,wall:"walnut",floor:"carpetGreen",ceilColor:"#2a1a10",light:"#ffcf8e",bright:.9,cats:["bag","scarf","belt","gloves","hat","sunglasses","heels","pump","slingback","flats","loafer","kneeboot","ankleboot","sandal","platform","mule","maryjane"],gender:"women",trim:"#1e120a",haze:"#0b0703",vintage:!0}),xe({id:"club",name:"Vintage Couture",lv:3,x0:-13,x1:-6,d0:14,d1:22,wall:"roseDamask",floor:"oakDark",ceilColor:"#2a1a1a",light:"#ffcc8a",bright:.9,cats:["jacket","blazer","coat","trench","dress","gown","skirt","top","shirt","knit","cardigan","trousers","suit","jumpsuit"],gender:"women",rail:"gold",trim:"#3a2020",haze:"#0d0606",vintage:!0}),xe({id:"seventies",name:"Vintage — The Seventies",lv:3,x0:-13,x1:-6,d0:22,d1:30,wall:"seventies",floor:"carpetRust",ceilColor:"#2a1608",light:"#ffc27a",bright:.9,cats:["dress","skirt","top","shirt","jeans","trousers","coat","jacket","knit","cardigan","jumpsuit","shorts","gown"],gender:"women",rail:"brass",trim:"#3a1e0a",haze:"#0e0703",vintage:!0}),xe({id:"jackets",name:"Jackets & Separates",lv:3,x0:6,x1:13,d0:6,d1:20,wall:"oxblood",floor:"polished",ceilColor:"#22090b",light:"#ffd0a0",bright:1,cats:["jacket","coat","blazer","trench","top","shirt","knit","skirt","trousers","jeans"],gender:"women",rail:"black",trim:"#160506",haze:"#0d0304"}),xe({id:"avant",name:"The Gallery",lv:3,x0:-6,x1:6,d0:20,d1:40,wall:"concreteDark",floor:"polished",ceilColor:"#1c1c1c",light:"#f2f4ff",bright:.85,cats:["jacket","coat","trousers","knit","shirt","dress","top","skirt"],rail:"chrome",trim:"#111",haze:"#060606"}),xe({id:"mens",name:"The Street",lv:3,x0:6,x1:13,d0:20,d1:40,wall:"blackStripe",floor:"terrazzo",ceilColor:"#e9e5dd",light:"#ffe6c8",bright:1.1,cats:["jeans","shirt","top","knit","cardigan","trousers","jacket","shorts","skirt"],gender:"women",rail:"black",trim:"#141312"}),xe({id:"stair3",name:"The Spiral Stair",lv:3,x0:-13,x1:-6,d0:30,d1:40,wall:"greenVelvet",floor:"blackMarble",ceilColor:"#0f241b",light:"#ffd29a",bright:.85,cats:[],trim:"#0a160f",haze:"#050b08"})],fr=i=>Td.find(t=>t.id===i),Jt=(i,t,e,n,s,r,a,o)=>({a:i,b:t,axis:e,at:n,from:s,to:r,lv:a,h:o}),uh=[Jt("street","gold","d",0,-4.35,-3.15,0,2.55),Jt("gold","atrium","d",6,-2.2,2.2,0,3.2),Jt("atrium","bags","x",-6,9,11,0),Jt("atrium","cabinet","x",-6,15.3,16.9,0),Jt("atrium","prints","x",6,7.2,9.2,0),Jt("atrium","counter","d",20,-2,2,0),Jt("bags","cabinet","d",14,-11,-9.5,0),Jt("cabinet","knit","d",22,-10.5,-9,0),Jt("knit","counter","x",-6,23,25,0),Jt("knit","evening","x",-6,27.5,29,0),Jt("knit","stair0","d",30,-12.5,-11.1,0),Jt("prints","denim","d",16,9,11,0),Jt("denim","counter","x",6,21,23,0),Jt("denim","coats","d",26,10,12,0),Jt("counter","evening","d",26,-1.5,1.5,0,3),Jt("evening","coats","x",6,30,32,0),Jt("evening","fitting","d",34,-4.2,-2.6,0),Jt("coats","fitting","x",6,36,38,0),Jt("evening","stair0","x",-6,30.4,31.9,0),Jt("atrium","bar","d",20,-2,2,1,2.9),Jt("bar","silk","x",6,22,24,1),Jt("bar","archive","d",27,1,2.6,1),Jt("archive","stair1","x",-6,30.5,32,1),Jt("silk","archive","x",6,29,30.6,1),Jt("stair2","sneakers","d",30,-12.5,-11.1,2),Jt("sneakers","tryon","x",-6,22,24,2),Jt("sneakers","mules","d",14,-10.5,-9,2),Jt("mules","rotunda","x",-6,9,11,2),Jt("rotunda","window","d",6,-2,2,2,3),Jt("rotunda","boots","x",6,12,14,2),Jt("rotunda","tryon","d",20,-1.5,1.5,2),Jt("boots","boudoir","d",20,9,11,2),Jt("boudoir","tryon","x",6,22.5,24,2),Jt("tryon","tunnel","d",26,-1.55,1.55,2,3),Jt("stair3","seventies","d",30,-12.5,-11.1,3),Jt("club","study","d",14,-10.5,-9,3),Jt("club","seventies","d",22,-10.5,-9,3),Jt("study","conservatory","x",-6,9,11,3),Jt("conservatory","atelier","d",6,-2,2,3,3),Jt("conservatory","jackets","x",6,12,14,3),Jt("conservatory","avant","d",20,-1.5,1.5,3),Jt("seventies","avant","x",-6,24,26,3),Jt("avant","mens","x",6,28,30,3),Jt("jackets","mens","d",20,9,11,3),Jt("stair3","avant","x",-6,30.4,31.9,3)],ei={x:-9.5,d:35,r:2.62,r0:.72,r1:2.5,top:De[3]+gi,theta0:Math.PI/2,landing:22*Math.PI/180},jt={x0:4.45,x1:5.9,d0:10.4,d1:17,y0:0,y1:De[1]},nn={x0:-5.9,x1:5.9,d0:17,d1:20},un={x:0,d:13,r:2.3},vo=[-3.2,0,3.2];let js=1;const Ct=()=>{js=js+1831565813|0;let i=Math.imul(js^js>>>15,1|js);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296},Uo=i=>{js=i},ee=(i,t)=>i+(t-i)*Ct();function ye(i,t=i){const e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}let Ad=8;const V1=i=>{Ad=i};function Ce(i,t=!0){const e=new ih(i);return e.wrapS=e.wrapT=oo,t&&(e.colorSpace=Pn),e.anisotropy=Ad,e}function Sn(i,t,e){for(const n of[-i,0,i])for(const s of[-t,0,t])e(n,s)}function Je(i,t,e,n){const s=i.getImageData(0,0,t,e),r=s.data;for(let a=0;a<r.length;a+=4){const o=(Ct()-.5)*n;r[a]+=o,r[a+1]+=o,r[a+2]+=o}i.putImageData(s,0,0)}const Xu=new Map;function qu(i="#0f0e0c",t="#b9965006"){const[n,s]=ye(512);s.fillStyle=i,s.fillRect(0,0,512,512);const r=t.slice(0,7);s.strokeStyle=r,s.lineWidth=2.2;const a=512/4;for(let o=-1;o<5;o++)for(let l=-1;l<5;l++){const c=l*a*2+(o%2?a:0),h=o*a;for(let f=1;f<=4;f++)s.beginPath(),s.arc(c,h+a,a*f/4,Math.PI,0),s.stroke();for(let f=0;f<=8;f++){const u=Math.PI+f/8*Math.PI;s.beginPath(),s.moveTo(c+Math.cos(u)*a*.25,h+a+Math.sin(u)*a*.25),s.lineTo(c+Math.cos(u)*a,h+a+Math.sin(u)*a),s.stroke()}}return Je(s,512,512,10),Ce(n)}function X1(){const[t,e]=ye(1024);e.fillStyle="#0c2219",e.fillRect(0,0,1024,1024);const n=["#174a33","#1f5e40","#2b7650","#13402c","#246b48","#33865a"];for(let s=0;s<26;s++){const r=Ct()*1024,a=Ct()*1024,o=ee(260,420),l=ee(70,120),c=ee(-.9,.9)+(Ct()<.5?Math.PI:0)*0,h=n[s%n.length];Sn(1024,1024,(f,u)=>{e.save(),e.translate(r+f,a+u),e.rotate(c),e.fillStyle=h,e.beginPath(),e.moveTo(0,0),e.bezierCurveTo(l,o*.2,l*.9,o*.8,0,o),e.bezierCurveTo(-l*.9,o*.8,-l,o*.2,0,0),e.fill(),e.strokeStyle="rgba(5,25,15,.55)",e.lineWidth=2;for(let d=1;d<14;d++){const g=d/14,v=o*g,p=l*Math.sin(Math.PI*g)*.95;e.beginPath(),e.moveTo(0,v),e.lineTo(p,v+18),e.moveTo(0,v),e.lineTo(-p,v+18),e.stroke()}e.strokeStyle="rgba(190,220,170,.35)",e.lineWidth=3,e.beginPath(),e.moveTo(0,-30),e.lineTo(0,o),e.stroke(),e.restore()})}return Je(e,1024,1024,8),Ce(t)}function yl(i,t,e){const[s,r]=ye(512);r.fillStyle=i,r.fillRect(0,0,512,512);const a=(o,l,c)=>{for(const h of[1,-1])r.save(),r.translate(o,l),r.scale(h*c,c),r.fillStyle=t,r.strokeStyle=e,r.lineWidth=1.6/c,r.beginPath(),r.moveTo(0,-120),r.bezierCurveTo(30,-100,60,-70,40,-40),r.bezierCurveTo(90,-60,110,-10,70,10),r.bezierCurveTo(100,30,90,80,50,70),r.bezierCurveTo(60,100,30,120,0,125),r.lineTo(0,90),r.bezierCurveTo(20,70,30,40,10,20),r.bezierCurveTo(40,0,30,-40,0,-50),r.closePath(),r.fill(),r.stroke(),r.beginPath(),r.ellipse(30,-5,10,22,.5,0,Math.PI*2),r.fillStyle=i,r.fill(),r.stroke(),r.beginPath(),r.moveTo(0,-140),r.bezierCurveTo(14,-150,18,-170,0,-180),r.stroke(),r.restore()};return Sn(512,512,(o,l)=>{a(512/2+o,512/2+l,1),a(o,l,1)}),Je(r,512,512,9),Ce(s)}function q1(){const[t,e]=ye(1024);e.fillStyle="#1b4a50",e.fillRect(0,0,1024,1024);const n=(r,a,o,l,c,h)=>{const f=r+Math.cos(o)*l,u=a+Math.sin(o)*l;if(e.strokeStyle="#3b2b20",e.lineWidth=c,e.lineCap="round",e.beginPath(),e.moveTo(r,a),e.quadraticCurveTo((r+f)/2+ee(-20,20),(a+u)/2+ee(-20,20),f,u),e.stroke(),h>0)for(let d=0;d<2;d++)n(f,u,o+ee(-.8,.8),l*ee(.55,.75),c*.65,h-1);else for(let d=0;d<4;d++){const g=f+ee(-14,14),v=u+ee(-14,14);e.fillStyle=Ct()<.5?"#f1d2d4":"#f7f0e6";for(let p=0;p<5;p++)e.beginPath(),e.arc(g+Math.cos(p*1.256)*5,v+Math.sin(p*1.256)*5,4.5,0,7),e.fill();e.fillStyle="#d9a441",e.beginPath(),e.arc(g,v,2.4,0,7),e.fill()}},s=(r,a,o,l)=>{e.save(),e.translate(r,a),e.scale(o,o),e.fillStyle=l,e.beginPath(),e.ellipse(0,0,26,13,-.2,0,7),e.fill(),e.beginPath(),e.arc(22,-10,9,0,7),e.fill(),e.beginPath(),e.moveTo(-22,2),e.lineTo(-62,16),e.lineTo(-58,4),e.closePath(),e.fill(),e.fillStyle="#e7b04a",e.beginPath(),e.moveTo(30,-11),e.lineTo(40,-8),e.lineTo(30,-6),e.fill(),e.fillStyle="rgba(255,255,255,.35)",e.beginPath(),e.ellipse(-4,-2,14,6,-.3,0,7),e.fill(),e.restore()};for(const[r,a]of[[80,1e3],[600,1010],[330,520],[860,480]])for(const o of[-1024,0,1024])for(const l of[-1024,0])n(r+o,a+l,-Math.PI/2+ee(-.4,.4),260,14,3);for(const[r,a,o]of[[260,300,"#e8e2d2"],[740,760,"#c77a5a"],[520,140,"#d9e0e6"]])Sn(1024,1024,(l,c)=>s(r+l,a+c,.9,o));return Je(e,1024,1024,8),Ce(t)}function $1(i,t){const[n,s]=ye(256);return s.fillStyle=i,s.fillRect(0,0,256,256),s.strokeStyle=t,s.fillStyle=t,s.lineWidth=2.5,Sn(256,256,(r,a)=>{s.beginPath(),s.moveTo(r,a+256/2),s.lineTo(r+256/2,a),s.lineTo(r+256,a+256/2),s.lineTo(r+256/2,a+256),s.closePath(),s.stroke()}),s.font='italic 500 34px "Bodoni Moda", serif',s.textAlign="center",s.textBaseline="middle",Sn(256,256,(r,a)=>{s.fillText("Q",r+256/2,a+256/2),s.fillText("Q",r,a)}),Sn(256,256,(r,a)=>{for(const[o,l]of[[256/4,256/4],[3*256/4,3*256/4],[3*256/4,256/4],[256/4,3*256/4]])s.beginPath(),s.arc(r+o,a+l,3,0,7),s.fill()}),Je(s,256,256,6),Ce(n)}function Y1(){const[t,e]=ye(1024);e.fillStyle="#ecd6cf",e.fillRect(0,0,1024,1024);const n=(r,a,o,l,c)=>{e.save(),e.translate(r,a),e.rotate(o),e.scale(l,l),e.fillStyle=c,e.beginPath(),e.moveTo(0,0),e.quadraticCurveTo(18,30,0,64),e.quadraticCurveTo(-18,30,0,0),e.fill(),e.restore()},s=(r,a,o,l)=>{for(let c=0;c<7;c++)e.save(),e.translate(r,a),e.rotate(c*.9),e.fillStyle=l,e.beginPath(),e.ellipse(0,16*o,8*o,18*o,0,0,7),e.fill(),e.restore();e.fillStyle="#f2c94c",e.beginPath(),e.arc(r,a,6*o,0,7),e.fill()};for(let r=0;r<9;r++){let a=Ct()*1024,o=Ct()*1024,l=ee(0,6.28);const c=["#6f9c79","#4f7d5f","#8db58f"];Sn(1024,1024,(h,f)=>{e.strokeStyle="#5b7f5f",e.lineWidth=3,e.beginPath(),e.moveTo(a+h,o+f);let u=a,d=o,g=l;for(let v=0;v<9;v++){g+=ee(-.5,.5);const p=u+Math.cos(g)*32,m=d+Math.sin(g)*32;e.lineTo(p+h,m+f),n(p+h,m+f,g+1.2,.6,c[v%3]),n(p+h,m+f,g-1.9,.5,c[(v+1)%3]),u=p,d=m}e.stroke(),s(u+h,d+f,ee(.8,1.3),["#e8706b","#5d7fc4","#f1a7c0","#ffffff"][r%4])})}return Je(e,1024,1024,6),Ce(t)}function wl(i,t,e,n=3.6,s=1.2,r=!1){const o=Math.round(512*n/s),[l,c]=ye(512,o),h=512/s;c.fillStyle=i,c.fillRect(0,0,512,o);const f=(v,p,m,S)=>{c.lineWidth=3,c.strokeStyle=e,c.strokeRect(v*h+2,p*h+2,(m-v)*h,(S-p)*h),c.strokeStyle=t,c.strokeRect(v*h,p*h,(m-v)*h,(S-p)*h),r&&(c.strokeStyle="#b69250",c.lineWidth=1.5,c.strokeRect(v*h+8,p*h+8,(m-v)*h-16,(S-p)*h-16))},u=.25,d=n-1;f(.12,u,s-.12,d-.15),f(.12,d+.15,s-.12,n-.25),c.fillStyle=e,c.fillRect(0,d*h,512,6),c.fillStyle=t,c.fillRect(0,d*h-4,512,4),Je(c,512,o,5);const g=Ce(l);return g.wrapT=qn,g}function El(i,t,e,n=2){const[r,a]=ye(256,64);for(let o=0;o<n;o++)a.fillStyle=o%2?t:i,a.fillRect(o*256/n,0,256/n+1,64);return Je(a,256,64,6),Ce(r)}function Z1(i,t){const[n,s]=ye(256);s.fillStyle=i,s.fillRect(0,0,256,256),s.strokeStyle=t,s.lineWidth=3;for(const r of[0,256/2])Sn(256,256,(a,o)=>{s.beginPath(),s.moveTo(r+a,o),s.bezierCurveTo(r+a+256/4,o+256/6,r+a-256/4+256/2,o+256/3,r+a+256/4,o+256/2),s.bezierCurveTo(r+a,o+2*256/3,r+a+256/2,o+5*256/6,r+a,o+256),s.stroke(),s.beginPath(),s.moveTo(r+a,o),s.bezierCurveTo(r+a-256/4,o+256/6,r+a+256/4-256/2,o+256/3,r+a-256/4,o+256/2),s.bezierCurveTo(r+a,o+2*256/3,r+a-256/2,o+5*256/6,r+a,o+256),s.stroke()});return s.fillStyle=t,Sn(256,256,(r,a)=>{for(const[o,l]of[[0,0],[256/2,0],[256/4,256/2],[3*256/4,256/2]])s.beginPath(),s.arc(o+r,l+a,5,0,7),s.fill()}),Je(s,256,256,6),Ce(n)}function as(i,t=22){const[n,s]=ye(256);s.fillStyle=i,s.fillRect(0,0,256,256);for(let r=0;r<256;r++)s.fillStyle=`rgba(${Ct()<.5?"255,255,255":"0,0,0"},${Ct()*t/255})`,s.fillRect(r,0,1,256);return Je(s,256,256,10),Ce(n)}function J1(){const[t,e]=ye(1024);e.fillStyle="#ead1cb",e.fillRect(0,0,1024,1024),e.strokeStyle="#8e4a52",e.fillStyle="#8e4a52",e.lineWidth=2;const n=(r,a,o)=>{e.beginPath(),e.moveTo(r,a),e.lineTo(r,a-90*o),e.stroke();for(let l=0;l<26;l++){const c=Ct()*6.28,h=Ct()*50*o;e.beginPath(),e.arc(r+Math.cos(c)*h,a-120*o+Math.sin(c)*h*.7,ee(6,14)*o,0,7),e.stroke()}},s=(r,a)=>{e.beginPath(),e.moveTo(r-20,a),e.lineTo(r+20,a),e.lineTo(r+12,a-10),e.bezierCurveTo(r+36,a-40,r+30,a-70,r+16,a-76),e.lineTo(r-16,a-76),e.bezierCurveTo(r-30,a-70,r-36,a-40,r-12,a-10),e.closePath(),e.stroke();for(let o=0;o<8;o++)e.beginPath(),e.moveTo(r,a-76),e.quadraticCurveTo(r+ee(-40,40),a-110,r+ee(-50,50),a-ee(100,150)),e.stroke()};Sn(1024,1024,(r,a)=>{n(200+r,420+a,1.4),s(700+r,300+a),n(760+r,900+a,1.1),s(260+r,860+a)});for(let r=0;r<60;r++){const a=Ct()*1024,o=Ct()*1024;e.beginPath(),e.moveTo(a,o),e.quadraticCurveTo(a+8,o-6,a+16,o),e.stroke()}return Je(e,1024,1024,6),Ce(t)}function K1(i="#c3914f"){const[e,n]=ye(512);n.fillStyle=i,n.fillRect(0,0,512,512);for(let s=0;s<70;s++){const r=Ct()*512,a=Ct()*512,o=ee(10,20);Sn(512,512,(l,c)=>{n.fillStyle="#6e4420",n.beginPath(),n.ellipse(r+l,a+c,o*.9,o*.7,ee(0,3),0,7),n.fill(),n.fillStyle="#2a1a10";for(let h=0;h<5;h++){const f=h*1.25+ee(-.3,.3);n.beginPath(),n.ellipse(r+l+Math.cos(f)*o,a+c+Math.sin(f)*o*.8,o*.35,o*.2,f,0,7),n.fill()}})}return Je(n,512,512,10),Ce(e)}function Lr(i=128){const[e,n]=ye(1024);n.fillStyle=`rgb(${i},${i-2},${i-5})`,n.fillRect(0,0,1024,1024);for(let s=0;s<500;s++)n.fillStyle=`rgba(${Ct()<.5?"0,0,0":"255,255,255"},${ee(.01,.05)})`,n.beginPath(),n.ellipse(Ct()*1024,Ct()*1024,ee(10,120),ee(10,80),ee(0,3),0,7),n.fill();n.strokeStyle="rgba(0,0,0,.18)",n.lineWidth=2;for(let s=0;s<1024;s+=1024/8)n.beginPath(),n.moveTo(0,s),n.lineTo(1024,s+ee(-2,2)),n.stroke();n.fillStyle="rgba(30,30,30,.55)";for(const[s,r]of[[1024/4,1024/4],[3*1024/4,1024/4],[1024/4,3*1024/4],[3*1024/4,3*1024/4]])n.beginPath(),n.arc(s,r,9,0,7),n.fill();return Je(n,1024,1024,22),Ce(e)}function $u(i,t,e=8,n=!0){const[r,a]=ye(512),o=e;for(let c=0;c<o;c++){const h=c*512/o,f=a.createLinearGradient(h,0,h+512/o,0);f.addColorStop(0,i),f.addColorStop(ee(.3,.7),t),f.addColorStop(1,i),a.fillStyle=f,a.fillRect(h,0,512/o,512),a.strokeStyle="rgba(0,0,0,.18)",a.lineWidth=1;for(let u=0;u<14;u++){const d=h+Ct()*512/o;a.beginPath(),a.moveTo(d,0);for(let g=0;g<=512;g+=32)a.lineTo(d+Math.sin(g/60+u)*4,g);a.stroke()}a.fillStyle="rgba(0,0,0,.45)",a.fillRect(h,0,2,512)}Je(a,512,512,10);const l=Ce(r);return n||(l.rotation=Math.PI/2),l}function Yu(){const[t,e]=ye(256);e.fillStyle="#123a2a",e.fillRect(0,0,256,256);const n=(s,r,a,o)=>{e.fillStyle=a,e.globalAlpha=o,e.fillRect(s,0,r,256),e.fillRect(0,s,256,r),e.globalAlpha=1};n(0,70,"#0f2340",.75),n(128,70,"#0f2340",.75),n(96,6,"#b22e2e",.9),n(224,6,"#b22e2e",.9),n(60,3,"#d8b54a",.8),n(188,3,"#d8b54a",.8),n(30,14,"#000",.35),e.strokeStyle="rgba(0,0,0,.18)",e.lineWidth=1;for(let s=-256;s<256;s+=4)e.beginPath(),e.moveTo(s,0),e.lineTo(s+256,256),e.stroke();return Ce(t)}function Q1(){const[t,e]=ye(512);e.fillStyle="#eef0ea",e.fillRect(0,0,512,512),e.strokeStyle="#c7cfc2",e.lineWidth=6;for(let n=-512;n<2*512;n+=64)e.beginPath(),e.moveTo(n,0),e.lineTo(n+512,512),e.stroke(),e.beginPath(),e.moveTo(n,512),e.lineTo(n+512,0),e.stroke();for(let n=0;n<160;n++){const s=Ct()*512,r=Ct()*512;Sn(512,512,(a,o)=>{e.fillStyle=["#3f6b45","#557f4f","#2f5636"][n%3],e.save(),e.translate(s+a,r+o),e.rotate(Ct()*6.28),e.beginPath(),e.moveTo(0,0),e.bezierCurveTo(10,-6,16,6,0,16),e.bezierCurveTo(-16,6,-10,-6,0,0),e.fill(),e.restore()})}return Je(e,512,512,6),Ce(t)}function j1(){const[t,e]=ye(512);e.fillStyle="#3a2210",e.fillRect(0,0,512,512);const n=["#e07a2a","#f2b544","#8a4a1c","#f4e2c0","#c8541e"],s=(r,a)=>{for(let o=0;o<n.length;o++)e.fillStyle=n[o],e.beginPath(),e.arc(r,a,512/4*(1-o/n.length)-2,0,7),e.fill()};return Sn(512,512,(r,a)=>{s(r+512/4,a+512/4),s(r+3*512/4,a+3*512/4)}),e.fillStyle="#2a1608",Sn(512,512,(r,a)=>{for(const[o,l]of[[3*512/4,512/4],[512/4,3*512/4]])e.beginPath(),e.arc(r+o,a+l,512/10,0,7),e.fill()}),Je(e,512,512,10),Ce(t)}function vs(i,t,e=1024){const[n,s]=ye(e);s.fillStyle=i,s.fillRect(0,0,e,e);for(let r=0;r<300;r++)s.fillStyle=`rgba(${Ct()<.5?"0,0,0":"255,255,255"},${ee(.01,.04)})`,s.beginPath(),s.ellipse(Ct()*e,Ct()*e,ee(20,160),ee(10,90),ee(0,3),0,7),s.fill();for(let r=0;r<14;r++){let a=Ct()*e,o=Ct()*e,l=ee(0,6.28);s.strokeStyle=t,s.globalAlpha=ee(.15,.6),s.lineWidth=ee(.6,2.6),Sn(e,e,(c,h)=>{s.beginPath(),s.moveTo(a+c,o+h);let f=a,u=o,d=l;for(let g=0;g<40;g++)d+=ee(-.35,.35),f+=Math.cos(d)*18,u+=Math.sin(d)*18,s.lineTo(f+c,u+h);s.stroke()})}return s.globalAlpha=1,Je(s,e,e,6),n}function tM(i,t,e,n,s=4){const[a,o]=ye(1024),l=vs(i,e,512),c=vs(t,n,512),h=1024/s;for(let f=0;f<s;f++)for(let u=0;u<s;u++)o.drawImage((f+u)%2?c:l,Ct()*256,Ct()*256,h,h,f*h,u*h,h,h),o.strokeStyle="rgba(0,0,0,.3)",o.lineWidth=2,o.strokeRect(f*h,u*h,h,h);return Ce(a)}function eM(){const[t,e]=ye(1024),n=vs("#efe9e2","#9a8f86",512),s=vs("#151413","#6b6762",512),r=1024/4;for(let a=0;a<4;a++)for(let o=0;o<4;o++){const l=a*r,c=o*r,h=(a+o)%2,f=(u,d)=>{e.save(),e.beginPath(),e.moveTo(u[0][0],u[0][1]);for(const g of u.slice(1))e.lineTo(g[0],g[1]);e.closePath(),e.clip(),e.drawImage(d,Ct()*200,Ct()*200,r,r,l,c,r,r),e.restore(),e.strokeStyle="rgba(0,0,0,.35)",e.lineWidth=1.5,e.beginPath(),e.moveTo(u[0][0],u[0][1]);for(const g of u.slice(1))e.lineTo(g[0],g[1]);e.closePath(),e.stroke()};h?(f([[l,c],[l+r,c],[l,c+r]],n),f([[l+r,c],[l+r,c+r],[l,c+r]],s)):(f([[l,c],[l+r,c],[l+r,c+r]],s),f([[l,c],[l+r,c+r],[l,c+r]],n))}return Ce(t)}function Zu(i,t){const[n,s]=ye(1024);s.fillStyle=i,s.fillRect(0,0,1024,1024);const r=256,a=64,o=(h,f,u)=>{s.save(),s.translate(h,f),s.rotate(u);const d=s.createLinearGradient(0,0,r,0),g=ee(-12,12);d.addColorStop(0,Jr(t,g-8)),d.addColorStop(.5,Jr(t,g+6)),d.addColorStop(1,Jr(t,g-4)),s.fillStyle=d,s.fillRect(0,0,r,a),s.strokeStyle="rgba(60,30,10,.18)",s.lineWidth=1;for(let v=0;v<6;v++){const p=Ct()*a;s.beginPath(),s.moveTo(0,p),s.bezierCurveTo(r/3,p+ee(-6,6),2*r/3,p+ee(-6,6),r,p+ee(-3,3)),s.stroke()}s.strokeStyle="rgba(0,0,0,.4)",s.strokeRect(0,0,r,a),s.restore()},l=a*Math.SQRT2,c=r/Math.SQRT2;for(let h=-2;h<1024/c+2;h++)for(let f=-4;f<1024/l+4;f++){const u=h*c*2,d=f*l;Sn(1024,1024,(g,v)=>{o(u+g,d+v,Math.PI/4),o(u+c*2+g-.5,d+v+.5,3*Math.PI/4)})}return Je(s,1024,1024,8),Ce(n)}function Jr(i,t){const e=parseInt(i.slice(1),16),n=s=>Math.max(0,Math.min(255,s+t));return`rgb(${n(e>>16)},${n(e>>8&255)},${n(e&255)})`}function Ju(i,t){const[n,s]=ye(1024);s.fillStyle=i,s.fillRect(0,0,1024,1024);for(let r=0;r<2600;r++){const a=Ct()*1024,o=Ct()*1024,l=Ct()<.08?ee(8,22):ee(2,7);s.fillStyle=t[r%t.length],s.beginPath();const c=5+r%3;for(let h=0;h<c;h++){const f=h/c*6.28,u=l*ee(.6,1.1),d=a+Math.cos(f)*u,g=o+Math.sin(f)*u;h?s.lineTo(d,g):s.moveTo(d,g)}s.closePath(),s.fill()}return Je(s,1024,1024,8),Ce(n)}function Ha(i,t){const[n,s]=ye(512);if(s.fillStyle=i,s.fillRect(0,0,512,512),t==="fleur"){s.fillStyle="rgba(255,215,140,.18)";for(let r=0;r<4;r++)for(let a=0;a<4;a++){const o=r*128+a%2*64,l=a*128;s.beginPath(),s.arc(o,l,10,0,7),s.fill();for(let c=0;c<4;c++)s.beginPath(),s.ellipse(o+Math.cos(c*1.57)*18,l+Math.sin(c*1.57)*18,8,4,c*1.57,0,7),s.fill()}}return Je(s,512,512,26),Ce(n)}function Ku(i,t){const[n,s]=ye(512);s.fillStyle=t,s.fillRect(0,0,512,512);const r=512/4;for(let a=0;a<4;a++)for(let o=0;o<4;o++)s.fillStyle=Jr(i,ee(-14,14)),s.fillRect(a*r+3,o*r+3,r-6,r-6);return Je(s,512,512,12),Ce(n)}function An(i){const t=Xu.get(i);if(t)return t;Uo([...i].reduce((n,s)=>n*31+s.charCodeAt(0),7)|0);let e;switch(i){case"deco":e={tex:qu(),w:.62,h:.62,rough:.55};break;case"decoGreen":e={tex:qu("#0f2a22","#c2a15a"),w:.62,h:.62,rough:.55};break;case"palm":e={tex:X1(),w:1.5,h:1.5,rough:.7};break;case"damask":e={tex:yl("#3b0e18","#57202b","#8a5a3a"),w:.6,h:.6,rough:.6};break;case"roseDamask":e={tex:yl("#b98f8c","#a77f7c","#e2c6a8"),w:.6,h:.6,rough:.7};break;case"seventies":e={tex:j1(),w:.6,h:.6,rough:.6};break;case"carpetRust":e={tex:Ha("#7a3418"),w:1.2,h:1.2,rough:1};break;case"damaskRed":e={tex:yl("#5e0c16","#741722","#c49a52"),w:.6,h:.6,rough:.55};break;case"chinois":e={tex:q1(),w:1.3,h:1.3,rough:.7};break;case"pinkMono":e={tex:$1("#dd4377","#c9346a"),w:.32,h:.32,rough:.5};break;case"mural":e={tex:Y1(),w:2.2,h:2.2,rough:.85};break;case"pinkPanel":e={tex:wl("#e8c8c4","#f6dfdc","#c9a6a2"),w:1.2,h:3.6,full:!0,rough:.8};break;case"ivoryPanel":e={tex:wl("#e3d8c3","#efe6d4","#c2b59c",3.6,1.2,!0),w:1.2,h:3.6,full:!0,rough:.75};break;case"greyPanel":e={tex:wl("#a7a49e","#bcb9b3","#8a8780",3.6,1.3),w:1.3,h:3.6,full:!0,rough:.8};break;case"navyLattice":e={tex:Z1("#14213b","#b8955a"),w:.42,h:.42,rough:.6};break;case"oatStripe":e={tex:El("#e7dcc8","#d4c4a8"),w:.3,h:.3,rough:.85};break;case"blackStripe":e={tex:El("#f0ebe1","#141312"),w:.32,h:.32,rough:.7};break;case"pinkStripe":e={tex:El("#f2d9d6","#e7b9b6"),w:.2,h:.2,rough:.8};break;case"plum":e={tex:as("#3a1734"),w:.8,h:.8,rough:.9};break;case"redVelvet":e={tex:as("#5a0b14"),w:.8,h:.8,rough:.9};break;case"greenVelvet":e={tex:as("#123326"),w:.8,h:.8,rough:.9};break;case"oxblood":e={tex:as("#3e1013",14),w:.8,h:.8,rough:.7};break;case"toile":e={tex:J1(),w:.7,h:.7,rough:.85};break;case"leopard":e={tex:K1(),w:.55,h:.55,rough:.8};break;case"concrete":e={tex:Lr(),w:2.4,h:2.4,rough:.9};break;case"concreteDark":e={tex:Lr(70),w:2.4,h:2.4,rough:.9};break;case"walnut":e={tex:$u("#3a2416","#5c3a22",6),w:1.2,h:1.2,rough:.55};break;case"tartan":e={tex:Yu(),w:.38,h:.38,rough:.9};break;case"trellis":e={tex:Q1(),w:.9,h:.9,rough:.85};break;case"plaster":e={tex:as("#e9e4da",6),w:1,h:1,rough:.95};break;case"gallery":e={tex:as("#f1eee8",4),w:1,h:1,rough:.95};break;case"octagon":e={tex:as("#e6dccb",4),w:1,h:1,rough:.6};break;case"marbleW":e={tex:Ce(vs("#dedad2","#8f8a84")),w:2.4,h:2.4,rough:.18};break;case"blackMarble":e={tex:Ce(vs("#141312","#7c7468")),w:2.4,h:2.4,rough:.12};break;case"greenMarble":e={tex:Ce(vs("#123a2c","#9ec4ae")),w:2.4,h:2.4,rough:.12};break;case"checker":e={tex:tM("#ece6dc","#151413","#9a9188","#6a645c",4),w:2.4,h:2.4,rough:.15};break;case"triangles":e={tex:eM(),w:2.2,h:2.2,rough:.15};break;case"oakLight":e={tex:Zu("#6a4a2c","#c8a47a"),w:1.8,h:1.8,rough:.45};break;case"oakDark":e={tex:Zu("#2a170c","#6b4527"),w:1.8,h:1.8,rough:.4};break;case"wideOak":e={tex:$u("#9a7650","#b89268",4,!1),w:1.6,h:1.6,rough:.5};break;case"terrazzo":e={tex:Ju("#ece6dc",["#c9b8a6","#8f8277","#e3a89c","#5b5650","#f7f3ec"]),w:1.4,h:1.4,rough:.25};break;case"terrazzoPink":e={tex:Ju("#e9c8c2",["#c7928a","#f4e2dd","#8c6a64","#ffffff"]),w:1.4,h:1.4,rough:.25};break;case"polished":e={tex:Lr(150),w:3,h:3,rough:.28};break;case"rubber":e={tex:Lr(42),w:3,h:3,rough:.7};break;case"carpetRed":e={tex:Ha("#5c0f18","fleur"),w:1.2,h:1.2,rough:1};break;case"carpetRose":e={tex:Ha("#c9989a"),w:1.2,h:1.2,rough:1};break;case"carpetGreen":e={tex:Yu(),w:.8,h:.8,rough:1};break;case"carpetCream":e={tex:Ha("#e6dccb"),w:1.2,h:1.2,rough:1};break;case"terracotta":e={tex:Ku("#b8664a","#8a5643"),w:1.2,h:1.2,rough:.7};break;case"pavement":e={tex:Ku("#b7b2aa","#8c8780"),w:2.4,h:2.4,rough:.9};break;case"asphalt":e={tex:Lr(58),w:4,h:4,rough:.95};break;default:throw new Error(`no paper ${i}`)}return Xu.set(i,e),e}function to(i,t={}){const e=t.px??140,n=t.font??`500 ${e}px "Bodoni Moda", serif`,[s,r]=ye(8,8);r.font=n;const a=(t.tracking??.2)*e,o=[...i],l=o.map(p=>r.measureText(p).width),c=l.reduce((p,m)=>p+m,0)+a*(o.length-1),h=t.w??Math.ceil(c+e*.6),f=t.h??Math.ceil(e*1.5),[u,d]=ye(h,f);d.font=n,d.textBaseline="middle";let g=(h-c)/2;d.fillStyle=t.color??"#fff",o.forEach((p,m)=>{t.stroke&&(d.strokeStyle=t.stroke,d.lineWidth=e*.05,d.strokeText(p,g,f/2+e*.05)),d.fillText(p,g,f/2+e*.05),g+=l[m]+a});const v=Ce(u);return v.wrapS=v.wrapT=qn,{tex:v,aspect:h/f}}let Va=null;function nM(){if(Va)return Va;const i=128,[t,e]=ye(i),n=e.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,.55)"),n.addColorStop(.6,"rgba(255,255,255,.14)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,i,i),Va=new ih(t),Va}function iM(){const[i,t]=ye(16,256),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"#c9d2dc"),e.addColorStop(.5,"#e4e7ea"),e.addColorStop(1,"#eceae6"),t.fillStyle=e,t.fillRect(0,0,16,256);const n=new ih(i);return n.colorSpace=Pn,n}function sM(i="#a9876a"){const[e,n]=ye(512);n.fillStyle="#cfc6b8",n.fillRect(0,0,512,512);const s=64,r=21;for(let a=0;a*r<512;a++)for(let o=-1;o*s<512;o++)n.fillStyle=Jr(i,ee(-22,18)),n.fillRect(o*s+(a%2?s/2:0)+2,a*r+2,s-4,r-4);return Je(n,512,512,14),Ce(e)}const Ir=new P;function Wn(i,t,e,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Ir.copy(t),Ir[n]=0,Ir.normalize();const c=.5*a/(a+o),h=1-Ir.angleTo(i)/l;return Math.sign(Ir[e])===1?h*c:o/(a+o)+c+c*(1-h)}class No extends Se{constructor(t=1,e=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new P,c=new P,h=new P(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,v=new P,p=.5/a;for(let m=0,S=0;m<f.length;m+=3,S+=2)switch(l.fromArray(f,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),f[m+0]=h.x*Math.sign(l.x)+c.x*r,f[m+1]=h.y*Math.sign(l.y)+c.y*r,f[m+2]=h.z*Math.sign(l.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/g)){case 0:v.set(1,0,0),d[S+0]=Wn(v,c,"z","y",r,n),d[S+1]=1-Wn(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),d[S+0]=1-Wn(v,c,"z","y",r,n),d[S+1]=1-Wn(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),d[S+0]=1-Wn(v,c,"x","z",r,t),d[S+1]=Wn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),d[S+0]=1-Wn(v,c,"x","z",r,t),d[S+1]=1-Wn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),d[S+0]=1-Wn(v,c,"x","y",r,t),d[S+1]=1-Wn(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),d[S+0]=Wn(v,c,"x","y",r,t),d[S+1]=1-Wn(v,c,"y","x",r,e);break}}static fromJSON(t){return new No(t.width,t.height,t.depth,t.segments,t.radius)}}const Qu=new Map;function Lt(i,t){let e=Qu.get(i);return e||(e=t(),Qu.set(i,e)),e}const ie=(i,t=.6,e=0,n=.35)=>new Cn({color:i,roughness:t,metalness:e,envMapIntensity:n}),K={brass:()=>Lt("brass",()=>ie("#c9a35b",.28,1,1)),gold:()=>Lt("gold",()=>ie("#d8b263",.18,1,1.15)),chrome:()=>Lt("chrome",()=>ie("#d9dde2",.12,1,1)),blackMetal:()=>Lt("blackMetal",()=>ie("#151515",.45,.7,.5)),glass:()=>Lt("glass",()=>new Cn({color:"#cfe0e0",roughness:.05,metalness:.1,transparent:!0,opacity:.18,envMapIntensity:1.2,depthWrite:!1})),mirror:()=>Lt("mirror",()=>ie("#c9ccd0",.02,1,1.4)),white:()=>Lt("white",()=>ie("#f1eee8",.5,0,.3)),whiteGloss:()=>Lt("whiteGloss",()=>ie("#f4f2ee",.15,0,.6)),black:()=>Lt("black",()=>ie("#121110",.5,0,.3)),blackGloss:()=>Lt("blackGloss",()=>ie("#0e0d0c",.12,0,.7)),walnut:()=>Lt("walnut",()=>{const i=An("walnut"),t=ie("#ffffff",.5,0,.35);return t.map=i.tex,t}),oak:()=>Lt("oak",()=>ie("#b48e62",.55,0,.3)),marbleW:()=>Lt("marbleWm",()=>{const i=An("marbleW"),t=ie("#ffffff",.15,0,.6);return t.map=i.tex,t}),marbleB:()=>Lt("marbleBm",()=>{const i=An("blackMarble"),t=ie("#ffffff",.12,0,.6);return t.map=i.tex,t}),marbleG:()=>Lt("marbleGm",()=>{const i=An("greenMarble"),t=ie("#ffffff",.12,0,.6);return t.map=i.tex,t}),rattan:()=>Lt("rattan",()=>ie("#8f6234",.85,0,.25)),leaf:()=>Lt("leaf",()=>{const i=ie("#2f5a34",.6,0,.3);return i.side=Ze,i}),pot:()=>Lt("pot",()=>ie("#d8d2c6",.7,0,.3)),emissiveWarm:()=>Lt("emWarm",()=>new Rn({color:new zt("#fff1d6").multiplyScalar(1.6)})),emissiveCool:()=>Lt("emCool",()=>new Rn({color:new zt("#f2f6ff").multiplyScalar(1.6)}))},Qi=i=>Lt("velvet"+i,()=>{const t=ie(i,.92,0,.25);return t.map=An("plaster").tex,t}),Bn=(i,t=.55)=>Lt("paint"+i+t,()=>ie(i,t,0,.3)),Fo=i=>Lt("lacq"+i,()=>ie(i,.18,0,.7)),ju=new Map;function fe(i,t,e,n,s=0){const r=`${i.toFixed(3)},${t.toFixed(3)},${e.toFixed(3)},${s}`;let a=ju.get(r);return a||(a=s>0?new No(i,t,e,3,Math.min(s,i/2,t/2,e/2)):new Se(i,t,e),ju.set(r,a)),new Q(a,n)}function se(i,t,e,n,s=20){return new Q(new Oe(i,t,e,s),n)}function tt(i,t,e,n,s=0){return i.position.set(t,e,n),i.rotation.y=s,i}const Ac=new Map;function Ve(i){let t=Ac.get(i);return t||(t=new xn,t.name=i,Ac.set(i,t)),t}const Rd=[];function sn(i,t,e,n,s,r=1,a=7,o){Rd.push({room:i,x:t,y:e,z:n,color:new zt(s),power:r,range:a,...o})}function xr(i,t,e=.6){const n=new ed({map:nM(),color:new zt(i).multiplyScalar(e),blending:Ol,depthWrite:!1,transparent:!0,fog:!1}),s=new z0(n);return s.scale.setScalar(t),s}class Yi{constructor(){cn(this,"pos",[]);cn(this,"nor",[]);cn(this,"uv",[]);cn(this,"idx",[])}quad(t,e,n,s,r,a){const o=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],l=[s[0]-t[0],s[1]-t[1],s[2]-t[2]],c=o[1]*l[2]-o[2]*l[1],h=o[2]*l[0]-o[0]*l[2],f=o[0]*l[1]-o[1]*l[0],u=c*r[0]+h*r[1]+f*r[2]<0,d=this.pos.length/3;for(const[g,v]of[[t,a[0]],[e,a[1]],[n,a[2]],[s,a[3]]])this.pos.push(...g),this.nor.push(...r),this.uv.push(...v);u?this.idx.push(d,d+2,d+1,d,d+3,d+2):this.idx.push(d,d+1,d+2,d,d+2,d+3)}geometry(){const t=new je;return t.setAttribute("position",new he(this.pos,3)),t.setAttribute("normal",new he(this.nor,3)),t.setAttribute("uv",new he(this.uv,2)),t.setIndex(this.idx),t}get empty(){return this.idx.length===0}}const tf=new Map;function _o(i){let t=tf.get(i);if(!t){const e=An(i);t=ie("#ffffff",e.rough??.7,0,.06),t.map=e.tex,tf.set(i,t)}return t}function Cd(i){return Lt("floor:"+i,()=>{const t=An(i),e=ie("#ffffff",t.rough??.5,0,.28);return e.map=t.tex,e})}const oe=i=>-i;function rM(i,t){const e=Ve(i.id),n=De[i.lv],s=i.h??gi,r=i.x0+Ae,a=i.x1-Ae,o=oe(i.d1)+Ae,l=oe(i.d0)-Ae,c=An(i.wall),h=new Yi,f=new Yi,u=Bn(i.trim,.45),d=[{S:[r,o],e:[1,0],n:[0,1],L:a-r,line:"d",at:i.d1,toU:x=>x-r},{S:[a,l],e:[-1,0],n:[0,-1],L:a-r,line:"d",at:i.d0,toU:x=>a-x},{S:[r,l],e:[0,-1],n:[1,0],L:l-o,line:"x",at:i.x0,toU:x=>l+x},{S:[a,o],e:[0,1],n:[-1,0],L:l-o,line:"x",at:i.x1,toU:x=>-x-o}];let g=0;for(const x of d){const T=[];for(const L of uh){if(L.a!==i.id&&L.b!==i.id||L.axis!==x.line||Math.abs(L.at-x.at)>1e-6)continue;const U=De[L.lv];if(U<n-.01||U>n+s-1)continue;const G=x.toU(L.from),Y=x.toU(L.to);T.push({u0:Math.max(0,Math.min(G,Y)),u1:Math.min(x.L,Math.max(G,Y)),y0:U,y1:U+(L.h??2.7),door:!0})}if(x.line==="d"&&x.at===0&&(i.id==="gold"&&T.push({u0:x.toU(3.2),u1:x.toU(-2.75),y0:n+.65,y1:n+3.25,door:!1}),i.id==="window"||i.id==="atelier"))for(const L of vo)T.push({u0:x.toU(L+.68),u1:x.toU(L-.68),y0:n+.7,y1:n+3,door:!1});T.sort((L,U)=>L.u0-U.u0);const R=(L,U,G=0)=>[x.S[0]+x.e[0]*L-x.n[0]*G,U,x.S[1]+x.e[1]*L-x.n[1]*G],I=[x.n[0],0,x.n[1]],N=L=>c.full?1-(L-n)/s:(L-n)/c.h,V=(L,U,G,Y)=>{U-L<1e-4||Y-G<1e-4||h.quad(R(L,G),R(U,G),R(U,Y),R(L,Y),I,[[(L+g)/c.w,N(G)],[(U+g)/c.w,N(G)],[(U+g)/c.w,N(Y)],[(L+g)/c.w,N(Y)]])},z=(L,U)=>{if(U-L<.001)return;const G=.14;f.quad(R(L,n,-.022),R(U,n,-.022),R(U,n+G,-.022),R(L,n+G,-.022),I,[[0,0],[1,0],[1,1],[0,1]]),f.quad(R(L,n+G,-.022),R(U,n+G,-.022),R(U,n+G,0),R(L,n+G,0),[0,1,0],[[0,0],[1,0],[1,1],[0,1]])},W=(L,U)=>{if(U-L<.001||i.ceil==="none")return;const G=.12,Y=n+s;f.quad(R(L,Y-G,-.06),R(U,Y-G,-.06),R(U,Y,-.06),R(L,Y,-.06),I,[[0,0],[1,0],[1,1],[0,1]]),f.quad(R(L,Y-G,0),R(U,Y-G,0),R(U,Y-G,-.06),R(L,Y-G,-.06),[0,-1,0],[[0,0],[1,0],[1,1],[0,1]])},O=(L,U,G,Y)=>{if(U-L<1e-4)return;const dt=R(L,0),pt=R(U,0);t.addWall(dt[0],dt[2],pt[0],pt[2],G,Y)};let B=0;for(const L of T){V(B,L.u0,n,n+s),O(B,L.u0,n-.3,n+s),z(B,L.u0),V(L.u0,L.u1,n,L.y0),V(L.u0,L.u1,L.y1,n+s),O(L.u0,L.u1,n-.3,L.y0),O(L.u0,L.u1,L.y1,n+s),L.door||z(L.u0,L.u1);const U=L.y0,G=Math.min(L.y1,n+s);f.quad(R(L.u0,U),R(L.u0,U,Ae),R(L.u0,G,Ae),R(L.u0,G),[x.e[0],0,x.e[1]],[[0,0],[1,0],[1,1],[0,1]]),f.quad(R(L.u1,U),R(L.u1,U,Ae),R(L.u1,G,Ae),R(L.u1,G),[-x.e[0],0,-x.e[1]],[[0,0],[1,0],[1,1],[0,1]]),L.y1<n+s&&f.quad(R(L.u0,G),R(L.u1,G),R(L.u1,G,Ae),R(L.u0,G,Ae),[0,-1,0],[[0,0],[1,0],[1,1],[0,1]]),(!L.door||L.y0>n+.01)&&f.quad(R(L.u0,U),R(L.u1,U),R(L.u1,U,Ae),R(L.u0,U,Ae),[0,1,0],[[0,0],[1,0],[1,1],[0,1]]),B=L.u1}V(B,x.L,n,n+s),O(B,x.L,n-.3,n+s),z(B,x.L),W(0,x.L),g+=x.L}const v=new Q(h.geometry(),_o(i.wall));v.name="walls",e.add(v),f.empty||e.add(new Q(f.geometry(),u));const p=[];i.id.startsWith("stair")&&p.push({x:ei.x,d:ei.d,r:ei.r+.12}),i.id==="rotunda"&&p.push({x:un.x,d:un.d,r:un.r});const m=Rc(i.x0,i.x1,i.d0,i.d1,p,n,An(i.floor),!0);m.material=Cd(i.floor),m.name="floor",e.add(m),t.surfaces.push({kind:"rect",x0:i.x0,x1:i.x1,z0:oe(i.d1),z1:oe(i.d0),y:n,holes:p.map(x=>({x:x.x,z:oe(x.d),r:x.r}))});const S=[...p];if(i.id==="atrium"&&S.push({x:un.x,d:un.d,r:un.r}),i.ceil!=="none"&&i.ceil!=="skylight"){const x=Rc(i.x0+Ae,i.x1-Ae,i.d0+Ae,i.d1-Ae,S,n+s,null,!1);x.material=i.ceil==="pyramids"?Fo(i.ceilColor):Bn(i.ceilColor,.85),e.add(x),aM(i,e,n+s)}const E=n+s,_=Math.max(1,Math.round((a-r)/3.4)),y=Math.max(1,Math.round((l-o)/3.4)),w=new Ts(.06,16).rotateX(Math.PI/2),A=[];for(let x=0;x<_;x++)for(let T=0;T<y;T++){const R=r+(x+.5)*(a-r)/_,I=o+(T+.5)*(l-o)/y;if(!(i.id==="atrium"||i.id==="tunnel"||i.id==="conservatory")&&!p.some(N=>Math.hypot(R-N.x,I-oe(N.d))<N.r+.6)&&(sn(i.id,R,E-.3,I,i.light,.4*i.bright,6.5),i.ceil!=="pyramids"))for(const[N,V]of[[-.5,-.5],[.5,.5],[.5,-.5],[-.5,.5]])A.push(w.clone().translate(R+N,E-.005,I+V))}return A.length&&e.add(new Q(an(A),K.emissiveWarm())),e}function Rc(i,t,e,n,s,r,a,o){let l;if(!s.length)l=new be(t-i,n-e),l.rotateX(o?-Math.PI/2:Math.PI/2),l.translate((i+t)/2,r,-(e+n)/2);else{const d=new As,g=o?1:-1;d.moveTo(i,g*e),d.lineTo(t,g*e),d.lineTo(t,g*n),d.lineTo(i,g*n),d.closePath();for(const v of s){const p=new ia;p.absarc(v.x,g*v.d,v.r,0,Math.PI*2,!0),d.holes.push(p)}l=new Rs(d,48),l.rotateX(o?-Math.PI/2:Math.PI/2),l.translate(0,r,0)}const c=l.getAttribute("position"),h=l.getAttribute("uv"),f=(a==null?void 0:a.w)??1,u=(a==null?void 0:a.h)??1;for(let d=0;d<c.count;d++)h.setXY(d,c.getX(d)/f,-c.getZ(d)/u);return h.needsUpdate=!0,new Q(l)}function aM(i,t,e){const n=i.x0+Ae,s=i.x1-Ae,r=oe(i.d1)+Ae,a=oe(i.d0)-Ae;if(i.ceil==="coffer"||i.ceil==="gold"||i.ceil==="beams"){const o=i.ceil==="gold"?K.gold():i.ceil==="beams"?K.walnut():Bn(i.ceilColor,.8),l=i.ceil==="gold"?.06:i.ceil==="beams"?.28:.22,c=i.ceil==="gold"?.035:i.ceil==="beams"?.22:.16,h=i.ceil==="gold"?.6:i.ceil==="beams"?1.6:1.2,f=[];for(let u=n+h;u<s-.1;u+=h)i.ceil!=="beams"&&f.push(new Se(c,l,a-r).translate(u,e-l/2,(r+a)/2));for(let u=r+h;u<a-.1;u+=h)f.push(new Se(s-n,l,c).translate((n+s)/2,e-l/2,u));if(i.id==="rotunda"){const u=f.filter(()=>!0);t.add(new Q(an(u),o))}else f.length&&t.add(new Q(an(f),o))}if(i.ceil==="pyramids"){const l=new sh(.43840199999999996,.42,4,1).rotateY(Math.PI/4).rotateX(Math.PI).translate(0,-.21,0),c=[];for(let u=n+.62/2;u<s;u+=.62)for(let d=r+.62/2;d<a;d+=.62)c.push(new le().makeTranslation(u,e,d));const h=Fo("#e14f82"),f=ie("#f2b6c8",.05,1,1.5);for(const[u,d]of[[h,0],[f,1]]){const g=c.filter((p,m)=>(m+Math.floor(m/9))%2===d),v=new oi(l,u,g.length);g.forEach((p,m)=>v.setMatrixAt(m,p)),t.add(v)}}}function oM(i){const t=Ve("atrium"),e=De[1],n=fe(nn.x1-nn.x0,.3,nn.d1-nn.d0,Bn("#15120f",.8));tt(n,0,e-.15,oe((nn.d0+nn.d1)/2)),t.add(n);const s=Rc(nn.x0,nn.x1,nn.d0,nn.d1,[],e+.001,An("checker"),!0);s.material=Cd("checker"),t.add(s);const r=fe(nn.x1-nn.x0,.32,.04,K.brass());tt(r,0,e-.16,oe(nn.d0)+.02),t.add(r),i.surfaces.push({kind:"rect",x0:nn.x0-Ae,x1:nn.x1+Ae,z0:oe(nn.d1),z1:oe(nn.d0),y:e}),lM(t,i,[nn.x0,oe(nn.d0)],[jt.x0,oe(nn.d0)],e);for(const x of[-4,0,4])sn("atrium",x,e-.6,oe(18.5),"#ffd29a",.8,5);sn("atrium",0,5.5,oe(9),"#ffcf8f",1.3,9),sn("atrium",0,5.5,oe(15),"#ffcf8f",1.3,9),sn("atrium",-4.5,3,oe(12),"#ffcf8f",.8,6);const a=22,o=jt.d1-jt.d0,l=jt.y1-jt.y0,c=[],h=[],f=jt.x1-jt.x0,u=(jt.x0+jt.x1)/2;for(let x=0;x<a;x++){const T=jt.d0+o*(x+.5)/a,R=l*(x+1)/a;c.push(new Se(f,.04,o/a+.03).translate(u,R-.02,oe(T)-.015)),h.push(new Se(f,l/a,.02).translate(u,R-l/a/2,oe(jt.d0+o*x/a)-.01))}t.add(new Q(an(c),K.marbleB())),t.add(new Q(an(h),K.blackGloss()));const d=new As;d.moveTo(-10.4,0),d.lineTo(-17,0),d.lineTo(-17,l),d.lineTo(-17+.001,l),d.lineTo(-10.4,.05),d.closePath();const g=new Rs(d).rotateY(-Math.PI/2),v=new Q(g,K.blackGloss());v.position.set(jt.x0-.02,0,0),v.material=Lt("stairSide",()=>{const x=ie("#0e0d0c",.2,0,.8);return x.side=Ze,x}),t.add(v);const p=fe(f,De[1]-.3,.04,K.blackGloss());tt(p,u,(De[1]-.3)/2,oe(jt.d1)+.02),t.add(p),i.surfaces.push({kind:"rect",x0:jt.x0,x1:jt.x1+Ae,z0:oe(jt.d1),z1:oe(jt.d0),y:0,ramp:{along:"z",a:oe(jt.d0),b:oe(jt.d1),ya:0,yb:jt.y1}}),i.addWall(jt.x0,oe(jt.d0),jt.x0,oe(jt.d1),-.3,jt.y1+1),i.addWall(jt.x0,oe(jt.d1),jt.x1+Ae,oe(jt.d1),-.3,De[1]-.35);const m=[],S=8;for(let x=0;x<S;x++){const T=jt.d0+o*x/S,R=jt.d0+o*(x+1)/S,I=l*x/S,N=l*(x+1)/S,V=new Yi;V.quad([jt.x0,I+.05,oe(T)],[jt.x0,N+.05,oe(R)],[jt.x0,N+.95,oe(R)],[jt.x0,I+.95,oe(T)],[-1,0,0],[[0,0],[1,0],[1,1],[0,1]]),m.push(V.geometry())}const E=Lt("glassDS",()=>{const x=K.glass().clone();return x.side=Ze,x});t.add(new Q(an(m),E));const _=new mr(new ld(new P(jt.x0,1,oe(jt.d0)+.3),new P(jt.x0,l+1,oe(jt.d1))),8,.028,10);t.add(new Q(_,K.brass()));const y=se(.04,.05,1.05,K.brass());tt(y,jt.x0,.52,oe(jt.d0)+.25),t.add(y);const w=new Q(new be(.9,Math.hypot(o,l)),Bn("#5c0d16",.95));w.rotation.set(-Math.PI/2+Math.atan2(l,o),0,0,"XYZ"),w.position.set(u,l/2+.03,oe((jt.d0+jt.d1)/2)),t.add(w);const A=new Q(new Oe(un.r,un.r,.3,64,1,!0),K.gold());A.material=Lt("goldDS",()=>{const x=K.gold().clone();return x.side=Ze,x}),A.position.set(un.x,De[2]-.15,oe(un.d)),t.add(A),cM(Ve("rotunda"),i,un.x,oe(un.d),un.r+.05,De[2])}function lM(i,t,e,n,s){const r=Math.hypot(n[0]-e[0],n[1]-e[1]),a=Math.atan2(n[1]-e[1],n[0]-e[0]),o=new Q(new be(r,.95),Lt("glassDS",()=>{const c=K.glass().clone();return c.side=Ze,c}));o.position.set((e[0]+n[0])/2,s+.5,(e[1]+n[1])/2),o.rotation.y=-a,i.add(o);const l=new Q(new Oe(.03,.03,r,10).rotateZ(Math.PI/2),K.brass());l.position.set((e[0]+n[0])/2,s+1,(e[1]+n[1])/2),l.rotation.y=-a,i.add(l),t.addWall(e[0],e[1],n[0],n[1],s-.2,s+1.05)}function cM(i,t,e,n,s,r){const a=new Q(new Oe(s,s,.95,64,1,!0),Lt("glassDS",()=>{const c=K.glass().clone();return c.side=Ze,c}));a.position.set(e,r+.5,n),i.add(a);const o=new Q(new Jn(s,.03,8,96).rotateX(Math.PI/2),K.brass());o.position.set(e,r+1,n),i.add(o);const l=40;for(let c=0;c<l;c++){const h=c/l*Math.PI*2,f=(c+1)/l*Math.PI*2;t.addWall(e+Math.cos(h)*s,n+Math.sin(h)*s,e+Math.cos(f)*s,n+Math.sin(f)*s,r-.2,r+1.05)}}function hM(i){const t=Ve("tower"),e=ei.x,n=oe(ei.d),s=ei.r0,r=ei.r,a=ei.top,o=3,l=De[1]/(Math.PI*2),c=ei.theta0,h=ei.landing,f=.62/r,u=2.6,d=[0,1,2,3].map(O=>De[O]),g=72,v=new Yi,p=new Yi,m=new Yi,S=An("greenVelvet"),E=O=>Math.abs(Math.atan2(Math.sin(O-c),Math.cos(O-c)))<f;for(let O=0;O<g;O++){const B=O/g*Math.PI*2,L=(O+1)/g*Math.PI*2,U=(B+L)/2,G=[];if(E(U)){let Y=0;for(const dt of d)G.push([Y,dt]),Y=dt+u;G.push([Y,a])}else G.push([0,a]);for(const[Y,dt]of G)if(!(dt-Y<.001)){for(const[pt,Xt,Wt]of[[r,v,-1],[r+.12,p,1]]){const qt=[e+Math.cos(B)*pt,Y,n+Math.sin(B)*pt],Z=[e+Math.cos(L)*pt,Y,n+Math.sin(L)*pt],nt=[Math.cos(U)*Wt,0,Math.sin(U)*Wt],gt=B*pt/S.w,kt=L*pt/S.w;Xt.quad(qt,Z,[Z[0],dt,Z[2]],[qt[0],dt,qt[2]],nt,[[gt,Y/S.h],[kt,Y/S.h],[kt,dt/S.h],[gt,dt/S.h]])}i.addWall(e+Math.cos(B)*(r+.06),n+Math.sin(B)*(r+.06),e+Math.cos(L)*(r+.06),n+Math.sin(L)*(r+.06),Y-(Y===0?.3:0),dt)}}for(const O of d)for(const B of[-1,1]){const L=c+B*f*.985,U=(G,Y)=>[e+Math.cos(L)*G,Y,n+Math.sin(L)*G];m.quad(U(r,O),U(r+.12,O),U(r+.12,O+u),U(r,O+u),[-Math.sin(L)*B,0,Math.cos(L)*B],[[0,0],[1,0],[1,1],[0,1]])}t.add(new Q(v.geometry(),_o("greenVelvet"))),t.add(new Q(p.geometry(),_o("greyPanel").clone())),t.children[t.children.length-1].material=Lt("towerOuter",()=>ie("#1b3a2c",.4,0,.5)),t.add(new Q(m.geometry(),K.brass()));const _=19,y=[],w=[],A=(O,B,L,U,G=ei.r1)=>{const dt=new Yi;for(let Xt=0;Xt<6;Xt++){const Wt=O+(B-O)*Xt/6,qt=O+(B-O)*(Xt+1)/6,Z=(nt,gt,kt)=>[e+Math.cos(gt)*nt,kt,n+Math.sin(gt)*nt];dt.quad(Z(s,Wt,L),Z(G,Wt,L),Z(G,qt,L),Z(s,qt,L),[0,1,0],[[0,0],[1,0],[1,1],[0,1]]),dt.quad(Z(s,Wt,L-U),Z(G,Wt,L-U),Z(G,qt,L-U),Z(s,qt,L-U),[0,-1,0],[[0,0],[1,0],[1,1],[0,1]]),dt.quad(Z(s,Wt,L-U),Z(s,qt,L-U),Z(s,qt,L),Z(s,Wt,L),[-Math.cos((Wt+qt)/2),0,-Math.sin((Wt+qt)/2)],[[0,0],[1,0],[1,1],[0,1]])}const pt=(Xt,Wt,qt)=>[e+Math.cos(Wt)*Xt,qt,n+Math.sin(Wt)*Xt];for(const Xt of[O,B])dt.quad(pt(s,Xt,L-U),pt(G,Xt,L-U),pt(G,Xt,L),pt(s,Xt,L),[-Math.sin(Xt),0,Math.cos(Xt)],[[0,0],[1,0],[1,1],[0,1]]);return dt.geometry()};for(let O=0;O<o;O++){const B=Math.PI*2-2*h;for(let L=0;L<_;L++){const U=h+B*L/_,G=h+B*(L+1)/_,Y=De[O]+l*(U+G)/2+.04;y.push(A(c+U,c+G,Y,.07))}}for(let O=0;O<=o;O++)w.push(A(c-h,c+h,De[O]+.001,.3,r+.13));t.add(new Q(an(y),K.marbleB())),t.add(new Q(an(w),K.marbleB())),i.surfaces.push({kind:"helix",cx:e,cz:n,r0:s,r1:r,y0:0,turns:o,rise:l,theta0:c,landing:h});for(let O=0;O<=o;O++)i.surfaces.push({kind:"sector",cx:e,cz:n,r0:s,r1:r+.2,a0:c-h,a1:c+h,y:De[O]});const x=[],T=[],R=O=>O<h?0:l*O;for(let O=0;O<=o*60;O++){const B=O/60*Math.PI*2,L=c+B;let U=R(B%(Math.PI*2))+De[Math.floor(B/(Math.PI*2))];const G=B%(Math.PI*2);G<h?U=De[Math.floor(B/(Math.PI*2))]:G>Math.PI*2-h?U=De[Math.floor(B/(Math.PI*2))+1]:U=De[Math.floor(B/(Math.PI*2))]+l*G,T.push(new P(e+Math.cos(L)*(s+.03),U+.95,n+Math.sin(L)*(s+.03))),O%3===0&&x.push(new Oe(.012,.012,.95,6).translate(e+Math.cos(L)*(s+.03),U+.475,n+Math.sin(L)*(s+.03)))}t.add(new Q(new mr(new Po(T),o*120,.026,8),K.brass())),t.add(new Q(an(x),K.brass()));for(let O=0;O<48;O++){const B=O/48*Math.PI*2,L=(O+1)/48*Math.PI*2;i.addWall(e+Math.cos(B)*s,n+Math.sin(B)*s,e+Math.cos(L)*s,n+Math.sin(L)*s,-1,a)}for(const[O,B,L]of[[c-h,-.3,De[1]-.3],[c+h,De[3],a]]){i.addWall(e+Math.cos(O)*s,n+Math.sin(O)*s,e+Math.cos(O)*r,n+Math.sin(O)*r,B,L);const U=new Yi,G=(dt,pt)=>[e+Math.cos(O)*dt,pt,n+Math.sin(O)*dt];U.quad(G(s,B<0?0:B),G(r,B<0?0:B),G(r,L),G(s,L),[Math.sin(O),0,-Math.cos(O)],[[0,0],[1,0],[1,1],[0,1]]);const Y=new Q(U.geometry(),Lt("towerPanel",()=>{const dt=ie("#16322a",.5,0,.4);return dt.side=Ze,dt}));t.add(Y)}const I=new Q(new Ts(r,48).rotateX(Math.PI/2),Lt("skyDisc",()=>new Rn({color:new zt("#e8eef4").multiplyScalar(1.4)})));I.position.set(e,a-.01,n),t.add(I);for(const O of d)sn("tower",e,O+2.6,n,"#ffd8a0",1.1,6);const N=new ua(.016,0).scale(1,1.8,1),V=Lt("crystal",()=>new Cn({color:"#fff8ec",emissive:"#ffe9c4",emissiveIntensity:.35,roughness:.05,metalness:.3,envMapIntensity:2})),z=[];for(let O=0;O<22;O++){const B=O*2.399,L=.12+.42*Math.sqrt((O+.5)/22),U=1.6+O%5*.35;for(let G=a-.3;G>U;G-=.075)z.push(new le().makeTranslation(e+Math.cos(B)*L,G,n+Math.sin(B)*L))}const W=new oi(N,V,z.length);z.forEach((O,B)=>W.setMatrixAt(B,O)),t.add(W)}function uM(i){for(const t of Td)rM(t,i);oM(i),hM(i)}function We(i,t,e=.85,n=.42){return Lt("out"+i+((t==null?void 0:t.uuid)??"")+e+n,()=>{const s=new Cn({color:i,map:t??null,roughness:e,metalness:0,envMapIntensity:.4});return s.emissive=new zt(i).multiplyScalar(n),t&&(s.emissiveMap=t),s})}const fM=()=>We("#16171a",void 0,.35,.25),Cc=()=>We("#eceae4",void 0,.9,.5);function Mo(i,t,e,n,s){const r=new As;r.moveTo(i,t),r.lineTo(e,t),r.lineTo(e,n),r.lineTo(i,n),r.closePath();for(const[a,o,l,c]of s){const h=new ia;h.moveTo(a,o),h.lineTo(a,c),h.lineTo(l,c),h.lineTo(l,o),h.closePath(),r.holes.push(h)}return new Rs(r)}function ue(i,t,e,n,s,r,a){return tt(fe(t-i,n-e,r-s,a),(i+t)/2,(e+n)/2,(s+r)/2)}function Pi(i,t,e,n,s,r="#2a3236",a=.22){const o=Lt("pane"+r+a,()=>new Cn({color:r,roughness:.04,metalness:.2,transparent:!0,opacity:a,envMapIntensity:1.6,depthWrite:!1,side:Ze}));return tt(new Q(new be(t-i,n-e),o),(i+t)/2,(e+n)/2,s)}function dM(){const[i,t]=ye(256);t.fillStyle="#fff",t.translate(128,140);for(const n of[-.55,0,.55])t.save(),t.rotate(n),t.beginPath(),t.moveTo(0,10),t.bezierCurveTo(34,-30,26,-88,0,-112),t.bezierCurveTo(-26,-88,-34,-30,0,10),t.fill(),t.restore();t.fillRect(-60,16,120,14),t.beginPath(),t.arc(0,52,16,0,7),t.fill();const e=Ce(i);return e.wrapS=e.wrapT=qn,e}function Tl(i){return Lt("goldSign"+i.uuid,()=>{const t=new Cn({color:"#e6c06a",metalness:1,roughness:.2,alphaMap:i,transparent:!0,envMapIntensity:1.6,emissive:new zt("#9a7434")});return t.alphaTest=.4,t})}function pM(i){const t=Ve("street"),e=new Q(new bn(400,32,16),new Rn({map:iM(),side:_n,fog:!1}));e.position.set(0,-40,0),t.add(e);const n=new Q(new be(70,4.2).rotateX(-Math.PI/2),We("#c4bfb6",An("pavement").tex,.9,.45)),s=n.geometry.getAttribute("uv");for(let l=0;l<s.count;l++)s.setXY(l,s.getX(l)*70/2.4,s.getY(l)*4.2/2.4);tt(n,0,0,2.1),t.add(n),t.add(ue(-35,35,-.16,0,4.2,4.42,We("#a8a39b",void 0,.9,.45)));const r=new Q(new be(70,8).rotateX(-Math.PI/2),We("#45474a",An("asphalt").tex,.95,.4)),a=r.geometry.getAttribute("uv");for(let l=0;l<a.count;l++)a.setXY(l,a.getX(l)*70/4,a.getY(l)*8/4);tt(r,0,-.15,8.4),t.add(r);for(const l of[4.62,4.74])t.add(tt(new Q(new be(70,.08).rotateX(-Math.PI/2),We("#e2b53c",void 0,.8,.6)),0,-.145,l));const o=new Q(new be(70,3.4).rotateX(-Math.PI/2),We("#c4bfb6",An("pavement").tex,.9,.45));return tt(o,0,0,14.1),t.add(o),t.add(ue(-35,35,-.16,0,12.2,12.42,We("#a8a39b",void 0,.9,.45))),i.surfaces.push({kind:"rect",x0:-34,x1:34,z0:0,z1:4.32,y:0}),i.surfaces.push({kind:"rect",x0:-34,x1:34,z0:4.32,z1:12.3,y:-.15}),i.surfaces.push({kind:"rect",x0:-34,x1:34,z0:12.3,z1:15.8,y:0}),i.addWall(-26,0,-26,15.8,-1,6),i.addWall(26,0,26,15.8,-1,6),i.addWall(-26,15.6,26,15.6,-1,6),i.addWall(-34,.02,-4.35,.02,-1,20),i.addWall(-3.15,.02,34,.02,-1,20),i.addWall(-4.35,.02,-3.15,.02,2.55,20),mM(t),gM(t),xM(t),vM(t),_M(t,i),t}function mM(i){const t=fM(),e=new Q(Mo(-4.7,0,4.7,3.45,[[-4.35,0,-3.15,3.25],[-2.75,.65,3.2,3.25],[3.55,0,4.55,3.25]]),t);e.position.z=.14,i.add(e),i.add(ue(-4.7,-4.35,0,3.45,-.1,.14,t),ue(-3.15,-2.75,0,3.45,-.1,.14,t),ue(3.2,3.55,0,3.45,-.1,.14,t),ue(4.55,4.7,0,3.45,-.1,.14,t));for(const p of[-1,1]){const m=p<0?-5.45:4.7,S=p<0?-4.7:5.45;i.add(ue(m,S,0,3.45,-.05,.34,t)),i.add(ue(m+.12,S-.12,.5,3.1,.34,.36,We("#1d1e22",void 0,.3,.25))),i.add(ue(m-.05,S+.05,0,.25,-.05,.4,t)),i.add(ue(m+.06,S-.06,3.45,4.15,0,.44,t)),i.add(ue(m+.1,S-.1,3.55,3.9,.44,.5,We("#202126",void 0,.3,.25)))}i.add(ue(-4.7,4.7,3.45,4.12,0,.26,t)),i.add(ue(-5.65,5.65,4.12,4.3,-.05,.5,t)),i.add(ue(-5.75,5.75,4.3,4.42,-.05,.58,t));const n=[];for(let p=-5.55;p<=5.55;p+=.11)n.push(new Se(.055,.09,.07).translate(p,4.07,.45));i.add(new Q(an(n),t));const s=to("QUATORZE",{px:150,tracking:.24}),r=.66,a=new Q(new be(r*s.aspect,r),Tl(s.tex));tt(a,0,3.8,.27),i.add(a),i.add(ue(-1.5,1.5,3.535,3.55,.26,.28,K.gold()));for(const p of[-1,1]){const m=tt(fe(.36,.014,.02,K.gold()),p*1.55,3.545,.27);m.rotation.z=p*.5,i.add(m)}const o=dM();for(const p of[-3.55,3.55])i.add(tt(new Q(new be(.42,.42),Tl(o)),p,3.8,.27));const l=to("14",{px:120,tracking:.05});i.add(tt(new Q(new be(.34,.26),Tl(l.tex)),-3.75,2.92,.16)),i.add(Pi(-4.35,-3.15,2.62,3.25,.1,"#e8d9b0",.12)),i.add(ue(-4.35,-3.15,2.55,2.62,.02,.16,t));const c=new xn;c.add(ue(0,1.2,0,2.55,-.025,.025,t)),c.children[0].visible=!1;for(const[p,m,S,E]of[[0,.1,0,2.55],[1.1,1.2,0,2.55],[0,1.2,0,.42],[0,1.2,2.42,2.55]])c.add(ue(p,m,S,E,-.03,.03,t));c.add(Pi(.1,1.1,.42,2.42,0,"#d8e4e4",.15)),c.add(ue(.95,.98,1,1.4,.03,.07,K.brass())),c.position.set(-4.35,0,-.08),c.rotation.y=-1.45,Ve("gold").add(c);const h=-2.75,f=3.2,u=[];for(let p=1;p<4;p++)u.push(new Se(.07,2.6,.1).translate(h+p*(f-h)/4,1.95,.1));u.push(new Se(f-h,.08,.12).translate((h+f)/2,2.55,.1)),u.push(new Se(f-h+.1,.1,.22).translate((h+f)/2,.62,.14)),i.add(new Q(an(u),t)),i.add(Pi(h,f,.65,3.25,.06,"#2e3538",.16)),i.add(ue(h+.15,f-.15,.12,.5,.14,.17,We("#1d1e22",void 0,.3,.25))),i.add(ue(3.55,4.55,0,2.55,.02,.06,t));for(const[p,m]of[[.3,1.1],[1.3,2.3]])for(const[S,E]of[[3.65,4],[4.1,4.45]])i.add(ue(S,E,p,m,.06,.08,We("#1d1e22",void 0,.3,.25)));i.add(tt(new Q(new bn(.045,16,12),K.brass()),4.05,1.2,.11)),i.add(ue(3.85,4.25,.95,.99,.06,.09,K.brass())),i.add(Pi(3.55,4.55,2.62,3.25,.1,"#0c0f12",.85)),i.add(ue(4.6,4.66,1.3,1.6,.14,.18,K.chrome()));const d=new xn;d.add(ue(0,.04,0,.04,0,.75,t));const g=ue(-.02,.02,-.55,-.02,.15,.68,We("#c49a4c",void 0,.3,.35));g.material=Lt("signPlate",()=>ie("#c19a50",.3,1,1.2)),d.add(g);const v=to("Q14",{px:110,color:"#fff"});for(const p of[1,-1]){const m=new Q(new be(.4,.4/v.aspect),Lt("signInk",()=>new Rn({color:"#111",alphaMap:v.tex,transparent:!0})));m.position.set(p*.025,-.28,.42),m.rotation.y=p*Math.PI/2,d.add(m)}d.position.set(-5.15,4,.3),i.add(d)}function gM(i){const t=Cc(),e=[[5.1,7.2],[De[2]+.7,De[2]+3],[De[3]+.7,De[3]+3]],n=[];for(const[a,o]of e)for(const l of vo)n.push([l-.68,a,l+.68,o]);const s=new Q(Mo(-5.45,4.42,5.45,16.1,n),t);s.position.z=0,i.add(s);const r=We("#f4f3ef",void 0,.6,.5);for(const[a,[o,l]]of e.entries())for(const c of vo){const h=c-.68,f=c+.68;i.add(ue(h,f,o-.02,o,-.1,0,t),ue(h-.02,h,o,l,-.1,0,t),ue(f,f+.02,o,l,-.1,0,t),ue(h,f,l,l+.02,-.1,0,t)),i.add(ue(h-.1,f+.1,o-.1,o,0,.12,t)),i.add(ue(h-.08,f+.08,l,l+.18,0,.06,t));const u=[];u.push(new Se(f-h,.06,.05).translate(c,(o+l)/2,-.06));for(const d of[1/3,2/3])u.push(new Se(.03,l-o,.04).translate(h+(f-h)*d,(o+l)/2,-.065));u.push(new Se(f-h,.03,.04).translate(c,o+(l-o)*.25,-.065),new Se(f-h,.03,.04).translate(c,o+(l-o)*.75,-.065));for(const d of[-1,1])u.push(new Se(.05,l-o,.05).translate(c+d*.655,(o+l)/2,-.06));i.add(new Q(an(u),r)),a===0?(i.add(Pi(h,f,o,l,-.09,"#e9cf9c",1)),i.children[i.children.length-1].material=Lt("blind",()=>new Rn({color:new zt("#d9b47a").multiplyScalar(.85)}))):i.add(Pi(h,f,o,l,-.085,"#3a4448",.16))}for(const a of[7.5,De[3]-.1])i.add(ue(-5.45,5.45,a,a+.14,0,.08,t));i.add(ue(-5.6,5.6,15.4,15.7,0,.32,t)),i.add(ue(-5.45,5.45,15.7,16.4,-.1,.04,t))}function cs(i,t,e,n,s,r){Uo(Math.round(t*13+n*7+r));const a=13+Math.floor(Ct()*4)*1.2,o=We("#ffffff",sM(["#a7856a","#b8a38e","#8e6b55","#c8b9a6"][r%4]),.9,.45);o.map.repeat.set((e-t)/2.4,a/2.4);const c=r%2?Cc():We(["#20242a","#3c4a44","#5a2f2c","#283346"][r%4],void 0,.5,.3),h=[],f=Math.max(1,Math.floor((e-t)/2.6));for(let g=0;g<3;g++)for(let v=0;v<f;v++){const p=t+(v+.5)*(e-t)/f;h.push([p-.55,5.4+g*3.4,p+.55,7.6+g*3.4])}const u=new Q(Mo(t,4.3,e,a,h),o),d=new Q(Mo(t,0,e,4.3,[[t+.6,.6,e-.6-1.2,3.4],[e-1.5,0,e-.6,2.6]]),c);for(const g of[u,d])g.position.z=n,i.add(g);for(const[g,v,p,m]of h)i.add(Pi(g,p,v,m,n-s*.12,"#1b2328",.9));i.add(Pi(t+.6,e-1.8,.6,3.4,n-s*.12,["#4d4436","#2a3540","#3b3328"][r%3],.92)),i.add(Pi(e-1.5,e-.6,0,2.6,n-s*.1,"#111",.95)),i.add(ue(t,e,a,a+.3,n-s*.05,n+s*.25,Cc()))}function xM(i){cs(i,-14,-5.45,0,1,0),cs(i,-24,-14,0,1,1),cs(i,-34,-24,0,1,2),cs(i,5.45,14,0,1,3),cs(i,14,23,0,1,2),cs(i,23,34,0,1,1)}function vM(i){const t=new xn,e=[-34,-25,-15,-6,3,12,22,34];for(let n=0;n<e.length-1;n++)cs(t,e[n],e[n+1],0,1,n+5);t.rotation.y=Math.PI,t.position.z=15.8,i.add(t)}function _M(i,t){const e=[[-5.25,.75],[-5.25,2],[-5.25,3.2],[-2.3,.75],[-2.3,2],[-2.3,3.2]];for(const[p,m]of e)i.add(tt(se(.025,.025,.95,K.gold(),12),p,.5,m)),i.add(tt(se(.16,.18,.04,K.gold(),24),p,.02,m)),i.add(tt(new Q(new bn(.05,16,12),K.gold()),p,1,m));const n=Lt("rope",()=>ie("#0c0c0c",.9,0,.2));for(const p of[-5.25,-2.3])for(const[m,S]of[[.75,2],[2,3.2]]){const E=[];for(let _=0;_<=12;_++){const y=_/12;E.push(new P(p,.95-Math.sin(Math.PI*y)*.16,m+(S-m)*y))}i.add(new Q(new mr(new Po(E),16,.022,8),n)),t.addWall(p,m,p,S,0,1)}for(const[p,m]of e)t.addBlock(p,m,.12,.12,0,0,1);const s=We("#2f5228",void 0,.9,.3);for(const p of[-6.4,6.3]){i.add(ue(p-.5,p+.5,0,.62,.25,1.15,We("#1c1d1f",void 0,.6,.25)));const m=new Q(new hr(.42,3),s),S=m.geometry.getAttribute("position");for(let y=0;y<S.count;y++){const w=1+(Ct()-.5)*.12;S.setXYZ(y,S.getX(y)*w,S.getY(y)*w,S.getZ(y)*w)}m.geometry.computeVertexNormals(),i.add(tt(m,p,.95,.7));const E=[];for(let y=0;y<40;y++){const w=Ct()*6.28,A=.3+Ct()*.15;E.push(new le().makeTranslation(p+Math.cos(w)*A,.7+Ct()*.5,.7+Math.sin(w)*A*.9))}const _=new oi(new hr(.035,0),We("#c8202c",void 0,.7,.4),E.length);E.forEach((y,w)=>_.setMatrixAt(w,y)),i.add(_),t.addBlock(p,.7,.5,.45,0,0,1.4)}const r=We("#4a4038",void 0,.95,.3),a=[],o=[],l=(p,m,S,E,_)=>{const y=p.clone().addScaledVector(m,S),w=new Oe(E*.7,E,S,6).translate(0,S/2,0);if(w.applyQuaternion(new zn().setFromUnitVectors(new P(0,1,0),m)),w.translate(p.x,p.y,p.z),a.push(w),_===0){Ct()<.5&&o.push(new le().compose(y,new zn().setFromEuler(new Zn(Ct()*3,Ct()*3,Ct()*3)),new P(1,1,1)));return}const A=_>3?2:3;for(let x=0;x<A;x++){const T=m.clone().add(new P((Ct()-.5)*1.1,Ct()*.5,(Ct()-.5)*1.1)).normalize();l(y,T,S*.72,E*.62,_-1)}};Uo(77),l(new P(7.4,0,1.6),new P(.05,1,0),2.2,.08,6),i.add(new Q(an(a),r));const c=new be(.07,.09),h=new oi(c,Lt("yleaf",()=>{const p=We("#e0b23a",void 0,.8,.45).clone();return p.side=Ze,p}),o.length);o.forEach((p,m)=>h.setMatrixAt(m,p)),i.add(h),i.add(ue(6.9,7.9,0,.02,1.1,2.1,We("#3a3129",void 0,.9,.3))),t.addBlock(7.4,1.6,.12,.12,0,0,3);const f=ye(128),[u,d]=f;d.fillStyle="#6f6b64",d.fillRect(0,0,128,128);for(let p=0;p<4;p++)for(let m=0;m<4;m++)d.fillStyle="#b8c4c2",d.beginPath(),d.arc(16+p*32,16+m*32,10,0,7),d.fill();const g=Ce(u);for(const p of[-2.4,.4]){const m=new Q(new be(2.2,.9).rotateX(-Math.PI/2),We("#ffffff",g,.3,.45)),S=m.geometry.getAttribute("uv");for(let E=0;E<S.count;E++)S.setXY(E,S.getX(E)*5,S.getY(E)*2);i.add(tt(m,p+1.1,.004,.75))}const v=new xn;v.add(tt(se(.07,.12,4.2,We("#15171a",void 0,.5,.2),12),0,2.1,0)),v.add(tt(se(.22,.12,.5,We("#15171a",void 0,.5,.2),6),0,4.45,0)),v.add(tt(new Q(new Oe(.17,.12,.4,6),Lt("lampGlass",()=>new Rn({color:"#fff3d6"}))),0,4.45,0)),v.position.set(2.8,0,3.9),i.add(v),t.addBlock(2.8,3.9,.12,.12,0,0,3),sn("gold",0,2.8,-1.4,"#ffe0b0",1.4,7)}const me=()=>new xn,pi=(i,t,e,n,s)=>new Q(new No(i,t,e,4,Math.min(n,i/2-.001,t/2-.001,e/2-.001)),s),So=i=>i==="brass"?K.brass():i==="black"?K.blackMetal():K.walnut();function vr(i,t,e=40){return new Q(new lh(i.map(([n,s])=>new lt(n,s)),e),t)}function Dr(i,t,e="brass",n=!1){const s=me(),r=Qi(t),a=.92;if(n){const l=new Q(new Oe(1.6,1.6,.22,48,1,!1,-.7,1.4),r);l.scale.set(1,1,.6),l.position.set(0,.32,-1.25),new Q(new Oe(.85,.85,.24,48,1,!1,-.8,1.6),r),s.add(l);const c=new Q(new Oe(1.62,1.62,.5,48,1,!0,-.72,1.44),Lt("velvDS"+t,()=>{const h=r.clone();return h.side=Ze,h}));return c.scale.set(1,1,.6),c.position.set(0,.62,-1.25),s.add(c),s}s.add(tt(pi(i,.24,a,.06,r),0,.3,0));const o=Math.max(2,Math.round(i/.75));for(let l=0;l<o;l++){const c=(i-.32)/o;s.add(tt(pi(c-.02,.16,a-.2,.07,r),-i/2+.16+c*(l+.5),.49,.06)),s.add(tt(pi(c-.02,.42,.2,.08,r),-i/2+.16+c*(l+.5),.72,-a/2+.2))}s.add(tt(pi(i,.5,.16,.06,r),0,.68,-a/2+.08));for(const l of[-1,1])s.add(tt(pi(.16,.38,a,.07,r),l*(i/2-.08),.57,0));for(const l of[-1,1])for(const c of[-1,1])s.add(tt(se(.022,.016,.18,So(e),10),l*(i/2-.1),.09,c*(a/2-.1)));return s}function os(i,t="brass"){const e=me(),n=Qi(i);for(const[s,r]of[[.62,.11],[.8,.1]]){const a=new Q(new Jn(.33,r,14,48,Math.PI*1.45),n);a.rotation.set(Math.PI/2,0,Math.PI*.5+Math.PI*.275+Math.PI),a.position.y=s,e.add(a)}e.add(tt(new Q(new Oe(.42,.4,.26,40),n),0,.4,0)),e.add(tt(pi(.5,.12,.46,.05,n),0,.58,.06));for(let s=0;s<4;s++){const r=s/4*Math.PI*2+Math.PI/4;e.add(tt(se(.02,.015,.32,So(t),8),Math.cos(r)*.3,.16,Math.sin(r)*.3))}return e}function MM(i){const t=me(),e=Qi(i),n=new Q(new bn(.45,32,16,0,Math.PI*2,Math.PI*.45,Math.PI*.55),e);n.scale.set(1.05,.55,1),n.position.y=.4,t.add(n);const s=new Q(new bn(.42,32,16),e);return s.scale.set(1.05,.95,.35),s.position.set(0,.62,-.28),t.add(s),t.add(tt(new Q(new Oe(.35,.38,.06,32),K.blackMetal()),0,.03,0)),t}function Al(i,t=.36,e=.42,n=!0){const s=me(),r=Qi(i);if(s.add(vr([[0,.02],[t*.92,.02],[t,.08],[t,e-.08],[t*.9,e],[0,e+.015]],r)),n)for(let a=0;a<6;a++){const o=a/6*Math.PI*2;s.add(tt(new Q(new bn(.018,8,6),r),Math.cos(o)*t*.5,e+.005,Math.sin(o)*t*.5))}return s.add(tt(se(t*.95,t*.95,.03,K.brass(),32),0,.015,0)),s}function ef(i="#f2efe9",t=.42,e=.95,n="#1a1a1a"){const s=me(),r=ie(i,.45,0,.4);s.add(tt(se(t,t,e,r,48),0,e/2,0));const a=Bn("#cfcac2",.6),o=3;for(let c=1;c<o;c++)s.add(tt(new Q(new Jn(t+.001,.006,6,64).rotateX(Math.PI/2),a),0,e*c/o,0));s.add(tt(fe(.008,e-.02,.01,a),0,e/2,t));const l=Bn(n,.4);for(let c=0;c<o;c++)for(const h of[-1,1])s.add(tt(new Q(new bn(.022,12,8),l),h*.09,e*(c+.5)/o,t+.015));return s.add(tt(se(t+.02,t+.02,.03,r,48),0,e+.015,0)),s}function SM(i=1.3,t=.6,e=.78){const n=me(),s=r=>{const a=new Q(new Oe(.5,.5,.018,48),Lt("ovalGlass",()=>new Cn({color:"#d9e8e6",roughness:.05,metalness:.1,transparent:!0,opacity:.32,envMapIntensity:1.5})));a.scale.set(i,1,t),a.position.y=r;const o=new Q(new Jn(.5,.012,6,64).rotateX(Math.PI/2),K.gold());o.scale.set(i,1,t),o.position.y=r,n.add(a,o)};s(e),s(.24);for(const r of[-1,1])for(const a of[-1,1])n.add(tt(se(.012,.012,e,K.gold(),8),r*(i/2-.12),e/2,a*(t/2-.08)));return n}function Ur(i=.55,t=.38,e="marbleW"){const n=me();return n.add(tt(se(i,i,.04,K[e](),48),0,t-.02,0)),n.add(vr([[0,0],[.22,0],[.12,.05],[.08,t*.5],[.12,t-.04],[0,t-.04]],K.brass())),n}function bM(i=.24,t=.55){const e=me();return e.add(tt(se(i,i,.025,K.marbleB(),32),0,t,0)),e.add(tt(se(.02,.02,t,K.brass(),8),0,t/2,0)),e.add(tt(se(i*.6,i*.6,.02,K.brass(),32),0,.01,0)),e}function Nr(i,t,e="brass"){const n=me(),s=Qi(t);n.add(tt(pi(i,.14,.42,.05,s),0,.42,0));for(const r of[-1,1])n.add(tt(fe(.03,.36,.03,So(e)),r*(i/2-.08),.18,.15)),n.add(tt(fe(.03,.36,.03,So(e)),r*(i/2-.08),.18,-.15));return n}function Rl(i){const t=me(),e=Qi(i);t.add(tt(pi(1.7,.2,.62,.07,e),0,.36,0));const n=new Q(new Oe(.28,.28,.62,24,1,!1,0,Math.PI),e);n.rotation.set(Math.PI/2,0,-Math.PI/2),n.position.set(-.72,.46,0),t.add(n),t.add(tt(pi(.5,.42,.62,.12,e),-.7,.62,0));for(const s of[-1,1])for(const r of[-1,1])t.add(tt(se(.018,.012,.26,K.walnut(),8),s*.75,.13,r*.24));return t}function Fr(i,t,e,n=!1,s=!1){const r=Lt("rug"+e+s,()=>ie(e,1,0,.1)),a=n?new Ts(i/2,64):new be(i,t),o=new Q(a.rotateX(-Math.PI/2),r);return o.position.y=s?.012:.006,n&&t!==i&&(o.scale.z=t/i),o}function yM(i,t=.18,e="opal"){const n=me();return n.add(tt(se(.006,.006,i,K.brass(),6),0,-i/2,0)),e==="opal"?n.add(tt(new Q(new bn(t,24,16),K.emissiveWarm()),0,-i-t,0)):(n.add(tt(new Q(new bn(t,24,12,0,Math.PI*2,0,Math.PI/2),K.brass()),0,-i-t*.4,0)),n.add(tt(new Q(new Ts(t*.95,24).rotateX(Math.PI/2),K.emissiveWarm()),0,-i-t*.4,0))),n.add(tt(xr("#ffd9a0",t*7,.55),0,-i-t,0)),n.add(tt(se(.05,.05,.03,K.brass(),16),0,-.015,0)),n}function wM(i=.7,t=3,e=.9){const n=me();n.add(tt(se(.008,.008,e,K.brass(),6),0,-e/2,0));const s=new ua(.028,0).scale(1,1.8,1),r=Lt("crystal",()=>new Cn({color:"#fff8ec",emissive:"#ffe9c4",emissiveIntensity:.35,roughness:.05,metalness:.3,envMapIntensity:2})),a=[];for(let l=0;l<t;l++){const c=i*(1-l*.28),h=-e-l*.28;n.add(tt(new Q(new Jn(c,.012,6,48).rotateX(Math.PI/2),K.brass()),0,h,0));const f=Math.round(c*40);for(let u=0;u<f;u++){const d=u/f*Math.PI*2;for(let g=0;g<4-l;g++)a.push(new le().makeTranslation(Math.cos(d)*c,h-.06-g*.07,Math.sin(d)*c))}for(let u=0;u<8-l*2;u++){const d=u/(8-l*2)*Math.PI*2;n.add(tt(new Q(new bn(.025,8,6),K.emissiveWarm()),Math.cos(d)*c,h+.05,Math.sin(d)*c))}}const o=new oi(s,r,a.length);return a.forEach((l,c)=>o.setMatrixAt(c,l)),n.add(o),n.add(tt(xr("#ffdcaa",i*4.5,.5),0,-e-.3,0)),n}function Cl(i="#efe3c8"){const t=me();t.add(tt(se(.16,.18,.03,K.brass(),24),0,.015,0)),t.add(tt(se(.012,.012,1.45,K.brass(),8),0,.74,0));const e=new Q(new Oe(.16,.24,.3,32,1,!0),Lt("shade"+i,()=>new Cn({color:i,emissive:new zt(i).multiplyScalar(.8),side:Ze,roughness:.9})));return e.position.y=1.55,t.add(e),t.add(tt(xr("#ffd8a0",1.6,.4),0,1.5,0)),t}function fi(i,t,e=K.gold(),n=.05,s=!1){const r=me(),a=me();if(s){const o=new As;o.moveTo(-i/2,0),o.lineTo(i/2,0),o.lineTo(i/2,t-i/2),o.absarc(0,t-i/2,i/2,0,Math.PI,!1),o.lineTo(-i/2,0);const l=new Q(new oh(o,{depth:.04,bevelEnabled:!0,bevelSize:.03,bevelThickness:.02,bevelSegments:2}),e);a.add(l);const c=new Q(new Rs(o).scale(.94,.97,1),K.mirror());c.position.set(0,.03,.065),a.add(c)}else a.add(tt(fe(i+.08,t+.08,.04,e),0,t/2,0)),a.add(tt(new Q(new be(i,t),K.mirror()),0,t/2,.022));return a.rotation.x=-n,r.add(a),r}function Pc(i="#1d1b19"){const t=me(),e=ie(i,.85,0,.2);t.add(vr([[0,.7],[.12,.72],[.15,.85],[.13,1],[.16,1.18],[.17,1.3],[.12,1.44],[.05,1.47],[.035,1.55],[.045,1.58],[0,1.6]],e,32)),t.add(tt(se(.012,.012,.72,K.brass(),8),0,.36,0));for(let n=0;n<3;n++){const s=n/3*Math.PI*2,r=new P(0,.22,0),a=new P(Math.cos(s)*.26,0,Math.sin(s)*.26),o=a.clone().sub(r),l=o.length(),c=new Q(new Oe(.009,.009,l,6),K.brass());c.quaternion.setFromUnitVectors(new P(0,1,0),o.normalize()),c.position.copy(r.clone().add(a).multiplyScalar(.5)),t.add(c)}return t.add(tt(new Q(new bn(.03,12,8),K.brass()),0,1.6,0)),t}function Js(i=1.8,t="#d8d2c6"){const e=me();e.add(vr([[0,0],[.2,0],[.24,.05],[.26,.42],[.22,.44],[0,.44]],ie(t,.75,0,.3),24)),e.add(tt(se(.015,.02,i-.4,K.walnut(),6),0,.44+(i-.4)/2,0));const n=new Ts(.12,10).scale(.75,1.15,1),s=[];for(let a=0;a<28;a++){const o=.7+a/28*(i-.7),l=a*2.4,c=.08+Ct()*.18;s.push(new le().compose(new P(Math.cos(l)*c,o,Math.sin(l)*c),new zn().setFromEuler(new Zn(-.6+Ct()*.5,-l+Math.PI/2,Ct()*.6)),new P(1,1,1).multiplyScalar(.8+Ct()*.6)))}const r=new oi(n,K.leaf(),s.length);return s.forEach((a,o)=>r.setMatrixAt(o,a)),e.add(r),e}function Xa(i=2.4){const t=me();t.add(vr([[0,0],[.26,0],[.32,.5],[0,.5]],K.rattan(),24));const e=new be(.22,1.1).translate(0,.55,0),n=[];for(let r=0;r<3;r++){const a=i-r*.35;t.add(tt(se(.025,.035,a-.5,K.walnut(),6),(r-1)*.08,.5+(a-.5)/2,0));for(let o=0;o<9;o++)n.push(new le().compose(new P((r-1)*.08,a,0),new zn().setFromEuler(new Zn(.9+Ct()*.5,o/9*6.28+r,0,"YXZ")),new P(1,1,1)))}const s=new oi(e,K.leaf(),n.length);return n.forEach((r,a)=>s.setMatrixAt(a,r)),t.add(s),t}function EM(i=2.8){const t=me();t.add(tt(fe(i,.95,.65,K.blackGloss()),0,.475,0));const e=[];for(let r=-i/2+.05;r<i/2;r+=.07)e.push(new Oe(.03,.03,.85,10).translate(r,.47,.33));t.add(new Q(an(e),K.blackGloss())),t.add(tt(fe(i+.1,.05,.75,K.marbleG()),0,.975,0)),t.add(tt(fe(.3,.2,.02,K.black()),-.8,1.12,-.1)),t.add(tt(fe(.02,.12,.02,K.chrome()),-.8,1.04,-.12));const n=[[.3,.12,.3,"#111"],[.24,.1,.24,"#e8d3b0"],[.4,.08,.3,"#111"]];let s=1;for(const[r,a,o,l]of n)t.add(tt(fe(r,a,o,Bn(l,.5)),.7,s+a/2,.05)),t.add(tt(fe(.025,a+.002,o+.002,K.gold()),.7,s+a/2,.05)),s+=a;return t}function qa(i=1.2,t=.55,e=1){const n=me();n.add(tt(fe(i,.06,t,K.walnut()),0,e-.32,0)),n.add(tt(fe(i-.04,.3,t-.04,Lt("vitGlass",()=>new Cn({color:"#dfeeee",transparent:!0,opacity:.16,roughness:.03,envMapIntensity:1.5,depthWrite:!1}))),0,e-.13,0)),n.add(tt(fe(i,.015,t,K.brass()),0,e+.02,0));for(const s of[-1,1])for(const r of[-1,1])n.add(tt(fe(.03,e,.03,K.brass()),s*(i/2-.02),e/2,r*(t/2-.02)));return n}function Pl(i=1.5){const t=me();return t.add(tt(se(.14,.16,.03,K.brass(),24),0,.015,0)),t.add(tt(se(.01,.01,i,K.brass(),8),0,i/2,0)),t.add(tt(new Q(new bn(.09,16,10,0,Math.PI*2,0,Math.PI/2),Bn("#d9cfc0",.8)),0,i,0)),t}const fh=i=>i==="black"?K.blackMetal():i==="chrome"?K.chrome():i==="rattan"?K.brass():i==="gold"?K.gold():K.brass();function TM(i,t,e,n){const s=me(),r=fh(n),a=new Q(new Oe(.014,.014,i,10).rotateZ(Math.PI/2),r);a.position.set(0,t,e),s.add(a);const o=Math.max(2,Math.ceil(i/1.4)+1);for(let l=0;l<o;l++){const c=-i/2+i*l/(o-1);s.add(tt(fe(.02,.02,e,r),c,t,e/2)),s.add(tt(fe(.08,.12,.012,r),c,t,.006))}return s}function AM(i,t,e){const n=me(),s=K.blackMetal();for(const r of[-1,1])n.add(tt(se(.016,.016,t,s,8),r*i/2,t/2,e)),n.add(tt(fe(.032,.032,e,s),r*i/2,t,e/2));return n.add(tt(new Q(new Oe(.016,.016,i,8).rotateZ(Math.PI/2),s),0,t,e)),n}function RM(i,t,e){const n=me(),s=fh(e);for(const r of[-1,1])n.add(tt(se(.015,.015,t,s,8),r*i/2,t/2,0)),n.add(tt(fe(.04,.03,.5,s),r*i/2,.015,0));return n.add(tt(new Q(new Oe(.015,.015,i+.06,8).rotateZ(Math.PI/2),s),0,t,0)),n}function CM(i,t,e){const n=me(),s=new Q(new Oe(.06,.06,i,14,Math.ceil(i*12)).rotateZ(Math.PI/2),K.rattan()),r=s.geometry.getAttribute("position");for(let a=0;a<r.count;a++){const o=r.getX(a),l=r.getY(a),c=r.getZ(a),h=Math.atan2(c,l),f=1+.18*Math.sin(o*60+h*3)+.08*Math.sin(o*9);r.setXYZ(a,o,l*f,c*f)}s.geometry.computeVertexNormals(),s.position.y=t+.05,n.add(s),n.add(tt(new Q(new Oe(.012,.012,i,8).rotateZ(Math.PI/2),K.brass()),0,t-.03,0));for(const a of[-.4,.4])n.add(tt(se(.006,.006,e-t,K.brass(),6),a*i,t+(e-t)/2,0));return n}function PM(i,t,e){const n=me(),s=fh(e);return n.add(tt(fe(.016,.016,i,s),0,t,i/2)),n.add(tt(fe(.06,.1,.012,s),0,t,.006)),n.add(tt(new Q(new bn(.014,8,6),s),0,t,i)),n}function Pd(i,t,e,n,s,r,a=!0,o=!0){const l=me(),c=[],h=[];for(let f=0;f<t;f++){const u=e+f*n;c.push(new Se(i,.03,s).translate(0,u,s/2)),a&&h.push(new be(i-.06,.012).rotateX(Math.PI/2).translate(0,u-.016,s-.03))}if(o)for(const f of[-1,1])c.push(new Se(.03,(t-1)*n+.4,s).translate(f*i/2,e+(t-1)*n/2+.1,s/2));return l.add(new Q(an(c),r)),h.length&&l.add(new Q(an(h),K.emissiveWarm())),l}function nf(i=.75,t=K.whiteGloss()){const e=me(),n=[[i,.42],[i*.68,.72],[i*.38,1]];for(const[s,r]of n)e.add(tt(se(s,s,.04,t,48),0,r,0)),e.add(tt(se(s*.25,s*.25,r,t,24),0,r/2,0));return e.add(tt(new Q(new Jn(i,.01,6,64).rotateX(Math.PI/2),K.gold()),0,.44,0)),e}function Or(i,t,e,n=K.white()){const s=me();return s.add(tt(fe(i,t,e,n),0,t/2,0)),s}function LM(i,t,e,n=.15){const s=me(),r=i*(1-n),a=new be(r,t,60,1),o=a.getAttribute("position");for(let h=0;h<o.count;h++)o.setZ(h,Math.sin(o.getX(h)/r*Math.PI*2*(r/.16))*.04);a.computeVertexNormals();const l=Lt("curt"+e,()=>{const h=ie(e,.88,0,.25);return h.side=Ze,h}),c=new Q(a,l);return c.position.set(-i/2+r/2,t/2+.03,0),s.add(c),s.add(tt(new Q(new Oe(.015,.015,i,8).rotateZ(Math.PI/2),K.brass()),0,t+.06,0)),s}function sf(i,t,e=!0){const n=me(),s=new Po(i,e),r=Lt("neon"+t,()=>new Rn({color:new zt(t).multiplyScalar(2.2)}));n.add(new Q(new mr(s,160,.012,8,e),r));const a=new Ki().setFromPoints(i),o=a.getCenter(new P),l=a.getSize(new P);return n.add(tt(xr(t,Math.max(l.x,l.y)*2.2,.55),o.x,o.y,o.z+.05)),n}function IM(i){const t=[];for(let e=0;e<48;e++){const n=e/48*Math.PI*2,s=16*Math.sin(n)**3,r=13*Math.cos(n)-5*Math.cos(2*n)-2*Math.cos(3*n)-Math.cos(4*n);t.push(new P(s/17*i,r/17*i,0))}return t}function DM(i){const t=me(),e=K.walnut();for(const n of[-1,1]){const s=fe(.04,i,.05,e);s.position.set(n*.22,i/2,-i*.12),s.rotation.x=-.24,t.add(s)}for(let n=.3;n<i-.1;n+=.3)t.add(tt(se(.015,.015,.44,K.brass(),8).rotateZ(Math.PI/2),0,n*Math.cos(.24),-n*Math.sin(.24)-i*.12+i*.12*(n/i)*0+(n-i/2)*.245));return t}function UM(){const i=me();return i.add(tt(fe(1.6,1.2,.3,K.marbleW()),0,.6,0)),i.add(tt(fe(1.8,.08,.38,K.marbleW()),0,1.24,.02)),i.add(tt(fe(.9,.75,.32,K.black()),0,.42,.01)),i.add(tt(new Q(new be(.7,.35),Lt("fire",()=>new Rn({color:new zt("#ff8a3a").multiplyScalar(1.6)}))),0,.25,.18)),i.add(tt(xr("#ff9a4a",1.6,.6),0,.35,.3)),i}function NM(i,t){const e=me(),n=["#5a1f1f","#1f3a5a","#2f4f2f","#c9b38a","#1a1a1a","#7a5a2a","#8a2f3a","#e6dccb"],s=n.map(()=>[]);for(const a of t){let o=-i/2+.02;for(;o<i/2-.05;){const l=.025+Ct()*.03,c=.2+Ct()*.1,h=Math.floor(Ct()*n.length);s[h].push(new le().compose(new P(o+l/2,a+c/2,.11),new zn,new P(l,c,.18))),o+=l+.002,Ct()<.04&&(o+=.15)}}const r=new Se(1,1,1);return s.forEach((a,o)=>{if(!a.length)return;const l=new oi(r,Bn(n[o],.7),a.length);a.forEach((c,h)=>l.setMatrixAt(h,c)),e.add(l)}),e}function FM(i,t){const e=me(),n=Lt("goldBall",()=>ie("#e2bd6a",.08,1,1.6)),s=[];for(let a=0;a<110;a++){const o=.035+Ct()**2.2*.2,l=Ct()*Math.PI*2,c=Math.sqrt(Ct()),h=Math.cos(l)*c*i*.32,f=t*.55+Math.sin(l)*c*t*.42,u=(Ct()-.5)*.5;s.push(new le().compose(new P(h,f,u),new zn,new P(o,o,o)))}for(let a=0;a<14;a++){const o=.05+Ct()*.12;s.push(new le().compose(new P((Ct()-.5)*i*.8,o,(Ct()-.5)*.5),new zn,new P(o,o,o)))}e.add(tt(new Q(new Jn(t*.36,.025,10,64),K.gold()),0,t*.55,-.05));const r=new oi(new bn(1,24,16),n,s.length);s.forEach((a,o)=>r.setMatrixAt(o,a)),e.add(r);for(const[a,o,l]of[[-i*.3,t*.55,.38],[i*.28,t*.45,.42]]){const c=new Q(new Oe(l,l,.03,48).rotateX(Math.PI/2),ie("#3a2a18",.05,1,1.4));c.position.set(a,o,-.15),e.add(c),e.add(tt(new Q(new Jn(l,.02,8,48),K.gold()),a,o,-.13))}return e}function OM(i){const t=me();t.add(tt(pi(i,1.05,.6,.04,Fo("#0f2a20")),0,.525,0)),t.add(tt(fe(i+.1,.05,.72,K.marbleW()),0,1.075,0)),t.add(tt(fe(i,.04,.03,K.brass()),0,.18,.33));for(let n=0;n<Math.floor(i/.65);n++){const s=-i/2+.4+n*.65,r=me();r.add(tt(se(.2,.2,.08,Qi("#6a1428"),24),0,.78,0)),r.add(tt(se(.02,.02,.74,K.brass(),8),0,.37,0)),r.add(tt(new Q(new Jn(.16,.01,6,24).rotateX(Math.PI/2),K.brass()),0,.3,0)),r.add(tt(se(.18,.2,.02,K.brass(),24),0,.01,0)),r.position.set(s,0,.62),t.add(r)}const e=vr([[0,0],[.03,0],[.004,.01],[.004,.1],[.025,.12],[.03,.24],[0,.24]],Lt("flute",()=>new Cn({color:"#f3e3b0",transparent:!0,opacity:.45,roughness:.05,envMapIntensity:1.5})),16);for(let n=0;n<5;n++){const s=e.clone();s.position.set(-i/2+.6+n*.28,1.1,.1-n%2*.12),t.add(s)}return t}const Yn=[],Ld=[];let Id=[];const bo=new Set;function Me(i,t,e,n){const s=Array.isArray(t)?t:[t],r=Id.find(o=>s.includes(o.category)&&!bo.has(o.id)),a=n(r!=null&&r.color&&/^#[0-9a-f]{6}$/i.test(r.color)?r.color:e);return r&&(bo.add(r.id),Ld.push({obj:a,item:r,room:i.id})),a}const te=i=>-i,Xe=i=>De[i.lv];function ct(i,t,e,n,s,r=0,a,o=0){return e.position.set(n,Xe(t)+o,te(s)),e.rotation.y=r,Ve(t.id).add(e),a&&i.addBlock(n,te(s),a[0],a[1],r,Xe(t)+o-.1,Xe(t)+o+(a[2]??1.8)),e}function ke(i,t=.45,e=.4){const n=i.x0+Ae,s=i.x1-Ae,r=te(i.d1)+Ae,a=te(i.d0)-Ae,o=Xe(i),l=[],c=[{line:"d",at:i.d1,S:[n,r],e:[1,0],n:[0,1],L:s-n,toU:h=>h-n},{line:"d",at:i.d0,S:[s,a],e:[-1,0],n:[0,-1],L:s-n,toU:h=>s-h},{line:"x",at:i.x0,S:[n,a],e:[0,-1],n:[1,0],L:a-r,toU:h=>a+h},{line:"x",at:i.x1,S:[s,r],e:[0,1],n:[-1,0],L:a-r,toU:h=>-h-r}];for(const h of c){const f=[];for(const g of uh){if(g.a!==i.id&&g.b!==i.id||g.axis!==h.line||Math.abs(g.at-h.at)>1e-6||Math.abs(De[g.lv]-o)>.5)continue;const v=h.toU(g.from),p=h.toU(g.to);f.push([Math.min(v,p)-t,Math.max(v,p)+t])}h.line==="d"&&h.at===0&&i.id==="gold"&&f.push([h.toU(3.4),h.toU(-4.6)]),f.sort((g,v)=>g[0]-v[0]);let u=e;const d=(g,v)=>{v-g<.9||l.push({r:i,sx:h.S[0]+h.e[0]*g,sz:h.S[1]+h.e[1]*g,ex:h.S[0]+h.e[0]*v,ez:h.S[1]+h.e[1]*v,nx:h.n[0],nz:h.n[1],len:v-g,ry:Math.atan2(h.n[0],h.n[1])})};for(const[g,v]of f)d(u,g),u=Math.max(u,v);d(u,h.L-e)}return l}const yo=(i,t,e=0)=>({x:i.sx+(i.ex-i.sx)*t+i.nx*e,z:i.sz+(i.ez-i.sz)*t+i.nz*e});function En(i,t,e,n=1.78,s=!1){const r=t.r,a=Xe(r),o=.46;let l=0,c=t.len;if(t.len>2.2){for(const g of[.35,t.len-.35]){const v=yo(t,g/t.len),p=PM(o,n,e);p.position.set(v.x,a,v.z),p.rotation.y=t.ry,Ve(r.id).add(p),Yn.push({kind:"faceout",room:r.id,x:v.x+t.nx*o,y:a+n,z:v.z+t.nz*o,ry:t.ry,takes:"garment"}),i.addBlock(v.x+t.nx*.35,v.z+t.nz*.35,.3,.3,t.ry,a,a+2)}l=.85,c=t.len-.85}if(c-l<.8)return;const h=yo(t,(l+c)/2/t.len),f=c-l,u=.32,d=s?AM(f,n+.05,u):e==="rattan"?CM(f,n,(r.h??gi)-0):TM(f,n,u,e);d.position.set(h.x,a,h.z),d.rotation.y=t.ry,e==="rattan"&&(d.position.x+=t.nx*u,d.position.z+=t.nz*u),Ve(r.id).add(d),Yn.push({kind:"rail",room:r.id,x:h.x+t.nx*u,y:a+n,z:h.z+t.nz*u,ry:t.ry,len:f-.1,takes:"garment"}),i.addBlock(h.x+t.nx*.33,h.z+t.nz*.33,f/2,.33,t.ry,a,a+2)}function Hn(i,t,e,n,s,r=2.2,a){const o=t.r,l=Xe(o),c=s??(e==="shoe"?[.42,.82,1.22,1.62]:e==="bag"?[.75,1.45]:[.95,1.3,1.65]),h=a??(e==="bag"?.36:.3),f=Math.max(1,Math.round(t.len/r)),u=t.len/f;for(let d=0;d<f;d++){const g=yo(t,(d+.5)/f),v=Pd(u-.18,c.length,c[0],c[1]-c[0],h,n,!0);v.position.set(g.x,l,g.z),v.rotation.y=t.ry,Ve(o.id).add(v);for(const p of c)Yn.push({kind:"shelf",room:o.id,x:g.x+t.nx*(h*.55),y:l+p+.016,z:g.z+t.nz*(h*.55),ry:t.ry,len:u-.4,depth:h,room_h:c[1]-c[0]-.05,takes:e});i.addBlock(g.x+t.nx*h/2,g.z+t.nz*h/2,(u-.18)/2,h/2+.02,t.ry,l,l+2.2)}}function Ye(i,t,e,n,s,r){Yn.push({kind:"spot",room:i.id,x:t,y:Xe(i)+e,z:te(n),ry:s,takes:r})}function Vi(i,t,e,n,s,r){ct(i,t,Pc(r),e,n,s,[.22,.22,1.7]),Yn.push({kind:"form",room:t.id,x:e,y:Xe(t)+1.5,z:te(n),ry:s,takes:"garment"})}function Xi(i,t,e,n,s,r,a,o=1.62){ct(i,t,RM(r,o,a),e,n,s,[r/2+.1,.32,1.9]),Yn.push({kind:"rail",room:t.id,x:e,y:Xe(t)+o,z:te(n),ry:s+Math.PI/2*0,len:r-.15,takes:"garment"})}function Br(i,t,e=1.2,n="opal"){var r;const s=Xe(i)+(i.h??gi);for(const[a,o]of t){const l=yM(e,.16,n);l.position.set(a,s,te(o)),Ve(i.id).add(l),no[r=i.id]??(no[r]=l),sn(i.id,a,s-e-.3,te(o),"#ffd39a",.9,5.5)}}function ls(i,t,e,n=.7,s=.9){var o;const r=Xe(i)+(i.h??gi),a=wM(n,3,s);a.position.set(t,r,te(e)),Ve(i.id).add(a),eo[o=i.id]??(eo[o]=a),sn(i.id,t,r-s-.3,te(e),"#ffd8a4",1.4,7)}function BM(i){Uo(1414);const t=e=>fr(e);{const e=t("gold"),n=FM(5.2,2.4);ct(i,e,n,.25,.75);for(const r of[-1.2,1.6])sn(e.id,r,3.3,te(2.4),"#ffe2b0",1.2,6,{tx:r*.6,ty:1.4,tz:te(.75),angle:.5,key:!0});ct(i,e,Or(5.6,.18,1,K.whiteGloss()),.25,.75,0,[2.8,.5,2.6]);const s=K.whiteGloss();for(const r of ke(e))r.nz===0&&Hn(i,r,"small",s,[1,1.45,1.9],1.8,.32);ct(i,e,qa(1.3,.6,1),2.3,3.6,0,[.7,.35,1.1]),Ye(e,2,.71,3.6,0,"small"),Ye(e,2.6,.71,3.6,0,"small"),ct(i,e,fi(.9,2.2,K.gold(),0,!0),3.6,5.86,0),ct(i,e,Me(e,"rug","#d9c49a",r=>Fr(3.2,2,r,!0)),0,3.8),Br(e,[[-1.5,3.5],[1.5,3.5]],1,"brass")}{const e=t("atrium");ct(i,e,tt(se(1.35,1.35,.22,K.blackGloss(),64),0,.11,0),0,un.d,0,[1,1,2]),i.addBlock(0,te(un.d),.95,.95,Math.PI/4,0,2);for(let c=0;c<3;c++){const h=c/3*Math.PI*2+Math.PI/2,f=Math.cos(h)*.72,u=un.d-Math.sin(h)*.72;ct(i,e,Pc(),f,u,-h+Math.PI/2,void 0,.22),Yn.push({kind:"form",room:e.id,x:f,y:1.72,z:te(u),ry:-h+Math.PI/2,takes:"garment"})}for(const c of ke(e))c.nx>0&&En(i,c,"gold",1.85);ct(i,e,Me(e,"sofa","#1f3b2e",c=>Dr(2.2,c,"brass")),-2.3,9,Math.PI,[1.15,.5,1]),ct(i,e,Xa(2.8),-5,6.9,0,[.35,.35]),ct(i,e,Xa(2.8),3.6,6.9,0,[.35,.35]),ct(i,e,Me(e,"mirror","#c9a35b",()=>fi(1.2,2.6,K.gold(),0,!0)),-3.6,6.12,0),ct(i,e,Me(e,"bench","#5c0d16",c=>Nr(1.8,c)),-1,19.2,Math.PI,[.95,.25,.6]);const n=De[2]+gi,s=un.x,r=te(un.d),a=new ua(.016,0).scale(1,1.8,1),o=[];for(let c=0;c<90;c++){const h=c*2.399,f=.15+1.55*Math.sqrt((c+.5)/90),u=3.2+(1-f/1.7)*1.6+c%4*.25;for(let d=n-.2;d>u;d-=.07)o.push(new le().makeTranslation(s+Math.cos(h)*f,d,r+Math.sin(h)*f))}const l=new oi(a,Lt("crystal",()=>new Cn({color:"#fff8ec",emissive:"#ffe9c4",emissiveIntensity:.55,roughness:.05,metalness:.3,envMapIntensity:2})),o.length);o.forEach((c,h)=>l.setMatrixAt(h,c)),Ve("rotunda").add(l),Ve("rotunda").add(tt(new Q(new Jn(1.75,.03,8,64).rotateX(Math.PI/2),K.gold()),s,n-.2,r));for(const c of[4.2,6.2])sn("atrium",s,c,r,"#ffe2b8",1.2,7);Ve("atrium").add(tt(xr("#ffe2b8",4,.25),s,4.6,r))}{const e=t("bags"),n=Fo("#e2457b");for(const s of ke(e))Hn(i,s,"bag",n,[.75,1.45],2,.4);ct(i,e,Me(e,["sidetable","coffeetable"],"#c9a35b",()=>SM(1.4,.7,.78)),-9.5,10,0,[.72,.38,.9]),Ye(e,-9.95,.79,10,0,"bag"),Ye(e,-9.05,.79,10,.4,"bag"),ct(i,e,Me(e,"armchair","#e85a8c",s=>os(s,"brass")),-11.6,12.3,Math.PI*.8,[.42,.42,1]),ct(i,e,fi(.55,1.9,K.gold(),.04,!0),-12.75,8,Math.PI/2)}{const e=t("cabinet");ct(i,e,qa(1.4,.6,1),-9.6,17.2,0,[.72,.34,1.1]),ct(i,e,qa(1.4,.6,1),-9.6,19.6,0,[.72,.34,1.1]);for(const n of[17.2,19.6])Ye(e,-10,.71,n,0,"small"),Ye(e,-9.2,.71,n,.3,"small");for(const[n,s]of[[-12.2,15.2],[-12.2,21],[-7,21.2]])ct(i,e,Pl(1.45),n,s,0,[.2,.2]),Ye(e,n,1.53,s,.5,"small");for(const n of ke(e))n.nz!==0&&n.len>2&&Hn(i,n,"small",K.walnut(),[1,1.4],2.4,.32);ct(i,e,Me(e,"armchair","#c9a35b",n=>os(n,"wood")),-7.4,14.9,Math.PI*1.25,[.42,.42,1]),ls(e,-9.5,18.3,.5,.7)}{const e=t("prints");for(const s of ke(e))En(i,s,s.len>5?"rattan":"brass",1.8);ct(i,e,Ur(.42,.62,"marbleW"),9.4,11,0,[.45,.45]),Ye(e,9.4,.62,11,0,"small"),ct(i,e,Js(1.9,"#e8d6cc"),7,15.2,0,[.28,.28]);const n=new xn;n.add(tt(se(.012,.012,2.4,K.brass(),8),0,1.2,0));for(const[s,r]of[[.5,.36],[1.05,.32],[1.6,.28]])n.add(tt(se(r,r,.012,K.brass(),40),0,s,0));ct(i,e,n,7.3,7.5,0,[.36,.36]),Ye(e,7.3,1.06,7.5,0,"bag"),Ye(e,7.3,.51,7.5,0,"small")}{const e=t("denim"),n=ke(e);for(const r of n)En(i,r,"black",1.72,!0);ct(i,e,Me(e,"drum","#f2efe9",r=>ef(r,.45,.95)),8.6,21,0,[.46,.46,1]),ct(i,e,ef("#f2efe9",.38,.78),9.9,21.6,.6,[.4,.4,.9]),Ye(e,8.6,.98,21,.3,"bag"),Ye(e,9.9,.81,21.6,0,"small");const s=sf(IM(.32),"#ffffff");ct(i,e,s,12.86,21,-Math.PI/2,void 0,2.2),ct(i,e,Me(e,"rug","#e8e2da",r=>Fr(1.8,1.8,r,!0,!0)),9.3,21.3),Br(e,[[9.3,21.3]],1.6,"brass")}{const e=t("counter");ct(i,e,EM(3),0,23.4,Math.PI,[1.55,.4,1.1]);for(const s of ke(e))(s.nz===0||s.len>2)&&En(i,s,"brass",1.8);Br(e,[[-1,23.4],[1,23.4]],1.3,"opal");const n=new xn;n.add(tt(se(.09,.12,.35,Lt("vase",()=>ie("#e7e3da",.2,0,.6)),24),0,.17,0));for(let s=0;s<26;s++){const r=Ct()*6.28,a=Ct()*.25;n.add(tt(new Q(new hr(.05,1),Bn(["#f2d3dc","#ffffff","#e86a7a"][s%3],.8)),Math.cos(r)*a,.45+Ct()*.3,Math.sin(r)*a))}ct(i,e,n,1.05,23.35,0,void 0,1)}{const e=t("knit");for(const n of ke(e))(n.nx!==0||n.len>3)&&En(i,n,"brass",1.75);for(const[n,s]of[[-9.6,25.2],[-9.6,27.8]]){const r=new xn;r.add(tt(fe(1.5,.05,.8,K.oak()),0,.74,0));for(const a of[-1,1])for(const o of[-1,1])r.add(tt(fe(.05,.72,.05,K.oak()),a*.68,.36,o*.33));ct(i,e,r,n,s,0,[.78,.43,1]);for(const a of[-.45,0,.45])Yn.push({kind:"fold",room:e.id,x:n+a,y:Xe(e)+.765,z:te(s),ry:0,takes:"garment"})}ct(i,e,Me(e,"armchair","#b49a7a",n=>os(n,"wood")),-12.2,29.2,Math.PI*.75,[.42,.42,1]),ct(i,e,Me(e,"floorlamp","#efe3c8",()=>Cl()),-12.6,28.1,0,[.18,.18]),sn(e.id,-12.6,1.5,te(28.1),"#ffd29a",.6,4)}{const e=t("evening");for(const n of ke(e))En(i,n,"gold",1.85);ls(e,0,30,.9,.8),ct(i,e,Me(e,"sofa","#3a0a14",n=>Dr(2.4,n,"brass")),0,31,Math.PI,[1.2,.5,1]),Vi(i,e,-2.2,28.5,.4,"#2a0e14"),Vi(i,e,2.2,28.5,-.4,"#2a0e14"),ct(i,e,fi(1.1,2.5,K.gold(),.05,!0),4.2,33.85,Math.PI)}{const e=t("coats");for(const n of ke(e))En(i,n,"brass",1.85);Xi(i,e,9.5,30.5,Math.PI/2,2.6,"brass",1.75),Xi(i,e,9.5,35.5,Math.PI/2,2.6,"brass",1.75),ct(i,e,Me(e,"bench","#1f3b2e",n=>Nr(1.6,n,"brass")),9.5,33,Math.PI/2,[.85,.25,.6]),ct(i,e,Js(2),12.2,39.1,0,[.28,.28])}{const e=t("fitting"),n=Xe(e),s=te(40)+Ae,r=te(38.2),a=5,o=-5.9,l=11.8/a;for(let c=0;c<=a;c++){const h=o+c*l;c>0&&c<a&&(ct(i,e,fe(.06,2.5,1.7,_o("redVelvet")),h,39.05,0,void 0,1.25),i.addWall(h,s,h,r,n,n+2.5))}for(let c=0;c<a;c++){const h=o+(c+.5)*l,f=LM(l-.08,2.35,"#4a0710",.42+c%2*.1);f.position.set(h,n,r),Ve(e.id).add(f),i.addWall(h-l/2,r,h-l/2+(l-.08)*(1-.47),r,n,n+2.4),ct(i,e,fi(.7,1.8,K.gold(),0,!1),h,39.86,0,void 0,.3),ct(i,e,Al("#c9a35b",.2,.42,!1),h+.5,39.2,0,[.2,.2,.5]),sn(e.id,h,n+2.3,te(39.1),"#ffd9a8",.5,3)}ct(i,e,Me(e,"sofa","#c9a35b",c=>Dr(2,c,"brass")),0,35,Math.PI,[1.05,.48,1]),ct(i,e,Me(e,"coffeetable","#ffffff",()=>Ur(.3,.42)),1.6,35.3,0,[.3,.3])}for(const e of["stair0","stair1","stair2","stair3"]){const n=t(e);ct(i,n,Js(1.8),-12.4,39.3,0,[.28,.28]),ct(i,n,Js(1.6),-6.6,39.3,0,[.28,.28]),ct(i,n,fi(1,2.2,K.gold(),0,!0),-9.5,39.86,0,void 0,.2)}{const e=t("bar");ct(i,e,OM(4.2),0,26.2,Math.PI,[2.15,.5,1.2]),ct(i,e,Pd(4,2,1.4,.45,.25,K.brass(),!0),0,26.88,Math.PI);for(const[n,s,r]of[[-3.8,22,.5],[-2.4,21.2,.1],[3.8,22,-.5],[2.4,21.2,-.1]])ct(i,e,Me(e,"lounge","#7a1a2e",a=>MM(a)),n,s,Math.PI+r,[.45,.45,.9]);ct(i,e,Me(e,"coffeetable","#ffffff",()=>Ur(.4,.38,"marbleG")),-3.1,22.4,0,[.4,.4]),ct(i,e,Ur(.4,.38,"marbleG"),3.1,22.4,0,[.4,.4]),Br(e,[[-1.5,25.2],[0,25.2],[1.5,25.2]],1.1,"brass"),ct(i,e,Js(2),5.4,20.6,0,[.28,.28])}{const e=t("archive");for(const n of ke(e))En(i,n,"gold",1.8);ct(i,e,Me(e,"bench","#c9a35b",n=>Nr(2.2,n,"brass")),0,30.5,0,[1.15,.25,.6]),ct(i,e,Me(e,"floorlamp","#efe3c8",()=>Cl()),1.6,30,0,[.18,.18]),Vi(i,e,-1.8,30.5,.3,"#3a1734")}{const e=t("silk");for(const n of ke(e))En(i,n,"brass",1.85);ct(i,e,Me(e,"chaise","#d9a7a0",n=>Rl(n)),9.5,26,Math.PI/2,[.9,.35,.9]),Vi(i,e,8.2,23,.6,"#e2c9c2"),Vi(i,e,10.9,23,-.6,"#e2c9c2"),ls(e,9.5,26,.55,.7)}{const e=t("window"),n=new xn;n.add(tt(fe(9.4,.42,.55,K.white()),0,.21,0)),n.add(tt(new Q(new Se(9.3,.1,.5),Qi("#e7b9b6")),0,.47,0)),ct(i,e,n,0,.42,0,[4.7,.3,.6]);for(const s of ke(e))s.nz===0&&Hn(i,s,"shoe",K.whiteGloss(),void 0,2.2);ct(i,e,nf(.7),0,3.4,0,[.72,.72,1.1]);for(const[s,r]of[[0,.44],[2.1,.44],[4.2,.44],[1,.74],[3.6,.74]])Ye(e,Math.cos(s)*(r<.6?.5:.3),r,3.4-Math.sin(s)*(r<.6?.5:.3),-s,"shoe")}{const e=t("rotunda");for(const n of ke(e))n.nx!==0&&Hn(i,n,"shoe",K.whiteGloss(),void 0,2.2);for(const[n,s]of[[-3.6,9.2],[3.6,9.2],[-3.6,16.8],[3.6,16.8]]){ct(i,e,nf(.62),n,s,0,[.62,.62,1.1]);for(const[r,a,o]of[[0,.44,.45],[2.1,.44,.45],[4.2,.44,.45],[1,.74,.26]])Ye(e,n+Math.cos(r)*o,a,s-Math.sin(r)*o,-r+Math.PI/2,"shoe")}for(const[n,s]of[[0,7.4],[-1.6,18.6],[1.6,18.6]])ct(i,e,Me(e,"ottoman","#c9a35b",r=>Al(r,.3,.42)),n,s,0,[.3,.3,.5]);ct(i,e,fi(.9,2.2,K.gold(),0,!0),-2.9,6.12,0,void 0,.1),ct(i,e,fi(.9,2.2,K.gold(),0,!0),2.9,6.12,0,void 0,.1)}{const e=t("mules");for(const n of ke(e))n.len>1.5&&Hn(i,n,"shoe",Bn("#2a1a10",.4),void 0,2.2);for(const[n,s,r]of[[-10.6,9,.5],[-9.6,9.8,.8],[-8.6,9,.35],[-10,11.4,.65]])ct(i,e,Or(.5,r,.5,K.white()),n,s,0,[.27,.27]),Ye(e,n,r,s,.4,"shoe");ct(i,e,Nr(1.4,"#c3914f","black"),-9.5,12.8,0,[.75,.25,.6])}{const e=t("sneakers");for(const s of ke(e))Hn(i,s,"shoe",K.blackMetal(),[.3,.68,1.06,1.44,1.82],1.6);ct(i,e,Or(3.2,.45,.7,ie("#8a8784",.8)),-9.5,22,Math.PI/2,[1.65,.36,.5]),Ye(e,-9.5,.45,20.9,Math.PI/2,"shoe"),Ye(e,-9.5,.45,23.1,Math.PI/2,"shoe");const n=Xe(e)+gi-.02;for(const s of[16.5,19.5,22.5,25.5,28.5]){const r=new Q(new Se(5.6,.03,.06),K.emissiveCool());r.position.set(-9.5,n,te(s)),Ve(e.id).add(r),sn(e.id,-9.5,n-.6,te(s),"#e9f0ff",1,6)}ct(i,e,sf([new P(-.5,0,0),new P(-.2,.3,0),new P(.1,0,0),new P(.4,.3,0)],"#7fd4ff",!1),-12.86,22,Math.PI/2,void 0,2.4)}{const e=t("boots");for(const n of ke(e))Hn(i,n,"shoe",K.walnut(),[.35,.95,1.55,2.15,2.75],2,.34);ct(i,e,DM(3.1),12.4,10.5,-Math.PI/2),ct(i,e,Me(e,"sofa","#5a3220",n=>Dr(2.2,n,"wood")),9.5,15.5,Math.PI,[1.15,.5,1]),ct(i,e,Me(e,"rug","#5c1a1a",n=>Fr(3,2.2,n)),9.5,14.2),ct(i,e,Ur(.45,.4,"marbleB"),9.5,13.6,0,[.45,.45]),Ye(e,9.5,.4,13.6,.3,"shoe"),ls(e,9.5,11,.5,.5)}{const e=t("tryon");for(const n of[-3.6,-2.4,2.4,3.6])ct(i,e,Al("#141312",.3,.42),n,23,0,[.3,.3,.5]);for(const n of[-4.5,4.5])ct(i,e,fi(.8,1.9,K.blackMetal(),.1,!1),n,25.6,Math.PI);for(const n of ke(e))n.nz!==0&&n.len>1.3&&Hn(i,n,"shoe",K.blackGloss(),void 0,1.6)}kM(i);{const e=t("boudoir");for(const n of ke(e))Hn(i,n,"shoe",K.gold(),void 0,2);ct(i,e,Me(e,"chaise","#c9a35b",n=>Rl(n)),9.5,25.5,Math.PI/2,[.9,.35,.9]),ct(i,e,Rl("#c9a35b"),9.5,34.5,-Math.PI/2,[.9,.35,.9]);for(const[n,s]of[[8.4,30],[10.6,30]])ct(i,e,Or(.55,.9,.55,K.blackGloss()),n,s,0,[.3,.3]),Ye(e,n,.9,s,.5,"shoe");ls(e,9.5,30,.7,.8)}{const e=t("atelier");for(const[s,r]of[[-3,.25],[0,0],[3,-.25]])Vi(i,e,s,3.6,r,"#e8e2d6");const n=new xn;n.add(tt(fe(2,.05,.9,K.oak()),0,.88,0));for(const s of[-1,1])n.add(tt(fe(.06,.86,.8,K.oak()),s*.9,.43,0));for(let s=0;s<4;s++)n.add(tt(se(.06,.06,.8,Bn(["#c9b38a","#1a1a1a","#8a2f3a","#e6dccb"][s],.9),16).rotateZ(Math.PI/2),0,.97+s%2*.12,-.3+s*.18));ct(i,e,n,-3.2,1.3,0,[1.05,.5,1]),ls(e,0,3,.6,.6);for(const s of vo)sn(e.id,s,Xe(e)+2,te(.6),"#eef2f6",.8,5)}{const e=t("conservatory"),n=Xe(e),s=n+(e.h??gi);for(const o of ke(e))En(i,o,"brass",1.8);const r=[];for(let o=-5.9;o<=5.91;o+=1.18)r.push(new Se(.05,.12,13.8).translate(o,s,te(13)));for(let o=6.1;o<=19.91;o+=1.38)r.push(new Se(11.8,.12,.05).translate(0,s,te(o)));Ve(e.id).add(new Q(an(r),K.white()));const a=new Q(new be(11.8,13.8).rotateX(Math.PI/2),Lt("skyPanel",()=>new Rn({color:new zt("#dfe8f0").multiplyScalar(1.15)})));a.position.set(0,s+.05,te(13)),Ve(e.id).add(a);for(const[o,l]of[[-4,9],[4,9],[-4,16.5],[4,16.5],[0,13]])sn(e.id,o,s-1,te(l),"#f4f7fb",1.1,8);for(const[o,l]of[[-5.1,6.9],[5.1,6.9],[-5.1,19.1],[5.1,19.1]])ct(i,e,Xa(3.2),o,l,0,[.35,.35]);ct(i,e,Xa(2.6),0,13,0,[.35,.35]);for(const[o,l,c]of[[-1.6,11.3,2.6],[1.6,11.3,-2.6],[-1.6,14.7,.5],[1.6,14.7,-.5]])ct(i,e,Me(e,"armchair","#e9dcc2",h=>os(h,"wood")),o,l,c,[.42,.42,1])}{const e=t("study");for(const n of ke(e))if(n.nz!==0){const s=NM(n.len-.2,[.25,.62,2.45,2.82]),r=yo(n,.5,.02);s.position.set(r.x,Xe(e),r.z),s.rotation.y=n.ry,Ve(e.id).add(s),Hn(i,n,"bag",K.walnut(),[1.05,1.75],2.2,.36)}else Hn(i,n,"shoe",K.walnut(),[.45,.9,1.35,1.8],2);ct(i,e,qa(1.6,.7,1),-9.5,10,0,[.82,.38,1.1]);for(const n of[-.5,0,.5])Ye(e,-9.5+n,.71,10,0,"small");ct(i,e,Pl(1.5),-7,7,0,[.2,.2]),Ye(e,-7,1.58,7,.5,"small"),ct(i,e,Pl(1.3),-12,12.9,0,[.2,.2]),Ye(e,-12,1.38,12.9,-.5,"small"),ct(i,e,Me(e,"armchair","#5a3220",n=>os(n,"wood")),-7.3,12.8,Math.PI*1.2,[.42,.42,1]),Br(e,[[-9.5,10]],1.4,"brass")}{const e=t("club");for(const n of ke(e))n.nx>0&&Math.abs((n.sz+n.ez)/2-te(18))<1.5||En(i,n,"gold",1.85);ct(i,e,UM(),-12.8,18,Math.PI/2,[.3,.9,1.3]),sn(e.id,-12.3,.6,te(18),"#ff9a4a",.8,4),ct(i,e,Me(e,"armchair","#6a2a2a",n=>os(n,"wood")),-10.6,16.7,Math.PI*.35,[.42,.42,1]),ct(i,e,os("#6a2a2a","wood"),-10.6,19.3,Math.PI*.65,[.42,.42,1]),ct(i,e,Me(e,"rug","#3a1414",n=>Fr(2.4,3,n)),-11,18),ct(i,e,Me(e,"sidetable","#111",()=>bM()),-11.7,18,0,[.25,.25]),Vi(i,e,-7.4,15.2,-.7,"#e2c9c2"),Vi(i,e,-7.4,20.8,-2.4,"#e2c9c2"),ls(e,-9.5,18,.55,.6)}{const e=t("seventies");for(const r of ke(e))En(i,r,"brass",1.8);Xi(i,e,-9.5,26,Math.PI/2,2.2,"gold",1.7),ct(i,e,Fr(2.6,2.6,"#d9862e",!0,!0),-9.5,26),ct(i,e,fi(1,2.2,K.gold(),0,!0),-7.6,29.86,0,void 0,.2),ct(i,e,Me(e,"floorlamp","#efe3c8",()=>Cl("#f2b544")),-12.4,23,0,[.18,.18]);const n=Xe(e)+gi,s=new Q(new hr(.28,3),Lt("discoBall",()=>{const r=ie("#e8e8ee",.08,1,1.8);return r.flatShading=!0,r}));s.position.set(-9.5,n-.75,te(26)),s.name="discoBall",Ve(e.id).add(s,tt(se(.006,.006,.45,K.chrome(),6),-9.5,n-.23,te(26))),sn(e.id,-9.5,n-.4,te(26),"#ffd29a",1,6)}Ll("conservatory",-5.89,10,Math.PI/2),Ll("avant",-5.89,25,Math.PI/2),Ll("stair3",-11.8,30.11,Math.PI);{const e=t("jackets");for(const n of ke(e))En(i,n,"black",1.8,!0);ct(i,e,Me(e,"sofa","#2a1410",n=>Dr(2.2,n,"black")),9.5,13,Math.PI/2,[1.15,.5,1]),Xi(i,e,9.5,9,0,2.2,"black",1.75),Xi(i,e,9.5,17,0,2.2,"black",1.75)}{const e=t("avant");for(const n of ke(e))En(i,n,"chrome",1.85);for(const[n,s,r]of[[-2.2,25,.3],[2.2,25,-.3],[-2.2,33,.3],[2.2,33,-.3],[0,29,0]])ct(i,e,Or(.9,.12,.9,K.white()),n,s,0,[.45,.45]),ct(i,e,Pc("#0e0e0e"),n,s,r,[.25,.25,1.7],.12),Yn.push({kind:"form",room:e.id,x:n,y:Xe(e)+1.62,z:te(s),ry:r,takes:"garment"});Xi(i,e,0,37.5,0,3,"chrome",1.75)}{const e=t("mens");for(const n of ke(e))En(i,n,"black",1.8,!0);Xi(i,e,9.5,26,Math.PI/2,2.6,"black",1.7),Xi(i,e,9.5,34,Math.PI/2,2.6,"black",1.7),ct(i,e,Nr(1.8,"#141312","black"),9.5,30,Math.PI/2,[.95,.25,.6]),ct(i,e,Js(2.1),12.3,39.2,0,[.28,.28])}zM(),rf("chandelier","evening",()=>eo.evening),rf("pendant","counter",()=>no.counter)}const eo={},no={};function rf(i,t,e){const n=e(),s=Id.find(r=>r.category===i&&!bo.has(r.id));!n||!s||(bo.add(s.id),Ld.push({obj:n,item:s,room:t}))}function zM(){const i=[],t=(n,s,r,a)=>i.some(o=>o.room===n&&Math.hypot(o.x-s,o.z-r)<a),e=(n,s,r,a,o,l,c=.9)=>{const h=fr(n.room);if(t(h.id,s,r,c))return;i.push({room:h.id,x:s,z:r});const f=Xe(h)+(h.id==="tunnel"?3.3:h.h??gi)-(h.ceil==="pyramids"?.5:.22),u=Math.sin(n.ry),d=Math.cos(n.ry),g=s+u*o,v=r+d*o,p=Math.hypot(g-s,f-a,v-r),m=Math.max(.6,Math.min(8,(p/2.4)**2));sn(h.id,g,f,v,h.light,m,p*1.8+2,{tx:s,ty:a,tz:r,angle:l,key:!0})};for(const n of Yn)if(n.kind==="rail"){const s=n.len??1.5,r=Math.max(1,Math.round(s/1.6));for(let a=0;a<r;a++){const o=-s/2+s*(a+.5)/r;e(n,n.x+Math.cos(n.ry)*o,n.z-Math.sin(n.ry)*o,n.y-.55,1.5,.36)}}else n.kind==="faceout"?e(n,n.x,n.z,n.y-.55,1.4,.27,.7):n.kind==="form"?e(n,n.x,n.z,n.y-.55,1.3,.25,.5):n.kind==="shelf"?e(n,n.x,n.z,Xe(fr(n.room))+1,1.4,.5,1.1):e(n,n.x,n.z,n.y,.6,.36,.8)}function Ll(i,t,e,n){const s=fr(i),r=to("THE VINTAGE WING",{px:110,tracking:.28}),a=.3,o=new Q(new be(a*r.aspect,a),Lt("vintageSign",()=>new Cn({color:"#e0b964",metalness:1,roughness:.25,alphaMap:r.tex,transparent:!0,envMapIntensity:1.4,emissive:new zt("#6a5028")})));o.position.set(t,Xe(s)+2.95,te(e)),o.rotation.y=n,Ve(i).add(o)}function kM(i){const t=fr("tunnel"),e=Xe(t),n=Ve("tunnel"),s=t.d0+.05,r=t.d1-Ae,a=r-s,o=te((s+r)/2),l=2.3,c=3.4,h=.95,f=[[-1.35,0],[1.35,0],[l,h],[l,c-h],[1.35,c],[-1.35,c],[-l,c-h],[-l,h]],u=Lt("octPanel",()=>ie("#e4d9c6",.5,0,.35));for(let S=1;S<f.length;S++){const[E,_]=f[S],[y,w]=f[(S+1)%f.length];if(S===0)continue;const A=Math.hypot(y-E,w-_),x=new Q(new be(A,a),u);x.material=Lt("octPanelDS",()=>{const V=ie("#e4d9c6",.5,0,.3);return V.side=Ze,V});const T=(E+y)/2,R=(_+w)/2,I=Math.atan2(w-_,y-E);x.rotation.order="YXZ",x.rotation.set(Math.PI/2,0,0);const N=new xn;N.add(x),N.rotation.z=I,N.position.set(T,e+R,o),n.add(N)}const d=[];for(const[S,E]of f)d.push(new Se(.03,.03,a).translate(S,e+E,o));n.add(new Q(an(d),K.emissiveWarm()));const g=new Q(new be(2.6,a).rotateX(Math.PI/2),Lt("tunnelCeil",()=>new Rn({color:new zt("#fff1da").multiplyScalar(.95)})));g.position.set(0,e+c-.01,o),n.add(g);for(const S of[-1,1]){for(const _ of[1.25,1.75,2.25]){const y=new Q(new Se(.34,.03,a-.6),u);y.position.set(S*(l-.17),e+_,o),n.add(y);const w=new Q(new be(a-.7,.012).rotateY(Math.PI/2*S).rotateX(0),K.emissiveWarm());w.position.set(S*(l-.34),e+_-.02,o),n.add(w);for(let A=0;A<4;A++){const x=s+.7+(a-1.4)*(A+.5)/4;Yn.push({kind:"shelf",room:"tunnel",x:S*(l-.19),y:e+_+.016,z:te(x),ry:-S*Math.PI/2,len:(a-1.4)/4-.15,depth:.32,room_h:.45,takes:"shoe"})}}const E=new Q(new Se(.4,.03,a-.6),u);E.position.set(S*1.9,e+.62,o),n.add(E);for(let _=0;_<4;_++){const y=s+.7+(a-1.4)*(_+.5)/4;Yn.push({kind:"shelf",room:"tunnel",x:S*1.9,y:e+.636,z:te(y),ry:-S*Math.PI/2,len:(a-1.4)/4-.15,depth:.36,room_h:.5,takes:"shoe"})}i.addWall(S*1.35,te(s),S*1.35,te(r),e-.2,e+.95)}const v=Lt("shag",()=>{const S=ie("#efe6d6",1,0,.1);return S.map=An("carpetCream").tex,S}),p=new Q(new be(2.4,a-1).rotateX(-Math.PI/2),v);p.position.set(0,e+.012,o),n.add(p);for(let S=1;S<=10;S++){const E=Math.pow(.78,S),_=new As;f.forEach(([A,x],T)=>T?_.lineTo(A,x-c/2):_.moveTo(A,x-c/2));const y=new ia;[...f].reverse().forEach(([A,x],T)=>T?y.lineTo(A*.93,(x-c/2)*.93):y.moveTo(A*.93,(x-c/2)*.93)),_.holes.push(y);const w=new Q(new Rs(_),Lt("octRing"+S%2,()=>new Rn({color:S%2?"#e9dfcf":"#fff6e6"})));w.scale.set(E,E,1),w.position.set(0,e+c/2*E+(1-E)*.25,te(r)+.02+S*.002),n.add(w)}const m=new Q(new be(.4,.4),Lt("endGlow",()=>new Rn({color:new zt("#fff8ee").multiplyScalar(1.5)})));m.position.set(0,e+c/2*.06+.24,te(r)+.03),m.scale.setScalar(.4),n.add(m);for(const S of[29,33,37])sn("tunnel",0,e+2.6,te(S),"#fff1da",.75,5)}const Il=4,af=12;class GM{constructor(t){cn(this,"slots",[]);cn(this,"clock",0);cn(this,"hemi");cn(this,"sun");cn(this,"inside",0);cn(this,"fogCol",new zt("#0b0907"));cn(this,"lastVisible","");this.scene=t;for(let e=0;e<Il+af;e++){const n=new Im("#ffd8a8",0,8,.5,.55,2);n.position.set(0,-100,0),n.target.position.set(0,-101,0);const s=e<Il;s&&(n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.bias=-6e-4,n.shadow.normalBias=.02,n.shadow.radius=4,n.shadow.camera.near=.2,n.shadow.autoUpdate=!1,n.shadow.needsUpdate=!0),t.add(n,n.target),this.slots.push({light:n,at:null,level:0,want:0,shadow:s})}this.hemi=new Pm("#fff4e6","#2a2018",1.2),t.add(this.hemi),this.sun=new Fm("#fffaf2",1.6),this.sun.position.set(-20,40,30),t.add(this.sun),t.fog=new eh("#d9dadc",.008)}refreshShadows(){for(const t of this.slots)t.shadow&&(t.light.shadow.needsUpdate=!0)}update(t,e,n,s,r){const a=s===null||s==="street";this.inside+=((a?0:1)-this.inside)*(1-Math.exp(-3*t));const o=s&&!a&&s!=="tower"?fr(s):null,l=(o==null?void 0:o.bright)??.9;this.hemi.intensity=Vo.lerp(1.25,.2*l,this.inside),this.sun.intensity=Vo.lerp(1.6,0,this.inside);const c=this.scene.fog;this.fogCol.set((o==null?void 0:o.haze)??(a?"#d9dadc":"#080605")),c.color.lerp(this.fogCol,1-Math.exp(-2*t)),c.density=Vo.lerp(.008,.055,this.inside);const h=[...r].sort().join();if(h!==this.lastVisible&&(this.lastVisible=h,this.refreshShadows()),this.clock-=t,this.clock<=0){this.clock=.25;const f=[];for(const g of Rd){if(!r.has(g.room))continue;const v=Math.abs((g.ty??g.y-2)-e.y);if(v>6)continue;const p=(g.tx??g.x)-e.x,m=(g.tz??g.z)-e.z,S=Math.hypot(p,m),E=S>.01?(p*n.x+m*n.z)/S:1,_=S+(v>3.2?v*2:v*.3)+(g.room===s?-3:0)-Math.min(1.5,g.power)-E*.9-(g.key?.6:0);f.push({a:g,s:_})}f.sort((g,v)=>g.s-v.s);const u=f.filter(g=>g.a.key).slice(0,Il).map(g=>g.a),d=f.filter(g=>!u.includes(g.a)).slice(0,af).map(g=>g.a);this.fill(this.slots.filter(g=>g.shadow),new Set(u)),this.fill(this.slots.filter(g=>!g.shadow),new Set(d))}for(const f of this.slots){f.level+=(f.want-f.level)*(1-Math.exp(-(f.want?3:6)*t));const u=f.at;f.light.intensity=u?f.level*u.power*(u.key?60:16):0}}fill(t,e){for(const r of t)r.want=r.at&&e.has(r.at)?1:0;const n=new Set(t.map(r=>r.at).filter(r=>r&&e.has(r))),s=[...e].filter(r=>!n.has(r));for(const r of t){if(!s.length)break;r.at&&r.want||(r.level<.05||!r.at)&&(this.assign(r,s.shift()),r.want=1)}}assign(t,e){t.at=e;const n=t.light;n.position.set(e.x,e.y,e.z),n.target.position.set(e.tx??e.x,e.ty??e.y-4,e.tz??e.z),n.target.updateMatrixWorld(),n.color.copy(e.color),n.distance=e.range,n.angle=e.angle??1.05,n.penumbra=e.key?.35:.8,t.level=0,t.shadow&&(n.shadow.camera.far=e.range,n.shadow.camera.updateProjectionMatrix(),n.shadow.needsUpdate=!0)}}const hs=new Map;function _r(i,t){hs.has(i)||hs.set(i,new Set),hs.has(t)||hs.set(t,new Set),hs.get(i).add(t),hs.get(t).add(i)}for(const i of uh)_r(i.a,i.b);_r("atrium","rotunda");for(const i of["stair0","stair1","stair2","stair3"])_r("tower",i);_r("street","window");_r("street","atelier");_r("street","atrium");function WM(i,t=2){const e=new Set([i]);let n=[i];for(let s=0;s<t;s++){const r=[];for(const a of n)for(const o of hs.get(a)??[])e.has(o)||(e.add(o),r.push(o));n=r}e.has("atrium")&&e.add("rotunda"),e.has("rotunda")&&e.add("atrium"),(e.has("gold")||e.has("window")||e.has("atelier"))&&e.add("street");for(const s of["gold","atrium","window","atelier","rotunda"])e.add(s);return e}function HM(i){i.updateMatrixWorld(!0);const t=new le().copy(i.matrixWorld).invert(),e=new Map;i.traverse(a=>{const o=a;if(!o.isMesh||o.isInstancedMesh||o.userData.item||o.name==="walls"||o.name==="floor"||o.name==="cards"||Array.isArray(o.material))return;const l=o.material;if(l.transparent||!o.visible)return;let c=o.parent;for(;c&&c!==i;){if(!c.visible||c.userData.item)return;c=c.parent}const h=o.geometry.clone();for(const u of Object.keys(h.attributes))u!=="position"&&u!=="normal"&&u!=="uv"&&h.deleteAttribute(u);if(h.getAttribute("normal")||h.computeVertexNormals(),h.getAttribute("uv")||h.setAttribute("uv",new he(new Float32Array(h.getAttribute("position").count*2),2)),!h.index){const u=h.getAttribute("position").count,d=new Array(u);for(let g=0;g<u;g++)d[g]=g;h.setIndex(d)}h.morphAttributes={},h.clearGroups(),h.applyMatrix4(new le().multiplyMatrices(t,o.matrixWorld));let f=e.get(l);f||e.set(l,f={geos:[],meshes:[]}),f.geos.push(h),f.meshes.push(o)});let n=0,s=0;for(const[a,o]of e){if(n+=o.meshes.length,o.meshes.length<2)continue;const l=an(o.geos,!1);if(!l)continue;for(const h of o.meshes)h.removeFromParent();const c=new Q(l,a);c.name="merged",i.add(c),s++}const r=[];i.traverse(a=>{a!==i&&a.type==="Group"&&a.children.length===0&&r.push(a)});for(const a of r)a.removeFromParent();return{before:n,after:s}}const VM=1e4;let Dd=performance.now(),dh=!0,ph=window.top===window&&!document.hasFocus(),io=[];function Ud(){if(Dd=performance.now(),!io.length)return;const i=io;io=[];for(const t of i)t()}const mh=()=>{ph=!1,Ud()},Nd={capture:!0,passive:!0};addEventListener("pointermove",i=>{i.pointerType==="mouse"&&(dh=!0),mh()},Nd);for(const i of["pointerdown","keydown","wheel","touchstart","focus","resize"])addEventListener(i,mh,Nd);addEventListener("message",Ud);document.addEventListener("mouseout",i=>{i.relatedTarget||(dh=!1)});addEventListener("blur",()=>{if(ph=!0,document.pointerLockElement)try{document.exitPointerLock()}catch{}});document.addEventListener("visibilitychange",()=>{document.hidden||mh()});const XM=()=>(ph||!dh)&&performance.now()-Dd>VM;function qM(i){return XM()?(io.push(i),!0):!1}const Fd={x:-1.4,z:5.6,yaw:.12},$M={x:-1.1,z:9.4,yaw:.1},Dl={x:-3.75,z:-1.2,yaw:0};let Nn=Fd,Un,us,Xn,Od;const Bd=WM("street",2),of=new P;let YM=null;function zd(){Xn.aspect=innerWidth/innerHeight,Xn.fov=Xn.aspect<1?74:62,Xn.updateProjectionMatrix(),Nn=Xn.aspect<1?$M:Fd}function gh(i,t,e){Xn.position.set(i,1.62,t),Xn.rotation.set(0,e,0,"YXZ")}function ZM(){return YM??(YM=(async()=>{const i=document.getElementById("stage");Un=new F1({antialias:!0,powerPreference:"high-performance"}),Un.setPixelRatio(Math.min(devicePixelRatio,2)),Un.setSize(innerWidth,innerHeight),Un.toneMapping=Hc,Un.toneMappingExposure=1.1,i.append(Un.domElement),V1(Math.min(8,Un.capabilities.getMaxAnisotropy())),us=new Qf,us.background=new zt("#0b0907");const t=new wc(Un).fromScene(new O1,.04).texture;Xn=new Ln(62,innerWidth/innerHeight,.05,600),us.add(Xn),Od=new GM(us),await document.fonts.load('500 64px "Bodoni Moda"').catch(()=>{});const e=new H1;uM(e),pM(e),BM(e);for(const[n,s]of Ac)s.visible=Bd.has(n),s.visible&&(HM(s),us.add(s));us.traverse(n=>{const s=n.material;for(const r of Array.isArray(s)?s:s?[s]:[])r.isMeshStandardMaterial&&(r.metalness>=.5||r.transparent)&&(r.envMap=t,r.needsUpdate=!0)}),addEventListener("resize",()=>{oa&&(Un.setSize(innerWidth,innerHeight),zd(),ds||gh(Nn.x,Nn.z,Nn.yaw),xh(300))})})())}let Lc=0,so=0,oa=!1,wo=!1,ds=null;const JM=i=>i<.5?2*i*i:1-(-2*i+2)**2/2;function xh(i){Lc=Math.max(Lc,performance.now()+i),wo||(wo=!0,so=performance.now(),requestAnimationFrame(Ic))}function Ic(i){if(!oa){wo=!1;return}if(qM(()=>{so=performance.now(),requestAnimationFrame(Ic)}))return;const t=Math.min(.05,(i-so)/1e3);if(so=i,ds){const e=Math.min(1,(i-ds.t0)/1500),n=JM(e);if(gh(Nn.x+(Dl.x-Nn.x)*n,Nn.z+(Dl.z-Nn.z)*n,Nn.yaw+(Dl.yaw-Nn.yaw)*n),document.getElementById("fade").style.opacity=String(Math.max(0,(e-.55)/.45)),e>=1){const s=ds.done;ds=null,s()}}Xn.getWorldDirection(of),Od.update(t,Xn.position,of,"street",Bd),Un.render(us,Xn),i<Lc||ds?requestAnimationFrame(Ic):wo=!1}async function KM(i){i==null||i("Opening the shop…"),await ZM(),oa=!0,Un.domElement.style.display="",Un.setSize(innerWidth,innerHeight),zd(),gh(Nn.x,Nn.z,Nn.yaw),document.getElementById("fade").style.opacity="0",xh(2500),i==null||i("")}function QM(){return new Promise(i=>{if(!oa){i();return}ds={t0:performance.now(),done:()=>{oa=!1,Un.domElement.style.display="none",i()}},xh(1600)})}const ji=document.getElementById("start"),$a=document.getElementById("fade"),jM=ji.querySelector(".loading"),vh=ji.querySelector("form.money"),On=vh.querySelector("input"),dr=vh.querySelector(".go"),kd=ji.querySelector(".ask"),Dc=ji.querySelector(".back");function lf(){const i=pr(),t=i!==null;kd.hidden=t,Dc.hidden=!t,On.closest(".amount").toggleAttribute("hidden",t),t?(Dc.innerHTML=`Welcome back. You have <b>${Hr(ai())}</b> left to spend${rr()?` <small>(spent ${Hr(rr())} of ${Hr(i)})</small>`:""}. <button type="button" class="link change">Change</button>`,On.value=String(i)):On.value="",dr.disabled=!t&&!(Number(On.value)>0)}ji.addEventListener("click",i=>{const t=i.target;t.closest(".change")&&(Dc.hidden=!0,kd.hidden=!1,On.closest(".amount").removeAttribute("hidden"),On.select(),dr.disabled=!(Number(On.value)>0));const e=t.closest("[data-amt]");e&&(On.value=e.dataset.amt,dr.disabled=!1,On.focus())});On.addEventListener("input",()=>{dr.disabled=!(Number(On.value)>0)});vh.addEventListener("submit",async i=>{i.preventDefault();const t=Number(On.value);if(!On.closest(".amount").hasAttribute("hidden")){if(!(t>0))return;Uc(t)}dr.disabled=!0,ji.classList.add("gone"),Lf(),await QM(),_h()});async function _h(){$a.style.opacity="1",await _p(()=>Gd()),ji.classList.add("gone"),requestAnimationFrame(()=>{$a.style.transition="opacity .5s",$a.style.opacity="0",setTimeout(()=>{$a.style.transition=""},600)})}async function Gd(){lf(),ji.classList.remove("gone"),dr.disabled=!0,await KM(i=>{jM.textContent=i}),lf()}location.hash.startsWith("#/")&&pr()!==null?_h():Gd();addEventListener("hashchange",()=>{document.getElementById("store").hidden&&location.hash.startsWith("#/")&&pr()!==null&&_h()});
