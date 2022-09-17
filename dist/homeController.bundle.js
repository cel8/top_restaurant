/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHome": () => (/* binding */ createHome)
/* harmony export */ });
/* harmony import */ var Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utilities/nodeManager.js */ "./src/utilities/nodeManager.js");


function createHomeTitle() {
  return Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeContent('p', 'TRADITION AND INNOVATION', 'homeTitle');
}

function createHomeDescription() {
  const descriptions = [];
  descriptions.push(Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeContent('p', 'A lifelong passion for the tradition of Neapolitan pizza and it’s true flavours.'));
  descriptions.push(Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeContent('p', 'A dough leavened for 24 hours, but also many delicious and appetizing proposals with the specialties of our chip shop.'));
  const divDescription = Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNode('div', 'homeDescription', null, null, descriptions);
  return divDescription;
}

function createHome(imgPreviewContainer) {
  let elements = [];
  elements.push(createHomeTitle());
  elements.push(createHomeDescription());
  elements.push(imgPreviewContainer);
  return elements;
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
/*!******************************************!*\
  !*** ./src/controller/homeController.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeController": () => (/* binding */ HomeController)
/* harmony export */ });
/* harmony import */ var Modules_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Modules/home.js */ "./src/modules/home.js");


class HomeController {
  constructor() {
  }
  prepareHome(imgPreviewContainer) {
    return (0,Modules_home_js__WEBPACK_IMPORTED_MODULE_0__.createHome)(imgPreviewContainer);
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZUNvbnRyb2xsZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1RDs7QUFFdkQ7QUFDQSxTQUFTLHVFQUE2QjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHVFQUE2QjtBQUNqRCxvQkFBb0IsdUVBQTZCO0FBQ2pELHlCQUF5QixnRUFBc0I7QUFDL0M7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTSwrQkFBK0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDL0ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNONEM7O0FBRXJDO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsV0FBVywyREFBVTtBQUNyQjtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvdXRpbGl0aWVzL25vZGVNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvY29udHJvbGxlci9ob21lQ29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBub2RlTWFuYWdlciBmcm9tICdVdGlsaXRpZXMvbm9kZU1hbmFnZXIuanMnXG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVUaXRsZSgpIHtcbiAgcmV0dXJuIG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGVDb250ZW50KCdwJywgJ1RSQURJVElPTiBBTkQgSU5OT1ZBVElPTicsICdob21lVGl0bGUnKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZURlc2NyaXB0aW9uKCkge1xuICBjb25zdCBkZXNjcmlwdGlvbnMgPSBbXTtcbiAgZGVzY3JpcHRpb25zLnB1c2gobm9kZU1hbmFnZXIuY3JlYXRlTm9kZUNvbnRlbnQoJ3AnLCAnQSBsaWZlbG9uZyBwYXNzaW9uIGZvciB0aGUgdHJhZGl0aW9uIG9mIE5lYXBvbGl0YW4gcGl6emEgYW5kIGl04oCZcyB0cnVlIGZsYXZvdXJzLicpKTtcbiAgZGVzY3JpcHRpb25zLnB1c2gobm9kZU1hbmFnZXIuY3JlYXRlTm9kZUNvbnRlbnQoJ3AnLCAnQSBkb3VnaCBsZWF2ZW5lZCBmb3IgMjQgaG91cnMsIGJ1dCBhbHNvIG1hbnkgZGVsaWNpb3VzIGFuZCBhcHBldGl6aW5nIHByb3Bvc2FscyB3aXRoIHRoZSBzcGVjaWFsdGllcyBvZiBvdXIgY2hpcCBzaG9wLicpKTtcbiAgY29uc3QgZGl2RGVzY3JpcHRpb24gPSBub2RlTWFuYWdlci5jcmVhdGVOb2RlKCdkaXYnLCAnaG9tZURlc2NyaXB0aW9uJywgbnVsbCwgbnVsbCwgZGVzY3JpcHRpb25zKTtcbiAgcmV0dXJuIGRpdkRlc2NyaXB0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSG9tZShpbWdQcmV2aWV3Q29udGFpbmVyKSB7XG4gIGxldCBlbGVtZW50cyA9IFtdO1xuICBlbGVtZW50cy5wdXNoKGNyZWF0ZUhvbWVUaXRsZSgpKTtcbiAgZWxlbWVudHMucHVzaChjcmVhdGVIb21lRGVzY3JpcHRpb24oKSk7XG4gIGVsZW1lbnRzLnB1c2goaW1nUHJldmlld0NvbnRhaW5lcik7XG4gIHJldHVybiBlbGVtZW50cztcbn0iLCJcbi8vUmV0dXJucyB0cnVlIGlmIGl0IGlzIGEgRE9NIG5vZGVcbmV4cG9ydCBmdW5jdGlvbiBpc05vZGUobyl7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIE5vZGUgPT09IFwib2JqZWN0XCIgPyBvIGluc3RhbmNlb2YgTm9kZSA6IFxuICAgIG8gJiYgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG8ubm9kZVR5cGUgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIG8ubm9kZU5hbWU9PT1cInN0cmluZ1wiXG4gICk7XG59XG5cbi8vUmV0dXJucyB0cnVlIGlmIGl0IGlzIGEgRE9NIGVsZW1lbnQgICAgXG5leHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50KG8pe1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gXCJvYmplY3RcIiA/IG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA6IC8vRE9NMlxuICAgIG8gJiYgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiYgbyAhPT0gbnVsbCAmJiBvLm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiBvLm5vZGVOYW1lPT09XCJzdHJpbmdcIlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZSh0eXBlLCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwsIGNvbnRlbnQgPSBudWxsLCBjaGlsZHJlbiA9IG51bGwpIHtcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIC8vIEFkZCBjbGFzcyBuYW1lIG9yIElEXG4gIGlmKGNsYXNzTmFtZSkgZWxlbS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIGlmKGlkKSBlbGVtLmlkID0gaWQ7XG4gIC8vIEFkZCB0ZXh0IGNvbnRlbnRcbiAgaWYoY29udGVudCkgZWxlbS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gIC8vIEV2ZW50dWFsbHkgYWRkIGNoaWxkIG9yIGNoaWxkcmVuXG4gIGFkZE5vZGVDaGlsZChlbGVtLCBjaGlsZHJlbik7XG4gIHJldHVybiBlbGVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZUNvbnRlbnQodHlwZSwgY29udGVudCwgY2xhc3NOYW1lID0gbnVsbCwgaWQgPSBudWxsKSB7XG4gIHJldHVybiBjcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZUNsYXNzKHR5cGUsIGNsYXNzTmFtZSwgaWQgPSBudWxsLCBjb250ZW50ID0gbnVsbCkge1xuICByZXR1cm4gY3JlYXRlTm9kZSh0eXBlLCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGVJRCh0eXBlLCBpZCwgY2xhc3NOYW1lID0gbnVsbCwgY29udGVudCA9IG51bGwpIHtcbiAgcmV0dXJuIGNyZWF0ZU5vZGUodHlwZSwgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgbnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlSW1nKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCkge1xuICBjb25zdCBmaWxlRnVsbFBhdGggPSAnLi9pbWFnZXMvJyArIGltZ0ZpbGVOYW1lO1xuICBjb25zdCBub2RlID0gY3JlYXRlTm9kZSgnaW1nJywgY2xhc3NOYW1lLCBpZCwgbnVsbCwgbnVsbCk7XG4gIG5vZGUuc2V0QXR0cmlidXRlKCdzcmMnLCBmaWxlRnVsbFBhdGgpO1xuICBub2RlLnNldEF0dHJpYnV0ZSgnYWx0JywgYWx0KTtcbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlSW1nQ2xhc3MoaW1nRmlsZU5hbWUsIGFsdCwgY2xhc3NOYW1lLCBpZCA9IG51bGwpIHtcbiAgcmV0dXJuIGNyZWF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGFsdCwgY2xhc3NOYW1lLCBpZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlSW1nSUQoaW1nRmlsZU5hbWUsIGFsdCwgaWQsIGNsYXNzTmFtZSA9IG51bGwpIHtcbiAgcmV0dXJuIGNyZWF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGFsdCwgY2xhc3NOYW1lLCBpZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlTGluayhsaW5rLCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwsIGNvbnRlbnQgPSBudWxsLCBjaGlsZHJlbiA9IG51bGwpIHtcbiAgY29uc3Qgbm9kZSA9IGNyZWF0ZU5vZGUoJ2EnLCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBjaGlsZHJlbik7XG4gIG5vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgbGluayk7XG4gIG5vZGUuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTm9kZUNoaWxkKGZhdGhlciwgY2hpbGRyZW4pIHtcbiAgaWYoY2hpbGRyZW4pIHtcbiAgICBpZihBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkgeyAvLyBDb250YWlucyBtb3JlIHRoYW4gb25lIGNoaWxkIGluIEFycmF5XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgZmF0aGVyLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZihpc0VsZW1lbnQoY2hpbGRyZW4pKSB7IC8vIENvbnRhaW5zIGp1c3Qgb25lIGNoaWxkXG4gICAgICBmYXRoZXIuYXBwZW5kQ2hpbGQoY2hpbGRyZW4pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWRkTm9kZSh0eXBlLCBmYXRoZXIsIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCwgY29udGVudCA9IG51bGwsIGNoaWxkcmVuID0gbnVsbCkge1xuICAvLyBBcHBlbmQgdGhlIG5ldyBub2RlIGluIGZhdGhlclxuICBmYXRoZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTm9kZSh0eXBlLCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBjaGlsZHJlbikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWRkTm9kZUltZyhpbWdGaWxlTmFtZSwgYWx0LCBmYXRoZXIsIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCwgY29udGVudCA9IG51bGwsIGNoaWxkcmVuID0gbnVsbCkge1xuICAvLyBBcHBlbmQgdGhlIG5ldyBub2RlIGluIGZhdGhlclxuICBmYXRoZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTm9kZUltZyhpbWdGaWxlTmFtZSwgYWx0LCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBjaGlsZHJlbikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTm9kZUltZyhpbWdGaWxlTmFtZSwgZmF0aGVyLCBzZWxlY3Rvcikge1xuICBjb25zdCBpbWdOb2RlID0gZmF0aGVyLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICBpZihpbWdOb2RlKSBpbWdOb2RlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1hZ2VzLycgKyBpbWdGaWxlTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVIb21lIH0gZnJvbSAnTW9kdWxlcy9ob21lLmpzJ1xuXG5leHBvcnQgY2xhc3MgSG9tZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuICBwcmVwYXJlSG9tZShpbWdQcmV2aWV3Q29udGFpbmVyKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUhvbWUoaW1nUHJldmlld0NvbnRhaW5lcik7XG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=