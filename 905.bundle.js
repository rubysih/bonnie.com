"use strict";(self.webpackChunktoy_customer=self.webpackChunktoy_customer||[]).push([[905],{2905:(n,t,e)=>{e.r(t),e.d(t,{default:()=>j});var r,i,u,o=e(7554),c=e(3582),a=e(6540),f=e(3511),l=e(3377),s=e(4422),d=e(2264),y=e(4848);function p(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,i,u,o,c=[],a=!0,f=!1;try{if(u=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;a=!1}else for(;!(a=(r=u.call(e)).done)&&(c.push(r.value),c.length!==t);a=!0);}catch(n){f=!0,i=n}finally{try{if(!a&&null!=e.return&&(o=e.return(),Object(o)!==o))return}finally{if(f)throw i}}return c}}(n,t)||function(n,t){if(n){if("string"==typeof n)return h(n,t);var e={}.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?h(n,t):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=Array(t);e<t;e++)r[e]=n[e];return r}function g(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var m=o.Ay.div(r||(r=g(["\n  max-width: 400px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n"]))),b=o.Ay.div(i||(i=g(["\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n"]))),v=(0,o.Ay)(d.DrawOutBtn)(u||(u=g(["\n  font-size: 0.8rem;\n"])));function j(){var n=(0,f.d)((function(){return f.c.signInOptions})),t=(0,f.d)((function(){return f.c.isSigned})),e=(0,f.d)((function(){return f.c.signInResult})),r=p((0,a.useState)([]),2),i=r[0],u=r[1],o=p((0,a.useState)(!1),2),d=o[0],h=o[1];return(0,l.A)(),(0,a.useEffect)((function(){f.c.getSignIn()}),[]),(0,a.useEffect)((function(){if(n){var t=n.map((function(n){return{option:n.title}}));u(t)}}),[n,t]),(0,y.jsxs)(c.A,{children:[!!i.length&&(0,y.jsx)(m,{children:(0,y.jsx)(s.Wheel,{mustStartSpinning:d,data:i,backgroundColors:["#aaa","#fff"],fontSize:16,radiusLineWidth:0,fontWeight:500,outerBorderWidth:2,spinDuration:.3,prizeNumber:e||0})}),(0,y.jsx)(b,{children:t?"本日已完成簽到":(0,y.jsx)(v,{onClick:function(){t||(f.c.signIn(),h(!0))},children:"簽到"})})]})}},3377:(n,t,e)=>{e.d(t,{A:()=>c});var r=e(3511),i=e(6540),u=e(7767),o=e(1459);function c(){var n=(0,r.d)((function(){return r.c.isLogged})),t=(0,u.Zp)();(0,i.useEffect)((function(){n||t(o.Ay.login)}),[n])}}}]);