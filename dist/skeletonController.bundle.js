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
/* harmony import */ var _modules_dishContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../modules/dishContainer.js */ "./src/modules/dishContainer.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../modules/menu.js */ "./src/modules/menu.js");
/* harmony import */ var _assets_data_menu_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../assets/data/menu.json */ "./src/assets/data/menu.json");
/* harmony import */ var _assets_images_pizza_margherita_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../assets/images/pizza-margherita.jpg */ "./src/assets/images/pizza-margherita.jpg");
/* harmony import */ var _assets_images_pizza_marinara_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../assets/images/pizza-marinara.jpg */ "./src/assets/images/pizza-marinara.jpg");
/* harmony import */ var _assets_images_pizza_capricciosa_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../assets/images/pizza-capricciosa.jpg */ "./src/assets/images/pizza-capricciosa.jpg");
/* harmony import */ var _assets_images_pizza_pomodorini_bufala_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../assets/images/pizza-pomodorini-bufala.jpg */ "./src/assets/images/pizza-pomodorini-bufala.jpg");
/* harmony import */ var _assets_images_calzone_ripieno_al_forno_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../assets/images/calzone-ripieno-al-forno.jpg */ "./src/assets/images/calzone-ripieno-al-forno.jpg");
/* harmony import */ var _assets_images_calzone_ripieno_fritto_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../assets/images/calzone-ripieno-fritto.jpg */ "./src/assets/images/calzone-ripieno-fritto.jpg");


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
    _assets_data_menu_json__WEBPACK_IMPORTED_MODULE_2__.map((elem) => {
      const dishContainer = new _modules_dishContainer_js__WEBPACK_IMPORTED_MODULE_0__.DishContainer(elem['dish-name']);
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
      const divDishContainer = document.createElement('div');
      const pDishContainerName = document.createElement('p');
      const gridDishContainer = document.createElement('div');
      // Get dish container
      console.log(typeof(dishContainer));
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
      divDishContainer.appendChild(pDishContainerName);
      divMenuContainer.appendChild(gridDishContainer);
      divMenuContainer.appendChild(divDishContainer);
    });
    return (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenu)(divMenuContainer);
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
/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../modules/home.js */ "./src/modules/home.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../modules/menu.js */ "./src/modules/menu.js");
/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../modules/contact.js */ "./src/modules/contact.js");
/* harmony import */ var _menuController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuController.js */ "./src/controller/menuController.js");





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
    this.menuController = new _menuController_js__WEBPACK_IMPORTED_MODULE_3__.MenuController();
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
        elements = (0,_modules_contact_js__WEBPACK_IMPORTED_MODULE_2__.createContact)();
        break;
      case pageType.home:
      default:
        elements = (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_0__.createHome)();
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
function createContact() {
  let elements = [];
  const menu = document.createElement('p');
  menu.textContent = 'baus';
  elements.push(menu);
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
  constructor({
    name,
    price,
    description
  }) {
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
/* harmony import */ var _dish_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dish.js */ "./src/modules/dish.js");


class DishContainer {
  constructor({
    name
  }) {
    this.name = name;
    this.dishes = [];
  }
  insertDish(dish) {
    this.dishes.push(dish);
  }
  addDish(name, price, description) {
    const dish = new _dish_js__WEBPACK_IMPORTED_MODULE_0__.Dish(name, price, description);
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

function createMenuList() {
}

function createMenu(menuList) {
  let elements = [];
  
  const menu = document.createElement('p');
  menu.textContent = 'ciao';
  elements.push(menu);
  elements.push(menuList);
  return elements;
}

/***/ }),

/***/ "./src/assets/images/calzone-ripieno-al-forno.jpg":
/*!********************************************************!*\
  !*** ./src/assets/images/calzone-ripieno-al-forno.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "calzone-ripieno-al-forno.jpg";

/***/ }),

/***/ "./src/assets/images/calzone-ripieno-fritto.jpg":
/*!******************************************************!*\
  !*** ./src/assets/images/calzone-ripieno-fritto.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "calzone-ripieno-fritto.jpg";

/***/ }),

