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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_userService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/userService */ \"./src/modules/userService.js\");\n/* harmony import */ var _modules_addUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addUsers */ \"./src/modules/addUsers.js\");\n/* harmony import */ var _modules_removeUsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/removeUsers */ \"./src/modules/removeUsers.js\");\n/* harmony import */ var _modules_changePermissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/changePermissions */ \"./src/modules/changePermissions.js\");\n/* harmony import */ var _modules_editUsers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/editUsers */ \"./src/modules/editUsers.js\");\n/* harmony import */ var _modules_filterUsers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/filterUsers */ \"./src/modules/filterUsers.js\");\n/* harmony import */ var _modules_sortUsers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sortUsers */ \"./src/modules/sortUsers.js\");\n/* harmony import */ var _modules_searchUsers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/searchUsers */ \"./src/modules/searchUsers.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.userService = new _modules_userService__WEBPACK_IMPORTED_MODULE_1__.UserService();\r\n\r\nuserService.getUsers().then((data) => {\r\n  (0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.render)(data);\r\n});\r\n\r\n(0,_modules_addUsers__WEBPACK_IMPORTED_MODULE_2__.addUsers)();\r\n(0,_modules_removeUsers__WEBPACK_IMPORTED_MODULE_3__.removeUsers)();\r\n(0,_modules_changePermissions__WEBPACK_IMPORTED_MODULE_4__.changePermissions)();\r\n(0,_modules_editUsers__WEBPACK_IMPORTED_MODULE_5__.editUsers)();\r\n(0,_modules_filterUsers__WEBPACK_IMPORTED_MODULE_6__.filterUsers)();\r\n(0,_modules_sortUsers__WEBPACK_IMPORTED_MODULE_7__.sortUsers)();\r\n(0,_modules_searchUsers__WEBPACK_IMPORTED_MODULE_8__.searchUsers)();\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.js?");

/***/ }),

/***/ "./src/modules/addUsers.js":
/*!*********************************!*\
  !*** ./src/modules/addUsers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addUsers: () => (/* binding */ addUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\nconst addUsers = () => {\n  const form = document.querySelector('form');\n  const nameInput = document.querySelector('#form-name');\n  const emailInput = document.querySelector('#form-email');\n  const childrenInput = document.querySelector('#form-children');\n\n  form.addEventListener('submit', (e) => {\n    e.preventDefault;\n    if (!form.dataset.method) {\n      const user = {\n        name: nameInput.value,\n        email: emailInput.value,\n        children: childrenInput.checked,\n        permissions: false,\n      };\n      userService.addUser(user).then(() => {\n        userService.getUsers().then((users) => {\n          (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\n          form.reset();\n        });\n      });\n    }\n  });\n};\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/addUsers.js?");

/***/ }),

/***/ "./src/modules/changePermissions.js":
/*!******************************************!*\
  !*** ./src/modules/changePermissions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changePermissions: () => (/* binding */ changePermissions)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\nconst changePermissions = () => {\n  const tbody = document.querySelector('#table-body');\n\n  tbody.addEventListener('click', (e) => {\n    if (e.target.closest('input[type=\"checkbox\"]')) {\n      const tr = e.target.closest('tr');\n      const input = tr.querySelector('input[type=\"checkbox\"]');\n      const id = tr.dataset.key;\n\n      userService.changeUser(id, { permissions: input.checked }).then((res) => {\n        userService.getUsers().then((users) => {\n          (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\n        });\n      });\n    }\n  });\n};\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/changePermissions.js?");

/***/ }),

/***/ "./src/modules/editUsers.js":
/*!**********************************!*\
  !*** ./src/modules/editUsers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editUsers: () => (/* binding */ editUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\nconst editUsers = () => {\n  const tbody = document.querySelector('#table-body');\n  const form = document.querySelector('form');\n  const nameInput = document.querySelector('#form-name');\n  const emailInput = document.querySelector('#form-email');\n  const childrenInput = document.querySelector('#form-children');\n\n  tbody.addEventListener('click', (e) => {\n    if (e.target.closest('.btn-edit')) {\n      const tr = e.target.closest('tr');\n      const id = tr.dataset.key;\n\n      console.log(id);\n      userService.getUser(id).then((user) => {\n        nameInput.value = user.name;\n        emailInput.value = user.email;\n        childrenInput.checked = user.children;\n\n        form.dataset.method = id;\n      });\n    }\n  });\n\n  form.addEventListener('submit', (e) => {\n    e.preventDefault;\n    if (form.dataset.method) {\n      const id = form.dataset.method;\n      const user = {\n        name: nameInput.value,\n        email: emailInput.value,\n        children: childrenInput.checked,\n        permissions: false,\n      };\n\n      userService.editUser(id, user).then(() => {\n        userService.getUsers().then((users) => {\n          (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\n          form.reset();\n          form.removeAttribute('data-method');\n        });\n      });\n    }\n  });\n};\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/editUsers.js?");

/***/ }),

