/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller/contactController.js":
/*!*********************************************!*\
  !*** ./src/controller/contactController.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/controller/homeController.js":
/*!******************************************!*\
  !*** ./src/controller/homeController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

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
function createHome(imgPreviewContainer) {
  let elements = [];
  const menu = document.createElement('p');
  menu.textContent = 'miao';
  elements.push(menu);
  elements.push(imgPreviewContainer);
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
/*!*****************************************!*\
  !*** ./src/controller/navController.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationController": () => (/* binding */ NavigationController),
/* harmony export */   "pageType": () => (/* binding */ pageType)
/* harmony export */ });
/* harmony import */ var Controller_menuController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Controller/menuController.js */ "./src/controller/menuController.js");
/* harmony import */ var Controller_homeController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Controller/homeController.js */ "./src/controller/homeController.js");
/* harmony import */ var Controller_contactController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Controller/contactController.js */ "./src/controller/contactController.js");




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
    this.menuController = new Controller_menuController_js__WEBPACK_IMPORTED_MODULE_0__.MenuController();
    this.homeController = new Controller_homeController_js__WEBPACK_IMPORTED_MODULE_1__.HomeController();
    this.contactController = new Controller_contactController_js__WEBPACK_IMPORTED_MODULE_2__.ContactController();
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
        elements = this.contactController.prepareContact();
        break;
      case pageType.home:
      default:
        elements = this.homeController.prepareHome(this.menuController.preparePizzaPreview());
        break;
    }
    this.#showPage(elements);
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjZEO0FBQ0E7QUFDTTs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSw4QkFBOEIsd0VBQWM7QUFDNUMsOEJBQThCLHdFQUFjO0FBQzVDLGlDQUFpQyw4RUFBaUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvY29udHJvbGxlci9jb250YWN0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9jb250cm9sbGVyL2hvbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL2NvbnRyb2xsZXIvbWVudUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvZGlzaC5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2Rpc2hDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy91dGlsaXRpZXMvYnV0dG9uLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvY29udHJvbGxlci9uYXZDb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRhY3QgfSBmcm9tICdNb2R1bGVzL2NvbnRhY3QuanMnXG5cbmV4cG9ydCBjbGFzcyBDb250YWN0Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG4gIHByZXBhcmVDb250YWN0KCkge1xuICAgIHJldHVybiBjcmVhdGVDb250YWN0KCk7XG4gIH1cbn0iLCJpbXBvcnQgeyBjcmVhdGVIb21lIH0gZnJvbSAnTW9kdWxlcy9ob21lLmpzJ1xuXG5leHBvcnQgY2xhc3MgSG9tZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuICBwcmVwYXJlSG9tZShpbWdQcmV2aWV3Q29udGFpbmVyKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUhvbWUoaW1nUHJldmlld0NvbnRhaW5lcik7XG4gIH1cbn0iLCJpbXBvcnQgeyBEaXNoQ29udGFpbmVyIH0gZnJvbSAnTW9kdWxlcy9kaXNoQ29udGFpbmVyLmpzJ1xuaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gJ01vZHVsZXMvbWVudS5qcydcbmltcG9ydCB7IGNyZWF0ZUltYWdlQnV0dG9uIH0gZnJvbSAnVXRpbGl0aWVzL2J1dHRvbi5qcydcbi8vIEFzc2V0cyBkYXRhXG5pbXBvcnQgZGF0YU1lbnUgZnJvbSAnQXNzZXRzL2RhdGEvbWVudS5qc29uJztcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9waXp6YS1tYXJnaGVyaXRhLmpwZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9waXp6YS1tYXJpbmFyYS5qcGcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvcGl6emEtY2FwcmljY2lvc2EuanBnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3BpenphLXBvbW9kb3JpbmktYnVmYWxhLmpwZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9jYWx6b25lLXJpcGllbm8tYWwtZm9ybm8uanBnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL2NhbHpvbmUtcmlwaWVuby1mcml0dG8uanBnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3N2Zy9sZWZ0LWJ1dHRvbi5zdmcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvc3ZnL3JpZ2h0LWJ1dHRvbi5zdmcnXG5cbmV4cG9ydCBjbGFzcyBNZW51Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoID0gW107XG4gICAgdGhpcy5jdXJJZHhQaXp6YUltZyA9IDA7XG4gICAgdGhpcy5tZW51ID0gW107XG4gICAgdGhpcy4jbG9hZFBpenphVmVjdG9yKCk7XG4gICAgdGhpcy4jbG9hZE1lbnUoKTtcbiAgfVxuICAjbG9hZFBpenphVmVjdG9yKCkge1xuICAgIGlmKDAgPT09IHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLmxlbmd0aCkge1xuICAgICAgY29uc3QgaW1nUm9vdFBhdGggPSAnLi9pbWFnZXMvJztcbiAgICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLnB1c2goaW1nUm9vdFBhdGggKyAncGl6emEtbWFyZ2hlcml0YS5qcGcnKTtcbiAgICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLnB1c2goaW1nUm9vdFBhdGggKyAncGl6emEtbWFyaW5hcmEuanBnJyk7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKGltZ1Jvb3RQYXRoICsgJ3BpenphLWNhcHJpY2Npb3NhLmpwZycpO1xuICAgICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgucHVzaChpbWdSb290UGF0aCArICdwaXp6YS1wb21vZG9yaW5pLWJ1ZmFsYS5qcGcnKTtcbiAgICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLnB1c2goaW1nUm9vdFBhdGggKyAnY2Fsem9uZS1yaXBpZW5vLWFsLWZvcm5vLmpwZycpO1xuICAgICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgucHVzaChpbWdSb290UGF0aCArICdjYWx6b25lLXJpcGllbm8tZnJpdHRvLmpwZycpO1xuICAgIH1cbiAgfVxuICAjbG9hZE1lbnUoKSB7XG4gICAgZGF0YU1lbnUubWFwKChlbGVtKSA9PiB7XG4gICAgICBjb25zdCBkaXNoQ29udGFpbmVyID0gbmV3IERpc2hDb250YWluZXIoZWxlbVsnZGlzaC1uYW1lJ10pO1xuICAgICAgZWxlbVsnbWVudSddLm1hcCgobGlzdCkgPT4ge1xuICAgICAgICBkaXNoQ29udGFpbmVyLmFkZERpc2gobGlzdFsnbmFtZSddLCBsaXN0WydwcmljZSddLCBsaXN0WydkZXNjcmlwdGlvbiddKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5tZW51LnB1c2goZGlzaENvbnRhaW5lcik7XG4gICAgfSk7XG4gIH1cbiAgZ2V0IGFycmF5TWVudSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZW51O1xuICB9XG4gICNsb2FkUHJldmlld0J1dHRvbihpc1JpZ2h0ID0gZmFsc2UpIHtcbiAgICBjb25zdCBjaGFuZ2VJbWFnZUNiRXZlbnQgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgaW1nUGl6emFQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lkUHJldmlld1BpenphJyk7XG4gICAgICBpZihpc1JpZ2h0KSB7XG4gICAgICAgIHRoaXMuY3VySWR4UGl6emFJbWcgPSAodGhpcy5jdXJJZHhQaXp6YUltZyArIDEpICUgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJJZHhQaXp6YUltZyA9ICh0aGlzLmN1cklkeFBpenphSW1nIC0gMSkgJSB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5sZW5ndGg7XG4gICAgICB9XG4gICAgICBpbWdQaXp6YVByZXZpZXcuc2V0QXR0cmlidXRlKCdzcmMnLCB0aGlzLnZlY3RvclBpenphSW1nUGF0aFt0aGlzLmN1cklkeFBpenphSW1nXSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVJbWFnZUJ1dHRvbihpc1JpZ2h0ID8gJ3JpZ2h0LWJ1dHRvbi5zdmcnIDogJ2xlZnQtYnV0dG9uLnN2ZycsIGNoYW5nZUltYWdlQ2JFdmVudCk7XG4gIH1cbiAgcHJlcGFyZVBpenphUHJldmlldygpIHtcbiAgICBjb25zdCBkaXZQcmV2aWV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1nUGl6emFQcmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nUGl6emFQcmV2aWV3LnNldEF0dHJpYnV0ZSgnc3JjJywgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGhbdGhpcy5jdXJJZHhQaXp6YUltZ10pO1xuICAgIGltZ1BpenphUHJldmlldy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdwaXp6YSBwcmV2aWV3Jyk7XG4gICAgaW1nUGl6emFQcmV2aWV3LmlkID0gJ2lkUHJldmlld1BpenphJztcbiAgICBkaXZQcmV2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuI2xvYWRQcmV2aWV3QnV0dG9uKCkpO1xuICAgIGRpdlByZXZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nUGl6emFQcmV2aWV3KTtcbiAgICBkaXZQcmV2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuI2xvYWRQcmV2aWV3QnV0dG9uKHRydWUpKTtcbiAgICByZXR1cm4gZGl2UHJldmlld0NvbnRhaW5lcjtcbiAgfVxuICBwcmVwYXJlTWVudSgpIHtcbiAgICBjb25zdCBkaXZNZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgdGhpcy5tZW51LmZvckVhY2goKGRpc2hDb250YWluZXIpID0+IHtcbiAgICAgIGNvbnN0IHBEaXNoQ29udGFpbmVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGNvbnN0IGdyaWREaXNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAvLyBHZXQgZGlzaCBjb250YWluZXJcbiAgICAgIHBEaXNoQ29udGFpbmVyTmFtZS50ZXh0Q29udGVudCA9IGRpc2hDb250YWluZXIubmFtZTtcbiAgICAgIGNvbnN0IGRpc2hlcyA9IGRpc2hDb250YWluZXIuZGlzaGVzO1xuICAgICAgZGlzaGVzLmZvckVhY2goKGRpc2gpID0+IHtcbiAgICAgICAgY29uc3QgcERpc2hOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBwRGlzaFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBwRGlzaERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwRGlzaE5hbWUudGV4dENvbnRlbnQgPSBkaXNoLm5hbWU7XG4gICAgICAgIHBEaXNoUHJpY2UudGV4dENvbnRlbnQgPSBkaXNoLnByaWNlO1xuICAgICAgICBwRGlzaERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGlzaC5kZXNjcmlwdGlvbjtcbiAgICAgICAgZ3JpZERpc2hDb250YWluZXIuYXBwZW5kQ2hpbGQocERpc2hOYW1lKTtcbiAgICAgICAgZ3JpZERpc2hDb250YWluZXIuYXBwZW5kQ2hpbGQocERpc2hQcmljZSk7XG4gICAgICAgIGdyaWREaXNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHBEaXNoRGVzY3JpcHRpb24pO1xuICAgICAgfSk7XG4gICAgICBkaXZNZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHBEaXNoQ29udGFpbmVyTmFtZSk7XG4gICAgICBkaXZNZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWREaXNoQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY3JlYXRlTWVudShkaXZNZW51Q29udGFpbmVyKTtcbiAgfVxufVxuIiwiaW1wb3J0ICdBc3NldHMvaW1hZ2VzL21hcC5wbmcnXG5cbmZ1bmN0aW9uIGNyZWF0ZUluZm9UZXh0RGF0YShmYXRoZXJEaXYsIHRleHQsIHRpdGxlID0gZmFsc2UpIHtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHAuY2xhc3NOYW1lID0gdGl0bGUgPyAnY29udGFjdFRpdGxlJyA6ICdjb250YWN0SW5mbyc7XG4gIGZhdGhlckRpdi5hcHBlbmRDaGlsZChwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mbygpIHtcbiAgY29uc3QgZGl2Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyBDcmVhdGUgSFRNTCBlbGVtZW50cyB0ZXh0IGNvbnRlbnRcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICdDT05UQUNUJywgdHJ1ZSk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnVG9sZWRvIFN0LCA5OSwnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICc4MDAxMCwgTmFwbGVzLCBJdGFseScpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJycpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJzA4MSAxMjMgNDU2NycpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ09QRU5JTkcgSE9VUlMnLCB0cnVlKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICdUdWVzZGF5IC0gU2F0dXJkYXk6Jyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnMTI6MzAgLSAxNTowMCcpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJzE5OjAwIC0gMjQ6MDAnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICcnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICdTdW5kYXk6IDE5OjAwIC0gMjQ6MDAnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICdNb25kYXk6IGNsb3NlZCcpO1xuICByZXR1cm4gZGl2Q29udGFjdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oKSB7XG4gIGNvbnN0IGRpdkxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZMb2NhdGlvbiwgJ1dIRVJFIFdFIEFSRScsIHRydWUpO1xuICBjb25zdCBpbWdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZ0VsZW0uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWFnZXMvbWFwLnBuZycpO1xuICBpbWdFbGVtLnNldEF0dHJpYnV0ZSgnYWx0JywgJ21hcExvY2F0aW9uJyk7XG4gIGRpdkxvY2F0aW9uLmFwcGVuZENoaWxkKGltZ0VsZW0pO1xuICByZXR1cm4gZGl2TG9jYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgY29uc3QgZGl2TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyBCb29rIHRhYmxlIGJ1dHRvblxuICBjb25zdCBidG5SZXNlcnZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0blJlc2VydmUudGV4dENvbnRlbnQgPSAnQk9PSyBBIFRBQkxFJztcbiAgLy8gQWRkIHRvIG1haW4gZ3JpZFxuICBkaXZNYWluLmFwcGVuZENoaWxkKGNyZWF0ZUluZm8oKSk7XG4gIGRpdk1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTG9jYXRpb24oKSk7XG4gIGRpdk1haW4uYXBwZW5kQ2hpbGQoYnRuUmVzZXJ2ZSk7XG4gIGRpdk1haW4uY2xhc3NOYW1lID0gJ2dyaWRDb250YWN0JztcbiAgZWxlbWVudHMucHVzaChkaXZNYWluKTtcbiAgcmV0dXJuIGVsZW1lbnRzO1xufSIsImV4cG9ydCBjbGFzcyBEaXNoeyBcbiAgY29uc3RydWN0b3IobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uIHx8IFwiXCI7XG4gIH1cbiAgZ2V0IGdldE5hbWUoKSB7IHJldHVybiB0aGlzLm5hbWU7IH1cbiAgZ2V0IGdldERlc2NyaXB0aW9uKCkgeyByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjsgfVxuICBnZXQgZ2V0UHJpY2UoKSB7IHJldHVybiB0aGlzLnByaWNlOyB9XG59IiwiaW1wb3J0IHsgRGlzaCB9IGZyb20gJ01vZHVsZXMvZGlzaC5qcydcblxuZXhwb3J0IGNsYXNzIERpc2hDb250YWluZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRpc2hlcyA9IFtdO1xuICB9XG4gIGluc2VydERpc2goZGlzaCkge1xuICAgIHRoaXMuZGlzaGVzLnB1c2goZGlzaCk7XG4gIH1cbiAgYWRkRGlzaChuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBkaXNoID0gbmV3IERpc2gobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uKTtcbiAgICB0aGlzLmluc2VydERpc2goZGlzaCk7XG4gIH1cbiAgZ2V0IGdldERpc2hOYW1lKCkgeyByZXR1cm4gdGhpcy5uYW1lOyB9XG4gIGdldCBnZXREaXNoZXMoKSB7IHJldHVybiB0aGlzLmRpc2hlczsgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb21lKGltZ1ByZXZpZXdDb250YWluZXIpIHtcbiAgbGV0IGVsZW1lbnRzID0gW107XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1lbnUudGV4dENvbnRlbnQgPSAnbWlhbyc7XG4gIGVsZW1lbnRzLnB1c2gobWVudSk7XG4gIGVsZW1lbnRzLnB1c2goaW1nUHJldmlld0NvbnRhaW5lcik7XG4gIHJldHVybiBlbGVtZW50cztcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudShtZW51TGlzdCkge1xuICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgZWxlbWVudHMucHVzaChtZW51TGlzdCk7XG4gIHJldHVybiBlbGVtZW50cztcbn0iLCJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdXR0b24oYnRuVGV4dCA9ICcnLCBzdmdJY29uRmlsZU5hbWUgPSBudWxsLCBjYkV2ZW50ID0gdW5kZWZpbmVkKSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBwRWxlbSA9IGJ0blRleHQubGVuZ3RoID4gMCA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSA6IG51bGw7XG4gIC8vIEluc2VydCBpY29uIHdoZW4gZXhpc3RcbiAgaWYoc3ZnSWNvbkZpbGVOYW1lKSB7XG4gICAgY29uc3QgZmlsZUZ1bGxQYXRoID0gJy4vaW1hZ2VzLycgKyBzdmdJY29uRmlsZU5hbWU7XG4gICAgY29uc3QgaW1nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKCdzcmMnLCBmaWxlRnVsbFBhdGgpO1xuICAgIGltZ0VsZW0uc2V0QXR0cmlidXRlKCdhbHQnLCBidG5UZXh0KTtcbiAgICBpbWdFbGVtLmNsYXNzTmFtZSA9ICdpY29uJztcbiAgICBidG4uYXBwZW5kQ2hpbGQoaW1nRWxlbSk7XG4gIH1cbiAgLy8gQWRkIHRleHQgd2hlbiBjb250YWlucyBzb21ldGhpbmdcbiAgaWYoYnRuVGV4dC5sZW5ndGggPiAwKSB7XG4gICAgLy8gU2V0IHVwIHRleHQgZWxlbWVudFxuICAgIHBFbGVtLnRleHRDb250ZW50ID0gYnRuVGV4dDtcbiAgICBidG4uYXBwZW5kQ2hpbGQocEVsZW0pO1xuICB9XG4gIGJ0bi5vbmNsaWNrID0gY2JFdmVudDtcbiAgLy8gU2V0dXAgYnRuIHByb3BlcnRpZXNcbiAgYnRuLmNsYXNzTmFtZSA9ICduYXZCdXR0b24nO1xuICByZXR1cm4gYnRuOyAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWFnZUJ1dHRvbihzdmdJY29uRmlsZU5hbWUsIGNiRXZlbnQgPSB1bmRlZmluZWQpIHtcbiAgcmV0dXJuIGNyZWF0ZUJ1dHRvbignJywgc3ZnSWNvbkZpbGVOYW1lLCBjYkV2ZW50KVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgTWVudUNvbnRyb2xsZXIgfSBmcm9tICdDb250cm9sbGVyL21lbnVDb250cm9sbGVyLmpzJ1xuaW1wb3J0IHsgSG9tZUNvbnRyb2xsZXIgfSBmcm9tICdDb250cm9sbGVyL2hvbWVDb250cm9sbGVyLmpzJ1xuaW1wb3J0IHsgQ29udGFjdENvbnRyb2xsZXIgfSBmcm9tICdDb250cm9sbGVyL2NvbnRhY3RDb250cm9sbGVyLmpzJ1xuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBhZ2VUeXBlID0ge1xuICBob21lOiAnSG9tZScsXG4gIG1lbnU6ICdNZW51JyxcbiAgY29udGFjdDogJ0NvbnRhY3QnLFxufTtcblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tZW51Q29udHJvbGxlciA9IG5ldyBNZW51Q29udHJvbGxlcigpO1xuICAgIHRoaXMuaG9tZUNvbnRyb2xsZXIgPSBuZXcgSG9tZUNvbnRyb2xsZXIoKTtcbiAgICB0aGlzLmNvbnRhY3RDb250cm9sbGVyID0gbmV3IENvbnRhY3RDb250cm9sbGVyKCk7XG4gIH1cbiAgI3Nob3dQYWdlKGVsZW1lbnRzKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhtYWluQ29udGVudCk7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG4gIGNoYW5nZVBhZ2UocGFnZU5hbWUpIHtcbiAgICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgICBzd2l0Y2ggKHBhZ2VOYW1lKSB7XG4gICAgICBjYXNlIHBhZ2VUeXBlLm1lbnU6XG4gICAgICAgIGVsZW1lbnRzID0gdGhpcy5tZW51Q29udHJvbGxlci5wcmVwYXJlTWVudSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgcGFnZVR5cGUuY29udGFjdDpcbiAgICAgICAgZWxlbWVudHMgPSB0aGlzLmNvbnRhY3RDb250cm9sbGVyLnByZXBhcmVDb250YWN0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBwYWdlVHlwZS5ob21lOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZWxlbWVudHMgPSB0aGlzLmhvbWVDb250cm9sbGVyLnByZXBhcmVIb21lKHRoaXMubWVudUNvbnRyb2xsZXIucHJlcGFyZVBpenphUHJldmlldygpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuI3Nob3dQYWdlKGVsZW1lbnRzKTtcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==