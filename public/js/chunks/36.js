(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"3qOc":function(t,a,e){"use strict";e.r(a);var s=new(e("gR0X").c),o={data:function(){return{receita:[],despesa:[],timer:null,buscando:!1,anos:[(new Date).getFullYear()],meses:[{mes:1,descricao:"Janeiro"},{mes:2,descricao:"Fevereiro"},{mes:3,descricao:"Março"},{mes:4,descricao:"Abril"},{mes:5,descricao:"Maio"},{mes:6,descricao:"Junho"},{mes:7,descricao:"Julho"},{mes:8,descricao:"Agosto"},{mes:9,descricao:"Setembro"},{mes:10,descricao:"Outubro"},{mes:11,descricao:"Novembro"},{mes:12,descricao:"Dezembro"}],filtro:{ano:(new Date).getFullYear(),mes:null,estilo:"simplificado",detalhes_conta_pagar_entrantes:!1,detalhes_conta_pagar_acumulado:!1,detalhes_conta_receber_entrantes:!1,detalhes_conta_receber_acumulado:!1,filtro_conta_pagar_entrantes:"TODOS",filtro_conta_receber_entrantes:"TODOS",nivel:4},dados:null}},methods:{debounceBusca:function(){var t=this;clearTimeout(this.timer),this.timer=setTimeout((function(){t.buscarDados()}),800)},buscarDados:function(){var t=this;if(!this.buscando){this.buscando=!0;var a=JSON.parse(JSON.stringify(this.filtro));a.mes=a.mes.mes,s.fechamentoMensal(a).then((function(a){var e=a.data;e.contas_receber_entrantes=e.contas_receber_entrantes.map((function(t){return t.valor_total=Number(t.valor_total),t.valor_pago=Number(t.valor_pago),t.saldo=t.valor_total-t.valor_pago,t})),e.contas_pagar_entrantes=e.contas_pagar_entrantes.map((function(t){return t.valor_total=Number(t.valor_total),t.valor_pago=Number(t.valor_pago),t.saldo=t.valor_total-t.valor_pago,t})),e.contas_receber_acumulado=e.contas_receber_acumulado.map((function(t){return t.valor_total=Number(t.valor_total),t.valor_pago=Number(t.valor_pago),t.saldo=t.valor_total-t.valor_pago,t})),e.contas_pagar_acumulado=e.contas_pagar_acumulado.map((function(t){return t.valor_total=Number(t.valor_total),t.valor_pago=Number(t.valor_pago),t.saldo=t.valor_total-t.valor_pago,t})),t.dados=e})).finally((function(){return t.buscando=!1}))}},buscarAnos:function(){var t=this;s.buscarAnos().then((function(a){t.anos=a.data}))},imprimir_fechamento_mensal:function(){var t=JSON.parse(JSON.stringify(this.filtro));return t.mes=t.mes.mes,s.link_fechamento_mensal(t)}},computed:{contas_pagar_entrantes_total:function(){return this.dados.contas_pagar_entrantes?this.dados.contas_pagar_entrantes.reduce((function(t,a){return t+a.valor_total}),0):0},contas_pagar_entrantes_pago:function(){return this.dados.contas_pagar_entrantes?this.dados.contas_pagar_entrantes.reduce((function(t,a){return t+a.valor_pago}),0):0},contas_pagar_entrantes_saldo:function(){return this.contas_pagar_entrantes_total-this.contas_pagar_entrantes_pago},contas_pagar_acumulado_total:function(){return this.dados.contas_pagar_acumulado?this.dados.contas_pagar_acumulado.reduce((function(t,a){return t+a.valor_total}),0):0},contas_pagar_acumulado_pago:function(){return this.dados.contas_pagar_acumulado?this.dados.contas_pagar_acumulado.reduce((function(t,a){return t+a.valor_pago}),0):0},contas_pagar_acumulado_saldo:function(){return this.contas_pagar_acumulado_total-this.contas_pagar_acumulado_pago},contas_receber_entrantes_total:function(){return this.dados.contas_receber_entrantes?this.dados.contas_receber_entrantes.reduce((function(t,a){return t+a.valor_total}),0):0},contas_receber_entrantes_pago:function(){return this.dados.contas_receber_entrantes?this.dados.contas_receber_entrantes.reduce((function(t,a){return t+a.valor_pago}),0):0},contas_receber_entrantes_saldo:function(){return this.contas_receber_entrantes_total-this.contas_receber_entrantes_pago},contas_receber_acumulado_total:function(){return this.dados.contas_receber_acumulado?this.dados.contas_receber_acumulado.reduce((function(t,a){return t+a.valor_total}),0):0},contas_receber_acumulado_pago:function(){return this.dados.contas_receber_acumulado?this.dados.contas_receber_acumulado.reduce((function(t,a){return t+a.valor_pago}),0):0},contas_receber_acumulado_saldo:function(){return this.contas_receber_acumulado_total-this.contas_receber_acumulado_pago},saldo_caixas:function(){return this.dados.caixas?this.dados.caixas.reduce((function(t,a){return t+Number(a.saldo[0].saldo)}),0):0},saldo_caixas_atual:function(){return this.dados.caixas?this.dados.caixas.reduce((function(t,a){return t+Number(a.saldo_atual[0].saldo)}),0):0},total_saldo:function(){return this.dados.dre?this.dados.dre.receita[0].credito-this.dados.dre.receita[0].debito-(this.dados.dre.despesa[0].debito-this.dados.dre.despesa[0].credito):0},filtro_conta_pagar_entrantes:function(){var t=this;return"TODOS"===this.filtro.filtro_conta_pagar_entrantes?this.dados.contas_pagar_entrantes:this.dados.contas_pagar_entrantes.filter((function(a){return"QUITADO"===t.filtro.filtro_conta_pagar_entrantes?"QUITADO"==a.status:a.saldo>0}))},filtro_conta_receber_entrantes:function(){var t=this;return"TODOS"===this.filtro.filtro_conta_receber_entrantes?this.dados.contas_receber_entrantes:this.dados.contas_receber_entrantes.filter((function(a){return"QUITADO"===t.filtro.filtro_conta_receber_entrantes?"QUITADO"==a.status:a.saldo>0}))}},beforeMount:function(){this.filtro.mes=this.meses[(new Date).getMonth()]},mounted:function(){var t=this;this.buscarAnos(),setTimeout((function(){t.buscarDados()}),200)}},r=(e("4uyt"),e("KHd+")),n=Object(r.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"page-title-box d-flex align-items-center justify-content-between"},[e("h4",{staticClass:"mb-0 font-size-18"},[t._v("Fechamento Mensal")]),t._v(" "),e("div",{staticClass:"float-right"},[e("div",{staticClass:"dropdown"},[t._m(0),t._v(" "),e("div",{staticClass:"dropdown-menu dropdown-menu-right dropdown-menu-md"},[e("a",{staticClass:"dropdown-item",attrs:{href:t.imprimir_fechamento_mensal(),target:"_blank"}},[t._v("Imprimir Fechamento")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"imprimir('entrega')",target:"_blank"}},[t._v("Imprimir Despesas Detalhado")])])])])])])]),t._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"row",staticStyle:{padding:"10px"}},[e("div",{staticClass:"col-sm-12 col-md-3"},[e("label",{staticStyle:{width:"90%"},attrs:{label:""}},[t._v("Estilo  \n                          "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.filtro.estilo,expression:"filtro.estilo"}],staticClass:"form-control",on:{input:t.debounceBusca,change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.filtro,"estilo",a.target.multiple?e:e[0])}}},[e("option",{domProps:{value:"simplificado"}},[t._v("Simplificado")]),t._v(" "),e("option",{domProps:{value:"detalhado"}},[t._v("Detalhado")])])])]),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-3"},[e("label",{staticStyle:{width:"90%"}},[t._v("Ano Exercício:\n                          "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.filtro.ano,expression:"filtro.ano"}],staticClass:"form-control",on:{input:t.debounceBusca,change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.filtro,"ano",a.target.multiple?e:e[0])}}},t._l(t.anos,(function(a){return e("option",{key:a,domProps:{value:a}},[t._v(t._s(a))])})),0)])]),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-3"},[e("label",{staticStyle:{width:"90%"}},[t._v("Mes:\n                          "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.filtro.mes,expression:"filtro.mes"}],staticClass:"form-control",on:{input:t.debounceBusca,change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.filtro,"mes",a.target.multiple?e:e[0])}}},t._l(t.meses,(function(a,s){return e("option",{key:s,domProps:{value:a}},[t._v(t._s(a.descricao))])})),0)])]),t._v(" "),e("div",{staticClass:"col-sm-12 col-md-3"},[e("label",{staticClass:"control-label"}),e("br"),t._v(" "),e("button",{staticClass:"btn btn-outline-primary waves-effect waves-light",attrs:{type:"button"},on:{click:this.buscarDados}},[t.buscando?e("i",{staticClass:"bx bx-loader bx-spin font-size-16 align-middle mr-2"}):e("i",{staticClass:"bx bx bx-search  font-size-16 align-middle mr-2"}),t._v(" \n                          Buscar\n                      ")])])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[t._m(1),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-centered table-nowrap"},[e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Caixa")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Saldo em "+t._s(t.filtro.mes?t.filtro.mes.descricao:""))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Saldo Hoje")])])]),t._v(" "),e("tbody",[t._l(t.dados.caixas,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.nome))]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(a.saldo[0].saldo,t.$store.state.moeda)))]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(a.saldo_atual[0].saldo,t.$store.state.moeda)))])])})),t._v(" "),e("tr",[e("th",[t._v("Total Disponível")]),t._v(" "),e("th",[t._v(t._s(t._f("currency")(t.saldo_caixas,t.$store.state.moeda)))]),t._v(" "),e("th",[t._v(t._s(t._f("currency")(t.saldo_caixas_atual,t.$store.state.moeda)))])])],2)])])])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[t._m(2),t._v(" "),e("div",{staticClass:"card-body"},[e("table",{staticClass:"table table-centered table-nowrap"},[t._m(3),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Contas a Receber Lançadas no Mês")]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(t.contas_receber_entrantes_total,t.$store.state.moeda)))]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(t.contas_receber_entrantes_pago,t.$store.state.moeda)))]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(t.contas_receber_entrantes_saldo,t.$store.state.moeda)))]),t._v(" "),e("td",[e("button",{staticClass:"btn waves-effect waves-light",class:{"btn-outline-success":!t.filtro.detalhes_conta_receber_entrantes,"btn-success":t.filtro.detalhes_conta_receber_entrantes},staticStyle:{padding:"3px 12px 3px 12px"},attrs:{type:"button",title:"Ver Detalhes"},on:{click:function(a){t.filtro.detalhes_conta_receber_entrantes=!t.filtro.detalhes_conta_receber_entrantes}}},[e("i",{staticClass:"mdi d-block font-size-12",class:{"mdi-eye":!t.filtro.detalhes_conta_receber_entrantes,"mdi-eye-off":t.filtro.detalhes_conta_receber_entrantes}})])])]),t._v(" "),e("tr",[e("td",[t._v("Contas a Receber Pendentes")]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(t.contas_receber_acumulado_total,t.$store.state.moeda)))]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(t.contas_receber_acumulado_pago,t.$store.state.moeda)))]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(t.contas_receber_acumulado_saldo,t.$store.state.moeda)))]),t._v(" "),e("td",[e("button",{staticClass:"btn waves-effect waves-light",class:{"btn-outline-success":!t.filtro.detalhes_conta_receber_acumulado,"btn-success":t.filtro.detalhes_conta_receber_acumulado},staticStyle:{padding:"3px 12px 3px 12px"},attrs:{type:"button",title:"Ver Detalhes"},on:{click:function(a){t.filtro.detalhes_conta_receber_acumulado=!t.filtro.detalhes_conta_receber_acumulado}}},[e("i",{staticClass:"mdi d-block font-size-12",class:{"mdi-eye":!t.filtro.detalhes_conta_receber_acumulado,"mdi-eye-off":t.filtro.detalhes_conta_receber_acumulado}})])])]),t._v(" "),e("tr",[e("td",[t._v("Contas a Pagar Lançadas no Mês")]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(t.contas_pagar_entrantes_total,t.$store.state.moeda)))]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(t.contas_pagar_entrantes_pago,t.$store.state.moeda)))]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(t.contas_pagar_entrantes_saldo,t.$store.state.moeda)))]),t._v(" "),e("td",[e("button",{staticClass:"btn waves-effect waves-light",class:{"btn-outline-success":!t.filtro.detalhes_conta_pagar_entrantes,"btn-success":t.filtro.detalhes_conta_pagar_entrantes},staticStyle:{padding:"3px 12px 3px 12px"},attrs:{type:"button",title:"Ver Detalhes"},on:{click:function(a){t.filtro.detalhes_conta_pagar_entrantes=!t.filtro.detalhes_conta_pagar_entrantes}}},[e("i",{staticClass:"mdi d-block font-size-12",class:{"mdi-eye":!t.filtro.detalhes_conta_pagar_entrantes,"mdi-eye-off":t.filtro.detalhes_conta_pagar_entrantes}})])])]),t._v(" "),e("tr",[e("td",[t._v("Contas a Pagar Pendentes")]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(t.contas_pagar_acumulado_total,t.$store.state.moeda)))]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(t.contas_pagar_acumulado_pago,t.$store.state.moeda)))]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(t.contas_pagar_acumulado_saldo,t.$store.state.moeda)))]),t._v(" "),e("td",[e("button",{staticClass:"btn waves-effect waves-light",class:{"btn-outline-success":!t.filtro.detalhes_conta_pagar_acumulado,"btn-success":t.filtro.detalhes_conta_pagar_acumulado},staticStyle:{padding:"3px 12px 3px 12px"},attrs:{type:"button",title:"Ver Detalhes"},on:{click:function(a){t.filtro.detalhes_conta_pagar_acumulado=!t.filtro.detalhes_conta_pagar_acumulado}}},[e("i",{staticClass:"mdi d-block font-size-12",class:{"mdi-eye":!t.filtro.detalhes_conta_pagar_acumulado,"mdi-eye-off":t.filtro.detalhes_conta_pagar_acumulado}})])])])])])])])])]),t._v(" "),t.filtro.detalhes_conta_receber_entrantes?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-title"},[e("h3",{staticClass:"mt-4 px-4"},[t._v("Contas a receber geradas em "+t._s(t.filtro.mes?t.filtro.mes.descricao:"")+" \n                          "),e("div",{staticClass:"float-right"},[e("button",{staticClass:"btn",class:{"btn-primary":"TODOS"==t.filtro.filtro_conta_receber_entrantes,"btn-outline-primary":"TODOS"!=t.filtro.filtro_conta_receber_entrantes},attrs:{type:"button"},on:{click:function(a){t.filtro.filtro_conta_receber_entrantes="TODOS"}}},["TODOS"==t.filtro.filtro_conta_receber_entrantes?e("i",{staticClass:"mdi mdi-check-bold font-size-18"}):t._e(),t._v(" Todos\n                              ")]),t._v(" "),e("button",{staticClass:"btn",class:{"btn-primary":"PENDENTES"==t.filtro.filtro_conta_receber_entrantes,"btn-outline-primary":"PENDENTES"!=t.filtro.filtro_conta_receber_entrantes},attrs:{type:"button"},on:{click:function(a){t.filtro.filtro_conta_receber_entrantes="PENDENTES"}}},["PENDENTES"==t.filtro.filtro_conta_receber_entrantes?e("i",{staticClass:"mdi mdi-check-bold font-size-18"}):t._e(),t._v(" Pendentes\n                              ")]),t._v(" "),e("button",{staticClass:"btn",class:{"btn-primary":"QUITADO"==t.filtro.filtro_conta_receber_entrantes,"btn-outline-primary":"QUITADO"!=t.filtro.filtro_conta_receber_entrantes},attrs:{type:"button"},on:{click:function(a){t.filtro.filtro_conta_receber_entrantes="QUITADO"}}},["QUITADO"==t.filtro.filtro_conta_receber_entrantes?e("i",{staticClass:"mdi mdi-check-bold font-size-18"}):t._e(),t._v(" Quitados\n                              ")])])])]),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"table-responsive table-500"},[e("table",{staticClass:"table table-centered table-nowrap"},[t._m(4),t._v(" "),e("tbody",t._l(t.filtro_conta_receber_entrantes,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.documento))]),t._v(" "),e("td",[t._v(t._s(t._f("dateformat")(a.data_emissao)))]),t._v(" "),e("td",[t._v(t._s(a.parceiro.id)+": "+t._s(a.parceiro.apelido))]),t._v(" "),e("td",[t._v(t._s(a.historico))]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(a.valor_total,t.$store.state.moeda)))]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(a.valor_pago,t.$store.state.moeda)))]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(a.saldo,t.$store.state.moeda)))])])})),0)])])])])])]):t._e(),t._v(" "),t.filtro.detalhes_conta_receber_acumulado?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[t._m(5),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"table-responsive table-500"},[e("table",{staticClass:"table table-centered table-nowrap"},[t._m(6),t._v(" "),e("tbody",t._l(t.dados.contas_receber_acumulado,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.documento))]),t._v(" "),e("td",[t._v(t._s(t._f("dateformat")(a.data_emissao)))]),t._v(" "),e("td",[t._v(t._s(a.parceiro.id)+": "+t._s(a.parceiro.apelido))]),t._v(" "),e("td",[t._v(t._s(a.historico))]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(a.valor_total,t.$store.state.moeda)))]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(a.valor_pago,t.$store.state.moeda)))]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(a.saldo,t.$store.state.moeda)))])])})),0)])])])])])]):t._e(),t._v(" "),t.filtro.detalhes_conta_pagar_entrantes?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-title"},[e("h3",{staticClass:"mt-4 px-4"},[t._v("Contas a Pagar Geradas em "+t._s(t.filtro.mes?t.filtro.mes.descricao:"")+" \n                          "),e("div",{staticClass:"float-right"},[e("button",{staticClass:"btn",class:{"btn-primary":"TODOS"==t.filtro.filtro_conta_pagar_entrantes,"btn-outline-primary":"TODOS"!=t.filtro.filtro_conta_pagar_entrantes},attrs:{type:"button"},on:{click:function(a){t.filtro.filtro_conta_pagar_entrantes="TODOS"}}},["TODOS"==t.filtro.filtro_conta_pagar_entrantes?e("i",{staticClass:"mdi mdi-check-bold font-size-18"}):t._e(),t._v(" Todos\n                              ")]),t._v(" "),e("button",{staticClass:"btn",class:{"btn-primary":"PENDENTES"==t.filtro.filtro_conta_pagar_entrantes,"btn-outline-primary":"PENDENTES"!=t.filtro.filtro_conta_pagar_entrantes},attrs:{type:"button"},on:{click:function(a){t.filtro.filtro_conta_pagar_entrantes="PENDENTES"}}},["PENDENTES"==t.filtro.filtro_conta_pagar_entrantes?e("i",{staticClass:"mdi mdi-check-bold font-size-18"}):t._e(),t._v(" Pendentes\n                              ")]),t._v(" "),e("button",{staticClass:"btn",class:{"btn-primary":"QUITADO"==t.filtro.filtro_conta_pagar_entrantes,"btn-outline-primary":"QUITADO"!=t.filtro.filtro_conta_pagar_entrantes},attrs:{type:"button"},on:{click:function(a){t.filtro.filtro_conta_pagar_entrantes="QUITADO"}}},["QUITADO"==t.filtro.filtro_conta_pagar_entrantes?e("i",{staticClass:"mdi mdi-check-bold font-size-18"}):t._e(),t._v(" Quitados\n                              ")])])])]),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"table-responsive table-500"},[e("table",{staticClass:"table table-centered table-nowrap"},[t._m(7),t._v(" "),e("tbody",t._l(t.filtro_conta_pagar_entrantes,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.documento))]),t._v(" "),e("td",[t._v(t._s(t._f("dateformat")(a.data_emissao)))]),t._v(" "),e("td",[t._v(t._s(a.parceiro.id)+": "+t._s(a.parceiro.apelido))]),t._v(" "),e("td",[t._v(t._s(a.historico))]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(a.valor_total,t.$store.state.moeda)))]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(a.valor_pago,t.$store.state.moeda)))]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(a.saldo,t.$store.state.moeda)))])])})),0)])])])])])]):t._e(),t._v(" "),t.filtro.detalhes_conta_pagar_acumulado?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[t._m(8),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"table-responsive table-500"},[e("table",{staticClass:"table table-centered table-nowrap"},[t._m(9),t._v(" "),e("tbody",t._l(t.dados.contas_pagar_acumulado,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.documento))]),t._v(" "),e("td",[t._v(t._s(t._f("dateformat")(a.data_emissao)))]),t._v(" "),e("td",[t._v(t._s(a.parceiro.id)+": "+t._s(a.parceiro.apelido))]),t._v(" "),e("td",[t._v(t._s(a.historico))]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(a.valor_total,t.$store.state.moeda)))]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(a.valor_pago,t.$store.state.moeda)))]),t._v(" "),e("td",[t._v(t._s(t._f("currency")(a.saldo,t.$store.state.moeda)))])])})),0)])])])])])]):t._e(),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-title row"},[t._m(10),t._v(" "),e("div",{staticClass:"col-md-3"},[e("label",{staticClass:"control-label"},[t._v("Nível")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.filtro.nivel,expression:"filtro.nivel"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.filtro,"nivel",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"1"}},[t._v("1")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("2")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("3")]),t._v(" "),e("option",{attrs:{value:"4"}},[t._v("4")]),t._v(" "),e("option",{attrs:{value:"5"}},[t._v("5")]),t._v(" "),e("option",{attrs:{value:"6"}},[t._v("6")]),t._v(" "),e("option",{attrs:{value:"7"}},[t._v("7")]),t._v(" "),e("option",{attrs:{value:"8"}},[t._v("8")]),t._v(" "),e("option",{attrs:{value:"9"}},[t._v("9")]),t._v(" "),e("option",{attrs:{value:"10"}},[t._v("10")])])])]),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table mb-0"},[e("thead",[e("tr",[e("th",[t._v("Conta ")]),t._v(" "),e("th",[t._v(t._s(t.filtro.mes?t.filtro.mes.descricao:""))])])]),t._v(" "),e("tbody",[e("tr",{staticClass:"odd item-raiz"},[e("th",[t._v("\n                                          Totais\n                                      ")]),t._v(" "),e("th",{staticStyle:{"white-space":"nowrap"}},[t._v("\n                                         "+t._s(t._f("currency")(t.total_saldo,t.$store.state.moeda))+"\n                                      ")])]),t._v(" "),t._l(t.dados.dre.receita,(function(a){return e("tr",{directives:[{name:"show",rawName:"v-show",value:a.nivel<=t.filtro.nivel,expression:"dado.nivel <= filtro.nivel"}],key:a.codigo,staticClass:"odd"},[e("td",[t._l(a.nivel,(function(a){return e("span",{key:a},[t._v(" ")])})),t._v("\n                                          "+t._s(a.codigo)+" | "+t._s(a.nome)+"\n                                      ")],2),t._v(" "),e("td",{staticStyle:{"white-space":"nowrap"}},[t._v("\n                                         "+t._s(t._f("currency")(a.credito-a.debito,t.$store.state.moeda))+"\n                                      ")])])})),t._v(" "),t._l(t.dados.dre.despesa,(function(a){return e("tr",{directives:[{name:"show",rawName:"v-show",value:a.nivel<=t.filtro.nivel,expression:"dado.nivel <= filtro.nivel"}],key:a.codigo,staticClass:"odd"},[e("td",[t._l(a.nivel,(function(a){return e("span",{key:a},[t._v(" ")])})),t._v("\n                                          "+t._s(a.codigo)+" | "+t._s(a.nome)+"\n                                      ")],2),t._v(" "),e("td",{staticStyle:{"white-space":"nowrap"}},[t._v("\n                                         "+t._s(t._f("currency")(a.credito-a.debito,t.$store.state.moeda))+"\n                                      ")])])}))],2)])])])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"btn btn-light dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"mdi mdi-printer mr-1"}),this._v(" "),a("span",{staticClass:"d-none d-sm-inline-block"},[this._v("Imprimir "),a("i",{staticClass:"mdi mdi-chevron-down"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header"},[a("h4",[this._v("Valores Em Caixa")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-header"},[a("h4",[this._v("Contas")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Contas ")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Valor Total")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Valor Pago")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Saldo Pendente")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Detalhes")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Documento")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Emissão")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Cliente")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Historico")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Valor")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Pago")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Saldo")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-title"},[a("h3",{staticClass:"mt-4 px-4"},[this._v("Contas a Receber Pendentes\n                      ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Documento")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Emissão")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Cliente")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Historico")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Valor")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Pago")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Saldo")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Documento")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Emissão")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Fornecedor")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Historico")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Valor")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Pago")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Saldo")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"card-title"},[a("h3",{staticClass:"mt-4 px-4"},[this._v("Contas a Pagar Pendentes\n                      ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Documento")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Emissão")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Fornecedor")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Historico")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Valor")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Pago")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Saldo")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-md-9"},[a("h3",{staticClass:"mt-4 px-4"},[this._v("Resultado do Mês")])])}],!1,null,"2f3d2814",null);a.default=n.exports},"4uyt":function(t,a,e){"use strict";e("9jPN")},"9jPN":function(t,a,e){var s=e("ch/0");"string"==typeof s&&(s=[[t.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(s,o);s.locals&&(t.exports=s.locals)},"ch/0":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,"tr[data-v-2f3d2814]:hover{background-color:#eff2f7}.breadcrumb-item[data-v-2f3d2814]{cursor:pointer;margin-left:0;margin-right:15px;padding-left:0;padding-right:0}.red[data-v-2f3d2814]{color:red!important;background-color:red!important;color:#00f!important;background-color:#00f!important}.table-500[data-v-2f3d2814]{max-height:500px;overflow-y:auto}",""])}}]);
//# sourceMappingURL=36.js.map