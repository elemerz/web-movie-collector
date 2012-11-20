(function(){var a=function(a){return typeof a=="function"};Klass=function(){},Klass.extend=function(b){var c=function(b){b!=a&&a(this.init)&&this.init.apply(this,arguments)};c.prototype=new this(a);for(key in b)(function(b,d){c.prototype[key]=!a(b)||!a(d)?b:function(){return this._super=d,b.apply(this,arguments)}})(b[key],c.prototype[key]);return c.prototype.constructor=c,c.extend=this.extend,c}})();/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);/*! jQuery UI - v1.9.1 - 2012-11-19
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.button.js
* Copyright (c) 2012 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().andSelf().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.9.1",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e(function(){var t=document.body,n=t.appendChild(n=document.createElement("div"));n.offsetHeight,e.extend(n.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=n.offsetHeight===100,e.support.selectstart="onselectstart"in n,t.removeChild(n).style.display="none"}),function(){var t=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];e.ui.ie=t.length?!0:!1,e.ui.ie6=parseFloat(t[1],10)===6}(),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},contains:e.contains,hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)},isOverAxis:function(e,t,n){return e>t&&e<t+n},isOver:function(t,n,r,i,s,o){return e.ui.isOverAxis(t,r,s)&&e.ui.isOverAxis(n,i,o)}})})(jQuery);(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a=t.split(".")[0];t=t.split(".")[1],i=a+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[a]=e[a]||{},s=e[a][t],o=e[a][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,i){e.isFunction(i)&&(r[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},r=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=r,s=i.apply(this,arguments),this._super=t,this._superApply=n,s}}())}),o.prototype=e.widget.extend(u,{widgetEventPrefix:u.widgetEventPrefix||t},r,{constructor:o,namespace:a,widgetName:t,widgetBaseClass:i,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():new i(o,this)}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetName,this),e.data(r,this.widgetFullName,this),this._on(this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n){var r,i=this;n?(t=r=e(t),this.bindings=this.bindings.add(t)):(n=t,t=this.element,r=this.widget()),e.each(n,function(n,s){function o(){if(i.options.disabled===!0||e(this).hasClass("ui-state-disabled"))return;return(typeof s=="string"?i[s]:s).apply(i,arguments)}typeof s!="string"&&(o.guid=s.guid=s.guid||o.guid||e.guid++);var u=n.match(/^(\w+)\s*(.*)$/),a=u[1]+i.eventNamespace,f=u[2];f?r.delegate(f,a,o):t.bind(a,o)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&(e.effects.effect[u]||e.uiBackCompat!==!1&&e.effects[u])?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}}),e.uiBackCompat!==!1&&(e.Widget.prototype._getCreateOptions=function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]})})(jQuery);(function(e,t){var n,r,i,s,o="ui-button ui-widget ui-state-default ui-corner-all",u="ui-state-hover ui-state-active ",a="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",f=function(){var t=e(this).find(":ui-button");setTimeout(function(){t.button("refresh")},1)},l=function(t){var n=t.name,r=t.form,i=e([]);return n&&(r?i=e(r).find("[name='"+n+"']"):i=e("[name='"+n+"']",t.ownerDocument).filter(function(){return!this.form})),i};e.widget("ui.button",{version:"1.9.1",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,f),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,u=this.options,a=this.type==="checkbox"||this.type==="radio",c="ui-state-hover"+(a?"":" ui-state-active"),h="ui-state-focus";u.label===null&&(u.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html()),this.buttonElement.addClass(o).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(u.disabled)return;e(this).addClass("ui-state-hover"),this===n&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){if(u.disabled)return;e(this).removeClass(c)}).bind("click"+this.eventNamespace,function(e){u.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){t.buttonElement.addClass(h)}).bind("blur"+this.eventNamespace,function(){t.buttonElement.removeClass(h)}),a&&(this.element.bind("change"+this.eventNamespace,function(){if(s)return;t.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(e){if(u.disabled)return;s=!1,r=e.pageX,i=e.pageY}).bind("mouseup"+this.eventNamespace,function(e){if(u.disabled)return;if(r!==e.pageX||i!==e.pageY)s=!0})),this.type==="checkbox"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1;e(this).toggleClass("ui-state-active"),t.buttonElement.attr("aria-pressed",t.element[0].checked)}):this.type==="radio"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var n=t.element[0];l(n).not(n).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).addClass("ui-state-active"),n=this,t.document.one("mouseup",function(){n=null})}).bind("mouseup"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(t){if(u.disabled)return!1;(t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active")}).bind("keyup"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",u.disabled),this._resetButton()},_determineButtonType:function(){var e,t,n;this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button",this.type==="checkbox"||this.type==="radio"?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),n=this.element.is(":checked"),n&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",n)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(o+" "+u+" "+a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){this._super(e,t);if(e==="disabled"){t?this.element.prop("disabled",!0):this.element.prop("disabled",!1);return}this._resetButton()},refresh:function(){var t=this.element.is(":disabled")||this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),this.type==="radio"?l(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var t=this.buttonElement.removeClass(a),n=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),r=this.options.icons,i=r.primary&&r.secondary,s=[];r.primary||r.secondary?(this.options.text&&s.push("ui-button-text-icon"+(i?"s":r.primary?"-primary":"-secondary")),r.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+r.primary+"'></span>"),r.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+r.secondary+"'></span>"),this.options.text||(s.push(i?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(n)))):s.push("ui-button-text-only"),t.addClass(s.join(" "))}}),e.widget("ui.buttonset",{version:"1.9.1",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){e==="disabled"&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);/*

 jquery.layout 1.3.0 - Release Candidate 30.74
 $Date: 2012-10-28 08:00:00 (Sun, 28 Oct 2012) $
 $Rev: 303007 $

 Copyright (c) 2012 
   Fabrizio Balliano (http://www.fabrizioballiano.net)
   Kevin Dalman (http://allpro.net)

 Dual licensed under the GPL (http://www.gnu.org/licenses/gpl.html)
 and MIT (http://www.opensource.org/licenses/mit-license.php) licenses.

 Changelog: http://layout.jquery-dev.net/changelog.cfm#1.3.0.rc30.74

 Docs: http://layout.jquery-dev.net/documentation.html
 Tips: http://layout.jquery-dev.net/tips.html
 Help: http://groups.google.com/group/jquery-ui-layout
*/
(function(b){var a=Math.min,d=Math.max,c=Math.floor,g=function(j){return"string"===b.type(j)},h=function(j,a){if(b.isArray(a))for(var d=0,c=a.length;d<c;d++){var h=a[d];try{g(h)&&(h=eval(h)),b.isFunction(h)&&h(j)}catch(p){}}};b.layout={version:"1.3.rc30.74",revision:0.033007,browser:{mozilla:!!b.browser.mozilla,webkit:!!b.browser.webkit||!!b.browser.safari,msie:!!b.browser.msie,isIE6:b.browser.msie&&6==b.browser.version,boxModel:!1!==b.support.boxModel||!b.browser.msie,version:b.browser.version},
effects:{slide:{all:{duration:"fast"},north:{direction:"up"},south:{direction:"down"},east:{direction:"right"},west:{direction:"left"}},drop:{all:{duration:"slow"},north:{direction:"up"},south:{direction:"down"},east:{direction:"right"},west:{direction:"left"}},scale:{all:{duration:"fast"}},blind:{},clip:{},explode:{},fade:{},fold:{},puff:{},size:{all:{easing:"swing"}}},config:{optionRootKeys:"effects panes north south west east center".split(" "),allPanes:["north","south","west","east","center"],
borderPanes:["north","south","west","east"],oppositeEdge:{north:"south",south:"north",east:"west",west:"east"},offscreenCSS:{left:"-99999px",right:"auto"},offscreenReset:"offscreenReset",hidden:{visibility:"hidden"},visible:{visibility:"visible"},resizers:{cssReq:{position:"absolute",padding:0,margin:0,fontSize:"1px",textAlign:"left",overflow:"hidden"},cssDemo:{background:"#DDD",border:"none"}},togglers:{cssReq:{position:"absolute",display:"block",padding:0,margin:0,overflow:"hidden",textAlign:"center",
fontSize:"1px",cursor:"pointer",zIndex:1},cssDemo:{background:"#AAA"}},content:{cssReq:{position:"relative"},cssDemo:{overflow:"auto",padding:"10px"},cssDemoPane:{overflow:"hidden",padding:0}},panes:{cssReq:{position:"absolute",margin:0},cssDemo:{padding:"10px",background:"#FFF",border:"1px solid #BBB",overflow:"auto"}},north:{side:"top",sizeType:"Height",dir:"horz",cssReq:{top:0,bottom:"auto",left:0,right:0,width:"auto"}},south:{side:"bottom",sizeType:"Height",dir:"horz",cssReq:{top:"auto",bottom:0,
left:0,right:0,width:"auto"}},east:{side:"right",sizeType:"Width",dir:"vert",cssReq:{left:"auto",right:0,top:"auto",bottom:"auto",height:"auto"}},west:{side:"left",sizeType:"Width",dir:"vert",cssReq:{left:0,right:"auto",top:"auto",bottom:"auto",height:"auto"}},center:{dir:"center",cssReq:{left:"auto",right:"auto",top:"auto",bottom:"auto",height:"auto",width:"auto"}}},callbacks:{},getParentPaneElem:function(j){j=b(j);if(j=j.data("layout")||j.data("parentLayout")){j=j.container;if(j.data("layoutPane"))return j;
j=j.closest("."+b.layout.defaults.panes.paneClass);if(j.data("layoutPane"))return j}return null},getParentPaneInstance:function(j){return(j=b.layout.getParentPaneElem(j))?j.data("layoutPane"):null},getParentLayoutInstance:function(j){return(j=b.layout.getParentPaneElem(j))?j.data("parentLayout"):null},getEventObject:function(b){return"object"===typeof b&&b.stopPropagation?b:null},parsePaneName:function(j){var a=b.layout.getEventObject(j);return a?(a.stopPropagation(),b(this).data("layoutEdge")):j},
plugins:{draggable:!!b.fn.draggable,effects:{core:!!b.effects,slide:b.effects&&(b.effects.slide||b.effects.effect&&b.effects.effect.slide)}},onCreate:[],onLoad:[],onReady:[],onDestroy:[],onUnload:[],afterOpen:[],afterClose:[],scrollbarWidth:function(){return window.scrollbarWidth||b.layout.getScrollbarSize("width")},scrollbarHeight:function(){return window.scrollbarHeight||b.layout.getScrollbarSize("height")},getScrollbarSize:function(j){var a=b('<div style="position: absolute; top: -10000px; left: -10000px; width: 100px; height: 100px; overflow: scroll;"></div>').appendTo("body"),
d={width:a.css("width")-a[0].clientWidth,height:a.height()-a[0].clientHeight};a.remove();window.scrollbarWidth=d.width;window.scrollbarHeight=d.height;return j.match(/^(width|height)$/)?d[j]:d},showInvisibly:function(b,a){if(b&&b.length&&(a||"none"===b.css("display"))){var d=b[0].style,d={display:d.display||"",visibility:d.visibility||""};b.css({display:"block",visibility:"hidden"});return d}return{}},getElementDimensions:function(a,c){var g={css:{},inset:{}},h=g.css,F={bottom:0},p=b.layout.cssNum,
A=a.offset(),x,D,z;g.offsetLeft=A.left;g.offsetTop=A.top;c||(c={});b.each(["Left","Right","Top","Bottom"],function(d,p){x=h["border"+p]=b.layout.borderWidth(a,p);D=h["padding"+p]=b.layout.cssNum(a,"padding"+p);z=p.toLowerCase();g.inset[z]=0<=c[z]?c[z]:D;F[z]=g.inset[z]+x});h.width=a.css("width");h.height=a.height();h.top=p(a,"top",!0);h.bottom=p(a,"bottom",!0);h.left=p(a,"left",!0);h.right=p(a,"right",!0);g.outerWidth=a.outerWidth();g.outerHeight=a.outerHeight();g.innerWidth=d(0,g.outerWidth-F.left-
F.right);g.innerHeight=d(0,g.outerHeight-F.top-F.bottom);g.layoutWidth=a.innerWidth();g.layoutHeight=a.innerHeight();return g},getElementStyles:function(b,a){var d={},c=b[0].style,g=a.split(","),p=["Top","Bottom","Left","Right"],h=["Color","Style","Width"],x,D,z,T,C,t;for(T=0;T<g.length;T++)if(x=g[T],x.match(/(border|padding|margin)$/))for(C=0;4>C;C++)if(D=p[C],"border"===x)for(t=0;3>t;t++)z=h[t],d[x+D+z]=c[x+D+z];else d[x+D]=c[x+D];else d[x]=c[x];return d},cssWidth:function(a,c){if(0>=c)return 0;
if(!b.layout.browser.boxModel)return c;var g=b.layout.borderWidth,h=b.layout.cssNum,g=c-g(a,"Left")-g(a,"Right")-h(a,"paddingLeft")-h(a,"paddingRight");return d(0,g)},cssHeight:function(a,c){if(0>=c)return 0;if(!b.layout.browser.boxModel)return c;var g=b.layout.borderWidth,h=b.layout.cssNum,g=c-g(a,"Top")-g(a,"Bottom")-h(a,"paddingTop")-h(a,"paddingBottom");return d(0,g)},cssNum:function(a,d,c){a.jquery||(a=b(a));var g=b.layout.showInvisibly(a),d=b.css(a[0],d,!0),c=c&&"auto"==d?d:Math.round(parseFloat(d)||
0);a.css(g);return c},borderWidth:function(a,d){a.jquery&&(a=a[0]);var c="border"+d.substr(0,1).toUpperCase()+d.substr(1);return"none"===b.css(a,c+"Style",!0)?0:Math.round(parseFloat(b.css(a,c+"Width",!0))||0)},isMouseOverElem:function(a,d){var c=b(d||this),g=c.offset(),h=g.top,g=g.left,p=g+c.outerWidth(),c=h+c.outerHeight(),A=a.pageX,x=a.pageY;return b.layout.browser.msie&&0>A&&0>x||A>=g&&A<=p&&x>=h&&x<=c},msg:function(a,d,c,g){b.isPlainObject(a)&&window.debugData?("string"===typeof d?(g=c,c=d):
"object"===typeof c&&(g=c,c=null),c=c||"log( <object> )",g=b.extend({sort:!1,returnHTML:!1,display:!1},g),!0===d||g.display?debugData(a,c,g):window.console&&console.log(debugData(a,c,g))):d?alert(a):window.console?console.log(a):(d=b("#layoutLogger"),d.length||(d=b('<div id="layoutLogger" style="position: '+(b.support.fixedPosition?"fixed":"absolute")+'; top: 5px; z-index: 999999; max-width: 25%; overflow: hidden; border: 1px solid #000; border-radius: 5px; background: #FBFBFB; box-shadow: 0 2px 10px rgba(0,0,0,0.3);"><div style="font-size: 13px; font-weight: bold; padding: 5px 10px; background: #F6F6F6; border-radius: 5px 5px 0 0; cursor: move;"><span style="float: right; padding-left: 7px; cursor: pointer;" title="Remove Console" onclick="$(this).closest(\'#layoutLogger\').remove()">X</span>Layout console.log</div><ul style="font-size: 13px; font-weight: none; list-style: none; margin: 0; padding: 0 0 2px;"></ul></div>').appendTo("body"),
d.css("left",b(window).width()-d.outerWidth()-5),b.ui.draggable&&d.draggable({handle:":first-child"})),d.children("ul").append('<li style="padding: 4px 10px; margin: 0; border-top: 1px solid #CCC;">'+a.replace(/\</g,"&lt;").replace(/\>/g,"&gt;")+"</li>"))}};b.layout.defaults={name:"",containerClass:"ui-layout-container",inset:null,scrollToBookmarkOnLoad:!0,resizeWithWindow:!0,resizeWithWindowDelay:200,resizeWithWindowMaxDelay:0,maskPanesEarly:!1,onresizeall_start:null,onresizeall_end:null,onload_start:null,
onload_end:null,onunload_start:null,onunload_end:null,initPanes:!0,showErrorMessages:!0,showDebugMessages:!1,zIndex:null,zIndexes:{pane_normal:0,content_mask:1,resizer_normal:2,pane_sliding:100,pane_animate:1E3,resizer_drag:1E4},errors:{pane:"pane",selector:"selector",addButtonError:"Error Adding Button \n\nInvalid ",containerMissing:"UI Layout Initialization Error\n\nThe specified layout-container does not exist.",centerPaneMissing:"UI Layout Initialization Error\n\nThe center-pane element does not exist.\n\nThe center-pane is a required element.",
noContainerHeight:"UI Layout Initialization Warning\n\nThe layout-container \"CONTAINER\" has no height.\n\nTherefore the layout is 0-height and hence 'invisible'!",callbackError:"UI Layout Callback Error\n\nThe EVENT callback is not a valid function."},panes:{applyDemoStyles:!1,closable:!0,resizable:!0,slidable:!0,initClosed:!1,initHidden:!1,contentSelector:".ui-layout-content",contentIgnoreSelector:".ui-layout-ignore",findNestedContent:!1,paneClass:"ui-layout-pane",resizerClass:"ui-layout-resizer",
togglerClass:"ui-layout-toggler",buttonClass:"ui-layout-button",minSize:0,maxSize:0,spacing_open:6,spacing_closed:6,togglerLength_open:50,togglerLength_closed:50,togglerAlign_open:"center",togglerAlign_closed:"center",togglerContent_open:"",togglerContent_closed:"",resizerDblClickToggle:!0,autoResize:!0,autoReopen:!0,resizerDragOpacity:1,maskContents:!1,maskObjects:!1,maskZindex:null,resizingGrid:!1,livePaneResizing:!1,liveContentResizing:!1,liveResizingTolerance:1,sliderCursor:"pointer",slideTrigger_open:"click",
slideTrigger_close:"mouseleave",slideDelay_open:300,slideDelay_close:300,hideTogglerOnSlide:!1,preventQuickSlideClose:b.layout.browser.webkit,preventPrematureSlideClose:!1,tips:{Open:"Open",Close:"Close",Resize:"Resize",Slide:"Slide Open",Pin:"Pin",Unpin:"Un-Pin",noRoomToOpen:"Not enough room to show this panel.",minSizeWarning:"Panel has reached its minimum size",maxSizeWarning:"Panel has reached its maximum size"},showOverflowOnHover:!1,enableCursorHotkey:!0,customHotkeyModifier:"SHIFT",fxName:"slide",
fxSpeed:null,fxSettings:{},fxOpacityFix:!0,animatePaneSizing:!1,children:null,containerSelector:"",initChildren:!0,destroyChildren:!0,resizeChildren:!0,triggerEventsOnLoad:!1,triggerEventsDuringLiveResize:!0,onshow_start:null,onshow_end:null,onhide_start:null,onhide_end:null,onopen_start:null,onopen_end:null,onclose_start:null,onclose_end:null,onresize_start:null,onresize_end:null,onsizecontent_start:null,onsizecontent_end:null,onswap_start:null,onswap_end:null,ondrag_start:null,ondrag_end:null},
north:{paneSelector:".ui-layout-north",size:"auto",resizerCursor:"n-resize",customHotkey:""},south:{paneSelector:".ui-layout-south",size:"auto",resizerCursor:"s-resize",customHotkey:""},east:{paneSelector:".ui-layout-east",size:200,resizerCursor:"e-resize",customHotkey:""},west:{paneSelector:".ui-layout-west",size:200,resizerCursor:"w-resize",customHotkey:""},center:{paneSelector:".ui-layout-center",minWidth:0,minHeight:0}};b.layout.optionsMap={layout:"name instanceKey stateManagement effects inset zIndexes errors zIndex scrollToBookmarkOnLoad showErrorMessages maskPanesEarly outset resizeWithWindow resizeWithWindowDelay resizeWithWindowMaxDelay onresizeall onresizeall_start onresizeall_end onload onunload".split(" "),
center:"paneClass contentSelector contentIgnoreSelector findNestedContent applyDemoStyles triggerEventsOnLoad showOverflowOnHover maskContents maskObjects liveContentResizing containerSelector children initChildren resizeChildren destroyChildren onresize onresize_start onresize_end onsizecontent onsizecontent_start onsizecontent_end".split(" "),noDefault:["paneSelector","resizerCursor","customHotkey"]};b.layout.transformData=function(a,d){var c=d?{panes:{},center:{}}:{},g,h,p,A,x,D,z;if("object"!==
typeof a)return c;for(h in a){g=c;x=a[h];p=h.split("__");z=p.length-1;for(D=0;D<=z;D++)A=p[D],D===z?g[A]=b.isPlainObject(x)?b.layout.transformData(x):x:(g[A]||(g[A]={}),g=g[A])}return c};b.layout.backwardCompatibility={map:{applyDefaultStyles:"applyDemoStyles",childOptions:"children",initChildLayout:"initChildren",destroyChildLayout:"destroyChildren",resizeChildLayout:"resizeChildren",resizeNestedLayout:"resizeChildren",resizeWhileDragging:"livePaneResizing",resizeContentWhileDragging:"liveContentResizing",
triggerEventsWhileDragging:"triggerEventsDuringLiveResize",maskIframesOnResize:"maskContents",useStateCookie:"stateManagement.enabled","cookie.autoLoad":"stateManagement.autoLoad","cookie.autoSave":"stateManagement.autoSave","cookie.keys":"stateManagement.stateKeys","cookie.name":"stateManagement.cookie.name","cookie.domain":"stateManagement.cookie.domain","cookie.path":"stateManagement.cookie.path","cookie.expires":"stateManagement.cookie.expires","cookie.secure":"stateManagement.cookie.secure",
noRoomToOpenTip:"tips.noRoomToOpen",togglerTip_open:"tips.Close",togglerTip_closed:"tips.Open",resizerTip:"tips.Resize",sliderTip:"tips.Slide"},renameOptions:function(a){function d(b,c){for(var g=b.split("."),h=g.length-1,p={branch:a,key:g[h]},t=0,q;t<h;t++)q=g[t],p.branch=void 0==p.branch[q]?c?p.branch[q]={}:{}:p.branch[q];return p}var c=b.layout.backwardCompatibility.map,g,h,p,A;for(A in c)g=d(A),p=g.branch[g.key],void 0!==p&&(h=d(c[A],!0),h.branch[h.key]=p,delete g.branch[g.key])},renameAllOptions:function(a){var d=
b.layout.backwardCompatibility.renameOptions;d(a);a.defaults&&("object"!==typeof a.panes&&(a.panes={}),b.extend(!0,a.panes,a.defaults),delete a.defaults);a.panes&&d(a.panes);b.each(b.layout.config.allPanes,function(b,c){a[c]&&d(a[c])});return a}};b.fn.layout=function(j){function B(e){if(!e)return!0;var u=e.keyCode;if(33>u)return!0;var n={38:"north",40:"south",37:"west",39:"east"},a=e.shiftKey,f=e.ctrlKey,l,i,d,k;f&&(37<=u&&40>=u)&&t[n[u]].enableCursorHotkey?k=n[u]:(f||a)&&b.each(p.borderPanes,function(e,
b){l=t[b];i=l.customHotkey;d=l.customHotkeyModifier;if(a&&"SHIFT"==d||f&&"CTRL"==d||f&&a)if(i&&u===(isNaN(i)||9>=i?i.toUpperCase().charCodeAt(0):i))return k=b,!1});if(!k||!w[k]||!t[k].closable||q[k].isHidden)return!0;ja(k);e.stopPropagation();return e.returnValue=!1}function J(e){if(I()){this&&this.tagName&&(e=this);var u;g(e)?u=w[e]:b(e).data("layoutRole")?u=b(e):b(e).parents().each(function(){if(b(this).data("layoutRole"))return u=b(this),!1});if(u&&u.length){var n=u.data("layoutEdge"),e=q[n];e.cssSaved&&
G(n);if(e.isSliding||e.isResizing||e.isClosed)e.cssSaved=!1;else{var a={zIndex:t.zIndexes.resizer_normal+1},f={},l=u.css("overflow"),i=u.css("overflowX"),d=u.css("overflowY");"visible"!=l&&(f.overflow=l,a.overflow="visible");i&&!i.match(/(visible|auto)/)&&(f.overflowX=i,a.overflowX="visible");d&&!d.match(/(visible|auto)/)&&(f.overflowY=i,a.overflowY="visible");e.cssSaved=f;u.css(a);b.each(p.allPanes,function(e,b){b!=n&&G(b)})}}}}function G(e){if(I()){this&&this.tagName&&(e=this);var u;g(e)?u=w[e]:
b(e).data("layoutRole")?u=b(e):b(e).parents().each(function(){if(b(this).data("layoutRole"))return u=b(this),!1});if(u&&u.length){var e=u.data("layoutEdge"),e=q[e],n=e.cssSaved||{};!e.isSliding&&!e.isResizing&&u.css("zIndex",t.zIndexes.pane_normal);u.css(n);e.cssSaved=!1}}}var F=b.layout.browser,p=b.layout.config,A=b.layout.cssWidth,x=b.layout.cssHeight,D=b.layout.getElementDimensions,z=b.layout.getElementStyles,T=b.layout.getEventObject,C=b.layout.parsePaneName,t=b.extend(!0,{},b.layout.defaults);
t.effects=b.extend(!0,{},b.layout.effects);var q={id:"layout"+b.now(),initialized:!1,paneResizing:!1,panesSliding:{},container:{innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0,layoutWidth:0,layoutHeight:0},north:{childIdx:0},south:{childIdx:0},east:{childIdx:0},west:{childIdx:0},center:{childIdx:0}},X={north:null,south:null,east:null,west:null,center:null},N={data:{},set:function(e,b,n){N.clear(e);N.data[e]=setTimeout(b,n)},clear:function(e){var b=N.data;b[e]&&(clearTimeout(b[e]),delete b[e])}},
Y=function(e,u,n){var a=t;(a.showErrorMessages&&!n||n&&a.showDebugMessages)&&b.layout.msg(a.name+" / "+e,!1!==u);return!1},E=function(e,u,n){var a=u&&g(u),f=a?q[u]:q,l=a?t[u]:t,i=t.name,d=e+(e.match(/_/)?"":"_end"),k=d.match(/_end$/)?d.substr(0,d.length-4):"",r=l[d]||l[k],c="NC",h=[];!a&&"boolean"===b.type(u)&&(n=u,u="");if(r)try{g(r)&&(r.match(/,/)?(h=r.split(","),r=eval(h[0])):r=eval(r)),b.isFunction(r)&&(c=h.length?r(h[1]):a?r(u,w[u],f,l,i):r(y,f,l,i))}catch(p){Y(t.errors.callbackError.replace(/EVENT/,
b.trim((u||"")+" "+d)),!1),"string"===b.type(p)&&string.length&&Y("Exception:  "+p,!1)}!n&&!1!==c&&(a?(n=w[u],l=t[u],f=q[u],n.triggerHandler("layoutpane"+d,[u,n,f,l,i]),k&&n.triggerHandler("layoutpane"+k,[u,n,f,l,i])):(m.triggerHandler("layout"+d,[y,f,l,i]),k&&m.triggerHandler("layout"+k,[y,f,l,i])));a&&"onresize_end"===e&&Za(u+"",!0);return c},$a=function(e){if(!F.mozilla){var b=w[e];"IFRAME"===q[e].tagName?b.css(p.hidden).css(p.visible):b.find("IFRAME").css(p.hidden).css(p.visible)}},ua=function(e){var b=
w[e],e=p[e].dir,b={minWidth:1001-A(b,1E3),minHeight:1001-x(b,1E3)};"horz"===e&&(b.minSize=b.minHeight);"vert"===e&&(b.minSize=b.minWidth);return b},ba=function(e,u,n){n||(n=p[e].dir);g(u)&&u.match(/%/)&&(u="100%"===u?-1:parseInt(u,10)/100);if(0===u)return 0;if(1<=u)return parseInt(u,10);var a=t,f=0;"horz"==n?f=v.innerHeight-(w.north?a.north.spacing_open:0)-(w.south?a.south.spacing_open:0):"vert"==n&&(f=v.innerWidth-(w.west?a.west.spacing_open:0)-(w.east?a.east.spacing_open:0));if(-1===u)return f;
if(0<u)return c(f*u);if("center"==e)return 0;var n="horz"===n?"height":"width",a=w[e],e="height"===n?Q[e]:!1,f=b.layout.showInvisibly(a),l=a.css(n),i=e?e.css(n):0;a.css(n,"auto");e&&e.css(n,"auto");u="height"===n?a.outerHeight():a.outerWidth();a.css(n,l).css(f);e&&e.css(n,i);return u},ca=function(e,b){var n=w[e],a=t[e],f=q[e],l=b?a.spacing_open:0,a=b?a.spacing_closed:0;return!n||f.isHidden?0:f.isClosed||f.isSliding&&b?a:"horz"===p[e].dir?n.outerHeight()+l:n.outerWidth()+l},U=function(e,b){if(I()){var n=
t[e],K=q[e],f=p[e],l=f.dir;f.sizeType.toLowerCase();var f=void 0!=b?b:K.isSliding,i=n.spacing_open,c=p.oppositeEdge[e],k=q[c],r=w[c],g=!r||!1===k.isVisible||k.isSliding?0:"horz"==l?r.outerHeight():r.outerWidth(),c=(!r||k.isHidden?0:t[c][!1!==k.isClosed?"spacing_closed":"spacing_open"])||0,k="horz"==l?v.innerHeight:v.innerWidth,r=ua("center"),r="horz"==l?d(t.center.minHeight,r.minHeight):d(t.center.minWidth,r.minWidth),f=k-i-(f?0:ba("center",r,l)+g+c),l=K.minSize=d(ba(e,n.minSize),ua(e).minSize),f=
K.maxSize=a(n.maxSize?ba(e,n.maxSize):1E5,f),K=K.resizerPosition={},i=v.inset.top,g=v.inset.left,c=v.innerWidth,k=v.innerHeight,n=n.spacing_open;switch(e){case "north":K.min=i+l;K.max=i+f;break;case "west":K.min=g+l;K.max=g+f;break;case "south":K.min=i+k-f-n;K.max=i+k-l-n;break;case "east":K.min=g+c-f-n,K.max=g+c-l-n}}},Ha=function(e,u){var n=b(e),a=n.data("layoutRole"),f=n.data("layoutEdge"),l=t[f][a+"Class"],f="-"+f,i=n.hasClass(l+"-closed")?"-closed":"-open",d="-closed"===i?"-open":"-closed",i=
l+"-hover "+(l+f+"-hover ")+(l+i+"-hover ")+(l+f+i+"-hover ");u&&(i+=l+d+"-hover "+(l+f+d+"-hover "));"resizer"==a&&n.hasClass(l+"-sliding")&&(i+=l+"-sliding-hover "+(l+f+"-sliding-hover "));return b.trim(i)},Ia=function(e,u){var n=b(u||this);e&&"toggler"===n.data("layoutRole")&&e.stopPropagation();n.addClass(Ha(n))},Z=function(e,u){var n=b(u||this);n.removeClass(Ha(n,!0))},ab=function(){var e=b(this).data("layoutEdge"),u=q[e];!u.isClosed&&(!u.isResizing&&!q.paneResizing)&&(b.fn.disableSelection&&
b("body").disableSelection(),t.maskPanesEarly&&qa(e,{resizing:!0}))},bb=function(e,u){var n=u||this,a=b(n).data("layoutEdge"),f=a+"ResizerLeave";N.clear(a+"_openSlider");N.clear(f);u?q.paneResizing||(b.fn.enableSelection&&b("body").enableSelection(),t.maskPanesEarly&&va()):N.set(f,function(){bb(e,n)},200)},I=function(){return q.initialized||q.creatingLayout?!0:wa()},wa=function(e){var a=t;if(!m.is(":visible"))return!e&&(F.webkit&&"BODY"===m[0].tagName)&&setTimeout(function(){wa(!0)},50),!1;if(!cb("center").length)return Y(a.errors.centerPaneMissing);
q.creatingLayout=!0;b.extend(v,D(m,a.inset));C(void 0);b.each(p.allPanes,function(e,b){db(b,!0)});Ja();b.each(p.borderPanes,function(e,b){w[b]&&q[b].isVisible&&(U(b),da(b))});ea("center");b.each(p.allPanes,function(e,b){eb(b)});a.scrollToBookmarkOnLoad&&(e=self.location,e.hash&&e.replace(e.hash));y.hasParentLayout?a.resizeWithWindow=!1:a.resizeWithWindow&&b(window).bind("resize."+L,vb);delete q.creatingLayout;q.initialized=!0;h(y,b.layout.onReady);E("onload_end");return!0},Ka=function(e,a){var n=
C.call(this,e),d=w[n];if(d){var f=Q[n],l=q[n],i=t[n],c=t.stateManagement||{},i=a?i.children=a:i.children;if(b.isPlainObject(i))i=[i];else if(!i||!b.isArray(i))return;b.each(i,function(e,a){b.isPlainObject(a)&&(a.containerSelector?d.find(a.containerSelector):f||d).each(function(){var e=b(this),u=e.data("layout");if(!u){fb({container:e,options:a},l);if(c.includeChildren&&q.stateData[n]){var u=(q.stateData[n].children||{})[a.instanceKey],f=a.stateManagement||(a.stateManagement={autoLoad:!0});!0===f.autoLoad&&
u&&(f.autoSave=!1,f.includeChildren=!0,f.autoLoad=b.extend(!0,{},u))}(u=e.layout(a))&&xa(n,u)}})})}},fb=function(e,b){var a=e.container,d=e.options,f=d.stateManagement,l=d.instanceKey||a.data("layoutInstanceKey");l||(l=(f&&f.cookie?f.cookie.name:"")||d.name);l=l?l.replace(/[^\w-]/gi,"_").replace(/_{2,}/g,"_"):"layout"+ ++b.childIdx;d.instanceKey=l;a.data("layoutInstanceKey",l);return l},xa=function(e,a){var n=w[e],d=X[e],f=q[e];b.isPlainObject(d)&&(b.each(d,function(e,b){b.destroyed&&delete d[e]}),
b.isEmptyObject(d)&&(d=X[e]=null));!a&&!d&&(a=n.data("layout"));a&&(a.hasParentLayout=!0,n=a.options,fb(a,f),d||(d=X[e]={}),d[n.instanceKey]=a.container.data("layout"));y[e].children=X[e];a||Ka(e)},vb=function(){var e=t,b=Number(e.resizeWithWindowDelay);10>b&&(b=100);N.clear("winResize");N.set("winResize",function(){N.clear("winResize");N.clear("winResizeRepeater");var b=D(m,e.inset);(b.innerWidth!==v.innerWidth||b.innerHeight!==v.innerHeight)&&ka()},b);N.data.winResizeRepeater||gb()},gb=function(){var e=
Number(t.resizeWithWindowMaxDelay);0<e&&N.set("winResizeRepeater",function(){gb();ka()},e)},hb=function(){E("onunload_start");h(y,b.layout.onUnload);E("onunload_end")},ib=function(e){e=e?e.split(","):p.borderPanes;b.each(e,function(e,a){var d=t[a];if(d.enableCursorHotkey||d.customHotkey)return b(document).bind("keydown."+L,B),!1})},cb=function(e){e=t[e].paneSelector;if("#"===e.substr(0,1))return m.find(e).eq(0);var b=m.children(e).eq(0);return b.length?b:m.children("form:first").children(e).eq(0)},
db=function(e,b){if(b||I()){var n=t[e],c=q[e],f=p[e],l=f.dir,i="center"===e,g={},k=w[e],r,h;k?La(e,!1,!0,!1):Q[e]=!1;k=w[e]=cb(e);if(k.length){k.data("layoutCSS")||k.data("layoutCSS",z(k,"position,top,left,bottom,right,width,height,overflow,zIndex,display,backgroundColor,padding,margin,border"));y[e]={name:e,pane:w[e],content:Q[e],options:t[e],state:q[e],children:X[e]};k.data({parentLayout:y,layoutPane:y[e],layoutEdge:e,layoutRole:"pane"}).css(f.cssReq).css("zIndex",t.zIndexes.pane_normal).css(n.applyDemoStyles?
f.cssDemo:{}).addClass(n.paneClass+" "+n.paneClass+"-"+e).bind("mouseenter."+L,Ia).bind("mouseleave."+L,Z);f={hide:"",show:"",toggle:"",close:"",open:"",slideOpen:"",slideClose:"",slideToggle:"",size:"sizePane",sizePane:"sizePane",sizeContent:"",sizeHandles:"",enableClosable:"",disableClosable:"",enableSlideable:"",disableSlideable:"",enableResizable:"",disableResizable:"",swapPanes:"swapPanes",swap:"swapPanes",move:"swapPanes",removePane:"removePane",remove:"removePane",createChildren:"",resizeChildren:"",
resizeAll:"resizeAll",resizeLayout:"resizeAll"};for(h in f)k.bind("layoutpane"+h.toLowerCase()+"."+L,y[f[h]||h]);Ma(e,!1);i||(r=c.size=ba(e,n.size),i=ba(e,n.minSize)||1,h=ba(e,n.maxSize)||1E5,0<r&&(r=d(a(r,h),i)),c.autoResize=n.autoResize,c.isClosed=!1,c.isSliding=!1,c.isResizing=!1,c.isHidden=!1,c.pins||(c.pins=[]));c.tagName=k[0].tagName;c.edge=e;c.noRoom=!1;c.isVisible=!0;jb(e);"horz"===l?g.height=x(k,r):"vert"===l&&(g.width=A(k,r));k.css(g);"horz"!=l&&ea(e,!0);q.initialized&&(Ja(e),ib(e));n.initClosed&&
n.closable&&!n.initHidden?fa(e,!0,!0):n.initHidden||n.initClosed?Na(e):c.noRoom||k.css("display","block");k.css("visibility","visible");n.showOverflowOnHover&&k.hover(J,G);q.initialized&&eb(e)}else w[e]=!1}},eb=function(e){var b=w[e],a=q[e],d=t[e];b&&(b.data("layout")&&xa(e,b.data("layout")),a.isVisible&&(q.initialized?ka():la(e),d.triggerEventsOnLoad?E("onresize_end",e):Za(e,!0)),d.initChildren&&d.children&&Ka(e))},jb=function(e){e=e?e.split(","):p.borderPanes;b.each(e,function(e,b){var a=w[b],f=
H[b],d=q[b],i=p[b].side,c={};if(a){switch(b){case "north":c.top=v.inset.top;c.left=v.inset.left;c.right=v.inset.right;break;case "south":c.bottom=v.inset.bottom;c.left=v.inset.left;c.right=v.inset.right;break;case "west":c.left=v.inset.left;break;case "east":c.right=v.inset.right}a.css(c);f&&d.isClosed?f.css(i,v.inset[i]):f&&!d.isHidden&&f.css(i,v.inset[i]+ca(b))}})},Ja=function(e){e=e?e.split(","):p.borderPanes;b.each(e,function(e,a){var d=w[a];H[a]=!1;P[a]=!1;if(d){var f=t[a],d=q[a],l="#"===f.paneSelector.substr(0,
1)?f.paneSelector.substr(1):"",c=f.resizerClass,g=f.togglerClass,k="-"+a,r=y[a],h=r.resizer=H[a]=b("<div></div>"),r=r.toggler=f.closable?P[a]=b("<div></div>"):!1;!d.isVisible&&f.slidable&&h.attr("title",f.tips.Slide).css("cursor",f.sliderCursor);h.attr("id",l?l+"-resizer":"").data({parentLayout:y,layoutPane:y[a],layoutEdge:a,layoutRole:"resizer"}).css(p.resizers.cssReq).css("zIndex",t.zIndexes.resizer_normal).css(f.applyDemoStyles?p.resizers.cssDemo:{}).addClass(c+" "+c+k).hover(Ia,Z).hover(ab,bb).appendTo(m);
f.resizerDblClickToggle&&h.bind("dblclick."+L,ja);r&&(r.attr("id",l?l+"-toggler":"").data({parentLayout:y,layoutPane:y[a],layoutEdge:a,layoutRole:"toggler"}).css(p.togglers.cssReq).css(f.applyDemoStyles?p.togglers.cssDemo:{}).addClass(g+" "+g+k).hover(Ia,Z).bind("mouseenter",ab).appendTo(h),f.togglerContent_open&&b("<span>"+f.togglerContent_open+"</span>").data({layoutEdge:a,layoutRole:"togglerContent"}).data("layoutRole","togglerContent").data("layoutEdge",a).addClass("content content-open").css("display",
"none").appendTo(r),f.togglerContent_closed&&b("<span>"+f.togglerContent_closed+"</span>").data({layoutEdge:a,layoutRole:"togglerContent"}).addClass("content content-closed").css("display","none").appendTo(r),kb(a));var f=a,j=b.layout.plugins.draggable,f=f?f.split(","):p.borderPanes;b.each(f,function(e,a){var f=t[a];if(!j||!w[a]||!f.resizable)return f.resizable=!1,!0;var u=q[a],n=t.zIndexes,d=p[a],l="horz"==d.dir?"top":"left",c=H[a],i=f.resizerClass,g=0,k,r,h=i+"-drag",K=i+"-"+a+"-drag",ub=i+"-dragging",
ta=i+"-"+a+"-dragging",v=i+"-dragging-limit",x=i+"-"+a+"-dragging-limit",A=!1;u.isClosed||c.attr("title",f.tips.Resize).css("cursor",f.resizerCursor);c.draggable({containment:m[0],axis:"horz"==d.dir?"y":"x",delay:0,distance:1,grid:f.resizingGrid,helper:"clone",opacity:f.resizerDragOpacity,addClasses:!1,zIndex:n.resizer_drag,start:function(e,n){f=t[a];u=q[a];r=f.livePaneResizing;if(!1===E("ondrag_start",a))return!1;u.isResizing=!0;q.paneResizing=a;N.clear(a+"_closeSlider");U(a);k=u.resizerPosition;
g=n.position[l];c.addClass(h+" "+K);A=!1;b("body").disableSelection();qa(a,{resizing:!0})},drag:function(e,b){A||(b.helper.addClass(ub+" "+ta).css({right:"auto",bottom:"auto"}).children().css("visibility","hidden"),A=!0,u.isSliding&&w[a].css("zIndex",n.pane_sliding));var d=0;b.position[l]<k.min?(b.position[l]=k.min,d=-1):b.position[l]>k.max&&(b.position[l]=k.max,d=1);d?(b.helper.addClass(v+" "+x),window.defaultStatus=0<d&&a.match(/(north|west)/)||0>d&&a.match(/(south|east)/)?f.tips.maxSizeWarning:
f.tips.minSizeWarning):(b.helper.removeClass(v+" "+x),window.defaultStatus="");r&&Math.abs(b.position[l]-g)>=f.liveResizingTolerance&&(g=b.position[l],aa(e,b,a))},stop:function(e,f){b("body").enableSelection();window.defaultStatus="";c.removeClass(h+" "+K);u.isResizing=!1;q.paneResizing=!1;aa(e,f,a,!0)}})});var aa=function(b,e,a,f){var u=e.position,n=p[a],b=t[a],e=q[a],d;switch(a){case "north":d=u.top;break;case "west":d=u.left;break;case "south":d=v.layoutHeight-u.top-b.spacing_open;break;case "east":d=
v.layoutWidth-u.left-b.spacing_open}d-=v.inset[n.side];f?(!1!==E("ondrag_end",a)&&ya(a,d,!1,!0),va(!0),e.isSliding&&qa(a,{resizing:!0})):Math.abs(d-e.size)<b.liveResizingTolerance||(ya(a,d,!1,!0),$.each(lb))};d.isVisible?Oa(a):(Pa(a),ia(a,!0))}});ma()},Ma=function(b,a){if(I()){var n=t[b],d=n.contentSelector,f=y[b],l=w[b],c;d&&(c=f.content=Q[b]=n.findNestedContent?l.find(d).eq(0):l.children(d).eq(0));c&&c.length?(c.data("layoutRole","content"),c.data("layoutCSS")||c.data("layoutCSS",z(c,"height")),
c.css(p.content.cssReq),n.applyDemoStyles&&(c.css(p.content.cssDemo),l.css(p.content.cssDemoPane)),l.css("overflowX").match(/(scroll|auto)/)&&l.css("overflow","hidden"),q[b].content={},!1!==a&&la(b)):f.content=Q[b]=!1}},lb=function(){var e=b(this),a=e.data("layoutMask"),a=q[a];"IFRAME"==a.tagName&&a.isVisible&&e.css({top:a.offsetTop,left:a.offsetLeft,width:a.outerWidth,height:a.outerHeight})},qa=function(e,a){var n=p[e],d=["center"],f=t.zIndexes,c=b.extend({objectsOnly:!1,animation:!1,resizing:!0,
sliding:q[e].isSliding},a),i,g;c.resizing&&d.push(e);c.sliding&&d.push(p.oppositeEdge[e]);"horz"===n.dir&&(d.push("west"),d.push("east"));b.each(d,function(e,a){g=q[a];i=t[a];if(g.isVisible&&(i.maskObjects||!c.objectsOnly&&i.maskContents)){for(var n=b([]),u,d=0,h=$.length;d<h;d++)u=$.eq(d),u.data("layoutMask")===a&&(n=n.add(u));if(!n.length){n=w[a];u=q[a];var d=t[a],h=t.zIndexes,K=b([]),p,j,v,x,A;if(d.maskContents||d.maskObjects)for(A=0;A<(d.maskObjects?2:1);A++)p=d.maskObjects&&0==A,j=document.createElement(p?
"iframe":"div"),v=b(j).data("layoutMask",a),j.className="ui-layout-mask ui-layout-mask-"+a,x=j.style,x.display="block",x.position="absolute",x.background="#FFF",p&&(j.frameborder=0,j.src="about:blank",x.opacity=0,x.filter="Alpha(Opacity='0')",x.border=0),"IFRAME"==u.tagName?(x.zIndex=h.pane_normal+1,m.append(j)):(v.addClass("ui-layout-mask-inside-pane"),x.zIndex=d.maskZindex||h.content_mask,x.top=0,x.left=0,x.width="100%",x.height="100%",n.append(j)),K=K.add(j),$=$.add(j);n=K}n.each(function(){lb.call(this);
this.style.zIndex=g.isSliding?f.pane_sliding+1:f.pane_normal+1;this.style.display="block"})}})},va=function(e){if(e||!q.paneResizing)$.hide();else if(!e&&!b.isEmptyObject(q.panesSliding))for(var e=$.length-1,a,n;0<=e;e--)n=$.eq(e),a=n.data("layoutMask"),t[a].maskObjects||n.hide()},La=function(e,a,n,d){if(I()){var e=C.call(this,e),f=w[e],c=Q[e],i=H[e],g=P[e];f&&b.isEmptyObject(f.data())&&(f=!1);c&&b.isEmptyObject(c.data())&&(c=!1);i&&b.isEmptyObject(i.data())&&(i=!1);g&&b.isEmptyObject(g.data())&&
(g=!1);f&&f.stop(!0,!0);var k=t[e],r=X[e],h=b.isPlainObject(r)&&!b.isEmptyObject(r),d=void 0!==d?d:k.destroyChildren;h&&d&&(b.each(r,function(b,e){e.destroyed||e.destroy(!0);e.destroyed&&delete r[b]}),b.isEmptyObject(r)&&(r=X[e]=null,h=!1));f&&a&&!h?f.remove():f&&f[0]&&(a=k.paneClass,d=a+"-"+e,a=[a,a+"-open",a+"-closed",a+"-sliding",d,d+"-open",d+"-closed",d+"-sliding"],b.merge(a,Ha(f,!0)),f.removeClass(a.join(" ")).removeData("parentLayout").removeData("layoutPane").removeData("layoutRole").removeData("layoutEdge").removeData("autoHidden").unbind("."+
L),h&&c?(c.width(c.width()),b.each(r,function(b,e){e.resizeAll()})):c&&c.css(c.data("layoutCSS")).removeData("layoutCSS").removeData("layoutRole"),f.data("layout")||f.css(f.data("layoutCSS")).removeData("layoutCSS"));g&&g.remove();i&&i.remove();y[e]=w[e]=Q[e]=H[e]=P[e]=!1;n||ka()}},za=function(b){var a=w[b],d=a[0].style;t[b].useOffscreenClose?(a.data(p.offscreenReset)||a.data(p.offscreenReset,{left:d.left,right:d.right}),a.css(p.offscreenCSS)):a.hide().removeData(p.offscreenReset)},mb=function(b){var a=
w[b],b=t[b],d=p.offscreenCSS,c=a.data(p.offscreenReset),f=a[0].style;a.show().removeData(p.offscreenReset);b.useOffscreenClose&&c&&(f.left==d.left&&(f.left=c.left),f.right==d.right&&(f.right=c.right))},Na=function(b,a){if(I()){var d=C.call(this,b),c=t[d],f=q[d],l=H[d];w[d]&&!f.isHidden&&!(q.initialized&&!1===E("onhide_start",d))&&(f.isSliding=!1,delete q.panesSliding[d],l&&l.hide(),!q.initialized||f.isClosed?(f.isClosed=!0,f.isHidden=!0,f.isVisible=!1,q.initialized||za(d),ea("horz"===p[d].dir?"":
"center"),(q.initialized||c.triggerEventsOnLoad)&&E("onhide_end",d)):(f.isHiding=!0,fa(d,!1,a)))}},Aa=function(b,a,d,c){if(I()){var b=C.call(this,b),f=q[b];w[b]&&f.isHidden&&!1!==E("onshow_start",b)&&(f.isShowing=!0,f.isSliding=!1,delete q.panesSliding[b],!1===a?fa(b,!0):na(b,!1,d,c))}},ja=function(b,a){if(I()){var d=T(b),c=C.call(this,b),f=q[c];d&&d.stopImmediatePropagation();f.isHidden?Aa(c):f.isClosed?na(c,!!a):fa(c)}},fa=function(b,a,d,c){function f(){k.isMoving=!1;ia(l,!0);var b=p.oppositeEdge[l];
q[b].noRoom&&(U(b),da(b));if(!c&&(q.initialized||g.triggerEventsOnLoad))h||E("onclose_end",l),h&&E("onshow_end",l),j&&E("onhide_end",l)}var l=C.call(this,b);if(!q.initialized&&w[l])b=q[l],za(l),b.isClosed=!0,b.isVisible=!1;else if(I()){var i=w[l],g=t[l],k=q[l],r,h,j;m.queue(function(b){if(!i||!g.closable&&!k.isShowing&&!k.isHiding||!a&&k.isClosed&&!k.isShowing)return b();var e=!k.isShowing&&!1===E("onclose_start",l);h=k.isShowing;j=k.isHiding;delete k.isShowing;delete k.isHiding;if(e)return b();r=
!d&&!k.isClosed&&"none"!=g.fxName_close;k.isMoving=!0;k.isClosed=!0;k.isVisible=!1;j?k.isHidden=!0:h&&(k.isHidden=!1);k.isSliding?ra(l,!1):ea("horz"===p[l].dir?"":"center",!1);Pa(l);r?(Ba(l,!0),i.hide(g.fxName_close,g.fxSettings_close,g.fxSpeed_close,function(){Ba(l,!1);k.isClosed&&f();b()})):(za(l),f(),b())})}},Pa=function(a){var d=H[a],c=P[a],g=t[a],f=p[a].side,l=g.resizerClass,i=g.togglerClass,h="-"+a;d.css(f,v.inset[f]).removeClass(l+"-open "+l+h+"-open").removeClass(l+"-sliding "+l+h+"-sliding").addClass(l+
"-closed "+l+h+"-closed");g.resizable&&b.layout.plugins.draggable&&d.draggable("disable").removeClass("ui-state-disabled").css("cursor","default").attr("title","");c&&(c.removeClass(i+"-open "+i+h+"-open").addClass(i+"-closed "+i+h+"-closed").attr("title",g.tips.Open),c.children(".content-open").hide(),c.children(".content-closed").css("display","block"));Qa(a,!1);q.initialized&&ma()},na=function(b,a,d,c){function f(){k.isMoving=!1;$a(l);k.isSliding||ea("vert"==p[l].dir?"center":"",!1);Oa(l)}if(I()){var l=
C.call(this,b),g=w[l],h=t[l],k=q[l],r,j;m.queue(function(b){if(!g||!h.resizable&&!h.closable&&!k.isShowing||k.isVisible&&!k.isSliding)return b();if(k.isHidden&&!k.isShowing)b(),Aa(l,!0);else{k.autoResize&&k.size!=h.size?ga(l,h.size,!0,!0,!0):U(l,a);var e=E("onopen_start",l);if("abort"===e)return b();"NC"!==e&&U(l,a);if(k.minSize>k.maxSize)return Qa(l,!1),!c&&h.tips.noRoomToOpen&&alert(h.tips.noRoomToOpen),b();a?ra(l,!0):k.isSliding?ra(l,!1):h.slidable&&ia(l,!1);k.noRoom=!1;da(l);j=k.isShowing;delete k.isShowing;
r=!d&&k.isClosed&&"none"!=h.fxName_open;k.isMoving=!0;k.isVisible=!0;k.isClosed=!1;j&&(k.isHidden=!1);r?(Ba(l,!0),g.show(h.fxName_open,h.fxSettings_open,h.fxSpeed_open,function(){Ba(l,!1);k.isVisible&&f();b()})):(mb(l),f(),b())}})}},Oa=function(a,d){var c=w[a],g=H[a],f=P[a],l=t[a],i=q[a],h=p[a].side,k=l.resizerClass,r=l.togglerClass,j="-"+a;g.css(h,v.inset[h]+ca(a)).removeClass(k+"-closed "+k+j+"-closed").addClass(k+"-open "+k+j+"-open");i.isSliding?g.addClass(k+"-sliding "+k+j+"-sliding"):g.removeClass(k+
"-sliding "+k+j+"-sliding");Z(0,g);l.resizable&&b.layout.plugins.draggable?g.draggable("enable").css("cursor",l.resizerCursor).attr("title",l.tips.Resize):i.isSliding||g.css("cursor","default");f&&(f.removeClass(r+"-closed "+r+j+"-closed").addClass(r+"-open "+r+j+"-open").attr("title",l.tips.Close),Z(0,f),f.children(".content-closed").hide(),f.children(".content-open").css("display","block"));Qa(a,!i.isSliding);b.extend(i,D(c));q.initialized&&(ma(),la(a,!0));if(!d&&(q.initialized||l.triggerEventsOnLoad)&&
c.is(":visible"))E("onopen_end",a),i.isShowing&&E("onshow_end",a),q.initialized&&E("onresize_end",a)},nb=function(b){function a(){f.isClosed?f.isMoving||na(c,!0):ra(c,!0)}if(I()){var d=T(b),c=C.call(this,b),f=q[c],b=t[c].slideDelay_open;d&&d.stopImmediatePropagation();f.isClosed&&d&&"mouseenter"===d.type&&0<b?N.set(c+"_openSlider",a,b):a()}},Ra=function(a){function c(){f.isClosed?ra(g,!1):f.isMoving||fa(g)}if(I()){var n=T(a),g=C.call(this,a),a=t[g],f=q[g],l=f.isMoving?1E3:300;!f.isClosed&&!f.isResizing&&
("click"===a.slideTrigger_close?c():a.preventQuickSlideClose&&f.isMoving||a.preventPrematureSlideClose&&n&&b.layout.isMouseOverElem(n,w[g])||(n?N.set(g+"_closeSlider",c,d(a.slideDelay_close,l)):c()))}},Ba=function(b,a){var d=w[b],c=q[b],f=t[b],g=t.zIndexes;a?(qa(b,{animation:!0,objectsOnly:!0}),d.css({zIndex:g.pane_animate}),"south"==b?d.css({top:v.inset.top+v.innerHeight-d.outerHeight()}):"east"==b&&d.css({left:v.inset.left+v.innerWidth-d.outerWidth()})):(va(),d.css({zIndex:c.isSliding?g.pane_sliding:
g.pane_normal}),"south"==b?d.css({top:"auto"}):"east"==b&&!d.css("left").match(/\-99999/)&&d.css({left:"auto"}),F.msie&&(f.fxOpacityFix&&"slide"!=f.fxName_open&&d.css("filter")&&1==d.css("opacity"))&&d[0].style.removeAttribute("filter"))},ia=function(b,a){var d=t[b],c=H[b],f=d.slideTrigger_open.toLowerCase();if(c&&(!a||d.slidable)){f.match(/mouseover/)?f=d.slideTrigger_open="mouseenter":f.match(/(click|dblclick|mouseenter)/)||(f=d.slideTrigger_open="click");if(d.resizerDblClickToggle&&f.match(/click/))c[a?
"unbind":"bind"]("dblclick."+L,ja);c[a?"bind":"unbind"](f+"."+L,nb).css("cursor",a?d.sliderCursor:"default").attr("title",a?d.tips.Slide:"")}},ra=function(b,a){function d(a){N.clear(b+"_closeSlider");a.stopPropagation()}var c=t[b],f=q[b],g=t.zIndexes,i=c.slideTrigger_close.toLowerCase(),h=a?"bind":"unbind",k=w[b],r=H[b];N.clear(b+"_closeSlider");a?(f.isSliding=!0,q.panesSliding[b]=!0,ia(b,!1)):(f.isSliding=!1,delete q.panesSliding[b]);k.css("zIndex",a?g.pane_sliding:g.pane_normal);r.css("zIndex",
a?g.pane_sliding+2:g.resizer_normal);i.match(/(click|mouseleave)/)||(i=c.slideTrigger_close="mouseleave");r[h](i,Ra);"mouseleave"===i&&(k[h]("mouseleave."+L,Ra),r[h]("mouseenter."+L,d),k[h]("mouseenter."+L,d));a?"click"===i&&!c.resizable&&(r.css("cursor",a?c.sliderCursor:"default"),r.attr("title",a?c.tips.Close:"")):N.clear(b+"_closeSlider")},da=function(a,d,c,g){var d=t[a],f=q[a],l=p[a],i=w[a],h=H[a],k="vert"===l.dir,r=!1;if("center"===a||k&&f.noVerticalRoom)(r=0<=f.maxHeight)&&f.noRoom?(mb(a),h&&
h.show(),f.isVisible=!0,f.noRoom=!1,k&&(f.noVerticalRoom=!1),$a(a)):!r&&!f.noRoom&&(za(a),h&&h.hide(),f.isVisible=!1,f.noRoom=!0);"center"!==a&&(f.minSize<=f.maxSize?(f.size>f.maxSize?ga(a,f.maxSize,c,!0,g):f.size<f.minSize?ga(a,f.minSize,c,!0,g):h&&(f.isVisible&&i.is(":visible"))&&(c=f.size+v.inset[l.side],b.layout.cssNum(h,l.side)!=c&&h.css(l.side,c)),f.noRoom&&(f.wasOpen&&d.closable?d.autoReopen?na(a,!1,!0,!0):f.noRoom=!1:Aa(a,f.wasOpen,!0,!0))):f.noRoom||(f.noRoom=!0,f.wasOpen=!f.isClosed&&!f.isSliding,
f.isClosed||(d.closable?fa(a,!0,!0):Na(a,!0))))},ya=function(b,a,d,c,f){if(I()){var b=C.call(this,b),g=t[b],h=q[b],f=f||g.livePaneResizing&&!h.isResizing;h.autoResize=!1;ga(b,a,d,c,f)}},ga=function(e,c,g,h,f){function l(){for(var a="width"===aa?r.outerWidth():r.outerHeight(),a=[{pane:i,count:1,target:c,actual:a,correct:c===a,attempt:c,cssSize:z}],e=a[0],h={},l="Inaccurate size after resizing the "+i+"-pane.";!e.correct;){h={pane:i,count:e.count+1,target:c};h.attempt=e.actual>c?d(0,e.attempt-(e.actual-
c)):d(0,e.attempt+(c-e.actual));h.cssSize=("horz"==p[i].dir?x:A)(w[i],h.attempt);r.css(aa,h.cssSize);h.actual="width"==aa?r.outerWidth():r.outerHeight();h.correct=c===h.actual;1===a.length&&(Y(l,!1,!0),Y(e,!1,!0));Y(h,!1,!0);if(3<a.length)break;a.push(h);e=a[a.length-1]}k.size=c;b.extend(k,D(r));k.isVisible&&r.is(":visible")&&(ta&&ta.css(Ya,c+v.inset[Ya]),la(i));!g&&(!B&&q.initialized&&k.isVisible)&&E("onresize_end",i);g||(k.isSliding||ea("horz"==p[i].dir?"":"center",B,f),ma());e=p.oppositeEdge[i];
c<F&&q[e].noRoom&&(U(e),da(e,!1,g));1<a.length&&Y(l+"\nSee the Error Console for details.",!0,!0)}if(I()){var i=C.call(this,e),j=t[i],k=q[i],r=w[i],ta=H[i],Ya=p[i].side,aa=p[i].sizeType.toLowerCase(),B=k.isResizing&&!j.triggerEventsDuringLiveResize,y=!0!==h&&j.animatePaneSizing,F,z;m.queue(function(e){U(i);F=k.size;c=ba(i,c);c=d(c,ba(i,j.minSize));c=a(c,k.maxSize);if(c<k.minSize)e(),da(i,!1,g);else{if(!f&&c===F)return e();k.newSize=c;!g&&(q.initialized&&k.isVisible)&&E("onresize_start",i);z=("horz"==
p[i].dir?x:A)(w[i],c);if(y&&r.is(":visible")){var h=b.layout.effects.size[i]||b.layout.effects.size.all,h=j.fxSettings_size.easing||h.easing,v=t.zIndexes,m={};m[aa]=z+"px";k.isMoving=!0;r.css({zIndex:v.pane_animate}).show().animate(m,j.fxSpeed_size,h,function(){r.css({zIndex:k.isSliding?v.pane_sliding:v.pane_normal});k.isMoving=!1;delete k.newSize;l();e()})}else r.css(aa,z),delete k.newSize,r.is(":visible")?l():(k.size=c,b.extend(k,D(r))),e()}})}},ea=function(a,c,g){a=(a?a:"east,west,center").split(",");
b.each(a,function(a,e){if(w[e]){var h=t[e],i=q[e],j=w[e],k=!0,r={},p=b.layout.showInvisibly(j),m={top:ca("north",!0),bottom:ca("south",!0),left:ca("west",!0),right:ca("east",!0),width:0,height:0};m.width=v.innerWidth-m.left-m.right;m.height=v.innerHeight-m.bottom-m.top;m.top+=v.inset.top;m.bottom+=v.inset.bottom;m.left+=v.inset.left;m.right+=v.inset.right;b.extend(i,D(j));if("center"===e){if(!g&&i.isVisible&&m.width===i.outerWidth&&m.height===i.outerHeight)return j.css(p),!0;b.extend(i,ua(e),{maxWidth:m.width,
maxHeight:m.height});r=m;i.newWidth=r.width;i.newHeight=r.height;r.width=A(j,r.width);r.height=x(j,r.height);k=0<=r.width&&0<=r.height;if(!q.initialized&&h.minWidth>m.width){var h=h.minWidth-i.outerWidth,m=t.east.minSize||0,B=t.west.minSize||0,y=q.east.size,z=q.west.size,C=y,G=z;0<h&&(q.east.isVisible&&y>m)&&(C=d(y-m,y-h),h-=y-C);0<h&&(q.west.isVisible&&z>B)&&(G=d(z-B,z-h),h-=z-G);if(0===h){y&&y!=m&&ga("east",C,!0,!0,g);z&&z!=B&&ga("west",G,!0,!0,g);ea("center",c,g);j.css(p);return}}}else{i.isVisible&&
!i.noVerticalRoom&&b.extend(i,D(j),ua(e));if(!g&&!i.noVerticalRoom&&m.height===i.outerHeight)return j.css(p),!0;r.top=m.top;r.bottom=m.bottom;i.newSize=m.height;r.height=x(j,m.height);i.maxHeight=r.height;k=0<=i.maxHeight;k||(i.noVerticalRoom=!0)}k?(!c&&q.initialized&&E("onresize_start",e),j.css(r),"center"!==e&&ma(e),i.noRoom&&(!i.isClosed&&!i.isHidden)&&da(e),i.isVisible&&(b.extend(i,D(j)),q.initialized&&la(e))):!i.noRoom&&i.isVisible&&da(e);j.css(p);delete i.newSize;delete i.newWidth;delete i.newHeight;
if(!i.isVisible)return!0;"center"===e&&(i=F.isIE6||!F.boxModel,w.north&&(i||"IFRAME"==q.north.tagName)&&w.north.css("width",A(w.north,v.innerWidth)),w.south&&(i||"IFRAME"==q.south.tagName)&&w.south.css("width",A(w.south,v.innerWidth)));!c&&q.initialized&&E("onresize_end",e)}})},ka=function(a){C(a);if(m.is(":visible"))if(q.initialized){if(!0===a&&b.isPlainObject(t.outset)&&m.css(t.outset),b.extend(v,D(m,t.inset)),v.outerHeight){!0===a&&jb();if(!1===E("onresizeall_start"))return!1;var d,c,g;b.each(["south",
"north","east","west"],function(b,a){w[a]&&(c=t[a],g=q[a],g.autoResize&&g.size!=c.size?ga(a,c.size,!0,!0,!0):(U(a),da(a,!1,!0,!0)))});ea("",!0,!0);ma();b.each(p.allPanes,function(a,b){(d=w[b])&&q[b].isVisible&&E("onresize_end",b)});E("onresizeall_end")}}else wa()},Za=function(a,d){var c=C.call(this,a);t[c].resizeChildren&&(d||xa(c),c=X[c],b.isPlainObject(c)&&b.each(c,function(b,a){a.resizeAll()}))},la=function(a,c){if(I()){var h=C.call(this,a),h=h?h.split(","):p.allPanes;b.each(h,function(a,e){function h(a){return d(j.css.paddingBottom,
parseInt(a.css("marginBottom"),10)||0)}function i(){var a=t[e].contentIgnoreSelector,a=k.nextAll().not(".ui-layout-mask").not(a||":lt(0)"),b=a.filter(":visible"),d=b.filter(":last");m={top:k[0].offsetTop,height:k.outerHeight(),numFooters:a.length,hiddenFooters:a.length-b.length,spaceBelow:0};m.spaceAbove=m.top;m.bottom=m.top+m.height;m.spaceBelow=d.length?d[0].offsetTop+d.outerHeight()-m.bottom+h(d):h(k)}var n=w[e],k=Q[e],r=t[e],j=q[e],m=j.content;if(!n||!k||!n.is(":visible"))return!0;if(!k.length&&
(Ma(e,!1),!k))return;if(!1!==E("onsizecontent_start",e)){if(!j.isMoving&&!j.isResizing||r.liveContentResizing||c||void 0==m.top)i(),0<m.hiddenFooters&&"hidden"===n.css("overflow")&&(n.css("overflow","visible"),i(),n.css("overflow","hidden"));n=j.innerHeight-(m.spaceAbove-j.css.paddingTop)-(m.spaceBelow-j.css.paddingBottom);if(!k.is(":visible")||m.height!=n){var v=k,r=v;g(v)?r=w[v]:v.jquery||(r=b(v));v=x(r,n);r.css({height:v,visibility:"visible"});0<v&&0<r.innerWidth()?r.data("autoHidden")&&(r.show().data("autoHidden",
!1),F.mozilla||r.css(p.hidden).css(p.visible)):r.data("autoHidden")||r.hide().data("autoHidden",!0);m.height=n}q.initialized&&E("onsizecontent_end",e)}})}},ma=function(a){a=(a=C.call(this,a))?a.split(","):p.borderPanes;b.each(a,function(a,e){var d=t[e],f=q[e],h=w[e],i=H[e],j=P[e],k;if(h&&i){var r=p[e].dir,m=f.isClosed?"_closed":"_open",B=d["spacing"+m],y=d["togglerAlign"+m],m=d["togglerLength"+m],z;if(0===B)i.hide();else{!f.noRoom&&!f.isHidden&&i.show();"horz"===r?(z=v.innerWidth,f.resizerLength=
z,h=b.layout.cssNum(h,"left"),i.css({width:A(i,z),height:x(i,B),left:-9999<h?h:v.inset.left})):(z=h.outerHeight(),f.resizerLength=z,i.css({height:x(i,z),width:A(i,B),top:v.inset.top+ca("north",!0)}));Z(d,i);if(j){if(0===m||f.isSliding&&d.hideTogglerOnSlide){j.hide();return}j.show();if(!(0<m)||"100%"===m||m>z)m=z,y=0;else if(g(y))switch(y){case "top":case "left":y=0;break;case "bottom":case "right":y=z-m;break;default:y=c((z-m)/2)}else h=parseInt(y,10),y=0<=y?h:z-m+h;if("horz"===r){var D=A(j,m);j.css({width:D,
height:x(j,B),left:y,top:0});j.children(".content").each(function(){k=b(this);k.css("marginLeft",c((D-k.outerWidth())/2))})}else{var C=x(j,m);j.css({height:C,width:A(j,B),top:y,left:0});j.children(".content").each(function(){k=b(this);k.css("marginTop",c((C-k.outerHeight())/2))})}Z(0,j)}if(!q.initialized&&(d.initHidden||f.noRoom))i.hide(),j&&j.hide()}}})},kb=function(a){if(I()){var b=C.call(this,a),a=P[b],d=t[b];a&&(d.closable=!0,a.bind("click."+L,function(a){a.stopPropagation();ja(b)}).css("visibility",
"visible").css("cursor","pointer").attr("title",q[b].isClosed?d.tips.Open:d.tips.Close).show())}},Qa=function(a,d){b.layout.plugins.buttons&&b.each(q[a].pins,function(c,g){b.layout.buttons.setPinState(y,b(g),a,d)})},m=b(this).eq(0);if(!m.length)return Y(t.errors.containerMissing);if(m.data("layoutContainer")&&m.data("layout"))return m.data("layout");var w={},Q={},H={},P={},$=b([]),v=q.container,L=q.id,y={options:t,state:q,container:m,panes:w,contents:Q,resizers:H,togglers:P,hide:Na,show:Aa,toggle:ja,
open:na,close:fa,slideOpen:nb,slideClose:Ra,slideToggle:function(a){a=C.call(this,a);ja(a,!0)},setSizeLimits:U,_sizePane:ga,sizePane:ya,sizeContent:la,swapPanes:function(a,c){function g(a){var d=w[a],c=Q[a];return!d?!1:{pane:a,P:d?d[0]:!1,C:c?c[0]:!1,state:b.extend(!0,{},q[a]),options:b.extend(!0,{},t[a])}}function h(a,c){if(a){var e=a.P,f=a.C,g=a.pane,i=p[c],j=b.extend(!0,{},q[c]),n=t[c],l={resizerCursor:n.resizerCursor};b.each(["fxName","fxSpeed","fxSettings"],function(a,b){l[b+"_open"]=n[b+"_open"];
l[b+"_close"]=n[b+"_close"];l[b+"_size"]=n[b+"_size"]});w[c]=b(e).data({layoutPane:y[c],layoutEdge:c}).css(p.hidden).css(i.cssReq);Q[c]=f?b(f):!1;t[c]=b.extend(!0,{},a.options,l);q[c]=b.extend(!0,{},a.state);e.className=e.className.replace(RegExp(n.paneClass+"-"+g,"g"),n.paneClass+"-"+c);Ja(c);i.dir!=p[g].dir?(e=m[c]||0,U(c),e=d(e,q[c].minSize),ya(c,e,!0,!0)):H[c].css(i.side,v.inset[i.side]+(q[c].isVisible?ca(c):0));a.state.isVisible&&!j.isVisible?Oa(c,!0):(Pa(c),ia(c,!0));a=null}}if(I()){var f=C.call(this,
a);q[f].edge=c;q[c].edge=f;if(!1===E("onswap_start",f)||!1===E("onswap_start",c))q[f].edge=f,q[c].edge=c;else{var j=g(f),i=g(c),m={};m[f]=j?j.state.size:0;m[c]=i?i.state.size:0;w[f]=!1;w[c]=!1;q[f]={};q[c]={};P[f]&&P[f].remove();P[c]&&P[c].remove();H[f]&&H[f].remove();H[c]&&H[c].remove();H[f]=H[c]=P[f]=P[c]=!1;h(j,c);h(i,f);j=i=m=null;w[f]&&w[f].css(p.visible);w[c]&&w[c].css(p.visible);ka();E("onswap_end",f);E("onswap_end",c)}}},showMasks:qa,hideMasks:va,initContent:Ma,addPane:db,removePane:La,createChildren:Ka,
refreshChildren:xa,enableClosable:kb,disableClosable:function(a,b){if(I()){var c=C.call(this,a),d=P[c];d&&(t[c].closable=!1,q[c].isClosed&&na(c,!1,!0),d.unbind("."+L).css("visibility",b?"hidden":"visible").css("cursor","default").attr("title",""))}},enableSlidable:function(a){if(I()){var a=C.call(this,a),b=H[a];b&&b.data("draggable")&&(t[a].slidable=!0,q[a].isClosed&&ia(a,!0))}},disableSlidable:function(a){if(I()){var a=C.call(this,a),b=H[a];b&&(t[a].slidable=!1,q[a].isSliding?fa(a,!1,!0):(ia(a,!1),
b.css("cursor","default").attr("title",""),Z(null,b[0])))}},enableResizable:function(a){if(I()){var a=C.call(this,a),b=H[a],c=t[a];b&&b.data("draggable")&&(c.resizable=!0,b.draggable("enable"),q[a].isClosed||b.css("cursor",c.resizerCursor).attr("title",c.tips.Resize))}},disableResizable:function(a){if(I()){var a=C.call(this,a),b=H[a];b&&b.data("draggable")&&(t[a].resizable=!1,b.draggable("disable").css("cursor","default").attr("title",""),Z(null,b[0]))}},allowOverflow:J,resetOverflow:G,destroy:function(a,
c){b(window).unbind("."+L);b(document).unbind("."+L);"object"===typeof a?C(a):c=a;m.clearQueue().removeData("layout").removeData("layoutContainer").removeClass(t.containerClass).unbind("."+L);$.remove();b.each(p.allPanes,function(a,b){La(b,!1,!0,c)});m.data("layoutCSS")&&!m.data("layoutRole")&&m.css(m.data("layoutCSS")).removeData("layoutCSS");"BODY"===v.tagName&&(m=b("html")).data("layoutCSS")&&m.css(m.data("layoutCSS")).removeData("layoutCSS");h(y,b.layout.onDestroy);hb();for(var d in y)d.match(/^(container|options)$/)||
delete y[d];y.destroyed=!0;return y},initPanes:I,resizeAll:ka,runCallbacks:E,hasParentLayout:!1,children:X,north:!1,south:!1,west:!1,east:!1,center:!1},Sa;var R,Ta,O,Ca,ha,oa,S,j=b.layout.transformData(j,!0),j=b.layout.backwardCompatibility.renameAllOptions(j);if(!b.isEmptyObject(j.panes)){R=b.layout.optionsMap.noDefault;ha=0;for(oa=R.length;ha<oa;ha++)O=R[ha],delete j.panes[O];R=b.layout.optionsMap.layout;ha=0;for(oa=R.length;ha<oa;ha++)O=R[ha],delete j.panes[O]}R=b.layout.optionsMap.layout;var wb=
b.layout.config.optionRootKeys;for(O in j)Ca=j[O],0>b.inArray(O,wb)&&0>b.inArray(O,R)&&(j.panes[O]||(j.panes[O]=b.isPlainObject(Ca)?b.extend(!0,{},Ca):Ca),delete j[O]);b.extend(!0,t,j);b.each(p.allPanes,function(a,c){p[c]=b.extend(!0,{},p.panes,p[c]);Ta=t.panes;S=t[c];if("center"===c){R=b.layout.optionsMap.center;a=0;for(oa=R.length;a<oa;a++)if(O=R[a],!j.center[O]&&(j.panes[O]||!S[O]))S[O]=Ta[O]}else{S=t[c]=b.extend(!0,{},Ta,S);var d=t[c],g=t.panes;d.fxSettings||(d.fxSettings={});g.fxSettings||(g.fxSettings=
{});b.each(["_open","_close","_size"],function(a,e){var h="fxName"+e,j="fxSpeed"+e,k="fxSettings"+e,m=d[h]=d[h]||g[h]||d.fxName||g.fxName||"none",p=b.effects&&(b.effects[m]||b.effects.effect&&b.effects.effect[m]);if("none"===m||!t.effects[m]||!p)m=d[h]="none";m=t.effects[m]||{};h=m.all||null;m=m[c]||null;d[j]=d[j]||g[j]||d.fxSpeed||g.fxSpeed||null;d[k]=b.extend(!0,{},h,m,g.fxSettings,d.fxSettings,g[k],d[k])});delete d.fxName;delete d.fxSpeed;delete d.fxSettings;S.resizerClass||(S.resizerClass="ui-layout-resizer");
S.togglerClass||(S.togglerClass="ui-layout-toggler")}S.paneClass||(S.paneClass="ui-layout-pane")});var Da=j.zIndex,sa=t.zIndexes;0<Da&&(sa.pane_normal=Da,sa.content_mask=d(Da+1,sa.content_mask),sa.resizer_normal=d(Da+2,sa.resizer_normal));delete t.panes;var xb=t,ob=q;ob.creatingLayout=!0;h(y,b.layout.onCreate);if(!1===E("onload_start"))Sa="cancel";else{var Ua=m[0],V=b("html"),pb=v.tagName=Ua.tagName,qb=v.id=Ua.id,rb=v.className=Ua.className,M=t,Ea=M.name,Va={},Fa=m.data("parentLayout"),Ga=m.data("layoutEdge"),
Wa=Fa&&Ga,pa=b.layout.cssNum,Xa,W;v.selector=m.selector.split(".slice")[0];v.ref=(M.name?M.name+" layout / ":"")+pb+(qb?"#"+qb:rb?".["+rb+"]":"");v.isBody="BODY"===pb;!Wa&&!v.isBody&&(Xa=m.closest("."+b.layout.defaults.panes.paneClass),Fa=Xa.data("parentLayout"),Ga=Xa.data("layoutEdge"),Wa=Fa&&Ga);m.data({layout:y,layoutContainer:L}).addClass(M.containerClass);var sb={destroy:"",initPanes:"",resizeAll:"resizeAll",resize:"resizeAll"};for(Ea in sb)m.bind("layout"+Ea.toLowerCase()+"."+L,y[sb[Ea]||Ea]);
Wa&&(y.hasParentLayout=!0,Fa.refreshChildren(Ga,y));m.data("layoutCSS")||(v.isBody?(m.data("layoutCSS",b.extend(z(m,"position,margin,padding,border"),{height:m.css("height"),overflow:m.css("overflow"),overflowX:m.css("overflowX"),overflowY:m.css("overflowY")})),V.data("layoutCSS",b.extend(z(V,"padding"),{height:"auto",overflow:V.css("overflow"),overflowX:V.css("overflowX"),overflowY:V.css("overflowY")}))):m.data("layoutCSS",z(m,"position,margin,padding,border,top,bottom,left,right,width,height,overflow,overflowX,overflowY")));
try{Va={overflow:"hidden",overflowX:"hidden",overflowY:"hidden"};m.css(Va);M.inset&&!b.isPlainObject(M.inset)&&(W=parseInt(M.inset,10)||0,M.inset={top:W,bottom:W,left:W,right:W});if(v.isBody)M.outset?b.isPlainObject(M.outset)||(W=parseInt(M.outset,10)||0,M.outset={top:W,bottom:W,left:W,right:W}):M.outset={top:pa(V,"paddingTop"),bottom:pa(V,"paddingBottom"),left:pa(V,"paddingLeft"),right:pa(V,"paddingRight")},V.css(Va).css({height:"100%",border:"none",padding:0,margin:0}),F.isIE6?(m.css({width:"100%",
height:"100%",border:"none",padding:0,margin:0,position:"relative"}),M.inset||(M.inset=D(m).inset)):(m.css({width:"auto",height:"auto",margin:0,position:"absolute"}),m.css(M.outset)),b.extend(v,D(m,M.inset));else{var tb=m.css("position");(!tb||!tb.match(/(fixed|absolute|relative)/))&&m.css("position","relative");m.is(":visible")&&(b.extend(v,D(m,M.inset)),1>v.innerHeight&&Y(M.errors.noContainerHeight.replace(/CONTAINER/,v.ref)))}pa(m,"minWidth")&&m.parent().css("overflowX","auto");pa(m,"minHeight")&&
m.parent().css("overflowY","auto")}catch(yb){}ib();b(window).bind("unload."+L,hb);h(y,b.layout.onLoad);xb.initPanes&&wa();delete ob.creatingLayout;Sa=q.initialized}return"cancel"===Sa?null:y};b(function(){var a=b.layout.browser;a.msie&&(a.boxModel=b.support.boxModel)})})(jQuery);
(function(b){b.ui||(b.ui={});b.ui.cookie={acceptsCookies:!!navigator.cookieEnabled,read:function(a){for(var d=document.cookie,d=d?d.split(";"):[],c,g=0,h=d.length;g<h;g++)if(c=b.trim(d[g]).split("="),c[0]==a)return decodeURIComponent(c[1]);return null},write:function(a,b,c){var g="",h="",j=!1,c=c||{},B=c.expires;if(B&&B.toUTCString)h=B;else if(null===B||"number"===typeof B)h=new Date,0<B?h.setDate(h.getDate()+B):(h.setFullYear(1970),j=!0);h&&(g+=";expires="+h.toUTCString());c.path&&(g+=";path="+c.path);
c.domain&&(g+=";domain="+c.domain);c.secure&&(g+=";secure");document.cookie=a+"="+(j?"":encodeURIComponent(b))+g},clear:function(a){b.ui.cookie.write(a,"",{expires:-1})}};b.cookie||(b.cookie=function(a,d,c){var g=b.ui.cookie;if(null===d)g.clear(a);else{if(void 0===d)return g.read(a);g.write(a,d,c)}});b.layout.plugins.stateManagement=!0;b.layout.config.optionRootKeys.push("stateManagement");b.layout.defaults.stateManagement={enabled:!1,autoSave:!0,autoLoad:!0,animateLoad:!0,includeChildren:!0,stateKeys:"north.size,south.size,east.size,west.size,north.isClosed,south.isClosed,east.isClosed,west.isClosed,north.isHidden,south.isHidden,east.isHidden,west.isHidden",
cookie:{name:"",domain:"",path:"",expires:"",secure:!1}};b.layout.optionsMap.layout.push("stateManagement");b.layout.state={saveCookie:function(a,d,c){var g=a.options,h=g.stateManagement,c=b.extend(!0,{},h.cookie,c||null),a=a.state.stateData=a.readState(d||h.stateKeys);b.ui.cookie.write(c.name||g.name||"Layout",b.layout.state.encodeJSON(a),c);return b.extend(!0,{},a)},deleteCookie:function(a){a=a.options;b.ui.cookie.clear(a.stateManagement.cookie.name||a.name||"Layout")},readCookie:function(a){a=
a.options;return(a=b.ui.cookie.read(a.stateManagement.cookie.name||a.name||"Layout"))?b.layout.state.decodeJSON(a):{}},loadCookie:function(a){var d=b.layout.state.readCookie(a);d&&(a.state.stateData=b.extend(!0,{},d),a.loadState(d));return d},loadState:function(a,d,c){if(b.isPlainObject(d)&&!b.isEmptyObject(d))if(d=a.state.stateData=b.layout.transformData(d),c=b.extend({animateLoad:!1,includeChildren:a.options.stateManagement.includeChildren},c),a.state.initialized){var g=!c.animateLoad,h,j,B,J;b.each(b.layout.config.borderPanes,
function(c,x){p=d[x];b.isPlainObject(p)&&(s=p.size,h=p.initClosed,j=p.initHidden,ar=p.autoResize,B=a.state[x],J=B.isVisible,ar&&(B.autoResize=ar),J||a._sizePane(x,s,!1,!1,!1),!0===j?a.hide(x,g):!0===h?a.close(x,!1,g):!1===h?a.open(x,!1,g):!1===j&&a.show(x,!1,g),J&&a._sizePane(x,s,!1,!1,g))});if(c.includeChildren){var G,F;b.each(a.children,function(a,c){(G=d[a]?d[a].children:0)&&c&&b.each(c,function(a,b){F=G[a];b&&F&&b.loadState(F)})})}}else{var p=b.extend(!0,{},d);b.each(b.layout.config.allPanes,
function(a,b){p[b]&&delete p[b].children});b.extend(!0,a.options,p)}},readState:function(a,d){"string"===b.type(d)&&(d={keys:d});d||(d={});var c=a.options.stateManagement,g=d.includeChildren,g=void 0!==g?g:c.includeChildren,c=d.stateKeys||c.stateKeys,h={isClosed:"initClosed",isHidden:"initHidden"},j=a.state,B=b.layout.config.allPanes,J={},G,F,p,A,x,D;b.isArray(c)&&(c=c.join(","));for(var c=c.replace(/__/g,".").split(","),z=0,T=c.length;z<T;z++)G=c[z].split("."),F=G[0],G=G[1],0>b.inArray(F,B)||(p=
j[F][G],void 0!=p&&("isClosed"==G&&j[F].isSliding&&(p=!0),(J[F]||(J[F]={}))[h[G]?h[G]:G]=p));g&&b.each(B,function(c,d){x=a.children[d];A=j.stateData[d];b.isPlainObject(x)&&!b.isEmptyObject(x)&&(D=J[d]||(J[d]={}),D.children||(D.children={}),b.each(x,function(a,c){c.state.initialized?D.children[a]=b.layout.state.readState(c):A&&(A.children&&A.children[a])&&(D.children[a]=b.extend(!0,{},A.children[a]))}))});return J},encodeJSON:function(a){function d(a){var g=[],h=0,j,B,J,G=b.isArray(a);for(j in a)B=
a[j],J=typeof B,"string"==J?B='"'+B+'"':"object"==J&&(B=d(B)),g[h++]=(!G?'"'+j+'":':"")+B;return(G?"[":"{")+g.join(",")+(G?"]":"}")}return d(a)},decodeJSON:function(a){try{return b.parseJSON?b.parseJSON(a):window.eval("("+a+")")||{}}catch(d){return{}}},_create:function(a){var d=b.layout.state,c=a.options.stateManagement;b.extend(a,{readCookie:function(){return d.readCookie(a)},deleteCookie:function(){d.deleteCookie(a)},saveCookie:function(b,c){return d.saveCookie(a,b,c)},loadCookie:function(){return d.loadCookie(a)},
loadState:function(b,c){d.loadState(a,b,c)},readState:function(b){return d.readState(a,b)},encodeJSON:d.encodeJSON,decodeJSON:d.decodeJSON});a.state.stateData={};if(c.autoLoad)if(b.isPlainObject(c.autoLoad))b.isEmptyObject(c.autoLoad)||a.loadState(c.autoLoad);else if(c.enabled)if(b.isFunction(c.autoLoad)){var g={};try{g=c.autoLoad(a,a.state,a.options,a.options.name||"")}catch(h){}g&&(b.isPlainObject(g)&&!b.isEmptyObject(g))&&a.loadState(g)}else a.loadCookie()},_unload:function(a){var d=a.options.stateManagement;
if(d.enabled&&d.autoSave)if(b.isFunction(d.autoSave))try{d.autoSave(a,a.state,a.options,a.options.name||"")}catch(c){}else a.saveCookie()}};b.layout.onCreate.push(b.layout.state._create);b.layout.onUnload.push(b.layout.state._unload);b.layout.plugins.buttons=!0;b.layout.defaults.autoBindCustomButtons=!1;b.layout.optionsMap.layout.push("autoBindCustomButtons");b.layout.buttons={init:function(a){var d=a.options.name||"",c;b.each("toggle open close pin toggle-slide open-slide".split(" "),function(g,
h){b.each(b.layout.config.borderPanes,function(g,B){b(".ui-layout-button-"+h+"-"+B).each(function(){c=b(this).data("layoutName")||b(this).attr("layoutName");(void 0==c||c===d)&&a.bindButton(this,h,B)})})})},get:function(a,d,c,g){var h=b(d),a=a.options,j=a.errors.addButtonError;h.length?0>b.inArray(c,b.layout.config.borderPanes)?(b.layout.msg(j+" "+a.errors.pane+": "+c,!0),h=b("")):(d=a[c].buttonClass+"-"+g,h.addClass(d+" "+d+"-"+c).data("layoutName",a.name)):b.layout.msg(j+" "+a.errors.selector+": "+
d,!0);return h},bind:function(a,d,c,g){var h=b.layout.buttons;switch(c.toLowerCase()){case "toggle":h.addToggle(a,d,g);break;case "open":h.addOpen(a,d,g);break;case "close":h.addClose(a,d,g);break;case "pin":h.addPin(a,d,g);break;case "toggle-slide":h.addToggle(a,d,g,!0);break;case "open-slide":h.addOpen(a,d,g,!0)}return a},addToggle:function(a,d,c,g){b.layout.buttons.get(a,d,c,"toggle").click(function(b){a.toggle(c,!!g);b.stopPropagation()});return a},addOpen:function(a,d,c,g){b.layout.buttons.get(a,
d,c,"open").attr("title",a.options[c].tips.Open).click(function(b){a.open(c,!!g);b.stopPropagation()});return a},addClose:function(a,d,c){b.layout.buttons.get(a,d,c,"close").attr("title",a.options[c].tips.Close).click(function(b){a.close(c);b.stopPropagation()});return a},addPin:function(a,d,c){var g=b.layout.buttons,h=g.get(a,d,c,"pin");if(h.length){var j=a.state[c];h.click(function(d){g.setPinState(a,b(this),c,j.isSliding||j.isClosed);j.isSliding||j.isClosed?a.open(c):a.close(c);d.stopPropagation()});
g.setPinState(a,h,c,!j.isClosed&&!j.isSliding);j.pins.push(d)}return a},setPinState:function(a,b,c,g){var h=b.attr("pin");if(!(h&&g===("down"==h))){var a=a.options[c],h=a.buttonClass+"-pin",j=h+"-"+c,c=h+"-up "+j+"-up",h=h+"-down "+j+"-down";b.attr("pin",g?"down":"up").attr("title",g?a.tips.Unpin:a.tips.Pin).removeClass(g?c:h).addClass(g?h:c)}},syncPinBtns:function(a,d,c){b.each(a.state[d].pins,function(g,h){b.layout.buttons.setPinState(a,b(h),d,c)})},_load:function(a){var d=b.layout.buttons;b.extend(a,
{bindButton:function(b,c,j){return d.bind(a,b,c,j)},addToggleBtn:function(b,c,j){return d.addToggle(a,b,c,j)},addOpenBtn:function(b,c,j){return d.addOpen(a,b,c,j)},addCloseBtn:function(b,c){return d.addClose(a,b,c)},addPinBtn:function(b,c){return d.addPin(a,b,c)}});for(var c=0;4>c;c++)a.state[b.layout.config.borderPanes[c]].pins=[];a.options.autoBindCustomButtons&&d.init(a)},_unload:function(){}};b.layout.onLoad.push(b.layout.buttons._load);b.layout.plugins.browserZoom=!0;b.layout.defaults.browserZoomCheckInterval=
1E3;b.layout.optionsMap.layout.push("browserZoomCheckInterval");b.layout.browserZoom={_init:function(a){!1!==b.layout.browserZoom.ratio()&&b.layout.browserZoom._setTimer(a)},_setTimer:function(a){if(!a.destroyed){var d=a.options,c=a.state,g=a.hasParentLayout?5E3:Math.max(d.browserZoomCheckInterval,100);setTimeout(function(){if(!a.destroyed&&d.resizeWithWindow){var g=b.layout.browserZoom.ratio();g!==c.browserZoom&&(c.browserZoom=g,a.resizeAll());b.layout.browserZoom._setTimer(a)}},g)}},ratio:function(){function a(a,
b){return(100*(parseInt(a,10)/parseInt(b,10))).toFixed()}var d=window,c=screen,g=document,h=g.documentElement||g.body,j=b.layout.browser,B=j.version,J,G,F;return j.msie&&8<B||!j.msie?!1:c.deviceXDPI&&c.systemXDPI?a(c.deviceXDPI,c.systemXDPI):j.webkit&&(J=g.body.getBoundingClientRect)?a(J.left-J.right,g.body.offsetWidth):j.webkit&&(G=d.outerWidth)?a(G,d.innerWidth):(G=c.width)&&(F=h.clientWidth)?a(G,F):!1}};b.layout.onReady.push(b.layout.browserZoom._init)})(jQuery);//Copyright (c) 2011 Crystalline Technologies
//
//  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'),
//  to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
//  and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
//  WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

