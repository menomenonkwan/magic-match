(this["webpackJsonpmagic-memory"]=this["webpackJsonpmagic-memory"]||[]).push([[0],[,,,,,,,,,,function(c,e,t){},function(c,e,t){},function(c,e,t){},,function(c,e,t){"use strict";t.r(e);var n=t(1),a=t.n(n),r=t(5),i=t.n(r),s=(t(10),t(3)),u=t(2),d=(t(11),t(12),t(0));function o(c){var e=c.card,t=c.handleChoice,n=c.flipped,a=c.disabled;return Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:n?"flipped":"",children:[Object(d.jsx)("img",{className:"front",src:e.src,alt:"card front"}),Object(d.jsx)("img",{className:"back",src:"/img/cover.png",alt:"card back",onClick:function(){a||t(e)}})]})})}var l=[{src:"/img/helmet-1.png",matched:!1},{src:"/img/potion-1.png",matched:!1},{src:"/img/ring-1.png",matched:!1},{src:"/img/scroll-1.png",matched:!1},{src:"/img/shield-1.png",matched:!1},{src:"/img/sword-1.png",matched:!1}];var j=function(){var c=Object(n.useState)([]),e=Object(u.a)(c,2),t=e[0],a=e[1],r=Object(n.useState)(0),i=Object(u.a)(r,2),j=i[0],m=i[1],b=Object(n.useState)(null),h=Object(u.a)(b,2),f=h[0],O=h[1],p=Object(n.useState)(null),g=Object(u.a)(p,2),v=g[0],x=g[1],N=Object(n.useState)(!1),k=Object(u.a)(N,2),S=k[0],M=k[1],w=function(){var c=[].concat(l,l).sort((function(){return Math.random()-.5})).map((function(c){return Object(s.a)(Object(s.a)({},c),{},{id:Math.random()})}));O(null),x(null),a(c),m(0)},C=function(c){f?x(c):O(c)};Object(n.useEffect)((function(){f&&v&&(M(!0),f.src===v.src?(a((function(c){return c.map((function(c){return c.src===f.src?Object(s.a)(Object(s.a)({},c),{},{matched:!0}):c}))})),y()):setTimeout((function(){return y()}),1e3))}),[f,v]);var y=function(){O(null),x(null),m((function(c){return c+1})),M(!1)};return Object(n.useEffect)((function(){w()}),[]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Magic Match"}),Object(d.jsx)("button",{onClick:w,children:"New Game"}),Object(d.jsx)("div",{className:"card-grid",children:t.map((function(c){return Object(d.jsx)(o,{card:c,handleChoice:C,flipped:c===f||c===v||c.matched,disabled:S},c.id)}))}),Object(d.jsxs)("p",{children:["Turns: ",j]})]})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.c1b5e379.chunk.js.map