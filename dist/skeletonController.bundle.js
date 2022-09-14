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
/* harmony import */ var Controller_menuController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Controller/menuController.js */ "./src/controller/menuController.js");
/* harmony import */ var Controller_homeController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Controller/homeController.js */ "./src/controller/homeController.js");
/* harmony import */ var Controller_contactController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Controller/contactController.js */ "./src/controller/contactController.js");
/* harmony import */ var Utilities_nodeManger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Utilities/nodeManger.js */ "./src/utilities/nodeManger.js");





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
    (0,Utilities_nodeManger_js__WEBPACK_IMPORTED_MODULE_3__.removeAllChildNodes)(mainContent);
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

/***/ "./src/utilities/nodeManger.js":
/*!*************************************!*\
  !*** ./src/utilities/nodeManger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeAllChildNodes": () => (/* binding */ removeAllChildNodes)
/* harmony export */ });
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
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

/***/ "./src/assets/images/svg/contact.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/svg/contact.svg ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "images/contact.svg";

/***/ }),

/***/ "./src/assets/images/svg/github.svg":
/*!******************************************!*\
  !*** ./src/assets/images/svg/github.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "images/github.svg";

/***/ }),

/***/ "./src/assets/images/svg/home.svg":
/*!****************************************!*\
  !*** ./src/assets/images/svg/home.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "images/home.svg";

/***/ }),

/***/ "./src/assets/images/svg/left-button.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/svg/left-button.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "images/left-button.svg";

/***/ }),

/***/ "./src/assets/images/svg/menu.svg":
/*!****************************************!*\
  !*** ./src/assets/images/svg/menu.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "images/menu.svg";

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
/* harmony import */ var Assets_images_svg_github_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Assets/images/svg/github.svg */ "./src/assets/images/svg/github.svg");
/* harmony import */ var Controller_navController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Controller/navController.js */ "./src/controller/navController.js");
/* harmony import */ var Utilities_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Utilities/button.js */ "./src/utilities/button.js");