(function($){	

	//Main method
	$.fn.json2html = function(JSON, transform, options){	

		var JSONObject;
		var type = jQuery.type(JSON);

		//Convert the string to a json object
		switch( type ) {
			case 'string':
				JSONObject = jQuery.parseJSON(JSON);
			break;

			default:
				JSONObject = JSON;
			break;

		}
		
		//Extend the options (with defaults)
		if( options != undefined ) $.extend($.json2html.options, options);
		
		//Make sure to take care of any chaining
		return this.each(function(){ 
		    if( $.json2html.options.prepend ) $.fn.prepend.apply($(this),$.json2html(JSONObject, transform));
			else  $.fn.append.apply($(this),$.json2html(JSONObject, transform));
		});
		
	}
		
		//Perform the transformation
		$.json2html = function(json, transform)
		{
			var type = jQuery.type(json);

			if( transform === undefined || json === undefined ) return(undefined);

			var elements = [];

			//Determine the type of this object
			switch(type)
			{
				case 'array':

					//Itterrate through the array and add it to the elements array
					var len=json.length;
					for(var j=0;j<len;++j)
					{	
						//Concat the return elements from this objects tranformation
						elements = elements.concat($.json2html.apply(json[j],transform,j));

					}
				break;

				case 'object':
					//Concat the return elements from this objects tranformation
					elements = elements.concat($.json2html.apply(json,transform));
				break;
			}

			//Return the element array
			return( elements );
		}
		
		//Default Options
		$.json2html.options = {
			'eventData': undefined,
			'prepend':false
		}

		//Apply the transform (at the first level)
		$.json2html.apply = function(json,transform,index)
		{
			var elements = [];
			i = 0;

			var objs = $.json2html.applyTransform(json, transform,index);
					
			var objType = jQuery.type(objs);
			
			//Flatten the return object
			switch (objType)
			{
				case 'array':
					elements = elements.concat(objs);
					i += objs.length;
				break;

				default:
					elements[i] = objs;
					i++;
				break;
			}

			return(elements);
		}

		//Apply the transform at the second level
		$.json2html.applyTransform = function(obj,transform,index)
		{
			//var html = $(document.createElement('div'));
			var objects = [];
			var i = 0;
			var type = jQuery.type(transform);

			//Itterate through the transform and create html as needed
			switch(type)
			{
				case 'array':
					var t_len = transform.length;
					for(var t=0; t < t_len; ++t)
						objects = objects.concat($.json2html.applyTransform(obj, transform[t], index));
				break;

				case 'object':
					//Get the tag element of this transform
					var tag = transform['tag'];
					if( tag !== undefined )
					{
						//Create a new element
						var element = $(document.createElement(tag));

						//Look into the properties of this transform
						for (var key in transform) 
						{
							switch(key)
							{
								case 'tag':
									//Do nothing as we have already created the element from the tag
								break;

								case 'children':

									//Add the children
									var children = transform['children'];
									var c_type = jQuery.type(children);

									switch( c_type )
									{
										case 'function':
											$.fn.append.apply($(element),children.call(obj,obj));
										break;

										case 'array':													
											$.fn.append.apply($(element),$.json2html.applyTransform(obj, transform['children'], index));
										break;

										default:
											//We only accept array's and functions for children
										break;
									}
									
								break;

								case 'html':
									//Create the html attribute
									$(element).html($.json2html.getValue(obj,transform,'html',index));
								break;

								default:
									//Add the property as a attribute if it's not a key one
									var isEvent = false;
									
									//Check if the first two characters are 'on' then this is an event
									if( key.charAt(0) === 'o' )
										if( key.charAt(1) === 'n')
											{	
												var data = {
													'action':transform[key],
													'obj':obj,
													'data':$.json2html.options.eventData,
													'index':index
												};

												//Bind the event to the element
												$(element).bind(key.substring(key.indexOf('on')+2),data, function(event) {
													data.event = event;
													data.action.call($(this),data);
												});

												isEvent = true;
											}
									
									//If this wasn't an even the add it as an attribute
									if( !isEvent ) $(element).attr(key, $.json2html.getValue(obj, transform, key,index));
								break;
							}
						}

						//Return the newly created element
						objects[i] = element;
						i++;
					}
				break;
			}
			
			return(objects);
		}

		//Get the html value of the object
		$.json2html.getValue = function(obj, transform, key,index)
		{
			var out = '';
			
			var val = transform[key];
			var type = jQuery.type(val);
			
			switch(type)
			{
				case 'function':
					return(val.call(obj,obj,index));
				break;

				case 'string':
						var _tokenizer = new $.json2html.tokenizer([
							/\${([^\}\{]+)}/
						 ],function( src, real, re ){
							return real ? src.replace(re,function(all,name){
								
								//Split the string into it's seperate components
								var components = name.split('.');

								//Set the object we use to query for this name to be the original object
								var useObj = obj;

								//Output value
								var outVal = '';
								
								//Parse the object components
								var c_len = components.length;
								for (var i=0;i<c_len;++i)
								{
									if( components[i].length > 0 )
									{
										var newObj = useObj[components[i]];
										useObj = newObj;
										if(useObj === null || useObj === undefined) break;
									}
								}
								
								//As long as we have an object to use then set the out
								if(useObj !== null && useObj !== undefined) outVal = useObj;

							    return(outVal);
							}) : src;
						  }
						);
						
						out = _tokenizer.parse(val).join('');
				break;
			}

			return(out);
		}
		
		//Tokenizer
		$.json2html.tokenizer = function( tokenizers, doBuild ){

			if( !(this instanceof $.json2html.tokenizer ) )
				return new $.json2html.tokenizer( tokenizers, onEnd, onFound );
				
			this.tokenizers = tokenizers.splice ? tokenizers : [tokenizers];
			if( doBuild )
				this.doBuild = doBuild;

			this.parse = function( src ){
				this.src = src;
				this.ended = false;
				this.tokens = [ ];
				do this.next(); while( !this.ended );
				return this.tokens;
			}
			
			this.build = function( src, real ){
				if( src )
					this.tokens.push(
						!this.doBuild ? src :
						this.doBuild(src,real,this.tkn)
					);	
			}

			this.next = function(){
				var self = this,
					plain;
					
				self.findMin();
				plain = self.src.slice(0, self.min);
				
				self.build( plain, false );
					
				self.src = self.src.slice(self.min).replace(self.tkn,function( all ){
					self.build(all, true);
					return '';
				});
				
				if( !self.src )
					self.ended = true;
			}

			this.findMin = function(){
				var self = this, i=0, tkn, idx;
				self.min = -1;
				self.tkn = '';
				
				while(( tkn = self.tokenizers[i++]) !== undefined ){
					idx = self.src[tkn.test?'search':'indexOf'](tkn);
					if( idx != -1 && (self.min == -1 || idx < self.min )){
						self.tkn = tkn;
						self.min = idx;
					}
				}
				if( self.min == -1 )
					self.min = self.src.length;
			}
		}

})(jQuery);

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*
 * Part of this code has been taked from
 *
 * jQuery Stream @VERSION
 * Comet Streaming JavaScript Library
 * http://code.google.com/p/jquery-stream/
 *
 * Copyright 2011, Donghwan Kim
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Compatible with jQuery 1.5+
 */
