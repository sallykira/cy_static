"use strict";!function(e,t){if("undefined"!=typeof module)require("../libs/browser"),module.exports=t(e);else if(t(e),"function"==typeof define&&(define.amd||define.cmd)){var i="//"+(!/ppppoints.com/.test(document.domain)?"j.changyoyo.com":"j.ppppoints.com")+"/static/js/";requirejs.config({paths:{browser:i+"libs/browser"}}),define("nativeUtil",["browser"],function(){return t(e)})}}(window||void 0,function(t){if(!t.CY&&(t.CY={}),t.CY.nativeUtil)return t.CY.nativeUtil;var i=function(e){return Object.prototype.toString.call(e).split(/\s(\w+)/)[1].toLowerCase()},n={loadUrl:function(e){var t=document.createElement("iframe");t.setAttribute("src",e),t.setAttribute("style","display:none;"),document.body.appendChild(t),t.parentNode.removeChild(t),t=null},open:function(e,t,n,o){var r="native://"+e+"?action="+t;"function"==i(n)&&(o=n,n={}),n&&(r+="&data="+encodeURIComponent(JSON.stringify(n||{}))),o&&(r+="&callback="+o),this.loadUrl(r)},bridge:{check:function(e){if(t.WebViewJavascriptBridge)return e(t.WebViewJavascriptBridge);if(t.WVJBCallbacks)return t.WVJBCallbacks.push(e);t.WVJBCallbacks=[e];var i=document.createElement("iframe");i.style.display="none",i.src="https://__bridge_loaded__",document.documentElement.appendChild(i),setTimeout(function(){document.documentElement.removeChild(i)},0)},open:function(e,n,o){"function"==i(n)&&(o=n,n={}),this.check(function(){if(!t.WebViewJavascriptBridge)return alert("您的APP版本过低，请升级APP。"),!1;t.WebViewJavascriptBridge.callHandler("jsCallNative",{action:e,params:n||{}},function(e){o&&o(e)})})}},open_v1:function(n){if(!t.CY.browser.jfmore)return!1;var o=this,r="json"+(Math.random()+"").substr(2);e[r]=function(t){n.callback&&n.callback(t),delete e[r]};var a,c,s,l,d=n.ios||{},u=n.android||{};return t.CY.browser.ios?(a="boolean"==i(d.isVebView)&&d.isVebView,c=d.host||n.host,s=d.action||n.action,l=d.data||n.data):(a="boolean"!=i(u.isVebView)||u.isVebView,c=u.host||n.host,s=u.action||n.action,l=u.data||n.data),a?o.open(c||"user",s,l,r):o.bridge.open(s,l,e[r]),!0},closeWebview:function(e){return this.open_v1(e||{action:"closewebview"})},goBack:function(){document.referrer?history.back():t.CY.browser.jfmore&&this.closeWebview()},goHome:function(e){t.CY.browser.jfmore?this.closeWebview():spm.refresh(e||"/jfmall/index.htm")}};return t.CY.nativeUtil=n,n});