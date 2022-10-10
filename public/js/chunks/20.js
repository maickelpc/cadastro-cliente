(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/saas.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/saas.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var simplebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplebar-vue */ "./node_modules/simplebar-vue/dist/simplebar-vue.esm.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./resources/js/services/index.js");
 // import ChartData from "./data-saas";


var dashboardService = new _services__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    simplebar: simplebar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      // ChartData,
      title: "Meu Controlle",
      produtos_mais_vendidos: [],
      spinner_produtos_mais_vendidos: true,
      vendas_periodos: [],
      spinner_vendas_periodos: true,
      produtos_estoque_baixo: [],
      spinner_produtos_estoque_baixo: true,
      evolucao_12_meses: {
        series: [],
        chartoptions: {
          chart: {
            height: 350,
            type: "area",
            toolbar: {
              show: false
            }
          },
          colors: ["#556ee6", "#f1b44c", '#cacaca'],
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: "smooth",
            width: 2
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.45,
              opacityTo: 0.05,
              stops: [20, 100, 100, 100]
            }
          },
          xaxis: {
            categories: ["-"]
          },
          markers: {
            size: 3,
            strokeWidth: 3,
            hover: {
              size: 4,
              sizeOffset: 2
            }
          },
          legend: {
            position: "top",
            horizontalAlign: "right"
          }
        }
      },
      spinner_evolucao_12_meses: true,
      contas: {
        pagar: [],
        pagar_atrasadas: [],
        receber: [],
        receber_atrasadas: []
      }
    };
  },
  methods: {
    buscarProdutosEstoqueBaixo: function buscarProdutosEstoqueBaixo() {
      var _this = this;

      dashboardService.buscarProdutosEstoqueBaixo({}).then(function (response) {
        _this.produtos_estoque_baixo = response.data;
        _this.spinner_produtos_estoque_baixo = false;

        _this.$forceUpdate();
      })["finally"](function () {
        return setTimeout(function () {
          _this.buscarProdutosEstoqueBaixo();
        }, 600000);
      });
    },
    buscarProdutosMaisVendidos: function buscarProdutosMaisVendidos() {
      var _this2 = this;

      dashboardService.buscarProdutosMaisVendidos({}).then(function (response) {
        _this2.produtos_mais_vendidos = response.data;
        _this2.spinner_produtos_mais_vendidos = false;

        _this2.$forceUpdate();
      })["finally"](function () {
        return setTimeout(function () {
          _this2.buscarProdutosMaisVendidos();
        }, 600000);
      });
    },
    evolucao12meses: function evolucao12meses() {
      var _this3 = this;

      dashboardService.evolucao12meses({}).then(function (response) {
        _this3.evolucao_12_meses.series = [{
          name: 'Total em Vendas',
          data: response.data.notas.map(function (x) {
            return Number(x.valor_total);
          })
        }, {
          name: 'Total em Serviços',
          data: response.data.servicos.map(function (x) {
            return Number(x.valor_total);
          })
        }, {
          name: 'Total Geral',
          data: response.data.faturamentos.map(function (x) {
            return Number(x.valor_total);
          })
        }]; // this.evolucao_12_meses.chartoptions.xaxis.categories =  response.data.servicos.map(x => x.mesExtenso + '/'+x.ano);

        _this3.evolucao_12_meses.chartoptions.xaxis.categories = response.data.labels;
        _this3.spinner_evolucao_12_meses = false;

        _this3.$forceUpdate();
      })["finally"](function () {
        return setTimeout(function () {
          _this3.evolucao12meses();
        }, 600000);
      });
    },
    buscarVendasPeriodos: function buscarVendasPeriodos() {
      var _this4 = this;

      dashboardService.buscarVendasPeriodos({}).then(function (response) {
        _this4.vendas_periodos = response.data;
        _this4.vendas_periodos.hoje_diferenca = 0;
        _this4.vendas_periodos.semana_diferenca = 0;
        _this4.vendas_periodos.mes_diferenca = 0;

        if (_this4.vendas_periodos.ontem > 0) {
          _this4.vendas_periodos.hoje_diferenca = (_this4.vendas_periodos.hoje / _this4.vendas_periodos.ontem - 1) * 100;
        }

        if (_this4.vendas_periodos.semana_anterior > 0) {
          _this4.vendas_periodos.semana_diferenca = _this4.vendas_periodos.semana_atual / _this4.vendas_periodos.semana_anterior - 1;
        }

        if (_this4.vendas_periodos.mes_anterior > 0) {
          _this4.vendas_periodos.mes_diferenca = (_this4.vendas_periodos.mes_atual / _this4.vendas_periodos.mes_anterior - 1) * 100;
        }

        _this4.spinner_vendas_periodos = false;

        _this4.$forceUpdate();
      })["finally"](function () {
        return setTimeout(function () {
          _this4.buscarVendasPeriodos();
        }, 300000);
      });
    },
    buscarContas: function buscarContas() {
      var _this5 = this;

      dashboardService.buscarContas({}).then(function (response) {
        console.log(response.data);
        _this5.contas = {
          pagar: response.data.pagar.map(function (p) {
            p.saldo = p.valor - p.valor_pago;
            return p;
          }),
          pagar_atrasadas: response.data.pagar_atrasadas.map(function (p) {
            p.saldo = p.valor - p.valor_pago;
            return p;
          }),
          receber: response.data.receber.map(function (p) {
            p.saldo = p.valor - p.valor_pago;
            return p;
          }),
          receber_atrasadas: response.data.receber_atrasadas.map(function (p) {
            p.saldo = p.valor - p.valor_pago;
            return p;
          })
        };
      })["finally"](function () {
        return setTimeout(function () {
          _this5.buscarContas();
        }, 600000);
      });
    }
  },
  mounted: function mounted() {
    var container = document.querySelector("#containerElement .simplebar-content-wrapper"); // container.scrollTo({ top: 500, behavior: "smooth" });
    // this.buscarProdutosMaisVendidos();
    // setTimeout(() => {
    //   this.buscarVendasPeriodos();
    // }, 200);
    // setTimeout(() => {
    //   this.evolucao12meses();
    // },400);
    // setTimeout(() => {
    //   this.buscarProdutosEstoqueBaixo();
    // }, 600);
    // setTimeout(() => {
    //   this.buscarContas();
    // }, 800);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/saas.vue?vue&type=template&id=284522da&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/saas.vue?vue&type=template&id=284522da& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xl-4" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("h4", { staticClass: "card-title mb-4" }, [
              _vm._v("Produtos Mais Vendidos")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-center text-muted" }, [
              _c(
                "div",
                { staticClass: "row" },
                [
                  _vm.spinner_produtos_mais_vendidos
                    ? _c("div", { staticClass: "col-12 text-left" }, [
                        _vm._m(0)
                      ])
                    : _vm._l(_vm.produtos_mais_vendidos, function(p) {
                        return _c(
                          "div",
                          {
                            key: p.produto_id,
                            staticClass: "col-12 text-left"
                          },
                          [
                            _c("div", { staticClass: "mt-4" }, [
                              _c("p", { staticClass: "mb-2 text-truncate" }, [
                                _c("i", {
                                  staticClass:
                                    "mdi mdi-circle text-primary mr-1"
                                }),
                                _vm._v(
                                  " " +
                                    _vm._s(p.produto_id) +
                                    ": " +
                                    _vm._s(p.produto_descricao) +
                                    " | " +
                                    _vm._s(p.produto_codigo) +
                                    "\n                  "
                                )
                              ]),
                              _vm._v(" "),
                              _c("h5", [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("currency")(
                                      p.valor_subtotal,
                                      _vm.$store.state.moeda
                                    )
                                  ) +
                                    " | " +
                                    _vm._s(_vm._f("qtde")(p.qtde, 0))
                                )
                              ])
                            ])
                          ]
                        )
                      })
                ],
                2
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("h4", { staticClass: "card-title mb-4" }, [
              _vm._v("Produtos com Estoque Baixo")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-center text-muted" }, [
              _c("div", { staticClass: "row" }, [
                _vm.spinner_produtos_estoque_baixo
                  ? _c("div", { staticClass: "col-12 text-left" }, [_vm._m(1)])
                  : _c("div", { staticClass: "col-12 text-left" }, [
                      _c(
                        "div",
                        { staticClass: "mt-4" },
                        _vm._l(_vm.produtos_estoque_baixo, function(p) {
                          return _c(
                            "p",
                            { key: p.id, staticClass: "mb-2 text-truncate" },
                            [
                              _c("i", {
                                staticClass: "mdi mdi-circle mr-1",
                                class: {
                                  "text-danger": p.saldo < 0,
                                  "text-primary": p.saldo >= 0
                                }
                              }),
                              _vm._v(
                                " " +
                                  _vm._s(p.id) +
                                  ": " +
                                  _vm._s(p.descricao) +
                                  " | " +
                                  _vm._s(p.codigo) +
                                  " "
                              ),
                              _c("span", { staticStyle: { float: "right" } }, [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("qtde")(p.qtde, p.casas_decimais)
                                  ) +
                                    " (" +
                                    _vm._s(
                                      _vm._f("qtde")(
                                        p.qtde_minimo,
                                        p.casas_decimais
                                      )
                                    ) +
                                    ")"
                                )
                              ])
                            ]
                          )
                        }),
                        0
                      )
                    ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-8" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xl-4" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _vm._m(2),
                _vm._v(" "),
                _vm.spinner_vendas_periodos
                  ? _c("div", { staticClass: "text-muted mt-4" }, [_vm._m(3)])
                  : _c("div", { staticClass: "text-muted mt-4" }, [
                      _c("h4", [
                        _vm._v(
                          "\n                  " +
                            _vm._s(
                              _vm._f("currency")(
                                _vm.vendas_periodos.hoje,
                                _vm.$store.state.moeda
                              )
                            ) +
                            " \n                  "
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "badge font-size-12 ",
                            class: {
                              "badge-soft-success":
                                _vm.vendas_periodos.hoje_diferenca > 0,
                              "badge-soft-danger":
                                _vm.vendas_periodos.hoje_diferenca < 0,
                              "badge-soft-warning":
                                _vm.vendas_periodos.hoje_diferenca == 0
                            }
                          },
                          [
                            _vm._v(
                              "\n                    " +
                                _vm._s(
                                  _vm._f("qtde")(
                                    _vm.vendas_periodos.hoje_diferenca,
                                    1
                                  )
                                ) +
                                "%\n                  "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "span",
                          { staticClass: "ml-2 text-truncate block" },
                          [
                            _vm._v(
                              _vm._s(
                                _vm._f("currency")(
                                  _vm.vendas_periodos.ontem,
                                  _vm.$store.state.moeda
                                )
                              ) + " Ontem"
                            )
                          ]
                        )
                      ])
                    ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-4" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _vm._m(4),
                _vm._v(" "),
                _vm.spinner_vendas_periodos
                  ? _c("div", { staticClass: "text-muted mt-4" }, [_vm._m(5)])
                  : _c("div", { staticClass: "text-muted mt-4" }, [
                      _c("h4", [
                        _vm._v(
                          "\n                  " +
                            _vm._s(
                              _vm._f("currency")(
                                _vm.vendas_periodos.semana_atual,
                                _vm.$store.state.moeda
                              )
                            ) +
                            " \n                  "
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "badge font-size-12 ",
                            class: {
                              "badge-soft-success":
                                _vm.vendas_periodos.semana_diferenca > 0,
                              "badge-soft-danger":
                                _vm.vendas_periodos.semana_diferenca < 0,
                              "badge-soft-warning":
                                _vm.vendas_periodos.semana_diferenca == 0
                            }
                          },
                          [
                            _vm._v(
                              "\n                    " +
                                _vm._s(
                                  _vm._f("qtde")(
                                    _vm.vendas_periodos.semana_diferenca,
                                    1
                                  )
                                ) +
                                "%\n                  "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "span",
                          { staticClass: "ml-2 text-truncate block" },
                          [
                            _vm._v(
                              _vm._s(
                                _vm._f("currency")(
                                  _vm.vendas_periodos.semana_anterior,
                                  _vm.$store.state.moeda
                                )
                              ) + " Semana Passada"
                            )
                          ]
                        )
                      ])
                    ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-4" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _vm._m(6),
                _vm._v(" "),
                _vm.spinner_vendas_periodos
                  ? _c("div", { staticClass: "text-muted mt-4" }, [_vm._m(7)])
                  : _c("div", { staticClass: "text-muted mt-4" }, [
                      _c("h4", [
                        _vm._v(
                          "\n                  \n                  " +
                            _vm._s(
                              _vm._f("currency")(
                                _vm.vendas_periodos.mes_atual,
                                _vm.$store.state.moeda
                              )
                            ) +
                            " \n                  "
                        ),
                        _c(
                          "span",
                          {
                            staticClass: "badge font-size-12 ",
                            class: {
                              "badge-soft-success":
                                _vm.vendas_periodos.mes_diferenca > 0,
                              "badge-soft-danger":
                                _vm.vendas_periodos.mes_diferenca < 0,
                              "badge-soft-warning":
                                _vm.vendas_periodos.mes_diferenca == 0
                            }
                          },
                          [
                            _vm._v(
                              "\n                    " +
                                _vm._s(
                                  _vm._f("qtde")(
                                    _vm.vendas_periodos.mes_diferenca,
                                    1
                                  )
                                ) +
                                "%\n                  "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "span",
                          { staticClass: "ml-2 text-truncate block" },
                          [
                            _vm._v(
                              _vm._s(
                                _vm._f("currency")(
                                  _vm.vendas_periodos.mes_anterior,
                                  _vm.$store.state.moeda
                                )
                              )
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "ml-2 text-truncate block" },
                          [_vm._v("Mês Passado ")]
                        )
                      ])
                    ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-12" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _vm._m(8),
                _vm._v(" "),
                _vm.spinner_evolucao_12_meses
                  ? _c("div", { staticClass: "text-muted mt-4" }, [_vm._m(9)])
                  : _c(
                      "div",
                      { staticClass: "text-muted mt-4" },
                      [
                        _c("apexchart", {
                          staticClass: "apex-charts",
                          attrs: {
                            dir: "ltr",
                            height: "350",
                            series: _vm.evolucao_12_meses.series,
                            options: _vm.evolucao_12_meses.chartoptions,
                            colors: _vm.evolucao_12_meses.colors
                          }
                        })
                      ],
                      1
                    )
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xl-6 col-lg-6" }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-header bg-transparent border-bottom" },
            [
              _c("div", { staticClass: "d-flex flex-wrap" }, [
                _vm._m(10),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass:
                      "nav nav-tabs nav-tabs-custom card-header-tabs ml-auto",
                    attrs: { role: "tablist" }
                  },
                  [
                    _vm._m(11),
                    _vm._v(" "),
                    _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link",
                          attrs: {
                            "data-toggle": "tab",
                            href: "#receber-atrasadas",
                            role: "tab",
                            "aria-selected": "false"
                          }
                        },
                        [
                          _vm._v(
                            "\n                                Atrasados\n\n                                "
                          ),
                          _vm.contas.receber_atrasadas.length > 0
                            ? _c(
                                "span",
                                {
                                  staticClass:
                                    "badge badge-pill badge-danger float-right"
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.contas.receber_atrasadas.length)
                                  )
                                ]
                              )
                            : _vm._e()
                        ]
                      )
                    ])
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "div",
              {
                staticStyle: { "max-height": "295px" },
                attrs: { "data-simplebar": "init" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "simplebar-wrapper",
                    staticStyle: { margin: "0px" }
                  },
                  [
                    _vm._m(12),
                    _c("div", { staticClass: "simplebar-mask" }, [
                      _c(
                        "div",
                        {
                          staticClass: "simplebar-offset",
                          staticStyle: { right: "-15px", bottom: "0px" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "simplebar-content-wrapper",
                              staticStyle: {
                                height: "auto",
                                overflow: "hidden scroll"
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "simplebar-content",
                                  staticStyle: { padding: "0px" }
                                },
                                [
                                  _c("div", { staticClass: "tab-content" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "tab-pane active",
                                        attrs: {
                                          id: "receber-proximas",
                                          role: "tabpanel"
                                        }
                                      },
                                      [
                                        _c(
                                          "ul",
                                          {
                                            staticClass:
                                              "list-group list-group-flush"
                                          },
                                          _vm._l(_vm.contas.receber, function(
                                            c
                                          ) {
                                            return _c(
                                              "li",
                                              {
                                                key: c.id,
                                                staticClass:
                                                  "list-group-item py-3"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "d-flex" },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "align-self-center overflow-hidden mr-auto"
                                                      },
                                                      [
                                                        _c("div", [
                                                          _c(
                                                            "h5",
                                                            {
                                                              staticClass:
                                                                "font-size-14 text-truncate"
                                                            },
                                                            [
                                                              _c(
                                                                "a",
                                                                {
                                                                  staticClass:
                                                                    "text-dark",
                                                                  attrs: {
                                                                    href: "#"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      c.parceiro
                                                                        .apelido
                                                                    )
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("small", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    c.parceiro
                                                                      .fone
                                                                  )
                                                                )
                                                              ])
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "text-muted mb-0"
                                                            },
                                                            [
                                                              _c("i", {
                                                                staticClass:
                                                                  "bx bx-calendar"
                                                              }),
                                                              _vm._v(
                                                                " " +
                                                                  _vm._s(
                                                                    _vm._f(
                                                                      "dateformat"
                                                                    )(
                                                                      c.data_vencimento
                                                                    )
                                                                  )
                                                              )
                                                            ]
                                                          )
                                                        ])
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "dropdown ml-2"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                          " +
                                                            _vm._s(
                                                              _vm._f(
                                                                "currency"
                                                              )(
                                                                c.saldo,
                                                                _vm.$store.state
                                                                  .moeda
                                                              )
                                                            ) +
                                                            "\n                                        "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          }),
                                          0
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "tab-pane",
                                        attrs: {
                                          id: "receber-atrasadas",
                                          role: "tabpanel"
                                        }
                                      },
                                      [
                                        _c(
                                          "ul",
                                          {
                                            staticClass:
                                              "list-group list-group-flush"
                                          },
                                          _vm._l(
                                            _vm.contas.receber_atrasadas,
                                            function(c) {
                                              return _c(
                                                "li",
                                                {
                                                  key: c.id,
                                                  staticClass:
                                                    "list-group-item py-3"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "d-flex" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "align-self-center overflow-hidden mr-auto"
                                                        },
                                                        [
                                                          _c("div", [
                                                            _c(
                                                              "h5",
                                                              {
                                                                staticClass:
                                                                  "font-size-14 text-truncate"
                                                              },
                                                              [
                                                                _c(
                                                                  "a",
                                                                  {
                                                                    staticClass:
                                                                      "text-dark",
                                                                    attrs: {
                                                                      href: "#"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        c
                                                                          .parceiro
                                                                          .apelido
                                                                      )
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c("small", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      c.parceiro
                                                                        .fone
                                                                    )
                                                                  )
                                                                ])
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "p",
                                                              {
                                                                staticClass:
                                                                  "text-muted mb-0"
                                                              },
                                                              [
                                                                _c("i", {
                                                                  staticClass:
                                                                    "bx bx-calendar"
                                                                }),
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      _vm._f(
                                                                        "dateformat"
                                                                      )(
                                                                        c.data_vencimento
                                                                      )
                                                                    )
                                                                )
                                                              ]
                                                            )
                                                          ])
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "dropdown ml-2"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                          " +
                                                              _vm._s(
                                                                _vm._f(
                                                                  "currency"
                                                                )(
                                                                  c.saldo,
                                                                  _vm.$store
                                                                    .state.moeda
                                                                )
                                                              ) +
                                                              "\n                                        "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            }
                                          ),
                                          0
                                        )
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _c("div", {
                      staticClass: "simplebar-placeholder",
                      staticStyle: { width: "auto", height: "323px" }
                    })
                  ]
                ),
                _vm._m(13),
                _vm._m(14)
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-6 col-lg-6" }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-header bg-transparent border-bottom" },
            [
              _c("div", { staticClass: "d-flex flex-wrap" }, [
                _vm._m(15),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass:
                      "nav nav-tabs nav-tabs-custom card-header-tabs ml-auto",
                    attrs: { role: "tablist" }
                  },
                  [
                    _vm._m(16),
                    _vm._v(" "),
                    _c("li", { staticClass: "nav-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link",
                          attrs: {
                            "data-toggle": "tab",
                            href: "#pagar-atrasadas",
                            role: "tab",
                            "aria-selected": "false"
                          }
                        },
                        [
                          _vm._v(
                            "\n                                Atrasados\n\n                                "
                          ),
                          _vm.contas.pagar_atrasadas.length > 0
                            ? _c(
                                "span",
                                {
                                  staticClass:
                                    "badge badge-pill badge-danger float-right"
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.contas.pagar_atrasadas.length)
                                  )
                                ]
                              )
                            : _vm._e()
                        ]
                      )
                    ])
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "div",
              {
                staticStyle: { "max-height": "295px" },
                attrs: { "data-simplebar": "init" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "simplebar-wrapper",
                    staticStyle: { margin: "0px" }
                  },
                  [
                    _vm._m(17),
                    _c("div", { staticClass: "simplebar-mask" }, [
                      _c(
                        "div",
                        {
                          staticClass: "simplebar-offset",
                          staticStyle: { right: "-15px", bottom: "0px" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "simplebar-content-wrapper",
                              staticStyle: {
                                height: "auto",
                                overflow: "hidden scroll"
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "simplebar-content",
                                  staticStyle: { padding: "0px" }
                                },
                                [
                                  _c("div", { staticClass: "tab-content" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "tab-pane active",
                                        attrs: {
                                          id: "pagar-proximas",
                                          role: "tabpanel"
                                        }
                                      },
                                      [
                                        _c(
                                          "ul",
                                          {
                                            staticClass:
                                              "list-group list-group-flush"
                                          },
                                          _vm._l(_vm.contas.pagar, function(c) {
                                            return _c(
                                              "li",
                                              {
                                                key: c.id,
                                                staticClass:
                                                  "list-group-item py-3"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "d-flex" },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "align-self-center overflow-hidden mr-auto"
                                                      },
                                                      [
                                                        _c("div", [
                                                          _c(
                                                            "h5",
                                                            {
                                                              staticClass:
                                                                "font-size-14 text-truncate"
                                                            },
                                                            [
                                                              _c(
                                                                "a",
                                                                {
                                                                  staticClass:
                                                                    "text-dark",
                                                                  attrs: {
                                                                    href: "#"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      c.parceiro
                                                                        .apelido
                                                                    )
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("small", [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    c.parceiro
                                                                      .fone
                                                                  )
                                                                )
                                                              ])
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "text-muted mb-0"
                                                            },
                                                            [
                                                              _c("i", {
                                                                staticClass:
                                                                  "bx bx-calendar"
                                                              }),
                                                              _vm._v(
                                                                " " +
                                                                  _vm._s(
                                                                    _vm._f(
                                                                      "dateformat"
                                                                    )(
                                                                      c.data_vencimento
                                                                    )
                                                                  )
                                                              )
                                                            ]
                                                          )
                                                        ])
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "dropdown ml-2"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                          " +
                                                            _vm._s(
                                                              _vm._f(
                                                                "currency"
                                                              )(
                                                                c.saldo,
                                                                _vm.$store.state
                                                                  .moeda
                                                              )
                                                            ) +
                                                            "\n                                        "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          }),
                                          0
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "tab-pane",
                                        attrs: {
                                          id: "pagar-atrasadas",
                                          role: "tabpanel"
                                        }
                                      },
                                      [
                                        _c(
                                          "ul",
                                          {
                                            staticClass:
                                              "list-group list-group-flush"
                                          },
                                          _vm._l(
                                            _vm.contas.pagar_atrasadas,
                                            function(c) {
                                              return _c(
                                                "li",
                                                {
                                                  key: c.id,
                                                  staticClass:
                                                    "list-group-item py-3"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "d-flex" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "align-self-center overflow-hidden mr-auto"
                                                        },
                                                        [
                                                          _c("div", [
                                                            _c(
                                                              "h5",
                                                              {
                                                                staticClass:
                                                                  "font-size-14 text-truncate"
                                                              },
                                                              [
                                                                _c(
                                                                  "a",
                                                                  {
                                                                    staticClass:
                                                                      "text-dark",
                                                                    attrs: {
                                                                      href: "#"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        c
                                                                          .parceiro
                                                                          .apelido
                                                                      )
                                                                    )
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _c("small", [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      c.parceiro
                                                                        .fone
                                                                    )
                                                                  )
                                                                ])
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "p",
                                                              {
                                                                staticClass:
                                                                  "text-muted mb-0"
                                                              },
                                                              [
                                                                _c("i", {
                                                                  staticClass:
                                                                    "bx bx-calendar"
                                                                }),
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      _vm._f(
                                                                        "dateformat"
                                                                      )(
                                                                        c.data_vencimento
                                                                      )
                                                                    )
                                                                )
                                                              ]
                                                            )
                                                          ])
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "dropdown ml-2"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                          " +
                                                              _vm._s(
                                                                _vm._f(
                                                                  "currency"
                                                                )(
                                                                  c.saldo,
                                                                  _vm.$store
                                                                    .state.moeda
                                                                )
                                                              ) +
                                                              "\n                                        "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            }
                                          ),
                                          0
                                        )
                                      ]
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]),
                    _c("div", {
                      staticClass: "simplebar-placeholder",
                      staticStyle: { width: "auto", height: "323px" }
                    })
                  ]
                ),
                _vm._m(18),
                _vm._m(19)
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "progress" }, [
      _c("div", {
        staticClass: "progress-bar progress-bar-striped progress-bar-animated",
        staticStyle: { width: "75%" },
        attrs: {
          role: "progressbar",
          "aria-valuenow": "75",
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "progress" }, [
      _c("div", {
        staticClass: "progress-bar progress-bar-striped progress-bar-animated",
        staticStyle: { width: "75%" },
        attrs: {
          role: "progressbar",
          "aria-valuenow": "75",
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex align-items-center mb-3" }, [
      _c("div", { staticClass: "avatar-xs mr-3" }, [
        _c(
          "span",
          {
            staticClass:
              "avatar-title rounded-circle bg-soft-primary text-primary font-size-18"
          },
          [_c("i", { staticClass: "bx bx-copy-alt" })]
        )
      ]),
      _vm._v(" "),
      _c("h5", { staticClass: "font-size-14 mb-0" }, [_vm._v("Vendas Hoje")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "progress" }, [
      _c("div", {
        staticClass: "progress-bar progress-bar-striped progress-bar-animated",
        staticStyle: { width: "75%" },
        attrs: {
          role: "progressbar",
          "aria-valuenow": "75",
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex align-items-center mb-3" }, [
      _c("div", { staticClass: "avatar-xs mr-3" }, [
        _c(
          "span",
          {
            staticClass:
              "avatar-title rounded-circle bg-soft-primary text-primary font-size-18"
          },
          [_c("i", { staticClass: "bx bx-archive-in" })]
        )
      ]),
      _vm._v(" "),
      _c("h5", { staticClass: "font-size-14 mb-0" }, [
        _vm._v("Vendas da Semana")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "progress" }, [
      _c("div", {
        staticClass: "progress-bar progress-bar-striped progress-bar-animated",
        staticStyle: { width: "75%" },
        attrs: {
          role: "progressbar",
          "aria-valuenow": "75",
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex align-items-center mb-3" }, [
      _c("div", { staticClass: "avatar-xs mr-3" }, [
        _c(
          "span",
          {
            staticClass:
              "avatar-title rounded-circle bg-soft-primary text-primary font-size-18"
          },
          [_c("i", { staticClass: "bx bx-purchase-tag-alt" })]
        )
      ]),
      _vm._v(" "),
      _c("h5", { staticClass: "font-size-14 mb-0" }, [_vm._v("Vendas do Mês")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "progress" }, [
      _c("div", {
        staticClass: "progress-bar progress-bar-striped progress-bar-animated",
        staticStyle: { width: "75%" },
        attrs: {
          role: "progressbar",
          "aria-valuenow": "75",
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex align-items-center mb-3" }, [
      _c("div", { staticClass: "avatar-xs mr-3" }, [
        _c(
          "span",
          {
            staticClass:
              "avatar-title rounded-circle bg-soft-primary text-primary font-size-18"
          },
          [_c("i", { staticClass: "bx bx-purchase-tag-alt" })]
        )
      ]),
      _vm._v(" "),
      _c("h5", { staticClass: "font-size-14 mb-0" }, [
        _vm._v("Evolução nos últimos 12 meses")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "progress" }, [
      _c("div", {
        staticClass: "progress-bar progress-bar-striped progress-bar-animated",
        staticStyle: { width: "75%" },
        attrs: {
          role: "progressbar",
          "aria-valuenow": "75",
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mr-2" }, [
      _c("h5", { staticClass: "card-title mt-1 mb-0" }, [
        _vm._v("Contas a Receber")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link active",
          attrs: {
            "data-toggle": "tab",
            href: "#receber-proximas",
            role: "tab",
            "aria-selected": "true"
          }
        },
        [
          _vm._v(
            "\n                                Próximos Vencimentos\n                            "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "simplebar-height-auto-observer-wrapper" },
      [_c("div", { staticClass: "simplebar-height-auto-observer" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "simplebar-track simplebar-horizontal",
        staticStyle: { visibility: "hidden" }
      },
      [
        _c("div", {
          staticClass: "simplebar-scrollbar",
          staticStyle: {
            transform: "translate3d(0px, 0px, 0px)",
            display: "none"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "simplebar-track simplebar-vertical",
        staticStyle: { visibility: "visible" }
      },
      [
        _c("div", {
          staticClass: "simplebar-scrollbar",
          staticStyle: {
            height: "269px",
            transform: "translate3d(0px, 0px, 0px)",
            display: "block"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mr-2" }, [
      _c("h5", { staticClass: "card-title mt-1 mb-0" }, [
        _vm._v("Contas a Pagar")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link active",
          attrs: {
            "data-toggle": "tab",
            href: "#pagar-proximas",
            role: "tab",
            "aria-selected": "true"
          }
        },
        [
          _vm._v(
            "\n                                Próximos Vencimentos\n                            "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "simplebar-height-auto-observer-wrapper" },
      [_c("div", { staticClass: "simplebar-height-auto-observer" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "simplebar-track simplebar-horizontal",
        staticStyle: { visibility: "hidden" }
      },
      [
        _c("div", {
          staticClass: "simplebar-scrollbar",
          staticStyle: {
            transform: "translate3d(0px, 0px, 0px)",
            display: "none"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "simplebar-track simplebar-vertical",
        staticStyle: { visibility: "visible" }
      },
      [
        _c("div", {
          staticClass: "simplebar-scrollbar",
          staticStyle: {
            height: "269px",
            transform: "translate3d(0px, 0px, 0px)",
            display: "block"
          }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/dashboard/saas.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/dashboard/saas.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _saas_vue_vue_type_template_id_284522da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saas.vue?vue&type=template&id=284522da& */ "./resources/js/views/dashboard/saas.vue?vue&type=template&id=284522da&");
/* harmony import */ var _saas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saas.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/saas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _saas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _saas_vue_vue_type_template_id_284522da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _saas_vue_vue_type_template_id_284522da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/saas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/saas.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/dashboard/saas.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_saas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./saas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/saas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_saas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/saas.vue?vue&type=template&id=284522da&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/dashboard/saas.vue?vue&type=template&id=284522da& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_saas_vue_vue_type_template_id_284522da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./saas.vue?vue&type=template&id=284522da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/saas.vue?vue&type=template&id=284522da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_saas_vue_vue_type_template_id_284522da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_saas_vue_vue_type_template_id_284522da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=20.js.map