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
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__.createAddNode('p', fatherDiv, title ? 'contactTitle' : 'contactInfo', _, text);
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
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__.createAddNodeImg('map.png', 'mapLocation', divLocation, 'mapLocation');
  return divLocation;
}

function createContact() {
  let elements = [];
  const divMain = Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__.createNodeClass('div', 'gridContact');
  // Add to main grid
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__.addNodeChild(divMain, createInfo());
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__.addNodeChild(divMain, createLocation());
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_1__.addNodeChild(divMain, (0,Utilities_button_js__WEBPACK_IMPORTED_MODULE_2__.createButton)('BOOK A TABLE', null, (_) => {
    window.open('https://github.com/cel8');
  }));
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
  const divDescription = Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNode('div', 'homeDescription', _, _, descriptions);
  return divDescription;
}

function createHome(imgPreviewContainer) {
  let elements = [];
  let children = [];
  children.push(createHomeTitle());
  children.push(createHomeDescription());
  children.push(imgPreviewContainer);
  elements.push(Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNode('div', 'gridHome', _, _, children))
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
    Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNode('div', 'previewPizzaContainer', _, _, 
      Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeImgID(imageFileName, 'preview', 'idPreviewPizza')
    )
  );
}

function createPreviewControl(divContainer, buttons = null) {
  if((buttons) || (buttons.length > 0)) {
    // Create container control for preview
    Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createAddNode('div', divContainer, 'previewContainerCtrl', _, _, buttons);
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
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createAddNode('p', divDish, _, _, dish.name);
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createAddNode('p', divDish, _, _, dish.description);
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.addNodeChild(div, divDish);
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createAddNode('p', div, _, _, dish.price);
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.addNodeChild(container, div);
}

function createDishContainer() {
  return Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeClass('div', 'dishContainer');
}

function addDishContainer(menuContainer, dishContainerName, gridDishContainer) {
  Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createAddNode('p', menuContainer, 'dishContainerName', _, dishContainerName);
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
    Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createAddNode('p', btn, _, _, btnText);
  }
  // Add button event
  btn.onclick = cbEvent;
  return btn;  
}

function createImageButton(svgIconFileName, cbEvent = undefined) {
  return createButton('', svgIconFileName, cbEvent)
}

