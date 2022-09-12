/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/dish.js":
/*!*****************************!*\
  !*** ./src/modules/dish.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dish": () => (/* binding */ Dish)
/* harmony export */ });
class Dish{ 
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description || "";
  }
  get getName() { return this.name; }
  get getDescription() { return this.description; }
  get getPrice() { return this.price; }
}

/***/ }),

/***/ "./src/modules/dishContainer.js":
/*!**************************************!*\
  !*** ./src/modules/dishContainer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DishContainer": () => (/* binding */ DishContainer)
/* harmony export */ });
/* harmony import */ var Modules_dish_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Modules/dish.js */ "./src/modules/dish.js");


class DishContainer {
  constructor(name) {
    this.name = name;
    this.dishes = [];
  }
  insertDish(dish) {
    this.dishes.push(dish);
  }
  addDish(name, price, description) {
    const dish = new Modules_dish_js__WEBPACK_IMPORTED_MODULE_0__.Dish(name, price, description);
    this.insertDish(dish);
  }
  get getDishName() { return this.name; }
  get getDishes() { return this.dishes; }
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
function createMenu(menuList) {
  let elements = [];
  elements.push(menuList);
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
/* harmony export */   "createImageButton": () => (/* binding */ createImageButton)
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

/***/ }),

/***/ "./src/assets/images/calzone-ripieno-al-forno.jpg":
/*!********************************************************!*\
  !*** ./src/assets/images/calzone-ripieno-al-forno.jpg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "images/calzone-ripieno-al-forno.jpg";

/***/ }),

/***/ "./src/assets/images/calzone-ripieno-fritto.jpg":
/*!******************************************************!*\
  !*** ./src/assets/images/calzone-ripieno-fritto.jpg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "images/calzone-ripieno-fritto.jpg";

/***/ }),

/***/ "./src/assets/images/pizza-capricciosa.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/pizza-capricciosa.jpg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "images/pizza-capricciosa.jpg";

/***/ }),

/***/ "./src/assets/images/pizza-margherita.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/pizza-margherita.jpg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "images/pizza-margherita.jpg";

/***/ }),

/***/ "./src/assets/images/pizza-marinara.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/pizza-marinara.jpg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "images/pizza-marinara.jpg";

/***/ }),

/***/ "./src/assets/images/pizza-pomodorini-bufala.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/images/pizza-pomodorini-bufala.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "images/pizza-pomodorini-bufala.jpg";

/***/ }),

/***/ "./src/assets/images/svg/left-button.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/svg/left-button.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "images/left-button.svg";

/***/ }),

/***/ "./src/assets/images/svg/right-button.svg":
/*!************************************************!*\
  !*** ./src/assets/images/svg/right-button.svg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "images/right-button.svg";

/***/ }),

