!function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="includes/",t(t.s=105)}({105:function(e,n,t){e.exports=t(106)},106:function(e,n,t){"use strict";t.r(n);t(107);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){if(window&&window.__IS_CLITICAL_INITED__)return!0;var e="not-specified";if("object"===("undefined"==typeof navigator?"undefined":i(navigator))){var n=navigator.userAgent;/Android|HTC/i.test(n)?(window.isMobile=!0,e="android"):/iPad/i.test(n)?(window.isMobile=!0,window.isIOS=!0,e="ios"):/iPod|iPhone/i.test(n)?(window.isMobile=!0,window.isIOS=!0,e="ios"):/Mobile/i.test(n)&&/Safari/i.test(n)&&(window.isMobile=!0,window.isIOS=!0,e="ios"),/UCBrowser/.test(n)&&(window.isUC=!0);var t=function(){if(/iP(hone|od|ad)/.test(navigator.platform)){var e=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3]||0,10)]}}();window.iOSversion=Array.isArray(t)?t[0]:void 0,Array.isArray(t)&&t[0]<10&&(window.isMobile=!0,window.isIOS=!0,window.isOldIOS=!0),window.isAlipay=/AlipayChannelId/.test(n)||/AlipayDefined/.test(n)||/AliApp/.test(n)||/AlipayClient/.test(n),window.isAliPay=window.isAlipay,window.isWechat=/MicroMessenger/.test(n),window.isWeChat=window.isWechat,window.isWX=window.isWechat,window.isWx=window.isWechat}window.isMobile&&document.documentElement.classList.add("is-mobile"),e&&document.documentElement.classList.add("platform-"+e),document.addEventListener("DOMContentLoaded",function(){var e;(e=document.createElement("canvas")).getContext&&e.getContext("2d")&&0===e.toDataURL("image/webp").indexOf("data:image/webp")&&document.documentElement.classList.add("webp");var n=function(){document.documentElement.classList.add("is-offline")};window.addEventListener("online",function(){document.documentElement.classList.remove("is-offline")}),window.addEventListener("offline",n),!1===navigator.onLine&&n()}),window.__IS_CLITICAL_INITED__=!0}()},107:function(e,n,t){}});