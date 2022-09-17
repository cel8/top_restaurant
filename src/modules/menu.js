import * as nodeManager from 'Utilities/nodeManager.js'

function createPreviewPizzaContainer(divContainer, imageFileName) {
  // Add image in pizza container and inside div container
  nodeManager.addNodeChild(divContainer, 
    nodeManager.createNode('div', 'previewPizzaContainer', null, null, 
      nodeManager.createNodeImgID(imageFileName, 'preview', 'idPreviewPizza')
    )
  );
}

function createPreviewControl(divContainer, buttons = null) {
  if((buttons) || (buttons.length > 0)) {
    // Create container control for preview
    nodeManager.createAddNode('div', divContainer, 'previewContainerCtrl', null, null, buttons);
  }
}

export function createPreviewContainer(imageFileName, buttons = null) {
  // Fill preview container image and controls
  const divPreviewContainer = nodeManager.createNodeClass('div', 'previewContainer');
  createPreviewPizzaContainer(divPreviewContainer, imageFileName);
  createPreviewControl(divPreviewContainer, buttons);
  return divPreviewContainer;
}

export function addDish(container, dish) {
  const div = nodeManager.createNodeClass('div', 'dish');
  const divDish = nodeManager.createNode('div');
  nodeManager.createAddNode('p', divDish, null, null, dish.name);
  nodeManager.createAddNode('p', divDish, null, null, dish.description);
  nodeManager.addNodeChild(div, divDish);
  nodeManager.createAddNode('p', div, null, null, dish.price);
  nodeManager.addNodeChild(container, div);
}

export function createDishContainer() {
  return nodeManager.createNodeClass('div', 'dishContainer');
}

export function addDishContainer(menuContainer, dishContainerName, gridDishContainer) {
  nodeManager.createAddNode('p', menuContainer, 'dishContainerName', null, dishContainerName);
  nodeManager.addNodeChild(menuContainer, gridDishContainer);
}

export function createMenuContainer() {
  return nodeManager.createNodeClass('div', 'menuList');
}

export function createMenu(menuList) {
  let elements = [];
  elements.push(menuList);
  return elements;
}

export function changePizzaPreview(imageFileName) {
  nodeManager.updateNodeImg(imageFileName, document, '#idPreviewPizza');
}