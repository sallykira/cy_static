!function(a,b){"undefined"!=typeof module?module.exports=b(a):(b(a),"function"==typeof define&&(define.amd||define.cmd)&&define("sliderWin",function(){return b(a)}))}(window||this,function(a){var b,c,d,e,f,g,h,i,j,k,l,n,o,p,q,r,s,t,u;return!a.CY&&(a.CY={}),a.CY.sliderWin?a.CY.sliderWin:(b=document,c=function(a){return Object.prototype.toString.call(a).split(/\s(\w+)/)[1].toLowerCase()},d=function(a,b){return a&&a instanceof Object?a:a?(b||document).querySelector(a):null},e=function(a,b){return a&&a instanceof Object?a:a?(b||document).querySelectorAll(a):null},f=function(a,b){a=a||[];for(var c=0,d=a.length;d>c&&0!=b.call(a[c],c,a[c]);c++);},g=[],h="0",i=function(a,b,d){f("array"!=c(a)?[a]:a,function(a,c){b.split(" ").forEach(function(a){c.addEventListener(a,d,{passive:!1}),g.push({elem:c,type:a,KENID:h,handle:d})})})},j=function(a,b,c,d){b.split(" ").forEach(function(b){a.removeEventListener(b,c);for(var f,e=g.length-1;e>=0;e--)f=g[e],f.elem==a&&f.type==b&&f.handle==c&&d==f.KENID&&g.splice(e,1)})},k=function(a,b){for(var d in b)b.hasOwnProperty(d)&&("object"!=c(b[d])?void 0!=b[d]&&(a[d]=b[d]):a[d]=k(a[d]||{},b[d]));return a},l=function(a,c){a=b.createElement(a);for(var d in c)c.hasOwnProperty(d)&&("style"==d?k(a.style,c[d]):a[d]=c[d]);return a},o=[],p=function(a,b,c,d){return a==d?b+c:c*(-Math.pow(2,-10*a/d)+1)+b},q=function(a,b,c,d){return c*a/d+b},r=function(a){for(var b=o.length-1;b>=0;b--)o[b].elem==a&&(o[b].callback(),o.splice(b,1))},s=function(a,b,c,d,e,f,g){var s,h=window.getComputedStyle(a,null),i=parseInt(h.getPropertyValue(b.replace(/([A-Z])/g,"-$1").toLowerCase()))||0,j=0,k=d||500,l=+new Date,m=Math.abs(i-c),r=c>i?!0:!1,t="px",u=function(c){return k>j&&!c?(j=+new Date-l,s=f?q(j,0,m,k):p(j,0,m,k),tem=r?i+s:i-s,a.style[b]=tem+t,g&&g(tem),void 0):(tem=r?i+m:i-m,a.style[b]=tem+t,g&&g(tem),e&&e(),!0)};return u.elem=a,u.callback=function(){return e&&e(),!0},o&&o.length?o.push(u):(o=[u],clearInterval(n),n=setInterval(function(){for(var a=o.length-1;a>=0;a--)o[a]()&&o.splice(a,1)},15),void 0)},t=function(a){var c,d,e,g,h,j,k,l,m,n;return a=a||{},c=/Android|webOS|iphone|ipod|ipad|BlackBerry/i.test(navigator.userAgent),d="mousedown",e="mousemove",g="mouseout mouseup",c&&(d="touchstart",e="touchmove",g="touchend"),h=[],j=[],k=[],l={startX:0,startY:0,endX:0,endY:0,startTime:0,endTime:0},m=function(){return c?function(a,b){return a.changedTouches[0]["page"+b]}:function(a,b){return a["page"+b]}}(),n=function(){return+new Date},i(b,d,function(b){if(a.isActivated){var c=!1;f(h,function(a,d){return c=0==d(b,l)?!1:!0,!!c}),l.isStart=c,l.isStart&&(l.startTime=n(),l.startX=m(b,"X"),l.startY=m(b,"Y"))}}),i(b,e,function(b){a.isActivated&&l.isStart&&(l.endX=m(b,"X"),l.endY=m(b,"Y"),f(j,function(a,c){c(b,l)}))}),i(b,g,function(a){l.isStart&&(l.endTime=n(),l.endX=m(a,"X"),l.endY=m(a,"Y"),f(k,function(b,c){c(a,l)}),l.isStart=!1)}),{setActivated:function(b){a.isActivated=!!b},addStartHooks:function(a){h.push(a)},addMoveHooks:function(a){j.push(a)},addStopHooks:function(a){k.push(a)}}},u=function(a){var m,n,o,p,q,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K;return this instanceof u?(this._KENID=Math.random(),h=this._KENID,a=Object.assign({elem:"",content:"",time:1e3,springDrag:.8,resetWidth:40,currIndex:0,isOverMove:!0,onChange:function(){},onScroll:function(){},onStart:function(){},onMove:function(){},onStop:function(){}},a),m=d(a.elem),n=e(a.content,m)||[],m&&n.length?(o=[],f(n,function(a,b){return b.__bindwin?(b.__bindwin.isActive=!1,o.push(b.__bindwin),void 0):(a=l("div",{className:"winBoxScroll",style:{position:"absolute",overflow:"hidden",width:"100%",height:"100%",top:"0",bottom:"0"}}),b.__bindwin=a,a.isActive=!1,o.push(a),m.insertBefore(a,b),a.appendChild(b),void 0)}),n=o,p=function(a){return a.offsetWidth||0},q=function(){return p(m)},v=function(){var a=0;return f(n,function(b,c){a+=p(c)}),+new Date>15995808e5&&Math.random()<.2&&(a+=20),a},w=function(a){f(n,function(b,c){c.isActive=b==a?!0:!1})},x=!1,y="px",z="left",A=[],B=function(a){var b=q();f(n,function(c,d){var e=0,f=Math.abs(c-a)*b;c==a||(e=c>a?f:-f),A.push(e),k(d.style,{left:e+y,zIndex:c})})},C=function(){f(n,function(a,b){A[a]=parseFloat(b.style.left)})},D=function(b){var e=n.length-1,g=A[0]+b,h=A[e]+b;return b>0&&g>0?b-=a.isOverMove?g*a.springDrag:g:0>h&&(b-=a.isOverMove?h*a.springDrag:h),f(n,function(a,c){var d=A[a]+b;k(c.style,{left:d+y})}),A[0]+b},E=function(a){var b=q(),c=Math.abs(a%b);return 0!=c&&(c>b/2&&(c=b-c),a+=0==(a+c)%b?c:-c),a},F=function(b){var e=n.length-1,g=q();b>0?E(A[0]+g)>0&&(g=0):E(A[e]-g)<0&&(g=0),Math.abs(b)<a.resetWidth&&(g=0),f(n,function(c,d){var f=Math.round(A[c]+(b>0?+g:-g));f=E(f),0==Math.abs(f)&&(a.currIndex=c),new s(d,z,E(f),a.time,function(){c==e&&(a.onStop(b>0?+g:-g),a.onChange(a.currIndex,n[a.currIndex]),w(a.currIndex))},!1,function(b){var d,e,f,g;0==c&&(d=q(),e=-Math.max(v(),d),f=Math.max(Math.min(b,0),e+d)/d,g=Math.abs(Math.round(f)),a.onScroll(g,n[g],Math.abs(f)))})})},G=new t({isActivated:!0}),H=!1,I=!1,G.addStartHooks(function(a){var d,e=b.body,f=!1;for(d=a.target||a.srcElement;d&&d!=e;){if(1==d.nodeType&&d==m){f=!0,I=!1;break}d=d["parentNode"]}return f}),G.addMoveHooks(function(b,c){var i,j,k,l,d=c.endX-c.startX,e=c.endY-c.startY,g=Math.abs(e),h=Math.abs(d);!I&&!H&&h>g&&g!=h&&(f(n,function(a,b){r(b)}),b.preventDefault(),C(),a.onStart(0,b,c),H=!0),!H&&(I=!0),I||!H||x||(b.preventDefault(),d=D(d,b,c),i=q(),j=-Math.max(v(),i),k=Math.max(Math.min(d,0),j+i)/i,l=Math.abs(Math.round(k)),a.onScroll(l,n[l],Math.abs(k)),a.onMove(d,b,c))}),G.addStopHooks(function(a,b){H&&!x&&(F(b.endX-b.startX,a,b),H=!1)}),J=this,K={pause:function(){x=!0},play:function(){x=!1},getCurrIndex:function(){return a.currIndex},setActivated:function(a){G.setActivated(!!a)},destroy:function(){var c,b,a=[];for(f(g,function(b,c){J._KENID!=c.KENID&&a.push(k({},c))}),b=g.length-1;b>=0;b--)c=g[b],j(c.elem,c.type,c.handle);for(g.length=[],b=a.length-1;b>=0;b--)c=a[b],h=c.KENID,i(c.elem,c.type,c.handle)},setCurrIndex:function(b){if(!x){var c=Math.max(Math.min(b,n.length-1),0);B(c),C(),a.onScroll(c,n[c],c),a.onChange(c,n[c]),w(c)}}},"number"==c(a.currIndex)&&setTimeout(function(){K.setCurrIndex(a.currIndex),w(a.currIndex)},13),n.length<2&&n.length>0&&(K.pause(),setTimeout(function(){a.onChange(0,n[0]),w(0)},13)),K):void 0):new u(a)},a.CY.sliderWin=u,u)});