/***/ "./src/modules/filterUsers.js":
/*!************************************!*\
  !*** ./src/modules/filterUsers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   filterUsers: () => (/* binding */ filterUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\nconst filterUsers = () => {\n  const btnIsChildren = document.querySelector('#btn-isChildren');\n  const btnisPermissions = document.querySelector('#btn-isPermissions');\n  const btnIsAll = document.querySelector('#btn-isAll');\n\n  btnIsChildren.addEventListener('click', () => {\n    userService.filterUsers('children').then((users) => {\n      (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\n    });\n  });\n  btnisPermissions.addEventListener('click', () => {\n    userService.filterUsers('permissions').then((users) => {\n      (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\n    });\n  });\n  btnIsAll.addEventListener('click', () => {\n    userService.getUsers().then((users) => {\n      (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\n    });\n  });\n};\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/filterUsers.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   debounce: () => (/* binding */ debounce)\n/* harmony export */ });\nconst debounce = (func, ms = 300) => {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => {\n      func.apply(undefined, args);\n    }, ms);\n  };\n};\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/removeUsers.js":
/*!************************************!*\
  !*** ./src/modules/removeUsers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeUsers: () => (/* binding */ removeUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\nconst removeUsers = () => {\n  const tbody = document.querySelector('#table-body');\n\n  tbody.addEventListener('click', (e) => {\n    if (e.target.closest('.btn-remove')) {\n      const tr = e.target.closest('tr');\n      const id = tr.dataset.key;\n\n      userService.removeUser(id).then((res) => {\n        userService.getUsers().then((users) => {\n          (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\n        });\n      });\n    }\n  });\n};\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/removeUsers.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\nconst render = (users) => {\r\n  const tbody = document.querySelector('#table-body');\r\n  tbody.innerHTML = '';\r\n\r\n  users.forEach((user) => {\r\n    tbody.insertAdjacentHTML(\r\n      'beforeend',\r\n      `<tr data-key=\"${user.id}\">\r\n      <th scope=\"row\">${user.id}</th>\r\n      <td>${user.name}</td>\r\n      <td>${user.email}</td>\r\n      <td>${user.children ? 'Есть' : 'Нет'}</td>\r\n      <td>\r\n          <div class=\"form-check form-switch\">\r\n              <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\"\r\n                  id=\"form-children\" ${user.permissions ? 'checked' : ''}> \r\n          </div>\r\n      </td>\r\n      <td>\r\n          <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n              <button type=\"button\" class=\"btn btn-warning btn-edit\">\r\n                  <i class=\"bi-pencil-square\"></i>\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-danger btn-remove\">\r\n                  <i class=\"bi-person-x\"></i>\r\n              </button>\r\n          </div>\r\n      </td>\r\n   </tr>\r\n    `\r\n    );\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/searchUsers.js":
/*!************************************!*\
  !*** ./src/modules/searchUsers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   searchUsers: () => (/* binding */ searchUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\n\n\nconst searchUsers = () => {\n  const input = document.querySelector('#search-input');\n  const debounceSearch = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.debounce)(() => {\n    userService.getSearchUsers(input.value).then((users) => {\n      (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\n    });\n  }, 500);\n  input.addEventListener('input', debounceSearch);\n};\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/searchUsers.js?");

/***/ }),

/***/ "./src/modules/sortUsers.js":
/*!**********************************!*\
  !*** ./src/modules/sortUsers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sortUsers: () => (/* binding */ sortUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\n\nconst sortUsers = () => {\n  const headerSortIsChildren = document.querySelector('#sort-is-children');\n  let isSort = false;\n\n  headerSortIsChildren.style.cursor = 'pointer';\n  //   getSortUsers\n  headerSortIsChildren.addEventListener('click', () => {\n    userService\n      .getSortUsers({\n        name: 'children',\n        value: isSort ? 'asc' : 'desc',\n      })\n      .then((users) => {\n        (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\n      });\n    isSort = !isSort;\n  });\n};\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/sortUsers.js?");

/***/ }),

/***/ "./src/modules/userService.js":
/*!************************************!*\
  !*** ./src/modules/userService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserService: () => (/* binding */ UserService)\n/* harmony export */ });\nclass UserService {\n  getUsers() {\n    return fetch('http://localhost:4545/users').then((res) => res.json());\n  }\n\n  addUser(user) {\n    return fetch('http://localhost:4545/users', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify(user),\n    }).then((res) => res.json());\n  }\n\n  removeUser(id) {\n    return fetch(`http://localhost:4545/users/${id}`, {\n      method: 'DELETE',\n    }).then((res) => res.json());\n  }\n\n  changeUser(id, data) {\n    return fetch(`http://localhost:4545/users/${id}`, {\n      method: 'PATCH',\n      body: JSON.stringify(data),\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    }).then((res) => res.json());\n  }\n\n  getUser(id) {\n    return fetch(`http://localhost:4545/users/${id}`).then((res) => res.json());\n  }\n\n  editUser(id, user) {\n    return fetch(`http://localhost:4545/users/${id}`, {\n      method: 'PUT',\n      body: JSON.stringify(user),\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    }).then((res) => res.json());\n  }\n\n  filterUsers(filterOption) {\n    return fetch(`http://localhost:4545/users?${filterOption}=true`).then(\n      (res) => res.json()\n    );\n  }\n\n  getSortUsers(sortOption) {\n    return fetch(\n      `http://localhost:4545/users?_sort=${sortOption.name}&_order=${sortOption.value}`\n    ).then((res) => res.json());\n  }\n  getSearchUsers(str) {\n    return fetch(`http://localhost:4545/users?name_like=${str}`).then((res) =>\n      res.json()\n    );\n  }\n}\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/userService.js?");

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