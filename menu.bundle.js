/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDish": () => (/* binding */ addDish),
/* harmony export */   "addDishContainer": () => (/* binding */ addDishContainer),
/* harmony export */   "changePizzaPreview": () => (/* binding */ changePizzaPreview),
/* harmony export */   "createDishContainer": () => (/* binding */ createDishContainer),
/* harmony export */   "createMenu": () => (/* binding */ createMenu),
/* harmony export */   "createMenuContainer": () => (/* binding */ createMenuContainer),
/* harmony export */   "createPreviewContainer": () => (/* binding */ createPreviewContainer)
/* harmony export */ });
/* harmony import */ var Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utilities/nodeManager.js */ "./src/utilities/nodeManager.js");


function createPreviewPizzaContainer(divContainer, imageFileName) {
  // Add image in pizza container and inside div container
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.addNodeChild(divContainer, 
    Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNode('div', 'previewPizzaContainer', null, null, 
      Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeImgID(imageFileName, 'preview', 'idPreviewPizza')
    )
  );
}

function createPreviewControl(divContainer, buttons = null) {
  if((buttons) || (buttons.length > 0)) {
    // Create container control for preview
    Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createAddNode('div', divContainer, 'previewContainerCtrl', null, null, buttons);
  }
}

function createPreviewContainer(imageFileName, buttons = null) {
  // Fill preview container image and controls
  const divPreviewContainer = Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeClass('div', 'previewContainer');
  createPreviewPizzaContainer(divPreviewContainer, imageFileName);
  createPreviewControl(divPreviewContainer, buttons);
  return divPreviewContainer;
}

function addDish(container, dish) {
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createAddNode('p', container, null, null, dish.name);
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createAddNode('p', container, null, null, dish.price);
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createAddNode('p', container, null, null, dish.description);
}

function createDishContainer() {
  return Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeClass('div', 'dishContainer');
}

function addDishContainer(menuContainer, dishContainerName, gridDishContainer) {
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createAddNode('p', menuContainer, 'dishContainerName', dishContainerName);
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.addNodeChild(menuContainer, gridDishContainer);
}

function createMenuContainer() {
  return Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeClass('div', 'menuList');
}

function createMenu(menuList) {
  let elements = [];
  elements.push(menuList);
  return elements;
}

