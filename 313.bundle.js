"use strict";(self.webpackChunktoy_customer=self.webpackChunktoy_customer||[]).push([[313,144],{3144:(e,n,r)=>{r.r(n),r.d(n,{Button:()=>O,default:()=>N});var t,i,o,l,a,c=r(9616),s=r(6622),u=r(6540),d=r(7513),f=r(1459),p=r(7767),h=r(4848);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function y(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function x(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?y(Object(r),!0).forEach((function(n){b(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function b(e,n,r){return(n=function(e){var n=function(e,n){if("object"!=m(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,"string");if("object"!=m(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(n)?n:n+""}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}function g(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var v=c.Ay.div(t||(t=g(["\n  display: flex;\n  flex-direction: row;\n"]))),w=c.Ay.div(i||(i=g(["\n  display: flex;\n  padding: 20px;\n  flex: 1;\n  flex-direction: column;\n  h4 {\n    margin: 10px 0;\n  }\n  .highlight {\n    color: rgb(208, 74, 38);\n  }\n"]))),O=c.Ay.button.attrs({type:"submit"})(o||(o=g(["\n  cursor: pointer;\n  color: #fff;\n  margin: 20px 0;\n  border-radius: 25px;\n  font-weight: 700;\n  text-align: center;\n  background-color: #d04a26;\n  border: 3px solid #9a3418;\n  padding: 7px 20px;\n  font-size: 14px;\n  ","\n"])),(function(e){return e.isLogin&&"\n  background-color: #000;\n  color:#f4c221;\n  border-color:#f4c221;\n"})),S=c.Ay.form(l||(l=g(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),A=c.Ay.div(a||(a=g(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 10px;\n  label {\n    font-weight: 700;\n    line-height: 20px;\n    margin: 0 0 5px;\n    font-size: 14px;\n  }\n  input {\n    line-height: 32px;\n    padding: 4px 15px;\n    border: 1px solid #999;\n    border-radius: 25px;\n  }\n"]))),P={defaultData:{account:"",password:""}};function N(){var e,n,r=(e=(0,u.useState)(P.defaultData),n=2,function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,o,l,a=[],c=!0,s=!1;try{if(o=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;c=!1}else for(;!(c=(t=o.call(r)).done)&&(a.push(t.value),a.length!==n);c=!0);}catch(e){s=!0,i=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(s)throw i}}return a}}(e,n)||function(e,n){if(e){if("string"==typeof e)return j(e,n);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),t=r[0],i=r[1],o=(0,d.d)((function(){return d.c.isLogged})),l=(0,p.Zp)();function a(e){var n=e.target,r=n.name,o=n.value;i(x(x({},t),{},b({},r,o)))}return(0,u.useEffect)((function(){o&&l(f.Ay.index)}),[o]),(0,h.jsx)(s.A,{children:(0,h.jsxs)(v,{children:[(0,h.jsx)(w,{children:(0,h.jsxs)(S,{onSubmit:function(e){e.preventDefault(),d.c.login(t)},children:[(0,h.jsxs)(A,{children:[(0,h.jsx)("label",{htmlFor:"account",children:"帳號"}),(0,h.jsx)("input",{type:"text",id:"account",name:"account",placeholder:"請輸入帳號",onChange:a})]}),(0,h.jsxs)(A,{children:[(0,h.jsx)("label",{htmlFor:"password",children:"密碼"}),(0,h.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"請輸入密碼",onChange:a})]}),(0,h.jsx)(O,{isLogin:!0,children:"立即登入"})]})}),(0,h.jsxs)(w,{children:[(0,h.jsx)("h4",{children:"歡迎來到 賞翻天 官方網站！"}),(0,h.jsx)("p",{children:"如果你還沒有帳號~"}),(0,h.jsx)(O,{onClick:function(){return l(f.Ay.register)},children:"立即註冊"}),(0,h.jsxs)("p",{children:["加入 ",(0,h.jsx)("span",{className:"highlight",children:"賞翻天"})," ","會員後，你將獲得無數刺激和創新的功能。 只需線上儲值，就能立即獲得豐富的回饋！ 免去親自走訪門市的麻煩，趕緊來試試你的抽獎運氣吧！ 夢幻A賞、最後賞將直接送到你家！"]})]})]})})}},313:(e,n,r)=>{r.r(n),r.d(n,{default:()=>L});var t,i,o,l,a,c=r(9616),s=r(6622),u=r(7513),d=r(7767),f=r(1459),p=r(6540),h=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},m=r(3144),y=r(4848);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function b(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function j(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?b(Object(r),!0).forEach((function(n){g(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function g(e,n,r){return(n=function(e){var n=function(e,n){if("object"!=x(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,"string");if("object"!=x(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==x(n)?n:n+""}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function v(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,i,o,l,a=[],c=!0,s=!1;try{if(o=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;c=!1}else for(;!(c=(t=o.call(r)).done)&&(a.push(t.value),a.length!==n);c=!0);}catch(e){s=!0,i=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(s)throw i}}return a}}(e,n)||function(e,n){if(e){if("string"==typeof e)return w(e,n);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=Array(n);r<n;r++)t[r]=e[r];return t}function O(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var S,A,P=c.Ay.div(t||(t=O(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 10px;\n  ","\n\n  label {\n    font-weight: 700;\n    line-height: 20px;\n    margin: 0 0 5px;\n    font-size: 14px;\n  }\n  input {\n    line-height: 32px;\n    padding: 4px 15px;\n    border: 1px solid #999;\n    border-radius: 25px;\n  }\n"])),(function(e){return e.required&&"\n  :before {\n    content: '*';\n    color: red;\n  }\n"})),N=c.Ay.form(i||(i=O(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0;\n  input {\n    margin: 5px 0;\n  }\n  button {\n    margin: 5px 0;\n  }\n  "," + "," {\n    border-left: 1px solid rgb(238, 238, 238);\n  }\n"])),C,C),k=c.Ay.div(o||(o=O(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n"]))),C=c.Ay.div(l||(l=O(["\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  padding: 15px 30px;\n  "," "," {\n    padding-right: 0;\n    width: 30%;\n  }\n"])),k,P),D=c.Ay.div(a||(a=O(["\n  display: flex;\n  justify-content: center;\n"]))),F={defaultData:{account:"",password:"",confirmPassword:"",phoneNum:"",email:"",nickname:"",realName:"",districtNo:0,city:"",districtName:"",address:""},validate:function(e){for(var n in e){switch(console.log("key",n,e[n]),n){case"password":if(!e[n])return"".concat(e[n],"不可為空");if(r=e[n],/^[\s\S]{8,32}$/.test(r)&&/[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/.test(r))return"密碼格式錯誤";break;case"confirmPassword":if(e[n]!==e.password)return"確認密碼不符";break;case"email":if(!e[n])return"".concat(e[n],"不可為空");if(h(e[n]))return"email格式錯誤";break;case"account":case"phoneNum":case"nickname":case"realName":case"districtNo":case"city":case"districtName":if(!e[n])return"".concat(e[n],"不可為空");break;default:return!0}return null}var r}};function q(e){var n=e.onSubmit,r=v((0,p.useState)(F.defaultData),2),t=r[0],i=r[1],o=v((0,p.useState)(""),2),l=o[0],a=o[1];return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(N,{onSubmit:function(e){console.log("submit",e),e.preventDefault();var r=F.validate(t);console.log("submit",r),r?a(r):n(t)},children:[(0,y.jsxs)(k,{children:[(0,y.jsxs)(C,{children:[(0,y.jsxs)(P,{required:!0,children:[(0,y.jsx)("label",{htmlFor:"account",children:"帳號"}),(0,y.jsx)("input",{type:"text",id:"account",name:"account",placeholder:"請輸入帳號",onChange:c})]}),(0,y.jsxs)(P,{required:!0,children:[(0,y.jsx)("label",{htmlFor:"password",children:"密碼"}),(0,y.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"請輸入密碼",onChange:c})]}),(0,y.jsxs)(P,{required:!0,children:[(0,y.jsx)("label",{htmlFor:"confirmPassword",children:"確認密碼"}),(0,y.jsx)("input",{type:"password",id:"confirmPassword",name:"confirmPassword",placeholder:"請輸入確認密碼",onChange:c})]}),(0,y.jsxs)(P,{required:!0,children:[(0,y.jsx)("label",{htmlFor:"phoneNum",children:"手機"}),(0,y.jsx)("input",{type:"text",id:"phoneNum",name:"phoneNum",placeholder:"請輸入手機",onChange:c})]}),(0,y.jsxs)(P,{required:!0,children:[(0,y.jsx)("label",{htmlFor:"email",children:"E-mail"}),(0,y.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"請輸入電子郵件",onChange:c})]})]}),(0,y.jsxs)(C,{children:[(0,y.jsxs)(P,{required:!0,children:[(0,y.jsx)("label",{htmlFor:"nickname",children:"暱稱"}),(0,y.jsx)("input",{type:"text",id:"nickname",name:"nickname",placeholder:"請輸入暱稱",onChange:c})]}),(0,y.jsxs)(P,{required:!0,children:[(0,y.jsx)("label",{htmlFor:"realName",children:"收貨姓名"}),(0,y.jsx)("input",{type:"text",id:"realName",name:"realName",placeholder:"請輸入真實姓名",onChange:c})]}),(0,y.jsxs)(k,{children:[(0,y.jsxs)(P,{required:!0,children:[(0,y.jsx)("label",{htmlFor:"districtNo",children:"郵遞區號"}),(0,y.jsx)("input",{type:"text",id:"districtNo",name:"districtNo",placeholder:"請輸入郵遞區號",onChange:c})]}),(0,y.jsxs)(P,{required:!0,children:[(0,y.jsx)("label",{htmlFor:"city",children:"居住城市"}),(0,y.jsx)("input",{type:"text",id:"city",name:"city",placeholder:"請輸入居住城市",onChange:c})]}),(0,y.jsxs)(P,{required:!0,children:[(0,y.jsx)("label",{htmlFor:"districtName",children:"居住地區"}),(0,y.jsx)("input",{type:"text",id:"districtName",name:"districtName",placeholder:"請輸入居住地區",onChange:c})]})]}),(0,y.jsxs)(P,{required:!0,children:[(0,y.jsx)("label",{htmlFor:"address",children:"詳細地址"}),(0,y.jsx)("input",{type:"text",id:"address",name:"address",placeholder:"請輸入詳細地址",onChange:c})]})]})]}),(0,y.jsxs)(D,{children:[l&&(0,y.jsx)("span",{children:l}),(0,y.jsx)(m.Button,{isLogin:!0,children:"註冊成為會員"})]})]})});function c(e){var n=e.target,r=n.name,o=n.value;i(j(j({},t),{},g({},r,o)))}}function z(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var E=c.Ay.span(S||(S=z(["\n  color: red;\n  margin: 0 5px;\n"]))),I=c.Ay.div(A||(A=z(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0;\n  text-align: center;\n  h4 {\n    margin: 0 0 10px;\n  }\n"])));function L(){var e=(0,u.d)((function(){return u.c.isLogged})),n=(0,d.Zp)();return(0,p.useEffect)((function(){e&&n(f.Ay.index)}),[e]),(0,y.jsxs)(s.A,{children:[(0,y.jsxs)(I,{children:[(0,y.jsx)("h4",{children:"為避免您的賞品寄送權益，請務必如實填寫會員資料"}),(0,y.jsxs)("h4",{children:[(0,y.jsx)(E,{children:"*"}),"為必填項目"]})]}),(0,y.jsx)(q,{onSubmit:u.c.register})]})}}}]);