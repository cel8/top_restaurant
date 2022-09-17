import * as nodeManager from 'Utilities/nodeManager.js'

function createHomeTitle() {
  return nodeManager.createNodeContent('p', 'TRADITION AND INNOVATION', 'homeTitle');
}

function createHomeDescription() {
  const descriptions = [];
  descriptions.push(nodeManager.createNodeContent('p', 'A lifelong passion for the tradition of Neapolitan pizza and it’s true flavours.'));
  descriptions.push(nodeManager.createNodeContent('p', 'A dough leavened for 24 hours, but also many delicious and appetizing proposals with the specialties of our chip shop.'));
  const divDescription = nodeManager.createNode('div', 'homeDescription', null, null, descriptions);
  return divDescription;
}

export function createHome(imgPreviewContainer) {
  let elements = [];
  elements.push(createHomeTitle());
  elements.push(createHomeDescription());
  elements.push(imgPreviewContainer);
  return elements;
}