/***/ "./src/assets/images/pizza-capricciosa.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/pizza-capricciosa.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pizza-capricciosa.jpg";

/***/ }),

/***/ "./src/assets/images/pizza-margherita.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/pizza-margherita.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pizza-margherita.jpg";

/***/ }),

/***/ "./src/assets/images/pizza-marinara.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/pizza-marinara.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pizza-marinara.jpg";

/***/ }),

/***/ "./src/assets/images/pizza-pomodorini-bufala.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/images/pizza-pomodorini-bufala.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pizza-pomodorini-bufala.jpg";

/***/ }),

/***/ "./src/assets/images/svg/contact.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/svg/contact.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "contact.svg";

/***/ }),

/***/ "./src/assets/images/svg/home.svg":
/*!****************************************!*\
  !*** ./src/assets/images/svg/home.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "home.svg";

/***/ }),

/***/ "./src/assets/images/svg/menu.svg":
/*!****************************************!*\
  !*** ./src/assets/images/svg/menu.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "menu.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _assets_images_svg_home_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/images/svg/home.svg */ "./src/assets/images/svg/home.svg");
/* harmony import */ var _assets_images_svg_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assets/images/svg/menu.svg */ "./src/assets/images/svg/menu.svg");
/* harmony import */ var _assets_images_svg_contact_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../assets/images/svg/contact.svg */ "./src/assets/images/svg/contact.svg");
/* harmony import */ var _navController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navController.js */ "./src/controller/navController.js");





