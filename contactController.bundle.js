/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContact": () => (/* binding */ createContact)
/* harmony export */ });
/* harmony import */ var Assets_images_map_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Assets/images/map.png */ "./src/assets/images/map.png");
/* harmony import */ var Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Utilities/nodeManager.js */ "./src/utilities/nodeManager.js");
/* harmony import */ var Utilities_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Utilities/button.js */ "./src/utilities/button.js");




function createInfoTextData(fatherDiv, text, title = false) {
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__.createAddNode('p', fatherDiv, title ? 'contactTitle' : 'contactInfo', null, text);
}

function createInfo() {
  // Create HTML elements text content
  const divContact = Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__.createNode('div');
  createInfoTextData(divContact, 'CONTACT', true);
  createInfoTextData(divContact, 'Toledo St, 99,');
  createInfoTextData(divContact, '80010, Naples, Italy');
  createInfoTextData(divContact, '');
  createInfoTextData(divContact, '081 123 4567');
  createInfoTextData(divContact, 'OPENING HOURS', true);
  createInfoTextData(divContact, 'Tuesday - Saturday:');
  createInfoTextData(divContact, '12:30 - 15:00');
  createInfoTextData(divContact, '19:00 - 24:00');
  createInfoTextData(divContact, '');
  createInfoTextData(divContact, 'Sunday: 19:00 - 24:00');
  createInfoTextData(divContact, 'Monday: closed');
  return divContact;
}

function createLocation() {
  const divLocation = Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__.createNode('div');
  createInfoTextData(divLocation, 'WHERE WE ARE', true);
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__.createAddNodeImg('map.png', 'mapLocation', divLocation);
  return divLocation;
}

function createContact() {
  let elements = [];
  const divMain = Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__.createNodeClass('div', 'gridContact');
  // Add to main grid
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__.addNodeChild(divMain, createInfo());
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__.addNodeChild(divMain, createLocation());
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__.addNodeChild(divMain, (0,Utilities_button_js__WEBPACK_IMPORTED_MODULE_2__.createButton)('BOOK A TABLE', null, (_) => {
    window.open('https://github.com/cel8');
  }));
  elements.push(divMain);
  return elements;
}

/***/ }),

/***/ "./src/utilities/button.js":
/*!*********************************!*\
  !*** ./src/utilities/button.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "createImageButton": () => (/* binding */ createImageButton),
/* harmony export */   "createImageLinkButton": () => (/* binding */ createImageLinkButton)
/* harmony export */ });
/* harmony import */ var Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utilities/nodeManager.js */ "./src/utilities/nodeManager.js");


function createButton(btnText = '', svgIconFileName = null, cbEvent = undefined) {
  const btn = Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeClass('button', 'navButton');
  // Insert icon when exist
  if(svgIconFileName) {
    Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createAddNodeImg(svgIconFileName, btnText, btn, 'icon');
  }
  // Add text when contains something
  if(btnText.length > 0) {
    Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createAddNode('p', btn, null, null, btnText);
  }
  // Add button event
  btn.onclick = cbEvent;
  return btn;  
}

function createImageButton(svgIconFileName, cbEvent = undefined) {
  return createButton('', svgIconFileName, cbEvent)
}

function createImageLinkButton(link, svgIconFileName) {
  const node = Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeLink(link, null, null, null, 
    Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeImg(svgIconFileName, 'imageLink', 'icon-link')
  );
  return node;
}

/***/ }),

/***/ "./src/utilities/nodeManager.js":
/*!**************************************!*\
  !*** ./src/utilities/nodeManager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNodeChild": () => (/* binding */ addNodeChild),
/* harmony export */   "createAddNode": () => (/* binding */ createAddNode),
/* harmony export */   "createAddNodeImg": () => (/* binding */ createAddNodeImg),
/* harmony export */   "createNode": () => (/* binding */ createNode),
/* harmony export */   "createNodeClass": () => (/* binding */ createNodeClass),
/* harmony export */   "createNodeContent": () => (/* binding */ createNodeContent),
/* harmony export */   "createNodeID": () => (/* binding */ createNodeID),
/* harmony export */   "createNodeImg": () => (/* binding */ createNodeImg),
/* harmony export */   "createNodeImgClass": () => (/* binding */ createNodeImgClass),
/* harmony export */   "createNodeImgID": () => (/* binding */ createNodeImgID),
/* harmony export */   "createNodeLink": () => (/* binding */ createNodeLink),
/* harmony export */   "isElement": () => (/* binding */ isElement),
/* harmony export */   "isNode": () => (/* binding */ isNode),
/* harmony export */   "removeAllChildNodes": () => (/* binding */ removeAllChildNodes),
/* harmony export */   "updateNodeImg": () => (/* binding */ updateNodeImg)
/* harmony export */ });