class SkeletonController {
  constructor() {
    this.navController = new Controller_navController_js__WEBPACK_IMPORTED_MODULE_4__.NavigationController();
  }
  #createNavigationBar() {
    const btnCbEvent = (e) => {
      const pElem = e.target.querySelector('p');
      if(pElem === null) return;
      let page;
      if(pElem.textContent === Controller_navController_js__WEBPACK_IMPORTED_MODULE_4__.pageType.contact) {
        page = Controller_navController_js__WEBPACK_IMPORTED_MODULE_4__.pageType.contact;
      } else if(pElem.textContent === Controller_navController_js__WEBPACK_IMPORTED_MODULE_4__.pageType.menu) {
        page = Controller_navController_js__WEBPACK_IMPORTED_MODULE_4__.pageType.menu;
      } else {
        page = Controller_navController_js__WEBPACK_IMPORTED_MODULE_4__.pageType.home;
      }
      this.navController.changePage(page);
    }
    const divElem = document.createElement('div');
    // Fill text in button
    divElem.appendChild((0,Utilities_button_js__WEBPACK_IMPORTED_MODULE_5__.createButton)('Home', 'home.svg', btnCbEvent));
    divElem.appendChild((0,Utilities_button_js__WEBPACK_IMPORTED_MODULE_5__.createButton)('Menu', 'menu.svg', btnCbEvent));
    divElem.appendChild((0,Utilities_button_js__WEBPACK_IMPORTED_MODULE_5__.createButton)('Contact', 'contact.svg', btnCbEvent));
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
    footer.appendChild((0,Utilities_button_js__WEBPACK_IMPORTED_MODULE_5__.createImageLinkButton)('https://github.com/cel8', 'github.svg'));
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
    this.navController.changePage(Controller_navController_js__WEBPACK_IMPORTED_MODULE_4__.pageType.home);
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tlbGV0b25Db250cm9sbGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7O0FBRTNDO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpRUFBYTtBQUN4QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNSNEM7O0FBRXJDO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsV0FBVywyREFBVTtBQUNyQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUndEO0FBR2dCO0FBQ2pCO0FBQ2I7QUFDMUM7QUFDNkM7QUFDRjtBQUNGO0FBQ0c7QUFDTTtBQUNDO0FBQ0Y7QUFDUDtBQUNDO0FBQ0s7O0FBRXpDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVk7QUFDaEIsZ0NBQWdDLG1FQUFhO0FBQzdDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1FQUFrQjtBQUMxQjtBQUNBO0FBQ0EsV0FBVyxzRUFBaUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbUVBQWtCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxxREFBSztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsdUVBQXNCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG9FQUFtQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isb0VBQW1CO0FBQ2xEO0FBQ0E7QUFDQSxRQUFRLHlEQUFPO0FBQ2YsT0FBTztBQUNQO0FBQ0EsTUFBTSxpRUFBZ0I7QUFDdEIsS0FBSztBQUNMLFdBQVcsMkRBQVU7QUFDckI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RzZEO0FBQ0E7QUFDTTtBQUNOOztBQUV0RDtBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSw4QkFBOEIsd0VBQWM7QUFDNUMsOEJBQThCLHdFQUFjO0FBQzVDLGlDQUFpQyw4RUFBaUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0RUFBbUI7QUFDdkI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hDOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xETztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCLG1CQUFtQjtBQUNuQjs7Ozs7Ozs7Ozs7Ozs7O0FDVHNDOztBQUUvQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaURBQUk7QUFDekI7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixvQkFBb0I7QUFDcEI7Ozs7Ozs7Ozs7Ozs7O0FDaEJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4Q087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05tQztBQUNBO0FBQ0c7QUFDRDtBQUN1QztBQUNIOztBQUVsRTtBQUNQO0FBQ0EsNkJBQTZCLDZFQUFvQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IseUVBQWdCO0FBQy9DLGVBQWUseUVBQWdCO0FBQy9CLFFBQVEsOEJBQThCLHNFQUFhO0FBQ25ELGVBQWUsc0VBQWE7QUFDNUIsUUFBUTtBQUNSLGVBQWUsc0VBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpRUFBWTtBQUNwQyx3QkFBd0IsaUVBQVk7QUFDcEMsd0JBQXdCLGlFQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsU0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMEVBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHNFQUFhO0FBQy9DO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL2NvbnRyb2xsZXIvY29udGFjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvY29udHJvbGxlci9ob21lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9jb250cm9sbGVyL21lbnVDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL2NvbnRyb2xsZXIvbmF2Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9kaXNoLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvZGlzaENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL3V0aWxpdGllcy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvdXRpbGl0aWVzL2Nsb2NrLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL3V0aWxpdGllcy9ub2RlTWFuZ2VyLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvY29udHJvbGxlci9za2VsZXRvbkNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGFjdCB9IGZyb20gJ01vZHVsZXMvY29udGFjdC5qcydcblxuZXhwb3J0IGNsYXNzIENvbnRhY3RDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbiAgcHJlcGFyZUNvbnRhY3QoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNvbnRhY3QoKTtcbiAgfVxufSIsImltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tICdNb2R1bGVzL2hvbWUuanMnXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG4gIHByZXBhcmVIb21lKGltZ1ByZXZpZXdDb250YWluZXIpIHtcbiAgICByZXR1cm4gY3JlYXRlSG9tZShpbWdQcmV2aWV3Q29udGFpbmVyKTtcbiAgfVxufSIsImltcG9ydCB7IERpc2hDb250YWluZXIgfSBmcm9tICdNb2R1bGVzL2Rpc2hDb250YWluZXIuanMnXG5pbXBvcnQgeyBjcmVhdGVQcmV2aWV3Q29udGFpbmVyLCBjaGFuZ2VQaXp6YVByZXZpZXcsIFxuICAgICAgICAgIGNyZWF0ZU1lbnUsIGFkZERpc2gsIGNyZWF0ZURpc2hDb250YWluZXIsXG4gICAgICAgICAgYWRkRGlzaENvbnRhaW5lciwgY3JlYXRlTWVudUNvbnRhaW5lciB9IGZyb20gJ01vZHVsZXMvbWVudS5qcydcbmltcG9ydCB7IGNyZWF0ZUltYWdlQnV0dG9uIH0gZnJvbSAnVXRpbGl0aWVzL2J1dHRvbi5qcydcbmltcG9ydCB7IENsb2NrIH0gZnJvbSAnVXRpbGl0aWVzL2Nsb2NrLmpzJ1xuLy8gQXNzZXRzIGRhdGFcbmltcG9ydCBkYXRhTWVudSBmcm9tICdBc3NldHMvZGF0YS9tZW51Lmpzb24nO1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3BpenphLW1hcmdoZXJpdGEuanBnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3BpenphLW1hcmluYXJhLmpwZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9waXp6YS1jYXByaWNjaW9zYS5qcGcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvcGl6emEtcG9tb2RvcmluaS1idWZhbGEuanBnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL2NhbHpvbmUtcmlwaWVuby1hbC1mb3Juby5qcGcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvY2Fsem9uZS1yaXBpZW5vLWZyaXR0by5qcGcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvc3ZnL2xlZnQtYnV0dG9uLnN2ZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9zdmcvcmlnaHQtYnV0dG9uLnN2ZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9zdmcvcGxheS1wYXVzZS1idXR0b24uc3ZnJ1xuXG5leHBvcnQgY2xhc3MgTWVudUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aCA9IFtdO1xuICAgIHRoaXMuY3VySWR4UGl6emFJbWcgPSAwO1xuICAgIHRoaXMubWVudSA9IFtdO1xuICAgIHRoaXMudXBkYXRlUHJldmlld0Nsb2NrID0gbnVsbDtcbiAgICB0aGlzLiNsb2FkUGl6emFWZWN0b3IoKTtcbiAgICB0aGlzLiNsb2FkTWVudSgpO1xuICB9XG4gICNsb2FkUGl6emFWZWN0b3IoKSB7XG4gICAgaWYoMCA9PT0gdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgubGVuZ3RoKSB7XG4gICAgICBjb25zdCBpbWdSb290UGF0aCA9ICcuL2ltYWdlcy8nO1xuICAgICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgucHVzaChpbWdSb290UGF0aCArICdwaXp6YS1tYXJnaGVyaXRhLmpwZycpO1xuICAgICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgucHVzaChpbWdSb290UGF0aCArICdwaXp6YS1tYXJpbmFyYS5qcGcnKTtcbiAgICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLnB1c2goaW1nUm9vdFBhdGggKyAncGl6emEtY2FwcmljY2lvc2EuanBnJyk7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKGltZ1Jvb3RQYXRoICsgJ3BpenphLXBvbW9kb3JpbmktYnVmYWxhLmpwZycpO1xuICAgICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgucHVzaChpbWdSb290UGF0aCArICdjYWx6b25lLXJpcGllbm8tYWwtZm9ybm8uanBnJyk7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKGltZ1Jvb3RQYXRoICsgJ2NhbHpvbmUtcmlwaWVuby1mcml0dG8uanBnJyk7XG4gICAgfVxuICB9XG4gICNsb2FkTWVudSgpIHtcbiAgICBkYXRhTWVudS5tYXAoKGVsZW0pID0+IHtcbiAgICAgIGNvbnN0IGRpc2hDb250YWluZXIgPSBuZXcgRGlzaENvbnRhaW5lcihlbGVtWydkaXNoLW5hbWUnXSk7XG4gICAgICBlbGVtWydtZW51J10ubWFwKChsaXN0KSA9PiB7XG4gICAgICAgIGRpc2hDb250YWluZXIuYWRkRGlzaChsaXN0WyduYW1lJ10sIGxpc3RbJ3ByaWNlJ10sIGxpc3RbJ2Rlc2NyaXB0aW9uJ10pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm1lbnUucHVzaChkaXNoQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxuICBnZXQgYXJyYXlNZW51KCkge1xuICAgIHJldHVybiB0aGlzLm1lbnU7XG4gIH1cbiAgI2xvYWRQcmV2aWV3QnV0dG9uKGljb25OYW1lKSB7XG4gICAgY29uc3QgYnRuQ2JFdmVudCA9IChfKSA9PiB7XG4gICAgICBpZihpY29uTmFtZS5pbmNsdWRlcyhcInBsYXktcGF1c2VcIikpIHsgXG4gICAgICAgIC8vIE1hbmFnZSBldmVudCB0aW1lclxuICAgICAgICBpZih0aGlzLnVwZGF0ZVByZXZpZXdDbG9jaykge1xuICAgICAgICAgIGlmKHRoaXMudXBkYXRlUHJldmlld0Nsb2NrLmlzUnVubmluZykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmV2aWV3Q2xvY2suc3RvcCgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJldmlld0Nsb2NrLnN0YXJ0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZihpY29uTmFtZS5pbmNsdWRlcyhcInJpZ2h0XCIpKSB7XG4gICAgICAgICAgdGhpcy5jdXJJZHhQaXp6YUltZyA9ICh0aGlzLmN1cklkeFBpenphSW1nICsgMSkgJSB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jdXJJZHhQaXp6YUltZyA9ICh0aGlzLmN1cklkeFBpenphSW1nIC0gMSkgJSB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5sZW5ndGg7XG4gICAgICAgICAgLy8gSGFuZGxlIG5lZ2F0aXZlIG1vZHVsb1xuICAgICAgICAgIGlmKHRoaXMuY3VySWR4UGl6emFJbWcgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmN1cklkeFBpenphSW1nID0gKCh0aGlzLnZlY3RvclBpenphSW1nUGF0aC5sZW5ndGggLSAxID49IDApID8gdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgubGVuZ3RoIC0gMSA6IDApO1xuICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgY2hhbmdlUGl6emFQcmV2aWV3KHRoaXMudmVjdG9yUGl6emFJbWdQYXRoW3RoaXMuY3VySWR4UGl6emFJbWddKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUltYWdlQnV0dG9uKGljb25OYW1lLCBidG5DYkV2ZW50KTtcbiAgfVxuICBwcmVwYXJlUGl6emFQcmV2aWV3KCkge1xuICAgIGxldCBidXR0b25zID0gW107XG4gICAgY29uc3QgY2hhbmdlSW1hZ2VDYkV2ZW50ID0gKCkgPT4ge1xuICAgICAgdGhpcy5jdXJJZHhQaXp6YUltZyA9ICh0aGlzLmN1cklkeFBpenphSW1nICsgMSkgJSB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5sZW5ndGg7XG4gICAgICBjaGFuZ2VQaXp6YVByZXZpZXcodGhpcy52ZWN0b3JQaXp6YUltZ1BhdGhbdGhpcy5jdXJJZHhQaXp6YUltZ10pO1xuICAgIH1cbiAgICAvLyBBdXRvbWF0aWMgdXBkYXRlXG4gICAgaWYoIXRoaXMudXBkYXRlUHJldmlld0Nsb2NrKSB7XG4gICAgICB0aGlzLnVwZGF0ZVByZXZpZXdDbG9jayA9IG5ldyBDbG9jaygnaDptOnMnLCBjaGFuZ2VJbWFnZUNiRXZlbnQsIDUwMDApO1xuICAgIH1cbiAgICAvLyBDcmVhdGUgY29udHJvbCBidXR0b25zXG4gICAgYnV0dG9ucy5wdXNoKHRoaXMuI2xvYWRQcmV2aWV3QnV0dG9uKCdsZWZ0LWJ1dHRvbi5zdmcnKSk7XG4gICAgYnV0dG9ucy5wdXNoKHRoaXMuI2xvYWRQcmV2aWV3QnV0dG9uKCdwbGF5LXBhdXNlLWJ1dHRvbi5zdmcnKSk7XG4gICAgYnV0dG9ucy5wdXNoKHRoaXMuI2xvYWRQcmV2aWV3QnV0dG9uKCdyaWdodC1idXR0b24uc3ZnJykpO1xuICAgIC8vIENyZWF0ZSBwcmV2aWV3IGNvbnRhaW5lclxuICAgIGNvbnN0IGRpdlByZXZpZXdDb250YWluZXIgPSBjcmVhdGVQcmV2aWV3Q29udGFpbmVyKHRoaXMudmVjdG9yUGl6emFJbWdQYXRoW3RoaXMuY3VySWR4UGl6emFJbWddLCBidXR0b25zKTtcbiAgICByZXR1cm4gZGl2UHJldmlld0NvbnRhaW5lcjtcbiAgfVxuICBwcmVwYXJlTWVudSgpIHtcbiAgICAvLyBDcmVhdGUgdGhlIG1lbnUgY29udGFpbmVyXG4gICAgY29uc3QgZGl2TWVudUNvbnRhaW5lciA9IGNyZWF0ZU1lbnVDb250YWluZXIoKTtcbiAgICAvLyBGb3IgZWFjaCBkaXNoIGNvbnRhaW5lclxuICAgIHRoaXMubWVudS5mb3JFYWNoKChkaXNoQ29udGFpbmVyKSA9PiB7XG4gICAgICAvLyBDcmVhdGUgdGhlIGRpc2ggY29udGFpbmVyXG4gICAgICBjb25zdCBkaXZEaXNoQ29udGFpbmVyID0gY3JlYXRlRGlzaENvbnRhaW5lcigpXG4gICAgICAvLyBBZGQgaW5zaWRlIHRoZSBjb250YWluZXIgdGhlIGRpc2hlc1xuICAgICAgZGlzaENvbnRhaW5lci5kaXNoZXMuZm9yRWFjaCgoZGlzaCkgPT4ge1xuICAgICAgICBhZGREaXNoKGRpdkRpc2hDb250YWluZXIsIGRpc2gpO1xuICAgICAgfSk7XG4gICAgICAvLyBBZGQgaW5zaWRlIHRoZSBtZW51IGNvbnRhaW5lciB0aGUgZGlzaCBjb250YWluZXJcbiAgICAgIGFkZERpc2hDb250YWluZXIoZGl2TWVudUNvbnRhaW5lciwgZGlzaENvbnRhaW5lci5uYW1lLCBkaXZEaXNoQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY3JlYXRlTWVudShkaXZNZW51Q29udGFpbmVyKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTWVudUNvbnRyb2xsZXIgfSBmcm9tICdDb250cm9sbGVyL21lbnVDb250cm9sbGVyLmpzJ1xuaW1wb3J0IHsgSG9tZUNvbnRyb2xsZXIgfSBmcm9tICdDb250cm9sbGVyL2hvbWVDb250cm9sbGVyLmpzJ1xuaW1wb3J0IHsgQ29udGFjdENvbnRyb2xsZXIgfSBmcm9tICdDb250cm9sbGVyL2NvbnRhY3RDb250cm9sbGVyLmpzJ1xuaW1wb3J0IHsgcmVtb3ZlQWxsQ2hpbGROb2RlcyB9IGZyb20gJ1V0aWxpdGllcy9ub2RlTWFuZ2VyLmpzJ1xuXG5leHBvcnQgY29uc3QgcGFnZVR5cGUgPSB7XG4gIGhvbWU6ICdIb21lJyxcbiAgbWVudTogJ01lbnUnLFxuICBjb250YWN0OiAnQ29udGFjdCcsXG59O1xuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1lbnVDb250cm9sbGVyID0gbmV3IE1lbnVDb250cm9sbGVyKCk7XG4gICAgdGhpcy5ob21lQ29udHJvbGxlciA9IG5ldyBIb21lQ29udHJvbGxlcigpO1xuICAgIHRoaXMuY29udGFjdENvbnRyb2xsZXIgPSBuZXcgQ29udGFjdENvbnRyb2xsZXIoKTtcbiAgfVxuICAjc2hvd1BhZ2UoZWxlbWVudHMpIHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKG1haW5Db250ZW50KTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbiAgY2hhbmdlUGFnZShwYWdlTmFtZSkge1xuICAgIGxldCBlbGVtZW50cyA9IFtdO1xuICAgIHN3aXRjaCAocGFnZU5hbWUpIHtcbiAgICAgIGNhc2UgcGFnZVR5cGUubWVudTpcbiAgICAgICAgZWxlbWVudHMgPSB0aGlzLm1lbnVDb250cm9sbGVyLnByZXBhcmVNZW51KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBwYWdlVHlwZS5jb250YWN0OlxuICAgICAgICBlbGVtZW50cyA9IHRoaXMuY29udGFjdENvbnRyb2xsZXIucHJlcGFyZUNvbnRhY3QoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHBhZ2VUeXBlLmhvbWU6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlbGVtZW50cyA9IHRoaXMuaG9tZUNvbnRyb2xsZXIucHJlcGFyZUhvbWUodGhpcy5tZW51Q29udHJvbGxlci5wcmVwYXJlUGl6emFQcmV2aWV3KCkpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy4jc2hvd1BhZ2UoZWxlbWVudHMpO1xuICB9XG59IiwiaW1wb3J0ICdBc3NldHMvaW1hZ2VzL21hcC5wbmcnXG5cbmZ1bmN0aW9uIGNyZWF0ZUluZm9UZXh0RGF0YShmYXRoZXJEaXYsIHRleHQsIHRpdGxlID0gZmFsc2UpIHtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHAuY2xhc3NOYW1lID0gdGl0bGUgPyAnY29udGFjdFRpdGxlJyA6ICdjb250YWN0SW5mbyc7XG4gIGZhdGhlckRpdi5hcHBlbmRDaGlsZChwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mbygpIHtcbiAgY29uc3QgZGl2Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyBDcmVhdGUgSFRNTCBlbGVtZW50cyB0ZXh0IGNvbnRlbnRcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICdDT05UQUNUJywgdHJ1ZSk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnVG9sZWRvIFN0LCA5OSwnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICc4MDAxMCwgTmFwbGVzLCBJdGFseScpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJycpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJzA4MSAxMjMgNDU2NycpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ09QRU5JTkcgSE9VUlMnLCB0cnVlKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICdUdWVzZGF5IC0gU2F0dXJkYXk6Jyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnMTI6MzAgLSAxNTowMCcpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJzE5OjAwIC0gMjQ6MDAnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICcnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICdTdW5kYXk6IDE5OjAwIC0gMjQ6MDAnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICdNb25kYXk6IGNsb3NlZCcpO1xuICByZXR1cm4gZGl2Q29udGFjdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oKSB7XG4gIGNvbnN0IGRpdkxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZMb2NhdGlvbiwgJ1dIRVJFIFdFIEFSRScsIHRydWUpO1xuICBjb25zdCBpbWdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZ0VsZW0uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWFnZXMvbWFwLnBuZycpO1xuICBpbWdFbGVtLnNldEF0dHJpYnV0ZSgnYWx0JywgJ21hcExvY2F0aW9uJyk7XG4gIGRpdkxvY2F0aW9uLmFwcGVuZENoaWxkKGltZ0VsZW0pO1xuICByZXR1cm4gZGl2TG9jYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgY29uc3QgZGl2TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyBCb29rIHRhYmxlIGJ1dHRvblxuICBjb25zdCBidG5SZXNlcnZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0blJlc2VydmUudGV4dENvbnRlbnQgPSAnQk9PSyBBIFRBQkxFJztcbiAgLy8gQWRkIHRvIG1haW4gZ3JpZFxuICBkaXZNYWluLmFwcGVuZENoaWxkKGNyZWF0ZUluZm8oKSk7XG4gIGRpdk1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTG9jYXRpb24oKSk7XG4gIGRpdk1haW4uYXBwZW5kQ2hpbGQoYnRuUmVzZXJ2ZSk7XG4gIGRpdk1haW4uY2xhc3NOYW1lID0gJ2dyaWRDb250YWN0JztcbiAgZWxlbWVudHMucHVzaChkaXZNYWluKTtcbiAgcmV0dXJuIGVsZW1lbnRzO1xufSIsImV4cG9ydCBjbGFzcyBEaXNoeyBcbiAgY29uc3RydWN0b3IobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uIHx8IFwiXCI7XG4gIH1cbiAgZ2V0IGdldE5hbWUoKSB7IHJldHVybiB0aGlzLm5hbWU7IH1cbiAgZ2V0IGdldERlc2NyaXB0aW9uKCkgeyByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjsgfVxuICBnZXQgZ2V0UHJpY2UoKSB7IHJldHVybiB0aGlzLnByaWNlOyB9XG59IiwiaW1wb3J0IHsgRGlzaCB9IGZyb20gJ01vZHVsZXMvZGlzaC5qcydcblxuZXhwb3J0IGNsYXNzIERpc2hDb250YWluZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRpc2hlcyA9IFtdO1xuICB9XG4gIGluc2VydERpc2goZGlzaCkge1xuICAgIHRoaXMuZGlzaGVzLnB1c2goZGlzaCk7XG4gIH1cbiAgYWRkRGlzaChuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBkaXNoID0gbmV3IERpc2gobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uKTtcbiAgICB0aGlzLmluc2VydERpc2goZGlzaCk7XG4gIH1cbiAgZ2V0IGdldERpc2hOYW1lKCkgeyByZXR1cm4gdGhpcy5uYW1lOyB9XG4gIGdldCBnZXREaXNoZXMoKSB7IHJldHVybiB0aGlzLmRpc2hlczsgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb21lKGltZ1ByZXZpZXdDb250YWluZXIpIHtcbiAgbGV0IGVsZW1lbnRzID0gW107XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1lbnUudGV4dENvbnRlbnQgPSAnbWlhbyc7XG4gIGVsZW1lbnRzLnB1c2gobWVudSk7XG4gIGVsZW1lbnRzLnB1c2goaW1nUHJldmlld0NvbnRhaW5lcik7XG4gIHJldHVybiBlbGVtZW50cztcbn0iLCJmdW5jdGlvbiBjcmVhdGVQcmV2aWV3UGl6emFDb250YWluZXIoZGl2Q29udGFpbmVyLCBpbWFnZUZpbGVOYW1lKSB7XG4gIGNvbnN0IGRpdlBpenphQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGltZ1BpenphUHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAvLyBJbWFnZSBwcmV2aWV3XG4gIGltZ1BpenphUHJldmlldy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltYWdlRmlsZU5hbWUpO1xuICBpbWdQaXp6YVByZXZpZXcuc2V0QXR0cmlidXRlKCdhbHQnLCAncGl6emEgcHJldmlldycpO1xuICBpbWdQaXp6YVByZXZpZXcuaWQgPSAnaWRQcmV2aWV3UGl6emEnO1xuICAvLyBBZGQgY2xhc3NcbiAgZGl2UGl6emFDb250YWluZXIuY2xhc3NOYW1lID0gJ3ByZXZpZXdQaXp6YUNvbnRhaW5lcic7XG4gIC8vIEFkZCBpbWFnZSBpbiBwaXp6YSBjb250YWluZXJcbiAgZGl2UGl6emFDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nUGl6emFQcmV2aWV3KTtcbiAgZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdlBpenphQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJldmlld0NvbnRyb2woZGl2Q29udGFpbmVyLCBidXR0b25zID0gbnVsbCkge1xuICBpZigoYnV0dG9ucykgfHwgKGJ1dHRvbnMubGVuZ3RoID4gMCkpIHtcbiAgICAvLyBDcmVhdGUgY29udGFpbmVyIGNvbnRyb2wgZm9yIHByZXZpZXdcbiAgICBjb25zdCBkaXZDb250YWluZXJDdHJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2Q29udGFpbmVyQ3RybC5jbGFzc05hbWUgPSAncHJldmlld0NvbnRhaW5lckN0cmwnO1xuICAgIC8vIEFkZCBidXR0b25zIGluc2lkZSBjb250YWluZXJcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGRpdkNvbnRhaW5lckN0cmwuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICB9KTtcbiAgICAvLyBBcHBlbmQgY29udHJvbCBjb250YWluZXIgdG8gZmF0aGVyXG4gICAgZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkNvbnRhaW5lckN0cmwpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcmV2aWV3Q29udGFpbmVyKGltYWdlRmlsZU5hbWUsIGJ1dHRvbnMgPSBudWxsKSB7XG4gIGNvbnN0IGRpdlByZXZpZXdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2UHJldmlld0NvbnRhaW5lci5jbGFzc05hbWUgPSAncHJldmlld0NvbnRhaW5lcic7XG4gIC8vIEZpbGwgcHJldmlldyBjb250YWluZXJcbiAgY3JlYXRlUHJldmlld1BpenphQ29udGFpbmVyKGRpdlByZXZpZXdDb250YWluZXIsIGltYWdlRmlsZU5hbWUpO1xuICBjcmVhdGVQcmV2aWV3Q29udHJvbChkaXZQcmV2aWV3Q29udGFpbmVyLCBidXR0b25zKTtcbiAgcmV0dXJuIGRpdlByZXZpZXdDb250YWluZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREaXNoKGNvbnRhaW5lciwgZGlzaCkge1xuICBjb25zdCBwTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgcFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBwRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBOYW1lLnRleHRDb250ZW50ID0gZGlzaC5uYW1lO1xuICBwUHJpY2UudGV4dENvbnRlbnQgPSBkaXNoLnByaWNlO1xuICBwRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkaXNoLmRlc2NyaXB0aW9uO1xuICAvLyBBZGQgZGlzaCBpbnNpZGUgdGhlIGNvbnRhaW5lclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocE5hbWUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocFByaWNlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBEZXNjcmlwdGlvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXNoQ29udGFpbmVyKCkge1xuICBjb25zdCBncmlkRGlzaGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdyaWREaXNoZXMuY2xhc3NOYW1lID0gJ2Rpc2hDb250YWluZXInO1xuICByZXR1cm4gZ3JpZERpc2hlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERpc2hDb250YWluZXIobWVudUNvbnRhaW5lciwgZGlzaENvbnRhaW5lck5hbWUsIGdyaWREaXNoQ29udGFpbmVyKSB7XG4gIGNvbnN0IHBDb250YWluZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAvLyBTZXR1cCB0aGUgY29udGFpbmVyXG4gIHBDb250YWluZXJOYW1lLnRleHRDb250ZW50ID0gZGlzaENvbnRhaW5lck5hbWU7XG4gIHBDb250YWluZXJOYW1lLmNsYXNzTmFtZSA9ICdkaXNoQ29udGFpbmVyTmFtZSc7XG4gIC8vIEFkZCBpbiBtZW51XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocENvbnRhaW5lck5hbWUpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWREaXNoQ29udGFpbmVyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudUNvbnRhaW5lcigpIHtcbiAgY29uc3QgZGl2TWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2TWVudUxpc3QuY2xhc3NOYW1lID0gJ21lbnVMaXN0J1xuICByZXR1cm4gZGl2TWVudUxpc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51KG1lbnVMaXN0KSB7XG4gIGxldCBlbGVtZW50cyA9IFtdO1xuICBlbGVtZW50cy5wdXNoKG1lbnVMaXN0KTtcbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUGl6emFQcmV2aWV3KGltYWdlRmlsZU5hbWUpIHtcbiAgY29uc3QgaW1nUGl6emFQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lkUHJldmlld1BpenphJyk7XG4gIGlmKGltZ1BpenphUHJldmlldykgaW1nUGl6emFQcmV2aWV3LnNldEF0dHJpYnV0ZSgnc3JjJywgaW1hZ2VGaWxlTmFtZSk7XG59IiwiXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnV0dG9uKGJ0blRleHQgPSAnJywgc3ZnSWNvbkZpbGVOYW1lID0gbnVsbCwgY2JFdmVudCA9IHVuZGVmaW5lZCkge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgcEVsZW0gPSBidG5UZXh0Lmxlbmd0aCA+IDAgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykgOiBudWxsO1xuICAvLyBJbnNlcnQgaWNvbiB3aGVuIGV4aXN0XG4gIGlmKHN2Z0ljb25GaWxlTmFtZSkge1xuICAgIGNvbnN0IGZpbGVGdWxsUGF0aCA9ICcuL2ltYWdlcy8nICsgc3ZnSWNvbkZpbGVOYW1lO1xuICAgIGNvbnN0IGltZ0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZSgnc3JjJywgZmlsZUZ1bGxQYXRoKTtcbiAgICBpbWdFbGVtLnNldEF0dHJpYnV0ZSgnYWx0JywgYnRuVGV4dCk7XG4gICAgaW1nRWxlbS5jbGFzc05hbWUgPSAnaWNvbic7XG4gICAgYnRuLmFwcGVuZENoaWxkKGltZ0VsZW0pO1xuICB9XG4gIC8vIEFkZCB0ZXh0IHdoZW4gY29udGFpbnMgc29tZXRoaW5nXG4gIGlmKGJ0blRleHQubGVuZ3RoID4gMCkge1xuICAgIC8vIFNldCB1cCB0ZXh0IGVsZW1lbnRcbiAgICBwRWxlbS50ZXh0Q29udGVudCA9IGJ0blRleHQ7XG4gICAgYnRuLmFwcGVuZENoaWxkKHBFbGVtKTtcbiAgfVxuICBidG4ub25jbGljayA9IGNiRXZlbnQ7XG4gIC8vIFNldHVwIGJ0biBwcm9wZXJ0aWVzXG4gIGJ0bi5jbGFzc05hbWUgPSAnbmF2QnV0dG9uJztcbiAgcmV0dXJuIGJ0bjsgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1hZ2VCdXR0b24oc3ZnSWNvbkZpbGVOYW1lLCBjYkV2ZW50ID0gdW5kZWZpbmVkKSB7XG4gIHJldHVybiBjcmVhdGVCdXR0b24oJycsIHN2Z0ljb25GaWxlTmFtZSwgY2JFdmVudClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltYWdlTGlua0J1dHRvbihsaW5rLCBzdmdJY29uRmlsZU5hbWUpIHtcbiAgY29uc3QgZmlsZUZ1bGxQYXRoID0gJy4vaW1hZ2VzLycgKyBzdmdJY29uRmlsZU5hbWU7XG4gIGNvbnN0IGFFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBjb25zdCBpbWdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGFFbGVtLnNldEF0dHJpYnV0ZSgnaHJlZicsIGxpbmspO1xuICBhRWxlbS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGZpbGVGdWxsUGF0aCk7XG4gIGltZ0VsZW0uc2V0QXR0cmlidXRlKCdhbHQnLCAnaW1hZ2VMaW5rJyk7XG4gIGltZ0VsZW0uY2xhc3NOYW1lID0gJ2ljb24tbGluayc7XG4gIGFFbGVtLmFwcGVuZENoaWxkKGltZ0VsZW0pO1xuICByZXR1cm4gYUVsZW07XG59IiwiZXhwb3J0IGNsYXNzIENsb2NrIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGUsIGNiRnVuYywgdXBkYXRlVGltZVNlYykge1xuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB0aGlzLmV2ZW50Q2JGdW5jID0gY2JGdW5jO1xuICAgIHRoaXMudXBkYXRlVGltZVNlYyA9IHVwZGF0ZVRpbWVTZWM7XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gIH1cblxuICAjcmVuZGVyKCkge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcblxuICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBpZiAoaG91cnMgPCAxMCkgaG91cnMgPSAnMCcgKyBob3VycztcblxuICAgIGxldCBtaW5zID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgaWYgKG1pbnMgPCAxMCkgbWlucyA9ICcwJyArIG1pbnM7XG5cbiAgICBsZXQgc2VjcyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xuICAgIGlmIChzZWNzIDwgMTApIHNlY3MgPSAnMCcgKyBzZWNzO1xuXG4gICAgbGV0IGN1clRpbWUgPSB0aGlzLnRlbXBsYXRlXG4gICAgICAucmVwbGFjZSgnaCcsIGhvdXJzKVxuICAgICAgLnJlcGxhY2UoJ20nLCBtaW5zKVxuICAgICAgLnJlcGxhY2UoJ3MnLCBzZWNzKTtcblxuICAgIHRoaXMuZXZlbnRDYkZ1bmMoKTtcbiAgfVxuXG4gIGdldCBpc1J1bm5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVubmluZztcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgdGhpcy4jcmVuZGVyKCk7XG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHRoaXMuI3JlbmRlcigpLCB0aGlzLnVwZGF0ZVRpbWVTZWMpO1xuICB9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3N2Zy9ob21lLnN2ZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9zdmcvbWVudS5zdmcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvc3ZnL2NvbnRhY3Quc3ZnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3N2Zy9naXRodWIuc3ZnJ1xuaW1wb3J0IHsgcGFnZVR5cGUsIE5hdmlnYXRpb25Db250cm9sbGVyIH0gZnJvbSAnQ29udHJvbGxlci9uYXZDb250cm9sbGVyLmpzJ1xuaW1wb3J0IHsgY3JlYXRlQnV0dG9uLCBjcmVhdGVJbWFnZUxpbmtCdXR0b24gfSBmcm9tICdVdGlsaXRpZXMvYnV0dG9uLmpzJ1xuXG5leHBvcnQgY2xhc3MgU2tlbGV0b25Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5uYXZDb250cm9sbGVyID0gbmV3IE5hdmlnYXRpb25Db250cm9sbGVyKCk7XG4gIH1cbiAgI2NyZWF0ZU5hdmlnYXRpb25CYXIoKSB7XG4gICAgY29uc3QgYnRuQ2JFdmVudCA9IChlKSA9PiB7XG4gICAgICBjb25zdCBwRWxlbSA9IGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcbiAgICAgIGlmKHBFbGVtID09PSBudWxsKSByZXR1cm47XG4gICAgICBsZXQgcGFnZTtcbiAgICAgIGlmKHBFbGVtLnRleHRDb250ZW50ID09PSBwYWdlVHlwZS5jb250YWN0KSB7XG4gICAgICAgIHBhZ2UgPSBwYWdlVHlwZS5jb250YWN0O1xuICAgICAgfSBlbHNlIGlmKHBFbGVtLnRleHRDb250ZW50ID09PSBwYWdlVHlwZS5tZW51KSB7XG4gICAgICAgIHBhZ2UgPSBwYWdlVHlwZS5tZW51O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFnZSA9IHBhZ2VUeXBlLmhvbWU7XG4gICAgICB9XG4gICAgICB0aGlzLm5hdkNvbnRyb2xsZXIuY2hhbmdlUGFnZShwYWdlKTtcbiAgICB9XG4gICAgY29uc3QgZGl2RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIEZpbGwgdGV4dCBpbiBidXR0b25cbiAgICBkaXZFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbignSG9tZScsICdob21lLnN2ZycsIGJ0bkNiRXZlbnQpKTtcbiAgICBkaXZFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbignTWVudScsICdtZW51LnN2ZycsIGJ0bkNiRXZlbnQpKTtcbiAgICBkaXZFbGVtLmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbignQ29udGFjdCcsICdjb250YWN0LnN2ZycsIGJ0bkNiRXZlbnQpKTtcbiAgICAvLyBTZXQgdXAgY2xhc3NcbiAgICBkaXZFbGVtLmNsYXNzTmFtZSA9ICduYXZpZ2F0aW9uJztcbiAgICByZXR1cm4gZGl2RWxlbTtcbiAgfVxuICAjY3JlYXRlSGVhZGVyKGhlYWRlcikge1xuICAgIGNvbnN0IGRpdkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZFbGVtLnRleHRDb250ZW50ID0gJ1Jpc3RvcmFudGUnO1xuICAgIGRpdkVsZW0uY2xhc3NOYW1lID0gJ3NpdGVUaXRsZSdcbiAgICAvLyBBcHBlbmQgY2hpbGRcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGl2RWxlbSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRoaXMuI2NyZWF0ZU5hdmlnYXRpb25CYXIoKSk7XG4gIH1cbiAgI2NyZWF0ZUZvb3Rlcihmb290ZXIpIHtcbiAgICBjb25zdCBwRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBhRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBjdXJZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIC8vIFRleHQgbW9kaWZ5XG4gICAgcEVsZW0udGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7Y3VyWWVhcn0gQWxlc3NhbmRybyBDZWxvdHRpYDtcbiAgICBhRWxlbS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL2NlbDgnKTtcbiAgICBhRWxlbS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICAvLyBUT0RPIGluc2VydCBpY29uXG4gICAgYUVsZW0udGV4dENvbnRlbnQgPSAnVE9ETyc7XG4gICAgLy8gQXBwZW5kIHRvIGZvb3RlclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChwRWxlbSk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNyZWF0ZUltYWdlTGlua0J1dHRvbignaHR0cHM6Ly9naXRodWIuY29tL2NlbDgnLCAnZ2l0aHViLnN2ZycpKTtcbiAgfVxuICAjY3JlYXRlTWFpbihtYWluKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9ICdtYWluLWNvbnRlbnQnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfVxuICBjcmVhdGVTa2VsZXRvbihjb250ZW50KSB7XG4gICAgLy8gQ3JlYXRlIGNvbnRlbnQgZWxlbWVudHNcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIC8vIENyZWF0ZSBlbGVtZW50c1xuICAgIHRoaXMuI2NyZWF0ZUhlYWRlcihoZWFkZXIpO1xuICAgIHRoaXMuI2NyZWF0ZU1haW4obWFpbik7XG4gICAgdGhpcy4jY3JlYXRlRm9vdGVyKGZvb3Rlcik7XG4gICAgLy8gQXBwZW5kICdlbSB0byBib2R5I2NvbnRlbnRcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgdGhpcy5uYXZDb250cm9sbGVyLmNoYW5nZVBhZ2UocGFnZVR5cGUuaG9tZSk7XG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=