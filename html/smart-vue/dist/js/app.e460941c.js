(function(t){function a(a){for(var n,s,r=a[0],c=a[1],l=a[2],m=0,p=[];m<r.length;m++)s=r[m],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(a);while(p.length)p.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],n=!0,r=1;r<e.length;r++){var c=e[r];0!==o[c]&&(n=!1)}n&&(i.splice(a--,1),t=s(s.s=e[0]))}return t}var n={},o={app:0},i=[];function s(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)s.d(e,n,function(a){return t[a]}.bind(null,n));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=a,r=r.slice();for(var l=0;l<r.length;l++)a(r[l]);var u=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"2e17":function(t,a,e){"use strict";var n=e("4ad9"),o=e.n(n);o.a},"4ad9":function(t,a,e){},"567f":function(t,a,e){"use strict";var n=e("69a7"),o=e.n(n);o.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),o=(e("0fae"),e("05af")),i=e.n(o),s=e("4897"),r=e.n(s),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},l=[],u={name:"pagina-inicial"},m=u,p=(e("5c0b"),e("2877")),d=Object(p["a"])(m,c,l,!1,null,null,null),f=d.exports,g=e("5530"),h=e("8c4f"),v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pagina-inicial"},[e("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[e("div",{staticClass:"clearfix text--center",attrs:{slot:"header"},slot:"header"},[e("h1",[t._v("Smarts Dashboard")])]),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[e("el-container",{staticClass:"text--center"},[e("el-main",[e("el-row",[e("el-col",{attrs:{span:24}},[e("el-button-group",[e("el-button",{attrs:{type:"primary",icon:"el-icon-arrow-down"},on:{click:function(a){return t.filtroBtn("menor-budget")}}},[t._v("Menor Budget")]),e("el-button",{attrs:{type:"primary",icon:"el-icon-arrow-up"},on:{click:function(a){return t.filtroBtn("maior-budget")}}},[t._v("Maior Budget")]),e("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.filtroBtn("asc")}}},[t._v("A-Z")]),e("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.filtroBtn("desc")}}},[t._v("Z-A")])],1)],1)],1),e("el-row",[e("el-col",{attrs:{span:24}},[e("br")])],1),e("el-row",[e("el-col",{attrs:{span:24}},[e("el-date-picker",{attrs:{type:"daterange","range-separator":" ","start-placeholder":"Início","end-placeholder":"Fim","value-format":"yyyy-MM-dd",format:"dd/MM/yyyy"},on:{input:function(a){return t.buscarCustomers(!0)}},model:{value:t.dataInicioFim,callback:function(a){t.dataInicioFim=a},expression:"dataInicioFim"}})],1)],1)],1)],1),e("div",{staticClass:"ctnListagem"},[e("el-select",{staticClass:"selectPaginacao",attrs:{id:"selectPaginacao",placeholder:"Paginação"},on:{input:function(a){return t.buscarCustomers(!1)}},model:{value:t.paginacao,callback:function(a){t.paginacao=a},expression:"paginacao"}},t._l([3,5,10],(function(t){return e("el-option",{key:t,attrs:{label:t,value:t}})})),1),e("div",{staticClass:"clearfix"}),e("br"),t._l(t.customers,(function(a){return e("el-card",{key:a._id,staticClass:"cardCustomer"},[e("el-row",[e("el-col",{staticClass:"text--center",attrs:{span:8}},[e("img",{key:a._id,attrs:{src:a.pictures[0].url+"?r="+1e5*Math.random(),alt:a.name.first+" "+a.name.last,title:a.name.first+" "+a.name.last},on:{click:function(e){return t.detalhesCustomer(a)}}})]),e("el-col",{attrs:{span:16}},[e("p",{staticClass:"nomeCustomer"},[t._v("Nome: "+t._s(a.name.first+" "+a.name.last))]),e("p",[t._v("Email: "+t._s(a.email))]),e("p",[t._v("Company: "+t._s(a.company))]),e("p",[t._v("Age: "+t._s(a.age))]),e("p",[t._v("Budget: "+t._s(a.budget))])])],1)],1)}))],2),e("div",{staticClass:"ctnControleNavegacao text--center"},[e("el-button",{attrs:{type:"primary",icon:"el-icon-arrow-left",disabled:t.paginaAtual<=1},on:{click:t.paginaAnterior}},[t._v("Anterior")]),t.totalPaginas>0?e("span",{staticClass:"contagemPaginacao"},[t._v("Página "+t._s(t.paginaAtual)+" de "+t._s(t.totalPaginas))]):t._e(),e("el-button",{attrs:{type:"primary",disabled:t.paginaAtual>=t.totalPaginas},on:{click:t.proximaPagina}},[t._v("Próximo "),e("i",{staticClass:"el-icon-arrow-right"})])],1)],1)])],1)},b=[],_=(e("d3b7"),e("bc3a")),y=e.n(_),C={name:"pagina-inicial",components:{},data:function(){return{loading:!1}},mounted:function(){this.buscarCustomers(!1)},methods:{buscarCustomers:function(t){var a=this;1==t&&(this.paginaAtual=1),this.loading=!0,y.a.get(this.endAPI()+"/api/Customers",{params:{page:this.paginaAtual,limit:this.paginacao,dataInicioFim:this.dataInicioFim,filtro:this.filtroBotoes}}).then((function(t){a.customers=t.data.customers,a.totalPaginas=t.data.totalPaginas})).finally((function(){return a.loading=!1}))},filtroBtn:function(t){this.filtroBotoes=t,this.buscarCustomers(!0)},proximaPagina:function(){this.paginaAtual<this.totalPaginas&&(this.paginaAtual++,this.buscarCustomers(!1),this.scrollResultados())},paginaAnterior:function(){this.paginaAtual>1&&(this.paginaAtual--,this.buscarCustomers(!1),this.scrollResultados())},scrollResultados:function(){var t=document.getElementById("selectPaginacao").getBoundingClientRect().top+window.scrollY;window.scroll({top:t,behavior:"smooth"})},detalhesCustomer:function(t){this.$router.push({name:"detalhes-customer",params:{customer:t}})},endAPI:function(){return void 0!=window.endAPI?window.endAPI:""}},computed:{paginaAtual:{get:function(){return this.$store.state.paginaAtual},set:function(t){this.$store.commit("paginaAtual",t)}},totalPaginas:{get:function(){return this.$store.state.totalPaginas},set:function(t){this.$store.commit("totalPaginas",t)}},paginacao:{get:function(){return this.$store.state.paginacao},set:function(t){this.$store.commit("paginacao",t)}},dataInicioFim:{get:function(){return this.$store.state.dataInicioFim},set:function(t){this.$store.commit("dataInicioFim",t)}},filtroBotoes:{get:function(){return this.$store.state.filtroBotoes},set:function(t){this.$store.commit("filtroBotoes",t)}},customers:{get:function(){return this.$store.state.customers},set:function(t){this.$store.commit("customers",t)}}}},w=C,P=(e("567f"),Object(p["a"])(w,v,b,!1,null,null,null)),A=P.exports,x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"detalhes-customer",attrs:{id:"detalhesCustomer"}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("h2",{staticClass:"nomeCustomer",attrs:{title:"ID: "+t.customer._id}},[e("i",{staticClass:"el-icon-user-solid"}),t._v(" "+t._s(t.customer.name.first+" "+t.customer.name.last)+", "+t._s(t.customer.age)+" anos - "+t._s(t.customer.company))]),e("el-button",{staticStyle:{float:"right"},attrs:{type:"warning"},on:{click:t.voltarInicio}},[e("i",{staticClass:"el-icon-arrow-left"}),t._v(" Voltar")])],1),e("div",[e("h2",[e("i",{staticClass:"el-icon-document"}),t._v(" Sobre")]),e("p",[t._v(t._s(t.customer.about))]),e("p",[e("b",[t._v("Origem:")]),t._v(" "+t._s(t.customer.channel))]),e("p",[e("b",[t._v("Budget:")]),t._v(" "+t._s(t.customer.budget))]),e("p",[e("b",[t._v("Data de registro:")]),t._v(" "+t._s(t._f("moment")(t.customer.registered,"DD/MM/YYYY HH:mm"))+"h")]),e("br"),e("el-carousel",{attrs:{interval:4e3,type:"card",height:"200px"}},t._l(t.customer.pictures,(function(a){return e("el-carousel-item",{key:t.customer._id+1e5*Math.random()},[e("img",{key:t.customer._id,attrs:{src:a.url+"?r="+1e5*Math.random(),alt:t.customer.name.first+" "+t.customer.name.last,title:t.customer.name.first+" "+t.customer.name.last}})])})),1),e("h2",[e("i",{staticClass:"el-icon-phone"}),t._v(" Dados para Contato")]),e("el-row",[e("el-col",{staticClass:"text--center",attrs:{span:12}},[e("a",{attrs:{target:"_blank",href:"mailto:"+t.customer.email}},[e("i",{staticClass:"el-icon-message"}),t._v(" "+t._s(t.customer.email))])]),e("el-col",{staticClass:"text--center",attrs:{span:12}},[e("a",{attrs:{target:"_blank",href:"tel:"+t.customer.phone}},[e("i",{staticClass:"el-icon-mobile-phone"}),t._v(" "+t._s(t.customer.phone))])])],1),e("br"),e("h2",[e("i",{staticClass:"el-icon-date"}),t._v(" Histórico de contatos")]),e("el-timeline",{attrs:{reverse:!0}},t._l(t.customer.contactTimeline,(function(a){return e("el-timeline-item",{key:a.id,attrs:{timestamp:t.$moment(a.date).format("DD/MM/YYYY HH:mm")}},[t._v(" "+t._s(a.broker)+" ")])})),1),e("h2",[e("i",{staticClass:"el-icon-location"}),t._v(" Localização")]),e("p",[t._v(t._s(t.customer.address))]),e("div",{staticClass:"mapa",attrs:{id:"mapa"}})],1)])],1)},k=[],B=(e("d81d"),e("b0c0"),{name:"detalhes-customer",components:{},data:function(){return{mapa:null,tileLayer:null}},props:["customer"],mounted:function(){this.inicializarMapa(),this.scrollTop()},methods:{inicializarMapa:function(){this.mapa=L.map("mapa").setView([this.customer.latitude,this.customer.longitude],6),this.tileLayer=L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",{maxZoom:18,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'}),this.tileLayer.addTo(this.mapa);var t={id:0,name:this.customer.name.first+" "+this.customer.name.last,type:"marker",coords:[this.customer.latitude,this.customer.longitude]};t.leafletObject=L.marker(t.coords).bindPopup(t.name),t.leafletObject.addTo(this.mapa)},voltarInicio:function(){this.$router.push("/")},scrollTop:function(){var t=document.getElementById("detalhesCustomer").getBoundingClientRect().top+window.scrollY;window.scroll({top:t,behavior:"smooth"})}}}),I=B,M=(e("2e17"),Object(p["a"])(I,x,k,!1,null,null,null)),O=M.exports;n["default"].use(h["a"]);var $=[{path:"/",name:"pagina-inicial",component:A},{path:"/detalhes-customer",name:"detalhes-customer",component:O,props:function(t){return Object(g["a"])({},t.params)}}],F=new h["a"]({routes:$}),j=F,S=e("2f62");n["default"].use(S["a"]);var Y=new S["a"].Store({state:{paginaAtual:1,totalPaginas:0,paginacao:3,dataInicioFim:null,filtroBotoes:null,customers:[]},mutations:{paginaAtual:function(t,a){t.paginaAtual=a},totalPaginas:function(t,a){t.totalPaginas=a},paginacao:function(t,a){t.paginacao=a},dataInicioFim:function(t,a){t.dataInicioFim=a},filtroBotoes:function(t,a){t.filtroBotoes=a},customers:function(t,a){t.customers=a}},actions:{paginaAtual:function(t,a){var e=t.commit;e("paginaAtual",a)},totalPaginas:function(t,a){var e=t.commit;e("totalPaginas",a)},paginacao:function(t,a){var e=t.commit;e("paginacao",a)},dataInicioFim:function(t,a){var e=t.commit;e("dataInicioFim",a)},filtroBotoes:function(t,a){var e=t.commit;e("filtroBotoes",a)},customers:function(t,a){var e=t.commit;e("customers",a)}},getters:{paginaAtual:function(t){return t.paginaAtual},totalPaginas:function(t){return t.totalPaginas},paginacao:function(t){return t.paginacao},dataInicioFim:function(t){return t.dataInicioFim},filtroBotoes:function(t){return t.filtroBotoes},customers:function(t){return t.customers}}}),T=e("5c96");r.a.use(i.a),n["default"].use(T),n["default"].use(e("2ead")),n["default"].config.productionTip=!1,new n["default"]({router:j,store:Y,render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var n=e("9c0c"),o=e.n(n);o.a},"69a7":function(t,a,e){},"9c0c":function(t,a,e){}});