/**
 * Official documentation of this library: https://github.com/Atmosphere/atmosphere/wiki/jQuery.atmosphere.js-API
 */
jQuery.atmosphere = function() {
    jQuery(window).unload(function() {
        jQuery.atmosphere.unsubscribe();
    });

    var parseHeaders = function(headerString) {
        var match, rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, headers = {};
        while (match = rheaders.exec(headerString)) {
            headers[match[1]] = match[2];
        }
        return headers;
    };

    return {
        version : "1.0",
        requests : [],
        callbacks : [],

        onError : function(response) {
        },
        onClose : function(response) {
        },
        onOpen : function(response) {
        },
        onMessage : function(response) {
        },
        onReconnect : function(request, response) {
        },
        onMessagePublished : function(response) {
        },
        onTransportFailure : function(response) {
        },

        AtmosphereRequest : function(options) {

            /**
             * {Object} Request parameters.
             * @private
             */
            var _request = {
                timeout: 300000,
                method: 'GET',
                headers: {},
                contentType : '',
                callback: null,
                url : '',
                data : '',
                suspend : true,
                maxRequest : 60,
                reconnect : true,
                maxStreamingLength : 10000000,
                lastIndex : 0,
                logLevel : 'info',
                requestCount : 0,
                fallbackMethod: 'GET',
                fallbackTransport : 'streaming',
                transport : 'long-polling',
                webSocketImpl: null,
                webSocketUrl: null,
                webSocketPathDelimiter: "@@",
                enableXDR : false,
                rewriteURL : false,
                attachHeadersAsQueryString : true,
                executeCallbackBeforeReconnect : false,
                readyState : 0,
                lastTimestamp : 0,
                withCredentials : false,
                trackMessageLength : false ,
                messageDelimiter : '|',
                connectTimeout : -1,
                dropAtmosphereHeaders : false,
                onError : function(response) {
                },
                onClose : function(response) {
                },
                onOpen : function(response) {
                },
                onMessage : function(response) {
                },
                onReconnect : function(request, response) {
                },
                onMessagePublished : function(response) {
                },
                onTransportFailure : function (reason, request) {
                }
            };

            /**
             * {Object} Request's last response.
             * @private
             */
            var _response = {
                status: 200,
                responseBody : '',
                expectedBodySize : -1,
                headers : [],
                state : "messageReceived",
                transport : "polling",
                error: null,
                request : null,
                id : 0
            };

            /**
             * {number} Request id.
             *
             * @private
             */
            var _uuid = 0;

            /**
             * {websocket} Opened web socket.
             *
             * @private
             */
            var _websocket = null;

            /**
             * {SSE} Opened SSE.
             *
             * @private
             */
            var _sse = null;

            /**
             * {XMLHttpRequest, ActiveXObject} Opened ajax request (in case of
             * http-streaming or long-polling)
             *
             * @private
             */
            var _activeRequest = null;

            /**
             * {Object} Object use for streaming with IE.
             *
             * @private
             */
            var _ieStream = null;

            /**
             * {Object} Object use for jsonp transport.
             *
             * @private
             */
            var _jqxhr = null;

            /**
             * {boolean} If request has been subscribed or not.
             *
             * @private
             */
            var _subscribed = true;

            /**
             * {number} Number of test reconnection.
             *
             * @private
             */
            var _requestCount = 0;

            /**
             * {boolean} If request is currently aborded.
             *
             * @private
             */
            var _abordingConnection = false;

            // Automatic call to subscribe
            _subscribe(options);

            /**
             * Initialize atmosphere request object.
             *
             * @private
             */
            function _init() {
                _uuid = 0;
                _subscribed = true;
                _abordingConnection = false;
                _requestCount = 0;

                _websocket = null;
                _sse = null;
                _activeRequest = null;
                _ieStream = null;
            }

            /**
             * Re-initialize atmosphere object.
             * @private
             */
            function _reinit() {
                _clearState();
                _init();
            }

            /**
             * Subscribe request using request transport. <br>
             * If request is currently opened, this one will be closed.
             *
             * @param {Object}
                *            Request parameters.
             * @private
             */
            function _subscribe(options) {
                _reinit();

                _request = jQuery.extend(_request, options);
                _uuid = jQuery.atmosphere.guid();
            }

            /**
             * Check if web socket is supported (check for custom implementation
             * provided by request object or browser implementation).
             *
             * @returns {boolean} True if web socket is supported, false
             *          otherwise.
             * @private
             */
            function _supportWebsocket() {
                return _request.webSocketImpl != null || window.WebSocket || window.MozWebSocket;
            }

            /**
             * Check if server side events (SSE) is supported (check for custom implementation
             * provided by request object or browser implementation).
             *
             * @returns {boolean} True if web socket is supported, false
             *          otherwise.
             * @private
             */
            function _supportSSE() {
                return window.EventSource;
            }

            /**
             * Open request using request transport. <br>
             * If request transport is 'websocket' but websocket can't be
             * opened, request will automatically reconnect using fallback
             * transport.
             *
             * @private
             */
            function _execute() {
                if (_request.transport != 'websocket' && _request.transport != 'sse') {
                    _open('opening', _request.transport, _request);
                    _executeRequest();

                } else if (_request.transport == 'websocket') {
                    if (!_supportWebsocket()) {
                        _reconnectWithFallbackTransport("Websocket is not supported, using request.fallbackTransport (" + _request.fallbackTransport + ")");
                    } else {
                        _executeWebSocket(false);
                    }
                } else if (_request.transport == 'sse') {
                    if (!_supportSSE()) {
                        _reconnectWithFallbackTransport("Server Side Events(SSE) is not supported, using request.fallbackTransport (" + _request.fallbackTransport + ")");
                    } else {
                        _executeSSE(false);
                    }
                }
            }

            /**
             * @private
             */
            function _open(state, transport, request) {

                request.close = function() {
                    _close();
                    request.reconnect = false;
                }

                _response.request = request;
                var prevState = _response.state;
                _response.state = state;
                _response.status = 200;
                var prevTransport = _response.transport;
                _response.transport = transport;
                _invokeCallback();
                _response.state = prevState;
                _response.transport = prevTransport;
            }

            /**
             * Execute request using jsonp transport.
             *
             * @param request
             *            {Object} request Request parameters, if
             *            undefined _request object will be used.
             * @private
             */
            function _jsonp(request) {
                var rq = _request;
                if ((request != null) && (typeof(request) != 'undefined')) {
                    rq = request;
                }

                var url = rq.url;
                var data = rq.data;
                if (rq.attachHeadersAsQueryString) {
                    url = _attachHeaders(rq);
                    if (data != '') {
                        url += "&X-Atmosphere-Post-Body=" + data;
                    }
                    data = '';
                }

                _jqxhr = jQuery.ajax({
                    url : url,
                    type : rq.method,
                    dataType: "jsonp",
                    error : function(jqXHR, textStatus, errorThrown) {
                        if (jqXHR.status < 300 && rq.requestCount++ < rq.maxRequest) {
                            _reconnect(_jqxhr, rq);
                        } else {
                            _prepareCallback(textStatus, "error", jqXHR.status, rq.transport);
                        }
                    },
                    jsonp : "jsonpTransport",
                    success: function(json) {

                        if (rq.requestCount++ < rq.maxRequest) {
                            if (rq.executeCallbackBeforeReconnect) {
                                _reconnect(_jqxhr, rq);
                            }

                            var msg = json.message;
                            if (msg != null && typeof msg != 'string') {
                                try {
                                    msg = jQuery.stringifyJSON(msg);
                                } catch (err) {
                                    // The message was partial
                                }
                            }

                            _prepareCallback(msg, "messageReceived", 200, rq.transport);

                            if (!rq.executeCallbackBeforeReconnect) {
                                _reconnect(_jqxhr, rq);
                            }
                        } else {
                            jQuery.atmosphere.log(_request.logLevel, ["JSONP reconnect maximum try reached " + _request.requestCount]);
                            _onError();
                        }
                    },
                    data : rq.data,
                    beforeSend : function(jqXHR) {
                        _doRequest(jqXHR, rq, false);
                    }
                });
            }

            /**
             * Execute request using ajax transport.
             *
             * @param request
             *            {Object} request Request parameters, if
             *            undefined _request object will be used.
             * @private
             */
            function _ajax(request) {
                var rq = _request;
                if ((request != null) && (typeof(request) != 'undefined')) {
                    rq = request;
                }

                var url = rq.url;
                var data = rq.data;
                if (rq.attachHeadersAsQueryString) {
                    url = _attachHeaders(rq);
                    if (data != '') {
                        url += "&X-Atmosphere-Post-Body=" + data;
                    }
                    data = '';
                }

                _jqxhr = jQuery.ajax({
                    url : url,
                    type : rq.method,
                    error : function(jqXHR, textStatus, errorThrown) {
                        if (jqXHR.status < 300 && rq.requestCount++ < rq.maxRequest) {
                            _reconnect(_jqxhr, rq);
                        } else {
                            _prepareCallback(textStatus, "error", jqXHR.status, rq.transport);
                        }
                    },
                    success: function(data, textStatus, jqXHR) {

                        if (rq.requestCount++ < rq.maxRequest) {
                            if (rq.executeCallbackBeforeReconnect) {
                                _reconnect(_jqxhr, rq);
                            }

                            _prepareCallback(data, "messageReceived", 200, rq.transport);

                            if (!rq.executeCallbackBeforeReconnect) {
                                _reconnect(_jqxhr, rq);
                            }
                        } else {
                            jQuery.atmosphere.log(_request.logLevel, ["AJAX reconnect maximum try reached " + _request.requestCount]);
                            _onError();
                        }
                    },
                    data : rq.data,
                    beforeSend : function(jqXHR) {
                        _doRequest(jqXHR, rq, false);
                    }
                });
            }

            /**
             * Build websocket object.
             *
             * @param location
             *            {string} Web socket url.
             * @returns {websocket} Web socket object.
             * @private
             */
            function _getWebSocket(location) {
                if (_request.webSocketImpl != null) {
                    return _request.webSocketImpl;
                } else {
                    if (window.WebSocket) {
                        return new WebSocket(location);
                    } else {
                        return new MozWebSocket(location);
                    }
                }
            }

            /**
             * Build web socket url from request url.
             *
             * @return {string} Web socket url (start with "ws" or "wss" for
             *         secure web socket).
             * @private
             */
            function _buildWebSocketUrl() {
                var url = _request.url;
                url = _attachHeaders();
                return decodeURI(jQuery('<a href="' + url + '"/>')[0].href.replace(/^http/, "ws"));
            }

            /**
             * Build SSE url from request url.
             *
             * @return a url with Atmosphere's headers
             * @private
             */
            function _buildSSEUrl() {
                var url = _request.url;
                url = _attachHeaders();
                return url;
            }

            /**
             * Open SSE. <br>
             * Automatically use fallback transport if SSE can't be
             * opened.
             *
             * @private
             */
            function _executeSSE(sseOpened) {

                _response.transport = "sse";

                var location = _buildSSEUrl(_request.url);

                jQuery.atmosphere.log(_request.logLevel, ["Invoking executeSSE"]);
                if (_request.logLevel == 'debug') {
                    jQuery.atmosphere.debug("Using URL: " + location);
                }

                if (sseOpened) {
                    _open('re-opening', "sse", _request);
                }

                if (!_request.reconnect) {
                    if (_sse != null) {
                        _sse.close();
                    }
                    return;
                }
                _sse = new EventSource(location, {withCredentials: _request.withCredentials});

                if (_request.connectTimeout > 0) {
                    _request.id = setTimeout(function() {
                        if (!sseOpened) {
                            _sse.close();
                        }
                    }, _request.connectTimeout);
                }

                _sse.onopen = function(event) {
                    if (_request.logLevel == 'debug') {
                        jQuery.atmosphere.debug("SSE successfully opened");
                    }

                    if (!sseOpened) {
                        _open('opening', "sse", _request);
                    }
                    sseOpened = true;

                    if (_request.method == 'POST') {
                        _response.state = "messageReceived";
                        _sse.send(_request.data);
                    }
                };

                _sse.onmessage = function(message) {
                    _response.state = 'messageReceived';
                    _response.status = 200;

                    var message = message.data;
                    var skipCallbackInvocation = _trackMessageSize(message, _request, _response);

                    if (jQuery.trim(message).length == 0) {
                        skipCallbackInvocation = true;
                    }

                    if (!skipCallbackInvocation) {
                        _invokeCallback();
                        _response.responseBody = '';
                    }
                };

                _sse.onerror = function(message) {

                    clearTimeout(_request.id)
                    _response.state = 'closed';
                    _response.responseBody = "";
                    _response.status = !sseOpened ? 501 : 200;
                    _invokeCallback();

                    if (_abordingConnection) {
                        jQuery.atmosphere.log(_request.logLevel, ["SSE closed normally"]);
                    } else if (!sseOpened) {
                        _reconnectWithFallbackTransport("SSE failed. Downgrading to fallback transport and resending");
                    } else if (_request.reconnect && (_response.transport == 'sse')) {
                        if (_requestCount++ < _request.maxRequest) {
                            _request.requestCount = _requestCount;
                            _response.responseBody = "";
                            _executeSSE(true);
                        } else {
                            _sse.close();
                            jQuery.atmosphere.log(_request.logLevel, ["SSE reconnect maximum try reached " + _request.requestCount]);
                            _onError();
                        }
                    }
                };
            }

            /**
             * Open web socket. <br>
             * Automatically use fallback transport if web socket can't be
             * opened.
             *
             * @private
             */
            function _executeWebSocket(webSocketOpened) {

                _response.transport = "websocket";

                var location = _buildWebSocketUrl(_request.url);
                var closed = false;

                jQuery.atmosphere.log(_request.logLevel, ["Invoking executeWebSocket"]);
                if (_request.logLevel == 'debug') {
                    jQuery.atmosphere.debug("Using URL: " + location);
                }

                if (webSocketOpened) {
                    _open('re-opening', "websocket", _request);
                }

                if (!_request.reconnect) {
                    if (_websocket != null) {
                        _websocket.close();
                    }
                    return;
                }

                _websocket = _getWebSocket(location);

                if (_request.connectTimeout > 0) {
                    _request.id = setTimeout(function() {
                        if (!webSocketOpened) {
                            var _message = {
                                code : 1002,
                                reason : "",
                                wasClean : false
                            };
                            _websocket.onclose(_message);
                            // Close it anyway
                            try {
                                _websocket.close();
                            } catch (e) {
                            }
                        }
                    }, _request.connectTimeout);
                }

                _websocket.onopen = function(message) {
                    if (_request.logLevel == 'debug') {
                        jQuery.atmosphere.debug("Websocket successfully opened");
                    }

                    if (!webSocketOpened) {
                        _open('opening', "websocket", _request);
                    }

                    webSocketOpened = true;

                    if (_request.method == 'POST') {
                        _response.state = "messageReceived";
                        _websocket.send(_request.data);
                    }
                };

                _websocket.onmessage = function(message) {
                    if (message.data.indexOf("parent.callback") != -1) {
                        jQuery.atmosphere.log(_request.logLevel, ["parent.callback no longer supported with 0.8 version and up. Please upgrade"]);
                    }

                    _response.state = 'messageReceived';
                    _response.status = 200;

                    var message = message.data;
                    var skipCallbackInvocation = _trackMessageSize(message, _request, _response);

                    if (!skipCallbackInvocation) {
                        _invokeCallback();
                        _response.responseBody = '';
                    }
                };

                _websocket.onerror = function(message) {
                    clearTimeout(_request.id)
                };

                _websocket.onclose = function(message) {
                    if (closed) return

                    var reason = message.reason;
                    if (reason === "") {
                        switch (message.code) {
                            case 1000:
                                reason = "Normal closure; the connection successfully completed whatever purpose for which " +
                                    "it was created.";
                                break;
                            case 1001:
                                reason = "The endpoint is going away, either because of a server failure or because the " +
                                    "browser is navigating away from the page that opened the connection.";
                                break;
                            case 1002:
                                reason = "The endpoint is terminating the connection due to a protocol error.";
                                break;
                            case 1003:
                                reason = "The connection is being terminated because the endpoint received data of a type it " +
                                    "cannot accept (for example, a text-only endpoint received binary data).";
                                break;
                            case 1004:
                                reason = "The endpoint is terminating the connection because a data frame was received that " +
                                    "is too large.";
                                break;
                            case 1005:
                                reason = "Unknown: no status code was provided even though one was expected.";
                                break;
                            case 1006:
                                reason = "Connection was closed abnormally (that is, with no close frame being sent).";
                                break;
                        }
                    }

                    jQuery.atmosphere.warn("Websocket closed, reason: " + reason);
                    jQuery.atmosphere.warn("Websocket closed, wasClean: " + message.wasClean);

                    _response.state = 'closed';
                    _response.responseBody = "";
                    _response.status = !webSocketOpened ? 501 : 200;
                    _invokeCallback();
                    clearTimeout(_request.id)

                    closed = true;

                    if (_abordingConnection) {
                        jQuery.atmosphere.log(_request.logLevel, ["Websocket closed normally"]);
                    } else if (!webSocketOpened) {
                        _reconnectWithFallbackTransport("Websocket failed. Downgrading to Comet and resending");

                    } else if (_request.reconnect && _response.transport == 'websocket') {
                        if (_request.reconnect && _requestCount++ < _request.maxRequest) {
                            _request.requestCount = _requestCount;
                            _response.responseBody = "";
                            _executeWebSocket(true);
                        } else {
                            jQuery.atmosphere.log(_request.logLevel, ["Websocket reconnect maximum try reached " + _request.requestCount]);
                            jQuery.atmosphere.warn("Websocket error, reason: " + message.reason);
                            _onError();
                        }
                    }
                };
            }

            function _onError() {
                _response.state = 'error';
                _response.responseBody = "";
                _response.status = 500;
                _invokeCallback();
            }

            /**
             * Track received message and make sure callbacks/functions are only invoked when the complete message
             * has been received.
             *
             * @param message
             * @param request
             * @param response
             */
            function _trackMessageSize(message, request, response) {
                if (request.trackMessageLength) {
                    // The message length is the included within the message
                    var messageStart = message.indexOf(request.messageDelimiter);

                    var length = response.expectedBodySize;
                    if (messageStart != -1) {
                        length = message.substring(0, messageStart);
                        message = message.substring(messageStart + 1);
                        response.expectedBodySize = length;
                    }

                    if (messageStart != -1) {
                        response.responseBody = message;
                    } else {
                        response.responseBody += message;
                    }

                    if (response.responseBody.length != length) {
                        return true;
                    }
                } else {
                    response.responseBody = message;
                }
                return false;
            }

            /**
             * Reconnect request with fallback transport. <br>
             * Used in case websocket can't be opened.
             *
             * @private
             */
            function _reconnectWithFallbackTransport(errorMessage) {
                jQuery.atmosphere.log(_request.logLevel, [errorMessage]);

                if (typeof(_request.onTransportFailure) != 'undefined') {
                    _request.onTransportFailure(errorMessage, _request);
                } else if (typeof(jQuery.atmosphere.onTransportFailure) != 'undefined') {
                    jQuery.atmosphere.onTransportFailure(errorMessage, _request);
                }

                _request.transport = _request.fallbackTransport;
                if (_request.reconnect && _request.transport != 'none' || _request.transport == null) {
                    _request.method = _request.fallbackMethod;
                    _response.transport = _request.fallbackTransport;
                    _execute();
                }
            }

            /**
             * Get url from request and attach headers to it.
             *
             * @param request
             *            {Object} request Request parameters, if
             *            undefined _request object will be used.
             *
             * @returns {Object} Request object, if undefined,
             *          _request object will be used.
             * @private
             */
            function _attachHeaders(request) {
                var rq = _request;
                if ((request != null) && (typeof(request) != 'undefined')) {
                    rq = request;
                }

                var url = rq.url;

                // If not enabled
                if (!rq.attachHeadersAsQueryString) return url;

                // If already added
                if (url.indexOf("X-Atmosphere-Framework") != -1) {
                    return url;
                }

                url += (url.indexOf('?') != -1) ? '&' : '?';
                url += "X-Atmosphere-tracking-id=" + _uuid;
                url += "&X-Atmosphere-Framework=" + jQuery.atmosphere.version;
                url += "&X-Atmosphere-Transport=" + rq.transport;

                if (rq.trackMessageLength) {
                    url += "&X-Atmosphere-TrackMessageSize=" + "true";
                }

                if (rq.lastTimestamp != undefined) {
                    url += "&X-Cache-Date=" + rq.lastTimestamp;
                } else {
                    url += "&X-Cache-Date=" + 0;
                }

                if (rq.contentType != '') {
                    url += "&Content-Type=" + rq.contentType;
                }

                jQuery.each(rq.headers, function(name, value) {
                    var h = jQuery.isFunction(value) ? value.call(this, rq, request, _response) : value;
                    if (h != null) {
                        url += "&" + encodeURIComponent(name) + "=" + encodeURIComponent(h);
                    }
                });

                return url;
            }

            /**
             * Build ajax request. <br>
             * Ajax Request is an XMLHttpRequest object, except for IE6 where
             * ajax request is an ActiveXObject.
             *
             * @return {XMLHttpRequest, ActiveXObject} Ajax request.
             * @private
             */
            function _buildAjaxRequest() {
                var ajaxRequest;
                if (jQuery.browser.msie) {
                    var activexmodes = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"];
                    for (var i = 0; i < activexmodes.length; i++) {
                        try {
                            ajaxRequest = new ActiveXObject(activexmodes[i]);
                        } catch(e) {
                        }
                    }

                } else if (window.XMLHttpRequest) {
                    ajaxRequest = new XMLHttpRequest();
                }
                return ajaxRequest;
            }

            /**
             * Execute ajax request. <br>
             *
             * @param request
             *            {Object} request Request parameters, if
             *            undefined _request object will be used.
             * @private
             */
            function _executeRequest(request) {
                var rq = _request;
                if ((request != null) || (typeof(request) != 'undefined')) {
                    rq = request;
                }

                // CORS fake using JSONP
                if ((rq.transport == 'jsonp') || ((rq.enableXDR) && (jQuery.atmosphere.checkCORSSupport()))) {
                    _jsonp(rq);
                    return;
                }

                if (rq.transport == 'ajax') {
                    _ajax(request);
                    return;
                }

                if ((rq.transport == 'streaming') && (jQuery.browser.msie)) {
                    rq.enableXDR && window.XDomainRequest ? _ieXDR(rq) : _ieStreaming(rq);
                    return;
                }

                if ((rq.enableXDR) && (window.XDomainRequest)) {
                    _ieXDR(rq);
                    return;
                }

                if (rq.reconnect && rq.requestCount++ < rq.maxRequest) {
                    var ajaxRequest = _buildAjaxRequest();
                    _doRequest(ajaxRequest, rq, true);

                    if (rq.suspend) {
                        _activeRequest = ajaxRequest;
                    }

                    if (rq.transport != 'polling') {
                        _response.transport = rq.transport;
                    }

                    var error = false;
                    if (!jQuery.browser.msie) {
                        ajaxRequest.onerror = function() {
                            error = true;
                            try {
                                _response.status = XMLHttpRequest.status;
                            } catch(e) {
                                _response.status = 404;
                            }

                            _response.state = "error";
                            _invokeCallback();
                            ajaxRequest.abort();
                            _activeRequest = null;
                        };
                    }

                    ajaxRequest.onreadystatechange = function() {
                        if (_abordingConnection) {
                            return;
                        }

                        var skipCallbackInvocation = false;
                        var update = false;

                        // Remote server disconnected us, reconnect.
                        if (rq.transport == 'streaming'
                            && (rq.readyState > 2
                            && ajaxRequest.readyState == 4)) {

                            rq.readyState = 0;
                            rq.lastIndex = 0;

                            _reconnect(ajaxRequest, rq, true);
                            return;
                        }

                        rq.readyState = ajaxRequest.readyState;

                        if (ajaxRequest.readyState == 4) {
                            if (jQuery.browser.msie) {
                                update = true;
                            } else if (rq.transport == 'streaming') {
                                update = true;
                            } else if (rq.transport == 'long-polling') {
                                update = true;
                                clearTimeout(rq.id);
                            }
                        } else if (!jQuery.browser.msie && ajaxRequest.readyState == 3 && ajaxRequest.status == 200 && rq.transport != 'long-polling') {
                            update = true;
                        } else {
                            clearTimeout(rq.id);
                        }

                        if (update) {
                            var responseText = ajaxRequest.responseText;

                            if (!_request.dropAtmosphereHeaders) {
                                // Do not fail on trying to retrieve headers. Chrome migth fail with
                                // Refused to get unsafe header
                                // Let the failure happens later with a better error message
                                try {
                                    var tempDate = ajaxRequest.getResponseHeader('X-Cache-Date');
                                    if (tempDate != null || tempDate != undefined) {
                                        _request.lastTimestamp = tempDate.split(" ").pop();
                                    }
                                } catch (e) {
                                }
                            }

                            this.previousLastIndex = rq.lastIndex;
                            if (rq.transport == 'streaming') {
                                var text = responseText.substring(rq.lastIndex, responseText.length);
                                _response.isJunkEnded = true;

                                if (rq.lastIndex == 0 && text.indexOf("<!-- Welcome to the Atmosphere Framework.") != -1) {
                                    _response.isJunkEnded = false;
                                }

                                if (!_response.isJunkEnded) {
                                    var endOfJunk = "<!-- EOD -->";
                                    var endOfJunkLenght = endOfJunk.length;
                                    var junkEnd = text.indexOf(endOfJunk) + endOfJunkLenght;

                                    if (junkEnd > endOfJunkLenght && junkEnd != text.length) {
                                        _response.responseBody = text.substring(junkEnd);
                                    } else {
                                        skipCallbackInvocation = true;
                                    }
                                } else {
                                    var message = responseText.substring(rq.lastIndex, responseText.length);
                                    skipCallbackInvocation = _trackMessageSize(message, rq, _response);
                                }
                                rq.lastIndex = responseText.length;

                                if (jQuery.browser.opera) {
                                    jQuery.atmosphere.iterate(function() {
                                        if (ajaxRequest.responseText.length > rq.lastIndex) {
                                            try {
                                                _response.status = ajaxRequest.status;
                                                _response.headers = parseHeaders(ajaxRequest.getAllResponseHeaders());

                                                // HOTFIX for firefox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=608735
                                                if (_request.headers) {
                                                    jQuery.each(_request.headers, function(name) {
                                                        var v = ajaxRequest.getResponseHeader(name);
                                                        if (v) {
                                                            _response.headers[name] = v;
                                                        }
                                                    });
                                                }
                                            }
                                            catch(e) {
                                                _response.status = 404;
                                            }
                                            _response.state = "messageReceived";
                                            _response.responseBody = ajaxRequest.responseText.substring(rq.lastIndex);
                                            rq.lastIndex = ajaxRequest.responseText.length;

                                            _invokeCallback();
                                            if ((rq.transport == 'streaming') && (ajaxRequest.responseText.length > rq.maxStreamingLength)) {
                                                // Close and reopen connection on large data received
                                                ajaxRequest.abort();
                                                _doRequest(ajaxRequest, rq, true);
                                            }
                                        }
                                    }, 0);
                                }

                                if (skipCallbackInvocation) {
                                    return;
                                }
                            } else {
                                skipCallbackInvocation = _trackMessageSize(responseText, rq, _response);
                                rq.lastIndex = responseText.length;
                            }

                            try {
                                _response.status = ajaxRequest.status;
                                _response.headers = parseHeaders(ajaxRequest.getAllResponseHeaders());

                                // HOTFIX for firefox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=608735
                                if (_request.headers) {
                                    jQuery.each(_request.headers, function(name) {
                                        var v = ajaxRequest.getResponseHeader(name);
                                        if (v) {
                                            _response.headers[name] = v;
                                        }
                                    });
                                }
                            } catch(e) {
                                _response.status = 404;
                            }

                            if (rq.suspend) {
                                _response.state = _response.status == 0 ? "closed" : "messageReceived";
                            } else {
                                _response.state = "messagePublished";
                            }

                            if (!rq.executeCallbackBeforeReconnect) {
                                _reconnect(ajaxRequest, rq, false);
                            }

                            // For backward compatibility with Atmosphere < 0.8
                            if (_response.responseBody.indexOf("parent.callback") != -1) {
                                jQuery.atmosphere.log(rq.logLevel, ["parent.callback no longer supported with 0.8 version and up. Please upgrade"]);
                            }
                            _invokeCallback();

                            if (rq.executeCallbackBeforeReconnect) {
                                _reconnect(ajaxRequest, rq, false);
                            }

                            if ((rq.transport == 'streaming') && (responseText.length > rq.maxStreamingLength)) {
                                // Close and reopen connection on large data received
                                ajaxRequest.abort();
                                _doRequest(ajaxRequest, rq, true);
                            }
                        }
                    };
                    ajaxRequest.send(rq.data);

                    if (rq.suspend) {
                        rq.id = setTimeout(function() {
                            if (_subscribed) {
                                ajaxRequest.abort();
                                _subscribe(rq);
                                _execute();
                            }
                        }, rq.timeout);
                    }
                    _subscribed = true;

                } else {
                    jQuery.atmosphere.log(rq.logLevel, ["Max re-connection reached."]);
                    _onError();
                }
            }

            /**
             * Do ajax request.
             * @param ajaxRequest Ajax request.
             * @param request Request parameters.
             * @param create If ajax request has to be open.
             */
            function _doRequest(ajaxRequest, request, create) {
                // Prevent Android to cache request
                var url = jQuery.atmosphere.prepareURL(request.url);

                if (create) {
                    ajaxRequest.open(request.method, url, true);
                    if (request.connectTimeout > -1) {
                        request.id = setTimeout(function() {
                            if (request.requestCount == 0) {
                                ajaxRequest.abort();
                                _prepareCallback("Connect timeout", "closed", 200, request.transport);
                            }
                        }, request.connectTimeout);
                    }
                }

                if (_request.withCredentials) {
                    if ("withCredentials" in ajaxRequest) {
                        ajaxRequest.withCredentials = true;
                    }
                }

                if (!_request.dropAtmosphereHeaders) {
                    ajaxRequest.setRequestHeader("X-Atmosphere-Framework", jQuery.atmosphere.version);
                    ajaxRequest.setRequestHeader("X-Atmosphere-Transport", request.transport);
                    if (request.lastTimestamp != undefined) {
                        ajaxRequest.setRequestHeader("X-Cache-Date", request.lastTimestamp);
                    } else {
                        ajaxRequest.setRequestHeader("X-Cache-Date", 0);
                    }

                    if (request.trackMessageLength) {
                        ajaxRequest.setRequestHeader("X-Atmosphere-TrackMessageSize", "true")
                    }

                    if (request.contentType != '') {
                        ajaxRequest.setRequestHeader("Content-Type", request.contentType);
                    }
                    ajaxRequest.setRequestHeader("X-Atmosphere-tracking-id", _uuid);

                    jQuery.each(request.headers, function(name, value) {
                        var h = jQuery.isFunction(value) ? value.call(this, ajaxRequest, request, create, _response) : value;
                        if (h != null) {
                            ajaxRequest.setRequestHeader(name, h);
                        }
                    });
                }
            }

            function _reconnect(ajaxRequest, request, force) {
                if (force || (request.suspend && ajaxRequest.status == 200 && request.transport != 'streaming' && _subscribed)) {
                    _open('re-opening', request.transport, request);
                    if (request.reconnect) {
                        _executeRequest();
                    }
                }
            }

            // From jquery-stream, which is APL2 licensed as well.
            function _ieXDR(request) {
                _ieStream = _configureXDR(request);
                _ieStream.open();
            }

            // From jquery-stream
            function _configureXDR(request) {
                var rq = _request;
                if ((request != null) && (typeof(request) != 'undefined')) {
                    rq = request;
                }

                var lastMessage = "";
                var transport = rq.transport;
                var lastIndex = 0;

                var xdrCallback = function (xdr) {
                    var responseBody = xdr.responseText;
                    var isJunkEnded = false;

                    if (responseBody.indexOf("<!-- Welcome to the Atmosphere Framework.") != -1) {
                        isJunkEnded = true;
                    }

                    if (isJunkEnded) {
                        var endOfJunk = "<!-- EOD -->";
                        var endOfJunkLenght = endOfJunk.length;
                        var junkEnd = responseBody.indexOf(endOfJunk) + endOfJunkLenght;

                        responseBody = responseBody.substring(junkEnd + lastIndex);
                        lastIndex += responseBody.length;
                    }

                    _prepareCallback(responseBody, "messageReceived", 200, transport);
                };

                var xdr = new window.XDomainRequest();
                var rewriteURL = rq.rewriteURL || function(url) {
                    // Maintaining session by rewriting URL
                    // http://stackoverflow.com/questions/6453779/maintaining-session-by-rewriting-url
                    var match = /(?:^|;\s*)(JSESSIONID|PHPSESSID)=([^;]*)/.exec(document.cookie);

                    switch (match && match[1]) {
                        case "JSESSIONID":
                            return url.replace(/;jsessionid=[^\?]*|(\?)|$/, ";jsessionid=" + match[2] + "$1");
                        case "PHPSESSID":
                            return url.replace(/\?PHPSESSID=[^&]*&?|\?|$/, "?PHPSESSID=" + match[2] + "&").replace(/&$/, "");
                    }
                };

                // Handles open and message event
                xdr.onprogress = function() {
                    xdrCallback(xdr);
                };
                // Handles error event
                xdr.onerror = function() {
                    _prepareCallback(xdr.responseText, "error", 500, transport);
                };
                // Handles close event
                xdr.onload = function() {
                    if (lastMessage != xdr.responseText) {
                        xdrCallback(xdr);
                    }
                    if (rq.transport == "long-polling") {
                        _executeRequest();
                    }
                };

                return {
                    open: function() {
                        if (rq.method == 'POST') {
                            rq.attachHeadersAsQueryString = true;
                        }
                        var url = _attachHeaders(rq);
                        if (rq.method == 'POST') {
                            url += "&X-Atmosphere-Post-Body=" + rq.data;
                        }
                        xdr.open(rq.method, rewriteURL(url));
                        xdr.send();
                        if (rq.connectTimeout > -1) {
                            rq.id = setTimeout(function() {
                                if (rq.requestCount == 0) {
                                    xdr.abort();
                                    _prepareCallback("Connect timeout", "closed", 200, rq.transport);
                                }
                            }, rq.connectTimeout);
                        }
                    },
                    close: function() {
                        xdr.abort();
                        _prepareCallback(xdr.responseText, "closed", 200, transport);
                    }
                };
            }

            // From jquery-stream, which is APL2 licensed as well.
            function _ieStreaming(request) {
                _ieStream = _configureIE(request);
                _ieStream.open();
            }

            function _configureIE(request) {
                var rq = _request;
                if ((request != null) && (typeof(request) != 'undefined')) {
                    rq = request;
                }

                var stop;
                var doc = new window.ActiveXObject("htmlfile");

                doc.open();
                doc.close();

                var url = rq.url;

                if (rq.transport != 'polling') {
                    _response.transport = rq.transport;
                }

                return {
                    open: function() {
                        var iframe = doc.createElement("iframe");

                        url = _attachHeaders(rq);
                        if (rq.data != '') {
                            url += "&X-Atmosphere-Post-Body=" + rq.data;
                        }

                        // Finally attach a timestamp to prevent Android and IE caching.
                        url = jQuery.atmosphere.prepareURL(url);

                        iframe.src = url;
                        doc.body.appendChild(iframe);

                        // For the server to respond in a consistent format regardless of user agent, we polls response text
                        var cdoc = iframe.contentDocument || iframe.contentWindow.document;

                        stop = jQuery.atmosphere.iterate(function() {
                            try {
                                if (!cdoc.firstChild) {
                                    return;
                                }

                                // Detects connection failure
                                if (cdoc.readyState === "complete") {
                                    try {
                                        jQuery.noop(cdoc.fileSize);
                                    } catch(e) {
                                        _prepareCallback("Connection Failure", "error", 500, rq.transport);
                                        return false;
                                    }
                                }

                                var res = cdoc.body ? cdoc.body.lastChild : cdoc;
                                var readResponse = function() {
                                    // Clones the element not to disturb the original one
                                    var clone = res.cloneNode(true);

                                    // If the last character is a carriage return or a line feed, IE ignores it in the innerText property
                                    // therefore, we add another non-newline character to preserve it
                                    clone.appendChild(cdoc.createTextNode("."));

                                    var text = clone.innerText;
                                    var isJunkEnded = true;

                                    if (text.indexOf("<!-- Welcome to the Atmosphere Framework.") == -1) {
                                        isJunkEnded = false;
                                    }

                                    if (isJunkEnded) {
                                        var endOfJunk = "<!-- EOD -->";
                                        var endOfJunkLenght = endOfJunk.length;
                                        var junkEnd = text.indexOf(endOfJunk) + endOfJunkLenght;

                                        text = text.substring(junkEnd);
                                    }
                                    return text.substring(0, text.length - 1);
                                };

                                //To support text/html content type
                                if (!jQuery.nodeName(res, "pre")) {
                                    // Injects a plaintext element which renders text without interpreting the HTML and cannot be stopped
                                    // it is deprecated in HTML5, but still works
                                    var head = cdoc.head || cdoc.getElementsByTagName("head")[0] || cdoc.documentElement || cdoc;
                                    var script = cdoc.createElement("script");

                                    script.text = "document.write('<plaintext>')";

                                    head.insertBefore(script, head.firstChild);
                                    head.removeChild(script);

                                    // The plaintext element will be the response container
                                    res = cdoc.body.lastChild;
                                }

                                // Handles open event
                                _prepareCallback(readResponse(), "opening", 200, rq.transport);

                                // Handles message and close event
                                stop = jQuery.atmosphere.iterate(function() {
                                    var text = readResponse();
                                    if (text.length > rq.lastIndex) {
                                        _response.status = 200;
                                        _prepareCallback(text, "messageReceived", 200, rq.transport);

                                        // Empties response every time that it is handled
                                        res.innerText = "";
                                        rq.lastIndex = 0;
                                    }

                                    if (cdoc.readyState === "complete") {
                                        _prepareCallback("", "re-opening", 200, rq.transport);
                                        _ieStreaming(rq);
                                        return false;
                                    }
                                }, null);

                                return false;
                            } catch (err) {
                                jQuery.atmosphere.error(err);
                            }
                        });
                    },

                    close: function() {
                        if (stop) {
                            stop();
                        }

                        doc.execCommand("Stop");
                        _prepareCallback("", "closed", 200, rq.transport);
                    }
                };
            }

            /**
             * Send message. <br>
             * Will be automatically dispatch to other connected.
             *
             * @param {Object,
                *            string} Message to send.
             * @private
             */
            function _push(message) {
                if (_activeRequest != null || _sse != null) {
                    _pushAjaxMessage(message);
                } else if (_ieStream != null) {
                    _pushIE(message);
                } else if (_jqxhr != null) {
                    _pushJsonp(message);
                } else if (_websocket != null) {
                    _pushWebSocket(message);
                }
            }

            /**
             * Send a message using currently opened ajax request (using
             * http-streaming or long-polling). <br>
             *
             * @param {string, Object} Message to send. This is an object, string
             *            message is saved in data member.
             * @private
             */
            function _pushAjaxMessage(message) {
                var rq = _getPushRequest(message);
                _executeRequest(rq);
            }

            /**
             * Send a message using currently opened ie streaming (using
             * http-streaming or long-polling). <br>
             *
             * @param {string, Object} Message to send. This is an object, string
             *            message is saved in data member.
             * @private
             */
            function _pushIE(message) {
                _pushAjaxMessage(message);
            }

            /**
             * Send a message using jsonp transport. <br>
             *
             * @param {string, Object} Message to send. This is an object, string
             *            message is saved in data member.
             * @private
             */
            function _pushJsonp(message) {
                _pushAjaxMessage(message);
            }

            function _getStringMessage(message) {
                var msg = message;
                if (typeof(msg) == 'object') {
                    msg = message.data;
                }
                return msg;
            }

            /**
             * Build request use to push message using method 'POST' <br>.
             * Transport is defined as 'polling' and 'suspend' is set to false.
             *
             * @return {Object} Request object use to push message.
             * @private
             */
            function _getPushRequest(message) {
                var msg = _getStringMessage(message);

                var rq = {
                    connected: false,
                    timeout: 60000,
                    method: 'POST',
                    url: _request.url,
                    contentType : _request.contentType,
                    headers: {},
                    reconnect : true,
                    callback: null,
                    data : msg,
                    suspend : false,
                    maxRequest : 60,
                    logLevel : 'info',
                    requestCount : 0,
                    transport: 'polling'
                };

                if (typeof(message) == 'object') {
                    rq = jQuery.extend(rq, message);
                }

                return rq;
            }

            /**
             * Send a message using currently opened websocket. <br>
             *
             * @param {string, Object}
                *            Message to send. This is an object, string message is
             *            saved in data member.
             */
            function _pushWebSocket(message) {
                var msg = _getStringMessage(message);
                var data;
                try {
                    if (_request.webSocketUrl != null) {
                        data = _request.webSocketPathDelimiter
                            + _request.webSocketUrl
                            + _request.webSocketPathDelimiter
                            + msg;
                    } else {
                        data = msg;
                    }

                    _websocket.send(data);

                } catch (e) {
                    _websocket.onclose = function(message) {
                    };
                    _websocket.close();

                    _reconnectWithFallbackTransport("Websocket failed. Downgrading to Comet and resending " + data);
                    _pushAjaxMessage(message);
                }
            }

            function _prepareCallback(messageBody, state, errorCode, transport) {

                if (state == "messageReceived") {
                    if (_trackMessageSize(messageBody, _request, _response)) return;
                }

                _response.transport = transport;
                _response.status = errorCode;

                // If not -1, we have buffered the message.
                if (_response.expectedBodySize == -1) {
                    _response.responseBody = messageBody;
                }
                _response.state = state;

                _invokeCallback();
            }

            function _invokeFunction(response) {
                _f(response, _request);
                // Global
                _f(response, jQuery.atmosphere);
            }

            function _f(response, f) {
                switch (response.state) {
                    case "messageReceived" :
                        if (typeof(f.onMessage) != 'undefined') f.onMessage(response);
                        break;
                    case "error" :
                        if (typeof(f.onError) != 'undefined') f.onError(response);
                        break;
                    case "opening" :
                        if (typeof(f.onOpen) != 'undefined') f.onOpen(response);
                        break;
                    case "messagePublished" :
                        if (typeof(f.onMessagePublished) != 'undefined') f.onMessagePublished(response);
                        break;
                    case "re-opening" :
                        if (typeof(f.onReconnect) != 'undefined') f.onReconnect(_request, response);
                        break;
                    case "closed" :
                        if (typeof(f.onClose) != 'undefined') f.onClose(response);
                        break;
                }
            }

            /**
             * Invoke request callbacks.
             *
             * @private
             */
            function _invokeCallback() {
                var call = function (index, func) {
                    func(_response);
                };

                var messages = typeof(_response.responseBody) == 'string' ? _response.responseBody.split(_request.messageDelimiter) : new Array(_response.responseBody);
                for (i = 0; i < messages.length; i++) {

                    if (messages.length > 1 && messages[i].length == 0) {
                        continue;
                    }
                    _response.responseBody = jQuery.trim(messages[i]);
                    _invokeFunction(_response);

                    // Invoke global callbacks
                    if (jQuery.atmosphere.callbacks.length > 0) {
                        jQuery.atmosphere.debug("Invoking " + jQuery.atmosphere.callbacks.length + " global callbacks: " + _response.state);
                        try {
                            jQuery.each(jQuery.atmosphere.callbacks, call);
                        } catch (e) {
                            jQuery.atmosphere.log(_request.logLevel, ["Callback exception" + e]);
                        }
                    }

                    // Invoke request callback
                    if (typeof(_request.callback) == 'function') {
                        if (_request.logLevel == 'debug') {
                            jQuery.atmosphere.debug("Invoking request callbacks");
                        }
                        try {
                            _request.callback(_response);
                        } catch (e) {
                            jQuery.atmosphere.log(_request.logLevel, ["Callback exception" + e]);
                        }
                    }
                }

            }

            /**
             * Close request.
             *
             * @private
             */
            function _close() {
                _request.reconnect = false;
                _response.request = _request;
                _subscribed = false;
                _abordingConnection = true;
                _response.state = 'unsubscribe';
                _response.responseBody = "";
                _response.status = 408;
                _invokeCallback();

                _clearState();
            }

            function _clearState() {
                if (_ieStream != null) {
                    _ieStream.close();
                    _ieStream = null;
                }
                if (_jqxhr != null) {
                    _jqxhr.abort();
                    _jqxhr = null;
                }
                if (_activeRequest != null) {
                    _activeRequest.abort();
                    _activeRequest = null;
                }
                if (_websocket != null) {
                    _websocket.close();
                    _websocket = null;
                }
                if (_sse != null) {
                    _sse.close();
                    _sse = null;
                }
            }

            this.subscribe = function(options) {
                _subscribe(options);
                _execute();
            };

            this.execute = function() {
                _execute();
            };

            this.invokeCallback = function() {
                _invokeCallback();
            };

            this.close = function() {
                _close();
            };

            this.getUrl = function() {
                return _request.url;
            };

            this.push = function(message) {
                _push(message);
            }

            this.response = _response;
        },

        subscribe: function(url, callback, request) {
            if (typeof(callback) == 'function') {
                jQuery.atmosphere.addCallback(callback);
            }

            if (typeof(url) != "string") {
                request = url;
            } else {
                request.url = url;
            }

            var rq = new jQuery.atmosphere.AtmosphereRequest(request);
            rq.execute();

            jQuery.atmosphere.requests[jQuery.atmosphere.requests.length] = rq;
            return rq;
        },

        addCallback: function(func) {
            if (jQuery.inArray(func, jQuery.atmosphere.callbacks) == -1) {
                jQuery.atmosphere.callbacks.push(func);
            }
        },

        removeCallback: function(func) {
            var index = jQuery.inArray(func, jQuery.atmosphere.callbacks);
            if (index != -1) {
                jQuery.atmosphere.callbacks.splice(index, 1);
            }
        },

        unsubscribe : function() {
            if (jQuery.atmosphere.requests.length > 0) {
                for (var i = 0; i < jQuery.atmosphere.requests.length; i++) {
                    jQuery.atmosphere.requests[i].close();
                    clearTimeout(jQuery.atmosphere.requests[i].id);
                }
            }
            jQuery.atmosphere.requests = [];
            jQuery.atmosphere.callbacks = [];
        },

        unsubscribeUrl: function(url) {
            var idx = -1;
            if (jQuery.atmosphere.requests.length > 0) {
                for (var i = 0; i < jQuery.atmosphere.requests.length; i++) {
                    var rq = jQuery.atmosphere.requests[i];

                    // Suppose you can subscribe once to an url
                    if (rq.getUrl() == url) {
                        rq.close();
                        clearTimeout(rq.id);
                        idx = i;
                        break;
                    }
                }
            }
            if (idx >= 0) {
                jQuery.atmosphere.requests.splice(idx, 1);
            }
        },

        publish: function(request) {
            if (typeof(request.callback) == 'function') {
                jQuery.atmosphere.addCallback(callback);
            }
            request.transport = "polling";

            var rq = new jQuery.atmosphere.AtmosphereRequest(request);
            jQuery.atmosphere.requests[jQuery.atmosphere.requests.length] = rq;
            return rq;
        },

        checkCORSSupport : function() {
            if (jQuery.browser.msie && !window.XDomainRequest) {
                return true;
            } else if (jQuery.browser.opera) {
                return true;
            }

            // Force Android to use CORS as some version like 2.2.3 fail otherwise
            var ua = navigator.userAgent.toLowerCase();
            var isAndroid = ua.indexOf("android") > -1;
            if (isAndroid) {
                return true;
            }
            return false;
        },

        S4 : function() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        },

        guid : function() {
            return (jQuery.atmosphere.S4() + jQuery.atmosphere.S4() + "-" + jQuery.atmosphere.S4() + "-" + jQuery.atmosphere.S4() + "-" + jQuery.atmosphere.S4() + "-" + jQuery.atmosphere.S4() + jQuery.atmosphere.S4() + jQuery.atmosphere.S4());
        },

        // From jQuery-Stream
        prepareURL: function(url) {
            // Attaches a time stamp to prevent caching
            var ts = jQuery.now();
            var ret = url.replace(/([?&])_=[^&]*/, "$1_=" + ts);

            return ret + (ret === url ? (/\?/.test(url) ? "&" : "?") + "_=" + ts : "");
        },

        // From jQuery-Stream
        param : function(data) {
            return jQuery.param(data, jQuery.ajaxSettings.traditional);
        },

        iterate : function (fn, interval) {
            var timeoutId;

            // Though the interval is 0 for real-time application, there is a delay between setTimeout calls
            // For detail, see https://developer.mozilla.org/en/window.setTimeout#Minimum_delay_and_timeout_nesting
            interval = interval || 0;

            (function loop() {
                timeoutId = setTimeout(function() {
                    if (fn() === false) {
                        return;
                    }

                    loop();
                }, interval);
            })();

            return function() {
                clearTimeout(timeoutId);
            };
        },

        log: function (level, args) {
            if (window.console) {
                var logger = window.console[level];
                if (typeof logger == 'function') {
                    logger.apply(window.console, args);
                }
            }
        },

        warn: function() {
            jQuery.atmosphere.log('warn', arguments);
        },

        info :function() {
            jQuery.atmosphere.log('info', arguments);
        },

        debug: function() {
            jQuery.atmosphere.log('debug', arguments);
        },

        error: function() {
            jQuery.atmosphere.log('error', arguments);
        }
    };
}();

