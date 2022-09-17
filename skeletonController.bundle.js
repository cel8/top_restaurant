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
/* harmony import */ var Assets_images_pizza_filetto_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Assets/images/pizza-filetto.jpg */ "./src/assets/images/pizza-filetto.jpg");
/* harmony import */ var Assets_images_ripieno_al_forno_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Assets/images/ripieno-al-forno.jpg */ "./src/assets/images/ripieno-al-forno.jpg");
/* harmony import */ var Assets_images_ripieno_fritto_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Assets/images/ripieno-fritto.jpg */ "./src/assets/images/ripieno-fritto.jpg");
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
      this.vectorPizzaImgPath.push('pizza-filetto.jpg');
      this.vectorPizzaImgPath.push('ripieno-al-forno.jpg');
      this.vectorPizzaImgPath.push('ripieno-fritto.jpg');
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

/***/ "./src/assets/images/pizza-filetto.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/pizza-filetto.jpg ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "images/pizza-filetto.jpg";

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

/***/ "./src/assets/images/ripieno-al-forno.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/ripieno-al-forno.jpg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "images/ripieno-al-forno.jpg";

/***/ }),

/***/ "./src/assets/images/ripieno-fritto.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/ripieno-fritto.jpg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "images/ripieno-fritto.jpg";

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

