(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/financeiro/servicos-pendentes/ServicosPendentesLista.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/financeiro/servicos-pendentes/ServicosPendentesLista.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services */ "./resources/js/services/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var planoContaService = new _services__WEBPACK_IMPORTED_MODULE_0__["PlanoContasService"]();
var parceiroService = new _services__WEBPACK_IMPORTED_MODULE_0__["ParceiroService"]();
var contasReceberService = new _services__WEBPACK_IMPORTED_MODULE_0__["ContaReceberService"]();
var servicoService = new _services__WEBPACK_IMPORTED_MODULE_0__["OrdemServicoService"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    rota: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      dados: [],
      caixas: [],
      parceiros: [],
      filtro: {
        ordenar: 'devolucao_data',
        ordem: 'asc',
        page: 1,
        per_page: 100,
        texto: '',
        pendente_pagamento: 1,
        parceiro_id: null,
        devolucao_data_final: null,
        devolucao_data_inicial: null
      },
      paginacao: {
        current_page: 0,
        total: 0,
        last_page: 0,
        from: 0,
        to: 0,
        per_page: 100
      },
      debounce: null,
      itemModal: null,
      sucessoModal: null,
      erroModal: null,
      faturaModal: {
        id: null,
        parceiro: null,
        parceiro_id: null,
        valor_total: 0,
        ordens_servico: [],
        historico: ''
      },
      baixar_todos: false
    };
  },
  validations: function validations() {
    return {
      faturaModal: {
        ordens_servico: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        historico: {
          maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(100)
        },
        valor_total: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          minValue: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minValue"])(0.01)
        },
        parceiro_id: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        parcelas: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          $each: {
            parcela: {
              required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
            },
            parcelas: {
              required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
            },
            valor: {
              required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
              minValue: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minValue"])(0.0001)
            },
            data_vencimento: {
              required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
            }
          }
        }
      }
    };
  },
  methods: {
    debounceBusca: function debounceBusca() {
      var _this = this;

      clearTimeout(this.debounce);
      this.debounce = setTimeout(function () {
        _this.navegar(1);
      }, 800);
    },
    buscar: function buscar() {
      var _this2 = this;

      this.dados = [];

      var obj = _objectSpread({}, this.filtro);

      if (obj.devolucao_data_inicial) obj.devolucao_data_inicial = moment__WEBPACK_IMPORTED_MODULE_2___default()(obj.devolucao_data_inicial).format('YYYY-MM-DD');
      if (obj.devolucao_data_final) obj.devolucao_data_final = moment__WEBPACK_IMPORTED_MODULE_2___default()(obj.devolucao_data_final).format('YYYY-MM-DD');
      servicoService.listar(obj).then(function (response) {
        _this2.dados = response.data.data;
        _this2.paginacao = response.data;
        _this2.filtro.page = response.data.current_page;
        _this2.paginacao.per_page = response.data.per_page;
      });
    },
    buscarParceiroDebounce: function buscarParceiroDebounce(text, loading) {
      var _this3 = this;

      clearTimeout(this.debounce);
      this.debounce = setTimeout(function () {
        _this3.buscarParceiro(text, loading);
      }, 800);
    },
    setClienteFiltro: function setClienteFiltro(cliente) {
      if (cliente) {
        this.parceiros = [_objectSpread({}, cliente)];
        this.filtro.parceiro_id = this.parceiros[0].id;
      }
    },
    buscarParceiro: function buscarParceiro(text, loading) {
      var _this4 = this;

      var filtro = {
        texto: text,
        per_page: 40
      };
      parceiroService.listar(filtro).then(function (response) {
        return _this4.parceiros = response.data.data;
      });
    },
    abrirModalFatura: function abrirModalFatura() {
      this.faturaModal.parcelas = [{
        valor: this.faturaModal.valor_total,
        data_vencimento: null,
        parcela: 1,
        parcelas: 1
      }];
      this.faturaModal.ordens_servico = this.dados.filter(function (x) {
        return x.baixar;
      });
      this.faturaModal.parceiro = this.faturaModal.ordens_servico[0].parceiro;
      this.faturaModal.parceiro_id = this.faturaModal.parceiro.id;
    },
    salvarFatura: function salvarFatura() {
      var _this5 = this;

      this.sucessoModal = null;
      this.erroModal = null;
      this.faturaModal.parcelas.map(function (x, i) {
        x.parcela = i + 1, x.parcelas = _this5.faturaModal.parcelas.length;
        return x;
      });
      this.$v.faturaModal.$touch();

      if (this.$v.faturaModal.$invalid) {
        this.erroModal = this.$v.faturaModal;
        return 0;
      }

      servicoService.salvarFaturamento(_objectSpread({}, this.faturaModal)).then(function (response) {
        _this5.sucessoModal = "Fatura ".concat(response.data.id, " Criada com Sucesso!");
        _this5.faturaModal.id = response.data.id;
        _this5.faturaModal.parcelas = response.data.parcelas;

        _this5.buscar();

        _this5.$forceUpdate();
      })["catch"](function (erro) {
        return _this5.erroModal = erro;
      });
    },
    navegar: function navegar(pagina) {
      this.filtro.page = pagina;
      this.buscar();
    },
    buscarCaixas: function buscarCaixas() {
      var _this6 = this;

      var filtro = {
        tipo: "TRANSFERENCIA",
        texto: '',
        per_page: 40
      };
      planoContaService.listar(filtro).then(function (response) {
        return _this6.caixas = response.data.data.map(function (x) {
          x.nome = x.codigo + ' - ' + x.nome;
          return x;
        });
      });
    },
    selecionarTodos: function selecionarTodos() {
      if (this.baixar_todos) {
        this.dados = this.dados.map(function (x) {
          x.baixar = true;
          return x;
        });
      } else {
        this.dados = this.dados.map(function (x) {
          x.baixar = false;
          return x;
        });
      }

      this.selecionouItem();
    },
    selecionouItem: function selecionouItem() {
      var todos_selecionados = this.dados.filter(function (x) {
        return x.baixar;
      }).length == this.dados.length;
      this.baixar_todos = todos_selecionados;
      this.faturaModal.valor_total = this.dados.filter(function (x) {
        return x.baixar;
      }).reduce(function (a, c) {
        return Number(a) + Number(c.valor_total);
      }, 0);
      this.faturaModal.ordens_servico = this.dados.filter(function (x) {
        return x.baixar;
      });
    },
    money: function money() {
      return {
        decimal: ',',
        thousands: '.',
        prefix: this.$store.state.moeda + ' ',
        suffix: '',
        precision: 2,
        masked: false
      };
    },
    desabilitaDataFutura: function desabilitaDataFutura(data) {
      var hoje = new Date();
      return data > hoje;
    },
    desabilitaDataFuturaVencimento: function desabilitaDataFuturaVencimento(data) {
      if (!this.filtro.devolucao_data_final) return false;
      return this.filtro.devolucao_data_final <= data;
    },
    desabilitaDataPassadaVencimento: function desabilitaDataPassadaVencimento(data) {
      if (!this.filtro.devolucao_data_inicial) return false;
      return this.filtro.devolucao_data_inicial >= data;
    },
    desabilitaDataPassada: function desabilitaDataPassada(data) {
      var hoje = new Date();
      return data < hoje;
    },
    imprimir: function imprimir(parcelaId, tipo) {
      var url = contasReceberService.imprimir(parcelaId) + '?tipo_impressao=' + tipo;
      window.open(url, '_blank');
    },
    imprimir_listagem: function imprimir_listagem(tipo) {
      var obj = _objectSpread({}, this.filtro);

      if (obj.devolucao_data_inicial) obj.devolucao_data_inicial = moment__WEBPACK_IMPORTED_MODULE_2___default()(obj.devolucao_data_inicial).format('YYYY-MM-DD');
      if (obj.devolucao_data_final) obj.devolucao_data_final = moment__WEBPACK_IMPORTED_MODULE_2___default()(obj.devolucao_data_final).format('YYYY-MM-DD');
      obj.tipo_impressao = tipo;
      var url = servicoService.imprimirPendentesCobranca(obj);
      window.open(url, '_blank');
    }
  },
  watch: {
    'filtro.ordenar': function filtroOrdenar(val) {
      this.buscar();
    },
    'filtro.ordem': function filtroOrdem(val) {
      this.buscar();
    },
    'filtro.page': function filtroPage(val) {
      this.buscar();
    },
    'filtro.per_page': function filtroPer_page(val) {
      this.buscar();
    },
    'filtro.classificacao': function filtroClassificacao(val) {
      this.debounceBusca();
    },
    'filtro.texto': function filtroTexto(val) {
      this.debounceBusca();
    },
    'filtro.parceiro_id': function filtroParceiro_id(val) {
      this.debounceBusca();
    },
    'filtro.devolucao_data_final': function filtroDevolucao_data_final(val) {
      this.debounceBusca();
    },
    'filtro.devolucao_data_inicial': function filtroDevolucao_data_inicial(val) {
      this.debounceBusca();
    }
  },
  mounted: function mounted() {
    var _this7 = this;

    setTimeout(function () {
      _this7.buscar();
    }, 300);
    setTimeout(function () {
      _this7.buscarCaixas();
    }, 200);
  },
  computed: {
    clientes_diferentes: function clientes_diferentes() {
      return _toConsumableArray(new Set(this.dados.filter(function (x) {
        return x.baixar;
      }).map(function (x) {
        return x.parceiro_id;
      }))).length > 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/financeiro/servicos-pendentes/ServicosPendentesLista.vue?vue&type=template&id=43064bc2&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/financeiro/servicos-pendentes/ServicosPendentesLista.vue?vue&type=template&id=43064bc2&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-12" }, [
        _c(
          "div",
          {
            staticClass:
              "page-title-box d-flex align-items-center justify-content-between"
          },
          [
            _c("h4", { staticClass: "mb-0 font-size-18" }, [
              _vm._v("Serviços Pendentes de Cobrança")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "page-title-right" }, [
              _c("div", { staticClass: "dropdown" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "dropdown-menu dropdown-menu-right dropdown-menu-md"
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-item",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.imprimir_listagem("simplificado")
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                                    Simplificado\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-item",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.imprimir_listagem("detalhado")
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                                    Detalhado\n                                "
                        )
                      ]
                    )
                  ]
                )
              ])
            ])
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row", staticStyle: { padding: "10px" } }, [
      _c("div", { staticClass: "col-sm-12 col-md-1" }, [
        _c("label", { staticStyle: { width: "100%" } }, [
          _vm._v("Mostrar  \n            "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.filtro.per_page,
                  expression: "filtro.per_page"
                }
              ],
              staticClass: "form-control",
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.filtro,
                    "per_page",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { domProps: { value: 10 } }, [_vm._v("10")]),
              _vm._v(" "),
              _c("option", { domProps: { value: 25 } }, [_vm._v("25")]),
              _vm._v(" "),
              _c("option", { domProps: { value: 50 } }, [_vm._v("50")]),
              _vm._v(" "),
              _c("option", { domProps: { value: 100 } }, [_vm._v("100")])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-12 col-md-2" }, [
        _c(
          "label",
          { staticStyle: { width: "100%" } },
          [
            _vm._v("Entrega De:\n                "),
            _c("date-picker", {
              attrs: {
                format: "DD/MM/YYYY",
                disabledDate: _vm.desabilitaDataFuturaVencimento
              },
              model: {
                value: _vm.filtro.devolucao_data_inicial,
                callback: function($$v) {
                  _vm.$set(_vm.filtro, "devolucao_data_inicial", $$v)
                },
                expression: "filtro.devolucao_data_inicial"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-12 col-md-2" }, [
        _c(
          "label",
          { staticStyle: { width: "100%" } },
          [
            _vm._v("Entrega Até:\n                "),
            _c("date-picker", {
              attrs: {
                format: "DD/MM/YYYY",
                disabledDate: _vm.desabilitaDataPassadaVencimento
              },
              model: {
                value: _vm.filtro.devolucao_data_final,
                callback: function($$v) {
                  _vm.$set(_vm.filtro, "devolucao_data_final", $$v)
                },
                expression: "filtro.devolucao_data_final"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-12 col-md-4" }, [
        _c(
          "label",
          { staticStyle: { width: "100%" } },
          [
            _vm._v("Cliente:\n                "),
            _c(
              "vue-select",
              {
                attrs: {
                  options: _vm.parceiros,
                  reduce: function(c) {
                    return c.id
                  },
                  placeholder: "Todos",
                  label: "apelido"
                },
                on: {
                  input: function($event) {
                    return _vm.navegar(1)
                  },
                  search: _vm.buscarParceiroDebounce
                },
                model: {
                  value: _vm.filtro.parceiro_id,
                  callback: function($$v) {
                    _vm.$set(_vm.filtro, "parceiro_id", $$v)
                  },
                  expression: "filtro.parceiro_id"
                }
              },
              [
                _c(
                  "div",
                  { attrs: { slot: "no-options" }, slot: "no-options" },
                  [
                    _vm._v(
                      "Nenhum item para mostrar! Começe digitar para pesquisar"
                    )
                  ]
                )
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-12 col-md-3" }, [
        _c("label", { staticStyle: { width: "100%" } }, [
          _vm._v("Buscar por:\n                "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.filtro.texto,
                expression: "filtro.texto"
              }
            ],
            staticClass: "form-control",
            attrs: {
              autofocus: "",
              type: "text",
              placeholder: "Codigo / Descrição"
            },
            domProps: { value: _vm.filtro.texto },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.filtro, "texto", $event.target.value)
              }
            }
          })
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _vm.clientes_diferentes
        ? _c(
            "div",
            { staticClass: "col-12 mb-10" },
            [
              _c("mensagem-componente", {
                attrs: {
                  titulo: "Fatura não pode ser gerada!",
                  erros:
                    "Para gerar fatura, todos os serviços selecionados devem ser do mesmo cliente",
                  fechar: false
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "col-9 mb-10" }, [
        _c("strong", [
          _vm._v(
            _vm._s(_vm.faturaModal.ordens_servico.length) +
              " Itens Selecionados: "
          )
        ]),
        _vm._v(
          " " +
            _vm._s(_vm.$store.state.moeda.sigla) +
            " " +
            _vm._s(
              _vm._f("currency")(
                _vm.faturaModal.valor_total,
                _vm.$store.state.moeda
              )
            )
        ),
        _c("br")
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value:
                _vm.faturaModal.ordens_servico.length > 0 &&
                !_vm.clientes_diferentes,
              expression:
                "faturaModal.ordens_servico.length > 0 && !clientes_diferentes"
            }
          ],
          staticClass: "col-3"
        },
        [
          _c(
            "button",
            {
              staticClass: "btn btn-primary waves-effect waves-light w-sm",
              attrs: {
                type: "button",
                title: "Gerar Fatura",
                "data-toggle": "modal",
                "data-target": "#modal-gerar-fatura"
              },
              on: {
                click: function($event) {
                  return _vm.abrirModalFatura()
                }
              }
            },
            [
              _c("i", { staticClass: "bx bx-receipt d-block font-size-16" }),
              _vm._v(" Gerar Fatura\n                ")
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "table-responsive" }, [
              _c(
                "table",
                { staticClass: "table mb-0" },
                [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.baixar_todos,
                              expression: "baixar_todos"
                            }
                          ],
                          attrs: { type: "checkbox" },
                          domProps: {
                            checked: Array.isArray(_vm.baixar_todos)
                              ? _vm._i(_vm.baixar_todos, null) > -1
                              : _vm.baixar_todos
                          },
                          on: {
                            change: [
                              function($event) {
                                var $$a = _vm.baixar_todos,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      (_vm.baixar_todos = $$a.concat([$$v]))
                                  } else {
                                    $$i > -1 &&
                                      (_vm.baixar_todos = $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1)))
                                  }
                                } else {
                                  _vm.baixar_todos = $$c
                                }
                              },
                              function($event) {
                                return _vm.selecionarTodos()
                              }
                            ]
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("th", [_vm._v("#")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Cliente")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Descrição")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Tipo")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Entrega")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Valor")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Ações")])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.dados, function(dado, index) {
                    return _c("tbody", { key: index }, [
                      _c("tr", [
                        _c("td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: dado.baixar,
                                expression: "dado.baixar"
                              }
                            ],
                            attrs: { type: "checkbox" },
                            domProps: {
                              checked: Array.isArray(dado.baixar)
                                ? _vm._i(dado.baixar, null) > -1
                                : dado.baixar
                            },
                            on: {
                              change: [
                                function($event) {
                                  var $$a = dado.baixar,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          dado,
                                          "baixar",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          dado,
                                          "baixar",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(dado, "baixar", $$c)
                                  }
                                },
                                function($event) {
                                  return _vm.selecionouItem()
                                }
                              ]
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(dado.id))]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "span",
                            {
                              staticStyle: { cursor: "pointer" },
                              on: {
                                click: function($event) {
                                  return _vm.setClienteFiltro(dado.parceiro)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            " +
                                  _vm._s(
                                    dado.parceiro
                                      ? dado.parceiro.apelido
                                      : " - "
                                  ) +
                                  " \n                                        "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(dado.descricao) + " ")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(dado.tipo) + " ")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm._f("timeformat")(dado.devolucao_data)) +
                              " "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { "white-space": "nowrap" } }, [
                          _vm._v(
                            _vm._s(
                              _vm._f("currency")(
                                dado.valor_total,
                                _vm.$store.state.moeda
                              )
                            ) + " "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-outline-primary waves-effect waves-light",
                              staticStyle: { padding: "3px 12px 3px 12px" },
                              attrs: {
                                type: "button",
                                title: "Ver Detalhes",
                                "data-toggle": "collapse",
                                href: "#collapse-servicos" + dado.id
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "mdi mdi-eye-outline  font-size-12"
                              })
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "tr",
                        {
                          staticClass: "collapse",
                          attrs: { id: "collapse-servicos" + dado.id }
                        },
                        [
                          _c("td"),
                          _vm._v(" "),
                          _c("td", { attrs: { colspan: "7" } }, [
                            _c("div", { staticClass: "table-responsive" }, [
                              _c(
                                "table",
                                {
                                  staticClass:
                                    "table table-nowrap table-centered mb-0"
                                },
                                [
                                  _vm._m(1, true),
                                  _vm._v(" "),
                                  _c(
                                    "tbody",
                                    _vm._l(dado.servicos, function(s) {
                                      return _c("tr", { key: s.id }, [
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "text-muted" },
                                            [_vm._v(_vm._s(s.id))]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "text-muted ellipsis"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(s.servico_item.nome)
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "text-muted ellipsis"
                                            },
                                            [_vm._v(_vm._s(s.descricao))]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "text-muted" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("currency")(
                                                    s.valor_unitario,
                                                    _vm.$store.state.moeda
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "text-muted" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("qtde")(
                                                    s.qtde,
                                                    s.servico_item.medida
                                                      .decimais
                                                  )
                                                ) +
                                                  " " +
                                                  _vm._s(
                                                    s.servico_item.medida.sigla
                                                  )
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "text-muted" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("currency")(
                                                    s.valor,
                                                    _vm.$store.state.moeda
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        ])
                                      ])
                                    }),
                                    0
                                  )
                                ]
                              )
                            ])
                          ])
                        ]
                      )
                    ])
                  }),
                  _vm._v(" "),
                  _c("tfoot", [
                    _c("tr", [
                      _c(
                        "td",
                        { attrs: { colspan: "8" } },
                        [
                          _c("paginacao-componente", {
                            attrs: { source: _vm.paginacao },
                            on: {
                              navigate: function($event) {
                                return _vm.navegar($event)
                              }
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ],
                2
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        staticStyle: { display: "none" },
        attrs: {
          id: "modal-gerar-fatura",
          tabindex: "-1",
          "aria-labelledby": "modal-gerar-fatura-title",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-lg modal-dialog-scrollable",
            staticStyle: { "min-height": "450px" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(2),
              _vm._v(" "),
              _vm.faturaModal.parceiro
                ? _c(
                    "form",
                    {
                      staticClass: "modal-body",
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.salvarFatura()
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "label",
                          { staticClass: "col-sm-3 col-form-label" },
                          [_vm._v("Cliente")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-9" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.faturaModal.parceiro.id) +
                              ": " +
                              _vm._s(_vm.faturaModal.parceiro.razao_social) +
                              "\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "label",
                          { staticClass: "col-sm-3 col-form-label" },
                          [_vm._v("Valor Total")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-9" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.$store.state.moeda.simbolo) +
                              " " +
                              _vm._s(
                                _vm._f("currency")(
                                  _vm.faturaModal.valor_total,
                                  _vm.$store.state.moeda
                                )
                              ) +
                              "\n                        "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "label",
                          { staticClass: "col-sm-3 col-form-label" },
                          [_vm._v("Vencimento")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-sm-9" },
                          [
                            _c(
                              "container-componente",
                              {
                                attrs: {
                                  validator:
                                    _vm.$v.faturaModal.parcelas.$each[0]
                                      .data_vencimento
                                }
                              },
                              [
                                _c("date-picker", {
                                  attrs: {
                                    format: "DD/MM/YYYY",
                                    disabledDate: _vm.desabilitaDataPassada
                                  },
                                  model: {
                                    value:
                                      _vm.faturaModal.parcelas[0]
                                        .data_vencimento,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.faturaModal.parcelas[0],
                                        "data_vencimento",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "faturaModal.parcelas[0].data_vencimento"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "label",
                          { staticClass: "col-sm-3 col-form-label" },
                          [_vm._v("Observações")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-sm-9" },
                          [
                            _c(
                              "container-componente",
                              {
                                attrs: {
                                  validator: _vm.$v.faturaModal.historico
                                }
                              },
                              [
                                _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.faturaModal.historico,
                                      expression: "faturaModal.historico"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    rows: "4",
                                    placeholder: "Observações adicionais"
                                  },
                                  domProps: {
                                    value: _vm.faturaModal.historico
                                  },
                                  on: {
                                    blur: function($event) {
                                      return _vm.$v.faturaModal.historico.$touch()
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.faturaModal,
                                        "historico",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "label",
                          { staticClass: "col-sm-3 col-form-label" },
                          [_vm._v("Itens")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-12" }, [
                          _c("div", { staticClass: "table-responsive" }, [
                            _c(
                              "table",
                              { staticClass: "table mb-0" },
                              [
                                _vm._m(3),
                                _vm._v(" "),
                                _vm._l(_vm.faturaModal.ordens_servico, function(
                                  dado,
                                  index
                                ) {
                                  return _c("tbody", { key: index }, [
                                    _c("tr", [
                                      _c("td", [_vm._v(_vm._s(dado.id))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(dado.descricao) + " ")
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(dado.tipo) + " ")
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("timeformat")(
                                              dado.devolucao_data
                                            )
                                          ) + " "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        {
                                          staticStyle: {
                                            "white-space": "nowrap"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("currency")(
                                                dado.valor_total,
                                                _vm.$store.state.moeda
                                              )
                                            ) + " "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("td", [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-outline-primary waves-effect waves-light",
                                            staticStyle: {
                                              padding: "3px 12px 3px 12px"
                                            },
                                            attrs: {
                                              type: "button",
                                              title: "Ver Detalhes",
                                              "data-toggle": "collapse",
                                              href:
                                                "#collapse-servicos-modal" +
                                                dado.id
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "mdi mdi-eye-outline  font-size-12"
                                            })
                                          ]
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "tr",
                                      {
                                        staticClass: "collapse",
                                        attrs: {
                                          id:
                                            "collapse-servicos-modal" + dado.id
                                        }
                                      },
                                      [
                                        _c("td"),
                                        _vm._v(" "),
                                        _c("td", { attrs: { colspan: "4" } }, [
                                          _c(
                                            "table",
                                            {
                                              staticClass:
                                                "table table-nowrap table-centered mb-0"
                                            },
                                            [
                                              _vm._m(4, true),
                                              _vm._v(" "),
                                              _c(
                                                "tbody",
                                                _vm._l(dado.servicos, function(
                                                  s
                                                ) {
                                                  return _c(
                                                    "tr",
                                                    { key: s.id },
                                                    [
                                                      _c(
                                                        "td",
                                                        {
                                                          attrs: {
                                                            scope: "col"
                                                          }
                                                        },
                                                        [_vm._v(_vm._s(s.id))]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        {
                                                          attrs: {
                                                            scope: "col"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              s.servico_item
                                                                ? s.servico_item
                                                                    .nome
                                                                : "Serviço"
                                                            )
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        {
                                                          attrs: {
                                                            scope: "col"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(s.descricao)
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        {
                                                          attrs: {
                                                            scope: "col"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm._f(
                                                                "currency"
                                                              )(
                                                                s.valor_unitario,
                                                                _vm.$store.state
                                                                  .moeda
                                                              )
                                                            )
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        {
                                                          attrs: {
                                                            scope: "col"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm._f("qtde")(
                                                                s.qtde,
                                                                s.servico_item
                                                                  ? s
                                                                      .servico_item
                                                                      .medida
                                                                      .decimais
                                                                  : 1
                                                              )
                                                            ) +
                                                              " " +
                                                              _vm._s(
                                                                s.servico_item
                                                                  ? s
                                                                      .servico_item
                                                                      .medida
                                                                      .sigla
                                                                  : "Un"
                                                              )
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "td",
                                                        {
                                                          attrs: {
                                                            scope: "col"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm._f(
                                                                "currency"
                                                              )(
                                                                s.valor,
                                                                _vm.$store.state
                                                                  .moeda
                                                              )
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                }),
                                                0
                                              )
                                            ]
                                          )
                                        ])
                                      ]
                                    )
                                  ])
                                })
                              ],
                              2
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer row" }, [
                _vm.erroModal || _vm.sucessoModal
                  ? _c(
                      "div",
                      { staticClass: "col-md-12" },
                      [
                        _c("mensagem-componente", {
                          attrs: { titulo: "Erro!", erros: _vm.erroModal },
                          on: {
                            fechar: function($event) {
                              _vm.erroModal = null
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("mensagem-componente", {
                          attrs: { sucesso: _vm.sucessoModal },
                          on: {
                            fechar: function($event) {
                              _vm.sucessoModal = null
                            }
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-12 text-right" }, [
                  _vm._m(5),
                  _vm._v(" "),
                  !_vm.faturaModal.id
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.salvarFatura()
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "mdi mdi-content-save font-size-18"
                          }),
                          _vm._v(" Faturar ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.faturaModal.id
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-success",
                          attrs: { type: "button", title: "Imprimir" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.imprimir(
                                _vm.faturaModal.parcelas[0].id,
                                "simplificado"
                              )
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "mdi mdi-printer font-size-18"
                          }),
                          _vm._v(" Simplificado ")
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.faturaModal.id
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-success",
                          attrs: { type: "button", title: "Imprimir" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.imprimir(
                                _vm.faturaModal.parcelas[0].id,
                                "detalhado"
                              )
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "mdi mdi-printer font-size-18"
                          }),
                          _vm._v(" Detalhado ")
                        ]
                      )
                    : _vm._e()
                ])
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-light dropdown-toggle",
        attrs: {
          type: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [
        _c("i", { staticClass: "mdi mdi-printer mr-1" }),
        _vm._v(" "),
        _c("span", { staticClass: "d-none d-sm-inline-block" }, [
          _vm._v("Imprimir "),
          _c("i", { staticClass: "mdi mdi-chevron-down" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Id")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Serviço")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Descrição")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Valor Unit")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Qtde")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Valor")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h4",
        {
          staticClass: "modal-title mt-0",
          attrs: { id: "modal-gerar-faturaTitle" }
        },
        [_vm._v(" Gerar Fatura de Cobrança ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Descrição")]),
        _vm._v(" "),
        _c("th", [_vm._v("Tipo")]),
        _vm._v(" "),
        _c("th", [_vm._v("Entrega")]),
        _vm._v(" "),
        _c("th", [_vm._v("Valor")]),
        _vm._v(" "),
        _c("th", [_vm._v("Detalhes")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Id")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Serviço")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Descrição")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Valor Unit")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Qtde")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Valor")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-secondary",
        attrs: { type: "button", "data-dismiss": "modal" }
      },
      [
        _c("i", { staticClass: "mdi mdi-close-circle font-size-18" }),
        _vm._v(" Fechar")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/financeiro/servicos-pendentes/ServicosPendentesLista.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/financeiro/servicos-pendentes/ServicosPendentesLista.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ServicosPendentesLista_vue_vue_type_template_id_43064bc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServicosPendentesLista.vue?vue&type=template&id=43064bc2&scoped=true& */ "./resources/js/views/financeiro/servicos-pendentes/ServicosPendentesLista.vue?vue&type=template&id=43064bc2&scoped=true&");
/* harmony import */ var _ServicosPendentesLista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServicosPendentesLista.vue?vue&type=script&lang=js& */ "./resources/js/views/financeiro/servicos-pendentes/ServicosPendentesLista.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ServicosPendentesLista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ServicosPendentesLista_vue_vue_type_template_id_43064bc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ServicosPendentesLista_vue_vue_type_template_id_43064bc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "43064bc2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/financeiro/servicos-pendentes/ServicosPendentesLista.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/financeiro/servicos-pendentes/ServicosPendentesLista.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/views/financeiro/servicos-pendentes/ServicosPendentesLista.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicosPendentesLista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ServicosPendentesLista.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/financeiro/servicos-pendentes/ServicosPendentesLista.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicosPendentesLista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/financeiro/servicos-pendentes/ServicosPendentesLista.vue?vue&type=template&id=43064bc2&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/views/financeiro/servicos-pendentes/ServicosPendentesLista.vue?vue&type=template&id=43064bc2&scoped=true& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicosPendentesLista_vue_vue_type_template_id_43064bc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ServicosPendentesLista.vue?vue&type=template&id=43064bc2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/financeiro/servicos-pendentes/ServicosPendentesLista.vue?vue&type=template&id=43064bc2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicosPendentesLista_vue_vue_type_template_id_43064bc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ServicosPendentesLista_vue_vue_type_template_id_43064bc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=57.js.map