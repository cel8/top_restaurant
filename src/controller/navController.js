import { createHome } from './../modules/home.js'
import { createMenu } from './../modules/menu.js'
import { createContact } from './../modules/contact.js'
import { MenuController } from './menuController.js'

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

export const pageType = {
  home: 'Home',
  menu: 'Menu',
  contact: 'Contact',
};

export class NavigationController {
  constructor() {
    this.menuController = new MenuController();
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
        elements = createContact();
        break;
      case pageType.home:
      default:
        elements = createHome();
        break;
    }
    this.#showPage(elements);
  }
}