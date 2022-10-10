(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuracoes/cambio/TaxaCambioLista.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/configuracoes/cambio/TaxaCambioLista.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      filtro: {
        ordenar: 'id',
        ordem: 'asc',
        page: 1,
        per_page: 10000,
        texto: ''
      },
      sucessoEditar: null,
      erroEditar: null,
      cambioModal: {
        taxas: []
      },
      variacao_alta: false,
      variacao_confirmada: false,
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
        taxas: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
          $each: {
            id: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
            taxa: {
              required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
              minValue: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minValue"])(0)
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
    buscarCambios: function buscarCambios() {
      var _this2 = this;

      cambioService.getCambioAgora(this.filtro).then(function (response) {
        _this2.cambios = response.data.map(function (x) {
          x.ultima_taxa.taxa = x.ultima_taxa ? Number(x.ultima_taxa.taxa) : 0;
          return x;
        });
      });
    },
    abreModalAtualizarCambio: function abreModalAtualizarCambio() {
      this.erroEditar = null;
      this.sucessoEditar = null;
      this.$v.cambioModal.$reset();
      this.cambioModal.taxas = _toConsumableArray(this.cambios.map(function (x) {
        x = _objectSpread({}, x);
        x.taxa = x.ultima_taxa ? x.ultima_taxa.taxa : 0;
        x.variacao = 0;
        return x;
      }));
      this.variacao_alta = false;
      this.variacao_confirmada = false;
    },
    calcularVariacao: function calcularVariacao(taxa) {
      if (taxa.taxa <= 0) {
        taxa.variacao = -100;
        return 0;
      }

      var variacao = taxa.taxa * 1 - taxa.ultima_taxa.taxa * 1;
      taxa.variacao = Math.round(variacao / taxa.ultima_taxa.taxa * 10000) / 100;
    },
    atualizarCambio: function atualizarCambio() {
      var _this3 = this;

      this.sucessoEditar = null;
      this.erroEditar = null;

      if (this.cambioModal.taxas.filter(function (x) {
        return x.taxa <= 0;
      }).length > 0) {
        this.erroEditar = "Existem taxas com valores zerados, ou negativos. Corrija para prosseguir!";
        return 0;
      }

      if (this.cambioModal.taxas.filter(function (x) {
        return x.variacao > 10 || x.variacao < -10;
      }).length > 0 && !this.variacao_confirmada) {
        this.variacao_alta = true;
        return 0;
      }

      var req = cambioService.atualizarCambios(this.cambioModal.taxas);
      req.then(function (response) {
        _this3.cambios = response.data.map(function (x) {
          x.ultima_taxa.taxa = Number(x.ultima_taxa.taxa);
          return x;
        });

        _this3.abreModalAtualizarCambio();

        _this3.sucessoEditar = 'Taxas atualizadas com sucesso!';
        setTimeout(function () {
          location.reload();
        }, 2000);
      })["catch"](function (erro) {
        return _this3.erroEditar = erro;
      });
    }
  },
  mounted: function mounted() {
    this.buscarCambios();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuracoes/cambio/TaxaCambioLista.vue?vue&type=template&id=ec8bf960&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/configuracoes/cambio/TaxaCambioLista.vue?vue&type=template&id=ec8bf960& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
              _vm._v("Cambios Atuais")
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
                      return _vm.abreModalAtualizarCambio()
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fa fa-plus-circle" }),
                  _vm._v(" "),
                  _c("span", { staticClass: "hidden-xs" }, [
                    _vm._v("Atualizar Cambio")
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
      _c("div", { staticClass: "col-sm-12 col-md-7" }, [
        _c("label", { staticStyle: { width: "90%" } }, [
          _vm._v("Buscar por:\n            "),
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
          _vm._v("Filtrar:\n            "),
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
            _c("h4", { staticClass: "card-title" }, [_vm._v("Lista de Taxas")]),
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
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(_vm._s(registro.moeda_origem.nome) + " ")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-center" }, [
                        _vm._v(_vm._s(registro.multiplicar ? "x" : "/"))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-left" }, [
                        _vm._v(_vm._s(registro.moeda_destino.nome) + " ")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "text-right" }, [
                        _vm._v(
                          _vm._s(_vm._f("valor")(registro.ultima_taxa.taxa))
                        )
                      ])
                    ])
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
                    return _vm.atualizarCambio()
                  }
                }
              },
              [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "modal-body" },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _vm._l(_vm.cambioModal.taxas, function(taxa) {
                      return _c("div", { key: taxa.id, staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-4" }, [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { disabled: true },
                            domProps: {
                              value:
                                taxa.moeda_origem.nome +
                                " - " +
                                taxa.moeda_destino.nome
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-3" },
                          [
                            _c(
                              "money",
                              _vm._b(
                                {
                                  staticClass: "form-control",
                                  attrs: {
                                    disabled: true,
                                    value: taxa.ultima_taxa.taxa
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
                          { staticClass: "col-md-3" },
                          [
                            _c(
                              "money",
                              _vm._b(
                                {
                                  staticClass: "form-control",
                                  on: {
                                    input: function($event) {
                                      return _vm.calcularVariacao(taxa)
                                    }
                                  },
                                  model: {
                                    value: taxa.taxa,
                                    callback: function($$v) {
                                      _vm.$set(taxa, "taxa", $$v)
                                    },
                                    expression: "taxa.taxa"
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
                        _c("div", { staticClass: "col-md-2" }, [
                          taxa.variacao > 0
                            ? _c("i", {
                                staticClass: "fa fa-arrow-up",
                                class: {
                                  red: taxa.variacao > 10 || taxa.variacao < -10
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          taxa.variacao < 0
                            ? _c("i", {
                                staticClass: "fa fa-arrow-down",
                                class: {
                                  red: taxa.variacao > 10 || taxa.variacao < -10
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          taxa.variacao == 0
                            ? _c("i", { staticClass: "fa fa-minus" })
                            : _vm._e(),
                          _vm._v(
                            "\n                          " +
                              _vm._s(_vm._f("valor")(taxa.variacao)) +
                              "\n                        "
                          )
                        ])
                      ])
                    }),
                    _vm._v(" "),
                    _vm.variacao_alta
                      ? _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-md-12" }, [
                            _c("hr"),
                            _vm._v(" "),
                            _vm._m(3),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-control text-right" },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass: "control-label",
                                    attrs: { for: "confirmar_taxas" }
                                  },
                                  [_vm._v("Confirmar atualização")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.variacao_confirmada,
                                      expression: "variacao_confirmada"
                                    }
                                  ],
                                  attrs: {
                                    type: "checkbox",
                                    name: "confirmar_taxas",
                                    id: "confirmar_taxas"
                                  },
                                  domProps: {
                                    checked: Array.isArray(
                                      _vm.variacao_confirmada
                                    )
                                      ? _vm._i(_vm.variacao_confirmada, null) >
                                        -1
                                      : _vm.variacao_confirmada
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.variacao_confirmada,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = null,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            (_vm.variacao_confirmada = $$a.concat(
                                              [$$v]
                                            ))
                                        } else {
                                          $$i > -1 &&
                                            (_vm.variacao_confirmada = $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1)))
                                        }
                                      } else {
                                        _vm.variacao_confirmada = $$c
                                      }
                                    }
                                  }
                                })
                              ]
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
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
                  ],
                  2
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
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: {
                        type: "submit",
                        disabled: _vm.variacao_alta && !_vm.variacao_confirmada
                      }
                    },
                    [
                      _c("i", { staticClass: "fa fa-save" }),
                      _vm._v(" Atualizar\n                    ")
                    ]
                  )
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
        _c("th", { staticClass: "text-right" }, [_vm._v(" Moeda  ")]),
        _vm._v(" "),
        _c("th"),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v(" Moeda  ")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-left" }, [_vm._v(" Taxa ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("×")]
      ),
      _vm._v(" "),
      _c("h4", { staticClass: "modal-title" }, [
        _vm._v("Atualização de taxas de Cambio")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c("label", { staticClass: "control-label" }, [_vm._v("Moedas")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3" }, [
        _c("label", { staticClass: "control-label" }, [_vm._v("Taxa Atual")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3" }, [
        _c("label", { staticClass: "control-label" }, [_vm._v("Nova Taxa")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("label", { staticClass: "control-label" }, [_vm._v("Variação")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "alert alert-danger text-center" }, [
      _vm._v("Existem taxas com variação maior que 10%"),
      _c("br"),
      _vm._v(" "),
      _c("strong", [
        _vm._v("Tem certeza que deseja atualizar com essas taxas?")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/configuracoes/cambio/TaxaCambioLista.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/views/configuracoes/cambio/TaxaCambioLista.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaxaCambioLista_vue_vue_type_template_id_ec8bf960___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaxaCambioLista.vue?vue&type=template&id=ec8bf960& */ "./resources/js/views/configuracoes/cambio/TaxaCambioLista.vue?vue&type=template&id=ec8bf960&");
/* harmony import */ var _TaxaCambioLista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaxaCambioLista.vue?vue&type=script&lang=js& */ "./resources/js/views/configuracoes/cambio/TaxaCambioLista.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaxaCambioLista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaxaCambioLista_vue_vue_type_template_id_ec8bf960___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaxaCambioLista_vue_vue_type_template_id_ec8bf960___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/configuracoes/cambio/TaxaCambioLista.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/configuracoes/cambio/TaxaCambioLista.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/configuracoes/cambio/TaxaCambioLista.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxaCambioLista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxaCambioLista.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuracoes/cambio/TaxaCambioLista.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxaCambioLista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/configuracoes/cambio/TaxaCambioLista.vue?vue&type=template&id=ec8bf960&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/configuracoes/cambio/TaxaCambioLista.vue?vue&type=template&id=ec8bf960& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxaCambioLista_vue_vue_type_template_id_ec8bf960___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxaCambioLista.vue?vue&type=template&id=ec8bf960& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuracoes/cambio/TaxaCambioLista.vue?vue&type=template&id=ec8bf960&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxaCambioLista_vue_vue_type_template_id_ec8bf960___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxaCambioLista_vue_vue_type_template_id_ec8bf960___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=16.js.map