"use strict";(self.webpackChunktoy_customer=self.webpackChunktoy_customer||[]).push([[86],{86:(e,n,r)=>{r.r(n),r.d(n,{default:()=>A});var t=r(7554),i=r(6622),a=r(6540),s=r(3511),c=r(5526);const d="/reading-page-poc/assets/src/static/trophy.png",o="/reading-page-poc/assets/src/static/medal.png";var l,p,u,m=r(4353),f=r.n(m),x=r(7767),h=r(5588),g=r(1459),j=r(4848);function v(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var y=c.A.Column,w=t.Ay.div(l||(l=v(["\n  overflow-y: auto;\n  .ant-table-wrapper {\n    min-width: 500px;\n  }\n"]))),k=t.Ay.div(p||(p=v(["\n  font-size: 1.25rem;\n  display: flex;\n  flex-direction: row;\n  img {\n    width: 3.215rem;\n    height: 3.215rem;\n    max-width: 50px;\n    margin-right: 15px;\n    cursor: pointer;\n  }\n  div {\n    display: flex;\n    align-items: center;\n  }\n"]))),z=t.Ay.div(u||(u=v(["\n  span + span {\n    margin-left: 5px;\n  }\n"])));function A(){var e=(0,s.d)((function(){return s.c.rankingList})),n=(0,x.Zp)();return(0,a.useEffect)((function(){s.c.getRankingList()}),[]),(0,j.jsx)(i.A,{children:(0,j.jsx)(w,{children:!!e&&(0,j.jsxs)(c.A,{dataSource:e,pagination:!1,children:[(0,j.jsx)(y,{title:"暱稱",render:function(e){var r=e.prizeLevel,t=e.customerName,i=e.commodityId,a=0===r?d:o,s=(0,h.tW)(g.Ay.commodity,{commodityId:i});return(0,j.jsxs)(k,{children:[(0,j.jsx)("img",{src:a,onClick:function(){return n(s)}}),(0,j.jsx)("div",{children:t})]})}},"nickname"),(0,j.jsx)(y,{title:"時間",dataIndex:"drawDate",render:function(e){return f()(e).format("YYYY/MM/DD HH:mm")}},"drawDate"),(0,j.jsx)(y,{title:"獲得賞品",render:function(e){var n=e.prizeName,r=e.prizeLevelView;return(0,j.jsxs)(z,{children:["獲得 ",(0,j.jsx)("span",{children:r}),(0,j.jsx)("span",{children:n})]})}},"prizeName")]})})})}}}]);