/*
 * jQuery stringifyJSON
 * http://github.com/flowersinthesand/jquery-stringifyJSON
 * 
 * Copyright 2011, Donghwan Kim 
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
// This plugin is heavily based on Douglas Crockford's reference implementation
(function(jQuery) {

    var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, meta = {
        '\b' : '\\b',
        '\t' : '\\t',
        '\n' : '\\n',
        '\f' : '\\f',
        '\r' : '\\r',
        '"' : '\\"',
        '\\' : '\\\\'
    };

    function quote(string) {
        return '"' + string.replace(escapable, function(a) {
            var c = meta[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"';
    }

    function f(n) {
        return n < 10 ? "0" + n : n;
    }

    function str(key, holder) {
        var i, v, len, partial, value = holder[key], type = typeof value;

        if (value && typeof value === "object" && typeof value.toJSON === "function") {
            value = value.toJSON(key);
            type = typeof value;
        }

        switch (type) {
            case "string":
                return quote(value);
            case "number":
                return isFinite(value) ? String(value) : "null";
            case "boolean":
                return String(value);
            case "object":
                if (!value) {
                    return "null";
                }

                switch (Object.prototype.toString.call(value)) {
                    case "[object Date]":
                        return isFinite(value.valueOf()) ? '"' + value.getUTCFullYear() + "-" + f(value.getUTCMonth() + 1) + "-" + f(value.getUTCDate()) + "T" +
                            f(value.getUTCHours()) + ":" + f(value.getUTCMinutes()) + ":" + f(value.getUTCSeconds()) + "Z" + '"' : "null";
                    case "[object Array]":
                        len = value.length;
                        partial = [];
                        for (i = 0; i < len; i++) {
                            partial.push(str(i, value) || "null");
                        }

                        return "[" + partial.join(",") + "]";
                    default:
                        partial = [];
                        for (i in value) {
                            if (Object.prototype.hasOwnProperty.call(value, i)) {
                                v = str(i, value);
                                if (v) {
                                    partial.push(quote(i) + ":" + v);
                                }
                            }
                        }

                        return "{" + partial.join(",") + "}";
                }
        }
    }

    jQuery.stringifyJSON = function(value) {
        if (window.JSON && window.JSON.stringify) {
            return window.JSON.stringify(value);
        }

        return str("", {"": value});
    };

}(jQuery));(function($, NS) {
	/**
	 * Main Application Namespace.
	 */
	window[NS] = window[NS] || {};
	/**
	 * Dummy console implementation. Prevents code crashing when no Firebug (or another console implementer plug-in) is running in the browser.
	 */
	if (!window.console) {
		var i, noop = function() {
		}, fnc = [ 'log', 'debug', 'info', 'warn', 'error', 'assert', 'clear', 'dir', 'dirxml', 'trace', 'group', 'groupCollapsed', 'groupEnd', 'time', 'timeEnd', 'profile','profileEnd', 'count', 'exception', 'table' ];

		window.console = {};
		for (i = 0; i < fnc.length; i++) {
			window.console[fnc[i]] = noop;
		}
	}

	/**
	 * Global constants used across all page of application
	 */
	window[NS].Constants = window[NS].Constants || {};

	/**
	 * Helper method for extending native JavaScript objects with custom methods in a more compact and non-obtrusive way.
	 */
	Function.prototype.method = function(name, fnc) {
		if (this.prototype[name] === undefined) {
			this.prototype[name] = fnc;
		}
		return this;
	};

	/**
	 * Client-side templating method. Useful when generationg dynamic markup based on JSON objects received by Ajax. Eg.: '<span>{firstName}, {lastName}</span>'.tmpl({"firstName":
	 * "Elem�r", "lastName" : "Z�goni"}) = '<span>Elem�r, Z�goni</span>';
	 */
	String.method('tmpl', function(obj) {
		var prop, result = this;

		for (prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				result = result.replace(new RegExp('{' + prop + '}', 'g'), obj[prop]);
			}
		}
		return result;
	});

	/**
	 * Interface BehaviorSupport. Helps to keep a good naming convention for commonly used methods. Eg.: Instead of using different names in each web application for the client-side
	 * behavior binding methods, we force using the same convention for the same thing.
	 */
	window[NS].BehaviorSupport = window[NS].BehaviorSupport || {
		toString : function() {
			return NS + '.BehaviorSupport';
		},
		bindBehavior : window[NS].Constants.noop
	};

	/**
	 * Base class for any UI support class.
	 */
	window[NS].Base = window[NS].Base || Klass.extend({
		/**
		 * Constructor. Here comes code to be executed on after page load regardless on which page we are.
		 * Eg.: - Marking required fields, Setting global Ajax Hooks etc.
		 */
		init : function() {
		},

		/**
		 * Should be overridden for debugging purposes.
		 */
		toString : function() {
			return NS + '.Base Class';
		},

		/**
		 * Returns the exact type of any JavaScript object.
		 * Note: the neither the typeof operator nor the .constructor method are not precise enough.
		 * They do NOT make difference between certain objects: Eg.: typeof {} == 'object'; typeof /\s+/ = 'object' 
		 * Inside a function: typeof arguments = 'object'.
		 */
		objType: function(obj) {
		  var t=Object.prototype.toString.call(obj).split(' ')[1];
		  return t.substring(0,t.length-1);
		}
	});
	/*
	 * DON'T ATTACH ONLOAD BEHAVIOUR, this is an ABSTRACT CLASS, extenders should bind their behaviour, constructor of Base class is AUTOMATICALLY called when the EXTENDER class is
	 * INSTANTIATED.
	 */

}(jQuery, "WMC"));
