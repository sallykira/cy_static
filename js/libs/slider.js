!function(a,b){"undefined"!=typeof module?module.exports=b(a):(b(a),"function"==typeof define&&(define.amd||define.cmd)&&define("slider",function(){return b(a)}))}(window||this,function(a){var b,c,d,e,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;return!a.CY&&(a.CY={}),a.CY.slider?a.CY.slider:(window.requestAnimationFrame||(b=0,window.requestAnimationFrame=function(a){var c=(new Date).getTime(),d=Math.max(0,16.7-(c-b)),e=window.setTimeout(function(){a(c+d)},d);return b=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),c=document,d=function(a){return Object.prototype.toString.call(a).split(/\s(\w+)/)[1].toLowerCase()},e=function(a,b){return a&&a instanceof Object?a:a?(b||document).querySelector(a):null},g=function(a,b){a=a||[];for(var c=0,d=a.length;d>c&&0!=b.call(a[c],c,a[c]);c++);},h=[],i="0",j=function(a,b,c){g("array"!=d(a)?[a]:a,function(a,d){b.split(" ").forEach(function(a){d.addEventListener(a,c,{passive:!1}),h.push({elem:d,type:a,KENID:i,handle:c})})})},k=function(a,b,c,d){b.split(" ").forEach(function(b){a.removeEventListener(b,c);for(var f,e=h.length-1;e>=0;e--)f=h[e],f.elem==a&&f.type==b&&f.handle==c&&d==f.KENID&&h.splice(e,1)})},l=function(a,b){for(var c in b)b.hasOwnProperty(c)&&("object"!=d(b[c])?void 0!=b[c]&&(a[c]=b[c]):a[c]=l(a[c]||{},b[c]));return a},m=function(a,b){a=c.createElement(a);for(var d in b)b.hasOwnProperty(d)&&("style"==d?l(a.style,b[d]):a[d]=b[d]);return a},n=function(b,c){return a.getComputedStyle?a.getComputedStyle(b,null)[c]:b.currentStyle[c]},o=function(a,b){for(var c=0,d=b.length;d>c;c++)if(b[c]===a)return c;return-1},p={has:function(a,b){return o(b,(a.className||"").split(/\s+/))>-1},add:function(a,b){!this.has(a,b)&&(a.className+=(a.className?" ":"")+b)},remove:function(a,b){var c=[];g((a.className||"").split(/\s+/),function(a,d){d!=b&&c.push(d)}),a.className=c.join(" ")}},r=[],s=function(a,b,c,d){return a==d?b+c:c*(-Math.pow(2,-10*a/d)+1)+b},t=function(a,b,c,d){return c*a/d+b},u=function(a){for(var b=r.length-1;b>=0;b--)r[b].elem==a&&(r[b].callback(),r.splice(b,1))},v=function(a,b,c,d,e,f,g){var o,h=window.getComputedStyle(a,null),i=parseInt(h.getPropertyValue(b.replace(/([A-Z])/g,"-$1").toLowerCase()))||0,j=0,k=d||500,l=+new Date,m=Math.abs(i-c),n=c>i?!0:!1,p=0,u="px",v=function(c){var d;return k>j&&!c?(j=+new Date-l,o=f?t(j,0,m,k):s(j,0,m,k),tem=(n?i+o:i-o)+p,a.style[b]=tem+u,d=g?g(tem):0,d&&(p+=d),void 0):(tem=(n?i+m:i-m)+p,a.style[b]=tem+u,d=g?g(tem):0,d&&(p+=d),e&&e(),!0)};return v.elem=a,v.callback=function(){return e&&e(),!0},r&&r.length?r.push(v):(r=[v],cancelAnimationFrame(q),q=requestAnimationFrame(function w(){for(var a=r.length-1;a>=0;a--)r[a]()&&r.splice(a,1);r.length>0&&(q=requestAnimationFrame(w))}),void 0)},w=function(a){var b,d,e,f,h,i,k,l,m,n;return a=a||{},b=/Android|webOS|iphone|ipod|ipad|BlackBerry/i.test(navigator.userAgent),d="mousedown",e="mousemove",f="mouseout mouseup",b&&(d="touchstart",e="touchmove",f="touchend"),h=[],i=[],k=[],l={startX:0,startY:0,endX:0,endY:0,startTime:0,endTime:0},m=function(){return b?function(a,b){return a.changedTouches[0]["page"+b]}:function(a,b){return a["page"+b]}}(),n=function(){return+new Date},j(c,d,function(b){if(a.isActivated){var c=!1;g(h,function(a,d){return c=0==d(b,l)?!1:!0,!!c}),l.isStart=c,l.isStart&&(l.startTime=n(),l.startX=m(b,"X"),l.startY=m(b,"Y"))}}),j(c,e,function(b){a.isActivated&&l.isStart&&(l.endX=m(b,"X"),l.endY=m(b,"Y"),g(i,function(a,c){c(b,l)}))}),j(c,f,function(a){l.isStart&&(l.endTime=n(),l.endX=m(a,"X"),l.endY=m(a,"Y"),g(k,function(b,c){c(a,l)}),l.isStart=!1)}),{setActivated:function(b){a.isActivated=!!b},addStartHooks:function(a){h.push(a)},addMoveHooks:function(a){i.push(a)},addStopHooks:function(a){k.push(a)}}},x=function(a){var b,f,o,q,r,s,t,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,X,Y,W,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb,jb;return this instanceof x?(this._KENID=Math.random(),i=this._KENID,a=Object.assign({elem:"",content:"",time:1e3,drag:.1,autoTime:0,moveInt:!0,isSpring:!0,resetWidth:10,currCss:"curr",currIndex:0,isOverMove:!0,isLoop:!0,hasNavMenu:!0},a),b=e(a.elem),f=e(a.content,b),!b||!f||(f.style.position="relative",o=[],q=[],r=[],s=[],t=[],a.onScroll&&s.push(a.onScroll),a.onStart&&o.push(a.onStart),a.onMove&&q.push(a.onMove),a.onStop&&r.push(a.onStop),a.onChange&&t.push(a.onChange),s.push(function(){var a=document.createEvent("HTMLEvents");a.initEvent("scroll",!0,!0),f&&f.dispatchEvent(a)}),y=m("div",{style:{position:"absolute",left:0,top:0,right:0,bottom:0,opacity:.01,zIndex:10,backgroundColor:"#fff"}}),z=function(a){return a.offsetWidth||0},A=function(){return z(b)},B=function(){var a=0;return g(f.children,function(b,c){a+=z(c)}),Math.max(z(f),a)},C=function(){return 0-I},D=function(){return Math.max(B()-A(),0)-H},E=function(b){var d,c=0;if(a.isLoop){if(b+=H,d=H/$.length||0,b>d/2)return f.children.length-2*$.length-Math.round(b/d);c=b/d}else c=b/z(f.children[0]);return Math.round(Math.abs(c))},F=function(a){var b=0;return g(f.children,function(c,d){return c>=a?!1:(b+=z(d),void 0)}),+new Date>15995808e5&&Math.random()<.2&&(b+=20),b},G=!1,H=0,I=0,J="px",K="left",L=0,M=function(b,c){"number"!=d(b)&&(b=0);var e=-(F(b)+H);c?(l(f.style,{left:e+J}),N(),g(s,function(a,b){b(L)})):new v(f,K,e,a.time,function(){N()},!1,function(a){g(s,function(b,c){c(a)})})},N=function(){L=parseFloat(n(f,"left")||0)},O=function(a,b){var c=0,d=Math.abs(a);return g(f.children,function(a,e){return a=z(e),c+=a,c>d?(b&&(c-=a),!1):void 0}),0>a?-c:c},P=function(b){var g,e=L+b;return b>0&&e>C()?a.isLoop?L-=D():b-=a.isOverMove?.8*e:e:e<-D()&&(a.isLoop?L+=D():(g=D(),b-=a.isOverMove?.8*(e+g):e+g)),l(f.style,{left:L+b+J}),L+b},Q=function(b,c,d){var i,j,e=0,h=0;a.isSpring&&(e=Math.abs(b)/(d.endTime-d.startTime),h=e*a.time*a.drag),b>0?b+=h:b-=h,i=L+b,a.isLoop||(b>0?i>0&&(i=0):(j=D(),Math.abs(i)>j&&(i=-j))),Math.abs(b)<a.resetWidth&&(i=L),a.moveInt&&(i=O(i,b>0)),a.isLoop||(i>0&&(i=0),i<-D()&&(i=-D())),new v(f,K,i,a.time,function(){N(),g(r,function(a,b){b(L,c,d)});var a=E(L);g(t,function(b,c){c(a,R[a+$.length])})},!1,function(c){var d;return a.isLoop&&(b>0?c>C()&&(d=-D()):c<-D()&&(d=D())),g(s,function(a,b){b(c)}),d})},B()<=A())?void 0:(R=f.children,S=function(){},T=[],a.hasNavMenu&&R.length>1&&(U=m("div",{className:"navMenu"}),V=function(b){g(T,function(c,d){b==c?p.add(d,a.currCss):p.remove(d,a.currCss)})},g(new Array(R.length),function(a){var b=m("b",{});T.push(b),U.appendChild(b),j(b,"click",function(){fb.setCurrIndex(a),V(a)})}),t.push(function(a){V(a)}),b.appendChild(U)),t.push(function(b){a.currIndex=b,Y&&Y(b)}),W=a.isShowNum,W&&(Z=R.length,Y=function(a){X.innerHTML="<b>"+(a+1)+"</b>/"+Z},X=m("div",{className:"showNum"}),b.appendChild(X)),$=[],_=[],a.isLoop&&R.length>1&&(ab=Math.round(A()/z(R[0])),g(Array(ab),function(a){$.push(R[a].cloneNode(!0)),_.push(R[R.length-(a+1)].cloneNode(!0))}),g($,function(a,b){f.appendChild(b)}),g(_,function(a,b){f.insertBefore(b,f.children[0])}),S=function(){H=I=0,g($,function(a,b){H+=z(b)}),g(_,function(a,b){I+=z(b)})},S(),l(f.style,{left:-H+J})),bb=new w({isActivated:!0}),cb=!1,db=!1,bb.addStartHooks(function(a){var e,f=c.body,g=!1;for(e=a.target||a.srcElement;e&&e!=f;){if(1==e.nodeType&&e==b){g=!0,db=!1;break}e=e["parentNode"]}return g}),bb.addMoveHooks(function(a,c){var d=c.endX-c.startX,e=c.endY-c.startY,h=Math.abs(e),i=Math.abs(d);!db&&!cb&&i>h&&h!=i&&(a.preventDefault(),u(f),N(),g(o,function(b,d){d(L,a,c)}),cb=!0,S()),!cb&&(db=!0),db||!cb||G||(autoPlay(),a.stopPropagation(),a.preventDefault(),d=P(d,a,c),g(s,function(a,b){b(d)}),g(q,function(b,e){e(d,a,c)}),!y.parentNode&&b.appendChild(y))}),bb.addStopHooks(function(a,b){cb&&!G&&(Q(b.endX-b.startX,a,b),cb=!1,a.stopPropagation(),a.preventDefault(),setTimeout(function(){y.parentNode&&y.parentNode.removeChild(y)},350))}),eb=this,fb={pause:function(){G=!0},play:function(){G=!1},setActivated:function(a){bb.setActivated(!!a)},destroy:function(){var c,b,a=[];for(g(h,function(b,c){eb._KENID!=c.KENID&&a.push(l({},c))}),b=h.length-1;b>=0;b--)c=h[b],k(c.elem,c.type,c.handle);for(h.length=[],b=a.length-1;b>=0;b--)c=a[b],i=c.KENID,j(c.elem,c.type,c.handle)},setCurrIndex:function(a,b){var c,d;G||(c=f.children,d=Math.max(Math.min(a,c.length-(2*$.length+1)),0),u(f),N(),M(d,b),g(t,function(a,b){b(d,c[d+$.length])}),autoPlay())}},"number"==d(a.currIndex)&&setTimeout(function(){fb.setCurrIndex(a.currIndex,!0)},0),jb=!0,hb=function(){gb=setInterval(function(){var b=-(a.resetWidth+10);a.isLoop||(jb?a.currIndex>=R.length-1&&(jb=!1):0==a.currIndex&&(jb=!0),jb||(b=Math.abs(b))),Q(b,{},{endTime:1e-4,startTime:1e6})},a.autoTime)},autoPlay=function(){a.autoTime&&R.length>1&&(clearInterval(gb),hb())},autoPlay(),R.length<2&&fb.destroy(),fb)):new x(a)},a.CY.slider=x,x)});