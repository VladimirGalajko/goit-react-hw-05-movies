"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[324],{881:function(n,t,e){e.d(t,{Hg:function(){return i},IQ:function(){return f},Jh:function(){return l},on:function(){return s},zv:function(){return p}});var r=e(861),a=e(757),u=e.n(a),c=e(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="40253258481181f95ffd462298505f67",i=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/week?api_key=".concat(o));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(o,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},324:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,a,u,c,o=e(861),i=e(439),s=e(757),p=e.n(s),f=e(168),l=e(867),v=l.ZP.ul(r||(r=(0,f.Z)(["\n  list-style-type: none;\n  padding: 0;\n"]))),d=l.ZP.li(a||(a=(0,f.Z)(["\n  margin-bottom: 20px;\n  padding: 15px;\n  background-color: #f8f8f8;\n  border-radius: 8px;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),h=l.ZP.h3(u||(u=(0,f.Z)(["\n  font-size: 18px;\n  margin-bottom: 10px;\n\n  span {    \n    color: #935858;\n    font-size: 18px;\n    margin-right: 5px;\n  }\n"]))),x=l.ZP.p(c||(c=(0,f.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n"]))),g=e(184),m=function(n){var t=n.reviews;return 0===(null===t||void 0===t?void 0:t.length)?(0,g.jsx)("h3",{children:"Reviews missing"}):(0,g.jsx)(v,{children:t.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,g.jsxs)(d,{children:[(0,g.jsxs)(h,{children:[(0,g.jsx)("span",{children:"Author:"})," ",e]}),(0,g.jsx)(x,{children:r})]},t)}))})},w=e(881),Z=e(791),k=e(689),b=function(){var n=(0,k.UO)(),t=(0,Z.useState)([]),e=(0,i.Z)(t,2),r=e[0],a=e[1];return(0,Z.useEffect)((function(){var t=function(){var t=(0,o.Z)(p().mark((function t(){var e;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,w.Jh)(n.movId);case 3:e=t.sent,a(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("warn: "+t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,g.jsx)(m,{reviews:r})}}}]);
//# sourceMappingURL=324.5ce86be8.chunk.js.map