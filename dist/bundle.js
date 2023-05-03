/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _js_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/routes */ \"./src/js/routes.js\");\n/* harmony import */ var _js_pagelist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/pagelist */ \"./src/js/pagelist.js\");\n\n\n\nvar callRoute = function callRoute() {\n  var hash = window.location.hash;\n  var pathParts = hash.substring(1).split('/');\n  console.log(pathParts);\n  var pageName = pathParts[0];\n  console.log(pageName);\n  var pageArgument = pathParts[1] || '';\n  var pageFunction = _js_routes__WEBPACK_IMPORTED_MODULE_1__.Routes[pageName];\n  if (pageFunction !== undefined) {\n    pageFunction(pageArgument);\n  }\n};\nwindow.addEventListener('hashchange', function () {\n  return callRoute();\n});\nwindow.addEventListener('DOMContentLoaded', function () {\n  return callRoute();\n});\nvar searchForm = document.getElementById(\"search-form\");\nvar searchInput = document.getElementById(\"search-input\");\nsearchForm.addEventListener(\"submit\", function (event) {\n  event.preventDefault();\n  var searchQuery = searchInput.value;\n  (0,_js_pagelist__WEBPACK_IMPORTED_MODULE_2__.PageList)(searchQuery);\n});\n\n//# sourceURL=webpack://saveprogame/./src/index.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\nvar Home = function Home() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, '-');\n    var displayResults = function displayResults(articles) {\n      var resultsContent = articles.map(function (article) {\n        return \"<article class=\\\"cardGame\\\">\\n          <div class=\\\"container-fluid py-2\\\">\\n            <div class=\\\"card card-bis \\\">\\n              <div class=\\\"card-body\\\">\\n              <p class=text-center>\".concat(article.name, \"</p>\\n              <p>Date de sortie : \").concat(article.released, \"</p>\\n              \\n              <a href=\\\"#pagedetail/\").concat(article.id, \"\\\" class=\\\"btn btn-info justify-content-center\\\">Plus de d\\xE9tails</a>\\n              </div>\\n          </div>\\n          </div>\\n        </article>\");\n      });\n      var resultsContainer = document.querySelector('.page-list .articles');\n      resultsContainer.innerHTML = \"\\n        <div class=\\\"results-container\\\">\\n          \".concat(resultsContent.join(\"\\n\"), \"\\n        </div>\\n      \");\n    };\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = argument ? \"\".concat(url, \"&search=\").concat(argument) : url;\n      fetch(finalURL).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayResults(responseData.results);\n      });\n    };\n    var API_KEY = \"1fb43d4e40d4404c9ae1168602d9da7b\";\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(API_KEY), cleanedArgument);\n  };\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-list\\\">\\n        <div class=\\\"articles\\\">Hey, this page is a PageList template, about : \".concat(argument, \"</div>\\n      </section>\\n    \");\n    preparePage();\n  };\n  render();\n};\n\n//# sourceURL=webpack://saveprogame/./src/js/home.js?");

/***/ }),

/***/ "./src/js/pagedetail.js":
/*!******************************!*\
  !*** ./src/js/pagedetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => (/* binding */ PageDetail)\n/* harmony export */ });\nvar PageDetail = function PageDetail(argument) {\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, \"-\");\n    var displayGame = function displayGame(gameData) {\n      var name = gameData.name,\n        released = gameData.released,\n        description = gameData.description;\n      var articleDOM = document.querySelector(\".page-detail \");\n      articleDOM.querySelector(\"h3.title\").innerHTML = name;\n      articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n      articleDOM.querySelector(\"p.description\").innerHTML = description;\n    };\n    var API_KEY = \"1fb43d4e40d4404c9ae1168602d9da7b\";\n    var fetchGame = function fetchGame(url, argument) {\n      fetch(\"\".concat(url, \"/\").concat(argument, \"?key=\").concat(API_KEY)).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayGame(responseData);\n      });\n    };\n    fetchGame('https://api.rawg.io/api/games', cleanedArgument);\n  };\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-detail\\\">\\n        <div class=\\\"container-fluid \\\">\\n          <div class=\\\"card card-bis\\\">\\n            <div class=\\\"card-body\\\">\\n              <h3 class=\\\"title\\\"></h3>\\n              <p class=\\\"release-date\\\">Release date : <span></span></p>\\n              <p class=\\\"description\\\"></p>\\n            </div>\\n          </div>\\n        </div>\\n      </section>\\n    \";\n    preparePage();\n  };\n  render();\n};\n\n//# sourceURL=webpack://saveprogame/./src/js/pagedetail.js?");

