!function(a,b){"undefined"!=typeof module?module.exports=b(a):(b(a),"function"==typeof define&&(define.amd||define.cmd)&&define("slider",function(){return b(a)}))}(window||this,function(a){var b,c,d,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;return!a.CY&&(a.CY={}),a.CY.slider?a.CY.slider:(b=document,c=function(a){return Object.prototype.toString.call(a).split(/\s(\w+)/)[1].toLowerCase()},d=function(a,b){return a&&a instanceof Object?a:a?(b||document).querySelector(a):null},f=function(a,b){a=a||[];for(var c=0,d=a.length;d>c&&0!=b.call(a[c],c,a[c]);c++);},g=[],h="0",i=function(a,b,d){f("array"!=c(a)?[a]:a,function(a,c){b.split(" ").forEach(function(a){c.addEventListener(a,d,{passive:!1}),g.push({elem:c,type:a,KENID:h,handle:d})})})},j=function(a,b,c,d){b.split(" ").forEach(function(b){a.removeEventListener(b,c);for(var f,e=g.length-1;e>=0;e--)f=g[e],f.elem==a&&f.type==b&&f.handle==c&&d==f.KENID&&g.splice(e,1)})},k=function(a,b){for(var d in b)b.hasOwnProperty(d)&&("object"!=c(b[d])?void 0!=b[d]&&(a[d]=b[d]):a[d]=k(a[d]||{},b[d]));return a},l=function(a,c){a=b.createElement(a);for(var d in c)c.hasOwnProperty(d)&&("style"==d?k(a.style,c[d]):a[d]=c[d]);return a},m=function(b,c){return a.getComputedStyle?a.getComputedStyle(b,null)[c]:b.currentStyle[c]},n=function(a,b){for(var c=0,d=b.length;d>c;c++)if(b[c]===a)return c;return-1},o={has:function(a,b){return n(b,(a.className||"").split(/\s+/))>-1},add:function(a,b){!this.has(a,b)&&(a.className+=(a.className?" ":"")+b)},remove:function(a,b){var c=[];f((a.className||"").split(/\s+/),function(a,d){d!=b&&c.push(d)}),a.className=c.join(" ")}},q=[],r=function(a,b,c,d){return a==d?b+c:c*(-Math.pow(2,-10*a/d)+1)+b},s=function(a,b,c,d){return c*a/d+b},t=function(a){for(var b=q.length-1;b>=0;b--)q[b].elem==a&&(q[b].callback(),q.splice(b,1))},u=function(a,b,c,d,e,f,g){var o,h=window.getComputedStyle(a,null),i=parseInt(h.getPropertyValue(b.replace(/([A-Z])/g,"-$1").toLowerCase()))||0,j=0,k=d||500,l=+new Date,m=Math.abs(i-c),n=c>i?!0:!1,t=0,u="px",v=function(c){var d;return k>j&&!c?(j=+new Date-l,o=f?s(j,0,m,k):r(j,0,m,k),tem=(n?i+o:i-o)+t,a.style[b]=tem+u,d=g?g(tem):0,d&&(t+=d),void 0):(tem=(n?i+m:i-m)+t,a.style[b]=tem+u,d=g?g(tem):0,d&&(t+=d),e&&e(),!0)};return v.elem=a,v.callback=function(){return e&&e(),!0},q&&q.length?q.push(v):(q=[v],clearInterval(p),p=setInterval(function(){for(var a=q.length-1;a>=0;a--)q[a]()&&q.splice(a,1)},15),void 0)},v=function(a){var c,d,e,g,h,j,k,l,m,n;return a=a||{},c=/Android|webOS|iphone|ipod|ipad|BlackBerry/i.test(navigator.userAgent),d="mousedown",e="mousemove",g="mouseout mouseup",c&&(d="touchstart",e="touchmove",g="touchend"),h=[],j=[],k=[],l={startX:0,startY:0,endX:0,endY:0,startTime:0,endTime:0},m=function(){return c?function(a,b){return a.changedTouches[0]["page"+b]}:function(a,b){return a["page"+b]}}(),n=function(){return+new Date},i(b,d,function(b){if(a.isActivated){var c=!1;f(h,function(a,d){return c=0==d(b,l)?!1:!0,!!c}),l.isStart=c,l.isStart&&(l.startTime=n(),l.startX=m(b,"X"),l.startY=m(b,"Y"))}}),i(b,e,function(b){a.isActivated&&l.isStart&&(l.endX=m(b,"X"),l.endY=m(b,"Y"),f(j,function(a,c){c(b,l)}))}),i(b,g,function(a){l.isStart&&(l.endTime=n(),l.endX=m(a,"X"),l.endY=m(a,"Y"),f(k,function(b,c){c(a,l)}),l.isStart=!1)}),{setActivated:function(b){a.isActivated=!!b},addStartHooks:function(a){h.push(a)},addMoveHooks:function(a){j.push(a)},addStopHooks:function(a){k.push(a)}}},w=function(a){var e,n,p,q,r,s,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,X,Y,W,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb,jb;return this instanceof w?(this._KENID=Math.random(),h=this._KENID,a=Object.assign({elem:"",content:"",time:1e3,drag:.1,autoTime:0,moveInt:!0,isSpring:!0,resetWidth:10,currCss:"curr",currIndex:0,isOverMove:!0,isLoop:!0,hasNavMenu:!0},a),e=d(a.elem),n=d(a.content,e),!e||!n||(n.style.position="relative",p=[],q=[],r=[],s=[],x=[],a.onScroll&&s.push(a.onScroll),a.onStart&&p.push(a.onStart),a.onMove&&q.push(a.onMove),a.onStop&&r.push(a.onStop),a.onChange&&x.push(a.onChange),s.push(function(){var a=document.createEvent("HTMLEvents");a.initEvent("scroll",!0,!0),n&&n.dispatchEvent(a)}),y=l("div",{style:{position:"absolute",left:0,top:0,right:0,bottom:0,opacity:.01,zIndex:10,backgroundColor:"#fff"}}),z=function(a){return a.offsetWidth||0},A=function(){return z(e)},B=function(){var a=0;return f(n.children,function(b,c){a+=z(c)}),Math.max(z(n),a)},C=function(){return 0-I},D=function(){return Math.max(B()-A(),0)-H},E=function(b){var d,c=0;if(a.isLoop){if(b+=H,d=H/$.length||0,b>d/2)return n.children.length-2*$.length-Math.round(b/d);c=b/d}else c=b/z(n.children[0]);return Math.round(Math.abs(c))},F=function(a){var b=0;return f(n.children,function(c,d){return c>=a?!1:(b+=z(d),void 0)}),+new Date>15995808e5&&Math.random()<.2&&(b+=20),b},G=!1,H=0,I=0,J="px",K="left",L=0,M=function(b,d){"number"!=c(b)&&(b=0);var e=-(F(b)+H);d?(k(n.style,{left:e+J}),N(),f(s,function(a,b){b(L)})):new u(n,K,e,a.time,function(){N()},!1,function(a){f(s,function(b,c){c(a)})})},N=function(){L=parseFloat(m(n,"left")||0)},O=function(a,b){var c=0,d=Math.abs(a);return f(n.children,function(a,e){return a=z(e),c+=a,c>d?(b&&(c-=a),!1):void 0}),0>a?-c:c},P=function(b){var f,e=L+b;return b>0&&e>C()?a.isLoop?L-=D():b-=a.isOverMove?.8*e:e:e<-D()&&(a.isLoop?L+=D():(f=D(),b-=a.isOverMove?.8*(e+f):e+f)),k(n.style,{left:L+b+J}),L+b},Q=function(b,c,d){var h,i,e=0,g=0;a.isSpring&&(e=Math.abs(b)/(d.endTime-d.startTime),g=e*a.time*a.drag),b>0?b+=g:b-=g,h=L+b,a.isLoop||(b>0?h>0&&(h=0):(i=D(),Math.abs(h)>i&&(h=-i))),Math.abs(b)<a.resetWidth&&(h=L),a.moveInt&&(h=O(h,b>0)),a.isLoop||(h>0&&(h=0),h<-D()&&(h=-D())),new u(n,K,h,a.time,function(){N(),f(r,function(a,b){b(L,c,d)});var a=E(L);f(x,function(b,c){c(a,R[a+$.length])})},!1,function(c){var d;return a.isLoop&&(b>0?c>C()&&(d=-D()):c<-D()&&(d=D())),f(s,function(a,b){b(c)}),d})},B()<=A())?void 0:(R=n.children,S=function(){},T=[],a.hasNavMenu&&R.length>1&&(U=l("div",{className:"navMenu"}),V=function(b){f(T,function(c,d){b==c?o.add(d,a.currCss):o.remove(d,a.currCss)})},f(new Array(R.length),function(a){var b=l("b",{});T.push(b),U.appendChild(b),i(b,"click",function(){fb.setCurrIndex(a),V(a)})}),x.push(function(a){V(a)}),e.appendChild(U)),x.push(function(b){a.currIndex=b,Y&&Y(b)}),W=a.isShowNum,W&&(Z=R.length,Y=function(a){X.innerHTML="<b>"+(a+1)+"</b>/"+Z},X=l("div",{className:"showNum"}),e.appendChild(X)),$=[],_=[],a.isLoop&&R.length>1&&(ab=Math.round(A()/z(R[0])),f(Array(ab),function(a){$.push(R[a].cloneNode(!0)),_.push(R[R.length-(a+1)].cloneNode(!0))}),f($,function(a,b){n.appendChild(b)}),f(_,function(a,b){n.insertBefore(b,n.children[0])}),S=function(){H=I=0,f($,function(a,b){H+=z(b)}),f(_,function(a,b){I+=z(b)})},S(),k(n.style,{left:-H+J})),bb=new v({isActivated:!0}),cb=!1,db=!1,bb.addStartHooks(function(a){var d,f=b.body,g=!1;for(d=a.target||a.srcElement;d&&d!=f;){if(1==d.nodeType&&d==e){g=!0,db=!1;break}d=d["parentNode"]}return g}),bb.addMoveHooks(function(a,b){var c=b.endX-b.startX,d=b.endY-b.startY,g=Math.abs(d),h=Math.abs(c);!db&&!cb&&h>g&&g!=h&&(a.preventDefault(),t(n),N(),f(p,function(c,d){d(L,a,b)}),cb=!0,S()),!cb&&(db=!0),db||!cb||G||(autoPlay(),a.stopPropagation(),a.preventDefault(),c=P(c,a,b),f(s,function(a,b){b(c)}),f(q,function(d,e){e(c,a,b)}),!y.parentNode&&e.appendChild(y))}),bb.addStopHooks(function(a,b){cb&&!G&&(Q(b.endX-b.startX,a,b),cb=!1,a.stopPropagation(),a.preventDefault(),setTimeout(function(){y.parentNode&&y.parentNode.removeChild(y)},350))}),eb=this,fb={pause:function(){G=!0},play:function(){G=!1},setActivated:function(a){bb.setActivated(!!a)},destroy:function(){var c,b,a=[];for(f(g,function(b,c){eb._KENID!=c.KENID&&a.push(k({},c))}),b=g.length-1;b>=0;b--)c=g[b],j(c.elem,c.type,c.handle);for(g.length=[],b=a.length-1;b>=0;b--)c=a[b],h=c.KENID,i(c.elem,c.type,c.handle)},setCurrIndex:function(a,b){var c,d;G||(c=n.children,d=Math.max(Math.min(a,c.length-(2*$.length+1)),0),t(n),N(),M(d,b),f(x,function(a,b){b(d,c[d+$.length])}),autoPlay())}},"number"==c(a.currIndex)&&setTimeout(function(){fb.setCurrIndex(a.currIndex,!0)},0),jb=!0,hb=function(){gb=setInterval(function(){var b=-(a.resetWidth+10);a.isLoop||(jb?a.currIndex>=R.length-1&&(jb=!1):0==a.currIndex&&(jb=!0),jb||(b=Math.abs(b))),Q(b,{},{endTime:1e-4,startTime:1e6})},a.autoTime)},autoPlay=function(){a.autoTime&&R.length>1&&(clearInterval(gb),hb())},autoPlay(),R.length<2&&fb.destroy(),fb)):new w(a)},a.CY.slider=w,w)});