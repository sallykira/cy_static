!function(a,b){"undefined"!=typeof module?module.exports=b(a):(b(a),"function"==typeof define&&(define.amd||define.cmd)&&define("sliderWin",function(){return b(a)}))}(window||this,function(a){var b,c,d,e,f,g,i,j,l,m,n,o,p,q,r,s;return!a.CY&&(a.CY={}),a.CY.sliderWin?a.CY.sliderWin:(b=document,c=function(a){return Object.prototype.toString.call(a).split(/\s(\w+)/)[1].toLowerCase()},d=function(a,b){return a&&a instanceof Object?a:a?(b||document).querySelector(a):null},e=function(a,b){return a&&a instanceof Object?a:a?(b||document).querySelectorAll(a):null},f=function(a,b){a=a||[];for(var c=0,d=a.length;d>c&&0!=b.call(a[c],c,a[c]);c++);},g=function(a,b,d){f("array"!=c(a)?[a]:a,function(a,c){b.split(" ").forEach(function(a){c.addEventListener(a,d,{passive:!1})})})},i=function(a,b){for(var d in b)b.hasOwnProperty(d)&&("object"!=c(b[d])?void 0!=b[d]&&(a[d]=b[d]):a[d]=i(a[d]||{},b[d]));return a},j=function(a,c){a=b.createElement(a);for(var d in c)c.hasOwnProperty(d)&&("style"==d?i(a.style,c[d]):a[d]=c[d]);return a},m=[],n=function(a,b,c,d){return a==d?b+c:c*(-Math.pow(2,-10*a/d)+1)+b},o=function(a,b,c,d){return c*a/d+b},p=function(a){for(var b=m.length-1;b>=0;b--)m[b].elem==a&&(m[b].callback(),m.splice(b,1))},q=function(a,b,c,d,e,f,g){var s,h=window.getComputedStyle(a,null),i=parseInt(h.getPropertyValue(b.replace(/([A-Z])/g,"-$1").toLowerCase()))||0,j=0,k=d||500,p=+new Date,q=Math.abs(i-c),r=c>i?!0:!1,t="px",u=function(c){return k>j&&!c?(j=+new Date-p,s=f?o(j,0,q,k):n(j,0,q,k),tem=r?i+s:i-s,a.style[b]=tem+t,g&&g(tem),void 0):(tem=r?i+q:i-q,a.style[b]=tem+t,g&&g(tem),e&&e(),!0)};return u.elem=a,u.callback=function(){return e&&e(),!0},m&&m.length?m.push(u):(m=[u],clearInterval(l),l=setInterval(function(){for(var a=m.length-1;a>=0;a--)m[a]()&&m.splice(a,1)},15),void 0)},r=function(){var h,i,j,k,l,m,a=/Android|webOS|iphone|ipod|ipad|BlackBerry/i.test(navigator.userAgent),c="mousedown",d="mousemove",e="mouseout mouseup";return a&&(c="touchstart",d="touchmove",e="touchend"),h=[],i=[],j=[],k={startX:0,startY:0,endX:0,endY:0,startTime:0,endTime:0},l=function(){return a?function(a,b){return a.changedTouches[0]["page"+b]}:function(a,b){return a["page"+b]}}(),m=function(){return+new Date},g(b,c,function(a){var b=!1;f(h,function(c,d){return b=0==d(a,k)?!1:!0,!!b}),k.isStart=b,k.isStart&&(k.startTime=m(),k.startX=l(a,"X"),k.startY=l(a,"Y"))}),g(b,d,function(a){k.isStart&&(k.endX=l(a,"X"),k.endY=l(a,"Y"),f(i,function(b,c){c(a,k)}))}),g(b,e,function(a){k.isStart&&(k.endTime=m(),k.endX=l(a,"X"),k.endY=l(a,"Y"),f(j,function(b,c){c(a,k)}))}),{addStartHooks:function(a){h.push(a)},addMoveHooks:function(a){i.push(a)},addStopHooks:function(a){j.push(a)}}},s=function(a){var c,g,h,k,l,n,o,t,u,v,w,x,y,z,A,B,C,D;return this instanceof s?(a=Object.assign({elem:"",content:"",time:1e3,resetWidth:10,currIndex:0,isOverMove:!0,onChange:function(){},onScroll:function(){},onStart:function(){},onMove:function(){},onStop:function(){}},a),c=d(a.elem),g=e(a.content,c),!c||!g||(h=[],f(g,function(a,b){b.__bindwin||(b.__bindwin=!0,a=j("div",{style:{position:"absolute",width:"100%",height:"100%",top:"0",bottom:"0"}}),h.push(a),c.insertBefore(a,b),a.appendChild(b))}),g=h,g.length<2)?void 0:(k=function(a){return a.offsetWidth||0},l=function(){return k(c)},n=!1,o="px",t="left",u=[],v=function(a){var b=l();f(g,function(c,d){var e=0,f=Math.abs(c-a)*b;c==a?currVal=c*b:e=c>a?f:-f,u.push(e),i(d.style,{left:e+o,zIndex:c})})},w=function(){f(g,function(a,b){u[a]=parseFloat(b.style.left)})},x=function(b){var e=g.length-1,h=u[0]+b,j=u[e]+b;return b>0&&h>0?b-=a.isOverMove?.8*h:h:0>j&&(b-=a.isOverMove?.8*j:j),f(g,function(a,c){var d=u[a]+b;i(c.style,{left:d+o})}),u[0]+b},y=function(a){var b=l(),c=Math.abs(a%b);return 0!=c&&(c>b/2&&(c=b-c),a+=0==(a+c)%b?c:-c),a},z=function(b){var e=g.length-1,h=l();b>0?y(u[0]+h)>0&&(h=0):y(u[e]-h)<0&&(h=0),Math.abs(b)<a.resetWidth&&(b=0),f(g,function(c,d){var f=Math.round(u[c]+(b>0?+h:-h));f=y(f),0==Math.abs(f)&&(a.currIndex=c),new q(d,t,y(f),a.time,function(){if(c==e){var f=l();a.onStop(b>0?+f:-f),a.onChange(a.currIndex,g[a.currIndex])}},!1,function(d){var e,f,h,i,j;0==c&&(e=g.length-1,f=l(),h=d/f,i=Math.abs(d%f)/f,j=b>0?Math.ceil(h):Math.floor(h),-e>j?(j=-e,i=1):j>0&&(j=0,i=1),b>0?1==i&&(i=0):0==i&&(i=1),j=Math.abs(j),a.onScroll(j,g[j],b>0?i:-1+i))})})},A=new r,B=!1,C=!1,A.addStartHooks(function(a){var e,f=b.body,g=!1;for(e=a.target||a.srcElement;e&&e!=f;){if(1==e.nodeType&&e==c){g=!0,C=!1;break}e=e["parentNode"]}return g}),A.addMoveHooks(function(b,c){var d,e,h,i,j,k,m,o,q;return n?!n:(d=c.endX-c.startX,e=c.endY-c.startY,h=Math.abs(e),i=Math.abs(d),!C&&!B&&i>h&&h!=i&&(f(g,function(a,b){p(b)}),b.preventDefault(),w(),a.onStart(0,b,c),B=!0),!B&&(C=!0),!C&&B&&(b.preventDefault(),j=g.length-1,k=l(),m=x(d,b,c)/k,o=Math.abs(d)/k,q=d>0?Math.ceil(m):Math.floor(m),-j>q?(q=-j,o=1):q>0&&(q=0,o=1),q=Math.abs(q),a.onScroll(q,g[q],d>0?1-o:-1+o),a.onMove(d,b,c)),void 0)}),A.addStopHooks(function(a,b){B&&(z(b.endX-b.startX,a,b),B=!1)}),D={pause:function(){n=!0},play:function(){n=!1},setCurrIndex:function(b){var c=Math.max(Math.min(b,g.length-1),0);v(c),w(),a.onScroll(c,g[c],0),a.onChange(c,g[c])}},setTimeout(function(){D.setCurrIndex(a.currIndex)},13),D)):new s(a)},a.CY.sliderWin=s,s)});