//Returns true if it is a DOM node
function isNode(o){
  return (
    typeof Node === "object" ? o instanceof Node : 
    o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName==="string"
  );
}

//Returns true if it is a DOM element    
function isElement(o){
  return (
    typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
    o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
  );
}

function createNode(type, className = null, id = null, content = null, children = null) {
  const elem = document.createElement(type);
  // Add class name or ID
  if(className) elem.className = className;
  if(id) elem.id = id;
  // Add text content
  if(content) elem.textContent = content;
  // Eventually add child or children
  addNodeChild(elem, children);
  return elem;
}

function createNodeContent(type, content, className = null, id = null) {
  return createNode(type, className, id, content, null);
}

function createNodeClass(type, className, id = null, content = null) {
  return createNode(type, className, id, content, null);
}

function createNodeID(type, id, className = null, content = null) {
  return createNode(type, className, id, content, null);
}

function createNodeImg(imgFileName, alt, className = null, id = null) {
  const fileFullPath = './images/' + imgFileName;
  const node = createNode('img', className, id, null, null);
  node.setAttribute('src', fileFullPath);
  node.setAttribute('alt', alt);
  return node;
}

function createNodeImgClass(imgFileName, alt, className, id = null) {
  return createNodeImg(imgFileName, alt, className, id);
}

function createNodeImgID(imgFileName, alt, id, className = null) {
  return createNodeImg(imgFileName, alt, className, id);
}

function createNodeLink(link, className = null, id = null, content = null, children = null) {
  const node = createNode('a', className, id, content, children);
  node.setAttribute('href', link);
  node.setAttribute('target', '_blank');
  return node;
}

function addNodeChild(father, children) {
  if(children) {
    if(Array.isArray(children)) { // Contains more than one child in Array
      children.forEach(child => {
        father.appendChild(child);
      });
    } else if(isElement(children)) { // Contains just one child
      father.appendChild(children);
    }
  }
}

function createAddNode(type, father, className = null, id = null, content = null, children = null) {
  // Append the new node in father
  father.appendChild(createNode(type, className, id, content, children));
}

function createAddNodeImg(imgFileName, alt, father, className = null, id = null, content = null, children = null) {
  // Append the new node in father
  father.appendChild(createNodeImg(imgFileName, alt, className, id, content, children));
}

function updateNodeImg(imgFileName, father, selector) {
  const imgNode = father.querySelector(selector);
  if(imgNode) imgNode.setAttribute('src', './images/' + imgFileName);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

/***/ }),

/***/ "./src/assets/images/map.png":
/*!***********************************!*\
  !*** ./src/assets/images/map.png ***!
  \***********************************/
/***/ ((module) => {

module.exports = "images/map.png";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************************!*\
  !*** ./src/controller/contactController.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactController": () => (/* binding */ ContactController)
/* harmony export */ });
/* harmony import */ var Modules_contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Modules/contact.js */ "./src/modules/contact.js");


