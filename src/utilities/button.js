
export function createButton(btnText = '', svgIconFileName = null, cbEvent = undefined) {
  const btn = document.createElement('button');
  const pElem = btnText.length > 0 ? document.createElement('p') : null;
  // Insert icon when exist
  if(svgIconFileName) {
    const fileFullPath = './images/' + svgIconFileName;
    const imgElem = document.createElement('img');
    imgElem.setAttribute('src', fileFullPath);
    imgElem.setAttribute('alt', btnText);
    imgElem.className = 'icon';
    btn.appendChild(imgElem);
  }
  // Add text when contains something
  if(btnText.length > 0) {
    // Set up text element
    pElem.textContent = btnText;
    btn.appendChild(pElem);
  }
  btn.onclick = cbEvent;
  // Setup btn properties
  btn.className = 'navButton';
  return btn;  
}

export function createImageButton(svgIconFileName, cbEvent = undefined) {
  return createButton('', svgIconFileName, cbEvent)
}