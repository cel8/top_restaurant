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
      this.vectorPizzaImgPath.push('pizza-margherita.jpg');
      this.vectorPizzaImgPath.push('pizza-marinara.jpg');
      this.vectorPizzaImgPath.push('pizza-capricciosa.jpg');
      this.vectorPizzaImgPath.push('pizza-pomodorini-bufala.jpg');
      this.vectorPizzaImgPath.push('calzone-ripieno-al-forno.jpg');
      this.vectorPizzaImgPath.push('calzone-ripieno-fritto.jpg');
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
  #loadPreviewButton(iconName) {
    const btnCbEvent = (_) => {
      if(iconName.includes('play-pause')) { 
        // Manage event timer
        if(this.updatePreviewClock) {
          if(this.updatePreviewClock.isRunning) {
            this.updatePreviewClock.stop()
          } else {
            this.updatePreviewClock.start();
          }
        }
      } else {
        if(iconName.includes('right')) {
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
/* harmony import */ var Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Utilities/nodeManager.js */ "./src/utilities/nodeManager.js");





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
    (0,Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_3__.removeAllChildNodes)(mainContent);
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
/* harmony import */ var Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Utilities/nodeManager.js */ "./src/utilities/nodeManager.js");
/* harmony import */ var Utilities_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Utilities/button.js */ "./src/utilities/button.js");




function createInfoTextData(fatherDiv, text, title = false) {
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__.createAddNode('p', fatherDiv, title ? 'contactTitle' : 'contactInfo', null, text);
}

function createInfo() {
  // Create HTML elements text content
  const divContact = Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__.createNode('div');
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
  const divLocation = Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__.createNode('div');
  createInfoTextData(divLocation, 'WHERE WE ARE', true);
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__.createAddNodeImg('map.png', 'mapLocation', divLocation);
  return divLocation;
}

function createContact() {
  let elements = [];
  const divMain = Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__.createNodeClass('div', 'gridContact');
  // Add to main grid
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__.addNodeChild(divMain, createInfo());
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__.addNodeChild(divMain, createLocation());
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__.addNodeChild(divMain, (0,Utilities_button_js__WEBPACK_IMPORTED_MODULE_2__.createButton)('BOOK A TABLE'));
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
/* harmony import */ var Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utilities/nodeManager.js */ "./src/utilities/nodeManager.js");


function createHomeTitle() {
  return Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeContent('p', 'TRADITION AND INNOVATION', 'homeTitle');
}

function createHomeDescription() {
  const descriptions = [];
  descriptions.push(Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeContent('p', 'A lifelong passion for the tradition of Neapolitan pizza and it’s true flavours.'));
  descriptions.push(Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeContent('p', 'A dough leavened for 24 hours, but also many delicious and appetizing proposals with the specialties of our chip shop.'));
  const divDescription = Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNode('div', 'homeDescription', null, null, descriptions);
  return divDescription;
}

function createHome(imgPreviewContainer) {
  let elements = [];
  elements.push(createHomeTitle());
  elements.push(createHomeDescription());
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
/* harmony import */ var Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utilities/nodeManager.js */ "./src/utilities/nodeManager.js");


function createPreviewPizzaContainer(divContainer, imageFileName) {
  // Add image in pizza container and inside div container
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.addNodeChild(divContainer, 
    Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNode('div', 'previewPizzaContainer', null, null, 
      Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeImgID(imageFileName, 'preview', 'idPreviewPizza')
    )
  );
}

function createPreviewControl(divContainer, buttons = null) {
  if((buttons) || (buttons.length > 0)) {
    // Create container control for preview
    Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createAddNode('div', divContainer, 'previewContainerCtrl', null, null, buttons);
  }
}

function createPreviewContainer(imageFileName, buttons = null) {
  // Fill preview container image and controls
  const divPreviewContainer = Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeClass('div', 'previewContainer');
  createPreviewPizzaContainer(divPreviewContainer, imageFileName);
  createPreviewControl(divPreviewContainer, buttons);
  return divPreviewContainer;
}

function addDish(container, dish) {
  const div = Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeClass('div', 'dish');
  const divDish = Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNode('div');
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createAddNode('p', divDish, null, null, dish.name);
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createAddNode('p', divDish, null, null, dish.description);
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.addNodeChild(div, divDish);
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createAddNode('p', div, null, null, dish.price);
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.addNodeChild(container, div);
}

function createDishContainer() {
  return Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeClass('div', 'dishContainer');
}

function addDishContainer(menuContainer, dishContainerName, gridDishContainer) {
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createAddNode('p', menuContainer, 'dishContainerName', null, dishContainerName);
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.addNodeChild(menuContainer, gridDishContainer);
}

function createMenuContainer() {
  return Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeClass('div', 'menuList');
}

function createMenu(menuList) {
  let elements = [];
  elements.push(menuList);
  return elements;
}

function changePizzaPreview(imageFileName) {
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.updateNodeImg(imageFileName, document, '#idPreviewPizza');
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
/* harmony import */ var Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utilities/nodeManager.js */ "./src/utilities/nodeManager.js");


function createButton(btnText = '', svgIconFileName = null, cbEvent = undefined) {
  const btn = Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeClass('button', 'navButton');
  // Insert icon when exist
  if(svgIconFileName) {
    Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createAddNodeImg(svgIconFileName, btnText, btn, 'icon');
  }
  // Add text when contains something
  if(btnText.length > 0) {
    Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createAddNode('p', btn, null, null, btnText);
  }
  // Add button event
  btn.onclick = cbEvent;
  return btn;  
}

function createImageButton(svgIconFileName, cbEvent = undefined) {
  return createButton('', svgIconFileName, cbEvent)
}

function createImageLinkButton(link, svgIconFileName) {
  const node = Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeLink(link, null, null, null, 
    Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeImg(svgIconFileName, 'imageLink', 'icon-link')
  );
  return node;
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

/***/ "./src/utilities/nodeManager.js":
/*!**************************************!*\
  !*** ./src/utilities/nodeManager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNodeChild": () => (/* binding */ addNodeChild),
/* harmony export */   "createAddNode": () => (/* binding */ createAddNode),
/* harmony export */   "createAddNodeImg": () => (/* binding */ createAddNodeImg),
/* harmony export */   "createNode": () => (/* binding */ createNode),
/* harmony export */   "createNodeClass": () => (/* binding */ createNodeClass),
/* harmony export */   "createNodeContent": () => (/* binding */ createNodeContent),
/* harmony export */   "createNodeID": () => (/* binding */ createNodeID),
/* harmony export */   "createNodeImg": () => (/* binding */ createNodeImg),
/* harmony export */   "createNodeImgClass": () => (/* binding */ createNodeImgClass),
/* harmony export */   "createNodeImgID": () => (/* binding */ createNodeImgID),
/* harmony export */   "createNodeLink": () => (/* binding */ createNodeLink),
/* harmony export */   "isElement": () => (/* binding */ isElement),
/* harmony export */   "isNode": () => (/* binding */ isNode),
/* harmony export */   "removeAllChildNodes": () => (/* binding */ removeAllChildNodes),
/* harmony export */   "updateNodeImg": () => (/* binding */ updateNodeImg)
/* harmony export */ });

//Returns true if it is a DOM node
function isNode(o){
  return (
    typeof Node === "object" ? o instanceof Node : 
    o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName==="string"
  );
}

//Returns true if it is a DOM element    
function isElement(o){
  return (
    typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
    o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
  );
}

