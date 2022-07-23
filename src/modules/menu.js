import './../assets/images/pizza-margherita.jpg'
import './../assets/images/pizza-marinara.jpg'
import './../assets/images/pizza-capricciosa.jpg'
import './../assets/images/pizza-pomodorini-bufala.jpg'
import './../assets/images/calzone-ripieno-al-forno.jpg'
import './../assets/images/calzone-ripieno-fritto.jpg'

const vectorPizzaImgPath = [];

function loadPizzaVector() {
  if(0 === vectorPizzaImgPath.length()) {
    vectorPizzaImgPath.push('./image/pizza-margherita.jpg');
    vectorPizzaImgPath.push('./image/pizza-marinara.jpg');
    vectorPizzaImgPath.push('./image/pizza-capricciosa.jpg');
    vectorPizzaImgPath.push('./image/pizza-pomodorini-bufala.jpg');
    vectorPizzaImgPath.push('./image/calzone-ripieno-al-forno.jpg');
    vectorPizzaImgPath.push('./image/calzone-ripieno-fritto.jpg');
  }
}

function createMenuList() {
}

export function createMenu() {
  let elements = [];
  // Load pizza menu image path
  loadPizzaVector();
  // 
  const menu = document.createElement('p');
  menu.textContent = 'ciao';
  elements.push(menu);
  return elements;
}