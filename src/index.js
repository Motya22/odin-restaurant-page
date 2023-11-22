import init from './init';
import home from './home';
import menu from './menu';
import contact from './contact';

init();

export default function switchTab(tabName) {
  const mainEl = document.querySelector('.main');

  mainEl.textContent = '';

  switch (tabName) {
    case 'Home':
      home();
      break;
    case 'Menu':
      menu();
      break;
    case 'Contact':
      contact();
      break;

    default:
      break;
  }
}
