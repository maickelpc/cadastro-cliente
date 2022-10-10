(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/financeiro/RelatorioContas.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/financeiro/RelatorioContas.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services */ "./resources/js/services/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
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

var contaPagarService = new _services__WEBPACK_IMPORTED_MODULE_0__["ContaPagarService"]();
var contaReceberService = new _services__WEBPACK_IMPORTED_MODULE_0__["ContaReceberService"]();

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    tipo: {
      type: String,
      "default": 'PAGAR'
    }
  },
  data: function data() {
    return {
      relatorio: {
        periodo: [moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf('month').toDate(), moment__WEBPACK_IMPORTED_MODULE_1___default()().endOf('month').toDate()],
        estilo: 'detalhado',
        tipo: 'GERAL',
        data_referencia: 'lancamento',
        quitada: 'todos'
      }
    };
  },
  methods: {
    imprimir: function imprimir() {
      var relatorio = _objectSpread({}, this.relatorio);

      relatorio.tipo = this.$props.tipo;
      delete relatorio.periodo;
      relatorio.data_inicial = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.relatorio.periodo[0]).format('DD-MM-YYYY');
      relatorio.data_final = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.relatorio.periodo[1]).format('DD-MM-YYYY');
      var url = contaPagarService.urlRelatorio(relatorio);
      window.open(url, '_blank');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/financeiro/RelatorioContas.vue?vue&type=template&id=1f57307e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/financeiro/RelatorioContas.vue?vue&type=template&id=1f57307e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("label", { staticClass: "col-sm-4 col-form-label" }, [
      _vm._v("Período")
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-sm-8 mb-4" },
      [
        _c("date-picker", {
          attrs: {
            range: "",
            format: "DD/MM/YYYY",
            "range-separator": " até ",
            clearable: false
          },
          model: {
            value: _vm.relatorio.periodo,
            callback: function($$v) {
              _vm.$set(_vm.relatorio, "periodo", $$v)
            },
            expression: "relatorio.periodo"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("label", { staticClass: "col-sm-4 col-form-label" }, [
      _vm._v("Data de Referência")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-sm-8" }, [
      _c("div", { staticClass: "custom-control custom-switch mb-3" }, [
        _c(
          "label",
          {
            staticClass: "control-label mb-10",
            staticStyle: { cursor: "pointer" },
            attrs: { for: "input-relatorio-referencia-1" }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.relatorio.data_referencia,
                  expression: "relatorio.data_referencia"
                }
              ],
              staticClass: "mb-1",
              attrs: {
                type: "radio",
                id: "input-relatorio-referencia-1",
                name: "relatorio_data_referencia",
                value: "lancamento"
              },
              domProps: {
                checked: _vm._q(_vm.relatorio.data_referencia, "lancamento")
              },
              on: {
                change: function($event) {
                  return _vm.$set(
                    _vm.relatorio,
                    "data_referencia",
                    "lancamento"
                  )
                }
              }
            }),
            _vm._v(" Data de Lançamento\n            ")
          ]
        ),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "control-label mb-10",
            staticStyle: { cursor: "pointer" },
            attrs: { for: "input-relatorio-referencia-2" }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.relatorio.data_referencia,
                  expression: "relatorio.data_referencia"
                }
              ],
              staticClass: "mb-1",
              attrs: {
                type: "radio",
                id: "input-relatorio-referencia-2",
                name: "relatorio_data_referencia",
                value: "emissao"
              },
              domProps: {
                checked: _vm._q(_vm.relatorio.data_referencia, "emissao")
              },
              on: {
                change: function($event) {
                  return _vm.$set(_vm.relatorio, "data_referencia", "emissao")
                }
              }
            }),
            _vm._v(" Data de Emissão\n            ")
          ]
        ),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "control-label mb-10",
            staticStyle: { cursor: "pointer" },
            attrs: { for: "input-relatorio-referencia-3" }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.relatorio.data_referencia,
                  expression: "relatorio.data_referencia"
                }
              ],
              staticClass: "mb-1",
              attrs: {
                type: "radio",
                id: "input-relatorio-referencia-3",
                name: "relatorio_data_referencia",
                value: "pagamento"
              },
              domProps: {
                checked: _vm._q(_vm.relatorio.data_referencia, "pagamento")
              },
              on: {
                change: function($event) {
                  return _vm.$set(_vm.relatorio, "data_referencia", "pagamento")
                }
              }
            }),
            _vm._v(" Data de Pagamento\n            ")
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("label", { staticClass: "col-sm-4 col-form-label" }, [
      _vm._v("Quitadas")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-sm-8" }, [
      _c("div", { staticClass: "custom-control custom-switch mb-3" }, [
        _c(
          "label",
          {
            staticClass: "control-label mb-10",
            staticStyle: { cursor: "pointer" },
            attrs: { for: "input-relatorio-quitadas-1" }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.relatorio.quitada,
                  expression: "relatorio.quitada"
                }
              ],
              staticClass: "mb-1",
              attrs: {
                type: "radio",
                id: "input-relatorio-quitadas-1",
                name: "relatorio_quitadas",
                value: "quitada"
              },
              domProps: { checked: _vm._q(_vm.relatorio.quitada, "quitada") },
              on: {
                change: function($event) {
                  return _vm.$set(_vm.relatorio, "quitada", "quitada")
                }
              }
            }),
            _vm._v(" Somente Pagas\n            ")
          ]
        ),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "control-label mb-10",
            staticStyle: { cursor: "pointer" },
            attrs: { for: "input-relatorio-quitadas-2" }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.relatorio.quitada,
                  expression: "relatorio.quitada"
                }
              ],
              staticClass: "mb-1",
              attrs: {
                type: "radio",
                id: "input-relatorio-quitadas-2",
                name: "relatorio_quitadas",
                value: "pendente"
              },
              domProps: { checked: _vm._q(_vm.relatorio.quitada, "pendente") },
              on: {
                change: function($event) {
                  return _vm.$set(_vm.relatorio, "quitada", "pendente")
                }
              }
            }),
            _vm._v(" Somente Pendentes\n            ")
          ]
        ),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "control-label mb-10",
            staticStyle: { cursor: "pointer" },
            attrs: { for: "input-relatorio-quitadas-3" }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.relatorio.quitada,
                  expression: "relatorio.quitada"
                }
              ],
              staticClass: "mb-1",
              attrs: {
                type: "radio",
                id: "input-relatorio-quitadas-3",
                name: "relatorio_quitadas",
                value: "todos"
              },
              domProps: { checked: _vm._q(_vm.relatorio.quitada, "todos") },
              on: {
                change: function($event) {
                  return _vm.$set(_vm.relatorio, "quitada", "todos")
                }
              }
            }),
            _vm._v(" Todas\n            ")
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("label", { staticClass: "col-sm-4 col-form-label" }, [
      _vm._v("Estilo do Relatório")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-sm-8" }, [
      _c("div", { staticClass: "custom-control custom-switch mb-3" }, [
        _c(
          "label",
          {
            staticClass: "control-label mb-10",
            staticStyle: { cursor: "pointer" },
            attrs: { for: "input-relatorio-estilo-1" }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.relatorio.estilo,
                  expression: "relatorio.estilo"
                }
              ],
              staticClass: "mb-1",
              attrs: {
                type: "radio",
                id: "input-relatorio-estilo-1",
                name: "producao_diaria_estilo",
                value: "resumido"
              },
              domProps: { checked: _vm._q(_vm.relatorio.estilo, "resumido") },
              on: {
                change: function($event) {
                  return _vm.$set(_vm.relatorio, "estilo", "resumido")
                }
              }
            }),
            _vm._v(" Resumido\n            ")
          ]
        ),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "control-label mb-10",
            staticStyle: { cursor: "pointer" },
            attrs: { for: "input-relatorio-estilo-2" }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.relatorio.estilo,
                  expression: "relatorio.estilo"
                }
              ],
              staticClass: "mb-1",
              attrs: {
                type: "radio",
                id: "input-relatorio-estilo-2",
                name: "producao_diaria_estilo",
                value: "detalhado"
              },
              domProps: { checked: _vm._q(_vm.relatorio.estilo, "detalhado") },
              on: {
                change: function($event) {
                  return _vm.$set(_vm.relatorio, "estilo", "detalhado")
                }
              }
            }),
            _vm._v(" Detalhado\n            ")
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-12 text-right" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-primary",
          attrs: { type: "button" },
          on: {
            click: function($event) {
              return _vm.imprimir()
            }
          }
        },
        [
          _c("i", { staticClass: "mdi mdi-printer font-size-18" }),
          _vm._v(" Imprimir")
        ]
      )
    ])
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

