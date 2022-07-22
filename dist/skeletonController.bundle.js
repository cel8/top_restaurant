/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller/navController.js":
/*!*****************************************!*\
  !*** ./src/controller/navController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationController": () => (/* binding */ NavigationController),
/* harmony export */   "pageType": () => (/* binding */ pageType)
/* harmony export */ });
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../modules/contact */ "./src/modules/contact.js");




function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

const pageType = {
  home: 'Home',
  menu: 'Menu',
  contact: 'Contact',
};

class NavigationController {
  constructor() {

  }
  #showPage(elements) {
    const mainContent = document.querySelector('.main-content');
    removeAllChildNodes(mainContent);
    elements.forEach(element => {
      mainContent.appendChild(element);
    });
  }
  changePage(pageName) {
    let elements = [];
    switch (pageName) {
      case pageType.menu:
        elements = (0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)();
        break;
      case pageType.contact:
        elements = (0,_modules_contact__WEBPACK_IMPORTED_MODULE_2__.createContact)();
        break;
      case pageType.home:
      default:
        elements = (0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.createHome)();
        break;
    }
    this.#showPage(elements);
  }
}

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContact": () => (/* binding */ createContact)
/* harmony export */ });
function createContact() {
  let elements = [];
  const menu = document.createElement('p');
  menu.textContent = 'baus';
  elements.push(menu);
  return elements;
}

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHome": () => (/* binding */ createHome)
/* harmony export */ });
function createHome() {
  let elements = [];
  const menu = document.createElement('p');
  menu.textContent = 'miao';
  elements.push(menu);
  return elements;
}

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
function createMenu() {
  let elements = [];
  const menu = document.createElement('p');
  menu.textContent = 'ciao';
  elements.push(menu);
  return elements;
}

/***/ }),

/***/ "./src/assets/images/svg/contact.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/svg/contact.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "contact.svg";

/***/ }),

/***/ "./src/assets/images/svg/home.svg":
/*!****************************************!*\
  !*** ./src/assets/images/svg/home.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "home.svg";

/***/ }),

/***/ "./src/assets/images/svg/menu.svg":
/*!****************************************!*\
  !*** ./src/assets/images/svg/menu.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "menu.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************************!*\
  !*** ./src/controller/skeletonController.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkeletonController": () => (/* binding */ SkeletonController)
/* harmony export */ });
/* harmony import */ var _assets_images_svg_home_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/images/svg/home.svg */ "./src/assets/images/svg/home.svg");
/* harmony import */ var _assets_images_svg_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assets/images/svg/menu.svg */ "./src/assets/images/svg/menu.svg");
/* harmony import */ var _assets_images_svg_contact_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../assets/images/svg/contact.svg */ "./src/assets/images/svg/contact.svg");
/* harmony import */ var _navController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navController.js */ "./src/controller/navController.js");





