(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuracoes/sistema/ParametroSistemaForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/configuracoes/sistema/ParametroSistemaForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services */ "./resources/js/services/index.js");
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


var parametrosSistemaService = new _services__WEBPACK_IMPORTED_MODULE_1__["ParametroSistemaService"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        id: null,
        nome: '',
        descricao: '',
        valor: ''
      },
      sucesso: null,
      erros: null,
      errosTitulo: ''
    };
  },
  validations: function validations() {
    return {
      form: {
        nome: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(100)
        },
        valor: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
          maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(200)
        },
        descricao: {
          maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(200)
        }
      }
    };
  },
  mounted: function mounted() {
    if (this.$route.params.id) {
      this.buscarObjeto(this.$route.params.id);
    }
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.$v.form.$touch();
      this.erros = null;
      this.sucesso = null;
      this.errosTitulo = '';

      if (this.$v.form.$invalid) {
        this.errosTitulo = 'Preencha o formulário corretamente, alguns campos estão com erros!';
        this.erros = this.$v.form;
        return false;
      }

      var obj = _objectSpread({}, this.form);

      var request = null;
      if (obj.id) request = parametrosSistemaService.atualizar(obj);else request = parametrosSistemaService.criar(obj);
      request.then(function (response) {
        var redireciona = !_this.form.id;
        _this.form = response.data;
        _this.sucesso = "Registro salvo com sucesso!";

        if (redireciona) {
          var index = String(_this.$route.path).lastIndexOf("/");
          var newPath = String(_this.$route.path).slice(0, index);
          newPath += "/" + _this.form.id;

          _this.$router.push(newPath);

          _this.buscarObjeto(_this.form.id);
        }
      })["catch"](function (erro) {
        return _this.erros = erro;
      });
    },
    buscarObjeto: function buscarObjeto(id) {
      var _this2 = this;

      parametrosSistemaService.buscar(id).then(function (response) {
        _this2.form = response.data;
      })["catch"](function (erro) {
        return _this2.erros = erro;
      });
    },
    buscarCentros: function buscarCentros() {
      var _this3 = this;

      parametrosSistemaService.listar({
        ordenar: 'codigo',
        ordem: 'asc',
        per_page: 100
      }).then(function (response) {
        _this3.centros = response.data.data;
      })["catch"](function (erro) {
        return _this3.erros = erro;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuracoes/sistema/ParametroSistemaForm.vue?vue&type=template&id=61227c28&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/configuracoes/sistema/ParametroSistemaForm.vue?vue&type=template&id=61227c28&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "form",
    {
      staticClass: "row",
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.submit()
        }
      }
    },
    [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("h3", [
                  _vm._v("Cadastro de Parâmetros do Sistema "),
                  _vm.form.id
                    ? _c("span", [_vm._v(": " + _vm._s(_vm.form.nome))])
                    : _vm._e()
                ])
              ])
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "label",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.form.id,
                          expression: "form.id"
                        }
                      ],
                      staticClass: "col-sm-3 col-form-label"
                    },
                    [_vm._v("Id")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.form.id,
                          expression: "form.id"
                        }
                      ],
                      staticClass: "col-sm-9"
                    },
                    [
                      _c("input-componente", {
                        attrs: { disabled: true },
                        model: {
                          value: _vm.form.id,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "id", $$v)
                          },
                          expression: "form.id"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                    _vm._v("Nome")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-9" },
                    [
                      _c("input-componente", {
                        attrs: { validator: _vm.$v.form.nome },
                        on: { blur: _vm.$v.form.nome.$touch },
                        model: {
                          value: _vm.form.nome,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "nome", $$v)
                          },
                          expression: "form.nome"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                    _vm._v("Valor")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-9" },
                    [
                      _c("input-componente", {
                        attrs: { validator: _vm.$v.form.valor },
                        on: { blur: _vm.$v.form.valor.$touch },
                        model: {
                          value: _vm.form.valor,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "valor", $$v)
                          },
                          expression: "form.valor"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("label", { staticClass: "col-sm-3 col-form-label" }, [
                    _vm._v("Descrição")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-9" },
                    [
                      _c("input-componente", {
                        attrs: { validator: _vm.$v.form.descricao },
                        on: { blur: _vm.$v.form.descricao.$touch },
                        model: {
                          value: _vm.form.descricao,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "descricao", $$v)
                          },
                          expression: "form.descricao"
                        }
                      })
                    ],
                    1
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _vm.erros || _vm.sucesso
              ? _c(
                  "div",
                  { staticClass: "col-md-12 text-center" },
                  [
                    _vm.erros
                      ? _c("mensagem-componente", {
                          attrs: { titulo: _vm.errosTitulo, erros: _vm.erros },
                          on: {
                            fechar: function($event) {
                              _vm.erros = null
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.sucesso
                      ? _c("mensagem-componente", {
                          attrs: { sucesso: _vm.sucesso },
                          on: {
                            fechar: function($event) {
                              _vm.sucesso = null
                            }
                          }
                        })
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-12 button-items text-center" },
              [
                _c(
                  "router-link",
                  {
                    staticClass:
                      "btn btn-warning waves-effect waves-light w-sm",
                    attrs: {
                      title: "Voltar",
                      to: { name: "parametrosSistemaLista" }
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "bx bx-arrow-back d-block font-size-16"
                    }),
                    _vm._v(" Voltar\n                    ")
                  ]
                ),
                _vm._v(" "),
                _vm._m(1)
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _vm.form.id
              ? _c(
                  "div",
                  { staticClass: "col-md-12 text-right" },
                  [
                    _c("log-componente", {
                      attrs: {
                        index: _vm.form.id,
                        subject_type: "App\\Models\\Cliente\\Parametro",
                        subject_id: _vm.form.id
                      }
                    })
                  ],
                  1
                )
              : _vm._e()
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("h4", [_vm._v("Dados Cadastrais")])
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
        staticClass: "btn btn-primary waves-effect waves-light w-sm",
        attrs: { type: "submit", title: "salvar" }
      },
      [
        _c("i", { staticClass: "bx bxs-save d-block font-size-16" }),
        _vm._v(" Salvar\n                    ")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/configuracoes/sistema/ParametroSistemaForm.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/views/configuracoes/sistema/ParametroSistemaForm.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ParametroSistemaForm_vue_vue_type_template_id_61227c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ParametroSistemaForm.vue?vue&type=template&id=61227c28&scoped=true& */ "./resources/js/views/configuracoes/sistema/ParametroSistemaForm.vue?vue&type=template&id=61227c28&scoped=true&");
/* harmony import */ var _ParametroSistemaForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParametroSistemaForm.vue?vue&type=script&lang=js& */ "./resources/js/views/configuracoes/sistema/ParametroSistemaForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ParametroSistemaForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ParametroSistemaForm_vue_vue_type_template_id_61227c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ParametroSistemaForm_vue_vue_type_template_id_61227c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "61227c28",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/configuracoes/sistema/ParametroSistemaForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/configuracoes/sistema/ParametroSistemaForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/configuracoes/sistema/ParametroSistemaForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ParametroSistemaForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ParametroSistemaForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuracoes/sistema/ParametroSistemaForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ParametroSistemaForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/configuracoes/sistema/ParametroSistemaForm.vue?vue&type=template&id=61227c28&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/views/configuracoes/sistema/ParametroSistemaForm.vue?vue&type=template&id=61227c28&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ParametroSistemaForm_vue_vue_type_template_id_61227c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ParametroSistemaForm.vue?vue&type=template&id=61227c28&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/configuracoes/sistema/ParametroSistemaForm.vue?vue&type=template&id=61227c28&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ParametroSistemaForm_vue_vue_type_template_id_61227c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ParametroSistemaForm_vue_vue_type_template_id_61227c28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=19.js.map