class ContactController {
  constructor() {
  }
  prepareContact() {
    return (0,Modules_contact_js__WEBPACK_IMPORTED_MODULE_0__.createContact)();
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdENvbnRyb2xsZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ3lCO0FBQ0w7O0FBRWxEO0FBQ0EsRUFBRSxtRUFBeUI7QUFDM0I7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixnRUFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixnRUFBc0I7QUFDNUM7QUFDQSxFQUFFLHNFQUE0QjtBQUM5QjtBQUNBOztBQUVPO0FBQ1A7QUFDQSxrQkFBa0IscUVBQTJCO0FBQzdDO0FBQ0EsRUFBRSxrRUFBd0I7QUFDMUIsRUFBRSxrRUFBd0I7QUFDMUIsRUFBRSxrRUFBd0IsVUFBVSxpRUFBWTtBQUNoRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUN1RDs7QUFFaEQ7QUFDUCxjQUFjLHFFQUEyQjtBQUN6QztBQUNBO0FBQ0EsSUFBSSxzRUFBNEI7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtRUFBeUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUCxlQUFlLG9FQUEwQjtBQUN6QyxJQUFJLG1FQUF5QjtBQUM3QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU0sK0JBQStCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05rRDs7QUFFM0M7QUFDUDtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlFQUFhO0FBQ3hCO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy91dGlsaXRpZXMvYnV0dG9uLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL3V0aWxpdGllcy9ub2RlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL2NvbnRyb2xsZXIvY29udGFjdENvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdBc3NldHMvaW1hZ2VzL21hcC5wbmcnXG5pbXBvcnQgKiBhcyBub2RlTWFuYWdlciBmcm9tICdVdGlsaXRpZXMvbm9kZU1hbmFnZXIuanMnXG5pbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICdVdGlsaXRpZXMvYnV0dG9uLmpzJ1xuXG5mdW5jdGlvbiBjcmVhdGVJbmZvVGV4dERhdGEoZmF0aGVyRGl2LCB0ZXh0LCB0aXRsZSA9IGZhbHNlKSB7XG4gIG5vZGVNYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ3AnLCBmYXRoZXJEaXYsIHRpdGxlID8gJ2NvbnRhY3RUaXRsZScgOiAnY29udGFjdEluZm8nLCBudWxsLCB0ZXh0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mbygpIHtcbiAgLy8gQ3JlYXRlIEhUTUwgZWxlbWVudHMgdGV4dCBjb250ZW50XG4gIGNvbnN0IGRpdkNvbnRhY3QgPSBub2RlTWFuYWdlci5jcmVhdGVOb2RlKCdkaXYnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICdDT05UQUNUJywgdHJ1ZSk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnVG9sZWRvIFN0LCA5OSwnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICc4MDAxMCwgTmFwbGVzLCBJdGFseScpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJycpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJzA4MSAxMjMgNDU2NycpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ09QRU5JTkcgSE9VUlMnLCB0cnVlKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICdUdWVzZGF5IC0gU2F0dXJkYXk6Jyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnMTI6MzAgLSAxNTowMCcpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJzE5OjAwIC0gMjQ6MDAnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICcnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICdTdW5kYXk6IDE5OjAwIC0gMjQ6MDAnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICdNb25kYXk6IGNsb3NlZCcpO1xuICByZXR1cm4gZGl2Q29udGFjdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oKSB7XG4gIGNvbnN0IGRpdkxvY2F0aW9uID0gbm9kZU1hbmFnZXIuY3JlYXRlTm9kZSgnZGl2Jyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZMb2NhdGlvbiwgJ1dIRVJFIFdFIEFSRScsIHRydWUpO1xuICBub2RlTWFuYWdlci5jcmVhdGVBZGROb2RlSW1nKCdtYXAucG5nJywgJ21hcExvY2F0aW9uJywgZGl2TG9jYXRpb24pO1xuICByZXR1cm4gZGl2TG9jYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgY29uc3QgZGl2TWFpbiA9IG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGVDbGFzcygnZGl2JywgJ2dyaWRDb250YWN0Jyk7XG4gIC8vIEFkZCB0byBtYWluIGdyaWRcbiAgbm9kZU1hbmFnZXIuYWRkTm9kZUNoaWxkKGRpdk1haW4sIGNyZWF0ZUluZm8oKSk7XG4gIG5vZGVNYW5hZ2VyLmFkZE5vZGVDaGlsZChkaXZNYWluLCBjcmVhdGVMb2NhdGlvbigpKTtcbiAgbm9kZU1hbmFnZXIuYWRkTm9kZUNoaWxkKGRpdk1haW4sIGNyZWF0ZUJ1dHRvbignQk9PSyBBIFRBQkxFJywgbnVsbCwgKF8pID0+IHtcbiAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9naXRodWIuY29tL2NlbDgnKTtcbiAgfSkpO1xuICBlbGVtZW50cy5wdXNoKGRpdk1haW4pO1xuICByZXR1cm4gZWxlbWVudHM7XG59IiwiaW1wb3J0ICogYXMgbm9kZU1hbmFnZXIgZnJvbSAnVXRpbGl0aWVzL25vZGVNYW5hZ2VyLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnV0dG9uKGJ0blRleHQgPSAnJywgc3ZnSWNvbkZpbGVOYW1lID0gbnVsbCwgY2JFdmVudCA9IHVuZGVmaW5lZCkge1xuICBjb25zdCBidG4gPSBub2RlTWFuYWdlci5jcmVhdGVOb2RlQ2xhc3MoJ2J1dHRvbicsICduYXZCdXR0b24nKTtcbiAgLy8gSW5zZXJ0IGljb24gd2hlbiBleGlzdFxuICBpZihzdmdJY29uRmlsZU5hbWUpIHtcbiAgICBub2RlTWFuYWdlci5jcmVhdGVBZGROb2RlSW1nKHN2Z0ljb25GaWxlTmFtZSwgYnRuVGV4dCwgYnRuLCAnaWNvbicpO1xuICB9XG4gIC8vIEFkZCB0ZXh0IHdoZW4gY29udGFpbnMgc29tZXRoaW5nXG4gIGlmKGJ0blRleHQubGVuZ3RoID4gMCkge1xuICAgIG5vZGVNYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ3AnLCBidG4sIG51bGwsIG51bGwsIGJ0blRleHQpO1xuICB9XG4gIC8vIEFkZCBidXR0b24gZXZlbnRcbiAgYnRuLm9uY2xpY2sgPSBjYkV2ZW50O1xuICByZXR1cm4gYnRuOyAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWFnZUJ1dHRvbihzdmdJY29uRmlsZU5hbWUsIGNiRXZlbnQgPSB1bmRlZmluZWQpIHtcbiAgcmV0dXJuIGNyZWF0ZUJ1dHRvbignJywgc3ZnSWNvbkZpbGVOYW1lLCBjYkV2ZW50KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1hZ2VMaW5rQnV0dG9uKGxpbmssIHN2Z0ljb25GaWxlTmFtZSkge1xuICBjb25zdCBub2RlID0gbm9kZU1hbmFnZXIuY3JlYXRlTm9kZUxpbmsobGluaywgbnVsbCwgbnVsbCwgbnVsbCwgXG4gICAgbm9kZU1hbmFnZXIuY3JlYXRlTm9kZUltZyhzdmdJY29uRmlsZU5hbWUsICdpbWFnZUxpbmsnLCAnaWNvbi1saW5rJylcbiAgKTtcbiAgcmV0dXJuIG5vZGU7XG59IiwiXG4vL1JldHVybnMgdHJ1ZSBpZiBpdCBpcyBhIERPTSBub2RlXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlKG8pe1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiBOb2RlID09PSBcIm9iamVjdFwiID8gbyBpbnN0YW5jZW9mIE5vZGUgOiBcbiAgICBvICYmIHR5cGVvZiBvID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvLm5vZGVUeXBlID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBvLm5vZGVOYW1lPT09XCJzdHJpbmdcIlxuICApO1xufVxuXG4vL1JldHVybnMgdHJ1ZSBpZiBpdCBpcyBhIERPTSBlbGVtZW50ICAgIFxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudChvKXtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgSFRNTEVsZW1lbnQgPT09IFwib2JqZWN0XCIgPyBvIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgOiAvL0RPTTJcbiAgICBvICYmIHR5cGVvZiBvID09PSBcIm9iamVjdFwiICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZT09PVwic3RyaW5nXCJcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGUodHlwZSwgY2xhc3NOYW1lID0gbnVsbCwgaWQgPSBudWxsLCBjb250ZW50ID0gbnVsbCwgY2hpbGRyZW4gPSBudWxsKSB7XG4gIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAvLyBBZGQgY2xhc3MgbmFtZSBvciBJRFxuICBpZihjbGFzc05hbWUpIGVsZW0uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICBpZihpZCkgZWxlbS5pZCA9IGlkO1xuICAvLyBBZGQgdGV4dCBjb250ZW50XG4gIGlmKGNvbnRlbnQpIGVsZW0udGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAvLyBFdmVudHVhbGx5IGFkZCBjaGlsZCBvciBjaGlsZHJlblxuICBhZGROb2RlQ2hpbGQoZWxlbSwgY2hpbGRyZW4pO1xuICByZXR1cm4gZWxlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGVDb250ZW50KHR5cGUsIGNvbnRlbnQsIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCkge1xuICByZXR1cm4gY3JlYXRlTm9kZSh0eXBlLCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGVDbGFzcyh0eXBlLCBjbGFzc05hbWUsIGlkID0gbnVsbCwgY29udGVudCA9IG51bGwpIHtcbiAgcmV0dXJuIGNyZWF0ZU5vZGUodHlwZSwgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgbnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlSUQodHlwZSwgaWQsIGNsYXNzTmFtZSA9IG51bGwsIGNvbnRlbnQgPSBudWxsKSB7XG4gIHJldHVybiBjcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZUltZyhpbWdGaWxlTmFtZSwgYWx0LCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwpIHtcbiAgY29uc3QgZmlsZUZ1bGxQYXRoID0gJy4vaW1hZ2VzLycgKyBpbWdGaWxlTmFtZTtcbiAgY29uc3Qgbm9kZSA9IGNyZWF0ZU5vZGUoJ2ltZycsIGNsYXNzTmFtZSwgaWQsIG51bGwsIG51bGwpO1xuICBub2RlLnNldEF0dHJpYnV0ZSgnc3JjJywgZmlsZUZ1bGxQYXRoKTtcbiAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGFsdCk7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZUltZ0NsYXNzKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSwgaWQgPSBudWxsKSB7XG4gIHJldHVybiBjcmVhdGVOb2RlSW1nKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSwgaWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZUltZ0lEKGltZ0ZpbGVOYW1lLCBhbHQsIGlkLCBjbGFzc05hbWUgPSBudWxsKSB7XG4gIHJldHVybiBjcmVhdGVOb2RlSW1nKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSwgaWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZUxpbmsobGluaywgY2xhc3NOYW1lID0gbnVsbCwgaWQgPSBudWxsLCBjb250ZW50ID0gbnVsbCwgY2hpbGRyZW4gPSBudWxsKSB7XG4gIGNvbnN0IG5vZGUgPSBjcmVhdGVOb2RlKCdhJywgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgY2hpbGRyZW4pO1xuICBub2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGxpbmspO1xuICBub2RlLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5vZGVDaGlsZChmYXRoZXIsIGNoaWxkcmVuKSB7XG4gIGlmKGNoaWxkcmVuKSB7XG4gICAgaWYoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHsgLy8gQ29udGFpbnMgbW9yZSB0aGFuIG9uZSBjaGlsZCBpbiBBcnJheVxuICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGZhdGhlci5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYoaXNFbGVtZW50KGNoaWxkcmVuKSkgeyAvLyBDb250YWlucyBqdXN0IG9uZSBjaGlsZFxuICAgICAgZmF0aGVyLmFwcGVuZENoaWxkKGNoaWxkcmVuKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFkZE5vZGUodHlwZSwgZmF0aGVyLCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwsIGNvbnRlbnQgPSBudWxsLCBjaGlsZHJlbiA9IG51bGwpIHtcbiAgLy8gQXBwZW5kIHRoZSBuZXcgbm9kZSBpbiBmYXRoZXJcbiAgZmF0aGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5vZGUodHlwZSwgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgY2hpbGRyZW4pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFkZE5vZGVJbWcoaW1nRmlsZU5hbWUsIGFsdCwgZmF0aGVyLCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwsIGNvbnRlbnQgPSBudWxsLCBjaGlsZHJlbiA9IG51bGwpIHtcbiAgLy8gQXBwZW5kIHRoZSBuZXcgbm9kZSBpbiBmYXRoZXJcbiAgZmF0aGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGFsdCwgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgY2hpbGRyZW4pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGZhdGhlciwgc2VsZWN0b3IpIHtcbiAgY29uc3QgaW1nTm9kZSA9IGZhdGhlci5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgaWYoaW1nTm9kZSkgaW1nTm9kZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltYWdlcy8nICsgaW1nRmlsZU5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlQ29udGFjdCB9IGZyb20gJ01vZHVsZXMvY29udGFjdC5qcydcblxuZXhwb3J0IGNsYXNzIENvbnRhY3RDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbiAgcHJlcGFyZUNvbnRhY3QoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNvbnRhY3QoKTtcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==