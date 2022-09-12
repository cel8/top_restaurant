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
/* harmony import */ var Utilities_clock_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Utilities/clock.js */ "./src/utilities/clock.js");
/* harmony import */ var Assets_data_menu_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Assets/data/menu.json */ "./src/assets/data/menu.json");
/* harmony import */ var Assets_images_pizza_margherita_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Assets/images/pizza-margherita.jpg */ "./src/assets/images/pizza-margherita.jpg");
/* harmony import */ var Assets_images_pizza_marinara_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Assets/images/pizza-marinara.jpg */ "./src/assets/images/pizza-marinara.jpg");
/* harmony import */ var Assets_images_pizza_capricciosa_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Assets/images/pizza-capricciosa.jpg */ "./src/assets/images/pizza-capricciosa.jpg");
/* harmony import */ var Assets_images_pizza_pomodorini_bufala_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Assets/images/pizza-pomodorini-bufala.jpg */ "./src/assets/images/pizza-pomodorini-bufala.jpg");
/* harmony import */ var Assets_images_calzone_ripieno_al_forno_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Assets/images/calzone-ripieno-al-forno.jpg */ "./src/assets/images/calzone-ripieno-al-forno.jpg");
/* harmony import */ var Assets_images_calzone_ripieno_fritto_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Assets/images/calzone-ripieno-fritto.jpg */ "./src/assets/images/calzone-ripieno-fritto.jpg");
/* harmony import */ var Assets_images_svg_left_button_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Assets/images/svg/left-button.svg */ "./src/assets/images/svg/left-button.svg");
/* harmony import */ var Assets_images_svg_right_button_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Assets/images/svg/right-button.svg */ "./src/assets/images/svg/right-button.svg");




// Assets data