class SkeletonController {
  constructor() {
    this.navController = new _navController_js__WEBPACK_IMPORTED_MODULE_3__.NavigationController();
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
      if(pElem.textContent === _navController_js__WEBPACK_IMPORTED_MODULE_3__.pageType.contact) {
        page = _navController_js__WEBPACK_IMPORTED_MODULE_3__.pageType.contact;
      } else if(pElem.textContent === _navController_js__WEBPACK_IMPORTED_MODULE_3__.pageType.menu) {
        page = _navController_js__WEBPACK_IMPORTED_MODULE_3__.pageType.menu;
      } else {
        page = _navController_js__WEBPACK_IMPORTED_MODULE_3__.pageType.home;
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
    this.navController.changePage(_navController_js__WEBPACK_IMPORTED_MODULE_3__.pageType.home);
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLCtEQUFnQjtBQUMvQyxlQUFlLCtEQUFnQjtBQUMvQixRQUFRLDhCQUE4Qiw0REFBYTtBQUNuRCxlQUFlLDREQUFhO0FBQzVCLFFBQVE7QUFDUixlQUFlLDREQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNERBQWE7QUFDL0M7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvY29udHJvbGxlci9tZW51Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9jb250cm9sbGVyL25hdkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvZGlzaC5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2Rpc2hDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvY29udHJvbGxlci9za2VsZXRvbkNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlzaENvbnRhaW5lciB9IGZyb20gJy4vLi4vbW9kdWxlcy9kaXNoQ29udGFpbmVyLmpzJ1xuaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gJy4vLi4vbW9kdWxlcy9tZW51LmpzJ1xuLy8gQXNzZXRzIGRhdGFcbmltcG9ydCBkYXRhTWVudSBmcm9tICcuLy4uL2Fzc2V0cy9kYXRhL21lbnUuanNvbic7XG5pbXBvcnQgJy4vLi4vYXNzZXRzL2ltYWdlcy9waXp6YS1tYXJnaGVyaXRhLmpwZydcbmltcG9ydCAnLi8uLi9hc3NldHMvaW1hZ2VzL3BpenphLW1hcmluYXJhLmpwZydcbmltcG9ydCAnLi8uLi9hc3NldHMvaW1hZ2VzL3BpenphLWNhcHJpY2Npb3NhLmpwZydcbmltcG9ydCAnLi8uLi9hc3NldHMvaW1hZ2VzL3BpenphLXBvbW9kb3JpbmktYnVmYWxhLmpwZydcbmltcG9ydCAnLi8uLi9hc3NldHMvaW1hZ2VzL2NhbHpvbmUtcmlwaWVuby1hbC1mb3Juby5qcGcnXG5pbXBvcnQgJy4vLi4vYXNzZXRzL2ltYWdlcy9jYWx6b25lLXJpcGllbm8tZnJpdHRvLmpwZydcblxuZXhwb3J0IGNsYXNzIE1lbnVDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGggPSBbXTtcbiAgICB0aGlzLmN1cklkeFBpenphSW1nID0gMDtcbiAgICB0aGlzLm1lbnUgPSBbXTtcbiAgICB0aGlzLiNsb2FkUGl6emFWZWN0b3IoKTtcbiAgICB0aGlzLiNsb2FkTWVudSgpO1xuICB9XG4gICNsb2FkUGl6emFWZWN0b3IoKSB7XG4gICAgaWYoMCA9PT0gdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgubGVuZ3RoKSB7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKCcuL2ltYWdlL3BpenphLW1hcmdoZXJpdGEuanBnJyk7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKCcuL2ltYWdlL3BpenphLW1hcmluYXJhLmpwZycpO1xuICAgICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgucHVzaCgnLi9pbWFnZS9waXp6YS1jYXByaWNjaW9zYS5qcGcnKTtcbiAgICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLnB1c2goJy4vaW1hZ2UvcGl6emEtcG9tb2RvcmluaS1idWZhbGEuanBnJyk7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKCcuL2ltYWdlL2NhbHpvbmUtcmlwaWVuby1hbC1mb3Juby5qcGcnKTtcbiAgICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLnB1c2goJy4vaW1hZ2UvY2Fsem9uZS1yaXBpZW5vLWZyaXR0by5qcGcnKTtcbiAgICB9XG4gIH1cbiAgI2xvYWRNZW51KCkge1xuICAgIGRhdGFNZW51Lm1hcCgoZWxlbSkgPT4ge1xuICAgICAgY29uc3QgZGlzaENvbnRhaW5lciA9IG5ldyBEaXNoQ29udGFpbmVyKGVsZW1bJ2Rpc2gtbmFtZSddKTtcbiAgICAgIGVsZW1bJ21lbnUnXS5tYXAoKGxpc3QpID0+IHtcbiAgICAgICAgZGlzaENvbnRhaW5lci5hZGREaXNoKGxpc3RbJ25hbWUnXSwgbGlzdFsncHJpY2UnXSwgbGlzdFsnZGVzY3JpcHRpb24nXSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubWVudS5wdXNoKGRpc2hDb250YWluZXIpO1xuICAgIH0pO1xuICB9XG4gIGdldCBhcnJheU1lbnUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVudTtcbiAgfVxuICBwcmVwYXJlTWVudSgpIHtcbiAgICBjb25zdCBkaXZNZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgdGhpcy5tZW51LmZvckVhY2goKGRpc2hDb250YWluZXIpID0+IHtcbiAgICAgIGNvbnN0IGRpdkRpc2hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IHBEaXNoQ29udGFpbmVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGNvbnN0IGdyaWREaXNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAvLyBHZXQgZGlzaCBjb250YWluZXJcbiAgICAgIGNvbnNvbGUubG9nKHR5cGVvZihkaXNoQ29udGFpbmVyKSk7XG4gICAgICBwRGlzaENvbnRhaW5lck5hbWUudGV4dENvbnRlbnQgPSBkaXNoQ29udGFpbmVyLm5hbWU7XG4gICAgICBjb25zdCBkaXNoZXMgPSBkaXNoQ29udGFpbmVyLmRpc2hlcztcbiAgICAgIGRpc2hlcy5mb3JFYWNoKChkaXNoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBEaXNoTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgcERpc2hQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgcERpc2hEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcERpc2hOYW1lLnRleHRDb250ZW50ID0gZGlzaC5uYW1lO1xuICAgICAgICBwRGlzaFByaWNlLnRleHRDb250ZW50ID0gZGlzaC5wcmljZTtcbiAgICAgICAgcERpc2hEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRpc2guZGVzY3JpcHRpb247XG4gICAgICAgIGdyaWREaXNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHBEaXNoTmFtZSk7XG4gICAgICAgIGdyaWREaXNoQ29udGFpbmVyLmFwcGVuZENoaWxkKHBEaXNoUHJpY2UpO1xuICAgICAgICBncmlkRGlzaENvbnRhaW5lci5hcHBlbmRDaGlsZChwRGlzaERlc2NyaXB0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgZGl2RGlzaENvbnRhaW5lci5hcHBlbmRDaGlsZChwRGlzaENvbnRhaW5lck5hbWUpO1xuICAgICAgZGl2TWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkRGlzaENvbnRhaW5lcik7XG4gICAgICBkaXZNZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkRpc2hDb250YWluZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBjcmVhdGVNZW51KGRpdk1lbnVDb250YWluZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVIb21lIH0gZnJvbSAnLi8uLi9tb2R1bGVzL2hvbWUuanMnXG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSAnLi8uLi9tb2R1bGVzL21lbnUuanMnXG5pbXBvcnQgeyBjcmVhdGVDb250YWN0IH0gZnJvbSAnLi8uLi9tb2R1bGVzL2NvbnRhY3QuanMnXG5pbXBvcnQgeyBNZW51Q29udHJvbGxlciB9IGZyb20gJy4vbWVudUNvbnRyb2xsZXIuanMnXG5cbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGFnZVR5cGUgPSB7XG4gIGhvbWU6ICdIb21lJyxcbiAgbWVudTogJ01lbnUnLFxuICBjb250YWN0OiAnQ29udGFjdCcsXG59O1xuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1lbnVDb250cm9sbGVyID0gbmV3IE1lbnVDb250cm9sbGVyKCk7XG4gIH1cbiAgI3Nob3dQYWdlKGVsZW1lbnRzKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhtYWluQ29udGVudCk7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG4gIGNoYW5nZVBhZ2UocGFnZU5hbWUpIHtcbiAgICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgICBzd2l0Y2ggKHBhZ2VOYW1lKSB7XG4gICAgICBjYXNlIHBhZ2VUeXBlLm1lbnU6XG4gICAgICAgIGVsZW1lbnRzID0gdGhpcy5tZW51Q29udHJvbGxlci5wcmVwYXJlTWVudSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgcGFnZVR5cGUuY29udGFjdDpcbiAgICAgICAgZWxlbWVudHMgPSBjcmVhdGVDb250YWN0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBwYWdlVHlwZS5ob21lOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZWxlbWVudHMgPSBjcmVhdGVIb21lKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLiNzaG93UGFnZShlbGVtZW50cyk7XG4gIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgbGV0IGVsZW1lbnRzID0gW107XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1lbnUudGV4dENvbnRlbnQgPSAnYmF1cyc7XG4gIGVsZW1lbnRzLnB1c2gobWVudSk7XG4gIHJldHVybiBlbGVtZW50cztcbn0iLCJleHBvcnQgY2xhc3MgRGlzaHsgXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBuYW1lLFxuICAgIHByaWNlLFxuICAgIGRlc2NyaXB0aW9uXG4gIH0pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24gfHwgXCJcIjtcbiAgfVxuICBnZXQgZ2V0TmFtZSgpIHsgcmV0dXJuIHRoaXMubmFtZTsgfVxuICBnZXQgZ2V0RGVzY3JpcHRpb24oKSB7IHJldHVybiB0aGlzLmRlc2NyaXB0aW9uOyB9XG4gIGdldCBnZXRQcmljZSgpIHsgcmV0dXJuIHRoaXMucHJpY2U7IH1cbn0iLCJpbXBvcnQgeyBEaXNoIH0gZnJvbSAnLi9kaXNoLmpzJ1xuXG5leHBvcnQgY2xhc3MgRGlzaENvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBuYW1lXG4gIH0pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGlzaGVzID0gW107XG4gIH1cbiAgaW5zZXJ0RGlzaChkaXNoKSB7XG4gICAgdGhpcy5kaXNoZXMucHVzaChkaXNoKTtcbiAgfVxuICBhZGREaXNoKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IGRpc2ggPSBuZXcgRGlzaChuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pO1xuICAgIHRoaXMuaW5zZXJ0RGlzaChkaXNoKTtcbiAgfVxuICBnZXQgZ2V0RGlzaE5hbWUoKSB7IHJldHVybiB0aGlzLm5hbWU7IH1cbiAgZ2V0IGdldERpc2hlcygpIHsgcmV0dXJuIHRoaXMuZGlzaGVzOyB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gIGxldCBlbGVtZW50cyA9IFtdO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtZW51LnRleHRDb250ZW50ID0gJ21pYW8nO1xuICBlbGVtZW50cy5wdXNoKG1lbnUpO1xuICByZXR1cm4gZWxlbWVudHM7XG59IiwiXG5mdW5jdGlvbiBjcmVhdGVNZW51TGlzdCgpIHtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUobWVudUxpc3QpIHtcbiAgbGV0IGVsZW1lbnRzID0gW107XG4gIFxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtZW51LnRleHRDb250ZW50ID0gJ2NpYW8nO1xuICBlbGVtZW50cy5wdXNoKG1lbnUpO1xuICBlbGVtZW50cy5wdXNoKG1lbnVMaXN0KTtcbiAgcmV0dXJuIGVsZW1lbnRzO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy9ob21lLnN2ZydcbmltcG9ydCAnLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy9tZW51LnN2ZydcbmltcG9ydCAnLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy9jb250YWN0LnN2ZydcbmltcG9ydCB7IHBhZ2VUeXBlLCBOYXZpZ2F0aW9uQ29udHJvbGxlciB9IGZyb20gJy4vbmF2Q29udHJvbGxlci5qcydcblxuZXhwb3J0IGNsYXNzIFNrZWxldG9uQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubmF2Q29udHJvbGxlciA9IG5ldyBOYXZpZ2F0aW9uQ29udHJvbGxlcigpO1xuICB9XG4gICNjcmVhdGVCdXR0b24oYnRuVGV4dCwgc3ZnSWNvbiA9IG51bGwpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBwRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAvLyBTZXQgdXAgdGV4dCBlbGVtZW50XG4gICAgcEVsZW0udGV4dENvbnRlbnQgPSBidG5UZXh0O1xuICAgIC8vIEluc2VydCBpY29uIHdoZW4gZXhpc3RcbiAgICBpZihzdmdJY29uKSB7XG4gICAgICBjb25zdCBpbWdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZSgnc3JjJywgc3ZnSWNvbik7XG4gICAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZSgnYWx0JywgYnRuVGV4dCk7XG4gICAgICBpbWdFbGVtLmNsYXNzTmFtZSA9ICdpY29uJztcbiAgICAgIGJ0bi5hcHBlbmRDaGlsZChpbWdFbGVtKTtcbiAgICB9XG4gICAgYnRuLmFwcGVuZENoaWxkKHBFbGVtKTtcbiAgICBidG4ub25jbGljayA9IChlKSA9PiB7XG4gICAgICBjb25zdCBwRWxlbSA9IGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcbiAgICAgIGlmKHBFbGVtID09PSBudWxsKSByZXR1cm47XG4gICAgICBsZXQgcGFnZTtcbiAgICAgIGlmKHBFbGVtLnRleHRDb250ZW50ID09PSBwYWdlVHlwZS5jb250YWN0KSB7XG4gICAgICAgIHBhZ2UgPSBwYWdlVHlwZS5jb250YWN0O1xuICAgICAgfSBlbHNlIGlmKHBFbGVtLnRleHRDb250ZW50ID09PSBwYWdlVHlwZS5tZW51KSB7XG4gICAgICAgIHBhZ2UgPSBwYWdlVHlwZS5tZW51O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFnZSA9IHBhZ2VUeXBlLmhvbWU7XG4gICAgICB9XG4gICAgICB0aGlzLm5hdkNvbnRyb2xsZXIuY2hhbmdlUGFnZShwYWdlKTtcbiAgICB9XG4gICAgLy8gU2V0dXAgYnRuIHByb3BlcnRpZXNcbiAgICBidG4uY2xhc3NOYW1lID0gJ25hdkJ1dHRvbic7XG4gICAgcmV0dXJuIGJ0bjsgIFxuICB9XG4gICNjcmVhdGVOYXZpZ2F0aW9uQmFyKCkge1xuICAgIGNvbnN0IGRpdkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBGaWxsIHRleHQgaW4gYnV0dG9uXG4gICAgZGl2RWxlbS5hcHBlbmRDaGlsZCh0aGlzLiNjcmVhdGVCdXR0b24oJ0hvbWUnLCAnLi9pbWFnZXMvaG9tZS5zdmcnKSk7XG4gICAgZGl2RWxlbS5hcHBlbmRDaGlsZCh0aGlzLiNjcmVhdGVCdXR0b24oJ01lbnUnLCAnLi9pbWFnZXMvbWVudS5zdmcnKSk7XG4gICAgZGl2RWxlbS5hcHBlbmRDaGlsZCh0aGlzLiNjcmVhdGVCdXR0b24oJ0NvbnRhY3QnLCAnLi9pbWFnZXMvY29udGFjdC5zdmcnKSk7XG4gICAgLy8gU2V0IHVwIGNsYXNzXG4gICAgZGl2RWxlbS5jbGFzc05hbWUgPSAnbmF2aWdhdGlvbic7XG4gICAgcmV0dXJuIGRpdkVsZW07XG4gIH1cbiAgI2NyZWF0ZUhlYWRlcihoZWFkZXIpIHtcbiAgICBjb25zdCBkaXZFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2RWxlbS50ZXh0Q29udGVudCA9ICdSaXN0b3JhbnRlJztcbiAgICBkaXZFbGVtLmNsYXNzTmFtZSA9ICdzaXRlVGl0bGUnXG4gICAgLy8gQXBwZW5kIGNoaWxkXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRpdkVsZW0pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aGlzLiNjcmVhdGVOYXZpZ2F0aW9uQmFyKCkpO1xuICB9XG4gICNjcmVhdGVGb290ZXIoZm9vdGVyKSB7XG4gICAgY29uc3QgcEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgYUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29uc3QgY3VyWWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAvLyBUZXh0IG1vZGlmeVxuICAgIHBFbGVtLnRleHRDb250ZW50ID0gYENvcHlyaWdodCDCqSAke2N1clllYXJ9IEFsZXNzYW5kcm8gQ2Vsb3R0aWA7XG4gICAgYUVsZW0uc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9jZWw4Jyk7XG4gICAgYUVsZW0uc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgLy8gVE9ETyBpbnNlcnQgaWNvblxuICAgIGFFbGVtLnRleHRDb250ZW50ID0gJ1RPRE8nO1xuICAgIC8vIEFwcGVuZCB0byBmb290ZXJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQocEVsZW0pO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChhRWxlbSk7XG4gIH1cbiAgI2NyZWF0ZU1haW4obWFpbikge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSAnbWFpbi1jb250ZW50JztcbiAgICBtYWluLmFwcGVuZENoaWxkKGRpdik7XG4gIH1cbiAgY3JlYXRlU2tlbGV0b24oY29udGVudCkge1xuICAgIC8vIENyZWF0ZSBjb250ZW50IGVsZW1lbnRzXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICAvLyBDcmVhdGUgZWxlbWVudHNcbiAgICB0aGlzLiNjcmVhdGVIZWFkZXIoaGVhZGVyKTtcbiAgICB0aGlzLiNjcmVhdGVNYWluKG1haW4pO1xuICAgIHRoaXMuI2NyZWF0ZUZvb3Rlcihmb290ZXIpO1xuICAgIC8vIEFwcGVuZCAnZW0gdG8gYm9keSNjb250ZW50XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIHRoaXMubmF2Q29udHJvbGxlci5jaGFuZ2VQYWdlKHBhZ2VUeXBlLmhvbWUpO1xuICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9