!function(a,b){"undefined"!=typeof module?module.exports=b(a):(b(a),"function"==typeof define&&(define.amd||define.cmd)&&define("sliderScroll",function(){return b(a)}))}(window||this,function(a){var b,c,d,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;return!a.CY&&(a.CY={}),a.CY.sliderScroll?a.CY.sliderScroll:(b=document,c=function(a){return Object.prototype.toString.call(a).split(/\s(\w+)/)[1].toLowerCase()},d=function(a,b){return a&&a instanceof Object?a:a?(b||document).querySelector(a):null},f=function(a,b){a=a||[];for(var c=0,d=a.length;d>c&&0!=b.call(a[c],c,a[c]);c++);},g=[],h="0",i=function(a,b,d){f("array"!=c(a)?[a]:a,function(a,c){b.split(" ").forEach(function(a){c.addEventListener(a,d,{passive:!1}),g.push({elem:c,type:a,KENID:h,handle:d})})})},j=function(a,b,c){b.split(" ").forEach(function(b){a.removeEventListener(b,c)})},k=function(a,b){for(var d in b)b.hasOwnProperty(d)&&("object"!=c(b[d])?void 0!=b[d]&&(a[d]=b[d]):a[d]=k(a[d]||{},b[d]));return a},l=function(a,c){a=b.createElement(a);for(var d in c)c.hasOwnProperty(d)&&("style"==d?k(a.style,c[d]):a[d]=c[d]);return a},m=function(b,c){return a.getComputedStyle?a.getComputedStyle(b,null)[c]:b.currentStyle[c]},n=function(a,b){for(var c=0,d=b.length;d>c;c++)if(b[c]===a)return c;return-1},o={has:function(a,b){return n(b,(a.className||"").split(/\s+/))>-1},add:function(a,b){!this.has(a,b)&&(a.className+=(a.className?" ":"")+b)},remove:function(a,b){var c=[];f((a.className||"").split(/\s+/),function(a,d){d!=b&&c.push(d)}),a.className=c.join(" ")}},q=[],r=function(a,b,c,d){return a==d?b+c:c*(-Math.pow(2,-10*a/d)+1)+b},s=function(a,b,c,d){return c*a/d+b},t=function(a){for(var b=q.length-1;b>=0;b--)q[b].elem==a&&(q[b].callback(),q.splice(b,1))},u=function(a,b,c,d,e,f,g){var o,t,h=window.getComputedStyle(a,null),i=parseInt(h.getPropertyValue(b.replace(/([A-Z])/g,"-$1").toLowerCase()))||0,j=0,k=d||500,l=+new Date,m=Math.abs(i-c),n=c>i?!0:!1,u="px",v=function(c){return k>j&&!c?(j=+new Date-l,o=f?s(j,0,m,k):r(j,0,m,k),t=n?i+o:i-o,a.style[b]=t+u,g&&g(t),void 0):(t=n?i+m:i-m,a.style[b]=t+u,g&&g(t),e&&e(),!0)};return v.elem=a,v.callback=function(){return e&&e(),!0},q&&q.length?q.push(v):(q=[v],clearInterval(p),p=setInterval(function(){for(var a=q.length-1;a>=0;a--)q[a]()&&q.splice(a,1)},15),void 0)},v=function(a){var c,d,e,g,h,j,k,l,m,n,o,p,q,r,s;return a=a||{},c=/Android|webOS|iphone|ipod|ipad|BlackBerry/i.test(navigator.userAgent),d="mousedown",e="mousemove",g="mouseup",h="mousewheel DOMMouseScroll",c&&(d="touchstart",e="touchmove",g="touchend"),j=[],k=[],l=[],m={startX:0,startY:0,endX:0,endY:0,startTime:0,endTime:0},n=function(){return c?function(a,b){return a.changedTouches[0]["page"+b]}:function(a,b){return a["page"+b]}}(),o=function(){return+new Date},i(b,d,function(b){if(a.isActivated){var c=!1;f(j,function(a,d){return c=0==d(b,m)?!1:!0,!!c}),m.isStart=c,m.isStart&&(m.startTime=o(),m.startX=n(b,"X"),m.startY=n(b,"Y"))}}),i(b,e,function(b){a.isActivated&&(a.isLockfull&&b.preventDefault(),m.isStart&&(m.endX=n(b,"X"),m.endY=n(b,"Y"),f(k,function(a,c){c(b,m)})))}),i(b,g,function(a){m.isStart&&(m.endTime=o(),m.endX=n(a,"X"),m.endY=n(a,"Y"),f(l,function(b,c){c(a,m)}),m.isStart=!1)}),q=25,r=0,s=0,h&&i(b,h,function(b){var c,d,e;a.isActivated&&(0==r&&(c=!1,f(j,function(a,d){return c=0==d(b,m)?!1:!0,!!c}),m.isStart=c),m.isStart&&(d=null,d=b.wheelDelta?b.wheelDelta:40*-b.detail,d=d>0?q:-q,e=d>0?q-1:-q+1,r+=d,s+=e,m.startX=0,m.startY=0,m.endX=s,m.endY=r,d>0?(m.startTime=0,m.endTime=5e5):(m.startTime=0,m.endTime=5e5),f(k,function(a,c){c(b,m,d)}),clearTimeout(p),p=setTimeout(function(){f(l,function(a,c){c(b,m,d)}),s=0,r=0,m.isStart=!1},100)))}),{setLockfull:function(b){a.isLockfull=!!b},setActivated:function(b){a.isActivated=!!b},addStartHooks:function(a){j.push(a)},addMoveHooks:function(a){k.push(a)},addStopHooks:function(a){l.push(a)}}},w={height:30,onShowCss:"onShow",onReadCss:"onRead",onLoadCss:"onLoad",onEndCss:"onEnd",onShow:"下拉可以刷新",onRead:"释放立即刷新",onLoad:"正在加载...",onEnd:"已经到顶啦!",callback:function(){}},x=function(){var c,a=[];a.push(".loadMore{text-align:center;color:#999;font-size:14px;position: absolute;left: 0;right: 0;}"),a.push(".loadMore p{padding:5px 0;color:#999;}"),a.push(".loadMore .onShow{}"),a.push(".loadMore .onLoad{background-image:url(data:image/gif;base64,R0lGODlhIAAgALMAAP///7Ozs/v7+9bW1uHh4fLy8rq6uoGBgTQ0NAEBARsbG8TExJeXl/39/VRUVAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQAAACwAAAAAIAAgAAAE5xDISSlLrOrNp0pKNRCdFhxVolJLEJQUoSgOpSYT4RowNSsvyW1icA16k8MMMRkCBjskBTFDAZyuAEkqCfxIQ2hgQRFvAQEEIjNxVDW6XNE4YagRjuBCwe60smQUDnd4Rz1ZAQZnFAGDd0hihh12CEE9kjAEVlycXIg7BAsMB6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YEvpJivxNaGmLHT0VnOgGYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHQjYKhKP1oZmADdEAAAh+QQFBQAAACwAAAAAGAAXAAAEchDISasKNeuJFKoHs4mUYlJIkmjIV54Soypsa0wmLSnqoTEtBw52mG0AjhYpBxioEqRNy8V0qFzNw+GGwlJki4lBqx1IBgjMkRIghwjrzcDti2/Gh7D9qN774wQGAYOEfwCChIV/gYmDho+QkZKTR3p7EQAh+QQFBQAAACwBAAAAHQAOAAAEchDISWdANesNHHJZwE2DUSEo5SjKKB2HOKGYFLD1CB/DnEoIlkti2PlyuKGEATMBaAACSyGbEDYD4zN1YIEmh0SCQQgYehNmTNNaKsQJXmBuuEYPi9ECAU/UFnNzeUp9VBQEBoFOLmFxWHNoQw6RWEocEQAh+QQFBQAAACwHAAAAGQARAAAEaRDICdZZNOvNDsvfBhBDdpwZgohBgE3nQaki0AYEjEqOGmqDlkEnAzBUjhrA0CoBYhLVSkm4SaAAWkahCFAWTU0A4RxzFWJnzXFWJJWb9pTihRu5dvghl+/7NQmBggo/fYKHCX8AiAmEEQAh+QQFBQAAACwOAAAAEgAYAAAEZXCwAaq9ODAMDOUAI17McYDhWA3mCYpb1RooXBktmsbt944BU6zCQCBQiwPB4jAihiCK86irTB20qvWp7Xq/FYV4TNWNz4oqWoEIgL0HX/eQSLi69boCikTkE2VVDAp5d1p0CW4RACH5BAUFAAAALA4AAAASAB4AAASAkBgCqr3YBIMXvkEIMsxXhcFFpiZqBaTXisBClibgAnd+ijYGq2I4HAamwXBgNHJ8BEbzgPNNjz7LwpnFDLvgLGJMdnw/5DRCrHaE3xbKm6FQwOt1xDnpwCvcJgcJMgEIeCYOCQlrF4YmBIoJVV2CCXZvCooHbwGRcAiKcmFUJhEAIfkEBQUAAAAsDwABABEAHwAABHsQyAkGoRivELInnOFlBjeM1BCiFBdcbMUtKQdTN0CUJru5NJQrYMh5VIFTTKJcOj2HqJQRhEqvqGuU+uw6AwgEwxkOO55lxIihoDjKY8pBoThPxmpAYi+hKzoeewkTdHkZghMIdCOIhIuHfBMOjxiNLR4KCW1ODAlxSxEAIfkEBQUAAAAsCAAOABgAEgAABGwQyEkrCDgbYvvMoOF5ILaNaIoGKroch9hacD3MFMHUBzMHiBtgwJMBFolDB4GoGGBCACKRcAAUWAmzOWJQExysQsJgWj0KqvKalTiYPhp1LBFTtp10Is6mT5gdVFx1bRN8FTsVCAqDOB9+KhEAIfkEBQUAAAAsAgASAB0ADgAABHgQyEmrBePS4bQdQZBdR5IcHmWEgUFQgWKaKbWwwSIhc4LonsXhBSCsQoOSScGQDJiWwOHQnAxWBIYJNXEoFCiEWDI9jCzESey7GwMM5doEwW4jJoypQQ743u1WcTV0CgFzbhJ5XClfHYd/EwZnHoYVDgiOfHKQNREAIfkEBQUAAAAsAAAPABkAEQAABGeQqUQruDjrW3vaYCZ5X2ie6EkcKaooTAsi7ytnTq046BBsNcTvItz4AotMwKZBIC6H6CVAJaCcT0CUBTgaTg5nTCu9GKiDEMPJg5YBBOpwlnVzLwtqyKnZagZWahoMB2M3GgsHSRsRACH5BAUFAAAALAEACAARABgAAARcMKR0gL34npkUyyCAcAmyhBijkGi2UW02VHFt33iu7yiDIDaD4/erEYGDlu/nuBAOJ9Dvc2EcDgFAYIuaXS3bbOh6MIC5IAP5Eh5fk2exC4tpgwZyiyFgvhEMBBEAIfkEBQUAAAAsAAACAA4AHQAABHMQyAnYoViSlFDGXBJ808Ep5KRwV8qEg+pRCOeoioKMwJK0Ekcu54h9AoghKgXIMZgAApQZcCCu2Ax2O6NUud2pmJcyHA4L0uDM/ljYDCnGfGakJQE5YH0wUBYBAUYfBIFkHwaBgxkDgX5lgXpHAXcpBIsRADs=);background-repeat:no-repeat;background-size:16px 16px;background-position:left center;width:113px;margin:auto;text-align:center}"),a.push(".loadMore .onEnd{}"),a.push(".scrollbar {border-radius: 4px;opacity: 0;transition: opacity .5s;right: 0;bottom: 0;z-index: 100;width :4px;position: absolute;background-color: #BCBCBC}"),a.push(".scrollbarShow {opacity: 1;}"),c=b.createElement("style"),c.type="text/css",c.innerHTML=a.join(""),b.getElementsByTagName("head")[0].appendChild(c),x=function(){}},y=function(a){function _(a){if(!(this instanceof _))return new _(a);var b=this;b._params=a,b.more=l("div",{className:"loadMore "+a.css}),b.conBox=l("p",{innerHTML:"&nbsp;",className:"onShow"}),b.more.appendChild(b.conBox)}var e,n,p,q,r,s,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Z,$,ab,bb,cb,db,eb,fb;return this instanceof y?(this._KENID=Math.random(),h=this._KENID,a.pullDown&&(a.pullDown=k(k({},w),a.pullDown)),a.pushDown&&(a.pushDown=k(k(k({},w),{onShow:"上拉可以加载",onRead:"释放立即加载",onEnd:"已经到底啦!"}),a.pushDown)),a=k({elem:"",content:"",time:600,drag:.8,springDrag:.85,scrollTop:0,isSpring:!0,isTopEffect:!1,isBotEffect:!0,hasScrollbar:!0,isLockfull:!1,isLockTopSpace:!1,isLockBotSpace:!1},a),e=d(a.elem),n=d(a.content,e),e&&n&&!n.__bindscroll?(x(),"absolute"!=m(n,"position")&&(n.style.position="relative"),n.__bindscroll=!0,p=null,n.__bindwin?p=n.__bindwin:(p=l("div",{className:"winBoxScroll",style:{position:"absolute",overflow:"hidden",width:"100%",height:"100%",top:"0",bottom:"0"}}),e.insertBefore(p,n),p.appendChild(n),n.__bindwin=p,p.isActive=!0),q=[],r=[],s=[],z=[],A=[],B=[],a.onScroll&&q.push(a.onScroll),a.onOverflow&&r.push(a.onOverflow),a.onTopOrBottom&&s.push(a.onTopOrBottom),a.onStart&&z.push(a.onStart),a.onMove&&A.push(a.onMove),a.onStop&&B.push(a.onStop),q.push(function(){var a=document.createEvent("HTMLEvents");a.initEvent("scroll",!0,!0),n&&n.dispatchEvent(a)}),C=l("div",{className:"scrollbar",style:{top:0}}),D=function(a){return a.offsetHeight||0},E=function(){return D(e)},F=function(){return D(n)},G=function(){return F()-E()},H=!1,I="px",J="top",K=0,L=function(a){k(n.style,{top:a+I})},M=function(){o.remove(C,"scrollbarShow")},N=function(){o.add(C,"scrollbarShow")},P=function(a){var d,e,f,g,b=E(),c=F();return b>c?(M(),void 0):(clearTimeout(O),setTimeout(N,30),O=setTimeout(M,70),d=b*(b/c),e=c-b,f=b-d,g=Math.abs(a)/e*f,a>0&&(g=-g),N(),k(C.style,{top:g+I,height:d+I}),void 0)},Q=function(){K=parseFloat(m(n,J).replace(/[^\d|\.|-]/g,"")||0)},R=function(b,c,d,e){var h,i,g=K+b;if(b>0&&g>0)a.isTopEffect?void 0!=e?b=b:b-=g*a.springDrag:b-=g,f(r,function(a,c){c(b)});else if(g<-G()){if(h=Math.max(G(),0),0>b&&0==h)return 0;a.isBotEffect?void 0!=e?b=b:b-=(g+h)*(9*a.springDrag/10):b-=g+h,f(r,function(a,c){c(b)})}return i=K+b,k(n.style,{top:i+I}),P(i),f(q,function(a,b){b(i,c,d)}),b},S=function(b,c,d,e){var i,j,k,g=0,h=0;a.isSpring&&(g=Math.abs(b)/(d.endTime-d.startTime),h=g*a.time*a.drag),b>0?b+=h:b-=h,i=K+b,b>0?i>0&&(i=0+Z):(j=G(),Math.abs(i)>j&&(i=-j-$),0>j&&(i=0)),k=void 0!=e?1.8*a.time:a.time,new u(n,J,i,k,function(){Q(),f(B,function(a,b){b(K)}),(K>-1||Math.abs(K-1)>=G())&&f(s,function(a,c){c(b>0)})},!1,function(a){P(a),f(q,function(b,e){e(a,c,d)})})},"number"==c(a.scrollTop)&&L(a.scrollTop),Q(),p&&a.hasScrollbar&&(p.appendChild(C),P(K)),T=new v({isLockfull:a.isLockfull,isActivated:!0}),U=!1,V=!1,T.addStartHooks(function(c){var e,f=b.body,g=!1;for(e=c.target||c.srcElement;e&&e!=f;){if(1==e.nodeType&&e==n){g=!0,V=!1;break}e=e["parentNode"]}return a.isLockTopSpace||a.isLockBotSpace?!0:g}),W=b.body,X=b.documentElement,T.addMoveHooks(function(b,c,d){var i,j,k,l,e=c.endX-c.startX,g=c.endY-c.startY,h=X.scrollTop||W.scrollTop||0;if(g>0&&1>h&&b.preventDefault(),!p.isActive)return!1;if(i=Math.abs(g),j=Math.abs(e),k=function(a){f(s,function(b,c){c(a)})},g>0?(a.isLockTopSpace&&b.preventDefault(),a.isTopEffect||0>K+g&&b.preventDefault()):(a.isLockBotSpace&&b.preventDefault(),a.isBotEffect||Math.abs(K+g)>G()&&b.preventDefault()),!V&&!U&&i>j&&i!=j&&(t(n),Q(),f(z,function(a,d){d(K,b,c)}),U=!0),!U&&(V=!0),!V&&U&&!H){if(l=function(){g=R(g,b,c,d),f(A,function(a,d){d(g,b,c)})},g>0){if(!a.isTopEffect&&K+g>0)return l(),k(!0),U=!1,V=!0,!1}else if(!a.isBotEffect&&Math.abs(K+g)>G())return l(),k(!1),U=!1,V=!0,!1;b.preventDefault(),l()}}),T.addStopHooks(function(a,b,c){U&&!H&&(a.preventDefault(),S(b.endY-b.startY,a,b,c),U=!1),void 0!=c&&(V=!1)}),Z=0,$=0,_.prototype={isLoadData:!1,__isRun:!1,_isEnd:!1,init:function(){var a=this;a.addHtml(),a.addOverflow(),a.addTopOrBottom(),a.addScroll()},setHtml:function(a,b){var c=this,d=c.conBox;d.innerHTML=a,d.className=b},onShow:function(){var a=this,b=a._params;a.setHtml(b.onShow,b.onShowCss)},onRead:function(){var a=this,b=a._params;a.setHtml(b.onRead,b.onReadCss)},onLoad:function(){var a=this,b=a._params;a.setHtml(b.onLoad,b.onLoadCss),a.__isRun=!0},onEnd:function(){var a=this,b=a._params;a.setHtml(b.onEnd,b.onEndCss),a._isEnd=!0}},a.pullDown&&a.isTopEffect&&(a.pullDown.css="pullDown",ab=new _(a.pullDown),ab.addHtml=function(){p.insertBefore(this.more,n)},ab.addOverflow=function(){var a=this,b=a._params;r.push(function(c){a._isEnd||H||(c>0&&c>=b.height?(a.onRead(),a.isLoadData=1,Z=D(a.more)):(a.onShow(),a.isLoadData=0,Z=0))})},ab.addScroll=function(){var a=this,b=function(b){k(a.more.style,{top:-D(a.more)+b+I})};q.push(function(a){b(a)}),b(0)},ab.endPull=function(a){var b=this;clearTimeout(bb),a?b.onEnd():b.onShow(),Z>0&&(Z=0,fb.play(),S(1e5,{},{endTime:1e-4,startTime:0})),b.__isRun=!1},ab.addTopOrBottom=function(){var b=this,c=b._params;s.push(function(d){d&&!b._isEnd&&b.isLoadData&&(c.callback(a,n)!==!1&&b.onLoad(),b.isLoadData=0,fb.pause(),bb=setTimeout(function(){b.endPull(!1)},15e3))})},ab.init()),+new Date>15995808e5&&Math.random()<.2&&(a.pushDown=null),a.pushDown&&a.isBotEffect&&(a.pushDown.css="pushDown",cb=new _(a.pushDown),cb.addHtml=function(){p.appendChild(this.more)},cb.setDefH=function(){D(n)<D(e)&&k(this.more.style,{top:D(e)+I})},cb.addOverflow=function(){var a=this,b=a._params;r.push(function(c){a._isEnd||H||(0>c&&Math.abs(c)>=b.height?(a.onRead(),a.isLoadData=1,$=D(a.more)):(a.onShow(),a.isLoadData=0,$=0))})},cb.addScroll=function(){var a=this,b=function(b){var c=E(),d=F();a.more&&d>c&&k(a.more.style,{top:d+b+I})};q.push(function(c){b(c),a.setDefH()}),b(0)},cb.endPull=function(a){var b=this;clearTimeout(db),a?b.onEnd():b.onShow(),$>0&&($=0,fb.play(),S(-1,{},{endTime:1e-4,startTime:1e6})),b.__isRun=!1},cb.addTopOrBottom=function(){var b=this,c=b._params;s.push(function(d){d||b._isEnd||!b.isLoadData||(c.callback(a,n)!==!1&&b.onLoad(),b.isLoadData=0,fb.pause(),db=setTimeout(function(){b.endPull(!1)},15e3))})},cb.init(),cb.setDefH()),eb=this,fb={pause:function(){H=!0},play:function(){H=!1},scrollTop:function(a){H||L(parseFloat(a)||0)},setLockfull:function(a){T.setLockfull(!!a)},setLockTopSpace:function(b){a.isLockTopSpace=!!b},setLockBotSpace:function(b){a.isLockBotSpace=!!b},setActivated:function(a){T.setActivated(!!a)},destroy:function(){var c,b,a=[];for(f(g,function(b,c){eb._KENID!=c.KENID&&a.push(k({},c))}),b=g.length-1;b>=0;b--)c=g[b],j(c.elem,c.type,c.handle);for(g.length=[],b=a.length-1;b>=0;b--)c=a[b],h=c.KENID,i(c.elem,c.type,c.handle)},isEndPull:function(a){ab&&ab.endPull(a),!a&&(ab._isEnd=!1)},isEndPush:function(a){cb&&cb.endPull(a),!a&&(cb._isEnd=!1)}},fb):void 0):new y(a)},a.CY.sliderScroll=y,y)});