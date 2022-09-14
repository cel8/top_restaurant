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
function createPreviewPizzaContainer(divContainer, imageFileName) {
  const divPizzaContainer = document.createElement('div');
  const imgPizzaPreview = document.createElement('img');
  // Image preview
  imgPizzaPreview.setAttribute('src', imageFileName);
  imgPizzaPreview.setAttribute('alt', 'pizza preview');
  imgPizzaPreview.id = 'idPreviewPizza';
  // Add class
  divPizzaContainer.className = 'previewPizzaContainer';
  // Add image in pizza container
  divPizzaContainer.appendChild(imgPizzaPreview);
  divContainer.appendChild(divPizzaContainer);
}

function createPreviewControl(divContainer, buttons = null) {
  if((buttons) || (buttons.length > 0)) {
    // Create container control for preview
    const divContainerCtrl = document.createElement('div');
    divContainerCtrl.className = 'previewContainerCtrl';
    // Add buttons inside container
    buttons.forEach(button => {
      divContainerCtrl.appendChild(button);
    });
    // Append control container to father
    divContainer.appendChild(divContainerCtrl);
  }
}

function createPreviewContainer(imageFileName, buttons = null) {
  const divPreviewContainer = document.createElement('div');
  divPreviewContainer.className = 'previewContainer';
  // Fill preview container
  createPreviewPizzaContainer(divPreviewContainer, imageFileName);
  createPreviewControl(divPreviewContainer, buttons);
  return divPreviewContainer;
}

function addDish(container, dish) {
  const pName = document.createElement('p');
  const pPrice = document.createElement('p');
  const pDescription = document.createElement('p');
  pName.textContent = dish.name;
  pPrice.textContent = dish.price;
  pDescription.textContent = dish.description;
  // Add dish inside the container
  container.appendChild(pName);
  container.appendChild(pPrice);
  container.appendChild(pDescription);
}

function createDishContainer() {
  const gridDishes = document.createElement('div');
  gridDishes.className = 'dishContainer';
  return gridDishes;
}

function addDishContainer(menuContainer, dishContainerName, gridDishContainer) {
  const pContainerName = document.createElement('p');
  // Setup the container
  pContainerName.textContent = dishContainerName;
  pContainerName.className = 'dishContainerName';
  // Add in menu
  menuContainer.appendChild(pContainerName);
  menuContainer.appendChild(gridDishContainer)
}

function createMenuContainer() {
  const divMenuList = document.createElement('div');
  divMenuList.className = 'menuList'
  return divMenuList;
}

function createMenu(menuList) {
  let elements = [];
  elements.push(menuList);
  return elements;
}