function createNode(type, className = null, id = null, content = null, children = null) {
  const elem = document.createElement(type);
  // Add class name or ID
  if(className) elem.className = className;
  if(id) elem.id = id;
  // Add text content
  if(content) elem.textContent = content;
  // Eventually add child or children
  addNodeChild(elem, children);
  return elem;
}

function createNodeContent(type, content, className = null, id = null) {
  return createNode(type, className, id, content, null);
}

function createNodeClass(type, className, id = null, content = null) {
  return createNode(type, className, id, content, null);
}

function createNodeID(type, id, className = null, content = null) {
  return createNode(type, className, id, content, null);
}

function createNodeImg(imgFileName, alt, className = null, id = null) {
  const fileFullPath = './images/' + imgFileName;
  const node = createNode('img', className, id, null, null);
  node.setAttribute('src', fileFullPath);
  node.setAttribute('alt', alt);
  return node;
}

function createNodeImgClass(imgFileName, alt, className, id = null) {
  return createNodeImg(imgFileName, alt, className, id);
}

function createNodeImgID(imgFileName, alt, id, className = null) {
  return createNodeImg(imgFileName, alt, className, id);
}

function createNodeLink(link, className = null, id = null, content = null, children = null) {
  const node = createNode('a', className, id, content, children);
  node.setAttribute('href', link);
  node.setAttribute('target', '_blank');
  return node;
}

function addNodeChild(father, children) {
  if(children) {
    if(Array.isArray(children)) { // Contains more than one child in Array
      children.forEach(child => {
        father.appendChild(child);
      });
    } else if(isElement(children)) { // Contains just one child
      father.appendChild(children);
    }
  }
}

function createAddNode(type, father, className = null, id = null, content = null, children = null) {
  // Append the new node in father
  father.appendChild(createNode(type, className, id, content, children));
}

function createAddNodeImg(imgFileName, alt, father, className = null, id = null, content = null, children = null) {
  // Append the new node in father
  father.appendChild(createNodeImg(imgFileName, alt, className, id, content, children));
}

function updateNodeImg(imgFileName, father, selector) {
  const imgNode = father.querySelector(selector);
  if(imgNode) imgNode.setAttribute('src', './images/' + imgFileName);
}

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

module.exports = JSON.parse('[{"dish-name":"Starter","menu":[{"name":"Classic Montanara","description":"Fried pizza with tomato sauce made out of canned “pomodorino del Piennolo del Vesuvio AOP” , Caciocavallo Podolico cheese shavings from Irpinia area, basil.","price":"€ 3,00"},{"name":"Frittatina di pasta","description":"Bucatini di Gragnano PGI, béchamel made with alpine butter and milk, stuffed with cooked ham, Pecorino Romano DOP, smoked provola and pepper.","price":"€ 2,50"},{"name":"Crocchè","description":"Not breaded, with potatoes, smoked provola, Pecorino Romano DOP, parsley, pepper.","price":"€ 2,50"}]},{"dish-name":"Pizza","menu":[{"name":"Margherita","description":"Peeled tomato San Marzano AOP, fior di latte cheese from Agerola, extra virgin olive oil from Frantoio San Comaio, basil.","price":"€ 5,00"},{"name":"Marinara","description":"Tomato “Antichi sapori di Napoli”, wild oregano, garlic, extra virgin olive oil from Frantoio La Torretta, basil.","price":"€ 4,00"},{"name":"Capricciosa","description":"Peeled tomato San Marzano DOP, salami from  Agerola,  natural artichokes from Paestum, in oil preserved Cetara anchoives, black Gaeta olives, fior di latte cheese from Agerola, extra virgin olive oil from Frantoio San Salvatore, basil.","price":"€ 5,50"},{"name":"Filetto","description":"Canned tomatoes ” pomodorini del piennolo bagnolese”, buffala cheese, extra virgin olive oil from Frantoio Monzo, basil.","price":"€ 5,00"}]},{"dish-name":"Calzone","menu":[{"name":"Baked calzone","description":"Tomato “Antichi sapori di Napoli”, wild oregano, garlic, extra virgin olive oil from Frantoio La Torretta, basil.","price":"€ 6,00"},{"name":"Fried calzone","description":"Tomato “Antichi sapori di Napoli”, wild oregano, garlic, extra virgin olive oil from Frantoio La Torretta, basil.","price":"€ 6,00"}]},{"dish-name":"Dessert","menu":[{"name":"Babà","description":"","price":"€ 4,00"},{"name":"Lemon delights","description":"","price":"€ 4,50"},{"name":"Mixed berries cheesecake","description":"","price":"€ 4,50"}]},{"dish-name":"Drink","menu":[{"name":"Still Water (50 Cl)","description":"","price":"€ 2,00"},{"name":"Sparkling Water (50 Cl)","description":"","price":"€ 2,00"},{"name":"Coca Cola (33 Cl)","description":"","price":"€ 3,00"},{"name":"Caffè (Expresso)","description":"","price":"€ 1,10"}]}]');

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
/* harmony import */ var Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Utilities/nodeManager.js */ "./src/utilities/nodeManager.js");








class SkeletonController {
  constructor() {
    this.navController = new Controller_navController_js__WEBPACK_IMPORTED_MODULE_4__.NavigationController();
  }
  #createNavigationButtons() {
    const buttons = [];
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

