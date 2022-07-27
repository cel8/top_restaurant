import { DishContainer } from './../modules/dishContainer.js'
import { createMenu } from './../modules/menu.js'
// Assets data
import dataMenu from './../assets/data/menu.json';
import './../assets/images/pizza-margherita.jpg'
import './../assets/images/pizza-marinara.jpg'
import './../assets/images/pizza-capricciosa.jpg'
import './../assets/images/pizza-pomodorini-bufala.jpg'
import './../assets/images/calzone-ripieno-al-forno.jpg'
import './../assets/images/calzone-ripieno-fritto.jpg'

export class MenuController {
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
    return createMenu(divMenuContainer);
  }
}
