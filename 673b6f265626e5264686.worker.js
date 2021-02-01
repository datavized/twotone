!function(n){var t={};function e(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,a){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:a})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(a,r,function(t){return n[t]}.bind(null,r));return a},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s="./node_modules/eslint-loader/dist/cjs.js?!./src/engine/encoders/wav.worker.js")}({"./node_modules/eslint-loader/dist/cjs.js?!./src/engine/encoders/wav.worker.js":function(n,t,e){"use strict";e.r(t);var a=e("./node_modules/wav-encoder/index.js");const r=e.n(a).a.encode.sync;self.addEventListener("message",n=>{if(n.data.arrays){const t=function(n,t){const e=r({sampleRate:t,channelData:n});return new Blob([e],{type:"audio/wav"})}(n.data.arrays,n.data.sampleRate);self.postMessage({blob:t,requestId:n.data.requestId})}})},"./node_modules/wav-encoder/index.js":function(n,t,e){"use strict";function a(n,t){if(t=t||{},null===(n=function(n){var t={};if("number"!=typeof n.sampleRate)return null;if(!Array.isArray(n.channelData))return null;if(!(n.channelData[0]instanceof Float32Array))return null;return t.numberOfChannels=n.channelData.length,t.length=0|n.channelData[0].length,t.sampleRate=0|n.sampleRate,t.channelData=n.channelData,t}(n)))throw new TypeError("Invalid AudioData");var e=!(!t.floatingPoint&&!t.float),a=e?32:0|t.bitDepth||16,r=a>>3,i=n.length*n.numberOfChannels*r,o=new DataView(new Uint8Array(44+i).buffer),u=function(n){var t=0;return{int16:function(e){n.setInt16(t,e,!0),t+=2},uint16:function(e){n.setUint16(t,e,!0),t+=2},uint32:function(e){n.setUint32(t,e,!0),t+=4},string:function(e){for(var a=0,r=e.length;a<r;a++)n.setUint8(t++,e.charCodeAt(a))},pcm8:function(e){e=255*(.5*(e=Math.max(-1,Math.min(e,1)))+.5),e=0|Math.round(e),n.setUint8(t,e,!0),t+=1},pcm8s:function(e){e=Math.round(128*e)+128,e=Math.max(0,Math.min(e,255)),n.setUint8(t,e,!0),t+=1},pcm16:function(e){e=(e=Math.max(-1,Math.min(e,1)))<0?32768*e:32767*e,e=0|Math.round(e),n.setInt16(t,e,!0),t+=2},pcm16s:function(e){e=Math.round(32768*e),e=Math.max(-32768,Math.min(e,32767)),n.setInt16(t,e,!0),t+=2},pcm24:function(e){e=(e=Math.max(-1,Math.min(e,1)))<0?16777216+8388608*e:8388607*e;var a=(e=0|Math.round(e))>>0&255,r=e>>8&255,i=e>>16&255;n.setUint8(t+0,a),n.setUint8(t+1,r),n.setUint8(t+2,i),t+=3},pcm24s:function(e){e=Math.round(8388608*e);var a=(e=Math.max(-8388608,Math.min(e,8388607)))>>0&255,r=e>>8&255,i=e>>16&255;n.setUint8(t+0,a),n.setUint8(t+1,r),n.setUint8(t+2,i),t+=3},pcm32:function(e){e=(e=Math.max(-1,Math.min(e,1)))<0?2147483648*e:2147483647*e,e=0|Math.round(e),n.setInt32(t,e,!0),t+=4},pcm32s:function(e){e=Math.round(2147483648*e),e=Math.max(-2147483648,Math.min(e,2147483647)),n.setInt32(t,e,!0),t+=4},pcm32f:function(e){n.setFloat32(t,e,!0),t+=4}}}(o),s={formatId:e?3:1,floatingPoint:e,numberOfChannels:n.numberOfChannels,sampleRate:n.sampleRate,bitDepth:a};!function(n,t,e){var a=t.bitDepth>>3;n.string("RIFF"),n.uint32(e),n.string("WAVE"),n.string("fmt "),n.uint32(16),n.uint16(t.floatingPoint?3:1),n.uint16(t.numberOfChannels),n.uint32(t.sampleRate),n.uint32(t.sampleRate*t.numberOfChannels*a),n.uint16(t.numberOfChannels*a),n.uint16(t.bitDepth)}(u,s,o.buffer.byteLength-8);var f=function(n,t,e,a,r){var i=t.bitDepth,o=t.floatingPoint?"f":r.symmetric?"s":"",u="pcm"+i+o;if(!n[u])return new TypeError("Not supported bit depth: "+i);var s=n[u].bind(n),f=t.numberOfChannels,c=a.channelData;n.string("data"),n.uint32(e);for(var l=0,d=a.length;l<d;l++)for(var m=0;m<f;m++)s(c[m][l])}(u,s,i,n,t);if(f instanceof Error)throw f;return o.buffer}n.exports.encode=function(n,t){return new Promise((function(e){e(a(n,t))}))},n.exports.encode.sync=a}});
//# sourceMappingURL=673b6f265626e5264686.worker.js.map