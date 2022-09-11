import 'Assets/images/svg/home.svg'
import 'Assets/images/svg/menu.svg'
import 'Assets/images/svg/contact.svg'
import { pageType, NavigationController } from 'Controller/navController.js'

export class SkeletonController {
  constructor() {
    this.navController = new NavigationController();
  }
  #createButton(btnText, svgIcon = null) {
    const btn = document.createElement('button');
    const pElem = document.createElement('p');
    // Set up text element
    pElem.textContent = btnText;
    // Insert icon when exist
    if(svgIcon) {
      const imgElem = document.createElement('img');
      imgElem.setAttribute('src', svgIcon);
      imgElem.setAttribute('alt', btnText);
      imgElem.className = 'icon';
      btn.appendChild(imgElem);
    }
    btn.appendChild(pElem);
    btn.onclick = (e) => {
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
    // Setup btn properties
    btn.className = 'navButton';
    return btn;  
  }
  #createNavigationBar() {
    const divElem = document.createElement('div');
    // Fill text in button
    divElem.appendChild(this.#createButton('Home', './images/home.svg'));
    divElem.appendChild(this.#createButton('Menu', './images/menu.svg'));
    divElem.appendChild(this.#createButton('Contact', './images/contact.svg'));
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
    footer.appendChild(aElem);
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