function changePizzaPreview(imageFileName) {
  const imgPizzaPreview = document.querySelector('#idPreviewPizza');
  if(imgPizzaPreview) imgPizzaPreview.setAttribute('src', imageFileName);
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJmdW5jdGlvbiBjcmVhdGVQcmV2aWV3UGl6emFDb250YWluZXIoZGl2Q29udGFpbmVyLCBpbWFnZUZpbGVOYW1lKSB7XG4gIGNvbnN0IGRpdlBpenphQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGltZ1BpenphUHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAvLyBJbWFnZSBwcmV2aWV3XG4gIGltZ1BpenphUHJldmlldy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltYWdlRmlsZU5hbWUpO1xuICBpbWdQaXp6YVByZXZpZXcuc2V0QXR0cmlidXRlKCdhbHQnLCAncGl6emEgcHJldmlldycpO1xuICBpbWdQaXp6YVByZXZpZXcuaWQgPSAnaWRQcmV2aWV3UGl6emEnO1xuICAvLyBBZGQgY2xhc3NcbiAgZGl2UGl6emFDb250YWluZXIuY2xhc3NOYW1lID0gJ3ByZXZpZXdQaXp6YUNvbnRhaW5lcic7XG4gIC8vIEFkZCBpbWFnZSBpbiBwaXp6YSBjb250YWluZXJcbiAgZGl2UGl6emFDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nUGl6emFQcmV2aWV3KTtcbiAgZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdlBpenphQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJldmlld0NvbnRyb2woZGl2Q29udGFpbmVyLCBidXR0b25zID0gbnVsbCkge1xuICBpZigoYnV0dG9ucykgfHwgKGJ1dHRvbnMubGVuZ3RoID4gMCkpIHtcbiAgICAvLyBDcmVhdGUgY29udGFpbmVyIGNvbnRyb2wgZm9yIHByZXZpZXdcbiAgICBjb25zdCBkaXZDb250YWluZXJDdHJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2Q29udGFpbmVyQ3RybC5jbGFzc05hbWUgPSAncHJldmlld0NvbnRhaW5lckN0cmwnO1xuICAgIC8vIEFkZCBidXR0b25zIGluc2lkZSBjb250YWluZXJcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGRpdkNvbnRhaW5lckN0cmwuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICB9KTtcbiAgICAvLyBBcHBlbmQgY29udHJvbCBjb250YWluZXIgdG8gZmF0aGVyXG4gICAgZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkNvbnRhaW5lckN0cmwpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcmV2aWV3Q29udGFpbmVyKGltYWdlRmlsZU5hbWUsIGJ1dHRvbnMgPSBudWxsKSB7XG4gIGNvbnN0IGRpdlByZXZpZXdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2UHJldmlld0NvbnRhaW5lci5jbGFzc05hbWUgPSAncHJldmlld0NvbnRhaW5lcic7XG4gIC8vIEZpbGwgcHJldmlldyBjb250YWluZXJcbiAgY3JlYXRlUHJldmlld1BpenphQ29udGFpbmVyKGRpdlByZXZpZXdDb250YWluZXIsIGltYWdlRmlsZU5hbWUpO1xuICBjcmVhdGVQcmV2aWV3Q29udHJvbChkaXZQcmV2aWV3Q29udGFpbmVyLCBidXR0b25zKTtcbiAgcmV0dXJuIGRpdlByZXZpZXdDb250YWluZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREaXNoKGNvbnRhaW5lciwgZGlzaCkge1xuICBjb25zdCBwTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgcFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBwRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBOYW1lLnRleHRDb250ZW50ID0gZGlzaC5uYW1lO1xuICBwUHJpY2UudGV4dENvbnRlbnQgPSBkaXNoLnByaWNlO1xuICBwRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkaXNoLmRlc2NyaXB0aW9uO1xuICAvLyBBZGQgZGlzaCBpbnNpZGUgdGhlIGNvbnRhaW5lclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocE5hbWUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocFByaWNlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBEZXNjcmlwdGlvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXNoQ29udGFpbmVyKCkge1xuICBjb25zdCBncmlkRGlzaGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdyaWREaXNoZXMuY2xhc3NOYW1lID0gJ2Rpc2hDb250YWluZXInO1xuICByZXR1cm4gZ3JpZERpc2hlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERpc2hDb250YWluZXIobWVudUNvbnRhaW5lciwgZGlzaENvbnRhaW5lck5hbWUsIGdyaWREaXNoQ29udGFpbmVyKSB7XG4gIGNvbnN0IHBDb250YWluZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAvLyBTZXR1cCB0aGUgY29udGFpbmVyXG4gIHBDb250YWluZXJOYW1lLnRleHRDb250ZW50ID0gZGlzaENvbnRhaW5lck5hbWU7XG4gIHBDb250YWluZXJOYW1lLmNsYXNzTmFtZSA9ICdkaXNoQ29udGFpbmVyTmFtZSc7XG4gIC8vIEFkZCBpbiBtZW51XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocENvbnRhaW5lck5hbWUpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWREaXNoQ29udGFpbmVyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudUNvbnRhaW5lcigpIHtcbiAgY29uc3QgZGl2TWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2TWVudUxpc3QuY2xhc3NOYW1lID0gJ21lbnVMaXN0J1xuICByZXR1cm4gZGl2TWVudUxpc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51KG1lbnVMaXN0KSB7XG4gIGxldCBlbGVtZW50cyA9IFtdO1xuICBlbGVtZW50cy5wdXNoKG1lbnVMaXN0KTtcbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUGl6emFQcmV2aWV3KGltYWdlRmlsZU5hbWUpIHtcbiAgY29uc3QgaW1nUGl6emFQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lkUHJldmlld1BpenphJyk7XG4gIGlmKGltZ1BpenphUHJldmlldykgaW1nUGl6emFQcmV2aWV3LnNldEF0dHJpYnV0ZSgnc3JjJywgaW1hZ2VGaWxlTmFtZSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9