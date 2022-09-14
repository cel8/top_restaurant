/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*********************************!*\
  !*** ./src/utilities/button.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "createImageButton": () => (/* binding */ createImageButton),
/* harmony export */   "createImageLinkButton": () => (/* binding */ createImageLinkButton)
/* harmony export */ });

function createButton(btnText = '', svgIconFileName = null, cbEvent = undefined) {
  const btn = document.createElement('button');
  const pElem = btnText.length > 0 ? document.createElement('p') : null;
  // Insert icon when exist
  if(svgIconFileName) {
    const fileFullPath = './images/' + svgIconFileName;
    const imgElem = document.createElement('img');
    imgElem.setAttribute('src', fileFullPath);
    imgElem.setAttribute('alt', btnText);
    imgElem.className = 'icon';
    btn.appendChild(imgElem);
  }
  // Add text when contains something
  if(btnText.length > 0) {
    // Set up text element
    pElem.textContent = btnText;
    btn.appendChild(pElem);
  }
  btn.onclick = cbEvent;
  // Setup btn properties
  btn.className = 'navButton';
  return btn;  
}

function createImageButton(svgIconFileName, cbEvent = undefined) {
  return createButton('', svgIconFileName, cbEvent)
}

function createImageLinkButton(link, svgIconFileName) {
  const fileFullPath = './images/' + svgIconFileName;
  const aElem = document.createElement('a');
  const imgElem = document.createElement('img');
  aElem.setAttribute('href', link);
  aElem.setAttribute('target', '_blank');
  imgElem.setAttribute('src', fileFullPath);
  imgElem.setAttribute('alt', 'imageLink');
  imgElem.className = 'icon-link';
  aElem.appendChild(imgElem);
  return aElem;
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ0xPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy91dGlsaXRpZXMvYnV0dG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnV0dG9uKGJ0blRleHQgPSAnJywgc3ZnSWNvbkZpbGVOYW1lID0gbnVsbCwgY2JFdmVudCA9IHVuZGVmaW5lZCkge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgcEVsZW0gPSBidG5UZXh0Lmxlbmd0aCA+IDAgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykgOiBudWxsO1xuICAvLyBJbnNlcnQgaWNvbiB3aGVuIGV4aXN0XG4gIGlmKHN2Z0ljb25GaWxlTmFtZSkge1xuICAgIGNvbnN0IGZpbGVGdWxsUGF0aCA9ICcuL2ltYWdlcy8nICsgc3ZnSWNvbkZpbGVOYW1lO1xuICAgIGNvbnN0IGltZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZSgnc3JjJywgZmlsZUZ1bGxQYXRoKTtcbiAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZSgnYWx0JywgYnRuVGV4dCk7XG4gICAgaW1nRWxlbS5jbGFzc05hbWUgPSAnaWNvbic7XG4gICAgYnRuLmFwcGVuZENoaWxkKGltZ0VsZW0pO1xuICB9XG4gIC8vIEFkZCB0ZXh0IHdoZW4gY29udGFpbnMgc29tZXRoaW5nXG4gIGlmKGJ0blRleHQubGVuZ3RoID4gMCkge1xuICAgIC8vIFNldCB1cCB0ZXh0IGVsZW1lbnRcbiAgICBwRWxlbS50ZXh0Q29udGVudCA9IGJ0blRleHQ7XG4gICAgYnRuLmFwcGVuZENoaWxkKHBFbGVtKTtcbiAgfVxuICBidG4ub25jbGljayA9IGNiRXZlbnQ7XG4gIC8vIFNldHVwIGJ0biBwcm9wZXJ0aWVzXG4gIGJ0bi5jbGFzc05hbWUgPSAnbmF2QnV0dG9uJztcbiAgcmV0dXJuIGJ0bjsgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1hZ2VCdXR0b24oc3ZnSWNvbkZpbGVOYW1lLCBjYkV2ZW50ID0gdW5kZWZpbmVkKSB7XG4gIHJldHVybiBjcmVhdGVCdXR0b24oJycsIHN2Z0ljb25GaWxlTmFtZSwgY2JFdmVudClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltYWdlTGlua0J1dHRvbihsaW5rLCBzdmdJY29uRmlsZU5hbWUpIHtcbiAgY29uc3QgZmlsZUZ1bGxQYXRoID0gJy4vaW1hZ2VzLycgKyBzdmdJY29uRmlsZU5hbWU7XG4gIGNvbnN0IGFFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb25zdCBpbWdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGFFbGVtLnNldEF0dHJpYnV0ZSgnaHJlZicsIGxpbmspO1xuICBhRWxlbS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGZpbGVGdWxsUGF0aCk7XG4gIGltZ0VsZW0uc2V0QXR0cmlidXRlKCdhbHQnLCAnaW1hZ2VMaW5rJyk7XG4gIGltZ0VsZW0uY2xhc3NOYW1lID0gJ2ljb24tbGluayc7XG4gIGFFbGVtLmFwcGVuZENoaWxkKGltZ0VsZW0pO1xuICByZXR1cm4gYUVsZW07XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9