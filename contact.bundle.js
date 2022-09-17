/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUQ7O0FBRWhEO0FBQ1AsY0FBYyxxRUFBMkI7QUFDekM7QUFDQTtBQUNBLElBQUksc0VBQTRCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLElBQUksbUVBQXlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1AsZUFBZSxvRUFBMEI7QUFDekMsSUFBSSxtRUFBeUI7QUFDN0I7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNLCtCQUErQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O1VDL0ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ044QjtBQUN5QjtBQUNMOztBQUVsRDtBQUNBLEVBQUUsbUVBQXlCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsZ0VBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsZ0VBQXNCO0FBQzVDO0FBQ0EsRUFBRSxzRUFBNEI7QUFDOUI7QUFDQTs7QUFFTztBQUNQO0FBQ0Esa0JBQWtCLHFFQUEyQjtBQUM3QztBQUNBLEVBQUUsa0VBQXdCO0FBQzFCLEVBQUUsa0VBQXdCO0FBQzFCLEVBQUUsa0VBQXdCLFVBQVUsaUVBQVk7QUFDaEQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy91dGlsaXRpZXMvYnV0dG9uLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL3V0aWxpdGllcy9ub2RlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBub2RlTWFuYWdlciBmcm9tICdVdGlsaXRpZXMvbm9kZU1hbmFnZXIuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdXR0b24oYnRuVGV4dCA9ICcnLCBzdmdJY29uRmlsZU5hbWUgPSBudWxsLCBjYkV2ZW50ID0gdW5kZWZpbmVkKSB7XG4gIGNvbnN0IGJ0biA9IG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGVDbGFzcygnYnV0dG9uJywgJ25hdkJ1dHRvbicpO1xuICAvLyBJbnNlcnQgaWNvbiB3aGVuIGV4aXN0XG4gIGlmKHN2Z0ljb25GaWxlTmFtZSkge1xuICAgIG5vZGVNYW5hZ2VyLmNyZWF0ZUFkZE5vZGVJbWcoc3ZnSWNvbkZpbGVOYW1lLCBidG5UZXh0LCBidG4sICdpY29uJyk7XG4gIH1cbiAgLy8gQWRkIHRleHQgd2hlbiBjb250YWlucyBzb21ldGhpbmdcbiAgaWYoYnRuVGV4dC5sZW5ndGggPiAwKSB7XG4gICAgbm9kZU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgncCcsIGJ0biwgbnVsbCwgbnVsbCwgYnRuVGV4dCk7XG4gIH1cbiAgLy8gQWRkIGJ1dHRvbiBldmVudFxuICBidG4ub25jbGljayA9IGNiRXZlbnQ7XG4gIHJldHVybiBidG47ICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltYWdlQnV0dG9uKHN2Z0ljb25GaWxlTmFtZSwgY2JFdmVudCA9IHVuZGVmaW5lZCkge1xuICByZXR1cm4gY3JlYXRlQnV0dG9uKCcnLCBzdmdJY29uRmlsZU5hbWUsIGNiRXZlbnQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWFnZUxpbmtCdXR0b24obGluaywgc3ZnSWNvbkZpbGVOYW1lKSB7XG4gIGNvbnN0IG5vZGUgPSBub2RlTWFuYWdlci5jcmVhdGVOb2RlTGluayhsaW5rLCBudWxsLCBudWxsLCBudWxsLCBcbiAgICBub2RlTWFuYWdlci5jcmVhdGVOb2RlSW1nKHN2Z0ljb25GaWxlTmFtZSwgJ2ltYWdlTGluaycsICdpY29uLWxpbmsnKVxuICApO1xuICByZXR1cm4gbm9kZTtcbn0iLCJcbi8vUmV0dXJucyB0cnVlIGlmIGl0IGlzIGEgRE9NIG5vZGVcbmV4cG9ydCBmdW5jdGlvbiBpc05vZGUobyl7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIE5vZGUgPT09IFwib2JqZWN0XCIgPyBvIGluc3RhbmNlb2YgTm9kZSA6IFxuICAgIG8gJiYgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG8ubm9kZVR5cGUgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIG8ubm9kZU5hbWU9PT1cInN0cmluZ1wiXG4gICk7XG59XG5cbi8vUmV0dXJucyB0cnVlIGlmIGl0IGlzIGEgRE9NIGVsZW1lbnQgICAgXG5leHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50KG8pe1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gXCJvYmplY3RcIiA/IG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA6IC8vRE9NMlxuICAgIG8gJiYgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiYgbyAhPT0gbnVsbCAmJiBvLm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiBvLm5vZGVOYW1lPT09XCJzdHJpbmdcIlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZSh0eXBlLCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwsIGNvbnRlbnQgPSBudWxsLCBjaGlsZHJlbiA9IG51bGwpIHtcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIC8vIEFkZCBjbGFzcyBuYW1lIG9yIElEXG4gIGlmKGNsYXNzTmFtZSkgZWxlbS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIGlmKGlkKSBlbGVtLmlkID0gaWQ7XG4gIC8vIEFkZCB0ZXh0IGNvbnRlbnRcbiAgaWYoY29udGVudCkgZWxlbS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gIC8vIEV2ZW50dWFsbHkgYWRkIGNoaWxkIG9yIGNoaWxkcmVuXG4gIGFkZE5vZGVDaGlsZChlbGVtLCBjaGlsZHJlbik7XG4gIHJldHVybiBlbGVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZUNvbnRlbnQodHlwZSwgY29udGVudCwgY2xhc3NOYW1lID0gbnVsbCwgaWQgPSBudWxsKSB7XG4gIHJldHVybiBjcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZUNsYXNzKHR5cGUsIGNsYXNzTmFtZSwgaWQgPSBudWxsLCBjb250ZW50ID0gbnVsbCkge1xuICByZXR1cm4gY3JlYXRlTm9kZSh0eXBlLCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGVJRCh0eXBlLCBpZCwgY2xhc3NOYW1lID0gbnVsbCwgY29udGVudCA9IG51bGwpIHtcbiAgcmV0dXJuIGNyZWF0ZU5vZGUodHlwZSwgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgbnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlSW1nKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCkge1xuICBjb25zdCBmaWxlRnVsbFBhdGggPSAnLi9pbWFnZXMvJyArIGltZ0ZpbGVOYW1lO1xuICBjb25zdCBub2RlID0gY3JlYXRlTm9kZSgnaW1nJywgY2xhc3NOYW1lLCBpZCwgbnVsbCwgbnVsbCk7XG4gIG5vZGUuc2V0QXR0cmlidXRlKCdzcmMnLCBmaWxlRnVsbFBhdGgpO1xuICBub2RlLnNldEF0dHJpYnV0ZSgnYWx0JywgYWx0KTtcbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlSW1nQ2xhc3MoaW1nRmlsZU5hbWUsIGFsdCwgY2xhc3NOYW1lLCBpZCA9IG51bGwpIHtcbiAgcmV0dXJuIGNyZWF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGFsdCwgY2xhc3NOYW1lLCBpZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlSW1nSUQoaW1nRmlsZU5hbWUsIGFsdCwgaWQsIGNsYXNzTmFtZSA9IG51bGwpIHtcbiAgcmV0dXJuIGNyZWF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGFsdCwgY2xhc3NOYW1lLCBpZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlTGluayhsaW5rLCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwsIGNvbnRlbnQgPSBudWxsLCBjaGlsZHJlbiA9IG51bGwpIHtcbiAgY29uc3Qgbm9kZSA9IGNyZWF0ZU5vZGUoJ2EnLCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBjaGlsZHJlbik7XG4gIG5vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgbGluayk7XG4gIG5vZGUuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTm9kZUNoaWxkKGZhdGhlciwgY2hpbGRyZW4pIHtcbiAgaWYoY2hpbGRyZW4pIHtcbiAgICBpZihBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkgeyAvLyBDb250YWlucyBtb3JlIHRoYW4gb25lIGNoaWxkIGluIEFycmF5XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgZmF0aGVyLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZihpc0VsZW1lbnQoY2hpbGRyZW4pKSB7IC8vIENvbnRhaW5zIGp1c3Qgb25lIGNoaWxkXG4gICAgICBmYXRoZXIuYXBwZW5kQ2hpbGQoY2hpbGRyZW4pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWRkTm9kZSh0eXBlLCBmYXRoZXIsIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCwgY29udGVudCA9IG51bGwsIGNoaWxkcmVuID0gbnVsbCkge1xuICAvLyBBcHBlbmQgdGhlIG5ldyBub2RlIGluIGZhdGhlclxuICBmYXRoZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTm9kZSh0eXBlLCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBjaGlsZHJlbikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWRkTm9kZUltZyhpbWdGaWxlTmFtZSwgYWx0LCBmYXRoZXIsIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCwgY29udGVudCA9IG51bGwsIGNoaWxkcmVuID0gbnVsbCkge1xuICAvLyBBcHBlbmQgdGhlIG5ldyBub2RlIGluIGZhdGhlclxuICBmYXRoZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTm9kZUltZyhpbWdGaWxlTmFtZSwgYWx0LCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBjaGlsZHJlbikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTm9kZUltZyhpbWdGaWxlTmFtZSwgZmF0aGVyLCBzZWxlY3Rvcikge1xuICBjb25zdCBpbWdOb2RlID0gZmF0aGVyLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICBpZihpbWdOb2RlKSBpbWdOb2RlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1hZ2VzLycgKyBpbWdGaWxlTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvbWFwLnBuZydcbmltcG9ydCAqIGFzIG5vZGVNYW5hZ2VyIGZyb20gJ1V0aWxpdGllcy9ub2RlTWFuYWdlci5qcydcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJ1V0aWxpdGllcy9idXR0b24uanMnXG5cbmZ1bmN0aW9uIGNyZWF0ZUluZm9UZXh0RGF0YShmYXRoZXJEaXYsIHRleHQsIHRpdGxlID0gZmFsc2UpIHtcbiAgbm9kZU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgncCcsIGZhdGhlckRpdiwgdGl0bGUgPyAnY29udGFjdFRpdGxlJyA6ICdjb250YWN0SW5mbycsIG51bGwsIHRleHQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmZvKCkge1xuICAvLyBDcmVhdGUgSFRNTCBlbGVtZW50cyB0ZXh0IGNvbnRlbnRcbiAgY29uc3QgZGl2Q29udGFjdCA9IG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGUoJ2RpdicpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ0NPTlRBQ1QnLCB0cnVlKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICdUb2xlZG8gU3QsIDk5LCcpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJzgwMDEwLCBOYXBsZXMsIEl0YWx5Jyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnJyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnMDgxIDEyMyA0NTY3Jyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnT1BFTklORyBIT1VSUycsIHRydWUpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ1R1ZXNkYXkgLSBTYXR1cmRheTonKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICcxMjozMCAtIDE1OjAwJyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnMTk6MDAgLSAyNDowMCcpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJycpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ1N1bmRheTogMTk6MDAgLSAyNDowMCcpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ01vbmRheTogY2xvc2VkJyk7XG4gIHJldHVybiBkaXZDb250YWN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbigpIHtcbiAgY29uc3QgZGl2TG9jYXRpb24gPSBub2RlTWFuYWdlci5jcmVhdGVOb2RlKCdkaXYnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkxvY2F0aW9uLCAnV0hFUkUgV0UgQVJFJywgdHJ1ZSk7XG4gIG5vZGVNYW5hZ2VyLmNyZWF0ZUFkZE5vZGVJbWcoJ21hcC5wbmcnLCAnbWFwTG9jYXRpb24nLCBkaXZMb2NhdGlvbik7XG4gIHJldHVybiBkaXZMb2NhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gIGxldCBlbGVtZW50cyA9IFtdO1xuICBjb25zdCBkaXZNYWluID0gbm9kZU1hbmFnZXIuY3JlYXRlTm9kZUNsYXNzKCdkaXYnLCAnZ3JpZENvbnRhY3QnKTtcbiAgLy8gQWRkIHRvIG1haW4gZ3JpZFxuICBub2RlTWFuYWdlci5hZGROb2RlQ2hpbGQoZGl2TWFpbiwgY3JlYXRlSW5mbygpKTtcbiAgbm9kZU1hbmFnZXIuYWRkTm9kZUNoaWxkKGRpdk1haW4sIGNyZWF0ZUxvY2F0aW9uKCkpO1xuICBub2RlTWFuYWdlci5hZGROb2RlQ2hpbGQoZGl2TWFpbiwgY3JlYXRlQnV0dG9uKCdCT09LIEEgVEFCTEUnLCBudWxsLCAoXykgPT4ge1xuICAgIHdpbmRvdy5vcGVuKCdodHRwczovL2dpdGh1Yi5jb20vY2VsOCcpO1xuICB9KSk7XG4gIGVsZW1lbnRzLnB1c2goZGl2TWFpbik7XG4gIHJldHVybiBlbGVtZW50cztcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=