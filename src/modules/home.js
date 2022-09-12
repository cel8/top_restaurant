export function createHome(imgPreviewContainer) {
  let elements = [];
  const menu = document.createElement('p');
  menu.textContent = 'miao';
  elements.push(menu);
  elements.push(imgPreviewContainer);
  return elements;
}