class SkeletonController {
  constructor() {
    this.navController = new _navController_js__WEBPACK_IMPORTED_MODULE_3__.NavigationController();
  }
  #createButton(btnText, svgIcon = null) {
    const btn = document.createElement('button');
    const pElem = document.createElement('p');
    // Set up text element
    pElem.textContent = btnText;
    // Insert icon when exist
    if(svgIcon) {
      const imgElem = document.createElement('img');
      imgElem.setAttribute('src', svgIcon);
      imgElem.setAttribute('alt', btnText);
      imgElem.className = 'icon';
      btn.appendChild(imgElem);
    }
    btn.appendChild(pElem);
    btn.onclick = (e) => {
      const pElem = e.target.querySelector('p');
      if(pElem === null) return;
      let page;
      if(pElem.textContent === _navController_js__WEBPACK_IMPORTED_MODULE_3__.pageType.contact) {
        page = _navController_js__WEBPACK_IMPORTED_MODULE_3__.pageType.contact;
      } else if(pElem.textContent === _navController_js__WEBPACK_IMPORTED_MODULE_3__.pageType.menu) {
        page = _navController_js__WEBPACK_IMPORTED_MODULE_3__.pageType.menu;
      } else {
        page = _navController_js__WEBPACK_IMPORTED_MODULE_3__.pageType.home;
      }
      this.navController.changePage(page);
    }
    // Setup btn properties
    btn.className = 'navButton';
    return btn;  
  }
  #createNavigationBar() {
    const divElem = document.createElement('div');
    // Fill text in button
    divElem.appendChild(this.#createButton('Home', './images/home.svg'));
    divElem.appendChild(this.#createButton('Menu', './images/menu.svg'));
    divElem.appendChild(this.#createButton('Contact', './images/contact.svg'));
    // Set up class
    divElem.className = 'navigation';
    return divElem;
  }
  #createHeader(header) {
    const divElem = document.createElement('div');
    divElem.textContent = 'Ristorante';
    divElem.className = 'siteTitle'
    // Append child
    header.appendChild(divElem);
    header.appendChild(this.#createNavigationBar());
  }
  #createFooter(footer) {
    const pElem = document.createElement('p');
    const aElem = document.createElement('a');
    const curYear = new Date().getFullYear();
    // Text modify
    pElem.textContent = `Copyright © ${curYear} Alessandro Celotti`;
    aElem.setAttribute('href', 'https://github.com/cel8');
    aElem.setAttribute('target', '_blank');
    // TODO insert icon
    aElem.textContent = 'TODO';
    // Append to footer
    footer.appendChild(pElem);
    footer.appendChild(aElem);
  }
  #createMain(main) {
    const div = document.createElement('div');
    div.className = 'main-content';
    main.appendChild(div);
  }
  createSkeleton(content) {
    // Create content elements
    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');
    // Create elements
    this.#createHeader(header);
    this.#createMain(main);
    this.#createFooter(footer);
    // Append 'em to body#content
    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
    this.navController.changePage(_navController_js__WEBPACK_IMPORTED_MODULE_3__.pageType.home);
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tlbGV0b25Db250cm9sbGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDQTtBQUNNOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5REFBVTtBQUM3QjtBQUNBO0FBQ0EsbUJBQW1CLCtEQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5REFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzNDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDTkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z3QztBQUNBO0FBQ0c7QUFDd0I7O0FBRTVEO0FBQ1A7QUFDQSw2QkFBNkIsbUVBQW9CO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLCtEQUFnQjtBQUMvQyxlQUFlLCtEQUFnQjtBQUMvQixRQUFRLDhCQUE4Qiw0REFBYTtBQUNuRCxlQUFlLDREQUFhO0FBQzVCLFFBQVE7QUFDUixlQUFlLDREQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNERBQWE7QUFDL0M7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvY29udHJvbGxlci9uYXZDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9jb250cm9sbGVyL3NrZWxldG9uQ29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVIb21lIH0gZnJvbSAnLi8uLi9tb2R1bGVzL2hvbWUnXG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSAnLi8uLi9tb2R1bGVzL21lbnUnXG5pbXBvcnQgeyBjcmVhdGVDb250YWN0IH0gZnJvbSAnLi8uLi9tb2R1bGVzL2NvbnRhY3QnXG5cbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGFnZVR5cGUgPSB7XG4gIGhvbWU6ICdIb21lJyxcbiAgbWVudTogJ01lbnUnLFxuICBjb250YWN0OiAnQ29udGFjdCcsXG59O1xuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG4gICNzaG93UGFnZShlbGVtZW50cykge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMobWFpbkNvbnRlbnQpO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuICBjaGFuZ2VQYWdlKHBhZ2VOYW1lKSB7XG4gICAgbGV0IGVsZW1lbnRzID0gW107XG4gICAgc3dpdGNoIChwYWdlTmFtZSkge1xuICAgICAgY2FzZSBwYWdlVHlwZS5tZW51OlxuICAgICAgICBlbGVtZW50cyA9IGNyZWF0ZU1lbnUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHBhZ2VUeXBlLmNvbnRhY3Q6XG4gICAgICAgIGVsZW1lbnRzID0gY3JlYXRlQ29udGFjdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgcGFnZVR5cGUuaG9tZTpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVsZW1lbnRzID0gY3JlYXRlSG9tZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy4jc2hvd1BhZ2UoZWxlbWVudHMpO1xuICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gIGxldCBlbGVtZW50cyA9IFtdO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtZW51LnRleHRDb250ZW50ID0gJ2JhdXMnO1xuICBlbGVtZW50cy5wdXNoKG1lbnUpO1xuICByZXR1cm4gZWxlbWVudHM7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gIGxldCBlbGVtZW50cyA9IFtdO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtZW51LnRleHRDb250ZW50ID0gJ21pYW8nO1xuICBlbGVtZW50cy5wdXNoKG1lbnUpO1xuICByZXR1cm4gZWxlbWVudHM7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIGxldCBlbGVtZW50cyA9IFtdO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtZW51LnRleHRDb250ZW50ID0gJ2NpYW8nO1xuICBlbGVtZW50cy5wdXNoKG1lbnUpO1xuICByZXR1cm4gZWxlbWVudHM7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuLy4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2hvbWUuc3ZnJ1xuaW1wb3J0ICcuLy4uL2Fzc2V0cy9pbWFnZXMvc3ZnL21lbnUuc3ZnJ1xuaW1wb3J0ICcuLy4uL2Fzc2V0cy9pbWFnZXMvc3ZnL2NvbnRhY3Quc3ZnJ1xuaW1wb3J0IHsgcGFnZVR5cGUsIE5hdmlnYXRpb25Db250cm9sbGVyIH0gZnJvbSAnLi9uYXZDb250cm9sbGVyLmpzJ1xuXG5leHBvcnQgY2xhc3MgU2tlbGV0b25Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5uYXZDb250cm9sbGVyID0gbmV3IE5hdmlnYXRpb25Db250cm9sbGVyKCk7XG4gIH1cbiAgI2NyZWF0ZUJ1dHRvbihidG5UZXh0LCBzdmdJY29uID0gbnVsbCkge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHBFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIC8vIFNldCB1cCB0ZXh0IGVsZW1lbnRcbiAgICBwRWxlbS50ZXh0Q29udGVudCA9IGJ0blRleHQ7XG4gICAgLy8gSW5zZXJ0IGljb24gd2hlbiBleGlzdFxuICAgIGlmKHN2Z0ljb24pIHtcbiAgICAgIGNvbnN0IGltZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKCdzcmMnLCBzdmdJY29uKTtcbiAgICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKCdhbHQnLCBidG5UZXh0KTtcbiAgICAgIGltZ0VsZW0uY2xhc3NOYW1lID0gJ2ljb24nO1xuICAgICAgYnRuLmFwcGVuZENoaWxkKGltZ0VsZW0pO1xuICAgIH1cbiAgICBidG4uYXBwZW5kQ2hpbGQocEVsZW0pO1xuICAgIGJ0bi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHBFbGVtID0gZS50YXJnZXQucXVlcnlTZWxlY3RvcigncCcpO1xuICAgICAgaWYocEVsZW0gPT09IG51bGwpIHJldHVybjtcbiAgICAgIGxldCBwYWdlO1xuICAgICAgaWYocEVsZW0udGV4dENvbnRlbnQgPT09IHBhZ2VUeXBlLmNvbnRhY3QpIHtcbiAgICAgICAgcGFnZSA9IHBhZ2VUeXBlLmNvbnRhY3Q7XG4gICAgICB9IGVsc2UgaWYocEVsZW0udGV4dENvbnRlbnQgPT09IHBhZ2VUeXBlLm1lbnUpIHtcbiAgICAgICAgcGFnZSA9IHBhZ2VUeXBlLm1lbnU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWdlID0gcGFnZVR5cGUuaG9tZTtcbiAgICAgIH1cbiAgICAgIHRoaXMubmF2Q29udHJvbGxlci5jaGFuZ2VQYWdlKHBhZ2UpO1xuICAgIH1cbiAgICAvLyBTZXR1cCBidG4gcHJvcGVydGllc1xuICAgIGJ0bi5jbGFzc05hbWUgPSAnbmF2QnV0dG9uJztcbiAgICByZXR1cm4gYnRuOyAgXG4gIH1cbiAgI2NyZWF0ZU5hdmlnYXRpb25CYXIoKSB7XG4gICAgY29uc3QgZGl2RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIEZpbGwgdGV4dCBpbiBidXR0b25cbiAgICBkaXZFbGVtLmFwcGVuZENoaWxkKHRoaXMuI2NyZWF0ZUJ1dHRvbignSG9tZScsICcuL2ltYWdlcy9ob21lLnN2ZycpKTtcbiAgICBkaXZFbGVtLmFwcGVuZENoaWxkKHRoaXMuI2NyZWF0ZUJ1dHRvbignTWVudScsICcuL2ltYWdlcy9tZW51LnN2ZycpKTtcbiAgICBkaXZFbGVtLmFwcGVuZENoaWxkKHRoaXMuI2NyZWF0ZUJ1dHRvbignQ29udGFjdCcsICcuL2ltYWdlcy9jb250YWN0LnN2ZycpKTtcbiAgICAvLyBTZXQgdXAgY2xhc3NcbiAgICBkaXZFbGVtLmNsYXNzTmFtZSA9ICduYXZpZ2F0aW9uJztcbiAgICByZXR1cm4gZGl2RWxlbTtcbiAgfVxuICAjY3JlYXRlSGVhZGVyKGhlYWRlcikge1xuICAgIGNvbnN0IGRpdkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZFbGVtLnRleHRDb250ZW50ID0gJ1Jpc3RvcmFudGUnO1xuICAgIGRpdkVsZW0uY2xhc3NOYW1lID0gJ3NpdGVUaXRsZSdcbiAgICAvLyBBcHBlbmQgY2hpbGRcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGl2RWxlbSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRoaXMuI2NyZWF0ZU5hdmlnYXRpb25CYXIoKSk7XG4gIH1cbiAgI2NyZWF0ZUZvb3Rlcihmb290ZXIpIHtcbiAgICBjb25zdCBwRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBhRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBjdXJZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIC8vIFRleHQgbW9kaWZ5XG4gICAgcEVsZW0udGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7Y3VyWWVhcn0gQWxlc3NhbmRybyBDZWxvdHRpYDtcbiAgICBhRWxlbS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL2NlbDgnKTtcbiAgICBhRWxlbS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICAvLyBUT0RPIGluc2VydCBpY29uXG4gICAgYUVsZW0udGV4dENvbnRlbnQgPSAnVE9ETyc7XG4gICAgLy8gQXBwZW5kIHRvIGZvb3RlclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChwRWxlbSk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGFFbGVtKTtcbiAgfVxuICAjY3JlYXRlTWFpbihtYWluKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9ICdtYWluLWNvbnRlbnQnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfVxuICBjcmVhdGVTa2VsZXRvbihjb250ZW50KSB7XG4gICAgLy8gQ3JlYXRlIGNvbnRlbnQgZWxlbWVudHNcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIC8vIENyZWF0ZSBlbGVtZW50c1xuICAgIHRoaXMuI2NyZWF0ZUhlYWRlcihoZWFkZXIpO1xuICAgIHRoaXMuI2NyZWF0ZU1haW4obWFpbik7XG4gICAgdGhpcy4jY3JlYXRlRm9vdGVyKGZvb3Rlcik7XG4gICAgLy8gQXBwZW5kICdlbSB0byBib2R5I2NvbnRlbnRcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgdGhpcy5uYXZDb250cm9sbGVyLmNoYW5nZVBhZ2UocGFnZVR5cGUuaG9tZSk7XG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=