/***/ "./src/assets/data/menu.json":
/*!***********************************!*\
  !*** ./src/assets/data/menu.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"dish-name":"Starter","menu":[{"name":"Classic Montanara","description":"Fried pizza with tomato sauce made out of canned “pomodorino del Piennolo del Vesuvio AOP” , Caciocavallo Podolico cheese shavings from Irpinia area, basil.","price":"€ 3,00"},{"name":"Frittatina di pasta","description":"Bucatini di Gragnano PGI, béchamel made with alpine butter and milk, stuffed with cooked ham, Pecorino Romano DOP, smoked provola and pepper.","price":"€ 2,50"},{"name":"Crocchè","description":"Not breaded, with potatoes, smoked provola, Pecorino Romano DOP, parsley, pepper.","price":"€ 2,50"}]},{"dish-name":"Pizza","menu":[{"name":"Margherita","description":"Peeled tomato San Marzano AOP, fior di latte cheese from Agerola, extra virgin olive oil from Frantoio San Comaio, basil.","price":"€ 5,00"},{"name":"Marinara","description":"Tomato “Antichi sapori di Napoli”, wild oregano, garlic, extra virgin olive oil from Frantoio La Torretta, basil.","price":"€ 4,00"},{"name":"Capricciosa","description":"Peeled tomato San Marzano DOP, salami from  Agerola,  natural artichokes from Paestum, in oil preserved Cetara anchoives, black Gaeta olives, fior di latte cheese from Agerola, extra virgin olive oil from Frantoio San Salvatore, basil.","price":"€ 5,50"},{"name":"Pomodorini and Bufala","description":"Canned tomatoes ” pomodorini del piennolo bagnolese”, buffala cheese, extra virgin olive oil from Frantoio Monzo, basil.","price":"€ 5,00"}]},{"dish-name":"Calzone","menu":[{"name":"Baked calzone","description":"Tomato “Antichi sapori di Napoli”, wild oregano, garlic, extra virgin olive oil from Frantoio La Torretta, basil.","price":"€ 6,00"},{"name":"Fried calzone","description":"Tomato “Antichi sapori di Napoli”, wild oregano, garlic, extra virgin olive oil from Frantoio La Torretta, basil.","price":"€ 6,00"}]},{"dish-name":"Dessert","menu":[{"name":"Babà","description":"","price":"€ 4,00"},{"name":"Lemon delights","description":"","price":"€ 4,50"},{"name":"Mixed berries cheesecake","description":"","price":"€ 4,50"}]},{"dish-name":"Drink","menu":[{"name":"Still Water (50 Cl)","description":"","price":"€ 2,00"},{"name":"Sparkling Water (50 Cl)","description":"","price":"€ 2,00"},{"name":"Coca Cola (33 Cl)","description":"","price":"€ 3,00"},{"name":"Caffè (Expresso)","description":"","price":"€ 1,10"}]}]');

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
  !*** ./src/controller/menuController.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuController": () => (/* binding */ MenuController)
/* harmony export */ });
/* harmony import */ var Modules_dishContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Modules/dishContainer.js */ "./src/modules/dishContainer.js");
/* harmony import */ var Modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Modules/menu.js */ "./src/modules/menu.js");
/* harmony import */ var Utilities_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Utilities/button.js */ "./src/utilities/button.js");
/* harmony import */ var Assets_data_menu_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Assets/data/menu.json */ "./src/assets/data/menu.json");
/* harmony import */ var Assets_images_pizza_margherita_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Assets/images/pizza-margherita.jpg */ "./src/assets/images/pizza-margherita.jpg");
/* harmony import */ var Assets_images_pizza_marinara_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Assets/images/pizza-marinara.jpg */ "./src/assets/images/pizza-marinara.jpg");
/* harmony import */ var Assets_images_pizza_capricciosa_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Assets/images/pizza-capricciosa.jpg */ "./src/assets/images/pizza-capricciosa.jpg");
/* harmony import */ var Assets_images_pizza_pomodorini_bufala_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Assets/images/pizza-pomodorini-bufala.jpg */ "./src/assets/images/pizza-pomodorini-bufala.jpg");
/* harmony import */ var Assets_images_calzone_ripieno_al_forno_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Assets/images/calzone-ripieno-al-forno.jpg */ "./src/assets/images/calzone-ripieno-al-forno.jpg");
/* harmony import */ var Assets_images_calzone_ripieno_fritto_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Assets/images/calzone-ripieno-fritto.jpg */ "./src/assets/images/calzone-ripieno-fritto.jpg");
/* harmony import */ var Assets_images_svg_left_button_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Assets/images/svg/left-button.svg */ "./src/assets/images/svg/left-button.svg");
/* harmony import */ var Assets_images_svg_right_button_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Assets/images/svg/right-button.svg */ "./src/assets/images/svg/right-button.svg");



// Assets data










