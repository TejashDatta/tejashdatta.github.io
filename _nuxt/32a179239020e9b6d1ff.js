(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{229:function(t,e,n){var r=n(21);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},230:function(t,e,n){"use strict";var strong=n(231),r=n(229);t.exports=n(232)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=strong.getEntry(r(this,"Map"),t);return e&&e.v},set:function(t,e){return strong.def(r(this,"Map"),0===t?0:t,e)}},strong,!0)},231:function(t,e,n){"use strict";var r=n(23).f,o=n(82),c=n(134),l=n(38),f=n(132),d=n(133),v=n(101),h=n(136),m=n(102),_=n(19),y=n(99).fastKey,k=n(229),w=_?"_s":"size",j=function(t,e){var n,r=y(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,v){var h=t(function(t,r){f(t,h,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[w]=0,null!=r&&d(r,n,t[v],t)});return c(h.prototype,{clear:function(){for(var t=k(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[w]=0},delete:function(t){var n=k(this,e),r=j(n,t);if(r){var o=r.n,c=r.p;delete n._i[r.i],r.r=!0,c&&(c.n=o),o&&(o.p=c),n._f==r&&(n._f=o),n._l==r&&(n._l=c),n[w]--}return!!r},forEach:function(t){k(this,e);for(var n,r=l(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!j(k(this,e),t)}}),_&&r(h.prototype,"size",{get:function(){return k(this,e)[w]}}),h},def:function(t,e,n){var r,o,c=j(t,e);return c?c.v=n:(t._l=c={i:o=y(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=c),r&&(r.n=c),t[w]++,"F"!==o&&(t._i[o]=c)),t},getEntry:j,setStrong:function(t,e,n){v(t,e,function(t,n){this._t=k(t,e),this._k=n,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?h(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,h(1))},n?"entries":"values",!n,!0),m(e)}}},232:function(t,e,n){"use strict";var r=n(13),o=n(12),c=n(24),l=n(134),meta=n(99),f=n(133),d=n(132),v=n(21),h=n(22),m=n(103),_=n(59),y=n(104);t.exports=function(t,e,n,k,w,j){var O=r[t],S=O,x=w?"set":"add",C=S&&S.prototype,E={},P=function(t){var e=C[t];c(C,t,"delete"==t?function(a){return!(j&&!v(a))&&e.call(this,0===a?0:a)}:"has"==t?function(a){return!(j&&!v(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return j&&!v(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof S&&(j||C.forEach&&!h(function(){(new S).entries().next()}))){var N=new S,D=N[x](j?{}:-0,1)!=N,M=h(function(){N.has(1)}),I=m(function(t){new S(t)}),F=!j&&h(function(){for(var t=new S,e=5;e--;)t[x](e,e);return!t.has(-0)});I||((S=e(function(e,n){d(e,S,t);var r=y(new O,e,S);return null!=n&&f(n,w,r[x],r),r})).prototype=C,C.constructor=S),(M||F)&&(P("delete"),P("has"),w&&P("get")),(F||D)&&P(x),j&&C.clear&&delete C.clear}else S=k.getConstructor(e,t,w,x),l(S.prototype,n),meta.NEED=!0;return _(S,t),E[t]=S,o(o.G+o.W+o.F*(S!=O),E),j||k.setStrong(S,t,w),S}},234:function(t,e,n){"use strict";n(15),n(8),n(39),n(35),n(36);var r=n(1),o=(n(57),n(230),n(37),n(5),n(4),n(7),n(25),n(135),n(0)),c=n(100),l=n(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}var d=["sm","md","lg","xl"],v=d.reduce(function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t},{}),h=d.reduce(function(t,e){return t["offset"+Object(l.r)(e)]={type:[String,Number],default:null},t},{}),m=d.reduce(function(t,e){return t["order"+Object(l.r)(e)]={type:[String,Number],default:null},t},{}),_={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(m)};function y(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var k=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(source,!0).forEach(function(e){Object(r.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({cols:{type:[Boolean,String,Number],default:!1}},v,{offset:{type:[String,Number],default:null}},h,{order:{type:[String,Number],default:null}},m,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=k.get(l);return d||function(){var t,e;for(e in d=[],_)_[e].forEach(function(t){var r=n[t],o=y(e,t,r);o&&d.push(o)});var o=d.some(function(t){return t.startsWith("col-")});d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),k.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},235:function(t,e,n){var content=n(244);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("0bd1754c",content,!0,{sourceMap:!1})},243:function(t,e,n){"use strict";var r=n(235);n.n(r).a},244:function(t,e,n){(t.exports=n(10)(!1)).push([t.i,".tile-link .v-icon[data-v-529d3880]{transition:.4s;color:#bdbdbd}.tile-link:hover .v-icon[data-v-529d3880]{color:#283593!important}",""])},268:function(t,e,n){"use strict";n.r(e);var r={head:function(){return{title:"Contact Information"}},data:function(){return{index:0,items:[{icon:"mdi-email-outline",label:"tejashdatta@gmail.com",link:"mailto:tejashdatta@gmail.com",stay:!0},{icon:"mdi-linkedin-box",label:"LinkedIn",link:"https://www.linkedin.com/in/tejash-datta"},{icon:"mdi-github-circle",label:"Github",link:"https://github.com/TejashDatta"},{icon:"mdi-facebook",label:"Facebook",link:"https://www.facebook.com/tejash.datta"},{icon:"mdi-instagram",label:"Instagram",link:"https://www.instagram.com/tejashnottejas/"}]}},computed:{itemsSlice:function(){return this.items.slice(0,this.index)}},mounted:function(){var t=this;!function e(){t.index<t.items.length&&(t.index++,setTimeout(e,200))}()}},o=(n(243),n(44)),c=n(58),l=n.n(c),f=n(234),d=n(216),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"mb-5"},[t._v("Contact Me")]),t._v(" "),n("transition-group",{staticClass:"row no-gutters",attrs:{name:"fade",tag:"div"}},t._l(t.itemsSlice,function(e){return n("v-col",{key:e.label,staticClass:"text-center d-flex justify-center",attrs:{cols:"6",sm:"4"}},[n("div",{staticClass:"py-3 py-sm-12"},[n("a",{staticClass:"secondary--text tile-link",staticStyle:{"word-break":"break-all"},attrs:{href:e.link,target:e.stay?null:"_blank"}},[n("v-icon",{staticClass:"d-block",staticStyle:{"font-size":"90px"}},[t._v(t._s(e.icon))]),t._v(" "),n("h4",{staticClass:"title"},[t._v(t._s(e.label))])],1)])])}),1)],1)},[],!1,null,"529d3880",null);e.default=component.exports;l()(component,{VCol:f.a,VIcon:d.a})}}]);