!function(s){function n(n){for(var t,e,r=n[0],a=n[1],i=n[2],o=0,u=[];o<r.length;o++)e=r[o],l[e]&&u.push(l[e][0]),l[e]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(s[t]=a[t]);for(f&&f(n);u.length;)u.shift()();return p.push.apply(p,i||[]),c()}function c(){for(var n,t=0;t<p.length;t++){for(var e=p[t],r=!0,a=1;a<e.length;a++){var i=e[a];0!==l[i]&&(r=!1)}r&&(p.splice(t--,1),n=o(o.s=e[0]))}return n}var e={},l={5:0},p=[];function o(n){if(e[n])return e[n].exports;var t=e[n]={i:n,l:!1,exports:{}};return s[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=s,o.c=e,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)o.d(e,r,function(n){return t[n]}.bind(null,r));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="dist";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=n,t=t.slice();for(var a=0;a<t.length;a++)n(t[a]);var f=r;p.push([62,0]),c()}({10:function(n,t,e){"use strict";var r=e(0),a=e(3),i=e(5),o=e.n(i),u=e(6),s={name:"Footer",computed:{currentYear:function(){return(new Date).getFullYear().toString()},gitHubUserLink:function(){return"https://github.com/hiroto-k"}}},c=e(1);var l=function(n){e(7)},p=Object(c.a)(s,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"footer"}},[e("div",{staticClass:"container"},[e("p",{staticClass:"footer-text"},[n._v("\n      © 2015-"+n._s(n.currentYear)+"\n        "),e("a",{attrs:{href:n.gitHubUserLink}},[n._v("\n          Hiroto-K\n        ")])])])])},[],!1,l,"data-v-2695b10a",null).exports;e(15);r.a.use(a.b),a.a.localize("ja",o.a),r.a.use(u.a),r.a.component("page-footer",p)},13:function(n,t,e){var r,a,i,o,u;r=window,a=document,i="ga",r.GoogleAnalyticsObject=i,r.ga=r.ga||function(){(r.ga.q=r.ga.q||[]).push(arguments)},r.ga.l=1*new Date,o=a.createElement("script"),u=a.getElementsByTagName("script")[0],o.async=1,o.src="https://www.google-analytics.com/analytics.js",u.parentNode.insertBefore(o,u),ga("create","UA-73752623-2","auto"),ga("send","pageview")},53:function(n,t,e){var r=e(54);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e(11).default)("a342f11a",r,!0,{})},54:function(n,t,e){(n.exports=e(9)(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},62:function(n,t,e){"use strict";e.r(t);var r=e(0),a={name:"TrainNumberCalc",data:function(){return{trainNumber:null,trainType:null}},computed:{validateRules:function(){return{numeric:!0,between:{min:1,max:9999}}},isRenderTrainType:function(){return null!==this.trainType},hasErrors:function(){return this.errors.has("freightNumber")},errorMessage:function(){return this.errors.first("freightNumber")},inputClass:function(){return this.hasErrors?"is-invalid":"is-valid"},splitNumber:function(){return this.trainNumber.toString().padStart(4,"0").split("").map(function(n){return parseInt(n)})},isPassengerSpecial:function(){return 6<=this.splitNumber[0]},isFreightSpecial:function(){return 8<=this.splitNumber[0]}},methods:{changeInput:function(){var t=this;this.$validator.validate().then(function(n){return n&&""!==t.trainNumber?t.updateType():t.trainType=null,n}).catch(function(){})},updateType:function(){this.trainType=this.getType()},getType:function(){return this.splitNumber[2]<5?this.getPassengerType():this.getFreightType()},getPassengerType:function(){var n=this.splitNumber,t=this.isPassengerSpecial;return 0===n[1]?"".concat(t?"臨":"","特急客"):(0!==n[0]||0!==n[1])&&n[2]<=1?"".concat(t?"臨":"","急客"):0!==n[1]&&2<=n[2]?"".concat(t?"臨":"","客"):"不明"},getFreightType:function(){var n=this.splitNumber,t=this.isFreightSpecial,e="";if(0===n[1]){var r=n[2]<=6?"A":"B";e="".concat(t?"臨":"","高速貨").concat(r)}else e=(n[0]<=1||t)&&5===n[2]?"".concat(t?"臨":"","高速貨C"):6<=n[2]&&n[2]<=8?"".concat(t?"臨":"","専貨A"):9===n[2]?"".concat(t?"臨":"","専貨B"):"不明";return e}}},i=e(1);var o=function(n){e(53)},u=Object(i.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-jumbotron",[e("h1",[t._v("列車番号から種別計算")]),t._v(" "),e("p",{staticClass:"lead"},[t._v("\n    1〜4ケタの列番から列車種別を計算。\n  ")]),t._v(" "),t.isRenderTrainType?e("b-alert",{attrs:{variant:"info",show:""}},[t._v("\n    "+t._s(t.trainType)+"\n  ")]):t._e(),t._v(" "),e("b-form",{attrs:{autocomplete:"off"},on:{submit:function(n){return n.preventDefault(),(!1)(n)}}},[e("b-form-group",{attrs:{id:"inputGroup1",label:"列車番号 (1〜4ケタの数字)","label-for":"freightNumber"}},[e("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:t.validateRules,expression:"validateRules"}],staticClass:"form-control",class:t.inputClass,attrs:{"data-vv-as":"列車番号",type:"text",name:"freightNumber",id:"freightNumber",placeholder:"列車番号"},nativeOn:{keyup:function(n){return t.changeInput(n)},keydown:function(n){return t.changeInput(n)}},model:{value:t.trainNumber,callback:function(n){t.trainNumber=n},expression:"trainNumber"}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.hasErrors,expression:"hasErrors"}],staticClass:"invalid-feedback"},[t._v("\n        "+t._s(t.errorMessage)+"\n      ")])],1)],1)],1)},[],!1,o,"data-v-49640c42",null).exports;e(10),e(13);new r.a({el:"#app",template:"\n    <b-container>\n      <TrainNumberCalc></TrainNumberCalc>\n      <page-footer></page-footer>\n    </b-container>\n  ",components:{TrainNumberCalc:u}})},7:function(n,t,e){var r=e(8);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e(11).default)("037d9ec3",r,!0,{})},8:function(n,t,e){(n.exports=e(9)(!1)).push([n.i,"\nhtml[data-v-2695b10a], body[data-v-2695b10a] {\n  height: 100%;\n}\n#footer[data-v-2695b10a] {\n  margin-bottom: 10px;\n  height: 60px;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  background-color: #f5f5f5;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-bottom: 0px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.footer-text[data-v-2695b10a] {\n  margin: 20px 0;\n  line-height: 60px;\n}\n",""])}});