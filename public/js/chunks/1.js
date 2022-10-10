(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/herpers/helpers.js":
/*!*****************************************!*\
  !*** ./resources/js/herpers/helpers.js ***!
  \*****************************************/
/*! exports provided: isDate, isBeforeToday, isValidCpf, isValidCnpj, isValidCpfCnpj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBeforeToday", function() { return isBeforeToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidCpf", function() { return isValidCpf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidCnpj", function() { return isValidCnpj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidCpfCnpj", function() { return isValidCpfCnpj; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);


var isDate = vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["helpers"].withParams({
  type: 'isDate'
}, function (value) {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(value, 'DD/MM/YYYY', true).isValid();
});
var isBeforeToday = vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["helpers"].withParams({
  type: 'isBeforeToday'
}, function (value) {
  return !moment__WEBPACK_IMPORTED_MODULE_0___default()(value, 'DD/MM/YYYY', true).isValid() || moment__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYYMMDD') > moment__WEBPACK_IMPORTED_MODULE_0___default()(value, 'DD/MM/YYYY', true).format('YYYYMMDD');
});
var isValidCpf = vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["helpers"].withParams({
  type: 'cpfValidator'
}, function (cpf) {
  return isValidCPF(cpf);
});
var isValidCnpj = vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["helpers"].withParams({
  type: 'cnpjValidator'
}, function (cnpj) {
  return isValidCNPJ(cnpj);
});
var isValidCpfCnpj = function isValidCpfCnpj(param) {
  return vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["helpers"].withParams({
    type: 'cpfCnpjValidator'
  }, function (data) {
    console.log(data, param);
    if (!data) return true;

    switch (param) {
      case 'CPF':
        return isValidCPF(data);

      case 'CNPJ':
        return isValidCnpj(data);

      default:
        return false;
    }
  });
};

var isValidCPF = function isValidCPF(cpf) {
  if (!cpf || cpf.length == 0) return true;
  if (cpf.length < 11) return false;
  var soma = 0;
  var resto;
  cpf = cpf.replace(/[^\d]+/g, ''); // Somente os numeros

  if (cpf.length != 11 || cpf == '00000000000') return false;

  for (var i = 1; i <= 9; i++) {
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  resto = soma * 10 % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(9, 10))) return false;
  soma = 0;

  for (var _i = 1; _i <= 10; _i++) {
    soma = soma + parseInt(cpf.substring(_i - 1, _i)) * (12 - _i);
  }

  resto = soma * 10 % 11;
  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(10, 11))) return false;
  return true;
};

var isValidCNPJ = function isValidCNPJ(cnpj) {
  if (!cnpj || cnpj.length == 0) return true;
  if (cnpj.length < 11) return false;
  cnpj = cnpj.replace(/[^\d]+/g, '');
  if (cnpj == '') return false;
  if (cnpj.length != 14) return false; // Elimina CNPJs invalidos conhecidos

  if (cnpj == "00000000000000" || cnpj == "11111111111111" || cnpj == "22222222222222" || cnpj == "33333333333333" || cnpj == "44444444444444" || cnpj == "55555555555555" || cnpj == "66666666666666" || cnpj == "77777777777777" || cnpj == "88888888888888" || cnpj == "99999999999999") return false; // Valida DVs

  var tamanho = cnpj.length - 2;
  var numeros = cnpj.substring(0, tamanho);
  var digitos = cnpj.substring(tamanho);
  var soma = 0;
  var pos = tamanho - 7;

  for (var i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }

  var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0)) return false;
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (var _i2 = tamanho; _i2 >= 1; _i2--) {
    soma += numeros.charAt(tamanho - _i2) * pos--;
    if (pos < 2) pos = 9;
  }

  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1)) return false;
  return true;
};

/***/ }),

/***/ "./resources/js/mixins/address.mixin.js":
/*!**********************************************!*\
  !*** ./resources/js/mixins/address.mixin.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./resources/js/services/index.js");

var addressService = new _services__WEBPACK_IMPORTED_MODULE_0__["AddressService"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      states: [],
      cities: [],
      spinnerCity: false,
      spinnerState: false,
      timerCity: false,
      timerState: false
    };
  },
  methods: {
    searchStateDebounce: function searchStateDebounce(param) {
      var _this = this;

      var queryString = param;
      if (typeof param === 'string' || param instanceof String) queryString = {
        name: param
      };
      clearTimeout(this.timerState);
      this.timerState = setTimeout(function () {
        _this.searchState(queryString);
      }, 700);
    },
    searchCityDebounce: function searchCityDebounce(param) {
      var _this2 = this;

      var queryString = param;
      if (typeof param === 'string' || param instanceof String) queryString = {
        name: param
      };
      clearTimeout(this.timerCity);
      this.timerCity = setTimeout(function () {
        _this2.searchCities(queryString);
      }, 700);
    },
    searchState: function searchState(queryString) {
      var _this3 = this;

      this.states = [];
      this.spinnerState = true;
      addressService.indexStates(queryString).then(function (response) {
        _this3.states = response.data.data;
      })["finally"](function () {
        return _this3.spinnerState = false;
      });
    },
    searchCities: function searchCities(queryString) {
      var _this4 = this;

      this.cities = [];
      this.spinnerCity = true;
      addressService.indexCities(queryString).then(function (response) {
        _this4.cities = response.data.data;
      })["finally"](function () {
        return _this4.spinnerCity = false;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/services/AddressService.js":
/*!*************************************************!*\
  !*** ./resources/js/services/AddressService.js ***!
  \*************************************************/