/***/ "./resources/js/components/financeiro/RelatorioContas.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/financeiro/RelatorioContas.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RelatorioContas_vue_vue_type_template_id_1f57307e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RelatorioContas.vue?vue&type=template&id=1f57307e& */ "./resources/js/components/financeiro/RelatorioContas.vue?vue&type=template&id=1f57307e&");
/* harmony import */ var _RelatorioContas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RelatorioContas.vue?vue&type=script&lang=js& */ "./resources/js/components/financeiro/RelatorioContas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RelatorioContas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RelatorioContas_vue_vue_type_template_id_1f57307e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RelatorioContas_vue_vue_type_template_id_1f57307e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/financeiro/RelatorioContas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/financeiro/RelatorioContas.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/financeiro/RelatorioContas.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatorioContas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RelatorioContas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/financeiro/RelatorioContas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatorioContas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/financeiro/RelatorioContas.vue?vue&type=template&id=1f57307e&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/financeiro/RelatorioContas.vue?vue&type=template&id=1f57307e& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatorioContas_vue_vue_type_template_id_1f57307e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RelatorioContas.vue?vue&type=template&id=1f57307e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/financeiro/RelatorioContas.vue?vue&type=template&id=1f57307e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatorioContas_vue_vue_type_template_id_1f57307e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatorioContas_vue_vue_type_template_id_1f57307e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=58.js.map