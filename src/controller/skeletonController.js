import 'Assets/images/svg/home.svg'
import 'Assets/images/svg/menu.svg'
import 'Assets/images/svg/contact.svg'
import 'Assets/images/svg/github.svg'
import { pageType, NavigationController } from 'Controller/navController.js'
import { createButton, createImageLinkButton } from 'Utilities/button.js'

export class SkeletonController {
  constructor() {
    this.navController = new NavigationController();
  }
  #createNavigationBar() {
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
    const divElem = document.createElement('div');
    // Fill text in button
    divElem.appendChild(createButton('Home', 'home.svg', btnCbEvent));
    divElem.appendChild(createButton('Menu', 'menu.svg', btnCbEvent));
    divElem.appendChild(createButton('Contact', 'contact.svg', btnCbEvent));
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
    footer.appendChild(createImageLinkButton('https://github.com/cel8', 'github.svg'));
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
    this.navController.changePage(pageType.home);
  }
}