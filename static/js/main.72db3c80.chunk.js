(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,o){},15:function(e,t,o){"use strict";o.r(t);var n=o(3),c=o.n(n),s=o(6),r=o(4),a=o(5),l=o(8),d=o(7),i=o(1),u=o.n(i),b=(o(13),o(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(l.a)(o,e);var t=Object(d.a)(o);function o(){var e;Object(r.a)(this,o);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={selectedGoods:[]},e.clearAll=function(){e.setState({selectedGoods:[]})},e.addItem=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(s.a)(e.selectedGoods),[t])}}))},e.removeItem=function(t){e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))},e.showGoodsList=function(){var t=e.state.selectedGoods,o=t.length;return 0===o?"No goods selected":1===o?"".concat(t[0]," is selected"):"".concat(t.slice(0,-1).join(", "),"\n      and ").concat(t.slice(-1)," are selected")},e}return Object(a.a)(o,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("h1",{className:"selection",children:[this.showGoodsList(),0===t.length?null:Object(b.jsx)("button",{className:"selection__clear",type:"button",onClick:function(){e.clearAll()},children:"X"})]}),Object(b.jsx)("ul",{children:j.map((function(o){var n=t.find((function(e){return e===o}));return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("li",{className:n?"goods__list--selected":"goods__list",children:[o,n?Object(b.jsx)("button",{className:"goods__button goods__button--remove",type:"button",onClick:function(){e.removeItem(o)},children:"Remove"}):Object(b.jsx)("button",{className:"goods__button goods__button--add",type:"button",onClick:function(){e.addItem(o)},children:"Add"})]},o)})}))})]})}}]),o}(u.a.Component);c.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.72db3c80.chunk.js.map