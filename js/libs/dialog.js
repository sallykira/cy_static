!function(a,b){"undefined"!=typeof module?module.exports=b(a):(b(a),"function"==typeof define&&(define.amd||define.cmd)&&define("dialog",function(){return b(a)}))}(window||this,function(a){var b,c,e,f,g,h,i,j,k,l,m,n;return!a.CY&&(a.CY={}),a.CY.ui?a.CY.ui:(b=document,c=function(){},e=function(a){return Object.prototype.toString.call(a).split(/\s(\w+)/)[1].toLowerCase()},f=function(a,b,c){a.addEventListener(b,c,!1)},g=function(a,b){for(var c in b)b.hasOwnProperty(c)&&("object"!=e(b[c])?void 0!=b[c]&&(a[c]=b[c]):a[c]=g({},b[c]));return a},h=function(a,b){return b&&"object"==e(b)?a.replace(/\{([^{}]+)\}/g,function(a,c){var d=b[c];return void 0!==d?""+d:""}):a.toString()},i=function(a){g(a.style,{display:"block"})},j=function(a){g(a.style,{display:"none"})},k=function(a,c){return a=b.createElement(a),g(a.style,c||{}),a},l=function(){var a,d,h,l={clickClose:!0,callback:c};return{create:function(c){var i=this,j=e(c);return"function"==j?(l.callback=c,c={}):c&&"object"!=j&&(c={}),h=g(l,c),d?this:(d=!0,a=b.body.appendChild(k("div",{position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:1e3,display:"none",backgroundColor:"rgba(0,0,0,.3)"})),f(a,"click",function(){h.clickClose&&i.close()}),i)},show:function(b){var c=this;!a&&c.create(),i(a),b&&b(a)},close:function(b){var c=this;!a&&c.create(),h.callback(a)!==!1&&(j(a),b&&b(a))}}}(),m=function(){var a,d,m={elem:null,content:"",textAlign:"center",className:"",clickClose:!0,close:"关闭",loading:"正在加载中……",loadingError:"加载失败",title:"消息提示",confirm:"确认",cancel:"取消",callback:c},n={box:function(){var a=[];return a.push('<div class="cy-dialog cy-dialog-{type} cy-dialog-{className}">'),a.push('<div class="cy-dialog-top cy-dialog-hideTop{hideTop}">{top}</div>'),a.push('<div class="cy-dialog-midddle cy-dialog-{textAlign}">{middle}</div>'),a.push('<div class="cy-dialog-bottom">{bottom}</div>'),a.push("</div>"),a.join("")}(),top:'<div class="cy-dialog-title">{title}</div><div class="cy-dialog-close">{close}</div>',btn:'<span class="cy-dialog-btn cy-dialog-btn-{type}">{text}</span>',error:""},o=function(b){d&&a&&(d.options.elem?j(a):a.parentNode.removeChild(a),a=null,b&&b())},p=function(b){i(a),b&&b()},r=function(a){return(a||"").toString().match(/^([+-]=)?([\d+-.]+)(.*)$/)||[]},s=function(){var h,g,e=d.options;e.elem?a=b.querySelector(e.elem):(g=k("div"),g.innerHTML=e.text,h=g.firstChild,a=b.body.appendChild(h&&1==h.nodeType?h:g)),f(a,"click",function(b){for(var c=b.target||b.srcElement;c&&c!=a;)1==c.nodeType&&d.eventList.forEach(function(a){c.classList.contains(a.key)&&a.val.call(w,d)}),c=c["parentNode"]})},t=function(){var d,a=[];a.push('.cy-dialog{font-family: "PingFang SC", "Helvetica Neue", Helvetica, STHeitiSC-Light, WOL_SB, Tahoma, Helvetica, sans-serif;z-index:1111;position:fixed;border-radius:5px;background:rgba(255,255,255,.95);overflow:hidden;font-size:17px;line-height:21px;top:50%;left:50%;transform:translate3d(-50%,-50%,0)}'),a.push(".cy-dialog .cy-dialog-top{font-size:18px;font-weight:500;text-align:center;margin: 0 15px 0 15px;display: flex;padding: 20px 0 0px 0;}"),a.push(".cy-dialog .cy-dialog-hideTop1{display:none;}"),a.push(".cy-dialog .cy-dialog-midddle{margin:20px 15px 15px 15px;font-size:14px}"),a.push(".cy-dialog .cy-dialog-bottom{padding:5px 13px 25px 13px;font-size:14px;display:flex}"),a.push(".cy-dialog .cy-dialog-top .cy-dialog-title{font-family:PingFangSC-Regular;display:block;width:100%}"),a.push(".cy-dialog .cy-dialog-top .cy-dialog-close{display:none}"),a.push(".cy-dialog .cy-dialog-btn{background: #FFC922;border-radius: 17.5px;color: #2A292E;height:35px;line-height:35px;display:block;width:100%;text-align:center;margin:0 7px;font-size:14px}"),a.push(".cy-dialog .cy-dialog-btn:last-child{}"),a.push(".cy-dialog-left{text-align:left}"),a.push(".cy-dialog-center{text-align:center}"),a.push(".cy-dialog-right{text-align:right}"),a.push(".cy-dialog .cy-dialog-btn-cancel{ background: #fff;border: 1px solid #D4D4D5;border-radius: 17.5px;color: #2A292E;}"),a.push(".cy-dialog .cy-dialog-btn-confirm{}"),a.push(".cy-dialog-alert{}"),a.push(".cy-dialog-confirm{}"),d=k("style"),d.type="text/css",d.innerHTML=a.join(""),b.getElementsByTagName("head")[0].appendChild(d),t=c},u=function(a){var b=a[0];return a[1],"string"==e(b)&&(b={content:b,callback:a[1]||c}),"function"==e(b)&&(b={callback:a[0]}),d={},d.options=g(g({},m),b||{}),!d.options.title&&(d.options.hideTop=1),d.beforeHooks=[],d.afterHooks=[],d.eventList=[],d},v=function(){var b=this;d.beforeHooks.forEach(function(a){a.call(b,d)}),l.create(function(){d.options.clickClose&&o()}).show(),o(),s(),t(),i(a),d.afterHooks.forEach(function(c){c.call(b,d,a)})},w={close:function(){o(),l.close()},show:p,extend:function(a){var c,b=this;if("object"==e(a))for(c in a)a.hasOwnProperty(c)&&(b[c]="function"==e(a[c])?function(c){return function(){u(arguments),d.eventList.push({key:"cy-dialog-close",val:function(a){this.close(),l.close(),a.options.callback()}}),a[c].call(b,d),v(),p()}}(c):a[c])}};return w.extend({open:function(a){var c;c=a.options,c.text=c.content,a.afterHooks.push(function(a,b){c.text&&g(b.style,{position:"relative",zIndex:"1111"})}),a.afterHooks.push(function(a,b){c.callback(b)})},pop:function(a){var c;c=a.options,c.width=c.width||"74%",c.height=c.height||"auto",c.text=c.content,r(c.width),r(c.height),a.afterHooks.push(function(a,b){g(b.style,{width:c.width,height:c.height,position:"fixed",zIndex:"1111",top:"50%",left:"50%",transform:"translate3d(-50%,-50%,0)"})}),a.afterHooks.push(function(a,b){c.callback(b)})},alert:function(a){var c;c=a.options,c.elem=null,c.width=c.width||"74%",c.height=c.height||"auto",c.text=h(n.box,{type:"alert",hideTop:c.hideTop,textAlign:c.textAlign,top:h(n.top,c),middle:c.content||"",bottom:h(n.btn,{text:c.text||c.close})}),a.afterHooks.push(function(a,b){g(b.style,{width:c.width,height:c.height})}),a.eventList.push({key:"cy-dialog-btn",val:function(a){this.close(),l.close(),a.options.callback(a)}})},confirm:function(a){var c,d;c=a.options,d=c.bottom,c.elem=null,c.width=c.width||"74%",c.height=c.height||"auto","array"!=e(d)&&(c.bottom=[{type:"cancel",text:c.cancel},{type:"confirm",text:c.confirm,callback:c.callback}],d=c.bottom),1==d.length?(!d[0].text&&(d[0].text=c.confirm),!d[0].type&&(d[0].type="confirm")):2==d.length&&(!d[0].text&&(d[0].text=c.cancel),!d[1].text&&(d[1].text=c.confirm),!d[0].type&&(d[0].type="cancel"),!d[1].type&&(d[1].type="confirm")),c.text=h(n.box,{type:"confirm",hideTop:c.hideTop,textAlign:c.textAlign,top:h(n.top,c),middle:c.content||"",bottom:function(b){return d.forEach(function(c){b.push(h(n.btn,c)),a.beforeHooks=a.beforeHooks.concat(c.beforeHooks||[]),a.afterHooks=a.afterHooks.concat(c.afterHooks||[]),a.eventList.push({key:"cy-dialog-btn-"+c.type,val:function(){this.close(),l.close(),c.callback&&c.callback(c)}})}),b.join("")}([])}),a.afterHooks.push(function(a,b){g(b.style,{width:c.width,height:c.height})})}}),w}(),n=function(){var f,i,j,a='<div class="toast-message {className}">{text}</div>',d="active",l={duration:1e3,className:""},m=function(){var d,a=[];a.push(".toast-container{line-height:17px;position:fixed;z-index:9999;bottom:50px;left:50%;transform:translate(-50%,0);transition:opacity.3s;opacity:0}"),a.push(".toast-container.active{opacity:.9}"),a.push(".toast-message{font-size:14px;padding:10px 25px;text-align:center;color:#fff;border-radius:6px;background-color:#323232}"),d=k("style"),d.type="text/css",d.innerHTML=a.join(""),b.getElementsByTagName("head")[0].appendChild(d),m=c},n=function(){f||(f=b.body.appendChild(k("div",{position:"fixed",lineHeight:"17px",zIndex:"1111",bottom:"50px",left:"50%",transform:"translate(-50%,0)"})),f.classList.add("toast-container"),m())};return function(b,c){"object"==e(b)&&(c=b,b=c.text),c=c||{},c.text=b||"",i=g(g({},l),c),n(),f.innerHTML=h(a,i),f.classList.add(d),f.style.display="block",clearTimeout(j),j=setTimeout(function(){f.classList.remove(d),setTimeout(function(){f.style.display="none"},300)},i.duration)}}(),a.CY.ui={mask:l,toast:n,dialog:m},a.CY.ui)});