class MenuController {
  constructor() {
    this.vectorPizzaImgPath = [];
    this.curIdxPizzaImg = 0;
    this.menu = [];
    this.updatePreviewClock = null;
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
    Assets_data_menu_json__WEBPACK_IMPORTED_MODULE_4__.map((elem) => {
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
    const changeImageCbEvent = () => {
      const imgPizzaPreview = document.querySelector('#idPreviewPizza');
      if(imgPizzaPreview) {
        this.curIdxPizzaImg = (this.curIdxPizzaImg + 1) % this.vectorPizzaImgPath.length;
        imgPizzaPreview.setAttribute('src', this.vectorPizzaImgPath[this.curIdxPizzaImg]);
      }
    }
    const divPreviewContainer = document.createElement('div');
    const imgPizzaPreview = document.createElement('img');
    imgPizzaPreview.setAttribute('src', this.vectorPizzaImgPath[this.curIdxPizzaImg]);
    imgPizzaPreview.setAttribute('alt', 'pizza preview');
    imgPizzaPreview.id = 'idPreviewPizza';
    divPreviewContainer.appendChild(this.#loadPreviewButton());
    divPreviewContainer.appendChild(imgPizzaPreview);
    divPreviewContainer.appendChild(this.#loadPreviewButton(true));

    // Automatic update
    if(!this.updatePreviewClock) {
      this.updatePreviewClock = new Utilities_clock_js__WEBPACK_IMPORTED_MODULE_3__.Clock('h:m:s', changeImageCbEvent, 5000);
      this.updatePreviewClock.start();
    }
    
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

/***/ "./src/utilities/clock.js":
/*!********************************!*\
  !*** ./src/utilities/clock.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Clock": () => (/* binding */ Clock)
/* harmony export */ });
class Clock {
  constructor(template, cbFunc, updateTimeSec) {
    this.template = template;
    this.eventCbFunc = cbFunc;
    this.updateTimeSec = updateTimeSec;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let curTime = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    this.eventCbFunc();
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.updateTimeSec);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ042RDtBQUNBO0FBQ007O0FBRW5FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsOEJBQThCLHdFQUFjO0FBQzVDLDhCQUE4Qix3RUFBYztBQUM1QyxpQ0FBaUMsOEVBQWlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL2NvbnRyb2xsZXIvY29udGFjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvY29udHJvbGxlci9ob21lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9jb250cm9sbGVyL21lbnVDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2Rpc2guanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9kaXNoQ29udGFpbmVyLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvdXRpbGl0aWVzL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy91dGlsaXRpZXMvY2xvY2suanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9jb250cm9sbGVyL25hdkNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGFjdCB9IGZyb20gJ01vZHVsZXMvY29udGFjdC5qcydcblxuZXhwb3J0IGNsYXNzIENvbnRhY3RDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbiAgcHJlcGFyZUNvbnRhY3QoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNvbnRhY3QoKTtcbiAgfVxufSIsImltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tICdNb2R1bGVzL2hvbWUuanMnXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG4gIHByZXBhcmVIb21lKGltZ1ByZXZpZXdDb250YWluZXIpIHtcbiAgICByZXR1cm4gY3JlYXRlSG9tZShpbWdQcmV2aWV3Q29udGFpbmVyKTtcbiAgfVxufSIsImltcG9ydCB7IERpc2hDb250YWluZXIgfSBmcm9tICdNb2R1bGVzL2Rpc2hDb250YWluZXIuanMnXG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSAnTW9kdWxlcy9tZW51LmpzJ1xuaW1wb3J0IHsgY3JlYXRlSW1hZ2VCdXR0b24gfSBmcm9tICdVdGlsaXRpZXMvYnV0dG9uLmpzJ1xuaW1wb3J0IHsgQ2xvY2sgfSBmcm9tICdVdGlsaXRpZXMvY2xvY2suanMnXG4vLyBBc3NldHMgZGF0YVxuaW1wb3J0IGRhdGFNZW51IGZyb20gJ0Fzc2V0cy9kYXRhL21lbnUuanNvbic7XG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvcGl6emEtbWFyZ2hlcml0YS5qcGcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvcGl6emEtbWFyaW5hcmEuanBnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3BpenphLWNhcHJpY2Npb3NhLmpwZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9waXp6YS1wb21vZG9yaW5pLWJ1ZmFsYS5qcGcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvY2Fsem9uZS1yaXBpZW5vLWFsLWZvcm5vLmpwZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9jYWx6b25lLXJpcGllbm8tZnJpdHRvLmpwZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9zdmcvbGVmdC1idXR0b24uc3ZnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3N2Zy9yaWdodC1idXR0b24uc3ZnJ1xuXG5leHBvcnQgY2xhc3MgTWVudUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aCA9IFtdO1xuICAgIHRoaXMuY3VySWR4UGl6emFJbWcgPSAwO1xuICAgIHRoaXMubWVudSA9IFtdO1xuICAgIHRoaXMudXBkYXRlUHJldmlld0Nsb2NrID0gbnVsbDtcbiAgICB0aGlzLiNsb2FkUGl6emFWZWN0b3IoKTtcbiAgICB0aGlzLiNsb2FkTWVudSgpO1xuICB9XG4gICNsb2FkUGl6emFWZWN0b3IoKSB7XG4gICAgaWYoMCA9PT0gdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgubGVuZ3RoKSB7XG4gICAgICBjb25zdCBpbWdSb290UGF0aCA9ICcuL2ltYWdlcy8nO1xuICAgICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgucHVzaChpbWdSb290UGF0aCArICdwaXp6YS1tYXJnaGVyaXRhLmpwZycpO1xuICAgICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgucHVzaChpbWdSb290UGF0aCArICdwaXp6YS1tYXJpbmFyYS5qcGcnKTtcbiAgICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLnB1c2goaW1nUm9vdFBhdGggKyAncGl6emEtY2FwcmljY2lvc2EuanBnJyk7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKGltZ1Jvb3RQYXRoICsgJ3BpenphLXBvbW9kb3JpbmktYnVmYWxhLmpwZycpO1xuICAgICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgucHVzaChpbWdSb290UGF0aCArICdjYWx6b25lLXJpcGllbm8tYWwtZm9ybm8uanBnJyk7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKGltZ1Jvb3RQYXRoICsgJ2NhbHpvbmUtcmlwaWVuby1mcml0dG8uanBnJyk7XG4gICAgfVxuICB9XG4gICNsb2FkTWVudSgpIHtcbiAgICBkYXRhTWVudS5tYXAoKGVsZW0pID0+IHtcbiAgICAgIGNvbnN0IGRpc2hDb250YWluZXIgPSBuZXcgRGlzaENvbnRhaW5lcihlbGVtWydkaXNoLW5hbWUnXSk7XG4gICAgICBlbGVtWydtZW51J10ubWFwKChsaXN0KSA9PiB7XG4gICAgICAgIGRpc2hDb250YWluZXIuYWRkRGlzaChsaXN0WyduYW1lJ10sIGxpc3RbJ3ByaWNlJ10sIGxpc3RbJ2Rlc2NyaXB0aW9uJ10pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm1lbnUucHVzaChkaXNoQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxuICBnZXQgYXJyYXlNZW51KCkge1xuICAgIHJldHVybiB0aGlzLm1lbnU7XG4gIH1cbiAgI2xvYWRQcmV2aWV3QnV0dG9uKGlzUmlnaHQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGNoYW5nZUltYWdlQ2JFdmVudCA9IChlKSA9PiB7XG4gICAgICBjb25zdCBpbWdQaXp6YVByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaWRQcmV2aWV3UGl6emEnKTtcbiAgICAgIGlmKGlzUmlnaHQpIHtcbiAgICAgICAgdGhpcy5jdXJJZHhQaXp6YUltZyA9ICh0aGlzLmN1cklkeFBpenphSW1nICsgMSkgJSB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cklkeFBpenphSW1nID0gKHRoaXMuY3VySWR4UGl6emFJbWcgLSAxKSAlIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIGltZ1BpenphUHJldmlldy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoW3RoaXMuY3VySWR4UGl6emFJbWddKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUltYWdlQnV0dG9uKGlzUmlnaHQgPyAncmlnaHQtYnV0dG9uLnN2ZycgOiAnbGVmdC1idXR0b24uc3ZnJywgY2hhbmdlSW1hZ2VDYkV2ZW50KTtcbiAgfVxuICBwcmVwYXJlUGl6emFQcmV2aWV3KCkge1xuICAgIGNvbnN0IGNoYW5nZUltYWdlQ2JFdmVudCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGltZ1BpenphUHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpZFByZXZpZXdQaXp6YScpO1xuICAgICAgaWYoaW1nUGl6emFQcmV2aWV3KSB7XG4gICAgICAgIHRoaXMuY3VySWR4UGl6emFJbWcgPSAodGhpcy5jdXJJZHhQaXp6YUltZyArIDEpICUgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgubGVuZ3RoO1xuICAgICAgICBpbWdQaXp6YVByZXZpZXcuc2V0QXR0cmlidXRlKCdzcmMnLCB0aGlzLnZlY3RvclBpenphSW1nUGF0aFt0aGlzLmN1cklkeFBpenphSW1nXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGRpdlByZXZpZXdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbWdQaXp6YVByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWdQaXp6YVByZXZpZXcuc2V0QXR0cmlidXRlKCdzcmMnLCB0aGlzLnZlY3RvclBpenphSW1nUGF0aFt0aGlzLmN1cklkeFBpenphSW1nXSk7XG4gICAgaW1nUGl6emFQcmV2aWV3LnNldEF0dHJpYnV0ZSgnYWx0JywgJ3BpenphIHByZXZpZXcnKTtcbiAgICBpbWdQaXp6YVByZXZpZXcuaWQgPSAnaWRQcmV2aWV3UGl6emEnO1xuICAgIGRpdlByZXZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4jbG9hZFByZXZpZXdCdXR0b24oKSk7XG4gICAgZGl2UHJldmlld0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdQaXp6YVByZXZpZXcpO1xuICAgIGRpdlByZXZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4jbG9hZFByZXZpZXdCdXR0b24odHJ1ZSkpO1xuXG4gICAgLy8gQXV0b21hdGljIHVwZGF0ZVxuICAgIGlmKCF0aGlzLnVwZGF0ZVByZXZpZXdDbG9jaykge1xuICAgICAgdGhpcy51cGRhdGVQcmV2aWV3Q2xvY2sgPSBuZXcgQ2xvY2soJ2g6bTpzJywgY2hhbmdlSW1hZ2VDYkV2ZW50LCA1MDAwKTtcbiAgICAgIHRoaXMudXBkYXRlUHJldmlld0Nsb2NrLnN0YXJ0KCk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBkaXZQcmV2aWV3Q29udGFpbmVyO1xuICB9XG4gIHByZXBhcmVNZW51KCkge1xuICAgIGNvbnN0IGRpdk1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICB0aGlzLm1lbnUuZm9yRWFjaCgoZGlzaENvbnRhaW5lcikgPT4ge1xuICAgICAgY29uc3QgcERpc2hDb250YWluZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgY29uc3QgZ3JpZERpc2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIC8vIEdldCBkaXNoIGNvbnRhaW5lclxuICAgICAgcERpc2hDb250YWluZXJOYW1lLnRleHRDb250ZW50ID0gZGlzaENvbnRhaW5lci5uYW1lO1xuICAgICAgY29uc3QgZGlzaGVzID0gZGlzaENvbnRhaW5lci5kaXNoZXM7XG4gICAgICBkaXNoZXMuZm9yRWFjaCgoZGlzaCkgPT4ge1xuICAgICAgICBjb25zdCBwRGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHBEaXNoUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHBEaXNoRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBEaXNoTmFtZS50ZXh0Q29udGVudCA9IGRpc2gubmFtZTtcbiAgICAgICAgcERpc2hQcmljZS50ZXh0Q29udGVudCA9IGRpc2gucHJpY2U7XG4gICAgICAgIHBEaXNoRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkaXNoLmRlc2NyaXB0aW9uO1xuICAgICAgICBncmlkRGlzaENvbnRhaW5lci5hcHBlbmRDaGlsZChwRGlzaE5hbWUpO1xuICAgICAgICBncmlkRGlzaENvbnRhaW5lci5hcHBlbmRDaGlsZChwRGlzaFByaWNlKTtcbiAgICAgICAgZ3JpZERpc2hDb250YWluZXIuYXBwZW5kQ2hpbGQocERpc2hEZXNjcmlwdGlvbik7XG4gICAgICB9KTtcbiAgICAgIGRpdk1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocERpc2hDb250YWluZXJOYW1lKTtcbiAgICAgIGRpdk1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZERpc2hDb250YWluZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBjcmVhdGVNZW51KGRpdk1lbnVDb250YWluZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvbWFwLnBuZydcblxuZnVuY3Rpb24gY3JlYXRlSW5mb1RleHREYXRhKGZhdGhlckRpdiwgdGV4dCwgdGl0bGUgPSBmYWxzZSkge1xuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcC5jbGFzc05hbWUgPSB0aXRsZSA/ICdjb250YWN0VGl0bGUnIDogJ2NvbnRhY3RJbmZvJztcbiAgZmF0aGVyRGl2LmFwcGVuZENoaWxkKHApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmZvKCkge1xuICBjb25zdCBkaXZDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vIENyZWF0ZSBIVE1MIGVsZW1lbnRzIHRleHQgY29udGVudFxuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ0NPTlRBQ1QnLCB0cnVlKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICdUb2xlZG8gU3QsIDk5LCcpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJzgwMDEwLCBOYXBsZXMsIEl0YWx5Jyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnJyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnMDgxIDEyMyA0NTY3Jyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnT1BFTklORyBIT1VSUycsIHRydWUpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ1R1ZXNkYXkgLSBTYXR1cmRheTonKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICcxMjozMCAtIDE1OjAwJyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnMTk6MDAgLSAyNDowMCcpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJycpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ1N1bmRheTogMTk6MDAgLSAyNDowMCcpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ01vbmRheTogY2xvc2VkJyk7XG4gIHJldHVybiBkaXZDb250YWN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbigpIHtcbiAgY29uc3QgZGl2TG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkxvY2F0aW9uLCAnV0hFUkUgV0UgQVJFJywgdHJ1ZSk7XG4gIGNvbnN0IGltZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltYWdlcy9tYXAucG5nJyk7XG4gIGltZ0VsZW0uc2V0QXR0cmlidXRlKCdhbHQnLCAnbWFwTG9jYXRpb24nKTtcbiAgZGl2TG9jYXRpb24uYXBwZW5kQ2hpbGQoaW1nRWxlbSk7XG4gIHJldHVybiBkaXZMb2NhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gIGxldCBlbGVtZW50cyA9IFtdO1xuICBjb25zdCBkaXZNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vIEJvb2sgdGFibGUgYnV0dG9uXG4gIGNvbnN0IGJ0blJlc2VydmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuUmVzZXJ2ZS50ZXh0Q29udGVudCA9ICdCT09LIEEgVEFCTEUnO1xuICAvLyBBZGQgdG8gbWFpbiBncmlkXG4gIGRpdk1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSW5mbygpKTtcbiAgZGl2TWFpbi5hcHBlbmRDaGlsZChjcmVhdGVMb2NhdGlvbigpKTtcbiAgZGl2TWFpbi5hcHBlbmRDaGlsZChidG5SZXNlcnZlKTtcbiAgZGl2TWFpbi5jbGFzc05hbWUgPSAnZ3JpZENvbnRhY3QnO1xuICBlbGVtZW50cy5wdXNoKGRpdk1haW4pO1xuICByZXR1cm4gZWxlbWVudHM7XG59IiwiZXhwb3J0IGNsYXNzIERpc2h7IFxuICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24gfHwgXCJcIjtcbiAgfVxuICBnZXQgZ2V0TmFtZSgpIHsgcmV0dXJuIHRoaXMubmFtZTsgfVxuICBnZXQgZ2V0RGVzY3JpcHRpb24oKSB7IHJldHVybiB0aGlzLmRlc2NyaXB0aW9uOyB9XG4gIGdldCBnZXRQcmljZSgpIHsgcmV0dXJuIHRoaXMucHJpY2U7IH1cbn0iLCJpbXBvcnQgeyBEaXNoIH0gZnJvbSAnTW9kdWxlcy9kaXNoLmpzJ1xuXG5leHBvcnQgY2xhc3MgRGlzaENvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGlzaGVzID0gW107XG4gIH1cbiAgaW5zZXJ0RGlzaChkaXNoKSB7XG4gICAgdGhpcy5kaXNoZXMucHVzaChkaXNoKTtcbiAgfVxuICBhZGREaXNoKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IGRpc2ggPSBuZXcgRGlzaChuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pO1xuICAgIHRoaXMuaW5zZXJ0RGlzaChkaXNoKTtcbiAgfVxuICBnZXQgZ2V0RGlzaE5hbWUoKSB7IHJldHVybiB0aGlzLm5hbWU7IH1cbiAgZ2V0IGdldERpc2hlcygpIHsgcmV0dXJuIHRoaXMuZGlzaGVzOyB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWUoaW1nUHJldmlld0NvbnRhaW5lcikge1xuICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWVudS50ZXh0Q29udGVudCA9ICdtaWFvJztcbiAgZWxlbWVudHMucHVzaChtZW51KTtcbiAgZWxlbWVudHMucHVzaChpbWdQcmV2aWV3Q29udGFpbmVyKTtcbiAgcmV0dXJuIGVsZW1lbnRzO1xufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51KG1lbnVMaXN0KSB7XG4gIGxldCBlbGVtZW50cyA9IFtdO1xuICBlbGVtZW50cy5wdXNoKG1lbnVMaXN0KTtcbiAgcmV0dXJuIGVsZW1lbnRzO1xufSIsIlxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihidG5UZXh0ID0gJycsIHN2Z0ljb25GaWxlTmFtZSA9IG51bGwsIGNiRXZlbnQgPSB1bmRlZmluZWQpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IHBFbGVtID0gYnRuVGV4dC5sZW5ndGggPiAwID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpIDogbnVsbDtcbiAgLy8gSW5zZXJ0IGljb24gd2hlbiBleGlzdFxuICBpZihzdmdJY29uRmlsZU5hbWUpIHtcbiAgICBjb25zdCBmaWxlRnVsbFBhdGggPSAnLi9pbWFnZXMvJyArIHN2Z0ljb25GaWxlTmFtZTtcbiAgICBjb25zdCBpbWdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGZpbGVGdWxsUGF0aCk7XG4gICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGJ0blRleHQpO1xuICAgIGltZ0VsZW0uY2xhc3NOYW1lID0gJ2ljb24nO1xuICAgIGJ0bi5hcHBlbmRDaGlsZChpbWdFbGVtKTtcbiAgfVxuICAvLyBBZGQgdGV4dCB3aGVuIGNvbnRhaW5zIHNvbWV0aGluZ1xuICBpZihidG5UZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAvLyBTZXQgdXAgdGV4dCBlbGVtZW50XG4gICAgcEVsZW0udGV4dENvbnRlbnQgPSBidG5UZXh0O1xuICAgIGJ0bi5hcHBlbmRDaGlsZChwRWxlbSk7XG4gIH1cbiAgYnRuLm9uY2xpY2sgPSBjYkV2ZW50O1xuICAvLyBTZXR1cCBidG4gcHJvcGVydGllc1xuICBidG4uY2xhc3NOYW1lID0gJ25hdkJ1dHRvbic7XG4gIHJldHVybiBidG47ICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltYWdlQnV0dG9uKHN2Z0ljb25GaWxlTmFtZSwgY2JFdmVudCA9IHVuZGVmaW5lZCkge1xuICByZXR1cm4gY3JlYXRlQnV0dG9uKCcnLCBzdmdJY29uRmlsZU5hbWUsIGNiRXZlbnQpXG59IiwiZXhwb3J0IGNsYXNzIENsb2NrIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGUsIGNiRnVuYywgdXBkYXRlVGltZVNlYykge1xuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB0aGlzLmV2ZW50Q2JGdW5jID0gY2JGdW5jO1xuICAgIHRoaXMudXBkYXRlVGltZVNlYyA9IHVwZGF0ZVRpbWVTZWM7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGlmIChob3VycyA8IDEwKSBob3VycyA9ICcwJyArIGhvdXJzO1xuXG4gICAgbGV0IG1pbnMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgICBpZiAobWlucyA8IDEwKSBtaW5zID0gJzAnICsgbWlucztcblxuICAgIGxldCBzZWNzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgaWYgKHNlY3MgPCAxMCkgc2VjcyA9ICcwJyArIHNlY3M7XG5cbiAgICBsZXQgY3VyVGltZSA9IHRoaXMudGVtcGxhdGVcbiAgICAgIC5yZXBsYWNlKCdoJywgaG91cnMpXG4gICAgICAucmVwbGFjZSgnbScsIG1pbnMpXG4gICAgICAucmVwbGFjZSgncycsIHNlY3MpO1xuXG4gICAgdGhpcy5ldmVudENiRnVuYygpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5yZW5kZXIoKSwgdGhpcy51cGRhdGVUaW1lU2VjKTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgTWVudUNvbnRyb2xsZXIgfSBmcm9tICdDb250cm9sbGVyL21lbnVDb250cm9sbGVyLmpzJ1xuaW1wb3J0IHsgSG9tZUNvbnRyb2xsZXIgfSBmcm9tICdDb250cm9sbGVyL2hvbWVDb250cm9sbGVyLmpzJ1xuaW1wb3J0IHsgQ29udGFjdENvbnRyb2xsZXIgfSBmcm9tICdDb250cm9sbGVyL2NvbnRhY3RDb250cm9sbGVyLmpzJ1xuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBhZ2VUeXBlID0ge1xuICBob21lOiAnSG9tZScsXG4gIG1lbnU6ICdNZW51JyxcbiAgY29udGFjdDogJ0NvbnRhY3QnLFxufTtcblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tZW51Q29udHJvbGxlciA9IG5ldyBNZW51Q29udHJvbGxlcigpO1xuICAgIHRoaXMuaG9tZUNvbnRyb2xsZXIgPSBuZXcgSG9tZUNvbnRyb2xsZXIoKTtcbiAgICB0aGlzLmNvbnRhY3RDb250cm9sbGVyID0gbmV3IENvbnRhY3RDb250cm9sbGVyKCk7XG4gIH1cbiAgI3Nob3dQYWdlKGVsZW1lbnRzKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhtYWluQ29udGVudCk7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG4gIGNoYW5nZVBhZ2UocGFnZU5hbWUpIHtcbiAgICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgICBzd2l0Y2ggKHBhZ2VOYW1lKSB7XG4gICAgICBjYXNlIHBhZ2VUeXBlLm1lbnU6XG4gICAgICAgIGVsZW1lbnRzID0gdGhpcy5tZW51Q29udHJvbGxlci5wcmVwYXJlTWVudSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgcGFnZVR5cGUuY29udGFjdDpcbiAgICAgICAgZWxlbWVudHMgPSB0aGlzLmNvbnRhY3RDb250cm9sbGVyLnByZXBhcmVDb250YWN0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBwYWdlVHlwZS5ob21lOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZWxlbWVudHMgPSB0aGlzLmhvbWVDb250cm9sbGVyLnByZXBhcmVIb21lKHRoaXMubWVudUNvbnRyb2xsZXIucHJlcGFyZVBpenphUHJldmlldygpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuI3Nob3dQYWdlKGVsZW1lbnRzKTtcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==