/***/ }),

/***/ "./src/js/pagelist.js":
/*!****************************!*\
  !*** ./src/js/pagelist.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => (/* binding */ PageList)\n/* harmony export */ });\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var searchType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"search\";\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.trim().replace(/\\s+/g, \"-\");\n    var displayResults = function displayResults(articles) {\n      var resultsContent = articles.map(function (article) {\n        return \"<div class=\\\"container-fluid\\\">\\n          <div class=\\\"card h-100 p-3\\\">\\n            <img src=\\\"\".concat(article.background_image, \"\\\" class=\\\"card-img-top\\\" alt=\\\"\").concat(article.name, \"\\\" style=\\\"max-height: 300px; object-fit: cover;\\\">\\n            <div class=\\\"card-body\\\">\\n              <h5 class=\\\"card-title\\\">\").concat(article.name, \"</h5>\\n              <p class=\\\"card-text\\\">\").concat(article.platforms.map(function (platform) {\n          switch (platform.platform.name) {\n            case \"Linux\":\n              return 'Linux';\n            case \"Mobile\":\n              return 'Mobile';\n            case \"PlayStation 4\":\n              return 'PlayStation 4';\n            case \"Nintendo Switch\":\n              return 'Nintendo Switch';\n            case \"Windows\":\n              return 'Windows';\n            case \"Xbox 360\":\n              return 'Xbox';\n          }\n        }).join(\" \"), \"</p>\\n              <a href=\\\"#pagedetail/\").concat(article.id, \"\\\" class=\\\"btn btn-primary\\\">D\\xE9tails</a>\\n            </div>\\n            </div>\\n        </div>\");\n      });\n      var resultsContainer = document.querySelector(\".page-list .articles\");\n      resultsContainer.innerHTML = \"\\n        <div class=\\\"results-container\\\">\\n          \".concat(resultsContent.join(\"\\n\"), \"\\n        </div>\");\n    };\n    var API_KEY = \"1fb43d4e40d4404c9ae1168602d9da7b\";\n    var fetchList = function fetchList(url, argument, searchType) {\n      var finalURL = argument ? \"\".concat(url, \"&\").concat(searchType, \"=\").concat(argument) : url;\n      fetch(finalURL).then(function (response) {\n        return response.json();\n      }).then(function (responseData) {\n        displayResults(responseData.results);\n      });\n    };\n    var baseUrl = \"https://api.rawg.io/api/games?key=\".concat(API_KEY);\n    fetchList(baseUrl, cleanedArgument, searchType);\n  };\n  var render = function render() {\n    pageContent.innerHTML = \"\\n        <section class=\\\"page-list\\\">\\n          <div class=\\\"articles\\\">Loading...</div>\\n        </section>\\n      \";\n    preparePage();\n  };\n  render();\n};\n\n//# sourceURL=webpack://saveprogame/./src/js/pagelist.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Routes\": () => (/* binding */ Routes)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/js/home.js\");\n/* harmony import */ var _pagedetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagedetail */ \"./src/js/pagedetail.js\");\n/* harmony import */ var _pagelist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagelist */ \"./src/js/pagelist.js\");\n\n\n\nvar Routes = {\n  '': _home__WEBPACK_IMPORTED_MODULE_0__.Home,\n  'pagelist': _pagelist__WEBPACK_IMPORTED_MODULE_2__.PageList,\n  'pagedetail': _pagedetail__WEBPACK_IMPORTED_MODULE_1__.PageDetail\n};\n\n//# sourceURL=webpack://saveprogame/./src/js/routes.js?");

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://saveprogame/./src/style/index.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;