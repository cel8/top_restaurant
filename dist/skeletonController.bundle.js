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

/***/ "./src/controller/navController.js":
/*!*****************************************!*\
  !*** ./src/controller/navController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/assets/images/svg/contact.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/svg/contact.svg ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "images/contact.svg";

/***/ }),

/***/ "./src/assets/images/svg/home.svg":
/*!****************************************!*\
  !*** ./src/assets/images/svg/home.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "images/home.svg";

/***/ }),

/***/ "./src/assets/images/svg/menu.svg":
/*!****************************************!*\
  !*** ./src/assets/images/svg/menu.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "images/menu.svg";

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
/*!**********************************************!*\
  !*** ./src/controller/skeletonController.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkeletonController": () => (/* binding */ SkeletonController)
/* harmony export */ });
/* harmony import */ var Assets_images_svg_home_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Assets/images/svg/home.svg */ "./src/assets/images/svg/home.svg");
/* harmony import */ var Assets_images_svg_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Assets/images/svg/menu.svg */ "./src/assets/images/svg/menu.svg");
/* harmony import */ var Assets_images_svg_contact_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Assets/images/svg/contact.svg */ "./src/assets/images/svg/contact.svg");
/* harmony import */ var Controller_navController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Controller/navController.js */ "./src/controller/navController.js");