module.exports = JSON.parse('[{"dish-name":"Starter","menu":[{"name":"Classic Montanara","description":"Fried pizza with tomato sauce made out of canned “pomodorino del Piennolo del Vesuvio AOP” , Caciocavallo Podolico cheese shavings from Irpinia area, basil.","price":"€ 3,00"},{"name":"Frittatina di pasta","description":"Bucatini di Gragnano PGI, béchamel made with alpine butter and milk, stuffed with cooked ham, Pecorino Romano DOP, smoked provola and pepper.","price":"€ 2,50"},{"name":"Crocchè","description":"Not breaded, with potatoes, smoked provola, Pecorino Romano DOP, parsley, pepper.","price":"€ 2,50"}]},{"dish-name":"Pizzas","menu":[{"name":"Margherita","description":"Peeled tomato San Marzano AOP, fior di latte cheese from Agerola, extra virgin olive oil from Frantoio San Comaio, basil.","price":"€ 5,00"},{"name":"Marinara","description":"Tomato “Antichi sapori di Napoli”, wild oregano, garlic, extra virgin olive oil from Frantoio La Torretta, basil.","price":"€ 4,00"},{"name":"Capricciosa","description":"Peeled tomato San Marzano DOP, salami from  Agerola,  natural artichokes from Paestum, in oil preserved Cetara anchoives, black Gaeta olives, fior di latte cheese from Agerola, extra virgin olive oil from Frantoio San Salvatore, basil.","price":"€ 5,50"},{"name":"Filetto","description":"Canned tomatoes ” pomodorini del piennolo bagnolese”, buffala cheese, extra virgin olive oil from Frantoio Monzo, basil.","price":"€ 5,00"}]},{"dish-name":"Stuffed Pizzas","menu":[{"name":"Baked stuffed pizza","description":"Tomato “Antichi sapori di Napoli”, wild oregano, garlic, extra virgin olive oil from Frantoio La Torretta, basil.","price":"€ 6,00"},{"name":"Fried stuffed pizza","description":"Tomato “Antichi sapori di Napoli”, wild oregano, garlic, extra virgin olive oil from Frantoio La Torretta, basil.","price":"€ 6,00"}]},{"dish-name":"Dessert","menu":[{"name":"Babà","description":"","price":"€ 4,00"},{"name":"Lemon delights","description":"","price":"€ 4,50"},{"name":"Mixed berries cheesecake","description":"","price":"€ 4,50"}]},{"dish-name":"Drink","menu":[{"name":"Still Water (50 Cl)","description":"","price":"€ 2,00"},{"name":"Sparkling Water (50 Cl)","description":"","price":"€ 2,00"},{"name":"Coca Cola (33 Cl)","description":"","price":"€ 3,00"},{"name":"Caffè (Expresso)","description":"","price":"€ 1,10"}]}]');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU0sK0JBQStCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9GQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ0E7QUFDRztBQUNEO0FBQ3VDO0FBQ0g7QUFDbEI7O0FBRWhEO0FBQ1A7QUFDQSw2QkFBNkIsNkVBQW9CO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHlFQUFnQjtBQUMvQyxlQUFlLHlFQUFnQjtBQUMvQixRQUFRLDhCQUE4QixzRUFBYTtBQUNuRCxlQUFlLHNFQUFhO0FBQzVCLFFBQVE7QUFDUixlQUFlLHNFQUFhO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixpRUFBWTtBQUM3QixpQkFBaUIsaUVBQVk7QUFDN0IsaUJBQWlCLGlFQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtRUFBeUI7QUFDN0IsSUFBSSxtRUFBeUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1FQUF5Qix5Q0FBeUMsU0FBUztBQUMvRSxJQUFJLGtFQUF3QixTQUFTLDBFQUFxQjtBQUMxRDtBQUNBO0FBQ0EsSUFBSSxtRUFBeUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdFQUFzQjtBQUN6QyxtQkFBbUIsZ0VBQXNCO0FBQ3pDLG1CQUFtQixnRUFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQXdCO0FBQzVCLElBQUksa0VBQXdCO0FBQzVCLElBQUksa0VBQXdCO0FBQzVCLGtDQUFrQyxzRUFBYTtBQUMvQztBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9jb250cm9sbGVyL2NvbnRhY3RDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL2NvbnRyb2xsZXIvaG9tZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvY29udHJvbGxlci9tZW51Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9jb250cm9sbGVyL25hdkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvZGlzaC5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2Rpc2hDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy91dGlsaXRpZXMvYnV0dG9uLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL3V0aWxpdGllcy9jbG9jay5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy91dGlsaXRpZXMvbm9kZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9jb250cm9sbGVyL3NrZWxldG9uQ29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250YWN0IH0gZnJvbSAnTW9kdWxlcy9jb250YWN0LmpzJ1xuXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuICBwcmVwYXJlQ29udGFjdCgpIHtcbiAgICByZXR1cm4gY3JlYXRlQ29udGFjdCgpO1xuICB9XG59IiwiaW1wb3J0IHsgY3JlYXRlSG9tZSB9IGZyb20gJ01vZHVsZXMvaG9tZS5qcydcblxuZXhwb3J0IGNsYXNzIEhvbWVDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbiAgcHJlcGFyZUhvbWUoaW1nUHJldmlld0NvbnRhaW5lcikge1xuICAgIHJldHVybiBjcmVhdGVIb21lKGltZ1ByZXZpZXdDb250YWluZXIpO1xuICB9XG59IiwiaW1wb3J0IHsgRGlzaENvbnRhaW5lciB9IGZyb20gJ01vZHVsZXMvZGlzaENvbnRhaW5lci5qcydcbmltcG9ydCB7IGNyZWF0ZVByZXZpZXdDb250YWluZXIsIGNoYW5nZVBpenphUHJldmlldywgXG4gICAgICAgICAgY3JlYXRlTWVudSwgYWRkRGlzaCwgY3JlYXRlRGlzaENvbnRhaW5lcixcbiAgICAgICAgICBhZGREaXNoQ29udGFpbmVyLCBjcmVhdGVNZW51Q29udGFpbmVyIH0gZnJvbSAnTW9kdWxlcy9tZW51LmpzJ1xuaW1wb3J0IHsgY3JlYXRlSW1hZ2VCdXR0b24gfSBmcm9tICdVdGlsaXRpZXMvYnV0dG9uLmpzJ1xuaW1wb3J0IHsgQ2xvY2sgfSBmcm9tICdVdGlsaXRpZXMvY2xvY2suanMnXG4vLyBBc3NldHMgZGF0YVxuaW1wb3J0IGRhdGFNZW51IGZyb20gJ0Fzc2V0cy9kYXRhL21lbnUuanNvbic7XG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvcGl6emEtbWFyZ2hlcml0YS5qcGcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvcGl6emEtbWFyaW5hcmEuanBnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3BpenphLWNhcHJpY2Npb3NhLmpwZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9waXp6YS1maWxldHRvLmpwZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9yaXBpZW5vLWFsLWZvcm5vLmpwZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9yaXBpZW5vLWZyaXR0by5qcGcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvc3ZnL2xlZnQtYnV0dG9uLnN2ZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9zdmcvcmlnaHQtYnV0dG9uLnN2ZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9zdmcvcGxheS1wYXVzZS1idXR0b24uc3ZnJ1xuXG5leHBvcnQgY2xhc3MgTWVudUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aCA9IFtdO1xuICAgIHRoaXMuY3VySWR4UGl6emFJbWcgPSAwO1xuICAgIHRoaXMubWVudSA9IFtdO1xuICAgIHRoaXMudXBkYXRlUHJldmlld0Nsb2NrID0gbnVsbDtcbiAgICB0aGlzLiNsb2FkUGl6emFWZWN0b3IoKTtcbiAgICB0aGlzLiNsb2FkTWVudSgpO1xuICB9XG4gICNsb2FkUGl6emFWZWN0b3IoKSB7XG4gICAgaWYoMCA9PT0gdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgubGVuZ3RoKSB7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKCdwaXp6YS1tYXJnaGVyaXRhLmpwZycpO1xuICAgICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgucHVzaCgncGl6emEtbWFyaW5hcmEuanBnJyk7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKCdwaXp6YS1jYXByaWNjaW9zYS5qcGcnKTtcbiAgICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLnB1c2goJ3BpenphLWZpbGV0dG8uanBnJyk7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKCdyaXBpZW5vLWFsLWZvcm5vLmpwZycpO1xuICAgICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgucHVzaCgncmlwaWVuby1mcml0dG8uanBnJyk7XG4gICAgfVxuICB9XG4gICNsb2FkTWVudSgpIHtcbiAgICBkYXRhTWVudS5tYXAoKGVsZW0pID0+IHtcbiAgICAgIGNvbnN0IGRpc2hDb250YWluZXIgPSBuZXcgRGlzaENvbnRhaW5lcihlbGVtWydkaXNoLW5hbWUnXSk7XG4gICAgICBlbGVtWydtZW51J10ubWFwKChsaXN0KSA9PiB7XG4gICAgICAgIGRpc2hDb250YWluZXIuYWRkRGlzaChsaXN0WyduYW1lJ10sIGxpc3RbJ3ByaWNlJ10sIGxpc3RbJ2Rlc2NyaXB0aW9uJ10pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm1lbnUucHVzaChkaXNoQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxuICAjbG9hZFByZXZpZXdCdXR0b24oaWNvbk5hbWUpIHtcbiAgICBjb25zdCBidG5DYkV2ZW50ID0gKF8pID0+IHtcbiAgICAgIGlmKGljb25OYW1lLmluY2x1ZGVzKCdwbGF5LXBhdXNlJykpIHsgXG4gICAgICAgIC8vIE1hbmFnZSBldmVudCB0aW1lclxuICAgICAgICBpZih0aGlzLnVwZGF0ZVByZXZpZXdDbG9jaykge1xuICAgICAgICAgIGlmKHRoaXMudXBkYXRlUHJldmlld0Nsb2NrLmlzUnVubmluZykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmV2aWV3Q2xvY2suc3RvcCgpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJldmlld0Nsb2NrLnN0YXJ0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZihpY29uTmFtZS5pbmNsdWRlcygncmlnaHQnKSkge1xuICAgICAgICAgIHRoaXMuY3VySWR4UGl6emFJbWcgPSAodGhpcy5jdXJJZHhQaXp6YUltZyArIDEpICUgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgubGVuZ3RoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3VySWR4UGl6emFJbWcgPSAodGhpcy5jdXJJZHhQaXp6YUltZyAtIDEpICUgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgubGVuZ3RoO1xuICAgICAgICAgIC8vIEhhbmRsZSBuZWdhdGl2ZSBtb2R1bG9cbiAgICAgICAgICBpZih0aGlzLmN1cklkeFBpenphSW1nIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5jdXJJZHhQaXp6YUltZyA9ICgodGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgubGVuZ3RoIC0gMSA+PSAwKSA/IHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLmxlbmd0aCAtIDEgOiAwKTtcbiAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgICAgIGNoYW5nZVBpenphUHJldmlldyh0aGlzLnZlY3RvclBpenphSW1nUGF0aFt0aGlzLmN1cklkeFBpenphSW1nXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVJbWFnZUJ1dHRvbihpY29uTmFtZSwgYnRuQ2JFdmVudCk7XG4gIH1cbiAgcHJlcGFyZVBpenphUHJldmlldygpIHtcbiAgICBsZXQgYnV0dG9ucyA9IFtdO1xuICAgIGNvbnN0IGNoYW5nZUltYWdlQ2JFdmVudCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY3VySWR4UGl6emFJbWcgPSAodGhpcy5jdXJJZHhQaXp6YUltZyArIDEpICUgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgubGVuZ3RoO1xuICAgICAgY2hhbmdlUGl6emFQcmV2aWV3KHRoaXMudmVjdG9yUGl6emFJbWdQYXRoW3RoaXMuY3VySWR4UGl6emFJbWddKTtcbiAgICB9XG4gICAgLy8gQXV0b21hdGljIHVwZGF0ZVxuICAgIGlmKCF0aGlzLnVwZGF0ZVByZXZpZXdDbG9jaykge1xuICAgICAgdGhpcy51cGRhdGVQcmV2aWV3Q2xvY2sgPSBuZXcgQ2xvY2soJ2g6bTpzJywgY2hhbmdlSW1hZ2VDYkV2ZW50LCA1MDAwKTtcbiAgICB9XG4gICAgLy8gQ3JlYXRlIGNvbnRyb2wgYnV0dG9uc1xuICAgIGJ1dHRvbnMucHVzaCh0aGlzLiNsb2FkUHJldmlld0J1dHRvbignbGVmdC1idXR0b24uc3ZnJykpO1xuICAgIGJ1dHRvbnMucHVzaCh0aGlzLiNsb2FkUHJldmlld0J1dHRvbigncGxheS1wYXVzZS1idXR0b24uc3ZnJykpO1xuICAgIGJ1dHRvbnMucHVzaCh0aGlzLiNsb2FkUHJldmlld0J1dHRvbigncmlnaHQtYnV0dG9uLnN2ZycpKTtcbiAgICAvLyBDcmVhdGUgcHJldmlldyBjb250YWluZXJcbiAgICBjb25zdCBkaXZQcmV2aWV3Q29udGFpbmVyID0gY3JlYXRlUHJldmlld0NvbnRhaW5lcih0aGlzLnZlY3RvclBpenphSW1nUGF0aFt0aGlzLmN1cklkeFBpenphSW1nXSwgYnV0dG9ucyk7XG4gICAgcmV0dXJuIGRpdlByZXZpZXdDb250YWluZXI7XG4gIH1cbiAgcHJlcGFyZU1lbnUoKSB7XG4gICAgLy8gQ3JlYXRlIHRoZSBtZW51IGNvbnRhaW5lclxuICAgIGNvbnN0IGRpdk1lbnVDb250YWluZXIgPSBjcmVhdGVNZW51Q29udGFpbmVyKCk7XG4gICAgLy8gRm9yIGVhY2ggZGlzaCBjb250YWluZXJcbiAgICB0aGlzLm1lbnUuZm9yRWFjaCgoZGlzaENvbnRhaW5lcikgPT4ge1xuICAgICAgLy8gQ3JlYXRlIHRoZSBkaXNoIGNvbnRhaW5lclxuICAgICAgY29uc3QgZGl2RGlzaENvbnRhaW5lciA9IGNyZWF0ZURpc2hDb250YWluZXIoKVxuICAgICAgLy8gQWRkIGluc2lkZSB0aGUgY29udGFpbmVyIHRoZSBkaXNoZXNcbiAgICAgIGRpc2hDb250YWluZXIuZGlzaGVzLmZvckVhY2goKGRpc2gpID0+IHtcbiAgICAgICAgYWRkRGlzaChkaXZEaXNoQ29udGFpbmVyLCBkaXNoKTtcbiAgICAgIH0pO1xuICAgICAgLy8gQWRkIGluc2lkZSB0aGUgbWVudSBjb250YWluZXIgdGhlIGRpc2ggY29udGFpbmVyXG4gICAgICBhZGREaXNoQ29udGFpbmVyKGRpdk1lbnVDb250YWluZXIsIGRpc2hDb250YWluZXIubmFtZSwgZGl2RGlzaENvbnRhaW5lcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNyZWF0ZU1lbnUoZGl2TWVudUNvbnRhaW5lcik7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1lbnVDb250cm9sbGVyIH0gZnJvbSAnQ29udHJvbGxlci9tZW51Q29udHJvbGxlci5qcydcbmltcG9ydCB7IEhvbWVDb250cm9sbGVyIH0gZnJvbSAnQ29udHJvbGxlci9ob21lQ29udHJvbGxlci5qcydcbmltcG9ydCB7IENvbnRhY3RDb250cm9sbGVyIH0gZnJvbSAnQ29udHJvbGxlci9jb250YWN0Q29udHJvbGxlci5qcydcbmltcG9ydCB7IHJlbW92ZUFsbENoaWxkTm9kZXMgfSBmcm9tICdVdGlsaXRpZXMvbm9kZU1hbmFnZXIuanMnXG5cbmV4cG9ydCBjb25zdCBwYWdlVHlwZSA9IHtcbiAgaG9tZTogJ0hvbWUnLFxuICBtZW51OiAnTWVudScsXG4gIGNvbnRhY3Q6ICdDb250YWN0Jyxcbn07XG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWVudUNvbnRyb2xsZXIgPSBuZXcgTWVudUNvbnRyb2xsZXIoKTtcbiAgICB0aGlzLmhvbWVDb250cm9sbGVyID0gbmV3IEhvbWVDb250cm9sbGVyKCk7XG4gICAgdGhpcy5jb250YWN0Q29udHJvbGxlciA9IG5ldyBDb250YWN0Q29udHJvbGxlcigpO1xuICB9XG4gICNzaG93UGFnZShlbGVtZW50cykge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMobWFpbkNvbnRlbnQpO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuICBjaGFuZ2VQYWdlKHBhZ2VOYW1lKSB7XG4gICAgbGV0IGVsZW1lbnRzID0gW107XG4gICAgc3dpdGNoIChwYWdlTmFtZSkge1xuICAgICAgY2FzZSBwYWdlVHlwZS5tZW51OlxuICAgICAgICBlbGVtZW50cyA9IHRoaXMubWVudUNvbnRyb2xsZXIucHJlcGFyZU1lbnUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHBhZ2VUeXBlLmNvbnRhY3Q6XG4gICAgICAgIGVsZW1lbnRzID0gdGhpcy5jb250YWN0Q29udHJvbGxlci5wcmVwYXJlQ29udGFjdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgcGFnZVR5cGUuaG9tZTpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVsZW1lbnRzID0gdGhpcy5ob21lQ29udHJvbGxlci5wcmVwYXJlSG9tZSh0aGlzLm1lbnVDb250cm9sbGVyLnByZXBhcmVQaXp6YVByZXZpZXcoKSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLiNzaG93UGFnZShlbGVtZW50cyk7XG4gIH1cbn0iLCJpbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvbWFwLnBuZydcbmltcG9ydCAqIGFzIG5vZGVNYW5hZ2VyIGZyb20gJ1V0aWxpdGllcy9ub2RlTWFuYWdlci5qcydcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJ1V0aWxpdGllcy9idXR0b24uanMnXG5cbmZ1bmN0aW9uIGNyZWF0ZUluZm9UZXh0RGF0YShmYXRoZXJEaXYsIHRleHQsIHRpdGxlID0gZmFsc2UpIHtcbiAgbm9kZU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgncCcsIGZhdGhlckRpdiwgdGl0bGUgPyAnY29udGFjdFRpdGxlJyA6ICdjb250YWN0SW5mbycsIG51bGwsIHRleHQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmZvKCkge1xuICAvLyBDcmVhdGUgSFRNTCBlbGVtZW50cyB0ZXh0IGNvbnRlbnRcbiAgY29uc3QgZGl2Q29udGFjdCA9IG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGUoJ2RpdicpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ0NPTlRBQ1QnLCB0cnVlKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICdUb2xlZG8gU3QsIDk5LCcpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJzgwMDEwLCBOYXBsZXMsIEl0YWx5Jyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnJyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnMDgxIDEyMyA0NTY3Jyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnT1BFTklORyBIT1VSUycsIHRydWUpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ1R1ZXNkYXkgLSBTYXR1cmRheTonKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICcxMjozMCAtIDE1OjAwJyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnMTk6MDAgLSAyNDowMCcpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJycpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ1N1bmRheTogMTk6MDAgLSAyNDowMCcpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ01vbmRheTogY2xvc2VkJyk7XG4gIHJldHVybiBkaXZDb250YWN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbigpIHtcbiAgY29uc3QgZGl2TG9jYXRpb24gPSBub2RlTWFuYWdlci5jcmVhdGVOb2RlKCdkaXYnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkxvY2F0aW9uLCAnV0hFUkUgV0UgQVJFJywgdHJ1ZSk7XG4gIG5vZGVNYW5hZ2VyLmNyZWF0ZUFkZE5vZGVJbWcoJ21hcC5wbmcnLCAnbWFwTG9jYXRpb24nLCBkaXZMb2NhdGlvbik7XG4gIHJldHVybiBkaXZMb2NhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gIGxldCBlbGVtZW50cyA9IFtdO1xuICBjb25zdCBkaXZNYWluID0gbm9kZU1hbmFnZXIuY3JlYXRlTm9kZUNsYXNzKCdkaXYnLCAnZ3JpZENvbnRhY3QnKTtcbiAgLy8gQWRkIHRvIG1haW4gZ3JpZFxuICBub2RlTWFuYWdlci5hZGROb2RlQ2hpbGQoZGl2TWFpbiwgY3JlYXRlSW5mbygpKTtcbiAgbm9kZU1hbmFnZXIuYWRkTm9kZUNoaWxkKGRpdk1haW4sIGNyZWF0ZUxvY2F0aW9uKCkpO1xuICBub2RlTWFuYWdlci5hZGROb2RlQ2hpbGQoZGl2TWFpbiwgY3JlYXRlQnV0dG9uKCdCT09LIEEgVEFCTEUnKSk7XG4gIGVsZW1lbnRzLnB1c2goZGl2TWFpbik7XG4gIHJldHVybiBlbGVtZW50cztcbn0iLCJleHBvcnQgY2xhc3MgRGlzaHsgXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbiB8fCBcIlwiO1xuICB9XG4gIGdldCBnZXROYW1lKCkgeyByZXR1cm4gdGhpcy5uYW1lOyB9XG4gIGdldCBnZXREZXNjcmlwdGlvbigpIHsgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247IH1cbiAgZ2V0IGdldFByaWNlKCkgeyByZXR1cm4gdGhpcy5wcmljZTsgfVxufSIsImltcG9ydCB7IERpc2ggfSBmcm9tICdNb2R1bGVzL2Rpc2guanMnXG5cbmV4cG9ydCBjbGFzcyBEaXNoQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kaXNoZXMgPSBbXTtcbiAgfVxuICBpbnNlcnREaXNoKGRpc2gpIHtcbiAgICB0aGlzLmRpc2hlcy5wdXNoKGRpc2gpO1xuICB9XG4gIGFkZERpc2gobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgZGlzaCA9IG5ldyBEaXNoKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbik7XG4gICAgdGhpcy5pbnNlcnREaXNoKGRpc2gpO1xuICB9XG4gIGdldCBnZXREaXNoTmFtZSgpIHsgcmV0dXJuIHRoaXMubmFtZTsgfVxuICBnZXQgZ2V0RGlzaGVzKCkgeyByZXR1cm4gdGhpcy5kaXNoZXM7IH1cbn0iLCJpbXBvcnQgKiBhcyBub2RlTWFuYWdlciBmcm9tICdVdGlsaXRpZXMvbm9kZU1hbmFnZXIuanMnXG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVUaXRsZSgpIHtcbiAgcmV0dXJuIG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGVDb250ZW50KCdwJywgJ1RSQURJVElPTiBBTkQgSU5OT1ZBVElPTicsICdob21lVGl0bGUnKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZURlc2NyaXB0aW9uKCkge1xuICBjb25zdCBkZXNjcmlwdGlvbnMgPSBbXTtcbiAgZGVzY3JpcHRpb25zLnB1c2gobm9kZU1hbmFnZXIuY3JlYXRlTm9kZUNvbnRlbnQoJ3AnLCAnQSBsaWZlbG9uZyBwYXNzaW9uIGZvciB0aGUgdHJhZGl0aW9uIG9mIE5lYXBvbGl0YW4gcGl6emEgYW5kIGl04oCZcyB0cnVlIGZsYXZvdXJzLicpKTtcbiAgZGVzY3JpcHRpb25zLnB1c2gobm9kZU1hbmFnZXIuY3JlYXRlTm9kZUNvbnRlbnQoJ3AnLCAnQSBkb3VnaCBsZWF2ZW5lZCBmb3IgMjQgaG91cnMsIGJ1dCBhbHNvIG1hbnkgZGVsaWNpb3VzIGFuZCBhcHBldGl6aW5nIHByb3Bvc2FscyB3aXRoIHRoZSBzcGVjaWFsdGllcyBvZiBvdXIgY2hpcCBzaG9wLicpKTtcbiAgY29uc3QgZGl2RGVzY3JpcHRpb24gPSBub2RlTWFuYWdlci5jcmVhdGVOb2RlKCdkaXYnLCAnaG9tZURlc2NyaXB0aW9uJywgbnVsbCwgbnVsbCwgZGVzY3JpcHRpb25zKTtcbiAgcmV0dXJuIGRpdkRlc2NyaXB0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSG9tZShpbWdQcmV2aWV3Q29udGFpbmVyKSB7XG4gIGxldCBlbGVtZW50cyA9IFtdO1xuICBlbGVtZW50cy5wdXNoKGNyZWF0ZUhvbWVUaXRsZSgpKTtcbiAgZWxlbWVudHMucHVzaChjcmVhdGVIb21lRGVzY3JpcHRpb24oKSk7XG4gIGVsZW1lbnRzLnB1c2goaW1nUHJldmlld0NvbnRhaW5lcik7XG4gIHJldHVybiBlbGVtZW50cztcbn0iLCJpbXBvcnQgKiBhcyBub2RlTWFuYWdlciBmcm9tICdVdGlsaXRpZXMvbm9kZU1hbmFnZXIuanMnXG5cbmZ1bmN0aW9uIGNyZWF0ZVByZXZpZXdQaXp6YUNvbnRhaW5lcihkaXZDb250YWluZXIsIGltYWdlRmlsZU5hbWUpIHtcbiAgLy8gQWRkIGltYWdlIGluIHBpenphIGNvbnRhaW5lciBhbmQgaW5zaWRlIGRpdiBjb250YWluZXJcbiAgbm9kZU1hbmFnZXIuYWRkTm9kZUNoaWxkKGRpdkNvbnRhaW5lciwgXG4gICAgbm9kZU1hbmFnZXIuY3JlYXRlTm9kZSgnZGl2JywgJ3ByZXZpZXdQaXp6YUNvbnRhaW5lcicsIG51bGwsIG51bGwsIFxuICAgICAgbm9kZU1hbmFnZXIuY3JlYXRlTm9kZUltZ0lEKGltYWdlRmlsZU5hbWUsICdwcmV2aWV3JywgJ2lkUHJldmlld1BpenphJylcbiAgICApXG4gICk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByZXZpZXdDb250cm9sKGRpdkNvbnRhaW5lciwgYnV0dG9ucyA9IG51bGwpIHtcbiAgaWYoKGJ1dHRvbnMpIHx8IChidXR0b25zLmxlbmd0aCA+IDApKSB7XG4gICAgLy8gQ3JlYXRlIGNvbnRhaW5lciBjb250cm9sIGZvciBwcmV2aWV3XG4gICAgbm9kZU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgZGl2Q29udGFpbmVyLCAncHJldmlld0NvbnRhaW5lckN0cmwnLCBudWxsLCBudWxsLCBidXR0b25zKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJldmlld0NvbnRhaW5lcihpbWFnZUZpbGVOYW1lLCBidXR0b25zID0gbnVsbCkge1xuICAvLyBGaWxsIHByZXZpZXcgY29udGFpbmVyIGltYWdlIGFuZCBjb250cm9sc1xuICBjb25zdCBkaXZQcmV2aWV3Q29udGFpbmVyID0gbm9kZU1hbmFnZXIuY3JlYXRlTm9kZUNsYXNzKCdkaXYnLCAncHJldmlld0NvbnRhaW5lcicpO1xuICBjcmVhdGVQcmV2aWV3UGl6emFDb250YWluZXIoZGl2UHJldmlld0NvbnRhaW5lciwgaW1hZ2VGaWxlTmFtZSk7XG4gIGNyZWF0ZVByZXZpZXdDb250cm9sKGRpdlByZXZpZXdDb250YWluZXIsIGJ1dHRvbnMpO1xuICByZXR1cm4gZGl2UHJldmlld0NvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERpc2goY29udGFpbmVyLCBkaXNoKSB7XG4gIGNvbnN0IGRpdiA9IG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGVDbGFzcygnZGl2JywgJ2Rpc2gnKTtcbiAgY29uc3QgZGl2RGlzaCA9IG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGUoJ2RpdicpO1xuICBub2RlTWFuYWdlci5jcmVhdGVBZGROb2RlKCdwJywgZGl2RGlzaCwgbnVsbCwgbnVsbCwgZGlzaC5uYW1lKTtcbiAgbm9kZU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgncCcsIGRpdkRpc2gsIG51bGwsIG51bGwsIGRpc2guZGVzY3JpcHRpb24pO1xuICBub2RlTWFuYWdlci5hZGROb2RlQ2hpbGQoZGl2LCBkaXZEaXNoKTtcbiAgbm9kZU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgncCcsIGRpdiwgbnVsbCwgbnVsbCwgZGlzaC5wcmljZSk7XG4gIG5vZGVNYW5hZ2VyLmFkZE5vZGVDaGlsZChjb250YWluZXIsIGRpdik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEaXNoQ29udGFpbmVyKCkge1xuICByZXR1cm4gbm9kZU1hbmFnZXIuY3JlYXRlTm9kZUNsYXNzKCdkaXYnLCAnZGlzaENvbnRhaW5lcicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGlzaENvbnRhaW5lcihtZW51Q29udGFpbmVyLCBkaXNoQ29udGFpbmVyTmFtZSwgZ3JpZERpc2hDb250YWluZXIpIHtcbiAgbm9kZU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgncCcsIG1lbnVDb250YWluZXIsICdkaXNoQ29udGFpbmVyTmFtZScsIG51bGwsIGRpc2hDb250YWluZXJOYW1lKTtcbiAgbm9kZU1hbmFnZXIuYWRkTm9kZUNoaWxkKG1lbnVDb250YWluZXIsIGdyaWREaXNoQ29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbnVDb250YWluZXIoKSB7XG4gIHJldHVybiBub2RlTWFuYWdlci5jcmVhdGVOb2RlQ2xhc3MoJ2RpdicsICdtZW51TGlzdCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudShtZW51TGlzdCkge1xuICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgZWxlbWVudHMucHVzaChtZW51TGlzdCk7XG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVBpenphUHJldmlldyhpbWFnZUZpbGVOYW1lKSB7XG4gIG5vZGVNYW5hZ2VyLnVwZGF0ZU5vZGVJbWcoaW1hZ2VGaWxlTmFtZSwgZG9jdW1lbnQsICcjaWRQcmV2aWV3UGl6emEnKTtcbn0iLCJpbXBvcnQgKiBhcyBub2RlTWFuYWdlciBmcm9tICdVdGlsaXRpZXMvbm9kZU1hbmFnZXIuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdXR0b24oYnRuVGV4dCA9ICcnLCBzdmdJY29uRmlsZU5hbWUgPSBudWxsLCBjYkV2ZW50ID0gdW5kZWZpbmVkKSB7XG4gIGNvbnN0IGJ0biA9IG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGVDbGFzcygnYnV0dG9uJywgJ25hdkJ1dHRvbicpO1xuICAvLyBJbnNlcnQgaWNvbiB3aGVuIGV4aXN0XG4gIGlmKHN2Z0ljb25GaWxlTmFtZSkge1xuICAgIG5vZGVNYW5hZ2VyLmNyZWF0ZUFkZE5vZGVJbWcoc3ZnSWNvbkZpbGVOYW1lLCBidG5UZXh0LCBidG4sICdpY29uJyk7XG4gIH1cbiAgLy8gQWRkIHRleHQgd2hlbiBjb250YWlucyBzb21ldGhpbmdcbiAgaWYoYnRuVGV4dC5sZW5ndGggPiAwKSB7XG4gICAgbm9kZU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgncCcsIGJ0biwgbnVsbCwgbnVsbCwgYnRuVGV4dCk7XG4gIH1cbiAgLy8gQWRkIGJ1dHRvbiBldmVudFxuICBidG4ub25jbGljayA9IGNiRXZlbnQ7XG4gIHJldHVybiBidG47ICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltYWdlQnV0dG9uKHN2Z0ljb25GaWxlTmFtZSwgY2JFdmVudCA9IHVuZGVmaW5lZCkge1xuICByZXR1cm4gY3JlYXRlQnV0dG9uKCcnLCBzdmdJY29uRmlsZU5hbWUsIGNiRXZlbnQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWFnZUxpbmtCdXR0b24obGluaywgc3ZnSWNvbkZpbGVOYW1lKSB7XG4gIGNvbnN0IG5vZGUgPSBub2RlTWFuYWdlci5jcmVhdGVOb2RlTGluayhsaW5rLCBudWxsLCBudWxsLCBudWxsLCBcbiAgICBub2RlTWFuYWdlci5jcmVhdGVOb2RlSW1nKHN2Z0ljb25GaWxlTmFtZSwgJ2ltYWdlTGluaycsICdpY29uLWxpbmsnKVxuICApO1xuICByZXR1cm4gbm9kZTtcbn0iLCJleHBvcnQgY2xhc3MgQ2xvY2sge1xuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZSwgY2JGdW5jLCB1cGRhdGVUaW1lU2VjKSB7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHRoaXMuZXZlbnRDYkZ1bmMgPSBjYkZ1bmM7XG4gICAgdGhpcy51cGRhdGVUaW1lU2VjID0gdXBkYXRlVGltZVNlYztcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgfVxuXG4gICNyZW5kZXIoKSB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGlmIChob3VycyA8IDEwKSBob3VycyA9ICcwJyArIGhvdXJzO1xuXG4gICAgbGV0IG1pbnMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgICBpZiAobWlucyA8IDEwKSBtaW5zID0gJzAnICsgbWlucztcblxuICAgIGxldCBzZWNzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgaWYgKHNlY3MgPCAxMCkgc2VjcyA9ICcwJyArIHNlY3M7XG5cbiAgICBsZXQgY3VyVGltZSA9IHRoaXMudGVtcGxhdGVcbiAgICAgIC5yZXBsYWNlKCdoJywgaG91cnMpXG4gICAgICAucmVwbGFjZSgnbScsIG1pbnMpXG4gICAgICAucmVwbGFjZSgncycsIHNlY3MpO1xuXG4gICAgdGhpcy5ldmVudENiRnVuYygpO1xuICB9XG5cbiAgZ2V0IGlzUnVubmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5ydW5uaW5nO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICB0aGlzLiNyZW5kZXIoKTtcbiAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy4jcmVuZGVyKCksIHRoaXMudXBkYXRlVGltZVNlYyk7XG4gIH1cbn0iLCJcbi8vUmV0dXJucyB0cnVlIGlmIGl0IGlzIGEgRE9NIG5vZGVcbmV4cG9ydCBmdW5jdGlvbiBpc05vZGUobyl7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIE5vZGUgPT09IFwib2JqZWN0XCIgPyBvIGluc3RhbmNlb2YgTm9kZSA6IFxuICAgIG8gJiYgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG8ubm9kZVR5cGUgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIG8ubm9kZU5hbWU9PT1cInN0cmluZ1wiXG4gICk7XG59XG5cbi8vUmV0dXJucyB0cnVlIGlmIGl0IGlzIGEgRE9NIGVsZW1lbnQgICAgXG5leHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50KG8pe1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gXCJvYmplY3RcIiA/IG8gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA6IC8vRE9NMlxuICAgIG8gJiYgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiYgbyAhPT0gbnVsbCAmJiBvLm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiBvLm5vZGVOYW1lPT09XCJzdHJpbmdcIlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZSh0eXBlLCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwsIGNvbnRlbnQgPSBudWxsLCBjaGlsZHJlbiA9IG51bGwpIHtcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIC8vIEFkZCBjbGFzcyBuYW1lIG9yIElEXG4gIGlmKGNsYXNzTmFtZSkgZWxlbS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIGlmKGlkKSBlbGVtLmlkID0gaWQ7XG4gIC8vIEFkZCB0ZXh0IGNvbnRlbnRcbiAgaWYoY29udGVudCkgZWxlbS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gIC8vIEV2ZW50dWFsbHkgYWRkIGNoaWxkIG9yIGNoaWxkcmVuXG4gIGFkZE5vZGVDaGlsZChlbGVtLCBjaGlsZHJlbik7XG4gIHJldHVybiBlbGVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZUNvbnRlbnQodHlwZSwgY29udGVudCwgY2xhc3NOYW1lID0gbnVsbCwgaWQgPSBudWxsKSB7XG4gIHJldHVybiBjcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIG51bGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZUNsYXNzKHR5cGUsIGNsYXNzTmFtZSwgaWQgPSBudWxsLCBjb250ZW50ID0gbnVsbCkge1xuICByZXR1cm4gY3JlYXRlTm9kZSh0eXBlLCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBudWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGVJRCh0eXBlLCBpZCwgY2xhc3NOYW1lID0gbnVsbCwgY29udGVudCA9IG51bGwpIHtcbiAgcmV0dXJuIGNyZWF0ZU5vZGUodHlwZSwgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgbnVsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlSW1nKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCkge1xuICBjb25zdCBmaWxlRnVsbFBhdGggPSAnLi9pbWFnZXMvJyArIGltZ0ZpbGVOYW1lO1xuICBjb25zdCBub2RlID0gY3JlYXRlTm9kZSgnaW1nJywgY2xhc3NOYW1lLCBpZCwgbnVsbCwgbnVsbCk7XG4gIG5vZGUuc2V0QXR0cmlidXRlKCdzcmMnLCBmaWxlRnVsbFBhdGgpO1xuICBub2RlLnNldEF0dHJpYnV0ZSgnYWx0JywgYWx0KTtcbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlSW1nQ2xhc3MoaW1nRmlsZU5hbWUsIGFsdCwgY2xhc3NOYW1lLCBpZCA9IG51bGwpIHtcbiAgcmV0dXJuIGNyZWF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGFsdCwgY2xhc3NOYW1lLCBpZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlSW1nSUQoaW1nRmlsZU5hbWUsIGFsdCwgaWQsIGNsYXNzTmFtZSA9IG51bGwpIHtcbiAgcmV0dXJuIGNyZWF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGFsdCwgY2xhc3NOYW1lLCBpZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlTGluayhsaW5rLCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwsIGNvbnRlbnQgPSBudWxsLCBjaGlsZHJlbiA9IG51bGwpIHtcbiAgY29uc3Qgbm9kZSA9IGNyZWF0ZU5vZGUoJ2EnLCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBjaGlsZHJlbik7XG4gIG5vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgbGluayk7XG4gIG5vZGUuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTm9kZUNoaWxkKGZhdGhlciwgY2hpbGRyZW4pIHtcbiAgaWYoY2hpbGRyZW4pIHtcbiAgICBpZihBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkgeyAvLyBDb250YWlucyBtb3JlIHRoYW4gb25lIGNoaWxkIGluIEFycmF5XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgZmF0aGVyLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZihpc0VsZW1lbnQoY2hpbGRyZW4pKSB7IC8vIENvbnRhaW5zIGp1c3Qgb25lIGNoaWxkXG4gICAgICBmYXRoZXIuYXBwZW5kQ2hpbGQoY2hpbGRyZW4pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWRkTm9kZSh0eXBlLCBmYXRoZXIsIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCwgY29udGVudCA9IG51bGwsIGNoaWxkcmVuID0gbnVsbCkge1xuICAvLyBBcHBlbmQgdGhlIG5ldyBub2RlIGluIGZhdGhlclxuICBmYXRoZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTm9kZSh0eXBlLCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBjaGlsZHJlbikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWRkTm9kZUltZyhpbWdGaWxlTmFtZSwgYWx0LCBmYXRoZXIsIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCwgY29udGVudCA9IG51bGwsIGNoaWxkcmVuID0gbnVsbCkge1xuICAvLyBBcHBlbmQgdGhlIG5ldyBub2RlIGluIGZhdGhlclxuICBmYXRoZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTm9kZUltZyhpbWdGaWxlTmFtZSwgYWx0LCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBjaGlsZHJlbikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTm9kZUltZyhpbWdGaWxlTmFtZSwgZmF0aGVyLCBzZWxlY3Rvcikge1xuICBjb25zdCBpbWdOb2RlID0gZmF0aGVyLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICBpZihpbWdOb2RlKSBpbWdOb2RlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vaW1hZ2VzLycgKyBpbWdGaWxlTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvc3ZnL2hvbWUuc3ZnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3N2Zy9tZW51LnN2ZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9zdmcvY29udGFjdC5zdmcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvc3ZnL2dpdGh1Yi5zdmcnXG5pbXBvcnQgeyBwYWdlVHlwZSwgTmF2aWdhdGlvbkNvbnRyb2xsZXIgfSBmcm9tICdDb250cm9sbGVyL25hdkNvbnRyb2xsZXIuanMnXG5pbXBvcnQgeyBjcmVhdGVCdXR0b24sIGNyZWF0ZUltYWdlTGlua0J1dHRvbiB9IGZyb20gJ1V0aWxpdGllcy9idXR0b24uanMnXG5pbXBvcnQgKiBhcyBub2RlTWFuYWdlciBmcm9tICdVdGlsaXRpZXMvbm9kZU1hbmFnZXIuanMnXG5cbmV4cG9ydCBjbGFzcyBTa2VsZXRvbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm5hdkNvbnRyb2xsZXIgPSBuZXcgTmF2aWdhdGlvbkNvbnRyb2xsZXIoKTtcbiAgfVxuICAjY3JlYXRlTmF2aWdhdGlvbkJ1dHRvbnMoKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IFtdO1xuICAgIGNvbnN0IGJ0bkNiRXZlbnQgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgcEVsZW0gPSBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCdwJyk7XG4gICAgICBpZihwRWxlbSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgbGV0IHBhZ2U7XG4gICAgICBpZihwRWxlbS50ZXh0Q29udGVudCA9PT0gcGFnZVR5cGUuY29udGFjdCkge1xuICAgICAgICBwYWdlID0gcGFnZVR5cGUuY29udGFjdDtcbiAgICAgIH0gZWxzZSBpZihwRWxlbS50ZXh0Q29udGVudCA9PT0gcGFnZVR5cGUubWVudSkge1xuICAgICAgICBwYWdlID0gcGFnZVR5cGUubWVudTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhZ2UgPSBwYWdlVHlwZS5ob21lO1xuICAgICAgfVxuICAgICAgdGhpcy5uYXZDb250cm9sbGVyLmNoYW5nZVBhZ2UocGFnZSk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIG5vZGUgYW5kIGZpbGwgdGV4dCBpbiBidXR0b24gICAgXG4gICAgYnV0dG9ucy5wdXNoKGNyZWF0ZUJ1dHRvbignSG9tZScsICdob21lLnN2ZycsIGJ0bkNiRXZlbnQpKTtcbiAgICBidXR0b25zLnB1c2goY3JlYXRlQnV0dG9uKCdNZW51JywgJ21lbnUuc3ZnJywgYnRuQ2JFdmVudCkpO1xuICAgIGJ1dHRvbnMucHVzaChjcmVhdGVCdXR0b24oJ0NvbnRhY3QnLCAnY29udGFjdC5zdmcnLCBidG5DYkV2ZW50KSk7XG4gICAgcmV0dXJuIGJ1dHRvbnM7XG4gIH1cbiAgI2NyZWF0ZUhlYWRlcihoZWFkZXIpIHtcbiAgICAvLyBBcHBlbmQgY2hpbGRyZW5cbiAgICBub2RlTWFuYWdlci5jcmVhdGVBZGROb2RlKCdkaXYnLCBoZWFkZXIsICdzaXRlVGl0bGUnLCBudWxsLCAnTGEgQmVsbGEgTmFwb2xpJyk7XG4gICAgbm9kZU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgaGVhZGVyLCAnbmF2aWdhdGlvbicsIG51bGwsIG51bGwsIHRoaXMuI2NyZWF0ZU5hdmlnYXRpb25CdXR0b25zKCkpO1xuICB9XG4gICNjcmVhdGVGb290ZXIoZm9vdGVyKSB7XG4gICAgY29uc3QgY3VyWWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAvLyBBcHBlbmQgdG8gZm9vdGVyXG4gICAgbm9kZU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgncCcsIGZvb3RlciwgbnVsbCwgbnVsbCwgYENvcHlyaWdodCDCqSAke2N1clllYXJ9IEFsZXNzYW5kcm8gQ2Vsb3R0aWApO1xuICAgIG5vZGVNYW5hZ2VyLmFkZE5vZGVDaGlsZChmb290ZXIsIGNyZWF0ZUltYWdlTGlua0J1dHRvbignaHR0cHM6Ly9naXRodWIuY29tL2NlbDgnLCAnZ2l0aHViLnN2ZycpKTtcbiAgfVxuICAjY3JlYXRlTWFpbihtYWluKSB7XG4gICAgbm9kZU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgnZGl2JywgbWFpbiwgJ21haW4tY29udGVudCcpO1xuICB9XG4gIGNyZWF0ZVNrZWxldG9uKGNvbnRlbnQpIHtcbiAgICAvLyBDcmVhdGUgY29udGVudCBlbGVtZW50c1xuICAgIGNvbnN0IGhlYWRlciA9IG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGUoJ2hlYWRlcicpO1xuICAgIGNvbnN0IG1haW4gICA9IG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGUoJ21haW4nKTtcbiAgICBjb25zdCBmb290ZXIgPSBub2RlTWFuYWdlci5jcmVhdGVOb2RlKCdmb290ZXInKTtcbiAgICAvLyBDcmVhdGUgZWxlbWVudHNcbiAgICB0aGlzLiNjcmVhdGVIZWFkZXIoaGVhZGVyKTtcbiAgICB0aGlzLiNjcmVhdGVNYWluKG1haW4pO1xuICAgIHRoaXMuI2NyZWF0ZUZvb3Rlcihmb290ZXIpO1xuICAgIC8vIEFwcGVuZCAnZW0gdG8gYm9keSNjb250ZW50XG4gICAgbm9kZU1hbmFnZXIuYWRkTm9kZUNoaWxkKGNvbnRlbnQsIGhlYWRlcik7XG4gICAgbm9kZU1hbmFnZXIuYWRkTm9kZUNoaWxkKGNvbnRlbnQsIG1haW4pO1xuICAgIG5vZGVNYW5hZ2VyLmFkZE5vZGVDaGlsZChjb250ZW50LCBmb290ZXIpO1xuICAgIHRoaXMubmF2Q29udHJvbGxlci5jaGFuZ2VQYWdlKHBhZ2VUeXBlLmhvbWUpO1xuICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9