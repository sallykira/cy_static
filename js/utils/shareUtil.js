"use strict";!function(e,n){if("undefined"!=typeof module)require("../libs/ajax"),require("../libs/browser"),module.exports=n(e);else if(n(e),"function"==typeof define&&(define.amd||define.cmd)){var t="//"+(/ppppoints.com/.test(document.domain)?"j.ppppoints.com":"j.changyoyo.com")+"/static/js/";requirejs.config({paths:{ajax:t+"libs/ajax",browser:t+"libs/browser"}}),define("shareUtil",["ajax","browser"],function(){return n(e)})}}(window||void 0,function(e){if(!e.CY&&(e.CY={}),e.CY.shareUtil)return e.CY.shareUtil;var n,t=window.requirejs,i=function(e,t){if(n)return n=[t];n=[t];var i=document.createElement("script");i.type="text/javascript",i.src=e[0],document.getElementsByTagName("head")[0].appendChild(i),i.onload=function(){this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||n[0]({})}},o=null,r=function(e){return Object.prototype.toString.call(e).split(/\s(\w+)/)[1].toLowerCase()},a=function(e,n){for(var t in n)"object"!=r(n[t])&&(e[t]=n[t]);return e},s={_path:{weixin:"//res.wx.qq.com/open/js/jweixin-1.6.0.js",qq:"//open.mobile.qq.com/sdk/qqapi.js",qzone:"//qzonestyle.gtimg.cn/qzone/hybrid/lib/jsbridge.js"},_initWeixin:function(n,t){t.config||(t=window.wx),e.CY.ajax("/pointgate/wechat/jsapi/auth.htm",{method:"GET",body:{authUrl:encodeURIComponent(location.href.split("#")[0])}}).then(function(e){if("0000"==e.respCode){var i,r=e.data||{},s={debug:!1,appId:r.appId,timestamp:r.timestamp,nonceStr:r.nonceStr,signature:r.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone","updateAppMessageShareData","updateTimelineShareData"]};i=a([],s.jsApiList),t.config(s),t.ready(function(){(o=function(e){i.forEach(function(n){t[n]&&t[n](e)})})(n)}),t.error(function(){})}})},_initQq:function(n){n.image_url=n.imgUrl,n.share_url=n.link,e.mqq.data.setShareInfo(n)},_initQzone:function(n){["toQQ","toQz","toWX","toTL"].forEach(function(t){e.mqq.invoke("share",t,n,function(e){n.success&&n.success(e)})})},setShareInfo:function(n){if(o)return void o(n);!t&&(t=i);var r=e.CY.browser.weixin?"weixin":e.CY.browser.qq?"qq":e.CY.browser.qzone?"qzone":"";if((e.weixin&&e.wx||e.CY.browser.qq&&e.mqq||e.CY.browser.qzone&&e.QZAppExternal)&&(i=function(e,n){n()}),r){var s=this,c={};a(c,n),a(c,n[r]||{}),t([s._path[r]],function(e){s["_init"+r.charAt(0).toUpperCase()+r.slice(1)](c,e)})}}};return e.CY.shareUtil=s,s});