class MenuController {
  constructor() {
    this.vectorPizzaImgPath = [];
    this.curIdxPizzaImg = 0;
    this.menu = [];
    this.#loadPizzaVector();
    this.#loadMenu();
  }
  #loadPizzaVector() {
    if(0 === this.vectorPizzaImgPath.length) {
      const imgRootPath = './images/';
      this.vectorPizzaImgPath.push(imgRootPath + 'pizza-margherita.jpg');
      this.vectorPizzaImgPath.push(imgRootPath + 'pizza-marinara.jpg');
      this.vectorPizzaImgPath.push(imgRootPath + 'pizza-capricciosa.jpg');
      this.vectorPizzaImgPath.push(imgRootPath + 'pizza-pomodorini-bufala.jpg');
      this.vectorPizzaImgPath.push(imgRootPath + 'calzone-ripieno-al-forno.jpg');
      this.vectorPizzaImgPath.push(imgRootPath + 'calzone-ripieno-fritto.jpg');
    }
  }
  #loadMenu() {
    Assets_data_menu_json__WEBPACK_IMPORTED_MODULE_3__.map((elem) => {
      const dishContainer = new Modules_dishContainer_js__WEBPACK_IMPORTED_MODULE_0__.DishContainer(elem['dish-name']);
      elem['menu'].map((list) => {
        dishContainer.addDish(list['name'], list['price'], list['description']);
      });
      this.menu.push(dishContainer);
    });
  }
  get arrayMenu() {
    return this.menu;
  }
  #loadPreviewButton(isRight = false) {
    const changeImageCbEvent = (e) => {
      const imgPizzaPreview = document.querySelector('#idPreviewPizza');
      if(isRight) {
        this.curIdxPizzaImg = (this.curIdxPizzaImg + 1) % this.vectorPizzaImgPath.length;
      } else {
        this.curIdxPizzaImg = (this.curIdxPizzaImg - 1) % this.vectorPizzaImgPath.length;
      }
      imgPizzaPreview.setAttribute('src', this.vectorPizzaImgPath[this.curIdxPizzaImg]);
    }
    return (0,Utilities_button_js__WEBPACK_IMPORTED_MODULE_2__.createImageButton)(isRight ? 'right-button.svg' : 'left-button.svg', changeImageCbEvent);
  }
  preparePizzaPreview() {
    const divPreviewContainer = document.createElement('div');
    const imgPizzaPreview = document.createElement('img');
    imgPizzaPreview.setAttribute('src', this.vectorPizzaImgPath[this.curIdxPizzaImg]);
    imgPizzaPreview.setAttribute('alt', 'pizza preview');
    imgPizzaPreview.id = 'idPreviewPizza';
    divPreviewContainer.appendChild(this.#loadPreviewButton());
    divPreviewContainer.appendChild(imgPizzaPreview);
    divPreviewContainer.appendChild(this.#loadPreviewButton(true));
    return divPreviewContainer;
  }
  prepareMenu() {
    const divMenuContainer = document.createElement('div');
    
    this.menu.forEach((dishContainer) => {
      const pDishContainerName = document.createElement('p');
      const gridDishContainer = document.createElement('div');
      // Get dish container
      pDishContainerName.textContent = dishContainer.name;
      const dishes = dishContainer.dishes;
      dishes.forEach((dish) => {
        const pDishName = document.createElement('p');
        const pDishPrice = document.createElement('p');
        const pDishDescription = document.createElement('p');
        pDishName.textContent = dish.name;
        pDishPrice.textContent = dish.price;
        pDishDescription.textContent = dish.description;
        gridDishContainer.appendChild(pDishName);
        gridDishContainer.appendChild(pDishPrice);
        gridDishContainer.appendChild(pDishDescription);
      });
      divMenuContainer.appendChild(pDishContainerName);
      divMenuContainer.appendChild(gridDishContainer);
    });
    return (0,Modules_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenu)(divMenuContainer);
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudUNvbnRyb2xsZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkI7Ozs7Ozs7Ozs7Ozs7OztBQ1RzQzs7QUFFL0I7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFJO0FBQ3pCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsb0JBQW9CO0FBQ3BCOzs7Ozs7Ozs7Ozs7OztBQ2hCTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOd0Q7QUFDWjtBQUNXO0FBQ3ZEO0FBQzZDO0FBQ0Y7QUFDRjtBQUNHO0FBQ007QUFDQztBQUNGO0FBQ1A7QUFDQzs7QUFFcEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVk7QUFDaEIsZ0NBQWdDLG1FQUFhO0FBQzdDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzRUFBaUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxXQUFXLDJEQUFVO0FBQ3JCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2Rpc2guanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9kaXNoQ29udGFpbmVyLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy91dGlsaXRpZXMvYnV0dG9uLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvY29udHJvbGxlci9tZW51Q29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRGlzaHsgXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbiB8fCBcIlwiO1xuICB9XG4gIGdldCBnZXROYW1lKCkgeyByZXR1cm4gdGhpcy5uYW1lOyB9XG4gIGdldCBnZXREZXNjcmlwdGlvbigpIHsgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247IH1cbiAgZ2V0IGdldFByaWNlKCkgeyByZXR1cm4gdGhpcy5wcmljZTsgfVxufSIsImltcG9ydCB7IERpc2ggfSBmcm9tICdNb2R1bGVzL2Rpc2guanMnXG5cbmV4cG9ydCBjbGFzcyBEaXNoQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kaXNoZXMgPSBbXTtcbiAgfVxuICBpbnNlcnREaXNoKGRpc2gpIHtcbiAgICB0aGlzLmRpc2hlcy5wdXNoKGRpc2gpO1xuICB9XG4gIGFkZERpc2gobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgZGlzaCA9IG5ldyBEaXNoKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbik7XG4gICAgdGhpcy5pbnNlcnREaXNoKGRpc2gpO1xuICB9XG4gIGdldCBnZXREaXNoTmFtZSgpIHsgcmV0dXJuIHRoaXMubmFtZTsgfVxuICBnZXQgZ2V0RGlzaGVzKCkgeyByZXR1cm4gdGhpcy5kaXNoZXM7IH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudShtZW51TGlzdCkge1xuICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgZWxlbWVudHMucHVzaChtZW51TGlzdCk7XG4gIHJldHVybiBlbGVtZW50cztcbn0iLCJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdXR0b24oYnRuVGV4dCA9ICcnLCBzdmdJY29uRmlsZU5hbWUgPSBudWxsLCBjYkV2ZW50ID0gdW5kZWZpbmVkKSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBwRWxlbSA9IGJ0blRleHQubGVuZ3RoID4gMCA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSA6IG51bGw7XG4gIC8vIEluc2VydCBpY29uIHdoZW4gZXhpc3RcbiAgaWYoc3ZnSWNvbkZpbGVOYW1lKSB7XG4gICAgY29uc3QgZmlsZUZ1bGxQYXRoID0gJy4vaW1hZ2VzLycgKyBzdmdJY29uRmlsZU5hbWU7XG4gICAgY29uc3QgaW1nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKCdzcmMnLCBmaWxlRnVsbFBhdGgpO1xuICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKCdhbHQnLCBidG5UZXh0KTtcbiAgICBpbWdFbGVtLmNsYXNzTmFtZSA9ICdpY29uJztcbiAgICBidG4uYXBwZW5kQ2hpbGQoaW1nRWxlbSk7XG4gIH1cbiAgLy8gQWRkIHRleHQgd2hlbiBjb250YWlucyBzb21ldGhpbmdcbiAgaWYoYnRuVGV4dC5sZW5ndGggPiAwKSB7XG4gICAgLy8gU2V0IHVwIHRleHQgZWxlbWVudFxuICAgIHBFbGVtLnRleHRDb250ZW50ID0gYnRuVGV4dDtcbiAgICBidG4uYXBwZW5kQ2hpbGQocEVsZW0pO1xuICB9XG4gIGJ0bi5vbmNsaWNrID0gY2JFdmVudDtcbiAgLy8gU2V0dXAgYnRuIHByb3BlcnRpZXNcbiAgYnRuLmNsYXNzTmFtZSA9ICduYXZCdXR0b24nO1xuICByZXR1cm4gYnRuOyAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWFnZUJ1dHRvbihzdmdJY29uRmlsZU5hbWUsIGNiRXZlbnQgPSB1bmRlZmluZWQpIHtcbiAgcmV0dXJuIGNyZWF0ZUJ1dHRvbignJywgc3ZnSWNvbkZpbGVOYW1lLCBjYkV2ZW50KVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgRGlzaENvbnRhaW5lciB9IGZyb20gJ01vZHVsZXMvZGlzaENvbnRhaW5lci5qcydcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tICdNb2R1bGVzL21lbnUuanMnXG5pbXBvcnQgeyBjcmVhdGVJbWFnZUJ1dHRvbiB9IGZyb20gJ1V0aWxpdGllcy9idXR0b24uanMnXG4vLyBBc3NldHMgZGF0YVxuaW1wb3J0IGRhdGFNZW51IGZyb20gJ0Fzc2V0cy9kYXRhL21lbnUuanNvbic7XG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvcGl6emEtbWFyZ2hlcml0YS5qcGcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvcGl6emEtbWFyaW5hcmEuanBnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3BpenphLWNhcHJpY2Npb3NhLmpwZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9waXp6YS1wb21vZG9yaW5pLWJ1ZmFsYS5qcGcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvY2Fsem9uZS1yaXBpZW5vLWFsLWZvcm5vLmpwZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9jYWx6b25lLXJpcGllbm8tZnJpdHRvLmpwZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9zdmcvbGVmdC1idXR0b24uc3ZnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3N2Zy9yaWdodC1idXR0b24uc3ZnJ1xuXG5leHBvcnQgY2xhc3MgTWVudUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aCA9IFtdO1xuICAgIHRoaXMuY3VySWR4UGl6emFJbWcgPSAwO1xuICAgIHRoaXMubWVudSA9IFtdO1xuICAgIHRoaXMuI2xvYWRQaXp6YVZlY3RvcigpO1xuICAgIHRoaXMuI2xvYWRNZW51KCk7XG4gIH1cbiAgI2xvYWRQaXp6YVZlY3RvcigpIHtcbiAgICBpZigwID09PSB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGltZ1Jvb3RQYXRoID0gJy4vaW1hZ2VzLyc7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKGltZ1Jvb3RQYXRoICsgJ3BpenphLW1hcmdoZXJpdGEuanBnJyk7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKGltZ1Jvb3RQYXRoICsgJ3BpenphLW1hcmluYXJhLmpwZycpO1xuICAgICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgucHVzaChpbWdSb290UGF0aCArICdwaXp6YS1jYXByaWNjaW9zYS5qcGcnKTtcbiAgICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLnB1c2goaW1nUm9vdFBhdGggKyAncGl6emEtcG9tb2RvcmluaS1idWZhbGEuanBnJyk7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKGltZ1Jvb3RQYXRoICsgJ2NhbHpvbmUtcmlwaWVuby1hbC1mb3Juby5qcGcnKTtcbiAgICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLnB1c2goaW1nUm9vdFBhdGggKyAnY2Fsem9uZS1yaXBpZW5vLWZyaXR0by5qcGcnKTtcbiAgICB9XG4gIH1cbiAgI2xvYWRNZW51KCkge1xuICAgIGRhdGFNZW51Lm1hcCgoZWxlbSkgPT4ge1xuICAgICAgY29uc3QgZGlzaENvbnRhaW5lciA9IG5ldyBEaXNoQ29udGFpbmVyKGVsZW1bJ2Rpc2gtbmFtZSddKTtcbiAgICAgIGVsZW1bJ21lbnUnXS5tYXAoKGxpc3QpID0+IHtcbiAgICAgICAgZGlzaENvbnRhaW5lci5hZGREaXNoKGxpc3RbJ25hbWUnXSwgbGlzdFsncHJpY2UnXSwgbGlzdFsnZGVzY3JpcHRpb24nXSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubWVudS5wdXNoKGRpc2hDb250YWluZXIpO1xuICAgIH0pO1xuICB9XG4gIGdldCBhcnJheU1lbnUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVudTtcbiAgfVxuICAjbG9hZFByZXZpZXdCdXR0b24oaXNSaWdodCA9IGZhbHNlKSB7XG4gICAgY29uc3QgY2hhbmdlSW1hZ2VDYkV2ZW50ID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IGltZ1BpenphUHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpZFByZXZpZXdQaXp6YScpO1xuICAgICAgaWYoaXNSaWdodCkge1xuICAgICAgICB0aGlzLmN1cklkeFBpenphSW1nID0gKHRoaXMuY3VySWR4UGl6emFJbWcgKyAxKSAlIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3VySWR4UGl6emFJbWcgPSAodGhpcy5jdXJJZHhQaXp6YUltZyAtIDEpICUgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgubGVuZ3RoO1xuICAgICAgfVxuICAgICAgaW1nUGl6emFQcmV2aWV3LnNldEF0dHJpYnV0ZSgnc3JjJywgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGhbdGhpcy5jdXJJZHhQaXp6YUltZ10pO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlSW1hZ2VCdXR0b24oaXNSaWdodCA/ICdyaWdodC1idXR0b24uc3ZnJyA6ICdsZWZ0LWJ1dHRvbi5zdmcnLCBjaGFuZ2VJbWFnZUNiRXZlbnQpO1xuICB9XG4gIHByZXBhcmVQaXp6YVByZXZpZXcoKSB7XG4gICAgY29uc3QgZGl2UHJldmlld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltZ1BpenphUHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZ1BpenphUHJldmlldy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoW3RoaXMuY3VySWR4UGl6emFJbWddKTtcbiAgICBpbWdQaXp6YVByZXZpZXcuc2V0QXR0cmlidXRlKCdhbHQnLCAncGl6emEgcHJldmlldycpO1xuICAgIGltZ1BpenphUHJldmlldy5pZCA9ICdpZFByZXZpZXdQaXp6YSc7XG4gICAgZGl2UHJldmlld0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiNsb2FkUHJldmlld0J1dHRvbigpKTtcbiAgICBkaXZQcmV2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKGltZ1BpenphUHJldmlldyk7XG4gICAgZGl2UHJldmlld0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiNsb2FkUHJldmlld0J1dHRvbih0cnVlKSk7XG4gICAgcmV0dXJuIGRpdlByZXZpZXdDb250YWluZXI7XG4gIH1cbiAgcHJlcGFyZU1lbnUoKSB7XG4gICAgY29uc3QgZGl2TWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIHRoaXMubWVudS5mb3JFYWNoKChkaXNoQ29udGFpbmVyKSA9PiB7XG4gICAgICBjb25zdCBwRGlzaENvbnRhaW5lck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBjb25zdCBncmlkRGlzaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgLy8gR2V0IGRpc2ggY29udGFpbmVyXG4gICAgICBwRGlzaENvbnRhaW5lck5hbWUudGV4dENvbnRlbnQgPSBkaXNoQ29udGFpbmVyLm5hbWU7XG4gICAgICBjb25zdCBkaXNoZXMgPSBkaXNoQ29udGFpbmVyLmRpc2hlcztcbiAgICAgIGRpc2hlcy5mb3JFYWNoKChkaXNoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBEaXNoTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgcERpc2hQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgcERpc2hEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcERpc2hOYW1lLnRleHRDb250ZW50ID0gZGlzaC5uYW1lO1xuICAgICAgICBwRGlzaFByaWNlLnRleHRDb250ZW50ID0gZGlzaC5wcmljZTtcbiAgICAgICAgcERpc2hEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRpc2guZGVzY3JpcHRpb247XG4gICAgICAgIGdyaWREaXNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHBEaXNoTmFtZSk7XG4gICAgICAgIGdyaWREaXNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHBEaXNoUHJpY2UpO1xuICAgICAgICBncmlkRGlzaENvbnRhaW5lci5hcHBlbmRDaGlsZChwRGlzaERlc2NyaXB0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgZGl2TWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChwRGlzaENvbnRhaW5lck5hbWUpO1xuICAgICAgZGl2TWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkRGlzaENvbnRhaW5lcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNyZWF0ZU1lbnUoZGl2TWVudUNvbnRhaW5lcik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==