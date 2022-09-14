function createPreviewPizzaContainer(divContainer, imageFileName) {
  const divPizzaContainer = document.createElement('div');
  const imgPizzaPreview = document.createElement('img');
  // Image preview
  imgPizzaPreview.setAttribute('src', imageFileName);
  imgPizzaPreview.setAttribute('alt', 'pizza preview');
  imgPizzaPreview.id = 'idPreviewPizza';
  // Add class
  divPizzaContainer.className = 'previewPizzaContainer';
  // Add image in pizza container
  divPizzaContainer.appendChild(imgPizzaPreview);
  divContainer.appendChild(divPizzaContainer);
}

function createPreviewControl(divContainer, buttons = null) {
  if((buttons) || (buttons.length > 0)) {
    // Create container control for preview
    const divContainerCtrl = document.createElement('div');
    divContainerCtrl.className = 'previewContainerCtrl';
    // Add buttons inside container
    buttons.forEach(button => {
      divContainerCtrl.appendChild(button);
    });
    // Append control container to father
    divContainer.appendChild(divContainerCtrl);
  }
}

export function createPreviewContainer(imageFileName, buttons = null) {
  const divPreviewContainer = document.createElement('div');
  divPreviewContainer.className = 'previewContainer';
  // Fill preview container
  createPreviewPizzaContainer(divPreviewContainer, imageFileName);
  createPreviewControl(divPreviewContainer, buttons);
  return divPreviewContainer;
}

export function addDish(container, dish) {
  const pName = document.createElement('p');
  const pPrice = document.createElement('p');
  const pDescription = document.createElement('p');
  pName.textContent = dish.name;
  pPrice.textContent = dish.price;
  pDescription.textContent = dish.description;
  // Add dish inside the container
  container.appendChild(pName);
  container.appendChild(pPrice);
  container.appendChild(pDescription);
}

export function createDishContainer() {
  const gridDishes = document.createElement('div');
  gridDishes.className = 'dishContainer';
  return gridDishes;
}

export function addDishContainer(menuContainer, dishContainerName, gridDishContainer) {
  const pContainerName = document.createElement('p');
  // Setup the container
  pContainerName.textContent = dishContainerName;
  pContainerName.className = 'dishContainerName';
  // Add in menu
  menuContainer.appendChild(pContainerName);
  menuContainer.appendChild(gridDishContainer)
}

export function createMenuContainer() {
  const divMenuList = document.createElement('div');
  divMenuList.className = 'menuList'
  return divMenuList;
}

export function createMenu(menuList) {
  let elements = [];
  elements.push(menuList);
  return elements;
}

export function changePizzaPreview(imageFileName) {
  const imgPizzaPreview = document.querySelector('#idPreviewPizza');
  if(imgPizzaPreview) imgPizzaPreview.setAttribute('src', imageFileName);
}