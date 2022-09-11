/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller/menuController.js":
/*!******************************************!*\
  !*** ./src/controller/menuController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuController": () => (/* binding */ MenuController)
/* harmony export */ });
/* harmony import */ var Modules_dishContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Modules/dishContainer.js */ "./src/modules/dishContainer.js");
/* harmony import */ var Modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Modules/menu.js */ "./src/modules/menu.js");
/* harmony import */ var Assets_data_menu_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Assets/data/menu.json */ "./src/assets/data/menu.json");
/* harmony import */ var Assets_images_pizza_margherita_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Assets/images/pizza-margherita.jpg */ "./src/assets/images/pizza-margherita.jpg");
/* harmony import */ var Assets_images_pizza_marinara_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Assets/images/pizza-marinara.jpg */ "./src/assets/images/pizza-marinara.jpg");
/* harmony import */ var Assets_images_pizza_capricciosa_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Assets/images/pizza-capricciosa.jpg */ "./src/assets/images/pizza-capricciosa.jpg");
/* harmony import */ var Assets_images_pizza_pomodorini_bufala_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Assets/images/pizza-pomodorini-bufala.jpg */ "./src/assets/images/pizza-pomodorini-bufala.jpg");
/* harmony import */ var Assets_images_calzone_ripieno_al_forno_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Assets/images/calzone-ripieno-al-forno.jpg */ "./src/assets/images/calzone-ripieno-al-forno.jpg");
/* harmony import */ var Assets_images_calzone_ripieno_fritto_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Assets/images/calzone-ripieno-fritto.jpg */ "./src/assets/images/calzone-ripieno-fritto.jpg");


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
      this.vectorPizzaImgPath.push('./image/pizza-margherita.jpg');
      this.vectorPizzaImgPath.push('./image/pizza-marinara.jpg');
      this.vectorPizzaImgPath.push('./image/pizza-capricciosa.jpg');
      this.vectorPizzaImgPath.push('./image/pizza-pomodorini-bufala.jpg');
      this.vectorPizzaImgPath.push('./image/calzone-ripieno-al-forno.jpg');
      this.vectorPizzaImgPath.push('./image/calzone-ripieno-fritto.jpg');
    }
  }
  #loadMenu() {
    Assets_data_menu_json__WEBPACK_IMPORTED_MODULE_2__.map((elem) => {
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
/* harmony import */ var Assets_images_map_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Assets/images/map.png */ "./src/assets/images/map.png");


function createInfoTextData(fatherDiv, text, title = false) {
  const p = document.createElement('p');
  p.textContent = text;
  p.className = title ? 'contactTitle' : 'contactInfo';
  fatherDiv.appendChild(p);
}

function createInfo() {
  const divContact = document.createElement('div');
  // Create HTML elements text content
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
  const divLocation = document.createElement('div');
  createInfoTextData(divLocation, 'WHERE WE ARE', true);
  const imgElem = document.createElement('img');
  imgElem.setAttribute('src', './images/map.png');
  imgElem.setAttribute('alt', 'mapLocation');
  divLocation.appendChild(imgElem);
  return divLocation;
}

function createContact() {
  let elements = [];
  const divMain = document.createElement('div');
  // Book table button
  const btnReserve = document.createElement('button');
  btnReserve.textContent = 'BOOK A TABLE';
  // Add to main grid
  divMain.appendChild(createInfo());
  divMain.appendChild(createLocation());
  divMain.appendChild(btnReserve);
  divMain.className = 'gridContact';
  elements.push(divMain);
  return elements;
}

/***/ }),

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
function createMenu(menuList) {
  let elements = [];
  elements.push(menuList);
  return elements;
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

/***/ "./src/assets/images/map.png":
/*!***********************************!*\
  !*** ./src/assets/images/map.png ***!
  \***********************************/
/***/ ((module) => {

module.exports = "images/map.png";

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
/*!*****************************************!*\
  !*** ./src/controller/navController.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationController": () => (/* binding */ NavigationController),
/* harmony export */   "pageType": () => (/* binding */ pageType)
/* harmony export */ });
/* harmony import */ var Modules_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Modules/home.js */ "./src/modules/home.js");
/* harmony import */ var Modules_contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Modules/contact.js */ "./src/modules/contact.js");
/* harmony import */ var Controller_menuController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Controller/menuController.js */ "./src/controller/menuController.js");




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
    this.menuController = new Controller_menuController_js__WEBPACK_IMPORTED_MODULE_2__.MenuController();
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
        elements = this.menuController.prepareMenu();
        break;
      case pageType.contact:
        elements = (0,Modules_contact_js__WEBPACK_IMPORTED_MODULE_1__.createContact)();
        break;
      case pageType.home:
      default:
        elements = (0,Modules_home_js__WEBPACK_IMPORTED_MODULE_0__.createHome)();
        break;
    }
    this.#showPage(elements);
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2Q29udHJvbGxlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDWjtBQUM1QztBQUM2QztBQUNGO0FBQ0Y7QUFDRztBQUNNO0FBQ0M7QUFDRjs7QUFFMUM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFZO0FBQ2hCLGdDQUFnQyxtRUFBYTtBQUM3QztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxXQUFXLDJEQUFVO0FBQ3JCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsRE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkI7Ozs7Ozs7Ozs7Ozs7OztBQ1RzQzs7QUFFL0I7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFJO0FBQ3pCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsb0JBQW9CO0FBQ3BCOzs7Ozs7Ozs7Ozs7OztBQ2hCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDTTtBQUNXOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLDhCQUE4Qix3RUFBYztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpRUFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvY29udHJvbGxlci9tZW51Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9kaXNoLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvZGlzaENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvY29udHJvbGxlci9uYXZDb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpc2hDb250YWluZXIgfSBmcm9tICdNb2R1bGVzL2Rpc2hDb250YWluZXIuanMnXG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSAnTW9kdWxlcy9tZW51LmpzJ1xuLy8gQXNzZXRzIGRhdGFcbmltcG9ydCBkYXRhTWVudSBmcm9tICdBc3NldHMvZGF0YS9tZW51Lmpzb24nO1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3BpenphLW1hcmdoZXJpdGEuanBnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3BpenphLW1hcmluYXJhLmpwZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9waXp6YS1jYXByaWNjaW9zYS5qcGcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvcGl6emEtcG9tb2RvcmluaS1idWZhbGEuanBnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL2NhbHpvbmUtcmlwaWVuby1hbC1mb3Juby5qcGcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvY2Fsem9uZS1yaXBpZW5vLWZyaXR0by5qcGcnXG5cbmV4cG9ydCBjbGFzcyBNZW51Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoID0gW107XG4gICAgdGhpcy5jdXJJZHhQaXp6YUltZyA9IDA7XG4gICAgdGhpcy5tZW51ID0gW107XG4gICAgdGhpcy4jbG9hZFBpenphVmVjdG9yKCk7XG4gICAgdGhpcy4jbG9hZE1lbnUoKTtcbiAgfVxuICAjbG9hZFBpenphVmVjdG9yKCkge1xuICAgIGlmKDAgPT09IHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLmxlbmd0aCkge1xuICAgICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgucHVzaCgnLi9pbWFnZS9waXp6YS1tYXJnaGVyaXRhLmpwZycpO1xuICAgICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgucHVzaCgnLi9pbWFnZS9waXp6YS1tYXJpbmFyYS5qcGcnKTtcbiAgICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLnB1c2goJy4vaW1hZ2UvcGl6emEtY2FwcmljY2lvc2EuanBnJyk7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKCcuL2ltYWdlL3BpenphLXBvbW9kb3JpbmktYnVmYWxhLmpwZycpO1xuICAgICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgucHVzaCgnLi9pbWFnZS9jYWx6b25lLXJpcGllbm8tYWwtZm9ybm8uanBnJyk7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKCcuL2ltYWdlL2NhbHpvbmUtcmlwaWVuby1mcml0dG8uanBnJyk7XG4gICAgfVxuICB9XG4gICNsb2FkTWVudSgpIHtcbiAgICBkYXRhTWVudS5tYXAoKGVsZW0pID0+IHtcbiAgICAgIGNvbnN0IGRpc2hDb250YWluZXIgPSBuZXcgRGlzaENvbnRhaW5lcihlbGVtWydkaXNoLW5hbWUnXSk7XG4gICAgICBlbGVtWydtZW51J10ubWFwKChsaXN0KSA9PiB7XG4gICAgICAgIGRpc2hDb250YWluZXIuYWRkRGlzaChsaXN0WyduYW1lJ10sIGxpc3RbJ3ByaWNlJ10sIGxpc3RbJ2Rlc2NyaXB0aW9uJ10pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm1lbnUucHVzaChkaXNoQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxuICBnZXQgYXJyYXlNZW51KCkge1xuICAgIHJldHVybiB0aGlzLm1lbnU7XG4gIH1cbiAgcHJlcGFyZU1lbnUoKSB7XG4gICAgY29uc3QgZGl2TWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIHRoaXMubWVudS5mb3JFYWNoKChkaXNoQ29udGFpbmVyKSA9PiB7XG4gICAgICBjb25zdCBwRGlzaENvbnRhaW5lck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBjb25zdCBncmlkRGlzaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgLy8gR2V0IGRpc2ggY29udGFpbmVyXG4gICAgICBwRGlzaENvbnRhaW5lck5hbWUudGV4dENvbnRlbnQgPSBkaXNoQ29udGFpbmVyLm5hbWU7XG4gICAgICBjb25zdCBkaXNoZXMgPSBkaXNoQ29udGFpbmVyLmRpc2hlcztcbiAgICAgIGRpc2hlcy5mb3JFYWNoKChkaXNoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBEaXNoTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgcERpc2hQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgcERpc2hEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcERpc2hOYW1lLnRleHRDb250ZW50ID0gZGlzaC5uYW1lO1xuICAgICAgICBwRGlzaFByaWNlLnRleHRDb250ZW50ID0gZGlzaC5wcmljZTtcbiAgICAgICAgcERpc2hEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRpc2guZGVzY3JpcHRpb247XG4gICAgICAgIGdyaWREaXNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHBEaXNoTmFtZSk7XG4gICAgICAgIGdyaWREaXNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHBEaXNoUHJpY2UpO1xuICAgICAgICBncmlkRGlzaENvbnRhaW5lci5hcHBlbmRDaGlsZChwRGlzaERlc2NyaXB0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgZGl2TWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChwRGlzaENvbnRhaW5lck5hbWUpO1xuICAgICAgZGl2TWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkRGlzaENvbnRhaW5lcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNyZWF0ZU1lbnUoZGl2TWVudUNvbnRhaW5lcik7XG4gIH1cbn1cbiIsImltcG9ydCAnQXNzZXRzL2ltYWdlcy9tYXAucG5nJ1xuXG5mdW5jdGlvbiBjcmVhdGVJbmZvVGV4dERhdGEoZmF0aGVyRGl2LCB0ZXh0LCB0aXRsZSA9IGZhbHNlKSB7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBwLmNsYXNzTmFtZSA9IHRpdGxlID8gJ2NvbnRhY3RUaXRsZScgOiAnY29udGFjdEluZm8nO1xuICBmYXRoZXJEaXYuYXBwZW5kQ2hpbGQocCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZm8oKSB7XG4gIGNvbnN0IGRpdkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gQ3JlYXRlIEhUTUwgZWxlbWVudHMgdGV4dCBjb250ZW50XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnQ09OVEFDVCcsIHRydWUpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ1RvbGVkbyBTdCwgOTksJyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnODAwMTAsIE5hcGxlcywgSXRhbHknKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICcnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICcwODEgMTIzIDQ1NjcnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICdPUEVOSU5HIEhPVVJTJywgdHJ1ZSk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnVHVlc2RheSAtIFNhdHVyZGF5OicpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJzEyOjMwIC0gMTU6MDAnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICcxOTowMCAtIDI0OjAwJyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnJyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnU3VuZGF5OiAxOTowMCAtIDI0OjAwJyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnTW9uZGF5OiBjbG9zZWQnKTtcbiAgcmV0dXJuIGRpdkNvbnRhY3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKCkge1xuICBjb25zdCBkaXZMb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2TG9jYXRpb24sICdXSEVSRSBXRSBBUkUnLCB0cnVlKTtcbiAgY29uc3QgaW1nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdFbGVtLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1hZ2VzL21hcC5wbmcnKTtcbiAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdtYXBMb2NhdGlvbicpO1xuICBkaXZMb2NhdGlvbi5hcHBlbmRDaGlsZChpbWdFbGVtKTtcbiAgcmV0dXJuIGRpdkxvY2F0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgbGV0IGVsZW1lbnRzID0gW107XG4gIGNvbnN0IGRpdk1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gQm9vayB0YWJsZSBidXR0b25cbiAgY29uc3QgYnRuUmVzZXJ2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5SZXNlcnZlLnRleHRDb250ZW50ID0gJ0JPT0sgQSBUQUJMRSc7XG4gIC8vIEFkZCB0byBtYWluIGdyaWRcbiAgZGl2TWFpbi5hcHBlbmRDaGlsZChjcmVhdGVJbmZvKCkpO1xuICBkaXZNYWluLmFwcGVuZENoaWxkKGNyZWF0ZUxvY2F0aW9uKCkpO1xuICBkaXZNYWluLmFwcGVuZENoaWxkKGJ0blJlc2VydmUpO1xuICBkaXZNYWluLmNsYXNzTmFtZSA9ICdncmlkQ29udGFjdCc7XG4gIGVsZW1lbnRzLnB1c2goZGl2TWFpbik7XG4gIHJldHVybiBlbGVtZW50cztcbn0iLCJleHBvcnQgY2xhc3MgRGlzaHsgXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbiB8fCBcIlwiO1xuICB9XG4gIGdldCBnZXROYW1lKCkgeyByZXR1cm4gdGhpcy5uYW1lOyB9XG4gIGdldCBnZXREZXNjcmlwdGlvbigpIHsgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247IH1cbiAgZ2V0IGdldFByaWNlKCkgeyByZXR1cm4gdGhpcy5wcmljZTsgfVxufSIsImltcG9ydCB7IERpc2ggfSBmcm9tICdNb2R1bGVzL2Rpc2guanMnXG5cbmV4cG9ydCBjbGFzcyBEaXNoQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kaXNoZXMgPSBbXTtcbiAgfVxuICBpbnNlcnREaXNoKGRpc2gpIHtcbiAgICB0aGlzLmRpc2hlcy5wdXNoKGRpc2gpO1xuICB9XG4gIGFkZERpc2gobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgZGlzaCA9IG5ldyBEaXNoKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbik7XG4gICAgdGhpcy5pbnNlcnREaXNoKGRpc2gpO1xuICB9XG4gIGdldCBnZXREaXNoTmFtZSgpIHsgcmV0dXJuIHRoaXMubmFtZTsgfVxuICBnZXQgZ2V0RGlzaGVzKCkgeyByZXR1cm4gdGhpcy5kaXNoZXM7IH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgbGV0IGVsZW1lbnRzID0gW107XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1lbnUudGV4dENvbnRlbnQgPSAnbWlhbyc7XG4gIGVsZW1lbnRzLnB1c2gobWVudSk7XG4gIHJldHVybiBlbGVtZW50cztcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudShtZW51TGlzdCkge1xuICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgZWxlbWVudHMucHVzaChtZW51TGlzdCk7XG4gIHJldHVybiBlbGVtZW50cztcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tICdNb2R1bGVzL2hvbWUuanMnXG5pbXBvcnQgeyBjcmVhdGVDb250YWN0IH0gZnJvbSAnTW9kdWxlcy9jb250YWN0LmpzJ1xuaW1wb3J0IHsgTWVudUNvbnRyb2xsZXIgfSBmcm9tICdDb250cm9sbGVyL21lbnVDb250cm9sbGVyLmpzJ1xuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBhZ2VUeXBlID0ge1xuICBob21lOiAnSG9tZScsXG4gIG1lbnU6ICdNZW51JyxcbiAgY29udGFjdDogJ0NvbnRhY3QnLFxufTtcblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tZW51Q29udHJvbGxlciA9IG5ldyBNZW51Q29udHJvbGxlcigpO1xuICB9XG4gICNzaG93UGFnZShlbGVtZW50cykge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMobWFpbkNvbnRlbnQpO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuICBjaGFuZ2VQYWdlKHBhZ2VOYW1lKSB7XG4gICAgbGV0IGVsZW1lbnRzID0gW107XG4gICAgc3dpdGNoIChwYWdlTmFtZSkge1xuICAgICAgY2FzZSBwYWdlVHlwZS5tZW51OlxuICAgICAgICBlbGVtZW50cyA9IHRoaXMubWVudUNvbnRyb2xsZXIucHJlcGFyZU1lbnUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHBhZ2VUeXBlLmNvbnRhY3Q6XG4gICAgICAgIGVsZW1lbnRzID0gY3JlYXRlQ29udGFjdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgcGFnZVR5cGUuaG9tZTpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVsZW1lbnRzID0gY3JlYXRlSG9tZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy4jc2hvd1BhZ2UoZWxlbWVudHMpO1xuICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9