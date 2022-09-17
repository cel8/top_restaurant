import * as nodeManager from 'Utilities/nodeManager.js'

export function createButton(btnText = '', svgIconFileName = null, cbEvent = undefined) {
  const btn = nodeManager.createNodeClass('button', 'navButton');
  // Insert icon when exist
  if(svgIconFileName) {
    nodeManager.createAddNodeImg(svgIconFileName, btnText, btn, 'icon');
  }
  // Add text when contains something
  if(btnText.length > 0) {
    nodeManager.createAddNode('p', btn, _, _, btnText);
  }
  // Add button event
  btn.onclick = cbEvent;
  return btn;  
}

export function createImageButton(svgIconFileName, cbEvent = undefined) {
  return createButton('', svgIconFileName, cbEvent)
}

export function createImageLinkButton(link, svgIconFileName) {
  const node = nodeManager.createNodeLink(link, _, _, _, 
    nodeManager.createNodeImg(svgIconFileName, 'imageLink', 'icon-link')
  );
  return node;
}