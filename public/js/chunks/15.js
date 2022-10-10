(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuracoes/cambio/CambiosLista.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/configuracoes/cambio/CambiosLista.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services */ "./resources/js/services/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
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


var cambioService = new _services__WEBPACK_IMPORTED_MODULE_0__["CambioService"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      cambios: [],
      moedas: [],
      timer: null,
      multiplicadores: [{
        id: 0,
        label: 'Dividir'
      }, {
        id: 1,
        label: 'Multiplicar'
      }],
      //simulador
      moeda1: {},
      moeda2: {},
      taxa1: '',
      taxa2: '',
      valor_moeda1: '',
      valor_moeda2: '',
      convertido_moeda1: '',
      convertido_moeda2: '',
      filtro: {
        ordenar: 'id',
        ordem: 'asc',
        page: 1,
        per_page: 25,
        texto: ''
      },
      paginacao: {
        current_page: 0,
        total: 0,
        last_page: 0,
        from: 0,
        to: 0,
        per_page: 25
      },
      debounce: null,
      cambioModal: {
        id: null,
        moeda_origem_id: '',
        moeda_destino_id: '',
        multiplicar: '',
        taxa_inicial: ''
      },
      sucessoEditar: null,
      erroEditar: null,
      money: {
        decimal: ',',
        thousands: '.',
        prefix: '',
        suffix: '',
        precision: 2,
        masked: false
      }
    };
  },
  validations: function validations() {
    return {
      cambioModal: {
        moeda_origem_id: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        moeda_destino_id: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        multiplicar: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
        },
        taxa_inicial: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          minValue: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minValue"])(0.01)
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
    buscarCambios: function buscarCambios() {
      var _this2 = this;

      cambioService.get(this.filtro).then(function (response) {
        _this2.cambios = response.data.data;
        _this2.paginacao = response.data;
        _this2.filtro.page = response.data.current_page;
        _this2.paginacao.per_page = response.data.per_page;
      });
    },
    novoCambio: function novoCambio(obj) {
      this.sucessoEditar = null;
      this.erroEditar = null;
      this.$v.cambioModal.$reset();
      this.cambioModal = {
        id: null,
        moeda_origem_id: '',
        moeda_destino_id: '',
        multiplicar: ''
      };
      this.moeda1 = '';
      this.moeda2 = '';
      this.taxa1 = '';
      this.taxa2 = '';
      this.valor_moeda1 = '';
      this.valor_moeda2 = '';
      this.convertido_moeda1 = '';
      this.convertido_moeda2 = '';
    },
    editarCambio: function editarCambio(obj) {
      this.$v.cambioModal.$reset();
      this.sucessoEditar = null;
      this.erroEditar = null;
      this.cambioModal = _objectSpread({}, obj);
      this.setMoeda1();
      this.setMoeda2();
      this.taxa1 = '';
      this.taxa2 = '';
      this.valor_moeda1 = '';
      this.valor_moeda2 = '';
      this.convertido_moeda1 = '';
      this.convertido_moeda2 = '';
    },
    salvarCambio: function salvarCambio() {
      var _this3 = this;

      this.$v.cambioModal.$touch();

      if (this.$v.cambioModal.$invalid) {
        return 0;
      }

      this.sucessoEditar = null;
      this.erroEditar = null;
      var req = this.cambioModal.id ? cambioService.update(this.cambioModal) : cambioService.create(this.cambioModal);
      req.then(function (response) {
        var obj = response.data;

        var i = _this3.cambios.map(function (x) {
          return x.id;
        }).indexOf(obj.id); // if(i < 0)
        //     this.cambios.push(obj);
        // else
        //     this.cambios.splice(i,1,obj)


        _this3.buscarCambios();

        _this3.sucessoEditar = 'Conta salva com sucesso!';
      })["catch"](function (erro) {
        return _this3.erroEditar = erro;
      });
    },
    navegar: function navegar(pagina) {
      this.filtro.page = pagina;
      this.buscarCambios();
    },
    buscarMoedas: function buscarMoedas() {
      var _this4 = this;

      cambioService.todasMoedas().then(function (response) {
        _this4.moedas = response.data;
      });
    },
    setMoeda1: function setMoeda1() {
      var _this5 = this;

      var moeda1 = this.moedas.filter(function (x) {
        return x.id == _this5.cambioModal.moeda_origem_id;
      });
      if (moeda1.length == 1) this.moeda1 = moeda1[0].nome;else this.moeda1 = '';
    },
    setMoeda2: function setMoeda2() {
      var _this6 = this;

      var moeda2 = this.moedas.filter(function (x) {
        return x.id == _this6.cambioModal.moeda_destino_id;
      });
      if (moeda2.length == 1) this.moeda2 = moeda2[0].nome;else this.moeda2 = '';
    }
  },
  watch: {
    valor_moeda1: function valor_moeda1(val) {
      if (!(this.valor_moeda1 > 0) || !(this.taxa1 > 0)) this.convertido_moeda2 = 0;else this.convertido_moeda2 = this.cambioModal.multiplicar == 1 ? this.taxa1 * this.valor_moeda1 : this.valor_moeda1 / this.taxa1;
    },
    taxa1: function taxa1(val) {
      if (!(this.valor_moeda1 > 0) || !(this.taxa1 > 0)) this.convertido_moeda2 = 0;else this.convertido_moeda2 = this.cambioModal.multiplicar == 1 ? this.taxa1 * this.valor_moeda1 : this.valor_moeda1 / this.taxa1;
    },
    valor_moeda2: function valor_moeda2(val) {
      if (!(this.valor_moeda2 > 0) || !(this.taxa2 > 0)) this.convertido_moeda1 = 0;else this.convertido_moeda1 = this.cambioModal.multiplicar == 1 ? this.valor_moeda2 / this.taxa2 : this.taxa2 * this.valor_moeda2;
    },
    taxa2: function taxa2(val) {
      if (!(this.valor_moeda2 > 0) || !(this.taxa2 > 0)) this.convertido_moeda1 = 0;else this.convertido_moeda1 = this.cambioModal.multiplicar == 1 ? this.valor_moeda2 / this.taxa2 : this.taxa2 * this.valor_moeda2;
    },
    'cambioModal.multiplicar': function cambioModalMultiplicar(val) {
      if (!(this.valor_moeda1 > 0) || !(this.taxa1 > 0)) this.convertido_moeda2 = 0;else this.convertido_moeda2 = this.cambioModal.multiplicar == 1 ? this.taxa1 * this.valor_moeda1 : this.valor_moeda1 / this.taxa1;
      if (!(this.valor_moeda2 > 0) || !(this.taxa2 > 0)) this.convertido_moeda1 = 0;else this.convertido_moeda1 = this.cambioModal.multiplicar == 1 ? this.valor_moeda2 / this.taxa2 : this.taxa2 * this.valor_moeda2;
    }
  },
  mounted: function mounted() {
    var _this7 = this;

    this.buscarMoedas();
    setTimeout(function () {
      _this7.buscarCambios();
    }, 400);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuracoes/cambio/CambiosLista.vue?vue&type=template&id=967a1e06&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/configuracoes/cambio/CambiosLista.vue?vue&type=template&id=967a1e06& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
              _vm._v("Cadastro de Cambios")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "page-title-right" }, [
              _c(
                "a",
                {
                  staticClass: "btn green-jungle btn-md",
                  attrs: { href: "#modal-editar", "data-toggle": "modal" },
                  on: {
                    click: function($event) {
                      return _vm.novoCambio()
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fa fa-plus-circle" }),
                  _vm._v(" "),
                  _c("span", { staticClass: "hidden-xs" }, [
                    _vm._v("Nova Combinação de Cambio")
                  ])
                ]
              )
            ])
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row", staticStyle: { padding: "10px" } }, [
      _c("div", { staticClass: "col-sm-12 col-md-3" }, [
        _c("label", [
          _vm._v("Mostrar  \n                "),
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
              staticClass:
                "custom-select custom-select-sm form-control form-control-sm",
              on: {
                input: _vm.debounceBusca,
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
      _c("div", { staticClass: "col-sm-12 col-md-7" }, [
        _c("label", { staticStyle: { width: "90%" } }, [
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
            staticClass: "form-control form-control-sm",
            attrs: { type: "text", placeholder: "Nome / Descrição" },
            domProps: { value: _vm.filtro.texto },
            on: {
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.filtro, "texto", $event.target.value)
                },
                _vm.debounceBusca
              ]
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-12 col-md-2" }, [
        _c("label", { staticStyle: { width: "90%" } }, [
          _vm._v("Filtrar:\n                "),
          _c(
            "button",
            {
              staticClass: "btn btn-outline-primary btn-sm btn-block",
              on: {
                click: function($event) {
                  return _vm.navegar(1)
                }
              }
            },
            [_c("span", { staticClass: "bx bx-search-alt" })]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("h4", { staticClass: "card-title" }, [
              _vm._v("Lista de Cambios")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table mb-0" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.cambios, function(registro) {
                    return _c("tr", { key: registro.id }, [
                      _c("td", [_vm._v(_vm._s(registro.id))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(registro.moeda_origem.nome) + " ")
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            registro.multiplicar ? "Multiplicar" : "Dividir"
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(registro.moeda_destino.nome) + " ")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-outline-warning waves-effect waves-light",
                            staticStyle: { padding: "3px 12px 3px 12px" },
                            attrs: {
                              type: "button",
                              title: "Editar",
                              "data-toggle": "modal",
                              "data-target": "#modal-editar",
                              "data-backdrop": "static"
                            },
                            on: {
                              click: function($event) {
                                return _vm.editarCambio(registro)
                              }
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "mdi mdi-pencil d-block font-size-12"
                            })
                          ]
                        )
                      ])
                    ])
                  }),
                  0
                ),
                _vm._v(" "),
                _c("tfoot", [
                  _c("tr", [
                    _c(
                      "td",
                      { attrs: { colspan: "4" } },
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
              ])
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
        attrs: { id: "modal-editar", tabIndex: "1" }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-lg ",
            attrs: { role: "document" }
          },
          [
            _c(
              "form",
              {
                staticClass: "modal-content",
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.salvarCambio()
                  }
                }
              },
              [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "modal-body",
                    staticStyle: { "min-height": "450px" }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-md-6" },
                        [
                          _c(
                            "container-componente",
                            {
                              attrs: {
                                label: "Moeda 1",
                                validator: _vm.$v.cambioModal.moeda_origem_id
                              }
                            },
                            [
                              _c("vue-select", {
                                attrs: {
                                  disabled: _vm.cambioModal.id > 0,
                                  options: _vm.moedas,
                                  reduce: function(m) {
                                    return m.id
                                  },
                                  clearable: false,
                                  label: "nome"
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.setMoeda1()
                                  }
                                },
                                model: {
                                  value: _vm.cambioModal.moeda_origem_id,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.cambioModal,
                                      "moeda_origem_id",
                                      $$v
                                    )
                                  },
                                  expression: "cambioModal.moeda_origem_id"
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
                        "div",
                        { staticClass: "col-md-6" },
                        [
                          _c(
                            "container-componente",
                            {
                              attrs: {
                                label: "Moeda 2",
                                validator: _vm.$v.cambioModal.moeda_destino_id
                              }
                            },
                            [
                              _c("vue-select", {
                                attrs: {
                                  disabled: _vm.cambioModal.id > 0,
                                  options: _vm.moedas,
                                  reduce: function(m) {
                                    return m.id
                                  },
                                  clearable: false,
                                  label: "nome"
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.setMoeda2()
                                  }
                                },
                                model: {
                                  value: _vm.cambioModal.moeda_destino_id,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.cambioModal,
                                      "moeda_destino_id",
                                      $$v
                                    )
                                  },
                                  expression: "cambioModal.moeda_destino_id"
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
                        "div",
                        { staticClass: "col-md-6" },
                        [
                          _c(
                            "container-componente",
                            {
                              attrs: {
                                label: "Multiplicador",
                                validator: _vm.$v.cambioModal.multiplicar
                              }
                            },
                            [
                              _c("vue-select", {
                                attrs: {
                                  options: _vm.multiplicadores,
                                  reduce: function(m) {
                                    return m.id
                                  },
                                  clearable: false,
                                  label: "label"
                                },
                                model: {
                                  value: _vm.cambioModal.multiplicar,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.cambioModal,
                                      "multiplicar",
                                      $$v
                                    )
                                  },
                                  expression: "cambioModal.multiplicar"
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
                        "div",
                        { staticClass: "col-md-6" },
                        [
                          _c(
                            "container-componente",
                            {
                              attrs: {
                                label: "Taxa Inicial",
                                validator: _vm.$v.cambioModal.taxa_inicial
                              }
                            },
                            [
                              _c(
                                "money",
                                _vm._b(
                                  {
                                    staticClass: "form-control",
                                    model: {
                                      value: _vm.cambioModal.taxa_inicial,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.cambioModal,
                                          "taxa_inicial",
                                          $$v
                                        )
                                      },
                                      expression: "cambioModal.taxa_inicial"
                                    }
                                  },
                                  "money",
                                  _vm.money,
                                  false
                                )
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm._m(2),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4" },
                        [
                          _c("label", { attrs: { for: "valor_1" } }, [
                            _vm._v("Valor em: " + _vm._s(_vm.moeda1))
                          ]),
                          _vm._v(" "),
                          _c(
                            "money",
                            _vm._b(
                              {
                                staticClass: "form-control",
                                model: {
                                  value: _vm.valor_moeda1,
                                  callback: function($$v) {
                                    _vm.valor_moeda1 = $$v
                                  },
                                  expression: "valor_moeda1"
                                }
                              },
                              "money",
                              _vm.money,
                              false
                            )
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4" },
                        [
                          _c("label", { attrs: { for: "taxa_1" } }, [
                            _vm._v("Taxa")
                          ]),
                          _vm._v(" "),
                          _c(
                            "money",
                            _vm._b(
                              {
                                staticClass: "form-control",
                                model: {
                                  value: _vm.taxa1,
                                  callback: function($$v) {
                                    _vm.taxa1 = $$v
                                  },
                                  expression: "taxa1"
                                }
                              },
                              "money",
                              _vm.money,
                              false
                            )
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4" },
                        [
                          _c("label", { attrs: { for: "convertido_2" } }, [
                            _vm._v("Valor Convertido em: " + _vm._s(_vm.moeda2))
                          ]),
                          _vm._v(" "),
                          _c(
                            "money",
                            _vm._b(
                              {
                                staticClass: "form-control",
                                attrs: { disabled: true },
                                model: {
                                  value: _vm.convertido_moeda2,
                                  callback: function($$v) {
                                    _vm.convertido_moeda2 = $$v
                                  },
                                  expression: "convertido_moeda2"
                                }
                              },
                              "money",
                              _vm.money,
                              false
                            )
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4" },
                        [
                          _c("label", { attrs: { for: "valor_2" } }, [
                            _vm._v("Valor em: " + _vm._s(_vm.moeda2))
                          ]),
                          _vm._v(" "),
                          _c(
                            "money",
                            _vm._b(
                              {
                                staticClass: "form-control",
                                model: {
                                  value: _vm.valor_moeda2,
                                  callback: function($$v) {
                                    _vm.valor_moeda2 = $$v
                                  },
                                  expression: "valor_moeda2"
                                }
                              },
                              "money",
                              _vm.money,
                              false
                            )
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4" },
                        [
                          _c("label", { attrs: { for: "taxa_2" } }, [
                            _vm._v("Taxa")
                          ]),
                          _vm._v(" "),
                          _c(
                            "money",
                            _vm._b(
                              {
                                staticClass: "form-control",
                                model: {
                                  value: _vm.taxa2,
                                  callback: function($$v) {
                                    _vm.taxa2 = $$v
                                  },
                                  expression: "taxa2"
                                }
                              },
                              "money",
                              _vm.money,
                              false
                            )
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-4" },
                        [
                          _c("label", { attrs: { for: "convertido_1" } }, [
                            _vm._v("Valor Convertido em: " + _vm._s(_vm.moeda1))
                          ]),
                          _vm._v(" "),
                          _c(
                            "money",
                            _vm._b(
                              {
                                staticClass: "form-control",
                                attrs: { disabled: true },
                                model: {
                                  value: _vm.convertido_moeda1,
                                  callback: function($$v) {
                                    _vm.convertido_moeda1 = $$v
                                  },
                                  expression: "convertido_moeda1"
                                }
                              },
                              "money",
                              _vm.money,
                              false
                            )
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.erroEditar || _vm.sucessoEditar
                        ? _c(
                            "div",
                            { staticClass: "col-md-12" },
                            [
                              _c("hr"),
                              _vm._v(" "),
                              _c("mensagem-componente", {
                                attrs: { erros: _vm.erroEditar },
                                on: {
                                  fechar: function($event) {
                                    _vm.erroEditar = null
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("mensagem-componente", {
                                attrs: { sucesso: _vm.sucessoEditar },
                                on: {
                                  fechar: function($event) {
                                    _vm.sucessoEditar = null
                                  }
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("Fechar")]
                  ),
                  _vm._v(" "),
                  !_vm.sucessoEditar
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "submit" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-save" }),
                          _vm._v(" Salvar\n                    ")
                        ]
                      )
                    : _vm._e()
                ])
              ]
            )
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
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v(" Id ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Moeda  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Fator  ")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Moeda  ")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v(" Ações  ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title mt-0" }, [
        _vm._v("  Cadastro de Cambio")
      ]),
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
    return _c("div", { staticClass: "col-md-12" }, [
      _c("hr"),
      _vm._v(" "),
      _c("h4", [_c("strong", [_vm._v("Simulador")])])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/configuracoes/cambio/CambiosLista.vue":
/*!******************************************************************!*\
  !*** ./resources/js/views/configuracoes/cambio/CambiosLista.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CambiosLista_vue_vue_type_template_id_967a1e06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CambiosLista.vue?vue&type=template&id=967a1e06& */ "./resources/js/views/configuracoes/cambio/CambiosLista.vue?vue&type=template&id=967a1e06&");
/* harmony import */ var _CambiosLista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CambiosLista.vue?vue&type=script&lang=js& */ "./resources/js/views/configuracoes/cambio/CambiosLista.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CambiosLista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CambiosLista_vue_vue_type_template_id_967a1e06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CambiosLista_vue_vue_type_template_id_967a1e06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/configuracoes/cambio/CambiosLista.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/configuracoes/cambio/CambiosLista.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/configuracoes/cambio/CambiosLista.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CambiosLista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CambiosLista.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuracoes/cambio/CambiosLista.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CambiosLista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/configuracoes/cambio/CambiosLista.vue?vue&type=template&id=967a1e06&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/configuracoes/cambio/CambiosLista.vue?vue&type=template&id=967a1e06& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CambiosLista_vue_vue_type_template_id_967a1e06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CambiosLista.vue?vue&type=template&id=967a1e06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuracoes/cambio/CambiosLista.vue?vue&type=template&id=967a1e06&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CambiosLista_vue_vue_type_template_id_967a1e06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CambiosLista_vue_vue_type_template_id_967a1e06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=15.js.map