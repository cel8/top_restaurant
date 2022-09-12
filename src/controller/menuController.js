import { DishContainer } from 'Modules/dishContainer.js'
import { createMenu } from 'Modules/menu.js'
import { createImageButton } from 'Utilities/button.js'
import { Clock } from 'Utilities/clock.js'
// Assets data
import dataMenu from 'Assets/data/menu.json';
import 'Assets/images/pizza-margherita.jpg'
import 'Assets/images/pizza-marinara.jpg'
import 'Assets/images/pizza-capricciosa.jpg'
import 'Assets/images/pizza-pomodorini-bufala.jpg'
import 'Assets/images/calzone-ripieno-al-forno.jpg'
import 'Assets/images/calzone-ripieno-fritto.jpg'
import 'Assets/images/svg/left-button.svg'
import 'Assets/images/svg/right-button.svg'

export class MenuController {
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
    dataMenu.map((elem) => {
      const dishContainer = new DishContainer(elem['dish-name']);
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
    return createImageButton(isRight ? 'right-button.svg' : 'left-button.svg', changeImageCbEvent);
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
      this.updatePreviewClock = new Clock('h:m:s', changeImageCbEvent, 5000);
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
    return createMenu(divMenuContainer);
  }
}
