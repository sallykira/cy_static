!function(a,b){if("undefined"!=typeof module)require("../utils/serverUtil"),require("../utils/lazyloadUtil"),module.exports=b(a);else if(b(a),"function"==typeof define&&(define.amd||define.cmd)){var c="//"+(/ppppoints.com/.test(document.domain)?"j.ppppoints.com":"j.changyoyo.com")+"/static/js/";requirejs.config({paths:{serverUtil:c+"utils/serverUtil",lazyloadUtil:c+"utils/lazyloadUtil"}}),define("adModule",["serverUtil","lazyloadUtil"],function(){return b(a)})}}(window||this,function(a){var b,c,d,e,f,g;return!a.CY&&(a.CY={}),a.CY.adModule?a.CY.adModule:(c=document,d=function(a){return Object.prototype.toString.call(a).split(/\s(\w+)/)[1].toLowerCase()},f=function(a){return a+(Math.random()+"").slice(9)},b=function(){var b,h,i,j,a=[];return a.push('<div class="l-item">'),a.push('    <a data-spm="{id}" href="{adUrl}">'),a.push("        <article>"),a.push('            <span class="l-img">'),a.push('                <img alt="image" realSrc="{adContent}" />'),a.push("            </span>"),a.push('            <span class="l-title" title="{positionName}">{positionName}</span>'),a.push("        </article>"),a.push("    </a>"),a.push("</div>"),a=a.join(""),b=function(){var d,a=[];a.push(".adModule["+g+"]{overflow: hidden;}"),a.push(".adModule img["+g+"]{min-height: 100px;}"),a.push(".adModule["+g+"] .l-item {font-size:0.28rem;}"),a.push(".adModule["+g+"] .l-item article {width: 100%;height: 100%;position: relative;}"),a.push(".adModule["+g+"] .l-item .l-title{display:none;position: absolute;bottom: 0.1rem;left: 0;right: 0;text-align: center;color: #333;font-size: 0.36rem;}"),a.push(".adModule["+g+"] .l-item .l-img{min-height: 0.5rem;display: block;position: relative;}"),a.push(".minHeight.adModule["+g+"] .l-item .l-img{min-height: 1rem;}"),a.push(".adModule["+g+"] .l-item .l-img img{width: 100%;display: block;height: 100%;}"),a.push(".adModule2["+g+"]{}"),a.push(".adModule2["+g+"] .l-item{float:left;width:50%;}"),a.push(".adModule3["+g+"]{}"),a.push(".adModule3["+g+"] .l-item{width:33.3%;float:left;}"),a.push(".adModule4["+g+"]{}"),a.push(".adModule4["+g+"] .l-item{width:25%;float:left;}"),d=c.createElement("style"),d.type="text/css",d.innerHTML=a.join(""),c.getElementsByTagName("head")[0].appendChild(d),b=function(){}},h=function(a,b){return a&&a instanceof Object?a:a?(b||document).querySelector(a):null},i=function(a,b){for(var c in b)b.hasOwnProperty(c)&&("object"!=d(b[c])?void 0!=b[c]&&(a[c]=b[c]):a[c]=i(a[c]||{},b[c]));return a},j=function(a,b){return b&&"object"==typeof b?a.replace(/\{([^{}]+)\}/g,function(a,c){var d=b[c];return void 0!==d?""+d:""}):a.toString()},function(c,k){var l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D;c=h(c),k=i({teml:a,data:null,onBefore:function(){},onAfter:function(){}},k),l="px ",m=void 0,n=k.id,e=n||f("adModule"),!g&&(g=e),b(),o=k.keyId,p=k.column||"1",q=function(a,b){return isNaN(parseInt(a))?b:parseInt(a)},r=function(a,b){return isNaN(parseFloat(a))?b:parseFloat(a)},s=q(k.unLazyNum,0),t=q(k.rowSpace,5)/2,u=r(k.colSpace,5)/2,v=r(k.paddingTop,10),w=r(k.paddingBottom,10),x=k.moduleSpm||"",y=k.moduleName||"",z=k.backgroundColor,A=function(a){var g,f,b=("https:"==location.protocol?"https:":"http:")+CY.serverUtil.imgUrl+"/";return a&&a.length?(f=[],k.onBefore(a,k,c),a&&a.length>0&&(a.sort(function(a,b){return b.sort-a.sort}),g=a.length,a.map(function(a,c){!/^http/.test(a.adContent)&&!/^data:/.test(a.adContent)&&(a.adContent=b+a.adContent),("https://www.changyoyo.com"==a.adUrl||!a.adUrl)&&(a.adUrl="javascript:void(0)",a.id="no"),a.adUrl=a.adUrl.replace(/(http.*?.jfmore.com)(\/.*)/,"$2");var h,d=k.teml,e=[t,u,t,u];p>c?e[0]=0:(h=g%p,h=0==h?p:h,c>=g-h&&(e[2]=0)),d=d.replace(/(class="l-item")/,'$1 style="padding:'+e.join("px ")+'px"'),f.push(j(d,a))})),s&&f.forEach(function(a,b){s>b&&(f[b]=a.replace(/ src="/," "+e+' crs="'),f[b]=f[b].replace(/ realSrc="/," "+e+' src="'))}),c.innerHTML='<div class="content">'+f.join("")+"</div>",s&&function(a){for(var b=0,c=a.length;c>b;b++)s>b&&function(a){a.onload=function(){a.removeAttribute(e)}}(a[b])}(c.querySelectorAll("img")),"function"==d(CY.lazyloadUtil)&&setTimeout(function(){CY.lazyloadUtil()},15),setTimeout(function(){c.classList.remove("minHeight")},2e3),k.onAfter(a,k,c),void 0):i(c.style,{display:"none"})},c.setAttribute(g,""),!c.id&&c.setAttribute("id",e),c.setAttribute("title",y),c.setAttribute("keyId",o),c.classList.add("adModule"),c.classList.add("minHeight"),c.classList.add("adModule"+p),i(c.style,{paddingLeft:u+l}),i(c.style,{paddingRight:u+l}),m!=v&&(0>v?i(c.style,{marginTop:v+l}):i(c.style,{paddingTop:v+l})),m!=w&&(0>w?i(c.style,{marginBottom:w+l}):i(c.style,{paddingBottom:w+l})),z&&i(c.style,{backgroundColor:z}),x&&(c.setAttribute("data-spm",x),c.setAttribute("data-spm-type","all")),k.data?(C=d(k.data),"array"==C?B=k.data:"object"==C&&(B=[k.data]),B&&A(B)):(D=function(){CY.serverUtil.loadRecommend({keyIds:o},function(a,b){A(b)})},D())}}(),a.CY.adModule=b,b)}); 