$(document).ready(async()=>{

    var wrapElements=async()=>{
        /* wrap important elements (such as code)*/
        $(".middle").wrap("<div class='container'></div>");
        $("code").wrap("<pre></pre>");
        $("[class$='-icon']").each(function(){a=$(this).attr("class").split(" ").pop().replace("-icon","");$(this).prepend(`<i class="icon fa fa-${a}"></i>`)});
    }

    var setThings = {
        GitHub:async()=>{
            /* Get github repos and put them into the "#githubRepos" div */
            data = await fetch("https://api.github.com/users/TheBotlyNoob/repos")
                .then((response) => response.json())
                .then(data => {
                    return JSON.parse(JSON.stringify(data));
                })
                .catch(error => {
                    console.error(error);
                });
            for (i = 0 ; i < data.length ; i++) {
                currentGitHub = data[i];
                $("#githubRepos").append(`<div class="githubLinkContainer"><span><a class="githubLink" href="${currentGitHub.html_url}" target="_blank">${currentGitHub.name}, Issues: ${currentGitHub.open_issues}, Forks: ${currentGitHub.forks}</span><br><span class="githubDesc">${currentGitHub.description ?? ''}</span></a>`);
            }
        },

        YouTube:async()=>{
            data = await fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCyQEWcesl042F-EvVZsVWOh5Mw2ABId64&channelId=UCBpQy7-ZNMHhRBQ0gcHGcBw&part=snippet,id&order=date&maxResults=20")
                .then((response) => response.json())
                .then(data => {
                    return JSON.parse(JSON.stringify(data));
                })
                .catch(error => {
                    console.error(error);
                });
            for (i = 0 ; i < data.items?.length-1 /*using -1 so that it doesn't show my channel name*/ ; i++) {
                currentYouTube = data.items[i];
               $("#youtubeVids").append(`<span><a class="youtubeLink" href="https://youtu.be/${currentYouTube.id.videoId}" target="_blank">${currentYouTube.snippet.title}<img class="youtubeImage" src="${currentYouTube.snippet.thumbnails.default.url}" alt="YouTube Thumbnail"></img></a></span>`);
                
            }
        },

        Cursors:async()=>{
            /* Credits: Browserify/Watchify, and ani-cursor (all on npmjs.com) */
            !function(){return function t(r,n,e){function i(a,u){if(!n[a]){if(!r[a]){var h="function"==typeof require&&require;if(!u&&h)return h(a,!0);if(o)return o(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var f=n[a]={exports:{}};r[a][0].call(f.exports,function(t){return i(r[a][1][t]||t)},f,f.exports,t,r,n,e)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<e.length;a++)i(e[a]);return i}}()({1:[function(t,r,n){"use strict";var e=this&&this.__read||function(t,r){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var e,i,o=n.call(t),a=[];try{for(;(void 0===r||r-- >0)&&!(e=o.next()).done;)a.push(e.value)}catch(t){i={error:t}}finally{try{e&&!e.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a},i=this&&this.__spread||function(){for(var t=[],r=0;r<arguments.length;r++)t=t.concat(e(arguments[r]));return t};Object.defineProperty(n,"__esModule",{value:!0}),n.convertAniBinaryToCSS=void 0;var o=t("./parser"),a=1e3/60;n.convertAniBinaryToCSS=function(t,r){var n=function(t){var r,n=o.parseAni(t),e=null!==(r=n.rate)&&void 0!==r?r:n.images.map(function(){return n.metadata.iDispRate}),u=e.reduce(function(t,r){return t+r},0),h=n.images.map(function(t){return{url:(n=t,r=n,e=window.btoa(String.fromCharCode.apply(String,i(r))),"data:image/x-win-bitmap;base64,"+e),percents:[]};var r,n,e}),s=0;return e.forEach(function(t,r){var e=n.seq?n.seq[r]:r;h[e].percents.push(s/u*100),s+=t}),{duration:u*a,frames:h}}(r),e="ani-cursor-"+h();return"\n    @keyframes "+e+" {\n        "+n.frames.map(function(t){var r=t.url;return t.percents.map(function(t){return t+"%"}).join(", ")+" { cursor: url("+r+"), auto; }"}).join("\n")+"\n    }\n    "+t+":hover {\n        animation: "+e+" "+n.duration+"ms step-end infinite;\n    }\n   "};var u=0,h=function(){return u++}},{"./parser":2}],2:[function(t,r,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.parseAni=void 0;var e=t("riff-file"),i=t("byte-data"),o={bits:32,be:!1,signed:!1,fp:!1};n.parseAni=function(t){var r=new e.RIFFFile;r.setSignature(t);var n=r.signature;if("ACON"!==n.format)throw new Error('Expected format. Expected "ACON", got "'+n.format+'"');function a(t,n){var e=r.findChunk(t);return null==e?null:n(e)}var u=a("anih",function(r){var n=i.unpackArray(t,o,r.chunkData.start,r.chunkData.end);return{cbSize:n[0],nFrames:n[1],nSteps:n[2],iWidth:n[3],iHeight:n[4],iBitCount:n[5],nPlanes:n[6],iDispRate:n[7],bfAttributes:n[8]}});if(null==u)throw new Error("Did not find anih");var h=a("rate",function(r){return i.unpackArray(t,o,r.chunkData.start,r.chunkData.end)}),s=a("seq ",function(r){return i.unpackArray(t,o,r.chunkData.start,r.chunkData.end)}),f=r.findChunk("LIST",!0),c=null==f?void 0:f.find(function(t){return"fram"===t.format});if(null==c)throw new Error("Did not find fram LIST");var p=c.subChunks.slice(0,u.nFrames).map(function(r){if("icon"!==r.chunkId)throw new Error("Unexpected chunk type in fram: "+r.chunkId);return t.slice(r.chunkData.start,r.chunkData.end)}),d=null,l=null,v=null==f?void 0:f.find(function(t){return"INFO"===t.format});return null!=v&&v.subChunks.forEach(function(r){switch(r.chunkId){case"INAM":d=i.unpackString(t,r.chunkData.start,r.chunkData.end);break;case"IART":l=i.unpackString(t,r.chunkData.start,r.chunkData.end)}}),{images:p,rate:h,seq:s,metadata:u,artist:l,title:d}}},{"byte-data":3,"riff-file":4}],3:[function(t,r,n){(function(t){(function(){!function(){if(!Object.defineProperty||!function(){try{return Object.defineProperty({},"x",{}),!0}catch(t){return!1}}()){var t=Object.defineProperty;Object.defineProperty=function(r,n,e){if(t)try{return t(r,n,e)}catch(t){}if(r!==Object(r))throw TypeError("Object.defineProperty called on non-object");return Object.prototype.__defineGetter__&&"get"in e&&Object.prototype.__defineGetter__.call(r,n,e.get),Object.prototype.__defineSetter__&&"set"in e&&Object.prototype.__defineSetter__.call(r,n,e.set),"value"in e&&(r[n]=e.value),r}}}();try{Object.getOwnPropertyDescriptor({t:"o"},"t")}catch(t){Object.getOwnPropertyDescriptor=function(t,r){return null!=("function"==typeof t.__lookupGetter__&&"function"==typeof t.__lookupSetter__?t.__lookupGetter__(r)||t.__lookupSetter__(r):null)?{configurable:!0,enumerable:!0,get:t.__lookupGetter__(r),set:t.__lookupSetter__(r)}:{configurable:!0,writable:!0,enumerable:!0,value:t[r]}}}!function(n){n=n||{};var e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,r,n){t!=Array.prototype&&t!=Object.prototype&&(t[r]=n.value)},i="undefined"!=typeof window&&window===this?this:void 0!==t&&null!=t?t:this;function o(t,r,n,e){if((e=void 0===e?t.length:e)%r)throw Error("Bad buffer length.");for(n=void 0===n?0:n;n<e;n+=r){var i=t,o=r,a=n;o--;for(var u=0;u<o;u++){var h=i[a+u];i[a+u]=i[a+o],i[a+o]=h,o--}}}function a(t,r,n){n=void 0===n?0:n;for(var e=0,i=t.length;e<i;e++){var o=t.codePointAt(e);if(128>o)r[n]=o,n++;else{var a=0,u=0;for(2047>=o?(a=1,u=192):65535>=o?(a=2,u=224):1114111>=o&&(a=3,u=240,e++),r[n]=(o>>6*a)+u,n++;0<a;)r[n]=128|o>>6*(a-1)&63,n++,a--}}return n}function u(t,r,n){this.bits=t,this.b=8>t?1:Math.ceil(t/8),this.max=Math.pow(2,t)-1,this.min=0;var e=8-(1+(t-1|7)-t);this.c=Math.pow(2,0<e?e:8)-1,this.unpack=this.h,void 0!==r&&r&&(this.max=Math.pow(2,t)/2-1,this.min=-this.max-1,this.unpack=this.g),void 0!==n&&n&&(this.a=this.f)}function h(t,r,n){n=void 0===n?0:n;for(var e=0,i=0;i<t.b;i++)e+=r[n+i]*Math.pow(256,i);return e}function s(t,r){this.b=t,this.c=r,this.a=(1<<t-1)-1,this.f=Math.ceil((t+r)/8),this.g=Math.pow(2,this.a+1),this.h=t+r,this.i=Math.pow(2,-(8*this.f-1-t))}function f(t){var r=Math.floor(t);return.5>(t-=r)?r:.5<t?r+1:r%2?r+1:r}function c(t,r,n,e,i){e=void 0===e?0:e,i=b((r=r||{}).bits,r.fp,r.signed,void 0!==i&&i);var a=Math.ceil(r.bits/8),u=0,h=e;try{for(var s=t.length;u<s;u++)e=i.pack(n,t[u],e);r.be&&o(n,a,h,e)}catch(r){v(r,t[u],u)}return e}function p(t,r,n,e,i,a,u){e=void 0===e?0:e,i=void 0===i?t.length:i,a=void 0!==a&&a,u=b((r=r||{}).bits,r.fp,r.signed,void 0!==u&&u);var h=Math.ceil(r.bits/8),s=(i-e)%h;if(a&&(s||t.length<h))throw Error("Bad buffer length");i-=s,a=0,s=e;try{for(r.be&&o(t,h,e,i);s<i;s+=h,a++)n[a]=u.unpack(t,s);r.be&&o(t,h,e,i)}catch(r){v(r,t.slice(s,s+h),s)}}function d(t,r,n,e,i){return c([t],r,n,void 0===e?0:e,void 0!==i&&i)}function l(t,r,n,e,i,o){var a=[];return p(t,r,a,void 0===n?0:n,e=void 0===e?t.length:e,void 0!==i&&i,void 0!==o&&o),a}function v(t,r,n){throw t.message=t.varructor.name+" at index "+n+": "+r,t}function b(t,r,n,e){if(r){if(!t||16!==t&&32!==t&&64!==t)throw Error("Unsupported type: float, bits: "+t)}else if(!t||1>t||53<t)throw Error("Unsupported type: int, bits: "+t);return r&&16===t?new s(5,11):r&&32==t?new s(8,23):r&&64==t?new s(11,52):new u(t,n,e)}(function(t,r){if(r){for(var n=i,o=t.split("."),a=0;a<o.length-1;a++){var u=o[a];u in n||(n[u]={}),n=n[u]}(u=r(a=n[o=o[o.length-1]]))!=a&&null!=u&&e(n,o,{configurable:!0,writable:!0,value:u})}})("String.prototype.codePointAt",function(t){return t||function(t){if(null==this)throw new TypeError("The 'this' value for String.prototype.codePointAt must not be null or undefined");var r=this.length;if(0<=(t=Number(t)||0)&&t<r){t|=0;var n=this.charCodeAt(t);return 55296>n||56319<n||t+1===r?n:56320>(t=this.charCodeAt(t+1))||57343<t?n:1024*(n-55296)+t+9216}}}),Object.defineProperty(n,"__esModule",{value:!0}),u.prototype.pack=function(t,r,n){if(n=void 0===n?0:n,r!=r||r.varructor!=Number)throw new TypeError;r=this.a(r),t[n]=255&(0>r?r+Math.pow(2,this.bits):r),n++;for(var e=2,i=this.b;e<i;e++)t[n]=255&Math.floor(r/Math.pow(2,8*(e-1))),n++;return 8<this.bits&&(t[n]=Math.floor(r/Math.pow(2,8*(this.b-1)))&this.c,n++),n},u.prototype.h=function(t,r){return this.a(h(this,t,void 0===r?0:r))},u.prototype.g=function(t,r){var n=h(this,t,void 0===r?0:r);return n>this.max&&(n-=2*this.max+2),this.a(n)},u.prototype.a=function(t){if(t>this.max||t<this.min)throw new RangeError;return t},u.prototype.f=function(t){return t>this.max?this.max:t<this.min?this.min:t},s.prototype.pack=function(t,r,n){if("number"!=typeof r)throw new TypeError;Math.abs(r)>this.g-2*this.h&&(r=0>r?-1/0:1/0);var e=0>((r=+r)||1/r)?1:0>r?1:0;r=Math.abs(r);var i=Math.min(Math.floor(Math.log(r)/Math.LN2),1023),o=f(r/Math.pow(2,i)*Math.pow(2,this.c));for(r!=r?(o=Math.pow(2,this.c-1),i=(1<<this.b)-1):0!==r&&(r>=Math.pow(2,1-this.a)?(2<=o/Math.pow(2,this.c)&&(i+=1,o=1),i>this.a?(i=(1<<this.b)-1,o=0):(i+=this.a,o=f(o)-Math.pow(2,this.c))):(o=f(r/Math.pow(2,1-this.a-this.c)),i=0)),(r=[]).push(e),e=this.b;0<e;--e)r[e]=i%2?1:0,i=Math.floor(i/2);for(e=r.length,i=this.c;0<i;--i)r[e+i]=o%2?1:0,o=Math.floor(o/2);for(e=r.join(""),o=this.f+n-1,r=n;o>=n;)t[o]=parseInt(e.substring(0,8),2),e=e.substring(8),o--,r++;return r},s.prototype.unpack=function(t,r){for(var n=(1<<this.b)-1,e="",i=this.f-1;0<=i;i--){var o=t[i+r].toString(2);e+="00000000".substring(o.length)+o}return i="1"==e.charAt(0)?-1:1,e=e.substring(1),o=parseInt(e.substring(0,this.b),2),e=e.substring(this.b),o==n?0!==parseInt(e,2)?NaN:1/0*i:(0===o?(o+=1,n=parseInt(e,2)):n=parseInt("1"+e,2),i*n*this.i*Math.pow(2,o-this.a))},n.pack=function(t,r,n){var e=[];return d(t,r,e,0,void 0!==n&&n),e},n.packArray=function(t,r,n){var e=[];return c(t,r,e,0,void 0!==n&&n),e},n.packArrayTo=c,n.packString=function(t){var r=[];return a(t,r,0),r},n.packStringTo=function(t,r,n){return a(t,r,void 0===n?0:n)},n.packTo=d,n.unpack=function(t,r,n,e){return l(t,r,n=void 0===n?0:n,n+Math.ceil(r.bits/8),!0,void 0!==e&&e)[0]},n.unpackArray=l,n.unpackArrayTo=p,n.unpackString=function(t,r,n){var e=void 0===r?0:r;for(n=void 0===(n=void 0===n?t.length:n)?t.length:n,r="",e=void 0===e?0:e;e<n;){var i=128,o=191,a=!1,u=t[e++];if(0<=u&&127>=u)r+=String.fromCharCode(u);else{var h=0;194<=u&&223>=u?h=1:224<=u&&239>=u?(h=2,224===t[e]&&(i=160),237===t[e]&&(o=159)):240<=u&&244>=u?(h=3,240===t[e]&&(i=144),244===t[e]&&(o=143)):a=!0,u&=(1<<8-h-1)-1;for(var s=0;s<h;s++)(t[e]<i||t[e]>o)&&(a=!0),u=u<<6|63&t[e],e++;a?r+=String.fromCharCode(65533):65535>=u?r+=String.fromCharCode(u):(u-=65536,r+=String.fromCharCode(55296+(u>>10&1023),56320+(1023&u)))}}return r},void 0!==r?r.exports=n:"function"==typeof define&&define.amd?define(["exports"],n):void 0!==t&&(t.byteData=n)}()}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],4:[function(t,r,n){var e,i="function"==typeof Object.create?Object.create:function(t){function r(){}return r.prototype=t,new r};if("function"==typeof Object.setPrototypeOf)e=Object.setPrototypeOf;else{var o;t:{var a={};try{a.__proto__={h:!0},o=a.h;break t}catch(t){}o=!1}e=o?function(t,r){if(t.__proto__=r,t.__proto__!==r)throw new TypeError(t+" is not extensible");return t}:null}var u=e;var h=this;function s(t){function r(){this.container="",this.chunkSize=0,this.format="",this.signature=null,this.head=0,this.uInt32={bits:32,be:!1,signed:!1,fp:!1},this.supported_containers=["RIFF","RIFX"]}function n(t,r,n){if(r){if(!t||16!==t&&32!==t&&64!==t)throw Error("Unsupported type: float, bits: "+t);r=this.a(t)}else{if(!t||1>t||53<t)throw Error("Unsupported type: int, bits: "+t);r=n?new e(t):new o(t)}this.b=r,this.offset=Math.ceil(t/8)}function e(t){return(t=o.call(this,t)||this).max=Math.pow(2,t.bits)/2-1,t.min=-t.max-1,t}function o(t){this.bits=t,this.c=8>t?1:Math.ceil(t/8),this.max=Math.pow(2,t)-1,this.min=0}function a(t,r){this.a=t,this.c=(1<<t-1)-1,this.b=Math.ceil((t+r)/8),this.f=Math.pow(2,-(8*this.b-1-t))}function h(t,r,n,e){if((e=void 0===e?t.length:e)%r)throw Error("Bad buffer length.");for(n=void 0===n?0:n;n<e;n+=r){var i=t,o=r,a=n;o--;for(var u=0;u<o;u++){var h=i[a+u];i[a+u]=i[a+o],i[a+o]=h,o--}}}function s(t,r,n){var e=void 0===r?0:r;for(n=void 0===(n=void 0===n?t.length:n)?t.length:n,r="",e=void 0===e?0:e;e<n;){var i=128,o=191,a=!1,u=t[e++];if(0<=u&&127>=u)r+=String.fromCharCode(u);else{var h=0;194<=u&&223>=u?h=1:224<=u&&239>=u?(h=2,224===t[e]&&(i=160),237===t[e]&&(o=159)):240<=u&&244>=u?(h=3,240===t[e]&&(i=144),244===t[e]&&(o=143)):a=!0,u&=(1<<8-h-1)-1;for(var s=0;s<h;s++)(t[e]<i||t[e]>o)&&(a=!0),u=u<<6|63&t[e],e++;a?r+=String.fromCharCode(65533):65535>=u?r+=String.fromCharCode(u):(u-=65536,r+=String.fromCharCode(55296+(u>>10&1023),56320+(1023&u)))}}return r}function f(t,r,e){var i=(e=void 0===e?0:e)+Math.ceil(r.bits/8),o=[],a=!0;e=void 0===(e=void 0===e?0:e)?0:e,i=void 0===(i=void 0===i?t.length:i)?t.length:i,a=void 0!==a&&a;var u=r||{},s=new n(u.bits,u.fp,u.signed),f=(i-e)%(r=s.offset);if(a&&(f||t.length<r))throw Error("Bad buffer length");i-=f,f=0,a=e;try{for(u.be&&h(t,r,e,i);a<i;a+=r,f++)o[f]=s.g(t,a);u.be&&h(t,r,e,i)}catch(n){throw(o=n).message=o.varructor.name+" at index "+a+": "+t.slice(a,a+r),o}return o[0]}a.prototype.g=function(t,r){for(var n=(1<<this.a)-1,e="",i=this.b-1;0<=i;i--){var o=t[i+r].toString(2);e+="00000000".substring(o.length)+o}return i="1"==e.charAt(0)?-1:1,e=e.substring(1),o=parseInt(e.substring(0,this.a),2),e=e.substring(this.a),o==n?0!==parseInt(e,2)?NaN:1/0*i:(0===o?(o+=1,n=parseInt(e,2)):n=parseInt("1"+e,2),i*n*this.f*Math.pow(2,o-this.c))},o.prototype.g=function(t,r){var n=this.b(t,void 0===r?0:r);return this.a(n),n},o.prototype.b=function(t,r){r=void 0===r?0:r;for(var n=0,e=0;e<this.c;e++)n+=t[r+e]*Math.pow(256,e);return n},o.prototype.a=function(t){if(t>this.max||t<this.min)throw new RangeError},function(t,r){if(t.prototype=i(r.prototype),t.prototype.varructor=t,u)u(t,r);else for(var n in r)if("prototype"!=n)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(r,n);e&&Object.defineProperty(t,n,e)}else t[n]=r[n]}(e,o),e.prototype.g=function(t,r){var n=o.prototype.b.call(this,t,void 0===r?0:r);return n=this.f(n),this.a(n),n},e.prototype.f=function(t){return t>this.max&&(t-=2*this.max+2),t},n.prototype.g=function(t,r){return this.b.g(t,void 0===r?0:r)},n.prototype.a=function(t){return 16===t?new a(5,11):32===t?new a(8,23):new a(11,52)},r.prototype.setSignature=function(t){if(this.head=0,this.container=this.readString(t,4),-1===this.supported_containers.indexOf(this.container))throw Error("Not a supported format.");this.uInt32.be="RIFX"===this.container,this.chunkSize=this.readUInt32(t),this.format=this.readString(t,4),this.signature={chunkId:this.container,chunkSize:this.chunkSize,format:this.format,subChunks:this.a(t),chunkData:{start:0,end:this.chunkSize}}},r.prototype.findChunk=function(t,r){r=void 0!==r&&r;for(var n=this.signature.subChunks,e=[],i=0;i<n.length;i++)if(n[i].chunkId==t){if(!r)return n[i];e.push(n[i])}return"LIST"==t&&e.length?e:null},r.prototype.readString=function(t,r){var n=s(t,this.head,this.head+r);return this.head+=r,n},r.prototype.readUInt32=function(t){return t=f(t,this.uInt32,this.head),this.head+=4,t},r.prototype.a=function(t){for(var r=[],n=this.head;n<=t.length-8;)r.push(this.f(t,n)),n=(n+=8+r[r.length-1].chunkSize)%2?n+1:n;return r},r.prototype.f=function(t,r){var n={chunkId:this.b(t,r),chunkSize:this.c(t,r)};return"LIST"==n.chunkId?(n.format=s(t,r+8,r+12),this.head+=4,n.subChunks=this.a(t)):(this.head=r+8+(n.chunkSize%2?n.chunkSize+1:n.chunkSize),n.chunkData={start:r+8,end:this.head}),n},r.prototype.b=function(t,r){return this.head+=4,s(t,r,r+4)},r.prototype.c=function(t,r){return this.head+=4,f(t,this.uInt32,r+4)},t.RIFFFile=r,Object.defineProperty(t,"__esModule",{value:!0})}"object"==typeof n&&void 0!==r?s(n):"function"==typeof define&&define.i?define(["exports"],s):s((h=h||self).riffFile={})},{}],5:[function(require,module,exports){

                d=require('ani-cursor').convertAniBinaryToCSS;

                a=async(selector,aniUrl)=>{response=await fetch(aniUrl);
                    data=new Uint8Array(await response.arrayBuffer());
                    style=document.createElement('style');
                    style.innerText = d(selector, data);
                    document.head.appendChild(style);}
                $("*").each(function(){b=$(this).css("cursor");c=$(this);

                    /* generate ids for elements that don't have them (needed for later use) */

                    if(!c.attr("id"))c.attr("id",`_${Math.random().toString(36).substr(2,9)}`);

                    switch(b) {
                        
                        /* check for animated cursors (this is where we need the ids) */

                        case("pointer"):a(`#${c.attr("id")}`,"/assets/cursors/pointer.ani");break;

                        case("move"):a(`#${c.attr("id")}`,"/assets/cursors/move.ani"); break;

                        case("progress"): a(`#${c.attr("id")}`,"/assets/cursors/progress.ani");break;

                        case("wait"):a(`#${c.attr("id")}`,"/assets/cursors/wait.ani");break;

                        case("up"):
                            a(`#${c.attr("id")}`,"/assets/cursors/up.ani");
                            break;

                        case("pen"):a(`#${c.attr("id")}`,"/assets/cursors/pen.ani");break;

                        case("e-resize"):a(`#${c.attr("id")}`,"/assets/cursors/ew-resize.ani");break;

                        case("w-resize"):a(`#${c.attr("id")}`,"/assets/cursors/ew-resize.ani");break;

                        case("nw-resize"):a(`#${c.attr("id")}`,"/assets/cursors/nwse-resize.ani");break;

                        case("se-resize"):a(`#${c.attr("id")}`,"/assets/cursors/nwse-resize.ani");break;

                        case("n-resize"):a(`#${c.attr("id")}`,"/assets/cursors/ns-resize.ani");break;

                        /* check for non animated cursors */

                        case("text"):c.css("cursor",`url("/assets/cursors/text.cur"),auto`);break;

                        case("help"):c.css("cursor",`url("/assets/cursors/text.cur"),auto`);break;

                        case("not-allowed"):c.css("cursor",`url("/assets/cursors/text.cur"),auto`);break;

                        case("crosshair"):c.css("cursor",`url("/assets/cursors/text.cur"),auto`);break;

                        /* either I havent put the cursor in either if statement or its the default cursor */

                        default:c.css("cursor",`url("/assets/cursors/default.cur"),auto`);break;
                    }
                });

        },{"ani-cursor":1}]},{},[5]);
        },
        Emojis:async()=>{
            /* WiP
            data = await fetch("https://raw.githubusercontent.com/github/gemoji/master/db/emoji.json")
            .then(response=>response.json())
            .then(data=>{
                return JSON.parse(JSON.stringify(data));
            })
            .catch(error=>{
                console.error(error);
            });
            $("*").each(function(){text=$(this).text();
                for (i = 0 ; i > data.length ; i++) {}
            });
            */
        },
}

    /* call previously set functions */
    await wrapElements();
    await setThings.GitHub();
    await setThings.YouTube();
    await setThings.Cursors();
    await setThings.Emojis();

});
