"use strict";(self.webpackChunktoy_customer=self.webpackChunktoy_customer||[]).push([[783],{5783:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p});var n=r(3582),o=r(3511),i=r(824),u=r(8798),a=r(5878),c=r(6540),l=r(4848);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=f(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==f(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function p(){var t,e,r=(0,o.d)((function(){return o.c.commodities})),f=(t=(0,c.useState)(a.L9.OPENING),e=2,function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return b(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),p=f[0],m=f[1];return(0,c.useEffect)((function(){var t=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({category:a.XJ.SELF_MADE,status:p},a.XP);o.c.getCommodities(t)}),[p]),r?(0,l.jsxs)(n.A,{children:[(0,l.jsx)(i.A,{data:r.data,status:p,setStatus:m}),(0,l.jsx)(u.A,{onChange:function(t,e){var r={category:a.XJ.SELF_MADE,pageNumber:t,pageSize:e};o.c.getCommodities(r)},totalCount:r.totalCount})]}):(0,l.jsx)(n.A,{})}},8798:(t,e,r)=>{r.d(e,{A:()=>s});var n,o,i,u=r(66),a=r(7554),c=r(5878),l=r(4848),f=(0,a.Ay)(u.A)(n||(o=["\n  text-align: right;\n"],i||(i=o.slice(0)),n=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(i)}}))));function s(t){var e=t.onChange,r=t.totalCount;return(0,l.jsx)(f,{defaultCurrent:c.XP.pageNumber,total:r,defaultPageSize:c.XP.pageSize,showSizeChanger:!1,onChange:e})}}}]);