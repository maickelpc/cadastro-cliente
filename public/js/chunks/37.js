(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{GJ2D:function(t,a,e){"use strict";e("bsxc")},bsxc:function(t,a,e){var s=e("lyd4");"string"==typeof s&&(s=[[t.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(s,o);s.locals&&(t.exports=s.locals)},f4S6:function(t,a,e){"use strict";e.r(a);var s=new(e("gR0X").h),o={data:function(){return{dados:[],filtro:{ordenar:"id",ordem:"asc",page:1,per_page:50,texto:"",tipo:""},paginacao:{current_page:0,total:0,last_page:0,from:0,to:0,per_page:50},debounce:null,objetoModal:null,sucessoDeletar:null,erroDeletar:null}},mounted:function(){this.buscar()},methods:{debounceBusca:function(){var t=this;clearTimeout(this.debounce),this.debounce=setTimeout((function(){t.navegar(1)}),800)},buscar:function(){var t=this;s.listar(this.filtro).then((function(a){t.$data.dados=a.data.data,t.$data.paginacao=a.data,t.$data.filtro.page=a.data.current_page,t.$data.paginacao.per_page=a.data.per_page}))},navegar:function(t){this.filtro.page=t,this.buscar()}}},i=(e("GJ2D"),e("KHd+")),r=Object(i.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"page-title-box d-flex align-items-center justify-content-between"},[e("h4",{staticClass:"mb-0 font-size-18"},[t._v("Cadastro de Contas Recorrentes")]),t._v(" "),e("div",{staticClass:"page-title-right"},[e("router-link",{staticClass:"btn btn-outline-primary waves-effect waves-light",attrs:{to:{name:"contasRecorrentesLancar"}}},[e("i",{staticClass:"bx bxs-plus-square font-size-16 align-middle mr-2"}),t._v(" Novo\n                      ")])],1)])])]),t._v(" "),e("div",{staticClass:"row",staticStyle:{padding:"10px"}},[e("div",{staticClass:"col-sm-12 col-md-3"},[e("label",[t._v("Mostrar  \n          "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.filtro.per_page,expression:"filtro.per_page"}],staticClass:"custom-select custom-select-sm form-control form-control-sm",on:{input:t.debounceBusca,change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.filtro,"per_page",a.target.multiple?e:e[0])}}},[e("option",{domProps:{value:10}},[t._v("10")]),t._v(" "),e("option",{domProps:{value:25}},[t._v("25")]),t._v(" "),e("option",{domProps:{value:50}},[t._v("50")]),t._v(" "),e("option",{domProps:{value:100}},[t._v("100")])])])]),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-3"},[t._v("\n               \n      ")]),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-4"},[e("label",{staticStyle:{width:"90%"}},[t._v("Buscar por:\n              "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.filtro.texto,expression:"filtro.texto"}],staticClass:"form-control form-control-sm",attrs:{autofocus:"",type:"text",placeholder:"Descrição"},domProps:{value:t.filtro.texto},on:{input:[function(a){a.target.composing||t.$set(t.filtro,"texto",a.target.value)},t.debounceBusca]}})])]),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-2"},[e("label",{staticStyle:{width:"90%"}},[t._v("Filtrar:\n          "),e("button",{staticClass:"btn btn-outline-primary btn-sm btn-block",on:{click:function(a){return t.navegar(1)}}},[e("span",{staticClass:"bx bx-search-alt"})])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table mb-0"},[t._m(0),t._v(" "),e("tbody",t._l(t.dados,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.id))]),t._v(" "),e("td",[t._v(t._s(a.parceiro.apelido))]),t._v(" "),e("td",[t._v(t._s(a.descricao))]),t._v(" "),e("td",[t._v(t._s(a.periodicidade))]),t._v(" "),e("td",[t._v(t._s(a.qtde_futuras))]),t._v(" "),e("td",[a.ativo?e("span",{staticClass:"badge badge-soft-primary"},[t._v("Sim")]):e("span",{staticClass:"badge badge-soft-dark"},[t._v("Não")])]),t._v(" "),e("td",[e("router-link",{staticClass:"btn btn-outline-success waves-effect waves-light",staticStyle:{padding:"3px 12px 3px 12px"},attrs:{to:{name:"contasRecorrentesEditar",params:{id:a.id}},title:"Editar"}},[e("i",{staticClass:"mdi mdi-pencil d-block font-size-12"})])],1)])})),0),t._v(" "),e("tfoot",[e("tr",[e("td",{attrs:{colspan:"10000"}},[e("paginacao-componente",{attrs:{source:t.paginacao},on:{navigate:function(a){return t.navegar(a)}}})],1)])])])])])])])])])}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("Id")]),t._v(" "),e("th",[t._v("Fornecedor")]),t._v(" "),e("th",[t._v("Descrição")]),t._v(" "),e("th",[t._v("Periodicidade")]),t._v(" "),e("th",[t._v("Futuras")]),t._v(" "),e("th",[t._v("Ativo")]),t._v(" "),e("th",[t._v("Ações")])])])}],!1,null,"3f00c0b6",null);a.default=r.exports},lyd4:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,"tr[data-v-3f00c0b6]:hover{background-color:#eff2f7}",""])}}]);
//# sourceMappingURL=37.js.map