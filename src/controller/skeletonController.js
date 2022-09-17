import 'Assets/images/svg/home.svg'
import 'Assets/images/svg/menu.svg'
import 'Assets/images/svg/contact.svg'
import 'Assets/images/svg/github.svg'
import { pageType, NavigationController } from 'Controller/navController.js'
import { createButton, createImageLinkButton } from 'Utilities/button.js'
import * as nodeManager from 'Utilities/nodeManager.js'

export class SkeletonController {
  constructor() {
    this.navController = new NavigationController();
  }
  #createNavigationButtons() {
    const buttons = [];
    const btnCbEvent = (e) => {
      const pElem = e.target.querySelector('p');
      if(pElem === null) return;
      let page;
      if(pElem.textContent === pageType.contact) {
        page = pageType.contact;
      } else if(pElem.textContent === pageType.menu) {
        page = pageType.menu;
      } else {
        page = pageType.home;
      }
      this.navController.changePage(page);
    }

    // Create node and fill text in button    
    buttons.push(createButton('Home', 'home.svg', btnCbEvent));
    buttons.push(createButton('Menu', 'menu.svg', btnCbEvent));
    buttons.push(createButton('Contact', 'contact.svg', btnCbEvent));
    return buttons;
  }
  #createHeader(header) {
    // Append children
    nodeManager.createAddNode('div', header, 'siteTitle', _, 'La Bella Napoli');
    nodeManager.createAddNode('div', header, 'navigation', _, _, this.#createNavigationButtons());
  }
  #createFooter(footer) {
    const curYear = new Date().getFullYear();
    // Append to footer
    nodeManager.createAddNode('p', footer, _, _, `Copyright © ${curYear} Alessandro Celotti`);
    nodeManager.addNodeChild(footer, createImageLinkButton('https://github.com/cel8', 'github.svg'));
  }
  #createMain(main) {
    nodeManager.createAddNode('div', main, 'main-content');
  }
  createSkeleton(content) {
    // Create content elements
    const header = nodeManager.createNode('header');
    const main   = nodeManager.createNode('main');
    const footer = nodeManager.createNode('footer');
    // Create elements
    this.#createHeader(header);
    this.#createMain(main);
    this.#createFooter(footer);
    // Append 'em to body#content
    nodeManager.addNodeChild(content, header);
    nodeManager.addNodeChild(content, main);
    nodeManager.addNodeChild(content, footer);
    this.navController.changePage(pageType.home);
  }
}