function changePizzaPreview(imageFileName) {
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.updateNodeImg(imageFileName, document, '#idPreviewPizza');
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNLCtCQUErQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUMvRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ051RDs7QUFFdkQ7QUFDQTtBQUNBLEVBQUUsa0VBQXdCO0FBQzFCLElBQUksZ0VBQXNCO0FBQzFCLE1BQU0scUVBQTJCO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1FQUF5QjtBQUM3QjtBQUNBOztBQUVPO0FBQ1A7QUFDQSw4QkFBOEIscUVBQTJCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AsRUFBRSxtRUFBeUI7QUFDM0IsRUFBRSxtRUFBeUI7QUFDM0IsRUFBRSxtRUFBeUI7QUFDM0I7O0FBRU87QUFDUCxTQUFTLHFFQUEyQjtBQUNwQzs7QUFFTztBQUNQLEVBQUUsbUVBQXlCO0FBQzNCLEVBQUUsa0VBQXdCO0FBQzFCOztBQUVPO0FBQ1AsU0FBUyxxRUFBMkI7QUFDcEM7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLEVBQUUsbUVBQXlCO0FBQzNCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy91dGlsaXRpZXMvbm9kZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vL1JldHVybnMgdHJ1ZSBpZiBpdCBpcyBhIERPTSBub2RlXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlKG8pe1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiBOb2RlID09PSBcIm9iamVjdFwiID8gbyBpbnN0YW5jZW9mIE5vZGUgOiBcbiAgICBvICYmIHR5cGVvZiBvID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvLm5vZGVUeXBlID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBvLm5vZGVOYW1lPT09XCJzdHJpbmdcIlxuICApO1xufVxuXG4vL1JldHVybnMgdHJ1ZSBpZiBpdCBpcyBhIERPTSBlbGVtZW50ICAgIFxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudChvKXtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgSFRNTEVsZW1lbnQgPT09IFwib2JqZWN0XCIgPyBvIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgOiAvL0RPTTJcbiAgICBvICYmIHR5cGVvZiBvID09PSBcIm9iamVjdFwiICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZT09PVwic3RyaW5nXCJcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGUodHlwZSwgY2xhc3NOYW1lID0gbnVsbCwgaWQgPSBudWxsLCBjb250ZW50ID0gbnVsbCwgY2hpbGRyZW4gPSBudWxsKSB7XG4gIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAvLyBBZGQgY2xhc3MgbmFtZSBvciBJRFxuICBpZihjbGFzc05hbWUpIGVsZW0uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICBpZihpZCkgZWxlbS5pZCA9IGlkO1xuICAvLyBBZGQgdGV4dCBjb250ZW50XG4gIGlmKGNvbnRlbnQpIGVsZW0udGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAvLyBFdmVudHVhbGx5IGFkZCBjaGlsZCBvciBjaGlsZHJlblxuICBhZGROb2RlQ2hpbGQoZWxlbSwgY2hpbGRyZW4pO1xuICByZXR1cm4gZWxlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGVDb250ZW50KHR5cGUsIGNvbnRlbnQsIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCkge1xuICByZXR1cm4gY3JlYXRlTm9kZSh0eXBlLCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGVDbGFzcyh0eXBlLCBjbGFzc05hbWUsIGlkID0gbnVsbCwgY29udGVudCA9IG51bGwpIHtcbiAgcmV0dXJuIGNyZWF0ZU5vZGUodHlwZSwgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgbnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlSUQodHlwZSwgaWQsIGNsYXNzTmFtZSA9IG51bGwsIGNvbnRlbnQgPSBudWxsKSB7XG4gIHJldHVybiBjcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZUltZyhpbWdGaWxlTmFtZSwgYWx0LCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwpIHtcbiAgY29uc3QgZmlsZUZ1bGxQYXRoID0gJy4vaW1hZ2VzLycgKyBpbWdGaWxlTmFtZTtcbiAgY29uc3Qgbm9kZSA9IGNyZWF0ZU5vZGUoJ2ltZycsIGNsYXNzTmFtZSwgaWQsIG51bGwsIG51bGwpO1xuICBub2RlLnNldEF0dHJpYnV0ZSgnc3JjJywgZmlsZUZ1bGxQYXRoKTtcbiAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGFsdCk7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZUltZ0NsYXNzKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSwgaWQgPSBudWxsKSB7XG4gIHJldHVybiBjcmVhdGVOb2RlSW1nKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSwgaWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZUltZ0lEKGltZ0ZpbGVOYW1lLCBhbHQsIGlkLCBjbGFzc05hbWUgPSBudWxsKSB7XG4gIHJldHVybiBjcmVhdGVOb2RlSW1nKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSwgaWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZUxpbmsobGluaywgY2xhc3NOYW1lID0gbnVsbCwgaWQgPSBudWxsLCBjb250ZW50ID0gbnVsbCwgY2hpbGRyZW4gPSBudWxsKSB7XG4gIGNvbnN0IG5vZGUgPSBjcmVhdGVOb2RlKCdhJywgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgY2hpbGRyZW4pO1xuICBub2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGxpbmspO1xuICBub2RlLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5vZGVDaGlsZChmYXRoZXIsIGNoaWxkcmVuKSB7XG4gIGlmKGNoaWxkcmVuKSB7XG4gICAgaWYoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHsgLy8gQ29udGFpbnMgbW9yZSB0aGFuIG9uZSBjaGlsZCBpbiBBcnJheVxuICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGZhdGhlci5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYoaXNFbGVtZW50KGNoaWxkcmVuKSkgeyAvLyBDb250YWlucyBqdXN0IG9uZSBjaGlsZFxuICAgICAgZmF0aGVyLmFwcGVuZENoaWxkKGNoaWxkcmVuKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFkZE5vZGUodHlwZSwgZmF0aGVyLCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwsIGNvbnRlbnQgPSBudWxsLCBjaGlsZHJlbiA9IG51bGwpIHtcbiAgLy8gQXBwZW5kIHRoZSBuZXcgbm9kZSBpbiBmYXRoZXJcbiAgZmF0aGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5vZGUodHlwZSwgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgY2hpbGRyZW4pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFkZE5vZGVJbWcoaW1nRmlsZU5hbWUsIGFsdCwgZmF0aGVyLCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwsIGNvbnRlbnQgPSBudWxsLCBjaGlsZHJlbiA9IG51bGwpIHtcbiAgLy8gQXBwZW5kIHRoZSBuZXcgbm9kZSBpbiBmYXRoZXJcbiAgZmF0aGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGFsdCwgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgY2hpbGRyZW4pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGZhdGhlciwgc2VsZWN0b3IpIHtcbiAgY29uc3QgaW1nTm9kZSA9IGZhdGhlci5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgaWYoaW1nTm9kZSkgaW1nTm9kZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltYWdlcy8nICsgaW1nRmlsZU5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgbm9kZU1hbmFnZXIgZnJvbSAnVXRpbGl0aWVzL25vZGVNYW5hZ2VyLmpzJ1xuXG5mdW5jdGlvbiBjcmVhdGVQcmV2aWV3UGl6emFDb250YWluZXIoZGl2Q29udGFpbmVyLCBpbWFnZUZpbGVOYW1lKSB7XG4gIC8vIEFkZCBpbWFnZSBpbiBwaXp6YSBjb250YWluZXIgYW5kIGluc2lkZSBkaXYgY29udGFpbmVyXG4gIG5vZGVNYW5hZ2VyLmFkZE5vZGVDaGlsZChkaXZDb250YWluZXIsIFxuICAgIG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGUoJ2RpdicsICdwcmV2aWV3UGl6emFDb250YWluZXInLCBudWxsLCBudWxsLCBcbiAgICAgIG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGVJbWdJRChpbWFnZUZpbGVOYW1lLCAncHJldmlldycsICdpZFByZXZpZXdQaXp6YScpXG4gICAgKVxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcmV2aWV3Q29udHJvbChkaXZDb250YWluZXIsIGJ1dHRvbnMgPSBudWxsKSB7XG4gIGlmKChidXR0b25zKSB8fCAoYnV0dG9ucy5sZW5ndGggPiAwKSkge1xuICAgIC8vIENyZWF0ZSBjb250YWluZXIgY29udHJvbCBmb3IgcHJldmlld1xuICAgIG5vZGVNYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ2RpdicsIGRpdkNvbnRhaW5lciwgJ3ByZXZpZXdDb250YWluZXJDdHJsJywgbnVsbCwgbnVsbCwgYnV0dG9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByZXZpZXdDb250YWluZXIoaW1hZ2VGaWxlTmFtZSwgYnV0dG9ucyA9IG51bGwpIHtcbiAgLy8gRmlsbCBwcmV2aWV3IGNvbnRhaW5lciBpbWFnZSBhbmQgY29udHJvbHNcbiAgY29uc3QgZGl2UHJldmlld0NvbnRhaW5lciA9IG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGVDbGFzcygnZGl2JywgJ3ByZXZpZXdDb250YWluZXInKTtcbiAgY3JlYXRlUHJldmlld1BpenphQ29udGFpbmVyKGRpdlByZXZpZXdDb250YWluZXIsIGltYWdlRmlsZU5hbWUpO1xuICBjcmVhdGVQcmV2aWV3Q29udHJvbChkaXZQcmV2aWV3Q29udGFpbmVyLCBidXR0b25zKTtcbiAgcmV0dXJuIGRpdlByZXZpZXdDb250YWluZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREaXNoKGNvbnRhaW5lciwgZGlzaCkge1xuICBub2RlTWFuYWdlci5jcmVhdGVBZGROb2RlKCdwJywgY29udGFpbmVyLCBudWxsLCBudWxsLCBkaXNoLm5hbWUpO1xuICBub2RlTWFuYWdlci5jcmVhdGVBZGROb2RlKCdwJywgY29udGFpbmVyLCBudWxsLCBudWxsLCBkaXNoLnByaWNlKTtcbiAgbm9kZU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgncCcsIGNvbnRhaW5lciwgbnVsbCwgbnVsbCwgZGlzaC5kZXNjcmlwdGlvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXNoQ29udGFpbmVyKCkge1xuICByZXR1cm4gbm9kZU1hbmFnZXIuY3JlYXRlTm9kZUNsYXNzKCdkaXYnLCAnZGlzaENvbnRhaW5lcicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGlzaENvbnRhaW5lcihtZW51Q29udGFpbmVyLCBkaXNoQ29udGFpbmVyTmFtZSwgZ3JpZERpc2hDb250YWluZXIpIHtcbiAgbm9kZU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgncCcsIG1lbnVDb250YWluZXIsICdkaXNoQ29udGFpbmVyTmFtZScsIGRpc2hDb250YWluZXJOYW1lKTtcbiAgbm9kZU1hbmFnZXIuYWRkTm9kZUNoaWxkKG1lbnVDb250YWluZXIsIGdyaWREaXNoQ29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnVDb250YWluZXIoKSB7XG4gIHJldHVybiBub2RlTWFuYWdlci5jcmVhdGVOb2RlQ2xhc3MoJ2RpdicsICdtZW51TGlzdCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudShtZW51TGlzdCkge1xuICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgZWxlbWVudHMucHVzaChtZW51TGlzdCk7XG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVBpenphUHJldmlldyhpbWFnZUZpbGVOYW1lKSB7XG4gIG5vZGVNYW5hZ2VyLnVwZGF0ZU5vZGVJbWcoaW1hZ2VGaWxlTmFtZSwgZG9jdW1lbnQsICcjaWRQcmV2aWV3UGl6emEnKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=