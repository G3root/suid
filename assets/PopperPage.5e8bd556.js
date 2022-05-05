var Bt=Object.defineProperty;var a=(t,e)=>Bt(t,"name",{value:e,configurable:!0});import{s as nt,a as pe,K as Be,d as F,ax as $t,S as Tt,ay as Ct,m as ot,n as at,ab as kt,f as Rt,o as Dt,az as jt,a6 as Ce,aA as St,t as ke,e as Mt,ai as Lt,u as Wt,al as it,B as st,ak as pt,aB as ct,F as Ft}from"./index.03445290.js";import{C as Ht}from"./ComponentInfo.5face755.js";import"./Link.71f3d46f.js";import"./copyText.a5ff548e.js";import"./PaperCode.5c60fc55.js";var C="top",S="bottom",M="right",k="left",Re="auto",fe=[C,S,M,k],J="start",ce="end",Nt="clippingParents",lt="viewport",ae="popper",Vt="reference",Ge=fe.reduce(function(t,e){return t.concat([e+"-"+J,e+"-"+ce])},[]),ft=[].concat(fe,[Re]).reduce(function(t,e){return t.concat([e,e+"-"+J,e+"-"+ce])},[]),qt="beforeRead",It="read",Ut="afterRead",Xt="beforeMain",Yt="main",zt="afterMain",Gt="beforeWrite",Kt="write",Jt="afterWrite",Qt=[qt,It,Ut,Xt,Yt,zt,Gt,Kt,Jt];function V(t){return t?(t.nodeName||"").toLowerCase():null}a(V,"getNodeName");function H(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}a(H,"getWindow");function Q(t){var e=H(t).Element;return t instanceof e||t instanceof Element}a(Q,"isElement");function j(t){var e=H(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}a(j,"isHTMLElement");function De(t){if(typeof ShadowRoot>"u")return!1;var e=H(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}a(De,"isShadowRoot");function Zt(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},o=e.attributes[r]||{},i=e.elements[r];!j(i)||!V(i)||(Object.assign(i.style,n),Object.keys(o).forEach(function(s){var p=o[s];p===!1?i.removeAttribute(s):i.setAttribute(s,p===!0?"":p)}))})}a(Zt,"applyStyles");function _t(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var o=e.elements[n],i=e.attributes[n]||{},s=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),p=s.reduce(function(c,f){return c[f]="",c},{});!j(o)||!V(o)||(Object.assign(o.style,p),Object.keys(i).forEach(function(c){o.removeAttribute(c)}))})}}a(_t,"effect$2");var er={name:"applyStyles",enabled:!0,phase:"write",fn:Zt,effect:_t,requires:["computeStyles"]};function N(t){return t.split("-")[0]}a(N,"getBasePlacement");var G=Math.max,xe=Math.min,Z=Math.round;function _(t,e){e===void 0&&(e=!1);var r=t.getBoundingClientRect(),n=1,o=1;if(j(t)&&e){var i=t.offsetHeight,s=t.offsetWidth;s>0&&(n=Z(r.width)/s||1),i>0&&(o=Z(r.height)/i||1)}return{width:r.width/n,height:r.height/o,top:r.top/o,right:r.right/n,bottom:r.bottom/o,left:r.left/n,x:r.left/n,y:r.top/o}}a(_,"getBoundingClientRect");function je(t){var e=_(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}a(je,"getLayoutRect");function ut(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&De(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}a(ut,"contains");function q(t){return H(t).getComputedStyle(t)}a(q,"getComputedStyle");function tr(t){return["table","td","th"].indexOf(V(t))>=0}a(tr,"isTableElement");function U(t){return((Q(t)?t.ownerDocument:t.document)||window.document).documentElement}a(U,"getDocumentElement");function we(t){return V(t)==="html"?t:t.assignedSlot||t.parentNode||(De(t)?t.host:null)||U(t)}a(we,"getParentNode");function Ke(t){return!j(t)||q(t).position==="fixed"?null:t.offsetParent}a(Ke,"getTrueOffsetParent");function rr(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,r=navigator.userAgent.indexOf("Trident")!==-1;if(r&&j(t)){var n=q(t);if(n.position==="fixed")return null}var o=we(t);for(De(o)&&(o=o.host);j(o)&&["html","body"].indexOf(V(o))<0;){var i=q(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}a(rr,"getContainingBlock");function ue(t){for(var e=H(t),r=Ke(t);r&&tr(r)&&q(r).position==="static";)r=Ke(r);return r&&(V(r)==="html"||V(r)==="body"&&q(r).position==="static")?e:r||rr(t)||e}a(ue,"getOffsetParent");function Se(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}a(Se,"getMainAxisFromPlacement");function ie(t,e,r){return G(t,xe(e,r))}a(ie,"within");function nr(t,e,r){var n=ie(t,e,r);return n>r?r:n}a(nr,"withinMaxClamp");function dt(){return{top:0,right:0,bottom:0,left:0}}a(dt,"getFreshSideObject");function vt(t){return Object.assign({},dt(),t)}a(vt,"mergePaddingObject");function mt(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}a(mt,"expandToHashMap");var or=a(function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,vt(typeof e!="number"?e:mt(e,fe))},"toPaddingObject");function ar(t){var e,r=t.state,n=t.name,o=t.options,i=r.elements.arrow,s=r.modifiersData.popperOffsets,p=N(r.placement),c=Se(p),f=[k,M].indexOf(p)>=0,l=f?"height":"width";if(!(!i||!s)){var v=or(o.padding,r),y=je(i),u=c==="y"?C:k,g=c==="y"?S:M,d=r.rects.reference[l]+r.rects.reference[c]-s[c]-r.rects.popper[l],h=s[c]-r.rects.reference[c],O=ue(i),P=O?c==="y"?O.clientHeight||0:O.clientWidth||0:0,E=d/2-h/2,m=v[u],x=P-y[l]-v[g],b=P/2-y[l]/2+E,w=ie(m,b,x),A=c;r.modifiersData[n]=(e={},e[A]=w,e.centerOffset=w-b,e)}}a(ar,"arrow");function ir(t){var e=t.state,r=t.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=e.elements.popper.querySelector(o),!o)||!ut(e.elements.popper,o)||(e.elements.arrow=o))}a(ir,"effect$1");var sr={name:"arrow",enabled:!0,phase:"main",fn:ar,effect:ir,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ee(t){return t.split("-")[1]}a(ee,"getVariation");var pr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function cr(t){var e=t.x,r=t.y,n=window,o=n.devicePixelRatio||1;return{x:Z(e*o)/o||0,y:Z(r*o)/o||0}}a(cr,"roundOffsetsByDPR");function Je(t){var e,r=t.popper,n=t.popperRect,o=t.placement,i=t.variation,s=t.offsets,p=t.position,c=t.gpuAcceleration,f=t.adaptive,l=t.roundOffsets,v=t.isFixed,y=s.x,u=y===void 0?0:y,g=s.y,d=g===void 0?0:g,h=typeof l=="function"?l({x:u,y:d}):{x:u,y:d};u=h.x,d=h.y;var O=s.hasOwnProperty("x"),P=s.hasOwnProperty("y"),E=k,m=C,x=window;if(f){var b=ue(r),w="clientHeight",A="clientWidth";if(b===H(r)&&(b=U(r),q(b).position!=="static"&&p==="absolute"&&(w="scrollHeight",A="scrollWidth")),b=b,o===C||(o===k||o===M)&&i===ce){m=S;var T=v&&b===x&&x.visualViewport?x.visualViewport.height:b[w];d-=T-n.height,d*=c?1:-1}if(o===k||(o===C||o===S)&&i===ce){E=M;var B=v&&b===x&&x.visualViewport?x.visualViewport.width:b[A];u-=B-n.width,u*=c?1:-1}}var $=Object.assign({position:p},f&&pr),L=l===!0?cr({x:u,y:d}):{x:u,y:d};if(u=L.x,d=L.y,c){var R;return Object.assign({},$,(R={},R[m]=P?"0":"",R[E]=O?"0":"",R.transform=(x.devicePixelRatio||1)<=1?"translate("+u+"px, "+d+"px)":"translate3d("+u+"px, "+d+"px, 0)",R))}return Object.assign({},$,(e={},e[m]=P?d+"px":"",e[E]=O?u+"px":"",e.transform="",e))}a(Je,"mapToStyles");function lr(t){var e=t.state,r=t.options,n=r.gpuAcceleration,o=n===void 0?!0:n,i=r.adaptive,s=i===void 0?!0:i,p=r.roundOffsets,c=p===void 0?!0:p,f={placement:N(e.placement),variation:ee(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Je(Object.assign({},f,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Je(Object.assign({},f,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}a(lr,"computeStyles");var fr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:lr,data:{}},ye={passive:!0};function ur(t){var e=t.state,r=t.instance,n=t.options,o=n.scroll,i=o===void 0?!0:o,s=n.resize,p=s===void 0?!0:s,c=H(e.elements.popper),f=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&f.forEach(function(l){l.addEventListener("scroll",r.update,ye)}),p&&c.addEventListener("resize",r.update,ye),function(){i&&f.forEach(function(l){l.removeEventListener("scroll",r.update,ye)}),p&&c.removeEventListener("resize",r.update,ye)}}a(ur,"effect");var dr={name:"eventListeners",enabled:!0,phase:"write",fn:a(function(){},"fn"),effect:ur,data:{}},vr={left:"right",right:"left",bottom:"top",top:"bottom"};function be(t){return t.replace(/left|right|bottom|top/g,function(e){return vr[e]})}a(be,"getOppositePlacement");var mr={start:"end",end:"start"};function Qe(t){return t.replace(/start|end/g,function(e){return mr[e]})}a(Qe,"getOppositeVariationPlacement");function Me(t){var e=H(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}a(Me,"getWindowScroll");function Le(t){return _(U(t)).left+Me(t).scrollLeft}a(Le,"getWindowScrollBarX");function hr(t){var e=H(t),r=U(t),n=e.visualViewport,o=r.clientWidth,i=r.clientHeight,s=0,p=0;return n&&(o=n.width,i=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=n.offsetLeft,p=n.offsetTop)),{width:o,height:i,x:s+Le(t),y:p}}a(hr,"getViewportRect");function gr(t){var e,r=U(t),n=Me(t),o=(e=t.ownerDocument)==null?void 0:e.body,i=G(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=G(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),p=-n.scrollLeft+Le(t),c=-n.scrollTop;return q(o||r).direction==="rtl"&&(p+=G(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:s,x:p,y:c}}a(gr,"getDocumentRect");function We(t){var e=q(t),r=e.overflow,n=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}a(We,"isScrollParent");function ht(t){return["html","body","#document"].indexOf(V(t))>=0?t.ownerDocument.body:j(t)&&We(t)?t:ht(we(t))}a(ht,"getScrollParent");function se(t,e){var r;e===void 0&&(e=[]);var n=ht(t),o=n===((r=t.ownerDocument)==null?void 0:r.body),i=H(n),s=o?[i].concat(i.visualViewport||[],We(n)?n:[]):n,p=e.concat(s);return o?p:p.concat(se(we(s)))}a(se,"listScrollParents");function $e(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}a($e,"rectToClientRect");function yr(t){var e=_(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}a(yr,"getInnerBoundingClientRect");function Ze(t,e){return e===lt?$e(hr(t)):Q(e)?yr(e):$e(gr(U(t)))}a(Ze,"getClientRectFromMixedType");function br(t){var e=se(we(t)),r=["absolute","fixed"].indexOf(q(t).position)>=0,n=r&&j(t)?ue(t):t;return Q(n)?e.filter(function(o){return Q(o)&&ut(o,n)&&V(o)!=="body"}):[]}a(br,"getClippingParents");function xr(t,e,r){var n=e==="clippingParents"?br(t):[].concat(e),o=[].concat(n,[r]),i=o[0],s=o.reduce(function(p,c){var f=Ze(t,c);return p.top=G(f.top,p.top),p.right=xe(f.right,p.right),p.bottom=xe(f.bottom,p.bottom),p.left=G(f.left,p.left),p},Ze(t,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}a(xr,"getClippingRect");function gt(t){var e=t.reference,r=t.element,n=t.placement,o=n?N(n):null,i=n?ee(n):null,s=e.x+e.width/2-r.width/2,p=e.y+e.height/2-r.height/2,c;switch(o){case C:c={x:s,y:e.y-r.height};break;case S:c={x:s,y:e.y+e.height};break;case M:c={x:e.x+e.width,y:p};break;case k:c={x:e.x-r.width,y:p};break;default:c={x:e.x,y:e.y}}var f=o?Se(o):null;if(f!=null){var l=f==="y"?"height":"width";switch(i){case J:c[f]=c[f]-(e[l]/2-r[l]/2);break;case ce:c[f]=c[f]+(e[l]/2-r[l]/2);break}}return c}a(gt,"computeOffsets");function le(t,e){e===void 0&&(e={});var r=e,n=r.placement,o=n===void 0?t.placement:n,i=r.boundary,s=i===void 0?Nt:i,p=r.rootBoundary,c=p===void 0?lt:p,f=r.elementContext,l=f===void 0?ae:f,v=r.altBoundary,y=v===void 0?!1:v,u=r.padding,g=u===void 0?0:u,d=vt(typeof g!="number"?g:mt(g,fe)),h=l===ae?Vt:ae,O=t.rects.popper,P=t.elements[y?h:l],E=xr(Q(P)?P:P.contextElement||U(t.elements.popper),s,c),m=_(t.elements.reference),x=gt({reference:m,element:O,strategy:"absolute",placement:o}),b=$e(Object.assign({},O,x)),w=l===ae?b:m,A={top:E.top-w.top+d.top,bottom:w.bottom-E.bottom+d.bottom,left:E.left-w.left+d.left,right:w.right-E.right+d.right},T=t.modifiersData.offset;if(l===ae&&T){var B=T[o];Object.keys(A).forEach(function($){var L=[M,S].indexOf($)>=0?1:-1,R=[C,S].indexOf($)>=0?"y":"x";A[$]+=B[R]*L})}return A}a(le,"detectOverflow");function wr(t,e){e===void 0&&(e={});var r=e,n=r.placement,o=r.boundary,i=r.rootBoundary,s=r.padding,p=r.flipVariations,c=r.allowedAutoPlacements,f=c===void 0?ft:c,l=ee(n),v=l?p?Ge:Ge.filter(function(g){return ee(g)===l}):fe,y=v.filter(function(g){return f.indexOf(g)>=0});y.length===0&&(y=v);var u=y.reduce(function(g,d){return g[d]=le(t,{placement:d,boundary:o,rootBoundary:i,padding:s})[N(d)],g},{});return Object.keys(u).sort(function(g,d){return u[g]-u[d]})}a(wr,"computeAutoPlacement");function Or(t){if(N(t)===Re)return[];var e=be(t);return[Qe(t),e,Qe(e)]}a(Or,"getExpandedFallbackPlacements");function Pr(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var o=r.mainAxis,i=o===void 0?!0:o,s=r.altAxis,p=s===void 0?!0:s,c=r.fallbackPlacements,f=r.padding,l=r.boundary,v=r.rootBoundary,y=r.altBoundary,u=r.flipVariations,g=u===void 0?!0:u,d=r.allowedAutoPlacements,h=e.options.placement,O=N(h),P=O===h,E=c||(P||!g?[be(h)]:Or(h)),m=[h].concat(E).reduce(function(K,I){return K.concat(N(I)===Re?wr(e,{placement:I,boundary:l,rootBoundary:v,padding:f,flipVariations:g,allowedAutoPlacements:d}):I)},[]),x=e.rects.reference,b=e.rects.popper,w=new Map,A=!0,T=m[0],B=0;B<m.length;B++){var $=m[B],L=N($),R=ee($)===J,te=[C,S].indexOf(L)>=0,re=te?"width":"height",D=le(e,{placement:$,boundary:l,rootBoundary:v,altBoundary:y,padding:f}),W=te?R?M:k:R?S:C;x[re]>b[re]&&(W=be(W));var de=be(W),X=[];if(i&&X.push(D[L]<=0),p&&X.push(D[W]<=0,D[de]<=0),X.every(function(K){return K})){T=$,A=!1;break}w.set($,X)}if(A)for(var ve=g?3:1,Oe=a(function(I){var oe=m.find(function(he){var Y=w.get(he);if(Y)return Y.slice(0,I).every(function(Pe){return Pe})});if(oe)return T=oe,"break"},"_loop"),ne=ve;ne>0;ne--){var me=Oe(ne);if(me==="break")break}e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}}a(Pr,"flip");var Er={name:"flip",enabled:!0,phase:"main",fn:Pr,requiresIfExists:["offset"],data:{_skip:!1}};function _e(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}a(_e,"getSideOffsets");function et(t){return[C,M,S,k].some(function(e){return t[e]>=0})}a(et,"isAnySideFullyClipped");function Ar(t){var e=t.state,r=t.name,n=e.rects.reference,o=e.rects.popper,i=e.modifiersData.preventOverflow,s=le(e,{elementContext:"reference"}),p=le(e,{altBoundary:!0}),c=_e(s,n),f=_e(p,o,i),l=et(c),v=et(f);e.modifiersData[r]={referenceClippingOffsets:c,popperEscapeOffsets:f,isReferenceHidden:l,hasPopperEscaped:v},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":v})}a(Ar,"hide");var Br={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ar};function $r(t,e,r){var n=N(t),o=[k,C].indexOf(n)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,s=i[0],p=i[1];return s=s||0,p=(p||0)*o,[k,M].indexOf(n)>=0?{x:p,y:s}:{x:s,y:p}}a($r,"distanceAndSkiddingToXY");function Tr(t){var e=t.state,r=t.options,n=t.name,o=r.offset,i=o===void 0?[0,0]:o,s=ft.reduce(function(l,v){return l[v]=$r(v,e.rects,i),l},{}),p=s[e.placement],c=p.x,f=p.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=f),e.modifiersData[n]=s}a(Tr,"offset");var Cr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Tr};function kr(t){var e=t.state,r=t.name;e.modifiersData[r]=gt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}a(kr,"popperOffsets");var Rr={name:"popperOffsets",enabled:!0,phase:"read",fn:kr,data:{}};function Dr(t){return t==="x"?"y":"x"}a(Dr,"getAltAxis");function jr(t){var e=t.state,r=t.options,n=t.name,o=r.mainAxis,i=o===void 0?!0:o,s=r.altAxis,p=s===void 0?!1:s,c=r.boundary,f=r.rootBoundary,l=r.altBoundary,v=r.padding,y=r.tether,u=y===void 0?!0:y,g=r.tetherOffset,d=g===void 0?0:g,h=le(e,{boundary:c,rootBoundary:f,padding:v,altBoundary:l}),O=N(e.placement),P=ee(e.placement),E=!P,m=Se(O),x=Dr(m),b=e.modifiersData.popperOffsets,w=e.rects.reference,A=e.rects.popper,T=typeof d=="function"?d(Object.assign({},e.rects,{placement:e.placement})):d,B=typeof T=="number"?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),$=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,L={x:0,y:0};if(!!b){if(i){var R,te=m==="y"?C:k,re=m==="y"?S:M,D=m==="y"?"height":"width",W=b[m],de=W+h[te],X=W-h[re],ve=u?-A[D]/2:0,Oe=P===J?w[D]:A[D],ne=P===J?-A[D]:-w[D],me=e.elements.arrow,K=u&&me?je(me):{width:0,height:0},I=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:dt(),oe=I[te],he=I[re],Y=ie(0,w[D],K[D]),Pe=E?w[D]/2-ve-Y-oe-B.mainAxis:Oe-Y-oe-B.mainAxis,xt=E?-w[D]/2+ve+Y+he+B.mainAxis:ne+Y+he+B.mainAxis,Ee=e.elements.arrow&&ue(e.elements.arrow),wt=Ee?m==="y"?Ee.clientTop||0:Ee.clientLeft||0:0,He=(R=$?.[m])!=null?R:0,Ot=W+Pe-He-wt,Pt=W+xt-He,Ne=ie(u?xe(de,Ot):de,W,u?G(X,Pt):X);b[m]=Ne,L[m]=Ne-W}if(p){var Ve,Et=m==="x"?C:k,At=m==="x"?S:M,z=b[x],ge=x==="y"?"height":"width",qe=z+h[Et],Ie=z-h[At],Ae=[C,k].indexOf(O)!==-1,Ue=(Ve=$?.[x])!=null?Ve:0,Xe=Ae?qe:z-w[ge]-A[ge]-Ue+B.altAxis,Ye=Ae?z+w[ge]+A[ge]-Ue-B.altAxis:Ie,ze=u&&Ae?nr(Xe,z,Ye):ie(u?Xe:qe,z,u?Ye:Ie);b[x]=ze,L[x]=ze-z}e.modifiersData[n]=L}}a(jr,"preventOverflow");var Sr={name:"preventOverflow",enabled:!0,phase:"main",fn:jr,requiresIfExists:["offset"]};function Mr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}a(Mr,"getHTMLElementScroll");function Lr(t){return t===H(t)||!j(t)?Me(t):Mr(t)}a(Lr,"getNodeScroll");function Wr(t){var e=t.getBoundingClientRect(),r=Z(e.width)/t.offsetWidth||1,n=Z(e.height)/t.offsetHeight||1;return r!==1||n!==1}a(Wr,"isElementScaled");function Fr(t,e,r){r===void 0&&(r=!1);var n=j(e),o=j(e)&&Wr(e),i=U(e),s=_(t,o),p={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(n||!n&&!r)&&((V(e)!=="body"||We(i))&&(p=Lr(e)),j(e)?(c=_(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):i&&(c.x=Le(i))),{x:s.left+p.scrollLeft-c.x,y:s.top+p.scrollTop-c.y,width:s.width,height:s.height}}a(Fr,"getCompositeRect");function Hr(t){var e=new Map,r=new Set,n=[];t.forEach(function(i){e.set(i.name,i)});function o(i){r.add(i.name);var s=[].concat(i.requires||[],i.requiresIfExists||[]);s.forEach(function(p){if(!r.has(p)){var c=e.get(p);c&&o(c)}}),n.push(i)}return a(o,"sort"),t.forEach(function(i){r.has(i.name)||o(i)}),n}a(Hr,"order");function Nr(t){var e=Hr(t);return Qt.reduce(function(r,n){return r.concat(e.filter(function(o){return o.phase===n}))},[])}a(Nr,"orderModifiers");function Vr(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}a(Vr,"debounce");function qr(t){var e=t.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}a(qr,"mergeByName");var tt={placement:"bottom",modifiers:[],strategy:"absolute"};function rt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}a(rt,"areValidElements");function Ir(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,o=e.defaultOptions,i=o===void 0?tt:o;return a(function(p,c,f){f===void 0&&(f=i);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},tt,i),modifiersData:{},elements:{reference:p,popper:c},attributes:{},styles:{}},v=[],y=!1,u={state:l,setOptions:a(function(O){var P=typeof O=="function"?O(l.options):O;d(),l.options=Object.assign({},i,l.options,P),l.scrollParents={reference:Q(p)?se(p):p.contextElement?se(p.contextElement):[],popper:se(c)};var E=Nr(qr([].concat(n,l.options.modifiers)));return l.orderedModifiers=E.filter(function(m){return m.enabled}),g(),u.update()},"setOptions"),forceUpdate:a(function(){if(!y){var O=l.elements,P=O.reference,E=O.popper;if(!!rt(P,E)){l.rects={reference:Fr(P,ue(E),l.options.strategy==="fixed"),popper:je(E)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(B){return l.modifiersData[B.name]=Object.assign({},B.data)});for(var m=0;m<l.orderedModifiers.length;m++){if(l.reset===!0){l.reset=!1,m=-1;continue}var x=l.orderedModifiers[m],b=x.fn,w=x.options,A=w===void 0?{}:w,T=x.name;typeof b=="function"&&(l=b({state:l,options:A,name:T,instance:u})||l)}}}},"forceUpdate"),update:Vr(function(){return new Promise(function(h){u.forceUpdate(),h(l)})}),destroy:a(function(){d(),y=!0},"destroy")};if(!rt(p,c))return u;u.setOptions(f).then(function(h){!y&&f.onFirstUpdate&&f.onFirstUpdate(h)});function g(){l.orderedModifiers.forEach(function(h){var O=h.name,P=h.options,E=P===void 0?{}:P,m=h.effect;if(typeof m=="function"){var x=m({state:l,name:O,instance:u,options:E}),b=a(function(){},"noopFn");v.push(x||b)}})}a(g,"runModifierEffects");function d(){v.forEach(function(h){return h()}),v=[]}return a(d,"cleanupModifierEffects"),u},"createPopper")}a(Ir,"popperGenerator");var Ur=[dr,Rr,fr,er,Cr,Er,Sr,sr,Br],Xr=Ir({defaultModifiers:Ur});const Yr=ke('<div role="tooltip"></div>'),zr=nt()({name:"MuiPopperUnstyled",selfPropNames:["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","ref","transition"],propDefaults:({set:t})=>t({direction:"ltr",disablePortal:!1,keepMounted:!1,placement:"bottom",transition:!1,popperOptions:{}})});function Gr(t,e){if(e==="ltr")return t;switch(t){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return t}}a(Gr,"flipPlacement");function Te(t){return typeof t=="function"?t():t}a(Te,"resolveAnchorEl");const Kr=a(function(e){const[r,n]=kt(e,["anchorEl","children","direction","disablePortal","modifiers","open","TransitionProps","placement","popperOptions","popperRef"]),o=Gr(r.placement,r.direction),[i,s]=pe(o);let p=[];const c=Mt(),f=Lt();Rt(v=>{if(v&&(p=p.filter(d=>d!==v),v()),!r.anchorEl||!r.open)return;Te(r.anchorEl);let y=[{name:"preventOverflow",options:{altBoundary:r.disablePortal}},{name:"flip",options:{altBoundary:r.disablePortal}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:d})=>{s(d.placement)}}];r.modifiers!=null&&(y=y.concat(r.modifiers)),r.popperOptions&&r.popperOptions.modifiers!=null&&(y=y.concat(r.popperOptions.modifiers));const u=Xr(Te(r.anchorEl),c.ref,{placement:o,...r.popperOptions,modifiers:y});f(u);const g=a(()=>{u.destroy(),f(null)},"destructor");return p.push(g),g}),Dt(()=>{f.ref&&f.ref.forceUpdate()});const l=Be(()=>({placement:i(),TransitionProps:r.TransitionProps}));return(()=>{const v=Yr.cloneNode(!0);return c(v),jt(v,n,!1,!0),Ce(v,(()=>{const y=at(()=>typeof r.children=="function",!0);return()=>y()?r.children(l()):r.children})()),v})()},"PopperTooltip"),Jr=zr.component(a(function({otherProps:e,props:r}){const[n,o]=pe(!0),i=Be(()=>!r.keepMounted&&!r.open&&(!r.transition||n())),s=Be(()=>r.container||(r.anchorEl?St(Te(r.anchorEl)).body:void 0));return F($t.Provider,{value:{get in(){return r.transition&&r.open},onEnter:()=>{r.transition&&o(!1)},onExited:()=>{r.transition&&o(!0)}},get children(){return F(Tt,{get when(){return!i()},get children(){return F(Ct,{get disablePortal(){return r.disablePortal},get container(){return s()},get children(){return F(Kr,ot({get anchorEl(){return r.anchorEl},get direction(){return r.direction},get disablePortal(){return r.disablePortal},get modifiers(){return r.modifiers},get open(){return at(()=>!!r.transition,!0)()?!n():r.open},get placement(){return r.placement},get popperOptions(){return r.popperOptions},get popperRef(){return r.popperRef}},e,{get style(){return{position:"fixed",top:0,left:0,display:!r.open&&r.keepMounted&&(!r.transition||n())?"none":null,...e.style&&typeof e.style!="string"?e.style:{}}},get children(){return r.children}}))}})}})}})},"PopperUnstyled")),Qr=nt()({name:"MuiPopper",selfPropNames:[]}),Fe=Qr.component(a(function({otherProps:e}){const r=Wt();return F(Jr,ot({get direction(){return r?.direction}},e))},"Popper")),Zr=ke('<div><button type="button">Toggle Popper</button></div>');function yt(){const[t,e]=pe(null),r=a(()=>!!t(),"open"),n=a(()=>r()?"simple-popper":void 0,"id");return(()=>{const o=Zr.cloneNode(!0),i=o.firstChild;return i.$$click=s=>{e(t()?null:s.currentTarget)},Ce(o,F(Fe,{get id(){return n()},get open(){return r()},get anchorEl(){return t()},get children(){return F(st,{sx:{border:1,p:1,bgcolor:"background.paper"},children:"The content of the Popper."})}}),null),pt(()=>ct(i,"aria-describedby",n())),o})()}a(yt,"SimplePopperExample");yt.code=`import Box from "@suid/material/Box";
import Popper from "@suid/material/Popper";
import { createSignal } from "solid-js";

export default function SimplePopperExample() {
  const [anchorEl, setAnchorEl] = createSignal<HTMLButtonElement | null>(null);

  const open = () => !!anchorEl();
  const id = () => (open() ? "simple-popper" : undefined);

  return (
    <div>
      <button
        aria-describedby={id()}
        type="button"
        onClick={(event) => {
          setAnchorEl(anchorEl() ? null : event.currentTarget);
        }}
      >
        Toggle Popper
      </button>
      <Popper id={id()} open={open()} anchorEl={anchorEl()}>
        <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
          The content of the Popper.
        </Box>
      </Popper>
    </div>
  );
}
`;it(["click"]);const _r=ke('<div><button type="button">Toggle Popper</button></div>');function bt(){const[t,e]=pe(!1),[r,n]=pe(null),o=a(()=>t()&&!!r(),"canBeOpen"),i=a(()=>o()?"transition-popper":void 0,"id");return(()=>{const s=_r.cloneNode(!0),p=s.firstChild;return p.$$click=c=>{n(c.currentTarget),e(f=>!f)},Ce(s,F(Fe,{get id(){return i()},get open(){return t()},get anchorEl(){return r()},transition:!0,get children(){return F(Ft,{get children(){return F(st,{sx:{border:1,p:1,bgcolor:"background.paper"},children:"The content of the Popper."})}})}}),null),pt(()=>ct(p,"aria-describedby",i())),s})()}a(bt,"TransitionsPopperExample");bt.code=`import Box from "@suid/material/Box";
import Fade from "@suid/material/Fade";
import Popper from "@suid/material/Popper";
import { createSignal } from "solid-js";

export default function TransitionsPopperExample() {
  const [open, setOpen] = createSignal(false);
  const [anchorEl, setAnchorEl] = createSignal<HTMLButtonElement | null>(null);
  const canBeOpen = () => open() && !!anchorEl();
  const id = () => (canBeOpen() ? "transition-popper" : undefined);

  return (
    <div>
      <button
        aria-describedby={id()}
        type="button"
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
          setOpen((previousOpen) => !previousOpen);
        }}
      >
        Toggle Popper
      </button>
      <Popper id={id()} open={open()} anchorEl={anchorEl()} transition>
        <Fade>
          <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
            The content of the Popper.
          </Box>
        </Fade>
      </Popper>
    </div>
  );
}
`;it(["click"]);function sn(){return F(Ht,{get name(){return Fe.name},examples:[yt,bt]})}a(sn,"PopperPage");export{sn as default};
