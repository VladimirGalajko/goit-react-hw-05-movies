"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[248],{881:function(n,e,t){t.d(e,{Hg:function(){return o},IQ:function(){return l},Jh:function(){return d},on:function(){return u},zv:function(){return p}});var r=t(861),a=t(757),i=t.n(a),s=t(340);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="40253258481181f95ffd462298505f67",o=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("trending/movie/week?api_key=".concat(c));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("search/movie?api_key=".concat(c,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},248:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r,a,i,s=t(439),c=t(791),o=t(168),u=t(867),p=u.ZP.img(r||(r=(0,o.Z)(["\n  max-width: 182px;\n  background: #424242;\n  border-radius: 15px;\n  margin-left: 20px;\n"]))),l=u.ZP.div(a||(a=(0,o.Z)(["\ndisplay: flex;\n\nspan {\n  font-weight:  bold;\n}\nul {\n  margin-left: 20px;\n    list-style-type: none;\n    padding: 0;\n\n    li {\n      margin-bottom: 10px;\n      max-width:500px;\n      p {\n        margin: 0;\n      }\n    }\n  }\n"]))),d=u.ZP.div(i||(i=(0,o.Z)(["\n  display: flex;\n  margin-left: 50px;\n  margin-top: 20px;\n  justify-content: center;\n  margin-bottom: 16px;\n  padding: 4px;\n  width: 80px;\n  border: none;\n  border-radius: 8px;\n  font-size: 12px;\n  text-transform: uppercase;\n  text-align: center;\n  background: linear-gradient(\n    141.22deg,\n    rgb(78, 74, 64) 9.4%,\n    rgb(180, 105, 90) 91.91%\n  );\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,\n    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;\n"]))),x=t(689),f=t(87),h=t(184),g=function(n){var e=n.movId,t=e.poster_path,r=e.title,a=e.overview,i=e.genres,s=e.vote_average,c=null===i||void 0===i?void 0:i.map((function(n){return n.name})).join(" "),o=(0,x.TH)().state;return o&&o.from&&(o="/",console.log(o)),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{children:(0,h.jsx)(f.rU,{to:o,children:"Go back"})}),(0,h.jsxs)(l,{children:[(0,h.jsx)(p,{src:"".concat(t?"https://image.tmdb.org/t/p/w500/"+t:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700"),alt:"get"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)("h1",{children:r})}),(0,h.jsx)("li",{children:(0,h.jsx)("h3",{children:c})}),(0,h.jsx)("li",{children:(0,h.jsxs)("p",{children:[(0,h.jsx)("span",{children:"Rating: "})," ",null===s||void 0===s?void 0:s.toFixed(1)]})}),(0,h.jsx)("li",{children:(0,h.jsxs)("p",{children:[(0,h.jsx)("span",{children:"Overview:"})," ",a]})})]})]}),(0,h.jsx)("h2",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(f.OL,{to:"cast",state:{from:"cast"},children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(f.OL,{to:"reviews",state:{from:"reviews"},children:"Reviews"})})]}),(0,h.jsx)(x.j3,{})]})},v=t(881),m=function(){var n=(0,x.UO)(),e=(0,c.useState)([]),t=(0,s.Z)(e,2),r=t[0],a=t[1];return(0,c.useEffect)((function(){(0,v.zv)(n.movId).then(a)}),[n]),(0,h.jsx)(g,{movId:r})}}}]);
//# sourceMappingURL=248.cf4108a9.chunk.js.map