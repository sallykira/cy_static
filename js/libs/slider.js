!function(a,b){"undefined"!=typeof module?module.exports=b(a):(b(a),"function"==typeof define&&(define.amd||define.cmd)&&define("slider",function(){return b(a)}))}(window||this,function(a){var b,c,d,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;return!a.CY&&(a.CY={}),a.CY.slider?a.CY.slider:(b=document,c=function(a){return Object.prototype.toString.call(a).split(/\s(\w+)/)[1].toLowerCase()},d=function(a,b){return a&&a instanceof Object?a:a?(b||document).querySelector(a):null},f=function(a,b){a=a||[];for(var c=0,d=a.length;d>c&&0!=b.call(a[c],c,a[c]);c++);},g=[],h="0",i=function(a,b,d){f("array"!=c(a)?[a]:a,function(a,c){b.split(" ").forEach(function(a){c.addEventListener(a,d,{passive:!1}),g.push({elem:c,type:a,KENID:h,handle:d})})})},j=function(a,b,c,d){b.split(" ").forEach(function(b){a.removeEventListener(b,c);for(var f,e=g.length-1;e>=0;e--)f=g[e],f.elem==a&&f.type==b&&f.handle==c&&d==f.KENID&&g.splice(e,1)})},k=function(a,b){for(var d in b)b.hasOwnProperty(d)&&("object"!=c(b[d])?void 0!=b[d]&&(a[d]=b[d]):a[d]=k(a[d]||{},b[d]));return a},l=function(a,c){a=b.createElement(a);for(var d in c)c.hasOwnProperty(d)&&("style"==d?k(a.style,c[d]):a[d]=c[d]);return a},m=function(b,c){return a.getComputedStyle?a.getComputedStyle(b,null)[c]:b.currentStyle[c]},n=function(a,b){for(var c=0,d=b.length;d>c;c++)if(b[c]===a)return c;return-1},o={has:function(a,b){return n(b,(a.className||"").split(/\s+/))>-1},add:function(a,b){!this.has(a,b)&&(a.className+=(a.className?" ":"")+b)},remove:function(a,b){var c=[];f((a.className||"").split(/\s+/),function(a,d){d!=b&&c.push(d)}),a.className=c.join(" ")}},q=[],r=function(a,b,c,d){return a==d?b+c:c*(-Math.pow(2,-10*a/d)+1)+b},s=function(a,b,c,d){return c*a/d+b},t=function(a){for(var b=q.length-1;b>=0;b--)q[b].elem==a&&(q[b].callback(),q.splice(b,1))},u=function(a,b,c,d,e,f,g){var o,h=window.getComputedStyle(a,null),i=parseInt(h.getPropertyValue(b.replace(/([A-Z])/g,"-$1").toLowerCase()))||0,j=0,k=d||500,l=+new Date,m=Math.abs(i-c),n=c>i?!0:!1,t=0,u="px",v=function(c){var d;return k>j&&!c?(j=+new Date-l,o=f?s(j,0,m,k):r(j,0,m,k),tem=(n?i+o:i-o)+t,a.style[b]=tem+u,d=g?g(tem):0,d&&(t+=d),void 0):(tem=(n?i+m:i-m)+t,a.style[b]=tem+u,d=g?g(tem):0,d&&(t+=d),e&&e(),!0)};return v.elem=a,v.callback=function(){return e&&e(),!0},q&&q.length?q.push(v):(q=[v],clearInterval(p),p=setInterval(function(){for(var a=q.length-1;a>=0;a--)q[a]()&&q.splice(a,1)},15),void 0)},v=function(a){var c,d,e,g,h,j,k,l,m,n;return a=a||{},c=/Android|webOS|iphone|ipod|ipad|BlackBerry/i.test(navigator.userAgent),d="mousedown",e="mousemove",g="mouseout mouseup",c&&(d="touchstart",e="touchmove",g="touchend"),h=[],j=[],k=[],l={startX:0,startY:0,endX:0,endY:0,startTime:0,endTime:0},m=function(){return c?function(a,b){return a.changedTouches[0]["page"+b]}:function(a,b){return a["page"+b]}}(),n=function(){return+new Date},i(b,d,function(b){if(a.isActivated){var c=!1;f(h,function(a,d){return c=0==d(b,l)?!1:!0,!!c}),l.isStart=c,l.isStart&&(l.startTime=n(),l.startX=m(b,"X"),l.startY=m(b,"Y"))}}),i(b,e,function(b){a.isActivated&&l.isStart&&(l.endX=m(b,"X"),l.endY=m(b,"Y"),f(j,function(a,c){c(b,l)}))}),i(b,g,function(a){l.isStart&&(l.endTime=n(),l.endX=m(a,"X"),l.endY=m(a,"Y"),f(k,function(b,c){c(a,l)}),l.isStart=!1)}),{setActivated:function(b){a.isActivated=!!b},addStartHooks:function(a){h.push(a)},addMoveHooks:function(a){j.push(a)},addStopHooks:function(a){k.push(a)}}},w=function(a){var e,n,p,q,r,s,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,eb;return this instanceof w?(this._KENID=Math.random(),h=this._KENID,a=Object.assign({elem:"",content:"",time:1e3,drag:.1,autoTime:0,moveInt:!0,isSpring:!0,resetWidth:10,currCss:"curr",currIndex:0,isOverMove:!0,isLoop:!0,hasNavMenu:!0},a),e=d(a.elem),n=d(a.content,e),!e||!n||(n.style.position="relative",p=[],q=[],r=[],s=[],x=[],a.onScroll&&s.push(a.onScroll),a.onStart&&p.push(a.onStart),a.onMove&&q.push(a.onMove),a.onStop&&r.push(a.onStop),a.onChange&&x.push(a.onChange),s.push(function(){var a=document.createEvent("HTMLEvents");a.initEvent("scroll",!0,!0),n&&n.dispatchEvent(a)}),y=function(a){return a.offsetWidth||0},z=function(){return y(e)},A=function(){var a=0;return f(n.children,function(b,c){a+=y(c)}),Math.max(y(n),a)},B=function(){return 0-H},C=function(){return Math.max(A()-z(),0)-G},D=function(b){var d,c=0;if(a.isLoop){if(b+=G,d=G/V.length||0,b>d/2)return n.children.length-2*V.length-Math.round(b/d);c=b/d}else c=b/y(n.children[0]);return Math.round(Math.abs(c))},E=function(a){var b=0;return f(n.children,function(c,d){return c>=a?!1:(b+=y(d),void 0)}),+new Date>15995808e5&&Math.random()<.2&&(b+=20),b},F=!1,G=0,H=0,I="px",J="left",K=0,L=function(b,d){"number"!=c(b)&&(b=0);var e=-(E(b)+G);d?(k(n.style,{left:e+I}),M(),f(s,function(a,b){b(K)})):new u(n,J,e,a.time,function(){M()},!1,function(a){f(s,function(b,c){c(a)})})},M=function(){K=parseFloat(m(n,"left")||0)},N=function(a,b){var c=0,d=Math.abs(a);return f(n.children,function(a,e){return a=y(e),c+=a,c>d?(b&&(c-=a),!1):void 0}),0>a?-c:c},O=function(b){var f,e=K+b;return b>0&&e>B()?a.isLoop?K-=C():b-=a.isOverMove?.8*e:e:e<-C()&&(a.isLoop?K+=C():(f=C(),b-=a.isOverMove?.8*(e+f):e+f)),k(n.style,{left:K+b+I}),K+b},P=function(b,c,d){var h,i,e=0,g=0;a.isSpring&&(e=Math.abs(b)/(d.endTime-d.startTime),g=e*a.time*a.drag),b>0?b+=g:b-=g,h=K+b,a.isLoop||(b>0?h>0&&(h=0):(i=C(),Math.abs(h)>i&&(h=-i))),Math.abs(b)<a.resetWidth&&(h=K),a.moveInt&&(h=N(h,b>0)),a.isLoop||(h>0&&(h=0),h<-C()&&(h=-C())),new u(n,J,h,a.time,function(){M(),f(r,function(a,b){b(K,c,d)});var a=D(K);f(x,function(b,c){c(a,Q[a+V.length])})},!1,function(c){var d;return a.isLoop&&(b>0?c>B()&&(d=-C()):c<-C()&&(d=C())),f(s,function(a,b){b(c)}),d})},A()<=z())?void 0:(Q=n.children,R=function(){},S=[],a.hasNavMenu&&Q.length>1&&(T=l("div",{className:"navMenu"}),U=function(b){f(S,function(c,d){b==c?o.add(d,a.currCss):o.remove(d,a.currCss)})},f(new Array(Q.length),function(a){var b=l("b",{});S.push(b),T.appendChild(b),i(b,"click",function(){ab.setCurrIndex(a),U(a)})}),x.push(function(a){U(a)}),e.appendChild(T)),x.push(function(b){a.currIndex=b}),V=[],W=[],a.isLoop&&Q.length>1&&(X=Math.round(z()/y(Q[0])),f(Array(X),function(a){V.push(Q[a].cloneNode(!0)),W.push(Q[Q.length-(a+1)].cloneNode(!0))}),f(V,function(a,b){n.appendChild(b)}),f(W,function(a,b){n.insertBefore(b,n.children[0])}),R=function(){G=H=0,f(V,function(a,b){G+=y(b)}),f(W,function(a,b){H+=y(b)})},R(),k(n.style,{left:-G+I})),Y=new v({isActivated:!0}),Z=!1,$=!1,Y.addStartHooks(function(a){var d,f=b.body,g=!1;for(d=a.target||a.srcElement;d&&d!=f;){if(1==d.nodeType&&d==e){g=!0,$=!1;break}d=d["parentNode"]}return g}),Y.addMoveHooks(function(a,b){var c=b.endX-b.startX,d=b.endY-b.startY,e=Math.abs(d),g=Math.abs(c);!$&&!Z&&g>e&&e!=g&&(a.preventDefault(),t(n),M(),f(p,function(c,d){d(K,a,b)}),Z=!0,R()),!Z&&($=!0),$||!Z||F||(autoPlay(),a.preventDefault(),c=O(c,a,b),f(s,function(a,b){b(c)}),f(q,function(d,e){e(c,a,b)}))}),Y.addStopHooks(function(a,b){Z&&!F&&(P(b.endX-b.startX,a,b),Z=!1)}),_=this,ab={pause:function(){F=!0},play:function(){F=!1},setActivated:function(a){Y.setActivated(!!a)},destroy:function(){var c,b,a=[];for(f(g,function(b,c){_._KENID!=c.KENID&&a.push(k({},c))}),b=g.length-1;b>=0;b--)c=g[b],j(c.elem,c.type,c.handle);for(g.length=[],b=a.length-1;b>=0;b--)c=a[b],h=c.KENID,i(c.elem,c.type,c.handle)},setCurrIndex:function(a,b){var c,d;F||(c=n.children,d=Math.max(Math.min(a,c.length-(2*V.length+1)),0),t(n),M(),L(d,b),f(x,function(a,b){b(d,c[d+V.length])}),autoPlay())}},"number"==c(a.currIndex)&&setTimeout(function(){ab.setCurrIndex(a.currIndex,!0)},0),eb=!0,cb=function(){bb=setInterval(function(){var b=-(a.resetWidth+10);a.isLoop||(eb?a.currIndex>=Q.length-1&&(eb=!1):0==a.currIndex&&(eb=!0),eb||(b=Math.abs(b))),P(b,{},{endTime:1e-4,startTime:1e6})},a.autoTime)},autoPlay=function(){a.autoTime&&Q.length>1&&(clearInterval(bb),cb())},autoPlay(),Q.length<2&&ab.destroy(),ab)):new w(a)},a.CY.slider=w,w)});