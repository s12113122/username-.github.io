webpackJsonp([1],{"1G+2":function(t,e){},"E+nw":function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";function n(t){a("1G+2")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r={name:"app"},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},c=[],o={render:i,staticRenderFns:c},l=o,u=a("VU/8"),d=n,v=u(r,l,!1,d,null,null),f=v.exports,p=a("YaEn");a("Jmt5");s.a.config.productionTip=!1,new s.a({el:"#app",router:p.a,template:"<App/>",components:{App:f}})},PmyR:function(t,e){},YaEn:function(t,e,a){"use strict";(function(t){var n=a("7+uW"),s=a("/ocq"),r=a("dAjm");n.a.use(s.a),e.a=new s.a({mode:"history",base:t,routes:[{path:"/",name:"index",component:r.a}]})}).call(e,"/")},dAjm:function(t,e,a){"use strict";function n(t){a("E+nw")}function s(t){a("vQzv")}function r(t){a("PmyR")}var i={data:function(){return{}}},c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"container__header"},[a("div",{staticClass:"header"},[a("p",{staticClass:"header__title"},[t._v("晉嘉a觀光時間")]),t._v(" "),a("p",{staticClass:"header__title"},[t._v("高雄市-觀光景點")])])])}],l={render:c,staticRenderFns:o},u=l,d=a("VU/8"),v=n,f=d(i,u,!1,v,"data-v-140722ca",null),p=f.exports,g=a("Xxa5"),_=a.n(g),m=a("exGp"),h=a.n(m),P=a("mtWM"),C=a.n(P),w={data:function(){return{items:[],posts:[],countOfPage:15,currPage:1,filter:""}},computed:{filteredRows:function(){var t=this.filter.toLowerCase();return""!==this.filter.trim()?this.items.filter(function(e){return e.Add.toLowerCase().indexOf(t)>-1}):this.items},pageStart:function(){return(this.currPage-1)*this.countOfPage},totalPage:function(){return Math.ceil(this.filteredRows.length/this.countOfPage)}},created:function(){this.getjson()},methods:{setPage:function(t){t<=0||t>this.totalPage||(this.currPage=t)},getjson:function(){var t=this;return h()(_.a.mark(function e(){var a;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("https://data.kaohsiung.gov.tw/opendata/DownLoad.aspx?Type=2&CaseNo1=AV&CaseNo2=1&FileType=1&Lang=C&FolderType=");case 3:a=e.sent,t.items=a.data,console.log(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,t,[[0,8]])}))()}}},x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",[t._v("搜尋: EX:小港區 ")]),t._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],attrs:{type:"text",placeholder:"輸入過濾區域"},domProps:{value:t.filter},on:{input:function(e){e.target.composing||(t.filter=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("h4",[t._v("共有"+t._s(t.filteredRows.length)+"個景點")])]),t._v(" "),t._l(t.filteredRows.slice(t.pageStart,t.pageStart+t.countOfPage),function(e,n){return a("div",{staticClass:"newsItem col-12 col-sm-6 col-md-4 col-lg-4 "},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-block"},[a("a",{attrs:{href:"#"}},[a("div",{staticClass:"image"},[a("img",{attrs:{src:e.Picture1}})]),t._v(" "),a("h2",[t._v("景點名稱："+t._s(e.Name))]),t._v(" "),a("div",{staticClass:"summary"},[a("p",[a("b",[t._v("地址："+t._s(e.Add))])]),a("p"),a("p",[a("b",[t._v("電話："+t._s(e.Tel))])]),t._v(" "),a("p",[a("b",[t._v("時間:"+t._s(e.Opentime))])])])])])])])})],2),t._v(" "),a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:1===t.currPage},on:{click:function(e){e.preventDefault(),t.setPage(t.currPage-1)}}},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Prev")])]),t._v(" "),t._l(t.totalPage,function(e){return a("li",{staticClass:"page-item",class:{active:t.currPage===e},on:{click:function(a){a.preventDefault(),t.setPage(e)}}},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(t._s(e))])])}),t._v(" "),a("li",{staticClass:"page-item",class:{disabled:t.currPage===t.totalPage},on:{click:function(e){e.preventDefault(),t.setPage(t.currPage+1)}}},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("Next")])])],2)])])},b=[],k={render:x,staticRenderFns:b},y=k,E=a("VU/8"),R=s,A=E(w,y,!1,R,"data-v-964e7658",null),N=A.exports,O={data:function(){return{}},components:{Header:p,Body:N}},F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"a"},[a("Header"),t._v(" "),a("Body")],1)},j=[],T={render:F,staticRenderFns:j},V=T,$=a("VU/8"),D=r,H=$(O,V,!1,D,"data-v-0db93f4a",null);e.a=H.exports},vQzv:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0ea41532981fde28115b.js.map