/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _estoque__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estoque */ \"./src/estoque.js\");\n/* harmony import */ var _cadastro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastro */ \"./src/cadastro.js\");\n/* harmony import */ var _auth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.js */ \"./src/auth.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.inputNome = document.getElementById('nome'); //Criar input\n\n    this.inputDescricao = document.getElementById('descricao'); //Criar input\n\n    this.inputQuantidade = document.getElementById('quantidade'); //Criar input\n\n    this.inputPreco = document.getElementById('preco'); //Criar input\n\n    this.inputCodigo = document.getElementById('codigo'); //Criar input\n\n    this.botaoCadastrar = document.getElementById('cadastrar'); //Criar input\n\n    this.entrar = document.getElementById('entrar');\n    this.sair = document.getElementById('sair'); //Necessita criar o botão\n\n    this.inputFromOperador = document.getElementById('operador');\n    this.inputFromSenha = document.getElementById('senha');\n    this.estoque = new _estoque__WEBPACK_IMPORTED_MODULE_0__.Estoque();\n    this.autenticacao = new _auth_js__WEBPACK_IMPORTED_MODULE_2__.Autenticacao();\n    this.registrarEventos();\n  }\n\n  _createClass(App, [{\n    key: \"registrarEventos\",\n    value: function registrarEventos() {\n      var _this = this;\n\n      this.entrar.onclick = function () {\n        _this.autenticacao.entrar(_this.inputFromOperador.value, _this.inputFromSenha.value);\n      };\n    }\n  }, {\n    key: \"registrarProduto\",\n    value: function registrarProduto() {\n      var _this2 = this;\n\n      this.botaoCadastrar.onclick = function () {\n        _this2.mostrarAlert();\n      };\n    }\n  }, {\n    key: \"mostrarAlert\",\n    value: function mostrarAlert() {\n      alert(\"Produto cadastrado com sucesso!\");\n      this.estoque.adicionar(new _cadastro__WEBPACK_IMPORTED_MODULE_1__.Cadastro(this.inputNome.value, this.inputDescricao.value, this.inputQuantidade.value, this.inputPreco.value, this.inputCodigo.value));\n    }\n    /*botaoSair() {\r\n        this.entrar.onclick = () => {\r\n            this.autenticacao.sair() // ???\r\n        }\r\n    }*/\n\n  }]);\n\n  return App;\n}();\n\nnew App();\n\n//# sourceURL=webpack://desafio1/./src/app.js?");

/***/ }),

/***/ "./src/auth.js":
/*!*********************!*\
  !*** ./src/auth.js ***!
  \*********************/
/*! namespace exports */
/*! export Autenticacao [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Autenticacao\": () => /* binding */ Autenticacao\n/* harmony export */ });\n/* harmony import */ var _usuarios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuarios */ \"./src/usuarios.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar Autenticacao = /*#__PURE__*/function () {\n  function Autenticacao() {\n    _classCallCheck(this, Autenticacao);\n  }\n\n  _createClass(Autenticacao, [{\n    key: \"entrar\",\n    value: function entrar(inputFromOperador, inputFromSenha) {\n      //usar o find\n      console.log(inputFromOperador, inputFromSenha);\n\n      if (inputFromOperador === _usuarios__WEBPACK_IMPORTED_MODULE_0__.Funcionarios.operador && inputFromSenha === _usuarios__WEBPACK_IMPORTED_MODULE_0__.Funcionarios.senha) {\n        localStorage.setItem(\"logado\", JSON.stringify(inputFromOperador));\n        document.getElementById(\"homepage\").style.display = \"none\";\n        document.getElementById(\"app-page\").style.display = \"block\";\n      } else {\n        alert('Dados incorretos, tente novamente!');\n        /*Funcionarios.operador = \"\";\r\n        Funcionarios.operador.focus();*/\n      }\n    }\n  }, {\n    key: \"sair\",\n    value: function sair() {\n      localStorage.clear();\n      localStorage.setItem('logout-option', JSON.stringify(logoutButton));\n      document.getElementById(\"app-page\").style.display = \"none\";\n      document.getElementById(\"homepage\").style.display = \"block\";\n    }\n  }]);\n\n  return Autenticacao;\n}();\n\n//# sourceURL=webpack://desafio1/./src/auth.js?");

/***/ }),

/***/ "./src/cadastro.js":
/*!*************************!*\
  !*** ./src/cadastro.js ***!
  \*************************/
/*! namespace exports */
/*! export Cadastro [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cadastro\": () => /* binding */ Cadastro\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Cadastro = function Cadastro(nome, descricao, quantidade, preco, codigo) {\n  _classCallCheck(this, Cadastro);\n\n  this.nome = nome;\n  this.descricao = descricao;\n  this.quantidade = quantidade;\n  this.preco = preco;\n  this.codigo = codigo;\n};\n\n//# sourceURL=webpack://desafio1/./src/cadastro.js?");

/***/ }),

/***/ "./src/estoque.js":
/*!************************!*\
  !*** ./src/estoque.js ***!
  \************************/
/*! namespace exports */
/*! export Estoque [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Estoque\": () => /* binding */ Estoque\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Estoque = /*#__PURE__*/function () {\n  function Estoque() {\n    _classCallCheck(this, Estoque);\n\n    this.estoque = [];\n  }\n\n  _createClass(Estoque, [{\n    key: \"adicionar\",\n    value: function adicionar(value) {\n      this.estoque.push(value);\n    }\n  }]);\n\n  return Estoque;\n}();\n\n//# sourceURL=webpack://desafio1/./src/estoque.js?");

/***/ }),

/***/ "./src/usuarios.js":
/*!*************************!*\
  !*** ./src/usuarios.js ***!
  \*************************/
/*! namespace exports */
/*! export Funcionarios [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Funcionarios\": () => /* binding */ Funcionarios\n/* harmony export */ });\nvar Funcionarios = {\n  operador: \"usuario\",\n  senha: \"12345\"\n};\n\n\n//# sourceURL=webpack://desafio1/./src/usuarios.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;