    // Create node and fill text in button    
    buttons.push((0,Utilities_button_js__WEBPACK_IMPORTED_MODULE_5__.createButton)('Home', 'home.svg', btnCbEvent));
    buttons.push((0,Utilities_button_js__WEBPACK_IMPORTED_MODULE_5__.createButton)('Menu', 'menu.svg', btnCbEvent));
    buttons.push((0,Utilities_button_js__WEBPACK_IMPORTED_MODULE_5__.createButton)('Contact', 'contact.svg', btnCbEvent));
    return buttons;
  }
  #createHeader(header) {
    // Append children
    Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_6__.createAddNode('div', header, 'siteTitle', null, 'La Bella Napoli');
    Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_6__.createAddNode('div', header, 'navigation', null, null, this.#createNavigationButtons());
  }
  #createFooter(footer) {
    const curYear = new Date().getFullYear();
    // Append to footer
    Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_6__.createAddNode('p', footer, null, null, `Copyright © ${curYear} Alessandro Celotti`);
    Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_6__.addNodeChild(footer, (0,Utilities_button_js__WEBPACK_IMPORTED_MODULE_5__.createImageLinkButton)('https://github.com/cel8', 'github.svg'));
  }
  #createMain(main) {
    Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_6__.createAddNode('div', main, 'main-content');
  }
  createSkeleton(content) {
    // Create content elements
    const header = Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_6__.createNode('header');
    const main   = Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_6__.createNode('main');
    const footer = Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_6__.createNode('footer');
    // Create elements
    this.#createHeader(header);
    this.#createMain(main);
    this.#createFooter(footer);
    // Append 'em to body#content
    Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_6__.addNodeChild(content, header);
    Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_6__.addNodeChild(content, main);
    Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_6__.addNodeChild(content, footer);
    this.navController.changePage(Controller_navController_js__WEBPACK_IMPORTED_MODULE_4__.pageType.home);
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU0sK0JBQStCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9GQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ0E7QUFDRztBQUNEO0FBQ3VDO0FBQ0g7QUFDbEI7O0FBRWhEO0FBQ1A7QUFDQSw2QkFBNkIsNkVBQW9CO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHlFQUFnQjtBQUMvQyxlQUFlLHlFQUFnQjtBQUMvQixRQUFRLDhCQUE4QixzRUFBYTtBQUNuRCxlQUFlLHNFQUFhO0FBQzVCLFFBQVE7QUFDUixlQUFlLHNFQUFhO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixpRUFBWTtBQUM3QixpQkFBaUIsaUVBQVk7QUFDN0IsaUJBQWlCLGlFQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtRUFBeUI7QUFDN0IsSUFBSSxtRUFBeUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1FQUF5Qix5Q0FBeUMsU0FBUztBQUMvRSxJQUFJLGtFQUF3QixTQUFTLDBFQUFxQjtBQUMxRDtBQUNBO0FBQ0EsSUFBSSxtRUFBeUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdFQUFzQjtBQUN6QyxtQkFBbUIsZ0VBQXNCO0FBQ3pDLG1CQUFtQixnRUFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQXdCO0FBQzVCLElBQUksa0VBQXdCO0FBQzVCLElBQUksa0VBQXdCO0FBQzVCLGtDQUFrQyxzRUFBYTtBQUMvQztBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9jb250cm9sbGVyL2NvbnRhY3RDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL2NvbnRyb2xsZXIvaG9tZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvY29udHJvbGxlci9tZW51Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9jb250cm9sbGVyL25hdkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvZGlzaC5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2Rpc2hDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy91dGlsaXRpZXMvYnV0dG9uLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL3V0aWxpdGllcy9jbG9jay5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy91dGlsaXRpZXMvbm9kZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9jb250cm9sbGVyL3NrZWxldG9uQ29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250YWN0IH0gZnJvbSAnTW9kdWxlcy9jb250YWN0LmpzJ1xuXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuICBwcmVwYXJlQ29udGFjdCgpIHtcbiAgICByZXR1cm4gY3JlYXRlQ29udGFjdCgpO1xuICB9XG59IiwiaW1wb3J0IHsgY3JlYXRlSG9tZSB9IGZyb20gJ01vZHVsZXMvaG9tZS5qcydcblxuZXhwb3J0IGNsYXNzIEhvbWVDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbiAgcHJlcGFyZUhvbWUoaW1nUHJldmlld0NvbnRhaW5lcikge1xuICAgIHJldHVybiBjcmVhdGVIb21lKGltZ1ByZXZpZXdDb250YWluZXIpO1xuICB9XG59IiwiaW1wb3J0IHsgRGlzaENvbnRhaW5lciB9IGZyb20gJ01vZHVsZXMvZGlzaENvbnRhaW5lci5qcydcbmltcG9ydCB7IGNyZWF0ZVByZXZpZXdDb250YWluZXIsIGNoYW5nZVBpenphUHJldmlldywgXG4gICAgICAgICAgY3JlYXRlTWVudSwgYWRkRGlzaCwgY3JlYXRlRGlzaENvbnRhaW5lcixcbiAgICAgICAgICBhZGREaXNoQ29udGFpbmVyLCBjcmVhdGVNZW51Q29udGFpbmVyIH0gZnJvbSAnTW9kdWxlcy9tZW51LmpzJ1xuaW1wb3J0IHsgY3JlYXRlSW1hZ2VCdXR0b24gfSBmcm9tICdVdGlsaXRpZXMvYnV0dG9uLmpzJ1xuaW1wb3J0IHsgQ2xvY2sgfSBmcm9tICdVdGlsaXRpZXMvY2xvY2suanMnXG4vLyBBc3NldHMgZGF0YVxuaW1wb3J0IGRhdGFNZW51IGZyb20gJ0Fzc2V0cy9kYXRhL21lbnUuanNvbic7XG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvcGl6emEtbWFyZ2hlcml0YS5qcGcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvcGl6emEtbWFyaW5hcmEuanBnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3BpenphLWNhcHJpY2Npb3NhLmpwZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9waXp6YS1wb21vZG9yaW5pLWJ1ZmFsYS5qcGcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvY2Fsem9uZS1yaXBpZW5vLWFsLWZvcm5vLmpwZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9jYWx6b25lLXJpcGllbm8tZnJpdHRvLmpwZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9zdmcvbGVmdC1idXR0b24uc3ZnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3N2Zy9yaWdodC1idXR0b24uc3ZnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3N2Zy9wbGF5LXBhdXNlLWJ1dHRvbi5zdmcnXG5cbmV4cG9ydCBjbGFzcyBNZW51Q29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoID0gW107XG4gICAgdGhpcy5jdXJJZHhQaXp6YUltZyA9IDA7XG4gICAgdGhpcy5tZW51ID0gW107XG4gICAgdGhpcy51cGRhdGVQcmV2aWV3Q2xvY2sgPSBudWxsO1xuICAgIHRoaXMuI2xvYWRQaXp6YVZlY3RvcigpO1xuICAgIHRoaXMuI2xvYWRNZW51KCk7XG4gIH1cbiAgI2xvYWRQaXp6YVZlY3RvcigpIHtcbiAgICBpZigwID09PSB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5sZW5ndGgpIHtcbiAgICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLnB1c2goJ3BpenphLW1hcmdoZXJpdGEuanBnJyk7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKCdwaXp6YS1tYXJpbmFyYS5qcGcnKTtcbiAgICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLnB1c2goJ3BpenphLWNhcHJpY2Npb3NhLmpwZycpO1xuICAgICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgucHVzaCgncGl6emEtcG9tb2RvcmluaS1idWZhbGEuanBnJyk7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKCdjYWx6b25lLXJpcGllbm8tYWwtZm9ybm8uanBnJyk7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKCdjYWx6b25lLXJpcGllbm8tZnJpdHRvLmpwZycpO1xuICAgIH1cbiAgfVxuICAjbG9hZE1lbnUoKSB7XG4gICAgZGF0YU1lbnUubWFwKChlbGVtKSA9PiB7XG4gICAgICBjb25zdCBkaXNoQ29udGFpbmVyID0gbmV3IERpc2hDb250YWluZXIoZWxlbVsnZGlzaC1uYW1lJ10pO1xuICAgICAgZWxlbVsnbWVudSddLm1hcCgobGlzdCkgPT4ge1xuICAgICAgICBkaXNoQ29udGFpbmVyLmFkZERpc2gobGlzdFsnbmFtZSddLCBsaXN0WydwcmljZSddLCBsaXN0WydkZXNjcmlwdGlvbiddKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5tZW51LnB1c2goZGlzaENvbnRhaW5lcik7XG4gICAgfSk7XG4gIH1cbiAgI2xvYWRQcmV2aWV3QnV0dG9uKGljb25OYW1lKSB7XG4gICAgY29uc3QgYnRuQ2JFdmVudCA9IChfKSA9PiB7XG4gICAgICBpZihpY29uTmFtZS5pbmNsdWRlcygncGxheS1wYXVzZScpKSB7IFxuICAgICAgICAvLyBNYW5hZ2UgZXZlbnQgdGltZXJcbiAgICAgICAgaWYodGhpcy51cGRhdGVQcmV2aWV3Q2xvY2spIHtcbiAgICAgICAgICBpZih0aGlzLnVwZGF0ZVByZXZpZXdDbG9jay5pc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJldmlld0Nsb2NrLnN0b3AoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByZXZpZXdDbG9jay5zdGFydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYoaWNvbk5hbWUuaW5jbHVkZXMoJ3JpZ2h0JykpIHtcbiAgICAgICAgICB0aGlzLmN1cklkeFBpenphSW1nID0gKHRoaXMuY3VySWR4UGl6emFJbWcgKyAxKSAlIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmN1cklkeFBpenphSW1nID0gKHRoaXMuY3VySWR4UGl6emFJbWcgLSAxKSAlIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLmxlbmd0aDtcbiAgICAgICAgICAvLyBIYW5kbGUgbmVnYXRpdmUgbW9kdWxvXG4gICAgICAgICAgaWYodGhpcy5jdXJJZHhQaXp6YUltZyA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuY3VySWR4UGl6emFJbWcgPSAoKHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLmxlbmd0aCAtIDEgPj0gMCkgPyB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5sZW5ndGggLSAxIDogMCk7XG4gICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICBjaGFuZ2VQaXp6YVByZXZpZXcodGhpcy52ZWN0b3JQaXp6YUltZ1BhdGhbdGhpcy5jdXJJZHhQaXp6YUltZ10pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlSW1hZ2VCdXR0b24oaWNvbk5hbWUsIGJ0bkNiRXZlbnQpO1xuICB9XG4gIHByZXBhcmVQaXp6YVByZXZpZXcoKSB7XG4gICAgbGV0IGJ1dHRvbnMgPSBbXTtcbiAgICBjb25zdCBjaGFuZ2VJbWFnZUNiRXZlbnQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmN1cklkeFBpenphSW1nID0gKHRoaXMuY3VySWR4UGl6emFJbWcgKyAxKSAlIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLmxlbmd0aDtcbiAgICAgIGNoYW5nZVBpenphUHJldmlldyh0aGlzLnZlY3RvclBpenphSW1nUGF0aFt0aGlzLmN1cklkeFBpenphSW1nXSk7XG4gICAgfVxuICAgIC8vIEF1dG9tYXRpYyB1cGRhdGVcbiAgICBpZighdGhpcy51cGRhdGVQcmV2aWV3Q2xvY2spIHtcbiAgICAgIHRoaXMudXBkYXRlUHJldmlld0Nsb2NrID0gbmV3IENsb2NrKCdoOm06cycsIGNoYW5nZUltYWdlQ2JFdmVudCwgNTAwMCk7XG4gICAgfVxuICAgIC8vIENyZWF0ZSBjb250cm9sIGJ1dHRvbnNcbiAgICBidXR0b25zLnB1c2godGhpcy4jbG9hZFByZXZpZXdCdXR0b24oJ2xlZnQtYnV0dG9uLnN2ZycpKTtcbiAgICBidXR0b25zLnB1c2godGhpcy4jbG9hZFByZXZpZXdCdXR0b24oJ3BsYXktcGF1c2UtYnV0dG9uLnN2ZycpKTtcbiAgICBidXR0b25zLnB1c2godGhpcy4jbG9hZFByZXZpZXdCdXR0b24oJ3JpZ2h0LWJ1dHRvbi5zdmcnKSk7XG4gICAgLy8gQ3JlYXRlIHByZXZpZXcgY29udGFpbmVyXG4gICAgY29uc3QgZGl2UHJldmlld0NvbnRhaW5lciA9IGNyZWF0ZVByZXZpZXdDb250YWluZXIodGhpcy52ZWN0b3JQaXp6YUltZ1BhdGhbdGhpcy5jdXJJZHhQaXp6YUltZ10sIGJ1dHRvbnMpO1xuICAgIHJldHVybiBkaXZQcmV2aWV3Q29udGFpbmVyO1xuICB9XG4gIHByZXBhcmVNZW51KCkge1xuICAgIC8vIENyZWF0ZSB0aGUgbWVudSBjb250YWluZXJcbiAgICBjb25zdCBkaXZNZW51Q29udGFpbmVyID0gY3JlYXRlTWVudUNvbnRhaW5lcigpO1xuICAgIC8vIEZvciBlYWNoIGRpc2ggY29udGFpbmVyXG4gICAgdGhpcy5tZW51LmZvckVhY2goKGRpc2hDb250YWluZXIpID0+IHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgZGlzaCBjb250YWluZXJcbiAgICAgIGNvbnN0IGRpdkRpc2hDb250YWluZXIgPSBjcmVhdGVEaXNoQ29udGFpbmVyKClcbiAgICAgIC8vIEFkZCBpbnNpZGUgdGhlIGNvbnRhaW5lciB0aGUgZGlzaGVzXG4gICAgICBkaXNoQ29udGFpbmVyLmRpc2hlcy5mb3JFYWNoKChkaXNoKSA9PiB7XG4gICAgICAgIGFkZERpc2goZGl2RGlzaENvbnRhaW5lciwgZGlzaCk7XG4gICAgICB9KTtcbiAgICAgIC8vIEFkZCBpbnNpZGUgdGhlIG1lbnUgY29udGFpbmVyIHRoZSBkaXNoIGNvbnRhaW5lclxuICAgICAgYWRkRGlzaENvbnRhaW5lcihkaXZNZW51Q29udGFpbmVyLCBkaXNoQ29udGFpbmVyLm5hbWUsIGRpdkRpc2hDb250YWluZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBjcmVhdGVNZW51KGRpdk1lbnVDb250YWluZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNZW51Q29udHJvbGxlciB9IGZyb20gJ0NvbnRyb2xsZXIvbWVudUNvbnRyb2xsZXIuanMnXG5pbXBvcnQgeyBIb21lQ29udHJvbGxlciB9IGZyb20gJ0NvbnRyb2xsZXIvaG9tZUNvbnRyb2xsZXIuanMnXG5pbXBvcnQgeyBDb250YWN0Q29udHJvbGxlciB9IGZyb20gJ0NvbnRyb2xsZXIvY29udGFjdENvbnRyb2xsZXIuanMnXG5pbXBvcnQgeyByZW1vdmVBbGxDaGlsZE5vZGVzIH0gZnJvbSAnVXRpbGl0aWVzL25vZGVNYW5hZ2VyLmpzJ1xuXG5leHBvcnQgY29uc3QgcGFnZVR5cGUgPSB7XG4gIGhvbWU6ICdIb21lJyxcbiAgbWVudTogJ01lbnUnLFxuICBjb250YWN0OiAnQ29udGFjdCcsXG59O1xuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1lbnVDb250cm9sbGVyID0gbmV3IE1lbnVDb250cm9sbGVyKCk7XG4gICAgdGhpcy5ob21lQ29udHJvbGxlciA9IG5ldyBIb21lQ29udHJvbGxlcigpO1xuICAgIHRoaXMuY29udGFjdENvbnRyb2xsZXIgPSBuZXcgQ29udGFjdENvbnRyb2xsZXIoKTtcbiAgfVxuICAjc2hvd1BhZ2UoZWxlbWVudHMpIHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKG1haW5Db250ZW50KTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbiAgY2hhbmdlUGFnZShwYWdlTmFtZSkge1xuICAgIGxldCBlbGVtZW50cyA9IFtdO1xuICAgIHN3aXRjaCAocGFnZU5hbWUpIHtcbiAgICAgIGNhc2UgcGFnZVR5cGUubWVudTpcbiAgICAgICAgZWxlbWVudHMgPSB0aGlzLm1lbnVDb250cm9sbGVyLnByZXBhcmVNZW51KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBwYWdlVHlwZS5jb250YWN0OlxuICAgICAgICBlbGVtZW50cyA9IHRoaXMuY29udGFjdENvbnRyb2xsZXIucHJlcGFyZUNvbnRhY3QoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHBhZ2VUeXBlLmhvbWU6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlbGVtZW50cyA9IHRoaXMuaG9tZUNvbnRyb2xsZXIucHJlcGFyZUhvbWUodGhpcy5tZW51Q29udHJvbGxlci5wcmVwYXJlUGl6emFQcmV2aWV3KCkpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy4jc2hvd1BhZ2UoZWxlbWVudHMpO1xuICB9XG59IiwiaW1wb3J0ICdBc3NldHMvaW1hZ2VzL21hcC5wbmcnXG5pbXBvcnQgKiBhcyBub2RlTWFuYWdlciBmcm9tICdVdGlsaXRpZXMvbm9kZU1hbmFnZXIuanMnXG5pbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICdVdGlsaXRpZXMvYnV0dG9uLmpzJ1xuXG5mdW5jdGlvbiBjcmVhdGVJbmZvVGV4dERhdGEoZmF0aGVyRGl2LCB0ZXh0LCB0aXRsZSA9IGZhbHNlKSB7XG4gIG5vZGVNYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ3AnLCBmYXRoZXJEaXYsIHRpdGxlID8gJ2NvbnRhY3RUaXRsZScgOiAnY29udGFjdEluZm8nLCBudWxsLCB0ZXh0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mbygpIHtcbiAgLy8gQ3JlYXRlIEhUTUwgZWxlbWVudHMgdGV4dCBjb250ZW50XG4gIGNvbnN0IGRpdkNvbnRhY3QgPSBub2RlTWFuYWdlci5jcmVhdGVOb2RlKCdkaXYnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICdDT05UQUNUJywgdHJ1ZSk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnVG9sZWRvIFN0LCA5OSwnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICc4MDAxMCwgTmFwbGVzLCBJdGFseScpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJycpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJzA4MSAxMjMgNDU2NycpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ09QRU5JTkcgSE9VUlMnLCB0cnVlKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICdUdWVzZGF5IC0gU2F0dXJkYXk6Jyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnMTI6MzAgLSAxNTowMCcpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJzE5OjAwIC0gMjQ6MDAnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICcnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICdTdW5kYXk6IDE5OjAwIC0gMjQ6MDAnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICdNb25kYXk6IGNsb3NlZCcpO1xuICByZXR1cm4gZGl2Q29udGFjdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oKSB7XG4gIGNvbnN0IGRpdkxvY2F0aW9uID0gbm9kZU1hbmFnZXIuY3JlYXRlTm9kZSgnZGl2Jyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZMb2NhdGlvbiwgJ1dIRVJFIFdFIEFSRScsIHRydWUpO1xuICBub2RlTWFuYWdlci5jcmVhdGVBZGROb2RlSW1nKCdtYXAucG5nJywgJ21hcExvY2F0aW9uJywgZGl2TG9jYXRpb24pO1xuICByZXR1cm4gZGl2TG9jYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgY29uc3QgZGl2TWFpbiA9IG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGVDbGFzcygnZGl2JywgJ2dyaWRDb250YWN0Jyk7XG4gIC8vIEFkZCB0byBtYWluIGdyaWRcbiAgbm9kZU1hbmFnZXIuYWRkTm9kZUNoaWxkKGRpdk1haW4sIGNyZWF0ZUluZm8oKSk7XG4gIG5vZGVNYW5hZ2VyLmFkZE5vZGVDaGlsZChkaXZNYWluLCBjcmVhdGVMb2NhdGlvbigpKTtcbiAgbm9kZU1hbmFnZXIuYWRkTm9kZUNoaWxkKGRpdk1haW4sIGNyZWF0ZUJ1dHRvbignQk9PSyBBIFRBQkxFJykpO1xuICBlbGVtZW50cy5wdXNoKGRpdk1haW4pO1xuICByZXR1cm4gZWxlbWVudHM7XG59IiwiZXhwb3J0IGNsYXNzIERpc2h7IFxuICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24gfHwgXCJcIjtcbiAgfVxuICBnZXQgZ2V0TmFtZSgpIHsgcmV0dXJuIHRoaXMubmFtZTsgfVxuICBnZXQgZ2V0RGVzY3JpcHRpb24oKSB7IHJldHVybiB0aGlzLmRlc2NyaXB0aW9uOyB9XG4gIGdldCBnZXRQcmljZSgpIHsgcmV0dXJuIHRoaXMucHJpY2U7IH1cbn0iLCJpbXBvcnQgeyBEaXNoIH0gZnJvbSAnTW9kdWxlcy9kaXNoLmpzJ1xuXG5leHBvcnQgY2xhc3MgRGlzaENvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGlzaGVzID0gW107XG4gIH1cbiAgaW5zZXJ0RGlzaChkaXNoKSB7XG4gICAgdGhpcy5kaXNoZXMucHVzaChkaXNoKTtcbiAgfVxuICBhZGREaXNoKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IGRpc2ggPSBuZXcgRGlzaChuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pO1xuICAgIHRoaXMuaW5zZXJ0RGlzaChkaXNoKTtcbiAgfVxuICBnZXQgZ2V0RGlzaE5hbWUoKSB7IHJldHVybiB0aGlzLm5hbWU7IH1cbiAgZ2V0IGdldERpc2hlcygpIHsgcmV0dXJuIHRoaXMuZGlzaGVzOyB9XG59IiwiaW1wb3J0ICogYXMgbm9kZU1hbmFnZXIgZnJvbSAnVXRpbGl0aWVzL25vZGVNYW5hZ2VyLmpzJ1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lVGl0bGUoKSB7XG4gIHJldHVybiBub2RlTWFuYWdlci5jcmVhdGVOb2RlQ29udGVudCgncCcsICdUUkFESVRJT04gQU5EIElOTk9WQVRJT04nLCAnaG9tZVRpdGxlJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVEZXNjcmlwdGlvbigpIHtcbiAgY29uc3QgZGVzY3JpcHRpb25zID0gW107XG4gIGRlc2NyaXB0aW9ucy5wdXNoKG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGVDb250ZW50KCdwJywgJ0EgbGlmZWxvbmcgcGFzc2lvbiBmb3IgdGhlIHRyYWRpdGlvbiBvZiBOZWFwb2xpdGFuIHBpenphIGFuZCBpdOKAmXMgdHJ1ZSBmbGF2b3Vycy4nKSk7XG4gIGRlc2NyaXB0aW9ucy5wdXNoKG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGVDb250ZW50KCdwJywgJ0EgZG91Z2ggbGVhdmVuZWQgZm9yIDI0IGhvdXJzLCBidXQgYWxzbyBtYW55IGRlbGljaW91cyBhbmQgYXBwZXRpemluZyBwcm9wb3NhbHMgd2l0aCB0aGUgc3BlY2lhbHRpZXMgb2Ygb3VyIGNoaXAgc2hvcC4nKSk7XG4gIGNvbnN0IGRpdkRlc2NyaXB0aW9uID0gbm9kZU1hbmFnZXIuY3JlYXRlTm9kZSgnZGl2JywgJ2hvbWVEZXNjcmlwdGlvbicsIG51bGwsIG51bGwsIGRlc2NyaXB0aW9ucyk7XG4gIHJldHVybiBkaXZEZXNjcmlwdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWUoaW1nUHJldmlld0NvbnRhaW5lcikge1xuICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgZWxlbWVudHMucHVzaChjcmVhdGVIb21lVGl0bGUoKSk7XG4gIGVsZW1lbnRzLnB1c2goY3JlYXRlSG9tZURlc2NyaXB0aW9uKCkpO1xuICBlbGVtZW50cy5wdXNoKGltZ1ByZXZpZXdDb250YWluZXIpO1xuICByZXR1cm4gZWxlbWVudHM7XG59IiwiaW1wb3J0ICogYXMgbm9kZU1hbmFnZXIgZnJvbSAnVXRpbGl0aWVzL25vZGVNYW5hZ2VyLmpzJ1xuXG5mdW5jdGlvbiBjcmVhdGVQcmV2aWV3UGl6emFDb250YWluZXIoZGl2Q29udGFpbmVyLCBpbWFnZUZpbGVOYW1lKSB7XG4gIC8vIEFkZCBpbWFnZSBpbiBwaXp6YSBjb250YWluZXIgYW5kIGluc2lkZSBkaXYgY29udGFpbmVyXG4gIG5vZGVNYW5hZ2VyLmFkZE5vZGVDaGlsZChkaXZDb250YWluZXIsIFxuICAgIG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGUoJ2RpdicsICdwcmV2aWV3UGl6emFDb250YWluZXInLCBudWxsLCBudWxsLCBcbiAgICAgIG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGVJbWdJRChpbWFnZUZpbGVOYW1lLCAncHJldmlldycsICdpZFByZXZpZXdQaXp6YScpXG4gICAgKVxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcmV2aWV3Q29udHJvbChkaXZDb250YWluZXIsIGJ1dHRvbnMgPSBudWxsKSB7XG4gIGlmKChidXR0b25zKSB8fCAoYnV0dG9ucy5sZW5ndGggPiAwKSkge1xuICAgIC8vIENyZWF0ZSBjb250YWluZXIgY29udHJvbCBmb3IgcHJldmlld1xuICAgIG5vZGVNYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ2RpdicsIGRpdkNvbnRhaW5lciwgJ3ByZXZpZXdDb250YWluZXJDdHJsJywgbnVsbCwgbnVsbCwgYnV0dG9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByZXZpZXdDb250YWluZXIoaW1hZ2VGaWxlTmFtZSwgYnV0dG9ucyA9IG51bGwpIHtcbiAgLy8gRmlsbCBwcmV2aWV3IGNvbnRhaW5lciBpbWFnZSBhbmQgY29udHJvbHNcbiAgY29uc3QgZGl2UHJldmlld0NvbnRhaW5lciA9IG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGVDbGFzcygnZGl2JywgJ3ByZXZpZXdDb250YWluZXInKTtcbiAgY3JlYXRlUHJldmlld1BpenphQ29udGFpbmVyKGRpdlByZXZpZXdDb250YWluZXIsIGltYWdlRmlsZU5hbWUpO1xuICBjcmVhdGVQcmV2aWV3Q29udHJvbChkaXZQcmV2aWV3Q29udGFpbmVyLCBidXR0b25zKTtcbiAgcmV0dXJuIGRpdlByZXZpZXdDb250YWluZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREaXNoKGNvbnRhaW5lciwgZGlzaCkge1xuICBjb25zdCBkaXYgPSBub2RlTWFuYWdlci5jcmVhdGVOb2RlQ2xhc3MoJ2RpdicsICdkaXNoJyk7XG4gIGNvbnN0IGRpdkRpc2ggPSBub2RlTWFuYWdlci5jcmVhdGVOb2RlKCdkaXYnKTtcbiAgbm9kZU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgncCcsIGRpdkRpc2gsIG51bGwsIG51bGwsIGRpc2gubmFtZSk7XG4gIG5vZGVNYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ3AnLCBkaXZEaXNoLCBudWxsLCBudWxsLCBkaXNoLmRlc2NyaXB0aW9uKTtcbiAgbm9kZU1hbmFnZXIuYWRkTm9kZUNoaWxkKGRpdiwgZGl2RGlzaCk7XG4gIG5vZGVNYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ3AnLCBkaXYsIG51bGwsIG51bGwsIGRpc2gucHJpY2UpO1xuICBub2RlTWFuYWdlci5hZGROb2RlQ2hpbGQoY29udGFpbmVyLCBkaXYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGlzaENvbnRhaW5lcigpIHtcbiAgcmV0dXJuIG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGVDbGFzcygnZGl2JywgJ2Rpc2hDb250YWluZXInKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERpc2hDb250YWluZXIobWVudUNvbnRhaW5lciwgZGlzaENvbnRhaW5lck5hbWUsIGdyaWREaXNoQ29udGFpbmVyKSB7XG4gIG5vZGVNYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ3AnLCBtZW51Q29udGFpbmVyLCAnZGlzaENvbnRhaW5lck5hbWUnLCBudWxsLCBkaXNoQ29udGFpbmVyTmFtZSk7XG4gIG5vZGVNYW5hZ2VyLmFkZE5vZGVDaGlsZChtZW51Q29udGFpbmVyLCBncmlkRGlzaENvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51Q29udGFpbmVyKCkge1xuICByZXR1cm4gbm9kZU1hbmFnZXIuY3JlYXRlTm9kZUNsYXNzKCdkaXYnLCAnbWVudUxpc3QnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnUobWVudUxpc3QpIHtcbiAgbGV0IGVsZW1lbnRzID0gW107XG4gIGVsZW1lbnRzLnB1c2gobWVudUxpc3QpO1xuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VQaXp6YVByZXZpZXcoaW1hZ2VGaWxlTmFtZSkge1xuICBub2RlTWFuYWdlci51cGRhdGVOb2RlSW1nKGltYWdlRmlsZU5hbWUsIGRvY3VtZW50LCAnI2lkUHJldmlld1BpenphJyk7XG59IiwiaW1wb3J0ICogYXMgbm9kZU1hbmFnZXIgZnJvbSAnVXRpbGl0aWVzL25vZGVNYW5hZ2VyLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnV0dG9uKGJ0blRleHQgPSAnJywgc3ZnSWNvbkZpbGVOYW1lID0gbnVsbCwgY2JFdmVudCA9IHVuZGVmaW5lZCkge1xuICBjb25zdCBidG4gPSBub2RlTWFuYWdlci5jcmVhdGVOb2RlQ2xhc3MoJ2J1dHRvbicsICduYXZCdXR0b24nKTtcbiAgLy8gSW5zZXJ0IGljb24gd2hlbiBleGlzdFxuICBpZihzdmdJY29uRmlsZU5hbWUpIHtcbiAgICBub2RlTWFuYWdlci5jcmVhdGVBZGROb2RlSW1nKHN2Z0ljb25GaWxlTmFtZSwgYnRuVGV4dCwgYnRuLCAnaWNvbicpO1xuICB9XG4gIC8vIEFkZCB0ZXh0IHdoZW4gY29udGFpbnMgc29tZXRoaW5nXG4gIGlmKGJ0blRleHQubGVuZ3RoID4gMCkge1xuICAgIG5vZGVNYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ3AnLCBidG4sIG51bGwsIG51bGwsIGJ0blRleHQpO1xuICB9XG4gIC8vIEFkZCBidXR0b24gZXZlbnRcbiAgYnRuLm9uY2xpY2sgPSBjYkV2ZW50O1xuICByZXR1cm4gYnRuOyAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWFnZUJ1dHRvbihzdmdJY29uRmlsZU5hbWUsIGNiRXZlbnQgPSB1bmRlZmluZWQpIHtcbiAgcmV0dXJuIGNyZWF0ZUJ1dHRvbignJywgc3ZnSWNvbkZpbGVOYW1lLCBjYkV2ZW50KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1hZ2VMaW5rQnV0dG9uKGxpbmssIHN2Z0ljb25GaWxlTmFtZSkge1xuICBjb25zdCBub2RlID0gbm9kZU1hbmFnZXIuY3JlYXRlTm9kZUxpbmsobGluaywgbnVsbCwgbnVsbCwgbnVsbCwgXG4gICAgbm9kZU1hbmFnZXIuY3JlYXRlTm9kZUltZyhzdmdJY29uRmlsZU5hbWUsICdpbWFnZUxpbmsnLCAnaWNvbi1saW5rJylcbiAgKTtcbiAgcmV0dXJuIG5vZGU7XG59IiwiZXhwb3J0IGNsYXNzIENsb2NrIHtcbiAgY29uc3RydWN0b3IodGVtcGxhdGUsIGNiRnVuYywgdXBkYXRlVGltZVNlYykge1xuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB0aGlzLmV2ZW50Q2JGdW5jID0gY2JGdW5jO1xuICAgIHRoaXMudXBkYXRlVGltZVNlYyA9IHVwZGF0ZVRpbWVTZWM7XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gIH1cblxuICAjcmVuZGVyKCkge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcblxuICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBpZiAoaG91cnMgPCAxMCkgaG91cnMgPSAnMCcgKyBob3VycztcblxuICAgIGxldCBtaW5zID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgaWYgKG1pbnMgPCAxMCkgbWlucyA9ICcwJyArIG1pbnM7XG5cbiAgICBsZXQgc2VjcyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xuICAgIGlmIChzZWNzIDwgMTApIHNlY3MgPSAnMCcgKyBzZWNzO1xuXG4gICAgbGV0IGN1clRpbWUgPSB0aGlzLnRlbXBsYXRlXG4gICAgICAucmVwbGFjZSgnaCcsIGhvdXJzKVxuICAgICAgLnJlcGxhY2UoJ20nLCBtaW5zKVxuICAgICAgLnJlcGxhY2UoJ3MnLCBzZWNzKTtcblxuICAgIHRoaXMuZXZlbnRDYkZ1bmMoKTtcbiAgfVxuXG4gIGdldCBpc1J1bm5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVubmluZztcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgdGhpcy4jcmVuZGVyKCk7XG4gICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHRoaXMuI3JlbmRlcigpLCB0aGlzLnVwZGF0ZVRpbWVTZWMpO1xuICB9XG59IiwiXG4vL1JldHVybnMgdHJ1ZSBpZiBpdCBpcyBhIERPTSBub2RlXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlKG8pe1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiBOb2RlID09PSBcIm9iamVjdFwiID8gbyBpbnN0YW5jZW9mIE5vZGUgOiBcbiAgICBvICYmIHR5cGVvZiBvID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvLm5vZGVUeXBlID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBvLm5vZGVOYW1lPT09XCJzdHJpbmdcIlxuICApO1xufVxuXG4vL1JldHVybnMgdHJ1ZSBpZiBpdCBpcyBhIERPTSBlbGVtZW50ICAgIFxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudChvKXtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgSFRNTEVsZW1lbnQgPT09IFwib2JqZWN0XCIgPyBvIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgOiAvL0RPTTJcbiAgICBvICYmIHR5cGVvZiBvID09PSBcIm9iamVjdFwiICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZT09PVwic3RyaW5nXCJcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGUodHlwZSwgY2xhc3NOYW1lID0gbnVsbCwgaWQgPSBudWxsLCBjb250ZW50ID0gbnVsbCwgY2hpbGRyZW4gPSBudWxsKSB7XG4gIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAvLyBBZGQgY2xhc3MgbmFtZSBvciBJRFxuICBpZihjbGFzc05hbWUpIGVsZW0uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICBpZihpZCkgZWxlbS5pZCA9IGlkO1xuICAvLyBBZGQgdGV4dCBjb250ZW50XG4gIGlmKGNvbnRlbnQpIGVsZW0udGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAvLyBFdmVudHVhbGx5IGFkZCBjaGlsZCBvciBjaGlsZHJlblxuICBhZGROb2RlQ2hpbGQoZWxlbSwgY2hpbGRyZW4pO1xuICByZXR1cm4gZWxlbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGVDb250ZW50KHR5cGUsIGNvbnRlbnQsIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCkge1xuICByZXR1cm4gY3JlYXRlTm9kZSh0eXBlLCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGVDbGFzcyh0eXBlLCBjbGFzc05hbWUsIGlkID0gbnVsbCwgY29udGVudCA9IG51bGwpIHtcbiAgcmV0dXJuIGNyZWF0ZU5vZGUodHlwZSwgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgbnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlSUQodHlwZSwgaWQsIGNsYXNzTmFtZSA9IG51bGwsIGNvbnRlbnQgPSBudWxsKSB7XG4gIHJldHVybiBjcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZUltZyhpbWdGaWxlTmFtZSwgYWx0LCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwpIHtcbiAgY29uc3QgZmlsZUZ1bGxQYXRoID0gJy4vaW1hZ2VzLycgKyBpbWdGaWxlTmFtZTtcbiAgY29uc3Qgbm9kZSA9IGNyZWF0ZU5vZGUoJ2ltZycsIGNsYXNzTmFtZSwgaWQsIG51bGwsIG51bGwpO1xuICBub2RlLnNldEF0dHJpYnV0ZSgnc3JjJywgZmlsZUZ1bGxQYXRoKTtcbiAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGFsdCk7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZUltZ0NsYXNzKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSwgaWQgPSBudWxsKSB7XG4gIHJldHVybiBjcmVhdGVOb2RlSW1nKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSwgaWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZUltZ0lEKGltZ0ZpbGVOYW1lLCBhbHQsIGlkLCBjbGFzc05hbWUgPSBudWxsKSB7XG4gIHJldHVybiBjcmVhdGVOb2RlSW1nKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSwgaWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZUxpbmsobGluaywgY2xhc3NOYW1lID0gbnVsbCwgaWQgPSBudWxsLCBjb250ZW50ID0gbnVsbCwgY2hpbGRyZW4gPSBudWxsKSB7XG4gIGNvbnN0IG5vZGUgPSBjcmVhdGVOb2RlKCdhJywgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgY2hpbGRyZW4pO1xuICBub2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGxpbmspO1xuICBub2RlLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5vZGVDaGlsZChmYXRoZXIsIGNoaWxkcmVuKSB7XG4gIGlmKGNoaWxkcmVuKSB7XG4gICAgaWYoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHsgLy8gQ29udGFpbnMgbW9yZSB0aGFuIG9uZSBjaGlsZCBpbiBBcnJheVxuICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGZhdGhlci5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYoaXNFbGVtZW50KGNoaWxkcmVuKSkgeyAvLyBDb250YWlucyBqdXN0IG9uZSBjaGlsZFxuICAgICAgZmF0aGVyLmFwcGVuZENoaWxkKGNoaWxkcmVuKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFkZE5vZGUodHlwZSwgZmF0aGVyLCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwsIGNvbnRlbnQgPSBudWxsLCBjaGlsZHJlbiA9IG51bGwpIHtcbiAgLy8gQXBwZW5kIHRoZSBuZXcgbm9kZSBpbiBmYXRoZXJcbiAgZmF0aGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5vZGUodHlwZSwgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgY2hpbGRyZW4pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFkZE5vZGVJbWcoaW1nRmlsZU5hbWUsIGFsdCwgZmF0aGVyLCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwsIGNvbnRlbnQgPSBudWxsLCBjaGlsZHJlbiA9IG51bGwpIHtcbiAgLy8gQXBwZW5kIHRoZSBuZXcgbm9kZSBpbiBmYXRoZXJcbiAgZmF0aGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGFsdCwgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgY2hpbGRyZW4pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGZhdGhlciwgc2VsZWN0b3IpIHtcbiAgY29uc3QgaW1nTm9kZSA9IGZhdGhlci5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgaWYoaW1nTm9kZSkgaW1nTm9kZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltYWdlcy8nICsgaW1nRmlsZU5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3N2Zy9ob21lLnN2ZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9zdmcvbWVudS5zdmcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvc3ZnL2NvbnRhY3Quc3ZnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3N2Zy9naXRodWIuc3ZnJ1xuaW1wb3J0IHsgcGFnZVR5cGUsIE5hdmlnYXRpb25Db250cm9sbGVyIH0gZnJvbSAnQ29udHJvbGxlci9uYXZDb250cm9sbGVyLmpzJ1xuaW1wb3J0IHsgY3JlYXRlQnV0dG9uLCBjcmVhdGVJbWFnZUxpbmtCdXR0b24gfSBmcm9tICdVdGlsaXRpZXMvYnV0dG9uLmpzJ1xuaW1wb3J0ICogYXMgbm9kZU1hbmFnZXIgZnJvbSAnVXRpbGl0aWVzL25vZGVNYW5hZ2VyLmpzJ1xuXG5leHBvcnQgY2xhc3MgU2tlbGV0b25Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5uYXZDb250cm9sbGVyID0gbmV3IE5hdmlnYXRpb25Db250cm9sbGVyKCk7XG4gIH1cbiAgI2NyZWF0ZU5hdmlnYXRpb25CdXR0b25zKCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBbXTtcbiAgICBjb25zdCBidG5DYkV2ZW50ID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IHBFbGVtID0gZS50YXJnZXQucXVlcnlTZWxlY3RvcigncCcpO1xuICAgICAgaWYocEVsZW0gPT09IG51bGwpIHJldHVybjtcbiAgICAgIGxldCBwYWdlO1xuICAgICAgaWYocEVsZW0udGV4dENvbnRlbnQgPT09IHBhZ2VUeXBlLmNvbnRhY3QpIHtcbiAgICAgICAgcGFnZSA9IHBhZ2VUeXBlLmNvbnRhY3Q7XG4gICAgICB9IGVsc2UgaWYocEVsZW0udGV4dENvbnRlbnQgPT09IHBhZ2VUeXBlLm1lbnUpIHtcbiAgICAgICAgcGFnZSA9IHBhZ2VUeXBlLm1lbnU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWdlID0gcGFnZVR5cGUuaG9tZTtcbiAgICAgIH1cbiAgICAgIHRoaXMubmF2Q29udHJvbGxlci5jaGFuZ2VQYWdlKHBhZ2UpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBub2RlIGFuZCBmaWxsIHRleHQgaW4gYnV0dG9uICAgIFxuICAgIGJ1dHRvbnMucHVzaChjcmVhdGVCdXR0b24oJ0hvbWUnLCAnaG9tZS5zdmcnLCBidG5DYkV2ZW50KSk7XG4gICAgYnV0dG9ucy5wdXNoKGNyZWF0ZUJ1dHRvbignTWVudScsICdtZW51LnN2ZycsIGJ0bkNiRXZlbnQpKTtcbiAgICBidXR0b25zLnB1c2goY3JlYXRlQnV0dG9uKCdDb250YWN0JywgJ2NvbnRhY3Quc3ZnJywgYnRuQ2JFdmVudCkpO1xuICAgIHJldHVybiBidXR0b25zO1xuICB9XG4gICNjcmVhdGVIZWFkZXIoaGVhZGVyKSB7XG4gICAgLy8gQXBwZW5kIGNoaWxkcmVuXG4gICAgbm9kZU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgaGVhZGVyLCAnc2l0ZVRpdGxlJywgbnVsbCwgJ0xhIEJlbGxhIE5hcG9saScpO1xuICAgIG5vZGVNYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ2RpdicsIGhlYWRlciwgJ25hdmlnYXRpb24nLCBudWxsLCBudWxsLCB0aGlzLiNjcmVhdGVOYXZpZ2F0aW9uQnV0dG9ucygpKTtcbiAgfVxuICAjY3JlYXRlRm9vdGVyKGZvb3Rlcikge1xuICAgIGNvbnN0IGN1clllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgLy8gQXBwZW5kIHRvIGZvb3RlclxuICAgIG5vZGVNYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ3AnLCBmb290ZXIsIG51bGwsIG51bGwsIGBDb3B5cmlnaHQgwqkgJHtjdXJZZWFyfSBBbGVzc2FuZHJvIENlbG90dGlgKTtcbiAgICBub2RlTWFuYWdlci5hZGROb2RlQ2hpbGQoZm9vdGVyLCBjcmVhdGVJbWFnZUxpbmtCdXR0b24oJ2h0dHBzOi8vZ2l0aHViLmNvbS9jZWw4JywgJ2dpdGh1Yi5zdmcnKSk7XG4gIH1cbiAgI2NyZWF0ZU1haW4obWFpbikge1xuICAgIG5vZGVNYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ2RpdicsIG1haW4sICdtYWluLWNvbnRlbnQnKTtcbiAgfVxuICBjcmVhdGVTa2VsZXRvbihjb250ZW50KSB7XG4gICAgLy8gQ3JlYXRlIGNvbnRlbnQgZWxlbWVudHNcbiAgICBjb25zdCBoZWFkZXIgPSBub2RlTWFuYWdlci5jcmVhdGVOb2RlKCdoZWFkZXInKTtcbiAgICBjb25zdCBtYWluICAgPSBub2RlTWFuYWdlci5jcmVhdGVOb2RlKCdtYWluJyk7XG4gICAgY29uc3QgZm9vdGVyID0gbm9kZU1hbmFnZXIuY3JlYXRlTm9kZSgnZm9vdGVyJyk7XG4gICAgLy8gQ3JlYXRlIGVsZW1lbnRzXG4gICAgdGhpcy4jY3JlYXRlSGVhZGVyKGhlYWRlcik7XG4gICAgdGhpcy4jY3JlYXRlTWFpbihtYWluKTtcbiAgICB0aGlzLiNjcmVhdGVGb290ZXIoZm9vdGVyKTtcbiAgICAvLyBBcHBlbmQgJ2VtIHRvIGJvZHkjY29udGVudFxuICAgIG5vZGVNYW5hZ2VyLmFkZE5vZGVDaGlsZChjb250ZW50LCBoZWFkZXIpO1xuICAgIG5vZGVNYW5hZ2VyLmFkZE5vZGVDaGlsZChjb250ZW50LCBtYWluKTtcbiAgICBub2RlTWFuYWdlci5hZGROb2RlQ2hpbGQoY29udGVudCwgZm9vdGVyKTtcbiAgICB0aGlzLm5hdkNvbnRyb2xsZXIuY2hhbmdlUGFnZShwYWdlVHlwZS5ob21lKTtcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==