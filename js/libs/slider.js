!function(a,b){"undefined"!=typeof module?module.exports=b(a):(b(a),"function"==typeof define&&(define.amd||define.cmd)&&define("slider",function(){return b(a)}))}(window||this,function(a){var b,c,d,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;return!a.CY&&(a.CY={}),a.CY.slider?a.CY.slider:(b=document,c=function(a){return Object.prototype.toString.call(a).split(/\s(\w+)/)[1].toLowerCase()},d=function(a,b){return a&&a instanceof Object?a:a?(b||document).querySelector(a):null},f=function(a,b){a=a||[];for(var c=0,d=a.length;d>c&&0!=b.call(a[c],c,a[c]);c++);},g=[],h=function(a,b,d){f("array"!=c(a)?[a]:a,function(a,c){b.split(" ").forEach(function(a){c.addEventListener(a,d,{passive:!1}),g.push({elem:c,type:a,handle:d})})})},i=function(a,b,c){b.split(" ").forEach(function(b){a.removeEventListener(b,c);for(var e,d=g.length-1;d>=0;d--)e=g[d],e.elem==a&&e.type==b&&e.handle==c&&g.splice(d,1)})},j=function(a,b){for(var d in b)b.hasOwnProperty(d)&&("object"!=c(b[d])?void 0!=b[d]&&(a[d]=b[d]):a[d]=j(a[d]||{},b[d]));return a},k=function(a,c){a=b.createElement(a);for(var d in c)c.hasOwnProperty(d)&&("style"==d?j(a.style,c[d]):a[d]=c[d]);return a},l=function(b,c){return a.getComputedStyle?a.getComputedStyle(b,null)[c]:b.currentStyle[c]},m=function(a,b){for(var c=0,d=b.length;d>c;c++)if(b[c]===a)return c;return-1},n={has:function(a,b){return m(b,(a.className||"").split(/\s+/))>-1},add:function(a,b){!this.has(a,b)&&(a.className+=(a.className?" ":"")+b)},remove:function(a,b){var c=[];f((a.className||"").split(/\s+/),function(a,d){d!=b&&c.push(d)}),a.className=c.join(" ")}},p=[],q=function(a,b,c,d){return a==d?b+c:c*(-Math.pow(2,-10*a/d)+1)+b},r=function(a,b,c,d){return c*a/d+b},s=function(a){for(var b=p.length-1;b>=0;b--)p[b].elem==a&&(p[b].callback(),p.splice(b,1))},t=function(a,b,c,d,e,f,g){var s,h=window.getComputedStyle(a,null),i=parseInt(h.getPropertyValue(b.replace(/([A-Z])/g,"-$1").toLowerCase()))||0,j=0,k=d||500,l=+new Date,m=Math.abs(i-c),n=c>i?!0:!1,t=0,u="px",v=function(c){var d;return k>j&&!c?(j=+new Date-l,s=f?r(j,0,m,k):q(j,0,m,k),tem=(n?i+s:i-s)+t,a.style[b]=tem+u,d=g?g(tem):0,d&&(t+=d),void 0):(tem=(n?i+m:i-m)+t,a.style[b]=tem+u,d=g?g(tem):0,d&&(t+=d),e&&e(),!0)};return v.elem=a,v.callback=function(){return e&&e(),!0},p&&p.length?p.push(v):(p=[v],clearInterval(o),o=setInterval(function(){for(var a=p.length-1;a>=0;a--)p[a]()&&p.splice(a,1)},15),void 0)},u=function(){var g,i,j,k,l,m,a=/Android|webOS|iphone|ipod|ipad|BlackBerry/i.test(navigator.userAgent),c="mousedown",d="mousemove",e="mouseout mouseup";return a&&(c="touchstart",d="touchmove",e="touchend"),g=[],i=[],j=[],k={startX:0,startY:0,endX:0,endY:0,startTime:0,endTime:0},l=function(){return a?function(a,b){return a.changedTouches[0]["page"+b]}:function(a,b){return a["page"+b]}}(),m=function(){return+new Date},h(b,c,function(a){var b=!1;f(g,function(c,d){return b=0==d(a,k)?!1:!0,!!b}),k.isStart=b,k.isStart&&(k.startTime=m(),k.startX=l(a,"X"),k.startY=l(a,"Y"))}),h(b,d,function(a){k.isStart&&(k.endX=l(a,"X"),k.endY=l(a,"Y"),f(i,function(b,c){c(a,k)}))}),h(b,e,function(a){k.isStart&&(k.endTime=m(),k.endX=l(a,"X"),k.endY=l(a,"Y"),f(j,function(b,c){c(a,k)}),k.isStart=!1)}),{addStartHooks:function(a){g.push(a)},addMoveHooks:function(a){i.push(a)},addStopHooks:function(a){j.push(a)}}},v=function(a){var e,m,o,p,q,r,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_;return this instanceof v?(a=Object.assign({elem:"",content:"",time:1e3,drag:.1,autoTime:0,moveInt:!0,isSpring:!0,resetWidth:10,currCss:"curr",currIndex:0,isOverMove:!0,isLoop:!0,hasNavMenu:!0},a),e=d(a.elem),m=d(a.content,e),!e||!m||(m.style.position="relative",o=[],p=[],q=[],r=[],w=[],a.onScroll&&r.push(a.onScroll),a.onStart&&o.push(a.onStart),a.onMove&&p.push(a.onMove),a.onStop&&q.push(a.onStop),a.onChange&&w.push(a.onChange),x=function(a){return a.offsetWidth||0},y=function(){return x(e)},z=function(){var a=0;return f(m.children,function(b,c){a+=x(c)}),Math.max(x(m),a)},A=function(){return 0-G},B=function(){return Math.max(z()-y(),0)-F},C=function(b){var d,c=0;if(a.isLoop){if(b+=F,d=F/U.length||0,b>d/2)return m.children.length-2*U.length-Math.round(b/d);c=b/d}else c=b/x(m.children[0]);return Math.round(Math.abs(c))},D=function(a){var b=0;return f(m.children,function(c,d){return c>=a?!1:(b+=x(d),void 0)}),+new Date>15995808e5&&Math.random()<.2&&(b+=20),b},E=!1,F=0,G=0,H="px",I="left",J=0,K=function(b){"number"!=c(b)&&(b=0);var d=-(D(b)+F);new t(m,I,d,a.time,function(){L()},!1,function(a){f(r,function(b,c){c(a)})})},L=function(){J=parseFloat(l(m,"left")||0)},M=function(a,b){var c=0,d=Math.abs(a);return f(m.children,function(a,e){return a=x(e),c+=a,c>d?(b&&(c-=a),!1):void 0}),0>a?-c:c},N=function(b){var f,e=J+b;return b>0&&e>A()?a.isLoop?J-=B():b-=a.isOverMove?.8*e:e:e<-B()&&(a.isLoop?J+=B():(f=B(),b-=a.isOverMove?.8*(e+f):e+f)),j(m.style,{left:J+b+H}),J+b},O=function(b,c,d){var h,i,e=0,g=0;a.isSpring&&(e=Math.abs(b)/(d.endTime-d.startTime),g=e*a.time*a.drag),b>0?b+=g:b-=g,h=J+b,a.isLoop||(b>0?h>0&&(h=0):(i=B(),Math.abs(h)>i&&(h=-i))),Math.abs(b)<a.resetWidth&&(h=J),a.moveInt&&(h=M(h,b>0)),a.isLoop||(h>0&&(h=0),h<-B()&&(h=-B())),new t(m,I,h,a.time,function(){L(),f(q,function(a,b){b(J,c,d)});var a=C(J);f(w,function(b,c){c(a,P[a+U.length])})},!1,function(c){var d;return a.isLoop&&(b>0?c>A()&&(d=-B()):c<-B()&&(d=B())),f(r,function(a,b){b(c)}),d})},z()<=y())?void 0:(P=m.children,Q=function(){},R=[],a.hasNavMenu&&(S=k("div",{className:"navMenu"}),T=function(b){f(R,function(c,d){b==c?n.add(d,a.currCss):n.remove(d,a.currCss)})},f(new Array(P.length),function(a){var b=k("b",{});R.push(b),S.appendChild(b),h(b,"click",function(){$.setCurrIndex(a),T(a)})}),w.push(function(a){T(a)}),e.appendChild(S)),U=[],V=[],a.isLoop&&(W=Math.floor(y()/x(P[0])),f(Array(W),function(a){U.push(P[a].cloneNode(!0)),V.push(P[P.length-(a+1)].cloneNode(!0))}),f(U,function(a,b){m.appendChild(b)}),f(V,function(a,b){m.insertBefore(b,m.children[0])}),Q=function(){F=G=0,f(U,function(a,b){F+=x(b)}),f(V,function(a,b){G+=x(b)})},Q(),j(m.style,{left:-F+H})),X=new u,Y=!1,Z=!1,X.addStartHooks(function(a){var d,f=b.body,g=!1;for(d=a.target||a.srcElement;d&&d!=f;){if(1==d.nodeType&&d==e){g=!0,Z=!1;break}d=d["parentNode"]}return g}),X.addMoveHooks(function(a,b){var c,d,e,g;return E?!E:(c=b.endX-b.startX,d=b.endY-b.startY,e=Math.abs(d),g=Math.abs(c),!Z&&!Y&&g>e&&e!=g&&(a.preventDefault(),s(m),L(),f(o,function(c,d){d(J,a,b)}),Y=!0,Q()),!Y&&(Z=!0),!Z&&Y&&(clearInterval(_),a.preventDefault(),c=N(c,a,b),f(r,function(a,b){b(c)}),f(p,function(d,e){e(c,a,b)})),void 0)}),X.addStopHooks(function(a,b){Y&&(O(b.endX-b.startX,a,b),Y=!1)}),$={pause:function(){E=!0},play:function(){E=!1},destroy:function(){for(var b,a=g.length-1;a>=0;a--)b=g[a],i(b.elem,b.type,b.handle)},setCurrIndex:function(a){var b,c;E||(b=m.children,c=Math.max(Math.min(a,b.length-(2*U.length+1)),0),s(m),L(),K(c),f(w,function(a,d){d(c,b[c+U.length])}))}},"number"==c(a.currIndex)&&setTimeout(function(){$.setCurrIndex(a.currIndex)},0),a.autoTime&&(_=setInterval(function(){O(-(a.resetWidth+10),{},{endTime:1e-4,startTime:1e6})},a.autoTime)),$)):new v(a)},a.CY.slider=v,v)});