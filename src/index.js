import _ from 'lodash';
import './style/style.css'
import './assets/images/svg/home.svg'
import './assets/images/svg/menu.svg'
import './assets/images/svg/contact.svg'

// Global variable
const content = document.querySelector('#content');

function createButton(btnText, svgIcon = null) {
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
  // Setup btn properties
  btn.className = 'navButton';
  return btn;  
}

function createNavigationBar() {
  const divElem = document.createElement('div');
  // Fill text in button
  divElem.appendChild(createButton('Home', './images/home.svg'));
  divElem.appendChild(createButton('Menu', './images/menu.svg'));
  divElem.appendChild(createButton('Contact', './images/contact.svg'));
  // Set up class
  divElem.className = 'navigation';
  return divElem;
}

function createHeader(header) {
  const divElem = document.createElement('div');
  divElem.textContent = 'Ristorante';
  divElem.className = 'siteTitle'
  // Append child
  header.appendChild(divElem);
  header.appendChild(createNavigationBar());
}

function createFooter(footer) {
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

function createSkeleton() {
  // Create content elements
  const header = document.createElement('header');
  const main = document.createElement('main');
  const footer = document.createElement('footer');
  // Create elements
  createHeader(header);
  createFooter(footer);
  // Append 'em to body#content
  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);
}

createSkeleton();