function createImageLinkButton(link, svgIconFileName) {
  const node = Utilities_nodeManager_js__WEBPACK_IMPORTED_MODULE_0__.createNodeLink(link, _, _, _, 
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
  return createNode(type, className, id, content, _);
}

function createNodeClass(type, className, id = null, content = null) {
  return createNode(type, className, id, content, _);
}

function createNodeID(type, id, className = null, content = null) {
  return createNode(type, className, id, content, _);
}

function createNodeImg(imgFileName, alt, className = null, id = null) {
  const fileFullPath = './images/' + imgFileName;
  const node = createNode('img', className, id, _, _);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2Q29udHJvbGxlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEOztBQUUzQztBQUNQO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUVBQWE7QUFDeEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUjRDOztBQUVyQztBQUNQO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMkRBQVU7QUFDckI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1J3RDtBQUdnQjtBQUNqQjtBQUNiO0FBQzFDO0FBQzZDO0FBQ0Y7QUFDRjtBQUNHO0FBQ0o7QUFDRztBQUNGO0FBQ0M7QUFDQztBQUNLOztBQUV6QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBWTtBQUNoQixnQ0FBZ0MsbUVBQWE7QUFDN0M7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUVBQWtCO0FBQzFCO0FBQ0E7QUFDQSxXQUFXLHNFQUFpQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtRUFBa0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHFEQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1RUFBc0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsb0VBQW1CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvRUFBbUI7QUFDbEQ7QUFDQTtBQUNBLFFBQVEseURBQU87QUFDZixPQUFPO0FBQ1A7QUFDQSxNQUFNLGlFQUFnQjtBQUN0QixLQUFLO0FBQ0wsV0FBVywyREFBVTtBQUNyQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRzhCO0FBQ3lCO0FBQ0w7O0FBRWxEO0FBQ0EsRUFBRSxtRUFBeUI7QUFDM0I7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixnRUFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixnRUFBc0I7QUFDNUM7QUFDQSxFQUFFLHNFQUE0QjtBQUM5QjtBQUNBOztBQUVPO0FBQ1A7QUFDQSxrQkFBa0IscUVBQTJCO0FBQzdDO0FBQ0EsRUFBRSxrRUFBd0I7QUFDMUIsRUFBRSxrRUFBd0I7QUFDMUIsRUFBRSxrRUFBd0IsVUFBVSxpRUFBWTtBQUNoRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQix5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25COzs7Ozs7Ozs7Ozs7Ozs7QUNUc0M7O0FBRS9CO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpREFBSTtBQUN6QjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLG9CQUFvQjtBQUNwQjs7Ozs7Ozs7Ozs7Ozs7O0FDaEJ1RDs7QUFFdkQ7QUFDQSxTQUFTLHVFQUE2QjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHVFQUE2QjtBQUNqRCxvQkFBb0IsdUVBQTZCO0FBQ2pELHlCQUF5QixnRUFBc0I7QUFDL0M7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0VBQXNCO0FBQ3RDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCdUQ7O0FBRXZEO0FBQ0E7QUFDQSxFQUFFLGtFQUF3QjtBQUMxQixJQUFJLGdFQUFzQjtBQUMxQixNQUFNLHFFQUEyQjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtRUFBeUI7QUFDN0I7QUFDQTs7QUFFTztBQUNQO0FBQ0EsOEJBQThCLHFFQUEyQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLGNBQWMscUVBQTJCO0FBQ3pDLGtCQUFrQixnRUFBc0I7QUFDeEMsRUFBRSxtRUFBeUI7QUFDM0IsRUFBRSxtRUFBeUI7QUFDM0IsRUFBRSxrRUFBd0I7QUFDMUIsRUFBRSxtRUFBeUI7QUFDM0IsRUFBRSxrRUFBd0I7QUFDMUI7O0FBRU87QUFDUCxTQUFTLHFFQUEyQjtBQUNwQzs7QUFFTztBQUNQLEVBQUUsbUVBQXlCO0FBQzNCLEVBQUUsa0VBQXdCO0FBQzFCOztBQUVPO0FBQ1AsU0FBUyxxRUFBMkI7QUFDcEM7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLEVBQUUsbUVBQXlCO0FBQzNCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEdUQ7O0FBRWhEO0FBQ1AsY0FBYyxxRUFBMkI7QUFDekM7QUFDQTtBQUNBLElBQUksc0VBQTRCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLElBQUksbUVBQXlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1AsZUFBZSxvRUFBMEI7QUFDekMsSUFBSSxtRUFBeUI7QUFDN0I7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTSwrQkFBK0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONkQ7QUFDQTtBQUNNO0FBQ0w7O0FBRXZEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLDhCQUE4Qix3RUFBYztBQUM1Qyw4QkFBOEIsd0VBQWM7QUFDNUMsaUNBQWlDLDhFQUFpQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZFQUFtQjtBQUN2QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvY29udHJvbGxlci9jb250YWN0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9jb250cm9sbGVyL2hvbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL2NvbnRyb2xsZXIvbWVudUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvZGlzaC5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9tb2R1bGVzL2Rpc2hDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy91dGlsaXRpZXMvYnV0dG9uLmpzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50Ly4vc3JjL3V0aWxpdGllcy9jbG9jay5qcyIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy91dGlsaXRpZXMvbm9kZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3BfcmVzdGF1cmFudC8uL3NyYy9jb250cm9sbGVyL25hdkNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGFjdCB9IGZyb20gJ01vZHVsZXMvY29udGFjdC5qcydcblxuZXhwb3J0IGNsYXNzIENvbnRhY3RDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbiAgcHJlcGFyZUNvbnRhY3QoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNvbnRhY3QoKTtcbiAgfVxufSIsImltcG9ydCB7IGNyZWF0ZUhvbWUgfSBmcm9tICdNb2R1bGVzL2hvbWUuanMnXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG4gIHByZXBhcmVIb21lKGltZ1ByZXZpZXdDb250YWluZXIpIHtcbiAgICByZXR1cm4gY3JlYXRlSG9tZShpbWdQcmV2aWV3Q29udGFpbmVyKTtcbiAgfVxufSIsImltcG9ydCB7IERpc2hDb250YWluZXIgfSBmcm9tICdNb2R1bGVzL2Rpc2hDb250YWluZXIuanMnXG5pbXBvcnQgeyBjcmVhdGVQcmV2aWV3Q29udGFpbmVyLCBjaGFuZ2VQaXp6YVByZXZpZXcsIFxuICAgICAgICAgIGNyZWF0ZU1lbnUsIGFkZERpc2gsIGNyZWF0ZURpc2hDb250YWluZXIsXG4gICAgICAgICAgYWRkRGlzaENvbnRhaW5lciwgY3JlYXRlTWVudUNvbnRhaW5lciB9IGZyb20gJ01vZHVsZXMvbWVudS5qcydcbmltcG9ydCB7IGNyZWF0ZUltYWdlQnV0dG9uIH0gZnJvbSAnVXRpbGl0aWVzL2J1dHRvbi5qcydcbmltcG9ydCB7IENsb2NrIH0gZnJvbSAnVXRpbGl0aWVzL2Nsb2NrLmpzJ1xuLy8gQXNzZXRzIGRhdGFcbmltcG9ydCBkYXRhTWVudSBmcm9tICdBc3NldHMvZGF0YS9tZW51Lmpzb24nO1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3BpenphLW1hcmdoZXJpdGEuanBnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3BpenphLW1hcmluYXJhLmpwZydcbmltcG9ydCAnQXNzZXRzL2ltYWdlcy9waXp6YS1jYXByaWNjaW9zYS5qcGcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvcGl6emEtZmlsZXR0by5qcGcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvcmlwaWVuby1hbC1mb3Juby5qcGcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvcmlwaWVuby1mcml0dG8uanBnJ1xuaW1wb3J0ICdBc3NldHMvaW1hZ2VzL3N2Zy9sZWZ0LWJ1dHRvbi5zdmcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvc3ZnL3JpZ2h0LWJ1dHRvbi5zdmcnXG5pbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvc3ZnL3BsYXktcGF1c2UtYnV0dG9uLnN2ZydcblxuZXhwb3J0IGNsYXNzIE1lbnVDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGggPSBbXTtcbiAgICB0aGlzLmN1cklkeFBpenphSW1nID0gMDtcbiAgICB0aGlzLm1lbnUgPSBbXTtcbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdDbG9jayA9IG51bGw7XG4gICAgdGhpcy4jbG9hZFBpenphVmVjdG9yKCk7XG4gICAgdGhpcy4jbG9hZE1lbnUoKTtcbiAgfVxuICAjbG9hZFBpenphVmVjdG9yKCkge1xuICAgIGlmKDAgPT09IHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLmxlbmd0aCkge1xuICAgICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgucHVzaCgncGl6emEtbWFyZ2hlcml0YS5qcGcnKTtcbiAgICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLnB1c2goJ3BpenphLW1hcmluYXJhLmpwZycpO1xuICAgICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgucHVzaCgncGl6emEtY2FwcmljY2lvc2EuanBnJyk7XG4gICAgICB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5wdXNoKCdwaXp6YS1maWxldHRvLmpwZycpO1xuICAgICAgdGhpcy52ZWN0b3JQaXp6YUltZ1BhdGgucHVzaCgncmlwaWVuby1hbC1mb3Juby5qcGcnKTtcbiAgICAgIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLnB1c2goJ3JpcGllbm8tZnJpdHRvLmpwZycpO1xuICAgIH1cbiAgfVxuICAjbG9hZE1lbnUoKSB7XG4gICAgZGF0YU1lbnUubWFwKChlbGVtKSA9PiB7XG4gICAgICBjb25zdCBkaXNoQ29udGFpbmVyID0gbmV3IERpc2hDb250YWluZXIoZWxlbVsnZGlzaC1uYW1lJ10pO1xuICAgICAgZWxlbVsnbWVudSddLm1hcCgobGlzdCkgPT4ge1xuICAgICAgICBkaXNoQ29udGFpbmVyLmFkZERpc2gobGlzdFsnbmFtZSddLCBsaXN0WydwcmljZSddLCBsaXN0WydkZXNjcmlwdGlvbiddKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5tZW51LnB1c2goZGlzaENvbnRhaW5lcik7XG4gICAgfSk7XG4gIH1cbiAgI2xvYWRQcmV2aWV3QnV0dG9uKGljb25OYW1lKSB7XG4gICAgY29uc3QgYnRuQ2JFdmVudCA9IChfKSA9PiB7XG4gICAgICBpZihpY29uTmFtZS5pbmNsdWRlcygncGxheS1wYXVzZScpKSB7IFxuICAgICAgICAvLyBNYW5hZ2UgZXZlbnQgdGltZXJcbiAgICAgICAgaWYodGhpcy51cGRhdGVQcmV2aWV3Q2xvY2spIHtcbiAgICAgICAgICBpZih0aGlzLnVwZGF0ZVByZXZpZXdDbG9jay5pc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJldmlld0Nsb2NrLnN0b3AoKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByZXZpZXdDbG9jay5zdGFydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYoaWNvbk5hbWUuaW5jbHVkZXMoJ3JpZ2h0JykpIHtcbiAgICAgICAgICB0aGlzLmN1cklkeFBpenphSW1nID0gKHRoaXMuY3VySWR4UGl6emFJbWcgKyAxKSAlIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmN1cklkeFBpenphSW1nID0gKHRoaXMuY3VySWR4UGl6emFJbWcgLSAxKSAlIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLmxlbmd0aDtcbiAgICAgICAgICAvLyBIYW5kbGUgbmVnYXRpdmUgbW9kdWxvXG4gICAgICAgICAgaWYodGhpcy5jdXJJZHhQaXp6YUltZyA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuY3VySWR4UGl6emFJbWcgPSAoKHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLmxlbmd0aCAtIDEgPj0gMCkgPyB0aGlzLnZlY3RvclBpenphSW1nUGF0aC5sZW5ndGggLSAxIDogMCk7XG4gICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICBjaGFuZ2VQaXp6YVByZXZpZXcodGhpcy52ZWN0b3JQaXp6YUltZ1BhdGhbdGhpcy5jdXJJZHhQaXp6YUltZ10pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlSW1hZ2VCdXR0b24oaWNvbk5hbWUsIGJ0bkNiRXZlbnQpO1xuICB9XG4gIHByZXBhcmVQaXp6YVByZXZpZXcoKSB7XG4gICAgbGV0IGJ1dHRvbnMgPSBbXTtcbiAgICBjb25zdCBjaGFuZ2VJbWFnZUNiRXZlbnQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmN1cklkeFBpenphSW1nID0gKHRoaXMuY3VySWR4UGl6emFJbWcgKyAxKSAlIHRoaXMudmVjdG9yUGl6emFJbWdQYXRoLmxlbmd0aDtcbiAgICAgIGNoYW5nZVBpenphUHJldmlldyh0aGlzLnZlY3RvclBpenphSW1nUGF0aFt0aGlzLmN1cklkeFBpenphSW1nXSk7XG4gICAgfVxuICAgIC8vIEF1dG9tYXRpYyB1cGRhdGVcbiAgICBpZighdGhpcy51cGRhdGVQcmV2aWV3Q2xvY2spIHtcbiAgICAgIHRoaXMudXBkYXRlUHJldmlld0Nsb2NrID0gbmV3IENsb2NrKCdoOm06cycsIGNoYW5nZUltYWdlQ2JFdmVudCwgNTAwMCk7XG4gICAgfVxuICAgIC8vIENyZWF0ZSBjb250cm9sIGJ1dHRvbnNcbiAgICBidXR0b25zLnB1c2godGhpcy4jbG9hZFByZXZpZXdCdXR0b24oJ2xlZnQtYnV0dG9uLnN2ZycpKTtcbiAgICBidXR0b25zLnB1c2godGhpcy4jbG9hZFByZXZpZXdCdXR0b24oJ3BsYXktcGF1c2UtYnV0dG9uLnN2ZycpKTtcbiAgICBidXR0b25zLnB1c2godGhpcy4jbG9hZFByZXZpZXdCdXR0b24oJ3JpZ2h0LWJ1dHRvbi5zdmcnKSk7XG4gICAgLy8gQ3JlYXRlIHByZXZpZXcgY29udGFpbmVyXG4gICAgY29uc3QgZGl2UHJldmlld0NvbnRhaW5lciA9IGNyZWF0ZVByZXZpZXdDb250YWluZXIodGhpcy52ZWN0b3JQaXp6YUltZ1BhdGhbdGhpcy5jdXJJZHhQaXp6YUltZ10sIGJ1dHRvbnMpO1xuICAgIHJldHVybiBkaXZQcmV2aWV3Q29udGFpbmVyO1xuICB9XG4gIHByZXBhcmVNZW51KCkge1xuICAgIC8vIENyZWF0ZSB0aGUgbWVudSBjb250YWluZXJcbiAgICBjb25zdCBkaXZNZW51Q29udGFpbmVyID0gY3JlYXRlTWVudUNvbnRhaW5lcigpO1xuICAgIC8vIEZvciBlYWNoIGRpc2ggY29udGFpbmVyXG4gICAgdGhpcy5tZW51LmZvckVhY2goKGRpc2hDb250YWluZXIpID0+IHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgZGlzaCBjb250YWluZXJcbiAgICAgIGNvbnN0IGRpdkRpc2hDb250YWluZXIgPSBjcmVhdGVEaXNoQ29udGFpbmVyKClcbiAgICAgIC8vIEFkZCBpbnNpZGUgdGhlIGNvbnRhaW5lciB0aGUgZGlzaGVzXG4gICAgICBkaXNoQ29udGFpbmVyLmRpc2hlcy5mb3JFYWNoKChkaXNoKSA9PiB7XG4gICAgICAgIGFkZERpc2goZGl2RGlzaENvbnRhaW5lciwgZGlzaCk7XG4gICAgICB9KTtcbiAgICAgIC8vIEFkZCBpbnNpZGUgdGhlIG1lbnUgY29udGFpbmVyIHRoZSBkaXNoIGNvbnRhaW5lclxuICAgICAgYWRkRGlzaENvbnRhaW5lcihkaXZNZW51Q29udGFpbmVyLCBkaXNoQ29udGFpbmVyLm5hbWUsIGRpdkRpc2hDb250YWluZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBjcmVhdGVNZW51KGRpdk1lbnVDb250YWluZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgJ0Fzc2V0cy9pbWFnZXMvbWFwLnBuZydcbmltcG9ydCAqIGFzIG5vZGVNYW5hZ2VyIGZyb20gJ1V0aWxpdGllcy9ub2RlTWFuYWdlci5qcydcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJ1V0aWxpdGllcy9idXR0b24uanMnXG5cbmZ1bmN0aW9uIGNyZWF0ZUluZm9UZXh0RGF0YShmYXRoZXJEaXYsIHRleHQsIHRpdGxlID0gZmFsc2UpIHtcbiAgbm9kZU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgncCcsIGZhdGhlckRpdiwgdGl0bGUgPyAnY29udGFjdFRpdGxlJyA6ICdjb250YWN0SW5mbycsIF8sIHRleHQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmZvKCkge1xuICAvLyBDcmVhdGUgSFRNTCBlbGVtZW50cyB0ZXh0IGNvbnRlbnRcbiAgY29uc3QgZGl2Q29udGFjdCA9IG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGUoJ2RpdicpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ0NPTlRBQ1QnLCB0cnVlKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICdUb2xlZG8gU3QsIDk5LCcpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJzgwMDEwLCBOYXBsZXMsIEl0YWx5Jyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnJyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnMDgxIDEyMyA0NTY3Jyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnT1BFTklORyBIT1VSUycsIHRydWUpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ1R1ZXNkYXkgLSBTYXR1cmRheTonKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkNvbnRhY3QsICcxMjozMCAtIDE1OjAwJyk7XG4gIGNyZWF0ZUluZm9UZXh0RGF0YShkaXZDb250YWN0LCAnMTk6MDAgLSAyNDowMCcpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJycpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ1N1bmRheTogMTk6MDAgLSAyNDowMCcpO1xuICBjcmVhdGVJbmZvVGV4dERhdGEoZGl2Q29udGFjdCwgJ01vbmRheTogY2xvc2VkJyk7XG4gIHJldHVybiBkaXZDb250YWN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbigpIHtcbiAgY29uc3QgZGl2TG9jYXRpb24gPSBub2RlTWFuYWdlci5jcmVhdGVOb2RlKCdkaXYnKTtcbiAgY3JlYXRlSW5mb1RleHREYXRhKGRpdkxvY2F0aW9uLCAnV0hFUkUgV0UgQVJFJywgdHJ1ZSk7XG4gIG5vZGVNYW5hZ2VyLmNyZWF0ZUFkZE5vZGVJbWcoJ21hcC5wbmcnLCAnbWFwTG9jYXRpb24nLCBkaXZMb2NhdGlvbiwgJ21hcExvY2F0aW9uJyk7XG4gIHJldHVybiBkaXZMb2NhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gIGxldCBlbGVtZW50cyA9IFtdO1xuICBjb25zdCBkaXZNYWluID0gbm9kZU1hbmFnZXIuY3JlYXRlTm9kZUNsYXNzKCdkaXYnLCAnZ3JpZENvbnRhY3QnKTtcbiAgLy8gQWRkIHRvIG1haW4gZ3JpZFxuICBub2RlTWFuYWdlci5hZGROb2RlQ2hpbGQoZGl2TWFpbiwgY3JlYXRlSW5mbygpKTtcbiAgbm9kZU1hbmFnZXIuYWRkTm9kZUNoaWxkKGRpdk1haW4sIGNyZWF0ZUxvY2F0aW9uKCkpO1xuICBub2RlTWFuYWdlci5hZGROb2RlQ2hpbGQoZGl2TWFpbiwgY3JlYXRlQnV0dG9uKCdCT09LIEEgVEFCTEUnLCBudWxsLCAoXykgPT4ge1xuICAgIHdpbmRvdy5vcGVuKCdodHRwczovL2dpdGh1Yi5jb20vY2VsOCcpO1xuICB9KSk7XG4gIGVsZW1lbnRzLnB1c2goZGl2TWFpbik7XG4gIHJldHVybiBlbGVtZW50cztcbn0iLCJleHBvcnQgY2xhc3MgRGlzaHsgXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbiB8fCBcIlwiO1xuICB9XG4gIGdldCBnZXROYW1lKCkgeyByZXR1cm4gdGhpcy5uYW1lOyB9XG4gIGdldCBnZXREZXNjcmlwdGlvbigpIHsgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247IH1cbiAgZ2V0IGdldFByaWNlKCkgeyByZXR1cm4gdGhpcy5wcmljZTsgfVxufSIsImltcG9ydCB7IERpc2ggfSBmcm9tICdNb2R1bGVzL2Rpc2guanMnXG5cbmV4cG9ydCBjbGFzcyBEaXNoQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kaXNoZXMgPSBbXTtcbiAgfVxuICBpbnNlcnREaXNoKGRpc2gpIHtcbiAgICB0aGlzLmRpc2hlcy5wdXNoKGRpc2gpO1xuICB9XG4gIGFkZERpc2gobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgZGlzaCA9IG5ldyBEaXNoKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbik7XG4gICAgdGhpcy5pbnNlcnREaXNoKGRpc2gpO1xuICB9XG4gIGdldCBnZXREaXNoTmFtZSgpIHsgcmV0dXJuIHRoaXMubmFtZTsgfVxuICBnZXQgZ2V0RGlzaGVzKCkgeyByZXR1cm4gdGhpcy5kaXNoZXM7IH1cbn0iLCJpbXBvcnQgKiBhcyBub2RlTWFuYWdlciBmcm9tICdVdGlsaXRpZXMvbm9kZU1hbmFnZXIuanMnXG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVUaXRsZSgpIHtcbiAgcmV0dXJuIG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGVDb250ZW50KCdwJywgJ1RSQURJVElPTiBBTkQgSU5OT1ZBVElPTicsICdob21lVGl0bGUnKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZURlc2NyaXB0aW9uKCkge1xuICBjb25zdCBkZXNjcmlwdGlvbnMgPSBbXTtcbiAgZGVzY3JpcHRpb25zLnB1c2gobm9kZU1hbmFnZXIuY3JlYXRlTm9kZUNvbnRlbnQoJ3AnLCAnQSBsaWZlbG9uZyBwYXNzaW9uIGZvciB0aGUgdHJhZGl0aW9uIG9mIE5lYXBvbGl0YW4gcGl6emEgYW5kIGl04oCZcyB0cnVlIGZsYXZvdXJzLicpKTtcbiAgZGVzY3JpcHRpb25zLnB1c2gobm9kZU1hbmFnZXIuY3JlYXRlTm9kZUNvbnRlbnQoJ3AnLCAnQSBkb3VnaCBsZWF2ZW5lZCBmb3IgMjQgaG91cnMsIGJ1dCBhbHNvIG1hbnkgZGVsaWNpb3VzIGFuZCBhcHBldGl6aW5nIHByb3Bvc2FscyB3aXRoIHRoZSBzcGVjaWFsdGllcyBvZiBvdXIgY2hpcCBzaG9wLicpKTtcbiAgY29uc3QgZGl2RGVzY3JpcHRpb24gPSBub2RlTWFuYWdlci5jcmVhdGVOb2RlKCdkaXYnLCAnaG9tZURlc2NyaXB0aW9uJywgXywgXywgZGVzY3JpcHRpb25zKTtcbiAgcmV0dXJuIGRpdkRlc2NyaXB0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSG9tZShpbWdQcmV2aWV3Q29udGFpbmVyKSB7XG4gIGxldCBlbGVtZW50cyA9IFtdO1xuICBsZXQgY2hpbGRyZW4gPSBbXTtcbiAgY2hpbGRyZW4ucHVzaChjcmVhdGVIb21lVGl0bGUoKSk7XG4gIGNoaWxkcmVuLnB1c2goY3JlYXRlSG9tZURlc2NyaXB0aW9uKCkpO1xuICBjaGlsZHJlbi5wdXNoKGltZ1ByZXZpZXdDb250YWluZXIpO1xuICBlbGVtZW50cy5wdXNoKG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGUoJ2RpdicsICdncmlkSG9tZScsIF8sIF8sIGNoaWxkcmVuKSlcbiAgcmV0dXJuIGVsZW1lbnRzO1xufSIsImltcG9ydCAqIGFzIG5vZGVNYW5hZ2VyIGZyb20gJ1V0aWxpdGllcy9ub2RlTWFuYWdlci5qcydcblxuZnVuY3Rpb24gY3JlYXRlUHJldmlld1BpenphQ29udGFpbmVyKGRpdkNvbnRhaW5lciwgaW1hZ2VGaWxlTmFtZSkge1xuICAvLyBBZGQgaW1hZ2UgaW4gcGl6emEgY29udGFpbmVyIGFuZCBpbnNpZGUgZGl2IGNvbnRhaW5lclxuICBub2RlTWFuYWdlci5hZGROb2RlQ2hpbGQoZGl2Q29udGFpbmVyLCBcbiAgICBub2RlTWFuYWdlci5jcmVhdGVOb2RlKCdkaXYnLCAncHJldmlld1BpenphQ29udGFpbmVyJywgXywgXywgXG4gICAgICBub2RlTWFuYWdlci5jcmVhdGVOb2RlSW1nSUQoaW1hZ2VGaWxlTmFtZSwgJ3ByZXZpZXcnLCAnaWRQcmV2aWV3UGl6emEnKVxuICAgIClcbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJldmlld0NvbnRyb2woZGl2Q29udGFpbmVyLCBidXR0b25zID0gbnVsbCkge1xuICBpZigoYnV0dG9ucykgfHwgKGJ1dHRvbnMubGVuZ3RoID4gMCkpIHtcbiAgICAvLyBDcmVhdGUgY29udGFpbmVyIGNvbnRyb2wgZm9yIHByZXZpZXdcbiAgICBub2RlTWFuYWdlci5jcmVhdGVBZGROb2RlKCdkaXYnLCBkaXZDb250YWluZXIsICdwcmV2aWV3Q29udGFpbmVyQ3RybCcsIF8sIF8sIGJ1dHRvbnMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcmV2aWV3Q29udGFpbmVyKGltYWdlRmlsZU5hbWUsIGJ1dHRvbnMgPSBudWxsKSB7XG4gIC8vIEZpbGwgcHJldmlldyBjb250YWluZXIgaW1hZ2UgYW5kIGNvbnRyb2xzXG4gIGNvbnN0IGRpdlByZXZpZXdDb250YWluZXIgPSBub2RlTWFuYWdlci5jcmVhdGVOb2RlQ2xhc3MoJ2RpdicsICdwcmV2aWV3Q29udGFpbmVyJyk7XG4gIGNyZWF0ZVByZXZpZXdQaXp6YUNvbnRhaW5lcihkaXZQcmV2aWV3Q29udGFpbmVyLCBpbWFnZUZpbGVOYW1lKTtcbiAgY3JlYXRlUHJldmlld0NvbnRyb2woZGl2UHJldmlld0NvbnRhaW5lciwgYnV0dG9ucyk7XG4gIHJldHVybiBkaXZQcmV2aWV3Q29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGlzaChjb250YWluZXIsIGRpc2gpIHtcbiAgY29uc3QgZGl2ID0gbm9kZU1hbmFnZXIuY3JlYXRlTm9kZUNsYXNzKCdkaXYnLCAnZGlzaCcpO1xuICBjb25zdCBkaXZEaXNoID0gbm9kZU1hbmFnZXIuY3JlYXRlTm9kZSgnZGl2Jyk7XG4gIG5vZGVNYW5hZ2VyLmNyZWF0ZUFkZE5vZGUoJ3AnLCBkaXZEaXNoLCBfLCBfLCBkaXNoLm5hbWUpO1xuICBub2RlTWFuYWdlci5jcmVhdGVBZGROb2RlKCdwJywgZGl2RGlzaCwgXywgXywgZGlzaC5kZXNjcmlwdGlvbik7XG4gIG5vZGVNYW5hZ2VyLmFkZE5vZGVDaGlsZChkaXYsIGRpdkRpc2gpO1xuICBub2RlTWFuYWdlci5jcmVhdGVBZGROb2RlKCdwJywgZGl2LCBfLCBfLCBkaXNoLnByaWNlKTtcbiAgbm9kZU1hbmFnZXIuYWRkTm9kZUNoaWxkKGNvbnRhaW5lciwgZGl2KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpc2hDb250YWluZXIoKSB7XG4gIHJldHVybiBub2RlTWFuYWdlci5jcmVhdGVOb2RlQ2xhc3MoJ2RpdicsICdkaXNoQ29udGFpbmVyJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREaXNoQ29udGFpbmVyKG1lbnVDb250YWluZXIsIGRpc2hDb250YWluZXJOYW1lLCBncmlkRGlzaENvbnRhaW5lcikge1xuICBub2RlTWFuYWdlci5jcmVhdGVBZGROb2RlKCdwJywgbWVudUNvbnRhaW5lciwgJ2Rpc2hDb250YWluZXJOYW1lJywgXywgZGlzaENvbnRhaW5lck5hbWUpO1xuICBub2RlTWFuYWdlci5hZGROb2RlQ2hpbGQobWVudUNvbnRhaW5lciwgZ3JpZERpc2hDb250YWluZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudUNvbnRhaW5lcigpIHtcbiAgcmV0dXJuIG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGVDbGFzcygnZGl2JywgJ21lbnVMaXN0Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51KG1lbnVMaXN0KSB7XG4gIGxldCBlbGVtZW50cyA9IFtdO1xuICBlbGVtZW50cy5wdXNoKG1lbnVMaXN0KTtcbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUGl6emFQcmV2aWV3KGltYWdlRmlsZU5hbWUpIHtcbiAgbm9kZU1hbmFnZXIudXBkYXRlTm9kZUltZyhpbWFnZUZpbGVOYW1lLCBkb2N1bWVudCwgJyNpZFByZXZpZXdQaXp6YScpO1xufSIsImltcG9ydCAqIGFzIG5vZGVNYW5hZ2VyIGZyb20gJ1V0aWxpdGllcy9ub2RlTWFuYWdlci5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihidG5UZXh0ID0gJycsIHN2Z0ljb25GaWxlTmFtZSA9IG51bGwsIGNiRXZlbnQgPSB1bmRlZmluZWQpIHtcbiAgY29uc3QgYnRuID0gbm9kZU1hbmFnZXIuY3JlYXRlTm9kZUNsYXNzKCdidXR0b24nLCAnbmF2QnV0dG9uJyk7XG4gIC8vIEluc2VydCBpY29uIHdoZW4gZXhpc3RcbiAgaWYoc3ZnSWNvbkZpbGVOYW1lKSB7XG4gICAgbm9kZU1hbmFnZXIuY3JlYXRlQWRkTm9kZUltZyhzdmdJY29uRmlsZU5hbWUsIGJ0blRleHQsIGJ0biwgJ2ljb24nKTtcbiAgfVxuICAvLyBBZGQgdGV4dCB3aGVuIGNvbnRhaW5zIHNvbWV0aGluZ1xuICBpZihidG5UZXh0Lmxlbmd0aCA+IDApIHtcbiAgICBub2RlTWFuYWdlci5jcmVhdGVBZGROb2RlKCdwJywgYnRuLCBfLCBfLCBidG5UZXh0KTtcbiAgfVxuICAvLyBBZGQgYnV0dG9uIGV2ZW50XG4gIGJ0bi5vbmNsaWNrID0gY2JFdmVudDtcbiAgcmV0dXJuIGJ0bjsgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1hZ2VCdXR0b24oc3ZnSWNvbkZpbGVOYW1lLCBjYkV2ZW50ID0gdW5kZWZpbmVkKSB7XG4gIHJldHVybiBjcmVhdGVCdXR0b24oJycsIHN2Z0ljb25GaWxlTmFtZSwgY2JFdmVudClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltYWdlTGlua0J1dHRvbihsaW5rLCBzdmdJY29uRmlsZU5hbWUpIHtcbiAgY29uc3Qgbm9kZSA9IG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGVMaW5rKGxpbmssIF8sIF8sIF8sIFxuICAgIG5vZGVNYW5hZ2VyLmNyZWF0ZU5vZGVJbWcoc3ZnSWNvbkZpbGVOYW1lLCAnaW1hZ2VMaW5rJywgJ2ljb24tbGluaycpXG4gICk7XG4gIHJldHVybiBub2RlO1xufSIsImV4cG9ydCBjbGFzcyBDbG9jayB7XG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlLCBjYkZ1bmMsIHVwZGF0ZVRpbWVTZWMpIHtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgdGhpcy5ldmVudENiRnVuYyA9IGNiRnVuYztcbiAgICB0aGlzLnVwZGF0ZVRpbWVTZWMgPSB1cGRhdGVUaW1lU2VjO1xuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICB9XG5cbiAgI3JlbmRlcigpIHtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgaWYgKGhvdXJzIDwgMTApIGhvdXJzID0gJzAnICsgaG91cnM7XG5cbiAgICBsZXQgbWlucyA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgIGlmIChtaW5zIDwgMTApIG1pbnMgPSAnMCcgKyBtaW5zO1xuXG4gICAgbGV0IHNlY3MgPSBkYXRlLmdldFNlY29uZHMoKTtcbiAgICBpZiAoc2VjcyA8IDEwKSBzZWNzID0gJzAnICsgc2VjcztcblxuICAgIGxldCBjdXJUaW1lID0gdGhpcy50ZW1wbGF0ZVxuICAgICAgLnJlcGxhY2UoJ2gnLCBob3VycylcbiAgICAgIC5yZXBsYWNlKCdtJywgbWlucylcbiAgICAgIC5yZXBsYWNlKCdzJywgc2Vjcyk7XG5cbiAgICB0aGlzLmV2ZW50Q2JGdW5jKCk7XG4gIH1cblxuICBnZXQgaXNSdW5uaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bm5pbmc7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgIHRoaXMuI3JlbmRlcigpO1xuICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLiNyZW5kZXIoKSwgdGhpcy51cGRhdGVUaW1lU2VjKTtcbiAgfVxufSIsIlxuLy9SZXR1cm5zIHRydWUgaWYgaXQgaXMgYSBET00gbm9kZVxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZShvKXtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgTm9kZSA9PT0gXCJvYmplY3RcIiA/IG8gaW5zdGFuY2VvZiBOb2RlIDogXG4gICAgbyAmJiB0eXBlb2YgbyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygby5ub2RlVHlwZSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2Ygby5ub2RlTmFtZT09PVwic3RyaW5nXCJcbiAgKTtcbn1cblxuLy9SZXR1cm5zIHRydWUgaWYgaXQgaXMgYSBET00gZWxlbWVudCAgICBcbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnQobyl7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIEhUTUxFbGVtZW50ID09PSBcIm9iamVjdFwiID8gbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IDogLy9ET00yXG4gICAgbyAmJiB0eXBlb2YgbyA9PT0gXCJvYmplY3RcIiAmJiBvICE9PSBudWxsICYmIG8ubm9kZVR5cGUgPT09IDEgJiYgdHlwZW9mIG8ubm9kZU5hbWU9PT1cInN0cmluZ1wiXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCwgY29udGVudCA9IG51bGwsIGNoaWxkcmVuID0gbnVsbCkge1xuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgLy8gQWRkIGNsYXNzIG5hbWUgb3IgSURcbiAgaWYoY2xhc3NOYW1lKSBlbGVtLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgaWYoaWQpIGVsZW0uaWQgPSBpZDtcbiAgLy8gQWRkIHRleHQgY29udGVudFxuICBpZihjb250ZW50KSBlbGVtLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgLy8gRXZlbnR1YWxseSBhZGQgY2hpbGQgb3IgY2hpbGRyZW5cbiAgYWRkTm9kZUNoaWxkKGVsZW0sIGNoaWxkcmVuKTtcbiAgcmV0dXJuIGVsZW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlQ29udGVudCh0eXBlLCBjb250ZW50LCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwpIHtcbiAgcmV0dXJuIGNyZWF0ZU5vZGUodHlwZSwgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgXyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb2RlQ2xhc3ModHlwZSwgY2xhc3NOYW1lLCBpZCA9IG51bGwsIGNvbnRlbnQgPSBudWxsKSB7XG4gIHJldHVybiBjcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIF8pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZUlEKHR5cGUsIGlkLCBjbGFzc05hbWUgPSBudWxsLCBjb250ZW50ID0gbnVsbCkge1xuICByZXR1cm4gY3JlYXRlTm9kZSh0eXBlLCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBfKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGFsdCwgY2xhc3NOYW1lID0gbnVsbCwgaWQgPSBudWxsKSB7XG4gIGNvbnN0IGZpbGVGdWxsUGF0aCA9ICcuL2ltYWdlcy8nICsgaW1nRmlsZU5hbWU7XG4gIGNvbnN0IG5vZGUgPSBjcmVhdGVOb2RlKCdpbWcnLCBjbGFzc05hbWUsIGlkLCBfLCBfKTtcbiAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGZpbGVGdWxsUGF0aCk7XG4gIG5vZGUuc2V0QXR0cmlidXRlKCdhbHQnLCBhbHQpO1xuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGVJbWdDbGFzcyhpbWdGaWxlTmFtZSwgYWx0LCBjbGFzc05hbWUsIGlkID0gbnVsbCkge1xuICByZXR1cm4gY3JlYXRlTm9kZUltZyhpbWdGaWxlTmFtZSwgYWx0LCBjbGFzc05hbWUsIGlkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGVJbWdJRChpbWdGaWxlTmFtZSwgYWx0LCBpZCwgY2xhc3NOYW1lID0gbnVsbCkge1xuICByZXR1cm4gY3JlYXRlTm9kZUltZyhpbWdGaWxlTmFtZSwgYWx0LCBjbGFzc05hbWUsIGlkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGVMaW5rKGxpbmssIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCwgY29udGVudCA9IG51bGwsIGNoaWxkcmVuID0gbnVsbCkge1xuICBjb25zdCBub2RlID0gY3JlYXRlTm9kZSgnYScsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIGNoaWxkcmVuKTtcbiAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBsaW5rKTtcbiAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgcmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROb2RlQ2hpbGQoZmF0aGVyLCBjaGlsZHJlbikge1xuICBpZihjaGlsZHJlbikge1xuICAgIGlmKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7IC8vIENvbnRhaW5zIG1vcmUgdGhhbiBvbmUgY2hpbGQgaW4gQXJyYXlcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBmYXRoZXIuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmKGlzRWxlbWVudChjaGlsZHJlbikpIHsgLy8gQ29udGFpbnMganVzdCBvbmUgY2hpbGRcbiAgICAgIGZhdGhlci5hcHBlbmRDaGlsZChjaGlsZHJlbik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBZGROb2RlKHR5cGUsIGZhdGhlciwgY2xhc3NOYW1lID0gbnVsbCwgaWQgPSBudWxsLCBjb250ZW50ID0gbnVsbCwgY2hpbGRyZW4gPSBudWxsKSB7XG4gIC8vIEFwcGVuZCB0aGUgbmV3IG5vZGUgaW4gZmF0aGVyXG4gIGZhdGhlci5hcHBlbmRDaGlsZChjcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIGNoaWxkcmVuKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBZGROb2RlSW1nKGltZ0ZpbGVOYW1lLCBhbHQsIGZhdGhlciwgY2xhc3NOYW1lID0gbnVsbCwgaWQgPSBudWxsLCBjb250ZW50ID0gbnVsbCwgY2hpbGRyZW4gPSBudWxsKSB7XG4gIC8vIEFwcGVuZCB0aGUgbmV3IG5vZGUgaW4gZmF0aGVyXG4gIGZhdGhlci5hcHBlbmRDaGlsZChjcmVhdGVOb2RlSW1nKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIGNoaWxkcmVuKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVOb2RlSW1nKGltZ0ZpbGVOYW1lLCBmYXRoZXIsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGltZ05vZGUgPSBmYXRoZXIucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIGlmKGltZ05vZGUpIGltZ05vZGUuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9pbWFnZXMvJyArIGltZ0ZpbGVOYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IE1lbnVDb250cm9sbGVyIH0gZnJvbSAnQ29udHJvbGxlci9tZW51Q29udHJvbGxlci5qcydcbmltcG9ydCB7IEhvbWVDb250cm9sbGVyIH0gZnJvbSAnQ29udHJvbGxlci9ob21lQ29udHJvbGxlci5qcydcbmltcG9ydCB7IENvbnRhY3RDb250cm9sbGVyIH0gZnJvbSAnQ29udHJvbGxlci9jb250YWN0Q29udHJvbGxlci5qcydcbmltcG9ydCB7IHJlbW92ZUFsbENoaWxkTm9kZXMgfSBmcm9tICdVdGlsaXRpZXMvbm9kZU1hbmFnZXIuanMnXG5cbmV4cG9ydCBjb25zdCBwYWdlVHlwZSA9IHtcbiAgaG9tZTogJ0hvbWUnLFxuICBtZW51OiAnTWVudScsXG4gIGNvbnRhY3Q6ICdDb250YWN0Jyxcbn07XG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWVudUNvbnRyb2xsZXIgPSBuZXcgTWVudUNvbnRyb2xsZXIoKTtcbiAgICB0aGlzLmhvbWVDb250cm9sbGVyID0gbmV3IEhvbWVDb250cm9sbGVyKCk7XG4gICAgdGhpcy5jb250YWN0Q29udHJvbGxlciA9IG5ldyBDb250YWN0Q29udHJvbGxlcigpO1xuICB9XG4gICNzaG93UGFnZShlbGVtZW50cykge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMobWFpbkNvbnRlbnQpO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuICBjaGFuZ2VQYWdlKHBhZ2VOYW1lKSB7XG4gICAgbGV0IGVsZW1lbnRzID0gW107XG4gICAgc3dpdGNoIChwYWdlTmFtZSkge1xuICAgICAgY2FzZSBwYWdlVHlwZS5tZW51OlxuICAgICAgICBlbGVtZW50cyA9IHRoaXMubWVudUNvbnRyb2xsZXIucHJlcGFyZU1lbnUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHBhZ2VUeXBlLmNvbnRhY3Q6XG4gICAgICAgIGVsZW1lbnRzID0gdGhpcy5jb250YWN0Q29udHJvbGxlci5wcmVwYXJlQ29udGFjdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgcGFnZVR5cGUuaG9tZTpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVsZW1lbnRzID0gdGhpcy5ob21lQ29udHJvbGxlci5wcmVwYXJlSG9tZSh0aGlzLm1lbnVDb250cm9sbGVyLnByZXBhcmVQaXp6YVByZXZpZXcoKSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLiNzaG93UGFnZShlbGVtZW50cyk7XG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=