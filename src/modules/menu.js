
function createMenuList() {
}

export function createMenu(menuList) {
  let elements = [];
  
  const menu = document.createElement('p');
  menu.textContent = 'ciao';
  elements.push(menu);
  elements.push(menuList);
  return elements;
}