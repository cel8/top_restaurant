import { MenuController } from 'Controller/menuController.js'
import { HomeController } from 'Controller/homeController.js'
import { ContactController } from 'Controller/contactController.js'
import { removeAllChildNodes } from 'Utilities/nodeManger.js'

export const pageType = {
  home: 'Home',
  menu: 'Menu',
  contact: 'Contact',
};

export class NavigationController {
  constructor() {
    this.menuController = new MenuController();
    this.homeController = new HomeController();
    this.contactController = new ContactController();
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