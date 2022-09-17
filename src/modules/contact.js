import 'Assets/images/map.png'
import * as nodeManager from 'Utilities/nodeManager.js'
import { createButton } from 'Utilities/button.js'

function createInfoTextData(fatherDiv, text, title = false) {
  nodeManager.createAddNode('p', fatherDiv, title ? 'contactTitle' : 'contactInfo', null, text);
}

function createInfo() {
  // Create HTML elements text content
  const divContact = nodeManager.createNode('div');
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
  const divLocation = nodeManager.createNode('div');
  createInfoTextData(divLocation, 'WHERE WE ARE', true);
  nodeManager.createAddNodeImg('map.png', 'mapLocation', divLocation);
  return divLocation;
}

export function createContact() {
  let elements = [];
  const divMain = nodeManager.createNodeClass('div', 'gridContact');
  // Add to main grid
  nodeManager.addNodeChild(divMain, createInfo());
  nodeManager.addNodeChild(divMain, createLocation());
  nodeManager.addNodeChild(divMain, createButton('BOOK A TABLE', null, (_) => {
    window.open('https://github.com/cel8');
  }));
  elements.push(divMain);
  return elements;
}