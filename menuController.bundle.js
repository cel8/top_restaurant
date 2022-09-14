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

/***/ }),

/***/ "./src/utilities/button.js":
/*!*********************************!*\
  !*** ./src/utilities/button.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    this.running = false;
  }

  #render() {
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

  get isRunning() {
    return this.running;
  }

  stop() {
    clearInterval(this.timer);
    this.running = false;
  }

  start() {
    this.running = true;
    this.#render();
    this.timer = setInterval(() => this.#render(), this.updateTimeSec);
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

/***/ "./src/assets/images/svg/play-pause-button.svg":
/*!*****************************************************!*\
  !*** ./src/assets/images/svg/play-pause-button.svg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "images/play-pause-button.svg";

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
/* harmony import */ var Assets_images_svg_play_pause_button_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Assets/images/svg/play-pause-button.svg */ "./src/assets/images/svg/play-pause-button.svg");




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
  #loadPreviewButton(iconName) {
    const btnCbEvent = (_) => {
      if(iconName.includes("play-pause")) { 
        // Manage event timer
        if(this.updatePreviewClock) {
          if(this.updatePreviewClock.isRunning) {
            this.updatePreviewClock.stop()
          } else {
            this.updatePreviewClock.start();
          }
        }
      } else {
        if(iconName.includes("right")) {
          this.curIdxPizzaImg = (this.curIdxPizzaImg + 1) % this.vectorPizzaImgPath.length;
        } else {
          this.curIdxPizzaImg = (this.curIdxPizzaImg - 1) % this.vectorPizzaImgPath.length;
          // Handle negative modulo
          if(this.curIdxPizzaImg < 0) {
            this.curIdxPizzaImg = ((this.vectorPizzaImgPath.length - 1 >= 0) ? this.vectorPizzaImgPath.length - 1 : 0);
          } 
        }
        (0,Modules_menu_js__WEBPACK_IMPORTED_MODULE_1__.changePizzaPreview)(this.vectorPizzaImgPath[this.curIdxPizzaImg]);
      }
    }
    return (0,Utilities_button_js__WEBPACK_IMPORTED_MODULE_2__.createImageButton)(iconName, btnCbEvent);
  }
  preparePizzaPreview() {
    let buttons = [];
    const changeImageCbEvent = () => {
      this.curIdxPizzaImg = (this.curIdxPizzaImg + 1) % this.vectorPizzaImgPath.length;
      (0,Modules_menu_js__WEBPACK_IMPORTED_MODULE_1__.changePizzaPreview)(this.vectorPizzaImgPath[this.curIdxPizzaImg]);
    }
    // Automatic update
    if(!this.updatePreviewClock) {
      this.updatePreviewClock = new Utilities_clock_js__WEBPACK_IMPORTED_MODULE_3__.Clock('h:m:s', changeImageCbEvent, 5000);
    }
    // Create control buttons
    buttons.push(this.#loadPreviewButton('left-button.svg'));
    buttons.push(this.#loadPreviewButton('play-pause-button.svg'));
    buttons.push(this.#loadPreviewButton('right-button.svg'));
    // Create preview container
    const divPreviewContainer = (0,Modules_menu_js__WEBPACK_IMPORTED_MODULE_1__.createPreviewContainer)(this.vectorPizzaImgPath[this.curIdxPizzaImg], buttons);
    return divPreviewContainer;
  }
  prepareMenu() {
    // Create the menu container
    const divMenuContainer = (0,Modules_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenuContainer)();
    // For each dish container
    this.menu.forEach((dishContainer) => {
      // Create the dish container
      const divDishContainer = (0,Modules_menu_js__WEBPACK_IMPORTED_MODULE_1__.createDishContainer)()
      // Add inside the container the dishes
      dishContainer.dishes.forEach((dish) => {
        ;(0,Modules_menu_js__WEBPACK_IMPORTED_MODULE_1__.addDish)(divDishContainer, dish);
      });
      // Add inside the menu container the dish container
      (0,Modules_menu_js__WEBPACK_IMPORTED_MODULE_1__.addDishContainer)(divMenuContainer, dishContainer.name, divDishContainer);
    });
    return (0,Modules_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenu)(divMenuContainer);
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNSO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRUFBa0I7QUFDMUI7QUFDQTtBQUNBLFdBQVcsc0VBQWlCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1FQUFrQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MscURBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVFQUFzQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixvRUFBbUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9FQUFtQjtBQUNsRDtBQUNBO0FBQ0EsUUFBUSx5REFBTztBQUNmLE9BQU87QUFDUDtBQUNBLE1BQU0saUVBQWdCO0FBQ3RCLEtBQUs7QUFDTCxXQUFXLDJEQUFVO0FBQ3JCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2Rpc2guanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9kaXNoQ29udGFpbmVyLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy91dGlsaXRpZXMvYnV0dG9uLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL3V0aWxpdGllcy9jbG9jay5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL2NvbnRyb2xsZXIvbWVudUNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIERpc2h7IFxuICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24gfHwgXCJcIjtcbiAgfVxuICBnZXQgZ2V0TmFtZSgpIHsgcmV0dXJuIHRoaXMubmFtZTsgfVxuICBnZXQgZ2V0RGVzY3JpcHRpb24oKSB7IHJldHVybiB0aGlzLmRlc2NyaXB0aW9uOyB9XG4gIGdldCBnZXRQcmljZSgpIHsgcmV0dXJuIHRoaXMucHJpY2U7IH1cbn0iLCJpbXBvcnQgeyBEaXNoIH0gZnJvbSAnTW9kdWxlcy9kaXNoLmpzJ1xuXG5leHBvcnQgY2xhc3MgRGlzaENvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGlzaGVzID0gW107XG4gIH1cbiAgaW5zZXJ0RGlzaChkaXNoKSB7XG4gICAgdGhpcy5kaXNoZXMucHVzaChkaXNoKTtcbiAgfVxuICBhZGREaXNoKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IGRpc2ggPSBuZXcgRGlzaChuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pO1xuICAgIHRoaXMuaW5zZXJ0RGlzaChkaXNoKTtcbiAgfVxuICBnZXQgZ2V0RGlzaE5hbWUoKSB7IHJldHVybiB0aGlzLm5hbWU7IH1cbiAgZ2V0IGdldERpc2hlcygpIHsgcmV0dXJuIHRoaXMuZGlzaGVzOyB9XG59IiwiZnVuY3Rpb24gY3JlYXRlUHJldmlld1BpenphQ29udGFpbmVyKGRpdkNvbnRhaW5lciwgaW1hZ2VGaWxlTmFtZSkge1xuICBjb25zdCBkaXZQaXp6YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpbWdQaXp6YVByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgLy8gSW1hZ2UgcHJldmlld1xuICBpbWdQaXp6YVByZXZpZXcuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWFnZUZpbGVOYW1lKTtcbiAgaW1nUGl6emFQcmV2aWV3LnNldEF0dHJpYnV0ZSgnYWx0JywgJ3BpenphIHByZXZpZXcnKTtcbiAgaW1nUGl6emFQcmV2aWV3LmlkID0gJ2lkUHJldmlld1BpenphJztcbiAgLy8gQWRkIGNsYXNzXG4gIGRpdlBpenphQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdwcmV2aWV3UGl6emFDb250YWluZXInO1xuICAvLyBBZGQgaW1hZ2UgaW4gcGl6emEgY29udGFpbmVyXG4gIGRpdlBpenphQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ1BpenphUHJldmlldyk7XG4gIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZQaXp6YUNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByZXZpZXdDb250cm9sKGRpdkNvbnRhaW5lciwgYnV0dG9ucyA9IG51bGwpIHtcbiAgaWYoKGJ1dHRvbnMpIHx8IChidXR0b25zLmxlbmd0aCA+IDApKSB7XG4gICAgLy8gQ3JlYXRlIGNvbnRhaW5lciBjb250cm9sIGZvciBwcmV2aWV3XG4gICAgY29uc3QgZGl2Q29udGFpbmVyQ3RybCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkNvbnRhaW5lckN0cmwuY2xhc3NOYW1lID0gJ3ByZXZpZXdDb250YWluZXJDdHJsJztcbiAgICAvLyBBZGQgYnV0dG9ucyBpbnNpZGUgY29udGFpbmVyXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBkaXZDb250YWluZXJDdHJsLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfSk7XG4gICAgLy8gQXBwZW5kIGNvbnRyb2wgY29udGFpbmVyIHRvIGZhdGhlclxuICAgIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZDb250YWluZXJDdHJsKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJldmlld0NvbnRhaW5lcihpbWFnZUZpbGVOYW1lLCBidXR0b25zID0gbnVsbCkge1xuICBjb25zdCBkaXZQcmV2aWV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdlByZXZpZXdDb250YWluZXIuY2xhc3NOYW1lID0gJ3ByZXZpZXdDb250YWluZXInO1xuICAvLyBGaWxsIHByZXZpZXcgY29udGFpbmVyXG4gIGNyZWF0ZVByZXZpZXdQaXp6YUNvbnRhaW5lcihkaXZQcmV2aWV3Q29udGFpbmVyLCBpbWFnZUZpbGVOYW1lKTtcbiAgY3JlYXRlUHJldmlld0NvbnRyb2woZGl2UHJldmlld0NvbnRhaW5lciwgYnV0dG9ucyk7XG4gIHJldHVybiBkaXZQcmV2aWV3Q29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGlzaChjb250YWluZXIsIGRpc2gpIHtcbiAgY29uc3QgcE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHBQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgcERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwTmFtZS50ZXh0Q29udGVudCA9IGRpc2gubmFtZTtcbiAgcFByaWNlLnRleHRDb250ZW50ID0gZGlzaC5wcmljZTtcbiAgcERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGlzaC5kZXNjcmlwdGlvbjtcbiAgLy8gQWRkIGRpc2ggaW5zaWRlIHRoZSBjb250YWluZXJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBOYW1lKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBQcmljZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwRGVzY3JpcHRpb24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGlzaENvbnRhaW5lcigpIHtcbiAgY29uc3QgZ3JpZERpc2hlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBncmlkRGlzaGVzLmNsYXNzTmFtZSA9ICdkaXNoQ29udGFpbmVyJztcbiAgcmV0dXJuIGdyaWREaXNoZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREaXNoQ29udGFpbmVyKG1lbnVDb250YWluZXIsIGRpc2hDb250YWluZXJOYW1lLCBncmlkRGlzaENvbnRhaW5lcikge1xuICBjb25zdCBwQ29udGFpbmVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgLy8gU2V0dXAgdGhlIGNvbnRhaW5lclxuICBwQ29udGFpbmVyTmFtZS50ZXh0Q29udGVudCA9IGRpc2hDb250YWluZXJOYW1lO1xuICBwQ29udGFpbmVyTmFtZS5jbGFzc05hbWUgPSAnZGlzaENvbnRhaW5lck5hbWUnO1xuICAvLyBBZGQgaW4gbWVudVxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHBDb250YWluZXJOYW1lKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkRGlzaENvbnRhaW5lcilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnVDb250YWluZXIoKSB7XG4gIGNvbnN0IGRpdk1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdk1lbnVMaXN0LmNsYXNzTmFtZSA9ICdtZW51TGlzdCdcbiAgcmV0dXJuIGRpdk1lbnVMaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudShtZW51TGlzdCkge1xuICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgZWxlbWVudHMucHVzaChtZW51TGlzdCk7XG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVBpenphUHJldmlldyhpbWFnZUZpbGVOYW1lKSB7XG4gIGNvbnN0IGltZ1BpenphUHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpZFByZXZpZXdQaXp6YScpO1xuICBpZihpbWdQaXp6YVByZXZpZXcpIGltZ1BpenphUHJldmlldy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltYWdlRmlsZU5hbWUpO1xufSIsIlxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihidG5UZXh0ID0gJycsIHN2Z0ljb25GaWxlTmFtZSA9IG51bGwsIGNiRXZlbnQgPSB1bmRlZmluZWQpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IHBFbGVtID0gYnRuVGV4dC5sZW5ndGggPiAwID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpIDogbnVsbDtcbiAgLy8gSW5zZXJ0IGljb24gd2hlbiBleGlzdFxuICBpZihzdmdJY29uRmlsZU5hbWUpIHtcbiAgICBjb25zdCBmaWxlRnVsbFBhdGggPSAnLi9pbWFnZXMvJyArIHN2Z0ljb25GaWxlTmFtZTtcbiAgICBjb25zdCBpbWdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGZpbGVGdWxsUGF0aCk7XG4gICAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGJ0blRleHQpO1xuICAgIGltZ0VsZW0uY2xhc3NOYW1lID0gJ2ljb24nO1xuICAgIGJ0bi5hcHBlbmRDaGlsZChpbWdFbGVtKTtcbiAgfVxuICAvLyBBZGQgdGV4dCB3aGVuIGNvbnRhaW5zIHNvbWV0aGluZ1xuICBpZihidG5UZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAvLyBTZXQgdXAgdGV4dCBlbGVtZW50XG4gICAgcEVsZW0udGV4dENvbnRlbnQgPSBidG5UZXh0O1xuICAgIGJ0bi5hcHBlbmRDaGlsZChwRWxlbSk7XG4gIH1cbiAgYnRuLm9uY2xpY2sgPSBjYkV2ZW50O1xuICAvLyBTZXR1cCBidG4gcHJvcGVydGllc1xuICBidG4uY2xhc3NOYW1lID0gJ25hdkJ1dHRvbic7XG4gIHJldHVybiBidG47ICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltYWdlQnV0dG9uKHN2Z0ljb25GaWxlTmFtZSwgY2JFdmVudCA9IHVuZGVmaW5lZCkge1xuICByZXR1cm4gY3JlYXRlQnV0dG9uKCcnLCBzdmdJY29uRmlsZU5hbWUsIGNiRXZlbnQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWFnZUxpbmtCdXR0b24obGluaywgc3ZnSWNvbkZpbGVOYW1lKSB7XG4gIGNvbnN0IGZpbGVGdWxsUGF0aCA9ICcuL2ltYWdlcy8nICsgc3ZnSWNvbkZpbGVOYW1lO1xuICBjb25zdCBhRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgY29uc3QgaW1nRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBhRWxlbS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBsaW5rKTtcbiAgYUVsZW0uc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gIGltZ0VsZW0uc2V0QXR0cmlidXRlKCdzcmMnLCBmaWxlRnVsbFBhdGgpO1xuICBpbWdFbGVtLnNldEF0dHJpYnV0ZSgnYWx0JywgJ2ltYWdlTGluaycpO1xuICBpbWdFbGVtLmNsYXNzTmFtZSA9ICdpY29uLWxpbmsnO1xuICBhRWxlbS5hcHBlbmRDaGlsZChpbWdFbGVtKTtcbiAgcmV0dXJuIGFFbGVtO1xufSIsImV4cG9ydCBjbGFzcyBDbG9jayB7XG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlLCBjYkZ1bmMsIHVwZGF0ZVRpbWVTZWMpIHtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgdGhpcy5ldmVudENiRnVuYyA9IGNiRnVuYztcbiAgICB0aGlzLnVwZGF0ZVRpbWVTZWMgPSB1cGRhdGVUaW1lU2VjO1xuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICB9XG5cbiAgI3JlbmRlcigpIHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgaWYgKGhvdXJzIDwgMTApIGhvdXJzID0gJzAnICsgaG91cnM7XG5cbiAgICBsZXQgbWlucyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgIGlmIChtaW5zIDwgMTApIG1pbnMgPSAnMCcgKyBtaW5zO1xuXG4gICAgbGV0IHNlY3MgPSBkYXRlLmdldFNlY29uZHMoKTtcbiAgICBpZiAoc2VjcyA8IDEwKSBzZWNzID0gJzAnICsgc2VjcztcblxuICAgIGxldCBjdXJUaW1lID0gdGhpcy50ZW1wbGF0ZVxuICAgICAgLnJlcGxhY2UoJ2gnLCBob3VycylcbiAgICAgIC5yZXBsYWNlKCdtJywgbWlucylcbiAgICAgIC5yZXBsYWNlKCdzJywgc2Vjcyk7XG5cbiAgICB0aGlzLmV2ZW50Q2JGdW5jKCk7XG4gIH1cblxuICBnZXQgaXNSdW5uaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bm5pbmc7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgIHRoaXMuI3JlbmRlcigpO1xuICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLiNyZW5kZXIoKSwgdGhpcy51cGRhdGVUaW1lU2VjKTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgRGlzaENvbnRhaW5lciB9IGZyb20gJ01vZHVsZXMvZGlzaENvbnRhaW5lci5qcydcbmltcG9ydCB7IGNyZWF0ZVByZXZpZXdDb250YWluZXIsIGNoYW5nZVBpenphUHJldmlldywgXG4gICAgICAgICAgY3JlYXRlTWVudSwgYWRkRGlzaCwgY3JlYXRlRGlzaENvbnRhaW5lcixcbiAgICAgICAgICBhZGREaXNoQ29udGFpbmVyLCBjcmVhdGVNZW51Q29udGFpbmVyIH0gZnJvbSAnTW9kdWxlcy9tZW51LmpzJ1xuaW1wb3J0IHsgY3JlYXRlSW1hZ2VCdXR0b24gfSBmcm9tICdVdGlsaXRpZXMvYnV0dG9uLmpzJ1xuaW1wb3J0IHsgQ2xvY2sgfSBmcm9tICdVdGlsaXRpZXMvY2xvY2suanMnXG4vLyBBc3NldHMgZGF0YVxuaW1wb3J0IGRhdGFNZW51IGZyb20gJ0Fzc2V0cy9kYXRhL21lbnUuanNvbic7XG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvcGl6emEtbWFyZ2hlcml0YS5qcGcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvcGl6emEtbWFyaW5hcmEuanBnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3BpenphLWNhcHJpY2Npb3NhLmpwZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9waXp6YS1wb21vZG9yaW5pLWJ1ZmFsYS5qcGcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvY2Fsem9uZS1yaXBpZW5vLWFsLWZvcm5vLmpwZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9jYWx6b25lLXJpcGllbm8tZnJpdHRvLmpwZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9zdmcvbGVmdC1idXR0b24uc3ZnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3N2Zy9yaWdodC1idXR0b24uc3ZnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3N2Zy9wbGF5LXBhdXNlLWJ1dHRvbi5zdmcnXG5cbmV4cG9ydCBjbGFzcyBNZW51Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoID0gW107XG4gICAgdGhpcy5jdXJJZHhQaXp6YUltZyA9IDA7XG4gICAgdGhpcy5tZW51ID0gW107XG4gICAgdGhpcy51cGRhdGVQcmV2aWV3Q2xvY2sgPSBudWxsO1xuICAgIHRoaXMuI2xvYWRQaXp6YVZlY3RvcigpO1xuICAgIHRoaXMuI2xvYWRNZW51KCk7XG4gIH1cbiAgI2xvYWRQaXp6YVZlY3RvcigpIHtcbiAgICBpZigwID09PSB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGltZ1Jvb3RQYXRoID0gJy4vaW1hZ2VzLyc7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKGltZ1Jvb3RQYXRoICsgJ3BpenphLW1hcmdoZXJpdGEuanBnJyk7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKGltZ1Jvb3RQYXRoICsgJ3BpenphLW1hcmluYXJhLmpwZycpO1xuICAgICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgucHVzaChpbWdSb290UGF0aCArICdwaXp6YS1jYXByaWNjaW9zYS5qcGcnKTtcbiAgICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLnB1c2goaW1nUm9vdFBhdGggKyAncGl6emEtcG9tb2RvcmluaS1idWZhbGEuanBnJyk7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKGltZ1Jvb3RQYXRoICsgJ2NhbHpvbmUtcmlwaWVuby1hbC1mb3Juby5qcGcnKTtcbiAgICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLnB1c2goaW1nUm9vdFBhdGggKyAnY2Fsem9uZS1yaXBpZW5vLWZyaXR0by5qcGcnKTtcbiAgICB9XG4gIH1cbiAgI2xvYWRNZW51KCkge1xuICAgIGRhdGFNZW51Lm1hcCgoZWxlbSkgPT4ge1xuICAgICAgY29uc3QgZGlzaENvbnRhaW5lciA9IG5ldyBEaXNoQ29udGFpbmVyKGVsZW1bJ2Rpc2gtbmFtZSddKTtcbiAgICAgIGVsZW1bJ21lbnUnXS5tYXAoKGxpc3QpID0+IHtcbiAgICAgICAgZGlzaENvbnRhaW5lci5hZGREaXNoKGxpc3RbJ25hbWUnXSwgbGlzdFsncHJpY2UnXSwgbGlzdFsnZGVzY3JpcHRpb24nXSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubWVudS5wdXNoKGRpc2hDb250YWluZXIpO1xuICAgIH0pO1xuICB9XG4gIGdldCBhcnJheU1lbnUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVudTtcbiAgfVxuICAjbG9hZFByZXZpZXdCdXR0b24oaWNvbk5hbWUpIHtcbiAgICBjb25zdCBidG5DYkV2ZW50ID0gKF8pID0+IHtcbiAgICAgIGlmKGljb25OYW1lLmluY2x1ZGVzKFwicGxheS1wYXVzZVwiKSkgeyBcbiAgICAgICAgLy8gTWFuYWdlIGV2ZW50IHRpbWVyXG4gICAgICAgIGlmKHRoaXMudXBkYXRlUHJldmlld0Nsb2NrKSB7XG4gICAgICAgICAgaWYodGhpcy51cGRhdGVQcmV2aWV3Q2xvY2suaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByZXZpZXdDbG9jay5zdG9wKClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmV2aWV3Q2xvY2suc3RhcnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmKGljb25OYW1lLmluY2x1ZGVzKFwicmlnaHRcIikpIHtcbiAgICAgICAgICB0aGlzLmN1cklkeFBpenphSW1nID0gKHRoaXMuY3VySWR4UGl6emFJbWcgKyAxKSAlIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmN1cklkeFBpenphSW1nID0gKHRoaXMuY3VySWR4UGl6emFJbWcgLSAxKSAlIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLmxlbmd0aDtcbiAgICAgICAgICAvLyBIYW5kbGUgbmVnYXRpdmUgbW9kdWxvXG4gICAgICAgICAgaWYodGhpcy5jdXJJZHhQaXp6YUltZyA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuY3VySWR4UGl6emFJbWcgPSAoKHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLmxlbmd0aCAtIDEgPj0gMCkgPyB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5sZW5ndGggLSAxIDogMCk7XG4gICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICBjaGFuZ2VQaXp6YVByZXZpZXcodGhpcy52ZWN0b3JQaXp6YUltZ1BhdGhbdGhpcy5jdXJJZHhQaXp6YUltZ10pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlSW1hZ2VCdXR0b24oaWNvbk5hbWUsIGJ0bkNiRXZlbnQpO1xuICB9XG4gIHByZXBhcmVQaXp6YVByZXZpZXcoKSB7XG4gICAgbGV0IGJ1dHRvbnMgPSBbXTtcbiAgICBjb25zdCBjaGFuZ2VJbWFnZUNiRXZlbnQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmN1cklkeFBpenphSW1nID0gKHRoaXMuY3VySWR4UGl6emFJbWcgKyAxKSAlIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLmxlbmd0aDtcbiAgICAgIGNoYW5nZVBpenphUHJldmlldyh0aGlzLnZlY3RvclBpenphSW1nUGF0aFt0aGlzLmN1cklkeFBpenphSW1nXSk7XG4gICAgfVxuICAgIC8vIEF1dG9tYXRpYyB1cGRhdGVcbiAgICBpZighdGhpcy51cGRhdGVQcmV2aWV3Q2xvY2spIHtcbiAgICAgIHRoaXMudXBkYXRlUHJldmlld0Nsb2NrID0gbmV3IENsb2NrKCdoOm06cycsIGNoYW5nZUltYWdlQ2JFdmVudCwgNTAwMCk7XG4gICAgfVxuICAgIC8vIENyZWF0ZSBjb250cm9sIGJ1dHRvbnNcbiAgICBidXR0b25zLnB1c2godGhpcy4jbG9hZFByZXZpZXdCdXR0b24oJ2xlZnQtYnV0dG9uLnN2ZycpKTtcbiAgICBidXR0b25zLnB1c2godGhpcy4jbG9hZFByZXZpZXdCdXR0b24oJ3BsYXktcGF1c2UtYnV0dG9uLnN2ZycpKTtcbiAgICBidXR0b25zLnB1c2godGhpcy4jbG9hZFByZXZpZXdCdXR0b24oJ3JpZ2h0LWJ1dHRvbi5zdmcnKSk7XG4gICAgLy8gQ3JlYXRlIHByZXZpZXcgY29udGFpbmVyXG4gICAgY29uc3QgZGl2UHJldmlld0NvbnRhaW5lciA9IGNyZWF0ZVByZXZpZXdDb250YWluZXIodGhpcy52ZWN0b3JQaXp6YUltZ1BhdGhbdGhpcy5jdXJJZHhQaXp6YUltZ10sIGJ1dHRvbnMpO1xuICAgIHJldHVybiBkaXZQcmV2aWV3Q29udGFpbmVyO1xuICB9XG4gIHByZXBhcmVNZW51KCkge1xuICAgIC8vIENyZWF0ZSB0aGUgbWVudSBjb250YWluZXJcbiAgICBjb25zdCBkaXZNZW51Q29udGFpbmVyID0gY3JlYXRlTWVudUNvbnRhaW5lcigpO1xuICAgIC8vIEZvciBlYWNoIGRpc2ggY29udGFpbmVyXG4gICAgdGhpcy5tZW51LmZvckVhY2goKGRpc2hDb250YWluZXIpID0+IHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgZGlzaCBjb250YWluZXJcbiAgICAgIGNvbnN0IGRpdkRpc2hDb250YWluZXIgPSBjcmVhdGVEaXNoQ29udGFpbmVyKClcbiAgICAgIC8vIEFkZCBpbnNpZGUgdGhlIGNvbnRhaW5lciB0aGUgZGlzaGVzXG4gICAgICBkaXNoQ29udGFpbmVyLmRpc2hlcy5mb3JFYWNoKChkaXNoKSA9PiB7XG4gICAgICAgIGFkZERpc2goZGl2RGlzaENvbnRhaW5lciwgZGlzaCk7XG4gICAgICB9KTtcbiAgICAgIC8vIEFkZCBpbnNpZGUgdGhlIG1lbnUgY29udGFpbmVyIHRoZSBkaXNoIGNvbnRhaW5lclxuICAgICAgYWRkRGlzaENvbnRhaW5lcihkaXZNZW51Q29udGFpbmVyLCBkaXNoQ29udGFpbmVyLm5hbWUsIGRpdkRpc2hDb250YWluZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBjcmVhdGVNZW51KGRpdk1lbnVDb250YWluZXIpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=