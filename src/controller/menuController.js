import { DishContainer } from 'Modules/dishContainer.js'
import { createPreviewContainer, changePizzaPreview, 
          createMenu, addDish, createDishContainer,
          addDishContainer, createMenuContainer } from 'Modules/menu.js'
import { createImageButton } from 'Utilities/button.js'
import { Clock } from 'Utilities/clock.js'
// Assets data
import dataMenu from 'Assets/data/menu.json';
import 'Assets/images/pizza-margherita.jpg'
import 'Assets/images/pizza-marinara.jpg'
import 'Assets/images/pizza-capricciosa.jpg'
import 'Assets/images/pizza-filetto.jpg'
import 'Assets/images/ripieno-al-forno.jpg'
import 'Assets/images/ripieno-fritto.jpg'
import 'Assets/images/svg/left-button.svg'
import 'Assets/images/svg/right-button.svg'
import 'Assets/images/svg/play-pause-button.svg'

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
      this.vectorPizzaImgPath.push('pizza-margherita.jpg');
      this.vectorPizzaImgPath.push('pizza-marinara.jpg');
      this.vectorPizzaImgPath.push('pizza-capricciosa.jpg');
      this.vectorPizzaImgPath.push('pizza-filetto.jpg');
      this.vectorPizzaImgPath.push('ripieno-al-forno.jpg');
      this.vectorPizzaImgPath.push('ripieno-fritto.jpg');
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
        changePizzaPreview(this.vectorPizzaImgPath[this.curIdxPizzaImg]);
      }
    }
    return createImageButton(iconName, btnCbEvent);
  }
  preparePizzaPreview() {
    let buttons = [];
    const changeImageCbEvent = () => {
      this.curIdxPizzaImg = (this.curIdxPizzaImg + 1) % this.vectorPizzaImgPath.length;
      changePizzaPreview(this.vectorPizzaImgPath[this.curIdxPizzaImg]);
    }
    // Automatic update
    if(!this.updatePreviewClock) {
      this.updatePreviewClock = new Clock('h:m:s', changeImageCbEvent, 5000);
    }
    // Create control buttons
    buttons.push(this.#loadPreviewButton('left-button.svg'));
    buttons.push(this.#loadPreviewButton('play-pause-button.svg'));
    buttons.push(this.#loadPreviewButton('right-button.svg'));
    // Create preview container
    const divPreviewContainer = createPreviewContainer(this.vectorPizzaImgPath[this.curIdxPizzaImg], buttons);
    return divPreviewContainer;
  }
  prepareMenu() {
    // Create the menu container
    const divMenuContainer = createMenuContainer();
    // For each dish container
    this.menu.forEach((dishContainer) => {
      // Create the dish container
      const divDishContainer = createDishContainer()
      // Add inside the container the dishes
      dishContainer.dishes.forEach((dish) => {
        addDish(divDishContainer, dish);
      });
      // Add inside the menu container the dish container
      addDishContainer(divMenuContainer, dishContainer.name, divDishContainer);
    });
    return createMenu(divMenuContainer);
  }
}
