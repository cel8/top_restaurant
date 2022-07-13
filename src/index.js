import _ from 'lodash';

const content = document.querySelector('#content');

function printMe() {
  console.log('I get called from index.js!');
}

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

content.appendChild(component());