/*! exports provided: AddressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressService", function() { return AddressService; });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/services/Api.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var AddressService = /*#__PURE__*/function (_Api) {
  _inherits(AddressService, _Api);

  var _super = _createSuper(AddressService);

  function AddressService() {
    _classCallCheck(this, AddressService);

    return _super.call(this);
  }

  _createClass(AddressService, [{
    key: "indexStates",
    value: function indexStates(queryString) {
      queryString = _get(_getPrototypeOf(AddressService.prototype), "getQueryString", this).call(this, queryString);
      return axios.get("".concat(this.API_URL, "/api/states?").concat(queryString));
    }
  }, {
    key: "indexCities",
    value: function indexCities(queryString) {
      queryString = _get(_getPrototypeOf(AddressService.prototype), "getQueryString", this).call(this, queryString);
      return axios.get("".concat(this.API_URL, "/api/cities?").concat(queryString));
    }
  }]);

  return AddressService;
}(_Api__WEBPACK_IMPORTED_MODULE_0__["Api"]);

/***/ }),

/***/ "./resources/js/services/Api.js":
/*!**************************************!*\
  !*** ./resources/js/services/Api.js ***!
  \**************************************/
/*! exports provided: Api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api() {
    _classCallCheck(this, Api);

    this.API_URL = document.querySelector('meta[name="url"]').getAttribute('content');
    this.HEADERS = {
      'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      'Content-Type': 'application/json'
    };
  }

  _createClass(Api, [{
    key: "getQueryString",
    value: function getQueryString(object) {
      if (!object) return '';
      if (typeof object === 'string') return object;
      if (_typeof(object) === 'object') object = _objectSpread({}, object);
      var queryString = ''; // Monta a querystring 

      Object.keys(object).forEach(function (key) {
        if (object[key] !== null && object[key] !== undefined && object[key] !== '') {
          if (queryString.length > 0) queryString += '&';
          queryString += key + '=' + encodeURIComponent(object[key]);
        }
      });
      return queryString;
    }
  }]);

  return Api;
}();

/***/ }),

/***/ "./resources/js/services/CustomerService.js":
/*!**************************************************!*\
  !*** ./resources/js/services/CustomerService.js ***!
  \**************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/services/Api.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 // import Axios from "axios";

var CustomerService = /*#__PURE__*/function (_Api) {
  _inherits(CustomerService, _Api);

  var _super = _createSuper(CustomerService);

  function CustomerService() {
    _classCallCheck(this, CustomerService);

    return _super.call(this);
  }

  _createClass(CustomerService, [{
    key: "store",
    value: function store(data) {
      return axios.post("".concat(this.API_URL, "/api/customers"), data, {
        headers: this.HEADERS
      });
    }
  }, {
    key: "index",
    value: function index(queryString) {
      queryString = _get(_getPrototypeOf(CustomerService.prototype), "getQueryString", this).call(this, queryString);
      return axios.get("".concat(this.API_URL, "/api/customers?").concat(queryString));
    }
  }, {
    key: "get",
    value: function get(id) {
      return axios.get("".concat(this.API_URL, "/api/customers/").concat(id));
    }
  }, {
    key: "update",
    value: function update(data) {
      return axios.put("".concat(this.API_URL, "/api/customers/").concat(data.id), data, {
        headers: this.HEADERS
      });
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return axios["delete"]("".concat(this.API_URL, "/api/customers/").concat(id), {
        headers: this.HEADERS
      });
    }
  }]);

  return CustomerService;
}(_Api__WEBPACK_IMPORTED_MODULE_0__["Api"]);

/***/ }),

/***/ "./resources/js/services/index.js":
/*!****************************************!*\
  !*** ./resources/js/services/index.js ***!
  \****************************************/
/*! exports provided: CustomerService, AddressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomerService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerService */ "./resources/js/services/CustomerService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return _CustomerService__WEBPACK_IMPORTED_MODULE_0__["CustomerService"]; });

/* harmony import */ var _AddressService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddressService */ "./resources/js/services/AddressService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddressService", function() { return _AddressService__WEBPACK_IMPORTED_MODULE_1__["AddressService"]; });




/***/ })

}]);
//# sourceMappingURL=1.js.map