class SkeletonController {
  constructor() {
    this.navController = new Controller_navController_js__WEBPACK_IMPORTED_MODULE_3__.NavigationController();
  }
  #createButton(btnText, svgIcon = null) {
    const btn = document.createElement('button');
    const pElem = document.createElement('p');
    // Set up text element
    pElem.textContent = btnText;
    // Insert icon when exist
    if(svgIcon) {
      const imgElem = document.createElement('img');
      imgElem.setAttribute('src', svgIcon);
      imgElem.setAttribute('alt', btnText);
      imgElem.className = 'icon';
      btn.appendChild(imgElem);
    }
    btn.appendChild(pElem);
    btn.onclick = (e) => {
      const pElem = e.target.querySelector('p');
      if(pElem === null) return;
      let page;
      if(pElem.textContent === Controller_navController_js__WEBPACK_IMPORTED_MODULE_3__.pageType.contact) {
        page = Controller_navController_js__WEBPACK_IMPORTED_MODULE_3__.pageType.contact;
      } else if(pElem.textContent === Controller_navController_js__WEBPACK_IMPORTED_MODULE_3__.pageType.menu) {
        page = Controller_navController_js__WEBPACK_IMPORTED_MODULE_3__.pageType.menu;
      } else {
        page = Controller_navController_js__WEBPACK_IMPORTED_MODULE_3__.pageType.home;
      }
      this.navController.changePage(page);
    }
    // Setup btn properties
    btn.className = 'navButton';
    return btn;  
  }
  #createNavigationBar() {
    const divElem = document.createElement('div');
    // Fill text in button
    divElem.appendChild(this.#createButton('Home', './images/home.svg'));
    divElem.appendChild(this.#createButton('Menu', './images/menu.svg'));
    divElem.appendChild(this.#createButton('Contact', './images/contact.svg'));
    // Set up class
    divElem.className = 'navigation';
    return divElem;
  }
  #createHeader(header) {
    const divElem = document.createElement('div');
    divElem.textContent = 'Ristorante';
    divElem.className = 'siteTitle'
    // Append child
    header.appendChild(divElem);
    header.appendChild(this.#createNavigationBar());
  }
  #createFooter(footer) {
    const pElem = document.createElement('p');
    const aElem = document.createElement('a');
    const curYear = new Date().getFullYear();
    // Text modify
    pElem.textContent = `Copyright © ${curYear} Alessandro Celotti`;
    aElem.setAttribute('href', 'https://github.com/cel8');
    aElem.setAttribute('target', '_blank');
    // TODO insert icon
    aElem.textContent = 'TODO';
    // Append to footer
    footer.appendChild(pElem);
    footer.appendChild(aElem);
  }
  #createMain(main) {
    const div = document.createElement('div');
    div.className = 'main-content';
    main.appendChild(div);
  }
  createSkeleton(content) {
    // Create content elements
    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');
    // Create elements
    this.#createHeader(header);
    this.#createMain(main);
    this.#createFooter(footer);
    // Append 'em to body#content
    content.appendChild(header);
    content.appendChild(main);
    content.appendChild(footer);
    this.navController.changePage(Controller_navController_js__WEBPACK_IMPORTED_MODULE_3__.pageType.home);
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IseUVBQWdCO0FBQy9DLGVBQWUseUVBQWdCO0FBQy9CLFFBQVEsOEJBQThCLHNFQUFhO0FBQ25ELGVBQWUsc0VBQWE7QUFDNUIsUUFBUTtBQUNSLGVBQWUsc0VBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxzRUFBYTtBQUMvQztBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9jb250cm9sbGVyL21lbnVDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL2NvbnRyb2xsZXIvbmF2Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9kaXNoLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvZGlzaENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvY29udHJvbGxlci9za2VsZXRvbkNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlzaENvbnRhaW5lciB9IGZyb20gJ01vZHVsZXMvZGlzaENvbnRhaW5lci5qcydcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tICdNb2R1bGVzL21lbnUuanMnXG4vLyBBc3NldHMgZGF0YVxuaW1wb3J0IGRhdGFNZW51IGZyb20gJ0Fzc2V0cy9kYXRhL21lbnUuanNvbic7XG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvcGl6emEtbWFyZ2hlcml0YS5qcGcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvcGl6emEtbWFyaW5hcmEuanBnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3BpenphLWNhcHJpY2Npb3NhLmpwZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9waXp6YS1wb21vZG9yaW5pLWJ1ZmFsYS5qcGcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvY2Fsem9uZS1yaXBpZW5vLWFsLWZvcm5vLmpwZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9jYWx6b25lLXJpcGllbm8tZnJpdHRvLmpwZydcblxuZXhwb3J0IGNsYXNzIE1lbnVDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGggPSBbXTtcbiAgICB0aGlzLmN1cklkeFBpenphSW1nID0gMDtcbiAgICB0aGlzLm1lbnUgPSBbXTtcbiAgICB0aGlzLiNsb2FkUGl6emFWZWN0b3IoKTtcbiAgICB0aGlzLiNsb2FkTWVudSgpO1xuICB9XG4gICNsb2FkUGl6emFWZWN0b3IoKSB7XG4gICAgaWYoMCA9PT0gdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgubGVuZ3RoKSB7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKCcuL2ltYWdlL3BpenphLW1hcmdoZXJpdGEuanBnJyk7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKCcuL2ltYWdlL3BpenphLW1hcmluYXJhLmpwZycpO1xuICAgICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgucHVzaCgnLi9pbWFnZS9waXp6YS1jYXByaWNjaW9zYS5qcGcnKTtcbiAgICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLnB1c2goJy4vaW1hZ2UvcGl6emEtcG9tb2RvcmluaS1idWZhbGEuanBnJyk7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKCcuL2ltYWdlL2NhbHpvbmUtcmlwaWVuby1hbC1mb3Juby5qcGcnKTtcbiAgICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLnB1c2goJy4vaW1hZ2UvY2Fsem9uZS1yaXBpZW5vLWZyaXR0by5qcGcnKTtcbiAgICB9XG4gIH1cbiAgI2xvYWRNZW51KCkge1xuICAgIGRhdGFNZW51Lm1hcCgoZWxlbSkgPT4ge1xuICAgICAgY29uc3QgZGlzaENvbnRhaW5lciA9IG5ldyBEaXNoQ29udGFpbmVyKGVsZW1bJ2Rpc2gtbmFtZSddKTtcbiAgICAgIGVsZW1bJ21lbnUnXS5tYXAoKGxpc3QpID0+IHtcbiAgICAgICAgZGlzaENvbnRhaW5lci5hZGREaXNoKGxpc3RbJ25hbWUnXSwgbGlzdFsncHJpY2UnXSwgbGlzdFsnZGVzY3JpcHRpb24nXSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubWVudS5wdXNoKGRpc2hDb250YWluZXIpO1xuICAgIH0pO1xuICB9XG4gIGdldCBhcnJheU1lbnUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVudTtcbiAgfVxuICBwcmVwYXJlTWVudSgpIHtcbiAgICBjb25zdCBkaXZNZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgdGhpcy5tZW51LmZvckVhY2goKGRpc2hDb250YWluZXIpID0+IHtcbiAgICAgIGNvbnN0IHBEaXNoQ29udGFpbmVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGNvbnN0IGdyaWREaXNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAvLyBHZXQgZGlzaCBjb250YWluZXJcbiAgICAgIHBEaXNoQ29udGFpbmVyTmFtZS50ZXh0Q29udGVudCA9IGRpc2hDb250YWluZXIubmFtZTtcbiAgICAgIGNvbnN0IGRpc2hlcyA9IGRpc2hDb250YWluZXIuZGlzaGVzO1xuICAgICAgZGlzaGVzLmZvckVhY2goKGRpc2gpID0+IHtcbiAgICAgICAgY29uc3QgcERpc2hOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBwRGlzaFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBwRGlzaERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwRGlzaE5hbWUudGV4dENvbnRlbnQgPSBkaXNoLm5hbWU7XG4gICAgICAgIHBEaXNoUHJpY2UudGV4dENvbnRlbnQgPSBkaXNoLnByaWNlO1xuICAgICAgICBwRGlzaERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGlzaC5kZXNjcmlwdGlvbjtcbiAgICAgICAgZ3JpZERpc2hDb250YWluZXIuYXBwZW5kQ2hpbGQocERpc2hOYW1lKTtcbiAgICAgICAgZ3JpZERpc2hDb250YWluZXIuYXBwZW5kQ2hpbGQocERpc2hQcmljZSk7XG4gICAgICAgIGdyaWREaXNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHBEaXNoRGVzY3JpcHRpb24pO1xuICAgICAgfSk7XG4gICAgICBkaXZNZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHBEaXNoQ29udGFpbmVyTmFtZSk7XG4gICAgICBkaXZNZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWREaXNoQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY3JlYXRlTWVudShkaXZNZW51Q29udGFpbmVyKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlSG9tZSB9IGZyb20gJ01vZHVsZXMvaG9tZS5qcydcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3QgfSBmcm9tICdNb2R1bGVzL2NvbnRhY3QuanMnXG5pbXBvcnQgeyBNZW51Q29udHJvbGxlciB9IGZyb20gJ0NvbnRyb2xsZXIvbWVudUNvbnRyb2xsZXIuanMnXG5cbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGFnZVR5cGUgPSB7XG4gIGhvbWU6ICdIb21lJyxcbiAgbWVudTogJ01lbnUnLFxuICBjb250YWN0OiAnQ29udGFjdCcsXG59O1xuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1lbnVDb250cm9sbGVyID0gbmV3IE1lbnVDb250cm9sbGVyKCk7XG4gIH1cbiAgI3Nob3dQYWdlKGVsZW1lbnRzKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhtYWluQ29udGVudCk7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG4gIGNoYW5nZVBhZ2UocGFnZU5hbWUpIHtcbiAgICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgICBzd2l0Y2ggKHBhZ2VOYW1lKSB7XG4gICAgICBjYXNlIHBhZ2VUeXBlLm1lbnU6XG4gICAgICAgIGVsZW1lbnRzID0gdGhpcy5tZW51Q29udHJvbGxlci5wcmVwYXJlTWVudSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgcGFnZVR5cGUuY29udGFjdDpcbiAgICAgICAgZWxlbWVudHMgPSBjcmVhdGVDb250YWN0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBwYWdlVHlwZS5ob21lOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZWxlbWVudHMgPSBjcmVhdGVIb21lKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLiNzaG93UGFnZShlbGVtZW50cyk7XG4gIH1cbn0iLCJpbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvbWFwLnBuZydcblxuZnVuY3Rpb24gY3JlYXRlSW5mb1RleHREYXRhKGZhdGhlckRpdiwgdGV4dCwgdGl0bGUgPSBmYWxzZSkge1xuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcC5jbGFzc05hbWUgPSB0aXRsZSA/ICdjb250YWN0VGl0bGUnIDogJ2NvbnRhY3RJbmZvJztcbiAgZmF0aGVyRGl2LmFwcGVuZENoaWxkKHApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmZvKCkge1xuICBjb25zdCBkaXZDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vIENyZWF0ZSBIVE1MIGVsZW1lbnRzIHRleHQgY29udGVudFxuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ0NPTlRBQ1QnLCB0cnVlKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICdUb2xlZG8gU3QsIDk5LCcpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJzgwMDEwLCBOYXBsZXMsIEl0YWx5Jyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnJyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnMDgxIDEyMyA0NTY3Jyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnT1BFTklORyBIT1VSUycsIHRydWUpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ1R1ZXNkYXkgLSBTYXR1cmRheTonKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICcxMjozMCAtIDE1OjAwJyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnMTk6MDAgLSAyNDowMCcpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJycpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ1N1bmRheTogMTk6MDAgLSAyNDowMCcpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ01vbmRheTogY2xvc2VkJyk7XG4gIHJldHVybiBkaXZDb250YWN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbigpIHtcbiAgY29uc3QgZGl2TG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkxvY2F0aW9uLCAnV0hFUkUgV0UgQVJFJywgdHJ1ZSk7XG4gIGNvbnN0IGltZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltYWdlcy9tYXAucG5nJyk7XG4gIGltZ0VsZW0uc2V0QXR0cmlidXRlKCdhbHQnLCAnbWFwTG9jYXRpb24nKTtcbiAgZGl2TG9jYXRpb24uYXBwZW5kQ2hpbGQoaW1nRWxlbSk7XG4gIHJldHVybiBkaXZMb2NhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gIGxldCBlbGVtZW50cyA9IFtdO1xuICBjb25zdCBkaXZNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vIEJvb2sgdGFibGUgYnV0dG9uXG4gIGNvbnN0IGJ0blJlc2VydmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuUmVzZXJ2ZS50ZXh0Q29udGVudCA9ICdCT09LIEEgVEFCTEUnO1xuICAvLyBBZGQgdG8gbWFpbiBncmlkXG4gIGRpdk1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSW5mbygpKTtcbiAgZGl2TWFpbi5hcHBlbmRDaGlsZChjcmVhdGVMb2NhdGlvbigpKTtcbiAgZGl2TWFpbi5hcHBlbmRDaGlsZChidG5SZXNlcnZlKTtcbiAgZGl2TWFpbi5jbGFzc05hbWUgPSAnZ3JpZENvbnRhY3QnO1xuICBlbGVtZW50cy5wdXNoKGRpdk1haW4pO1xuICByZXR1cm4gZWxlbWVudHM7XG59IiwiZXhwb3J0IGNsYXNzIERpc2h7IFxuICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24gfHwgXCJcIjtcbiAgfVxuICBnZXQgZ2V0TmFtZSgpIHsgcmV0dXJuIHRoaXMubmFtZTsgfVxuICBnZXQgZ2V0RGVzY3JpcHRpb24oKSB7IHJldHVybiB0aGlzLmRlc2NyaXB0aW9uOyB9XG4gIGdldCBnZXRQcmljZSgpIHsgcmV0dXJuIHRoaXMucHJpY2U7IH1cbn0iLCJpbXBvcnQgeyBEaXNoIH0gZnJvbSAnTW9kdWxlcy9kaXNoLmpzJ1xuXG5leHBvcnQgY2xhc3MgRGlzaENvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGlzaGVzID0gW107XG4gIH1cbiAgaW5zZXJ0RGlzaChkaXNoKSB7XG4gICAgdGhpcy5kaXNoZXMucHVzaChkaXNoKTtcbiAgfVxuICBhZGREaXNoKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IGRpc2ggPSBuZXcgRGlzaChuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pO1xuICAgIHRoaXMuaW5zZXJ0RGlzaChkaXNoKTtcbiAgfVxuICBnZXQgZ2V0RGlzaE5hbWUoKSB7IHJldHVybiB0aGlzLm5hbWU7IH1cbiAgZ2V0IGdldERpc2hlcygpIHsgcmV0dXJuIHRoaXMuZGlzaGVzOyB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gIGxldCBlbGVtZW50cyA9IFtdO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtZW51LnRleHRDb250ZW50ID0gJ21pYW8nO1xuICBlbGVtZW50cy5wdXNoKG1lbnUpO1xuICByZXR1cm4gZWxlbWVudHM7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUobWVudUxpc3QpIHtcbiAgbGV0IGVsZW1lbnRzID0gW107XG4gIGVsZW1lbnRzLnB1c2gobWVudUxpc3QpO1xuICByZXR1cm4gZWxlbWVudHM7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvc3ZnL2hvbWUuc3ZnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3N2Zy9tZW51LnN2ZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9zdmcvY29udGFjdC5zdmcnXG5pbXBvcnQgeyBwYWdlVHlwZSwgTmF2aWdhdGlvbkNvbnRyb2xsZXIgfSBmcm9tICdDb250cm9sbGVyL25hdkNvbnRyb2xsZXIuanMnXG5cbmV4cG9ydCBjbGFzcyBTa2VsZXRvbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm5hdkNvbnRyb2xsZXIgPSBuZXcgTmF2aWdhdGlvbkNvbnRyb2xsZXIoKTtcbiAgfVxuICAjY3JlYXRlQnV0dG9uKGJ0blRleHQsIHN2Z0ljb24gPSBudWxsKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgcEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgLy8gU2V0IHVwIHRleHQgZWxlbWVudFxuICAgIHBFbGVtLnRleHRDb250ZW50ID0gYnRuVGV4dDtcbiAgICAvLyBJbnNlcnQgaWNvbiB3aGVuIGV4aXN0XG4gICAgaWYoc3ZnSWNvbikge1xuICAgICAgY29uc3QgaW1nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHN2Z0ljb24pO1xuICAgICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGJ0blRleHQpO1xuICAgICAgaW1nRWxlbS5jbGFzc05hbWUgPSAnaWNvbic7XG4gICAgICBidG4uYXBwZW5kQ2hpbGQoaW1nRWxlbSk7XG4gICAgfVxuICAgIGJ0bi5hcHBlbmRDaGlsZChwRWxlbSk7XG4gICAgYnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgcEVsZW0gPSBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCdwJyk7XG4gICAgICBpZihwRWxlbSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgbGV0IHBhZ2U7XG4gICAgICBpZihwRWxlbS50ZXh0Q29udGVudCA9PT0gcGFnZVR5cGUuY29udGFjdCkge1xuICAgICAgICBwYWdlID0gcGFnZVR5cGUuY29udGFjdDtcbiAgICAgIH0gZWxzZSBpZihwRWxlbS50ZXh0Q29udGVudCA9PT0gcGFnZVR5cGUubWVudSkge1xuICAgICAgICBwYWdlID0gcGFnZVR5cGUubWVudTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhZ2UgPSBwYWdlVHlwZS5ob21lO1xuICAgICAgfVxuICAgICAgdGhpcy5uYXZDb250cm9sbGVyLmNoYW5nZVBhZ2UocGFnZSk7XG4gICAgfVxuICAgIC8vIFNldHVwIGJ0biBwcm9wZXJ0aWVzXG4gICAgYnRuLmNsYXNzTmFtZSA9ICduYXZCdXR0b24nO1xuICAgIHJldHVybiBidG47ICBcbiAgfVxuICAjY3JlYXRlTmF2aWdhdGlvbkJhcigpIHtcbiAgICBjb25zdCBkaXZFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gRmlsbCB0ZXh0IGluIGJ1dHRvblxuICAgIGRpdkVsZW0uYXBwZW5kQ2hpbGQodGhpcy4jY3JlYXRlQnV0dG9uKCdIb21lJywgJy4vaW1hZ2VzL2hvbWUuc3ZnJykpO1xuICAgIGRpdkVsZW0uYXBwZW5kQ2hpbGQodGhpcy4jY3JlYXRlQnV0dG9uKCdNZW51JywgJy4vaW1hZ2VzL21lbnUuc3ZnJykpO1xuICAgIGRpdkVsZW0uYXBwZW5kQ2hpbGQodGhpcy4jY3JlYXRlQnV0dG9uKCdDb250YWN0JywgJy4vaW1hZ2VzL2NvbnRhY3Quc3ZnJykpO1xuICAgIC8vIFNldCB1cCBjbGFzc1xuICAgIGRpdkVsZW0uY2xhc3NOYW1lID0gJ25hdmlnYXRpb24nO1xuICAgIHJldHVybiBkaXZFbGVtO1xuICB9XG4gICNjcmVhdGVIZWFkZXIoaGVhZGVyKSB7XG4gICAgY29uc3QgZGl2RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkVsZW0udGV4dENvbnRlbnQgPSAnUmlzdG9yYW50ZSc7XG4gICAgZGl2RWxlbS5jbGFzc05hbWUgPSAnc2l0ZVRpdGxlJ1xuICAgIC8vIEFwcGVuZCBjaGlsZFxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChkaXZFbGVtKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGhpcy4jY3JlYXRlTmF2aWdhdGlvbkJhcigpKTtcbiAgfVxuICAjY3JlYXRlRm9vdGVyKGZvb3Rlcikge1xuICAgIGNvbnN0IHBFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGFFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnN0IGN1clllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgLy8gVGV4dCBtb2RpZnlcbiAgICBwRWxlbS50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgwqkgJHtjdXJZZWFyfSBBbGVzc2FuZHJvIENlbG90dGlgO1xuICAgIGFFbGVtLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vY2VsOCcpO1xuICAgIGFFbGVtLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgIC8vIFRPRE8gaW5zZXJ0IGljb25cbiAgICBhRWxlbS50ZXh0Q29udGVudCA9ICdUT0RPJztcbiAgICAvLyBBcHBlbmQgdG8gZm9vdGVyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHBFbGVtKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYUVsZW0pO1xuICB9XG4gICNjcmVhdGVNYWluKG1haW4pIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gJ21haW4tY29udGVudCc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG4gIGNyZWF0ZVNrZWxldG9uKGNvbnRlbnQpIHtcbiAgICAvLyBDcmVhdGUgY29udGVudCBlbGVtZW50c1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgLy8gQ3JlYXRlIGVsZW1lbnRzXG4gICAgdGhpcy4jY3JlYXRlSGVhZGVyKGhlYWRlcik7XG4gICAgdGhpcy4jY3JlYXRlTWFpbihtYWluKTtcbiAgICB0aGlzLiNjcmVhdGVGb290ZXIoZm9vdGVyKTtcbiAgICAvLyBBcHBlbmQgJ2VtIHRvIGJvZHkjY29udGVudFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgICB0aGlzLm5hdkNvbnRyb2xsZXIuY2hhbmdlUGFnZShwYWdlVHlwZS5ob21lKTtcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==